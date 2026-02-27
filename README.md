# Roadmap Developer 2026

<div align="center">
  <img src="https://img.shields.io/badge/Status-Atualizado%202026-success?style=flat-square" alt="Status Atualizado">
  <img src="https://img.shields.io/github/license/roadmap-developer-community/roadmap-developer-2026?style=flat-square" alt="License">
  <br><br>
  <img height="200" src=".vitepress/public/coder-cat.jpg">
  <h3>O Guia Definitivo para sua Carreira na Era da IA</h3>
  <p>Trilhas de estudo completas, desde o nível Júnior até Especialista, transformadas em um site estático moderno com VitePress.</p>
</div>

---

## 🌐 Acesse o Site

O conteúdo deste repositório é melhor visualizado através do nosso site de documentação.

> **[Acessar Roadmap Developer 2026](https://seu-usuario.github.io/roadmap-developer-2026/)**
>
> *Nota: A URL acima será ativada automaticamente após o primeiro deploy via GitHub Pages. Lembre-se de substituir `seu-usuario` pelo seu username do GitHub.*

---

## 🗺️ O Que Você Vai Encontrar

Este projeto foi atualizado para refletir o mercado de tecnologia em **2026**, focando não apenas em código, mas em Inteligência Artificial, Sustentabilidade e Arquitetura Moderna.

*   [**Trilha Comum (Base)**](./roadmaps/general/common.md): Git, IA Literacy, Prompt Engineering e Lógica.
*   [**Backend**](./roadmaps/backend/backend.md): Microsserviços, IA Engineering (RAG, Agents), Green Software e Observabilidade.
*   [**Frontend**](./roadmaps/frontend/frontend.md): Generative UI, Server Actions, WebGPU e Acessibilidade.
*   [**Full Stack**](./roadmaps/fullstack/fullstack.md): Server Components, Monorepos, Integração de IA e Arquitetura de Sistemas.
*   [**Mobile**](./roadmaps/mobile/mobile.md): On-Device AI (ExecuTorch), Kotlin Multiplatform e Superapps.
*   [**Inteligência Artificial**](./roadmaps/ai/artificial-intelligence.md): Agentes Autônomos, LLMOps, Fine-Tuning e Sistemas Compostos.
*   [**DevOps & Platform**](./roadmaps/devops/devops.md): Platform Engineering, FinOps e GitOps.
*   [**Engenharia de Dados**](./roadmaps/data/data-engineering.md): Lakehouse, Streaming e Governança.
*   [**Cybersecurity**](./roadmaps/security/cybersecurity.md): Zero Trust, DevSecOps e Segurança de IA.

## ⚙️ Configuração do Repositório

Para usar este roadmap no seu próprio GitHub Pages:

1.  Vá em **Settings > Pages** no seu repositório.
2.  Em "Build and deployment", selecione **GitHub Actions**.
3.  Edite o arquivo `README.md` e substitua todas as ocorrências de `seu-usuario` pelo seu nome de usuário do GitHub.

## 🚀 Rodando Localmente

Para rodar o site de documentação na sua máquina:

1.  **Clone o repositório e instale as dependências:**
    ```bash
    git clone https://github.com/seu-usuario/roadmap-developer-2026.git
    cd roadmap-developer-2026
    npm install
    ```

2.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run docs:dev
    ```
    O site estará disponível em `http://localhost:5173`.

3.  **Para gerar a versão de produção:**
    ```bash
    npm run docs:build
    ```
    Os arquivos estáticos serão gerados na pasta `.vitepress/dist`.

## 📦 Deploy

Este projeto está configurado para deploy automático no **GitHub Pages** usando GitHub Actions.
Sempre que um push for feito na branch `main`, o site será reconstruído e publicado.

Veja o arquivo de workflow em: `.github/workflows/deploy.yml`.

## 🤝 Contribuição

Quer sugerir um novo tópico ou corrigir algo?
Leia nosso [Guia de Contribuição](./CONTRIBUTING.md) para saber como ajudar.

## 📄 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](./LICENSE) para detalhes.

---
*Inspirado pelo trabalho incrível da comunidade open source e projetos como roadmap.sh.*
