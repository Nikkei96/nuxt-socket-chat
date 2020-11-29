var app = require('express')()
var server = require('http').createServer(app)
var io = require('socket.io')(server)

io.on('connection', socket => {
  console.log('IO Connected')
})

module.exports = {
  app, server
}