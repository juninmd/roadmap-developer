# 🗺️ ROADMAP: Visão do Produto e Objetivos 2026

Bem-vindo ao **Roadmap Developer 2026**. Este documento centraliza a visão de produto, o status atual, as metas trimestrais e o acompanhamento de issues ativas. O foco absoluto é aprimorar desenvolvedores com conteúdos de alta qualidade, desde o Júnior até o Especialista (Sênior/Especialista), formando o **Desenvolvedor Completo**.

---

## 🚀 Visão do Produto (O Desenvolvedor Completo 2026)

Em 2026, a programação mudou. Nossa visão é fornecer guias de estudos de qualidade inquestionável, conectando a base teórica estruturada do nível **Júnior** ao pensamento arquitetural do nível **Especialista**.

A tríade do desenvolvedor em 2026 baseia-se em:
1. **Inteligência Artificial (AI Engineering):** Uso de LLMs, Agentic Workflows e Sistemas Multi-Agentes para orquestrar software.
2. **Eficiência e Sustentabilidade (Green Coding / FinOps):** Programar em linguagens de alta performance (Rust, Go) e Wasm no Edge para reduzir custos de nuvem e a pegada de carbono.
3. **Qualidade de Software (Shift-Left QA & Sec):** Adoção rigorosa de CI/CD (GitHub Actions), Playwright E2E, e testes assistidos por IA.

### 📚 Conteúdos de Alta Qualidade (Por Senioridade)

Para que possamos aprimorar nossos desenvolvedores de todos os níveis, o projeto foi desenhado com foco nos seguintes materiais (encontrados em seus respectivos guias):

*   **Para o Júnior (A Base Sólida):** Cursos fundamentais como CS50 de Harvard, The Odin Project e Microsoft Generative AI for Beginners. Aprender Lógica, Git, e "como" codar de forma previsível.
*   **Para o Pleno (O Otimizador):** Foco em TDAW (Test-Driven Agentic Workflow), Clean Architecture, Docker e integrações com bancos de dados. Recomendamos materiais como o DeepLearning.AI e Frontend Masters.
*   **Para o Sênior/Especialista (O Arquiteto):** Domínio de Local-First architecture (CRDTs), eBPF para observabilidade, Edge Computing com WebAssembly e RAG Avançado. Fontes como Full Cycle, ByteByteGo e AWS Skill Builder são a referência.

---

## 🎯 Metas Trimestrais (Quarterly Goals)

### Q1: Fundações e IA Literacy
*   [x] Integrar a Trilha Comum com fundamentos essenciais para 2026 (Prompting, Agentic Workflows).
*   [x] Migrar toda a base de conhecimento para TypeScript e ES Modules.
*   [ ] Revisão completa das métricas DORA.

### Q2: Arquiteturas Locais e FinOps
*   [ ] Lançar a documentação avançada de CRDTs para Mobile e Full Stack.
*   [ ] Otimizar instâncias de Node.js via substituição por Rust para casos críticos.
*   [ ] Integrar monitoramento do custo de execução no Netlify CI.

### Q3: AI Engineering no Backend e QA
*   [ ] Construir o módulo sobre LLMOps e monitoramento de custo por token (LangSmith).
*   [ ] Transformar 100% da suíte Selenium antiga em Playwright.

### Q4: O Especialista e Green Coding
*   [ ] Publicar os Padrões de Especialista (WebAssembly, Sistemas Multi-Agente).
*   [ ] Monitoramento em tempo real do Cloud Carbon Footprint via eBPF.

---

## 🐛 Issues Ativas e Rastreamento

Temos acompanhado várias tarefas via GitHub Issues. Por padrão, utilizamos links estruturados para evitar quebras no Netlify CI.

*   **Issue de Migração do Playwright:** [Issue #84](https://github.com/roadmap-developer-community/roadmap-developer-2026/issues/84) - Refatoração dos testes E2E do Vitest para o Playwright com cobertura > 80%.
*   **Issue de Vulnerabilidade ReDoS:** [Issue #102](https://github.com/roadmap-developer-community/roadmap-developer-2026/issues/102) - O SonarCloud identificou problema na extração de markdown. Usaremos `indexOf` em vez de Regex.
*   **Issue de Atualização de Dependências:** [Issue #115](https://github.com/roadmap-developer-community/roadmap-developer-2026/issues/115) - A fixação do TypeScript na versão 5.7.0.

> **Nota de Desenvolvimento:** Por favor, quando mencionar issues da comunidade, use sempre a sintaxe `[#numero](url_da_issue)`. O uso de loose text (`#` + número) causa erros no link checker durante o build.

---

## 🚦 Status Atual do Projeto
*   **Versionamento:** 1.0.4
*   **Build Engine:** VitePress ^1.6.4
*   **CI/CD:** GitHub Actions (Deploy automático via Netlify e GitHub Pages).

Mantenha esse documento vivo, pois ele direcionará as entregas para a nossa visão do **Desenvolvedor Completo em 2026**.
