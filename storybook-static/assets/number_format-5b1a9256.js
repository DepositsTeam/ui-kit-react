function u(n,i,r,a){n=(n+"").replace(/[^0-9+\-Ee.,]/g,"");var o=isFinite(+n)?+n:0,t=isFinite(+i)?Math.abs(i):0,d=typeof a>"u"?",":a,p=typeof r>"u"?".":r,e="",h=function(g,l){var f=Math.pow(10,l);return""+Math.round(g*f)/f};return e=(t?h(o,t):""+Math.round(o)).split("."),e[0].length>3&&(e[0]=e[0].replace(/\B(?=(?:\d{3})+(?!\d))/g,d)),(e[1]||"").length<t&&(e[1]=e[1]||"",e[1]+=new Array(t-e[1].length+1).join("0")),e.join(p)}export{u as n};
//# sourceMappingURL=number_format-5b1a9256.js.map
