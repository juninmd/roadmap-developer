# 🎨 Trilha Frontend: Construindo Experiências de Usuário

> **Edição 2026:** Focado em Next.js 15+, Server Components, Vercel AI SDK e Local-First.

```mermaid
flowchart TD
    Start([Início]) --> HTML(HTML, CSS, JS Básicos)
    HTML --> Framework(React / Vue / Angular)
    Framework --> TypeScript(TypeScript)
    TypeScript --> State(Gerenciamento de Estado)
    State --> Arch(Arquitetura Frontend)
    Arch --> Perf(Performance & Web Vitals)
    Perf --> AI(IA Engineering & Generative UI)
    AI --> Spec([Especialista])
```

Torne-se um engenheiro focado em performance, componentes modernos e integração com IA. Em 2026, o Frontend vai muito além de "desenhar telas". É sobre orquestrar dados, garantir performance extrema e integrar Inteligência Artificial na interface.

## 🐣 Nível Iniciante (Júnior): A Base

O objetivo inicial é dominar as linguagens que o navegador entende nativamente antes de pular para os frameworks mágicos.

- **HTML & CSS Profundos:** Semântica (acessibilidade), Flexbox, CSS Grid. Entenda como o browser renderiza (DOM, CSSOM, Render Tree).
- **JavaScript Moderno (ES6+):** Arrow functions, Promises, Async/Await, manipulação do DOM. Entenda o Event Loop (Call Stack, Web APIs, Microtask Queue).
- **Frameworks:** React (Hooks: useState, useEffect, useCallback, useMemo), Vue.js (Composition API) ou Angular. Escolha um e foque na reatividade.
- **Ferramentas Básicas:** Git (versionamento), NPM/Yarn/PNPM (gerenciamento de pacotes), Vite (build tool).

## 🚀 Nível Intermediário (Pleno): O Otimizador

Neste nível, o código funciona, mas precisa ser escalável, tipado e testado.

- **TypeScript (Obrigatório):** Interfaces, Types, Generics e Utility Types. Tipagem estrita não é opção em 2026.
- **Gerenciamento de Estado Global:** Redux Toolkit, Zustand (para React) ou Pinia (para Vue). Saiba quando usar estado local vs global.
- **Sincronização de Dados (Server-State):** React Query (TanStack Query) ou SWR. Cache, revalidação automática e optimistic updates.
- **Testes Automatizados:** Jest/Vitest para testes unitários (lógica), React Testing Library (comportamento de componentes), Cypress/Playwright (E2E).
- **Estilização Avançada:** Tailwind CSS para produtividade, Component Libraries (shadcn/ui, Radix UI) construídas focadas em acessibilidade.
- **Acessibilidade Web (a11y):** WAI-ARIA, Lighthouse/WAVE, axe-core. Garantir navegação por teclado e compatibilidade com leitores de tela.

## 🧙‍♂️ Nível Avançado (Sênior / Especialista): O Arquiteto

O especialista desenha a arquitetura, pensa na latência e constrói infraestrutura para a equipe.

- **Arquitetura de Frontend:** Micro-frontends (Module Federation), Server-Driven UI (HTMX, onde a lógica de UI vem do backend).
- **React Server Components (RSC) e Meta-Frameworks:** Next.js 15+ (App Router), Nuxt. Domínio em SSR, SSG, ISR e Partial Prerendering (PPR).
- **Performance & Core Web Vitals:** Entenda e otimize LCP (< 2.5s), INP (< 200ms), CLS (< 0.1). Otimização agressiva de fontes, imagens (AVIF/WebP) e cache.
- **Tópicos Especializados:** WebAssembly (Wasm) rodando Rust no browser, Edge Computing (Cloudflare Workers) para diminuir latência, React Compiler.
- **Green Frontend & Sustentabilidade:** Redução de bundle JS, evitar re-renders desnecessários para economizar CPU e bateria dos dispositivos (Green Software).

### 🤖 IA Engineering no Frontend (O Diferencial de 2026)

Em 2026, a IA Generativa é cidadã de primeira classe no Frontend. O usuário não quer preencher formulários, ele quer conversar.

