"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[3661],{79994:(n,r,o)=>{o.d(r,{Z:()=>A});var e=o(1799),c=o.n(e),t=o(82609),a=o.n(t)()(c());a.push([n.id,"/* Based on arcticicestudio's Nord theme */\n/* https://github.com/arcticicestudio/nord */\n\n.cm-s-nord.CodeMirror { background: #2e3440; color: #d8dee9; }\n.cm-s-nord div.CodeMirror-selected { background: #434c5e; }\n.cm-s-nord .CodeMirror-line::selection, .cm-s-nord .CodeMirror-line > span::selection, .cm-s-nord .CodeMirror-line > span > span::selection { background: #3b4252; }\n.cm-s-nord .CodeMirror-line::-moz-selection, .cm-s-nord .CodeMirror-line > span::-moz-selection, .cm-s-nord .CodeMirror-line > span > span::-moz-selection { background: #3b4252; }\n.cm-s-nord .CodeMirror-gutters { background: #2e3440; border-right: 0px; }\n.cm-s-nord .CodeMirror-guttermarker { color: #4c566a; }\n.cm-s-nord .CodeMirror-guttermarker-subtle { color: #4c566a; }\n.cm-s-nord .CodeMirror-linenumber { color: #4c566a; }\n.cm-s-nord .CodeMirror-cursor { border-left: 1px solid #f8f8f0; }\n\n.cm-s-nord span.cm-comment { color: #4c566a; }\n.cm-s-nord span.cm-atom { color: #b48ead; }\n.cm-s-nord span.cm-number { color: #b48ead; }\n\n.cm-s-nord span.cm-comment.cm-attribute { color: #97b757; }\n.cm-s-nord span.cm-comment.cm-def { color: #bc9262; }\n.cm-s-nord span.cm-comment.cm-tag { color: #bc6283; }\n.cm-s-nord span.cm-comment.cm-type { color: #5998a6; }\n\n.cm-s-nord span.cm-property, .cm-s-nord span.cm-attribute { color: #8FBCBB; }\n.cm-s-nord span.cm-keyword { color: #81A1C1; }\n.cm-s-nord span.cm-builtin { color: #81A1C1; }\n.cm-s-nord span.cm-string { color: #A3BE8C; }\n\n.cm-s-nord span.cm-variable { color: #d8dee9; }\n.cm-s-nord span.cm-variable-2 { color: #d8dee9; }\n.cm-s-nord span.cm-variable-3, .cm-s-nord span.cm-type { color: #d8dee9; }\n.cm-s-nord span.cm-def { color: #8FBCBB; }\n.cm-s-nord span.cm-bracket { color: #81A1C1; }\n.cm-s-nord span.cm-tag { color: #bf616a; }\n.cm-s-nord span.cm-header { color: #b48ead; }\n.cm-s-nord span.cm-link { color: #b48ead; }\n.cm-s-nord span.cm-error { background: #bf616a; color: #f8f8f0; }\n\n.cm-s-nord .CodeMirror-activeline-background { background: #3b4252; }\n.cm-s-nord .CodeMirror-matchingbracket {\n  text-decoration: underline;\n  color: white !important;\n}\n","",{version:3,sources:["webpack://./../../node_modules/codemirror/theme/nord.css"],names:[],mappings:"AAAA,0CAA0C;AAC1C,4CAA4C;;AAE5C,wBAAwB,mBAAmB,EAAE,cAAc,EAAE;AAC7D,qCAAqC,mBAAmB,EAAE;AAC1D,8IAA8I,mBAAmB,EAAE;AACnK,6JAA6J,mBAAmB,EAAE;AAClL,iCAAiC,mBAAmB,EAAE,iBAAiB,EAAE;AACzE,sCAAsC,cAAc,EAAE;AACtD,6CAA6C,cAAc,EAAE;AAC7D,oCAAoC,cAAc,EAAE;AACpD,gCAAgC,8BAA8B,EAAE;;AAEhE,6BAA6B,cAAc,EAAE;AAC7C,0BAA0B,cAAc,EAAE;AAC1C,4BAA4B,cAAc,EAAE;;AAE5C,0CAA0C,cAAc,EAAE;AAC1D,oCAAoC,cAAc,EAAE;AACpD,oCAAoC,cAAc,EAAE;AACpD,qCAAqC,cAAc,EAAE;;AAErD,4DAA4D,cAAc,EAAE;AAC5E,6BAA6B,cAAc,EAAE;AAC7C,6BAA6B,cAAc,EAAE;AAC7C,4BAA4B,cAAc,EAAE;;AAE5C,8BAA8B,cAAc,EAAE;AAC9C,gCAAgC,cAAc,EAAE;AAChD,yDAAyD,cAAc,EAAE;AACzE,yBAAyB,cAAc,EAAE;AACzC,6BAA6B,cAAc,EAAE;AAC7C,yBAAyB,cAAc,EAAE;AACzC,4BAA4B,cAAc,EAAE;AAC5C,0BAA0B,cAAc,EAAE;AAC1C,2BAA2B,mBAAmB,EAAE,cAAc,EAAE;;AAEhE,+CAA+C,mBAAmB,EAAE;AACpE;EACE,0BAA0B;EAC1B,uBAAuB;AACzB",sourcesContent:["/* Based on arcticicestudio's Nord theme */\n/* https://github.com/arcticicestudio/nord */\n\n.cm-s-nord.CodeMirror { background: #2e3440; color: #d8dee9; }\n.cm-s-nord div.CodeMirror-selected { background: #434c5e; }\n.cm-s-nord .CodeMirror-line::selection, .cm-s-nord .CodeMirror-line > span::selection, .cm-s-nord .CodeMirror-line > span > span::selection { background: #3b4252; }\n.cm-s-nord .CodeMirror-line::-moz-selection, .cm-s-nord .CodeMirror-line > span::-moz-selection, .cm-s-nord .CodeMirror-line > span > span::-moz-selection { background: #3b4252; }\n.cm-s-nord .CodeMirror-gutters { background: #2e3440; border-right: 0px; }\n.cm-s-nord .CodeMirror-guttermarker { color: #4c566a; }\n.cm-s-nord .CodeMirror-guttermarker-subtle { color: #4c566a; }\n.cm-s-nord .CodeMirror-linenumber { color: #4c566a; }\n.cm-s-nord .CodeMirror-cursor { border-left: 1px solid #f8f8f0; }\n\n.cm-s-nord span.cm-comment { color: #4c566a; }\n.cm-s-nord span.cm-atom { color: #b48ead; }\n.cm-s-nord span.cm-number { color: #b48ead; }\n\n.cm-s-nord span.cm-comment.cm-attribute { color: #97b757; }\n.cm-s-nord span.cm-comment.cm-def { color: #bc9262; }\n.cm-s-nord span.cm-comment.cm-tag { color: #bc6283; }\n.cm-s-nord span.cm-comment.cm-type { color: #5998a6; }\n\n.cm-s-nord span.cm-property, .cm-s-nord span.cm-attribute { color: #8FBCBB; }\n.cm-s-nord span.cm-keyword { color: #81A1C1; }\n.cm-s-nord span.cm-builtin { color: #81A1C1; }\n.cm-s-nord span.cm-string { color: #A3BE8C; }\n\n.cm-s-nord span.cm-variable { color: #d8dee9; }\n.cm-s-nord span.cm-variable-2 { color: #d8dee9; }\n.cm-s-nord span.cm-variable-3, .cm-s-nord span.cm-type { color: #d8dee9; }\n.cm-s-nord span.cm-def { color: #8FBCBB; }\n.cm-s-nord span.cm-bracket { color: #81A1C1; }\n.cm-s-nord span.cm-tag { color: #bf616a; }\n.cm-s-nord span.cm-header { color: #b48ead; }\n.cm-s-nord span.cm-link { color: #b48ead; }\n.cm-s-nord span.cm-error { background: #bf616a; color: #f8f8f0; }\n\n.cm-s-nord .CodeMirror-activeline-background { background: #3b4252; }\n.cm-s-nord .CodeMirror-matchingbracket {\n  text-decoration: underline;\n  color: white !important;\n}\n"],sourceRoot:""}]);const A=a},82609:n=>{n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var o=n(r);return r[2]?"@media ".concat(r[2]," {").concat(o,"}"):o})).join("")},r.i=function(n,o,e){"string"==typeof n&&(n=[[null,n,""]]);var c={};if(e)for(var t=0;t<this.length;t++){var a=this[t][0];null!=a&&(c[a]=!0)}for(var A=0;A<n.length;A++){var s=[].concat(n[A]);e&&c[s[0]]||(o&&(s[2]?s[2]="".concat(o," and ").concat(s[2]):s[2]=o),r.push(s))}},r}},1799:n=>{function r(n,r){(null==r||r>n.length)&&(r=n.length);for(var o=0,e=new Array(r);o<r;o++)e[o]=n[o];return e}n.exports=function(n){var o,e,c=(e=4,function(n){if(Array.isArray(n))return n}(o=n)||function(n,r){var o=n&&("undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"]);if(null!=o){var e,c,t=[],a=!0,A=!1;try{for(o=o.call(n);!(a=(e=o.next()).done)&&(t.push(e.value),!r||t.length!==r);a=!0);}catch(n){A=!0,c=n}finally{try{a||null==o.return||o.return()}finally{if(A)throw c}}return t}}(o,e)||function(n,o){if(n){if("string"==typeof n)return r(n,o);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?r(n,o):void 0}}(o,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),t=c[1],a=c[3];if(!a)return t;if("function"==typeof btoa){var A=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(A),i="/*# ".concat(s," */"),d=a.sources.map((function(n){return"/*# sourceURL=".concat(a.sourceRoot||"").concat(n," */")}));return[t].concat(d).concat([i]).join("\n")}return[t].join("\n")}},23661:(n,r,o)=>{o.r(r),o.d(r,{default:()=>a});var e=o(46062),c=o.n(e),t=o(79994);c()(t.Z,{insert:"head",singleton:!1});const a=t.Z.locals||{}},46062:(n,r,o)=>{var e,c=function(){var n={};return function(r){if(void 0===n[r]){var o=document.querySelector(r);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(n){o=null}n[r]=o}return n[r]}}(),t=[];function a(n){for(var r=-1,o=0;o<t.length;o++)if(t[o].identifier===n){r=o;break}return r}function A(n,r){for(var o={},e=[],c=0;c<n.length;c++){var A=n[c],s=r.base?A[0]+r.base:A[0],i=o[s]||0,d="".concat(s," ").concat(i);o[s]=i+1;var m=a(d),l={css:A[1],media:A[2],sourceMap:A[3]};-1!==m?(t[m].references++,t[m].updater(l)):t.push({identifier:d,updater:C(l,r),references:1}),e.push(d)}return e}function s(n){var r=document.createElement("style"),e=n.attributes||{};if(void 0===e.nonce){var t=o.nc;t&&(e.nonce=t)}if(Object.keys(e).forEach((function(n){r.setAttribute(n,e[n])})),"function"==typeof n.insert)n.insert(r);else{var a=c(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(r)}return r}var i,d=(i=[],function(n,r){return i[n]=r,i.filter(Boolean).join("\n")});function m(n,r,o,e){var c=o?"":e.media?"@media ".concat(e.media," {").concat(e.css,"}"):e.css;if(n.styleSheet)n.styleSheet.cssText=d(r,c);else{var t=document.createTextNode(c),a=n.childNodes;a[r]&&n.removeChild(a[r]),a.length?n.insertBefore(t,a[r]):n.appendChild(t)}}function l(n,r,o){var e=o.css,c=o.media,t=o.sourceMap;if(c?n.setAttribute("media",c):n.removeAttribute("media"),t&&"undefined"!=typeof btoa&&(e+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(t))))," */")),n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}var u=null,p=0;function C(n,r){var o,e,c;if(r.singleton){var t=p++;o=u||(u=s(r)),e=m.bind(null,o,t,!1),c=m.bind(null,o,t,!0)}else o=s(r),e=l.bind(null,o,r),c=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(o)};return e(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap)return;e(n=r)}else c()}}n.exports=function(n,r){(r=r||{}).singleton||"boolean"==typeof r.singleton||(r.singleton=(void 0===e&&(e=Boolean(window&&document&&document.all&&!window.atob)),e));var o=A(n=n||[],r);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var e=0;e<o.length;e++){var c=a(o[e]);t[c].references--}for(var s=A(n,r),i=0;i<o.length;i++){var d=a(o[i]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}o=s}}}}}]);
//# sourceMappingURL=3661.cfb8ec8d290772cb3eff.js.map