import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js";
//import { getFirestore, addDoc, collection, Timestamp } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-firestore.js";
import { getAnalytics, logEvent } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-analytics.js";

const app = initializeApp({
    apiKey: "AIzaSyBQ5fGpGJwMT2TQQ7yIhXqkhIoHiOeCkgA",
    authDomain: "cappella-degli-scrovegni.firebaseapp.com",
    projectId: "cappella-degli-scrovegni",
    storageBucket: "cappella-degli-scrovegni.appspot.com",
    messagingSenderId: "34509744570",
    appId: "1:34509744570:web:0cea83ae6332ded6dc5583",
    measurementId: "G-MJPG2PJ9RN"
})

const analytics = getAnalytics(app)

//document.getElementById("home-button").addEventListener('click', () => {
    //logEvent(analytics, "go_indoor")
//})

langButton.addEventListener('click', () => logEvent(analytics, "change_lang", { to: language }))