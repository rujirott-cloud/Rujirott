importScripts('https://www.gstatic.com/firebasejs/10.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.0.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyBvgTpSZGvWMcrXiDIcpoCVzBo1YTUQhhw",
  projectId: "pwa-test-28530",
  messagingSenderId: "G-JZ5X8T700Q",
  appId: "1:645077281523:web:5ee5306bb9ef84c9be6586"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/firebase-logo.png' // ใส่รูปไอคอนของคุณ
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
