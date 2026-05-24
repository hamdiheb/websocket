import { WebSocketServer } from 'ws'

const sockets = new WebSocketServer({ port: 8080 })
console.log('Socket is running')

const data = []
sockets.on('connection', (socket) => {
  console.log('Client connected')

  socket.on('message', (message) => {
    const userMessage = JSON.parse(message.toString())
    data.push(userMessage)
    console.log(data)
    socket.send(
      JSON.stringify({
        user: `${userMessage.user}`,
        message: `${userMessage.message}`,
      }),
    )
  })
})
