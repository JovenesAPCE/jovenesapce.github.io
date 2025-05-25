importScripts('https://www.gstatic.com/firebasejs/10.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.0.0/firebase-messaging-compat.js');
importScripts('service-worker.js');

firebase.initializeApp({
  apiKey: "AIzaSyA0O-2hYjIBpgD_ud7qvOgiJ_dcRdC1XjU",
  appId: "1:212920800593:web:429b2184e0866f6901ef70",
  messagingSenderId: "212920800593",
  projectId: "jamt-efcb2",
  authDomain: "jamt-efcb2.firebaseapp.com",
  storageBucket: "jamt-efcb2.firebasestorage.app",
  measurementId: "G-6NLMQX335M",
  databaseURL: "https://jamt-efcb2-default-rtdb.firebaseio.com"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Mensaje recibido en background:', payload);

     // 🔁 Cerrar notificaciones que no tienen ícono
   self.registration.getNotifications().then(notifications => {
     notifications.forEach(n => {
       if (!n.icon) {
         n.close();
       }
     });
   });

  const notificationTitle = payload.notification?.title || 'Notificación';
  const notificationOptions = {
    body: payload.notification?.body || '',
    icon: '/icons/Icon-192.png',
    data: {
          url: '/notify' // Ruta donde quieres abrir la app (ej. '/', '/notificaciones')
        }
    };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
