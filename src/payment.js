function processPayment(amount) {
  if (amount <= 0) {
    throw new Error('O valor do pagamento deve ser maior que zero.');
  }
  return {
    status: 'success',
    amount: amount,
    transactionId: Math.floor(Math.random() * 1000000 +1)
  };
}

module.exports = { processPayment };
