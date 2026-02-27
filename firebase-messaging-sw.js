importScripts('https://www.gstatic.com/firebasejs/10.8.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.8.1/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: "AIzaSyDokOh2iwSG1L6NKna3DuM2jS6YiaphKKM",
    authDomain: "agenda-4efa7.firebaseapp.com",
    projectId: "agenda-4efa7",
    storageBucket: "agenda-4efa7.appspot.com",
    messagingSenderId: "299659202964",
    appId: "1:299659202964:web:e358210feb4d7784f63f81"
});

const messaging = firebase.messaging();

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', () => self.clients.claim());

messaging.onBackgroundMessage((payload) => {
    console.log('Mensagem em segundo plano:', payload);
    self.registration.showNotification(payload.notification.title, {
        body: payload.notification.body,
        icon: 'https://cdn-icons-png.flaticon.com/512/311/311022.png'
    });
});