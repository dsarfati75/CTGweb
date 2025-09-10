// app/support/page.tsx
"use client";

import React from "react";
import Script from "next/script";

export default function Support() {
  // 👇 this runs once when the page mounts
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

        {/* ...rest of your Zoho form and scripts... */}


        {/* Zoho library (jQuery + encoder) */}
        <Script
          id="zoho-lib"
          src="https://d17nz991552y2g.cloudfront.net/app/js/jqueryandencoder.ef05974972bf3bca1b87.js"
          strategy="afterInteractive"
        />

        {/* Your inline Zoho helper script */}
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


        {/* Zoho CSS (global so their form renders correctly) */}
<style jsx global>{`
  /* === Zoho's base styles (kept) === */
  #zohoSupportWebToCase textarea,
  #zohoSupportWebToCase input[type='text'],
  #zohoSupportWebToCase input[type='date'],
  #zohoSupportWebToCase select,
  .wb_common { width: 280px; }
  #zohoSupportWebToCase td { padding: 11px 5px; }
  #zohoSupportWebToCase textarea,
  #zohoSupportWebToCase input[type='text'],
  #zohoSupportWebToCase input[type='date'],
  #zohoSupportWebToCase select {
    border: 1px solid #ddd; padding: 8px 10px; border-radius: 6px; /* a little taller */
  }
  #zohoSupportWebToCase select { box-sizing: unset; }
  #zohoSupportWebToCase .wb_selectDate { width: auto }
  #zohoSupportWebToCase input.wb_cusInput { width: 108px }
  .wb_FtCon{ display:flex; align-items:center; justify-content:flex-end; margin-top:15px; padding-left:10px }
  .wb_logoCon{ display:flex; margin-left:5px }
  .wb_logo{ max-width:16px; max-height:16px }
  #zohoSupportWebToCase .wb_multi_pick {
    border: 1px solid #ddd; padding: 3px 5px; border-radius: 3px; width: 280px; height: 95px; overflow-y:auto;
  }
  #zohoSupportWebToCase .wb_multi_pick_label { display:block; }
  #zohoSupportWebToCase .wb_multi_pick_input,  .wb_multi_pick_input_all{ vertical-align: middle; margin-right: 5px; }
  .zsFormClass{ background-color:#FFFFFF; width:600px; border-radius:1rem; box-shadow:0 10px 30px rgba(0,0,0,0.06) }
  .zsFontClass{ color:#000000; font-family:Arial; font-size:13px; vertical-align:top }
  .manfieldbdr{ border-left: 1px solid #ff6448!important }
  input[type=file]::-webkit-file-upload-button{ cursor:pointer; }
  .wtcuploadinput{ cursor:pointer; float:left; width:62px; margin-top:-20px; opacity:0; clear:both; }
  .filenamecls{ margin-right:15px; float:left; margin-top:5px; }
  .clboth{ clear:both; }
  #zsFileBrowseAttachments{ clear:both; margin:5px 0 10px; }
  #tooltip-zc{
    font: normal 12px Arial, Helvetica, sans-serif; line-height:18px; position:absolute; padding:8px; margin:20px 0 0;
    background:#fff; border:1px solid #528dd1; border-radius:5px; color:#777;
    box-shadow:5px 5px 20px rgba(0,0,0,0.2); z-index:10000;
  }
  #zsCloudAttachmentIframe{ width:100%; height:100%; z-index:99999!important; position:fixed; left:0; top:0; border-style:none; display:none; background-color:#fff; }

  /* === CinemaTech polish === */
  /* Make "Attach files" act & look like a proper button */
  #zohoSupportWebToCase #zsBrowseAttachment {
    display:inline-flex; align-items:center; justify-content:center;
    padding: 10px 14px; border: 1px solid #e5e7eb; border-radius: 10px;
    background: #f9fafb; font-weight: 600; margin-bottom: 8px; user-select: none;
  }
  #zohoSupportWebToCase #zsBrowseAttachment:hover { background:#f3f4f6; }

  /* File name “chips” */
  #zohoSupportWebToCase .filenamecls {
    padding: 4px 8px; border: 1px solid #e5e7eb; border-radius: 6px; background: #fafafa;
  }

  /* Buttons */
  #zohoSupportWebToCase input[type='submit']{
    background: var(--brand-primary, #0f172a); color:#fff; border:none;
    padding:10px 16px; border-radius:10px; cursor:pointer;
  }
  #zohoSupportWebToCase input[type='submit']:hover{ filter:brightness(1.05); }
  #zohoSupportWebToCase input[type='button']{
    background:#e5e7eb; color:#111827; border:1px solid #d1d5db;
    padding:10px 16px; border-radius:10px; cursor:pointer;
  }
  #zohoSupportWebToCase input[type='button']:hover{ background:#eaeaea; }

  /* Helper text tone */
  #zohoSupportWebToCase #zsMaxSizeMessage,
  #zohoSupportWebToCase #zsMaxLimitMessage { color:#6b7280 !important; }

  /* Keep the table centered inside your card */
  #zohoSupportWebToCase .zsFormClass { margin: 0 auto; }
`}</style>



        {/* Raw form HTML */}
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
  <table border='0' cellspacing='0' class='zsFormClass' style="margin:0 auto;">
    <tr><td colspan='2' class='zsFontClass'><strong>Submit a ticket</strong></td></tr><br>
    <tr><td class='zsFontClass' width='25%' align='left'>Contact Name&nbsp;&nbsp;</td><td align='left' width='75%'><input type='text' maxlength='120' name='Contact Name' class='manfieldbdr'/></td></tr>
    <tr><td class='zsFontClass' width='25%' align='left'>Phone&nbsp;&nbsp;</td><td align='left' width='75%'><input type='text' maxlength='120' name='Phone' value='' class='manfieldbdr'/></td></tr>
    <tr><td class='zsFontClass' width='25%' align='left'>Email&nbsp;&nbsp;</td><td align='left' width='75%'><input type='text' maxlength='120' name='Email' value='' class='manfieldbdr'/></td></tr>
    <tr><td class='zsFontClass' width='25%' align='left'>Priority &nbsp;&nbsp;</td><td align='left' width='75%'>
      <select name='Priority' value='' onchange="setDependent(this, false)" id='Priority'>
        <option value=''>-None-</option>
        <option value='High'>High</option>
        <option value='Medium'>Medium</option>
        <option value='Low'>Low</option>
      </select>
    </td></tr>
    <tr><td class='zsFontClass' width='25%' align='left'>Subject&nbsp;&nbsp;</td><td align='left' width='75%'><input type='text' maxlength='255' name='Subject' value='' class='manfieldbdr'/></td></tr>
    <tr><td class='zsFontClass' width='25%' align='left'>Description &nbsp;&nbsp;</td><td align='left' width='75%'><textarea name='Description' maxlength='3000' width='250' height='250' class='manfieldbdr'></textarea></td></tr>
    <tr><td class='zsFontClass' width='25%' align='left'>Attachment &nbsp;&nbsp;</td>
      <td align='left' width='75%'>
        <span class="zsFontClass wtcuploadfile" id="zsBrowseAttachment">Attach files</span>
        <input class="wtcuploadinput" type='file' name='attachment_1' id='zsattachment_1' style='display:block;' onclick='zsOpenFileBrowseAttachment(event)' onchange='zsRenderBrowseFileAttachment(this.value, this)'/>
        <input class="wtcuploadinput" type='file' name='attachment_2' id='zsattachment_2' style='display:none;' onclick='zsOpenFileBrowseAttachment(event)' onchange='zsRenderBrowseFileAttachment(this.value, this)'/>
        <input class="wtcuploadinput" type='file' name='attachment_3' id='zsattachment_3' style='display:none;' onclick='zsOpenFileBrowseAttachment(event)' onchange='zsRenderBrowseFileAttachment(this.value, this)'/>
        <input class="wtcuploadinput" type='file' name='attachment_4' id='zsattachment_4' style='display:none;' onclick='zsOpenFileBrowseAttachment(event)' onchange='zsRenderBrowseFileAttachment(this.value, this)'/>
        <input class="wtcuploadinput" type='file' name='attachment_5' id='zsattachment_5' style='display:none;' onclick='zsOpenFileBrowseAttachment(event)' onchange='zsRenderBrowseFileAttachment(this.value, this)'/>
        <div class="clboth"></div>
        <span id='zsMaxSizeMessage' style='color:black;font-size: 8px;float: left;'>Each of your file(s) can be up to 20MB in size.</span>
        <span id='zsMaxLimitMessage' style='color:black;font-size: 8px;float: left;margin-left: 14px;display: none;'>You can attach as many as 5 files at a time.</span>
        <div id='zsFileBrowseAttachments'></div>
      </td>
    </tr>
    <tr>
      <td style='padding: 11px 5px 0 5px;' colspan='2' align='center' width='25%'>
        <input type='submit' id="zsSubmitButton_1146316000000362410" class='zsFontClass' value='Submit'>
        &nbsp; &nbsp;
        <input type='button' class='zsFontClass' value='Reset' onclick="zsResetWebForm('1146316000000362410')">
      </td>
    </tr>
    <tr>
      <td width='25%' align='left'></td>
      <td style='padding: 0 5px;' align='left' width='75%'>
        <div class='wb_FtCon wb_common'>
          <span>powered by&nbsp;</span>
          <a target='_blank' rel='noopener noreferrer' href='https://zoho.com/desk' class='wb_logoCon'>
            <img class='wb_logo' src='https://d1ydxa2xvtn0b5.cloudfront.net/app/images/portalLogo.de847024ebc0131731a3.png' />
          </a>
        </div>
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



