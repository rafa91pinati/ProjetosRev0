importScripts('https://www.gstatic.com/firebasejs/10.8.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.8.1/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: "AIzaSyDokOh2iwSG1L6NKna3DuM2jS6YiaphKKM",
    projectId: "agenda-4efa7",
    messagingSenderId: "299659202964",
    appId: "1:299659202964:web:e358210feb4d7784f63f81"
});

const messaging = firebase.messaging();

// Força o Service Worker a se ativar imediatamente
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', () => self.clients.claim());

messaging.onBackgroundMessage((payload) => {
    console.log('Mensagem em segundo plano:', payload);
});