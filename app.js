// app.js
const STORAGE_KEY = "curso_web_progress_v1";

const state = {
  expandedModules: new Set(),
  currentLessonId: null,
  progress: {
    doneLessons: {},
    checklist: {},
    quizAnswers: {},
  },
};

function loadProgress() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) return;
  try {
    state.progress = JSON.parse(saved);
  } catch {
    // ignore
  }
}

function saveProgress() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.progress));
}

function flatLessons() {
  const all = [];
  for (const mod of COURSE.modules) {
    for (const lesson of mod.lessons) {
      all.push({ module: mod, lesson });
    }
  }
  return all;
}

function getLessonById(lessonId) {
  for (const mod of COURSE.modules) {
    const found = mod.lessons.find((l) => l.id === lessonId);
    if (found) return { module: mod, lesson: found };
  }
  return null;
}

function setVisible(el, visible) {
  el.hidden = !visible;
}

function renderNav(filterText = "") {
  const nav = document.getElementById("courseNav");
  nav.innerHTML = "";

  const q = filterText.trim().toLowerCase();
  let resultsCount = 0;

  for (const mod of COURSE.modules) {
    const moduleEl = document.createElement("div");
    moduleEl.className = "module";

    const title = document.createElement("div");
    title.className = "module-title";
    const left = document.createElement("div");
    left.textContent = mod.title;
    const right = document.createElement("div");
    right.className = "meta";
    right.textContent = `${mod.lessons.length} aulas`;
    title.append(left, right);

    const lessonsWrap = document.createElement("div");
    lessonsWrap.className = "module-lessons";

    let showModule = state.expandedModules.has(mod.id);

    title.addEventListener("click", () => {
      if (state.expandedModules.has(mod.id))
        state.expandedModules.delete(mod.id);
      else state.expandedModules.add(mod.id);
      renderNav(document.getElementById("searchInput").value || "");
    });

    let anyLessonVisible = false;

    for (const lesson of mod.lessons) {
      const lessonText = `${lesson.title} ${lesson.tags?.join(" ") || ""} ${
        lesson.level || ""
      }`.toLowerCase();
      const match = q === "" || lessonText.includes(q);

      if (!match) continue;
      anyLessonVisible = true;
      resultsCount++;

      const item = document.createElement("div");
      item.className = "lesson-link";
      if (state.progress.doneLessons[lesson.id]) item.classList.add("done");

      const name = document.createElement("div");
      name.textContent = lesson.title;

      const meta = document.createElement("div");
      meta.className = "meta";
      meta.textContent = `${lesson.level || ""} • ${
        lesson.duration || ""
      }`.trim();

      item.append(name, meta);
      item.addEventListener("click", () => openLesson(lesson.id));

      lessonsWrap.appendChild(item);
    }

    if (!anyLessonVisible) {
      // hide module entirely if searching and none matches
      if (q !== "") continue;
    }

    moduleEl.appendChild(title);

    // default expand first module
    if (state.expandedModules.size === 0 && mod.id === COURSE.modules[0].id)
      showModule = true;

    if (showModule) moduleEl.appendChild(lessonsWrap);

    nav.appendChild(moduleEl);
  }

  if (q) {
    searchInfo.innerHTML = `
      <strong>${resultsCount} resultado(s)</strong> para <code>"${escapeHtml(filterText)}"</code>
      <br/>
      <small>Busca por título, nível, tags e duração</small>
    `;
  } else {
    searchInfo.innerHTML = `
      💡 <strong>Dica:</strong> busque por:
      <br/>
      • Tópicos: <code>HTML</code>, <code>CSS</code>, <code>SQL</code>, <code>arrays</code>
      <br/>
      • Nível: <code>Iniciante</code>, <code>Intermediário</code>
      <br/>
      • Tags: <code>DOM</code>, <code>flexbox</code>, <code>localStorage</code>
    `;
  }
}

function renderProgress() {
  const all = flatLessons();
  const total = all.length;
  const done = all.filter(
    (x) => !!state.progress.doneLessons[x.lesson.id],
  ).length;

  const pct = total === 0 ? 0 : Math.round((done / total) * 100);

  document.getElementById("progressBar").style.width = `${pct}%`;
  const topBar = document.getElementById("topProgress");
  if (topBar) topBar.style.width = `${pct}%`;
  document.getElementById("progressText").textContent = `${pct}%`;
  document.getElementById("progressCount").textContent =
    `${done}/${total} aulas`;

  renderBadges(done, total);
  renderModuleShowcase();
}

