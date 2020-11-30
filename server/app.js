const { Socket } = require('socket.io-client')

var app = require('express')()
var server = require('http').createServer(app)
var io = require('socket.io')(server)

const m = (name, text, id) => ({ name, text, id })

io.on('connection', socket => {
  socket.on('userJoined', (data, callback) => {
    if (!data.name || !data.room) {
      return callback('Данные не корректны!')
    }

    socket.join(data.room)
    socket.emit('newMessage', m('admin', `Добро пожаловать ${data.name}`))
    callback({ userId: socket.id })
    socket.broadcast.to(data.room)
      .emit('newMessage', m('admin', `Пользователь ${data.name} зашёл.`))


  })
})

module.exports = {
  app, server
}