const sockets = new WebSocket('ws://r8tf18qq1sgb7ey8m3sgfia0.178.105.39.91.sslip.io')

sockets.addEventListener('open', () => {
  console.log('connected')
})

function messageComponent(user, message) {
  const chatSection = document.querySelector('.chat_section')

  const messageArticle = document.createElement('article')
  const userTitle = document.createElement('h3')
  const userMessage = document.createElement('p')

  userTitle.innerText = user
  userMessage.innerText = message

  // sockets.send(
  //   JSON.stringify({
  //     user,
  //     message,
  //   }),
  // )
  messageArticle.append(userTitle, userMessage)
  chatSection.append(messageArticle)
}

function sendMessage(user, message) {
  sockets.send(
    JSON.stringify({
      user,
      message,
    }),
  )
}

function renderMessage() {
  const user = document.querySelector('.chat_user').value
  const message = document.querySelector('.chat_message').value

  sendMessage(user, message)
}

function main() {
  const sendButton = document.querySelector('.chat_message_button')
  sendButton.addEventListener('click', () => {
    renderMessage()
  })

  sockets.addEventListener('message', (event) => {
    const data = JSON.parse(event.data)
    console.log(data)
    messageComponent(data.user, data.message)
  })
}

main()
