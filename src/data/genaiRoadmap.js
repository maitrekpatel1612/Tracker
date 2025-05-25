// GenAI Roadmap Data
export const genAIRoadmapData = {
  'genai-foundations': {
    name: 'GenAI Foundations',
    topics: [
      {
        id: 'found-1',
        title: 'AI & Machine Learning Basics',
        description: 'Core concepts in AI and ML, forming the foundation for GenAI.',
        status: 'not-started',
        estimatedHours: 10,
        startDate: null,
        completionDate: null,
        notes: 'Goal: Build a strong understanding of AI, machine learning, and data fundamentals, with an emphasis on ethical AI practices.',
        subtopics: [
          { id: 'found-1-1', title: 'Types of Machine Learning (Supervised, Unsupervised, Reinforcement Learning)', status: 'not-started', resources: ['https://www.coursera.org/learn/machine-learning'] },
          { id: 'found-1-2', title: 'Supervised vs. Unsupervised Learning', status: 'not-started', resources: ['https://developers.google.com/machine-learning/crash-course'] },
          { id: 'found-1-3', title: 'Model Evaluation Metrics (Accuracy, Precision, Recall, F1 Score, ROC-AUC)', status: 'not-started', resources: ['https://scikit-learn.org/stable/modules/model_evaluation.html'] },
          { id: 'found-1-4', title: 'Overfitting, Underfitting, and Regularization Techniques (L1, L2, Dropout)', status: 'not-started', resources: ['https://www.deeplearning.ai/'] },
          { id: 'found-1-5', title: 'Introduction to Probabilistic Models (e.g., Bayesian methods)', status: 'not-started', resources: [] },
          { id: 'found-1-6', title: 'Practice: Implement a simple linear regression model using scikit-learn', status: 'not-started', resources: ['https://scikit-learn.org/stable/auto_examples/linear_model/plot_ols.html'] }
        ]
      },
      {
        id: 'found-2',
        title: 'Deep Learning Fundamentals',
        description: 'Understand neural networks and deep learning principles.',
        status: 'not-started',
        estimatedHours: 12,
        startDate: null,
        completionDate: null,
        notes: '',
        subtopics: [
          { id: 'found-2-1', title: 'Neural Network Architectures (Feedforward, CNNs, RNNs)', status: 'not-started', resources: ['https://www.deeplearning.ai/deep-learning-specialization/'] },
          { id: 'found-2-2', title: 'Backpropagation and Optimization (SGD, Adam)', status: 'not-started', resources: ['https://cs231n.github.io/optimization-1/'] },
          { id: 'found-2-3', title: 'Activation Functions (ReLU, Sigmoid, Tanh)', status: 'not-started', resources: ['https://machinelearningmastery.com/choose-an-activation-function-for-deep-learning/'] },
          { id: 'found-2-4', title: 'Transfer Learning and Pre-trained Models', status: 'not-started', resources: ['https://www.tensorflow.org/tutorials/images/transfer_learning'] },
          { id: 'found-2-5', title: 'Introduction to Autoencoders and Variational Autoencoders (VAEs)', status: 'not-started', resources: [] },
          { id: 'found-2-6', title: 'Practice: Build a simple neural network using TensorFlow/Keras to classify MNIST digits', status: 'not-started', resources: ['https://www.tensorflow.org/tutorials/quickstart/beginner'] }
        ]
      },
      {
        id: 'found-3',
        title: 'Data for GenAI',
        description: 'Learn data collection, cleaning, and preparation for GenAI.',
        status: 'not-started',
        estimatedHours: 10,
        startDate: null,
        completionDate: null,
        notes: '',
        subtopics: [
          { id: 'found-3-1', title: 'Data Sources and Datasets (Kaggle, Hugging Face Datasets)', status: 'not-started', resources: ['https://huggingface.co/datasets'] },
          { id: 'found-3-2', title: 'Data Preprocessing (Normalization, Tokenization, Handling Missing Data)', status: 'not-started', resources: ['https://www.kaggle.com/learn/data-cleaning'] },
          { id: 'found-3-3', title: 'Data Annotation and Labeling (Manual and Automated)', status: 'not-started', resources: ['https://labelstud.io/guide/'] },
          { id: 'found-3-4', title: 'Synthetic Data Generation for GenAI (e.g., using GANs or LLMs)', status: 'not-started', resources: [] },
          { id: 'found-3-5', title: 'Practice: Clean a dataset from Kaggle and prepare it for training a model', status: 'not-started', resources: ['https://www.kaggle.com/learn/data-cleaning'] }
        ]
      },
      {
        id: 'found-4',
        title: 'Ethics & Responsible AI',
        description: 'Explore ethical considerations and responsible AI practices.',
        status: 'not-started',
        estimatedHours: 8,
        startDate: null,
        completionDate: null,
        notes: '',
        subtopics: [
          { id: 'found-4-1', title: 'Bias and Fairness in AI Models', status: 'not-started', resources: ['https://developers.google.com/machine-learning/fairness-overview/'] },
          { id: 'found-4-2', title: 'Explainability and Interpretability (SHAP, LIME)', status: 'not-started', resources: ['https://christophm.github.io/interpretable-ml-book/'] },
          { id: 'found-4-3', title: 'AI Safety and Governance', status: 'not-started', resources: ['https://ai.google/responsibility/'] },
          { id: 'found-4-4', title: 'Privacy-Preserving AI (Differential Privacy, Federated Learning)', status: 'not-started', resources: [] },
          { id: 'found-4-5', title: 'Practice: Analyze a dataset for bias using tools like Fairlearn', status: 'not-started', resources: ['https://fairlearn.org/'] }
        ]
      },
      {
        id: 'found-5',
        title: 'Project: Build a simple ML model and evaluate it for bias and fairness',
        description: 'Apply foundational GenAI skills in a practical project.',
        status: 'not-started',
        estimatedHours: 8,
        startDate: null,
        completionDate: null,
        notes: '',
        subtopics: []
      }
    ]
  },
  'llms-nlp': {
    name: 'LLMs & NLP',
    topics: [
      {
        id: 'llm-1',
        title: 'Language Model Fundamentals',
        description: 'Understanding LLMs and their architectures',
        status: 'not-started',
        estimatedHours: 10,
        startDate: null,
        completionDate: null,
        notes: '',
        subtopics: [
          { id: 'llm-1-1', title: 'Word Embeddings & Tokenization', status: 'not-started', resources: ['https://www.tensorflow.org/text/guide/word_embeddings'] },
          { id: 'llm-1-2', title: 'Attention Mechanisms', status: 'not-started', resources: ['https://jalammar.github.io/illustrated-transformer/'] },
          { id: 'llm-1-3', title: 'Transformer Architecture', status: 'not-started', resources: ['https://jalammar.github.io/illustrated-transformer/'] },
          { id: 'llm-1-4', title: 'Pretraining & Fine-tuning', status: 'not-started', resources: ['https://huggingface.co/docs/transformers/training'] }
        ]
      },
      {
        id: 'llm-2',
        title: 'Popular LLMs & Frameworks',
        description: 'Overview of major LLMs and NLP libraries',
        status: 'not-started',
        estimatedHours: 8,
        startDate: null,
        completionDate: null,
        notes: '',
        subtopics: [
          { id: 'llm-2-1', title: 'BERT, GPT, T5, Llama', status: 'not-started', resources: ['https://huggingface.co/learn/nlp-course/chapter1/1'] },
          { id: 'llm-2-2', title: 'Hugging Face Transformers', status: 'not-started', resources: ['https://huggingface.co/docs/transformers/index'] },
          { id: 'llm-2-3', title: 'OpenAI API', status: 'not-started', resources: ['https://platform.openai.com/docs/'] },
          { id: 'llm-2-4', title: 'LangChain & LlamaIndex', status: 'not-started', resources: ['https://python.langchain.com/docs/'] }
        ]
      },
      {
        id: 'llm-3',
        title: 'LLM Evaluation & Safety',
        description: 'Evaluating and ensuring safe LLM outputs',
        status: 'not-started',
        estimatedHours: 6,
        startDate: null,
        completionDate: null,
        notes: '',
        subtopics: [
          { id: 'llm-3-1', title: 'Prompt Evaluation', status: 'not-started', resources: ['https://www.promptingguide.ai/'] },
          { id: 'llm-3-2', title: 'Hallucination & Mitigation', status: 'not-started', resources: ['https://arxiv.org/abs/2302.06476'] },
          { id: 'llm-3-3', title: 'Red Teaming & Adversarial Testing', status: 'not-started', resources: ['https://www.microsoft.com/en-us/research/blog/red-teaming-language-models/'] }
        ]
      }
    ]
  },
  'genai-applications': {
    name: 'GenAI Applications',
    topics: [
      {
        id: 'app-1',
        title: 'Text Generation & Chatbots',
        description: 'Building text-based GenAI apps',
        status: 'not-started',
        estimatedHours: 10,
        startDate: null,
        completionDate: null,
        notes: '',
        subtopics: [
          { id: 'app-1-1', title: 'Prompt Engineering', status: 'not-started', resources: ['https://www.promptingguide.ai/'] },
          { id: 'app-1-2', title: 'Chatbot Development', status: 'not-started', resources: ['https://platform.openai.com/docs/guides/gpt/chat-completions-api'] },
          { id: 'app-1-3', title: 'Summarization & Translation', status: 'not-started', resources: ['https://huggingface.co/learn/nlp-course/chapter7/5'] },
          { id: 'app-1-4', title: 'Content Generation', status: 'not-started', resources: ['https://www.deeplearning.ai/short-courses/building-systems-with-chatgpt/'] }
        ]
      },
      {
        id: 'app-2',
        title: 'Image & Multimodal Generation',
        description: 'Creating images and multimodal content with GenAI',
        status: 'not-started',
        estimatedHours: 10,
        startDate: null,
        completionDate: null,
        notes: '',
        subtopics: [
          { id: 'app-2-1', title: 'Diffusion Models', status: 'not-started', resources: ['https://lilianweng.github.io/posts/2021-07-11-diffusion-models/'] },
          { id: 'app-2-2', title: 'Stable Diffusion & DALL-E', status: 'not-started', resources: ['https://jalammar.github.io/illustrated-stable-diffusion/'] },
          { id: 'app-2-3', title: 'Prompt Engineering for Images', status: 'not-started', resources: ['https://prompthero.com/stable-diffusion-prompt-guide'] },
          { id: 'app-2-4', title: 'Multimodal Models (CLIP, Flamingo)', status: 'not-started', resources: ['https://openai.com/research/clip'] }
        ]
      },
      {
        id: 'app-3',
        title: 'Audio, Code, and Other Modalities',
        description: 'GenAI for audio, code, and more',
        status: 'not-started',
        estimatedHours: 8,
        startDate: null,
        completionDate: null,
        notes: '',
        subtopics: [
          { id: 'app-3-1', title: 'Audio Generation (TTS, Music)', status: 'not-started', resources: ['https://magenta.tensorflow.org/'] },
          { id: 'app-3-2', title: 'Code Generation (Copilot, Codex)', status: 'not-started', resources: ['https://platform.openai.com/docs/guides/code'] },
          { id: 'app-3-3', title: 'Video & Multimodal Synthesis', status: 'not-started', resources: ['https://research.runwayml.com/gen2'] }
        ]
      },
      {
        id: 'app-4',
        title: 'GenAI Deployment & Integration',
        description: 'Serving, scaling, and integrating GenAI models',
        status: 'not-started',
        estimatedHours: 8,
        startDate: null,
        completionDate: null,
        notes: '',
        subtopics: [
          { id: 'app-4-1', title: 'Model Serving (APIs, Containers)', status: 'not-started', resources: ['https://www.tensorflow.org/tfx/serving'] },
          { id: 'app-4-2', title: 'Cloud GenAI Services', status: 'not-started', resources: ['https://cloud.google.com/vertex-ai'] },
          { id: 'app-4-3', title: 'Monitoring & Observability', status: 'not-started', resources: ['https://www.mlflow.org/'] },
          { id: 'app-4-4', title: 'Cost Optimization', status: 'not-started', resources: ['https://aws.amazon.com/machine-learning/pricing/'] }
        ]
      }
    ]
  },
  'advanced-genai': {
    name: 'Advanced GenAI Topics',
    topics: [
      {
        id: 'adv-1',
        title: 'RLHF & Human Feedback',
        description: 'Reinforcement learning from human feedback',
        status: 'not-started',
        estimatedHours: 8,
        startDate: null,
        completionDate: null,
        notes: '',
        subtopics: [
          { id: 'adv-1-1', title: 'RLHF Concepts', status: 'not-started', resources: ['https://huggingface.co/learn/nlp-course/chapter7/6'] },
          { id: 'adv-1-2', title: 'Reward Modeling', status: 'not-started', resources: ['https://arxiv.org/abs/2009.01325'] },
          { id: 'adv-1-3', title: 'Human-in-the-Loop', status: 'not-started', resources: ['https://www.microsoft.com/en-us/research/blog/human-in-the-loop-machine-learning/'] }
        ]
      },
      {
        id: 'adv-2',
        title: 'Retrieval-Augmented Generation (RAG)',
        description: 'Combining LLMs with external knowledge',
        status: 'not-started',
        estimatedHours: 7,
        startDate: null,
        completionDate: null,
        notes: '',
        subtopics: [
          { id: 'adv-2-1', title: 'RAG Architecture', status: 'not-started', resources: ['https://www.pinecone.io/learn/retrieval-augmented-generation/'] },
          { id: 'adv-2-2', title: 'Vector Databases', status: 'not-started', resources: ['https://www.pinecone.io/'] },
          { id: 'adv-2-3', title: 'Document Indexing & Chunking', status: 'not-started', resources: ['https://python.langchain.com/docs/modules/data_connection/document_loaders/'] }
        ]
      },
      {
        id: 'adv-3',
        title: 'Agentic Workflows & Automation',
        description: 'Building autonomous GenAI agents',
        status: 'not-started',
        estimatedHours: 7,
        startDate: null,
        completionDate: null,
        notes: '',
        subtopics: [
          { id: 'adv-3-1', title: 'GenAI Agents (AutoGPT, CrewAI)', status: 'not-started', resources: ['https://github.com/Significant-Gravitas/Auto-GPT'] },
          { id: 'adv-3-2', title: 'Tool Use & Plugins', status: 'not-started', resources: ['https://platform.openai.com/docs/plugins/introduction'] },
          { id: 'adv-3-3', title: 'Orchestration & Workflow Engines', status: 'not-started', resources: ['https://python.langchain.com/docs/modules/agents/'] }
        ]
      },
      {
        id: 'adv-4',
        title: 'Scaling, Open Source, & Research',
        description: 'Scaling GenAI, open source models, and research trends',
        status: 'not-started',
        estimatedHours: 6,
        startDate: null,
        completionDate: null,
        notes: '',
        subtopics: [
          { id: 'adv-4-1', title: 'Scaling Laws & Infrastructure', status: 'not-started', resources: ['https://arxiv.org/abs/2001.08361'] },
          { id: 'adv-4-2', title: 'Open Source LLMs', status: 'not-started', resources: ['https://huggingface.co/blog/open_llm_leaderboard'] },
          { id: 'adv-4-3', title: 'Recent Research & Trends', status: 'not-started', resources: ['https://arxiv.org/list/cs.AI/recent'] }
        ]
      }
    ]
  }
};

export default genAIRoadmapData;
