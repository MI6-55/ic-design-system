"use strict";(self.webpackChunkic_design_system=self.webpackChunkic_design_system||[]).push([[1882],{1882:function(e,i,t){t.r(i),t.d(i,{ic_switch:function(){return o}});var c=t(7848),s=t(3407);t(3077);let a=0;const o=class{constructor(e){(0,c.r)(this,e),this.icBlur=(0,c.c)(this,"icBlur",7),this.icChange=(0,c.c)(this,"icChange",7),this.icFocus=(0,c.c)(this,"icFocus",7),this.inputId="ic-switch-input-"+a++,this.handleChange=()=>{this.checkedState=!this.checkedState,this.icChange.emit({checked:this.checkedState,value:this.value})},this.onFocus=()=>{this.icFocus.emit()},this.onBlur=()=>{this.icBlur.emit()},this.handleFormReset=()=>{this.checkedState=this.initiallyChecked},this.checkedState=!1,this.initiallyChecked=this.checked,this.checked=!1,this.disabled=!1,this.helperText="",this.hideLabel=!1,this.label=void 0,this.name=this.inputId,this.showState=!1,this.size="default",this.small=!1,this.value="on"}checkedChangeHandler(){this.checkedState=this.checked}disconnectedCallback(){(0,s.m)(this.el,this.handleFormReset)}componentWillLoad(){this.checkedState=this.checked,(0,s.l)(this.el,this.handleFormReset),(0,s.j)(this.disabled,this.el)}componentDidLoad(){(0,s.a)([{prop:this.label,propName:"label"}],"Switch")}async setFocus(){this.el.shadowRoot.querySelector("input")&&this.el.shadowRoot.querySelector("input").focus()}render(){const{label:e,checkedState:i,small:t,size:a,disabled:o,name:r,showState:l,value:n,hideLabel:h,helperText:d,inputId:b}=this;(0,s.n)(!0,this.el,r,i?n:"",o);const u=(0,s.q)(b,""!==d,!1);return(0,c.h)(c.H,null,(0,c.h)("label",{class:{"ic-switch-container":!0,"ic-switch-disabled":o,"ic-switch-small":t||"small"===a},htmlFor:b},!h&&(0,c.h)("ic-input-label",{for:b,label:e,helperText:d,readonly:!0,disabled:o,class:{"ic-switch-label":!0,"ic-switch-label-small":t||"small"===a}}),!h&&(0,c.h)("span",{class:"ic-switch-line-break"}),(0,c.h)("input",{checked:i,disabled:o,"aria-label":e,"aria-checked":i?"true":"false","aria-describedby":u,role:"switch",class:"ic-switch-input",type:"checkbox",name:"toggle",id:b,onFocus:this.onFocus,onBlur:this.onBlur,onChange:this.handleChange}),(0,c.h)("span",{class:"ic-switch-toggle"},(0,c.h)("svg",{class:"ic-switch-icon","aria-hidden":"true",focusable:"false",viewBox:"0 0 10 10",xmlns:"http://www.w3.org/2000/svg"},(0,c.h)("line",{class:"ic-switch-icon-line",x1:"9",y1:t||"small"===a?"2":"1",x2:"9",y2:t||"small"===a?"8":"9"})),(0,c.h)("svg",{class:"ic-switch-icon","aria-hidden":"true",focusable:"false",viewBox:"0 0 10 10",xmlns:"http://www.w3.org/2000/svg"},(0,c.h)("circle",{class:"ic-switch-icon-circle",fill:"none",cx:"5",cy:"5",r:t||"small"===a?"3.335":"4.445"}))),(0,c.h)("slot",{name:"right-adornment"}),l&&(0,c.h)("ic-typography",{"aria-hidden":"true",variant:"label",class:"ic-switch-checked-status"},i?"On":"Off")))}static get delegatesFocus(){return!0}get el(){return(0,c.g)(this)}static get watchers(){return{checked:["checkedChangeHandler"]}}};o.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host{display:inline-block}input{overflow:hidden;-webkit-appearance:none;-moz-appearance:none;appearance:none}.ic-switch-container{display:flex;flex-wrap:wrap;align-items:center;gap:var(--ic-space-xxs);cursor:pointer}.ic-switch-label{margin-left:var(--ic-space-xxs);margin-bottom:var(--ic-space-sm)}.ic-switch-label-small{margin-bottom:0.625rem}.ic-switch-toggle{display:flex;align-items:center;justify-content:space-around;width:4rem;height:var(--ic-space-xl);position:relative;border-radius:100vw;background-color:var(--ic-architectural-200);border:var(--ic-space-1px) solid var(--ic-architectural-700);box-sizing:border-box;transition:var(--ic-transition-duration-fast)}.ic-switch-line-break{flex:1 0 100%}.ic-switch-checked-status{padding-left:var(--ic-space-xxs)}.ic-switch-toggle::before{content:"";width:1.333rem;height:1.333rem;border-radius:50%;position:absolute;z-index:2;top:50%;left:0.333rem;transform:translate(0, -50%);background-color:var(--ic-architectural-700);transition:var(--ic-transition-duration-slow)}.ic-switch-icon{display:inline-block;vertical-align:middle;width:0.625rem;height:0.625rem}.ic-switch-icon-circle,.ic-switch-icon-line{stroke-width:1}.ic-switch-icon-circle{stroke:var(--ic-architectural-700)}.ic-switch-icon-line{stroke:var(--ic-architectural-white)}@media (prefers-reduced-motion: reduce){.ic-switch-toggle::before{transition-duration:0ms}}.ic-switch-input:checked+.ic-switch-toggle{background-color:var(--ic-action-default);border:none}.ic-switch-input:checked+.ic-switch-toggle::before{transform:translate(var(--ic-space-xl), -50%);background-color:var(--ic-architectural-white)}.ic-switch-input:not([disabled])+.ic-switch-toggle:hover::before{box-shadow:0 0 0 0.75rem var(--ic-action-dark-bg-hover)}.ic-switch-input:not([disabled])+.ic-switch-toggle:active::before{box-shadow:0 0 0 0.75rem var(--ic-action-dark-bg-active)}.ic-switch-input:not([disabled]):checked+.ic-switch-toggle:hover::before{box-shadow:0 0 0 0.75rem var(--ic-action-default-bg-hover)}.ic-switch-input:not([disabled]):checked+.ic-switch-toggle:active::before{box-shadow:0 0 0 0.75rem var(--ic-action-default-bg-active)}.ic-switch-input:focus:not([disabled])+.ic-switch-toggle,.ic-switch-input:focus-visible:not([disabled])+.ic-switch-toggle{box-shadow:0 0 0 var(--ic-space-1px) var(--ic-architectural-white),\n    0 0 0 0.188rem var(--ic-action-default),\n    0 0 0 0.5rem var(--ic-action-default-active-alpha)}.ic-switch-disabled{cursor:default}.ic-switch-disabled .ic-switch-icon-circle{stroke:var(--ic-architectural-300)}.ic-switch-disabled .ic-switch-icon-line{stroke:var(--ic-action-default-bg-active)}.ic-switch-input:disabled+.ic-switch-toggle{background-color:var(--ic-architectural-80);border:var(--ic-border-disabled)}.ic-switch-input:disabled~.ic-switch-checked-status{color:var(--ic-architectural-300)}.ic-switch-input:disabled+.ic-switch-toggle::before{background-color:var(--ic-architectural-300)}.ic-switch-input:disabled:checked+.ic-switch-toggle{background-color:var(--ic-status-info-light);border:var(--ic-space-1px) dashed #98c9f5}.ic-switch-input:disabled:checked+.ic-switch-toggle::before{background-color:var(--ic-architectural-white)}.ic-switch-small{gap:var(--ic-space-xxxs)}.ic-switch-small .ic-switch-checked-status{padding-left:0.375rem}.ic-switch-small .ic-switch-toggle{width:var(--ic-space-xxl);height:var(--ic-space-lg)}.ic-switch-small .ic-switch-toggle::before{width:var(--ic-space-md);height:var(--ic-space-md);left:var(--ic-space-xxs)}.ic-switch-small .ic-switch-input:checked+.ic-switch-toggle::before{transform:translate(var(--ic-space-lg), -50%)}::slotted(*){margin-left:var(--ic-space-sm)}::slotted(svg){fill:currentcolor}@media (forced-colors: active){.ic-switch-toggle::before,.ic-switch-input:checked+.ic-switch-toggle{border:var(--ic-hc-border)}.ic-switch-input:checked+.ic-switch-toggle::before{transform:translate(calc(var(--ic-space-xl) - 0.125rem), -50%)}.ic-switch-input:disabled+.ic-switch-toggle,.ic-switch-input:disabled:checked+.ic-switch-toggle,.ic-switch-input:disabled+.ic-switch-toggle::before{border-color:GrayText}.ic-switch-input:disabled~.ic-switch-checked-status{color:GrayText}.ic-switch-disabled .ic-switch-icon-circle,.ic-switch-disabled .ic-switch-icon-line{stroke:GrayText}}'}}]);