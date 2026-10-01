export type Ring = "adote" | "experimente" | "avalie" | "evite";

export interface Blip {
  name: string;
  quadrant: number;
  ring: Ring;
  note: string;
  link?: string;
}

export const rings: { id: Ring; label: string }[] = [
  { id: "adote", label: "Adote" },
  { id: "experimente", label: "Experimente" },
  { id: "avalie", label: "Avalie" },
  { id: "evite", label: "Evite" },
];

export const quadrants = [
  "Linguagens & Frameworks",
  "IA & Dados",
  "Plataformas & Infra",
  "Práticas & Ferramentas",
];

const b = (
  name: string,
  quadrant: number,
  ring: Ring,
  note: string,
  link?: string,
): Blip => ({ name, quadrant, ring, note, link });

export const blips: Blip[] = [
  // 0 — Linguagens & Frameworks
  b("TypeScript", 0, "adote", "Padrão para front, back e tooling.", "/roadmaps/frontend/frontend"),
  b("React + Next.js", 0, "adote", "Server Components e App Router como base.", "/roadmaps/frontend/frontend"),
  b("Python (uv)", 0, "adote", "IA, dados e automação.", "/roadmaps/ai/artificial-intelligence"),
  b("Go", 0, "adote", "Serviços de rede e CLIs.", "/roadmaps/backend/backend"),
  b("Rust", 0, "experimente", "Core crítico, Wasm e ferramentas.", "/roadmaps/general/2026-specialist-patterns"),
  b("Kotlin Multiplatform", 0, "experimente", "Lógica compartilhada entre Android e iOS.", "/roadmaps/mobile/mobile"),
  b("Svelte 5 / Vue 3.5", 0, "experimente", "Alternativas maduras ao React.", "/roadmaps/frontend/frontend"),
  b("Hono / tRPC", 0, "experimente", "APIs tipadas e leves, rodam no edge.", "/roadmaps/fullstack/fullstack"),
  b("TypeScript 7 (nativo)", 0, "avalie", "Compilador nativo; teste em projetos grandes.", "/roadmaps/frontend/frontend"),
  b("Zig", 0, "avalie", "Sistemas de baixo nível; ecossistema jovem."),
  b("Mojo", 0, "avalie", "Python de alto desempenho para IA."),
  b("jQuery / AngularJS", 0, "evite", "Sem suporte; migre."),

  // 1 — IA & Dados
  b("MCP (Model Context Protocol)", 1, "adote", "Padrão para conectar agentes a ferramentas.", "/roadmaps/ai/artificial-intelligence"),
  b("Evals de LLM", 1, "adote", "Sem avaliação contínua não há produção.", "/roadmaps/ai/artificial-intelligence"),
  b("PostgreSQL + pgvector", 1, "adote", "Banco único para dados e vetores.", "/roadmaps/backend/backend"),
  b("RAG híbrido", 1, "adote", "Busca vetorial + lexical + reranking.", "/roadmaps/ai/artificial-intelligence"),
  b("Agentes de código", 1, "experimente", "Com revisão humana e testes obrigatórios.", "/roadmaps/general/common"),
  b("DSPy", 1, "experimente", "Otimiza prompts a partir de métrica.", "/roadmaps/ai/artificial-intelligence"),
  b("Apache Iceberg", 1, "experimente", "Formato aberto de tabelas para lakehouse.", "/roadmaps/data/data-engineering"),
  b("DuckDB / Polars", 1, "experimente", "Análise local rápida.", "/roadmaps/data/data-engineering"),
  b("SLMs on-device", 1, "avalie", "Gemma, Phi e similares no celular e no browser.", "/roadmaps/mobile/mobile"),
  b("A2A (agent-to-agent)", 1, "avalie", "Interoperabilidade entre agentes.", "/roadmaps/ai/artificial-intelligence"),
  b("GraphRAG", 1, "avalie", "Útil só com domínio rico em relações.", "/roadmaps/ai/artificial-intelligence"),
  b("Hadoop / MapReduce", 1, "evite", "Substituído por Spark e lakehouse."),

  // 2 — Plataformas & Infra
  b("Kubernetes + Gateway API", 2, "adote", "Ingress-nginx foi aposentado.", "/roadmaps/devops/devops"),
  b("OpenTelemetry", 2, "adote", "Padrão aberto de traces, métricas e logs.", "/roadmaps/devops/devops"),
  b("GitHub Actions + Argo CD", 2, "adote", "CI e GitOps como rotina.", "/roadmaps/devops/devops"),
  b("OpenTofu", 2, "experimente", "Fork aberto do Terraform.", "/roadmaps/devops/devops"),
  b("Platform Engineering (Backstage)", 2, "experimente", "Portal interno e golden paths.", "/roadmaps/devops/devops"),
  b("Cilium / eBPF", 2, "experimente", "Rede e observabilidade no kernel.", "/roadmaps/devops/devops"),
  b("Edge / Workers", 2, "experimente", "Latência baixa e cold start mínimo.", "/roadmaps/general/2026-specialist-patterns"),
  b("WebAssembly no servidor", 2, "avalie", "Isolamento leve; WASI ainda evolui.", "/roadmaps/general/2026-specialist-patterns"),
  b("Crossplane", 2, "avalie", "IaC via API do Kubernetes.", "/roadmaps/devops/devops"),
  b("Kafka 4 (KRaft)", 2, "adote", "Streaming sem ZooKeeper.", "/roadmaps/data/data-engineering"),
  b("Jenkins legado", 2, "evite", "Alto custo de manutenção."),
  b("ingress-nginx", 2, "evite", "Aposentado em 2026; migre para Gateway API.", "/roadmaps/devops/devops"),

  // 3 — Práticas & Ferramentas
  b("Métricas DORA + SLOs", 3, "adote", "Meça entrega e confiabilidade juntas.", "/roadmaps/devops/devops"),
  b("Playwright", 3, "adote", "E2E padrão, inclusive com agentes.", "/roadmaps/qa/qa-testing"),
  b("SBOM + SLSA + Sigstore", 3, "adote", "Cadeia de suprimentos verificável.", "/roadmaps/security/cybersecurity"),
  b("Passkeys (WebAuthn)", 3, "adote", "Login sem senha.", "/roadmaps/security/cybersecurity"),
  b("Contract testing (Pact)", 3, "experimente", "Evita quebra entre serviços.", "/roadmaps/qa/qa-testing"),
  b("Local-First (CRDTs)", 3, "experimente", "Apps offline com sincronização.", "/roadmaps/fullstack/fullstack"),
  b("FinOps / Green Software", 3, "experimente", "Custo e carbono como métricas.", "/roadmaps/devops/devops"),
  b("Criptografia pós-quântica", 3, "avalie", "Inventarie e planeje a migração.", "/roadmaps/security/cybersecurity"),
  b("AI Red Teaming", 3, "avalie", "Teste adversarial de LLMs e agentes.", "/roadmaps/security/cybersecurity"),
  b("Vibe coding sem revisão", 3, "evite", "Código gerado sem teste nem leitura."),
  b("Segredos em repositório", 3, "evite", "Use cofre e rotação.", "/roadmaps/security/cybersecurity"),
];
