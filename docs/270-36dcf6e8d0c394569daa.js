"use strict";(self.webpackChunkic_design_system=self.webpackChunkic_design_system||[]).push([[270],{270:function(e,s,r){r.r(s),r.d(s,{ic_breadcrumb_group:function(){return l}});var t=r(2686),a=r(9801);r(9455);const l=class{constructor(e){(0,t.r)(this,e),this.ADD_CLASS_DELAY=50,this.setBackBreadcrumb=()=>{this.backBreadcrumbOnly&&this.setBackBreadcrumbAttr()},this.setBackBreadcrumbAttr=()=>{const e=this.getLastParentBreadcrumb();e&&(e.classList.add("show"),e.setAttribute("show-back-icon","true"))},this.getLastParentBreadcrumb=()=>{const e=Array.from(this.el.querySelectorAll("ic-breadcrumb"));return 1===e.length?null:(this.breadcrumbs=e.filter((e=>!e.getAttribute("current"))),this.breadcrumb=this.breadcrumbs[this.breadcrumbs.length-1],this.breadcrumb)},this.setDefaultBreadcrumbs=()=>{Array.from(this.el.querySelectorAll("ic-breadcrumb")).forEach((e=>{e.setAttribute("show-back-icon","false")}))},this.setCollapsed=()=>{if(this.collapsed){const e=Array.from(this.el.querySelectorAll("ic-breadcrumb"));this.collapsedBreadcrumbs=e.splice(1,e.length-2).filter((e=>!e.classList.contains("collapsed-breadcrumb-wrapper"))),this.collapsedBreadcrumbs.forEach((e=>e.classList.add("hide")));const s=e[0];s&&s.insertAdjacentElement("afterend",this.collapsedBreadcrumbWrapper)}},this.renderCollapsedBreadcrumb=()=>{this.collapsedBreadcrumbWrapper=document.createElement("ic-breadcrumb"),this.collapsedBreadcrumbWrapper.classList.add("collapsed-breadcrumb-wrapper");const e=document.createElement("button"),s=document.createElement("span");s.id="collapsed-button-label",s.innerText="Collapsed breadcrumbs",s.className="hide",e.setAttribute("aria-labelledby","collapsed-button-label");const r=document.createElement("span");return r.id="collapsed-button-described",r.innerText="Select to view collapsed breadcrumbs",r.className="hide",e.setAttribute("aria-describedby","collapsed-button-described"),e.id="collapsed-ellipsis",e.innerText="...",e.classList.add("collapsed-breadcrumb"),e.addEventListener("click",(()=>{this.handleHiddenCollapsedBreadcrumbs(this.collapsedBreadcrumbWrapper)})),this.collapsedBreadcrumbWrapper.append(r),this.collapsedBreadcrumbWrapper.append(s),this.collapsedBreadcrumbWrapper.append(e),this.collapsedBreadcrumbWrapper},this.handleHiddenCollapsedBreadcrumbs=e=>{e.remove(),this.collapsedBreadcrumbs.forEach((e=>{e.classList.add("visuallyhidden"),e.classList.remove("hide"),setTimeout((()=>{e.classList.add("fade")}),this.ADD_CLASS_DELAY),this.removeVisuallyHiddenClass(e)})),this.expandedBreadcrumbs=!0},this.removeVisuallyHiddenClass=e=>{e.addEventListener("transitionend",(s=>{"opacity"===s.propertyName&&e.classList.remove("visuallyhidden")}))},this.setLastParentCollapsedBackBreadcrumb=()=>{const e=this.getLastParentBreadcrumb();this.setBackBreadcrumbAttr(),e.classList.remove("hide")},this.revertLastParentCollapsedBreadcrumb=()=>{this.getLastParentBreadcrumb().setAttribute("show-back-icon","false")},this.resizeObserver=null,this.resizeObserverCallback=e=>{e!==this.deviceSize&&(this.deviceSize=e,this.deviceSize<=a.D.S?(this.el.setAttribute("back-breadcrumb-only","true"),this.collapsed?this.setLastParentCollapsedBackBreadcrumb():this.setBackBreadcrumb()):(this.el.setAttribute("back-breadcrumb-only","false"),this.collapsed&&this.breadcrumbs&&this.breadcrumbs.length>2?(this.revertLastParentCollapsedBreadcrumb(),this.expandedBreadcrumbs?this.setDefaultBreadcrumbs():this.setCollapsed()):this.setDefaultBreadcrumbs()))},this.runResizeObserver=()=>{this.resizeObserver=new ResizeObserver((()=>{const e=(0,a.g)();this.resizeObserverCallback(e)})),this.resizeObserver.observe(this.el)},this.backBreadcrumbOnly=!1,this.collapsed=!1,this.deviceSize=a.D.XL,this.expandedBreadcrumbs=!1}componentWillLoad(){const e=Array.from(this.el.querySelectorAll("ic-breadcrumb"));this.backBreadcrumbOnly?this.setBackBreadcrumb():(0,a.c)(this.runResizeObserver),this.collapsed&&(this.collapsedBreadcrumbWrapper=this.renderCollapsedBreadcrumb(),e.length>2&&((0,a.g)()===a.D.S?this.setLastParentCollapsedBackBreadcrumb():this.setCollapsed()))}render(){return(0,t.h)(t.H,{class:{back:this.backBreadcrumbOnly,collapsed:this.collapsed}},(0,t.h)("nav",{"aria-label":"breadcrumbs"},(0,t.h)("ol",null,(0,t.h)("slot",null))))}get el(){return(0,t.g)(this)}};l.style=":host{display:block}:host ol{display:flex;list-style-type:none;align-items:center;flex-wrap:wrap;padding:0;margin:0}:host(.back) ol ::slotted(ic-breadcrumb){display:none}:host(.back) ol ::slotted(ic-breadcrumb.show){display:flex}:host(.collapsed) ol ::slotted(ic-breadcrumb.hide){display:none;opacity:0;visibility:hidden}:host(.collapsed) ol ::slotted(ic-breadcrumb.visuallyhidden){display:block;opacity:0;transition:all var(--ic-easing-transition-slow)}:host(.collapsed) ol ::slotted(ic-breadcrumb.fade){opacity:1}"}}]);
//# sourceMappingURL=270-36dcf6e8d0c394569daa.js.map