const publications = [
  {
    title: "AI co-scientist",
    venue: "Google DeepMind, 2025",
    description: "Collaborative AI system for scientific research assistance.",
    link: "https://storage.googleapis.com/coscientist_paper/ai_coscientist.pdf",
    illustration: "neural-network",
  },
  {
    title: "Gemini Robotics",
    venue: "Google DeepMind, 2025",
    description: "Bringing AI into the physical world through advanced robotics.",
    link: "https://arxiv.org/abs/2503.20020",
    illustration: "robot",
  },
  {
    title: "Scaling Retrieval-Based Language Models",
    venue: "NeurIPS 2024",
    description: "Improving language model performance through retrieval augmentation.",
    link: "https://arxiv.org/abs/2407.12854",
    illustration: "database",
  },
  {
    title: "Holographic Tensor Network Models",
    venue: "Physical Review Research, 2022",
    description: "Quantum gravity and tensor networks in theoretical physics.",
    link: "https://scholar.google.com/citations?view_op=view_citation&citation_for_view=GZYRzKoAAAAJ:u5HHmVD_uO8C",
    illustration: "quantum",
  },
];

function PaperIllustration({ type }: { type: string }) {
  const illustrations: Record<string, React.ReactNode> = {
    "neural-network": (
      <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="0.5">
        {/* Input layer */}
        <circle cx="20" cy="25" r="6" />
        <circle cx="20" cy="50" r="6" />
        <circle cx="20" cy="75" r="6" />
        {/* Hidden layer */}
        <circle cx="50" cy="30" r="6" />
        <circle cx="50" cy="50" r="6" />
        <circle cx="50" cy="70" r="6" />
        {/* Output layer */}
        <circle cx="80" cy="40" r="6" />
        <circle cx="80" cy="60" r="6" />
        {/* Connections */}
        {[25, 50, 75].map(y1 => [30, 50, 70].map(y2 => (
          <line key={`${y1}-${y2}`} x1="26" y1={y1} x2="44" y2={y2} opacity="0.3" />
        )))}
        {[30, 50, 70].map(y1 => [40, 60].map(y2 => (
          <line key={`${y1}-${y2}-out`} x1="56" y1={y1} x2="74" y2={y2} opacity="0.3" />
        )))}
      </svg>
    ),
    robot: (
      <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="0.5">
        {/* Head */}
        <rect x="30" y="15" width="40" height="30" rx="4" />
        {/* Eyes */}
        <circle cx="42" cy="30" r="5" />
        <circle cx="58" cy="30" r="5" />
        <circle cx="42" cy="30" r="2" fill="currentColor" />
        <circle cx="58" cy="30" r="2" fill="currentColor" />
        {/* Neck */}
        <rect x="45" y="45" width="10" height="8" />
        {/* Body */}
        <rect x="25" y="53" width="50" height="35" rx="4" />
        {/* Arms */}
        <rect x="10" y="55" width="12" height="25" rx="3" />
        <rect x="78" y="55" width="12" height="25" rx="3" />
        {/* Antenna */}
        <line x1="50" y1="15" x2="50" y2="5" />
        <circle cx="50" cy="5" r="3" />
      </svg>
    ),
    database: (
      <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="0.5">
        {/* Cylinder layers */}
        <ellipse cx="50" cy="20" rx="35" ry="10" />
        <path d="M15 20 L15 80 Q15 90 50 90 Q85 90 85 80 L85 20" />
        <ellipse cx="50" cy="80" rx="35" ry="10" />
        {/* Middle rings */}
        <ellipse cx="50" cy="40" rx="35" ry="10" strokeDasharray="4 4" opacity="0.5" />
        <ellipse cx="50" cy="60" rx="35" ry="10" strokeDasharray="4 4" opacity="0.5" />
        {/* Data points */}
        <circle cx="35" cy="50" r="3" fill="currentColor" opacity="0.4" />
        <circle cx="50" cy="50" r="3" fill="currentColor" opacity="0.4" />
        <circle cx="65" cy="50" r="3" fill="currentColor" opacity="0.4" />
      </svg>
    ),
    quantum: (
      <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="0.5">
        {/* Bloch sphere representation */}
        <circle cx="50" cy="50" r="35" />
        <ellipse cx="50" cy="50" rx="35" ry="12" strokeDasharray="4 4" opacity="0.5" />
        <ellipse cx="50" cy="50" rx="12" ry="35" strokeDasharray="4 4" opacity="0.5" />
        {/* State vector */}
        <line x1="50" y1="50" x2="70" y2="25" strokeWidth="1" />
        <circle cx="70" cy="25" r="4" fill="currentColor" />
        {/* Axes */}
        <line x1="50" y1="15" x2="50" y2="85" opacity="0.3" />
        <line x1="15" y1="50" x2="85" y2="50" opacity="0.3" />
      </svg>
    ),
  };

  return illustrations[type] || illustrations["neural-network"];
}

export default function Publications() {
  return (
    <section id="publications" className="py-32 px-6 bg-foreground/[0.02]">
      <div className="max-w-4xl mx-auto">
        <p className="text-sm text-accent uppercase tracking-widest mb-4">
          Research
        </p>
        <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight mb-16">
          Publications
        </h2>

        <div className="space-y-12">
          {publications.map((pub, index) => (
            <a
              key={index}
              href={pub.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group grid md:grid-cols-[120px_1fr] gap-8 items-start p-6 -mx-6 rounded-lg hover:bg-foreground/[0.03] transition-colors"
            >
              {/* Illustration */}
              <div className="w-24 h-24 md:w-full md:h-28 text-muted group-hover:text-foreground transition-colors">
                <PaperIllustration type={pub.illustration} />
              </div>

              {/* Content */}
              <div>
                <h3 className="font-serif text-xl font-medium mb-2 group-hover:text-accent transition-colors">
                  {pub.title}
                </h3>
                <p className="text-sm text-muted mb-3">{pub.venue}</p>
                <p className="text-muted/80 text-sm leading-relaxed">
                  {pub.description}
                </p>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <a
            href="https://scholar.google.com/citations?user=GZYRzKoAAAAJ"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors"
          >
            View all publications on Google Scholar
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
