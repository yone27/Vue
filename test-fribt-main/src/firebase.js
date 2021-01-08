const firebaseConfig = {
    apiKey: "AIzaSyBmhAOO0dMQF_TkoJGWLF8W7bM2SiOCjAk",
    authDomain: "test-front-2522e.firebaseapp.com",
    databaseURL: "https://test-front-2522e.firebaseio.com",
    projectId: "test-front-2522e",
    storageBucket: "test-front-2522e.appspot.com",
    messagingSenderId: "698839072363",
    appId: "1:698839072363:web:9394175a0d2efc7888fb2e"
}

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();