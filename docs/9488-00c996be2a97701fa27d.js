"use strict";(self.webpackChunkic_design_system=self.webpackChunkic_design_system||[]).push([[9488],{9488:function(e,i,t){t.r(i),t.d(i,{ic_chip:function(){return p}});var o=t(4942),s=t(5861),a=t(5671),n=t(3144),r=t(4687),c=t.n(r),l=t(2686),d=t(2907),p=(t(9455),function(){function e(i){var t=this;(0,a.Z)(this,e),(0,l.r)(this,i),this.dismiss=(0,l.c)(this,"dismiss",7),this.icDismiss=(0,l.c)(this,"icDismiss",7),this.dismissAction=function(){t.dismiss.emit(),t.icDismiss.emit()},this.mouseEnterHandler=function(){t.isHovered=!0},this.mouseLeaveHandler=function(){t.isHovered=!1},this.label=void 0,this.appearance="filled",this.size="default",this.dismissible=!1,this.disabled=!1,this.visible=!0,this.isHovered=!1}var i;return(0,n.Z)(e,[{key:"handleClick",value:function(){this.visible=!this.visible}},{key:"setFocus",value:(i=(0,s.Z)(c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.el.shadowRoot.querySelector("button")&&this.el.shadowRoot.querySelector("button").focus();case 1:case"end":return e.stop()}}),e,this)}))),function(){return i.apply(this,arguments)})},{key:"componentDidLoad",value:function(){var e;this.dismissible&&(null===(e=this.el.shadowRoot.querySelector("span.ic-tooltip-label"))||void 0===e||e.setAttribute("aria-hidden","true")),(0,d.a)([{prop:this.label,propName:"label"}],"Chip")}},{key:"render",value:function(){var e,i=this.label,t=this.appearance,s=this.size,a=this.dismissible,n=this.visible,r=this.disabled,c=this.isHovered;return n&&(0,l.h)("div",{class:(e={},(0,o.Z)(e,"chip",!0),(0,o.Z)(e,"".concat(t),!0),(0,o.Z)(e,"".concat(s),!0),(0,o.Z)(e,"disabled",r),(0,o.Z)(e,"dismissible",a),(0,o.Z)(e,"hovered",c),e)},(0,d.i)(this.el,"icon")&&(0,l.h)("div",{class:"icon"},(0,l.h)("slot",{name:"icon"})),(0,l.h)("ic-typography",{variant:"label","apply-vertical-margins":!1,class:"label"},(0,l.h)("span",null,i)),a&&(0,l.h)("ic-tooltip",{label:"Dismiss",target:"dismiss-icon",class:(0,o.Z)({},"tooltip-disabled",r)},(0,l.h)("button",{id:"dismiss-icon",class:(0,o.Z)({},"dismiss-icon",!0),"aria-label":"Dismiss ".concat(i," chip"),disabled:r,tabindex:r?-1:0,onClick:this.dismissAction,onMouseEnter:this.mouseEnterHandler,onMouseLeave:this.mouseLeaveHandler,innerHTML:'<svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M10 0C4.47 0 0 4.47 0 10C0 15.53 4.47 20 10 20C15.53 20 20 15.53 20 10C20 4.47 15.53 0 10 0ZM15 13.59L13.59 15L10 11.41L6.41 15L5 13.59L8.59 10L5 6.41L6.41 5L10 8.59L13.59 5L15 6.41L11.41 10L15 13.59Z" fill="currentColor"/>\n</svg>\n'})))}},{key:"el",get:function(){return(0,l.g)(this)}}],[{key:"delegatesFocus",get:function(){return!0}}]),e}());p.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host{display:inline-block}.chip{display:flex;padding:var(--ic-space-xxs);font-size:0.875rem;border-radius:5rem;text-align:center;align-items:center;text-decoration:none;transition:var(--ic-easing-transition-fast);position:relative}.chip.small{padding:var(--ic-space-xxxs)}.chip.large{padding:var(--ic-space-xs)}.label{padding:0 var(--ic-space-xs)}.chip.hovered:not(:focus-within){background-color:var(--ic-architectural-300)}.chip:focus-within{box-shadow:var(--ic-border-focus);outline:var(--ic-hc-focus-outline);z-index:1}.chip.outline.hovered:not(:focus-within){background-color:var(--ic-action-dark-bg-hover)}ic-tooltip:focus-within{z-index:1}.filled{background-color:var(--ic-architectural-200);color:black;border:none}.filled.disabled{background-color:var(--ic-architectural-100)}.outline{color:var(--ic-architectural-900);border:0.063rem solid var(--ic-architectural-900);padding:calc(var(--ic-space-xxs) - 0.063rem)}.outline.small{padding:calc(var(--ic-space-xxxs) - 0.063rem)}.outline.large{padding:calc(var(--ic-space-xs) - 0.063rem)}.outline.disabled{border:var(--ic-border-disabled);background:none}.chip.disabled ic-typography{color:var(--ic-architectural-200)}.dismiss-icon{border:none;border-radius:50%;padding:0;background:none;cursor:pointer;margin:var(--ic-space-xxxs);height:calc(var(--ic-space-lg) - var(--ic-space-xxs));width:calc(var(--ic-space-lg) - var(--ic-space-xxs))}.dismiss-icon:focus{outline:var(--ic-hc-focus-outline)}.dismiss-icon[disabled]{pointer-events:none;color:var(--ic-architectural-200)}.icon{padding:var(--ic-space-xxxs);box-sizing:border-box}.icon,ic-tooltip{width:var(--ic-space-lg);height:var(--ic-space-lg)}.chip.disabled path,.chip.disabled ::slotted(svg){fill:var(--ic-architectural-200)}@media (forced-colors: active){.chip{border:var(--ic-hc-border)}.filled.small{padding:calc(var(--ic-space-xxxs) - 0.063rem)}.filled{padding:calc(var(--ic-space-xxxs) + 0.063rem)}.filled.large{padding:calc(var(--ic-space-xs) - 0.063rem)}.chip.disabled{-webkit-appearance:none;-moz-appearance:none;appearance:none;border-color:GrayText}.chip.disabled ic-typography{color:GrayText}.chip.disabled path,.chip.disabled ::slotted(svg){fill:GrayText}.chip:focus-within{outline:none;border-color:Highlight}}'}}]);
//# sourceMappingURL=9488-00c996be2a97701fa27d.js.map