function renderModuleShowcase() {
  const wrap = document.getElementById("moduleCards");
  if (!wrap) return;
  wrap.innerHTML = "";

  for (const mod of COURSE.modules) {
    const total = mod.lessons.length;
    const done = mod.lessons.filter(
      (l) => !!state.progress.doneLessons[l.id],
    ).length;
    const pct = total === 0 ? 0 : Math.round((done / total) * 100);

    const card = document.createElement("div");
    card.className = "module-card";
    card.innerHTML = `
      <div class="module-card-title">${escapeHtml(mod.title)}</div>
      <div class="module-card-desc">${escapeHtml(mod.description || "")}</div>
      <div class="module-card-footer">
        <div class="module-card-meta">${done}/${total} aulas • ${pct}%</div>
        <div class="module-card-progress">
          <div class="module-card-bar" style="width:${pct}%"></div>
        </div>
        <div class="module-card-actions">
          <button class="btn ghost" data-action="open">Abrir módulo</button>
          <button class="btn" data-action="start">Começar</button>
        </div>
      </div>
    `;

    card.querySelector('[data-action="open"]').onclick = () => {
      state.expandedModules.add(mod.id);
      renderNav(document.getElementById("searchInput").value || "");
      openLesson(mod.lessons[0].id);
    };

    card.querySelector('[data-action="start"]').onclick = () => {
      openLesson(mod.lessons[0].id);
    };

    wrap.appendChild(card);
  }
}

function renderBadges(done, total) {
  const container = document.getElementById("badges");
  container.innerHTML = "";

  const badges = [];
  const mastered = state.progress.mastered
    ? Object.keys(state.progress.mastered).length
    : 0;
  if (done >= 1) badges.push({ label: "Primeira aula ✅", kind: "good" });
  if (done >= 5) badges.push({ label: "Ritmo bom (5+) 🔥", kind: "good" });
  if (done >= 10) badges.push({ label: "Consistente (10+) 💪", kind: "good" });
  if (mastered >= 1)
    badges.push({ label: `Quiz 80%+ (${mastered}) 🧠`, kind: "good" });
  if (done >= Math.ceil(total / 2))
    badges.push({ label: "Meio caminho 🧭", kind: "warn" });
  if (done === total && total > 0)
    badges.push({ label: "Curso concluído 🏁", kind: "good" });

  if (badges.length === 0)
    badges.push({ label: "Comece pela Aula 1 👇", kind: "warn" });

  for (const b of badges) {
    const el = document.createElement("div");
    el.className = `badge ${b.kind || ""}`;
    el.textContent = b.label;
    container.appendChild(el);
  }
}

// ===== NOVAS FUNÇÕES PEDAGÓGICAS =====

function renderLearningOutcomes(lesson) {
  const el = document.getElementById("lessonOutcomes");
  if (!el) return;

  if (lesson.learningOutcomes && lesson.learningOutcomes.length > 0) {
    let html = "<h3>📚 O que você aprenderá</h3><ul>";
    for (const outcome of lesson.learningOutcomes) {
      html += `<li>${escapeHtml(outcome)}</li>`;
    }
    html += "</ul>";
    el.innerHTML = html;
    el.style.display = "block";
  } else {
    el.style.display = "none";
  }
}

function renderRealWorldContext(lesson) {
  const el = document.getElementById("lessonContext");
  if (!el) return;

  if (lesson.realWorldContext) {
    const ctx = lesson.realWorldContext;
    let html = "<h3>🌍 Contexto do mundo real</h3>";
    if (ctx.description) {
      html += `<p>${escapeHtml(ctx.description)}</p>`;
    }
    if (ctx.examples && ctx.examples.length > 0) {
      html += "<h4>Exemplos:</h4><ul>";
      for (const ex of ctx.examples) {
        html += `<li>${escapeHtml(ex)}</li>`;
      }
      html += "</ul>";
    }
    el.innerHTML = html;
    el.style.display = "block";
  } else {
    el.style.display = "none";
  }
}

function renderDifficultyGauge(lesson) {
  const el = document.getElementById("lessonDifficulty");
  if (!el) return;

  const diffMap = { Iniciante: 1, Intermediário: 2, Avançado: 3 };
  const level = lesson.level || "Iniciante";
  const bars = diffMap[level] || 1;

  let html = "<h3>🎯 Dificuldade</h3><div class='difficulty-gauge'>";
  for (let i = 1; i <= 3; i++) {
    const filled = i <= bars ? "filled" : "empty";
    const classNameStr = `difficulty-bar ${filled} ${filled === "filled" ? `filled-${level.toLowerCase()}` : ""}`;
    html += `<div class='${classNameStr}'></div>`;
  }
  html += `<span class='difficulty-label'>${level}</span></div>`;

  el.innerHTML = html;
  el.style.display = "block";
}

