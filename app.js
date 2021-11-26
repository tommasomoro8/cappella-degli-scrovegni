const Joi = require('joi')
const path = require('path')
const express = require('express')

const db = require('./utils/database.js')
const { nextTick } = require('process')
const app = express()

app.use(express.json())

app.enable('trust proxy')
app.use((req, res, next) => {
    req.secure ? next() : res.redirect('https://' + req.headers.host + req.url)
    (req.url == '/' || req.url == '/api/problem' || req.url == '/api/review') ? next() : res.redirect('http://' + req.headers.host)
})

app.get('/', (req, res) => {
    app.use(express.static(path.join(__dirname, 'public')))
    res.sendFile(path.join(__dirname, 'public'))
})


app.post('/api/problem', async (req, res) => {
    const { error } = Joi.object({
            email: Joi.string().email(),
            description: Joi.string().required()
        }).validate(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    const result = await db.logError(req.body.email, req.body.description)
    if (result['error']) return res.status(500).send(result)

    res.send(req.body)
})

app.post('/api/review', async (req, res) => {
    const { error } = Joi.object({
            vote: Joi.number().integer().min(1).max(5).required(),
            review: Joi.string().required()
        }).validate(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    const result = await db.logReview(req.body.vote, req.body.review)
    if (result['error']) return res.status(500).send(result)

    res.send(req.body)
})

const port =  process.env.PORT || 3000
app.listen(port, () => console.warn(`Listening on port ${port}...`))