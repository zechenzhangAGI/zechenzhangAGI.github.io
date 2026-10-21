// Everything the page says lives here. Venues, numbers and author lists were checked
// against arXiv, Crossref, OpenReview and the thesis fact sheet in October 2026.

export const me = "Zechen Zhang";

export const links = {
  email: "zechen@orchestra-research.com",
  scholar: "https://scholar.google.com/citations?user=GZYRzKoAAAAJ",
  github: "https://github.com/zechenzhangAGI",
  x: "https://x.com/ZechenZhang5",
  linkedin: "https://www.linkedin.com/in/zechen-zhang-a75b4a327/",
  calendly: "https://calendly.com/zechen_zhang/chat",
  orchestra: "https://www.orchestra-research.com",
  blog: "https://www.orchestra-research.com/perspectives",
};

export type Link = { label: string; href: string };

export const now: { tag: string; name: string; text: string; href?: string }[] = [
  {
    tag: "NeurIPS 2026",
    name: "Agent-Native Research Artifacts",
    text: " (ARA) was accepted: a format for research that agents can read, run and extend.",
    href: "https://arxiv.org/abs/2604.24658",
  },
  {
    tag: "Under review",
    name: "ResearchTree",
    text: ", which measures how much of a published paper a language model can reconstruct on its own.",
    href: "https://researchtree.vercel.app",
  },
  {
    tag: "In progress",
    name: "SimLab",
    text: ": simulated labs built on real data, for measuring an agent's research judgment and taste.",
  },
];

export type Paper = {
  title: string;
  authors: string;
  venue: string;
  year: number;
  accepted?: boolean;
  role?: string;
  note?: string;
  summary?: string;
  figure?: { src: string; alt: string };
  links: Link[];
};

