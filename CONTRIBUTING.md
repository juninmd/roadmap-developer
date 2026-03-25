# Guia de Contribuição

Obrigado por querer contribuir com o **Roadmap Developer 2026**! Este projeto é mantido pela comunidade para ajudar desenvolvedores a se manterem atualizados.

## 🚀 Como Rodar o Projeto Localmente

Este projeto usa [VitePress](https://vitepress.dev/) para gerar o site estático.

### Pré-requisitos

- Node.js (versão 18 ou superior)
- NPM ou Yarn

### Passos

1.  **Clone o repositório:**

    ```bash
    git clone https://github.com/seu-usuario/roadmap-developer-2026.git
    cd roadmap-developer-2026
    ```

2.  **Instale as dependências:**

    ```bash
    npm install
    ```

3.  **Rode o servidor de desenvolvimento:**

    ```bash
    npm run docs:dev
    ```

    O site estará disponível em `http://localhost:5173`. As mudanças nos arquivos Markdown são refletidas instantaneamente.

4.  **Verifique o Build de Produção:**
    Antes de enviar suas mudanças, verifique se o build passa sem erros:
    ```bash
    npm run docs:build
    ```

## 🔄 Diretrizes de CI/CD e Qualidade de Código

Para garantir a qualidade, segurança e estabilidade do projeto, implementamos um pipeline de CI/CD rigoroso com GitHub Actions. Todas as contribuições devem passar por essas validações antes de serem mescladas.

### 1. Testes e Cobertura (Mínimo 80%)

- **Testes Unitários:** Utilizamos [Vitest](https://vitest.dev/). Todas as novas funções e utilitários devem ter testes correspondentes.
- **Cobertura de Código:** É exigido um mínimo de 80% de cobertura (linhas, funções, branches e statements).
- **Testes E2E:** Utilizamos [Playwright](https://playwright.dev/) para garantir que a navegação e renderização do VitePress funcionem corretamente.
- **Comandos úteis:**
  - Rodar testes unitários e cobertura: `npm run test:coverage`
  - Rodar testes E2E: `npm run test:e2e`

### 2. Linting e Formatação

- **Código TypeScript/JavaScript:** Utilizamos ESLint. Verifique com `npm run lint`.
- **Arquivos Markdown:** Utilizamos Markdownlint para manter o padrão. Verifique com `npm run lint:md`.
- **Type Checking:** O projeto usa TypeScript estrito. Valide com `npm run typecheck`.

### 3. Pipeline de CI/CD (`ci.yml`)

Nosso fluxo de CI é acionado em todo `push` para `main` ou `develop` e em todo `pull_request` para `main`. Ele consiste em:

1. **Lint:** Executa verificações de ESLint, MarkdownLint, Typecheck e `npm audit` (para vulnerabilidades de segurança).
2. **Test:** Roda os testes unitários (`vitest`), testes E2E (`playwright`) e faz upload do relatório de cobertura para o Codecov.
3. **Build:** Gera a build de produção do VitePress.
4. **Deploy:** Se a mudança for na branch `main`, realiza o deploy automatizado para o GitHub Pages.

### 4. Variáveis de Ambiente

Atualmente, o projeto não exige variáveis de ambiente complexas para rodar localmente, pois é um site estático gerado pelo VitePress.

- Caso o projeto expanda para requerer APIs externas, utilize um arquivo `.env.local` (que já está no `.gitignore`) para testes locais e documente as chaves necessárias no README. As chaves de produção devem ser configuradas de forma segura nas _Secrets_ do GitHub Actions.

## 📝 Como Contribuir com Conteúdo

1.  **Estrutura:** Todo o conteúdo está na pasta `roadmaps/`.
2.  **Imagens:** Use a sintaxe padrão do Markdown. Para diagramas, prefira usar [Mermaid](https://mermaid.js.org/) dentro de blocos de código:
    ````markdown
    ```mermaid
    flowchart TD
      A[Start] --> B{Is it?}
      B -- Yes --> C[OK]
      B -- No --> D[Rethink]
    ```
    ````
    ```

    ```
3.  **Links:** Verifique se os links que você adicionou funcionam e são relevantes.
4.  **Estilo:** Mantenha um tom encorajador, prático e direto.

## 🤝 Pull Requests

1.  Crie uma branch para sua feature (`git checkout -b feature/novo-conteudo`).
2.  Faça o commit das suas alterações.
3.  Abra um Pull Request descrevendo o que você mudou e por quê.

Obrigado por ajudar a comunidade! 🚀
