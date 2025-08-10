'use client';

export default function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="rounded-xl border px-3 py-1 text-sm hover:bg-neutral-50"
      aria-label="Download as PDF"
      title="Download as PDF"
    >
      Download PDF
    </button>
  );
}
