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
      "Papers are written for human readers: one tidy story, with the dead ends and the tricks that made it work cut out. That is exactly what an agent needs to build on the work. ARA is a format for research that agents can read, run and extend, with the whole exploration kept in, failures included.",
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
      "Can a language model redo a published piece of research on its own? We break a paper into a tree of problems, from the main result down to small steps, and grade the model at every level. Models handle almost every step, but struggle to put the steps together into the whole result.",
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
      "Where do good ideas in AI research come from? We traced top NeurIPS, ICML and ICLR papers back to the work they built on and mapped the reasoning in between. A few recurring moves explain more than half of them: reframing a known gap, borrowing from another field, changing the representation.",
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
      "A final exam for AI, written by experts at the edge of their fields: questions with clear answers that you can't just look up. When it came out, the best models failed most of it and were confident anyway.",
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
      "Protein language models wired into automated labs can now design proteins in a closed loop, with little human input. That is great news for drug and vaccine discovery, and worrying for biosecurity. We map where the field is and propose how to evaluate these systems and build safeguards into them.",
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
      "Tell a language model a new fact in its prompt and it reasons with it well. Fine-tune it on the same fact and it does much worse. Our fix borrows from how people study: the model quizzes itself with the news in view, then trains on its own notes. A surprise along the way: if the news is in the context during training, the model learns very little.",
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
      "Can a language model remember new events the way we do, by learning them rather than looking them up? MEGa writes each memory into its own small set of weights, and a gate picks the right ones when a question comes in, loosely like the brain's complementary memory systems. It recalls new memories with less forgetting of old ones.",
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
      "The usual rule is that wider networks generalize better. We work out, with statistical mechanics, a regime where narrow networks with parallel branches match or beat wide ones: the branches stop being interchangeable, and each one specializes to structure in the data.",
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
      "A transformer that only ever sees lists of Othello moves still builds a picture of the board inside. As Nanda et al. found, it pictures the board as mine and yours, relative to the player about to move, not as black and white. We trace this picture across small models and edit it to test when the model actually uses it.",
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
