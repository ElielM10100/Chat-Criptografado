// Simulação de funções de criptografia (não use em produção real)
function encryptMessage(message) {
    return btoa(message);
  }
  
  function decryptMessage(encryptedMessage) {
    return atob(encryptedMessage);
  }
  