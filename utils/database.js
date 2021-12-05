const admin = require('firebase-admin')

admin.initializeApp({
  credential: admin.credential.cert(require('./cappella-degli-scrovegni-firebase-adminsdk-dsax4-35d06b8ad6.json'))
})

const db = admin.firestore()

async function logError(email, description) {
    var data = {
        description: description,
        date: admin.firestore.Timestamp.fromDate(new Date()),
        solved: false
    }; if (email) data.email = email

    try {
        await db.collection('errors').add(data)
    } catch (e) {
        console.log(e)
        return { error: e }
    }
    
    return { }
}

async function logReview(vote, review) {
    try {
        await db.collection('reviews').add({
            vote: vote,
            review: review,
            date: admin.firestore.Timestamp.fromDate(new Date())
        })
    } catch (e) {
        console.log(e)
        return { error: e }
    }

    return { }
}

module.exports = { logError, logReview }