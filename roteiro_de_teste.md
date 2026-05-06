# Roteiro Prático: Simulação de DevOps na Apresentação

Este guia passo a passo foi criado para ser usado durante a demonstração ao vivo do projeto ou para você treinar o fluxo antes da apresentação.

Ele mostra, na prática, como o **GitHub Actions (CI)** atua como uma barreira de segurança, impedindo que código com erros seja integrado na branch `main`.

---

## Passo 1: Preparar e Iniciar a Aplicação (Opcional, mas recomendado)
Antes de simularmos a falha, vamos garantir que a aplicação está funcionando perfeitamente na sua máquina para mostrar o cenário base.

1. No seu terminal (dentro da pasta do projeto), certifique-se de que as dependências estão instaladas:
```bash
npm install
```

2. Rode a aplicação para demonstrar seu funcionamento inicial:
```bash
npm start
```
*(Você verá no console a simulação de um pagamento processado com sucesso).*

3. (Opcional) Rode os testes localmente para provar que a branch atual está "saudável":
```bash
npm test
```

---

## Passo 2: Criar uma "Branch Curta"
No seu terminal (dentro da pasta do projeto), simule que você vai desenvolver uma nova funcionalidade. Crie e mude para uma nova branch chamada `feature/nova-regra`:
```bash
git checkout -b feature/nova-regra
```

## Passo 3: Fazer uma alteração proposital (Quebrando o teste)
Vamos forçar um erro para ver o Pipeline CI te impedindo de estragar a branch `main`! 

1. Abra o arquivo `src/payment.js` no seu editor.
2. Altere a lógica da função propositalmente para algo que não faz sentido. 
   *(Por exemplo: se houver um cálculo ou retorno simples, adicione uma soma errada `+ 1`)*.

## Passo 4: Fazer o Commit e o Push
Salve as alterações e envie essa branch para o GitHub:
```bash
git add .
git commit -m "feat: alterando regra de pagamento"
git push -u origin feature/nova-regra
```

## Passo 5: Criar o Pull Request (A barreira)
1. Vá até o repositório no GitHub.
2. Você verá um botão verde sugerindo **"Compare & pull request"**. Clique nele.
3. Adicione uma descrição e clique em **"Create pull request"**.

## Passo 6: Assistir ao CI Falhar (A mágica do DevOps)
1. No seu Pull Request, role a tela para baixo. A área de *checks* ficará amarela informando que o GitHub Actions está rodando.
2. Após alguns segundos, a caixa ficará **Vermelha ❌**.
3. O botão de Merge ficará **bloqueado**. Isso significa que o pipeline pegou o seu erro!
4. *(Na apresentação, clique em **"Details"** ao lado do "X" vermelho e mostre o log de erro para o professor, provando que o CI detectou a falha).*

## Passo 7: Consertar o erro e ver o CI Passar ✅
1. Volte ao seu editor de código local.
2. Desfaça a alteração maldosa no `src/payment.js` (retorne o código original correto).
3. Faça um novo commit corrigindo o bug:
```bash
git add .
git commit -m "fix: corrige regra de pagamento para passar no teste"
git push
```
4. Volte para a tela do Pull Request no GitHub.
5. Um novo teste começará a rodar automaticamente. Espere alguns segundos.
6. A caixa ficará **Verde ✅**! O botão de **"Merge pull request"** será finalmente liberado.

---
**💡 Dica de Ouro:** Fazer exatamente esse fluxo durante os últimos minutos da sua apresentação mostrará total domínio do processo de DevOps, saindo da teoria e mostrando o valor prático imediato da automação!
