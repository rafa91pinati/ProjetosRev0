importScripts('https://www.gstatic.com/firebasejs/10.8.1/firebase-app-sw.js');
importScripts('https://www.gstatic.com/firebasejs/10.8.1/firebase-messaging-sw.js');

firebase.initializeApp({
    apiKey: "AIzaSyDokOh2iwSG1L6NKna3DuM2jS6YiaphKKM",
    projectId: "agenda-4efa7",
    messagingSenderId: "299659202964",
    appId: "1:299659202964:web:e358210feb4d7784f63f81"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log('Notificação recebida:', payload);
    self.registration.showNotification(payload.notification.title, {
        body: payload.notification.body,
        icon: 'favicon.ico'
    });
});