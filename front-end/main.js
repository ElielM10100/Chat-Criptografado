const messageInput = document.getElementById('message-input');
const messagesContainer = document.getElementById('messages-container');

function sendMessage() {
  const message = messageInput.value.trim();

  if (message !== '') {
    const encryptedMessage = encryptMessage(message);
    displayMessage(encryptedMessage);

    // Limpar o campo de mensagem após o envio
    messageInput.value = '';
  }
}

function displayMessage(encryptedMessage) {
  const decryptedMessage = decryptMessage(encryptedMessage);

  const messageDiv = document.createElement('div');
  messageDiv.textContent = `🔒 ${encryptedMessage} | 🔓 ${decryptedMessage}`;
  messagesContainer.appendChild(messageDiv);
}

// Exemplo de recebimento de mensagem (simulação de recebimento)
setTimeout(() => {
  const receivedMessage = 'U2FsdGVkX1/Ua3C5y4GAIx=='; // Mensagem criptografada
  displayMessage(receivedMessage);
}, 2000);
