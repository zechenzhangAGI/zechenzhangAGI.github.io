export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-sm text-accent uppercase tracking-widest mb-4">
          Connect
        </p>
        <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight mb-6">
          Let&apos;s Chat
        </h2>
        <p className="text-muted mb-8 max-w-xl mx-auto">
          Interested in AI for science, building scientific assistants, or research collaboration?
          I&apos;d love to hear from you.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://calendly.com/zechen_zhang/chat"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-lg hover:bg-foreground/90 transition-colors font-medium"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Schedule a Call
          </a>
          <a
            href="mailto:zechen_zhang@g.harvard.edu"
            className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-lg hover:border-foreground/30 transition-colors font-medium text-muted hover:text-foreground"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Send an Email
          </a>
        </div>
      </div>
    </section>
  );
}
