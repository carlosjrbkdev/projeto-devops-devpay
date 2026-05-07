// Importa a lógica de negócio principal do nosso sistema
const { processPayment } = require('./src/payment');

console.log("Iniciando a Aplicação DevPay...");
console.log("-----------------------------------");

// Bloco Try-Catch para interceptar qualquer erro lançado pela função (como valor negativo)
try {
  // Executa o processamento de um pagamento de R$ 150,50
  const result = processPayment(150.50);
  
  // Se não der erro, exibe os dados no console para visualização do usuário
  console.log("Pagamento simulado com sucesso!");
  console.log("Status:", result.status);
  console.log("Valor:", result.amount);
  console.log("ID da Transação:", result.transactionId);
} catch (error) {
  // Caso a função 'processPayment' rejeite o pagamento, mostramos a mensagem de erro formatada
  console.error("Erro ao processar pagamento:", error.message);
}

console.log("-----------------------------------");
console.log("Aplicação finalizada.");
