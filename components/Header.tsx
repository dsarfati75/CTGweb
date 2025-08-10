'use client';

import Link from "next/link";
import Image from "next/image";
import React from "react";

export default function Header() {
  const [active, setActive] = React.useState<string>("home");
  const [open, setOpen] = React.useState(false);

  // --- Scrollspy (highlights Home, About, Services, Contact) ---
  React.useEffect(() => {
    const headerH = 64; // px
    const ids = ["about", "services", "contact"];
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);

    const computeActive = () => {
      const y = window.scrollY + headerH + 1;
      // If we're above the first section, highlight home
      const first = sections[0];
      if (!first || y < first.offsetTop) {
        setActive("home");
        return;
      }
      // Find the last section whose top is above the current y
      let current: string = "home";
      for (const sec of sections) {
        if (y >= sec.offsetTop) current = sec.id;
      }
      setActive(current);
    };

    computeActive();
    const onScroll = () => computeActive();
    const onResize = () => computeActive();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  // Close mobile menu when navigating
  const handleNavClick = () => setOpen(false);

  const linkClass = (id: string) =>
    [
      "transition-colors",
      active === id
        ? "text-[var(--brand-primary)] font-medium"
        : "text-neutral-700 hover:text-[var(--brand-primary)]",
    ].join(" ");

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-neutral-200 shadow-sm">
      <div className="max-w-7xl mx-auto h-16 px-4 sm:px-6 lg:px-8 flex items-center">
        {/* Logo */}
        <Link href="/" className="inline-flex items-center" aria-label="CinemaTech Home" onClick={handleNavClick}>
          <Image
            src="/cinematech-logo.png"
            alt="CinemaTech"
            width={240}
            height={48}
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="ml-auto hidden md:flex items-center gap-6 text-sm">
          <Link href="/" className={linkClass("home")} onClick={handleNavClick}>
            Home
          </Link>
          <Link href="/#about" className={linkClass("about")} onClick={handleNavClick}>
            About
          </Link>
          <Link href="/#services" className={linkClass("services")} onClick={handleNavClick}>
            Services
          </Link>
          <Link href="/#contact" className={linkClass("contact")} onClick={handleNavClick}>
            Contact
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          aria-label="Open menu"
          className="ml-auto md:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl border border-neutral-200"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            // X icon
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          ) : (
            // Hamburger
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <div className="md:hidden border-t border-neutral-200 bg-white/95 backdrop-blur">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-col gap-2 text-sm">
            <Link href="/" className={linkClass("home")} onClick={handleNavClick}>
              Home
            </Link>
            <Link href="/#about" className={linkClass("about")} onClick={handleNavClick}>
              About
            </Link>
            <Link href="/#services" className={linkClass("services")} onClick={handleNavClick}>
              Services
            </Link>
            <Link href="/#contact" className={linkClass("contact")} onClick={handleNavClick}>
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
