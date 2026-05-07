/**
 * Função que simula o processamento de um pagamento.
 * Essa é a regra de negócio principal do nosso sistema DevPay.
 * 
 * @param {number} amount - O valor numérico do pagamento.
 * @returns {Object} Um objeto com o status, valor original e o ID gerado da transação.
 */
function processPayment(amount) {
  // Regra 1: O valor do pagamento não pode ser negativo ou zero.
  if (amount <= 0) {
    throw new Error('O valor do pagamento deve ser maior que zero.');
  }
  
  // Regra 2: Retorna um objeto de sucesso se o valor for válido.
  return {
    status: 'success',
    amount: amount,
    transactionId: Math.floor(Math.random() * 1000000 +1) // Gera um ID aleatório para a transação
  };
}

// Exporta a função para poder ser usada na nossa aplicação (index.js) e nos testes (payment.test.js)
module.exports = { processPayment };
