'use client';

import Link from "next/link";
import Image from "next/image";
import React from "react";
import { usePathname } from "next/navigation";

// Toggle this to true or false to show/hide Support in the header
const SHOW_SUPPORT_LINK = true;

export default function Header() {
  const pathname = usePathname();
  const [active, setActive] = React.useState<string>("home");
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    if (pathname !== "/") {
      if (pathname.startsWith("/support")) setActive("support");
      else if (pathname.startsWith("/blog")) setActive("blog");
      else setActive("home");
      return;
    }

    const headerH = 64;
    const ids = ["about", "services", "contact"];
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);

    const computeActive = () => {
      const y = window.scrollY + headerH + 1;
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2
      ) {
        setActive("contact");
        return;
      }

      let current: string = "home";
      for (const sec of sections) {
        const margin =
          parseFloat(getComputedStyle(sec).scrollMarginTop || "0") || 0;
        const topEffective = sec.offsetTop - margin;
        if (y >= topEffective) current = sec.id;
      }
      setActive(current);
    };

    computeActive();
    window.addEventListener("scroll", computeActive, { passive: true });
    window.addEventListener("resize", computeActive);

    return () => {
      window.removeEventListener("scroll", computeActive);
      window.removeEventListener("resize", computeActive);
    };
  }, [pathname]);

  const handleNavClick = (id: string) => {
    setActive(id);
    setOpen(false);
  };

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
        <Link
          href="/"
          className="inline-flex items-center"
          aria-label="CinemaTech Home"
          onClick={() => handleNavClick("home")}
        >
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
          <Link href="/" className={linkClass("home")} onClick={() => handleNavClick("home")}>
            Home
          </Link>
          <Link href="/#about" className={linkClass("about")} onClick={() => handleNavClick("about")}>
            About
          </Link>
          <Link href="/#services" className={linkClass("services")} onClick={() => handleNavClick("services")}>
            Services
          </Link>
          <Link href="/#contact" className={linkClass("contact")} onClick={() => handleNavClick("contact")}>
            Contact
          </Link>
          {SHOW_SUPPORT_LINK && (
            <Link href="/support" className={linkClass("support")} onClick={() => handleNavClick("support")}>
              Support
            </Link>
          )}
        </nav>

        {/* Mobile hamburger */}
        <button
          aria-label="Open menu"
          className="ml-auto md:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl border border-neutral-200"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>
