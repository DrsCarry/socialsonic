// Adicione um evento de clique ao botão "FAZER MEU PEDIDO"
document.querySelector('.btn-primary').addEventListener('click', function() {
    // Verifique se os termos de serviço foram aceitos
    if (document.getElementById('terms').checked) {
      // Obtenha os valores do formulário
      let username = document.getElementById('username').value;
      let email = document.getElementById('email').value;
      let paymentMethod = document.getElementById('payment-method').value;
  
      // Valide se os campos obrigatórios foram preenchidos
      if (username && email) {
        // Envie os dados do formulário para o servidor
        // Você pode usar AJAX ou uma função de envio de formulário para isso
        alert('O pedido foi enviado com sucesso!');
      } else {
        alert('Por favor, preencha todos os campos obrigatórios.');
      }
    } else {
      alert('Por favor, aceite os termos de serviço.');
    }
  });