const HERO_QUOTE =
  "CinemaTech isn’t just a vendor — they’re a trusted partner we rely on for critical decisions across our venues.";

type Testimonial = {
  headline: string;
  body: string;
  attribution: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    headline: "CinemaTech has been an outstanding partner for our business.",
    body:
      "Operating multiple dine-in cinema locations means our technology has to be consistent, secure, and reliable every day. CinemaTech has been an outstanding partner in helping us standardize our infrastructure, stabilize our environments, and reduce operational surprises across our venues.\n\n" +
      "David understands how downtime affects not just systems, but guest experience, staff efficiency, and revenue. He communicates clearly, plans ahead, and brings structure to what used to feel reactive and fragmented.\n\n" +
      "What really sets CinemaTech apart is the relationship. David isn’t just a vendor we call when something breaks — he’s someone we trust, bounce ideas off of, and rely on when making important technology decisions. He’s invested in our success and treats our business with genuine care and accountability. That level of partnership is rare.",
    attribution: "Managing Partner, Multi-Location Dine-In Cinema Operator",
  },
  {
    headline:
      "Reliable technology is critical in our business — and CinemaTech consistently delivers.",
    body:
      "Managing technology across multiple dine-in cinema locations requires consistency, strong security posture, and a partner who understands operational risk. CinemaTech delivers exactly what you want in a technology partner: reliability, accountability, and deep expertise.\n\n" +
      "David has helped us modernize our infrastructure, improve visibility across our systems, and maintain stable uptime across our venues — all while communicating clearly and keeping initiatives organized and on track.\n\n" +
      "What truly differentiates CinemaTech is the trust. David understands our business at a strategic level and consistently provides thoughtful guidance, not just technical fixes. He’s someone we respect personally and professionally, and that trust matters when you’re making decisions that directly impact operations and guest experience.",
    attribution: "Operations Leadership, Multi-Venue Cinema Group",
  },
];

function QuoteIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 11H7.5A2.5 2.5 0 0 0 5 13.5V19h6v-7.5A2.5 2.5 0 0 0 8.5 9H7" />
      <path d="M19 11h-2.5A2.5 2.5 0 0 0 14 13.5V19h6v-7.5A2.5 2.5 0 0 0 17.5 9H16" />
    </svg>
  );
}

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <div className="relative h-full rounded-2xl border border-white/10 bg-white/5 p-6 shadow-sm backdrop-blur transition hover:shadow-md">
      <div className="flex items-start gap-3">
        <div className="mt-1 rounded-xl border border-white/10 bg-white/5 p-2">
          <QuoteIcon className="h-5 w-5 opacity-80" />
        </div>

        <div className="text-lg font-semibold leading-snug">{t.headline}</div>
      </div>

      <div className="mt-4 whitespace-pre-line text-sm leading-relaxed opacity-90">
        {t.body}
      </div>

      <div className="mt-6 border-t border-white/10 pt-4 text-sm font-medium opacity-80">
        — {t.attribution}
      </div>
    </div>
  );
}

export default function TestimonialsPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-16">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight">Testimonials</h1>
        <p className="mt-3 text-base opacity-80">
          What our partners say about working with CinemaTech.
        </p>
      </header>

      <section className="mb-14">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-10 text-center shadow-sm backdrop-blur">
          <QuoteIcon className="mx-auto mb-4 h-8 w-8 opacity-70" />
          <p className="mx-auto max-w-3xl text-xl font-semibold leading-relaxed">
            {HERO_QUOTE}
          </p>
        </div>
      </section>

      <section className="grid gap-8 md:grid-cols-2">
        {TESTIMONIALS.map((t, idx) => (
          <TestimonialCard key={idx} t={t} />
        ))}
      </section>
    </main>
  );
}
