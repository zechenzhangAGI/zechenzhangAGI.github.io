import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-[1fr_2fr] gap-16 items-start">
          {/* Portrait */}
          <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
            <Image
              src="/zechen_profile_photo.jpg"
              alt="Zechen Zhang"
              fill
              className="object-cover"
              priority
            />
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
                I&apos;m Zechen Zhang. My path has wandered through philosophy and physics,
                theoretical physics, evolutionary dynamics, and deep learning—each
                turn driven by the same question: how do complex systems learn and adapt?
              </p>

              <p>
                That curiosity took me from studying the mathematics of evolution to the
                statistical mechanics of neural networks, working with{" "}
                <a
                  href="https://en.wikipedia.org/wiki/Haim_Sompolinsky"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-accent transition-colors border-b border-border hover:border-foreground"
                >
                  Haim Sompolinsky
                </a>{" "}
                at Harvard. More recently, my research shifted to how LLMs integrate new
                knowledge through fine-tuning—which led me to believe{" "}
                <span className="text-foreground">continual learning</span> is the last
                piece of the AGI puzzle.
              </p>

              <p>
                Along the way, I became deeply involved in{" "}
                <span className="text-foreground">AI safety</span>—organizing Harvard&apos;s
                first AI alignment seminar series and remaining active in the Harvard AI Safety Team.
                I believe powerful AI is arriving faster than most realize. And if it&apos;s going
                to benefit humanity broadly, it can&apos;t remain a privilege gatekept by elite
                institutions with massive compute budgets and exclusive networks.
              </p>

              <p>
                That&apos;s why I&apos;m singularly focused on building{" "}
                <a
                  href="https://www.orchestra-research.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-accent transition-colors border-b border-border hover:border-foreground"
                >
                  Orchestra
                </a>
                —AI scientific assistants that give everyone with a curious mind a Jarvis for science.
                It&apos;s the most urgent thing I can work on.
              </p>
            </div>

            {/* Quick facts */}
            <div className="mt-10 pt-8 border-t border-border grid grid-cols-2 gap-6 text-sm">
              <div>
                <p className="text-muted mb-1">Location</p>
                <p className="text-foreground">Cambridge, MA</p>
              </div>
              <div>
                <p className="text-muted mb-1">Focus</p>
                <p className="text-foreground">Building Orchestra</p>
              </div>
              <div>
                <p className="text-muted mb-1">Background</p>
                <p className="text-foreground">Physics</p>
              </div>
              <div>
                <p className="text-muted mb-1">Mission</p>
                <p className="text-foreground">AI Scientist for Everyone</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
