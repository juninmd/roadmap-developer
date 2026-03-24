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

4.  **Execute as Validações e Testes de CI/CD:**
    Antes de enviar suas mudanças, garanta que seu código passa nas validações de CI/CD:

    ```bash
    npm run lint       # Valida sintaxe e formatação (ESLint)
    npm run lint:md    # Valida o estilo do Markdown
    npm run test       # Executa os testes unitários
    ```

5.  **Verifique o Build de Produção:**
    Verifique se o build passa sem erros e os testes E2E executam com sucesso:
    ```bash
    npm run docs:build
    npx playwright install --with-deps # Na primeira execução
    npm run test:e2e
    ```

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
4.  **Atenção:** Nosso projeto possui integração contínua (CI/CD). Ao abrir o Pull Request, uma pipeline de validação rodará automaticamente testando lint, testes unitários, build e testes E2E. Certifique-se de que a pipeline passe com sucesso.

Obrigado por ajudar a comunidade! 🚀
