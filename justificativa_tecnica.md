# Justificativa Técnica

## 1. Redução de Risco com Branches Curtas e Merges Frequentes
A principal "dor" da DevPay no cenário original era o temido *Merge Hell* resultante do uso de branches longas. Quando desenvolvedores ficam isolados trabalhando em uma branch por semanas, a divergência de código em relação ao trabalho dos colegas torna-se imensa. 

De acordo com autores como Jez Humble e David Farley no livro *"Continuous Delivery"*, a prática da integração contínua (que significa integrar o código várias vezes ao dia) reduz drasticamente esse risco. Ao adotarmos o **GitHub Flow**, impomos a adoção de branches de vida curta. Isso nos força a realizar **merges frequentes**, o que significa que os conflitos de integração serão menores, mais fáceis de resolver e os bugs serão identificados precocemente, muito antes da etapa de homologação manual.

## 2. A Importância do Feedback Rápido através do Pipeline CI Automatizado
A configuração do **GitHub Actions** (`ci.yml`) que roda verificações de _Lint_ e _Testes Automatizados_ assim que um código sofre "push" ou um Pull Request é aberto ataca o segundo grande problema: problemas surgindo apenas na fase de deploy.

Ao adotar essa automação, mudamos o momento da descoberta do bug (conceito de _Shift-Left_). Se um desenvolvedor comete um erro que quebra o processamento de pagamentos, o pipeline falha em poucos minutos (ou segundos) e fornece **feedback rápido**. Esse processo evita que um código defeituoso contamine a branch principal (`main`), garantindo o conceito fundamental de um **build reprodutível**.

## 3. Redução de *Toil* (Trabalho Braçal) e Previsibilidade Operacional
No modelo anterior da DevPay, deploys e testes precisavam ser orquestrados manualmente, gerando um estresse imenso a cada release (o "medo do deploy"). Em práticas de **Site Reliability Engineering (SRE)** do Google, essas tarefas manuais e repetitivas, que escalam linearmente com o crescimento do serviço, são chamadas de *"Toil"*.

Ao automatizarmos as etapas de instalação de dependências, linter e testes (que antes talvez fossem checadas manualmente por um revisor na sua própria máquina local, gerando o clássico problema de "na minha máquina funciona"), o tempo humano é poupado. Isso aumenta significativamente a **previsibilidade**, pois a execução de um teste via GitHub Actions é executada em um ambiente imutável (`ubuntu-latest`), garantindo resultados idênticos para todos.

## 4. Conclusão baseada em "Accelerate"
Por fim, o estudo exposto no livro *"Accelerate"* de Nicole Forsgren e Gene Kim demonstra com bases científicas que equipes de alto desempenho utilizam o controle de versão como base estrutural e automatizam amplamente seus testes e integrações. 

O formato de trabalho proposto — através do GitHub e da padronização rigorosa do pipeline — permitirá que a equipe da DevPay entregue valor de forma contínua, com confiança nas mudanças de código e um ambiente colaborativo e transparente através das aprovações em Pull Requests.