function renderCommonMistakes(lesson) {
  const el = document.getElementById("lessonMistakesWrap");
  if (!el) return;

  if (lesson.commonMistakes && lesson.commonMistakes.length > 0) {
    const mistakesEl = document.getElementById("lessonMistakes");
    mistakesEl.innerHTML = "";

    for (const mistake of lesson.commonMistakes) {
      const html = `
        <div class="common-mistake">
          <div>
            <div class="mistake-label">❌ ${escapeHtml(mistake.title)}</div>
            <div class="mistake-code mistake-wrong"><pre><code>${escapeHtml(mistake.wrong)}</code></pre></div>
          </div>
          <div>
            <div class="mistake-label">✅ Correto</div>
            <div class="mistake-code mistake-right"><pre><code>${escapeHtml(mistake.right)}</code></pre></div>
          </div>
        </div>
        <div class="mistake-explanation">
          <strong>Por quê?</strong> ${escapeHtml(mistake.explanation)}
        </div>
      `;
      mistakesEl.innerHTML += html;
    }

    el.style.display = "block";
  } else {
    el.style.display = "none";
  }
}

function renderPrerequisites(lesson) {
  const el = document.getElementById("lessonPrerequisitesWrap");
  if (!el) return;

  const preReq = lesson.prerequisites && lesson.prerequisites.length > 0;
  const nextRec = lesson.nextRecommended && lesson.nextRecommended.length > 0;

  if (!preReq && !nextRec) {
    el.style.display = "none";
    return;
  }

  const preqEl = document.getElementById("lessonPrerequisites");
  let html = "";

  if (preReq) {
    html += "<h3>📋 Pré-requisitos</h3><div class='prerequisites-list'>";
    for (const preqId of lesson.prerequisites) {
      const found = getLessonById(preqId);
      if (found) {
        const isComplete = state.progress.doneLessons[preqId] ? "✅" : "⭕";
        html += `<div class='prerequisite-item' onclick='openLesson("${preqId}")'>${isComplete} ${escapeHtml(found.lesson.title)}</div>`;
      }
    }
    html += "</div>";
  }

  if (nextRec) {
    html +=
      "<h3>➡️ Próximos passos recomendados</h3><div class='prerequisites-list'>";
    for (const nextId of lesson.nextRecommended) {
      const found = getLessonById(nextId);
      if (found) {
        html += `<div class='next-step-item' onclick='openLesson("${nextId}")'>→ ${escapeHtml(found.lesson.title)}</div>`;
      }
    }
    html += "</div>";
  }

  preqEl.innerHTML = html;
  el.style.display = "block";
}

// ===== FIM FUNÇÕES PEDAGÓGICAS =====

