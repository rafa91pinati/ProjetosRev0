importScripts('https://www.gstatic.com/firebasejs/10.8.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.8.1/firebase-messaging-compat.js');

// Configuração vinculada ao seu projeto agenda-4efa7
firebase.initializeApp({
  apiKey: "AIzaSyDokOh2iwSG1L6NKna3DuM2jS6YiaphKKM",
  projectId: "agenda-4efa7",
  messagingSenderId: "299659202964",
  appId: "1:299659202964:web:e358210feb4d7784f63f81"
});

const messaging = firebase.messaging();

// Permite que o app recarregue automaticamente ao detectar mudanças no GitHub
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

// Exibe a notificação de alarme
messaging.onBackgroundMessage((payload) => {
  const notificationTitle = payload.notification.title || "Alarme de Atividade";
  const notificationOptions = {
    body: payload.notification.body || "Sua tarefa vai começar!",
    icon: 'favicon.ico',
    badge: 'favicon.ico',
    vibrate: [200, 100, 200]
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});