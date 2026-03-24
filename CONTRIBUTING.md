# Guia de Contribuição

Obrigado por querer contribuir com o **Roadmap Developer 2026**! Este projeto é mantido pela comunidade para ajudar desenvolvedores a se manterem atualizados.

## 🚀 Como Rodar o Projeto Localmente

Este projeto usa [VitePress](https://vitepress.dev/) para gerar o site estático.

### Pré-requisitos

- Node.js (versão 18 ou superior)
- NPM ou Yarn

### Passos

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/seu-usuario/roadmap-developer-2026.git
   cd roadmap-developer-2026
   ```

2. **Instale as dependências:**

   ```bash
   npm install
   ```

3. **Rode o servidor de desenvolvimento:**

   ```bash
   npm run docs:dev
   ```

   O site estará disponível em `http://localhost:5173`. As mudanças nos arquivos Markdown são refletidas instantaneamente.

4. **Verifique o Build de Produção:**
   Antes de enviar suas mudanças, verifique se o build passa sem erros:

   ```bash
   npm run docs:build
   ```

## 📝 Como Contribuir com Conteúdo

1. **Estrutura:** Todo o conteúdo está na pasta `roadmaps/`.
2. **Imagens:** Use a sintaxe padrão do Markdown. Para diagramas, prefira usar [Mermaid](https://mermaid.js.org/) dentro de blocos de código:

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

3. **Links:** Verifique se os links que você adicionou funcionam e são relevantes.
4. **Estilo:** Mantenha um tom encorajador, prático e direto.

## 🤝 Pull Requests

1. Crie uma branch para sua feature (`git checkout -b feature/novo-conteudo`).
2. Faça o commit das suas alterações.
3. Abra um Pull Request descrevendo o que você mudou e por quê.

Obrigado por ajudar a comunidade! 🚀

## CI/CD Guidelines

To maintain code quality and ensure reliable deployments, we employ a comprehensive CI/CD pipeline using GitHub Actions.

### Quality Gates
Before your code is merged into `main`, it must pass the following checks:
1. **Linting:** We enforce `eslint` and `markdownlint` to keep code and documentation clean.
2. **Formatting:** `prettier` ensures consistent styling across the codebase.
3. **Security:** `npm audit` and SAST scanning via CodeQL check for vulnerabilities in dependencies and code.
4. **Testing:** Unit tests (Vitest) and End-to-End tests (Playwright) must pass with a minimum of 80% coverage.

### Running Tests Locally
It is highly recommended to run tests locally before opening a Pull Request:
- Run Unit Tests: `npm run test:unit`
- Run E2E Tests: `npm run test:e2e`
- Run All Tests: `npm run test`

### Deployment Strategy
- **Staging:** Pull requests will trigger a staging build for review.
- **Production:** Merges to the `main` branch will automatically trigger a production deployment to GitHub Pages (upon manual approval via environment protection in GitHub settings, if configured).

### Environment Variables
For CI/CD execution, ensure that you configure any required secrets (e.g., `CODECOV_TOKEN`) in the GitHub repository settings under **Settings > Secrets and variables > Actions**.
