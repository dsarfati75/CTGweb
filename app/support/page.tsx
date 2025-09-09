// app/support/page.tsx
"use client";

import React from "react";
import Script from "next/script";

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

        {/* Zoho library */}
        <Script
          id="zoho-lib"
          src="https://d17nz991552y2g.cloudfront.net/app/js/jqueryandencoder.ef05974972bf3bca1b87.js"
          strategy="afterInteractive"
        />

        {/* Attach-file handler */}
        <Script
          id="ctg-attach-click"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              document.addEventListener('click', function(e){
                var t = e.target;
                if (t && t.id === 'zsBrowseAttachment') {
                  var inputs = Array.from(document.querySelectorAll('#zohoSupportWebToCase .wtcuploadinput'));
                  var current = inputs.find(function(el){ return window.getComputedStyle(el).display !== 'none'; }) || inputs[0];
                  if (current) current.click();
                }
              });
            `,
          }}
        />

        {/* Honeypot bot trap */}
        <Script
          id="ctg-honeypot"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(){
                var form = document.getElementById('zsWebToCase_1146316000000362410');
                if (!form) return;
                form.addEventListener('submit', function(e){
                  var trap = document.getElementById('ctg_website');
                  if (trap && trap.value) {
                    e.preventDefault();
                    e.stopPropagation();
                    alert('Spam submission blocked.');
                  }
                }, true);
              })();
            `,
          }}
        />

        {/* Zoho CSS (unchanged) */}
        <style jsx global>{`
          /* ...your existing CSS rules here... */
        `}</style>

        {/* Raw form HTML with honeypot field added */}
        <div
          id="zohoSupportWebToCase"
          className="bg-white rounded-2xl p-6 text-center"
          dangerouslySetInnerHTML={{
            __html: `
<form name='zsWebToCase_1146316000000362410' id='zsWebToCase_1146316000000362410' action='https://desk.zoho.com/support/WebToCase' method='POST' onSubmit='return zsValidateMandatoryFields()' enctype='multipart/form-data'>
  <input type='hidden' name='xnQsjsdp' value='edbsn20d0b2b8b2eb8bef7669d94dee48bb88'/>
  <input type='hidden' name='xmIwtLD' value='edbsn426d854a62b072b317083496b136c9fae94dea103ef376e35d7fd1b1a3cd8bb2'/>
  <input type='hidden' name='xJdfEaS' value=''/>
  <input type='hidden' name='actionType' value='Q2FzZXM='/>
  <input type="hidden" id="property(module)" value="Cases"/>
  <input type="hidden" id="dependent_field_values_Cases" value="&#x7b;&quot;JSON_VALUES&quot;&#x3a;&#x7b;&#x7d;,&quot;JSON_SELECT_VALUES&quot;&#x3a;&#x7b;&#x7d;,&quot;JSON_MAP_DEP_LABELS&quot;&#x3a;&#x5b;&#x5d;&#x7d;"/>
  <input type='hidden' name='returnURL' value='https://cinematechgroup.com/support'/>

  <!-- 👇 Honeypot field (bots will fill it, humans won’t) -->
  <input type="text" name="ctg_website" id="ctg_website" style="display:none" tabindex="-1" autocomplete="off"/>

  <table border='0' cellspacing='0' class='zsFormClass' style="margin:0 auto;">
    <!-- ...rest of your Zoho form as before... -->
  </table>
</form>
            `,
          }}
        />
      </section>
    </main>
  );
}
