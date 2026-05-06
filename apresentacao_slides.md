# Roteiro da Apresentação: DevOps na DevPay (10 a 15 minutos)

---

## Slide 1: Título
**Avaliação Parcial — DevOps**
**Uso do GitHub para DevOps no Estudo de Caso "DevPay"**
*(Nomes dos Integrantes)*
*(Data)*

---

## Slide 2: Introdução – O Cenário DevPay
**Problemas Identificados:**
- **Branches Longas:** Desenvolvedores trabalhando isolados por semanas.
- **Conflitos de Merge:** "Inferno do merge" ao tentar juntar o código na homologação.
- **Integração Tardia:** Bugs só aparecem no final do ciclo, atrasando as entregas.
- **Deploy Manual:** Processo lento, suscetível a erro humano e causador de medo a cada *release*.

**Nosso Objetivo:** 
Implementar uma cultura DevOps com GitHub Actions para reduzir riscos e entregar valor com previsibilidade.

---

## Slide 3: Fundamentos Teóricos
**Por que mudar?**
- **Risco de Integração:** Quanto mais tempo demoramos para integrar, maior o risco de conflitos.
- **Feedback Rápido:** Falhas devem ser descobertas imediatamente após o commit.
- **Build Reprodutível:** O fim da desculpa *"na minha máquina funciona"*. Ambientes controlados e idênticos.
- **Automação do Processo (Eliminar *Toil*):** Tirar o trabalho manual e repetitivo das mãos dos desenvolvedores para focar na criação de valor (Prática de *SRE*).

---

## Slide 4: A Estratégia Proposta (Branching e PR)
**GitHub Flow Adaptado:**
- **Apenas uma Branch de Verdade (`main`):** A branch `main` sempre reflete o que está pronto para produção e sempre deve ser "deployável".
- **Branches Curtas (Features/Fixes):** Criadas a partir da `main` para pequenas alterações e que duram no máximo poucos dias.
- **Pull Requests (PRs):** Ponto obrigatório de integração.
- **Critérios de Merge:** 
  1. Revisão de código (mínimo 1 aprovação).
  2. O pipeline de CI deve passar obrigatoriamente (testes e lint verde).

*(Sugestão visual para o slide: Adicionar um esquema gráfico simples mostrando uma branch saindo de main, rodando CI e voltando via PR em poucas horas/dias).*

---

## Slide 5: Justificativa da Estratégia
**Por que GitHub Flow?**
- É mais simples e reduz a sobrecarga operacional comparado ao Git Flow.
- Força a integração contínua: equipes juntam o código várias vezes ao dia.
- O *feedback* de erros chega em minutos graças à exigência de testes nos Pull Requests, aumentando a qualidade do código.

---

## Slide 6: Demonstração Prática (Ao Vivo)
*(Neste momento, você deve abrir o seu GitHub na tela e apresentar:)*
1. **O Repositório:** Mostre a organização do código (`src/`, `tests/`).
2. **O Arquivo YAML (`.github/workflows/ci.yml`):** Mostre que ele é engatilhado no `push` e `pull_request` da branch `main`.
3. **A Execução do Pipeline:** Abra a aba "Actions" no GitHub. 
   - Mostre um log verde de sucesso.
   - Mostre as etapas passando bem rápido (Checkout -> Setup Node -> Install -> Lint -> Testes).
   - Comente sobre a rapidez do processo automatizado vs o trabalho de rodar tudo manualmente.

---

## Slide 7: Conclusões
**O que alcançamos?**
- **Redução de Riscos:** O CI atua como uma barreira de segurança, bloqueando código com erro.
- **Previsibilidade:** Sem surpresas na hora da entrega; o código testado automaticamente traz confiança.
- **Lição Aprendida:** Ferramentas de automação como o GitHub Actions transformam um ambiente de caos em um ambiente colaborativo e seguro. O foco passa a ser na qualidade do software, não em resolver problemas manuais.

---

## Slide 8: Referências
- HUMBLE, J.; FARLEY, D. *Continuous Delivery: Reliable Software Releases through Build, Test, and Deployment Automation.*
- FORSGREN, N.; HUMBLE, J.; KIM, G. *Accelerate: The Science of Lean Software and DevOps.*
- MURPHY, N. R. et al. *Site Reliability Engineering: How Google Runs Production Systems.* O'Reilly.
- FOWLER, M. *Continuous Integration (2006).*
- Material da disciplina: Módulos de Versionamento, CI e Automação.
