const express = require('express')

const routes = express.Router()

routes.get('/', (req, res) => {
  return res.send('hello word')
})

module.exports = routes
