import Image from "next/image";
import SocialLinks from "@/components/SocialLinks";
import ThemeToggle from "@/components/ThemeToggle";
import {
  earlierProjects,
  education,
  links,
  me,
  now,
  papers,
  projects,
  writing,
  type Link,
  type Paper,
  type Post,
} from "@/content";

const updated = new Date().toLocaleDateString("en-US", {
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

function Ext({ href, className, children }: { href: string; className?: string; children: React.ReactNode }) {
  return (
    <a href={href} className={className} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

function Authors({ text }: { text: string }) {
  const parts = text.split(me);
  return (
    <p className="authors">
      {parts.map((part, i) => (
        <span key={i}>
          {part}
          {i < parts.length - 1 && <span className="me">{me}</span>}
        </span>
      ))}
    </p>
  );
}

function LinkRow({ items }: { items: Link[] }) {
  if (items.length === 0) return null;
  return (
    <p className="plinks mono">
      {items.map((l) => (
        <Ext key={l.href} href={l.href} className="ml">
          {l.label}
        </Ext>
      ))}
    </p>
  );
}

function Meta({ paper }: { paper: Paper }) {
  const venue =
    paper.venue === "arXiv"
      ? `Preprint ${paper.year}`
      : /\d{4}/.test(paper.venue) || paper.venue === "Under review"
        ? paper.venue
        : `${paper.venue} ${paper.year}`;
  return (
    <p className="meta mono">
      <span className={paper.accepted ? "venue accepted" : "venue"}>{venue}</span>
      {paper.role && <span className="role">{paper.role}</span>}
      {paper.note && <span className="note">{paper.note}</span>}
    </p>
  );
}

// A figure from the work, or for writing without one, a plain typographic plate.
function Plate({ href, image, alt, label, where }: { href: string; image?: string; alt?: string; label: string; where?: string }) {
  return (
    <a href={href} className="plate-link" target="_blank" rel="noopener noreferrer" tabIndex={-1} aria-hidden="true">
      <span className="plate">
        {image ? (
          <Image src={image} alt={alt ?? ""} width={560} height={420} />
        ) : (
          <span className="text-plate">
            <span className="kind">{label}</span>
            {where && <span className="src">{where}</span>}
          </span>
        )}
      </span>
    </a>
  );
}

function PaperItem({ paper }: { paper: Paper }) {
  const primary = paper.links[0]?.href;
  return (
    <li className="paper">
      {paper.figure && primary && <Plate href={primary} image={paper.figure.src} alt={paper.figure.alt} label="" />}
      <div>
        <Meta paper={paper} />
        <h3 className="p-title">{primary ? <Ext href={primary}>{paper.title}</Ext> : paper.title}</h3>
        <Authors text={paper.authors} />
        {paper.summary && <p className="summary">{paper.summary}</p>}
        <LinkRow items={paper.links} />
      </div>
    </li>
  );
}

function PostItem({ post }: { post: Post }) {
  return (
    <li className="paper post">
      <Plate href={post.href} image={post.image} alt={post.title} label={post.kind} where={post.where} />
      <div>
        <p className="meta mono">
          <span>{post.date}</span>
          <span className="role">{post.where}</span>
          <span className="role">{post.kind}</span>
        </p>
        <h3 className="p-title">
          <Ext href={post.href}>{post.title}</Ext>
        </h3>
        <p className="summary">{post.summary}</p>
      </div>
    </li>
  );
}

export default function Home() {
  return (
    <div className="wrap">
      <header className="top">
        <a href="#" className="home">
          {me}
        </a>
        <nav aria-label="Sections">
          <a href="#publications">Research</a>
          <a href="#projects">Projects</a>
          <a href="#ideas">Writing</a>
          <ThemeToggle />
        </nav>
      </header>

      <main>
        <section id="about" className="intro">
          <div className="intro-head">
            <div>
              <h1>{me}</h1>
              <p className="role">
                PhD candidate in Physics, Harvard University (on leave)
                <br />
                Founder, Orchestra Research
              </p>
            </div>
            <Image className="portrait" src="/zechen-portrait.jpg" alt="Zechen Zhang" width={480} height={600} priority />
          </div>

          <div className="bio">
            <p>
              I study how learning systems take in new knowledge, and what limits them. I&apos;m a PhD candidate in
              Physics at Harvard, advised by{" "}
              <Ext href="https://en.wikipedia.org/wiki/Haim_Sompolinsky" className="tl">
                Haim Sompolinsky
              </Ext>{" "}
              at the Center for Brain Science. My path ran through philosophy, theoretical physics and evolutionary
              dynamics before it reached the statistical mechanics of neural networks.
            </p>
            <p>
              Most of my work now is on the foundations for humans and AI doing science together: measuring the
              research ability and taste of AI models, designing RL environments that train and test them, and
              building tools for human researchers and AI agents alike. I founded{" "}
              <Ext href={links.orchestra} className="tl">
                Orchestra Research
              </Ext>{" "}
              to do this work.
            </p>
          </div>

          <SocialLinks id="contact" />
        </section>

        <section id="now" className="sec" aria-labelledby="now-h">
          <div className="sec-h">
            <h2 id="now-h">Now</h2>
            <span className="aside mono">{updated}</span>
          </div>
          <ul className="now">
            {now.map((item) => (
              <li key={item.tag}>
                <span className={item.tag.startsWith("NeurIPS") ? "tag mono hot" : "tag mono"}>{item.tag}</span>
                <span>
                  {item.href ? (
                    <Ext href={item.href} className="tl">
                      {item.name}
                    </Ext>
                  ) : (
                    item.name
                  )}
                  {item.text}
                </span>
              </li>
            ))}
          </ul>
        </section>

        <section id="publications" className="sec" aria-labelledby="research-h">
          <div className="sec-h">
            <h2 id="research-h">Research</h2>
            <Ext href={links.scholar} className="aside mono ml">
              Google Scholar ↗
            </Ext>
          </div>
          <p className="lede">
            One question runs through this work: how does new knowledge get into a learning system, and what limits
            it? I&apos;ve asked it at three scales: a neural network learning from data, a language model learning a
            new fact, and an AI agent learning to do research.
          </p>

          <ul>
            {papers.map((p) => (
              <PaperItem key={p.title} paper={p} />
            ))}
          </ul>
          <p className="footnote mono">* equal contribution</p>
        </section>

        <section id="projects" className="sec" aria-labelledby="projects-h">
          <div className="sec-h">
            <h2 id="projects-h">Projects</h2>
            <Ext href={links.github} className="aside mono ml">
              GitHub ↗
            </Ext>
          </div>
          <div className="projects">
            {projects.map((p) => (
              <div key={p.name} id={p.id} className="project">
                <h3>
                  {p.name}
                  {(p.role || p.status) && <span className="mono">{p.role ?? p.status}</span>}
                </h3>
                <p>{p.text}</p>
                <LinkRow items={p.links} />
              </div>
            ))}
          </div>

          <p className="sub-h mono">Earlier</p>
          <ul className="earlier">
            {earlierProjects.map((p) => (
              <li key={p.name}>
                <span className="name">{p.name}</span>. {p.text}{" "}
                {p.links.map((l, i) => (
                  <span key={l.href} className="mono">
                    {i > 0 && " · "}
                    <Ext href={l.href} className="ml">
                      {l.label}
                    </Ext>
                  </span>
                ))}
              </li>
            ))}
          </ul>
        </section>

        <section id="ideas" className="sec" aria-labelledby="writing-h">
          <div className="sec-h">
            <h2 id="writing-h">Writing</h2>
            <Ext href={links.blog} className="aside mono ml">
              Orchestra blog ↗
            </Ext>
          </div>
          <ul>
            {writing.map((w) => (
              <PostItem key={w.href} post={w} />
            ))}
          </ul>
          <p className="more mono">
            <Ext href={links.blog} className="ml">
              More on the Orchestra blog ↗
            </Ext>
          </p>
        </section>

        <section id="education" className="sec" aria-labelledby="bg-h">
          <div className="sec-h">
            <h2 id="bg-h">Background</h2>
          </div>
          <ul className="rows">
            {education.map((e) => (
              <li key={e.where}>
                <span className="when mono">{e.years}</span>
                <span>
                  <span className="what">{e.what}</span>
                  <span className="where mono">{e.where}</span>
                  {e.detail && <span className="detail"><br />{e.detail}</span>}
                </span>
              </li>
            ))}
          </ul>
          <p className="service">
            I organized Harvard&apos;s first AI alignment seminar series and was active in the Harvard AI Safety
            Team.
          </p>
        </section>
      </main>

      <footer className="foot mono">
        <span>
          © {new Date().getUTCFullYear()} {me} · Updated {updated}
        </span>
        <span className="reach">
          <a href={`mailto:${links.email}`} className="ml">
            Email
          </a>
          <Ext href={links.calendly} className="ml">
            Book a chat
          </Ext>
        </span>
      </footer>
    </div>
  );
}