export const papers: Paper[] = [
  {
    title: "The Last Human-Written Paper: Agent-Native Research Artifacts",
    authors: "Jiachen Liu, Jiaxin Pei, Jintao Huang, et al., Zechen Zhang",
    role: "last author",
    venue: "NeurIPS 2026",
    year: 2026,
    accepted: true,
    summary:
      "A paper flattens a branching project into one winning story and leaves out much of what it takes to reproduce it. ARA packages the work as layers an agent can act on: claims, runnable code, the full exploration tree with its dead ends, and the evidence. Given an ARA instead of the PDF, agents answer 94% of questions about the work rather than 72%.",
    figure: {
      src: "/figures/ara.webp",
      alt: "Left: a PDF paper, which drops decision history, failed experiments and code. Right: ARA's four layers for logic, source, exploration trace and evidence.",
    },
    links: [
      { label: "arXiv", href: "https://arxiv.org/abs/2604.24658" },
      { label: "overview", href: "https://www.orchestra-research.com/ara" },
      { label: "template", href: "https://github.com/Orchestra-Research/Agent-Native-Research-Artifact-template" },
    ],
  },
  {
    title: "ResearchTree: Measuring the Research Horizon of Language Models",
    authors: "Zechen Zhang et al.",
    role: "lead author",
    venue: "Under review",
    year: 2026,
    summary:
      "Turns a theoretical paper into a tree of graded problems, from its main result down to atomic steps, and asks how large a piece of research a model can reconstruct alone. Each node is answered blind and graded against the paper's own derivation. Split into steps, frontier models recover nearly all of a paper; asked for the main result at once, far less.",
    figure: {
      src: "/figures/researchtree.webp",
      alt: "A scored problem tree for one paper, from the whole result down to 42 atomic steps, colored by the weakest model that solves each node.",
    },
    links: [{ label: "project page", href: "https://researchtree.vercel.app" }],
  },
  {
    title: "Sci-Reasoning: A Dataset Decoding AI Innovation Patterns",
    authors: "Jiachen Liu, Maestro Harmon, Zechen Zhang",
    role: "last author",
    venue: "arXiv",
    year: 2026,
    summary:
      "Traces 3,819 Oral and Spotlight papers from NeurIPS, ICML and ICLR (2023–2025) back to the work they build on, to capture the reasoning behind AI breakthroughs. Fifteen thinking patterns emerge; three of them (gap-driven reframing, cross-domain synthesis and representation shift) account for 52.7% of papers.",
    figure: {
      src: "/figures/scireasoning.webp",
      alt: "Share of 3,819 papers using each of 15 thinking patterns; gap-driven reframing leads at 24.2%, cross-domain synthesis follows at 18.0%.",
    },
    links: [
      { label: "arXiv", href: "https://arxiv.org/abs/2601.04577" },
      { label: "story", href: "https://www.orchestra-research.com/perspectives/sci-reasoning-story" },
    ],
  },
  {
    title: "Humanity's Last Exam",
    authors: "Long Phan, Alice Gatti, … , Dan Hendrycks (about 1,100 authors, including Zechen Zhang)",
    role: "contributor",
    venue: "Nature",
    year: 2026,
    accepted: true,
    summary:
      "2,500 expert-written questions across dozens of subjects, each with an unambiguous, verifiable answer that cannot be looked up quickly. Frontier models score low on it and are poorly calibrated about their own answers.",
    figure: {
      src: "/figures/hle.webp",
      alt: "Sample questions from Humanity's Last Exam, in classics, ecology, mathematics and computer science.",
    },
    links: [
      { label: "paper", href: "https://doi.org/10.1038/s41586-025-09962-4" },
      { label: "arXiv", href: "https://arxiv.org/abs/2501.14249" },
    ],
  },
  {
    title: "Without Safeguards, AI–Biology Integration Risks Accelerating Future Pandemics",
    authors: "Dianzhuo Wang*, Marian Huot*, Zechen Zhang, Kaiyi Jiang, Eugene Shakhnovich, Kevin Esvelt",
    venue: "Frontiers in Microbiology",
    year: 2026,
    accepted: true,
    note: "Best Paper, NeurIPS 2025 AI BioSafety Workshop",
    summary:
      "Protein language models inside automated labs can now design and optimize proteins in closed loops, which speeds up therapeutics and also creates dual-use risks. We map that progress, propose a capability-oriented framework for integrated AI–biology systems, and outline training- and inference-time safeguards.",
    figure: {
      src: "/figures/aibio.webp",
      alt: "Correlation between predicted and measured mutational effects on ProteinGym, rising with each model's release year from 2018 to 2025.",
    },
    links: [{ label: "paper", href: "https://doi.org/10.3389/fmicb.2025.1734561" }],
  },
  {
    title: "New News: System-2 Fine-tuning for Robust Integration of New Knowledge",
    authors: "Core Francisco Park*, Zechen Zhang*, Hidenori Tanaka",
    role: "co-first author",
    venue: "arXiv",
    year: 2025,
    summary:
      "Language models use a new fact well when it is in their context, but naive fine-tuning on it teaches them poorly. Letting the model rehearse the news itself (generate questions and answers with the news in context, then train without it) closes much of the gap. On Qwen2.5-14B: 70% with self-generated QA, 39% with naive fine-tuning, 91% with the news in context.",
    figure: {
      src: "/figures/newnews.webp",
      alt: "Accuracy on questions about new facts for Qwen2.5-14B-Instruct: 18% before fine-tuning, 39% after naive fine-tuning, 70% after Self-QA fine-tuning, 91% with the news in context.",
    },
    links: [{ label: "arXiv", href: "https://arxiv.org/abs/2505.01812" }],
  },
  {
    title: "Memorization and Knowledge Injection in Gated LLMs",
    authors: "Xu Pan*, Ely Hahami*, Zechen Zhang, Haim Sompolinsky",
    venue: "arXiv",
    year: 2025,
    summary:
      "Stores each new memory in its own gated low-rank weights; at inference a gate activates the relevant memories by matching the query to stored embeddings. The model can recall whole memories and answer questions about them, with less catastrophic forgetting than baseline methods.",
    figure: {
      src: "/figures/mega.webp",
      alt: "MEGa pipeline: each memory is fine-tuned into its own LoRA adapter, and at inference a gate weights the adapters by query–memory embedding similarity.",
    },
    links: [{ label: "arXiv", href: "https://arxiv.org/abs/2504.21239" }],
  },
  {
    title: "When Narrower is Better: The Narrow Width Limit of Bayesian Parallel Branching Neural Networks",
    authors: "Zechen Zhang, Haim Sompolinsky",
    role: "first author",
    venue: "ICLR 2025",
    year: 2025,
    accepted: true,
    summary:
      "The usual intuition is that wider networks generalize better. In networks with parallel branches, statistical mechanics shows a different regime: as width shrinks, the branches break symmetry and specialize, their norms come to reflect the data rather than the prior, and where the error is bias-limited the narrow network does better than or as well as the wide one.",
    figure: {
      src: "/figures/narrow.webp",
      alt: "Squared branch norms against width N: two branches that are equal at large width split apart as the network narrows. Theory curves match sampling.",
    },
    links: [{ label: "arXiv", href: "https://arxiv.org/abs/2407.18807" }],
  },
  {
    title: "Linear Latent World Models in Simple Transformers: A Case Study on Othello-GPT",
    authors: "Dean S. Hazineh*, Zechen Zhang*, Jeffery Chiu",
    role: "co-first author",
    venue: "NeurIPS 2023 SoLaR Workshop",
    year: 2023,
    summary:
      "Small transformers trained only on legal Othello moves encode the board linearly, and far more cleanly relative to the player to move (mine and yours, up to 99.5% probe accuracy) than as black and white (about 75%), as Nanda et al. first observed. We use interventions to test when the model actually relies on that representation.",
    figure: {
      src: "/figures/othello.webp",
      alt: "Othello boards after the first three moves, shown as black and white (top) and in the mine-and-yours representation (bottom).",
    },
    links: [
      { label: "arXiv", href: "https://arxiv.org/abs/2310.07582" },
      { label: "code", href: "https://github.com/zechenzhangAGI/Emergent-World-Representations-Othello" },
    ],
  },
];

export type Project = {
  id?: string;
  name: string;
  role?: string;
  status?: string;
  text: string;
  links: Link[];
};

