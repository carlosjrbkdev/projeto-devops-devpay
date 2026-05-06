# Estratégia de Versionamento e Fluxo de Trabalho (GitHub Flow)

## 1. Contexto e Escolha da Estratégia
Para a "DevPay", empresa fictícia do nosso estudo de caso, os principais problemas identificados são branches longas, grandes conflitos de integração e bugs tardios na homologação. Para contornar esse cenário, optamos pela adoção do modelo **GitHub Flow** combinado com práticas de **Integração Contínua (CI)**.

O **GitHub Flow** é uma alternativa mais leve que o Git Flow. Ele elimina a complexidade das branches múltiplas de longo prazo (como a `develop`), priorizando a branch `main` como a única fonte da verdade, sempre pronta para implantação.

## 2. Política de Criação de Branches
Todo novo trabalho, seja uma nova funcionalidade (feature), uma correção de bug (hotfix) ou uma melhoria, é iniciado a partir da branch `main`.
* **Regra de Nomenclatura**: O nome da branch deve ser curto, descritivo e, preferencialmente, precedido pelo tipo da alteração.
    * *Exemplos:* `feature/adicionar-pagamento-pix`, `bugfix/correcao-calculo-taxa`, `docs/atualizar-readme`.
* **Duração**: Branches devem ter tempo de vida **curto** (idealmente de 1 a 2 dias) para evitar divergências massivas em relação à `main`.

## 3. Pull Requests (PR) e Revisão de Código
Quando a modificação estiver finalizada na branch paralela (ou quando o desenvolvedor precisar de feedback preliminar), um **Pull Request** deve ser aberto para a `main`.

**Critérios para Abertura e Revisão de PRs:**
* **Tamanho**: Os PRs devem ser pequenos. Mudanças menores são mais fáceis e rápidas de revisar e contêm menos riscos.
* **Revisão Obrigatória**: Nenhum código entra na `main` sem passar por *Code Review*. É exigida pelo menos **1 aprovação (Approve)** de outro desenvolvedor.
* **Testes Automatizados**: A abertura do PR engatilha automaticamente o nosso pipeline de CI (via GitHub Actions). O CI executa a verificação de formatação (Lint) e todos os testes automatizados (Testes Unitários).
* **Bloqueio de Merge**: A opção de fazer merge só é habilitada caso as verificações obrigatórias de CI passem com sucesso (Status "Verde") e haja a aprovação de um revisor.

## 4. Política de Versionamento
A "DevPay" utilizará o **Semantic Versioning (SemVer)** - no formato `MAJOR.MINOR.PATCH` (ex: `1.2.0`).
* **PATCH (1.2.x)**: Para correções de bugs retrocompatíveis.
* **MINOR (1.x.0)**: Para novas funcionalidades retrocompatíveis.
* **MAJOR (x.0.0)**: Para quebras de compatibilidade ou mudanças drásticas na API.

Após cada integração (merge) bem-sucedida de PR na `main`, caso haja uma entrega de release, uma nova **Tag** correspondente à versão será gerada (ex: `v1.2.1`).

## 5. Fluxo de Merge Adequado ao Cenário (Resumo)
1. O desenvolvedor atualiza seu repositório local a partir da `main`.
2. Cria uma branch: `git checkout -b feature/novo-recurso`.
3. Faz commits frequentes e pequenos.
4. Envia para o GitHub e abre um **Pull Request**.
5. O pipeline do **GitHub Actions** roda os testes.
6. A equipe revisa e aprova o código.
7. O merge é feito na `main`.
8. A branch local é apagada e a `main` é considerada sempre "deployable".
