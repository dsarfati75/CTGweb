'use client';

import Link from "next/link";
import Image from "next/image";
import React from "react";

export default function Header() {
  const [active, setActive] = React.useState<string | null>(null);

  React.useEffect(() => {
    const ids = ["about", "services", "contact"];
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);

    // Observe sections and set active link
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute("id");
          if (!id) return;
          if (entry.isIntersecting) {
            setActive(id);
          }
        });
      },
      {
        // Trigger when ~60% of the section is visible, offset for fixed header
        root: null,
        rootMargin: "-64px 0px -40% 0px",
        threshold: 0.6,
      }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  const linkClass = (id?: string) =>
    [
      "transition-colors",
      active === id
        ? "text-[var(--brand-primary)] font-medium"
        : "text-neutral-700 hover:text-[var(--brand-primary)]",
    ].join(" ");

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-neutral-200 shadow-sm">
      <div className="max-w-7xl mx-auto h-16 px-4 sm:px-6 lg:px-8 flex items-center">
        <Link href="/" className="inline-flex items-center" aria-label="CinemaTech Home">
          <Image
            src="/cinematech-logo.png"
            alt="CinemaTech"
            width={240}
            height={48}
            priority
          />
        </Link>

        <nav className="ml-auto hidden md:flex items-center gap-6 text-sm">
          <Link href="/" className={linkClass()}>
            Home
          </Link>
          <Link href="/#about" className={linkClass("about")}>
            About
          </Link>
          <Link href="/#services" className={linkClass("services")}>
            Services
          </Link>
          <Link href="/#contact" className={linkClass("contact")}>
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
