"use strict";(self.webpackChunkjupyterlab_dmn=self.webpackChunkjupyterlab_dmn||[]).push([[568],{568:(e,t,n)=>{n.r(t),n.d(t,{OutputWidget:()=>d,rendererFactory:()=>i,default:()=>m});var s=n(510),r=n(187);n(462),n(693),n(517),n(865);const a="application/dmn+xml";class d extends s.Widget{constructor(e){super(),this._mimeType=e.mimeType,this.addClass("mimerenderer-dmn")}async renderModel(e){this._dmn=new r.Z({additionalModules:[]});try{const t=JSON.parse(e.data["application/dmn+json"]||"{}");if(await this._dmn.importXML(e.data[this._mimeType]),t.style)for(const e of Object.keys(t.style))this.node.style.setProperty(e,t.style[e]);this._dmn.attachTo(this.node)}catch(e){this.node.textContent=`${e}`}return Promise.resolve()}}const i={safe:!0,mimeTypes:[a],createRenderer:e=>new d(e)},m={id:"jupyterlab-dmn:plugin",rendererFactory:i,rank:100,dataType:"string",fileTypes:[{name:"dmn",mimeTypes:[a],extensions:[".dmn"]}],documentWidgetFactoryOptions:{name:"JupyterLab DMN viewer",primaryFileType:"dmn",fileTypes:["dmn"],defaultFor:["dmn"]}}}}]);