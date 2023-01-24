"use strict";(self.webpackChunkic_design_system=self.webpackChunkic_design_system||[]).push([[2221],{2221:function(t,e,s){s.r(e),s.d(e,{ic_step:function(){return n}});var i=s(4942),a=s(5671),c=s(3144),p=s(6902),r=s(9894),n=function(){function t(e){(0,a.Z)(this,t),(0,p.r)(this,e),this.variant=void 0,this.stepTitle=void 0,this.stepSubtitle=void 0,this.stepStatus=void 0,this.stepType="active",this.current=!1,this.compactStepStyling=void 0,this.stepNum=void 0,this.lastStep=void 0,this.lastStepNum=void 0,this.nextStepTitle=void 0,this.progress=void 0}return(0,c.Z)(t,[{key:"stepTypeChangeHandler",value:function(){"compact"===this.variant&&"current"===this.stepType?this.current=!0:this.current=!1}},{key:"render",value:function(){var t,e,s,a,c,n,o,l="";"completed"===this.stepType?l=". Completed step":"disabled"===this.stepType?l=". Non-required step":"required"===this.stepStatus?l=". Required step":"optional"===this.stepStatus&&(l=". Optional step"),this.stepStatus&&(c=this.stepStatus[0].toUpperCase()+this.stepStatus.slice(1)),"disabled"===this.stepType||"disabled"===this.compactStepStyling?n="Not required":"completed"===this.compactStepStyling&&(n="Completed"),"completed"===this.stepType||"completed"===this.compactStepStyling?o=(0,p.h)("span",{class:"check-icon step-icon","aria-hidden":"true",innerHTML:r.C}):"disabled"!==this.stepType&&"disabled"!==this.compactStepStyling||(o=(0,p.h)("span",{class:"warning-icon step-icon","aria-hidden":"true",innerHTML:'<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M7.99935 4.32666L13.0193 13H2.97935L7.99935 4.32666ZM7.99935 1.66666L0.666016 14.3333H15.3327L7.99935 1.66666ZM8.66602 11H7.33268V12.3333H8.66602V11ZM8.66602 6.99999H7.33268V9.66666H8.66602V6.99999Z" fill="currentColor"/>\n</svg>'}));var h,d=(0,p.h)("div",{class:(t={},(0,i.Z)(t,"step",!0),(0,i.Z)(t,"current",this.current),(0,i.Z)(t,"compact-step-".concat(this.compactStepStyling),!!this.compactStepStyling),t)},(0,p.h)("ic-loading-indicator",{class:{"compact-step-progress-indicator":!0,"not-required":"disabled"===this.stepType||"disabled"===this.compactStepStyling},"aria-hidden":"true",size:"small","inner-label":this.stepNum,progress:this.progress}),(0,p.h)("div",{class:"step-title-area"},(0,p.h)("ic-typography",{variant:"h4",class:"step-title"},this.stepTitle),(0,p.h)("div",{class:"info-line"},(0,p.h)("ic-typography",{variant:"caption",class:"step-num"},"".concat(this.stepNum," of ").concat(this.lastStepNum),(0,p.h)("span",{class:"visually-hidden"}," steps")),(this.stepSubtitle||"completed"===this.stepType||"disabled"===this.stepType||"compact"===this.variant&&!!this.compactStepStyling&&"active"!==this.compactStepStyling||!!this.stepStatus)&&(0,p.h)("div",{class:"step-status"},o&&o,(this.stepSubtitle||n)&&(0,p.h)("ic-typography",{variant:"caption"},null!==this.stepSubtitle&&void 0!==this.stepSubtitle?this.stepSubtitle:"disabled"===this.stepType||"compact"===this.variant&&"disabled"===this.compactStepStyling||"completed"===this.stepType||"compact"===this.variant&&"completed"===this.compactStepStyling?n:this.stepStatus&&c))),this.lastStep?(0,p.h)("ic-typography",{variant:"subtitle-small",class:"next-step"},"Last step"):void 0!==this.nextStepTitle&&(0,p.h)("ic-typography",{variant:"subtitle-small",class:"next-step"},"Next",(0,p.h)("span",{class:"visually-hidden"}," step is"),":"," ",this.nextStepTitle)));h="completed"!==this.stepType?(0,p.h)("ic-typography",{variant:"subtitle-small"},(0,p.h)("span",{class:"step-icon-inner","aria-hidden":"true"},this.stepNum)):(0,p.h)("div",{class:"step-icon-inner","aria-hidden":"true"},(0,p.h)("span",{class:"check-icon",innerHTML:r.C}));var u="current"===this.stepType&&(0,p.h)("div",{class:"step-connect-inner"}),v=!this.lastStep&&(0,p.h)("div",{class:(e={},(0,i.Z)(e,"step-connect",!0),(0,i.Z)(e,"aligned-full-width",this.el.parentElement.classList.contains("default")&&!this.el.parentElement.classList.contains("aligned-left")),e)},u),m=(0,p.h)("div",{class:(s={},(0,i.Z)(s,"step",!0),(0,i.Z)(s,"".concat(this.stepType),!0),s)},(0,p.h)("div",{class:"step-top"},(0,p.h)("div",{class:"step-icon"},h),v),(this.stepTitle||this.stepSubtitle||this.stepStatus)&&(0,p.h)("div",{class:"step-title-area"},this.stepTitle&&(0,p.h)("ic-typography",{variant:"subtitle-large",class:"step-title"},this.stepTitle),this.stepTitle&&(this.stepSubtitle||this.stepStatus)&&(0,p.h)("ic-typography",{variant:"caption",class:"step-subtitle"},null!==this.stepSubtitle&&void 0!==this.stepSubtitle?this.stepSubtitle:c)));return(0,p.h)(p.H,{role:"listitem","aria-label":"Step ".concat(this.stepNum).concat(l),"aria-current":(this.current||"current"===this.stepType)&&"step",class:(a={},(0,i.Z)(a,"aligned-full-width",this.el.parentElement.classList.contains("default")&&!this.el.parentElement.classList.contains("aligned-left")),(0,i.Z)(a,"".concat(this.variant),!0),a)},"compact"===this.variant?d:m)}},{key:"el",get:function(){return(0,p.g)(this)}}],[{key:"watchers",get:function(){return{stepType:["stepTypeChangeHandler"]}}}]),t}();n.style=":host{display:flex;flex:auto}.step{display:flex;flex:1 1 0}.step-icon{display:flex;justify-content:center}.step-title,.step-subtitle,.step-status,.next-step{white-space:pre-line}.visually-hidden{position:absolute;left:-10000px;top:auto;width:1px;height:1px;overflow:hidden}:host(.compact){-moz-column-gap:var(--ic-space-sm);column-gap:var(--ic-space-sm);--compact-step-inner-color:var(--ic-theme-primary);--compact-step-circular-line-width:var(--ic-space-xxs)}:host(.compact) .step{-moz-column-gap:var(--ic-space-sm);column-gap:var(--ic-space-sm)}:host(.compact) .step:not(.current){display:none;opacity:0;visibility:hidden}.compact-step-progress-indicator{margin:var(--ic-space-xs) 0 0}:host(.compact) .step-title-area{display:flex;flex-direction:column;width:228px}.info-line{display:flex;-moz-column-gap:var(--ic-space-xs);column-gap:var(--ic-space-xs)}.step-status{display:flex;color:var(--ic-color-secondary-text);-moz-column-gap:var(--ic-space-xxxs);column-gap:var(--ic-space-xxxs)}.compact-step-completed .step-status{color:var(--ic-status-success)}.compact-step-disabled :is(.step-title,.step-status){color:var(--ic-color-tertiary-text)}.step-num{color:var(--ic-color-secondary-text);white-space:nowrap}:host(.compact) .step-icon{margin:var(--ic-space-xxxs)}:host(.compact) .step-icon svg{width:16px;height:16px}:host(.default) .step{flex-direction:column}:host(.default.last-step){flex-grow:initial}.step-top{display:flex;width:100%;align-items:center;align-self:flex-start;height:40px}:host(.default) .step-icon{border-radius:50%}.step-icon-inner{width:var(--ic-space-xl);height:var(--ic-space-xl);display:flex;justify-content:center;align-items:center;border-radius:50%}:host(.default) .current{color:var(--ic-theme-primary)}:host(.default) .step-title-area{margin:var(--ic-space-xs) 0;padding-right:var(--ic-space-xs);width:100%}:host(.default) .step-title,.step-subtitle{width:-moz-fit-content;width:fit-content}.step-subtitle{color:var(--ic-color-tertiary-text)}.current .step-subtitle{color:var(--ic-color-primary-text)}:host(.default) .completed{color:var(--ic-status-success)}.active .step-icon-inner{box-shadow:inset var(--ic-architectural-200) 0 0 0 2px}.current .step-icon-inner{background-color:var(--ic-theme-primary);color:white}.disabled{color:var(--ic-architectural-200)}.disabled .step-icon-inner{border:1px dashed var(--ic-architectural-200);width:calc(var(--ic-space-xl) - var(--ic-space-xxxs));height:calc(var(--ic-space-xl) - var(--ic-space-xxxs))}.disabled .step-title-area{color:var(--ic-color-tertiary-text)}.completed .step-icon-inner{background:var(--ic-status-success);box-shadow:inset var(--ic-status-success) 0 0 0 var(--ic-space-xxxs);border-radius:100%}:host(.default) .current .step-icon{border:var(--ic-space-xxxs) solid var(--ic-theme-primary);padding:var(--ic-space-xxxs);margin:0 calc(-1 * var(--ic-space-xxxs));}.step-connect{height:var(--ic-space-xxxs);background-color:var(--ic-architectural-200);margin:0 var(--ic-space-xs);border-radius:var(--ic-space-xxs);width:100%}.aligned-full-width.step-connect{min-width:100px;width:100%}.disabled .step-connect{height:0;background-color:rgb(0 0 0 / 0%);border-top:2px dashed var(--ic-architectural-200);border-radius:0}.completed .step-connect{background-color:var(--ic-status-success)}.step-connect-inner{width:70%;display:flex;flex:auto;height:var(--ic-space-xxxs);border-radius:var(--ic-space-xxs);background-color:var(--ic-theme-primary)}.step-icon-inner .check-icon{padding-top:var(--ic-space-xxs)}.step-icon-inner .check-icon svg{width:var(--ic-space-md);height:auto}.step-icon-inner .check-icon>svg>path{fill:var(--ic-color-white-text)}@media (forced-colors: active){.compact-step-disabled :is(.step-title,.step-status){color:GrayText}.step-connect:not(.disabled .step-connect){border:var(--ic-hc-border)}.active .step-icon-inner,.completed .step-icon-inner,.current .step-icon-inner{forced-color-adjust:none;box-shadow:inset canvastext 0 0 0 2px;background-color:transparent;color:canvastext}:host(.default) .current .step-icon{padding:0;border:none}.disabled,.disabled .step-title-area{color:GrayText}.step-connect-inner,.completed .step-connect{background-color:canvastext}.step-icon-inner .check-icon>svg>path{fill:canvastext}}"}}]);
//# sourceMappingURL=2221-fb4fabd713f0d81960c5.js.map