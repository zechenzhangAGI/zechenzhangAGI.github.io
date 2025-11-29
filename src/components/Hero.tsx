export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-3xl mx-auto text-center">
        {/* Abstract geometric illustration - neural network meets physics */}
        <div className="mb-12 animate-fade-in">
          <svg
            viewBox="0 0 200 200"
            className="w-32 h-32 mx-auto text-foreground"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
          >
            {/* Statistical mechanics / spin glass inspired pattern */}
            <circle cx="100" cy="100" r="60" strokeDasharray="4 4" opacity="0.3" />
            <circle cx="100" cy="100" r="40" strokeDasharray="2 2" opacity="0.4" />

            {/* Neural network nodes */}
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
              const r = 60;
              const x = 100 + r * Math.cos((angle * Math.PI) / 180);
              const y = 100 + r * Math.sin((angle * Math.PI) / 180);
              return (
                <g key={angle}>
                  <circle cx={x} cy={y} r="4" fill="currentColor" opacity="0.3" />
                  <line x1="100" y1="100" x2={x} y2={y} opacity="0.15" />
                </g>
              );
            })}

            {/* Inner connections - branching structure */}
            {[30, 150, 270].map((angle) => {
              const r = 40;
              const x = 100 + r * Math.cos((angle * Math.PI) / 180);
              const y = 100 + r * Math.sin((angle * Math.PI) / 180);
              return (
                <g key={`inner-${angle}`}>
                  <circle cx={x} cy={y} r="6" opacity="0.5" />
                  <circle cx={x} cy={y} r="2" fill="currentColor" opacity="0.5" />
                </g>
              );
            })}

            {/* Central node */}
            <circle cx="100" cy="100" r="10" strokeWidth="1" />
            <circle cx="100" cy="100" r="4" fill="currentColor" opacity="0.8" />
          </svg>
        </div>

        <h1 className="font-serif text-5xl md:text-7xl font-medium tracking-tight mb-6 animate-fade-in-delay-1">
          Zechen Zhang
        </h1>

        <p className="text-lg md:text-xl text-muted mb-4 animate-fade-in-delay-2">
          Scientist · Builder · Founder · Lifelong Learner
        </p>

        <p className="text-base md:text-lg text-muted/80 max-w-xl mx-auto mb-12 animate-fade-in-delay-3">
          From physics to building{" "}
          <a
            href="#orchestra"
            className="text-foreground hover:text-accent transition-colors border-b border-border hover:border-foreground"
          >
            AI scientific assistants
          </a>{" "}
          for everyone. Science shouldn&apos;t be gatekept—powerful AI can change that.{" "}
          <a
            href="https://calendly.com/zechen_zhang/chat"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-accent transition-colors border-b border-border hover:border-foreground"
          >
            Let&apos;s chat
          </a>.
        </p>

        <div className="flex items-center justify-center gap-5 text-muted animate-fade-in-delay-3">
          <a
            href="https://scholar.google.com/citations?user=GZYRzKoAAAAJ"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
            title="Google Scholar"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.5l4.838 3.94A8 8 0 0 1 12 9a8 8 0 0 1 7.162 4.44L24 9.5z"/>
            </svg>
          </a>
          <a
            href="https://github.com/zechenzhangAGI"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
            title="GitHub"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <a
            href="https://x.com/ZechenZhang5"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
            title="X / Twitter"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/zechen-zhang-a75b4a327/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
            title="LinkedIn"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a
            href="mailto:zechen_zhang@g.harvard.edu"
            className="hover:text-foreground transition-colors"
            title="Email"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg
            className="w-5 h-5 text-muted"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
