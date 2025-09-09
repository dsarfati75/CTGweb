// app/support/page.tsx
"use client";

import React from "react";

const HOSTED_FORM_URL = "https://cinematech.zohodesk.com/portal/en/newticket";

export default function Support() {
  React.useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  return (
    <main className="min-h-screen bg-neutral-50">
      <section className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-2">Submit a Support Ticket</h1>
        <p className="text-neutral-600 mb-6">
          Tell us what’s going on and we’ll jump on it.
        </p>

        <div className="bg-white rounded-2xl p-6 shadow">
          <iframe
            src={HOSTED_FORM_URL}
            title="Cinematech Group Support Form"
            width="100%"
            height="1200"
            style={{ border: "0", borderRadius: "0.75rem" }}
            frameBorder={0}
            loading="eager"
          />
        </div>
      </section>
    </main>
  );
}
