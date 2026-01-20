// firebase-config.js
// ⚠️ IMPORTANTE: Substitua as values abaixo com suas credenciais reais do Firebase

// Para obter essas credenciais:
// 1. Vá para https://console.firebase.google.com/
// 2. Crie um projeto novo (ou use existente)
// 3. Vá em Project Settings > Web App
// 4. Copie a configuração abaixo

const firebaseConfig = {
  apiKey: "AIzaSyD_AQUI_SUA_API_KEY_DO_FIREBASE",
  authDomain: "seu-projeto.firebaseapp.com",
  projectId: "seu-projeto-id",
  storageBucket: "seu-projeto.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef123456"
};

// ✅ Inicializar Firebase APENAS se as credenciais forem reais
const isFirebaseConfigured = firebaseConfig.apiKey && 
                             !firebaseConfig.apiKey.includes("AQUI_SUA");

if (isFirebaseConfigured && typeof firebase !== "undefined") {
  try {
    firebase.initializeApp(firebaseConfig);
    console.log("✅ Firebase inicializado com sucesso!");
  } catch (error) {
    console.warn("⚠️ Firebase já foi inicializado ou houve erro:", error.message);
  }
} else {
  console.log("ℹ️ Firebase não foi configurado. Usando localStorage para progresso.");
  console.log("📖 Para ativar, siga: https://github.com/THIAGOEUGENIOSP/curso-javascript/blob/main/FIREBASE_SETUP.md");
}

