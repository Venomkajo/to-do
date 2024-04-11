(()=>{"use strict";var n={365:(n,e,t)=>{t.d(e,{A:()=>a});var r=t(354),o=t.n(r),i=t(314),A=t.n(i)()(o());A.push([n.id,"body\n{\n    height: 100%;\n    margin: 0;\n    padding: 0;\n    display: flex;\n    flex-direction: column;\n    background-color: #818cf8;\n    color: white;\n}\n\n.header\n{\n    width: 100%;\n    height: 60px;\n    background-color: #4f46e5;\n    text-align: left;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n}\n\n.header p, .notes-header p\n{\n    margin-left: 50px;\n    font-size: 36px;\n}\n\n.main-body\n{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    margin-top: 50px;\n}\n\n.notes-header\n{\n    background-color: #4f46e5;\n    height: min-content;\n    width: 100%;\n    height: 60px;\n    text-align: left;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n}\n\n.notes-main\n{\n    background-color: white;\n    width: 100%;\n    display: flex;\n    background-color: #818cf8;\n}\n\n.notes-pages\n{\n    background-color: #818cf8;\n    width: 15%;\n    min-height: 100%;\n    outline: black solid 3px;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    gap: 5px;\n}\n\n#pageForm\n{\n    width: 15%;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    gap: 5px;\n}\n\n.notes-page\n{\n    background-color: black;\n    width: 100%;\n    min-height: 50px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    gap: 10px;\n    padding-bottom: 10px;\n    padding-top: 10px;\n    word-wrap: break-word;\n    overflow: scroll;\n}\n\n.notes-page button\n{\n    background-color: black;\n    border: white solid 3px;\n    color: white;\n    border-radius: 10px;\n    padding: 5px;\n}\n\n.notes-content\n{\n    background-color: #818cf8;\n    width: 85%;\n    height: max-content;\n    min-height: 200px;\n    outline: black solid 3px;\n}\n\n.notes-note\n{\n    background-color: #2e1065;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 24px;\n    gap: 20%;\n    height: max-content;\n    margin-top: 25px;\n}\n\n.notes-title, .notes-description, .notes-date\n{\n    word-wrap: break-word;\n    overflow: hidden;\n}\n\n.notes-title\n{\n    width: 60%;\n    margin-left: 25px;\n}\n\n.notes-date\n{\n    background-color: white;\n    color: black;\n    width: 25%;\n}\n\n.notes-priority\n{\n    width: 10%;\n    margin-right: 10px;\n}\n\n.notes-note button\n{\n    width: 5%;\n    margin-right: 25px;\n}\n\n.notes-form\n{\n    margin-top: 25px;\n    width: 100%;\n    height: 50%;\n    display: flex;\n    flex-direction: row-reverse;\n    justify-content: center;\n    align-items: center;\n}\n\n.notes-hidden\n{\n    min-height: 100px;\n    height: fit-content;\n    width: 100%;\n    background-color: lightgoldenrodyellow;\n    color: black;\n    margin-bottom: 25px;\n    font-size: 24px;\n    align-items: center;\n    justify-content: center;\n    gap: 10px;\n}\n\n.notes-hidden button:nth-last-child(1)\n{\n    margin-right: 25px;\n}\n\n.notes-description\n{\n    width: 90%;\n    margin-left: 25px;\n}\n\n#notesForm\n{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 85%;\n    height: 100%;\n    flex-direction: column;\n    gap: 5px;\n}\n\n#notesForm *\n{\n    width: 15%;\n    text-align: center;\n}\n\n#description\n{\n    width: 30%;\n    height: 50px;\n    resize: none;\n}\n\n#notesForm button\n{\n    width: 10%;\n    height: 50px;\n    margin-top: 10px;\n    margin-bottom: 25px;\n}\n\n.footer\n{\n    background-color: #4f46e5;\n    width: 100%;\n    margin-bottom: 0;\n}\n\n.footer p\n{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    height: min-content;\n}\n","",{version:3,sources:["webpack://./src/styles.css"],names:[],mappings:"AAAA;;IAEI,YAAY;IACZ,SAAS;IACT,UAAU;IACV,aAAa;IACb,sBAAsB;IACtB,yBAAyB;IACzB,YAAY;AAChB;;AAEA;;IAEI,WAAW;IACX,YAAY;IACZ,yBAAyB;IACzB,gBAAgB;IAChB,aAAa;IACb,2BAA2B;IAC3B,mBAAmB;AACvB;;AAEA;;IAEI,iBAAiB;IACjB,eAAe;AACnB;;AAEA;;IAEI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,gBAAgB;AACpB;;AAEA;;IAEI,yBAAyB;IACzB,mBAAmB;IACnB,WAAW;IACX,YAAY;IACZ,gBAAgB;IAChB,aAAa;IACb,2BAA2B;IAC3B,mBAAmB;AACvB;;AAEA;;IAEI,uBAAuB;IACvB,WAAW;IACX,aAAa;IACb,yBAAyB;AAC7B;;AAEA;;IAEI,yBAAyB;IACzB,UAAU;IACV,gBAAgB;IAChB,wBAAwB;IACxB,aAAa;IACb,mBAAmB;IACnB,sBAAsB;IACtB,QAAQ;AACZ;;AAEA;;IAEI,UAAU;IACV,aAAa;IACb,mBAAmB;IACnB,sBAAsB;IACtB,QAAQ;AACZ;;AAEA;;IAEI,uBAAuB;IACvB,WAAW;IACX,gBAAgB;IAChB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,sBAAsB;IACtB,SAAS;IACT,oBAAoB;IACpB,iBAAiB;IACjB,qBAAqB;IACrB,gBAAgB;AACpB;;AAEA;;IAEI,uBAAuB;IACvB,uBAAuB;IACvB,YAAY;IACZ,mBAAmB;IACnB,YAAY;AAChB;;AAEA;;IAEI,yBAAyB;IACzB,UAAU;IACV,mBAAmB;IACnB,iBAAiB;IACjB,wBAAwB;AAC5B;;AAEA;;IAEI,yBAAyB;IACzB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,eAAe;IACf,QAAQ;IACR,mBAAmB;IACnB,gBAAgB;AACpB;;AAEA;;IAEI,qBAAqB;IACrB,gBAAgB;AACpB;;AAEA;;IAEI,UAAU;IACV,iBAAiB;AACrB;;AAEA;;IAEI,uBAAuB;IACvB,YAAY;IACZ,UAAU;AACd;;AAEA;;IAEI,UAAU;IACV,kBAAkB;AACtB;;AAEA;;IAEI,SAAS;IACT,kBAAkB;AACtB;;AAEA;;IAEI,gBAAgB;IAChB,WAAW;IACX,WAAW;IACX,aAAa;IACb,2BAA2B;IAC3B,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;;IAEI,iBAAiB;IACjB,mBAAmB;IACnB,WAAW;IACX,sCAAsC;IACtC,YAAY;IACZ,mBAAmB;IACnB,eAAe;IACf,mBAAmB;IACnB,uBAAuB;IACvB,SAAS;AACb;;AAEA;;IAEI,kBAAkB;AACtB;;AAEA;;IAEI,UAAU;IACV,iBAAiB;AACrB;;AAEA;;IAEI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,UAAU;IACV,YAAY;IACZ,sBAAsB;IACtB,QAAQ;AACZ;;AAEA;;IAEI,UAAU;IACV,kBAAkB;AACtB;;AAEA;;IAEI,UAAU;IACV,YAAY;IACZ,YAAY;AAChB;;AAEA;;IAEI,UAAU;IACV,YAAY;IACZ,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA;;IAEI,yBAAyB;IACzB,WAAW;IACX,gBAAgB;AACpB;;AAEA;;IAEI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,WAAW;IACX,mBAAmB;AACvB",sourcesContent:["body\r\n{\r\n    height: 100%;\r\n    margin: 0;\r\n    padding: 0;\r\n    display: flex;\r\n    flex-direction: column;\r\n    background-color: #818cf8;\r\n    color: white;\r\n}\r\n\r\n.header\r\n{\r\n    width: 100%;\r\n    height: 60px;\r\n    background-color: #4f46e5;\r\n    text-align: left;\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n}\r\n\r\n.header p, .notes-header p\r\n{\r\n    margin-left: 50px;\r\n    font-size: 36px;\r\n}\r\n\r\n.main-body\r\n{\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    margin-top: 50px;\r\n}\r\n\r\n.notes-header\r\n{\r\n    background-color: #4f46e5;\r\n    height: min-content;\r\n    width: 100%;\r\n    height: 60px;\r\n    text-align: left;\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n}\r\n\r\n.notes-main\r\n{\r\n    background-color: white;\r\n    width: 100%;\r\n    display: flex;\r\n    background-color: #818cf8;\r\n}\r\n\r\n.notes-pages\r\n{\r\n    background-color: #818cf8;\r\n    width: 15%;\r\n    min-height: 100%;\r\n    outline: black solid 3px;\r\n    display: flex;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    gap: 5px;\r\n}\r\n\r\n#pageForm\r\n{\r\n    width: 15%;\r\n    display: flex;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    gap: 5px;\r\n}\r\n\r\n.notes-page\r\n{\r\n    background-color: black;\r\n    width: 100%;\r\n    min-height: 50px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    gap: 10px;\r\n    padding-bottom: 10px;\r\n    padding-top: 10px;\r\n    word-wrap: break-word;\r\n    overflow: scroll;\r\n}\r\n\r\n.notes-page button\r\n{\r\n    background-color: black;\r\n    border: white solid 3px;\r\n    color: white;\r\n    border-radius: 10px;\r\n    padding: 5px;\r\n}\r\n\r\n.notes-content\r\n{\r\n    background-color: #818cf8;\r\n    width: 85%;\r\n    height: max-content;\r\n    min-height: 200px;\r\n    outline: black solid 3px;\r\n}\r\n\r\n.notes-note\r\n{\r\n    background-color: #2e1065;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    font-size: 24px;\r\n    gap: 20%;\r\n    height: max-content;\r\n    margin-top: 25px;\r\n}\r\n\r\n.notes-title, .notes-description, .notes-date\r\n{\r\n    word-wrap: break-word;\r\n    overflow: hidden;\r\n}\r\n\r\n.notes-title\r\n{\r\n    width: 60%;\r\n    margin-left: 25px;\r\n}\r\n\r\n.notes-date\r\n{\r\n    background-color: white;\r\n    color: black;\r\n    width: 25%;\r\n}\r\n\r\n.notes-priority\r\n{\r\n    width: 10%;\r\n    margin-right: 10px;\r\n}\r\n\r\n.notes-note button\r\n{\r\n    width: 5%;\r\n    margin-right: 25px;\r\n}\r\n\r\n.notes-form\r\n{\r\n    margin-top: 25px;\r\n    width: 100%;\r\n    height: 50%;\r\n    display: flex;\r\n    flex-direction: row-reverse;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.notes-hidden\r\n{\r\n    min-height: 100px;\r\n    height: fit-content;\r\n    width: 100%;\r\n    background-color: lightgoldenrodyellow;\r\n    color: black;\r\n    margin-bottom: 25px;\r\n    font-size: 24px;\r\n    align-items: center;\r\n    justify-content: center;\r\n    gap: 10px;\r\n}\r\n\r\n.notes-hidden button:nth-last-child(1)\r\n{\r\n    margin-right: 25px;\r\n}\r\n\r\n.notes-description\r\n{\r\n    width: 90%;\r\n    margin-left: 25px;\r\n}\r\n\r\n#notesForm\r\n{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    width: 85%;\r\n    height: 100%;\r\n    flex-direction: column;\r\n    gap: 5px;\r\n}\r\n\r\n#notesForm *\r\n{\r\n    width: 15%;\r\n    text-align: center;\r\n}\r\n\r\n#description\r\n{\r\n    width: 30%;\r\n    height: 50px;\r\n    resize: none;\r\n}\r\n\r\n#notesForm button\r\n{\r\n    width: 10%;\r\n    height: 50px;\r\n    margin-top: 10px;\r\n    margin-bottom: 25px;\r\n}\r\n\r\n.footer\r\n{\r\n    background-color: #4f46e5;\r\n    width: 100%;\r\n    margin-bottom: 0;\r\n}\r\n\r\n.footer p\r\n{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    width: 100%;\r\n    height: min-content;\r\n}\r\n"],sourceRoot:""}]);const a=A},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var A={};if(r)for(var a=0;a<this.length;a++){var l=this[a][0];null!=l&&(A[l]=!0)}for(var c=0;c<n.length;c++){var s=[].concat(n[c]);r&&A[s[0]]||(void 0!==i&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=i),t&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=t):s[2]=t),o&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=o):s[4]="".concat(o)),e.push(s))}},e}},354:n=>{n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),i="/*# ".concat(o," */");return[e].concat([i]).join("\n")}return[e].join("\n")}},72:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},A=[],a=0;a<n.length;a++){var l=n[a],c=r.base?l[0]+r.base:l[0],s=i[c]||0,d="".concat(c," ").concat(s);i[c]=s+1;var p=t(d),u={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==p)e[p].references++,e[p].updater(u);else{var g=o(u,r);r.byIndex=a,e.splice(a,0,{identifier:d,updater:g,references:1})}A.push(d)}return A}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var A=0;A<i.length;A++){var a=t(i[A]);e[a].references--}for(var l=r(n,o),c=0;c<i.length;c++){var s=t(i[c]);0===e[s].references&&(e[s].updater(),e.splice(s,1))}i=l}}},659:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return n[r](i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{var n=t(72),e=t.n(n),r=t(825),o=t.n(r),i=t(659),A=t.n(i),a=t(56),l=t.n(a),c=t(540),s=t.n(c),d=t(113),p=t.n(d),u=t(365),g={};function m(n,e,t,r){return{title:n,description:e,dueDate:t,priority:r}}function B(n,e){return{name:n,notes:[e]}}function f(n){"true"===n.contentEditable?(n.contentEditable="false",n.style.outline=""):(n.contentEditable="true",n.style.outline="3px solid black")}function h(n){const e=new Date,t=new Date(n.value);if(t.toDateString()===e.toDateString())n.style.backgroundColor="red",n.style.color="white";else{const r=(t.getTime()-e.getTime())/864e5;r<=1&&r>0?(n.style.backgroundColor="yellow",n.style.color="black"):r>=1?(n.style.backgroundColor="white",n.style.color="black"):(n.style.backgroundColor="black",n.style.color="white")}}function I(n,e){!function(n,e){let t=document.getElementById("notesPages");for(;t.firstChild;)t.removeChild(t.firstChild);for(let r=0;r<n.length;r++){let o=n[r],i=document.createElement("div");i.classList.add("notes-page"),i.innerText=o.name;let A=document.createElement("button");A.innerText="Remove",A.classList="page-remove",i.appendChild(A),i.addEventListener("click",(function(){e=r,localStorage.setItem("currentPage",JSON.stringify(e)),I(n,e)})),A.addEventListener("click",(function(){confirm("Are you sure you want to delete this page?")&&(n.splice(r,1),localStorage.setItem("notes",JSON.stringify(n)),I(n,e))})),t.appendChild(i)}}(n,e),function(n,e){let t=document.getElementById("notesContent");for(;t.firstChild;)t.removeChild(t.firstChild);for(let r=0;r<n[e].notes.length;r++){let o=n[e],i=document.createElement("div");i.classList.add("notes-note"),t.appendChild(i);let A=document.createElement("div");A.classList.add("notes-title"),A.innerText=o.notes[r].title,A.contentEditable=!1,i.appendChild(A);let a=document.createElement("input");a.type="date",a.value=o.notes[r].dueDate,a.classList.add("notes-date"),a.disabled=!0,h(a),i.appendChild(a);let l=document.createElement("div");l.classList.add("notes-priority"),l.innerText=o.notes[r].priority,i.appendChild(l);let c=document.createElement("div");c.classList.add("notes-hidden"),c.style.display="none",t.appendChild(c);let s=document.createElement("button");s.innerText="v",i.appendChild(s),s.addEventListener("click",(function(){var n;"none"===(n=c).style.display?n.style.display="flex":n.style.display="none"}));let d=document.createElement("div");d.classList.add("notes-description"),d.innerText=o.notes[r].description,d.contentEditable=!1,c.appendChild(d);let p=document.createElement("button"),u=document.createElement("button");u.innerText="Edit",c.appendChild(u),u.addEventListener("click",(function(){f(d),f(A),p.disabled=!1,a.disabled=!1,u.disabled=!0})),p.innerText="Save",c.appendChild(p),p.disabled=!0,p.addEventListener("click",(function(){f(d),f(A),p.disabled=!0,u.disabled=!1,a.disabled=!0,o.notes[r].description=d.innerText,o.notes[r].title=A.innerText,o.notes[r].dueDate=a.value}));let g=document.createElement("button");g.innerText="Remove",c.appendChild(g),g.addEventListener("click",(function(){i.remove(),c.remove(),n[e].notes.splice(r,1),localStorage.setItem("notes",JSON.stringify(n))}))}}(n,e)}g.styleTagTransform=p(),g.setAttributes=l(),g.insert=A().bind(null,"head"),g.domAPI=o(),g.insertStyleElement=s(),e()(u.A,g),u.A&&u.A.locals&&u.A.locals;var C=[],x=0;if(localStorage.getItem("notes"))I(C=JSON.parse(localStorage.getItem("notes")),x);else{let n=B("First page!",m("Expand me!","Good job!","2025-12-12","LOW"));C.push(n),I(C,x),localStorage.setItem("notes",JSON.stringify(C)),localStorage.setItem("currentPage",JSON.stringify(x))}document.getElementById("pageForm").addEventListener("submit",(function(n){n.preventDefault();const e=B(function(){const n=document.getElementById("pageName").value;if(n)return n}(),m("New page!","...","2025-12-12","LOW"));C=JSON.parse(localStorage.getItem("notes")),x=JSON.parse(localStorage.getItem("currentPage")),C.push(e),localStorage.setItem("notes",JSON.stringify(C)),I(C,x)})),document.getElementById("notesForm").addEventListener("submit",(function(n){n.preventDefault(),C=JSON.parse(localStorage.getItem("notes")),x=JSON.parse(localStorage.getItem("currentPage"));const e=function(){const n=document.getElementById("title").value,e=document.getElementById("dueDate").value,t=document.getElementById("priority").value,r=document.getElementById("description").value;return n&&r&&e&&t?{title:n,description:r,dueDate:e,priority:t}:void 0}();C[x].notes.push(e),localStorage.setItem("notes",JSON.stringify(C)),I(C,x)})),console.log("loading successful")})()})();
//# sourceMappingURL=bundle.js.map