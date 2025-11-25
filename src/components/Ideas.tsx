const ideas = [
  {
    title: "The Democratization of Scientific Discovery",
    excerpt:
      "Why distributing AI capabilities matters more than concentrating them, and how we can build systems that empower rather than replace human researchers.",
    date: "2024",
    tag: "AI & Society",
  },
  {
    title: "From Physics to AI: A Personal Journey",
    excerpt:
      "How training in theoretical physics shaped my approach to building AI systems, and why first-principles thinking matters in the age of foundation models.",
    date: "2024",
    tag: "Personal",
  },
  {
    title: "The Orchestra Thesis",
    excerpt:
      "Building AI co-scientists: why the future of research is human-AI collaboration, not automation.",
    date: "2024",
    tag: "Orchestra",
  },
];

export default function Ideas() {
  return (
    <section id="ideas" className="py-32 px-6 bg-foreground/[0.02]">
      <div className="max-w-4xl mx-auto">
        <p className="text-sm text-accent uppercase tracking-widest mb-4">
          Thinking
        </p>
        <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight mb-16">
          Ideas
        </h2>

        <div className="space-y-8">
          {ideas.map((idea, index) => (
            <article
              key={index}
              className="group p-8 -mx-8 rounded-lg hover:bg-foreground/[0.03] transition-colors cursor-pointer"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <span className="text-xs px-2 py-1 bg-foreground/5 rounded text-muted">
                  {idea.tag}
                </span>
                <span className="text-sm text-muted">{idea.date}</span>
              </div>
              <h3 className="font-serif text-2xl font-medium mb-3 group-hover:text-accent transition-colors">
                {idea.title}
              </h3>
              <p className="text-muted leading-relaxed">{idea.excerpt}</p>
              <div className="mt-4 flex items-center gap-2 text-sm text-muted group-hover:text-foreground transition-colors">
                <span>Read more</span>
                <svg
                  className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-12 text-center text-sm text-muted italic">
          Blog posts coming soon. For now, read our perspectives on{" "}
          <a
            href="https://www.orchestra-research.com/perspectives"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-accent transition-colors border-b border-border hover:border-foreground"
          >
            Orchestra&apos;s blog
          </a>
          .
        </p>
      </div>
    </section>
  );
}
