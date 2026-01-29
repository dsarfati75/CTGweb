'use client';

import Link from "next/link";
import Image from "next/image";
import React from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const [active, setActive] = React.useState<string>("home");
  const [open, setOpen] = React.useState(false);

  // Toggle Support Nav Item
  const supportEnabled = false;

  // Toggle Summit CTA (turn off after the event)
  const summitEnabled = true;

  React.useEffect(() => {
    // If not on homepage, set active based on pathname
    if (pathname !== "/") {
      if (pathname.startsWith("/dics-summit")) setActive("dics-summit");
      else if (pathname.startsWith("/testimonials")) setActive("testimonials");
      else if (pathname.startsWith("/support")) setActive("support");
      else if (pathname.startsWith("/blog")) setActive("blog");
      else setActive("home");
      return;
    }

    // Only run scroll detection on homepage
    const headerH = 64;

    // IMPORTANT: order must match desired nav flow + scroll order
    const ids = ["about", "services", "testimonials", "contact"];

    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);

    const computeActive = () => {
      const y = window.scrollY + headerH + 1;

      // At bottom? mark contact
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

  const summitButtonClass =
    "inline-flex items-center rounded-md bg-slate-900 px-3 py-1.5 text-sm font-semibold text-white hover:bg-slate-800";

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

          <Link
            href="/#testimonials"
            className={linkClass("testimonials")}
            onClick={() => handleNavClick("testimonials")}
          >
            Testimonials
          </Link>

          <Link href="/#contact" className={linkClass("contact")} onClick={() => handleNavClick("contact")}>
            Contact
          </Link>

          {supportEnabled && (
            <Link href="/support" className={linkClass("support")} onClick={() => handleNavClick("support")}>
              Support
            </Link>
          )}

          {summitEnabled && (
            <Link
              href="/dics-summit"
              className={summitButtonClass}
              onClick={() => handleNavClick("dics-summit")}
            >
              Dine-In Cinema Summit IT Health Check
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

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-neutral-200 bg-white/95 backdrop-blur">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-col gap-2 text-sm">
            <Link href="/" className={linkClass("home")} onClick={() => handleNavClick("home")}>
              Home
            </Link>

            <Link href="/#about" className={linkClass("about")} onClick={() => handleNavClick("about")}>
              About
            </Link>

            <Link href="/#services" className={linkClass("services")} onClick={() => handleNavClick("services")}>
              Services
            </Link>

            <Link
              href="/#testimonials"
              className={linkClass("testimonials")}
              onClick={() => handleNavClick("testimonials")}
            >
              Testimonials
            </Link>

            <Link href="/#contact" className={linkClass("contact")} onClick={() => handleNavClick("contact")}>
              Contact
            </Link>

            {supportEnabled && (
              <Link href="/support" className={linkClass("support")} onClick={() => handleNavClick("support")}>
                Support
              </Link>
            )}

            {summitEnabled && (
              <Link
                href="/dics-summit"
                className="mt-2 inline-flex items-center justify-center rounded-md bg-slate-900 px-3 py-2 text-sm font-semibold text-white hover:bg-slate-800"
                onClick={() => handleNavClick("dics-summit")}
              >
                Dine-In Cinema Summit IT Health Check
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
}


