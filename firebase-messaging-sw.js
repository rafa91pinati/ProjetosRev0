importScripts('https://www.gstatic.com/firebasejs/10.8.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.8.1/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "SUA_API_KEY",
  projectId: "agenda-4efa7",
  messagingSenderId: "299659202964",
  appId: "1:299659202964:web:e358210feb4d7784f63f81"
});

const messaging = firebase.messaging();

// Esse código ouve a notificação mesmo com o app fechado
messaging.onBackgroundMessage((payload) => {
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/favicon.ico'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});