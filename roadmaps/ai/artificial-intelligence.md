# 🤖 Trilha de Inteligência Artificial: Ensinando as Máquinas a Pensar

"Qualquer tecnologia suficientemente avançada é indistinguível da magia." - Arthur C. Clarke. Bem-vindo(a) à trilha de IA, onde você será o(a) mágico(a). Aqui, você vai aprender a ensinar os computadores a reconhecer padrões, tomar decisões e, em alguns casos, até a "criar".

Esta trilha foi desenhada para guiar você desde os primeiros passos até os conceitos mais avançados de IA Generativa e Agentes Autônomos.

---

## 🐣 Nível Iniciante: O Aprendiz de Feiticeiro

Aqui construímos a fundação. Sem ela, seus modelos desmoronam.

### 📐 Fundamentos Matemáticos (Essencial)
Não fuja da matemática! Ela é o motor debaixo do capô.
- **Álgebra Linear:** Entenda vetores, matrizes e tensores. É como os dados são representados.
- **Cálculo:** Derivadas e gradientes são usados para "ensinar" a rede (Backpropagation).
- **Probabilidade e Estatística:** Para entender incertezas e distribuições de dados.
- **Recursos:**
  - 📖 [Khan Academy - Matemática](https://pt.khanacademy.org/)
  - 📺 [3Blue1Brown - Essence of Linear Algebra](https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab)

### 🧠 Machine Learning "Clássico"
Antes de correr com Deep Learning, aprenda a andar com algoritmos clássicos.
- **Conceitos:** Aprendizado Supervisionado vs Não Supervisionado, Overfitting/Underfitting, Bias-Variance Tradeoff.
- **Algoritmos:** Regressão Linear/Logística, Árvores de Decisão, K-Means, SVM.
- **Scikit-Learn:** A biblioteca padrão para ML em Python.
- **Recursos:**
  - 📖 [Scikit-Learn User Guide](https://scikit-learn.org/stable/user_guide.html)
  - 📺 [StatQuest with Josh Starmer](https://www.youtube.com/user/joshstarmer) - *Explicações incríveis!*

### 🐍 Python para Dados
- **Ferramentas:** Pandas (manipulação), NumPy (matemática), Matplotlib/Seaborn (visualização).
- **Jupyter Notebooks:** Seu caderno de laboratório interativo.

### 🛠️ Primeiro Projeto Prático
- **Titanic Survival Prediction (Kaggle):** O "Hello World" de Data Science.
- **Previsão de Preços de Casas:** Regressão clássica.

---

## 🚀 Nível Intermediário: O Mago Praticante

Hora de usar redes neurais para resolver problemas que o código clássico não consegue (visão, texto, áudio).

### 🕸️ Deep Learning
- **Redes Neurais Artificiais (ANNs):** A base de tudo. Funções de ativação (ReLU, Sigmoid), Loss Functions.
- **Frameworks:**
  - **PyTorch:** O favorito da pesquisa e da indústria moderna de IA generativa.
  - **TensorFlow/Keras:** Ainda muito forte em produção legada e mobile.
- **Recursos:**
  - 📖 [Deep Learning for Coders (fast.ai)](https://course.fast.ai/) - *Aprenda fazendo.*
  - 📖 [Neural Networks and Deep Learning (Michael Nielsen)](http://neuralnetworksanddeeplearning.com/)

### 👁️ Visão Computacional (CV)
- **CNNs (Convolutional Neural Networks):** Como o computador vê bordas e formas.
- **Arquiteturas Modernas:** Vision Transformers (ViT), YOLO (Detecção de Objetos).
- **Projetos:** Classificador de raças de cachorro, Detector de máscaras.

### 🗣️ Processamento de Linguagem Natural (NLP)
- **O Caminho até os LLMs:** Bag of Words -> Word2Vec -> RNNs/LSTMs -> **Transformers**.
- **Transformers:** Entenda "Attention is All You Need". Encoder vs Decoder.
- **Hugging Face:** Aprenda a usar a biblioteca `transformers` e o Hub.

### ⚙️ MLOps Básico
Não basta treinar, tem que monitorar.
- **Experiment Tracking:** Use MLflow ou Weights & Biases para salvar seus experimentos.
- **Model Registry:** Onde guardar seus modelos versionados.

---

## 🧙‍♂️ Nível Avançado: O Arquimago da IA Generativa

A fronteira da tecnologia atual. Aqui o foco é criar sistemas inteligentes complexos.

### 🤖 LLMs e Engenharia de IA
- **Arquitetura:** Llama, Mistral, GPT. Entenda os parâmetros e quantização (FP16, INT8, GGUF).
- **Rodando Localmente:**
  - **Ollama / LM Studio:** Para rodar modelos no seu laptop.
  - **vLLM / TGI:** Para servir modelos em produção com alta performance.
- **RAG (Retrieval-Augmented Generation):**
  - Chunking avançado, Re-ranking, Hybrid Search (Vetorial + Keywords).
  - **Bancos Vetoriais:** Pinecone, Weaviate, Qdrant, pgvector.

### 🕵️ Agentes Autônomos (Agentic AI)
O futuro da automação. O modelo não só fala, ele *faz*.
- **Frameworks:** LangGraph (controle total), CrewAI (orquestração de times), AutoGen (Microsoft).
- **Ferramentas (Function Calling):** Ensinar o LLM a usar APIs, Calculator, Google Search.

### ⚖️ Avaliação e Observabilidade (LLM Ops)
Como saber se seu bot não está falando besteira?
- **Evals:** RAGAS (para avaliar RAG), DeepEval, Arize Phoenix.
- **Tracing:** LangSmith, Langfuse. Monitore cada passo do seu agente.

### 🛡️ Ética e Segurança
- **Prompt Injection:** Como hackers enganam LLMs e como se proteger.
- **Alucinação:** Técnicas para mitigar respostas falsas.

---

## 🏗️ Projetos para Portfólio (Por Nível)

1.  **Iniciante:** Dashboard no Streamlit analisando dados públicos do governo.
2.  **Intermediário:** App que reconhece plantas por foto (usando PyTorch/FastAPI).
3.  **Avançado:** "Chatbot com seu PDF" usando RAG local (Ollama + LangChain + Streamlit) ou um Agente que pesquisa notícias e resume no Slack.

---

## 📺 Canais e Newsletters Recomendados

- **Andrej Karpathy:** O "professor" da IA moderna. Seus vídeos construindo GPT do zero são obrigatórios.
- **Yannic Kilcher:** Resumos de papers técnicos (para quem gosta de matemática).
- **Two Minute Papers:** O estado da arte explicado visualmente.
- **AI News (Newsletter):** Mantenha-se atualizado semanalmente.
- **The Rundown AI:** Notícias rápidas.

## 📚 Livros Clássicos

- **"Deep Learning"** (Ian Goodfellow)
- **"Pattern Recognition and Machine Learning"** (Christopher Bishop)
- **"Designing Machine Learning Systems"** (Chip Huyen) - *Focado em produção.*
