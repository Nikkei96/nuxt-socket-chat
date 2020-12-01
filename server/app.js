const { Socket } = require('socket.io-client')

const app = require('express')()
const server = require('http').createServer(app)
const io = require('socket.io')(server)
const users = require('./users')()

const m = (name, text, id) => ({ name, text, id })

io.on('connection', socket => {
  socket.on('userJoined', (data, callback) => {
    if (!data.name || !data.room) {
      return callback('Данные не корректны!')
    }

    socket.join(data.room)

    users.remove(socket.id)

    users.add({
      id: socket.id,
      name: data.name,
      room: data.room
    })

    socket.emit('newMessage', m('admin', `Добро пожаловать ${data.name}`))
    callback({ userId: socket.id })
    socket.broadcast.to(data.room)
      .emit('newMessage', m('admin', `Пользователь ${data.name} зашёл.`))


  })

  socket.on('createMessage', (data, cb) => {
    if (!data.text) {
      return cb('Текст не может быть пустым')
    }

    const user = users.get(data.id)
    if (user) {
      io.to(user.room).emit('newMessage', m(user.name, data.text, data.id))
    }
    cb()

  })
})

module.exports = {
  app, server
}