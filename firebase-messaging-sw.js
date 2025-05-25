importScripts('https://www.gstatic.com/firebasejs/10.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.0.0/firebase-messaging-compat.js');

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
  const notificationTitle = payload.notification.title;
  const notificationBody = payload.notification?.body || '';
   const notificationIcon = '/icons/Icon-192.png';
  onMessageIconClick(notificationTitle, notificationBody, notificationIcon);
});

async function onMessageIconClick(title, body, icon) {
        const reg = await getSW();
        /**** START titleAndBodySimple ****/
        //const title = "Simple Title";
        const options = {
          body: body,//"Simple piece of body text.\nSecond line of body text 👍",
          icon: icon,//"/demos/notification-examples/images/icon-512x512.png"
          data: {
            url: '/' // Ruta donde quieres abrir la app (ej. '/', '/notificaciones')
          },
        };
        reg.showNotification(title, options);
        /**** END titleAndBodySimple ****/
      }

 function getSW() {
       return navigator.serviceWorker.getRegistration(
         "/service-worker.js"
       );
  }
