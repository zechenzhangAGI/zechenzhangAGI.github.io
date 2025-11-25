const projects = [
  {
    title: "AI-Research-SKILLs",
    description:
      "A collection of modular AI research skills and tools for scientific workflows.",
    tech: ["Python", "AI", "Research"],
    link: "https://github.com/zechenzhangAGI/AI-Research-SKILLs",
  },
  {
    title: "Orchestra Platform",
    description:
      "The infrastructure powering AI co-scientist capabilities for researchers worldwide.",
    tech: ["TypeScript", "AI Agents", "Full Stack"],
    link: "https://www.orchestra-research.com",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <p className="text-sm text-accent uppercase tracking-widest mb-4">
          Building
        </p>
        <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight mb-16">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-8 border border-border rounded-lg hover:border-foreground/30 transition-all hover:shadow-lg hover:shadow-foreground/5"
            >
              {/* Abstract project illustration */}
              <div className="w-16 h-16 mb-6 text-muted group-hover:text-foreground transition-colors">
                <svg
                  viewBox="0 0 64 64"
                  className="w-full h-full"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                >
                  {index === 0 ? (
                    // Skills/modules pattern
                    <>
                      <rect x="4" y="4" width="24" height="24" rx="2" />
                      <rect x="36" y="4" width="24" height="24" rx="2" />
                      <rect x="4" y="36" width="24" height="24" rx="2" />
                      <rect x="36" y="36" width="24" height="24" rx="2" />
                      <circle cx="16" cy="16" r="4" fill="currentColor" opacity="0.3" />
                      <circle cx="48" cy="16" r="4" fill="currentColor" opacity="0.3" />
                      <circle cx="16" cy="48" r="4" fill="currentColor" opacity="0.3" />
                      <circle cx="48" cy="48" r="4" fill="currentColor" opacity="0.3" />
                    </>
                  ) : (
                    // Platform/infrastructure pattern
                    <>
                      <circle cx="32" cy="32" r="28" strokeDasharray="4 4" />
                      <circle cx="32" cy="32" r="18" />
                      <circle cx="32" cy="32" r="8" fill="currentColor" opacity="0.2" />
                      <line x1="32" y1="4" x2="32" y2="14" />
                      <line x1="32" y1="50" x2="32" y2="60" />
                      <line x1="4" y1="32" x2="14" y2="32" />
                      <line x1="50" y1="32" x2="60" y2="32" />
                    </>
                  )}
                </svg>
              </div>

              <h3 className="font-serif text-xl font-medium mb-3 group-hover:text-accent transition-colors">
                {project.title}
              </h3>
              <p className="text-muted text-sm mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-1 bg-foreground/5 rounded text-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://github.com/zechenzhangAGI"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors"
          >
            More on GitHub
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
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
