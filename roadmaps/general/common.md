# 🗺️ Trilha Comum: A Base para Toda Grande Jornada DEV

> **Edição 2026:** Inclui Alfabetização em IA e novos paradigmas de trabalho com Agentes.

Todo grande herói de uma saga de fantasia precisa de um mapa, uma espada e um conjunto de habilidades básicas, certo? No universo do desenvolvimento, esta trilha é o seu kit de sobrevivência. São os feitiços e habilidades que todo(a) dev, não importa a especialização, precisa dominar.

---

### 📦 Git & GitHub: Salvando seu Progresso

- **O que é?** Pense no Git como um sistema de "save points" para o seu código. Ele permite que você salve versões do seu projeto, volte no tempo se algo der errado e trabalhe em equipe sem que um sobrescreva o trabalho do outro. O GitHub é como uma grande biblioteca online para seus projetos Git, um lugar para guardá-los e compartilhá-los com o mundo. É o seu portfólio, sua base de operações.

- **Por que aprender?** "Com grandes poderes vêm grandes responsabilidades". Sem Git, você corre o risco de perder trabalho, criar conflitos de versão e ter uma dor de cabeça digna de um vilão da Marvel.

- **Recursos:**
  - 📖 [Documentação Oficial do Git](https://git-scm.com/doc)
  - 📺 [Git e GitHub para Iniciantes (Vídeo)](https://www.youtube.com/watch?v=UMhskLXJuq4)

---

### 🤖 Alfabetização em IA: O Novo Superpoder

A Inteligência Artificial não vai substituir os desenvolvedores, mas os desenvolvedores que usam IA vão substituir os que não usam. Entender como interagir com essas ferramentas é hoje tão básico quanto saber pesquisar no Google.

- **Coding Assistants (Copilotos):**
  - **GitHub Copilot:** O padrão da indústria. Ótimo para autocomplete e explicações rápidas.
  - **Cursor / Windsurf:** Editores de código (forks do VS Code) nativos para IA. Permitem "conversar com seu código" inteiro (Context Awareness) e aplicar mudanças em múltiplos arquivos. *Experimente um destes!*

- **Como os LLMs Funcionam (Desmistificando a Caixa Preta):**
  - Não é mágica, é estatística. Entenda que o modelo está apenas prevendo a próxima palavra provável.
  - **Alucinação:** Por que ela acontece? O modelo não "sabe" fatos, ele conhece associações de palavras. Se ele não sabe a resposta, ele inventa uma que *pareça* plausível.

- **Prompt Engineering para Devs:**
  - **Contexto é Rei:** Não diga apenas "Corrija o erro". Cole o erro, o trecho de código e explique o que você esperava.
  - **Few-Shot Prompting:** Dê exemplos de como você quer a resposta. "Gere testes unitários seguindo este padrão: [exemplo]".
  - **Chain of Thought:** Peça para a IA "pensar passo a passo" antes de dar a solução final para problemas lógicos.
  - **Role Prompting:** Diga à IA quem ela deve ser. "Atue como um Engenheiro Sênior de Segurança em Rust" gera resultados muito diferentes de apenas "Escreva um código em Rust".
  - **Structured Outputs (JSON):** Como dev, você quer dados, não papo furado. Aprenda a pedir: "Responda APENAS em JSON, seguindo este schema: { ... }". Isso permite conectar a IA direto no seu código.
  - **Recurso Recomendado:** [Prompt Engineering Guide](https://www.promptingguide.ai/pt) - O guia mais completo e atualizado sobre engenharia de prompt.

- **🤖 De Chatbot para Agentes (Agentic Workflows):**
  Entenda que o futuro não é só "conversar" com a IA.
  - **O que é um Agente?** É uma IA que tem acesso a *ferramentas* (navegador, terminal, editor de código) e pode usá-las para completar uma tarefa.
  - **Exemplo:** Em vez de pedir "Escreva um script para baixar este vídeo", você pede para um agente "Baixe este vídeo e salve na pasta X". O agente escreve o script, executa no terminal e confirma o sucesso.

- **🏠 IA Local (Privacidade e Custo):**
  Você não precisa enviar tudo para a OpenAI.
  - **Ollama / LM Studio:** Ferramentas que permitem rodar modelos (como Llama 3, Mistral) direto no seu notebook.
  - **Por que usar?** É de graça, funciona offline e seus dados nunca saem da sua máquina. Ótimo para testar ideias ou trabalhar com dados sensíveis.

- **🎓 Aprendizado Assistido por IA:**
  Não use a IA apenas para escrever o código por você. Use-a para **aprender**.
  - **Explique este código:** Cole um trecho complexo e peça para a IA explicar "como se eu tivesse 5 anos".
  - **Gere perguntas de entrevista:** "Estou aprendendo React. Faça perguntas difíceis sobre useEffect e avalie minhas respostas".
  - **Tradução de Conceitos:** "Eu conheço SQL. Como faço [conceito SQL] em Pandas (Python)?".
  - **Roadmaps Personalizados:** "Quero aprender Rust em 4 semanas. Crie um plano de estudos com projetos práticos para cada semana".

- **Ferramentas de Produtividade (Além do Código):**
  - **Reuniões:** Use ferramentas como *Otter.ai* ou *Fireflies* para transcrever e resumir reuniões.
  - **Escrita e Documentação:** Use *Notion AI* ou *Obsidian* com plugins de IA para organizar suas notas e gerar documentação técnica automaticamente.
  - **Brainstorming:** Use o ChatGPT/Claude como um "Pato de Borracha" infinito para discutir arquitetura e ideias.
  - **Motores de Busca para Devs:** Esqueça o Google para dúvidas técnicas complexas. Use **Perplexity** ou **Phind**. Eles leem a documentação atualizada e te dão a resposta com fontes, economizando horas de "caça ao link".

- **Segurança e Ética no Uso de IA:**
  - **Dados Sensíveis:** JAMAIS cole chaves de API, senhas ou dados confidenciais de clientes no ChatGPT ou Claude. O que você digita pode ser usado para treinar o modelo.
  - **Viés (Bias):** Lembre-se que a IA foi treinada na internet, e a internet tem preconceitos. Verifique se o código ou texto gerado não perpetua estereótipos.
  - **Licenciamento de Código:** Tenha cuidado ao usar código gerado em projetos proprietários. A legislação sobre direitos autorais de código gerado por IA ainda é uma área cinzenta.

- **Soft Skills na Era da IA:**
  - **Pensamento Crítico:** A IA erra (e mente) com confiança (Alucinação). Você é o piloto, ela é o copiloto. Nunca commite código que você não entende e não revisou.
  - **Arquitetura e Design:** Com a IA escrevendo o código "braçal" (boilerplate), seu valor profissional migra para desenhar *como* as peças se encaixam e resolver problemas complexos de negócio.
  - **Comunicação:** Saber explicar o problema para a IA (e para humanos) é a habilidade mais valiosa do futuro.

---

### 🌍 Inglês para Devs: A Língua Universal

- **Por que aprender?** A documentação, os fóruns (Stack Overflow, GitHub Issues), os vídeos e as ferramentas de IA mais avançadas são, majoritariamente, em inglês. Saber inglês abre as portas do conhecimento global. Não precisa ser fluente para começar, mas a "leitura técnica" é essencial.

- **Dicas:**
  - Mude o idioma do seu celular e computador para inglês.
  - Tente ler a documentação original antes de procurar a tradução.
  - Use extensões de tradução, mas tente ler a frase original primeiro.
  - Consuma conteúdo de IA em inglês (newsletters, vídeos), pois a tradução de termos técnicos costuma ser confusa.

---

### 🧠 Algoritmos e Estruturas de Dados: O Livro de Feitiços

- **O que são?** Algoritmos são como receitas de bolo: um passo a passo para resolver um problema. Estruturas de Dados são as "prateleiras" e "potes" onde você organiza seus ingredientes (dados) da forma mais eficiente.

- **Por que aprender?** Um bom cozinheiro sabe organizar sua cozinha para pegar os ingredientes rapidamente. Um(a) bom(a) dev sabe como estruturar seus dados para que o programa rode rápido e sem travar. É a diferença entre um feitiço que funciona instantaneamente e um que demora uma eternidade.

- **Recursos:**
  - 📖 [Visualgo: Visualizando Algoritmos e Estruturas de Dados](https://visualgo.net/en)
  - 📺 [Curso de Algoritmos e Lógica de Programação (Vídeo)](https://www.youtube.com/watch?v=8mei6uVttho)

---

### 🏷️ Versionamento Semântico: Dando Nomes aos Bois (ou às Versões)

- **O que é?** É um sistema simples para numerar as versões do seu software: `MAJOR.MINOR.PATCH`.
  - `PATCH`: Correção de um bug que não quebra nada.
  - `MINOR`: Adição de uma funcionalidade que não quebra nada.
  - `MAJOR`: Mudança grande que pode quebrar o que existia antes.

- **Por que aprender?** Para que outros devs (e você do futuro) saibam o que esperar de uma nova versão. Ajuda a evitar o caos de "atualizei e tudo parou de funcionar".

- **Recursos:**
  - 📖 [Documentação Oficial do Versionamento Semântico](https://semver.org/lang/pt-BR/)
  - 📺 [O que é Versionamento Semântico? (Vídeo)](https://www.youtube.com/watch?v=sgheXCK-Rfw)

---

### 🔌 APIs: O Garçom do Mundo Digital

- **O que são?** APIs (Interfaces de Programação de Aplicações) são como garçons em um restaurante. Você (o cliente) não precisa ir até a cozinha (o servidor) para pegar sua comida. Você faz um pedido (uma requisição) ao garçom (a API), ele leva o pedido para a cozinha, e traz o prato pronto para você (a resposta).

  - **REST:** É como um cardápio com pratos bem definidos. Você pede "o prato do dia" e recebe exatamente aquilo.
  - **GraphQL:** É como um buffet onde você monta seu próprio prato. Você pede exatamente os ingredientes que quer, e recebe só eles.

- **Recursos:**
  - 📖 [Introdução ao GraphQL](https://graphql.org/learn/)
  - 📺 [O que são APIs? (Vídeo)](https://www.youtube.com/watch?v=3LHSyha0xN0)

---

### 🧰 Gerenciadores de Pacotes: Sua Caixa de Ferramentas LEGO

- **O que são?** São ferramentas que ajudam a instalar e gerenciar as "peças" (bibliotecas, frameworks) que outras pessoas criaram. Em vez de baixar e configurar tudo na mão, você simplesmente diz: "Preciso da peça X", e o gerenciador faz o resto.

  - **NPM & Yarn:** São os mais populares no universo JavaScript. Pense neles como duas marcas diferentes de caixas de LEGO.

- **Recursos:**
  - 📖 [Documentação Oficial do NPM](https://docs.npmjs.com/)
  - 📖 [Documentação Oficial do Yarn](https://classic.yarnpkg.com/en/docs/)
  - 📺 [NPM: O que é e como usar (Vídeo)](https://www.youtube.com/watch?v=QYH-vX_7Cfo)

---

### 🌐 Internet: Como a Mágica Acontece

- **DNS:** A "lista de contatos" da internet. Traduz nomes de sites (como `google.com`) para endereços de IP (como `172.217.169.110`), que é o que os computadores entendem.
- **HTTP:** O "idioma" que os navegadores e servidores usam para conversar.
- **CORS:** Uma regra de segurança que impede que um site "malvado" faça requisições para um site "bonzinho" em seu nome.
- **Navegadores:** Os "portais" para a internet. Eles entendem HTML, CSS e JavaScript e transformam em páginas bonitas e interativas.

- **Recursos:**
  - 📖 [Como a Internet Funciona (MDN)](https://developer.mozilla.org/pt-BR/docs/Learn/Common_questions/How_does_the_Internet_work)
  - 📺 [Como a Internet Funciona (Vídeo)](https://www.youtube.com/watch?v=YMmIRoJjICw)

---

### 🖥️ Sistemas Operacionais: O Alicerce de Tudo

- **Threads:** Pense no seu cérebro. Você consegue respirar, piscar e pensar ao mesmo tempo. Threads são como "sub-processos" que permitem que um programa faça várias coisas ao mesmo tempo.
- **Terminal:** A "tela preta" dos hackers nos filmes. É uma forma poderosa de interagir com o computador usando comandos de texto. É o seu sabre de luz.
- **Memória:** Onde o computador guarda as informações que está usando no momento. Entender como ela funciona ajuda a escrever programas mais eficientes.

- **Recursos:**
  - 📖 [Fundamentos de Sistemas Operacionais (Artigo)](https://www.geeksforgeeks.org/operating-systems/)
  - 📺 [Conceitos de Sistemas Operacionais (Vídeo)](https://www.youtube.com/watch?v=vBURns9-D6w)

---

### 🐳 Docker: "Na minha máquina funciona" nunca mais!

- **O que é?** Imagine que você pudesse empacotar sua aplicação com todas as suas dependências (banco de dados, bibliotecas, etc.) em uma "caixa" (um contêiner). O Docker permite que você crie e gerencie essas caixas, garantindo que sua aplicação rode da mesma forma em qualquer lugar.

- **Por que aprender?** Para acabar com a clássica desculpa. Se funciona no contêiner, vai funcionar na máquina do seu colega, no servidor de produção, na Estrela da Morte, em qualquer lugar.

- **Recursos:**
  - 📖 [Documentação Oficial do Docker](https://docs.docker.com/)
  - 📺 [Docker para Iniciantes (Vídeo)](https://www.youtube.com/watch?v=3c-iBn73dDE)

---

### 🚪 Web Servers: Os Porteiros da Internet

- **O que são?** São programas que recebem as requisições dos navegadores e entregam os arquivos do seu site. Eles são os porteiros que decidem quem entra e o que cada um pode ver.

  - **Nginx & Apache:** Dois dos porteiros mais famosos e confiáveis do mercado.

- **Recursos:**
  - 📖 [Documentação Oficial do Nginx](https://nginx.org/en/docs/)
  - 📖 [Documentação Oficial do Apache](https://httpd.apache.org/docs/)
  - 📺 [O que é um Web Server? (Vídeo)](https://www.youtube.com/watch?v=Zt_jJ5eS-p0)

---

### 📚 Onde Estudar de Graça (Recursos Gerais)

- **[FreeCodeCamp](https://www.freecodecamp.org/):** O melhor lugar para começar do zero. Cursos interativos e projetos práticos.
- **[Roadmap.sh](https://roadmap.sh/):** Guias visuais detalhados para qualquer carreira tech.
- **[CS50 (Harvard)](https://pll.harvard.edu/course/cs50-introduction-computer-science):** O melhor curso de introdução à ciência da computação do mundo, disponível gratuitamente no YouTube/EdX.
- **[Microsoft: Generative AI for Beginners](https://github.com/microsoft/generative-ai-for-beginners):** Curso completo e gratuito no GitHub, ideal para entender os fundamentos.
- **[Google Cloud Skills Boost](https://www.cloudskillsboost.google/paths/118):** Trilha de aprendizado em IA Generativa do Google.

---
## 🚦 Próximos Passos

Agora que você tem a base, escolha sua especialização:

*   [**Backend**](../backend/backend.md)
*   [**Frontend**](../frontend/frontend.md)
*   [**Mobile**](../mobile/mobile.md)
*   [**DevOps**](../devops/devops.md)
*   [**Inteligência Artificial**](../ai/artificial-intelligence.md)
