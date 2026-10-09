"use client";

import { useState, useEffect } from "react";

const navItems = [
  { label: "PROFILE", href: "#profile" },
  { label: "ABOUT", href: "#about" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "SKILLSET", href: "#skillset" },
];

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setVisible(currentScrollY < lastScrollY || currentScrollY < 100);
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className="fixed left-0 top-0 z-50 flex items-center gap-5 px-4 pb-6 pt-6 transition-all duration-500 sm:gap-12 sm:px-10 sm:pb-8 sm:pt-10"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(-100%)",
      }}
    >
      {navItems.map((item) => (
        <a
          key={item.href}
          href={item.href}
          onClick={(e) => handleClick(e, item.href)}
          className="group relative text-xs tracking-[0.12em] transition-all duration-300 sm:text-base sm:tracking-[0.25em]"
          style={{
            fontFamily: "var(--font-body)",
            color: "var(--color-text)",
            textDecoration: "none",
          }}
        >
          {item.label}
          {/* Underline on hover */}
          <span
            className="absolute -bottom-1.5 left-0 h-[1.5px] w-0 transition-all duration-300 group-hover:w-full"
            style={{ backgroundColor: "var(--color-text)" }}
          />
        </a>
      ))}
    </nav>
  );
}