function openLesson(lessonId) {
  const found = getLessonById(lessonId);
  if (!found) return;

  state.currentLessonId = lessonId;

  // show lesson view, hide hero
  setVisible(document.getElementById("hero"), false);
  setVisible(document.getElementById("moduleShowcase"), false);
  setVisible(document.getElementById("lessonView"), true);

  const { module, lesson } = found;

  document.getElementById("crumbs").textContent = module.title;
  document.getElementById("lessonTitle").textContent = lesson.title;

  const meta = [];
  if (lesson.level) meta.push(lesson.level);
  if (lesson.duration) meta.push(lesson.duration);
  if (lesson.tags?.length) meta.push(`Tags: ${lesson.tags.join(", ")}`);
  document.getElementById("lessonMeta").textContent = meta.join(" • ");

  document.getElementById("lessonTip").textContent =
    lesson.tip || "Faça pequenos passos e pratique bastante.";

  // ===== CHAMAR FUNÇÕES PEDAGÓGICAS =====
  renderLearningOutcomes(lesson);
  renderRealWorldContext(lesson);
  renderDifficultyGauge(lesson);
  renderCommonMistakes(lesson);
  renderPrerequisites(lesson);
  // ===== FIM FUNÇÕES PEDAGÓGICAS =====

  // content (markdown)
  const contentEl = document.getElementById("lessonContent");
  if (typeof marked !== "undefined" && marked.parse) {
    contentEl.innerHTML = marked.parse(lesson.content || "");
  } else {
    // Fallback: display content as plain HTML/text if marked is not available
    contentEl.innerHTML = lesson.content
      ? lesson.content.replace(/\n/g, "<br>")
      : "";
  }
  // summary 30s
  const summaryWrap = document.getElementById("lessonSummaryWrap");
  const summaryEl = document.getElementById("lessonSummary");
  if (lesson.summary30s) {
    summaryEl.innerHTML = `<p>${escapeHtml(lesson.summary30s)}</p>`;
    setVisible(summaryWrap, true);
  } else {
    summaryEl.innerHTML = "";
    setVisible(summaryWrap, false);
  }

  // why it matters
  const whyWrap = document.getElementById("lessonWhyWrap");
  const whyEl = document.getElementById("lessonWhy");
  if (lesson.whyItMatters) {
    whyEl.innerHTML = `<p>${escapeHtml(lesson.whyItMatters)}</p>`;
    setVisible(whyWrap, true);
  } else {
    whyEl.innerHTML = "";
    setVisible(whyWrap, false);
  }

  // mind map
  const mindMapWrap = document.getElementById("lessonMindMapWrap");
  const mindMapEl = document.getElementById("lessonMindMap");
  mindMapEl.innerHTML = "";
  if (lesson.mindMap && lesson.mindMap.length) {
    const ul = document.createElement("ul");
    for (const item of lesson.mindMap) {
      const li = document.createElement("li");
      li.textContent = item;
      ul.appendChild(li);
    }
    mindMapEl.appendChild(ul);
    setVisible(mindMapWrap, true);
  } else if (lesson.mindMapSvg) {
    mindMapEl.innerHTML = lesson.mindMapSvg;
    setVisible(mindMapWrap, true);
  } else {
    setVisible(mindMapWrap, false);
  }

  // micro exercises
  const microWrap = document.getElementById("lessonMicroWrap");
  const microEl = document.getElementById("lessonMicro");
  microEl.innerHTML = "";
  if (lesson.microExercises && lesson.microExercises.length) {
    for (const m of lesson.microExercises) {
      const card = document.createElement("div");
      card.className = "micro-ex";
      card.innerHTML = `
        <div class="micro-title">${escapeHtml(m.title || "Micro‑exercício")}</div>
        <div class="micro-body">${escapeHtml(m.prompt || "")}</div>
      `;
      microEl.appendChild(card);
    }
    setVisible(microWrap, true);
  } else {
    setVisible(microWrap, false);
  }

  // images
  const imagesWrap = document.getElementById("lessonImagesWrap");
  const imagesEl = document.getElementById("lessonImages");
  imagesEl.innerHTML = "";
  if (lesson.images && lesson.images.length) {
    for (const img of lesson.images) {
      const card = document.createElement("div");
      card.className = "img-card";
      if (img.svg) {
        card.innerHTML = img.svg;
      } else if (img.src) {
        const el = document.createElement("img");
        el.src = img.src;
        el.alt = img.caption || "Imagem";
        card.appendChild(el);
      }
      if (img.caption) {
        const cap = document.createElement("div");
        cap.className = "img-caption";
        cap.textContent = img.caption;
        card.appendChild(cap);
      }
      imagesEl.appendChild(card);
    }
    setVisible(imagesWrap, true);
  } else {
    const auto = buildAutoDiagram(lesson);
    if (auto) {
      const card = document.createElement("div");
      card.className = "img-card";
      card.innerHTML = auto.svg;
      if (auto.caption) {
        const cap = document.createElement("div");
        cap.className = "img-caption";
        cap.textContent = auto.caption;
        card.appendChild(cap);
      }
      imagesEl.appendChild(card);
      setVisible(imagesWrap, true);
    } else {
      setVisible(imagesWrap, false);
    }
  }

  // examples
  const exWrap = document.getElementById("lessonExamplesWrap");
  const exEl = document.getElementById("lessonExamples");
  exEl.innerHTML = "";
  if (lesson.examples?.length) {
    for (const ex of lesson.examples) {
      const box = document.createElement("div");
      box.className = "example";
      box.innerHTML = `
        <div class="ex-title">${escapeHtml(ex.title || "Exemplo")}</div>
        <div class="ex-desc">${escapeHtml(ex.description || "")}</div>
        <pre><code>${escapeHtml(ex.code || "")}</code></pre>
      `;
      exEl.appendChild(box);
    }
    setVisible(exWrap, true);
  } else {
    setVisible(exWrap, false);
  }

  // exercises
  const exsWrap = document.getElementById("lessonExercisesWrap");
  const exsEl = document.getElementById("lessonExercises");
  exsEl.innerHTML = "";
  if (lesson.exercises?.length) {
    for (const [idx, ex] of lesson.exercises.entries()) {
      const box = document.createElement("div");
      box.className = "exercise";
      box.innerHTML = `
        <div class="ex-head">
          <div>
            <div class="ex-title">${escapeHtml(
              ex.title || `Exercício ${idx + 1}`,
            )}</div>
            <div class="ex-level">${escapeHtml(ex.level || "")}</div>
          </div>
        </div>
        <div class="ex-body">${escapeHtml(ex.prompt || "")}</div>
        <div class="ex-actions">
          <button class="btn ghost" data-action="toggle-solution">Ver solução</button>
          <button class="btn ghost" data-action="copy-solution">Copiar solução</button>
        </div>
        <div class="solution">
          <div class="small">Solução sugerida:</div>
          <pre><code>${escapeHtml(ex.solution || "")}</code></pre>
        </div>
      `;

      const btnToggle = box.querySelector('[data-action="toggle-solution"]');
      const btnCopy = box.querySelector('[data-action="copy-solution"]');
      const sol = box.querySelector(".solution");

      btnToggle.addEventListener("click", () => {
        sol.classList.toggle("show");
      });

      btnCopy.addEventListener("click", async () => {
        try {
          await navigator.clipboard.writeText(ex.solution || "");
          btnCopy.textContent = "Copiado ✅";
          setTimeout(() => (btnCopy.textContent = "Copiar solução"), 1200);
        } catch {
          alert("Não foi possível copiar. Copie manualmente.");
        }
      });

      exsEl.appendChild(box);
    }
    setVisible(exsWrap, true);
  } else {
    setVisible(exsWrap, false);
  }

  // project
  const projWrap = document.getElementById("lessonProjectWrap");
  const projEl = document.getElementById("lessonProject");
  projEl.innerHTML = "";
  if (lesson.project) {
    const p = lesson.project;
    projEl.innerHTML = `
      <div class="md">
        <p><strong>Objetivo:</strong> ${escapeHtml(p.goal || "")}</p>
        ${
          p.steps?.length
            ? `<h3>Passo a passo</h3><ul>${p.steps
                .map((s) => `<li>${escapeHtml(s)}</li>`)
                .join("")}</ul>`
            : ""
        }
        ${
          p.starterCode
            ? `<h3>Starter code</h3><pre><code>${escapeHtml(
                p.starterCode,
              )}</code></pre>`
            : ""
        }
        ${
          p.solution
            ? `<h3>Solução</h3><pre><code>${escapeHtml(
                p.solution,
              )}</code></pre>`
            : ""
        }
      </div>
    `;
    setVisible(projWrap, true);
  } else {
    setVisible(projWrap, false);
  }

  // checklist
  renderChecklist(lesson);

  // quiz
  renderQuiz(lesson);

  // tabs
  setupLessonTabs();

  // prev/next buttons
  wirePrevNext(lessonId);

  // done button state
  const doneBtn = document.getElementById("btnDone");
  doneBtn.textContent = state.progress.doneLessons[lessonId]
    ? "Concluída ✅"
    : "Marcar como concluída";
  doneBtn.disabled = !!state.progress.doneLessons[lessonId];

  // refresh nav and progress visuals
  renderNav(document.getElementById("searchInput").value || "");
  renderProgress();

  // remember last opened
  state.progress.lastLessonId = lessonId;
  saveProgress();

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderChecklist(lesson) {
  const wrap = document.getElementById("lessonChecklist");
  wrap.innerHTML = "";
  const items = lesson.checklist || [];
  const lessonKey = lesson.id;

  if (!state.progress.checklist[lessonKey])
    state.progress.checklist[lessonKey] = {};

  items.forEach((text, idx) => {
    const row = document.createElement("label");
    row.className = "check-item";
    const cb = document.createElement("input");
    cb.type = "checkbox";
    cb.checked = !!state.progress.checklist[lessonKey][idx];
    cb.addEventListener("change", () => {
      state.progress.checklist[lessonKey][idx] = cb.checked;
      saveProgress();
    });

    const span = document.createElement("span");
    span.textContent = text;

    row.append(cb, span);
    wrap.appendChild(row);
  });
}

function renderQuiz(lesson) {
  const wrap = document.getElementById("lessonQuizWrap");
  const box = document.getElementById("lessonQuiz");
  const result = document.getElementById("quizResult");
  result.textContent = "";
  box.innerHTML = "";

  if (!lesson.quiz?.length) {
    setVisible(wrap, false);
    return;
  }

  setVisible(wrap, true);

  const lessonId = lesson.id;
  if (!state.progress.quizAnswers[lessonId])
    state.progress.quizAnswers[lessonId] = {};

  lesson.quiz.forEach((q, qi) => {
    const qEl = document.createElement("div");
    qEl.className = "quiz-q";
    qEl.innerHTML = `<div class="q-title">${escapeHtml(q.q)}</div>`;

    q.options.forEach((opt, oi) => {
      const id = `${lessonId}_${qi}_${oi}`;
      const label = document.createElement("label");
      label.innerHTML = `
        <input type="radio" name="${lessonId}_${qi}" id="${id}">
        ${escapeHtml(opt)}
      `;
      const radio = label.querySelector("input");
      radio.checked = state.progress.quizAnswers[lessonId][qi] === oi;
      radio.addEventListener("change", () => {
        state.progress.quizAnswers[lessonId][qi] = oi;
        saveProgress();
      });
      qEl.appendChild(label);
    });

    box.appendChild(qEl);
  });

  document.getElementById("btnGradeQuiz").onclick = () => gradeQuiz(lesson);
}

function setupLessonTabs() {
  const tabsWrap = document.getElementById("lessonTabs");
  if (!tabsWrap) return;

  const buttons = Array.from(tabsWrap.querySelectorAll(".tab-btn"));
  const sections = Array.from(
    document.querySelectorAll(".lesson-left .tab-section"),
  );

  // show only tabs that have visible sections
  buttons.forEach((btn) => {
    const tab = btn.getAttribute("data-tab");
    const hasVisible = sections.some(
      (s) => s.getAttribute("data-tab") === tab && !s.hidden,
    );
    btn.style.display = hasVisible ? "inline-flex" : "none";
  });

  const firstVisibleBtn = buttons.find((b) => b.style.display !== "none");
  const activeTab = firstVisibleBtn
    ? firstVisibleBtn.getAttribute("data-tab")
    : "content";

  function setActive(tab) {
    buttons.forEach((b) => {
      b.classList.toggle("active", b.getAttribute("data-tab") === tab);
    });
    sections.forEach((s) => {
      const match = s.getAttribute("data-tab") === tab;
      s.classList.toggle("tab-hidden", !match);
    });
  }

  buttons.forEach((btn) => {
    btn.onclick = () => setActive(btn.getAttribute("data-tab"));
  });

  setActive(activeTab);
}

function gradeQuiz(lesson) {
  const lessonId = lesson.id;
  const answers = state.progress.quizAnswers[lessonId] || {};
  let correct = 0;
  let total = lesson.quiz.length;
  const missed = [];

  lesson.quiz.forEach((q, qi) => {
    const chosen = answers[qi];
    if (chosen === q.answerIndex) correct++;
    else missed.push(qi + 1);
  });

  const pct = Math.round((correct / total) * 100);
  const result = document.getElementById("quizResult");

  let msg = `Você acertou ${correct}/${total} (${pct}%).`;
  if (missed.length) msg += ` Questões para revisar: ${missed.join(", ")}.`;
  result.textContent = msg;

  // small gamification: if >= 80% consider lesson "mastered" (badge-like)
  if (pct >= 80) {
    state.progress.mastered = state.progress.mastered || {};
    state.progress.mastered[lessonId] = true;
    saveProgress();
    renderProgress();
  }
}

function wirePrevNext(currentId) {
  const all = flatLessons().map((x) => x.lesson.id);
  const idx = all.indexOf(currentId);

  const prevBtn = document.getElementById("btnPrev");
  const nextBtn = document.getElementById("btnNext");

  prevBtn.disabled = idx <= 0;
  nextBtn.disabled = idx < 0 || idx >= all.length - 1;

  prevBtn.onclick = () => {
    if (idx > 0) openLesson(all[idx - 1]);
  };
  nextBtn.onclick = () => {
    if (idx < all.length - 1) openLesson(all[idx + 1]);
  };
}

function escapeHtml(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function buildAutoDiagram(lesson) {
  const rawItems =
    lesson.mindMap ||
    lesson.learningOutcomes ||
    (lesson.tags ? lesson.tags.map((t) => `#${t}`) : []);

  const items = rawItems
    .map((t) => String(t).replace(/^✓\s*/, ""))
    .filter(Boolean)
    .slice(0, 3);

  if (!items.length) return null;

  const title = escapeHtml(lesson.title || "Resumo visual");
  const lines = items
    .map(
      (t, i) =>
        `<text x="40" y="${130 + i * 26}" fill="rgba(229,231,235,.92)" font-size="14" font-family="Arial">• ${escapeHtml(
          t,
        )}</text>`,
    )
    .join("");

  const svg = `
    <svg viewBox="0 0 700 220" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="autoG" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="rgba(93,216,255,.35)"/>
          <stop offset="1" stop-color="rgba(139,139,255,.35)"/>
        </linearGradient>
      </defs>
      <rect x="18" y="18" width="664" height="184" rx="16" fill="rgba(2,6,23,.55)" stroke="rgba(148,163,184,.25)"/>
      <rect x="28" y="28" width="644" height="64" rx="12" fill="url(#autoG)" opacity="0.35"/>
      <text x="40" y="66" fill="rgba(229,231,235,.98)" font-size="16" font-family="Arial" font-weight="700">${title}</text>
      ${lines}
      <text x="40" y="198" fill="rgba(148,163,184,.9)" font-size="12" font-family="Arial">
        Diagrama automático (resumo rápido da aula)
      </text>
    </svg>`;

  return { svg, caption: "Diagrama gerado automaticamente" };
}

function init() {
  loadProgress();

  // expand first module by default
  state.expandedModules.add(COURSE.modules[0].id);

  renderNav();
  renderProgress();

  document.getElementById("searchInput").addEventListener("input", (e) => {
    renderNav(e.target.value || "");
  });

  document.getElementById("btnDone").addEventListener("click", () => {
    const id = state.currentLessonId;
    if (!id) return;
    state.progress.doneLessons[id] = true;
    saveProgress();
    openLesson(id); // refresh
  });

  document.getElementById("btnStart").addEventListener("click", () => {
    openLesson(COURSE.modules[0].lessons[0].id);
  });

  document.getElementById("btnContinue").addEventListener("click", () => {
    const last = state.progress.lastLessonId;
    openLesson(last || COURSE.modules[0].lessons[0].id);
  });

  const btnBack = document.getElementById("btnBackToTrail");
  if (btnBack) {
    btnBack.addEventListener("click", () => {
      setVisible(document.getElementById("lessonView"), false);
      setVisible(document.getElementById("hero"), true);
      setVisible(document.getElementById("moduleShowcase"), true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  document.getElementById("btnReset").addEventListener("click", () => {
    if (!confirm("Tem certeza? Isso apaga seu progresso.")) return;
    localStorage.removeItem(STORAGE_KEY);
    location.reload();
  });

  document.getElementById("btnExport").addEventListener("click", async () => {
    const payload = JSON.stringify(state.progress, null, 2);
    try {
      await navigator.clipboard.writeText(payload);
      alert("Progresso copiado para a área de transferência ✅");
    } catch {
      alert(
        "Não consegui copiar automaticamente. Abra o console para ver o JSON.",
      );
      console.log(payload);
    }
  });

  // If user previously opened something, keep hero visible (user choice)
  // If you want auto-open last lesson, uncomment:
  // if (state.progress.lastLessonId) openLesson(state.progress.lastLessonId);

  // glossary toggles
  document.querySelectorAll(".glossary-toggle").forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.classList.toggle("open");
      const body = btn.nextElementSibling;
      if (!body) return;
      body.classList.toggle("open");
    });
  });
  // open all by default so content is visible
  document.querySelectorAll(".glossary-toggle").forEach((btn) => {
    btn.classList.add("open");
    const body = btn.nextElementSibling;
    if (body) body.classList.add("open");
  });

  const glossarySearch = document.getElementById("glossarySearch");
  if (glossarySearch) {
    glossarySearch.addEventListener("input", (e) => {
      const q = String(e.target.value || "").toLowerCase().trim();
      const items = document.querySelectorAll(".glossary-item");
      items.forEach((item) => {
        const text = item.textContent.toLowerCase();
        const matches = q === "" || text.includes(q);
        item.style.display = matches ? "" : "none";
      });
    });
  }

  const glossaryTabs = document.querySelectorAll(".glossary-tab");
  if (glossaryTabs.length) {
    glossaryTabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        glossaryTabs.forEach((t) => t.classList.remove("active"));
        tab.classList.add("active");
        const key = tab.getAttribute("data-tab");
        document.querySelectorAll(".glossary-item").forEach((item) => {
          item.style.display =
            item.getAttribute("data-tab") === key ? "" : "none";
        });
      });
    });
  }
}

