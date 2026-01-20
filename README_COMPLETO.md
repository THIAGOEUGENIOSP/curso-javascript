# 🎓 Curso Completo de JavaScript — Do Zero ao Profissional

Um curso interativo, pedagógico e profissional de JavaScript com **autenticação**, **progresso sincronizado na nuvem** e **deploy automático**.

## ✨ Características

✅ **7 módulos completos** (Fundamentos, DOM, Assíncrono, etc.)  
✅ **Aulas com pedagogia integrada**:
  - Learning outcomes (objetivos claros)
  - Contexto real-world
  - Common mistakes (armadilhas comuns)
  - Difficulty gauge (barra visual)
  - Pré-requisitos e próximas aulas  

✅ **Autenticação com Google/GitHub**  
✅ **Progresso sincronizado no Firebase** (sobrevive a logout)  
✅ **Busca funcional** por tópico, nível, tags  
✅ **Quiz interativo** com auto-correção  
✅ **Checklist de aprendizado**  
✅ **Badges e progresso visual**  
✅ **Responsive mobile-first**  
✅ **Deploy automático no Vercel**  

---

## 🚀 Começar Agora

### Opção 1: Usar o Deploy Atual (Recomendado)

Acesse: **https://curso-web-jet.vercel.app**

⚠️ **Nota:** Firebase ainda não está configurado. Seu progresso será salvo localmente (localStorage).

Para ativar sincronização na nuvem, siga os próximos passos.

### Opção 2: Setup Local Completo

#### 1️⃣ Clonar o repositório

```bash
git clone https://github.com/THIAGOEUGENIOSP/curso-javascript.git
cd curso-javascript
```

#### 2️⃣ Servir localmente

```bash
# Opção A: Python 3
python -m http.server 8000

# Opção B: Node.js
npx http-server -p 8000
```

Acesse: `http://localhost:8000`

#### 3️⃣ Configurar Firebase (OPCIONAL, mas recomendado)

Siga o guia: [FIREBASE_SETUP.md](FIREBASE_SETUP.md)

Resumo rápido:
1. Criar projeto em firebase.google.com
2. Copiar credenciais para `firebase-config.js`
3. Ativar Google e GitHub authentication
4. Criar Realtime Database
5. Publicar regras de segurança

---

## 📚 Estrutura do Curso

### Módulo 1: Fundamentos (Iniciante)
- **m1a1**: O que é programação
- **m1a2**: Operadores e Lógica  
- **m1a3**: Laços (for/while)
- **m1a4**: Funções
- **m1a5**: Arrays e Métodos
- **m1a6**: Objetos e JSON
- **m1a7**: Classes (ES6)
- **m1a8**: Tratamento de Erros
- **m1a9**: Destructuring e Spread
- **m1a10**: Closures e Escopos

### Módulo 2: DOM e Eventos (Intermediário)
- Seleção e manipulação do DOM
- Eventos e listeners
- Classes dinâmicas
- LocalStorage

### Módulo 3: Assíncrono (Intermediário Forte)
- Event Loop
- Promises
- Async/Await
- Fetch e APIs

### Módulos 4-9
Conceitos avançados, boas práticas, frameworks, deployment...

---

## 🔐 Recursos de Autenticação

### Login com Google

1. Clique em **"Entrar"** na topbar
2. Escolha **"1"** (Google)
3. Autorize com sua conta Google
4. Seu progresso agora é sincronizado! ☁️

### Login com GitHub

1. Clique em **"Entrar"** na topbar
2. Escolha **"2"** (GitHub)
3. Autorize com sua conta GitHub
4. Pronto! ✅

### Logout

Clique em **"Sair"** para desconectar.

**Nota:** Seu progresso fica salvo mesmo após logout.

---

## 🔍 Busca Funcional

Use a barra de busca na sidebar para encontrar aulas por:

- **Tópicos**: `arrays`, `funções`, `async`, `DOM`
- **Nível**: `Iniciante`, `Intermediário`, `Avançado`
- **Tags**: Qualquer tag da aula

Exemplos:
```
• Busque "for" → encontra aulas com loops
• Busque "Intermediário" → mostra todas intermediárias
• Busque "fetch" → encontra aulas sobre APIs
```

---

## 📊 Rastreando Progresso

### Badges

Ganhe badges ao completar grupos de aulas:
- 🥉 Bronze: 1+ aula
- 🥈 Silver: 25% do curso
- 🥇 Gold: 50% do curso
- 💎 Platinum: 100% do curso

### Progress Bar

A barra visual mostra sua progressão em tempo real.

### Exportar Progresso

Clique em **"Exportar progresso"** para salvar um JSON local (útil para backup).

---

## 🎯 Como Adicionar Novas Aulas

### 1. Estrutura Básica

Abra `courseData.js` e procure por um módulo, ex. `m1`:

```javascript
{
  id: "m1a4",
  title: "Aula 4 — Seu Tópico",
  duration: "60–90 min",
  level: "Iniciante|Intermediário|Avançado",
  tags: ["tag1", "tag2"],
  tip: "Uma dica inspiradora",
  
  // Seções pedagógicas (OBRIGATÓRIAS)
  learningOutcomes: [
    "✓ Objetivo 1",
    "✓ Objetivo 2",
    "✓ Objetivo 3"
  ],
  
  realWorldContext: {
    description: "Como isso é usado no mundo real",
    examples: ["Exemplo 1", "Exemplo 2"]
  },
  
  commonMistakes: [
    {
      title: "Erro comum",
      wrong: `console.log("código errado")`,
      right: `console.log("código correto")`,
      explanation: "Por que é errado"
    }
  ],
  
  prerequisites: ["m1a1", "m1a2"], // IDs das aulas pré-requisito
  nextRecommended: ["m1a5"],       // Aulas sugeridas depois
  
  content: `
