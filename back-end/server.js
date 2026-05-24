import { WebSocketServer } from 'ws'

const sockets = new WebSocketServer({ port: 8080 })
console.log('Socket is running')

sockets.on('connection', (socket) => {
  console.log('Client connected')

  socket.send('Welcome')
  socket.on('message', (message) => {
    console.log(`received ${message}`)
    socket.send(`Server received ${message}`)
  })
})