//novo trecho
// ===== Toggle do menu hambúrguer (mostrar/ocultar sidebar) =====
(function () {
  const KEY = "curso_sidebar_collapsed_v1";
  const btn = document.getElementById("btnToggleNav");
  if (!btn) return;

  // Inicializa estado a partir do storage
  const restore = () => {
    const collapsed = localStorage.getItem(KEY) === "1";
    document.body.classList.toggle("sidebar-collapsed", collapsed);
    btn.setAttribute("aria-expanded", String(!collapsed));
  };
  restore();

  const toggle = () => {
    const collapsed = !document.body.classList.toggle("sidebar-collapsed");
    // quando classe é `sidebar-collapsed` presente => collapsed true, mas aria-expanded depende da visibilidade
    const hidden = document.body.classList.contains("sidebar-collapsed");
    btn.setAttribute("aria-expanded", String(!hidden));
    localStorage.setItem(KEY, hidden ? "1" : "0");
  };

  btn.addEventListener("click", toggle);

  // Fechar com Esc
  document.addEventListener("keydown", (e) => {
    if (
      e.key === "Escape" &&
      document.body.classList.contains("sidebar-collapsed") === false
    ) {
      // se estiver visível em mobile, fechar; aqui vamos fechar apenas em viewport small
      if (window.innerWidth <= 1100) toggle();
    }
  });

  // Em telas pequenas, fechar sidebar após abrir uma aula para dar mais espaço
  const originalOpenLesson = window.openLesson;
  window.openLesson = function (lessonId) {
    // chama implementação original
    originalOpenLesson(lessonId);
    if (window.innerWidth <= 1100) {
      // força fechar (colapsar)
      if (!document.body.classList.contains("sidebar-collapsed")) toggle();
    }
  };
})();

