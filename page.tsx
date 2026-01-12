'use client';
import React, { useEffect } from "react";

// Paste your FULL data URI into data/cinematech_logo_datauri_full.txt, then run: npm run prepare-logo
const LOGO_DATA_URI = "data:image/jpeg;base64,REPLACE_WITH_FULL_BASE64_STRING";

export default function CinemaTechSitePreview() {
  const style = {
    "--brand-primary": "#004080",
    "--brand-hover": "#0059b3",
    "--brand-soft": "#e6f0ff",
  } as React.CSSProperties;

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900" style={style}>
      {/* NAV */}
      <header className="sticky top-0 z-40 backdrop-blur border-b border-neutral-200/70 bg-white/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <img src={LOGO_DATA_URI} alt="CinemaTech" className="h-10 w-auto object-contain" />
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#services" className="hover:text-[var(--brand-primary)]">Services</a>
            <a href="#about" className="hover:text-[var(--brand-primary)]">About</a>
            <a href="#testimonials" className="hover:text-[var(--brand-primary)]">Testimonials</a>
            <a href="#contact" className="hover:text-[var(--brand-primary)]">Contact</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--brand-soft)] to-transparent"/>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight">
              RMM & EDR for Cinemas —
              <span className="block text-neutral-600 font-semibold">Uptime, Security, and Peace of Mind</span>
            </h1>
            <p className="mt-4 text-neutral-700 text-lg">
              We keep all of your critical devices patched, monitored, and protected — so weekend crowds never notice the tech.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a href="#services" className="inline-flex items-center justify-center px-4 py-2 rounded-2xl border border-neutral-300 text-neutral-800 hover:bg-neutral-100">
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
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-[var(--brand-soft)] rounded-full blur-2xl"/>
            <div className="rounded-2xl shadow-md bg-white border border-neutral-200">
              <div className="px-6 pt-6 pb-3">
                <h3 className="text-xl font-semibold">What we watch so you don't have to</h3>
              </div>
              <div className="px-6 pb-6 grid sm:grid-cols-2 gap-3.5 text-sm">
                <Feature icon={<ServerIcon />} title="Servers & POS" desc="All of your critical devices — healthy, patched, backed up."/>
                <Feature icon={<ShieldIcon />} title="Security" desc="EDR/MDR, least-privilege, and compliance-minded baselines."/>
                <Feature icon={<NetworkIcon />} title="Networks" desc="Switches, APs, firewalls tuned for lobby & auditorium loads."/>
                <Feature icon={<CableIcon />} title="Hardware Lifecycle" desc="Warranty tracking and refresh planning before EOL."/>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-16 border-t border-neutral-200 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="mb-8">
            <h2 className="text-3xl font-bold tracking-tight">Services</h2>
            <p className="mt-2 text-neutral-600">Built for the unique cadence of cinema operations.</p>
          </header>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            <ServiceCard icon={<ServerIcon />} title="Remote Monitoring & Management" bullets={["24/7 alerts", "Patch orchestration", "Asset inventory & reporting"]} />
            <ServiceCard icon={<ShieldIcon />} title="Endpoint Detection & Response" bullets={["EDR/MDR rollout", "Threat hunting", "Policy hardening"]} />
            <ServiceCard icon={<NetworkIcon />} title="Network Cleanup & Design" bullets={["Rack remediation", "Wi-Fi tuning", "Firewall best practices"]} />
            <ServiceCard icon={<CableIcon />} title="Lifecycle & Warranty" bullets={["EOL planning", "Warranty extensions", "Cost-avoidance strategy"]} />
            <ServiceCard icon={<MailIcon />} title="Backup & Recovery" bullets={["Server backups", "Config snapshots", "Restore runbooks"]} />
            <ServiceCard icon={<PhoneIcon />} title="On-call & Projects" bullets={["Go-live coverage", "POS migrations", "On-prem server migrations", "Vendor management"]} />
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-16 border-t border-neutral-200 scroll-mt-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold tracking-tight">About CinemaTech</h2>
            <p className="mt-4 text-neutral-700 leading-relaxed">
              Founded by a veteran MSP consultant with 25+ years in IT, CinemaTech specializes in keeping cinema technology invisible to guests and painless for operators. We focus on practical reliability, clean installs, and documented processes that scale.
            </p>
            <ul className="mt-6 space-y-2 text-neutral-700">
              <li className="flex gap-2"><CheckIcon className="w-5 h-5 mt-0.5"/> Project management that respects opening weekends</li>
              <li className="flex gap-2"><CheckIcon className="w-5 h-5 mt-0.5"/> Vendor wrangling so you don’t have to</li>
              <li className="flex gap-2"><CheckIcon className="w-5 h-5 mt-0.5"/> Clear reporting, no black boxes</li>
            </ul>
          </div>
          <div className="lg:col-span-1">
            <div className="rounded-2xl shadow-md bg-white border border-neutral-200">
              <div className="px-6 py-4 border-b border-neutral-200"><h3 className="font-semibold">Quick Facts</h3></div>
              <div className="px-6 py-5 text-sm text-neutral-700">
                <Fact label="Industry" value="Cinema (dine-in & traditional)"/>
                <Fact label="Core" value="RMM •
