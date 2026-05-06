const { processPayment } = require('./src/payment');

console.log("Iniciando a Aplicação DevPay...");
console.log("-----------------------------------");

try {
  const result = processPayment(150.50);
  console.log("Pagamento simulado com sucesso!");
  console.log("Status:", result.status);
  console.log("Valor:", result.amount);
  console.log("ID da Transação:", result.transactionId);
} catch (error) {
  console.error("Erro ao processar pagamento:", error.message);
}

console.log("-----------------------------------");
console.log("Aplicação finalizada.");
