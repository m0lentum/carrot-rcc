(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[6588,132],{70132:(e,t,n)=>{"use strict";n.d(t,{jS:()=>p,E0:()=>m,jU:()=>l,UG:()=>s});var o=n(23205),r=n(45931);var a=n(55852),i=n(34406);const s=i.release&&/node|io\.js/.test(i.release.name),l="undefined"!=typeof window&&!s;let c;"undefined"!=typeof navigator&&/Mac/.test(navigator.platform);const u=[],d=()=>{if(void 0===c)if(s){c=o.Ue();const e=i.argv;let t=null;for(let n=0;n<e.length;n++){const o=e[n];"-"===o[0]?(null!==t&&c.set(t,""),t=o):null!==t?(c.set(t,o),t=null):u.push(o)}null!==t&&c.set(t,"")}else"object"==typeof location?(c=o.Ue(),(location.search||"?").slice(1).split("&").forEach((e=>{if(0!==e.length){const[t,n]=e.split("=");c.set(`--${r.NF(t,"-")}`,n),c.set(`-${r.NF(t,"-")}`,n)}}))):c=o.Ue();return c},p=(e,t)=>d().get(e)||t,m=e=>{return void 0===(t=s?{}[e.toUpperCase()]:a.X.getItem(e))?null:t;var t};(e=>d().has(e))("--"+"production")||m("production")},23205:(e,t,n)=>{"use strict";n.d(t,{Ue:()=>o,JG:()=>r,Yu:()=>a,UI:()=>i,Yj:()=>s});const o=()=>new Map,r=e=>{const t=o();return e.forEach(((e,n)=>{t.set(n,e)})),t},a=(e,t,n)=>{let o=e.get(t);return void 0===o&&e.set(t,o=n()),o},i=(e,t)=>{const n=[];for(const[o,r]of e)n.push(t(r,o));return n},s=(e,t)=>{for(const[n,o]of e)if(t(o,n))return!0;return!1}},55852:(e,t,n)=>{"use strict";n.d(t,{X:()=>a,z:()=>i});let o=new class{constructor(){this.map=new Map}setItem(e,t){this.map.set(e,t)}getItem(e){return this.map.get(e)}},r=!0;try{"undefined"!=typeof localStorage&&(o=localStorage,r=!1)}catch(e){}const a=o,i=e=>r||addEventListener("storage",e)},45931:(e,t,n)=>{"use strict";n.d(t,{IK:()=>o,NF:()=>i,lz:()=>l});const o=String.fromCharCode,r=(String.fromCodePoint,/^\s*/g),a=/([A-Z])/g,i=(e,t)=>(e=>e.replace(r,""))(e.replace(a,(e=>`${t}${(e=>e.toLowerCase())(e)}`))),s="undefined"!=typeof TextEncoder?new TextEncoder:null,l=s?e=>s.encode(e):e=>{const t=unescape(encodeURIComponent(e)),n=t.length,o=new Uint8Array(n);for(let e=0;e<n;e++)o[e]=t.codePointAt(e);return o};let c="undefined"==typeof TextDecoder?null:new TextDecoder("utf-8",{fatal:!0,ignoreBOM:!0});c&&1===c.decode(new Uint8Array).length&&(c=null)},34406:e=>{var t,n,o=e.exports={};function r(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function i(e){if(t===setTimeout)return setTimeout(e,0);if((t===r||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:r}catch(e){t=r}try{n="function"==typeof clearTimeout?clearTimeout:a}catch(e){n=a}}();var s,l=[],c=!1,u=-1;function d(){c&&s&&(c=!1,s.length?l=s.concat(l):u=-1,l.length&&p())}function p(){if(!c){var e=i(d);c=!0;for(var t=l.length;t;){for(s=l,l=[];++u<t;)s&&s[u].run();u=-1,t=l.length}s=null,c=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===a||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function f(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new m(e,t)),1!==l.length||c||i(p)},m.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=f,o.addListener=f,o.once=f,o.off=f,o.removeListener=f,o.removeAllListeners=f,o.emit=f,o.prependListener=f,o.prependOnceListener=f,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},6588:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>T});var o,r=n(97265),a=n(5714),i=n(14390),s=n(71096),l=n(19233),c=n(29970),u=n(82031),d=n(93935),p=n(86570),m=n(41415),f=n(62867),h=n(9727),g=n(61389),w=n(70132),y=n(76749),b=n(2411),v=n.n(b);class _ extends y.WebrtcProvider{constructor(e){super(`${e.room}${e.path}`,e.ymodel.ydoc),this._initialRequest=null,this.awareness=e.ymodel.awareness;const t=`#${(0,w.jS)("--usercolor",(0,l.getRandomColor)().slice(1))}`,n=(0,w.jS)("--username",(0,l.getAnonymousUserName)()),o=this.awareness.getLocalState();o&&!o.name&&this.awareness.setLocalStateField("user",{name:n,color:t})}setPath(){}requestInitialContent(){if(this._initialRequest)return this._initialRequest.promise;let e=!1;return this._initialRequest=new h.PromiseDelegate,this.on("synced",(t=>{this._initialRequest&&(this._initialRequest.resolve(t.synced),e=!0)})),setTimeout((()=>{!e&&this._initialRequest&&this._initialRequest.resolve(!1)}),1e3),this._initialRequest.promise}putInitializedState(){}acquireLock(){return Promise.resolve(0)}releaseLock(e){}}!function(e){e.about="application:about",e.docmanagerDownload="docmanager:download",e.filebrowserDownload="filebrowser:download"}(o||(o={}));const T=[{id:"@jupyterlite/application-extension:about",autoStart:!0,requires:[d.ITranslator],optional:[a.ICommandPalette,u.IMainMenu],activate:(e,t,n,r)=>{const{commands:i}=e,s=t.load("jupyterlab"),l=s.__("Help");i.addCommand(o.about,{label:s.__("About %1",e.name),execute:()=>{const t=s.__("Version %1",e.version),n=v().createElement("span",{className:"jp-About-version-info"},v().createElement("span",{className:"jp-About-version"},t)),o=v().createElement("span",{className:"jp-About-header"},v().createElement("div",{className:"jp-About-header-info"},v().createElement(m.liteWordmark.react,{height:"auto",width:"196px"}),n)),r=v().createElement("span",{className:"jp-About-externalLinks"},v().createElement("a",{href:"https://github.com/jupyterlite/jupyterlite/graphs/contributors",target:"_blank",rel:"noopener noreferrer",className:"jp-Button-flat"},s.__("CONTRIBUTOR LIST")),v().createElement("a",{href:"https://github.com/jupyterlite/jupyterlite",target:"_blank",rel:"noopener noreferrer",className:"jp-Button-flat"},s.__("JUPYTERLITE ON GITHUB"))),i=v().createElement("span",{className:"jp-About-copyright"},s.__("© 2021 JupyterLite Contributors")),l=v().createElement("div",{className:"jp-About-body"},r,i);return(0,a.showDialog)({title:o,body:l,buttons:[a.Dialog.createButton({label:s.__("Dismiss"),className:"jp-About-button jp-mod-reject jp-mod-styled"})]})}}),n&&n.addItem({command:o.about,category:l}),r&&r.helpMenu.addGroup([{command:o.about}],0)}},{id:"@jupyterlite/application-extension:docprovider",provides:l.IDocumentProviderFactory,activate:e=>{const t=(0,w.jS)("--room","").trim(),n=window.location.host,o="true"===i.PageConfig.getOption("collaborative")&&t,r=`${n}-${t||h.UUID.uuid4()}`;return e=>o?new _({room:r,...e}):new l.ProviderMock}},{id:"@jupyterlite/application-extension:download",autoStart:!0,requires:[d.ITranslator,s.IDocumentManager],optional:[a.ICommandPalette,c.IFileBrowserFactory,u.IMainMenu],activate:(e,t,n,r,i,s)=>{const l=t.load("jupyterlab"),{commands:c,contextMenu:u,serviceManager:d,shell:m}=e,h=()=>{const{currentWidget:e}=m;return!(!e||!n.contextForWidget(e))},g=(e,t)=>{const n=document.createElement("a");n.href=`data:text/json;charset=utf-8,${encodeURIComponent(e)}`,n.download=t,document.body.appendChild(n),n.click(),document.body.removeChild(n)};c.addCommand(o.docmanagerDownload,{label:l.__("Download"),caption:l.__("Download the file to your computer"),isEnabled:h,execute:()=>{const e=m.currentWidget;if(!h()||!e)return;const t=n.contextForWidget(e);if(!t)return(0,a.showDialog)({title:l.__("Cannot Download"),body:l.__("No context found for current widget!"),buttons:[a.Dialog.okButton({label:l.__("OK")})]});g(t.model.toString(),t.path)}});const w=l.__("File Operations");if(r&&r.addItem({command:o.docmanagerDownload,category:w}),s&&s.fileMenu.addGroup([{command:o.docmanagerDownload}],6),i){const{tracker:e}=i,{contents:t}=d;c.addCommand(o.filebrowserDownload,{execute:async()=>{const n=e.currentWidget;n&&(0,f.toArray)(n.selectedItems()).forEach((async e=>{if("directory"===e.type)return;const n=await t.get(e.path,{content:!0}),o="notebook"===n.type||-1!==n.mimetype.indexOf("json")?JSON.stringify(n.content,null,2):n.content;g(o,e.name)}))},icon:p.downloadIcon.bindprops({stylesheet:"menuItem"}),label:l.__("Download")}),u.addItem({command:o.filebrowserDownload,selector:'.jp-DirListing-item[data-isdir="false"]',rank:9})}}},{id:"@jupyterlite/application-extension:logo",optional:[r.ILabShell],autoStart:!0,activate:(e,t)=>{if(!t)return;const n=new g.Widget;m.liteIcon.element({container:n.node,elementPosition:"center",margin:"2px 2px 2px 8px",height:"auto",width:"16px"}),n.id="jp-MainLogo",t.add(n,"top",{rank:0})}},{id:"@jupyterlite/application-extension:translator",activate:e=>new d.TranslationManager,autoStart:!0,provides:d.ITranslator}]}}]);
//# sourceMappingURL=6588.f2bff19c8d1ad029b077.js.map