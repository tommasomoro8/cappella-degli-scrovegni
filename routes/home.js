const express = require('express')
const router = require('express').Router()

router.use(express.static('public'))

router.get('/', (req, res) => {
    res.sendFile('public')
})

module.exports = router