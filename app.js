const home = require('./routes/home')
const api = require('./routes/api')
const secure = require('./middleware/secure-redirect')
const error = require('./middleware/error-redirect')

const express = require('express')
const app = express()

app.enable('trust proxy')
app.use(express.json())

app.use(secure)
app.use('/', home)
app.use('/api', api)
app.use(error)

const port =  process.env.PORT || 3000
app.listen(port, () => console.warn(`Listening on port ${port}...`))