export const projects: Project[] = [
  {
    id: "orchestra",
    name: "Orchestra",
    role: "Founder",
    text: "An AI-native research environment. Scientists set the direction and agents carry out the steps: literature, code and experiments. Every project is kept as an exploration tree, dead ends included.",
    links: [{ label: "orchestra-research.com", href: "https://www.orchestra-research.com" }],
  },
  {
    name: "AI-Research-SKILLs",
    status: "13k+ stars",
    text: "An open-source library of 98 skills that turn coding agents such as Claude Code, Codex and Gemini into research engineers, from running GRPO to writing the paper.",
    links: [{ label: "GitHub", href: "https://github.com/Orchestra-Research/AI-Research-SKILLs" }],
  },
  {
    name: "ResearchTree",
    status: "Under review",
    text: "The benchmark above, with an explorer for browsing real problem trees and every model's graded answers.",
    links: [{ label: "researchtree.vercel.app", href: "https://researchtree.vercel.app" }],
  },
  {
    name: "SimLab",
    status: "In progress",
    text: "Simulated labs built on real experimental data. An agent spends a fixed budget on cheap or expensive experiments and is scored against what really happened, which tests research judgment and taste rather than recall.",
    links: [],
  },
];

export const earlierProjects: Project[] = [
  {
    name: "Quantum sensing agent",
    text: "A language-model agent that runs NV-center experiments (autocalibration, Rabi, ESR), with Ruolan Xue and Amir Yacoby.",
    links: [{ label: "GitHub", href: "https://github.com/zechenzhangAGI/quantum-sensing-agent" }],
  },
  {
    name: "Harvard Physics Lab Hub",
    text: "Helps Harvard undergraduates find physics research labs.",
    links: [{ label: "harvardphysics.org", href: "https://harvardphysics.org" }],
  },
  {
    name: "Galileo, Return Science to the Curious",
    text: "Orchestra's launch film, made with Veo 3.1 and Claude.",
    links: [
      { label: "film", href: "https://www.youtube.com/watch?v=BPOW0qew_gQ" },
      { label: "GitHub", href: "https://github.com/zechenzhangAGI/vibe-filmmaking-veo3-claude" },
    ],
  },
  {
    name: "Random AI Chat Room",
    text: "Chat with any model in character.",
    links: [{ label: "app", href: "https://random-ai-chat-room.vercel.app" }],
  },
];

export type Post = {
  date: string;
  title: string;
  href: string;
  where: string;
  kind: string;
  summary: string;
  image?: string;
};

export const writing: Post[] = [
  {
    date: "2026-04",
    title: "The Last Human-Written Paper",
    href: "https://www.orchestra-research.com/ara",
    where: "Orchestra",
    kind: "Deep dive",
    summary: "Why papers should become packages that agents can understand, reproduce and extend.",
    image: "/figures/ara.webp",
  },
  {
    date: "2026-04",
    title: "Introducing the New Orchestra",
    href: "https://www.orchestra-research.com/perspectives/introducing-new-orchestra",
    where: "Orchestra",
    kind: "Product",
    summary: "An AI-native research IDE, built for the messy, open-ended nature of real discovery.",
    image: "/writing/orchestra.webp",
  },
  {
    date: "2025-11",
    title: "Vibe Fine-tuning LLMs",
    href: "https://www.orchestra-research.com/perspectives/LLM-with-Orchestra",
    where: "Orchestra",
    kind: "Case study",
    summary: "Reproducing Thinking Machines Lab's LoRA results in a day by prompting Orchestra in plain language.",
    image: "/writing/vibe-finetuning.webp",
  },
  {
    date: "2025-11",
    title: "Agent-Oriented Compute",
    href: "https://www.orchestra-research.com/perspectives/agent-oriented-compute",
    where: "Orchestra",
    kind: "Deep dive",
    summary: "What is the most natural infrastructure for AI agents that run scientific experiments?",
    image: "/writing/agent-oriented-compute.webp",
  },
  {
    date: "2025-11",
    title: "AI Research Engineering Skills",
    href: "https://www.orchestra-research.com/perspectives/ai-research-skills",
    where: "Orchestra",
    kind: "Deep dive",
    summary: "Modular knowledge packages that let AI agents run real research experiments.",
    image: "/writing/ai-research-skills.webp",
  },
  {
    date: "2022",
    title: "Science for the Possible World",
    href: "https://www.lesswrong.com/posts/kDJtsGMX7YkYSEwqH/science-for-the-possible-world",
    where: "LessWrong",
    kind: "Essay",
    summary: "As more of life moves into digital worlds, a science of the rules that generate complexity there.",
  },
];

export const education = [
  { years: "2019–", what: "PhD, Physics", where: "Harvard University", detail: "Advisor: Haim Sompolinsky. Currently on leave." },
  { years: "2018–19", what: "MASt, Mathematics (Part III)", where: "University of Cambridge" },
  { years: "2016–18", what: "BA, Physics (Honors), minor in Philosophy", where: "Swarthmore College" },
];
