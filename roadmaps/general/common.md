# 🗺️ Trilha Comum: A Base para Toda Grande Jornada DEV

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

- **Prompt Engineering para Devs:**
  - **Contexto é Rei:** Não diga apenas "Corrija o erro". Cole o erro, o trecho de código e explique o que você esperava.
  - **Few-Shot Prompting:** Dê exemplos de como você quer a resposta. "Gere testes unitários seguindo este padrão: [exemplo]".
  - **Chain of Thought:** Peça para a IA "pensar passo a passo" antes de dar a solução final para problemas lógicos.
  - **Role Prompting:** Diga à IA quem ela deve ser. "Atue como um Engenheiro Sênior de Segurança em Rust" gera resultados muito diferentes de apenas "Escreva um código em Rust".

- **Segurança e Ética no Uso de IA:**
  - **Dados Sensíveis:** JAMAIS cole chaves de API, senhas ou dados confidenciais de clientes no ChatGPT ou Claude. O que você digita pode ser usado para treinar o modelo.
  - **Viés (Bias):** Lembre-se que a IA foi treinada na internet, e a internet tem preconceitos. Verifique se o código ou texto gerado não perpetua estereótipos.
  - **Licenciamento de Código:** Tenha cuidado ao usar código gerado em projetos proprietários. A legislação sobre direitos autorais de código gerado por IA ainda é uma área cinzenta.

- **Soft Skills na Era da IA:**
  - **Pensamento Crítico:** A IA erra (e mente) com confiança (Alucinação). Você é o piloto, ela é o copiloto. Nunca commite código que você não entende e não revisou.
  - **Arquitetura e Design:** Com a IA escrevendo o código "braçal" (boilerplate), seu valor profissional migra para desenhar *como* as peças se encaixam e resolver problemas complexos de negócio.
  - **Comunicação:** Saber explicar o problema para a IA (e para humanos) é a habilidade mais valiosa do futuro.

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
