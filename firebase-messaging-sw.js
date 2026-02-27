importScripts('https://www.gstatic.com/firebasejs/10.8.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.8.1/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: "AIzaSyDokOh2iwSG1L6NKna3DuM2jS6YiaphKKM",
    authDomain: "agenda-4efa7.firebaseapp.com", // 🔥 ADICIONE ISSO
    projectId: "agenda-4efa7",
    storageBucket: "agenda-4efa7.appspot.com", // 🔥 ADICIONE ISSO
    messagingSenderId: "299659202964",
    appId: "1:299659202964:web:e358210feb4d7784f63f81"
});

const messaging = firebase.messaging();

// Ativa imediatamente
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', () => self.clients.claim());

// Mensagem em background
messaging.onBackgroundMessage((payload) => {
    console.log('Mensagem em segundo plano:', payload);

    self.registration.showNotification(payload.notification.title, {
        body: payload.notification.body,
        icon: '/icon-192.png' // opcional
    });
});