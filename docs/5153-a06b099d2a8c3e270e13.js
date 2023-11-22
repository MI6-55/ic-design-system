"use strict";(self.webpackChunkic_design_system=self.webpackChunkic_design_system||[]).push([[5153],{5210:function(t,i,e){e.d(i,{c:function(){return s}});const s='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">\n    <path d="M0 0h24v24H0z" fill="none"/>\n    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>\n    <title>close icon</title>\n</svg>\n'},5153:function(t,i,e){e.r(i),e.d(i,{ic_toast:function(){return c}});var s=e(7848),a=e(5210),o=e(3407),n=e(3077);const r=1e3,c=class{constructor(t){(0,s.r)(this,t),this.icDismiss=(0,s.c)(this,"icDismiss",7),this.interactiveElements=[],this.dismissAction=()=>{this.icDismiss.emit()},this.handleProgressChange=()=>{this.timerProgress-=r/this.autoDismissTimeout*100},this.timerProgress=100,this.visible=!1,this.autoDismissTimeout=5e3,this.dismissButtonAriaLabel="dismiss",this.dismissMode="manual",this.heading=void 0,this.message=void 0,this.neutralIconAriaLabel=void 0,this.variant=void 0}disconnectedCallback(){window.clearTimeout(this.dismissTimeout),window.clearInterval(this.timerRefreshInterval)}componentWillLoad(){var t,i;if(this.handleLongText(this.heading.length>70,(null===(t=this.message)||void 0===t?void 0:t.length)>140),this.autoDismissTimeout<5e3&&(this.autoDismissTimeout=5e3),(0,o.i)(this.el,"action")&&(this.dismissMode="manual"),this.isManual="manual"===this.dismissMode,(0,o.i)(this.el,"neutral-icon")&&(this.variant="neutral"),"neutral"===this.variant&&(this.neutralVariantLabel=null!==(i=this.neutralIconAriaLabel)&&void 0!==i?i:o.V[this.variant].ariaLabel),this.isManual){const t=(0,o.d)(this.message)?`. ${this.message}`:"";this.el.setAttribute("aria-label",this.variant?this.neutralVariantLabel||o.V[this.variant].ariaLabel:this.heading),(this.variant||this.message)&&this.el.setAttribute("aria-description",this.variant?`${this.heading}${t}`:this.message)}}componentDidLoad(){(0,o.a)([{prop:this.heading,propName:"heading"}],"Toast");const t=(0,o.L)(this.el,"action"),i=this.el.shadowRoot.querySelector("ic-button");t&&this.interactiveElements.push(t),i&&this.interactiveElements.push(i)}handleDismiss(){this.visible=!1,clearInterval(this.timerRefreshInterval),this.timerProgress=100}handleKeyboard(t){if(this.isManual&&this.visible)switch(t.key){case"Tab":t.preventDefault(),this.findNextInteractiveElement(t.shiftKey).setFocus();break;case"Escape":!t.repeat&&this.dismissAction(),t.stopImmediatePropagation()}}handleTimer(t){if(!this.isManual)switch(t.type){case"mouseenter":window.clearTimeout(this.dismissTimeout),window.clearInterval(this.timerRefreshInterval),this.timerProgress=100;break;case"mouseleave":this.dismissTimeout=window.setTimeout(this.dismissAction,this.autoDismissTimeout),this.timerRefreshInterval=window.setInterval(this.handleProgressChange,r)}}async setVisible(){return this.visible||(this.visible=!0),this.isManual?(window.setTimeout((()=>this.interactiveElements[0].setFocus()),200),document.activeElement):(this.dismissTimeout=window.setTimeout(this.dismissAction,this.autoDismissTimeout),this.timerRefreshInterval=window.setInterval(this.handleProgressChange,r),null)}handleLongText(t,i){(i||t)&&console.error(`Too many characters in toast ${t?"heading":""}${t&&i?" and ":""}${i?"message":""}. Refer to character limits specified in the prop description`)}findNextInteractiveElement(t){const i=this.interactiveElements[0],e=this.interactiveElements[this.interactiveElements.length-1],s=t?i:e,a=t?e:i;if(this.isActive(s))return a;let o;return this.interactiveElements.some(((t,i)=>!!this.isActive(t)&&(o=i,!0)))?this.interactiveElements[o+(t?-1:1)]:i}isActive(t){return t===this.el?!!this.el.shadowRoot.activeElement:document.activeElement===t}render(){const{variant:t,heading:i,message:e,visible:r,isManual:c,dismissButtonAriaLabel:l}=this;return(0,s.h)(s.H,{class:{hidden:!r},role:c?"dialog":"status"},(0,s.h)("div",{class:"container"},t&&r&&(0,s.h)("div",{class:"toast-icon-container"},(0,s.h)("div",{class:{divider:!0,[`divider-${t}`]:!0}}),"neutral"===t?(0,s.h)("slot",{name:"neutral-icon"}):(0,s.h)("span",{class:"toast-icon",innerHTML:o.V[t].icon})),(0,s.h)("div",{class:{"toast-content":!0,"no-icon":"neutral"===t&&!(0,o.i)(this.el,"neutral-icon")}},(0,s.h)("div",{class:"toast-message"},(0,s.h)("ic-typography",{variant:"subtitle-large"},r&&(0,s.h)("h5",null,i)),e&&(0,s.h)("ic-typography",{variant:"body"},r&&(0,s.h)("p",null,e))),(0,o.i)(this.el,"action")&&(0,s.h)("div",{class:"toast-action-container"},(0,s.h)("slot",{name:"action"}))),c?(0,s.h)("ic-button",{id:"dismiss-button",innerHTML:a.c,onClick:this.dismissAction,variant:"icon",appearance:n.I.Light,"aria-label":l}):(0,s.h)("ic-loading-indicator",{class:"toast-dismiss-timer",appearance:"light",size:"icon",progress:this.timerProgress})))}get el(){return(0,s.g)(this)}};c.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host{--bottom-position:var(--ic-space-xl);position:fixed;bottom:var(--bottom-position);left:50%;transform:translate(-50%);animation:fadein var(--ic-transition-duration-slow) ease-in-out;z-index:var(--ic-z-index-toast)}:host(.hidden){display:none;animation:fadeout var(--ic-transition-duration-slow) ease-in-out}.container{max-width:32.5rem;min-width:18rem;box-shadow:var(--ic-elevation-overlay);min-height:3.5rem;background-color:var(--ic-architectural-800);color:var(--ic-color-white-text);display:flex;align-items:center;position:relative;border-radius:var(--ic-border-radius)}.toast-icon-container{height:100%;display:flex;align-items:center}.divider{height:100%;width:var(--ic-space-xs);position:absolute;border-radius:var(--ic-space-xxxs) 0 0 var(--ic-space-xxxs)}.divider-neutral{background-color:var(--ic-status-unknown)}.divider-info{background-color:var(--ic-status-info-contrast)}.divider-warning{background-color:var(--ic-status-warning-contrast)}.divider-error{background-color:var(--ic-status-error-contrast)}.divider-success{background-color:var(--ic-status-success-contrast)}.toast-icon,::slotted(svg){height:var(--ic-space-lg);width:var(--ic-space-lg);margin-left:var(--ic-space-md)}:host([variant="neutral"]) .toast-icon svg,::slotted(svg){fill:var(--ic-status-unknown)}:host([variant="info"]) .toast-icon svg{fill:var(--ic-status-info-contrast)}:host([variant="warning"]) .toast-icon svg{fill:var(--ic-status-warning-contrast)}:host([variant="error"]) .toast-icon svg{fill:var(--ic-status-error-contrast)}:host([variant="success"]) .toast-icon svg{fill:var(--ic-status-success-contrast)}.toast-content{margin-left:var(--ic-space-xs);width:100%}.no-icon{margin-left:var(--ic-space-md)}.toast-message{padding:var(--ic-space-xs) var(--ic-space-xs) var(--ic-space-xs) 0}.toast-action-container{padding-bottom:var(--ic-space-md)}ic-button,.toast-dismiss-timer{padding:var(--ic-space-xs)}@media (max-width: 576px){:host{--bottom-position:var(--ic-space-lg);width:calc(100% - 2 * var(--ic-space-md))}}@media (min-width: 993px){:host{--bottom-position:calc(var(--ic-space-xl) + var(--ic-space-xs))}}@media (forced-colors: active){.container{border:var(--ic-hc-border)}}@keyframes fadein{from{bottom:0;opacity:0}to{bottom:var(--bottom-position);opacity:1}}@keyframes fadeout{from{bottom:var(--bottom-position);opacity:1}to{bottom:0;opacity:0}}'}}]);