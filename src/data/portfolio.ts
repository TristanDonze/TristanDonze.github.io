export interface Portfolio {
  title: string;
  description: string;
  technologies?: string[];
  imageUrl?: string;
  projectUrl?: string;
  codeUrl?: string;
}

export const portfolioData: Portfolio[] = [
  {
    title: "Deep Reinforcement Learning Blackbox Challenge",
    description:
      "Built and trained RL agents to solve a fully unknown environment with highly noisy observations and no access to dynamics. Implemented PPO and A2C with GAE, entropy scheduling, KL early stopping, and cosine annealing. Designed a compact shared encoder to maximize representational efficiency under strict model size limits. Achieved top performance in the challenge.",
    technologies: ["Python", "PyTorch", "Proximal Policy Optimization"],
    codeUrl: "https://github.com/TristanDonze/Deep-RL-Blackbox-Challenge",
  },
  {
    title: "Political Speech Imitation and Fallacy Detection",
    description:
      "Fine-tuned multiple LLMs using QLoRA to imitate political speech styles and detect logical fallacies across large argument corpora. Trained models on 16k rhetorical instruction pairs and evaluated fallacy prediction across 9 reasoning error types. Analyzed stylistic shifts, fallacy frequency, and per-class model performance.",
    technologies: ["Python", "HuggingFace", "PEFT", "QLoRA", "Rhetoric Analysis"],
    codeUrl: "https://github.com/TristanDonze/LLM-Fallacy-Detector",
  },
  {
    title: "Football Event Detection from Tweets",
    description:
      "Detected key events in World Cup matches from multilingual Twitter streams by classifying short time windows during the match. Experimented with BERT fine-tuning, embedding-based classifiers, a MLP using top-n word importance matrices and a Temporal Convolutional Network. The best performance was obtained with the TCN and the MLP.",
    technologies: ["Python", "PyTorch", "BERT", "TCN", "Temporal Series"],
    codeUrl: "https://github.com/TristanDonze/Data-Challenge-Football-Event-Classifier",
  },
];