- **Vercel AI SDK:** A ponte definitiva entre frontend e LLMs. Domine Stateful Streaming, function/tool calling.
- **Generative UI (Runtime):** Geração de componentes React on-the-fly de acordo com o contexto do usuário (usando streamUI do Vercel AI SDK).
- **Generative UI (DevTime):** Uso de ferramentas Agentic como v0.dev, Lovable, Bolt.new ou Cursor para curadoria e refino arquitetural de UI.
- **Local First AI & WebNN:** Modelos SLM (Small Language Models como Phi-3, Llama 3, Whisper) rodando diretamente na GPU/NPU do navegador do usuário via WebLLM, Transformers.js ou ONNX Runtime Web. Zero custo de inferência de nuvem, zero latência de rede e total privacidade de dados (Local-First Architecture).

## 🏆 Desafios Práticos

- **Júnior:** Landing Page responsiva com HTML, CSS e JavaScript puro (validação de campos de formulário, animações simples).
- **Pleno:** Dashboard de Clima consumindo uma API externa. Requisitos: TypeScript, React Query para fetch, estado global (Zustand), gráficos interativos e Dark/Light mode persistente.
- **Sênior:** E-commerce Full Stack com Next.js (App Router). Requisitos: Carrinho offline-first (sincronização via CRDTs ou TanStack Query), otimização rigorosa de Core Web Vitals (LCP/INP), e um assistente/chatbot de Generative UI nativo que ajuda o usuário a encontrar produtos recomendados baseados no histórico de navegação, utilizando WebNN/WebAssembly para inferência.

## 📚 Materiais de Estudo Recomendados

**Para o Júnior (Fundamentos e Bases):**

- **[MDN Web Docs](https://developer.mozilla.org/):** A documentação oficial e a bíblia do desenvolvimento web.
- **[FreeCodeCamp - Responsive Web Design](https://www.freecodecamp.org/):** Aprenda praticando HTML e CSS.
- **[JavaScript.info](https://javascript.info/):** O guia mais completo, profundo e claro para entender o JavaScript moderno a fundo.
- **[The Odin Project](https://www.theodinproject.com/):** Currículo completo open-source, focado na prática e na fundação web de um desenvolvedor completo.

**Para o Pleno (Arquitetura e TypeScript):**

- **[Total TypeScript](https://www.totaltypescript.com/):** O curso definitivo para dominar TypeScript avançado no ecossistema de desenvolvimento moderno.
- **[Frontend Masters](https://frontendmasters.com/):** Plataforma premium de altíssima qualidade técnica para aprofundar em React, Vue, performance, a11y e algoritmos de CS.
- **[Epic React (Kent C. Dodds)](https://epicreact.dev/) / [React.dev](https://react.dev/):** Domine os padrões mais complexos do React, hooks customizados e renderização simultânea (concorrência).
- **[Testing JavaScript](https://testingjavascript.com/):** Aprenda a testar de verdade, com confiança e sem fragilidades usando Vitest, RTL e Cypress.

**Para o Sênior/Especialista (Performance, IA e Edge):**

- **[web.dev (Google Chrome Developers)](https://web.dev/):** A referência absoluta para métricas de usuário, Core Web Vitals e renderização de alta performance.
- **[Patterns.dev](https://www.patterns.dev/):** Um guia gratuito focado em padrões de design arquiteturais, renderização no servidor, hidratação e performance em aplicações JavaScript.
- **[Vercel AI SDK Documentation](https://sdk.vercel.ai/docs):** Aprenda na prática a criar interfaces imersivas geradas por IA (Generative UI) conectadas a LLMs globais.
- **[ONNX Runtime Web](https://onnxruntime.ai/docs/tutorials/web/):** Documentação vital para a era de 2026, focado em WebNN, WebAssembly e a execução de Inteligência Artificial sem custos de nuvem.
- **[Josh W. Comeau's CSS for JS Devs](https://css-for-js.dev/):** Ensina o motor do CSS por trás dos panos, para o engenheiro sênior não ter mais "medo" de alinhar um botão e quebrar o layout.

## ↩️ Navegação

- [**Voltar para o Início**](../../index.md)
- [**Ver Conselhos de Carreira**](../../advices.md)
