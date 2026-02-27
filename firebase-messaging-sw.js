importScripts('https://www.gstatic.com/firebasejs/10.8.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.8.1/firebase-messaging-compat.js');

// Configuração atualizada com sua API Key
firebase.initializeApp({
  apiKey: "AIzaSyDokOh2iwSG1L6NKna3DuM2jS6YiaphKKM",
  projectId: "agenda-4efa7",
  messagingSenderId: "299659202964",
  appId: "1:299659202964:web:e358210feb4d7784f63f81"
});

const messaging = firebase.messaging();

// Lógica essencial para o Refresh Automático (Força a atualização do cache)
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

// Ouve as notificações de alarme mesmo com o celular bloqueado ou app fechado
messaging.onBackgroundMessage((payload) => {
  console.log('Notificação em segundo plano recebida:', payload);

  const notificationTitle = payload.notification.title || "Alarme da Agenda";
  const notificationOptions = {
    body: payload.notification.body || "Você tem uma tarefa agora!",
    icon: 'favicon.ico', // Certifique-se que o ícone existe no seu GitHub
    badge: 'favicon.ico',
    vibrate: [200, 100, 200] // Faz o celular vibrar
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});