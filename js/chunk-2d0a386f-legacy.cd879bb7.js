(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0a386f"],{"030f":function(e,n,t){t("d3b7");var o={send:function(e){return new Promise((function(n,t){e.nocache=Math.floor(1e6*Math.random()+1),e.Action="Send";var a=JSON.stringify(e);o.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?",a,(function(e){n(e)}))}))},ajaxPost:function(e,n,t){var a=o.createCORSRequest("POST",e);a.setRequestHeader("Content-type","application/x-www-form-urlencoded"),a.onload=function(){var e=a.responseText;null!=t&&t(e)},a.send(n)},ajax:function(e,n){var t=o.createCORSRequest("GET",e);t.onload=function(){var e=t.responseText;null!=n&&n(e)},t.send()},createCORSRequest:function(e,n){var t=new XMLHttpRequest;return"withCredentials"in t?t.open(e,n,!0):"undefined"!=typeof XDomainRequest?(t=new XDomainRequest).open(e,n):t=null,t}};e.exports={Email:o}}}]);
//# sourceMappingURL=chunk-2d0a386f-legacy.cd879bb7.js.map