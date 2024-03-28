
async function obtenerSolicitudes() {

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
    try {
        console.log(firebaseConfig);
        const app = initializeApp(firebaseConfig);
        const firestore = getFirestore(app);
        const solicitudesSnapshot = await firestore.collection('SOLICITUDES').get();
        const solicitudes = solicitudesSnapshot.docs.map(doc => doc.data());
        return { solicitudes };
    } catch (e) {
        return { err: e };
    }
}
