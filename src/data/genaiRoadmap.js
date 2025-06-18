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
        subtopics: [          { id: 'found-1-1', title: 'Types of Machine Learning (Supervised, Unsupervised, Reinforcement Learning)', status: 'not-started', resources: ['https://www.coursera.org/learn/machine-learning', 'https://machinelearningmastery.com/types-of-learning-in-machine-learning/', 'https://www.edx.org/course/introduction-to-machine-learning', 'https://www.youtube.com/watch?v=aircAruvnKk', 'https://towardsdatascience.com/machine-learning-basics-part-1-a36d38c7916'] },
          { id: 'found-1-2', title: 'Supervised vs. Unsupervised Learning', status: 'not-started', resources: ['https://developers.google.com/machine-learning/crash-course', 'https://www.ibm.com/cloud/learn/supervised-learning', 'https://www.geeksforgeeks.org/supervised-unsupervised-learning/', 'https://towardsdatascience.com/supervised-vs-unsupervised-learning-14f68e32ea8d', 'https://medium.com/@sarahbahgat01/supervised-vs-unsupervised-learning-ac7281878230'] },
          { id: 'found-1-3', title: 'Model Evaluation Metrics (Accuracy, Precision, Recall, F1 Score, ROC-AUC)', status: 'not-started', resources: ['https://scikit-learn.org/stable/modules/model_evaluation.html', 'https://towardsdatascience.com/model-evaluation-metrics-in-machine-learning-928b0b7c6bb1', 'https://machinelearningmastery.com/classification-accuracy-is-not-enough-more-performance-measures-you-can-use/', 'https://neptune.ai/blog/evaluation-metrics-for-classification-problems', 'https://www.analyticsvidhya.com/blog/2019/08/11-important-model-evaluation-error-metrics/'] },
          { id: 'found-1-4', title: 'Overfitting, Underfitting, and Regularization Techniques (L1, L2, Dropout)', status: 'not-started', resources: ['https://www.deeplearning.ai/', 'https://machinelearningmastery.com/overfitting-and-underfitting-with-machine-learning-algorithms/', 'https://towardsdatascience.com/regularization-in-machine-learning-76441ddcf99a', 'https://www.analyticsvidhya.com/blog/2018/04/fundamentals-deep-learning-regularization-techniques/', 'https://medium.com/@anishsingh20/regularization-in-machine-learning-and-deep-learning-70c9b1d20cd8'] },
          { id: 'found-1-5', title: 'Introduction to Probabilistic Models (e.g., Bayesian methods)', status: 'not-started', resources: ['https://towardsdatascience.com/a-gentle-introduction-to-bayesian-machine-learning-d4c6d1d34451', 'https://www.coursera.org/learn/bayesian-statistics', 'https://machinelearningmastery.com/bayes-theorem-for-machine-learning/', 'https://www.analyticsvidhya.com/blog/2016/06/bayesian-statistics-beginners-simple-english/', 'https://medium.com/towards-data-science/introduction-to-bayesian-linear-regression-e66e60791ea7'] },
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
        subtopics: [          { id: 'found-2-1', title: 'Neural Network Architectures (Feedforward, CNNs, RNNs)', status: 'not-started', resources: ['https://www.deeplearning.ai/deep-learning-specialization/', 'https://cs231n.stanford.edu/', 'https://www.youtube.com/watch?v=aircAruvnKk&list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi', 'https://towardsdatascience.com/a-comprehensive-guide-to-convolutional-neural-networks-the-eli5-way-3bd2b1164a53', 'https://machinelearningmastery.com/crash-course-deep-learning-neural-networks/'] },
          { id: 'found-2-2', title: 'Backpropagation and Optimization (SGD, Adam)', status: 'not-started', resources: ['https://cs231n.github.io/optimization-1/', 'https://towardsdatascience.com/understanding-backpropagation-algorithm-7bb3aa2f95fd', 'https://machinelearningmastery.com/gradient-descent-optimization-algorithms/', 'https://www.analyticsvidhya.com/blog/2017/03/introduction-to-gradient-descent-algorithm-along-its-variants/', 'https://ruder.io/optimizing-gradient-descent/'] },
          { id: 'found-2-3', title: 'Activation Functions (ReLU, Sigmoid, Tanh)', status: 'not-started', resources: ['https://machinelearningmastery.com/choose-an-activation-function-for-deep-learning/', 'https://towardsdatascience.com/activation-functions-neural-networks-1cbd9f8d91d6', 'https://www.analyticsvidhya.com/blog/2020/01/fundamentals-deep-learning-activation-functions-when-to-use-them/', 'https://medium.com/@danqing/a-practical-guide-to-relu-b83ca804f1f7', 'https://ml-cheatsheet.readthedocs.io/en/latest/activation_functions.html'] },
          { id: 'found-2-4', title: 'Transfer Learning and Pre-trained Models', status: 'not-started', resources: ['https://www.tensorflow.org/tutorials/images/transfer_learning', 'https://machinelearningmastery.com/transfer-learning-for-deep-learning/', 'https://towardsdatascience.com/a-comprehensive-hands-on-guide-to-transfer-learning-with-real-world-applications-in-deep-learning-212bf3b2f27a', 'https://pytorch.org/tutorials/beginner/transfer_learning_tutorial.html', 'https://www.analyticsvidhya.com/blog/2017/06/transfer-learning-the-art-of-fine-tuning-a-pre-trained-model/'] },
          { id: 'found-2-5', title: 'Introduction to Autoencoders and Variational Autoencoders (VAEs)', status: 'not-started', resources: ['https://www.tensorflow.org/tutorials/generative/autoencoder', 'https://towardsdatascience.com/understanding-variational-autoencoders-vaes-f70510919f73', 'https://machinelearningmastery.com/autoencoder-for-classification/', 'https://blog.keras.io/building-autoencoders-in-keras.html', 'https://arxiv.org/abs/1312.6114'] },
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
        subtopics: [          { id: 'found-3-1', title: 'Data Sources and Datasets (Kaggle, Hugging Face Datasets)', status: 'not-started', resources: ['https://huggingface.co/datasets', 'https://www.kaggle.com/datasets', 'https://registry.opendata.aws/', 'https://datasetsearch.research.google.com/', 'https://www.data.gov/'] },
          { id: 'found-3-2', title: 'Data Preprocessing (Normalization, Tokenization, Handling Missing Data)', status: 'not-started', resources: ['https://www.kaggle.com/learn/data-cleaning', 'https://towardsdatascience.com/data-preprocessing-concepts-fa946d11c825', 'https://machinelearningmastery.com/basic-data-cleaning-for-machine-learning/', 'https://www.analyticsvidhya.com/blog/2016/07/practical-guide-data-preprocessing-python-scikit-learn/', 'https://pandas.pydata.org/docs/user_guide/missing_data.html'] },
          { id: 'found-3-3', title: 'Data Annotation and Labeling (Manual and Automated)', status: 'not-started', resources: ['https://labelstud.io/guide/', 'https://www.scale.com/guide/data-labeling', 'https://towardsdatascience.com/data-labeling-for-machine-learning-a-complete-guide-bb6f168a8c4f', 'https://www.prodigy.ai/', 'https://www.makesense.ai/'] },
          { id: 'found-3-4', title: 'Synthetic Data Generation for GenAI (e.g., using GANs or LLMs)', status: 'not-started', resources: ['https://towardsdatascience.com/synthetic-data-generation-a-must-have-skill-for-new-data-scientists-915896c0c1ae', 'https://machinelearningmastery.com/what-are-generative-adversarial-networks-gans/', 'https://www.gretel.ai/blog/synthetic-data-generation', 'https://docs.nvidia.com/clara/clara-train-sdk/pt/aiaa_annotation.html', 'https://mostly.ai/synthetic-data-platform/'] },
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
        subtopics: [          { id: 'found-4-1', title: 'Bias and Fairness in AI Models', status: 'not-started', resources: ['https://developers.google.com/machine-learning/fairness-overview/', 'https://fairlearn.org/', 'https://towardsdatascience.com/a-tutorial-on-fairness-in-machine-learning-3ff8ba1040cb', 'https://www.ibm.com/watson/ai-fairness-360/', 'https://research.google/pubs/pub46485/'] },
          { id: 'found-4-2', title: 'Explainability and Interpretability (SHAP, LIME)', status: 'not-started', resources: ['https://christophm.github.io/interpretable-ml-book/', 'https://shap.readthedocs.io/en/latest/', 'https://lime-ml.readthedocs.io/en/latest/', 'https://towardsdatascience.com/explainable-artificial-intelligence-part-3-hands-on-machine-learning-model-interpretation-e8ebe5afc608', 'https://www.analyticsvidhya.com/blog/2020/03/begin-here-for-explainable-ai-xai/'] },
          { id: 'found-4-3', title: 'AI Safety and Governance', status: 'not-started', resources: ['https://ai.google/responsibility/', 'https://www.partnershiponai.org/', 'https://www.microsoft.com/en-us/ai/responsible-ai', 'https://www.ibm.com/artificial-intelligence/ethics', 'https://openai.com/safety/'] },
          { id: 'found-4-4', title: 'Privacy-Preserving AI (Differential Privacy, Federated Learning)', status: 'not-started', resources: ['https://blog.openmined.org/introduction-to-differential-privacy/', 'https://federated.withgoogle.com/', 'https://towardsdatascience.com/understanding-differential-privacy-85ce191e198a', 'https://www.tensorflow.org/federated', 'https://flower.dev/'] },
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
        subtopics: [          { id: 'llm-1-1', title: 'Word Embeddings & Tokenization', status: 'not-started', resources: ['https://www.tensorflow.org/text/guide/word_embeddings', 'https://huggingface.co/docs/transformers/tokenizer_summary', 'https://towardsdatascience.com/introduction-to-word-embedding-and-word2vec-652d0c2060fa', 'https://machinelearningmastery.com/what-are-word-embeddings/', 'https://nlp.stanford.edu/projects/glove/'] },
          { id: 'llm-1-2', title: 'Attention Mechanisms', status: 'not-started', resources: ['https://jalammar.github.io/illustrated-transformer/', 'https://machinelearningmastery.com/attention-long-short-term-memory-recurrent-neural-networks/', 'https://towardsdatascience.com/attention-is-all-you-need-discovering-the-transformer-paper-73e5ff5e0634', 'https://lilianweng.github.io/posts/2018-06-24-attention/', 'https://distill.pub/2016/augmented-rnns/'] },
          { id: 'llm-1-3', title: 'Transformer Architecture', status: 'not-started', resources: ['https://jalammar.github.io/illustrated-transformer/', 'https://arxiv.org/abs/1706.03762', 'https://towardsdatascience.com/attention-is-all-you-need-discovering-the-transformer-paper-73e5ff5e0634', 'https://peterbloem.nl/blog/transformers', 'https://www.tensorflow.org/text/tutorials/transformer'] },
          { id: 'llm-1-4', title: 'Pretraining & Fine-tuning', status: 'not-started', resources: ['https://huggingface.co/docs/transformers/training', 'https://towardsdatascience.com/fine-tuning-pre-trained-nlp-models-with-huggingface-transformers-57b7748d1f89', 'https://machinelearningmastery.com/fine-tuning-machine-learning-models/', 'https://www.deeplearning.ai/short-courses/finetuning-large-language-models/', 'https://www.analyticsvidhya.com/blog/2020/07/transfer-learning-for-nlp-fine-tuning-bert-for-text-classification/'] }
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
        subtopics: [          { id: 'llm-2-1', title: 'BERT, GPT, T5, Llama', status: 'not-started', resources: ['https://huggingface.co/learn/nlp-course/chapter1/1', 'https://jalammar.github.io/illustrated-bert/', 'https://jalammar.github.io/how-gpt3-works-visualizations-animations/', 'https://towardsdatascience.com/understanding-bert-transformer-attention-isnt-all-you-need-5839ebd396db', 'https://ai.meta.com/llama/'] },
          { id: 'llm-2-2', title: 'Hugging Face Transformers', status: 'not-started', resources: ['https://huggingface.co/docs/transformers/index', 'https://huggingface.co/course/', 'https://towardsdatascience.com/getting-started-with-hugging-face-transformers-6e2d1a7d6b5a', 'https://www.youtube.com/playlist?list=PLo2EIpI_JMQvWfQndUesu0nPBAtZ9gP1o', 'https://github.com/huggingface/transformers/tree/main/examples'] },
          { id: 'llm-2-3', title: 'OpenAI API', status: 'not-started', resources: ['https://platform.openai.com/docs/', 'https://cookbook.openai.com/', 'https://towardsdatascience.com/a-comprehensive-guide-to-the-openai-api-for-developers-ce70df1267b8', 'https://www.youtube.com/watch?v=OdEqSyq-DD4', 'https://github.com/openai/openai-python'] },
          { id: 'llm-2-4', title: 'LangChain & LlamaIndex', status: 'not-started', resources: ['https://python.langchain.com/docs/', 'https://docs.llamaindex.ai/en/stable/', 'https://towardsdatascience.com/getting-started-with-langchain-a-beginners-guide-to-building-llm-powered-applications-95fc8898732c', 'https://www.deeplearning.ai/short-courses/langchain-for-llm-application-development/', 'https://github.com/langchain-ai/langchain'] }
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
        subtopics: [          { id: 'llm-3-1', title: 'Prompt Evaluation', status: 'not-started', resources: ['https://www.promptingguide.ai/', 'https://learnprompting.org/', 'https://towardsdatascience.com/prompt-engineering-101-introduction-and-resources-7fad93c47bbf', 'https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/', 'https://github.com/dair-ai/Prompt-Engineering-Guide'] },
          { id: 'llm-3-2', title: 'Hallucination & Mitigation', status: 'not-started', resources: ['https://arxiv.org/abs/2302.06476', 'https://towardsdatascience.com/llm-hallucinations-and-how-to-deal-with-them-4fba0b0d5a90', 'https://blog.langchain.dev/evaluating-and-mitigating-hallucinations-in-large-language-models/', 'https://www.ibm.com/blog/ai-hallucinations/', 'https://research.ibm.com/blog/what-are-ai-hallucinations'] },
          { id: 'llm-3-3', title: 'Red Teaming & Adversarial Testing', status: 'not-started', resources: ['https://www.microsoft.com/en-us/research/blog/red-teaming-language-models/', 'https://www.anthropic.com/index/red-teaming-language-models-with-language-models', 'https://towardsdatascience.com/red-teaming-for-generative-ai-safety-f4b4b7e11b60', 'https://arxiv.org/abs/2202.03286', 'https://blog.eleuther.ai/red-team/'] }
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
        subtopics: [          { id: 'app-1-1', title: 'Prompt Engineering', status: 'not-started', resources: ['https://www.promptingguide.ai/', 'https://learnprompting.org/', 'https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/', 'https://towardsdatascience.com/prompt-engineering-101-introduction-and-resources-7fad93c47bbf', 'https://github.com/dair-ai/Prompt-Engineering-Guide'] },
          { id: 'app-1-2', title: 'Chatbot Development', status: 'not-started', resources: ['https://platform.openai.com/docs/guides/gpt/chat-completions-api', 'https://www.deeplearning.ai/short-courses/building-systems-with-chatgpt/', 'https://towardsdatascience.com/how-to-build-a-chatbot-with-openai-gpt-3-and-python-a9a7b4b39b1', 'https://python.langchain.com/docs/use_cases/chatbots/', 'https://gradio.app/guides/creating-a-chatbot-fast'] },
          { id: 'app-1-3', title: 'Summarization & Translation', status: 'not-started', resources: ['https://huggingface.co/learn/nlp-course/chapter7/5', 'https://towardsdatascience.com/text-summarization-with-amazon-reviews-41801c2210b2', 'https://www.tensorflow.org/text/tutorials/nmt_with_attention', 'https://machinelearningmastery.com/encoder-decoder-attention-sequence-to-sequence-prediction/', 'https://huggingface.co/docs/transformers/tasks/summarization'] },
          { id: 'app-1-4', title: 'Content Generation', status: 'not-started', resources: ['https://www.deeplearning.ai/short-courses/building-systems-with-chatgpt/', 'https://towardsdatascience.com/how-to-use-gpt-3-for-content-creation-70c5b2b2d9b6', 'https://platform.openai.com/docs/guides/gpt/completions', 'https://www.jasper.ai/blog/ai-content-generation', 'https://blog.eleuther.ai/gpt3-creative-fiction/'] }
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
        subtopics: [          { id: 'app-2-1', title: 'Diffusion Models', status: 'not-started', resources: ['https://lilianweng.github.io/posts/2021-07-11-diffusion-models/', 'https://arxiv.org/abs/2006.11239', 'https://towardsdatascience.com/understanding-diffusion-models-a-unified-perspective-e420f4e3dcd3', 'https://huggingface.co/blog/annotated-diffusion', 'https://www.assemblyai.com/blog/diffusion-models-for-machine-learning-introduction/'] },
          { id: 'app-2-2', title: 'Stable Diffusion & DALL-E', status: 'not-started', resources: ['https://jalammar.github.io/illustrated-stable-diffusion/', 'https://stability.ai/stable-image', 'https://openai.com/dall-e-2', 'https://huggingface.co/docs/diffusers/index', 'https://towardsdatascience.com/stable-diffusion-using-hugging-face-501d8dbdd8'] },
          { id: 'app-2-3', title: 'Prompt Engineering for Images', status: 'not-started', resources: ['https://prompthero.com/stable-diffusion-prompt-guide', 'https://lexica.art/', 'https://www.midjourney.com/showcase/', 'https://towardsdatascience.com/prompt-engineering-for-ai-art-f9aed3da277d', 'https://github.com/willwulfken/MidJourney-Styles-and-Keywords-Reference'] },
          { id: 'app-2-4', title: 'Multimodal Models (CLIP, Flamingo)', status: 'not-started', resources: ['https://openai.com/research/clip', 'https://github.com/openai/CLIP', 'https://towardsdatascience.com/simple-implementation-of-openai-clip-model-a-tutorial-ace6ff01d9f2', 'https://deepmind.com/research/publications/2022/flamingo-a-visual-language-model-for-few-shot-learning', 'https://huggingface.co/docs/transformers/model_doc/clip'] }
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
        subtopics: [          { id: 'app-3-1', title: 'Audio Generation (TTS, Music)', status: 'not-started', resources: ['https://magenta.tensorflow.org/', 'https://github.com/jik876/hifi-gan', 'https://elevenlabs.io/', 'https://mubert.com/', 'https://www.speechify.com/'] },
          { id: 'app-3-2', title: 'Code Generation (Copilot, Codex)', status: 'not-started', resources: ['https://platform.openai.com/docs/guides/code', 'https://github.com/features/copilot', 'https://towardsdatascience.com/openai-codex-revolutionizing-code-generation-with-ai-c3d99ad66bb6', 'https://www.tabnine.com/', 'https://codeium.com/'] },
          { id: 'app-3-3', title: 'Video & Multimodal Synthesis', status: 'not-started', resources: ['https://research.runwayml.com/gen2', 'https://www.synthesia.io/', 'https://stability.ai/stable-video', 'https://pika.art/', 'https://lumalabs.ai/dream-machine'] }
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
        subtopics: [          { id: 'app-4-1', title: 'Model Serving (APIs, Containers)', status: 'not-started', resources: ['https://www.tensorflow.org/tfx/serving', 'https://pytorch.org/serve/', 'https://huggingface.co/docs/transformers/main_classes/pipelines', 'https://docs.docker.com/get-started/', 'https://kubernetes.io/docs/tutorials/'] },
          { id: 'app-4-2', title: 'Cloud GenAI Services', status: 'not-started', resources: ['https://cloud.google.com/vertex-ai', 'https://aws.amazon.com/bedrock/', 'https://azure.microsoft.com/en-us/products/ai-services/openai-service', 'https://cloud.google.com/ai-platform', 'https://www.ibm.com/cloud/watson-studio'] },
          { id: 'app-4-3', title: 'Monitoring & Observability', status: 'not-started', resources: ['https://www.mlflow.org/', 'https://neptune.ai/', 'https://wandb.ai/site', 'https://www.arize.com/', 'https://whylabs.ai/'] },
          { id: 'app-4-4', title: 'Cost Optimization', status: 'not-started', resources: ['https://aws.amazon.com/machine-learning/pricing/', 'https://cloud.google.com/vertex-ai/pricing', 'https://azure.microsoft.com/en-us/pricing/details/cognitive-services/', 'https://towardsdatascience.com/optimizing-costs-for-machine-learning-in-the-cloud-d99b2792c266', 'https://blog.runwayml.com/optimizing-inference-costs/'] }
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
        subtopics: [          { id: 'adv-1-1', title: 'RLHF Concepts', status: 'not-started', resources: ['https://huggingface.co/learn/nlp-course/chapter7/6', 'https://arxiv.org/abs/2203.02155', 'https://openai.com/research/learning-to-summarize-with-human-feedback', 'https://blog.anthropic.com/constitutional-ai-harmlessness-from-ai-feedback/', 'https://www.deeplearning.ai/short-courses/reinforcement-learning-from-human-feedback/'] },
          { id: 'adv-1-2', title: 'Reward Modeling', status: 'not-started', resources: ['https://arxiv.org/abs/2009.01325', 'https://towardsdatascience.com/reward-modeling-for-rlhf-9abc08c6b89e', 'https://blog.eleuther.ai/reward-modeling/', 'https://huggingface.co/blog/rlhf', 'https://spin.atomicobject.com/2023/02/06/reward-modeling-rlhf/'] },
          { id: 'adv-1-3', title: 'Human-in-the-Loop', status: 'not-started', resources: ['https://www.microsoft.com/en-us/research/blog/human-in-the-loop-machine-learning/', 'https://towardsdatascience.com/human-in-the-loop-machine-learning-f86c5364f3db', 'https://blog.labelbox.com/human-in-the-loop-machine-learning/', 'https://www.oreilly.com/radar/human-in-the-loop-machine-learning/', 'https://arxiv.org/abs/2108.00941'] }
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
        subtopics: [          { id: 'adv-2-1', title: 'RAG Architecture', status: 'not-started', resources: ['https://www.pinecone.io/learn/retrieval-augmented-generation/', 'https://arxiv.org/abs/2005.11401', 'https://towardsdatascience.com/retrieval-augmented-generation-rag-from-theory-to-langchain-implementation-4e9bd5f6a4f2', 'https://blog.langchain.dev/rag-from-scratch/', 'https://www.deeplearning.ai/short-courses/building-applications-vector-databases/'] },
          { id: 'adv-2-2', title: 'Vector Databases', status: 'not-started', resources: ['https://www.pinecone.io/', 'https://weaviate.io/', 'https://qdrant.tech/', 'https://www.trychroma.com/', 'https://towardsdatascience.com/vector-databases-101-1a92ff1b67b8'] },
          { id: 'adv-2-3', title: 'Document Indexing & Chunking', status: 'not-started', resources: ['https://python.langchain.com/docs/modules/data_connection/document_loaders/', 'https://towardsdatascience.com/chunking-strategies-for-llm-applications-8d1e2b99f7a7', 'https://www.llamaindex.ai/blog/evaluating-the-ideal-chunk-size-for-a-rag-system-using-llamaindex-6207e5d3fec5', 'https://blog.langchain.dev/how-to-chunk-text-data-a-deep-dive/', 'https://unstructured.io/'] }
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
        subtopics: [          { id: 'adv-3-1', title: 'GenAI Agents (AutoGPT, CrewAI)', status: 'not-started', resources: ['https://github.com/Significant-Gravitas/Auto-GPT', 'https://www.crewai.io/', 'https://github.com/microsoft/autogen', 'https://towardsdatascience.com/the-complete-guide-to-building-ai-agents-with-langchain-and-openai-ba39a6db04da', 'https://www.deeplearning.ai/short-courses/ai-agents-in-langgraph/'] },
          { id: 'adv-3-2', title: 'Tool Use & Plugins', status: 'not-started', resources: ['https://platform.openai.com/docs/plugins/introduction', 'https://python.langchain.com/docs/modules/agents/tools/', 'https://towardsdatascience.com/langchain-tools-and-toolkits-9350cd4bb70e', 'https://blog.langchain.dev/tool-use-and-agents/', 'https://www.anthropic.com/news/tool-use-ga'] },
          { id: 'adv-3-3', title: 'Orchestration & Workflow Engines', status: 'not-started', resources: ['https://python.langchain.com/docs/modules/agents/', 'https://github.com/PrefectHQ/prefect', 'https://airflow.apache.org/', 'https://github.com/langchain-ai/langgraph', 'https://towardsdatascience.com/orchestrating-ai-workflows-with-langchain-and-prefect-c9a3d0b13dcd'] }
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
        subtopics: [          { id: 'adv-4-1', title: 'Scaling Laws & Infrastructure', status: 'not-started', resources: ['https://arxiv.org/abs/2001.08361', 'https://www.anthropic.com/news/scaling-laws-for-neural-language-models', 'https://towardsdatascience.com/scaling-laws-for-neural-language-models-70b3b0c0522c', 'https://blog.eleuther.ai/scaling-laws/', 'https://openai.com/research/scaling-laws-for-neural-language-models'] },
          { id: 'adv-4-2', title: 'Open Source LLMs', status: 'not-started', resources: ['https://huggingface.co/blog/open_llm_leaderboard', 'https://ollama.ai/', 'https://github.com/vllm-project/vllm', 'https://www.together.ai/', 'https://towardsdatascience.com/the-open-source-ai-revolution-a-comprehensive-guide-to-local-llms-c2ed10345a87'] },
          { id: 'adv-4-3', title: 'Recent Research & Trends', status: 'not-started', resources: ['https://arxiv.org/list/cs.AI/recent', 'https://paperswithcode.com/', 'https://github.com/Hannibal046/Awesome-LLM', 'https://www.nature.com/subjects/computer-science/artificial-intelligence', 'https://blog.research.google/search/label/Machine%20Learning'] }
        ]
      }
    ]
  }
};

export default genAIRoadmapData;
