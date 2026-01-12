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
              <li className="flex gap-2"><CheckIcon className="w-5 h-5 mt-0.5" /> Project management that respects opening weekends</li>
              <li className="flex gap-2"><CheckIcon className="w-5 h-5 mt-0.5" /> Vendor wrangling so you don’t have to</li>
              <li className="flex gap-2"><CheckIcon className="w-5 h-5 mt-0.5" /> Clear reporting, no black boxes</li>
            </ul>
          </div>
          <div className="lg:col-span-1">
            <div className="rounded-2xl shadow-md bg-white border border-neutral-200">
              <div className="px-6 py-4 border-b border-neutral-200"><h3 className="font-semibold">Quick Facts</h3></div>
              <div className="px-6 py-5 text-sm text-neutral-700">
                <Fact label="Industry" value="Cinema (dine-in & traditional)" />
                <Fact label="Core" value="RMM • EDR • Backups • Networks" />
                <Fact label="Headquarters" value="Texas, USA" />
                <Fact label="Response" value="Same-day for critical incidents" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="py-16 border-t border-neutral-200 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="mb-8">
            <h2 className="text-3xl font-bold tracking-tight">Testimonials</h2>
            <p className="mt-2 text-neutral-600">
              Trusted by multi-location cinema operators who need reliability, security, and a true partner.
            </p>
          </header>

          <div className="mb-10 rounded-2xl shadow-sm bg-white border border-neutral-200">
            <div className="px-6 py-8">
              <div className="mx-auto max-w-3xl text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--brand-soft)]">
                  <QuoteIcon className="h-6 w-6" />
                </div>
                <p className="text-xl font-semibold leading-relaxed">
                  CinemaTech isn’t just a vendor — they’re a trusted partner we rely on for critical decisions across our venues.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <TestimonialCard
              headline="CinemaTech has been an outstanding partner for our business."
              body={`Operating multiple dine-in cinema locations means our technology has to be consistent, secure, and reliable every day. CinemaTech has been an outstanding partner in helping us standardize our infrastructure, stabilize our environments, and reduce operational surprises across our venues.

David understands how downtime affects not just systems, but guest experience, staff efficiency, and revenue. He communicates clearly, plans ahead, and brings structure to what used to feel reactive and fragmented.

What really sets CinemaTech apart is the relationship. David isn’t just a vendor we call when something breaks — he’s someone we trust, bounce ideas off of, and rely on when making important technology decisions. He’s invested in our success and treats our business with genuine care and accountability. That level of partnership is rare.`}
              attribution="Managing Partner, Multi-Location Dine-In Cinema Operator"
            />

            <TestimonialCard
              headline="Reliable technology is critical in our business — and CinemaTech consistently delivers."
              body={`Managing technology across multiple dine-in cinema locations requires consistency, strong security posture, and a partner who understands operational risk. CinemaTech delivers exactly what you want in a technology partner: reliability, accountability, and deep expertise.

David has helped us modernize our infrastructure, improve visibility across our systems, and maintain stable uptime across our venues — all while communicating clearly and keeping initiatives organized and on track.

What truly differentiates CinemaTech is the trust. David understands our business at a strategic level and consistently provides thoughtful guidance, not just technical fixes. He’s someone we respect personally and professionally, and that trust matters when you’re making decisions that directly impact operations and guest experience.`}
              attribution="Operations Leadership, Multi-Venue Cinema Group"
            />
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-16 border-t border-neutral-200 bg-white scroll-mt-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight">Let’s talk</h2>
          <p className="mt-4 text-neutral-600">
            Have a question or need help with your cinema technology? Email us at{" "}
            <a className="underline text-[var(--brand-primary)]" href="mailto:info@cinematechgroup.com">
              info@cinematechgroup.com
            </a>
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-neutral-600">
            © {new Date().getFullYear()} CinemaTech. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-sm">
            <a href="#services" className="hover:text-[var(--brand-primary)]">Services</a>
            <a href="#testimonials" className="hover:text-[var(--brand-primary)]">Testimonials</a>
            <a href="#contact" className="hover:text-[var(--brand-primary)]">Contact</a>
          </div>
        </div>
      </footer>

      <SmokeTests />
    </div>
  );
}

