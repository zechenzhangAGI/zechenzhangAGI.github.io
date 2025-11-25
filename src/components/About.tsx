export default function About() {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-[1fr_2fr] gap-16 items-start">
          {/* Portrait placeholder */}
          <div className="aspect-[3/4] bg-foreground/5 rounded-lg flex items-center justify-center">
            <svg
              viewBox="0 0 100 100"
              className="w-24 h-24 text-muted/30"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
            >
              <circle cx="50" cy="35" r="20" />
              <path d="M20 90 Q20 60 50 60 Q80 60 80 90" />
            </svg>
          </div>

          {/* Bio */}
          <div>
            <p className="text-sm text-accent uppercase tracking-widest mb-4">
              About
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight mb-8">
              Hello
            </h2>

            <div className="space-y-6 text-muted leading-relaxed">
              <p>
                I&apos;m Zechen Zhang, a physicist turned AI researcher and founder.
                My journey started in theoretical physics, studying tensor
                networks and quantum gravity, before transitioning to machine
                learning and AI systems.
              </p>

              <p>
                I&apos;ve had the privilege of contributing to projects at Google
                DeepMind, including work on AI co-scientists and robotics. These
                experiences shaped my conviction that powerful AI should be a
                tool for everyone, not a privilege for the few.
              </p>

              <p>
                Now I&apos;m building{" "}
                <a
                  href="https://www.orchestra-research.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-accent transition-colors border-b border-border hover:border-foreground"
                >
                  Orchestra
                </a>
                —infrastructure to distribute AI capabilities for scientific
                research. I believe we&apos;re at an inflection point where AI can
                dramatically accelerate discovery, and our responsibility is to
                ensure this power benefits humanity broadly.
              </p>

              <p className="text-foreground font-medium">
                Let&apos;s build the future of scientific discovery together.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
