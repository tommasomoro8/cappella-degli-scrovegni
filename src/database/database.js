const admin = require('firebase-admin')
if (process.env.NODE_ENV != 'production') require('dotenv').config()

admin.initializeApp({
    credential: admin.credential.cert({
      type: process.env.TYPE,
      project_id: process.env.PROJECT_ID,
      private_key_id: process.env.PRIVATE_KEY_ID,
      private_key: process.env.PRIVATE_KEY.replace(/\\n/g, '\n'),
      client_email: process.env.CLIENT_EMAIL,
      client_id: process.env.CLIENT_ID,
      auth_uri: process.env.AUTH_URI,
      token_uri: process.env.TOKEN_URI,
      auth_provider_x509_cert_url: process.env.AUTH_PROVIDER_X509_CERT_URL,
      client_x509_cert_url: process.env.CLIENT_X509_CERT_URL
    })
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