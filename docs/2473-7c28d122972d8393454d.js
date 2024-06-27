"use strict";(self.webpackChunkic_design_system=self.webpackChunkic_design_system||[]).push([[2473],{2473:function(t,e,s){s.r(e),s.d(e,{ic_stepper:function(){return l}});var i=s(2815),h=s(4056);s(4581);const l=class{constructor(t){(0,i.r)(this,t),this.resizeObserver=null,this.visuallyHidden="visually-hidden",this.getChildren=()=>{this.steps=Array.from(this.el.querySelectorAll("ic-step")),this.stepsWithStepTitles=Array.from(this.el.querySelectorAll("ic-step[step-title]"))},this.checkStepTitles=()=>{this.stepsWithStepTitles.length<this.steps.length&&this.variantOverride&&"compact"===this.variant&&(this.noOfResizes=this.noOfResizes+1,1===this.noOfResizes&&console.error("The prop 'step-title' (web components) / 'stepTitle' (react) is required for all steps of the Stepper component (compact variant)"))},this.setStepTypes=()=>{this.getChildren(),this.stepTypes=[];for(let t=0;t<this.steps.length;t++)this.stepTypes.push("active")},this.setStepperWidth=()=>{this.alignedFullWidth="default"===this.variant&&"full-width"===this.aligned;const t=this.steps[this.steps.length-1];t.style.maxWidth="none",this.alignedFullWidth&&(this.stepperWidth=this.el.offsetWidth,t.style.maxWidth=(0,h.F)(this.stepperWidth/this.steps.length+"px"),this.lastStepWidth=t.offsetWidth)},this.initialiseStepStates=()=>{this.steps.forEach(((t,e)=>{t.variant=this.variant,t.stepNum=e+1,t.lastStep=e===this.steps.length-1,t.lastStepNum=this.steps.length,"current"!==t.stepType?(t.current=!1,this.stepTypes[e]=t.stepType):t.current=!0;const s=t.shadowRoot&&t.shadowRoot.querySelector(".step > .step-title-area");if(0==this.stepsWithStepTitles.length&&this.variantOverride&&("compact"===this.variant&&(this.autoSetStepTitles=!0,this.autoSetStepTitles&&(t.stepTitle="Step "+t.stepNum,s&&s.querySelector(".step-title").setAttribute("aria-hidden","true"))),"default"===this.variant&&(this.autoSetStepTitles=!1,this.autoSetStepTitles||(t.stepTitle=void 0,s&&s.querySelector(".step-title").removeAttribute("aria-hidden")))),"compact"===this.variant&&(!0===t.current||"current"===t.stepType?(t.classList.remove("hide"),t.classList.add("show")):t.classList.contains("show")&&(t.classList.remove("show"),t.classList.add("hide")),t.lastStep?t.lastStep&&"completed"!==this.stepTypes[e]?t.progress=95:t.progress=100:(t.nextStepTitle=this.steps[e+1].stepTitle,t.progress=t.stepNum/this.steps.length*100),this.hideStepInfo&&null!==s&&s.classList.remove(this.visuallyHidden),t.compactStepStyling=this.stepTypes[e]),"default"===this.variant){if(t.lastStep?t.lastStep&&(t.classList.add("last-step"),this.alignedFullWidth?t.style.maxWidth=`${this.lastStepWidth}px`:t.style.maxWidth=this.connectorWidth>100?(0,h.F)(`${this.connectorWidth+48}px`):(0,h.F)("148px")):this.alignedFullWidth&&(t.style.width=(0,h.F)((this.stepperWidth-this.lastStepWidth)/(this.steps.length-1)+"px"),t.style.minWidth=(0,h.F)("148px")),"left"===this.aligned){t.style.width=this.connectorWidth>100?(0,h.F)(`${this.connectorWidth+48}px`):(0,h.F)("148px");const e=t.shadowRoot.querySelector(".step > .step-top > .step-connect");e&&(e.style.width=this.connectorWidth>100?(0,h.F)(`${this.connectorWidth}px`):(0,h.F)("100px"))}this.hideStepInfo&&null!==s&&s.classList.add(this.visuallyHidden)}}))},this.setHideStepInfo=()=>{this.steps.forEach((t=>{var e,s;const i=t.shadowRoot.querySelector(".step > .step-title-area");null!==i&&(this.hideStepInfo?null===(e=i.classList)||void 0===e||e.add(this.visuallyHidden):null===(s=i.classList)||void 0===s||s.remove(this.visuallyHidden))}))},this.overrideVariant=()=>{if(this.variantOverride){let t=148*this.steps.length;"left"===this.aligned&&this.connectorWidth>100&&(t=(this.connectorWidth+48)*this.steps.length),this.el.clientWidth<t?this.variant="compact":this.variant="default"}},this.resizeObserverCallback=()=>{this.getChildren(),this.checkStepTitles(),this.overrideVariant(),this.setStepperWidth(),this.initialiseStepStates()},this.runResizeObserver=()=>{this.resizeObserver=new ResizeObserver((()=>{this.resizeObserverCallback()})),this.resizeObserver.observe(this.el)},this.alignedFullWidth=!0,this.autoSetStepTitles=!0,this.lastStepWidth=0,this.noOfResizes=0,this.stepperWidth=document.querySelector("ic-stepper").getBoundingClientRect().width,this.stepTypes=[],this.variantOverride="compact"!==this.variant,this.aligned="full-width",this.appearance="default",this.connectorWidth=100,this.hideStepInfo=!1,this.variant="default"}handlePropChange(){this.setHideStepInfo(),this.getChildren()}disconnectedCallback(){null!==this.resizeObserver&&this.resizeObserver.disconnect()}componentWillLoad(){this.setStepTypes(),"compact"===this.variant&&(this.variantOverride=!1)}componentWillRender(){this.initialiseStepStates()}componentDidLoad(){(0,h.f)(this.runResizeObserver)}render(){return(0,i.h)(i.H,{class:{[`${this.variant}`]:!0,"aligned-left":"default"===this.variant&&"left"===this.aligned}},(0,i.h)("ul",{class:"step-item-list"},(0,i.h)("slot",null)))}get el(){return(0,i.g)(this)}static get watchers(){return{hideStepInfo:["handlePropChange"],variant:["handlePropChange"]}}};l.style=":host{display:flex;width:100%}.step-item-list{display:flex;margin:0;padding:0}:host(.default:not(.aligned-left)) .step-item-list{flex:auto}:host(.compact) ul ::slotted(ic-step){display:none}:host(.compact) ul ::slotted(ic-step.show){display:flex}:host(.compact) ul ::slotted(ic-step.hide){display:none;opacity:0;visibility:hidden}"}}]);