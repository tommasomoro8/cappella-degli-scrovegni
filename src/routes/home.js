const path = require('path')
const express = require('express')
const router = require('express').Router()

router.use(express.static(path.join(__dirname, '..', 'public')))

router.get('/', (req, res) => {
    res.sendFile('public')
})

module.exports = router
