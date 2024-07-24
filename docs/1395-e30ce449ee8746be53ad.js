"use strict";(self.webpackChunkic_design_system=self.webpackChunkic_design_system||[]).push([[1395],{1395:function(e,t,o){o.r(t),o.d(t,{ic_footer:function(){return s}});var i=o(9917),r=o(9176),n=o(6040);const s=class{constructor(e){(0,i.r)(this,e),this.footerResized=(0,i.c)(this,"footerResized",7),this.resizeObserver=null,this.resizeObserverCallback=e=>{e!==this.deviceSize&&(this.deviceSize=e),this.footerResized.emit()},this.runResizeObserver=()=>{this.resizeObserver=new ResizeObserver((()=>{const e=(0,r.e)();this.resizeObserverCallback(e)})),this.resizeObserver.observe(this.footerEl)},this.deviceSize=r.I.XL,this.foregroundColor=(0,r.b)(),this.aligned="left",this.breakpoint="medium",this.caption=void 0,this.copyright=!0,this.description=void 0,this.groupLinks=!1}disconnectedCallback(){null!==this.resizeObserver&&this.resizeObserver.disconnect()}componentWillLoad(){this.deviceSize=(0,r.e)()}componentDidLoad(){(0,r.f)(this.runResizeObserver)}themeChangeHandler(e){const t=e.detail;this.foregroundColor=t.mode}isSmall(){const e=this.breakpoint;return"extra small"===e?this.deviceSize<r.I.XS:"small"===e?this.deviceSize<r.I.S:"medium"===e?this.deviceSize<r.I.M:"large"===e?this.deviceSize<r.I.L:"extra large"===e&&this.deviceSize<r.I.XL}render(){const{aligned:e,caption:t,copyright:o,description:s,groupLinks:a,foregroundColor:l}=this,c=this.isSmall();return(0,i.h)(i.H,{class:{footer:!0,["footer-"+(c?"small":"sparse")]:!0,["footer-"+(a?"grouped":"ungrouped")]:!0,[`footer-${l}`]:!0,[n.I.Dark]:l===n.I.Dark,[n.I.Light]:l===n.I.Light}},(0,i.h)("footer",{ref:e=>this.footerEl=e},((0,r.i)(this.el,"description")||s)&&(0,i.h)("div",{class:"footer-description"},(0,i.h)("ic-section-container",{aligned:e,fullHeight:!0},(0,i.h)("div",{class:"footer-description-inner"},(0,i.h)("ic-typography",{variant:"body"},(0,i.h)("slot",{name:"description"},s))))),(0,r.i)(this.el,"link")&&(0,i.h)("div",{class:"footer-links"},a&&c?(0,i.h)("div",{class:"footer-links-inner",role:"list"},(0,i.h)("slot",{name:"link"})):(0,i.h)("ic-section-container",{fullHeight:!0,aligned:e},(0,i.h)("div",{class:"footer-links-inner",role:"list"},(0,i.h)("slot",{name:"link"})))),(0,i.h)("div",{class:"footer-compliance"},(0,i.h)("ic-section-container",{aligned:e,fullHeight:!0},(0,i.h)("div",{class:"footer-compliance-inner"},(0,r.i)(this.el,"logo")&&(0,i.h)("div",{class:"footer-logo"},(0,i.h)("slot",{name:"logo"})),((0,r.i)(this.el,"caption")||t)&&(0,i.h)("div",{class:"footer-caption"},(0,i.h)("ic-typography",{variant:this.deviceSize<=r.I.M?"caption":"body"},(0,i.h)("slot",{name:"caption"},t))),o&&(0,i.h)("div",{class:{"footer-copyright":!0,"classification-spacing":(0,r.u)()}},(0,i.h)("ic-typography",{variant:this.deviceSize<=r.I.M?"caption-uppercase":"label-uppercase"},"© Crown Copyright")))))))}get el(){return(0,i.g)(this)}};s.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host{display:block;--footer-compliance-padding:1rem 0}:host(.footer-sparse){--footer-links-padding:1.5rem 0;--footer-logo-margin-bottom:var(--ic-space-lg);--footer-link-inner-flex-direction:row}:host(.footer-small){--footer-links-padding:0 0;--footer-logo-margin-bottom:var(--ic-space-md);--footer-link-inner-flex-direction:column}:host(.footer-light){--footer-theme-secondary:var(--ic-theme-secondary);--footer-theme-tertiary:var(--ic-theme-tertiary);--footer-keyline:var(--ic-keyline-lighten)}:host(.footer-dark){--footer-theme-secondary:var(--ic-theme-secondary-light);--footer-theme-tertiary:var(--ic-theme-tertiary-light);--footer-keyline:var(--ic-keyline-darken)}:host(.footer-small.footer-ungrouped){--footer-links-padding:var(--ic-space-md) 0 0 0}footer{display:flex;flex-direction:column;width:100%}.footer-description{background-color:var(--footer-theme-secondary);color:var(--ic-theme-text);border-bottom:var(--footer-keyline)}.footer-description-inner{padding:1rem 0}.footer-links{padding:var(--footer-links-padding);background-color:var(--footer-theme-secondary);color:var(--ic-theme-text)}.footer-links-inner{display:flex;flex-direction:var(--footer-link-inner-flex-direction)}.footer-compliance{background-color:var(--footer-theme-tertiary);color:var(--ic-theme-text)}.footer-compliance-inner{padding:var(--footer-compliance-padding)}.footer-logo{margin-bottom:var(--footer-logo-margin-bottom);display:flex;gap:var(--ic-space-xxl)}.footer-logo>::slotted(){margin-right:var(--ic-space-md)}.footer-caption{margin-bottom:var(--ic-space-md)}.classification-spacing{margin-bottom:var(--ic-space-lg)}@media (forced-colors: active){footer{border-top:var(--ic-hc-border)}}'}}]);