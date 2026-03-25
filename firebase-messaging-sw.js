importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyCpWPdSTy4f2Vw9vFbDgcZ93kPnJ2HBXPc",
  authDomain: "daily-routine-5e94d.firebaseapp.com",
  projectId: "daily-routine-5e94d",
  storageBucket: "daily-routine-5e94d.firebasestorage.app",
  messagingSenderId: "693519205169",
  appId: "1:693519205169:web:ace2042942fbf086a86610"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  const title = payload.notification.title || '\u63d0\u9192';
  const body = payload.notification.body || '';
  self.registration.showNotification(title, {
    body: body,
    icon: '/a/icon.png',
    badge: '/a/icon.png'
  });
});
