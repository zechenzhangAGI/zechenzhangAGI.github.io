export default function Orchestra() {
  return (
    <section id="orchestra" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Illustration */}
          <div className="order-2 md:order-1">
            <svg
              viewBox="0 0 300 300"
              className="w-full max-w-sm mx-auto text-foreground"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
            >
              {/* Central conductor node */}
              <circle cx="150" cy="150" r="20" strokeWidth="1" />
              <circle cx="150" cy="150" r="5" fill="currentColor" />

              {/* Agent nodes in orchestra formation */}
              {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
                const radius = 80;
                const x = 150 + radius * Math.cos((angle * Math.PI) / 180);
                const y = 150 + radius * Math.sin((angle * Math.PI) / 180);
                return (
                  <g key={angle}>
                    {/* Connection line */}
                    <line
                      x1="150"
                      y1="150"
                      x2={x}
                      y2={y}
                      strokeDasharray="4 4"
                      opacity="0.3"
                    />
                    {/* Agent node */}
                    <circle cx={x} cy={y} r="12" opacity={0.6 + i * 0.05} />
                    <circle cx={x} cy={y} r="3" fill="currentColor" opacity="0.6" />
                  </g>
                );
              })}

              {/* Outer ring - representing reach/distribution */}
              <circle cx="150" cy="150" r="120" strokeDasharray="2 6" opacity="0.2" />

              {/* Data flow arcs */}
              <path
                d="M 70 150 Q 150 80 230 150"
                strokeDasharray="4 4"
                opacity="0.3"
              />
              <path
                d="M 70 150 Q 150 220 230 150"
                strokeDasharray="4 4"
                opacity="0.3"
              />
            </svg>
          </div>

          {/* Content */}
          <div className="order-1 md:order-2">
            <p className="text-sm text-accent uppercase tracking-widest mb-4">
              Featured Project
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight mb-6">
              Orchestra
            </h2>
            <p className="text-muted mb-6 leading-relaxed">
              AI co-scientist for everyone. We&apos;re building the infrastructure to
              distribute powerful AI systems to researchers worldwide—enabling
              anyone to conduct rigorous scientific research with AI assistance.
            </p>
            <p className="text-muted mb-8 leading-relaxed">
              I believe the arrival of powerful AI systems represents a pivotal
              moment for humanity. The most important thing is to ensure these
              tools benefit everyone, not just a privileged few.
            </p>
            <a
              href="https://www.orchestra-research.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium border-b border-foreground hover:text-accent hover:border-accent transition-colors"
            >
              Learn more about Orchestra
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
      </div>
    </section>
  );
}