/* ---------------- Components ---------------- */

function Feature({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="p-2 rounded-xl bg-[var(--brand-soft)]">{icon}</div>
      <div>
        <div className="font-medium">{title}</div>
        <div className="text-sm text-neutral-600">{desc}</div>
      </div>
    </div>
  );
}

function ServiceCard({ icon, title, bullets }: { icon: React.ReactNode; title: string; bullets: string[] }) {
  return (
    <div className="rounded-2xl shadow-sm bg-white border border-neutral-200">
      <div className="px-6 pt-5 pb-3">
        <div className="flex items-center gap-2 text-lg font-semibold">
          <span className="p-2 rounded-xl bg-[var(--brand-soft)]">{icon}</span>
          {title}
        </div>
      </div>
      <div className="px-6 pb-5">
        <ul className="space-y-2 text-sm text-neutral-700">
          {bullets.map((b) => (
            <li key={b} className="flex items-start gap-2">
              <CheckIcon className="w-4 h-4 mt-0.5" /> {b}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function TestimonialCard({
  headline,
  body,
  attribution,
}: {
  headline: string;
  body: string;
  attribution: string;
}) {
  return (
    <div className="rounded-2xl shadow-sm bg-white border border-neutral-200 h-full">
      <div className="px-6 pt-6 pb-3">
        <div className="flex items-start gap-3">
          <div className="mt-1 rounded-xl bg-[var(--brand-soft)] p-2">
            <QuoteIcon className="h-5 w-5" />
          </div>
          <h3 className="text-lg font-semibold leading-snug">{headline}</h3>
        </div>
      </div>
      <div className="px-6 pb-6">
        <p className="whitespace-pre-line text-sm leading-relaxed text-neutral-700">{body}</p>
        <div className="mt-6 border-t border-neutral-200 pt-4 text-sm font-medium text-neutral-600">
          — {attribution}
        </div>
      </div>
    </div>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div data-fact className="grid grid-cols-[max-content,1fr] items-baseline gap-x-4 py-1.5 border-b last:border-b-0 border-neutral-200/60">
      <span className="text-neutral-500 whitespace-nowrap">{label}</span>
      <span className="font-medium text-neutral-800 break-words">{value}</span>
    </div>
  );
}

/* --- Inline Icons --- */

function QuoteIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M10 11H7.5A2.5 2.5 0 0 0 5 13.5V19h6v-7.5A2.5 2.5 0 0 0 8.5 9H7" />
      <path d="M19 11h-2.5A2.5 2.5 0 0 0 14 13.5V19h6v-7.5A2.5 2.5 0 0 0 17.5 9H16" />
    </svg>
  );
}

function CheckIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

function ServerIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="4" width="18" height="8" rx="2" />
      <rect x="3" y="12" width="18" height="8" rx="2" />
    </svg>
  );
}

function ShieldIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function NetworkIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="9" r="4" />
      <path d="M8 21h8" />
      <path d="M12 13v8" />
    </svg>
  );
}

function CableIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="6" y="7" width="12" height="6" rx="2" />
    </svg>
  );
}

function MailIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  );
}

function PhoneIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07" />
    </svg>
  );
}

/* Smoke Tests */
function SmokeTests() {
  useEffect(() => {
    const tests: Array<[string, boolean]> = [
      ["Services exists", !!document.getElementById("services")],
      ["About exists", !!document.getElementById("about")],
      ["Testimonials exists", !!document.getElementById("testimonials")],
      ["Contact exists", !!document.getElementById("contact")],
    ];
    tests.forEach(([name, pass]) => {
      if (!pass) console.error("SMOKE TEST FAIL:", name);
    });
  }, []);
  return null;
}
