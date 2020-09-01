importScripts("https://www.gstatic.com/firebasejs/7.5.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/7.5.0/firebase-messaging.js");

firebase.initializeApp({
  apiKey: "AIzaSyDXjVnmh3Esxl0jm-J9E8Gdb_tuRaW1rXg",
  authDomain: "simple-3e46c.firebaseapp.com",
  databaseURL: "https://simple-3e46c.firebaseio.com",
  projectId: "simple-3e46c",
  storageBucket: "simple-3e46c.appspot.com",
  messagingSenderId: "735795837342",
  appId: "1:735795837342:web:db8cc69c12faee73313e8f",
  measurementId: "G-M7J3SWPB44",
});
// create messaging
const messaging = firebase.messaging();

// add Listener for background messaging
messaging.setBackgroundMessageHandler(function (message) {
  console.log(
    "[firebase-messaging-sw.js] Received background message",
    message
  );

  // send message to client
  clients
    .matchAll({
      type: "window",
      includeUncontrolled: true,
    })
    .then((windowClients) => {
      for (let i = 0; i < windowClients.length; i++) {
        const windowClient = windowClients[i];
        windowClient.postMessage({
          type: "backgroundMessage",
          message: message,
        });
      }
    });
  return;
});
