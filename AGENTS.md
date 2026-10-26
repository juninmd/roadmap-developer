# AGENTS.md

## 🤖 Instruções para Agentes de IA

Este arquivo contém diretrizes para agentes de Inteligência Artificial que trabalham neste repositório. O objetivo deste projeto é manter um **Roadmap de Desenvolvedor** atualizado, de alta qualidade e focado nas tecnologias de **2026**.

### 📂 Estrutura do Projeto

- `roadmaps/`: Contém os arquivos Markdown com o conteúdo das trilhas.
  - `ai/`, `backend/`, `frontend/`, `mobile/`, `devops/`, `general/`: Subdiretórios para cada área.
- `.vitepress/`: Configuração do site estático (VitePress).
  - `config.mts`: Configuração principal (menu, sidebar, plugins).
- `AGENTS.md`: Este arquivo.

### 📝 Diretrizes de Conteúdo

1.  **Foco em 2026:** Todo conteúdo deve refletir o estado da arte previsto para 2026. Isso inclui:
    - IA Generativa e Agentes em todos os lugares.
    - Sustentabilidade (Green Software).
    - Privacidade e Edge Computing (Local AI).
    - Ferramentas modernas (Rust, WebGPU, Platform Engineering).

2.  **Qualidade:**
    - Use português claro e inclusivo.
    - Evite "palestrinha". Seja direto e prático.
    - Sempre inclua links para recursos _reais_ e de alta qualidade (docs oficiais, cursos renomados).

3.  **Visual:**
    - Mantenha os diagramas Mermaid (`flowchart TD`) no início de cada roadmap.
    - Use emojis para melhorar a escaneabilidade.

### ⚙️ Instruções Técnicas

1.  **VitePress:**
    - O site é gerado usando VitePress.
    - Ao adicionar um novo arquivo `.md`, lembre-se de atualizá-lo no `sidebar` e `nav` em `.vitepress/config.mts`.
    - Verifique se o build passa: `npm run docs:build`.

2.  **Mermaid:**
    - Usamos `vitepress-plugin-mermaid`.
    - Blocos de código mermaid devem usar a sintaxe:

      ````markdown
      ```mermaid
      flowchart TD
      ...
      ```
      ````

      ```

      ```

3.  **Verificação:**
    - Sempre verifique links quebrados.
    - Não deixe placeholders (`TODO`, `FIXME`) no código submetido.

### 🚀 Deploy

O deploy é feito automaticamente via GitHub Actions para o GitHub Pages quando há push na branch `main`.

<!-- base-actions-main-policy -->

## GitHub Actions — padrão obrigatório (@main)

- Referencie as actions internas sempre pelo branch, nunca por SHA:
  - `uses: juninmd/base-actions/<action>@main`
  - `uses: juninmd/base-actions/.github/workflows/<arquivo>.yml@main`
- Não fixe `@<sha>` em `juninmd/base-actions`: a atualização é centralizada no
  `main` e passa a valer no próximo run.
- PRs cujos checks não iniciam por billing/spending limit são mesclados pelo bot central
  `juninmd/base-actions/.github/workflows/auto-merge-billing-blocked.yml`.
  Para impedir o merge automático de um PR, aplique a label `do-not-merge`.
