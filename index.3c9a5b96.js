document.querySelectorAll("form").forEach(function(e){e.querySelectorAll("input").forEach(function(e){var t=document.createElement("label");t.setAttribute("class","field-label"),t.setAttribute("for",e.id);for(var r="",n=0;n<e.name.length;n++)e.name[n]===e.name[n].toUpperCase()&&0!==n&&(r+=" "),r+=e.name[n];t.textContent=r,e.setAttribute("placeholder",r.charAt(0).toUpperCase()+r.slice(1)),e.insertAdjacentElement("beforebegin",t)})});
//# sourceMappingURL=index.3c9a5b96.js.map
