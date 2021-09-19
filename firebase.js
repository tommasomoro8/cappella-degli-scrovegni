import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js";
import { getFirestore, addDoc, collection, Timestamp } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-firestore.js";
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

// analytics
const analytics = getAnalytics(app)

bottone.addEventListener('click', () => {
    logEvent(analytics, "go_indoor")
})

langButton.addEventListener('click', () => {
    logEvent(analytics, "change_lang", {
        to: language
    })
})


// database
const db = getFirestore()

async function newError(email, description, replay) {
    try {
        await addDoc(collection(db, "errors"), {
            email: email,
            description: description,
            replay: replay,
            when: Timestamp.fromDate(new Date()),
            solved: false
        })

        return true
    } catch (e) {
        console.error("An error has occurred: ", e)
        
        return false
    }
}

//provvisorio

problemButton.addEventListener('click', async () => {
    const result = await newError(problemEmail.value, problemDescription.value, problemReplay.checked)
    if (result) {
        problemStatus.innerHTML = "Grazie! La tua segnalazione è andata a buon fine"
        if (problemReplay.checked) {
            problemStatus.innerHTML += ", riceverai sulla tua casella postale una email quando il problema da te segnalato sarà risolto"
        }
    } else {
        problemStatus.innerHTML = "scusaci :( La tua segnalazione non è andata a buon fine, ti chiediamo di ritentare più tardi"
    }
})

//fino a qui
