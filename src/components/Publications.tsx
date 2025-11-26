const publications = [
  {
    title: "When Narrower is Better: The Narrow Width Limit of Bayesian Parallel Branching Neural Networks",
    authors: "Zechen Zhang, Haim Sompolinsky",
    venue: "ICLR 2025",
    description: "Challenging the notion that larger widths improve generalization by investigating the narrow width limit of branching networks.",
    link: "https://arxiv.org/abs/2407.18807",
    illustration: "graph-network",
    featured: true,
  },
  {
    title: "New News: System-2 Fine-tuning for Robust Integration of New Knowledge",
    authors: "Core Francisco Park*, Zechen Zhang*, Hidenori Tanaka",
    venue: "In Review, ICLR 2026",
    description: "How language models can robustly integrate new information without catastrophic forgetting.",
    link: "https://arxiv.org/abs/2505.01812",
    illustration: "brain-update",
    featured: true,
  },
  {
    title: "Linear Latent World Models in Simple Transformers: A Case Study on Othello-GPT",
    authors: "Dean Hazineh*, Zechen Zhang*, Jeffrey Chiu",
    venue: "NeurIPS SoLaR 2023",
    description: "Investigating how transformers build internal world models through the lens of Othello.",
    link: "https://arxiv.org/abs/2310.07582",
    illustration: "world-model",
    featured: true,
  },
  {
    title: "Without Safeguards, AI-Biology Integration Risks Accelerating Future Pandemics",
    authors: "Dianzhuo Wang*, Marian Huot*, Zechen Zhang, et al.",
    venue: "Frontiers in Microbiology · NeurIPS AI BioSafety 2025 (Oral)",
    description: "Examining biosecurity risks at the intersection of AI and biological research.",
    link: "https://www.researchgate.net/publication/387933765",
    illustration: "biosafety",
    featured: true,
  },
  {
    title: "MEGa: Memory Embedded in Gated LLMs",
    authors: "Xu Pan*, Ely Hahami*, Zechen Zhang, Haim Sompolinsky",
    venue: "In Submission, Nature Communications 2025",
    description: "Understanding memory mechanisms in gated language model architectures.",
    link: "https://arxiv.org/abs/2504.21239",
    illustration: "memory",
    featured: true,
  },
  {
    title: "A Language Model Based Agent for Nitrogen-Vacancy Center Sensing in Quantum Physics",
    authors: "Zechen Zhang, Ruolan Xue, Amir Yacoby",
    venue: "In Preparation, 2025",
    description: "Applying AI agents to quantum sensing experiments with NV centers.",
    link: "#",
    illustration: "quantum",
    featured: false,
  },
  {
    title: "Research Tree Bench: Benchmarking LLMs in Theoretical Research",
    authors: "Zechen Zhang, Haim Sompolinsky",
    venue: "In Preparation, 2025",
    description: "A benchmark for evaluating language models on theoretical research capabilities.",
    link: "#",
    illustration: "benchmark",
    featured: false,
  },
  {
    title: "Humanity's Last Exam",
    authors: "Contributor",
    venue: "2025",
    description: "Contributing to the frontier AI evaluation benchmark.",
    link: "https://arxiv.org/abs/2501.14249",
    illustration: "exam",
    featured: false,
  },
];

