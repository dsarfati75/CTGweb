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

        {/* Load Zoho's script library */}
        <Script
          id="zoho-lib"
          src="https://d17nz991552y2g.cloudfront.net/app/js/jqueryandencoder.ef05974972bf3bca1b87.js"
          strategy="afterInteractive"
        />

        {/* Attachment click handler */}
        <Script
          id="ctg-attach-click"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              document.addEventListener('click', function(e){
                var t = e.target;
                if (t && t.id === 'zsBrowseAttachment') {
                  var inputs = Array.from(document.querySelectorAll('#zohoSupportWebToCase .wtcuploadinput'));
                  var current = inputs.find(el => window.getComputedStyle(el).display !== 'none') || inputs[0];
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
                    try { console.warn('Honeypot triggered:', trap.value); } catch(_) {}
                  }
                }, true);
              })();
            `,
          }}
        />

        {/* CAPTCHA loader (fixes React blocking script inside form HTML) */}
        <Script
          id="captcha-loader"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.addEventListener('load', function(){
                setTimeout(function(){
                  if (typeof zsRegenerateCaptcha === 'function') {
                    zsRegenerateCaptcha();
                  }
                }, 1500);
              });
            `,
          }}
        />

        {/* Styling overrides */}
        <style jsx global>{`
          #zohoSupportWebToCase textarea,
          #zohoSupportWebToCase input[type='text'],
          #zohoSupportWebToCase input[type='date'],
          #zohoSupportWebToCase select {
            border: 1px solid #ddd;
            padding: 8px 10px;
            border-radius: 6px;
            width: 280px;
          }

          #zohoSupportWebToCase input[type='submit'] {
            background: var(--brand-primary, #0f172a);
            color: #fff;
            padding: 10px 16px;
            border-radius: 10px;
            border: none;
            cursor: pointer;
          }

          #zohoSupportWebToCase input[type='submit']:hover {
            filter: brightness(1.05);
          }

          #zohoSupportWebToCase #zsBrowseAttachment {
            display: inline-block;
            padding: 10px 14px;
            border: 1px solid #ccc;
            background: #f3f4f6;
            border-radius: 6px;
            cursor: pointer;
            margin-bottom: 8px;
            font-weight: 500;
          }

          #zohoSupportWebToCase #zsCaptcha {
            display: flex;
            align-items: center;
            gap: 10px;
            margin: 12px 0;
          }

          #zohoSupportWebToCase input[name='zsWebFormCaptchaWord'] {
            width: 150px;
            padding: 8px 10px;
            border: 1px solid #ddd;
            border-radius: 6px;
          }
        `}</style>

        {/* Form HTML with working CAPTCHA and honeypot */}
        <div
          id="zohoSupportWebToCase"
          className="bg-white rounded-2xl p-6 text-center"
          dangerouslySetInnerHTML={{
            __html: `
              <form name='zsWebToCase_1146316000000362410' id='zsWebToCase_1146316000000362410'
                action='https://desk.zoho.com/support/WebToCase' method='POST'
                onSubmit='return zsValidateMandatoryFields()' enctype='multipart/form-data'>

                <input type='hidden' name='xnQsjsdp' value='edbsn20d0b2b8b2eb8bef7669d94dee48bb88'/>
                <input type='hidden' name='xmIwtLD' value='edbsn426d854a62b072b317083496b136c9fae94dea103ef376e35d7fd1b1a3cd8bb2'/>
                <input type='hidden' name='xJdfEaS' value=''/>
                <input type='hidden' name='actionType' value='Q2FzZXM='/>
                <input type='hidden' name='returnURL' value='https://cinematechgroup.com/support'/>

                <!-- Honeypot -->
                <input type='text' name='ctg_website' id='ctg_website' style='display:none' tabindex='-1' autocomplete='off' />

                <table border='0' cellspacing='0' class='zsFormClass'>
                  <tr><td colspan='2'><strong>Submit a ticket</strong></td></tr>
                  <tr><td>Contact Name</td><td><input type='text' name='Contact Name' class='manfieldbdr'/></td></tr>
                  <tr><td>Phone</td><td><input type='text' name='Phone' class='manfieldbdr'/></td></tr>
                  <tr><td>Email</td><td><input type='text' name='Email' class='manfieldbdr'/></td></tr>
                  <tr><td>Priority</td><td>
                    <select name='Priority' id='Priority'>
                      <option value=''>-None-</option>
                      <option value='High'>High</option>
                      <option value='Medium'>Medium</option>
                      <option value='Low'>Low</option>
                    </select>
                  </td></tr>
                  <tr><td>Subject</td><td><input type='text' name='Subject' class='manfieldbdr'/></td></tr>
                  <tr><td>Description</td><td><textarea name='Description' class='manfieldbdr'></textarea></td></tr>

                  <!-- Attachments -->
                  <tr><td>Attachment</td><td>
                    <span id='zsBrowseAttachment'>Attach files</span>
                    <input class='wtcuploadinput' type='file' name='attachment_1' id='zsattachment_1' />
                    <input class='wtcuploadinput' type='file' name='attachment_2' id='zsattachment_2' style='display:none;' />
                    <input class='wtcuploadinput' type='file' name='attachment_3' id='zsattachment_3' style='display:none;' />
                    <input class='wtcuploadinput' type='file' name='attachment_4' id='zsattachment_4' style='display:none;' />
                    <input class='wtcuploadinput' type='file' name='attachment_5' id='zsattachment_5' style='display:none;' />
                    <div id='zsFileBrowseAttachments'></div>
                  </td></tr>

                  <!-- CAPTCHA -->
                  <tr><td>Captcha</td><td>
                    <div id='zsCaptcha'>
                      <img id='zsCaptchaUrl' src='https://desk.zoho.com/support/GenerateCaptcha?action=getCaptcha' alt='Captcha' />
                      <a href='javascript:void(0)' onclick='zsRegenerateCaptcha()'>Reload</a>
                    </div>
                    <input type='text' name='zsWebFormCaptchaWord' placeholder='Enter CAPTCHA' />
                    <input type='hidden' name='zsCaptchaSrc' value='' />
                  </td></tr>

                  <tr>
                    <td colSpan='2' align='center'>
                      <input type='submit' id='zsSubmitButton_1146316000000362410' value='Submit'/>
                      &nbsp;&nbsp;
                      <input type='button' value='Reset' onclick="zsResetWebForm('1146316000000362410')" />
                    </td>
                  </tr>
                </table>
              </form>
            `,
          }}
        />
      </section>
    </main>
  );
}
