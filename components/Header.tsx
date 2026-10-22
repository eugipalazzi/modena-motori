"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { id: "home", label: "HOME" },
  { id: "chi-siamo", label: "CHI SIAMO" },
  { id: "contatti", label: "CONTATTI" },
];

export default function Header() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { threshold: 0.5 }
    );
    LINKS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header className="header">
      <a className="logo" href="#home">
        MODENA<span>MOTORI</span>
      </a>
      <nav aria-label="Menu principale">
        {LINKS.map(({ id, label }) => (
          <a key={id} href={`#${id}`} className={active === id ? "active" : undefined}>
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
}
