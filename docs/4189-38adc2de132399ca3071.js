"use strict";(self.webpackChunkic_design_system=self.webpackChunkic_design_system||[]).push([[4189],{19196:function(e,t,i){i.d(t,{C:function(){return a}});const a='<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M9.70687 6L8.29688 7.41L12.8769 12L8.29688 16.59L9.70687 18L15.7069 12L9.70687 6Z" fill="currentColor"/>\n</svg>\n'},4189:function(e,t,i){i.r(t),i.d(t,{ic_card:function(){return s}});var a=i(44894),o=i(18136),r=i(34677),n=i(19196);const s=class{constructor(e){(0,a.r)(this,e),this.hostMutationObserver=null,this.parentFocussed=()=>{this.isFocussed=!0},this.parentBlurred=()=>{this.isFocussed=!1},this.toggleExpanded=()=>{this.areaExpanded=!this.areaExpanded},this.hostMutationCallback=e=>{e.some((({type:e,addedNodes:t,removedNodes:i})=>"childList"===e&&(0,o.k)(t,i,["message","adornment","expanded-content","image-top","image-mid","icon","interaction-button","badge","interaction-controls"])))&&(0,a.f)(this)},this.appearance="default",this.areaExpanded=!1,this.isFocussed=!1,this.parentEl=null,this.parentIsAnchorTag=!1,this.clickable=!1,this.disabled=!1,this.expandable=!1,this.fullWidth=!1,this.heading=void 0,this.href=void 0,this.hreflang="",this.message="",this.referrerpolicy=void 0,this.rel=void 0,this.subheading=void 0,this.target=void 0}watchDisabledHandler(){(0,o.r)(this.disabled,this.el)}disconnectedCallback(){var e;this.parentIsAnchorTag&&(this.parentEl.removeEventListener("focus",this.parentFocussed),this.parentEl.removeEventListener("blur",this.parentBlurred)),null===(e=this.hostMutationObserver)||void 0===e||e.disconnect()}componentWillLoad(){this.parentEl=this.el.parentElement,"A"===this.parentEl.tagName&&(this.clickable=!0,this.parentIsAnchorTag=!0,this.parentEl.classList.add("ic-card-wrapper-link"),this.parentEl.addEventListener("focus",this.parentFocussed),this.parentEl.addEventListener("blur",this.parentBlurred)),(0,o.r)(this.disabled,this.el)}componentDidLoad(){!(0,o.i)(this.el,"heading")&&(0,o.a)([{prop:this.heading,propName:"heading"}],"Card"),this.updateTheme(),this.hostMutationObserver=new MutationObserver(this.hostMutationCallback),this.hostMutationObserver.observe(this.el,{childList:!0})}handleHostClick(e){this.disabled&&e.stopImmediatePropagation()}themeChangeHandler(e){const t=e.detail;this.updateTheme(t.mode)}async setFocus(){this.el.shadowRoot.querySelector("a")?this.el.shadowRoot.querySelector("a").focus():this.el.shadowRoot.querySelector("button")&&this.el.shadowRoot.querySelector("button").focus()}updateTheme(e=null){const t=(0,o.l)(this.el,e||null);t!==r.I.Default&&(this.appearance=t)}render(){const{clickable:e,disabled:t,expandable:i,heading:s,message:d,href:c,hreflang:l,referrerpolicy:h,rel:b,subheading:p,target:u,fullWidth:g,parentIsAnchorTag:m,isFocussed:f}=this,v=m?"div":e?void 0===this.href?"button":"a":"div",x="a"==v&&{href:c,hrefLang:l,referrerPolicy:h,rel:b,target:u};return(0,a.h)(v,Object.assign({class:{card:!0,clickable:e&&!t,disabled:t,fullwidth:g,focussed:f,dark:this.appearance===r.I.Dark},tabindex:e&&!m?0:null,"aria-disabled":t?"true":null,disabled:!!t||null},x),(0,o.i)(this.el,"image-top")&&(0,a.h)("div",{class:"image-top"},(0,a.h)("slot",{name:"image-top"})),(0,a.h)("div",{class:"card-header"},(0,o.i)(this.el,"icon")&&(0,a.h)("div",{class:"icon"},(0,a.h)("slot",{name:"icon"})),(0,a.h)("div",{class:"card-title"},(0,a.h)("slot",{name:"heading"},(0,a.h)("ic-typography",{variant:"h4"},(0,a.h)("p",null,s)))),(0,o.i)(this.el,"interaction-button")&&(0,a.h)("div",{class:"interaction-button"},(0,a.h)("slot",{name:"interaction-button"}))),(p||(0,o.i)(this.el,"subheading"))&&(0,a.h)("div",{class:"subheading"},(0,a.h)("slot",{name:"subheading"},(0,a.h)("ic-typography",{variant:"subtitle-small"},p))),(0,o.i)(this.el,"adornment")&&(0,a.h)("div",{class:"adornment"},(0,a.h)("slot",{name:"adornment"})),(0,o.i)(this.el,"image-mid")&&(0,a.h)("div",{class:"image-mid"},(0,a.h)("slot",{name:"image-mid"})),(d||(0,o.i)(this.el,"message"))&&(0,a.h)("div",{class:{"card-message":!0}},d&&(0,a.h)("ic-typography",{variant:"body"},d),(0,o.i)(this.el,"message")&&(0,a.h)("slot",{name:"message"})),((0,o.i)(this.el,"interaction-controls")||i)&&(0,a.h)("div",{class:"interaction-area"},(0,a.h)("div",{class:"interaction-controls"},(0,a.h)("slot",{name:"interaction-controls"})),i&&(0,a.h)("ic-tooltip",{id:"ic-tooltip-expand-button",label:"Toggle expandable area",silent:!0},(0,a.h)("button",{class:{"toggle-button":!0,["toggle-button-"+(this.areaExpanded?"expanded":"closed")]:!0},"aria-label":"Toggle expandable area","aria-expanded":`${this.areaExpanded}`,"aria-controls":this.areaExpanded?"expanded-content-area":null,onClick:this.toggleExpanded,innerHTML:n.C}))),(0,o.i)(this.el,"expanded-content")&&this.areaExpanded&&(0,a.h)("div",{class:"expanded-content",id:"expanded-content-area"},(0,a.h)("slot",{name:"expanded-content"})),(0,o.i)(this.el,"badge")&&(0,a.h)("slot",{name:"badge"}))}get el(){return(0,a.g)(this)}static get watchers(){return{disabled:["watchDisabledHandler"]}}};s.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host{display:flex}a{text-decoration:none !important;color:var(--ic-architechtural-black) !important}button{border:none;background-color:transparent;outline:var(--ic-hc-focus-outline)}.card,.card.clickable{display:flex;flex-direction:column;border:var(--ic-border-default);border-radius:var(--ic-border-radius);box-sizing:border-box;padding:var(--ic-space-md);text-align:left;color:var(--ic-architechtural-black);transition:var(--ic-easing-transition-fast);position:relative;width:inherit;min-width:-moz-fit-content;min-width:fit-content;height:-moz-fit-content;height:fit-content;min-height:100%}.dark.card,.dark.card.clickable{border:var(--ic-border-width) solid var(--ic-architectural-700)}.card.clickable:hover{background-color:var(--ic-action-default-bg-hover);border:var(--ic-border-hover);cursor:pointer}.card.clickable:focus,.card.clickable.focussed{background-color:var(--ic-action-default-bg-hover);box-shadow:var(--ic-border-focus);outline:var(--ic-hc-focus-outline);border:var(--ic-border-pressed)}.card.clickable:active{background-color:var(--ic-action-default-bg-active);box-shadow:var(--ic-border-focus)}.card.disabled{border:var(--ic-border-disabled)}.card.fullwidth{width:100%}.card-header{display:flex;align-items:center}.icon{display:flex;align-items:center;padding-right:var(--ic-space-xs)}.card.disabled ::slotted(svg){fill:var(--ic-color-tertiary-text)}.card.clickable .card-title{color:var(--ic-hyperlink);text-decoration:underline;text-decoration-thickness:var(--ic-space-1px)}.card.clickable:hover .card-title,.card.clickable:focus .card-title,.card.clickable.focussed .card-title{display:inline-block;border-bottom:0.25rem solid !important;margin-bottom:-0.25rem !important;text-decoration:none}@supports (text-underline-offset: 25%){.card.clickable:hover .card-title,.card.clickable:focus .card-title,.card.clickable.focussed .card-title{text-decoration-line:underline;text-decoration-thickness:25%;text-underline-offset:25%;border-bottom:0 !important;margin-bottom:0 !important}}.card.clickable:active .card-title{text-decoration:none}.card.disabled .card-title{text-decoration:underline;text-decoration-thickness:var(--ic-space-1px);text-decoration-color:var(--ic-color-tertiary-text);color:var(--ic-color-tertiary-text)}.subheading{margin-top:var(--ic-space-xxs)}.adornment{margin-top:var(--ic-space-xxs)}.card-message{margin-top:var(--ic-space-md);align-items:left}.card.disabled .card-message,.card.disabled .subheading{color:var(--ic-color-tertiary-text)}.interaction-button{margin-left:auto}.image-top{margin-bottom:var(--ic-space-md);display:flex;justify-content:center}.image-mid{margin-top:var(--ic-space-md);display:flex;justify-content:center}.interaction-area{display:flex;flex-grow:1;gap:var(--ic-space-md);margin-top:var(--ic-space-md);align-items:flex-end}.interaction-controls{display:flex;align-items:center;flex-wrap:wrap;gap:var(--ic-space-sm)}.toggle-button{color:var(--ic-action-default);width:2.5rem;height:2.5rem;padding:var(--ic-space-xs);margin:var(--ic-space-1px) 0;min-width:0;cursor:pointer;transition:var(--ic-easing-transition-fast);border-radius:var(--ic-border-radius);display:inline-flex;flex-direction:row;justify-content:center;align-items:center;background:none;border:none;box-sizing:border-box;white-space:nowrap;vertical-align:middle}#ic-tooltip-expand-button{margin-left:auto;position:relative}.toggle-button:hover,.toggle-button:hover:focus{background-color:var(--ic-action-default-bg-hover);color:var(--ic-action-default-hover)}.toggle-button:focus{box-shadow:var(--ic-border-focus)}.toggle-button:active:not(:focus){background-color:var(--ic-action-default-bg-active);color:var(--ic-action-default-active)}.toggle-button svg{pointer-events:none;width:100% !important;height:100% !important;fill:currentcolor !important}.toggle-button-closed svg{transform:rotate(90deg)}.toggle-button-expanded svg{transform:rotate(-90deg)}.expanded-content{margin-top:var(--ic-space-md)}@media (forced-colors: active){.card ::slotted(svg){fill:currentcolor}.card.disabled ::slotted(svg){fill:GrayText !important}.card.disabled{border-color:GrayText !important}.card.disabled .card-message,.card.disabled .subheading,.card.disabled .card-title{color:GrayText}}'}}]);