function messageComponent(user, message) {
  const chatSection = document.querySelector('.chat_section')

  const messageArticle = document.createElement('article')
  const userTitle = document.createElement('h3')
  const userMessage = document.createElement('p')

  userTitle.innerText = user
  userMessage.innerText = message

  messageArticle.append(userTitle, userMessage)
  chatSection.append(messageArticle)
}

function renderMessage() {
  const user = document.querySelector('.chat_user').value
  const message = document.querySelector('.chat_message').value

  console.log(`${user} - ${message}`)
  messageComponent(user, message)
}

function main() {
  const sendButton = document.querySelector('.chat_message_button')
  sendButton.addEventListener('click', () => {
    renderMessage()
  })
}

main()
