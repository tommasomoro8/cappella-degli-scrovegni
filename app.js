const home = require('./routes/home')
const api = require('./routes/api')
const secure = require('./middleware/secure-redirect')
const error = require('./middleware/error-redirect')

const helmet = require('helmet')
const express = require('express')
const app = express()

app.enable('trust proxy')
app.use(express.json())
app.use(helmet({ contentSecurityPolicy: false }))

app.use(secure)
app.use('/', home)
app.use('/api', api)
app.use(error)

const port =  process.env.PORT || 3000
app.listen(port, () => console.log(`Listening on port ${port} in ${process.env.NODE_ENV || 'development'} mode...`))