const express = require('express')
const helmet = require('helmet')
const cors = require('cors')


const server = express()

const testRoutes = require('./test-routes.js')

server.use(helmet())
server.use(express.json())
server.use(cors())

server.use('/test', testRoutes)

module.exports = server