### Seu conteúdo em Markdown
\`\`\`js
let exemplo = "código";
\`\`\`
  `,
  
  exercises: [
    {
      title: "Exercício 1",
      level: "Médio",
      prompt: "Descrição do exercício",
      solution: `console.log("solução")`
    }
  ],
  
  checklist: [
    "Conceito 1 dominado",
    "Conceito 2 dominado"
  ],
  
  quiz: [
    {
      q: "Pergunta",
      options: ["A", "B", "C", "D"],
      answerIndex: 0
    }
  ]
}
```

### 2. Adicione a um módulo

Procure a section `m2` (ou a que quiser), e adicione sua aula **dentro** do array `lessons`:

```javascript
{
  id: "m2",
  title: "Módulo 2",
  lessons: [
    // aulas existentes...
    
    {
      id: "m2a5",  // ← Sua nova aula
      // ... resto da estrutura
    }
  ]
}
```

### 3. Validar

Execute em um terminal:

```bash
node tools/checkBalance.js courseData.js
```

Se tiver erro de sintaxe, ele vai avisar (procure ']' ou '}' faltando).

### 4. Deploy

```bash
git add courseData.js
git commit -m "feat: adicionar aula m2a5"
git push
# Vercel faz deploy automaticamente em ~30s
```

---

## 🌍 Deploy no Vercel

Seu repositório já está conectado!

Sempre que fizer `git push`, o Vercel:
1. Clona seu código
2. Valida (checa sintaxe)
3. Build
4. Deploy automático

URL: **https://curso-web-jet.vercel.app**

---

## 🎨 Customização

### Cores

Edit `:root` em `styles.css`:

```css
:root {
  --accent: #60a5fa;      /* Azul primário */
  --accent2: #a78bfa;     /* Roxo secundário */
  --good: #34d399;        /* Verde (certo) */
  --bad: #fb7185;         /* Vermelho (errado) */
  /* ... mais cores */
}
```

### Logo

Edit a SVG em `index.html` (procure `<svg viewBox="0 0 64 64">`).

### Tema de Estilos

Abra `styles.css` e procure por seções temáticas:
- `topbar` = cabeçalho
- `card` = containers
- `sidebar` = menu lateral
- `lesson-*` = conteúdo das aulas

---

## 📱 Responsividade

O site funciona bem em:
- ✅ Desktop (1400px+)
- ✅ Tablet (800-1400px)
- ✅ Mobile (< 800px)

Media queries principales:
- `@media (max-width: 1100px)` → tablet/mobile
- `@media (max-width: 800px)` → mobile otimizado

---

## 🛠 Troubleshooting

### "Página em branco"

1. F12 → Console → procure erros vermelhos
2. Verifique `courseData.js` (pode ter erro de sintaxe)
3. Rode `node tools/checkBalance.js courseData.js`

### "Firebase não funciona"

1. Verifique `firebase-config.js` tem credenciais
2. Veja browser console (F12 → Console)
3. Siga [FIREBASE_SETUP.md](FIREBASE_SETUP.md)

### "Busca não funciona"

1. F12 → Console → procure erros
2. Verifique que as tags em `courseData.js` estão corretas

### "Progresso não salva"

- **Sem Firebase**: localStorage é por browser. Trocar browser = reset.
- **Com Firebase**: Deve funcionar em qualquer device após login

---

## 📊 Analytics e Melhorias Futuras

### Próximas Prioridades

1. **Dark/Light mode toggle**
2. **Certificado PDF** ao terminar curso
3. **Leaderboard** (usuários com mais progresso)
4. **Sistema de pontos** avançado
5. **Suporte a múltiplos idiomas**
6. **Integração com Discord** (comunidade)
7. **Feedback automático** em quizzes

### Como Contribuir

1. Fork o repositório
2. Faça suas mudanças
3. Commit + Push
4. Abra Pull Request

---

## 📞 Suporte

- **Documentação:** Este README
- **Firebase:** [FIREBASE_SETUP.md](FIREBASE_SETUP.md)
- **Deploy:** [DEPLOY.md](DEPLOY.md)
- **Issues:** GitHub Issues
- **Comunidade:** Discord (em breve)

---

## 📄 Licença

Este projeto é open source. Use livremente! ✨

---

## 👨‍💻 Desenvolvido com

- **HTML5** (semantic)
- **CSS3** (flexbox, grid, custom properties)
- **Vanilla JavaScript** (sem frameworks)
- **Firebase** (auth + realtime database)
- **Vercel** (deployment)
- **Marked.js** (markdown rendering)

---

## 🎓 Última Atualização

**Data:** 20 de janeiro de 2026  
**Versão:** v2.0 — Com Firebase, Autenticação e Busca  
**Status:** ✅ Pronto para Produção  

---

**Comece a aprender agora:** https://curso-web-jet.vercel.app

Bom curso! 🚀📚
