const education = [
  {
    school: "Harvard University",
    degree: "PhD in Physics",
    period: "2019 – Present",
    details: "Advisor: Haim Sompolinsky. Focus on Machine Learning & Computational Neuroscience.",
    logo: "harvard",
  },
  {
    school: "Cambridge University",
    degree: "MASt in Mathematics",
    period: "2018 – 2019",
    details: "Part III Maths, theoretical physics track.",
    logo: "cambridge",
  },
  {
    school: "Swarthmore College",
    degree: "BA in Physics (Honors)",
    period: "2016 – 2018",
    details: "Minor in Philosophy. GPA: 3.84/4.0",
    logo: "swarthmore",
  },
];

function SchoolLogo({ school }: { school: string }) {
  const logos: Record<string, React.ReactNode> = {
    harvard: (
      <svg viewBox="0 0 40 40" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="1">
        {/* Harvard shield simplified */}
        <path d="M20 5 L35 12 L35 28 Q35 35 20 38 Q5 35 5 28 L5 12 Z" />
        <text x="20" y="25" textAnchor="middle" fontSize="12" fill="currentColor" stroke="none" fontFamily="serif">H</text>
      </svg>
    ),
    cambridge: (
      <svg viewBox="0 0 40 40" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="1">
        {/* Cambridge shield simplified */}
        <path d="M20 5 L35 12 L35 28 Q35 35 20 38 Q5 35 5 28 L5 12 Z" />
        <text x="20" y="25" textAnchor="middle" fontSize="12" fill="currentColor" stroke="none" fontFamily="serif">C</text>
      </svg>
    ),
    swarthmore: (
      <svg viewBox="0 0 40 40" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="1">
        {/* Swarthmore shield simplified */}
        <path d="M20 5 L35 12 L35 28 Q35 35 20 38 Q5 35 5 28 L5 12 Z" />
        <text x="20" y="25" textAnchor="middle" fontSize="12" fill="currentColor" stroke="none" fontFamily="serif">S</text>
      </svg>
    ),
  };
  return logos[school] || logos.harvard;
}

export default function Education() {
  return (
    <section id="education" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <p className="text-sm text-accent uppercase tracking-widest mb-4">
          Background
        </p>
        <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight mb-16">
          Education
        </h2>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="flex gap-6 items-start p-6 -mx-6 rounded-lg hover:bg-foreground/[0.02] transition-colors"
            >
              {/* Logo */}
              <div className="w-12 h-12 flex-shrink-0 text-muted">
                <SchoolLogo school={edu.logo} />
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 mb-2">
                  <h3 className="font-serif text-lg font-medium">{edu.school}</h3>
                  <span className="text-sm text-muted">{edu.period}</span>
                </div>
                <p className="text-muted mb-1">{edu.degree}</p>
                <p className="text-sm text-muted/70">{edu.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
