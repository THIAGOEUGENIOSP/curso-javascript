# 📚 Curso Completo de JavaScript — Do Zero ao Profissional

Uma plataforma de aprendizagem **didática, pedagógica e interativa** para estudar JavaScript do zero até React e Node.js.

---

## 🎯 Características Principais

✅ **Pedagogia em primeiro lugar** — Cada aula tem:
- 📚 Objetivos de aprendizagem claros
- 🌍 Contexto do mundo real (por que você estuda isso?)
- ⚠️ Armadilhas comuns & suas correções
- 🎯 Indicador visual de dificuldade
- 📋 Pré-requisitos & próximos passos recomendados

✅ **Estrutura de aprendizagem completa**:
- Conteúdo em Markdown
- Diagramas e imagens SVG
- Exemplos de código
- Exercícios com soluções
- Quiz com auto-correção
- Checklist interativo
- Projetos práticos

✅ **Gamificação & Progresso**:
- Badges por milestone (1ª aula, 5+, 10+, curso completo)
- Barra de progresso visual
- Salva progresso no localStorage
- Exportar/importar progresso

✅ **Responsividade Total**:
- Menu hamburger no mobile
- Sidebar colapsável
- Todos os componentes otimizados para celular
- Imagens adaptativas

---

## 🚀 Como Rodar Localmente

### Opção 1: Servidor HTTP Simples
```bash
cd "Curso Web"
npx http-server -p 8000
# Abra http://localhost:8000
```

### Opção 2: Python
```bash
cd "Curso Web"
python -m http.server 8000
# Abra http://localhost:8000
```

---

## 📦 Deploy no Vercel (Recomendado)

### Passo 1: Login no Vercel
```bash
npx vercel login
```

### Passo 2: Deploy
```bash
cd "Curso Web"
npx vercel --prod
```

Ou **via GitHub** (deploy automático):
1. Push para GitHub: `git push origin main`
2. Conecte repositório no [Vercel Dashboard](https://vercel.com)
3. Deploy automático em cada push

---

## 📂 Estrutura do Projeto

```
Curso Web/
├── index.html          # HTML principal
├── styles.css          # Estilos globais (~700 linhas)
├── app.js              # Lógica da aplicação (~600 linhas)
├── courseData.js       # Dados das aulas (~3700 linhas)
├── vercel.json         # Config para Vercel
├── .gitignore          # Arquivos ignorados
└── tools/
    └── checkBalance.js # Validador de sintaxe
```

---

## ✏️ Como Adicionar Novas Aulas

Abra `courseData.js` e adicione uma aula seguindo este template:

```javascript
{
  id: "m2a1",
  title: "Aula X — Título da Aula",
  duration: "60–90 min",
  level: "Intermediário",  // Iniciante, Intermediário, Avançado
  tags: ["tag1", "tag2"],
  tip: "Uma dica do professor",
  
  // ===== PEDAGOGIA =====
  learningOutcomes: [
    "✓ Objetivo 1",
    "✓ Objetivo 2",
    "✓ Objetivo 3"
  ],
  
  realWorldContext: {
    description: "Por que isso importa no mundo real?",
    examples: [
      "Exemplo prático 1",
      "Exemplo prático 2"
    ]
  },
  
  commonMistakes: [
    {
      title: "Erro comum 1",
      wrong: "código errado aqui",
      right: "código correto aqui",
      explanation: "Por que é um erro e como corrigir"
    }
  ],
  
  prerequisites: ["m1a3"],  // IDs das aulas pré-requisito
  nextRecommended: ["m2a2"],  // IDs das próximas aulas sugeridas
  // ===== FIM PEDAGOGIA =====
  
  content: `
### Conteúdo em Markdown
Aqui vai seu conteúdo...
  `,
  
  images: [
    { caption: "Título", svg: "<svg>...</svg>" }
  ],
  
  examples: [
    { title: "Ex1", description: "...", code: "..." }
  ],
  
  exercises: [
    {
      title: "Exercício 1",
      level: "Fácil",
      prompt: "O que fazer?",
      solution: "Solução aqui"
    }
  ],
  
  checklist: [
    "Item 1 do checklist",
    "Item 2 do checklist"
  ],
  
  quiz: [
    {
      q: "Pergunta?",
      options: ["Op1", "Op2", "Op3"],
      answerIndex: 0  // índice da resposta correta
    }
  ],
  
  project: {
    goal: "Objetivo do projeto",
    steps: ["Passo 1", "Passo 2"],
    starterCode: "let x = 5;",
    solution: "let x = 5; console.log(x);"
  }
}
```

---

## 🎨 Customizar Cores & Temas

Edite o `:root` em `styles.css`:

```css
:root{
  --bg: #0b1220;
  --panel: #0f172a;
  --accent: #60a5fa;  /* azul principal */
  --accent2: #a78bfa; /* roxo secundário */
  --good: #34d399;    /* verde (sucesso) */
  --warn: #fbbf24;    /* amarelo (atenção) */
  --bad: #fb7185;     /* vermelho (erro) */
}
```

---

## 📊 Variáveis Globais Importantes

No `app.js`, você pode acessar e modificar:

```javascript
state.progress.doneLessons  // Aulas concluídas {id: true}
state.progress.checklist    // Checklists completados
state.progress.quizAnswers  // Respostas dos quizzes
state.progress.mastered     // Aulas que acertaram 80%+ no quiz

// Salvar progress ao localStorage
saveProgress();

// Carregar do localStorage
loadProgress();
```

---

## 🔗 Links Úteis

- [Vercel Dashboard](https://vercel.com/dashboard)
- [GitHub - Crie seu repositório](https://github.com/new)
- [Marked.js - Renderizador Markdown](https://marked.js.org/)

---

## 📝 Changelog

### v1.0 — 20/01/2026
- ✅ Pedagogia completa integrada (learning outcomes, contexto, armadilhas, dificuldade, pré-requisitos)
- ✅ Responsividade mobile-first com menu hamburger
- ✅ Sistema de progresso com badges
- ✅ Quiz e checklist interativos
- ✅ Deploy pronto para Vercel

---

## 💡 Dicas Finais

1. **Sempre testar no mobile** — Use `F12 → Toggle device toolbar`
2. **Validar sintaxe** — `node tools/checkBalance.js courseData.js`
3. **Manter commits regulares** — Ajuda a rastrear progresso
4. **Engajar alunos** — Encourage badges e progresso visual

---

**Aproveite! 🚀 Boa sorte com seu curso de JavaScript!**
