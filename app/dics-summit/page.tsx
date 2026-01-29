// app/dics-summit/page.tsx

export const metadata = {
  title: "Free Summit Attendee IT Health Check | CinemaTech",
  description:
    "Dine-In Cinema Summit attendees: request a free cinema-focused IT health check covering monitoring, security, backups, and network/POS readiness.",
};

export default function DicsSummitPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-5xl px-6 py-14 md:py-20">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border bg-white px-3 py-1 text-xs font-medium text-slate-700">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Free for Summit Attendees
              </div>

              <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                Free Cinema IT Health Check
                <span className="block text-slate-600">
                  Security + Uptime Focused
                </span>
              </h1>

              <p className="mt-4 text-base leading-relaxed text-slate-700">
                Built specifically for independent cinema operators. We’ll review
                your monitoring, endpoint security, backups, and network/POS
                readiness and send a short prioritized report.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#request"
                  className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"
                >
                  Request the free assessment
                </a>

                <a
                  href="mailto:info@cinematechgroup.com?subject=Summit%20Assessment%20Request"
                  className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
                >
                  Email to schedule
                </a>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4 text-sm">
                <div className="rounded-xl border bg-white p-4">
                  <div className="font-semibold">Deliverable</div>
                  <div className="mt-1 text-slate-600">
                    Findings + prioritized recommendations
                  </div>
                </div>
                <div className="rounded-xl border bg-white p-4">
                  <div className="font-semibold">Best fit</div>
                  <div className="mt-1 text-slate-600">
                    2–10 location operators
                  </div>
                </div>
              </div>
            </div>

            {/* Offer card */}
            <div className="rounded-2xl border bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold">What’s included</h2>
              <ul className="mt-4 space-y-3 text-sm text-slate-700">
                <li>• Endpoint security & patch posture snapshot</li>
                <li>• Backup & recovery readiness check</li>
                <li>• Network/POS segmentation sanity review (PCI-aware)</li>
                <li>• Remote access & admin exposure scan</li>
                <li>• Single points of failure + quick wins</li>
              </ul>

              <div className="mt-6 rounded-xl bg-slate-50 p-4 text-sm text-slate-700">
                No obligation. If you like the findings, we can discuss ongoing
                monitoring and security coverage.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="mx-auto max-w-5xl px-6 py-12">
        <h2 className="text-2xl font-semibold">Who this is for</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border bg-white p-6">
            <div className="font-semibold text-sm">Independent operators</div>
            <div className="mt-2 text-sm text-slate-700">
              Small chains without full in-house IT teams.
            </div>
          </div>
          <div className="rounded-2xl border bg-white p-6">
            <div className="font-semibold text-sm">Mixed vendors</div>
            <div className="mt-2 text-sm text-slate-700">
              POS, ISPs, projector techs — someone must own the whole picture.
            </div>
          </div>
          <div className="rounded-2xl border bg-white p-6">
            <div className="font-semibold text-sm">Uptime matters</div>
            <div className="mt-2 text-sm text-slate-700">
              Fewer Friday-night outages and emergency calls.
            </div>
          </div>
        </div>
      </section>

      {/* Request */}
      <section id="request" className="border-t bg-slate-50">
        <div className="mx-auto max-w-5xl px-6 py-12">
          <h2 className="text-2xl font-semibold">Request the free assessment</h2>
          <p className="mt-2 max-w-2xl text-sm text-slate-700">
            Email us or use the contact form on our site and reference
            <strong> “DICS Summit Assessment.”</strong>
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href="mailto:info@cinematechgroup.com?subject=DICS%20Summit%20Assessment"
              className="rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"
            >
              Email info@cinematechgroup.com
            </a>

            <a
              href="/contact"
              className="rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-semibold hover:bg-slate-50"
            >
              Use contact form
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
