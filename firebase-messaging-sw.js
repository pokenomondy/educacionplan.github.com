importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js");

const firebaseConfig = {
  apiKey: "AIzaSyAaDFOJuIohkPrVo0jEy0qnEPaFeiijvio",
  authDomain: "dufy-asesorias.firebaseapp.com",
  databaseURL: "https://dufy-asesorias-default-rtdb.firebaseio.com",
  projectId: "dufy-asesorias",
  storageBucket: "dufy-asesorias.appspot.com",
  messagingSenderId: "350250942752",
  appId: "1:350250942752:web:f8d0492c9cea9669dd1745",
  measurementId: "G-MH2TEMC9DB"
};


firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

// Optional:
messaging.onBackgroundMessage((message) => {
  console.log("onBackgroundMessage", message);
});