// Garantir que a sidebar fique escondida por padrão em telas pequenas
const SIDEBAR_KEY = "curso_sidebar_collapsed_v1";
if (window.innerWidth <= 1100 && localStorage.getItem(SIDEBAR_KEY) === null) {
  document.body.classList.add("sidebar-collapsed");
  const btn = document.getElementById("btnToggleNav");
  if (btn) btn.setAttribute("aria-expanded", "false");
}

// ==========================================
// FIREBASE INTEGRATION
// ==========================================

let currentUser = null;
const btnLogin = document.getElementById("btnLogin");
const btnLogout = document.getElementById("btnLogout");
const userDisplay = document.getElementById("userDisplay");

// Função para atualizar UI de auth
function updateAuthUI() {
  if (currentUser) {
    btnLogin.style.display = "none";
    btnLogout.style.display = "block";
    userDisplay.textContent =
      currentUser.displayName || currentUser.email || "Usuário";
  } else {
    btnLogin.style.display = "block";
    btnLogout.style.display = "none";
    userDisplay.textContent = "";
  }
}

// Verificar se Firebase está disponível
function isFirebaseAvailable() {
  return (
    typeof firebase !== "undefined" &&
    firebase.apps &&
    firebase.apps.length > 0 &&
    firebase.auth &&
    firebase.database
  );
}

