# 🔥 Setup Firebase — Guia Passo a Passo

Seu curso agora suporta **autenticação com Google/GitHub** e **sincronização de progresso em nuvem**!

## ✅ Passo 1: Criar Projeto Firebase

1. Acesse [https://console.firebase.google.com/](https://console.firebase.google.com/)
2. Clique em **"Adicionar Projeto"**
3. Nome: `curso-javascript` (ou seu nome)
4. Próximo → Próximo → **Criar Projeto** (esperar 2-3 min)

---

## ✅ Passo 2: Copiar Credenciais

1. No console Firebase, vá em **Project Settings** (⚙️ canto superior)
2. Aba **"Your Apps"**
3. Se não tiver app web, clique no ícone `</> ` (adicionar app web)
4. Nome: `Curso Web`
5. **Register app**
6. Copie o objeto `firebaseConfig`:

```javascript
const firebaseConfig = {
  apiKey: "AIzaSyD_...",
  authDomain: "seu-projeto.firebaseapp.com",
  projectId: "seu-projeto-id",
  storageBucket: "seu-projeto.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc..."
};
```

7. Substitua os valores em `firebase-config.js`

---

## ✅ Passo 3: Habilitar Autenticação

1. No console Firebase, vá em **Authentication** (menu esquerdo)
2. Clique em **"Get Started"**
3. **Sign-in method** → **Google**
   - Ativar
   - Email suporte: seu email
   - Salvar
4. Repetir para **GitHub**:
   - **Sign-in method** → **GitHub**
   - Ativar
   - Ir em [https://github.com/settings/applications/new](https://github.com/settings/applications/new)
   - Nome: `Curso JavaScript`
   - URL Homepage: `https://seu-dominio.vercel.app`
   - Callback: `https://seu-projeto.firebaseapp.com/__/auth/handler` (pega do Firebase)
   - Copiar **Client ID** e **Client Secret** de volta para o Firebase
   - Salvar

---

## ✅ Passo 4: Configurar Realtime Database

1. Menu esquerdo → **Realtime Database**
2. **Criar Banco de Dados**
3. Localização: `us-central1`
4. Regras: **Iniciar no modo de teste** (depois você customiza)
5. **Ativar**

---

## ✅ Passo 5: Regras de Segurança

Substitua as regras padrão por:

```json
{
  "rules": {
    "users": {
      "$uid": {
        ".read": "$uid === auth.uid",
        ".write": "$uid === auth.uid",
        "progress": {
          ".validate": "newData.hasChildren(['doneLessons', 'checklist', 'quizAnswers'])"
        }
      }
    }
  }
}
```

Clique em **Publicar**.

---

## ✅ Passo 6: Testar no Seu App

1. Atualize o navegador
2. Clique em **"Entrar"** na topbar
3. Escolha Google ou GitHub
4. Faça algumas ações (marcar aula como concluída, responder quiz)
5. Logout → Faça login novamente
6. Seu progresso deve estar lá! ✅

---

## 🔧 Troubleshooting

### "Firebase não foi configurado"
- Verifique se `firebase-config.js` tem as credenciais corretas
- Verifique se os scripts Firebase estão carregando (F12 → Console)

### "Erro ao fazer login"
- Verifique as origens autorizadas:
  - Firebase Console → Authentication → Settings → Autorizar domínios
  - Adicione:
    - `localhost:8000` (desenvolvimento local)
    - `seu-dominio.vercel.app` (produção)

### "Progresso não salva"
- Verifique se está logado (icon no topo deve aparecer)
- Verifique as regras do Realtime Database
- Console (F12) deve mostrar "`✅ Progresso salvo no Firebase`"

---

## 📱 Próximas Etapas

1. Deploy para Vercel (automático via GitHub)
2. Testar no celular
3. Compartilhar com alunos!

---

**Dúvidas?** Revise a [documentação do Firebase](https://firebase.google.com/docs).

Bom curso! 🎓
