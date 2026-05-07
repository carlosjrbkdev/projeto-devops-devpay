// Importa a função do arquivo principal que vamos testar
const { processPayment } = require('../src/payment');

// "describe" agrupa uma série de testes relacionados a uma funcionalidade
describe('Processamento de Pagamentos', () => {
  
  // "it" (ou "test") define um caso de teste específico
  it('deve processar um pagamento maior que zero com sucesso', () => {
    // 1. Ação: Chamamos a função passando o valor de 100
    const result = processPayment(100);
    
    // 2. Validações (Expectativas): Verificamos se o retorno é exatamente o que esperamos
    expect(result.status).toBe('success'); // O status deve ser 'success'
    expect(result.amount).toBe(100);       // O valor deve retornar como 100 (não modificado)
    expect(result.transactionId).toBeDefined(); // O ID da transação deve apenas existir (já que é aleatório)
  });

  // Outro cenário de teste: Testando a barreira de segurança (tratamento de erro)
  it('deve lançar um erro ao tentar processar pagamento de valor zero ou negativo', () => {
    // Valida se a função de fato "explode" (throw) e lança um erro com a mensagem correta 
    // quando tentamos passar valores inválidos (0 ou números negativos)
    expect(() => processPayment(0)).toThrow('O valor do pagamento deve ser maior que zero.');
    expect(() => processPayment(-50)).toThrow('O valor do pagamento deve ser maior que zero.');
  });
});