// Login com Google
function loginWithGoogle() {
  if (!isFirebaseAvailable()) {
    alert("⚠️ Firebase não foi configurado. Veja firebase-config.js");
    return;
  }

  const provider = new firebase.auth.GoogleAuthProvider();
  firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      currentUser = result.user;
      updateAuthUI();
      // Carregar progresso do Firebase
      loadProgressFromFirebase();
      alert(`✅ Bem-vindo, ${currentUser.displayName || currentUser.email}!`);
    })
    .catch((error) => {
      console.error("Erro no login:", error);
      alert("❌ Erro ao fazer login. Verifique a console.");
    });
}

// Login com GitHub
function loginWithGitHub() {
  if (!isFirebaseAvailable()) {
    alert("⚠️ Firebase não foi configurado. Veja firebase-config.js");
    return;
  }

  const provider = new firebase.auth.GithubAuthProvider();
  firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      currentUser = result.user;
      updateAuthUI();
      loadProgressFromFirebase();
      alert(`✅ Bem-vindo, ${currentUser.displayName || currentUser.email}!`);
    })
    .catch((error) => {
      console.error("Erro no login:", error);
      alert("❌ Erro ao fazer login. Verifique a console.");
    });
}

// Logout
function logout() {
  if (!isFirebaseAvailable()) return;

  firebase
    .auth()
    .signOut()
    .then(() => {
      currentUser = null;
      updateAuthUI();
      alert("✅ Desconectado com sucesso!");
    })
    .catch((error) => {
      console.error("Erro ao desconectar:", error);
    });
}

