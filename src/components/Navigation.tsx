"use client";

import { useState, useEffect } from "react";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Orchestra", href: "#orchestra" },
  { name: "Publications", href: "#publications" },
  { name: "Projects", href: "#projects" },
  { name: "Ideas", href: "#ideas" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#"
          className="font-serif text-xl font-medium tracking-tight hover:text-accent transition-colors"
        >
          ZZ
        </a>
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm text-muted hover:text-foreground transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>
        <a
          href="mailto:zechen@orchestra-research.com"
          className="text-sm text-muted hover:text-foreground transition-colors"
        >
          Contact
        </a>
      </div>
    </nav>
  );
}
