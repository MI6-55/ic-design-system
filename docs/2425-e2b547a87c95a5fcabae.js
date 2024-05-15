"use strict";(self.webpackChunkic_design_system=self.webpackChunkic_design_system||[]).push([[2425],{2425:function(a,s,t){t.r(s),t.d(s,{ic_badge:function(){return c}});var e=t(9917),i=t(2094);t(6040);const c=class{constructor(a){(0,e.r)(this,a),this.ariaLabel=null,this.setBadgeColour=()=>{const a=(0,i.c)(this.customColor);if(a){this.customColorRGBA=a;const{r:s,g:t,b:e,a:i}=a;this.el.style.backgroundColor=`rgba(${s}, ${t}, ${e}, ${i})`}},this.getBadgeRGB=()=>{switch(this.variant){case"custom":return this.customColorRGBA;case"error":case"success":case"warning":case"info":return(0,i.r)((0,i.g)(`--ic-status-${this.variant}`));case"neutral":case"light":return(0,i.h)((0,i.g)("--ic-architectural-"+("neutral"===this.variant?500:40)))}},this.getBadgeForeground=()=>{const{r:a,g:s,b:t}=this.getBadgeRGB();this.foregroundColour=(0,i.b)((299*a+587*s+114*t)/1e3)},this.getTextLabel=()=>this.maxNumber&&Number(this.textLabel)>this.maxNumber?`${this.maxNumber}+`:this.textLabel,this.setAccessibleLabel=()=>{const a=this.el.parentElement,s=this.isAccessibleLabelDefined()?this.accessibleLabel:this.textLabel||"with badge being displayed";if(a){const{tagName:t}=a;if("IC-CARD"!==t&&("IC-TAB"!==t||"IC-TAB"===t&&this.parentAriaLabel)){const t=this.parentAriaLabel?`${this.parentAriaLabel} ,`:"";a.ariaLabel=this.visible?`${t} ${s}`:void 0}else this.ariaLabel=`, ${s}`}},this.isAccessibleLabelDefined=()=>(0,i.d)(this.accessibleLabel)&&null!==this.accessibleLabel,this.accessibleLabel=void 0,this.customColor=null,this.maxNumber=void 0,this.position="far",this.size="default",this.textLabel=void 0,this.type="text",this.variant="neutral",this.visible=!0}accessibleLabelHandler(){this.setAccessibleLabel()}customColorHandler(){"custom"===this.variant&&this.setBadgeColour()}variantHandler(){this.getBadgeForeground()}visibleHandler(){this.setAccessibleLabel()}componentWillLoad(){var a;"custom"===this.variant&&this.setBadgeColour(),this.getBadgeForeground();const s=null===(a=this.el.parentElement)||void 0===a?void 0:a.ariaLabel;s&&(this.parentAriaLabel=s),this.setAccessibleLabel()}componentDidLoad(){"text"===this.type&&(0,i.a)([{prop:this.textLabel,propName:"text-label"}],"Badge")}async showBadge(){this.visible=!0}async hideBadge(){this.visible=!1}render(){const{ariaLabel:a,el:s,foregroundColour:t,getTextLabel:i,position:c,size:r,textLabel:o,type:l,variant:h,visible:n}=this;return(0,e.h)(e.H,{class:{[`${c}`]:!0,[`${r}`]:!0,[`${h}`]:!0,[`${l}`]:!0,[`foreground-${t}`]:null!==t,[""+(n?"show":"hide")]:!0},id:s.id||null,"aria-label":a,role:"status"},"icon"===l&&(0,e.h)("slot",{name:"badge-icon"}),"text"===l&&o&&(0,e.h)("ic-typography",{variant:"small"===r?"badge-small":"badge"},i()))}static get delegatesFocus(){return!0}get el(){return(0,e.g)(this)}static get watchers(){return{accessibleLabel:["accessibleLabelHandler"],customColor:["customColorHandler"],variant:["variantHandler"],visible:["visibleHandler"]}}};c.style="@media (prefers-reduced-motion: no-preference){:host(.show){animation:expand var(--ic-transition-duration-slow)}:host(.hide){animation:shrink var(--ic-transition-duration-slow)}}:host{display:flex;height:var(--ic-space-md);min-width:var(--ic-space-md);width:-moz-fit-content;width:fit-content;border-radius:calc(2 * var(--ic-space-xxl));position:absolute}:host(.neutral){background-color:var(--ic-architectural-500)}:host(.light){background-color:var(--ic-architectural-40)}:host(.info){background-color:var(--ic-status-info)}:host(.warning){background-color:var(--ic-status-warning-mid)}:host(.error){background-color:var(--ic-status-error)}:host(.success){background-color:var(--ic-status-success)}:host(.small){height:var(--ic-space-sm);min-width:var(--ic-space-sm)}:host(.large){height:calc(var(--ic-space-md) + var(--ic-space-xxs));min-width:calc(var(--ic-space-md) + var(--ic-space-xxs))}:host(.dot.default){height:var(--ic-space-xs);width:var(--ic-space-xs);min-width:var(--ic-space-xs)}:host(.dot.small){height:calc(var(--ic-space-xxs) + var(--ic-space-xxxs));width:calc(var(--ic-space-xxs) + var(--ic-space-xxxs));min-width:calc(var(--ic-space-xxs) + var(--ic-space-xxxs))}:host(.dot.large){height:var(--ic-space-sm);width:var(--ic-space-sm);min-width:var(--ic-space-sm)}:host(.foreground-dark) ::slotted(*){fill:var(--ic-color-primary-text)}:host(.foreground-light) ::slotted(*){fill:white}:host(.foreground-dark) ic-typography{color:var(--ic-color-primary-text)}:host(.foreground-light) ic-typography{color:white}:host(.text) ic-typography{align-self:center;padding:0 calc((var(--ic-space-xs) + var(--ic-space-1px)) / 2)\n    var(--ic-space-1px)}:host(.text.small) ic-typography{padding:0 0.2132rem}:host(.text.large) ic-typography{padding:0 calc((var(--ic-space-sm) + var(--ic-space-1px)) / 2)\n    var(--ic-space-1px)}:host(.icon) ::slotted(svg){width:var(--ic-space-sm);height:var(--ic-space-sm);padding:var(--ic-space-xxxs)}:host(.icon.small) ::slotted(svg){width:var(--ic-space-xs);height:var(--ic-space-xs)}:host(.icon.large) ::slotted(svg){width:calc(var(--ic-space-sm) + var(--ic-space-xxxs));height:calc(var(--ic-space-sm) + var(--ic-space-xxxs));padding:calc(var(--ic-space-xxxs) + var(--ic-space-1px))}:host(.far){top:calc(-1 * var(--ic-space-xs));right:calc(-1 * var(--ic-space-xs))}:host(.far.small),:host(.dot.far.large){top:calc(-1 * var(--ic-space-xxs));right:calc(-1 * var(--ic-space-xxs))}:host(.dot.far),:host(.dot.far.small){top:calc(-1 * var(--ic-space-xxxs));right:calc(-1 * var(--ic-space-xxxs))}:host(.near){top:calc(-1 * calc(var(--ic-space-xxs) + var(--ic-space-1px)));right:calc(-1 * calc(var(--ic-space-xxs) + var(--ic-space-1px)))}:host(.dot.near){top:calc(-1 * var(--ic-space-1px));right:calc(-1 * var(--ic-space-1px))}:host(.inline){position:static}:host(.hide){visibility:hidden !important;transition:visibility var(--ic-transition-duration-slow)}@keyframes expand{from{opacity:0;transform:scale(0)}to{opacity:1;transform:scale(1)}}@keyframes shrink{from{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(0)}}"}}]);