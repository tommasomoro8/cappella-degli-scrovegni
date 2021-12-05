const db = require('../utils/database')
const Joi = require('joi')
const router = require('express').Router()

router.get('/test', (req, res) => {
    res.send(process.env.NODE_ENV)
})

router.post('/problem', async (req, res) => {
    const { error } = Joi.object({
            email: Joi.string().email(),
            description: Joi.string().required()
        }).validate(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    const result = await db.logError(req.body.email, req.body.description)
    if (result['error']) return res.status(500).send(result)

    res.send(req.body)
})

router.post('/review', async (req, res) => {
    const { error } = Joi.object({
            vote: Joi.number().integer().min(1).max(5).required(),
            review: Joi.string().required()
        }).validate(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    const result = await db.logReview(req.body.vote, req.body.review)
    if (result['error']) return res.status(500).send(result)

    res.send(req.body)
})

module.exports = router