// Carregar progresso do Firebase
function loadProgressFromFirebase() {
  if (!currentUser || !isFirebaseAvailable()) return;

  const db = firebase.database();
  const ref = db.ref(`users/${currentUser.uid}/progress`);

  ref.once("value", (snapshot) => {
    if (snapshot.exists()) {
      state.progress = snapshot.val();
      renderNav(document.getElementById("searchInput").value || "");
      renderProgress();
      console.log("✅ Progresso carregado do Firebase");
    }
  });
}

// Salvar progresso no Firebase
function saveProgressToFirebase() {
  if (!currentUser || !isFirebaseAvailable()) return;

  const db = firebase.database();
  const ref = db.ref(`users/${currentUser.uid}/progress`);

  ref
    .set(state.progress)
    .then(() => {
      console.log("✅ Progresso salvo no Firebase");
    })
    .catch((error) => {
      console.error("Erro ao salvar no Firebase:", error);
    });
}

// Sincronizar progresso: se logado, salva no Firebase; senão, usa localStorage
function syncProgress() {
  if (currentUser) {
    saveProgressToFirebase();
  } else {
    // Usar a função original de salvar no localStorage
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state.progress));
  }
}

// Detectar usuário logado ao carregar página
if (isFirebaseAvailable()) {
  firebase.auth().onAuthStateChanged((user) => {
    currentUser = user;
    updateAuthUI();
    if (user) {
      loadProgressFromFirebase();
    } else {
      loadProgress(); // localStorage
    }
  });
} else {
  loadProgress(); // localStorage apenas
}

// Botões de auth
if (btnLogin) {
  btnLogin.addEventListener("click", () => {
    const choice = prompt("Login com:\n1 = Google\n2 = GitHub");
    if (choice === "1") loginWithGoogle();
    else if (choice === "2") loginWithGitHub();
  });
}

if (btnLogout) {
  btnLogout.addEventListener("click", logout);
}

// Substituir todas as chamadas de saveProgress() por syncProgress()
// nas funções que precisam sincronizar com Firebase
const originalSaveProgress = saveProgress;
window.saveProgress = function () {
  syncProgress();
};

// Inicializar aplicação quando DOM estiver pronto
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
