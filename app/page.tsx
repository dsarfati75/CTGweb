'use client';
import React, { useEffect } from "react";

export default function CinemaTechHome() {
  const style = {
    "--brand-primary": "#004080",
    "--brand-hover": "#0059b3",
    "--brand-soft": "#e6f0ff",
  } as React.CSSProperties;

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900" style={style}>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--brand-soft)] to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight">
              RMM & EDR for Cinemas —
              <span className="block text-neutral-600 font-semibold">
                Uptime, Security, and Peace of Mind
              </span>
            </h1>
            <p className="mt-4 text-neutral-700 text-lg">
              We keep all of your critical devices patched, monitored, and protected — so weekend crowds never notice the tech.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href="#services"
                className="inline-flex items-center justify-center px-4 py-2 rounded-2xl border border-neutral-300 text-neutral-800 hover:bg-neutral-100"
              >
                Explore Services
              </a>
            </div>
            <ul className="mt-6 grid sm:grid-cols-2 gap-2.5 text-sm text-neutral-700">
              {[
                "24/7 monitoring & alerting",
                "OS & app patch management",
                "EDR/MDR threat protection",
                "Server & config backups",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <CheckIcon className="w-4 h-4" /> {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-[var(--brand-soft)] rounded-full blur-2xl" />
            <div className="rounded-2xl shadow-md bg-white border border-neutral-200">
              <div className="px-6 pt-6 pb-3">
                <h3 className="text-xl font-semibold">What we watch so you don't have to</h3>
              </div>
              <div className="px-6 pb-6 grid sm:grid-cols-2 gap-3.5 text-sm">
                <Feature icon={<ServerIcon />} title="Servers & POS" desc="All of your critical devices — healthy, patched, backed up." />
                <Feature icon={<ShieldIcon />} title="Security" desc="EDR/MDR, least-privilege, and compliance-minded baselines." />
                <Feature icon={<NetworkIcon />} title="Networks" desc="Switches, APs, firewalls tuned for lobby & auditorium loads." />
                <Feature icon={<CableIcon />} title="Hardware Lifecycle" desc="Warranty tracking and refresh planning before EOL." />
              </div>
            </div>
          </div>
