const express = require('express')
const helmet = require('helmet')
const cors = require('cors')


const server = express()

const accountRoutes = require('./account-routes.js')
const contactRoutes = require('./contact-routes.js')
const caseRoutes = require('./case-routes.js')

server.use(helmet())
server.use(express.json())
server.use(cors())

server.use('/api/sf/account', accountRoutes)
server.use('/api/sf/contact', contactRoutes)
server.use('/api/sf/case', caseRoutes)

module.exports = server