function PaperIllustration({ type }: { type: string }) {
  const illustrations: Record<string, React.ReactNode> = {
    "graph-network": (
      <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="0.5">
        {/* Branching graph neural network */}
        <circle cx="50" cy="15" r="8" />
        <circle cx="25" cy="45" r="6" />
        <circle cx="50" cy="45" r="6" />
        <circle cx="75" cy="45" r="6" />
        <circle cx="15" cy="75" r="5" />
        <circle cx="35" cy="75" r="5" />
        <circle cx="50" cy="75" r="5" />
        <circle cx="65" cy="75" r="5" />
        <circle cx="85" cy="75" r="5" />
        {/* Connections */}
        <line x1="50" y1="23" x2="25" y2="39" opacity="0.4" />
        <line x1="50" y1="23" x2="50" y2="39" opacity="0.4" />
        <line x1="50" y1="23" x2="75" y2="39" opacity="0.4" />
        <line x1="25" y1="51" x2="15" y2="70" opacity="0.3" />
        <line x1="25" y1="51" x2="35" y2="70" opacity="0.3" />
        <line x1="50" y1="51" x2="50" y2="70" opacity="0.3" />
        <line x1="75" y1="51" x2="65" y2="70" opacity="0.3" />
        <line x1="75" y1="51" x2="85" y2="70" opacity="0.3" />
        {/* Central dots */}
        <circle cx="50" cy="15" r="3" fill="currentColor" opacity="0.6" />
      </svg>
    ),
    "brain-update": (
      <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="0.5">
        {/* Brain outline */}
        <path d="M30 50 Q20 30 35 20 Q50 10 65 20 Q80 30 70 50 Q80 70 65 80 Q50 90 35 80 Q20 70 30 50" />
        {/* Neural connections */}
        <circle cx="40" cy="35" r="4" fill="currentColor" opacity="0.3" />
        <circle cx="60" cy="35" r="4" fill="currentColor" opacity="0.3" />
        <circle cx="50" cy="55" r="4" fill="currentColor" opacity="0.3" />
        <circle cx="35" cy="65" r="3" fill="currentColor" opacity="0.2" />
        <circle cx="65" cy="65" r="3" fill="currentColor" opacity="0.2" />
        {/* Update arrow */}
        <path d="M85 25 L95 35 L85 45" strokeWidth="1.5" />
        <line x1="75" y1="35" x2="95" y2="35" strokeWidth="1.5" />
        {/* New info symbol */}
        <circle cx="75" cy="35" r="8" strokeDasharray="2 2" />
      </svg>
    ),
    "memory": (
      <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="0.5">
        {/* Memory layers */}
        <rect x="20" y="20" width="60" height="15" rx="2" />
        <rect x="20" y="42" width="60" height="15" rx="2" />
        <rect x="20" y="64" width="60" height="15" rx="2" />
        {/* Gate symbols */}
        <circle cx="85" cy="27" r="5" />
        <circle cx="85" cy="49" r="5" />
        <circle cx="85" cy="71" r="5" />
        {/* Gate lines */}
        <line x1="80" y1="27" x2="90" y2="27" />
        <line x1="85" y1="22" x2="85" y2="32" />
        {/* Memory cells */}
        <circle cx="35" cy="27" r="3" fill="currentColor" opacity="0.4" />
        <circle cx="50" cy="27" r="3" fill="currentColor" opacity="0.6" />
        <circle cx="65" cy="27" r="3" fill="currentColor" opacity="0.3" />
        <circle cx="35" cy="49" r="3" fill="currentColor" opacity="0.5" />
        <circle cx="50" cy="49" r="3" fill="currentColor" opacity="0.4" />
        <circle cx="65" cy="49" r="3" fill="currentColor" opacity="0.7" />
      </svg>
    ),
    "world-model": (
      <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="0.5">
        {/* Othello board grid */}
        <rect x="20" y="20" width="60" height="60" />
        {[0, 1, 2, 3].map(i => (
          <g key={i}>
            <line x1={20 + i * 15} y1="20" x2={20 + i * 15} y2="80" opacity="0.3" />
            <line x1="20" y1={20 + i * 15} x2="80" y2={20 + i * 15} opacity="0.3" />
          </g>
        ))}
        {/* Pieces */}
        <circle cx="35" cy="35" r="5" fill="currentColor" />
        <circle cx="50" cy="50" r="5" fill="currentColor" />
        <circle cx="50" cy="35" r="5" strokeWidth="1" />
        <circle cx="35" cy="50" r="5" strokeWidth="1" />
        {/* Linear representation arrow */}
        <path d="M85 40 L95 50 L85 60" strokeWidth="1" />
        <line x1="88" y1="50" x2="95" y2="50" strokeWidth="1" />
      </svg>
    ),
    "biosafety": (
      <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="0.5">
        {/* DNA helix */}
        <path d="M30 20 Q50 35 30 50 Q10 65 30 80" strokeWidth="1" />
        <path d="M45 20 Q25 35 45 50 Q65 65 45 80" strokeWidth="1" />
        {/* Cross bars */}
        <line x1="30" y1="25" x2="45" y2="25" opacity="0.4" />
        <line x1="25" y1="40" x2="50" y2="40" opacity="0.4" />
        <line x1="30" y1="55" x2="45" y2="55" opacity="0.4" />
        <line x1="25" y1="70" x2="50" y2="70" opacity="0.4" />
        {/* AI chip */}
        <rect x="60" y="35" width="30" height="30" rx="3" />
        <circle cx="75" cy="50" r="8" />
        <circle cx="75" cy="50" r="3" fill="currentColor" opacity="0.5" />
        {/* Warning */}
        <path d="M75 20 L80 10 L70 10 Z" fill="currentColor" opacity="0.3" />
      </svg>
    ),
    "quantum": (
      <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="0.5">
        {/* NV center diamond lattice */}
        <polygon points="50,15 85,50 50,85 15,50" strokeWidth="1" />
        <polygon points="50,30 70,50 50,70 30,50" strokeDasharray="2 2" />
        {/* Nitrogen atom */}
        <circle cx="50" cy="50" r="6" fill="currentColor" opacity="0.6" />
        {/* Vacancy */}
        <circle cx="50" cy="35" r="4" strokeDasharray="2 2" />
        {/* Spin arrows */}
        <path d="M60 45 L70 35" strokeWidth="1" />
        <path d="M68 35 L70 35 L70 37" strokeWidth="1" />
        <path d="M40 55 L30 65" strokeWidth="1" />
        <path d="M32 65 L30 65 L30 63" strokeWidth="1" />
      </svg>
    ),
    "benchmark": (
      <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="0.5">
        {/* Tree structure */}
        <circle cx="50" cy="20" r="8" />
        <circle cx="25" cy="50" r="6" />
        <circle cx="75" cy="50" r="6" />
        <circle cx="15" cy="80" r="5" />
        <circle cx="35" cy="80" r="5" />
        <circle cx="65" cy="80" r="5" />
        <circle cx="85" cy="80" r="5" />
        {/* Branches */}
        <line x1="50" y1="28" x2="25" y2="44" opacity="0.4" />
        <line x1="50" y1="28" x2="75" y2="44" opacity="0.4" />
        <line x1="25" y1="56" x2="15" y2="75" opacity="0.3" />
        <line x1="25" y1="56" x2="35" y2="75" opacity="0.3" />
        <line x1="75" y1="56" x2="65" y2="75" opacity="0.3" />
        <line x1="75" y1="56" x2="85" y2="75" opacity="0.3" />
        {/* Checkmarks */}
        <path d="M48 18 L50 22 L54 16" strokeWidth="1" />
      </svg>
    ),
    "exam": (
      <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="0.5">
        {/* Paper */}
        <rect x="25" y="15" width="50" height="70" rx="2" />
        {/* Lines */}
        <line x1="32" y1="30" x2="68" y2="30" opacity="0.3" />
        <line x1="32" y1="40" x2="68" y2="40" opacity="0.3" />
        <line x1="32" y1="50" x2="68" y2="50" opacity="0.3" />
        <line x1="32" y1="60" x2="55" y2="60" opacity="0.3" />
        {/* Checkboxes */}
        <rect x="32" y="68" width="8" height="8" />
        <rect x="45" y="68" width="8" height="8" />
        <rect x="58" y="68" width="8" height="8" />
        {/* Check */}
        <path d="M34 72 L36 74 L38 70" strokeWidth="1" />
        {/* Question mark */}
        <path d="M45 25 Q50 20 55 25 Q55 30 50 32 L50 35" strokeWidth="1" />
        <circle cx="50" cy="38" r="1" fill="currentColor" />
      </svg>
    ),
  };

  return illustrations[type] || illustrations["graph-network"];
}

