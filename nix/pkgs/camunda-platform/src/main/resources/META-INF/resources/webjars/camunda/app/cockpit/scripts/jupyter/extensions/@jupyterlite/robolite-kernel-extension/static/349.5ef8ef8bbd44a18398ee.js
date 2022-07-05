(self.webpackChunk_jupyterlite_robolite_kernel_extension=self.webpackChunk_jupyterlite_robolite_kernel_extension||[]).push([[349],{2:(e,t)=>{"use strict";t.qC=t.vB=void 0,t.vB=function(e){let t;return t="string"==typeof e?JSON.parse(e):function(e){const t=new DataView(e),r=t.getUint32(0),n=[];if(r<2)throw new Error("Invalid incoming Kernel Message");for(let e=1;e<=r;e++)n.push(t.getUint32(4*e));const s=new Uint8Array(e.slice(n[0],n[1])),o=JSON.parse(new TextDecoder("utf8").decode(s));o.buffers=[];for(let t=1;t<r;t++){const r=n[t],s=n[t+1]||e.byteLength;o.buffers.push(new DataView(e.slice(r,s)))}return o}(e),t},t.qC=function(e){var t;let r;return r=(null===(t=e.buffers)||void 0===t?void 0:t.length)?function(e){const t=[],r=[],n=new TextEncoder;let s=[];void 0!==e.buffers&&(s=e.buffers,delete e.buffers);const o=n.encode(JSON.stringify(e));r.push(o.buffer);for(let e=0;e<s.length;e++){const t=s[e];r.push(ArrayBuffer.isView(t)?t.buffer:t)}const i=r.length;t.push(4*(i+1));for(let e=0;e+1<r.length;e++)t.push(t[t.length-1]+r[e].byteLength);const a=new Uint8Array(t[t.length-1]+r[r.length-1].byteLength),c=new DataView(a.buffer);c.setUint32(0,i);for(let e=0;e<t.length;e++)c.setUint32(4*(e+1),t[e]);for(let e=0;e<r.length;e++)a.set(new Uint8Array(r[e]),t[e]);return a.buffer}(e):JSON.stringify(e),r}},349:(e,t,r)=>{"use strict";r.r(t),r.d(t,{BaseKernel:()=>o,IKernelSpecs:()=>m,IKernels:()=>g,KernelSpecs:()=>v,Kernels:()=>y});var n=r(786),s=r(168);class o{constructor(e){this._history=[],this._executionCount=0,this._isDisposed=!1,this._disposed=new s.Signal(this),this._parentHeader=void 0,this._parent=void 0;const{id:t,name:r,sendMessage:n}=e;this._id=t,this._name=r,this._sendMessage=n}get ready(){return Promise.resolve()}get isDisposed(){return this._isDisposed}get disposed(){return this._disposed}get id(){return this._id}get name(){return this._name}get executionCount(){return this._executionCount}get parentHeader(){return this._parentHeader}get parent(){return this._parent}dispose(){this.isDisposed||(this._isDisposed=!0,this._disposed.emit(void 0))}async handleMessage(e){switch(this._busy(e),this._parent=e,e.header.msg_type){case"kernel_info_request":await this._kernelInfo(e);break;case"execute_request":await this._execute(e);break;case"input_reply":this.inputReply(e.content);break;case"inspect_request":await this._inspect(e);break;case"is_complete_request":await this._isCompleteRequest(e);break;case"complete_request":await this._complete(e);break;case"history_request":await this._historyRequest(e);break;case"comm_open":await this.commOpen(e);break;case"comm_msg":await this.commMsg(e);break;case"comm_close":await this.commClose(e)}this._idle(e)}stream(e,t){var r;const s=void 0!==t?t:this._parentHeader,o=n.KernelMessage.createMessage({channel:"iopub",msgType:"stream",session:null!==(r=null==s?void 0:s.session)&&void 0!==r?r:"",parentHeader:s,content:e});this._sendMessage(o)}displayData(e,t){var r,s;const o=void 0!==t?t:this._parentHeader;e.metadata=null!==(r=e.metadata)&&void 0!==r?r:{};const i=n.KernelMessage.createMessage({channel:"iopub",msgType:"display_data",session:null!==(s=null==o?void 0:o.session)&&void 0!==s?s:"",parentHeader:o,content:e});this._sendMessage(i)}inputRequest(e,t){var r;const s=void 0!==t?t:this._parentHeader,o=n.KernelMessage.createMessage({channel:"stdin",msgType:"input_request",session:null!==(r=null==s?void 0:s.session)&&void 0!==r?r:"",parentHeader:s,content:e});this._sendMessage(o)}publishExecuteResult(e,t){var r;const s=void 0!==t?t:this._parentHeader,o=n.KernelMessage.createMessage({channel:"iopub",msgType:"execute_result",session:null!==(r=null==s?void 0:s.session)&&void 0!==r?r:"",parentHeader:s,content:e});this._sendMessage(o)}publishExecuteError(e,t){var r;const s=void 0!==t?t:this._parentHeader,o=n.KernelMessage.createMessage({channel:"iopub",msgType:"error",session:null!==(r=null==s?void 0:s.session)&&void 0!==r?r:"",parentHeader:s,content:e});this._sendMessage(o)}updateDisplayData(e,t){var r;const s=void 0!==t?t:this._parentHeader,o=n.KernelMessage.createMessage({channel:"iopub",msgType:"update_display_data",session:null!==(r=null==s?void 0:s.session)&&void 0!==r?r:"",parentHeader:s,content:e});this._sendMessage(o)}clearOutput(e,t){var r;const s=void 0!==t?t:this._parentHeader,o=n.KernelMessage.createMessage({channel:"iopub",msgType:"clear_output",session:null!==(r=null==s?void 0:s.session)&&void 0!==r?r:"",parentHeader:s,content:e});this._sendMessage(o)}handleComm(e,t,r,s,o){var i;const a=void 0!==o?o:this._parentHeader,c=n.KernelMessage.createMessage({channel:"iopub",msgType:e,session:null!==(i=null==a?void 0:a.session)&&void 0!==i?i:"",parentHeader:a,content:t,metadata:r,buffers:s});this._sendMessage(c)}_idle(e){const t=n.KernelMessage.createMessage({msgType:"status",session:e.header.session,parentHeader:e.header,channel:"iopub",content:{execution_state:"idle"}});this._sendMessage(t)}_busy(e){const t=n.KernelMessage.createMessage({msgType:"status",session:e.header.session,parentHeader:e.header,channel:"iopub",content:{execution_state:"busy"}});this._sendMessage(t)}async _kernelInfo(e){const t=await this.kernelInfoRequest(),r=n.KernelMessage.createMessage({msgType:"kernel_info_reply",channel:"shell",session:e.header.session,parentHeader:e.header,content:t});this._sendMessage(r)}async _historyRequest(e){const t=e,r=n.KernelMessage.createMessage({msgType:"history_reply",channel:"shell",parentHeader:t.header,session:e.header.session,content:{status:"ok",history:this._history}});this._sendMessage(r)}_executeInput(e){const t=e,r=t.content.code,s=n.KernelMessage.createMessage({msgType:"execute_input",parentHeader:t.header,channel:"iopub",session:e.header.session,content:{code:r,execution_count:this._executionCount}});this._sendMessage(s)}async _execute(e){const t=e,r=t.content;r.store_history&&this._executionCount++,this._parentHeader=t.header,this._executeInput(t),r.store_history&&this._history.push([0,0,r.code]);const s=await this.executeRequest(t.content),o=n.KernelMessage.createMessage({msgType:"execute_reply",channel:"shell",parentHeader:t.header,session:e.header.session,content:s});this._sendMessage(o)}async _complete(e){const t=e,r=await this.completeRequest(t.content),s=n.KernelMessage.createMessage({msgType:"complete_reply",parentHeader:t.header,channel:"shell",session:e.header.session,content:r});this._sendMessage(s)}async _inspect(e){const t=e,r=await this.inspectRequest(t.content),s=n.KernelMessage.createMessage({msgType:"inspect_reply",parentHeader:t.header,channel:"shell",session:e.header.session,content:r});this._sendMessage(s)}async _isCompleteRequest(e){const t=e,r=await this.isCompleteRequest(t.content),s=n.KernelMessage.createMessage({msgType:"is_complete_reply",parentHeader:t.header,channel:"shell",session:e.header.session,content:r});this._sendMessage(s)}}var i=r(232),a=r(2),c=r(797),l=r(670);new Error("timeout while waiting for mutex to become available"),new Error("mutex already locked");const u=new Error("request for lock canceled");var h=function(e,t,r,n){return new(r||(r=Promise))((function(s,o){function i(e){try{c(n.next(e))}catch(e){o(e)}}function a(e){try{c(n.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?s(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(i,a)}c((n=n.apply(e,t||[])).next())}))};class p{constructor(e,t=u){if(this._maxConcurrency=e,this._cancelError=t,this._queue=[],this._waiters=[],e<=0)throw new Error("semaphore must be initialized to a positive value");this._value=e}acquire(){const e=this.isLocked(),t=new Promise(((e,t)=>this._queue.push({resolve:e,reject:t})));return e||this._dispatch(),t}runExclusive(e){return h(this,void 0,void 0,(function*(){const[t,r]=yield this.acquire();try{return yield e(t)}finally{r()}}))}waitForUnlock(){return h(this,void 0,void 0,(function*(){return this.isLocked()?new Promise((e=>this._waiters.push({resolve:e}))):Promise.resolve()}))}isLocked(){return this._value<=0}release(){if(this._maxConcurrency>1)throw new Error("this method is unavailable on semaphores with concurrency > 1; use the scoped release returned by acquire instead");if(this._currentReleaser){const e=this._currentReleaser;this._currentReleaser=void 0,e()}}cancel(){this._queue.forEach((e=>e.reject(this._cancelError))),this._queue=[]}_dispatch(){const e=this._queue.shift();if(!e)return;let t=!1;this._currentReleaser=()=>{t||(t=!0,this._value++,this._resolveWaiters(),this._dispatch())},e.resolve([this._value--,this._currentReleaser])}_resolveWaiters(){this._waiters.forEach((e=>e.resolve())),this._waiters=[]}}class d{constructor(e){this._semaphore=new p(1,e)}acquire(){return e=this,t=void 0,n=function*(){const[,e]=yield this._semaphore.acquire();return e},new((r=void 0)||(r=Promise))((function(s,o){function i(e){try{c(n.next(e))}catch(e){o(e)}}function a(e){try{c(n.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?s(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(i,a)}c((n=n.apply(e,t||[])).next())}));var e,t,r,n}runExclusive(e){return this._semaphore.runExclusive((()=>e()))}isLocked(){return this._semaphore.isLocked()}waitForUnlock(){return this._semaphore.waitForUnlock()}release(){this._semaphore.release()}cancel(){return this._semaphore.cancel()}}var f=r(732);class y{constructor(e){this._kernels=new i.ObservableMap,this._clients=new i.ObservableMap,this._kernelClients=new i.ObservableMap;const{kernelspecs:t}=e;this._kernelspecs=t}async startNew(e){const{id:t,name:r}=e,n=this._kernelspecs.factories.get(r);if(!n)return{id:t,name:r};const s=new d,o=(e,t,r)=>{var n;const o=this._kernels.get(e);if(!o)throw Error(`No kernel ${e}`);this._clients.set(t,r),null===(n=this._kernelClients.get(e))||void 0===n||n.add(t),r.on("message",(async e=>{let t;if(e instanceof ArrayBuffer)e=new Uint8Array(e).buffer,t=(0,a.vB)(e);else{if("string"!=typeof e)return;t=(0,a.vB)(e)}"input_reply"===t.header.msg_type?o.handleMessage(t):(async e=>{await s.runExclusive((async()=>{await o.handleMessage(e)}))})(t)}));const i=()=>{var r;this._clients.delete(t),null===(r=this._kernelClients.get(e))||void 0===r||r.delete(t)};o.disposed.connect(i),r.onclose=i},i=null!=t?t:c.UUID.uuid4(),u=`${y.WS_BASE_URL}api/kernels/${i}/channels`,h=this._kernels.get(i);if(h)return{id:h.id,name:h.name};const p=await n({id:i,sendMessage:e=>{const t=e.header.session,r=this._clients.get(t);if(!r)return void console.warn(`Trying to send message on removed socket for kernel ${i}`);const n=(0,a.qC)(e);if("iopub"!==e.channel)r.send(n);else{const e=this._kernelClients.get(i);null==e||e.forEach((e=>{var t;null===(t=this._clients.get(e))||void 0===t||t.send(n)}))}},name:r});await p.ready,this._kernels.set(i,p),this._kernelClients.set(i,new Set);const f=new l.Server(u);return f.on("connection",(e=>{var t;const r=null!==(t=new URL(e.url).searchParams.get("session_id"))&&void 0!==t?t:"";o(i,r,e)})),f.on("close",(()=>{this._clients.keys().forEach((e=>{var t;const r=this._clients.get(e);(null==r?void 0:r.readyState)===WebSocket.CLOSED&&(this._clients.delete(e),null===(t=this._kernelClients.get(i))||void 0===t||t.delete(e))}))})),p.disposed.connect((()=>{f.close(),this._kernels.delete(i),this._kernelClients.delete(i)})),{id:p.id,name:p.name}}async restart(e){const t=this._kernels.get(e);if(!t)throw Error(`Kernel ${e} does not exist`);const{id:r,name:n}=t;return t.dispose(),this.startNew({id:r,name:n})}async shutdown(e){var t;null===(t=this._kernels.delete(e))||void 0===t||t.dispose()}}!function(e){e.WS_BASE_URL=f.PageConfig.getBaseUrl().replace(/^http/,"ws")}(y||(y={}));class v{constructor(e){this._specs=new Map,this._factories=new Map}get specs(){return 0===this._specs.size?null:{default:"python",kernelspecs:Object.fromEntries(this._specs)}}get factories(){return this._factories}register(e){const{spec:t,create:r}=e;this._specs.set(t.name,t),this._factories.set(t.name,r)}}const g=new c.Token("@jupyterlite/kernel:IKernels"),m=new c.Token("@jupyterlite/kernel:IKernelSpecs")},670:function(e,t,r){var n=r(155);!function(e){"use strict";var t="undefined"!=typeof window?window:void 0!==r.g?r.g:"undefined"!=typeof self?self:{},s=function(e,t){if(t=t.split(":")[0],!(e=+e))return!1;switch(t){case"http":case"ws":return 80!==e;case"https":case"wss":return 443!==e;case"ftp":return 21!==e;case"gopher":return 70!==e;case"file":return!1}return 0!==e},o=Object.prototype.hasOwnProperty;function i(e){try{return decodeURIComponent(e.replace(/\+/g," "))}catch(e){return null}}function a(e){try{return encodeURIComponent(e)}catch(e){return null}}var c={stringify:function(e,t){t=t||"";var r,n,s=[];for(n in"string"!=typeof t&&(t="?"),e)if(o.call(e,n)){if((r=e[n])||null!=r&&!isNaN(r)||(r=""),n=a(n),r=a(r),null===n||null===r)continue;s.push(n+"="+r)}return s.length?t+s.join("&"):""},parse:function(e){for(var t,r=/([^=?#&]+)=?([^&]*)/g,n={};t=r.exec(e);){var s=i(t[1]),o=i(t[2]);null===s||null===o||s in n||(n[s]=o)}return n}},l=/^[A-Za-z][A-Za-z0-9+-.]*:\/\//,u=/^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i,h=new RegExp("^[\\x09\\x0A\\x0B\\x0C\\x0D\\x20\\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF]+");function p(e){return(e||"").toString().replace(h,"")}var d=[["#","hash"],["?","query"],function(e,t){return v(t.protocol)?e.replace(/\\/g,"/"):e},["/","pathname"],["@","auth",1],[NaN,"host",void 0,1,1],[/:(\d+)$/,"port",void 0,1],[NaN,"hostname",void 0,1,1]],f={hash:1,query:1};function y(e){var r,n=("undefined"!=typeof window?window:void 0!==t?t:"undefined"!=typeof self?self:{}).location||{},s={},o=typeof(e=e||n);if("blob:"===e.protocol)s=new m(unescape(e.pathname),{});else if("string"===o)for(r in s=new m(e,{}),f)delete s[r];else if("object"===o){for(r in e)r in f||(s[r]=e[r]);void 0===s.slashes&&(s.slashes=l.test(e.href))}return s}function v(e){return"file:"===e||"ftp:"===e||"http:"===e||"https:"===e||"ws:"===e||"wss:"===e}function g(e,t){e=p(e),t=t||{};var r,n=u.exec(e),s=n[1]?n[1].toLowerCase():"",o=!!n[2],i=!!n[3],a=0;return o?i?(r=n[2]+n[3]+n[4],a=n[2].length+n[3].length):(r=n[2]+n[4],a=n[2].length):i?(r=n[3]+n[4],a=n[3].length):r=n[4],"file:"===s?a>=2&&(r=r.slice(2)):v(s)?r=n[4]:s?o&&(r=r.slice(2)):a>=2&&v(t.protocol)&&(r=n[4]),{protocol:s,slashes:o||v(s),slashesCount:a,rest:r}}function m(e,t,r){if(e=p(e),!(this instanceof m))return new m(e,t,r);var n,o,i,a,l,u,h=d.slice(),f=typeof t,_=this,b=0;for("object"!==f&&"string"!==f&&(r=t,t=null),r&&"function"!=typeof r&&(r=c.parse),n=!(o=g(e||"",t=y(t))).protocol&&!o.slashes,_.slashes=o.slashes||n&&t.slashes,_.protocol=o.protocol||t.protocol||"",e=o.rest,("file:"===_.protocol||!o.slashes&&(o.protocol||o.slashesCount<2||!v(_.protocol)))&&(h[3]=[/(.*)/,"pathname"]);b<h.length;b++)"function"!=typeof(a=h[b])?(i=a[0],u=a[1],i!=i?_[u]=e:"string"==typeof i?~(l=e.indexOf(i))&&("number"==typeof a[2]?(_[u]=e.slice(0,l),e=e.slice(l+a[2])):(_[u]=e.slice(l),e=e.slice(0,l))):(l=i.exec(e))&&(_[u]=l[1],e=e.slice(0,l.index)),_[u]=_[u]||n&&a[3]&&t[u]||"",a[4]&&(_[u]=_[u].toLowerCase())):e=a(e,_);r&&(_.query=r(_.query)),n&&t.slashes&&"/"!==_.pathname.charAt(0)&&(""!==_.pathname||""!==t.pathname)&&(_.pathname=function(e,t){if(""===e)return t;for(var r=(t||"/").split("/").slice(0,-1).concat(e.split("/")),n=r.length,s=r[n-1],o=!1,i=0;n--;)"."===r[n]?r.splice(n,1):".."===r[n]?(r.splice(n,1),i++):i&&(0===n&&(o=!0),r.splice(n,1),i--);return o&&r.unshift(""),"."!==s&&".."!==s||r.push(""),r.join("/")}(_.pathname,t.pathname)),"/"!==_.pathname.charAt(0)&&v(_.protocol)&&(_.pathname="/"+_.pathname),s(_.port,_.protocol)||(_.host=_.hostname,_.port=""),_.username=_.password="",_.auth&&(a=_.auth.split(":"),_.username=a[0]||"",_.password=a[1]||""),_.origin="file:"!==_.protocol&&v(_.protocol)&&_.host?_.protocol+"//"+_.host:"null",_.href=_.toString()}m.prototype={set:function(e,t,r){var n=this;switch(e){case"query":"string"==typeof t&&t.length&&(t=(r||c.parse)(t)),n[e]=t;break;case"port":n[e]=t,s(t,n.protocol)?t&&(n.host=n.hostname+":"+t):(n.host=n.hostname,n[e]="");break;case"hostname":n[e]=t,n.port&&(t+=":"+n.port),n.host=t;break;case"host":n[e]=t,/:\d+$/.test(t)?(t=t.split(":"),n.port=t.pop(),n.hostname=t.join(":")):(n.hostname=t,n.port="");break;case"protocol":n.protocol=t.toLowerCase(),n.slashes=!r;break;case"pathname":case"hash":if(t){var o="pathname"===e?"/":"#";n[e]=t.charAt(0)!==o?o+t:t}else n[e]=t;break;default:n[e]=t}for(var i=0;i<d.length;i++){var a=d[i];a[4]&&(n[a[1]]=n[a[1]].toLowerCase())}return n.origin="file:"!==n.protocol&&v(n.protocol)&&n.host?n.protocol+"//"+n.host:"null",n.href=n.toString(),n},toString:function(e){e&&"function"==typeof e||(e=c.stringify);var t,r=this,n=r.protocol;n&&":"!==n.charAt(n.length-1)&&(n+=":");var s=n+(r.slashes||v(r.protocol)?"//":"");return r.username&&(s+=r.username,r.password&&(s+=":"+r.password),s+="@"),s+=r.host+r.pathname,(t="object"==typeof r.query?e(r.query):r.query)&&(s+="?"!==t.charAt(0)?"?"+t:t),r.hash&&(s+=r.hash),s}},m.extractProtocol=g,m.location=y,m.trimLeft=p,m.qs=c;var _=m;function b(e,t){setTimeout((function(t){return e.call(t)}),4,t)}function w(e,t){void 0!==n&&console[e].call(null,t)}function E(e,t){void 0===e&&(e=[]);var r=[];return e.forEach((function(e){t(e)||r.push(e)})),r}var S=function(){this.listeners={}};function k(e){var t=e.indexOf("?");return t>=0?e.slice(0,t):e}S.prototype.addEventListener=function(e,t){"function"==typeof t&&(Array.isArray(this.listeners[e])||(this.listeners[e]=[]),0===function(e,t){void 0===e&&(e=[]);var r=[];return e.forEach((function(e){t(e)&&r.push(e)})),r}(this.listeners[e],(function(e){return e===t})).length&&this.listeners[e].push(t))},S.prototype.removeEventListener=function(e,t){var r=this.listeners[e];this.listeners[e]=E(r,(function(e){return e===t}))},S.prototype.dispatchEvent=function(e){for(var t=this,r=[],n=arguments.length-1;n-- >0;)r[n]=arguments[n+1];var s=e.type,o=this.listeners[s];return!!Array.isArray(o)&&(o.forEach((function(n){r.length>0?n.apply(t,r):n.call(t,e)})),!0)};var O=function(){this.urlMap={}};O.prototype.attachWebSocket=function(e,t){var r=k(t),n=this.urlMap[r];if(n&&n.server&&-1===n.websockets.indexOf(e))return n.websockets.push(e),n.server},O.prototype.addMembershipToRoom=function(e,t){var r=this.urlMap[k(e.url)];r&&r.server&&-1!==r.websockets.indexOf(e)&&(r.roomMemberships[t]||(r.roomMemberships[t]=[]),r.roomMemberships[t].push(e))},O.prototype.attachServer=function(e,t){var r=k(t);if(!this.urlMap[r])return this.urlMap[r]={server:e,websockets:[],roomMemberships:{}},e},O.prototype.serverLookup=function(e){var t=k(e),r=this.urlMap[t];if(r)return r.server},O.prototype.websocketsLookup=function(e,t,r){var n,s=k(e),o=this.urlMap[s];return n=o?o.websockets:[],t&&(n=o.roomMemberships[t]||[]),r?n.filter((function(e){return e!==r})):n},O.prototype.removeServer=function(e){delete this.urlMap[k(e)]},O.prototype.removeWebSocket=function(e,t){var r=k(t),n=this.urlMap[r];n&&(n.websockets=E(n.websockets,(function(t){return t===e})))},O.prototype.removeMembershipFromRoom=function(e,t){var r=this.urlMap[k(e.url)],n=r.roomMemberships[t];r&&null!==n&&(r.roomMemberships[t]=E(n,(function(t){return t===e})))};var C=new O,T=1e3,M=1005,L=1006,R={CONSTRUCTOR_ERROR:"Failed to construct 'WebSocket':",CLOSE_ERROR:"Failed to execute 'close' on 'WebSocket':",EVENT:{CONSTRUCT:"Failed to construct 'Event':",MESSAGE:"Failed to construct 'MessageEvent':",CLOSE:"Failed to construct 'CloseEvent':"}},N=function(){};N.prototype.stopPropagation=function(){},N.prototype.stopImmediatePropagation=function(){},N.prototype.initEvent=function(e,t,r){void 0===e&&(e="undefined"),void 0===t&&(t=!1),void 0===r&&(r=!1),this.type=""+e,this.bubbles=Boolean(t),this.cancelable=Boolean(r)};var x=function(e){function t(t,r){if(void 0===r&&(r={}),e.call(this),!t)throw new TypeError(R.EVENT_ERROR+" 1 argument required, but only 0 present.");if("object"!=typeof r)throw new TypeError(R.EVENT_ERROR+" parameter 2 ('eventInitDict') is not an object.");var n=r.bubbles,s=r.cancelable;this.type=""+t,this.timeStamp=Date.now(),this.target=null,this.srcElement=null,this.returnValue=!0,this.isTrusted=!1,this.eventPhase=0,this.defaultPrevented=!1,this.currentTarget=null,this.cancelable=!!s&&Boolean(s),this.cancelBubble=!1,this.bubbles=!!n&&Boolean(n)}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t}(N),q=function(e){function t(t,r){if(void 0===r&&(r={}),e.call(this),!t)throw new TypeError(R.EVENT.MESSAGE+" 1 argument required, but only 0 present.");if("object"!=typeof r)throw new TypeError(R.EVENT.MESSAGE+" parameter 2 ('eventInitDict') is not an object");var n=r.bubbles,s=r.cancelable,o=r.data,i=r.origin,a=r.lastEventId,c=r.ports;this.type=""+t,this.timeStamp=Date.now(),this.target=null,this.srcElement=null,this.returnValue=!0,this.isTrusted=!1,this.eventPhase=0,this.defaultPrevented=!1,this.currentTarget=null,this.cancelable=!!s&&Boolean(s),this.canncelBubble=!1,this.bubbles=!!n&&Boolean(n),this.origin=""+i,this.ports=void 0===c?null:c,this.data=void 0===o?null:o,this.lastEventId=""+(a||"")}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t}(N),I=function(e){function t(t,r){if(void 0===r&&(r={}),e.call(this),!t)throw new TypeError(R.EVENT.CLOSE+" 1 argument required, but only 0 present.");if("object"!=typeof r)throw new TypeError(R.EVENT.CLOSE+" parameter 2 ('eventInitDict') is not an object");var n=r.bubbles,s=r.cancelable,o=r.code,i=r.reason,a=r.wasClean;this.type=""+t,this.timeStamp=Date.now(),this.target=null,this.srcElement=null,this.returnValue=!0,this.isTrusted=!1,this.eventPhase=0,this.defaultPrevented=!1,this.currentTarget=null,this.cancelable=!!s&&Boolean(s),this.cancelBubble=!1,this.bubbles=!!n&&Boolean(n),this.code="number"==typeof o?parseInt(o,10):0,this.reason=""+(i||""),this.wasClean=!!a&&Boolean(a)}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t}(N);function A(e){var t=e.type,r=e.target,n=new x(t);return r&&(n.target=r,n.srcElement=r,n.currentTarget=r),n}function D(e){var t=e.type,r=e.origin,n=e.data,s=e.target,o=new q(t,{data:n,origin:r});return s&&(o.target=s,o.srcElement=s,o.currentTarget=s),o}function j(e){var t=e.code,r=e.reason,n=e.type,s=e.target,o=e.wasClean;o||(o=t===T||t===M);var i=new I(n,{code:t,reason:r,wasClean:o});return s&&(i.target=s,i.srcElement=s,i.currentTarget=s),i}function P(e,t,r){e.readyState=B.CLOSING;var n=C.serverLookup(e.url),s=j({type:"close",target:e.target,code:t,reason:r});b((function(){C.removeWebSocket(e,e.url),e.readyState=B.CLOSED,e.dispatchEvent(s),n&&n.dispatchEvent(s,n)}),e)}function W(e){return"[object Blob]"===Object.prototype.toString.call(e)||e instanceof ArrayBuffer||(e=String(e)),e}var U=new WeakMap;function H(e){if(U.has(e))return U.get(e);var t=new Proxy(e,{get:function(r,n){return"close"===n?function(e){void 0===e&&(e={});var r=e.code||T,n=e.reason||"";P(t,r,n)}:"send"===n?function(t){t=W(t),e.dispatchEvent(D({type:"message",data:t,origin:this.url,target:e}))}:"on"===n?function(t,r){e.addEventListener("server::"+t,r)}:"target"===n?e:r[n]}});return U.set(e,t),t}var B=function(e){function t(r,n){e.call(this),this.url=function(e){var t=new _(e),r=t.pathname,n=t.protocol,s=t.hash;if(!e)throw new TypeError(R.CONSTRUCTOR_ERROR+" 1 argument required, but only 0 present.");if(r||(t.pathname="/"),""===n)throw new SyntaxError(R.CONSTRUCTOR_ERROR+" The URL '"+t.toString()+"' is invalid.");if("ws:"!==n&&"wss:"!==n)throw new SyntaxError(R.CONSTRUCTOR_ERROR+" The URL's scheme must be either 'ws' or 'wss'. '"+n+"' is not allowed.");if(""!==s)throw new SyntaxError(R.CONSTRUCTOR_ERROR+" The URL contains a fragment identifier ('"+s+"'). Fragment identifiers are not allowed in WebSocket URLs.");return t.toString()}(r),n=function(e){if(void 0===e&&(e=[]),!Array.isArray(e)&&"string"!=typeof e)throw new SyntaxError(R.CONSTRUCTOR_ERROR+" The subprotocol '"+e.toString()+"' is invalid.");"string"==typeof e&&(e=[e]);var t=e.map((function(e){return{count:1,protocol:e}})).reduce((function(e,t){return e[t.protocol]=(e[t.protocol]||0)+t.count,e}),{}),r=Object.keys(t).filter((function(e){return t[e]>1}));if(r.length>0)throw new SyntaxError(R.CONSTRUCTOR_ERROR+" The subprotocol '"+r[0]+"' is duplicated.");return e}(n),this.protocol=n[0]||"",this.binaryType="blob",this.readyState=t.CONNECTING;var s=H(this),o=C.attachWebSocket(s,this.url);b((function(){if(o)if(o.options.verifyClient&&"function"==typeof o.options.verifyClient&&!o.options.verifyClient())this.readyState=t.CLOSED,w("error","WebSocket connection to '"+this.url+"' failed: HTTP Authentication failed; no valid credentials available"),C.removeWebSocket(s,this.url),this.dispatchEvent(A({type:"error",target:this})),this.dispatchEvent(j({type:"close",target:this,code:T}));else{if(o.options.selectProtocol&&"function"==typeof o.options.selectProtocol){var e=o.options.selectProtocol(n),r=""!==e,i=-1!==n.indexOf(e);if(r&&!i)return this.readyState=t.CLOSED,w("error","WebSocket connection to '"+this.url+"' failed: Invalid Sub-Protocol"),C.removeWebSocket(s,this.url),this.dispatchEvent(A({type:"error",target:this})),void this.dispatchEvent(j({type:"close",target:this,code:T}));this.protocol=e}this.readyState=t.OPEN,this.dispatchEvent(A({type:"open",target:this})),o.dispatchEvent(A({type:"connection"}),s)}else this.readyState=t.CLOSED,this.dispatchEvent(A({type:"error",target:this})),this.dispatchEvent(j({type:"close",target:this,code:T})),w("error","WebSocket connection to '"+this.url+"' failed")}),this)}e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t;var r={onopen:{},onmessage:{},onclose:{},onerror:{}};return r.onopen.get=function(){return this.listeners.open},r.onmessage.get=function(){return this.listeners.message},r.onclose.get=function(){return this.listeners.close},r.onerror.get=function(){return this.listeners.error},r.onopen.set=function(e){delete this.listeners.open,this.addEventListener("open",e)},r.onmessage.set=function(e){delete this.listeners.message,this.addEventListener("message",e)},r.onclose.set=function(e){delete this.listeners.close,this.addEventListener("close",e)},r.onerror.set=function(e){delete this.listeners.error,this.addEventListener("error",e)},t.prototype.send=function(e){var r=this;if(this.readyState===t.CLOSING||this.readyState===t.CLOSED)throw new Error("WebSocket is already in CLOSING or CLOSED state");var n=D({type:"server::message",origin:this.url,data:W(e)}),s=C.serverLookup(this.url);s&&b((function(){r.dispatchEvent(n,e)}),s)},t.prototype.close=function(e,r){if(void 0!==e&&("number"!=typeof e||1e3!==e&&(e<3e3||e>4999)))throw new TypeError(R.CLOSE_ERROR+" The code must be either 1000, or between 3000 and 4999. "+e+" is neither.");if(void 0!==r&&(n=r,s=encodeURIComponent(n).match(/%[89ABab]/g),n.length+(s?s.length:0)>123))throw new SyntaxError(R.CLOSE_ERROR+" The message must not be greater than 123 bytes.");var n,s;if(this.readyState!==t.CLOSING&&this.readyState!==t.CLOSED){var o=H(this);this.readyState===t.CONNECTING?function(e,t,r){e.readyState=B.CLOSING;var n=C.serverLookup(e.url),s=j({type:"close",target:e.target,code:t,reason:r,wasClean:!1}),o=A({type:"error",target:e.target});b((function(){C.removeWebSocket(e,e.url),e.readyState=B.CLOSED,e.dispatchEvent(o),e.dispatchEvent(s),n&&n.dispatchEvent(s,n)}),e)}(o,e||L,r):P(o,e||M,r)}},Object.defineProperties(t.prototype,r),t}(S);B.CONNECTING=0,B.prototype.CONNECTING=B.CONNECTING,B.OPEN=1,B.prototype.OPEN=B.OPEN,B.CLOSING=2,B.prototype.CLOSING=B.CLOSING,B.CLOSED=3,B.prototype.CLOSED=B.CLOSED;function K(){return"undefined"!=typeof window?window:"object"==typeof n&&"object"==typeof r.g?r.g:this}var G={mock:!0,verifyClient:null,selectProtocol:null},F=function(e){function t(t,r){void 0===r&&(r=G),e.call(this);var n=new _(t);if(n.pathname||(n.pathname="/"),this.url=n.toString(),this.originalWebSocket=null,!C.attachServer(this,this.url))throw this.dispatchEvent(A({type:"error"})),new Error("A mock server is already listening on this url");this.options=Object.assign({},G,r),this.options.mock&&this.mockWebsocket()}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.mockWebsocket=function(){var e=K();this.originalWebSocket=e.WebSocket,e.WebSocket=B},t.prototype.restoreWebsocket=function(){var e=K();null!==this.originalWebSocket&&(e.WebSocket=this.originalWebSocket),this.originalWebSocket=null},t.prototype.stop=function(e){void 0===e&&(e=function(){}),this.options.mock&&this.restoreWebsocket(),C.removeServer(this.url),"function"==typeof e&&e()},t.prototype.on=function(e,t){this.addEventListener(e,t)},t.prototype.close=function(e){void 0===e&&(e={});var t=e.code,r=e.reason,n=e.wasClean,s=C.websocketsLookup(this.url);C.removeServer(this.url),s.forEach((function(e){e.readyState=B.CLOSED,e.dispatchEvent(j({type:"close",target:e.target,code:t||T,reason:r||"",wasClean:n}))})),this.dispatchEvent(j({type:"close"}),this)},t.prototype.emit=function(e,t,r){var n=this;void 0===r&&(r={});var s=r.websockets;s||(s=C.websocketsLookup(this.url)),t="object"!=typeof r||arguments.length>3?(t=Array.prototype.slice.call(arguments,1,arguments.length)).map((function(e){return W(e)})):W(t),s.forEach((function(r){Array.isArray(t)?r.dispatchEvent.apply(r,[D({type:e,data:t,origin:n.url,target:r.target})].concat(t)):r.dispatchEvent(D({type:e,data:t,origin:n.url,target:r.target}))}))},t.prototype.clients=function(){return C.websocketsLookup(this.url)},t.prototype.to=function(e,t,r){var n=this;void 0===r&&(r=[]);var s=this,o=r.concat(C.websocketsLookup(this.url,e,t)).reduce((function(e,t){return e.indexOf(t)>-1?e:e.concat(t)}),[]);return{to:function(e,t){return n.to.call(n,e,t,o)},emit:function(e,t){s.emit(e,t,{websockets:o})}}},t.prototype.in=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];return this.to.apply(null,e)},t.prototype.simulate=function(e){var t=C.websocketsLookup(this.url);"error"===e&&t.forEach((function(e){e.readyState=B.CLOSED,e.dispatchEvent(A({type:"error"}))}))},t}(S);F.of=function(e){return new F(e)};var V=function(e){function t(r,n){var s=this;void 0===r&&(r="socket.io"),void 0===n&&(n=""),e.call(this),this.binaryType="blob";var o=new _(r);o.pathname||(o.pathname="/"),this.url=o.toString(),this.readyState=t.CONNECTING,this.protocol="",this.target=this,"string"==typeof n||"object"==typeof n&&null!==n?this.protocol=n:Array.isArray(n)&&n.length>0&&(this.protocol=n[0]);var i=C.attachWebSocket(this,this.url);b((function(){i?(this.readyState=t.OPEN,i.dispatchEvent(A({type:"connection"}),i,this),i.dispatchEvent(A({type:"connect"}),i,this),this.dispatchEvent(A({type:"connect",target:this}))):(this.readyState=t.CLOSED,this.dispatchEvent(A({type:"error",target:this})),this.dispatchEvent(j({type:"close",target:this,code:T})),w("error","Socket.io connection to '"+this.url+"' failed"))}),this),this.addEventListener("close",(function(e){s.dispatchEvent(j({type:"disconnect",target:e.target,code:e.code}))}))}e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t;var r={broadcast:{}};return t.prototype.close=function(){if(this.readyState===t.OPEN){var e=C.serverLookup(this.url);return C.removeWebSocket(this,this.url),this.readyState=t.CLOSED,this.dispatchEvent(j({type:"close",target:this,code:T})),e&&e.dispatchEvent(j({type:"disconnect",target:this,code:T}),e),this}},t.prototype.disconnect=function(){return this.close()},t.prototype.emit=function(e){for(var r=[],n=arguments.length-1;n-- >0;)r[n]=arguments[n+1];if(this.readyState!==t.OPEN)throw new Error("SocketIO is already in CLOSING or CLOSED state");var s=D({type:e,origin:this.url,data:r}),o=C.serverLookup(this.url);return o&&o.dispatchEvent.apply(o,[s].concat(r)),this},t.prototype.send=function(e){return this.emit("message",e),this},r.broadcast.get=function(){if(this.readyState!==t.OPEN)throw new Error("SocketIO is already in CLOSING or CLOSED state");var e=this,r=C.serverLookup(this.url);if(!r)throw new Error("SocketIO can not find a server at the specified URL ("+this.url+")");return{emit:function(t,n){return r.emit(t,n,{websockets:C.websocketsLookup(e.url,null,e)}),e},to:function(t){return r.to(t,e)},in:function(t){return r.in(t,e)}}},t.prototype.on=function(e,t){return this.addEventListener(e,t),this},t.prototype.off=function(e,t){this.removeEventListener(e,t)},t.prototype.hasListeners=function(e){var t=this.listeners[e];return!!Array.isArray(t)&&!!t.length},t.prototype.join=function(e){C.addMembershipToRoom(this,e)},t.prototype.leave=function(e){C.removeMembershipFromRoom(this,e)},t.prototype.to=function(e){return this.broadcast.to(e)},t.prototype.in=function(){return this.to.apply(null,arguments)},t.prototype.dispatchEvent=function(e){for(var t=this,r=[],n=arguments.length-1;n-- >0;)r[n]=arguments[n+1];var s=e.type,o=this.listeners[s];if(!Array.isArray(o))return!1;o.forEach((function(n){r.length>0?n.apply(t,r):n.call(t,e.data?e.data:e)}))},Object.defineProperties(t.prototype,r),t}(S);V.CONNECTING=0,V.OPEN=1,V.CLOSING=2,V.CLOSED=3;var $=function(e,t){return new V(e,t)};$.connect=function(e,t){return $(e,t)};var z=F,J=B,Z=$;e.Server=z,e.WebSocket=J,e.SocketIO=Z,Object.defineProperty(e,"__esModule",{value:!0})}(t)},155:e=>{var t,r,n=e.exports={};function s(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function i(e){if(t===setTimeout)return setTimeout(e,0);if((t===s||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:s}catch(e){t=s}try{r="function"==typeof clearTimeout?clearTimeout:o}catch(e){r=o}}();var a,c=[],l=!1,u=-1;function h(){l&&a&&(l=!1,a.length?c=a.concat(c):u=-1,c.length&&p())}function p(){if(!l){var e=i(h);l=!0;for(var t=c.length;t;){for(a=c,c=[];++u<t;)a&&a[u].run();u=-1,t=c.length}a=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===o||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function d(e,t){this.fun=e,this.array=t}function f(){}n.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];c.push(new d(e,t)),1!==c.length||l||i(p)},d.prototype.run=function(){this.fun.apply(null,this.array)},n.title="browser",n.browser=!0,n.env={},n.argv=[],n.version="",n.versions={},n.on=f,n.addListener=f,n.once=f,n.off=f,n.removeListener=f,n.removeAllListeners=f,n.emit=f,n.prependListener=f,n.prependOnceListener=f,n.listeners=function(e){return[]},n.binding=function(e){throw new Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(e){throw new Error("process.chdir is not supported")},n.umask=function(){return 0}}}]);