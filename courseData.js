// courseData.js
// Você pode adicionar aulas seguindo o mesmo formato.
// O app renderiza Markdown em "content".

window.COURSE = {
  title: "Trilha Web Completa — HTML, CSS, JavaScript e SQL",
  version: "v1.1",
  modules: [
    {
      id: "m0",
      title: "Trilha Web Completa — do zero ao avançado (passo a passo)",
      description:
        "Uma trilha visual e prática: HTML, CSS, JavaScript, SQL, projetos e portfólio.",
      lessons: [
        {
          id: "m0a1",
          title: "Módulo 1 — Introdução ao HTML (estrutura do site)",
          duration: "45–90 min",
          level: "Iniciante absoluto",
          tags: ["HTML", "estrutura", "iniciante"],
          tip: "HTML é o esqueleto. Se a base estiver certa, o resto fica fácil.",
          learningOutcomes: [
            "✓ Entender o que é HTML e para que ele serve",
            "✓ Criar a estrutura básica de uma página",
            "✓ Usar títulos, parágrafos, links e imagens",
            "✓ Começar a pensar em páginas reais, não em teoria",
          ],
          summary30s:
            "HTML é a estrutura do site. Ele define o que é título, texto, imagem e link. Tudo visível fica no <body> e as configurações no <head>.",
          whyItMatters:
            "Sem HTML bem estruturado, o navegador não entende o que é importante. Isso afeta acessibilidade, SEO e até a organização visual.",
          mindMap: [
            "HTML = estrutura",
            "head = informações (title, css)",
            "body = conteúdo visível",
            "tags básicas: h1, p, img, a, ul",
            "arquivo principal: index.html",
          ],
          microExercises: [
            {
              title: "1 minuto",
              prompt: "Crie só o esqueleto HTML com <head> e <body>.",
            },
            {
              title: "2 minutos",
              prompt: "Crie um h1 com seu nome e um p com uma frase.",
            },
          ],
          realWorldContext: {
            description:
              "Todo site começa com HTML. É ele que diz ao navegador o que é título, texto, imagem e link.",
            examples: [
              "Uma notícia tem título (h1), subtítulo (h2) e parágrafos (p).",
              "Uma loja online usa listas (ul/li) para mostrar produtos.",
              "Um formulário de cadastro usa input para receber dados.",
            ],
          },
          commonMistakes: [
            {
              title: "Esquecer a estrutura básica do HTML",
              wrong: `<h1>Minha página</h1>
<p>Sem head e body...</p>`,
              right: `<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <title>Minha página</title>
  </head>
  <body>
    <h1>Minha página</h1>
    <p>Agora está correto.</p>
  </body>
</html>`,
              explanation:
                "Sem a estrutura correta, o navegador tenta adivinhar, mas você perde controle.",
            },
            {
              title: "Usar imagem sem texto alternativo (alt)",
              wrong: `<img src="foto.jpg">`,
              right: `<img src="foto.jpg" alt="Foto de perfil">`,
              explanation:
                "O alt ajuda acessibilidade e aparece se a imagem não carregar.",
            },
          ],
          images: [
            {
              caption: "Estrutura básica de uma página HTML",
              svg: `
              <svg viewBox="0 0 720 260" xmlns="http://www.w3.org/2000/svg">
                <rect x="20" y="20" width="680" height="220" rx="16" fill="rgba(2,6,23,.55)" stroke="rgba(148,163,184,.25)"/>
                <text x="40" y="60" fill="rgba(229,231,235,.95)" font-size="18" font-family="Arial" font-weight="700">&lt;html&gt;</text>
                <rect x="60" y="80" width="260" height="60" rx="10" fill="rgba(96,165,250,.18)" stroke="rgba(96,165,250,.45)"/>
                <text x="80" y="115" fill="rgba(229,231,235,.9)" font-size="14" font-family="Arial">&lt;head&gt; (título, meta)</text>
                <rect x="340" y="80" width="320" height="60" rx="10" fill="rgba(167,139,250,.18)" stroke="rgba(167,139,250,.45)"/>
                <text x="360" y="115" fill="rgba(229,231,235,.9)" font-size="14" font-family="Arial">&lt;body&gt; (conteúdo)</text>
                <text x="40" y="200" fill="rgba(148,163,184,.95)" font-size="13" font-family="Arial">
                  Dica: tudo que aparece na tela fica dentro do &lt;body&gt;.
                </text>
              </svg>`,
            },
          ],
          examples: [
            {
              title: "Exemplo — Página mínima",
              description: "O menor HTML completo possível.",
              code: `<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <title>Meu site</title>
  </head>
  <body>
    <h1>Olá, mundo!</h1>
  </body>
</html>`,
            },
            {
              title: "Exemplo — Link e imagem",
              description: "Link clicável e imagem com alt.",
              code: `<a href="https://example.com">Visitar site</a>
<img src="foto.jpg" alt="Minha foto">`,
            },
          ],
          checklist: [
            "Criei um arquivo index.html",
            "Usei h1, p e img",
            "Adicionei uma lista com 3 itens",
            "Testei no navegador (abrir o arquivo)",
          ],
          quiz: [
            {
              q: "O que é HTML?",
              options: [
                "Uma linguagem de marcação para estruturar páginas",
                "Uma linguagem de programação para servidor",
                "Um banco de dados",
              ],
              answerIndex: 0,
            },
            {
              q: "Qual tag contém todo o conteúdo visível da página?",
              options: ["<head>", "<body>", "<title>"],
              answerIndex: 1,
            },
          ],
          prerequisites: [],
          nextRecommended: ["m0a2"],
          content: `
### 🧠 Explicação simples
HTML é a **estrutura** de um site, como o esqueleto de uma casa.  
Sem ele, não existe página — só ideias.

### 🎥 Vídeo recomendado (em português)
Assista e **digite junto**:
https://www.youtube.com/playlist?list=PLHz_AreHm4dkZ9-atkcmcBaMZdmLHft8n

### ✅ Depois do vídeo, pratique assim
1) Crie um arquivo \`index.html\`  
2) Monte um título, um parágrafo e uma imagem  
3) Adicione uma lista com 3 itens  

### 🧩 Por que a estrutura do HTML existe?
- **\<head\>** guarda informações que o navegador precisa (título, ícone, CSS, fonte).  
- **\<body\>** é tudo o que aparece na tela.  
- Se você mistura tudo, o navegador até tenta “consertar”, mas o resultado fica imprevisível.

### ✅ Regra simples para nunca errar
**Tudo que o usuário vê fica no \`<body>\`.**  
O resto (título, CSS, meta) fica no \`<head>\`.

---

### 📌 Guia rápido: tags HTML mais usadas (e para que servem)
- **\<h1\> ... \<h6\>** — títulos (h1 é o principal).
- **\<p\>** — parágrafo (texto comum).
- **\<a href=""\>** — link para outra página.
- **\<img src="" alt=""\>** — imagem (alt descreve a imagem).
- **\<ul\> / \<ol\> / \<li\>** — listas (sem ordem / ordenadas / item).
- **\<div\>** — “caixa” genérica para agrupar conteúdo.
- **\<span\>** — texto pequeno dentro de um bloco.
- **\<header\> / \<main\> / \<footer\>** — estrutura semântica do site.
`,
          exercises: [
            {
              title: "Exercício — Minha primeira página",
              level: "Fácil",
              prompt:
                "Crie uma página com: um título, um parágrafo, uma imagem e uma lista com 3 itens.",
              solution: `<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <title>Minha Primeira Página</title>
  </head>
  <body>
    <h1>Olá, eu sou o(a) [seu nome]</h1>
    <p>Estou começando no HTML!</p>
    <img src="minha-foto.jpg" alt="Minha foto" />
    <ul>
      <li>Gosto de música</li>
      <li>Quero aprender programação</li>
      <li>Vou criar meus sites</li>
    </ul>
  </body>
</html>`,
            },
            {
              title: "Exercício — Links úteis",
              level: "Fácil",
              prompt:
                "Crie 3 links: YouTube, Google e GitHub. Cada um deve abrir em nova aba.",
              solution: `<a href="https://www.youtube.com" target="_blank">YouTube</a>
<a href="https://www.google.com" target="_blank">Google</a>
<a href="https://github.com" target="_blank">GitHub</a>`,
            },
          ],
          project: {
            goal: "Criar uma página de apresentação pessoal simples.",
            steps: [
              "Crie um cabeçalho com seu nome e uma frase.",
              "Adicione uma foto e uma lista de interesses.",
              "Inclua um link para seu Instagram ou GitHub.",
            ],
          },
        },
        {
          id: "m0a2",
          title: "Módulo 2 — HTML + CSS (visual e organização)",
          duration: "1–2 h",
          level: "Iniciante",
          tags: ["HTML", "CSS", "flexbox", "layout"],
          tip: "CSS é a roupa do site. Deixe tudo limpo e bem alinhado.",
          learningOutcomes: [
            "✓ Entender o papel do CSS no visual do site",
            "✓ Aplicar cores, fontes e espaçamentos",
            "✓ Usar Flexbox para organizar elementos",
            "✓ Construir uma home simples com header e footer",
          ],
          summary30s:
            "CSS controla o visual do site: cores, fontes e layout. Separar HTML e CSS deixa tudo organizado e fácil de manter.",
          whyItMatters:
            "CSS separa estilo de estrutura. Isso evita bagunça, facilita manutenção e deixa o site mais profissional.",
          mindMap: [
            "CSS = aparência",
            "separar arquivos (HTML + CSS)",
            "cores e fontes",
            "espaçamento (margin/padding)",
            "layout com flexbox",
          ],
          microExercises: [
            {
              title: "1 minuto",
              prompt: "Troque a cor do fundo do body para #111 e o texto para #fff.",
            },
            {
              title: "2 minutos",
              prompt: "Crie um botão com padding, borda arredondada e cor.",
            },
          ],
          realWorldContext: {
            description:
              "CSS deixa seu site legível e bonito. Sem CSS, tudo fica amontoado.",
            examples: [
              "Botões com cor e borda para parecerem clicáveis.",
              "Menus alinhados com Flexbox.",
              "Espaçamento entre seções para facilitar a leitura.",
            ],
          },
          commonMistakes: [
            {
              title: "Esquecer de linkar o CSS no HTML",
              wrong: `<!-- O CSS existe, mas não foi conectado -->
<body>...</body>`,
              right: `<head>
  <link rel="stylesheet" href="style.css" />
</head>`,
              explanation:
                "Sem o link, o navegador não aplica os estilos.",
            },
          ],
          examples: [
            {
              title: "Exemplo — Centralizar com Flexbox",
              description: "Alinha itens no centro horizontal e vertical.",
              code: `.box {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
}`,
            },
            {
              title: "Exemplo — Botão simples",
              description: "Botão com cor e borda arredondada.",
              code: `.btn {
  background: #2563eb;
  color: #fff;
  padding: 10px 16px;
  border: 0;
  border-radius: 8px;
}`,
            },
          ],
          checklist: [
            "Linkei o CSS no HTML",
            "Mudei cor do fundo e do texto",
            "Usei Flexbox em pelo menos 1 bloco",
            "Criei um botão estilizado",
          ],
          quiz: [
            {
              q: "Para que serve o CSS?",
              options: [
                "Para estilizar o visual da página",
                "Para criar banco de dados",
                "Para programar o servidor",
              ],
              answerIndex: 0,
            },
            {
              q: "Qual propriedade ativa o Flexbox?",
              options: ["display: flex", "position: flex", "float: flex"],
              answerIndex: 0,
            },
          ],
          prerequisites: ["m0a1"],
          nextRecommended: ["m0a3"],
          content: `
### 🧠 Explicação simples
CSS é o **visual**: cor, tamanho, alinhamento e beleza.  
HTML é o esqueleto, CSS é a roupa e o acabamento.

### 🎥 Vídeo recomendado (em português)
Assista e **copie o código**:
https://www.youtube.com/playlist?list=PLHz_AreHm4dlUpEXkY1AyVLQGcpSgVF8s

### ✅ Depois do vídeo, pratique assim
1) Crie um \`style.css\`  
2) Mude cor do fundo e do texto  
3) Use Flexbox para alinhar um menu  

### 🧩 Por que separar HTML e CSS?
- **HTML** é a estrutura (o que é cada coisa).  
- **CSS** é o visual (como fica).  
Separar deixa o site mais organizado, fácil de mexer e profissional.

### ✅ Regra simples para o visual ficar limpo
**Use espaçamento (margin/padding) antes de colocar mais cor.**  
Sites feios normalmente têm “tudo colado”.

---

### 🎨 Guia rápido: CSS mais usado (e para que serve)
- **color** — cor do texto.
- **background** — cor ou imagem de fundo.
- **font-size** — tamanho da fonte.
- **font-weight** — “peso” da fonte (negrito).
- **margin** — espaço fora do elemento.
- **padding** — espaço dentro do elemento.
- **border** — borda do elemento.
- **border-radius** — cantos arredondados.
- **display: flex** — alinha itens em linha/coluna.
- **justify-content** — alinhamento horizontal no flex.
- **align-items** — alinhamento vertical no flex.
`,
          exercises: [
            {
              title: "Exercício — Cartão simples com CSS",
              level: "Fácil",
              prompt:
                "Crie um card com nome, descrição e botão usando borda, sombra e padding.",
              solution: `.card {
  background: white;
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
  max-width: 320px;
  font-family: Arial, sans-serif;
}
.card h3 { margin: 0 0 8px; }
.card p { margin: 0 0 12px; color: #444; }
.card button {
  background: #2563eb;
  color: #fff;
  border: 0;
  padding: 10px 14px;
  border-radius: 8px;
}`,
            },
            {
              title: "Exercício — Menu horizontal",
              level: "Fácil",
              prompt:
                "Crie um menu com 4 links alinhados na horizontal usando Flexbox.",
              solution: `.menu {
  display: flex;
  gap: 16px;
}
.menu a {
  color: #111;
  text-decoration: none;
  font-weight: 600;
}`,
            },
          ],
          project: {
            goal: "Criar uma home simples (menu + conteúdo + rodapé).",
            steps: [
              "Crie um header com logo e links.",
              "Monte um bloco principal com título e botão.",
              "Finalize com um rodapé simples.",
            ],
          },
        },
        {
          id: "m0a3",
          title: "Módulo 3 — JavaScript Básico (interatividade)",
          duration: "1–2 h",
          level: "Iniciante",
          tags: ["javascript", "lógica", "eventos"],
          tip: "JS é a parte que faz o site reagir ao clique do usuário.",
          learningOutcomes: [
            "✓ Criar variáveis e funções simples",
            "✓ Usar eventos de clique",
            "✓ Alterar texto e classes no HTML",
            "✓ Entender lógica básica (if e loops)",
          ],
          summary30s:
            "JavaScript dá vida ao site. Ele reage ao clique, muda textos e controla a lógica. Primeiro crie o HTML, depois conecte o JS.",
          whyItMatters:
            "Sem JavaScript o site fica estático. JS permite interatividade real e experiência do usuário melhor.",
          mindMap: [
            "JS = interatividade",
            "eventos (click)",
            "DOM: pegar elemento por id",
            "mudar texto/classe",
            "lógica: if, loops",
          ],
          microExercises: [
            {
              title: "1 minuto",
              prompt: "Crie um botão que mostra um alert com seu nome.",
            },
            {
              title: "2 minutos",
              prompt: "Crie um parágrafo e altere o texto ao clicar.",
            },
          ],
          realWorldContext: {
            description:
              "JavaScript faz o site reagir. É ele que valida formulário, abre menus e muda conteúdo.",
            examples: [
              "Botão 'curtir' que aumenta o contador.",
              "Mostrar/ocultar uma senha no formulário.",
              "Exibir mensagem de erro ao enviar dados vazios.",
            ],
          },
          commonMistakes: [
            {
              title: "Tentar usar JS sem ligar no HTML",
              wrong: `// JS
document.getElementById("btn").onclick = () => alert("Oi");`,
              right: `<!-- HTML -->
<button id="btn">Clique</button>
<script src="script.js"></script>`,
              explanation:
                "Sem o elemento no HTML, o JS não encontra o botão.",
            },
          ],
          examples: [
            {
              title: "Exemplo — Trocar texto",
              description: "Ao clicar, muda o texto de um parágrafo.",
              code: `document.getElementById("btn").onclick = () => {
  document.getElementById("msg").textContent = "Mudou!";
};`,
            },
            {
              title: "Exemplo — Mostrar/ocultar",
              description: "Alterna uma classe CSS no elemento.",
              code: `const box = document.getElementById("box");
box.classList.toggle("hidden");`,
            },
          ],
          checklist: [
            "Criei um botão no HTML",
            "Adicionei um script.js",
            "Fiz o botão mudar algo na tela",
            "Testei no navegador (F12 > Console)",
          ],
          quiz: [
            {
              q: "Qual é a função do JavaScript no navegador?",
              options: [
                "Dar interatividade à página",
                "Estilizar a página",
                "Salvar dados no banco",
              ],
              answerIndex: 0,
            },
            {
              q: "Qual evento é usado para clique?",
              options: ["onhover", "onclick", "onscroll"],
              answerIndex: 1,
            },
          ],
          prerequisites: ["m0a2"],
          nextRecommended: ["m0a4"],
          content: `
### 🧠 Explicação simples
JavaScript é o **cérebro** do site.  
Com ele você faz botão funcionar, muda texto e cria ações.

### 🎥 Vídeo recomendado (em português)
Assista e pratique junto:
https://www.youtube.com/playlist?list=PLHz_AreHm4dlsK3Nr9GVvXCbpQyHQl1o1

### ✅ Depois do vídeo, pratique assim
1) Crie um botão e um número na tela  
2) Ao clicar, o número aumenta  

### 🧩 Por que o JS “precisa” do HTML?
O JavaScript **não cria a página sozinho**.  
Ele manipula elementos que já existem no HTML.  
Por isso você primeiro cria o botão no HTML e depois liga o JS nele.

### ✅ Regra simples para não quebrar
**Se o JS não acha o elemento, sempre verifique o \`id\`.**

---

### ⚙️ Guia rápido: JS mais usado (e para que serve)
- **let / const** — criar variáveis (const não muda).
- **document.getElementById** — pegar elemento do HTML.
- **textContent** — mudar texto de um elemento.
- **classList.add/remove/toggle** — adicionar/remover classes CSS.
- **addEventListener("click")** — reagir a cliques.
- **if / else** — decisões.
- **for / while** — repetir ações.
- **console.log** — ver valores no console.
`,
          exercises: [
            {
              title: "Exercício — Contador simples",
              level: "Fácil",
              prompt:
                "Crie um contador que soma 1 toda vez que o botão é clicado.",
              solution: `// HTML
<button id="btn">Clique</button>
<p id="n">0</p>

// JS
let n = 0;
document.getElementById("btn").onclick = () => {
  n++;
  document.getElementById("n").textContent = n;
};`,
            },
            {
              title: "Exercício — Trocar cor",
              level: "Fácil",
              prompt:
                "Crie um botão que troca a cor de fundo do body para azul.",
              solution: `document.getElementById("btn").onclick = () => {
  document.body.style.background = "#2563eb";
};`,
            },
          ],
          project: {
            goal: "Criar um contador visual com botões + e -.",
            steps: [
              "Crie botões de aumentar e diminuir.",
              "Mostre o número na tela.",
              "Adicione um botão de reset.",
            ],
          },
        },
        {
          id: "m0a4",
          title: "Módulo 4 — JavaScript Intermediário (projetos)",
          duration: "2–4 h",
          level: "Intermediário",
          tags: ["javascript", "projeto", "dom", "localStorage"],
          tip: "Projetos reais fixam o aprendizado. Repita até ficar natural.",
          learningOutcomes: [
            "✓ Criar elementos com JavaScript",
            "✓ Usar arrays e objetos na prática",
            "✓ Salvar dados no navegador (localStorage)",
            "✓ Organizar código por funções",
          ],
          summary30s:
            "Projetos unem HTML, CSS e JS. Use funções para organizar o código e salve dados no localStorage para não perder ao recarregar.",
          whyItMatters:
            "Projetos reais treinam lógica e organização. É aqui que o aprendizado “cola”.",
          mindMap: [
            "projeto real",
            "DOM: criar elementos",
            "arrays e objetos",
            "localStorage",
            "funções para organizar",
          ],
          microExercises: [
            {
              title: "2 minutos",
              prompt: "Crie um array com 3 tarefas e mostre no console.",
            },
            {
              title: "3 minutos",
              prompt: "Salve esse array no localStorage com JSON.stringify.",
            },
          ],
          realWorldContext: {
            description:
              "Aqui você cria mini-sistemas reais, como lista de tarefas e notas.",
            examples: [
              "To‑Do list com adicionar e remover itens.",
              "Lista de compras que salva no navegador.",
              "App de notas simples para o dia a dia.",
            ],
          },
          commonMistakes: [
            {
              title: "Não salvar no localStorage",
              wrong: `const tasks = [];
// ao recarregar a página, tudo some`,
              right: `localStorage.setItem("tasks", JSON.stringify(tasks));`,
              explanation:
                "Sem salvar, o navegador apaga tudo quando você recarrega.",
            },
          ],
          examples: [
            {
              title: "Exemplo — Criar item na lista",
              description: "Cria um elemento <li> com JS.",
              code: `const li = document.createElement("li");
li.textContent = "Nova tarefa";
lista.appendChild(li);`,
            },
            {
              title: "Exemplo — Salvar no localStorage",
              description: "Guarda as tarefas como texto.",
              code: `localStorage.setItem("tasks", JSON.stringify(tasks));`,
            },
          ],
          checklist: [
            "Criei input e botão de adicionar",
            "Listei tarefas na tela",
            "Implementei remover tarefa",
            "Salvei e carreguei do localStorage",
          ],
          quiz: [
            {
              q: "Para que serve o localStorage?",
              options: [
                "Salvar dados no navegador",
                "Guardar imagens no servidor",
                "Substituir o banco de dados",
              ],
              answerIndex: 0,
            },
            {
              q: "Qual método cria um elemento no DOM?",
              options: ["document.createElement", "document.make", "createHTML"],
              answerIndex: 0,
            },
          ],
          prerequisites: ["m0a3"],
          nextRecommended: ["m0a5"],
          content: `
### 🧠 Explicação simples
Agora você vai **juntar tudo** e criar projetos reais.  
Projeto é onde o cérebro aprende de verdade.

### 🎥 Vídeo recomendado (em português)
Playlist de projetos para treinar:
https://www.youtube.com/playlist?list=PLajjpPyc2dmbt0KebBvT9VQV8y2R_IO7j

### ✅ Depois do vídeo, pratique assim
1) Faça uma lista de tarefas  
2) Salve no \`localStorage\`  
3) Crie botão de remover tarefa  

### 🧩 Por que usar funções?
Funções deixam o código **organizado** e **fácil de repetir**.  
Se você copia e cola tudo, vira bagunça e fica difícil de corrigir.

### ✅ Regra simples para projeto crescer sem bagunça
**Cada ação importante vira uma função.**  
Ex: \`addTask()\`, \`removeTask()\`, \`render()\`.
`,
          exercises: [
            {
              title: "Exercício — To-Do simples",
              level: "Médio",
              prompt:
                "Crie uma lista de tarefas com adicionar e remover itens.",
              solution: `const list = [];
function addTask(task) {
  list.push(task);
  render();
}
function removeTask(index) {
  list.splice(index, 1);
  render();
}`,
            },
            {
              title: "Exercício — Persistência simples",
              level: "Médio",
              prompt:
                "Salve o array de tarefas no localStorage e recupere ao carregar.",
              solution: `const saved = JSON.parse(localStorage.getItem("tasks") || "[]");
const tasks = saved;
localStorage.setItem("tasks", JSON.stringify(tasks));`,
            },
          ],
          project: {
            goal: "Lista de tarefas (To‑Do) com salvar no navegador.",
            steps: [
              "Criar input e botão de adicionar.",
              "Listar tarefas na tela.",
              "Salvar e carregar do localStorage.",
            ],
          },
        },
        {
          id: "m0a5",
          title: "Módulo 5 — Banco de Dados (SQL / MySQL)",
          duration: "1–2 h",
          level: "Iniciante",
          tags: ["sql", "mysql", "banco de dados"],
          tip: "Banco de dados é uma caixa organizada: você guarda e busca tudo.",
          learningOutcomes: [
            "✓ Entender o que é uma tabela",
            "✓ Criar banco e tabela com SQL",
            "✓ Inserir e consultar dados",
            "✓ Fazer UPDATE e DELETE",
          ],
          summary30s:
            "SQL organiza dados em tabelas. Você cria a tabela, insere registros e depois busca, atualiza ou apaga quando precisa.",
          whyItMatters:
            "Sem banco de dados, você perde tudo ao fechar o site. SQL é a base de sistemas reais.",
          mindMap: [
            "banco de dados = guardar dados",
            "tabela = linhas e colunas",
            "CREATE / INSERT / SELECT",
            "UPDATE / DELETE",
            "id como chave primaria",
          ],
          microExercises: [
            {
              title: "2 minutos",
              prompt: "Crie uma tabela `produtos` com id e nome.",
            },
            {
              title: "3 minutos",
              prompt: "Insira 2 produtos e faça um SELECT.",
            },
          ],
          realWorldContext: {
            description:
              "Sites de verdade guardam dados em banco: usuários, pedidos, mensagens.",
            examples: [
              "Cadastro de clientes em uma loja.",
              "Registro de tarefas em um app.",
              "Mensagens de um chat.",
            ],
          },
          commonMistakes: [
            {
              title: "Esquecer de escolher o banco (USE)",
              wrong: `CREATE TABLE users (...);`,
              right: `USE meu_banco;
CREATE TABLE users (...);`,
              explanation:
                "Sem escolher o banco, a tabela pode ir para o lugar errado.",
            },
          ],
          examples: [
            {
              title: "Exemplo — Criar tabela",
              description: "Tabela simples de usuários.",
              code: `CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(120)
);`,
            },
            {
              title: "Exemplo — Buscar com filtro",
              description: "Seleciona por email.",
              code: `SELECT * FROM users WHERE email = "ana@email.com";`,
            },
          ],
          checklist: [
            "Criei um banco e uma tabela",
            "Inseri pelo menos 3 registros",
            "Usei SELECT com filtro",
            "Testei UPDATE e DELETE",
          ],
          quiz: [
            {
              q: "Qual comando cria uma tabela?",
              options: ["CREATE TABLE", "INSERT TABLE", "NEW TABLE"],
              answerIndex: 0,
            },
            {
              q: "Qual comando altera dados existentes?",
              options: ["INSERT", "UPDATE", "SELECT"],
              answerIndex: 1,
            },
          ],
          prerequisites: ["m0a4"],
          nextRecommended: ["m0a6"],
          content: `
### 🧠 Explicação simples
Banco de dados é onde você **guarda informação** de verdade.  
Sem banco, tudo some quando fecha o navegador.

### 🎥 Vídeo recomendado (em português)
Assista e copie os comandos:
https://www.youtube.com/watch?v=cHLKtALWDos

### ✅ Depois do vídeo, pratique assim
1) Crie uma tabela de usuários  
2) Insira 3 registros  
3) Faça um SELECT com filtro  

### 🧩 Por que o SQL usa tabelas?
Tabela é a forma mais simples de **organizar dados**: linhas e colunas.  
Assim fica rápido para **salvar**, **buscar** e **editar** informação.

### ✅ Regra simples para evitar confusão
**Sempre crie uma chave primária (\`id\`).**  
Isso evita dados duplicados e facilita buscar registros.
`,
          exercises: [
            {
              title: "Exercício — SQL básico",
              level: "Fácil",
              prompt:
                "Crie uma tabela users e insira 3 registros. Depois faça um SELECT.",
              solution: `CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(120)
);

INSERT INTO users (name, email) VALUES
("Ana", "ana@email.com"),
("João", "joao@email.com"),
("Rafa", "rafa@email.com");

SELECT * FROM users;`,
            },
            {
              title: "Exercício — Atualizar registro",
              level: "Fácil",
              prompt:
                "Atualize o email do usuário 'Ana' para 'ana@novo.com'.",
              solution: `UPDATE users
SET email = "ana@novo.com"
WHERE name = "Ana";`,
            },
          ],
          project: {
            goal: "Criar um banco simples com tabela de usuários.",
            steps: [
              "Crie o banco e a tabela.",
              "Insira dados de teste.",
              "Faça consultas com filtros.",
            ],
          },
        },
        {
          id: "m0a6",
          title: "Módulo 6 — Conectar Frontend com Banco (PHP + MySQL)",
          duration: "2–4 h",
          level: "Intermediário",
          tags: ["php", "mysql", "formulario", "backend"],
          tip: "Aqui você cria algo de verdade: formulário que salva no banco.",
          learningOutcomes: [
            "✓ Enviar dados de formulário",
            "✓ Conectar com banco MySQL",
            "✓ Salvar e listar dados",
            "✓ Entender o básico de backend",
          ],
          summary30s:
            "O backend recebe o formulário e salva no banco. O navegador sozinho não pode acessar o banco por segurança.",
          whyItMatters:
            "Sem backend, você não salva dados de verdade. É o passo para criar sistemas reais.",
          mindMap: [
            "formulario HTML",
            "POST envia dados",
            "PHP processa",
            "MySQL guarda",
            "listar dados na tela",
          ],
          microExercises: [
            {
              title: "2 minutos",
              prompt: "Crie um formulário com nome e email.",
            },
            {
              title: "3 minutos",
              prompt: "Crie um PHP que só imprime o nome enviado.",
            },
          ],
          realWorldContext: {
            description:
              "Quando o formulário envia dados, o servidor salva no banco e retorna a resposta.",
            examples: [
              "Cadastro de leads em landing page.",
              "Formulário de contato que salva no banco.",
              "Sistema simples de login.",
            ],
          },
          commonMistakes: [
            {
              title: "Esquecer método do formulário",
              wrong: `<form action="processa.php">`,
              right: `<form action="processa.php" method="POST">`,
              explanation:
                "Sem method, o padrão é GET. Para enviar dados, o correto é POST.",
            },
          ],
          examples: [
            {
              title: "Exemplo — Conectar no MySQL (PHP)",
              description: "Conexão básica com banco.",
              code: `<?php
$conn = new mysqli("localhost", "root", "", "meubanco");
if ($conn->connect_error) die("Erro");
?>`,
            },
            {
              title: "Exemplo — Inserir dados",
              description: "Inserção simples via PHP.",
              code: `<?php
$nome = $_POST["nome"];
$email = $_POST["email"];
$sql = "INSERT INTO users (name, email) VALUES ('$nome', '$email')";
$conn->query($sql);
?>`,
            },
          ],
          checklist: [
            "Criei o formulário HTML",
            "Enviei dados via POST",
            "Conectei ao banco",
            "Salvei e listei os registros",
          ],
          quiz: [
            {
              q: "Qual método é mais comum para enviar dados de formulário?",
              options: ["POST", "TRACE", "HEAD"],
              answerIndex: 0,
            },
            {
              q: "Onde o PHP roda?",
              options: ["No navegador", "No servidor", "No banco"],
              answerIndex: 1,
            },
          ],
          prerequisites: ["m0a5"],
          nextRecommended: ["m0a7"],
          content: `
### 🧠 Explicação simples
Agora seu site **conversa** com o banco.  
Você envia dados e o servidor salva.

### 🎥 Vídeo recomendado (em português)
Curso de PHP (base para salvar dados):
https://www.youtube.com/playlist?list=PLHz_AreHm4dm4beCCCmW4xwpmLf6EHY9k

### ✅ Depois do vídeo, pratique assim
1) Crie um formulário (nome + email)  
2) Envie para \`processa.php\`  
3) Salve no banco  

### 🧩 Por que precisa de backend?
O navegador **não pode** salvar dados direto no banco por segurança.  
O servidor (PHP) recebe o formulário e conversa com o banco.

### ✅ Regra simples de segurança
**Nunca confie no que o usuário envia.**  
Sempre valide os dados antes de salvar.
`,
          exercises: [
            {
              title: "Exercício — Formulário simples",
              level: "Médio",
              prompt:
                "Crie um formulário HTML que envia nome e email via POST.",
              solution: `<form action="processa.php" method="POST">
  <input name="nome" placeholder="Nome" />
  <input name="email" placeholder="Email" />
  <button>Salvar</button>
</form>`,
            },
            {
              title: "Exercício — Listar dados",
              level: "Médio",
              prompt:
                "Crie uma página PHP que liste os usuários do banco em uma tabela HTML.",
              solution: `<?php
$res = $conn->query("SELECT * FROM users");
while ($row = $res->fetch_assoc()) {
  echo "<p>{$row['name']} - {$row['email']}</p>";
}
?>`,
            },
          ],
          project: {
            goal: "Sistema simples de cadastro (nome + email).",
            steps: [
              "Formulário HTML para cadastro.",
              "Arquivo PHP que salva no MySQL.",
              "Página que lista os usuários.",
            ],
          },
        },
        {
          id: "m0a7",
          title: "Módulo 7 — Projetos finais, portfólio e freelas",
          duration: "2–4 h",
          level: "Intermediário",
          tags: ["portfolio", "projetos", "freelas", "carreira"],
          tip: "Portfólio é seu cartão de visitas. Capriche!",
          learningOutcomes: [
            "✓ Montar portfólio com 3 projetos reais",
            "✓ Organizar projetos no GitHub",
            "✓ Criar texto simples de apresentação",
            "✓ Entender caminhos para freelas",
          ],
          summary30s:
            "Portfólio é sua prova real. Mostre 3 projetos bem feitos e publicados. Isso abre portas para freelas e vagas.",
          whyItMatters:
            "Clientes e empresas confiam em provas. Portfólio é sua vitrine.",
          mindMap: [
            "3 projetos completos",
            "GitHub organizado",
            "site portfolio",
            "link de contato",
            "publicar online",
          ],
          microExercises: [
            {
              title: "2 minutos",
              prompt: "Escreva um mini texto “Sobre mim” (3 linhas).",
            },
            {
              title: "3 minutos",
              prompt: "Liste 3 projetos que você quer criar.",
            },
          ],
          realWorldContext: {
            description:
              "Empresas e clientes querem ver projetos reais. Portfólio é a prova.",
            examples: [
              "Um site de apresentação com links de projetos.",
              "Um formulário de contato funcional.",
              "Um projeto publicado no GitHub com README.",
            ],
          },
          commonMistakes: [
            {
              title: "Mostrar muitos projetos inacabados",
              wrong: "10 projetos pela metade.",
              right: "3 projetos bem feitos e publicados.",
              explanation:
                "Qualidade vence quantidade. Termine antes de começar outro.",
            },
          ],
          examples: [
            {
              title: "Exemplo — Seção de projetos",
              description: "Uma lista simples de projetos.",
              code: `<section id="projetos">
  <h2>Projetos</h2>
  <ul>
    <li>To‑Do List — <a href="#">Ver</a></li>
    <li>Landing Page — <a href="#">Ver</a></li>
  </ul>
</section>`,
            },
            {
              title: "Exemplo — Botão de contato",
              description: "Botão que abre o email.",
              code: `<a class="btn" href="mailto:seu@email.com">Fale comigo</a>`,
            },
          ],
          checklist: [
            "Tenho 3 projetos completos",
            "Cada projeto tem descrição e link",
            "Meu portfólio tem seção de contato",
            "Publiquei tudo no GitHub",
          ],
          quiz: [
            {
              q: "O que pesa mais no portfólio?",
              options: [
                "Quantidade de projetos",
                "Qualidade e conclusão",
                "Muitos designs diferentes",
              ],
              answerIndex: 1,
            },
            {
              q: "Onde publicar projetos para mostrar?",
              options: ["GitHub", "Bloco de notas", "Pen drive"],
              answerIndex: 0,
            },
          ],
          prerequisites: ["m0a6"],
          nextRecommended: [],
          content: `
### 🧠 Explicação simples
Portfólio é **prova real** de que você sabe fazer.  
É isso que abre portas para freelas e trabalho remoto.

### 🎥 Vídeo recomendado (em português)
Projeto de portfólio simples:
https://www.youtube.com/watch?v=TGSwi2h8OXs

### ✅ Dicas para não desistir
- Estude um pouco todo dia (20–40 min)  
- Faça **menos teoria e mais código**  
- Repita os exercícios 2 ou 3 vezes  
- Mostre seus resultados para alguém  

### 💼 Caminho para freelas (simples e direto)
1) Crie 3 projetos bons no GitHub  
2) Publique no Netlify/Vercel  
3) Faça um portfólio com link dos projetos  
4) Ofereça para pequenos negócios do seu bairro  

### 🧩 Por que portfólio importa?
Empresas e clientes **querem provas reais**.  
Seu portfólio mostra o que você consegue entregar.

### ✅ Regra simples para ser levado a sério
**Projeto publicado vale mais que 10 ideias no papel.**
`,
          exercises: [
            {
              title: "Exercício — Seu portfólio em 1 página",
              level: "Médio",
              prompt:
                "Crie uma página com seção: Sobre, Projetos e Contato.",
              solution: `<section id="sobre">Sobre mim...</section>
<section id="projetos">Meus projetos...</section>
<section id="contato">Meu email...</section>`,
            },
          ],
          project: {
            goal: "Portfólio profissional com 3 projetos e contato.",
            steps: [
              "Liste 3 projetos com imagem e link.",
              "Inclua um texto curto sobre você.",
              "Adicione um botão de contato (email/WhatsApp).",
            ],
          },
        },
      ],
    },
    {
      id: "m1",
      title: "Módulo 1 — Fundamentos (Iniciante absoluto)",
      description:
        "Lógica, variáveis, operadores, controle de fluxo e funções.",
      lessons: [
        {
          id: "m1a1",
          title: "Aula 1 — O que é programação (com explicação profunda)",
          duration: "45–70 min",
          level: "Iniciante",
          tags: ["lógica", "introdução", "algoritmo", "variáveis", "tipos"],
          tip: "Não tente decorar. Entenda o raciocínio. Código é consequência da lógica.",
          
          // ===== PEDAGOGIA NOVA =====
          learningOutcomes: [
            "✓ Entender que programação é transformar intenções em instruções claras",
            "✓ Diferenciar algoritmo de código",
            "✓ Criar sua primeira variável e entender tipos básicos",
            "✓ Usar console.log para debug desde agora",
            "✓ Dominar o mindset: lógica primeiro, sintaxe depois"
          ],
          
          realWorldContext: {
            description: "Programação é a linguagem das máquinas. Toda app que você usa — desde Instagram até seu carro — foi construída com essas ideias básicas. Dominar isso é aprender a comunicar com computadores.",
            examples: [
              "Apps mobile: reconhecer que cada funcionalidade é uma sequência lógica de passos",
              "E-commerce: calculadoras de carrinho usam variáveis e lógica de negócio",
              "Redes sociais: algoritmo de feed é uma série de decisões (if/else) processadas em bilhões de dados"
            ]
          },
          
          commonMistakes: [
            {
              title: "Pensar que o computador 'entende' contexto humano",
              wrong: `// ERRADO: pensar assim
// 'Compute o valor de algo importante'
// O computador vai ficar confuso!`,
              right: `// CORRETO: ser explícito
let valorProduto = 100;
let desconto = 0.1;
let precoFinal = valorProduto * (1 - desconto);
console.log(precoFinal);`,
              explanation: "O computador não interpreta intenções. Ele apenas executa instruções. Você precisa ser 100% explícito."
            },
            {
              title: "Criar variável sem saber qual tipo ela tem",
              wrong: `let x = 5;
let y = "5";
console.log(x + y); // "55" ou 10? Confuso!`,
              right: `let numero = 5;      // number
let texto = "5";     // string
let resultado = numero + numero; // 10
console.log(resultado);`,
              explanation: "JavaScript tenta 'adivinhar' o tipo, causando bugs. Sempre pense qual tipo você quer e seja claro."
            },
            {
              title: "Decorar sintaxe em vez de entender lógica",
              wrong: `// Tentar memorizar 'let' vs 'const' vs 'var' sem entender por quê
// Depois fica perdido com escopos e erros estranhos`,
              right: `// Entender PRIMEIRO a lógica:
// 'let' = criar espaço de memória com nome
// Depois: aprender onde esse espaço "vive" (escopo)
// Depois: aprender as variações (const, var)`,
              explanation: "Estrutura de aprendizado importa. Lógica → sintaxe → padrões avançados. Nessa ordem."
            }
          ],
          
          prerequisites: [],
          nextRecommended: ["m1a2"],
          
          // ===== FIM PEDAGOGIA =====
          images: [
            {
              caption:
                "Algoritmo = passos claros para resolver um problema (diagrama)",
              svg: `
              <svg viewBox="0 0 700 320" xmlns="http://www.w3.org/2000/svg">
                <rect x="20" y="20" width="660" height="280" rx="18" fill="rgba(2,6,23,.55)" stroke="rgba(148,163,184,.25)"/>
                <text x="40" y="60" fill="rgba(229,231,235,.95)" font-size="18" font-family="Arial" font-weight="700">Algoritmo (exemplo: fazer café)</text>
                <g font-family="Arial" font-size="14" fill="rgba(229,231,235,.92)">
                  <rect x="40" y="90" width="180" height="46" rx="12" fill="rgba(96,165,250,.18)" stroke="rgba(96,165,250,.45)"/>
                  <text x="60" y="118">1) Pegar xícara</text>

                  <rect x="250" y="90" width="180" height="46" rx="12" fill="rgba(167,139,250,.18)" stroke="rgba(167,139,250,.45)"/>
                  <text x="270" y="118">2) Colocar pó</text>

                  <rect x="460" y="90" width="180" height="46" rx="12" fill="rgba(52,211,153,.16)" stroke="rgba(52,211,153,.40)"/>
                  <text x="480" y="118">3) Aquecer água</text>

                  <rect x="145" y="170" width="180" height="46" rx="12" fill="rgba(251,191,36,.16)" stroke="rgba(251,191,36,.40)"/>
                  <text x="165" y="198">4) Misturar</text>

                  <rect x="355" y="170" width="180" height="46" rx="12" fill="rgba(251,113,133,.16)" stroke="rgba(251,113,133,.40)"/>
                  <text x="375" y="198">5) Servir</text>
                </g>
                <g stroke="rgba(148,163,184,.55)" stroke-width="3">
                  <line x1="220" y1="113" x2="250" y2="113"/>
                  <line x1="430" y1="113" x2="460" y2="113"/>
                  <line x1="340" y1="136" x2="235" y2="170"/>
                  <line x1="340" y1="136" x2="355" y2="170"/>
                </g>
                <text x="40" y="260" fill="rgba(148,163,184,.95)" font-size="13" font-family="Arial">
                  Ideia central: o computador precisa de passos explícitos. Programar = transformar intenção em instruções.
                </text>
              </svg>`,
            },
          ],
          content: `
### 🎯 Objetivo da aula
Ao final desta aula você vai:
- Entender o que é programação de verdade (sem “decorar comandos”)
- Saber como um computador “pensa” (ele **não** interpreta intenções)
- Compreender o papel do JavaScript no navegador e fora dele
- Entender por que **lógica** vem antes da linguagem

---

### 1) O que é programar?
Programar é **ensinar o computador a resolver problemas** com instruções claras.

> Um humano entende contexto. Um computador entende **ordem**.

Se você disser: “Faça um café”, uma pessoa entende.  
O computador precisa de algo assim: **passo 1, passo 2, passo 3…**

**Programação = intenção → algoritmo → código → software.**

---

### 2) O que é algoritmo?
Algoritmo é uma sequência de passos lógicos para resolver um problema.

Exemplo simples (vida real):
1. Acordar  
2. Escovar os dentes  
3. Tomar café  
4. Sair de casa  

No código, você descreve passos que o computador executa.

---

### 3) O que é JavaScript?
JavaScript nasceu para deixar a web interativa. Hoje ele faz:
- Front-end (DOM, eventos, UI)
- Back-end (Node.js: APIs, servidores)
- Apps (React Native / Electron)
- Automação, testes, ferramentas

---

### 4) Como o JavaScript funciona?
No navegador:
- Você escreve JS
- O navegador interpreta
- Executa ações (mudar texto, validar formulário, buscar dados, etc.)

Exemplo:
\`\`\`js
alert("Olá, mundo!");
\`\`\`

---

### 5) Primeiro contato com código
Crie um arquivo \`script.js\` e escreva:

\`\`\`js
console.log("Meu primeiro código em JavaScript!");
\`\`\`

Abra o navegador → **F12** → Console.

---

### 6) O que é uma variável?
Variável é um **espaço na memória** com um nome.

\`\`\`js
let idade = 30; // cria variável
idade = 31;     // atualiza o valor
\`\`\`

- \`let\`: cria variável que pode mudar
- nome: \`idade\`
- valor: \`30\`

---

### 7) Tipos de dados (na prática)
- **String**: texto  
  \`let nome = "Carlos"\`
- **Number**: número inteiro ou decimal  
  \`let altura = 1.75\`
- **Boolean**: verdadeiro/falso  
  \`let maiorDeIdade = true\`

---

### 8) Exercício guiado
Crie variáveis: nome, idade, cidade, profissão e mostre no console:

\`\`\`js
let nome = "Ana";
let idade = 28;
let cidade = "São Paulo";
let profissao = "Desenvolvedora";

console.log(nome, idade, cidade, profissao);
\`\`\`

---

### ✅ O que você aprendeu
- O que é programação
- O que é algoritmo
- O papel do JavaScript
- Variáveis e tipos
- Primeiros passos com console
          `,
          examples: [
            {
              title: "Exemplo: algoritmo virando código",
              description:
                "Transforme um passo a passo em instruções executáveis (mesmo que simples).",
              code: `// Algoritmo: cumprimentar alguém
// 1) Receber nome
// 2) Mostrar mensagem

let nome = "Maria";
console.log("Olá, " + nome + "! Bem-vinda.");`,
            },
            {
              title: "Exemplo: depurando com console.log",
              description:
                "console.log é seu melhor amigo no começo (e no avançado também).",
              code: `let a = 10;
let b = 5;
let soma = a + b;

console.log("a =", a);
console.log("b =", b);
console.log("soma =", soma);`,
            },
          ],
          exercises: [
            {
              title: "Exercício 1 — Algoritmo em português",
              level: "Fácil",
              prompt:
                "Escreva um algoritmo (passo a passo) para 'trocar um pneu' ou 'fazer um sanduíche'. Depois, transforme em um console.log por passo.",
              solution: `// Exemplo: fazer sanduíche
console.log("Pegar pão");
console.log("Passar maionese");
console.log("Adicionar queijo e presunto");
console.log("Fechar o pão");
console.log("Servir");`,
            },
            {
              title: "Exercício 2 — Variáveis e tipos",
              level: "Fácil",
              prompt:
                "Crie 5 variáveis: nome (string), idade (number), altura (number), temCarteira (boolean), cidade (string). Imprima tudo.",
              solution: `let nome = "João";
let idade = 22;
let altura = 1.8;
let temCarteira = false;
let cidade = "Campinas";

console.log({ nome, idade, altura, temCarteira, cidade });`,
            },
            {
              title: "Desafio — Mini cadastro",
              level: "Médio",
              prompt:
                "Crie variáveis para um 'produto' (nome, preço, emEstoque). Mostre uma frase: 'O produto X custa Y e está em estoque: Z'.",
              solution: `let nomeProduto = "Mouse";
let preco = 79.9;
let emEstoque = true;

console.log("O produto " + nomeProduto + " custa " + preco + " e está em estoque: " + emEstoque);`,
            },
          ],
          checklist: [
            "Entendi a diferença entre intenção e instrução.",
            "Sei o que é algoritmo e consigo escrever um.",
            "Criei variáveis com let e alterei valores.",
            "Sei a diferença entre string, number e boolean.",
            "Usei o console do navegador (F12).",
          ],
          quiz: [
            {
              q: "O que é um algoritmo?",
              options: [
                "Um tipo de variável no JavaScript",
                "Uma sequência lógica de passos para resolver um problema",
                "Um erro do navegador",
                "Uma biblioteca",
              ],
              answerIndex: 1,
            },
            {
              q: "Qual comando exibe mensagem no console?",
              options: ["alert()", "print()", "console.log()", "show()"],
              answerIndex: 2,
            },
            {
              q: "Qual tipo representa verdadeiro/falso?",
              options: ["String", "Number", "Boolean", "Null"],
              answerIndex: 2,
            },
          ],
        },

        {
          id: "m1a2",
          title: "Aula 2 — Operadores e Lógica (profundo, com exemplos)",
          duration: "60–90 min",
          level: "Iniciante",
          tags: ["operadores", "if", "else", "switch", "lógica"],
          tip: "O segredo aqui é pensar em 'condições' como perguntas que retornam true/false.",
          
          // ===== PEDAGOGIA NOVA =====
          learningOutcomes: [
            "✓ Dominar operadores aritméticos e de comparação sem confusão",
            "✓ Entender o poder dos operadores lógicos (&&, ||, !)",
            "✓ Escrever condições que fazem sentido lógico",
            "✓ Saber quando usar if/else e quando usar switch",
            "✓ Criar lógica de negócio clara (preços, validações, classificações)"
          ],
          
          realWorldContext: {
            description: "Operadores e lógica são o coração de praticamente todo software. Desde um simples validador de email até sistemas bancários complexos, tudo usa essas ideias para tomar decisões e proteger dados.",
            examples: [
              "Validação: if (email.includes('@') && email.includes('.')) permite envio",
              "Controle de acesso: if (idade >= 18 && temPagado) mostra conteúdo",
              "E-commerce: switch(statusPedido) renderiza botão 'Enviar' ou 'Entregar'"
            ]
          },
          
          commonMistakes: [
            {
              title: "Confundir == com ===",
              wrong: `if (5 == "5") { // true (mas perigoso!)
  console.log("São iguais");
}`,
              right: `if (5 === "5") { // false (correto, tipos diferentes)
  console.log("São iguais");
} else {
  console.log("Tipos diferentes");
}`,
              explanation: "== faz 'coerção de tipo' (tenta converter), === compara tipo E valor. Use === sempre em produção."
            },
            {
              title: "Esquecer que 0, '', null, undefined são 'falsy'",
              wrong: `let preco = 0;
if (preco) { // false, porque 0 é 'falsy'
  console.log("Preço válido");
}`,
              right: `let preco = 0;
if (preco >= 0) { // true, comparação explícita
  console.log("Preço válido");
}`,
              explanation: "Em JavaScript, alguns valores são 'falsy': 0, '', null, undefined, false, NaN. Não confie em truthy/falsy em código crítico."
            },
            {
              title: "Lógica complicada em uma linha só",
              wrong: `if (idade >= 18 && temDinheiro && temCarteira || maiorQueOutraPessoa) {
  // Que lógica é essa? if (a && b && c || d)?
}`,
              right: `const podeComprar = idade >= 18 && temDinheiro;
const temMetodos = temCarteira || temPix;
if (podeComprar && temMetodos) {
  console.log("Pode comprar");
}`,
              explanation: "Separe a lógica em variáveis nomeadas. Fica claro, legível e fácil de debugar depois."
            }
          ],
          
          prerequisites: ["m1a1"],
          nextRecommended: ["m1a3"],
          
          // ===== FIM PEDAGOGIA =====
          
          content: `
### 🎯 Objetivo
Você vai dominar:
- Operadores aritméticos, comparação, lógicos
- Pensamento booleano (true/false)
- Tomada de decisão com \`if/else\` e \`switch\`

---

### 1) Operadores aritméticos
\`+ - * / %\`  
\`%\` é o **resto** (muito útil pra par/ímpar).

\`\`\`js
10 % 2 // 0 (par)
10 % 3 // 1 (resto 1)
\`\`\`

---

### 2) Comparação
Prefira \`===\` em vez de \`==\`.

\`\`\`js
5 == "5"   // true (coerção)
5 === "5"  // false (tipo diferente)
\`\`\`

---

### 3) Operadores lógicos
- \`&&\` (E) → tudo precisa ser true  
- \`||\` (OU) → basta um ser true  
- \`!\` (NÃO) → inverte

---

### 4) If/Else (decisão)
\`\`\`js
let idade = 20;
if (idade >= 18) {
  console.log("Maior de idade");
} else {
  console.log("Menor de idade");
}
\`\`\`

---

### 5) Else if (múltiplas faixas)
\`\`\`js
let nota = 6;
if (nota >= 7) console.log("Aprovado");
else if (nota >= 5) console.log("Recuperação");
else console.log("Reprovado");
\`\`\`

---

### 6) Switch (muitas opções fixas)
\`\`\`js
let dia = 2;
switch (dia) {
  case 1: console.log("Segunda"); break;
  case 2: console.log("Terça"); break;
  default: console.log("Inválido");
}
\`\`\`
          `,
          examples: [
            {
              title: "Exemplo: validação com &&",
              description:
                "Duas condições precisam ser verdadeiras para permitir acesso.",
              code: `let idade = 19;
let temIngresso = true;

if (idade >= 18 && temIngresso) {
  console.log("Pode entrar");
} else {
  console.log("Não pode entrar");
}`,
            },
          ],
          exercises: [
            {
              title: "Exercício — Par ou ímpar",
              level: "Fácil",
              prompt:
                "Crie uma variável numero e diga se é par ou ímpar usando %.",
              solution: `let numero = 17;
if (numero % 2 === 0) console.log("Par");
else console.log("Ímpar");`,
            },
            {
              title: "Desafio — Classificação de idade",
              level: "Médio",
              prompt:
                "Criança (<12), Adolescente (12–17), Adulto (18–59), Idoso (60+).",
              solution: `let idade = 60;

if (idade < 12) console.log("Criança");
else if (idade < 18) console.log("Adolescente");
else if (idade < 60) console.log("Adulto");
else console.log("Idoso");`,
            },
          ],
          checklist: [
            "Sei usar + - * / %.",
            "Entendi a diferença entre == e ===.",
            "Sei usar &&, || e !.",
            "Consigo criar decisões com if/else.",
            "Consigo usar switch para opções fixas.",
          ],
          quiz: [
            {
              q: "Qual operador verifica igualdade com tipo?",
              options: ["==", "===", "=", "!="],
              answerIndex: 1,
            },
            {
              q: "O operador % retorna:",
              options: ["O quociente", "O resto", "A soma", "A potência"],
              answerIndex: 1,
            },
          ],
        },

        {
          id: "m1a3",
          title: "Aula 3 — Laços (for/while) e repetição inteligente",
          duration: "60–90 min",
          level: "Iniciante",
          tags: ["for", "while", "loop", "repetição"],
          tip: "Loop bom tem condição de parada clara. Loop ruim vira loop infinito.",
          
          // ===== PEDAGOGIA NOVA =====
          learningOutcomes: [
            "✓ Entender quando usar for vs while",
            "✓ Escrever loops sem criar infinitos (armadilha clássica)",
            "✓ Usar break e continue com propósito",
            "✓ Fazer operações repetidas em listas de dados",
            "✓ Debugar loops que não funcionam"
          ],
          
          realWorldContext: {
            description: "Loops são fundamentais porque dados vêm em listas. Você precisa processar cada item: validar, transformar, contar, filtrar. Toda aplicação que trabalha com dados usa loops.",
            examples: [
              "Processar lista de usuários: enviar email para cada um",
              "Calcular média: somar todos os valores e dividir pela quantidade",
              "Validar formulário: verificar cada campo até encontrar erro"
            ]
          },
          
          commonMistakes: [
            {
              title: "Criar loop infinito sem perceber",
              wrong: `let i = 0;
while (i < 10) {
  console.log(i);
  // Esqueceu de i++! Loop infinito!
}`,
              right: `let i = 0;
while (i < 10) {
  console.log(i);
  i++; // Agora muda, loop termina
}`,
              explanation: "while precisa que algo mude para a condição ficar falsa. Sempre verifique: o que muda a cada volta?"
            },
            {
              title: "Usar for quando deveria usar while",
              wrong: `// Você não sabe quantas vezes vai repetir
let tentativas = 0;
for (let i = 0; i < ???; i++) { // Quantas?
  // Try API
  tentativas++;
}`,
              right: `let tentativas = 0;
let sucesso = false;
while (!sucesso && tentativas < 3) {
  // Try API
  tentativas++;
  if (resposta.ok) sucesso = true;
}`,
              explanation: "for é para quando você SABE a quantidade. while é para quando depende de uma condição desconhecida."
            },
            {
              title: "Modificar array dentro do loop sem cuidado",
              wrong: `let items = [1,2,3,4,5];
for (let i = 0; i < items.length; i++) {
  if (items[i] === 3) {
    items.splice(i, 1); // Pula item!
  }
}`,
              right: `let items = [1,2,3,4,5];
items = items.filter(x => x !== 3); // Melhor

// OU:
for (let i = items.length - 1; i >= 0; i--) {
  if (items[i] === 3) items.splice(i, 1); // Reverso funciona
}`,
              explanation: "Modificar array durante iteração causa pulos. Use filter ou itere de trás para frente."
            }
          ],
          
          prerequisites: ["m1a2"],
          nextRecommended: [],
          
          // ===== FIM PEDAGOGIA =====
          
          content: `
### Por que loops existem?
Porque repetição manual é erro e desperdício.

### \`for\` (quando você sabe a quantidade)
\`\`\`js
for (let i = 1; i <= 10; i++) console.log(i);
\`\`\`

### \`while\` (quando depende de condição)
\`\`\`js
let tentativas = 0;
while (tentativas < 3) {
  console.log("Tentativa:", tentativas + 1);
  tentativas++;
}
\`\`\`

### Cuidado com loops infinitos
Sempre garanta que algo muda para a condição ficar falsa.
          `,
          exercises: [
            {
              title: "Exercício — Tabuada",
              level: "Médio",
              prompt: "Mostre a tabuada do 5 (5x1 até 5x10).",
              solution: `let n = 5;
for (let i = 1; i <= 10; i++) {
  console.log(\`\${n} x \${i} = \${n * i}\`);
}`,
            },
          ],
          checklist: [
            "Consigo usar for com contador.",
            "Consigo usar while com condição.",
            "Sei evitar loop infinito.",
            "Consigo fazer tabuada com loop.",
          ],
        },

        {
          id: "m1proj1",
          title: "Projeto 1 — Calculadora de IMC (passo a passo)",
          duration: "90–140 min",
          level: "Iniciante",
          tags: ["projeto", "funções", "if", "lógica"],
          tip: "Projetos são onde você aprende de verdade. Faça e refaça.",
          content: `
Vamos construir uma calculadora de IMC (ainda em console, sem HTML por enquanto).

**Regras:**
\`imc = peso / (altura * altura)\`

Classificação:
- < 18.5: abaixo do peso
- < 25: normal
- < 30: sobrepeso
- >= 30: obesidade
          `,
          project: {
            goal: "Calcular IMC e exibir classificação usando funções e condicionais.",
            steps: [
              "Criar variáveis peso e altura.",
              "Calcular o IMC.",
              "Criar uma função classificarIMC(imc).",
              "Exibir imc com 2 casas decimais e classificação.",
            ],
            starterCode: `let peso = 80;
let altura = 1.75;

// TODO: calcular IMC
// TODO: classificar e imprimir`,
            solution: `let peso = 80;
let altura = 1.75;

let imc = peso / (altura * altura);

function classificarIMC(imc) {
  if (imc < 18.5) return "Abaixo do peso";
  if (imc < 25) return "Normal";
  if (imc < 30) return "Sobrepeso";
  return "Obesidade";
}

console.log("IMC:", imc.toFixed(2));
console.log("Classificação:", classificarIMC(imc));`,
          },
          checklist: [
            "Sei usar funções com return.",
            "Consigo usar if/else if para faixas.",
            "Consigo calcular e formatar números (toFixed).",
            "Consigo organizar o código em etapas.",
          ],
        },

        {
          id: "m1a4",
          title: "Aula 4 — Funções (funções, parâmetros, return)",
          duration: "60–90 min",
          level: "Intermediário",
          tags: ["funções", "return", "parâmetros", "escopo"],
          tip: "Funções são 'caixas de código reutilizável'. Bem feitas, elas tornam seu código limpo e profissional.",
          
          learningOutcomes: [
            "✓ Entender funções como blocos reutilizáveis",
            "✓ Usar parâmetros e return corretamente",
            "✓ Evitar efeitos colaterais (side effects)",
            "✓ Debugar funções com problemas",
            "✓ Usar funções anônimas e arrow functions"
          ],
          
          realWorldContext: {
            description: "Funções são o coração de qualquer código profissional. Apps grandes são muitas funções pequenas, cada uma com responsabilidade clara. Você precisa ser expert nisso.",
            examples: [
              "Validar email: função que retorna true/false",
              "Enviar dados para servidor: função que dispara requisição",
              "Formatar número como moeda: função reutilizável em 10 lugares"
            ]
          },
          
          commonMistakes: [
            {
              title: "Não fazer return quando deveria",
              wrong: `function dobro(n) {
  console.log(n * 2); // Só imprime, não retorna!
}

let resultado = dobro(5); // undefined!`,
              right: `function dobro(n) {
  return n * 2; // Agora retorna
}

let resultado = dobro(5); // 10`,
              explanation: "console.log mostra na tela, mas return de verdade envia o valor. Use return quando precisa usar o resultado depois."
            },
            {
              title: "Modificar variáveis globais dentro da função (side effect)",
              wrong: `let contador = 0;

function incrementar() {
  contador++; // Modifica global. Confunde, cria bugs.
}`,
              right: `function incrementar(valor) {
  return valor + 1; // Puro: só toma entrada, devolve resultado
}

let contador = 0;
contador = incrementar(contador);`,
              explanation: "Funções 'puras' são previsíveis: mesma entrada = mesma saída. Evita bugs surpresa."
            },
            {
              title: "Confundir função com chamada de função",
              wrong: `let fn = alert("oi"); // Chama AGORA, não depois!
setTimeout(fn, 1000); // undefined! Erro!`,
              right: `let fn = () => alert("oi"); // Função anônima (arrow)
setTimeout(fn, 1000); // Chama depois`,
              explanation: "fn = alert('oi') executa agora. fn = () => alert('oi') armazena para depois."
            }
          ],
          
          prerequisites: ["m1a3"],
          nextRecommended: ["m1a5"],
          
          content: `
### 🎯 Objetivo
Dominar funções: criar, reutilizar, evitar erros comuns.

### Declaração básica
\`\`\`js
function saudacao(nome) {
  return "Olá, " + nome;
}

console.log(saudacao("Maria"));
\`\`\`

### Parâmetros e argumentos
- **Parâmetros**: variáveis na declaração
- **Argumentos**: valores quando chama

\`\`\`js
function soma(a, b) { // a, b = parâmetros
  return a + b;
}

soma(3, 5); // 3, 5 = argumentos
\`\`\`

### Arrow functions (ES6)
\`\`\`js
const dobro = (n) => n * 2;
console.log(dobro(5)); // 10
\`\`\`

### Funções anônimas (usadas com setTimeout, map, etc)
\`\`\`js
setTimeout(() => {
  console.log("depois de 1s");
}, 1000);
\`\`\`

### Boas práticas
- Uma função = uma responsabilidade
- Nomes descritivos: \`validarEmail\`, não \`ve\`
- Avoid side effects (não modifique globais)
- Sempre teste com casos extremos
          `,
          exercises: [
            {
              title: "Exercício 1 — Função com múltiplos parâmetros",
              level: "Fácil",
              prompt: "Crie uma função que calcula a área de um retângulo (base × altura).",
              solution: `function areaRetangulo(base, altura) {
  return base * altura;
}

console.log(areaRetangulo(5, 3)); // 15`,
            },
            {
              title: "Exercício 2 — Validação",
              level: "Médio",
              prompt: "Crie uma função que valida se um número está entre 0 e 100.",
              solution: `function ehValido(num) {
  return num >= 0 && num <= 100;
}

console.log(ehValido(50));  // true
console.log(ehValido(150)); // false`,
            },
          ],
          checklist: [
            "Consigo criar funções com return.",
            "Entendo diferença entre parâmetro e argumento.",
            "Sei usar arrow functions.",
            "Evito side effects em funções.",
          ],
          quiz: [
            {
              q: "Qual a diferença entre console.log e return?",
              options: [
                "Nenhuma, fazem a mesma coisa",
                "log mostra na tela, return envia o valor",
                "return é mais rápido",
                "log é melhor para funções",
              ],
              answerIndex: 1,
            },
          ],
        },

        {
          id: "m1a5",
          title: "Aula 5 — Arrays (índices, métodos, map, filter, reduce)",
          duration: "70–110 min",
          level: "Intermediário",
          tags: ["arrays", "map", "filter", "reduce", "forEach"],
          tip: "Arrays são dados em lista. Map/filter/reduce transformam listas inteligentemente. Isso é o que 99% do código faz.",
          
          learningOutcomes: [
            "✓ Criar e acessar arrays por índice",
            "✓ Usar forEach, map, filter, reduce",
            "✓ Diferenciar quando usar cada método",
            "✓ Transformar dados de forma funcional",
            "✓ Debugar problemas com arrays"
          ],
          
          realWorldContext: {
            description: "Todo app que mostra listas (redes sociais, e-commerce, dados) usa arrays. Você precisa saber: filtrar produtos, mapear usuários, somar totais, remover itens. Isso é o essencial.",
            examples: [
              "E-commerce: filtrar produtos por preço ou categoria",
              "App de tarefas: mapear tarefas para elementos HTML",
              "Dashboard: somar receita total com reduce"
            ]
          },
          
          commonMistakes: [
            {
              title: "Esquecer que arrays começam em 0",
              wrong: `let frutas = ["maçã", "banana", "laranja"];
console.log(frutas[1]); // Esperava maçã, got banana`,
              right: `let frutas = ["maçã", "banana", "laranja"];
console.log(frutas[0]); // maçã (índice 0)`,
              explanation: "Primeira posição é índice 0, segunda é 1. Sempre."
            },
            {
              title: "Confundir map com forEach",
              wrong: `let nums = [1,2,3];
let dobrados = nums.forEach(n => n * 2);
console.log(dobrados); // undefined!`,
              right: `let nums = [1,2,3];
let dobrados = nums.map(n => n * 2);
console.log(dobrados); // [2,4,6]`,
              explanation: "forEach = faz algo em cada item. map = transforma e retorna novo array."
            },
          ],
          
          prerequisites: ["m1a4"],
          nextRecommended: ["m1a6"],
          
          content: `
### Arrays: coleções de dados
\`\`\`js
let numeros = [1, 2, 3, 4, 5];
let nomes = ["Ana", "Bruno", "Carlos"];

console.log(numeros[0]); // 1 (primeiro)
console.log(nomes[2]);   // Carlos (terceiro)
\`\`\`

### forEach (faz algo em cada item, sem retorno)
\`\`\`js
numeros.forEach(n => console.log(n * 2));
// Imprime: 2, 4, 6, 8, 10
\`\`\`

### map (transforma, retorna novo array)
\`\`\`js
let dobrados = numeros.map(n => n * 2);
console.log(dobrados); // [2,4,6,8,10]
\`\`\`

### filter (mantém apenas o que passa no teste)
\`\`\`js
let pares = numeros.filter(n => n % 2 === 0);
console.log(pares); // [2,4]
\`\`\`

### reduce (combina em 1 resultado)
\`\`\`js
let soma = numeros.reduce((acc, n) => acc + n, 0);
console.log(soma); // 15
\`\`\`

### Métodos úteis
- \`push\`: adiciona ao final
- \`pop\`: remove do final  
- \`shift\`: remove do início
- \`unshift\`: adiciona no início
- \`includes\`: verifica se contém
- \`indexOf\`: encontra posição
          `,
          exercises: [
            {
              title: "Exercício — Filter números pares",
              level: "Médio",
              prompt: "Dado um array [1,2,3,4,5,6,7,8,9,10], filtre apenas os pares.",
              solution: `let nums = [1,2,3,4,5,6,7,8,9,10];
let pares = nums.filter(n => n % 2 === 0);
console.log(pares); // [2,4,6,8,10]`,
            },
            {
              title: "Exercício — Map com transformação",
              level: "Médio",
              prompt: "Dado ['João', 'Maria', 'Pedro'], mapeie para maiúsculas.",
              solution: `let nomes = ['João', 'Maria', 'Pedro'];
let maiúsculas = nomes.map(n => n.toUpperCase());
console.log(maiúsculas); // ['JOÃO', 'MARIA', 'PEDRO']`,
            },
          ],
          checklist: [
            "Sei usar forEach, map, filter.",
            "Entendo reduce (até que point).",
            "Consigo filtrar arrays por condição.",
            "Sei transformar arrays com map.",
          ],
        },

        {
          id: "m1a6",
          title: "Aula 6 — Objetos (propriedades, métodos, this)",
          duration: "60–90 min",
          level: "Intermediário",
          tags: ["objetos", "propriedades", "métodos", "this", "JSON"],
          tip: "Objetos agrupam dados e comportamentos relacionados. Você vai ver eles em todo código JS profissional.",
          
          learningOutcomes: [
            "✓ Criar objetos com {} e acessar propriedades",
            "✓ Adicionar e modificar propriedades dinamicamente",
            "✓ Criar métodos (funções dentro de objetos)",
            "✓ Entender 'this' dentro de métodos",
            "✓ Trabalhar com JSON (parse e stringify)"
          ],
          
          realWorldContext: {
            description: "Tudo no navegador é um objeto: documento, usuário logado, carrinho de compras, configurações. JSON (notação de objetos) é o formato universal para dados na web.",
            examples: [
              "Usuário com propriedades: nome, email, ativo, saldo",
              "Produto com métodos: calcularDesconto(), validar()",
              "APIs retornam JSON que você converte para objetos"
            ]
          },
          
          commonMistakes: [
            {
              title: "Esquecer de usar 'this' dentro de métodos",
              wrong: `let pessoa = {
  nome: "Ana",
  saudar: function() {
    return "Olá " + nome; // undefined! Não achou 'nome'
  }
};`,
              right: `let pessoa = {
  nome: "Ana",
  saudar: function() {
    return "Olá " + this.nome; // Acessa propriedade do objeto
  }
};`,
              explanation: "'this' refere ao objeto que contém o método. Sem 'this', JS procura em escopo global."
            },
          ],
          
          prerequisites: ["m1a5"],
          nextRecommended: ["m1a7"],
          
          content: `
### Criando objetos
\`\`\`js
let usuario = {
  nome: "Maria",
  email: "maria@example.com",
  ativo: true,
  saldo: 1500
};

console.log(usuario.nome); // Maria
\`\`\`

### Adicionando propriedades
\`\`\`js
usuario.idade = 28;
usuario["telefone"] = "1234567890";
\`\`\`

### Métodos (funções dentro de objetos)
\`\`\`js
let calculadora = {
  somar: function(a, b) {
    return a + b;
  },
  dividir: (a, b) => a / b
};

console.log(calculadora.somar(10, 5)); // 15
\`\`\`

### 'this' dentro de métodos
\`\`\`js
let conta = {
  saldo: 1000,
  sacar: function(valor) {
    this.saldo -= valor; // 'this' = conta
    return "Saldo: " + this.saldo;
  }
};
\`\`\`

### JSON (JavaScript Object Notation)
\`\`\`js
// Converter objeto para JSON (texto)
let json = JSON.stringify(usuario);
// {"nome":"Maria","email":"maria@example.com"...}

// Converter JSON para objeto
let obj = JSON.parse(json);
\`\`\`
          `,
          exercises: [
            {
              title: "Exercício — Objeto produto",
              level: "Fácil",
              prompt: "Crie um objeto 'produto' com nome, preço, estoque. Adicione método que calcula valor total (preço × estoque).",
              solution: `let produto = {
  nome: "Notebook",
  preco: 2000,
  estoque: 5,
  valorTotal: function() {
    return this.preco * this.estoque;
  }
};

console.log(produto.valorTotal()); // 10000`,
            },
          ],
          checklist: [
            "Sei criar objetos com {}.",
            "Entendo propriedades e métodos.",
            "Uso 'this' corretamente.",
            "Consigo usar JSON.stringify e JSON.parse.",
          ],
        },

        {
          id: "m1a7",
          title: "Aula 7 — Classes (ES6) e programação orientada a objetos",
          duration: "70–110 min",
          level: "Intermediário",
          tags: ["classes", "constructor", "herança", "extends"],
          tip: "Classes tornam código grande mais organizado. Depois de funções e objetos, é o próximo passo natural.",
          
          learningOutcomes: [
            "✓ Criar classes com constructor e propriedades",
            "✓ Criar instâncias com 'new'",
            "✓ Usar herança com extends",
            "✓ Criar métodos estáticos",
            "✓ Entender quando usar classes vs objetos"
          ],
          
          prerequisites: ["m1a6"],
          nextRecommended: ["m1a8"],
          
          content: `
### Sintaxe básica
\`\`\`js
class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  apresentar() {
    return \`Olá, sou \${this.nome}\`;
  }
}

let pessoa = new Pessoa("Ana", 28);
console.log(pessoa.apresentar()); // Olá, sou Ana
\`\`\`

### Herança
\`\`\`js
class Animal {
  fazer_som() {
    return "...";
  }
}

class Cachorro extends Animal {
  fazer_som() {
    return "Au au!";
  }
}

let dog = new Cachorro();
console.log(dog.fazer_som()); // Au au!
\`\`\`

### Métodos estáticos
\`\`\`js
class Matemática {
  static PI = 3.14159;
  
  static dobro(n) {
    return n * 2;
  }
}

console.log(Matemática.dobro(5)); // 10
\`\`\`
          `,
          checklist: [
            "Consigo criar uma classe simples.",
            "Entendo constructor.",
            "Sei usar herança.",
            "Sou capaz de instanciar com new.",
          ],
        },

        {
          id: "m1a8",
          title: "Aula 8 — Tratamento de erros (try/catch/finally e debugging)",
          duration: "50–80 min",
          level: "Intermediário",
          tags: ["try", "catch", "finally", "debugging", "console"],
          tip: "Código profissional trata erros gracefully. Não deixa o app quebrar silenciosamente.",
          
          learningOutcomes: [
            "✓ Usar try/catch para pegar erros",
            "✓ Criar e lançar erros próprios",
            "✓ Debugar com console e DevTools",
            "✓ Diferenciar tipos de erro (TypeError, ReferenceError, etc)",
            "✓ Usar finally para limpeza"
          ],
          
          prerequisites: ["m1a7"],
          nextRecommended: ["m1a9"],
          
          content: `
### Try/catch básico
\`\`\`js
try {
  // Código que pode gerar erro
  let resultado = 10 / 0; // Não dá erro aqui...
  JSON.parse("JSON inválido"); // ...mas aqui dá
} catch (erro) {
  console.log("Capturei erro:", erro.message);
}
\`\`\`

### Lançar erro customizado
\`\`\`js
try {
  let idade = -5;
  if (idade < 0) {
    throw new Error("Idade não pode ser negativa");
  }
} catch (e) {
  console.log(e.message);
}
\`\`\`

### Finally (sempre executa)
\`\`\`js
try {
  fazAlgo();
} catch (e) {
  console.log("erro");
} finally {
  console.log("Isso sempre roda");
}
\`\`\`

### Debugging com console
\`\`\`js
console.log(variavel);      // valor
console.warn("aviso");      // amarelo
console.error("erro");      // vermelho
console.table(array);       // tabela
console.assert(condicao);   // se falso, mostra erro
\`\`\`
          `,
          checklist: [
            "Consigo usar try/catch.",
            "Sei lançar erros com throw.",
            "Uso console para debugar.",
            "Entendo tipos comuns de erro.",
          ],
        },

        {
          id: "m1a9",
          title: "Aula 9 — Destructuring, spread operator e ES6+",
          duration: "60–90 min",
          level: "Intermediário",
          tags: ["destructuring", "spread", "rest", "template literals"],
          tip: "Essas features modernizam seu código. Apps profissionais usam todas.",
          
          learningOutcomes: [
            "✓ Usar destructuring em arrays e objetos",
            "✓ Usar spread operator (...) para copiar/expandir",
            "✓ Usar rest parameters em funções",
            "✓ Template literals com `backticks`",
            "✓ Conhecer sintaxe moderna importante"
          ],
          
          prerequisites: ["m1a8"],
          nextRecommended: ["m1a10"],
          
          content: `
### Destructuring de arrays
\`\`\`js
let [a, b, c] = [1, 2, 3];
console.log(a); // 1

// Ignorar elementos
let [primeiro, , terceiro] = [10, 20, 30];
console.log(primeiro, terceiro); // 10, 30
\`\`\`

### Destructuring de objetos
\`\`\`js
let pessoa = { nome: "Ana", idade: 28 };
let { nome, idade } = pessoa;
console.log(nome); // Ana
\`\`\`

### Spread operator (...)
\`\`\`js
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5];
console.log(arr2); // [1, 2, 3, 4, 5]

let obj1 = { a: 1, b: 2 };
let obj2 = { ...obj1, c: 3 };
console.log(obj2); // {a: 1, b: 2, c: 3}
\`\`\`

### Rest parameters
\`\`\`js
function somar(...numeros) {
  return numeros.reduce((a, b) => a + b, 0);
}

console.log(somar(1, 2, 3, 4)); // 10
\`\`\`

### Template literals
\`\`\`js
let nome = "Maria";
let msg = \`Olá, \${nome}! Bem-vinda.\`;
console.log(msg); // Olá, Maria! Bem-vinda.
\`\`\`
          `,
          checklist: [
            "Consigo usar destructuring.",
            "Entendo spread operator.",
            "Uso template literals.",
            "Conheço rest parameters.",
          ],
        },

        {
          id: "m1a10",
          title: "Aula 10 — Closures e escopos avançados (último do módulo 1)",
          duration: "70–100 min",
          level: "Intermediário avançado",
          tags: ["closures", "escopo", "var", "let", "const", "hoisting"],
          tip: "Closures são 'mágica' que parece, mas é lógica simples. Entender isso te torna um dev muito melhor.",
          
          learningOutcomes: [
            "✓ Entender escopo global, local e de bloco",
            "✓ Entender closures profundamente",
            "✓ Diferenças entre var, let, const",
            "✓ Hoisting e seu impacto",
            "✓ Factory functions e padrões avançados"
          ],
          
          prerequisites: ["m1a9"],
          nextRecommended: [],
          
          content: `
### Escopos
**Global**: visível em qualquer lugar
**Local**: dentro de uma função
**Bloco**: dentro de { } (let e const)

\`\`\`js
var x = 1;      // global (evite)
let y = 2;      // bloco
const z = 3;    // bloco + imutável

function teste() {
  let local = 4; // vive só aqui dentro
  console.log(y); // vê 'y' do escopo pai
}
\`\`\`

### Closures
Uma função que "lembra" do escopo onde foi criada.

\`\`\`js
function contador() {
  let count = 0; // privada
  return function() {
    count++;
    return count;
  };
}

let c = contador();
console.log(c()); // 1
console.log(c()); // 2
\`\`\`

### var vs let vs const
- **var**: global ou função, pode redeclarar
- **let**: bloco, não pode redeclarar (preferred)
- **const**: bloco, imutável, prefira isso

\`\`\`js
const usuario = { nome: "Ana" };
usuario.nome = "Bruno"; // OK (modifica propriedade)
usuario = {}; // ERRO (reatribui)
\`\`\`

### Hoisting
Variáveis (var) e funções são "puxadas" para cima.

\`\`\`js
console.log(x); // undefined (hoisted, mas sem valor)
var x = 5;

console.log(fn()); // funciona! (função hoisted completa)
function fn() { return "oi"; }
\`\`\`
          `,
          checklist: [
            "Entendo escopos e closures.",
            "Sei as diferenças var/let/const.",
            "Consigo usar closures para dados privados.",
            "Entendo hoisting.",
          ],
        },
      ],
    },

    {
      id: "m2",
      title: "Módulo 2 — DOM, Eventos e Interfaces (Intermediário)",
      description:
        "Aqui o JS ganha vida na tela: DOM, eventos, classes, localStorage e projetos.",
      lessons: [
        {
          id: "m2a1",
          title: "Aula 9 — DOM na prática (seleção, texto, classes, atributos)",
          duration: "70–110 min",
          level: "Intermediário",
          tags: ["DOM", "querySelector", "eventos", "classList"],
          tip: "DOM é uma árvore. Pense em selecionar nós e mudar propriedades.",
          content: `
### O que é DOM?
O navegador transforma seu HTML em uma árvore de objetos. O JS consegue:
- Ler elementos
- Alterar texto/HTML
- Alterar classes/estilos
- Criar/remover elementos

### Seletores (os mais usados)
- \`document.querySelector("#id")\`
- \`document.querySelector(".classe")\`
- \`document.querySelectorAll("li")\`

### Texto vs HTML
- \`textContent\`: texto seguro
- \`innerHTML\`: insere HTML (cuidado com segurança em apps reais)

### Classes
\`\`\`js
el.classList.add("ativo")
el.classList.remove("ativo")
el.classList.toggle("ativo")
\`\`\`
          `,
          exercises: [
            {
              title: "Exercício — Botão contador",
              level: "Médio",
              prompt: "Crie um botão que ao clicar aumenta um número na tela.",
              solution: `// HTML: <button id="btn">Clique</button><p id="n">0</p>
const btn = document.querySelector("#btn");
const p = document.querySelector("#n");
let v = 0;

btn.addEventListener("click", () => {
  v++;
  p.textContent = v;
});`,
            },
          ],
          checklist: [
            "Consigo selecionar elementos com querySelector.",
            "Sei alterar textContent.",
            "Sei usar classList.",
            "Sei ouvir eventos com addEventListener.",
          ],
        },

        {
          id: "m2proj1",
          title: "Projeto 2 — To-do List com LocalStorage (profissional)",
          duration: "2–4 horas",
          level: "Intermediário",
          tags: ["projeto", "DOM", "localStorage", "CRUD"],
          tip: "Esse projeto é ótimo para portfólio. Capriche no README no GitHub.",
          content: `
Vamos criar uma To-do List completa:
- Adicionar tarefa
- Remover tarefa
- Persistir no navegador com localStorage
- (Extra) Marcar como concluída e filtrar
          `,
          project: {
            goal: "Construir uma To-do List funcional usando DOM + localStorage.",
            steps: [
              "Montar HTML: input + botão + lista.",
              "Criar função renderTarefa(texto).",
              "Salvar lista no localStorage (JSON).",
              "Carregar lista ao iniciar.",
              "Excluir tarefa e salvar novamente.",
              "Extras: concluir + filtros.",
            ],
            starterCode: `// Estrutura sugerida:
// tarefas = [{ id, texto, done }]
// salvar(), carregar(), render()
`,
            solution: `// Exemplo de modelagem de tarefas:
const KEY = "tarefas_v1";
let tarefas = JSON.parse(localStorage.getItem(KEY)) || [];

function salvar() {
  localStorage.setItem(KEY, JSON.stringify(tarefas));
}

function adicionar(texto) {
  tarefas.push({ id: crypto.randomUUID(), texto, done: false });
  salvar();
  render();
}

function remover(id) {
  tarefas = tarefas.filter(t => t.id !== id);
  salvar();
  render();
}

function alternar(id) {
  tarefas = tarefas.map(t => t.id === id ? { ...t, done: !t.done } : t);
  salvar();
  render();
}

const ul = document.querySelector("#lista");

function render() {
  ul.innerHTML = "";
  for (const t of tarefas) {
    const li = document.createElement("li");
    li.className = "todo-item";

    const span = document.createElement("span");
    span.textContent = t.texto;
    if (t.done) span.style.textDecoration = "line-through";

    const btnDone = document.createElement("button");
    btnDone.textContent = t.done ? "Reabrir" : "Concluir";
    btnDone.onclick = () => alternar(t.id);

    const btnDel = document.createElement("button");
    btnDel.textContent = "Excluir";
    btnDel.onclick = () => remover(t.id);

    li.append(span, btnDone, btnDel);
    ul.appendChild(li);
  }
}

render();`,
          },
          checklist: [
            "Tenho CRUD básico funcionando (adicionar/remover).",
            "Persisto tarefas em localStorage.",
            "Tenho renderização consistente (render()).",
            "Consigo concluir tarefa (extra).",
          ],
        },
      ],
    },

    // ======== SUBSTITUA A PARTIR DO MÓDULO 3 (m3) ATÉ O FINAL DO MÓDULO 5 (m5) ========

    {
      id: "m3",
      title:
        "Módulo 3 — JavaScript Assíncrono, Fetch e APIs (Intermediário forte)",
      description:
        "Você vai dominar Promises, async/await, fetch, JSON, erros, loading, e construir apps que consomem APIs como um dev profissional.",
      lessons: [
        {
          id: "m3a1",
          title:
            "Aula 1 — Assíncrono do zero: por que existe, Event Loop e setTimeout",
          duration: "90–140 min",
          level: "Intermediário",
          tags: [
            "assíncrono",
            "event loop",
            "setTimeout",
            "call stack",
            "web APIs",
          ],
          tip: "Assíncrono não é ‘mágica’. É um jeito de lidar com tarefas lentas sem travar a execução. Entenda o fluxo e você domina todo o resto.",
          images: [
            {
              caption:
                "Modelo mental: Call Stack + Web APIs + Callback Queue (event loop)",
              svg: `
          <svg viewBox="0 0 860 360" xmlns="http://www.w3.org/2000/svg">
            <rect x="20" y="20" width="820" height="320" rx="18" fill="rgba(2,6,23,.55)" stroke="rgba(148,163,184,.25)"/>
            <text x="40" y="58" fill="rgba(229,231,235,.95)" font-size="18" font-family="Arial" font-weight="700">
              Event Loop (modelo mental)
            </text>

            <rect x="50" y="90" width="220" height="210" rx="14" fill="rgba(96,165,250,.14)" stroke="rgba(96,165,250,.45)"/>
            <text x="70" y="120" fill="rgba(229,231,235,.92)" font-size="14" font-family="Arial" font-weight="700">Call Stack</text>
            <text x="70" y="148" fill="rgba(229,231,235,.85)" font-size="12" font-family="Arial">Executa 1 coisa por vez</text>
            <text x="70" y="168" fill="rgba(229,231,235,.85)" font-size="12" font-family="Arial">Funções entram e saem</text>

            <rect x="320" y="90" width="240" height="130" rx="14" fill="rgba(167,139,250,.14)" stroke="rgba(167,139,250,.45)"/>
            <text x="340" y="120" fill="rgba(229,231,235,.92)" font-size="14" font-family="Arial" font-weight="700">Web APIs</text>
            <text x="340" y="148" fill="rgba(229,231,235,.85)" font-size="12" font-family="Arial">Timers (setTimeout)</text>
            <text x="340" y="168" fill="rgba(229,231,235,.85)" font-size="12" font-family="Arial">Fetch, DOM, etc.</text>

            <rect x="320" y="240" width="240" height="60" rx="14" fill="rgba(52,211,153,.12)" stroke="rgba(52,211,153,.40)"/>
            <text x="340" y="272" fill="rgba(229,231,235,.92)" font-size="14" font-family="Arial" font-weight="700">Callback Queue</text>

            <rect x="610" y="140" width="200" height="110" rx="14" fill="rgba(251,191,36,.12)" stroke="rgba(251,191,36,.40)"/>
            <text x="630" y="172" fill="rgba(229,231,235,.92)" font-size="14" font-family="Arial" font-weight="700">Event Loop</text>
            <text x="630" y="198" fill="rgba(229,231,235,.85)" font-size="12" font-family="Arial">
              Move callbacks
            </text>
            <text x="630" y="218" fill="rgba(229,231,235,.85)" font-size="12" font-family="Arial">
              p/ stack quando livre
            </text>

            <g stroke="rgba(148,163,184,.55)" stroke-width="3">
              <line x1="270" y1="155" x2="320" y2="155"/>
              <line x1="560" y1="205" x2="610" y2="205"/>
              <path d="M440 220 L440 240" />
              <path d="M610 195 L560 195" />
              <path d="M560 195 L560 270" />
              <path d="M560 270 L560 270" />
            </g>

            <text x="40" y="325" fill="rgba(148,163,184,.95)" font-size="12" font-family="Arial">
              Ideia central: tarefas lentas vão para Web APIs. Quando terminam, entram na fila. O event loop joga no stack quando ele está vazio.
            </text>
          </svg>
          `,
            },
          ],
          content: `
### 🎯 Objetivo da aula
Você vai entender o **porquê** do assíncrono e como o JavaScript lida com tempo e tarefas lentas **sem travar** a aplicação.

Você vai dominar:
- Diferença entre **síncrono** e **assíncrono**
- Como funciona \`setTimeout\` / \`setInterval\`
- O modelo mental do **Event Loop**
- Como evitar armadilhas clássicas (ordem de execução e “travamentos”)

---

## 1) Síncrono vs Assíncrono
**Síncrono**: uma linha espera a anterior terminar.

\`\`\`js
console.log("A");
console.log("B");
console.log("C");
\`\`\`

Saída: A B C (sempre nessa ordem)

**Assíncrono**: você dispara uma tarefa e o JS continua.

\`\`\`js
console.log("A");

setTimeout(() => {
  console.log("B (depois)");
}, 1000);

console.log("C");
\`\`\`

Saída: A C B (a ordem muda porque B acontece “no futuro”).

---

## 2) Por que o JS precisa disso?
Porque o JS, no navegador, costuma rodar **na mesma thread** que desenha a página.
Se você bloquear a thread com algo pesado, o site “congela”.

---

## 3) setTimeout e setInterval
### \`setTimeout\`
Executa uma função depois de X milissegundos.

\`\`\`js
setTimeout(() => console.log("rodou"), 2000);
\`\`\`

### \`setInterval\`
Executa uma função repetidamente.

\`\`\`js
let i = 0;
const id = setInterval(() => {
  i++;
  console.log("tick", i);
  if (i === 5) clearInterval(id);
}, 1000);
\`\`\`

---

## 4) Modelo mental: Call Stack + Web APIs + Callback Queue
- **Call Stack**: onde as funções executam (1 por vez)
- **Web APIs**: onde o navegador “segura” timers/fetch
- **Callback Queue**: onde callbacks esperam ser executados
- **Event Loop**: move callbacks para o stack quando ele estiver livre

> Se você entende isso, você entende Promises/Async/Await com muito mais facilidade.

---

## 5) Armadilha comum: “setTimeout 0”
Mesmo com 0ms, ele não executa “agora”.

\`\`\`js
console.log("1");
setTimeout(() => console.log("2"), 0);
console.log("3");
\`\`\`

Saída: 1 3 2 (porque 2 entra na fila)

---

### ✅ O que você aprendeu
- Assíncrono existe para não travar a thread principal
- Timers funcionam via filas e event loop
- Ordem de execução pode mudar no assíncrono
      `,
          examples: [
            {
              title: "Exemplo: ordem de execução (síncrono vs assíncrono)",
              description:
                "Treine seu cérebro para prever a saída (isso te torna muito melhor em debug).",
              code: `console.log("A");

setTimeout(() => {
  console.log("B");
}, 10);

Promise.resolve().then(() => console.log("C"));

console.log("D");

// Tente prever a ordem antes de rodar.
// Dica: microtasks (Promise.then) rodam antes de timers.`,
            },
          ],
          exercises: [
            {
              title: "Exercício 1 — Timer básico",
              level: "Fácil",
              prompt:
                "Crie um setTimeout que exiba 'Olá depois de 2s'. Antes disso, exiba 'Olá agora'.",
              solution: `console.log("Olá agora");
setTimeout(() => console.log("Olá depois de 2s"), 2000);`,
            },
            {
              title: "Exercício 2 — Relógio (setInterval)",
              level: "Médio",
              prompt:
                "Crie um setInterval que exiba a hora atual (new Date().toLocaleTimeString()) a cada 1s e pare após 10 execuções.",
              solution: `let count = 0;
const id = setInterval(() => {
  count++;
  console.log(new Date().toLocaleTimeString());
  if (count >= 10) clearInterval(id);
}, 1000);`,
            },
            {
              title: "Desafio — Sequência controlada",
              level: "Médio",
              prompt:
                "Exiba: '1' agora, '2' após 1s, '3' após 2s, '4' após 3s. Use setTimeout.",
              solution: `console.log("1");
setTimeout(() => console.log("2"), 1000);
setTimeout(() => console.log("3"), 2000);
setTimeout(() => console.log("4"), 3000);`,
            },
          ],
          checklist: [
            "Consigo explicar o que é síncrono e assíncrono.",
            "Entendi o papel do event loop (modelo mental).",
            "Sei usar setTimeout e setInterval.",
            "Sei parar um setInterval com clearInterval.",
            "Consigo prever a ordem básica de execução em exemplos simples.",
          ],
          quiz: [
            {
              q: "Por que o JavaScript usa assíncrono no navegador?",
              options: [
                "Porque o JS não suporta matemática",
                "Para não travar a thread principal ao lidar com tarefas lentas",
                "Porque o HTML exige",
                "Porque o CSS depende disso",
              ],
              answerIndex: 1,
            },
            {
              q: "Mesmo com setTimeout(..., 0), o callback:",
              options: [
                "Roda imediatamente, antes de qualquer console.log",
                "Roda depois, quando voltar do event loop",
                "Nunca roda",
                "Vira uma Promise automaticamente",
              ],
              answerIndex: 1,
            },
          ],
        },

        {
          id: "m3a2",
          title:
            "Aula 2 — Promises: estados, then/catch/finally e encadeamento",
          duration: "90–140 min",
          level: "Intermediário",
          tags: ["promise", "then", "catch", "finally", "encadeamento"],
          tip: "Promise é um contrato: ou resolve com um valor ou falha com um erro. Encadeamento é o segredo para código limpo.",
          content: `
### 🎯 Objetivo
Você vai aprender Promises de forma sólida:
- O que são e por que existem
- Estados: pending/fulfilled/rejected
- \`.then()\`, \`.catch()\`, \`.finally()\`
- Encadeamento (chain) e retorno
- Erros e como propagam

---

## 1) O que é uma Promise?
Uma Promise representa **um valor que ainda não chegou**.

Exemplos de coisas que demoram:
- Buscar dados de uma API
- Ler um arquivo
- Esperar um timer
- Consultar banco de dados (no Node)

Uma Promise pode:
- **resolver** (sucesso) → entrega um valor
- **rejeitar** (erro) → entrega um erro

---

## 2) Criando uma Promise (na raça)
\`\`\`js
const p = new Promise((resolve, reject) => {
  const ok = true;
  if (ok) resolve("Deu certo");
  else reject(new Error("Deu ruim"));
});
\`\`\`

Consumindo:
\`\`\`js
p.then(valor => console.log(valor))
 .catch(err => console.error(err))
 .finally(() => console.log("Sempre roda"));
\`\`\`

---

## 3) Encadeamento (chain)
O que você **retorna** dentro do \`.then\` vai para o próximo \`.then\`.

\`\`\`js
Promise.resolve(2)
  .then(n => n * 2)      // 4
  .then(n => n + 10)     // 14
  .then(n => console.log(n));
\`\`\`

---

## 4) Erro em qualquer ponto vai para o catch
\`\`\`js
Promise.resolve()
  .then(() => { throw new Error("Falha"); })
  .then(() => console.log("não roda"))
  .catch(e => console.log("caiu aqui:", e.message));
\`\`\`

---

## 5) Promise.all e Promise.race (visão profissional)
- \`Promise.all\`: espera todas; se uma falhar, falha tudo
- \`Promise.race\`: a primeira que finalizar “vence”

\`\`\`js
await Promise.all([p1, p2, p3]);
\`\`\`

---

### ✅ O que você aprendeu
- Uma Promise é um contrato de futuro
- Encadeamento deixa o código organizado
- Erros propagam para \`.catch\`
      `,
          examples: [
            {
              title: "Exemplo: encadeando e retornando promessa",
              description:
                "Se você retornar uma Promise dentro de um then, o chain espera ela resolver.",
              code: `function esperar(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

esperar(500)
  .then(() => {
    console.log("meio segundo");
    return esperar(500);
  })
  .then(() => console.log("1 segundo total"));`,
            },
          ],
          exercises: [
            {
              title: "Exercício 1 — Criar uma Promise com timer",
              level: "Médio",
              prompt:
                "Crie uma função esperar(ms) que retorna uma Promise e resolve após ms. Use para imprimir 'A' depois de 1s.",
              solution: `function esperar(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

esperar(1000).then(() => console.log("A"));`,
            },
            {
              title: "Exercício 2 — Encadeamento",
              level: "Médio",
              prompt:
                "Use esperar(ms) para imprimir: '1' depois 0.5s, '2' mais 0.5s, '3' mais 0.5s (em sequência).",
              solution: `function esperar(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

esperar(500)
  .then(() => { console.log("1"); return esperar(500); })
  .then(() => { console.log("2"); return esperar(500); })
  .then(() => { console.log("3"); });`,
            },
          ],
          checklist: [
            "Entendi o que é pending/fulfilled/rejected.",
            "Sei usar then/catch/finally.",
            "Entendi encadeamento e retorno em then.",
            "Sei o que é Promise.all e quando usar.",
          ],
          quiz: [
            {
              q: "O que acontece se uma Promise rejeitar no meio de um chain?",
              options: [
                "Nada",
                "Os próximos then executam normalmente",
                "A execução pula para o catch mais próximo",
                "O navegador trava",
              ],
              answerIndex: 2,
            },
            {
              q: "Promise.all faz o quê?",
              options: [
                "Executa uma por vez",
                "Espera todas resolverem; se uma falhar, falha tudo",
                "Sempre retorna o primeiro resultado",
                "Transforma callbacks em promises automaticamente",
              ],
              answerIndex: 1,
            },
          ],
        },

        {
          id: "m3a3",
          title:
            "Aula 3 — Async/Await + Try/Catch: escrevendo assíncrono como profissional",
          duration: "80–120 min",
          level: "Intermediário",
          tags: ["async", "await", "try/catch", "erro", "boas práticas"],
          tip: "Async/await deixa o código mais legível, mas você precisa dominar try/catch e validar respostas da API.",
          content: `
### 🎯 Objetivo
Você vai:
- Entender \`async\` e \`await\`
- Converter \`.then()\` em \`await\`
- Tratar erros com \`try/catch\`
- Lidar com “erro silencioso”: HTTP 404/500 (fetch não lança erro automaticamente)

---

## 1) Async/Await em 1 minuto
- Função \`async\` sempre retorna uma Promise
- \`await\` “espera” a Promise resolver e pega o valor

\`\`\`js
async function buscarAlgo() {
  const valor = await Promise.resolve(10);
  return valor * 2;
}
\`\`\`

---

## 2) Por que try/catch é obrigatório?
Sem try/catch, erros assíncronos podem “vazar” e quebrar seu fluxo.

\`\`\`js
async function run() {
  try {
    const res = await fetch("https://exemplo.com");
    // fetch só lança erro em falha de rede.
    if (!res.ok) throw new Error("HTTP " + res.status);
    const data = await res.json();
    console.log(data);
  } catch (e) {
    console.error("Falhou:", e.message);
  }
}
\`\`\`

---

## 3) Padrão profissional: funções pequenas
Separar responsabilidades:
- \`fetchJson(url)\`
- \`render(dados)\`
- \`setLoading(true/false)\`
- \`setError(msg)\`

Isso vira “código de produção”.

---

## 4) Validando dados
APIs mudam. Respostas podem vir faltando campos.
Sempre proteja seu código com checagens.

---

### ✅ O que você aprendeu
- Async/await é Promise com sintaxe mais legível
- Fetch precisa de validação de \`res.ok\`
- try/catch torna seu fluxo confiável
      `,
          examples: [
            {
              title: "Exemplo: helper fetchJson (padrão profissional)",
              description:
                "Crie uma função utilitária para buscar JSON com tratamento de erro.",
              code: `async function fetchJson(url) {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("HTTP " + res.status);
  }
  return res.json();
}

async function run() {
  try {
    const data = await fetchJson("https://viacep.com.br/ws/01001000/json/");
    console.log("Cidade:", data.localidade);
  } catch (e) {
    console.error("Erro:", e.message);
  }
}

run();`,
            },
          ],
          exercises: [
            {
              title: "Exercício — Função fetchJson",
              level: "Médio",
              prompt:
                "Implemente fetchJson(url) como no exemplo e use para buscar um CEP. Exiba bairro e cidade.",
              solution: `async function fetchJson(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error("HTTP " + res.status);
  return res.json();
}

(async () => {
  try {
    const d = await fetchJson("https://viacep.com.br/ws/01001000/json/");
    console.log("Bairro:", d.bairro);
    console.log("Cidade:", d.localidade);
  } catch (e) {
    console.error(e.message);
  }
})();`,
            },
          ],
          checklist: [
            "Sei transformar then/catch em async/await.",
            "Sempre valido res.ok ao usar fetch.",
            "Uso try/catch para capturar falhas.",
            "Sei criar helpers para reaproveitar código.",
          ],
          quiz: [
            {
              q: "fetch() lança erro automaticamente em HTTP 404?",
              options: [
                "Sim, sempre",
                "Não. Só em falha de rede; precisa checar res.ok",
                "Apenas no Chrome",
                "Apenas se usar await",
              ],
              answerIndex: 1,
            },
          ],
        },

        {
          id: "m3proj1",
          title:
            "Projeto — App de Clima/CEP com API pública (UI + loading + erro)",
          duration: "4–8 horas",
          level: "Intermediário",
          tags: ["projeto", "fetch", "api", "dom", "async/await", "loading"],
          tip: "Projetos com API são os que mais ‘parecem’ mercado. Capriche no tratamento de erro e no loading.",
          content: `
Neste projeto você vai criar uma aplicação real, com:
- Campo de busca
- Botão
- Loading enquanto busca
- Renderização do resultado
- Mensagem de erro amigável
- Salvamento do último resultado (localStorage)

Você pode escolher:
- **CEP** (ViaCEP) — simples e ótimo pra treinar fluxo
- **Clima** (requer API key em muitos serviços, então começamos com ViaCEP)

> Recomendação: comece com ViaCEP, depois adapte para clima.

      `,
          project: {
            goal: "Construir um app web que busca dados de CEP e renderiza na tela com fluxo profissional.",
            steps: [
              "Criar HTML: input + botão + área de resultado + área de erro + loading.",
              "Criar função fetchJson(url) com res.ok + try/catch.",
              "Ao clicar: validar input (8 dígitos).",
              "Mostrar loading, limpar erro, buscar dados.",
              "Renderizar rua/bairro/cidade/UF.",
              "Salvar último CEP e dados no localStorage.",
              "Ao carregar a página: se tiver último CEP, mostrar automaticamente.",
            ],
            starterCode: `// Sugestão de estrutura
// 1) Seletores DOM
// 2) fetchJson
// 3) validarCEP
// 4) render(dados)
// 5) eventos (click/enter)
// 6) localStorage (última busca)
`,
            solution: `// HTML mínimo sugerido:
// <input id="cep" />
// <button id="btn">Buscar</button>
// <div id="loading"></div>
// <div id="error"></div>
// <pre id="out"></pre>

const $ = (sel) => document.querySelector(sel);
const input = $("#cep");
const btn = $("#btn");
const loading = $("#loading");
const errorBox = $("#error");
const out = $("#out");
const KEY = "cep_last_v1";

function setLoading(v) {
  loading.textContent = v ? "Carregando..." : "";
}

function setError(msg) {
  errorBox.textContent = msg || "";
}

function validarCEP(cep) {
  return /^\\d{8}$/.test(cep);
}

async function fetchJson(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error("HTTP " + res.status);
  return res.json();
}

function render(d) {
  out.textContent = JSON.stringify({
    cep: d.cep,
    logradouro: d.logradouro,
    bairro: d.bairro,
    cidade: d.localidade,
    uf: d.uf
  }, null, 2);
}

async function buscar() {
  const cep = input.value.replace(/\\D/g, "");
  if (!validarCEP(cep)) {
    setError("Digite um CEP com 8 dígitos (somente números).");
    return;
  }

  setError("");
  setLoading(true);

  try {
    const d = await fetchJson(\`https://viacep.com.br/ws/\${cep}/json/\`);
    if (d.erro) throw new Error("CEP não encontrado.");
    render(d);
    localStorage.setItem(KEY, JSON.stringify({ cep, d }));
  } catch (e) {
    setError(e.message);
  } finally {
    setLoading(false);
  }
}

btn.addEventListener("click", buscar);
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") buscar();
});

(function init() {
  const saved = localStorage.getItem(KEY);
  if (!saved) return;
  const { cep, d } = JSON.parse(saved);
  input.value = cep;
  render(d);
})();`,
          },
          checklist: [
            "Tenho validação de CEP (8 dígitos).",
            "Tenho loading durante a busca.",
            "Tenho try/catch e mensagem amigável.",
            "Renderizo os dados na tela.",
            "Salvo e restauro o último resultado.",
          ],
        },
      ],
    },

    {
      id: "m4",
      title:
        "Módulo 4 — Estruturas de Dados e Algoritmos (Intermediário/Avançado)",
      description:
        "Aqui você vira forte: arrays avançados, objetos, desestruturação, patterns, pilha/fila e um projeto completo (Jogo da Memória).",
      lessons: [
        {
          id: "m4a1",
          title:
            "Aula 1 — Arrays avançados: map, filter, reduce (com padrões de mercado)",
          duration: "100–160 min",
          level: "Intermediário",
          tags: ["arrays", "map", "filter", "reduce", "imutabilidade"],
          tip: "Aprenda a pensar em transformação de listas: map transforma, filter seleciona, reduce agrega.",
          content: `
### 🎯 Objetivo
Você vai dominar:
- \`map\`, \`filter\`, \`reduce\` de forma profunda
- Padrão de **imutabilidade** (evitar alterar a lista original)
- Como isso aparece em React/Node e no mercado

---

## 1) Por que métodos funcionais importam?
Porque deixam o código:
- Mais legível
- Menos propenso a bugs
- Mais fácil de testar

---

## 2) map: transformar cada item
\`\`\`js
const nums = [1,2,3];
const dobro = nums.map(n => n * 2); // [2,4,6]
\`\`\`

Pense assim:
> map: “para cada item, gere um novo item”.

---

## 3) filter: escolher itens
\`\`\`js
const nums = [1,2,3,4,5];
const pares = nums.filter(n => n % 2 === 0); // [2,4]
\`\`\`

Pense assim:
> filter: “mantenha só os que passam no teste”.

---

## 4) reduce: transformar tudo em um único valor
\`\`\`js
const nums = [1,2,3,4];
const soma = nums.reduce((acc, n) => acc + n, 0); // 10
\`\`\`

Pense assim:
> reduce: “acumule”.

---

## 5) Reduce além de soma: agrupar dados
Exemplo: contar ocorrências

\`\`\`js
const nomes = ["ana","joao","ana"];
const contagem = nomes.reduce((acc, nome) => {
  acc[nome] = (acc[nome] || 0) + 1;
  return acc;
}, {});
// { ana: 2, joao: 1 }
\`\`\`

---

## 6) Erros comuns
- Usar reduce quando map/filter seria mais simples
- Alterar o array original (mutação) sem perceber
- Esquecer o valor inicial no reduce (pode quebrar em array vazio)

---

### ✅ O que você aprendeu
- map/filter/reduce e quando usar cada um
- como escrever código mais “limpo” e profissional
      `,
          examples: [
            {
              title: "Exemplo: carrinho de compras com reduce",
              description: "Padrão real: somar itens e aplicar desconto.",
              code: `const carrinho = [
  { nome: "Mouse", preco: 80, qtd: 2 },
  { nome: "Teclado", preco: 150, qtd: 1 }
];

const total = carrinho.reduce((acc, item) => acc + item.preco * item.qtd, 0);

const totalComDesconto = total > 200 ? total * 0.9 : total;

console.log({ total, totalComDesconto });`,
            },
          ],
          exercises: [
            {
              title: "Exercício 1 — map básico",
              level: "Fácil",
              prompt:
                "Dado um array de números, crie um novo array com todos ao quadrado.",
              solution: `const nums = [2,3,4];
const quad = nums.map(n => n * n);
console.log(quad);`,
            },
            {
              title: "Exercício 2 — filter",
              level: "Médio",
              prompt:
                "Dado um array de idades, filtre apenas maiores ou iguais a 18.",
              solution: `const idades = [12,18,20,15,30];
const maiores = idades.filter(i => i >= 18);
console.log(maiores);`,
            },
            {
              title: "Exercício 3 — reduce (soma)",
              level: "Médio",
              prompt:
                "Some todos os valores de um array usando reduce (com valor inicial 0).",
              solution: `const nums = [10,20,30];
const soma = nums.reduce((acc, n) => acc + n, 0);
console.log(soma);`,
            },
            {
              title: "Desafio — agrupar por categoria",
              level: "Difícil",
              prompt:
                "Dada uma lista de produtos com categoria, gere um objeto agrupando por categoria.",
              solution: `const itens = [
  { nome:"Arroz", cat:"Mercado" },
  { nome:"Feijão", cat:"Mercado" },
  { nome:"Fone", cat:"Eletrônicos" }
];

const porCategoria = itens.reduce((acc, item) => {
  acc[item.cat] = acc[item.cat] || [];
  acc[item.cat].push(item.nome);
  return acc;
}, {});

console.log(porCategoria);`,
            },
          ],
          checklist: [
            "Sei explicar map, filter e reduce sem olhar.",
            "Consigo usar reduce com valor inicial.",
            "Consigo escrever transformações sem mutar o array original.",
            "Consigo aplicar map/filter/reduce em objetos reais (carrinho).",
          ],
          quiz: [
            {
              q: "Qual método é mais adequado para transformar itens (1 → 2, 2 → 4)?",
              options: ["filter", "reduce", "map", "sort"],
              answerIndex: 2,
            },
            {
              q: "Qual método é mais adequado para selecionar apenas itens que passam em um teste?",
              options: ["map", "filter", "reduce", "push"],
              answerIndex: 1,
            },
          ],
        },

        {
          id: "m4a2",
          title:
            "Aula 2 — Objetos avançados: desestruturação, spread/rest e padrões",
          duration: "90–140 min",
          level: "Intermediário",
          tags: [
            "objetos",
            "desestruturação",
            "spread",
            "rest",
            "imutabilidade",
          ],
          tip: "Objetos são a linguagem do mundo real: usuários, produtos, pedidos. Domine isso e você domina apps.",
          content: `
### 🎯 Objetivo
Você vai dominar:
- Desestruturação (object/array)
- Spread (\`...\`) para copiar/combinar
- Rest (\`...\`) para capturar o “resto”
- Padrões de atualização imutável (muito usado em React)

---

## 1) Desestruturação (pegar campos rapidamente)
\`\`\`js
const user = { nome:"Ana", idade:28, cidade:"SP" };
const { nome, idade } = user;
\`\`\`

Você pode renomear:
\`\`\`js
const { nome: nomeUsuario } = user;
\`\`\`

Com valores padrão:
\`\`\`js
const { cargo = "Aluno" } = user;
\`\`\`

---

## 2) Spread (copiar/combinar)
\`\`\`js
const a = { x: 1 };
const b = { y: 2 };
const c = { ...a, ...b }; // { x:1, y:2 }
\`\`\`

Atualização imutável:
\`\`\`js
const user2 = { ...user, idade: user.idade + 1 };
\`\`\`

---

## 3) Rest (capturar o restante)
\`\`\`js
const { nome, ...resto } = user;
console.log(resto); // { idade: 28, cidade:"SP" }
\`\`\`

---

## 4) Padrão real: atualizar item dentro de array
\`\`\`js
const tarefas = [
  { id: 1, texto: "Estudar", done: false },
  { id: 2, texto: "Treinar", done: false }
];

const atualizado = tarefas.map(t =>
  t.id === 2 ? { ...t, done: true } : t
);
\`\`\`

---

### ✅ O que você aprendeu
- desestruturação, spread/rest
- atualização imutável em objetos e arrays
      `,
          exercises: [
            {
              title: "Exercício — Atualização imutável",
              level: "Médio",
              prompt:
                "Dado um objeto produto {nome, preco, estoque}, crie um novo objeto com estoque - 1 sem mudar o original.",
              solution: `const produto = { nome:"Mouse", preco:80, estoque:5 };
const novo = { ...produto, estoque: produto.estoque - 1 };

console.log(produto); // original
console.log(novo);    // atualizado`,
            },
          ],
          checklist: [
            "Consigo desestruturar objetos.",
            "Consigo usar spread para copiar/atualizar.",
            "Entendi rest para capturar o restante.",
            "Consigo atualizar itens em array sem mutar.",
          ],
          quiz: [
            {
              q: "Qual é o objetivo do spread (...) em objetos?",
              options: [
                "Deletar propriedades",
                "Copiar/combinar propriedades em um novo objeto",
                "Ordenar chaves",
                "Transformar em array automaticamente",
              ],
              answerIndex: 1,
            },
          ],
        },

        {
          id: "m4a3",
          title:
            "Aula 3 — Estruturas clássicas: Pilha, Fila e Lista (com implementações)",
          duration: "90–140 min",
          level: "Intermediário",
          tags: ["pilha", "fila", "estrutura de dados", "algoritmos"],
          tip: "Mesmo usando arrays, entender pilha/fila te dá base para entrevistas e projetos complexos.",
          content: `
### 🎯 Objetivo
Você vai entender:
- O que é **Pilha (Stack)** → LIFO
- O que é **Fila (Queue)** → FIFO
- Como implementar em JS
- Casos reais: undo/redo, fila de processamento, histórico

---

## 1) Pilha (Stack) — LIFO
**Último a entrar, primeiro a sair**.

Exemplo real:
- Desfazer (CTRL+Z)
- Navegação do navegador (voltar)

Implementação:
\`\`\`js
const stack = [];
stack.push("A");
stack.push("B");
stack.pop(); // "B"
\`\`\`

---

## 2) Fila (Queue) — FIFO
**Primeiro a entrar, primeiro a sair**.

Exemplo real:
- Fila de atendimento
- Processamento de jobs

Implementação simples (cuidado com performance em arrays grandes):
\`\`\`js
const queue = [];
queue.push("A");
queue.push("B");
queue.shift(); // "A"
\`\`\`

Implementação melhor (com índices):
\`\`\`js
class Queue {
  constructor() {
    this.items = {};
    this.head = 0;
    this.tail = 0;
  }
  enqueue(x) { this.items[this.tail++] = x; }
  dequeue() {
    if (this.head === this.tail) return undefined;
    const v = this.items[this.head];
    delete this.items[this.head++];
    return v;
  }
  size() { return this.tail - this.head; }
}
\`\`\`

---

### ✅ O que você aprendeu
- Pilha (push/pop) e fila (enqueue/dequeue)
- Casos reais de uso
      `,
          examples: [
            {
              title: "Exemplo: mini histórico (undo)",
              description: "Simule um histórico com stack para desfazer ações.",
              code: `const historico = [];
function fazer(acao) { historico.push(acao); console.log("Fez:", acao); }
function desfazer() {
  const ultima = historico.pop();
  console.log("Desfez:", ultima);
}

fazer("digitou A");
fazer("digitou B");
desfazer();`,
            },
          ],
          exercises: [
            {
              title: "Exercício — Implementar Stack com classe",
              level: "Médio",
              prompt: "Crie uma classe Stack com push, pop e size.",
              solution: `class Stack {
  constructor() { this.arr = []; }
  push(x) { this.arr.push(x); }
  pop() { return this.arr.pop(); }
  size() { return this.arr.length; }
}

const s = new Stack();
s.push(1); s.push(2);
console.log(s.pop()); // 2
console.log(s.size()); // 1`,
            },
          ],
          checklist: [
            "Entendi LIFO e FIFO.",
            "Consigo implementar pilha e fila.",
            "Sei citar casos reais de uso.",
          ],
          quiz: [
            {
              q: "Pilha é:",
              options: ["FIFO", "LIFO", "Ordenação", "Busca binária"],
              answerIndex: 1,
            },
            {
              q: "Fila é:",
              options: ["LIFO", "FIFO", "Recursão", "Hashing"],
              answerIndex: 1,
            },
          ],
        },

        {
          id: "m4proj1",
          title: "Projeto — Jogo da Memória (DOM + Arrays + lógica de estado)",
          duration: "8–16 horas",
          level: "Intermediário/Avançado",
          tags: ["projeto", "jogo", "dom", "arrays", "estado", "lógica"],
          tip: "Esse projeto te ensina o que frameworks fazem: controlar estado e refletir na UI.",
          content: `
Você vai construir um **Jogo da Memória** com:
- Cartas embaralhadas
- Controle de estado (cartas viradas, pares encontrados)
- Bloqueio enquanto compara duas cartas
- Contador de tentativas
- Botão de reiniciar
- (Extra) cronômetro e ranking (localStorage)

---

## Regras do jogo
1. Ao clicar em uma carta, ela vira (mostra o símbolo)
2. Você pode virar duas cartas
3. Se forem iguais: ficam abertas (par encontrado)
4. Se forem diferentes: voltam a fechar após um delay
5. O jogo termina quando todos os pares forem encontrados

---

## Dica profissional
Você precisa de:
- Uma lista de cartas (array)
- Um estado: \`firstCard\`, \`secondCard\`, \`lockBoard\`
- Uma função \`resetTurn()\`
      `,
          project: {
            goal: "Construir um Jogo da Memória com lógica completa e UI em DOM.",
            steps: [
              "Criar HTML: grid de cartas e painel (tentativas, reset).",
              "Criar array de símbolos e duplicar para formar pares.",
              "Embaralhar (Fisher-Yates).",
              "Renderizar cartas no DOM (data-id, data-symbol).",
              "Ao clicar: virar carta (classe CSS).",
              "Guardar primeira e segunda carta no estado.",
              "Se bater: marcar como matched e limpar estado.",
              "Se não bater: travar cliques, esperar 700ms, desvirar, liberar.",
              "Contar tentativas e mostrar vitória ao final.",
            ],
            starterCode: `// Estado sugerido
let first = null;
let second = null;
let lockBoard = false;
let tentativas = 0;

// TODO: gerar deck duplicado
// TODO: shuffle
// TODO: render
// TODO: click handler
`,
            solution: `// Solução resumida (padrão do projeto):
// 1) deck = símbolos duplicados
// 2) shuffle(deck)
// 3) render
// 4) onCardClick controla estado first/second/lockBoard

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}`,
          },
          checklist: [
            "Tenho embaralhamento correto.",
            "Tenho controle de estado (first/second/lockBoard).",
            "Tenho comparação de pares com delay.",
            "Tenho contador de tentativas.",
            "Tenho reset do jogo.",
          ],
        },
      ],
    },

    {
      id: "m5",
      title: "Módulo 5 — POO em JavaScript (Classes, this, herança e padrões)",
      description:
        "Você vai aprender POO de forma prática: modelagem, classes, encapsulamento, herança e um projeto de cadastro de produtos orientado a objetos.",
      lessons: [
        {
          id: "m5a1",
          title: "Aula 1 — Classes e Objetos: do básico ao profissional",
          duration: "100–160 min",
          level: "Intermediário",
          tags: ["poo", "class", "constructor", "métodos", "modelagem"],
          tip: "POO não é ‘moda’. É uma forma de organizar sistemas grandes usando modelos do mundo real.",
          content: `
### 🎯 Objetivo
Você vai:
- Entender o que é POO de verdade (não decorar sintaxe)
- Criar classes com \`constructor\`
- Criar métodos
- Instanciar objetos
- Entender “modelagem”: transformar um problema em classes

---

## 1) Por que POO existe?
Quando um sistema cresce, você precisa organizar:
- Dados (estado)
- Regras (comportamento)

POO sugere: agrupe isso em **objetos**.

---

## 2) Classe vs Objeto
- **Classe**: molde/planta
- **Objeto**: instância (um “exemplar” criado a partir do molde)

\`\`\`js
class Usuario {
  constructor(nome, email) {
    this.nome = nome;
    this.email = email;
  }

  apresentar() {
    return \`Olá, eu sou \${this.nome}\`;
  }
}

const u1 = new Usuario("Ana", "ana@email.com");
console.log(u1.apresentar());
\`\`\`

---

## 3) this (explicação clara)
\`this\` é “este objeto atual”.  
Dentro de métodos, \`this\` aponta para a instância.

Armadilha: \`this\` pode mudar dependendo de como a função é chamada.
Por isso, em eventos, callbacks e classes, você deve entender bem contexto.

---

## 4) Padrão real: classe + validações
Classe não é só “guardar campo”, ela também protege regras.

Exemplo: impedir preço negativo.

---

### ✅ O que você aprendeu
- Classes e instâncias
- constructor e métodos
- this e contexto
      `,
          examples: [
            {
              title: "Exemplo: Produto com regra de validação",
              description:
                "Classe que impede preço inválido e fornece método utilitário.",
              code: `class Produto {
  constructor(nome, preco, estoque) {
    if (preco < 0) throw new Error("Preço não pode ser negativo");
    this.nome = nome;
    this.preco = preco;
    this.estoque = estoque;
  }

  valorTotalEmEstoque() {
    return this.preco * this.estoque;
  }
}

const p = new Produto("Mouse", 80, 5);
console.log(p.valorTotalEmEstoque());`,
            },
          ],
          exercises: [
            {
              title: "Exercício — Classe Usuario",
              level: "Médio",
              prompt:
                "Crie uma classe Usuario com nome e idade. Crie método podeDirigir() que retorna true se idade >= 18.",
              solution: `class Usuario {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
  podeDirigir() {
    return this.idade >= 18;
  }
}

const u = new Usuario("João", 20);
console.log(u.podeDirigir());`,
            },
          ],
          checklist: [
            "Sei criar classe com constructor.",
            "Sei instanciar objetos com new.",
            "Entendi this dentro de métodos.",
            "Consigo criar métodos que implementam regras.",
          ],
          quiz: [
            {
              q: "Classe é:",
              options: [
                "Um objeto pronto",
                "Um molde para criar objetos",
                "Uma função que sempre retorna string",
                "Um tipo especial de array",
              ],
              answerIndex: 1,
            },
          ],
        },

        {
          id: "m5a2",
          title:
            "Aula 2 — Encapsulamento, getters/setters e propriedades privadas",
          duration: "90–140 min",
          level: "Intermediário",
          tags: ["encapsulamento", "getter", "setter", "privado", "validação"],
          tip: "Encapsular é proteger o estado. Você controla como dados entram e saem do objeto.",
          content: `
### 🎯 Objetivo
Você vai:
- Entender encapsulamento (proteger estado)
- Usar getters e setters
- Criar propriedades privadas com \`#\` (quando disponível)
- Validar entradas

---

## 1) Encapsulamento
Você não quer que qualquer parte do código faça:
\`produto.preco = -999\`

Então você cria uma barreira.

---

## 2) Getter/Setter (controle de acesso)
\`\`\`js
class Produto {
  constructor(nome, preco) {
    this.nome = nome;
    this._preco = preco;
  }

  get preco() {
    return this._preco;
  }

  set preco(valor) {
    if (valor < 0) throw new Error("Preço inválido");
    this._preco = valor;
  }
}
\`\`\`

---

## 3) Propriedade privada (#)
\`\`\`js
class Conta {
  #saldo = 0;
  depositar(v) { this.#saldo += v; }
  verSaldo() { return this.#saldo; }
}
\`\`\`

Obs: funciona em navegadores modernos.

---

### ✅ O que você aprendeu
- getters/setters para validação
- estado privado para proteger regras
      `,
          examples: [
            {
              title: "Exemplo: Conta bancária (privado + regra)",
              description: "Conta que não permite saque maior que saldo.",
              code: `class Conta {
  #saldo = 0;

  depositar(v) {
    if (v <= 0) throw new Error("Depósito inválido");
    this.#saldo += v;
  }

  sacar(v) {
    if (v <= 0) throw new Error("Saque inválido");
    if (v > this.#saldo) throw new Error("Saldo insuficiente");
    this.#saldo -= v;
  }

  verSaldo() { return this.#saldo; }
}

const c = new Conta();
c.depositar(100);
c.sacar(40);
console.log(c.verSaldo());`,
            },
          ],
          exercises: [
            {
              title: "Exercício — Setter com validação",
              level: "Médio",
              prompt:
                "Crie uma classe Produto com _estoque e setter estoque que não permite valor negativo.",
              solution: `class Produto {
  constructor(nome, estoque) {
    this.nome = nome;
    this._estoque = 0;
    this.estoque = estoque;
  }
  get estoque() { return this._estoque; }
  set estoque(v) {
    if (v < 0) throw new Error("Estoque inválido");
    this._estoque = v;
  }
}

const p = new Produto("Teclado", 10);
p.estoque = 5;
console.log(p.estoque);`,
            },
          ],
          checklist: [
            "Entendi encapsulamento (proteger estado).",
            "Sei usar getter/setter para validar.",
            "Entendi propriedade privada (#) e quando usar.",
          ],
        },

        {
          id: "m5a3",
          title: "Aula 3 — Herança e Polimorfismo (com exemplos reais)",
          duration: "90–150 min",
          level: "Intermediário/Avançado",
          tags: ["herança", "extends", "super", "polimorfismo"],
          tip: "Herança é útil quando existe uma relação clara de ‘é um’. Evite herança só por ‘reutilizar’ código.",
          content: `
### 🎯 Objetivo
Você vai:
- Entender herança (extends) e super()
- Criar classes base e classes filhas
- Entender polimorfismo (mesmo método, comportamento diferente)

---

## 1) Herança: extends
\`\`\`js
class Animal {
  constructor(nome) { this.nome = nome; }
  falar() { return "Som genérico"; }
}

class Cachorro extends Animal {
  falar() { return "Au au"; }
}

const rex = new Cachorro("Rex");
console.log(rex.falar());
\`\`\`

Polimorfismo:
- mesmo método \`falar()\`
- comportamento diferente dependendo da classe

---

## 2) super()
\`\`\`js
class Funcionario {
  constructor(nome, salario) {
    this.nome = nome;
    this.salario = salario;
  }
}

class Gerente extends Funcionario {
  constructor(nome, salario, area) {
    super(nome, salario);
    this.area = area;
  }
}
\`\`\`

---

### ✅ O que você aprendeu
- herança e polimorfismo com exemplos claros
      `,
          exercises: [
            {
              title: "Exercício — Funcionário e Estagiário",
              level: "Médio",
              prompt:
                "Crie Funcionario com calcularBonus() que retorna 10% do salário. Crie Estagiario que retorna 5%.",
              solution: `class Funcionario {
  constructor(nome, salario) {
    this.nome = nome;
    this.salario = salario;
  }
  calcularBonus() { return this.salario * 0.10; }
}

class Estagiario extends Funcionario {
  calcularBonus() { return this.salario * 0.05; }
}

console.log(new Funcionario("Ana", 5000).calcularBonus());
console.log(new Estagiario("João", 2000).calcularBonus());`,
            },
          ],
          checklist: [
            "Entendi extends e super().",
            "Consigo criar classes filhas.",
            "Entendi polimorfismo na prática.",
          ],
        },

        {
          id: "m5proj1",
          title:
            "Projeto — Sistema de Cadastro de Produtos com POO (CRUD + LocalStorage)",
          duration: "10–20 horas",
          level: "Intermediário/Avançado",
          tags: ["projeto", "poo", "crud", "dom", "localStorage"],
          tip: "Esse projeto é um ótimo ‘mini-sistema’ para portfólio: cadastro, edição, validações e persistência.",
          content: `
Você vai construir um **Cadastro de Produtos** com:
- Formulário (nome, preço, estoque, categoria)
- Lista de produtos
- Editar
- Excluir
- Persistir no localStorage
- Validações (ex: preço > 0)
- Organização por classes

---

## Modelagem sugerida (profissional)
- Classe **Produto**
- Classe **RepositorioProdutos** (carrega/salva)
- Classe **UIProdutos** (render e eventos)

Separar responsabilidades deixa o código limpo e escalável.

      `,
          project: {
            goal: "Criar um sistema CRUD completo, persistente e organizado por classes (POO).",
            steps: [
              "Criar HTML com formulário e lista.",
              "Criar classe Produto com validações.",
              "Criar repositório que salva/carrega via localStorage.",
              "Criar UI que renderiza a lista e controla eventos.",
              "Implementar editar (carregar dados no form).",
              "Implementar excluir.",
              "Criar filtros simples por categoria (extra).",
              "Criar ordenação por preço (extra).",
            ],
            starterCode: `// Estrutura sugerida:
class Produto { /* validações */ }
class RepoProdutos { /* load/save */ }
class UIProdutos { /* render + eventos */ }`,
            solution: `// Dica: a solução completa é longa.
// Você vai montar por etapas com o passo a passo.
// Use como base os padrões:
// - repo.getAll(), repo.add(), repo.update(), repo.remove()
// - ui.render(), ui.bindEvents()

// Se quiser, eu te entrego a solução final completa desse projeto no Bloco 2.
`,
          },
          checklist: [
            "Tenho classe Produto com validações.",
            "Tenho repo com persistência em localStorage.",
            "Tenho renderização da lista.",
            "Consigo editar e excluir produtos.",
            "Projeto organizado em arquivos/pastas.",
          ],
        },
      ],
    },

    // ======== FIM DO BLOCO 1 (m3, m4, m5) ========

    // ======== INICO DO BLOCO 1 (m6, m7, m8, m9) ========
  // ======== SUBSTITUA A PARTIR DO MÓDULO 6 (m6) ATÉ O FINAL (m9) ========

{
  id: "m6",
  title: "Módulo 6 — Módulos, NPM, Bundlers e Node.js (profissional)",
  description:
    "Você vai aprender a trabalhar como dev de mercado: import/export, npm, scripts, Vite, estrutura de projeto e uma mini-biblioteca modular.",
  lessons: [
    {
      id: "m6a1",
      title: "Aula 1 — ES Modules (import/export) e organização real de código",
      duration: "90–140 min",
      level: "Intermediário",
      tags: ["modules", "import", "export", "arquitetura", "clean code"],
      tip:
        "Código profissional não é arquivo único. Modularizar = separar responsabilidades e reduzir bugs.",
      images: [
        {
          caption: "Padrão mental: separar por responsabilidade (UI, serviços, utils)",
          svg: `
          <svg viewBox="0 0 860 320" xmlns="http://www.w3.org/2000/svg">
            <rect x="20" y="20" width="820" height="280" rx="18" fill="rgba(2,6,23,.55)" stroke="rgba(148,163,184,.25)"/>
            <text x="40" y="60" fill="rgba(229,231,235,.95)" font-size="18" font-family="Arial" font-weight="700">Arquitetura simples (projeto pequeno → médio)</text>

            <rect x="60" y="90" width="220" height="170" rx="14" fill="rgba(96,165,250,.14)" stroke="rgba(96,165,250,.45)"/>
            <text x="80" y="122" fill="rgba(229,231,235,.92)" font-size="14" font-family="Arial" font-weight="700">UI</text>
            <text x="80" y="146" fill="rgba(229,231,235,.85)" font-size="12" font-family="Arial">render(), eventos</text>

            <rect x="320" y="90" width="220" height="170" rx="14" fill="rgba(167,139,250,.14)" stroke="rgba(167,139,250,.45)"/>
            <text x="340" y="122" fill="rgba(229,231,235,.92)" font-size="14" font-family="Arial" font-weight="700">Services</text>
            <text x="340" y="146" fill="rgba(229,231,235,.85)" font-size="12" font-family="Arial">API, storage</text>

            <rect x="580" y="90" width="220" height="170" rx="14" fill="rgba(52,211,153,.12)" stroke="rgba(52,211,153,.40)"/>
            <text x="600" y="122" fill="rgba(229,231,235,.92)" font-size="14" font-family="Arial" font-weight="700">Utils</text>
            <text x="600" y="146" fill="rgba(229,231,235,.85)" font-size="12" font-family="Arial">format, validações</text>

            <g stroke="rgba(148,163,184,.55)" stroke-width="3">
              <line x1="280" y1="175" x2="320" y2="175"/>
              <line x1="540" y1="175" x2="580" y2="175"/>
            </g>

            <text x="40" y="290" fill="rgba(148,163,184,.95)" font-size="12" font-family="Arial">
              Dica: módulos evitam “código macarrão”. Um arquivo deve ter um propósito claro.
            </text>
          </svg>
          `
        }
      ],
      content: `
### 🎯 Objetivo
Você vai aprender:
- O que são **módulos** e por que eles existem
- Como usar **import/export** (ESM)
- Como organizar pastas como um dev profissional
- Como evitar dependência circular e “bagunça”

---

## 1) Por que modularizar?
Quando o projeto cresce, um arquivo gigante vira:
- difícil de entender
- difícil de debugar
- difícil de testar
- propenso a bugs

Modularizar é separar o sistema em partes pequenas e claras.

---

## 2) export e import (o básico)
### Export nomeado
\`\`\`js
// math.js
export function soma(a, b) { return a + b; }
export function sub(a, b) { return a - b; }
\`\`\`

\`\`\`js
// app.js
import { soma } from "./math.js";
console.log(soma(2, 3));
\`\`\`

### Export default
\`\`\`js
// logger.js
export default function log(msg) {
  console.log("[LOG]", msg);
}
\`\`\`

\`\`\`js
import log from "./logger.js";
log("Olá");
\`\`\`

> Dica: use **named exports** quando tiver várias funções; use **default** quando for “uma coisa principal”.

---

## 3) Organização real de pastas (projetos pequenos/médios)
- \`/src\`
  - \`/ui\` (render, eventos, componentes)
  - \`/services\` (API, storage, regras externas)
  - \`/utils\` (validações, formatação)
  - \`main.js\` (ponto de entrada)

---

## 4) Erros comuns
- Importar com caminho errado (./ vs ../)
- Esquecer extensão \`.js\` em ESM no navegador
- Criar dependência circular (A importa B e B importa A)

---

### ✅ O que você aprendeu
- Import/export e quando usar cada tipo
- Estrutura profissional de pastas
      `,
      examples: [
        {
          title: "Exemplo: módulo de validação",
          description: "Um módulo que valida email e senha, usado pela UI.",
          code: `// src/utils/validate.js
export function validarEmail(email) {
  return /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email);
}

export function validarSenha(senha) {
  return senha.length >= 8;
}

// src/main.js
import { validarEmail, validarSenha } from "./utils/validate.js";

console.log(validarEmail("a@b.com"));
console.log(validarSenha("12345678"));`
        }
      ],
      exercises: [
        {
          title: "Exercício — Criar módulo de formatação",
          level: "Médio",
          prompt:
            "Crie um arquivo format.js com função formatarMoeda(valor) e importe em main.js para testar.",
          solution: `// format.js
export function formatarMoeda(v) {
  return v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

// main.js
import { formatarMoeda } from "./format.js";
console.log(formatarMoeda(1234.56));`
        }
      ],
      checklist: [
        "Sei criar e importar módulos.",
        "Entendi named export vs default export.",
        "Consigo organizar pastas por responsabilidade.",
        "Consigo evitar import circular (conceito)."
      ],
      quiz: [
        {
          q: "Quando usar named exports?",
          options: [
            "Quando só existe uma função no arquivo",
            "Quando o arquivo exporta várias coisas",
            "Nunca, use sempre default",
            "Somente com React"
          ],
          answerIndex: 1
        }
      ]
    },

    {
      id: "m6a2",
      title: "Aula 2 — Node.js + NPM (scripts, dependências, sem medo)",
      duration: "90–150 min",
      level: "Intermediário",
      tags: ["node", "npm", "package.json", "scripts", "dependências"],
      tip:
        "NPM é parte do trabalho. Aprenda a ler package.json e entender scripts: isso te libera no mercado.",
      content: `
### 🎯 Objetivo
Você vai aprender:
- O que é Node.js (runtime do JS fora do navegador)
- O que é NPM e package.json
- Dependências vs devDependencies
- Scripts e automação (\`npm run\`)
- Semântica de versões (\`^, ~\`)

---

## 1) Node.js
Node é um runtime que permite executar JS no servidor e no terminal.

Exemplo:
\`\`\`js
// index.js
console.log("Rodando no Node");
\`\`\`

Terminal:
\`\`\`bash
node index.js
\`\`\`

---

## 2) package.json (coração do projeto)
\`\`\`json
{
  "name": "meu-projeto",
  "version": "1.0.0",
  "scripts": {
    "dev": "vite",
    "test": "jest"
  }
}
\`\`\`

---

## 3) dependencies x devDependencies
- **dependencies**: necessárias em produção
- **devDependencies**: necessárias só no desenvolvimento (ex: prettier, jest)

---

## 4) Scripts
Você cria “atalhos”:
\`\`\`json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview"
}
\`\`\`

Rodar:
\`\`\`bash
npm run dev
\`\`\`

---

## 5) Versionamento (visão prática)
- \`^1.2.3\`: aceita novas versões menores/patch (com cuidado)
- \`~1.2.3\`: aceita patch
- Sem símbolo: versão fixa

---

### ✅ O que você aprendeu
- Node executa JS fora do navegador
- NPM gerencia pacotes e scripts
      `,
      exercises: [
        {
          title: "Exercício — Criar um projeto Node",
          level: "Fácil",
          prompt:
            "Crie uma pasta, rode npm init -y, crie index.js e rode node index.js.",
          solution: `# Terminal:
mkdir meu-projeto
cd meu-projeto
npm init -y

# crie index.js com:
console.log("OK");

# rode:
node index.js`
        }
      ],
      checklist: [
        "Sei o que é Node.js.",
        "Entendi o que é package.json.",
        "Sei a diferença entre dependencies e devDependencies.",
        "Consigo rodar scripts com npm run."
      ]
    },

    {
      id: "m6a3",
      title: "Aula 3 — Vite (bundler moderno) + estrutura de projeto front",
      duration: "80–130 min",
      level: "Intermediário",
      tags: ["vite", "bundler", "build", "deploy", "frontend tooling"],
      tip:
        "Vite é o jeito moderno de trabalhar no front. Você ganha hot reload, build e organização profissional.",
      content: `
### 🎯 Objetivo
Você vai:
- Criar projeto com Vite
- Entender dev server e build
- Usar módulos sem dor
- Preparar para deploy

---

## 1) Criar projeto
\`\`\`bash
npm create vite@latest
\`\`\`

Escolha:
- Vanilla
- JavaScript

Depois:
\`\`\`bash
cd projeto
npm install
npm run dev
\`\`\`

---

## 2) Estrutura típica
- \`index.html\`
- \`src/main.js\`
- \`src/style.css\`

---

## 3) Por que isso importa?
Porque no mercado, a maioria dos projetos:
- tem build
- usa import/export
- usa bundler
- tem lint/test

---

### ✅ O que você aprendeu
- Criar e rodar projeto com Vite
- Estrutura típica do front moderno
      `,
      exercises: [
        {
          title: "Exercício — Criar projeto Vite e importar módulo",
          level: "Médio",
          prompt:
            "Crie um projeto Vite e crie src/utils/soma.js exportando soma. Importe em main.js e mostre no console.",
          solution: `// src/utils/soma.js
export const soma = (a,b) => a + b;

// src/main.js
import { soma } from "./utils/soma";
console.log(soma(2,3));`
        }
      ],
      checklist: [
        "Consigo criar projeto com Vite.",
        "Consigo rodar npm run dev.",
        "Consigo importar módulos no src."
      ]
    },

    {
      id: "m6proj1",
      title: "Projeto — Mini biblioteca modular (utils + docs + exemplo real)",
      duration: "6–12 horas",
      level: "Intermediário",
      tags: ["projeto", "modules", "npm", "docs", "clean code"],
      tip:
        "Esse projeto dá muito valor no portfólio porque mostra organização e documentação.",
      content: `
Você vai criar uma mini-biblioteca \`my-utils\` com:
- Funções úteis (formatarMoeda, validarEmail, clamp, debounce)
- Organização em módulos
- Exemplo de uso (uma página demonstrando)
- README bem feito (muito importante)

---

## Funções sugeridas
- \`formatarMoeda(valor)\`
- \`validarEmail(email)\`
- \`clamp(valor, min, max)\`
- \`debounce(fn, delay)\` (muito usado em busca/input)

---

## Requisito de profissionalismo
- Código bem nomeado
- Comentários curtos e úteis
- README com exemplos
- Pasta \`/examples\` com demonstração
      `,
      project: {
        goal:
          "Criar biblioteca modular com documentação e demo, no padrão de portfólio.",
        steps: [
          "Criar projeto Vite Vanilla JS.",
          "Criar pasta src/utils com funções separadas.",
          "Criar index.js exportando tudo (barrel).",
          "Criar uma página /demo usando as funções.",
          "Criar README com exemplos copiáveis.",
          "Extra: publicar no GitHub Pages."
        ],
        starterCode: `// src/utils/format.js
export function formatarMoeda(v) { /* ... */ }

// src/utils/validate.js
export function validarEmail(email) { /* ... */ }

// src/utils/index.js (barrel export)
export * from "./format";
export * from "./validate";`,
        solution: `// Exemplo: debounce
export function debounce(fn, delay = 300) {
  let id;
  return (...args) => {
    clearTimeout(id);
    id = setTimeout(() => fn(...args), delay);
  };
}

// Exemplo: clamp
export function clamp(v, min, max) {
  return Math.min(max, Math.max(min, v));
}`
      },
      checklist: [
        "Tenho funções separadas em arquivos.",
        "Tenho barrel export (index.js).",
        "Tenho demo funcionando.",
        "Tenho README com exemplos.",
        "Tenho deploy (extra)."
      ]
    }
  ]
},

{
  id: "m7",
  title: "Módulo 7 — React (Avançado, padrão mercado)",
  description:
    "Você vai aprender React do jeito certo: componentes, props, estado, hooks, router, context e um dashboard de portfólio.",
  lessons: [
    {
      id: "m7a1",
      title: "Aula 1 — React do zero (Componentes, JSX, Props)",
      duration: "120–180 min",
      level: "Avançado",
      tags: ["react", "jsx", "components", "props", "render"],
      tip:
        "React é uma forma de pensar: UI como função do estado. Domine esse conceito e o resto encaixa.",
      content: `
### 🎯 Objetivo
Você vai aprender:
- O que é React e por que ele existe
- JSX e mentalidade de componente
- Props e reutilização
- Estrutura de projeto React (Vite)

---

## 1) Por que React?
Quando o DOM cresce, manipular tudo “na mão” fica difícil.
React organiza UI em **componentes**, e você descreve a tela baseado no estado.

> UI = f(estado)

---

## 2) Criando projeto
\`\`\`bash
npm create vite@latest
# escolha React + JavaScript
npm install
npm run dev
\`\`\`

---

## 3) Componente básico
\`\`\`jsx
function Hello() {
  return <h1>Olá!</h1>;
}
export default Hello;
\`\`\`

---

## 4) Props (dados que entram no componente)
\`\`\`jsx
function Card({ title, children }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <div>{children}</div>
    </div>
  );
}
\`\`\`

Uso:
\`\`\`jsx
<Card title="Bem-vindo">
  <p>Conteúdo dentro do card</p>
</Card>
\`\`\`

---

### ✅ O que você aprendeu
- Componente é uma função que retorna UI
- Props são entradas que tornam componentes reutilizáveis
      `,
      exercises: [
        {
          title: "Exercício — Componente Botao",
          level: "Médio",
          prompt:
            "Crie um componente Botao({texto}) e use 3 vezes na tela com textos diferentes.",
          solution: `function Botao({ texto }) {
  return <button>{texto}</button>;
}

export default function App() {
  return (
    <div>
      <Botao texto="Salvar" />
      <Botao texto="Cancelar" />
      <Botao texto="Excluir" />
    </div>
  );
}`
        }
      ],
      checklist: [
        "Consegui criar projeto React com Vite.",
        "Criei componente funcional.",
        "Passei props e renderizei valores."
      ],
      quiz: [
        {
          q: "Props são:",
          options: [
            "Dados que entram no componente",
            "Estado global automático",
            "Funções do navegador",
            "Uma API do Node"
          ],
          answerIndex: 0
        }
      ]
    },

    {
      id: "m7a2",
      title: "Aula 2 — useState, eventos e renderização condicional",
      duration: "120–180 min",
      level: "Avançado",
      tags: ["react", "useState", "events", "conditional rendering"],
      tip:
        "Se você dominar useState + render condicional, você consegue fazer 70% das telas reais.",
      content: `
### 🎯 Objetivo
Você vai dominar:
- \`useState\` (estado local)
- Eventos (onClick, onChange)
- Renderização condicional
- Lista com \`.map\` (padrão real)

---

## 1) useState
\`\`\`jsx
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Contador: {count}
    </button>
  );
}
\`\`\`

---

## 2) Render condicional
\`\`\`jsx
{count >= 10 ? <p>Você chegou a 10!</p> : <p>Continue...</p>}
\`\`\`

---

## 3) Listas
\`\`\`jsx
{items.map(item => <li key={item.id}>{item.nome}</li>)}
\`\`\`

> Importante: \`key\` deve ser estável (id real, não index).

---

### ✅ O que você aprendeu
- React atualiza UI automaticamente quando o estado muda
- Você escreve a UI “como deveria ser”, não “como manipular DOM”
      `,
      exercises: [
        {
          title: "Exercício — Lista de tarefas (mini)",
          level: "Médio",
          prompt:
            "Faça um input + botão para adicionar itens em uma lista usando useState. Exiba em <ul>.",
          solution: `import { useState } from "react";

export default function App() {
  const [texto, setTexto] = useState("");
  const [items, setItems] = useState([]);

  function add() {
    if (!texto.trim()) return;
    setItems([...items, { id: crypto.randomUUID(), texto }]);
    setTexto("");
  }

  return (
    <div>
      <input value={texto} onChange={(e) => setTexto(e.target.value)} />
      <button onClick={add}>Adicionar</button>
      <ul>
        {items.map(i => <li key={i.id}>{i.texto}</li>)}
      </ul>
    </div>
  );
}`
        }
      ],
      checklist: [
        "Usei useState corretamente.",
        "Atualizei lista com imutabilidade.",
        "Renderizei lista com map e key."
      ]
    },

    {
      id: "m7a3",
      title: "Aula 3 — useEffect, consumo de API, loading e erros (padrão real)",
      duration: "120–200 min",
      level: "Avançado",
      tags: ["react", "useEffect", "fetch", "api", "loading", "error"],
      tip:
        "useEffect é para sincronizar com efeitos externos: API, storage, timers. Evite efeitos desnecessários.",
      content: `
### 🎯 Objetivo
Você vai:
- Entender \`useEffect\`
- Buscar dados de API no React
- Controlar loading/erro
- Evitar loops infinitos de render

---

## 1) useEffect básico
\`\`\`jsx
useEffect(() => {
  console.log("Rodou ao montar");
}, []);
\`\`\`

---

## 2) Fetch com loading e erro
Padrão real:
- state: data, loading, error
- try/catch
- abort controller (extra)

---

### ✅ O que você aprendeu
- useEffect roda quando dependências mudam
- padrão real de fetch em componentes
      `,
      examples: [
        {
          title: "Exemplo: buscar usuários (JSONPlaceholder)",
          description: "Exemplo clássico com loading/erro.",
          code: `import { useEffect, useState } from "react";

export default function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let alive = true;

    async function load() {
      try {
        setLoading(true);
        setError("");
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!res.ok) throw new Error("HTTP " + res.status);
        const data = await res.json();
        if (alive) setUsers(data);
      } catch (e) {
        if (alive) setError(e.message);
      } finally {
        if (alive) setLoading(false);
      }
    }

    load();
    return () => { alive = false; };
  }, []);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Erro: {error}</p>;

  return (
    <ul>
      {users.map(u => <li key={u.id}>{u.name}</li>)}
    </ul>
  );
}`
        }
      ],
      checklist: [
        "Entendi useEffect com dependências.",
        "Consegui buscar dados com fetch no React.",
        "Tenho loading e error states."
      ]
    },

    {
      id: "m7a4",
      title: "Aula 4 — React Router + Context (navegação e estado global)",
      duration: "120–200 min",
      level: "Avançado",
      tags: ["react", "router", "context", "state management"],
      tip:
        "Router resolve navegação. Context resolve estado global leve (tema, auth). Para muito estado, você pode evoluir para Redux/Zustand depois.",
      content: `
### 🎯 Objetivo
- Configurar React Router
- Criar páginas
- Context para estado global (ex: usuário logado)
- Proteger rotas (conceito)

---

## 1) Router
\`\`\`bash
npm i react-router-dom
\`\`\`

\`\`\`jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
\`\`\`

---

## 2) Context
\`\`\`jsx
import { createContext, useContext, useState } from "react";
const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
\`\`\`

---

### ✅ O que você aprendeu
- Rotas e navegação
- Estado global leve com Context
      `
    },

    {
      id: "m7proj1",
      title: "Projeto — Dashboard em React (cards, filtros, gráficos simples e rotas)",
      duration: "12–25 horas",
      level: "Avançado",
      tags: ["projeto", "react", "dashboard", "router", "context"],
      tip:
        "Esse projeto é perfeito para portfólio: mostra UI, estado, roteamento e organização.",
      content: `
Você vai construir um dashboard com:
- Página Home (visão geral)
- Página Relatórios (tabela + filtro)
- Página Configurações (tema simples com Context)
- Componentes reutilizáveis (Card, Table)
- (Extra) gráfico simples (pode ser SVG ou lib)

---

## Requisitos de profissionalismo
- Componentes pequenos e reutilizáveis
- Pasta /components, /pages, /context
- README e prints
      `,
      project: {
        goal:
          "Construir um dashboard React com páginas, estado e componentes reutilizáveis.",
        steps: [
          "Criar projeto React com Vite.",
          "Instalar react-router-dom.",
          "Criar páginas: Home, Reports, Settings.",
          "Criar componentes: Card, Table, Filter.",
          "Criar ThemeContext para alternar tema (claro/escuro simples).",
          "Adicionar navegação (Navbar).",
          "Adicionar dados fake (mock) para relatórios.",
          "Extra: salvar tema no localStorage."
        ],
        starterCode: `// Estrutura sugerida
// src/pages/Home.jsx
// src/pages/Reports.jsx
// src/pages/Settings.jsx
// src/components/Card.jsx
// src/context/ThemeContext.jsx`,
        solution: `// Dica: esse projeto é grande.
// Se quiser, eu te passo um starter kit completo (estrutura + arquivos principais) no próximo passo.`
      },
      checklist: [
        "Tenho rotas funcionando.",
        "Tenho componentes reutilizáveis.",
        "Tenho Context para tema/estado.",
        "Tenho filtros e listagem.",
        "Tenho README com prints."
      ]
    }
  ]
},

{
  id: "m8",
  title: "Módulo 8 — Testes, Boas Práticas e Debug (nível mercado)",
  description:
    "Você vai aprender a testar com Jest, organizar projeto, usar lint/prettier, debugar de verdade e melhorar a qualidade do código.",
  lessons: [
    {
      id: "m8a1",
      title: "Aula 1 — Debug profissional (console, breakpoints, leitura de stacktrace)",
      duration: "90–140 min",
      level: "Avançado",
      tags: ["debug", "devtools", "breakpoint", "stacktrace"],
      tip:
        "Quem sabe debugar bem aprende 3x mais rápido. Debug é habilidade de sênior.",
      content: `
### 🎯 Objetivo
Você vai:
- Ler erros (stacktrace) com calma
- Usar breakpoints no DevTools
- Entender escopo e valores em tempo real
- Usar console de forma inteligente (table, dir)

---

## 1) Ler stacktrace
Quando aparece:
\`TypeError: cannot read property...\`
- veja a linha
- entenda qual variável está undefined
- volte um passo (origem do undefined)

---

## 2) Breakpoints
No Chrome DevTools:
- Sources → clique na linha → breakpoint
- rode o fluxo → examine variáveis

---

## 3) Console avançado
\`\`\`js
console.table([{a:1},{a:2}]);
console.dir(obj, { depth: null });
\`\`\`

---

### ✅ O que você aprendeu
- Debug é processo: reproduzir → isolar → corrigir → prevenir
      `,
      exercises: [
        {
          title: "Exercício — Depurar undefined",
          level: "Médio",
          prompt:
            "Crie um código que dê erro (acessar prop de undefined). Use breakpoint para ver por que ficou undefined.",
          solution: `const user = null;
// Vai dar erro:
console.log(user.nome);

// Correção:
if (user) console.log(user.nome);
else console.log("user está null");`
        }
      ],
      checklist: [
        "Consigo ler stacktrace.",
        "Sei usar breakpoint no DevTools.",
        "Uso console.table/dir quando necessário."
      ]
    },

    {
      id: "m8a2",
      title: "Aula 2 — Testes com Jest (unitário na prática)",
      duration: "120–180 min",
      level: "Avançado",
      tags: ["jest", "tests", "unit tests", "tdd basics"],
      tip:
        "Teste unitário foca em funções puras (input → output). Comece testando utils e regras de negócio.",
      content: `
### 🎯 Objetivo
Você vai:
- Instalar e rodar Jest
- Criar testes unitários
- Entender expect, toBe, toEqual
- Testar erros (toThrow)
- Entender por que testes salvam seu projeto

---

## 1) Instalação
\`\`\`bash
npm i -D jest
\`\`\`

No package.json:
\`\`\`json
"scripts": { "test": "jest" }
\`\`\`

---

## 2) Função para testar
\`\`\`js
export function soma(a,b){ return a+b; }
\`\`\`

Teste:
\`\`\`js
import { soma } from "./soma";

test("soma 2+3=5", () => {
  expect(soma(2,3)).toBe(5);
});
\`\`\`

---

## 3) Testar objetos/arrays
\`toEqual\` compara estrutura:
\`\`\`js
expect({a:1}).toEqual({a:1});
\`\`\`

---

## 4) Testar erros
\`\`\`js
expect(() => fn()).toThrow();
\`\`\`

---

### ✅ O que você aprendeu
- Teste unitário protege regras
- Você ganha confiança para refatorar
      `,
      exercises: [
        {
          title: "Exercício — Testar validarEmail",
          level: "Difícil",
          prompt:
            "Crie validarEmail(email) e escreva 3 testes: email válido, inválido, vazio.",
          solution: `// validate.js
export function validarEmail(email) {
  return /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email);
}

// validate.test.js
import { validarEmail } from "./validate";

test("email válido", () => {
  expect(validarEmail("a@b.com")).toBe(true);
});

test("email inválido", () => {
  expect(validarEmail("abc")).toBe(false);
});

test("vazio", () => {
  expect(validarEmail("")).toBe(false);
});`
        }
      ],
      checklist: [
        "Instalei e rodei Jest.",
        "Criei testes para funções puras.",
        "Sei a diferença entre toBe e toEqual.",
        "Consigo testar erro com toThrow."
      ],
      quiz: [
        {
          q: "toEqual é usado para:",
          options: [
            "Comparar números apenas",
            "Comparar objetos/arrays por estrutura",
            "Comparar referência de função",
            "Executar o código mais rápido"
          ],
          answerIndex: 1
        }
      ]
    },

    {
      id: "m8a3",
      title: "Aula 3 — Linting, Prettier e Clean Code (padrão time/empresa)",
      duration: "90–150 min",
      level: "Avançado",
      tags: ["eslint", "prettier", "clean code", "boas práticas"],
      tip:
        "Em time, estilo não é opinião: é padrão. Lint/Prettier evita discussões e reduz bugs bobos.",
      content: `
### 🎯 Objetivo
Você vai:
- Entender ESLint e Prettier
- Criar padrão de código
- Aprender princípios de Clean Code aplicáveis no dia a dia

---

## 1) Clean Code (prático)
- nomes claros
- funções pequenas
- uma responsabilidade por função
- evitar duplicação
- tratar erros cedo

Exemplo:
✅ bom:
\`\`\`js
function calcularTotal(itens) {
  return itens.reduce((acc, i) => acc + i.preco * i.qtd, 0);
}
\`\`\`

❌ ruim:
\`\`\`js
function x(a){ let t=0; for(...) t+=...; return t; }
\`\`\`

---

## 2) ESLint/Prettier (visão)
- ESLint: regras de qualidade (evita bugs)
- Prettier: formatação automática

---

### ✅ O que você aprendeu
- Código limpo é sobre legibilidade e manutenção
      `,
      checklist: [
        "Entendi princípios básicos de Clean Code.",
        "Sei o que ESLint e Prettier fazem.",
        "Consigo manter consistência no projeto."
      ]
    },

    {
      id: "m8proj1",
      title: "Projeto — Testando uma To-do List (regras + utils + qualidade)",
      duration: "8–14 horas",
      level: "Avançado",
      tags: ["projeto", "jest", "tests", "clean code"],
      tip:
        "Teste o que importa: regras. DOM é mais difícil de testar no começo; foque em funções puras.",
      content: `
Você vai pegar a lógica de uma To-do List (regras) e testar com Jest:
- addTask(texto)
- removeTask(id)
- toggleTask(id)
- validarTexto(texto)

A UI pode ficar fora do teste.
Isso é exatamente como times fazem: testar regras, não cliquezinho.

      `,
      project: {
        goal:
          "Criar módulo de regras e testes unitários completos.",
        steps: [
          "Criar arquivo src/domain/todo.js com funções puras.",
          "Criar testes para cada função.",
          "Cobrir casos de erro (id inexistente, texto vazio).",
          "Refatorar mantendo testes verdes."
        ],
        starterCode: `// todo.js
export function addTask(tasks, texto) { /* retorna novo array */ }
export function removeTask(tasks, id) { /* retorna novo array */ }
export function toggleTask(tasks, id) { /* retorna novo array */ }`,
        solution: `// Dica: sempre retorne novo array (imutável)
export function addTask(tasks, texto) {
  const t = texto.trim();
  if (!t) throw new Error("Texto inválido");
  return [...tasks, { id: crypto.randomUUID(), texto: t, done: false }];
}`
      },
      checklist: [
        "Criei regras puras para To-do.",
        "Criei testes para add/remove/toggle.",
        "Tratei erros e casos de borda.",
        "Consigo refatorar sem medo (testes verdes)."
      ]
    }
  ]
},

{
  id: "m9",
  title: "Módulo 9 — Projeto Final e Entrada no Mercado",
  description:
    "Módulo final focado em projeto real, portfólio profissional, entrevistas técnicas e preparação para o mercado de trabalho.",
  lessons: [
    {
      id: "m9a1",
      title: "Aula 1 — Portfólio Profissional e Posicionamento",
      duration: "90–120 min",
      level: "Intermediário",
      tags: ["portfólio", "carreira", "github"],
      content: `
### 🎯 Objetivo
Aprender a montar um portfólio profissional que realmente chama atenção de recrutadores.

---

### O que um bom portfólio precisa ter
- 3 a 5 projetos bem feitos (qualidade > quantidade)
- Código organizado e funcional
- README bem escrito
- Link para demo online
- Histórico no GitHub

---

### Estrutura recomendada do portfólio
- Sobre mim
- Projetos (com imagens e links)
- Tecnologias
- Contato

---

### Erros comuns
- Muitos projetos inacabados
- Código sem README
- Projetos copiados sem entendimento

---

### Checklist
- [ ] Projeto funcional
- [ ] README claro
- [ ] Link público
- [ ] Código organizado
`
    },

    {
      id: "m9a2",
      title: "Aula 2 — Git, GitHub e Fluxo Profissional",
      duration: "90–120 min",
      level: "Intermediário",
      tags: ["git", "github", "versionamento"],
      content: `
### 🎯 Objetivo
Aprender como profissionais usam Git no dia a dia.

---

### Conceitos fundamentais
- commit
- branch
- merge
- pull request

---

### Fluxo comum
1. Criar branch
2. Desenvolver
3. Commitar
4. Abrir PR
5. Revisar e mergear

---

### Boas práticas
- Commits pequenos
- Mensagens claras
- Um objetivo por commit
`
    },

    {
      id: "m9a3",
      title: "Aula 3 — Preparação para Entrevistas Técnicas",
      duration: "90–120 min",
      level: "Intermediário",
      tags: ["entrevista", "soft skills", "carreira"],
      content: `
### 🎯 Objetivo
Se preparar para entrevistas técnicas e comportamentais.

---

### O que estudam nas entrevistas
- JavaScript básico e avançado
- Estruturas de dados
- Projetos anteriores
- Raciocínio lógico

---

### Dicas importantes
- Explique seu raciocínio
- Não tente adivinhar
- Seja honesto sobre o que não sabe
`
    },

    {
      id: "m9a4",
      title: "Aula 4 — Projeto Final Profissional",
      duration: "120–200 min",
      level: "Avançado",
      tags: ["projeto", "fullstack", "portfolio"],
      content: `
### 🎯 Objetivo
Criar um projeto completo para usar como cartão de visitas profissional.

---

### Requisitos mínimos
- Frontend com React
- Backend com Node.js
- Banco de dados (PostgreSQL ou MongoDB)
- Autenticação
- CRUD completo
- Deploy funcional

---

### Sugestão de projeto
Sistema de tarefas, agenda ou controle financeiro.

---

### Entregáveis
- Repositório GitHub
- README detalhado
- Deploy funcionando
`
    }
   ]
  }
 ],  
}
