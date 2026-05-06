const { processPayment } = require('../src/payment');

describe('Processamento de Pagamentos', () => {
  it('deve processar um pagamento maior que zero com sucesso', () => {
    const result = processPayment(100);
    expect(result.status).toBe('success');
    expect(result.amount).toBe(100);
    expect(result.transactionId).toBeDefined();
  });

  it('deve lançar um erro ao tentar processar pagamento de valor zero ou negativo', () => {
    expect(() => processPayment(0)).toThrow('O valor do pagamento deve ser maior que zero.');
    expect(() => processPayment(-50)).toThrow('O valor do pagamento deve ser maior que zero.');
  });
});
