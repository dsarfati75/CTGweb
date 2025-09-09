// app/support/page.tsx
"use client";

import React from "react";
import Script from "next/script";

export default function Support() {
  // Always start from top when landing on /support
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

        {/* Zoho library (jQuery + encoder) */}
        <Script
          id="zoho-lib"
          src="https://d17nz991552y2g.cloudfront.net/app/js/jqueryandencoder.ef05974972bf3bca1b87.js"
          strategy="afterInteractive"
        />

        {/* Zoho inline script (latest from your snippet, includes CAPTCHA support) */}
        <Script
          id="zoho-inline"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              function trimBoth(str){return jQuery.trim(str);}
              function setAllDependancyFieldsMapping(){var mapDependancyLabels = getMapDependenySelectValues(jQuery("[id='property(module)']").val(), "JSON_MAP_DEP_LABELS");if(mapDependancyLabels){for(var i = 0; i < mapDependancyLabels.length; i++){var label = mapDependancyLabels[i];var obj = document.forms['zsWebToCase_1146316000000362410'][label];if(obj){setDependent(obj, true);}}}}
              function getMapDependenySelectValues(module, key){var dependencyObj = jQuery.parseJSON( jQuery("[id='dependent_field_values_" + module + "']").val() );if(dependencyObj == undefined){return dependencyObj;}return dependencyObj[key];}
              function setDependent(obj, isload){var name = obj.id || (obj[0] && obj[0].id) || "";var module = jQuery("[id='property(module)']").val();var val = "";var myObject = getMapDependenySelectValues(module, "JSON_VALUES");if(myObject !=undefined){val = myObject[name];}var mySelObject = getMapDependenySelectValues(module, "JSON_SELECT_VALUES");if(val != null && val != "" && val != "null" && mySelObject){var fields = val;for(var i in fields){if (fields.hasOwnProperty(i)){var isDependent = false;var label = i;var values = fields[i];if(label.indexOf(")") > -1){label = label.replace(/\\)/g, '_____');}if(label.indexOf("(") > -1){label = label.replace(/\\(/g, '____');}if(label.indexOf(".") > -1){label = label.replace(/\\./g, '___');}var depObj = document.forms['zsWebToCase_1146316000000362410'][label];if(depObj && depObj.options){var mapValues = "";var selected_val = depObj.value;var depLen = depObj.options.length-1;for (var n = depLen; n >= 0; n--) {if (depObj.options[n].selected){if(mapValues == ""){mapValues = depObj.options[n].value;}else{mapValues = mapValues + ";;;" + depObj.options[n].value;}}}depObj.value = "";var selectValues = mySelObject[label];for(var k in values){var rat = k;if(rat == "-None-"){rat = "";}var parentValues = mySelObject[name];if(rat == trimBoth(obj.value)){isDependent = true;depObj.length = 0;var depvalues = values[k];var depLen2 = depvalues.length - 1;for(var j = 0; j <= depLen2; j++){var optionElement = document.createElement("OPTION");var displayValue = depvalues[j];var actualValue = displayValue;if(actualValue == "-None-"){optionElement.value = "";displayValue = "-None-";}else{optionElement.value = actualValue;}optionElement.text = displayValue;if(mapValues != undefined){var mapValue = mapValues.split(";;;");var len = mapValue.length;for(var p = 0; p < len; p++){if(actualValue == mapValue[p]){optionElement.selected = true;}}}depObj.options.add(optionElement);}}}if(!isDependent){depObj.length = 0;var len2 = selectValues.length;for(var j2 = 0; j2 < len2; j2++){var actualValue2 = selectValues[j2];var optionElement2 = document.createElement("OPTION");if(actualValue2 == "-None-"){optionElement2.value = "";}else{optionElement2.value = selectValues[j2];}optionElement2.text = selectValues[j2];depObj.options.add(optionElement2);}depObj.value = selected_val;}if(!isload){setDependent(depObj,false);}var jdepObj = jQuery(depObj);if(jdepObj.hasClass('select2-offscreen')){jdepObj.select2("val", jdepObj.val());}}}}}
              function setSelectAll(id){var parentElement = document.getElementById(id);var hiddenInput = parentElement.querySelector('#hiddenoptions');var selectAllElement = parentElement.querySelector('#selectall' + id);var selectedValues = [];var checkboxes = parentElement.querySelectorAll('.wb_multi_pick_input');checkboxes.forEach(function (cb) {cb.checked = selectAllElement.checked;if (cb.checked && cb.value) {selectedValues.push(cb.value);}});hiddenInput.value = selectedValues.join(',');}
              function setMultiSelectOption(id, obj){var parentElement = document.getElementById(id);var hiddenInput = parentElement.querySelector('#hiddenoptions');var selectAllElement = parentElement.querySelector('#selectall' + id);var selectedStr = hiddenInput.value;var selectedValues = selectedStr ? selectedStr.split(',') : [];if(obj.checked && obj.value) {selectedValues.push(obj.value);}else if(!obj.checked && obj.value) {selectedValues.splice(selectedValues.indexOf(obj.value), 1);selectAllElement.checked = false;}else {selectAllElement.checked = false;}hiddenInput.value = selectedValues.join(',');}
              var zctt = function(){var tt, mw = 400, top = 10, left = 0, doctt = document;var ieb = doctt.all ? true : false;return{showtt: function(cont, wid){if(tt == null){tt = doctt.createElement('div');tt.setAttribute('id', 'tooltip-zc');doctt.body.appendChild(tt);doctt.onmousemove = this.setpos;doctt.onclick = this.hidett;}tt.style.display = 'block';tt.innerHTML = cont;tt.style.width = wid ? wid + 'px' : 'auto';if(!wid && ieb){tt.style.width = tt.offsetWidth;}if(tt.offsetWidth > mw){tt.style.width = mw + 'px'}h = parseInt(tt.offsetHeight) + top;w = parseInt(tt.offsetWidth) + left;},hidett: function(){tt.style.display = 'none';},setpos: function(e){var u = ieb ? event.clientY + doctt.body.scrollTop : e.pageY;var l = ieb ? event.clientX + doctt.body.scrollLeft : e.pageX;var cw = doctt.body.clientWidth;var ch = doctt.body.clientHeight;if(l < 0){tt.style.left = left + 'px';tt.style.right = '';}else if((l+w+left) > cw){tt.style.left = '';tt.style.right = ((cw-l) + left) + 'px';}else{tt.style.right = '';tt.style.left = (l + left) + 'px';}if(u < 0){tt.style.top = top + 'px';tt.style.bottom = '';}else if((u + h + left) > ch){tt.style.top = '';tt.style.bottom = ((ch - u) + top) + 'px';}else{tt.style.bottom = '';tt.style.top = (u + top) + 'px';}}};}();
              var zsWebFormMandatoryFields = new Array("Contact Name","Phone","Email","Subject","Description");
              var zsFieldsDisplayLabelArray = new Array("Contact Name","Phone","Email","Subject","Description");
              function zsValidateMandatoryFields(){
                var isError = 0;
                for(var index = 0; index < zsWebFormMandatoryFields.length; index++){
                  isError = 0;
                  var fieldObject = document.forms['zsWebToCase_1146316000000362410'][zsWebFormMandatoryFields[index]];
                  if(fieldObject){
                    if(((fieldObject.value).replace(/^\\s+|\\s+$/g, '')).length == 0){
                      alert(zsFieldsDisplayLabelArray[index] +' cannot be empty ');
                      fieldObject.focus(); return false;
                    } else {
                      if(fieldObject.name == 'Email'){
                        if(!fieldObject.value.match(/^([\\w_][\\w\\-_.+\\'&]*)@(?=.{4,256}$)(([\\w]+)([\\-_]*[\\w])*[\\.])+[a-zA-Z]{2,22}$/)){
                          alert('Enter a valid email-Id'); fieldObject.focus(); return false;
                        }
                      }
                    }
                    if(fieldObject.nodeName == 'SELECT'){
                      if(fieldObject.options[fieldObject.selectedIndex].value == '-None-'){
                        alert(zsFieldsDisplayLabelArray[index] +' cannot be none'); fieldObject.focus(); return false;
                      }
                    }
                    if(fieldObject.type == 'checkbox'){
                      if (fieldObject.checked == false){
                        alert('Please accept '+zsFieldsDisplayLabelArray[index]); fieldObject.focus(); return false;
                      }
                    }
                  }
                }
                // NEW: enforce captcha filled
                if(document.forms['zsWebToCase_1146316000000362410']['zsWebFormCaptchaWord'].value.replace(/^\\s+|\\s+$/g, '').length == 0){
                  alert('Please enter the captcha code.');
                  document.forms['zsWebToCase_1146316000000362410']['zsWebFormCaptchaWord'].focus();
                  return false;
                }
                document.getElementById('zsSubmitButton_1146316000000362410').setAttribute('disabled', 'disabled');
              }
              var ZSEncoder = {encodeForHTML:function(str){if(str&&typeof(str)==='string'){return jQuery.encoder.encodeForHTML(str);}return str;},encodeForHTMLAttribute:function(str){if(str&&typeof(str)==='string'){return jQuery.encoder.encodeForHTMLAttribute(str);}return str;},encodeForJavascript:function(str){if(str&&typeof(str)==='string'){return jQuery.encoder.encodeForJavascript(str);}return str;},encodeForCSS:function(str){if(str&&typeof(str)==='string'){return jQuery.encoder.encodeForCSS(str);}return str;}};
              var zsAttachedAttachmentsCount = 0; var zsAllowedAttachmentLimit = 4; var zsAttachmentFileBrowserIdsList = [1,2,3,4,5];
              function zsOpenCloudPickerIframe(){if(zsAttachedAttachmentsCount < 5){var zsCloudPickerIframeSrc = jQuery('#zsCloudPickerIframeSrc').val();jQuery('#zsCloudAttachmentIframe').attr('src', zsCloudPickerIframeSrc.substring(0, zsCloudPickerIframeSrc.length - 1) + (5 - zsAttachedAttachmentsCount)).show();zsListenCloudPickerMessages();}}
              function zsListenCloudPickerMessages(){if(window.addEventListener){window.addEventListener('message', zsWebReceiveMessage, false);}else if(window.attachEvent){window.attachEvent('onmessage', zsWebReceiveMessage);}}
              var zsCloudPickerJSON = {};
              function zsWebReceiveMessage(event){var zsUrlRegex = /^(ht|f)tp(s?)\\:\\/\\/[0-9a-zA-Z]([-\\.\\w]*[0-9a-zA-Z])*(\\:(0-9)*)*(\\/?)([a-zA-Z0-9\\-\\.\\?\\,\\:\\'\\/\\\\+=&amp;%\\$#_]*)?$/;if(zsUrlRegex.test(event.origin)){var zsMessageType = event.data.split('&&&');if(zsMessageType[0] == 'zsCloudPickerMessage'){if(window.addEventListener){window.removeEventListener('message', zsWebReceiveMessage, false);}else if(window.attachEvent){window.detachEvent('onmessage', zsWebReceiveMessage );}jQuery('#zsCloudAttachmentIframe').hide();var isAttachedFilesDetails = zsMessageType[1].split('|||');if(isAttachedFilesDetails[0] == 'cloudPickerResponse'){var zsCloudPickerAttachmentDetails = isAttachedFilesDetails[1].split('::::');var zsCloudPickerAttachmentsJSON = jQuery.parseJSON(zsCloudPickerAttachmentDetails[0]);if(zsAttachedAttachmentsCount <= zsAllowedAttachmentLimit){zsRenderCloudAttachments(zsCloudPickerAttachmentsJSON);}else{alert('You cannot attach more than 5 files');return false;}}}}}
              function zsRenderCloudAttachments(zsCloudPickerAttachmentsJSON){if(!jQuery.isEmptyObject(zsCloudPickerAttachmentsJSON)){jQuery.each(zsCloudPickerAttachmentsJSON, function(cloudServiceName, attachments){var zsAttachmentsArray = [];if(!jQuery.isEmptyObject(zsCloudPickerJSON[cloudServiceName])){zsAttachmentsArray = zsCloudPickerJSON[cloudServiceName];}for(var attachmentsIndex = 0; attachmentsIndex < attachments.length; attachmentsIndex++){if(zsAttachedAttachmentsCount <= zsAllowedAttachmentLimit){var zsCloudAttachmentsList = '';var details = attachments[attachmentsIndex];var name = details['docName'];var extension = name.split('.').pop().toLowerCase();var unSupportedExtensions = ["ade","adp","apk","appx","appxbundle","bat","cab","cer","chm","cmd","com","cpl","dll","dmg","exe","hlp","hta","ins","iso","isp","jar","js","jse","lnk","mde","msc","msi","msix","msixbundle","msp","mst","nsh","pif","ps1","pst","reg","scr","sct","shb","sys","tmp","url","vb","vbe","vbs","vxd","wsc","wsf","wsh","terminal"];if(unSupportedExtensions.indexOf(extension)!=-1){alert("The file wasn't attached since its extension is not supported.");continue;}zsAttachedAttachmentsCount++;var id = details['docId'].replace(/\\s/g, '');zsCloudAttachmentsList = '<div class="filenamecls zsFontClass">'+ZSEncoder.encodeForHTML(name)+'<a id="'+ ZSEncoder.encodeForHTMLAttribute(id) +'" cloudservice="'+ ZSEncoder.encodeForHTMLAttribute(cloudServiceName) +'" class="zscloudAttachment" style="margin-left:10px;" href="javascript:;">X</a> </div>';jQuery('#zsFileBrowseAttachments').append(zsCloudAttachmentsList);zsAttachmentsArray.push(details);zsCloudPickerJSON[cloudServiceName] = zsAttachmentsArray;jQuery("input[name='zsCloudPickerAttachments']")[0].value = JSON.stringify(zsCloudPickerJSON);}}});}zsChangeMousePointer();}
              jQuery(document).off('click.cAtm').on('click.cAtm','.zscloudAttachment', function(){var cloudService = jQuery(this).attr('cloudservice');var cloudAttachmentId = jQuery(this).attr('id');var arr = zsCloudPickerJSON[cloudService];var removed = 0;for(var i = 0; i < arr.length; i++){if(!removed){jQuery.each(arr[i], function(k,v){if(k=='docId' && v.replace(/\\s/g, '') == cloudAttachmentId){var idx = jQuery.inArray(arr[i], arr);arr.splice(idx, 1);removed = 1;}});}}jQuery(this).parent().remove();zsAttachedAttachmentsCount--;jQuery("input[name='zsCloudPickerAttachments']")[0].value = JSON.stringify(zsCloudPickerJSON);zsChangeMousePointer();});
              function zsRenderBrowseFileAttachment(val, input){if(val!=''){if((input.files && (input.files[0].size/(1024*1024))>20)){input.value='';alert('Maximum allowed file size is 20MB.');return;}if(zsAttachedAttachmentsCount < 5){var fileName = (val.indexOf('\\\\') > -1)? val.split('\\\\').pop() : val;var extension = fileName.split('.').pop().toLowerCase();var unSupportedExtensions = ["ade","adp","apk","appx","appxbundle","bat","cab","cer","chm","cmd","com","cpl","dll","dmg","exe","hlp","hta","ins","iso","isp","jar","js","jse","lnk","mde","msc","msi","msix","msixbundle","msp","mst","nsh","pif","ps1","pst","reg","scr","sct","shb","sys","tmp","url","vb","vbe","vbs","vxd","wsc","wsf","wsh","terminal"];if(unSupportedExtensions.indexOf(extension)!=-1){alert("The file wasn't attached since its extension is not supported.");return;}var n = parseInt(jQuery(input).attr('id').split('_')[1]);var removeIdx = jQuery.inArray(n, zsAttachmentFileBrowserIdsList);zsAttachmentFileBrowserIdsList.splice(removeIdx, 1);var nextId = zsAttachmentFileBrowserIdsList[0];jQuery('#zsattachment_'+n).hide();jQuery('#zsattachment_'+nextId).show();jQuery('#zsFileBrowseAttachments').append('<div class="filenamecls zsFontClass" id="file_'+n+'">'+ ZSEncoder.encodeForHTML(fileName) + '<a class="zsfilebrowseAttachment" style="margin-left:10px;" href="javascript:;" id="fileclose_'+n+'">X</a></div>');zsAttachedAttachmentsCount++;}}zsChangeMousePointer();}
              jQuery(document).off('click.fba').on('click.fba', '.zsfilebrowseAttachment', function(){var id = jQuery(this).attr('id').split('_')[1];jQuery('#zsattachment_'+id).val('');jQuery('#zsattachment_'+id).replaceWith(jQuery('#zsattachment_'+id).clone());jQuery(this).parent().remove();zsAttachedAttachmentsCount--;zsAttachmentFileBrowserIdsList.push(parseInt(id));zsRearrangeFileBrowseAttachments();zsChangeMousePointer();});
              function zsRearrangeFileBrowseAttachments(){jQuery.each(jQuery('input[type = file]'), function(fileIndex, fileObject){fileIndex = fileIndex + 1;if(fileIndex == zsAttachmentFileBrowserIdsList[0]){jQuery('#zsattachment_'+fileIndex).show();}else{jQuery('#zsattachment_'+fileIndex).hide();}});}
              function zsOpenFileBrowseAttachment(clickEvent){if(zsAttachedAttachmentsCount >= 5){clickEvent.preventDefault();}}
              function zsChangeMousePointer(){if(zsAttachedAttachmentsCount >= 5){jQuery('#zsMaxLimitMessage').show();jQuery('#zsattachment_1,#zsattachment_2,#zsattachment_3,#zsattachment_4,#zsattachment_5').hide();jQuery('#zsBrowseAttachment,#zsCloudAttachment').css('cursor', 'default');}else{jQuery('#zsMaxLimitMessage').hide();zsRearrangeFileBrowseAttachments();jQuery('#zsBrowseAttachment,#zsCloudAttachment').css('cursor', 'pointer');}}
              // CAPTCHA
              function zsShowCaptcha(){jQuery('#zsCaptchaLoading').hide();jQuery('#zsCaptcha').show();}
              function zsRegenerateCaptcha(){
                var webFormxhr = new XMLHttpRequest();
                webFormxhr.open('GET','https://desk.zoho.com/support/GenerateCaptcha?action=getNewCaptcha&_=' + new Date().getTime(), true);
                webFormxhr.onreadystatechange = function () {
                  if(webFormxhr.readyState === 4 && webFormxhr.status === 200) {
                    try{
                      var response = (webFormxhr.responseText != null) ? JSON.parse(webFormxhr.responseText) : '';
                      jQuery('#zsCaptchaUrl').load(zsShowCaptcha);
                      document.getElementById('zsCaptchaUrl').src = response.captchaUrl;
                      document.getElementsByName('xJdfEaS')[0].value = response.captchaDigest;
                    } catch(e){}
                  }
                };
                webFormxhr.send();
              }
              document.addEventListener('readystatechange',function(){
                if(document.readyState === 'complete' && window.zsRegenerateCaptcha ){zsRegenerateCaptcha();}
                setAllDependancyFieldsMapping();
                document.getElementById('zsSubmitButton_1146316000000362410').removeAttribute('disabled');
                zsAttachedAttachmentsCount = 0; zsAttachmentFileBrowserIdsList = [1,2,3,4,5];
                document.forms['zsWebToCase_1146316000000362410']['zsWebFormCaptchaWord'].value = '';
                jQuery('#zsFileBrowseAttachments').html('');
                jQuery.each(jQuery('input[type = file]'), function(fileIndex, fileObject){
                  var zsAttachmentId = jQuery(fileObject).attr('id'); var zsAttachmentNo = zsAttachmentId.split('_')[1];
                  var zsAttachedFile = jQuery('#zsattachment_'+zsAttachmentNo);
                  if(zsAttachedFile[0] != undefined && zsAttachedFile[0].files[0] != undefined){
                    var name = zsAttachedFile[0].files[0].name;
                    var html = '<div class="filenamecls zsFontClass" id="file_'+zsAttachmentNo+'">'+ ZSEncoder.encodeForHTML(name) +'<a class="zsfilebrowseAttachment" style="margin-left:10px" href="javascript:;" id="fileclose_'+zsAttachmentNo+'">X</a></div>';
                    jQuery('#zsFileBrowseAttachments').append(html); zsAttachedAttachmentsCount++;
                    var idx = jQuery.inArray(parseInt(zsAttachmentNo), zsAttachmentFileBrowserIdsList); zsAttachmentFileBrowserIdsList.splice(idx, 1);
                  }
                });
                if(document.forms['zsWebToCase_1146316000000362410']['zsCloudPickerAttachments'] != undefined){
                  var zsCloudAttachments = jQuery.parseJSON(document.forms['zsWebToCase_1146316000000362410']['zsCloudPickerAttachments'].value);
                  zsRenderCloudAttachments(zsCloudAttachments);
                }
                zsRearrangeFileBrowseAttachments(); zsChangeMousePointer();
              });
              function zsResetWebForm(webFormId){
                document.forms['zsWebToCase_'+webFormId].reset();
                document.getElementById('zsSubmitButton_1146316000000362410').removeAttribute('disabled');
                setAllDependancyFieldsMapping();
                zsAttachedAttachmentsCount = 0; zsAttachmentFileBrowserIdsList = [1,2,3,4,5];
                jQuery('#zsFileBrowseAttachments').html(''); zsCloudPickerJSON = {};
                if(document.forms['zsWebToCase_1146316000000362410']['zsCloudPickerAttachments'] != undefined){
                  document.forms['zsWebToCase_1146316000000362410']['zsCloudPickerAttachments'].value = JSON.stringify({});
                }
                zsRearrangeFileBrowseAttachments(); zsChangeMousePointer();
              }
              window.setDependent = setDependent;
              window.zsValidateMandatoryFields = zsValidateMandatoryFields;
              window.zsRegenerateCaptcha = zsRegenerateCaptcha;
            `,
          }}
        />

        {/* Make "Attach files" act like a real button (click forwards to the current hidden input) */}
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

        {/* Optional: Honeypot (blocks basic bots silently) */}
        <Script
          id="ctg-honeypot"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(){
                var form = document.getElementById('zsWebToCase_1146316000000362410');
                if (!form) return;
                // If our hidden field gets filled, block the submit.
                form.addEventListener('submit', function(e){
                  var trap = document.getElementById('ctg_website');
                  if (trap && trap.value) { e.preventDefault(); e.stopPropagation(); alert('Submission blocked. Please try again.'); }
                }, true);
              })();
            `,
          }}
        />

        {/* Global styles: Zoho base + your polish (includes buttons & captcha tidy-up) */}
        <style jsx global>{`
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
            border: 1px solid #ddd; padding: 8px 10px; border-radius: 6px;
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
          #zohoSupportWebToCase .wb_multi_pick_input, .wb_multi_pick_input_all { vertical-align:middle; margin-right:5px; }
          .zsFormClass{ background-color:#fff; width:600px; border-radius:1rem; box-shadow:0 10px 30px rgba(0,0,0,0.06); margin:0 auto; }
          .zsFontClass{ color:#000; font-family:Arial; font-size:13px; vertical-align:top }
          .manfieldbdr{ border-left: 1px solid #ff6448!important }
          input[type=file]::-webkit-file-upload-button{ cursor:pointer; }
          .wtcuploadinput{ cursor:pointer; float:left; width:62px; margin-top:-20px; opacity:0; clear:both; }
          .filenamecls{ margin-right:15px; float:left; margin-top:5px; padding: 4px 8px; border: 1px solid #e5e7eb; border-radius: 6px; background: #fafafa; }
          .clboth{ clear:both; }
          #zsFileBrowseAttachments{ clear:both; margin:5px 0 10px; }

          /* Attach files button */
          #zohoSupportWebToCase #zsBrowseAttachment {
            display:inline-flex; align-items:center; justify-content:center;
            padding: 10px 14px; border: 1px solid #e5e7eb; border-radius: 10px;
            background: #f9fafb; font-weight: 600; margin-bottom: 8px; user-select: none;
          }
          #zohoSupportWebToCase #zsBrowseAttachment:hover { background:#f3f4f6; }

          /* Submit/Reset buttons */
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

          /* CAPTCHA tidy-up */
          #zohoSupportWebToCase #zsCaptchaLoading { color:#6b7280; }
          #zohoSupportWebToCase #zsCaptcha img { vertical-align: middle; border: 1px solid #e5e7eb; border-radius: 6px; }
          #zohoSupportWebToCase #zsCaptcha a { margin-left: 10px; }
        `}</style>

        {/* Raw form HTML (Zoho markup with CAPTCHA + a honeypot field) */}
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

  <!-- Honeypot (hidden) -->
  <input type="text" name="ctg_website" id="ctg_website" style="display:none" tabindex="-1" autocomplete="off" />

  <table border='0' cellspacing='0' class='zsFormClass' style="margin:0 auto;">
    <tr><td colspan='2' class='zsFontClass'><strong>Submit a ticket</strong></td></tr><br>
    <tr><td nowrap class='zsFontClass' width='25%' align='left'>Contact Name&nbsp;&nbsp;</td><td align='left' width='75%'><input aria-label='Contact Name' type='text' maxlength='120' name='Contact Name' class='manfieldbdr'/></td></tr>
    <tr><td nowrap class='zsFontClass' width='25%' align='left'>Phone&nbsp;&nbsp;</td><td align='left' width='75%'><input aria-label='Phone' type='text' maxlength='120' name='Phone' value='' class='manfieldbdr'/></td></tr>
    <tr><td nowrap class='zsFontClass' width='25%' align='left'>Email&nbsp;&nbsp;</td><td align='left' width='75%'><input aria-label='Email' type='text' maxlength='120' name='Email' value='' class='manfieldbdr'/></td></tr>
    <tr><td nowrap class='zsFontClass' width='25%' align='left'>Priority &nbsp;&nbsp;</td><td align='left' width='75%'>
      <select name='Priority' value='' onchange="setDependent(this, false)" id='Priority' aria-label='Priority'>
        <option value=''>-None-</option>
        <option value='High'>High</option>
        <option value='Medium'>Medium</option>
        <option value='Low'>Low</option>
      </select>
    </td></tr>
    <tr><td nowrap class='zsFontClass' width='25%' align='left'>Subject&nbsp;&nbsp;</td><td align='left' width='75%'><input aria-label='Subject' type='text' maxlength='255' name='Subject' value='' class='manfieldbdr'/></td></tr>
    <tr><td nowrap class='zsFontClass' width='25%' align='left'>Description &nbsp;&nbsp;</td><td align='left' width='75%'><textarea aria-label='Description' name='Description' maxlength='3000' width='250' height='250' class='manfieldbdr'></textarea></td></tr>

    <tr><td nowrap class='zsFontClass' width='25%' align='left'>Attachment &nbsp;&nbsp;</td>
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

    <!-- CAPTCHA row -->
    <tr>
      <td nowrap class='zsFontClass' width='25%' align='left'>Captcha&nbsp;</td>
      <td align='left' width='75%'>
        <div id='zsCaptchaLoading'><strong>Loading...<br><br></strong></div>
        <div id='zsCaptcha' style='display:none;'>
          <img src='#' id='zsCaptchaUrl' name="zsCaptchaImage" alt="Captcha image">
          <a href='javascript:;' style='color:#00a3fe; cursor:pointer; margin-left:10px; vertical-align:middle; text-decoration: none;' class='zsFontClass' onclick='zsRegenerateCaptcha()'>Refresh</a>
        </div>
        <div style="margin-top:8px;">
          <input type='text' name='zsWebFormCaptchaWord' aria-label='Enter captcha code'/>
          <input type='hidden' name='zsCaptchaSrc' value=''/>
        </div>
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
            <img class='wb_logo' src='https://d1ydxa2xvtn0b5.cloudfront.net/app/images/portalLogo.de847024ebc0131731a3.png' alt="Zoho Desk" />
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
