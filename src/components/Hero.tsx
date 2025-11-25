export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-3xl mx-auto text-center">
        {/* Abstract geometric illustration */}
        <div className="mb-12 animate-fade-in">
          <svg
            viewBox="0 0 200 200"
            className="w-32 h-32 mx-auto text-foreground"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
          >
            {/* Orbital paths - representing physics background */}
            <ellipse cx="100" cy="100" rx="80" ry="30" className="draw-line" />
            <ellipse
              cx="100"
              cy="100"
              rx="80"
              ry="30"
              transform="rotate(60 100 100)"
              className="draw-line"
              style={{ animationDelay: "0.3s" }}
            />
            <ellipse
              cx="100"
              cy="100"
              rx="80"
              ry="30"
              transform="rotate(120 100 100)"
              className="draw-line"
              style={{ animationDelay: "0.6s" }}
            />
            {/* Central node - representing AI/focus */}
            <circle cx="100" cy="100" r="8" fill="currentColor" opacity="0.8" />
            {/* Satellite nodes - representing distributed systems */}
            <circle cx="100" cy="20" r="3" fill="currentColor" opacity="0.4" />
            <circle cx="170" cy="135" r="3" fill="currentColor" opacity="0.4" />
            <circle cx="30" cy="135" r="3" fill="currentColor" opacity="0.4" />
          </svg>
        </div>

        <h1 className="font-serif text-5xl md:text-7xl font-medium tracking-tight mb-6 animate-fade-in-delay-1">
          Zechen Zhang
        </h1>

        <p className="text-lg md:text-xl text-muted mb-4 animate-fade-in-delay-2">
          Physicist → AI Researcher → Founder
        </p>

        <p className="text-base md:text-lg text-muted/80 max-w-xl mx-auto mb-12 animate-fade-in-delay-3">
          Building{" "}
          <a
            href="#orchestra"
            className="text-foreground hover:text-accent transition-colors border-b border-border hover:border-foreground"
          >
            Orchestra
          </a>{" "}
          to distribute the power of AI systems to everyone—enabling scientific
          discovery for all.
        </p>

        <div className="flex items-center justify-center gap-6 text-sm text-muted animate-fade-in-delay-3">
          <a
            href="https://scholar.google.com/citations?user=GZYRzKoAAAAJ"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            Scholar
          </a>
          <span className="text-border">·</span>
          <a
            href="https://github.com/zechenzhangAGI"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            GitHub
          </a>
          <span className="text-border">·</span>
          <a
            href="https://twitter.com/zeaboradeng"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            Twitter
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