export default function Publications() {
  const featured = publications.filter(p => p.featured);
  const other = publications.filter(p => !p.featured);

  return (
    <section id="publications" className="py-32 px-6 bg-foreground/[0.02]">
      <div className="max-w-4xl mx-auto">
        <p className="text-sm text-accent uppercase tracking-widest mb-4">
          Research
        </p>
        <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight mb-6">
          Publications
        </h2>
        <p className="text-muted mb-16 max-w-2xl">
          From statistical mechanics of neural networks to interpretability and AI agents for science.
        </p>

        {/* Featured papers */}
        <div className="space-y-8 mb-16">
          {featured.map((pub, index) => (
            <a
              key={index}
              href={pub.link}
              target={pub.link !== "#" ? "_blank" : undefined}
              rel={pub.link !== "#" ? "noopener noreferrer" : undefined}
              className="group grid md:grid-cols-[100px_1fr] gap-6 items-start p-6 -mx-6 rounded-lg hover:bg-foreground/[0.03] transition-colors"
            >
              {/* Illustration */}
              <div className="w-20 h-20 md:w-full md:h-24 text-muted group-hover:text-foreground transition-colors">
                <PaperIllustration type={pub.illustration} />
              </div>

              {/* Content */}
              <div>
                <div className="flex flex-wrap gap-2 mb-2">
                  {pub.venue.split(" · ").map((v, i) => (
                    <span key={i} className="text-xs px-2 py-0.5 bg-accent/10 text-accent rounded">
                      {v}
                    </span>
                  ))}
                </div>
                <h3 className="font-serif text-xl font-medium mb-2 group-hover:text-accent transition-colors">
                  {pub.title}
                </h3>
                <p className="text-sm text-muted mb-2">{pub.authors}</p>
                <p className="text-muted/80 text-sm leading-relaxed">
                  {pub.description}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Other papers */}
        <div className="border-t border-border pt-12">
          <h3 className="text-sm text-muted uppercase tracking-widest mb-8">Other Publications</h3>
          <div className="space-y-6">
            {other.map((pub, index) => (
              <a
                key={index}
                href={pub.link}
                target={pub.link !== "#" ? "_blank" : undefined}
                rel={pub.link !== "#" ? "noopener noreferrer" : undefined}
                className="group flex items-start gap-4 p-4 -mx-4 rounded-lg hover:bg-foreground/[0.03] transition-colors"
              >
                <div className="w-12 h-12 flex-shrink-0 text-muted group-hover:text-foreground transition-colors">
                  <PaperIllustration type={pub.illustration} />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-sm group-hover:text-accent transition-colors line-clamp-1">
                    {pub.title}
                  </h4>
                  <p className="text-xs text-muted mt-1">{pub.venue}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <a
            href="https://scholar.google.com/citations?user=GZYRzKoAAAAJ"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors"
          >
            View all on Google Scholar
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
