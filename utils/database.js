const admin = require('firebase-admin')

const serviceAccount = require('./cappella-degli-scrovegni-firebase-adminsdk-dsax4-35d06b8ad6.json')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
})

const db = admin.firestore()

async function logError(email, description) {
    try {
        await db.collection('errors').add({
            email: email,
            description: description,
            date: admin.firestore.Timestamp.fromDate(new Date()),
            solved: false
        })
    } catch (e) {
        return { error: e }
    }
}

async function logReview(vote, review) {
    try {
        await db.collection('reviews').add({
            vote: vote,
            review: review,
            date: admin.firestore.Timestamp.fromDate(new Date())
        })
    } catch (e) {
        return { error: e }
    }
}

module.exports = { logError, logReview }