"use strict";(self.webpackChunkic_design_system=self.webpackChunkic_design_system||[]).push([[1990],{1990:function(e,r,t){t.r(r),t.d(r,{ic_breadcrumb:function(){return i}});var c=t(2686),s=t(3328),a=t(9801);t(9455);const i=class{constructor(e){(0,c.r)(this,e),this.renderDefaultBreadcrumb=(e,r,t,s)=>e&&(null!=r&&""!==r)?(0,c.h)("span",{class:{"current-page-container":e}},(0,a.i)(this.el,"icon")&&(0,c.h)("slot",{name:"icon"}),r):(0,c.h)("ic-link",{href:s,class:"breadcrumb-link","aria-describedby":this.showBackIcon&&t&&t},this.showBackIcon&&(0,c.h)("div",{class:"back-icon",innerHTML:'<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z" fill="currentColor"/>\n</svg>\n'}),(0,a.i)(this.el,"icon")&&(0,c.h)("slot",{name:"icon"}),r),this.setSlottedCurrentPageClass=()=>{const e=this.el.querySelector("ic-link");if(e&&(e.classList.remove("current-page"),this.current)){e.classList.contains("current-page")||e.classList.add("breadcrumb-link","current-page")}},this.pageTitle=void 0,this.href=void 0,this.current=!1,this.showBackIcon=!1}async setFocus(){this.el.shadowRoot.querySelector("ic-link")&&this.el.shadowRoot.querySelector("ic-link").focus()}componentWillRender(){this.setSlottedCurrentPageClass()}render(){const{current:e,href:r,pageTitle:t}=this,a="".concat(t&&t.toLowerCase().replace(" ","-"),"-describedby"),i=null!=t&&""!==t,o=null!=r&&""!==r;return(0,c.h)(c.H,{class:{back:this.showBackIcon},"aria-current":e&&"page",role:"listitem"},(0,c.h)("div",{class:"breadcrumb"},(0,c.h)("span",{innerHTML:s.C,class:"chevron","aria-hidden":"true"}),this.showBackIcon&&a&&(0,c.h)("span",{id:a,class:"hide"},"Back to ".concat(t)),i&&o?this.renderDefaultBreadcrumb(e,t,a,r):(0,c.h)("slot",null)))}static get delegatesFocus(){return!0}get el(){return(0,c.g)(this)}};i.style=':host{display:block;margin:var(--ic-space-xs) var(--ic-space-xs) var(--ic-space-xs) 0}:host .breadcrumb{display:flex;align-items:center;white-space:nowrap;gap:var(--ic-space-xs);min-height:var(--ic-space-lg)}:host .chevron{width:var(--ic-space-lg);height:var(--ic-space-lg)}:host .chevron svg{color:var(--ic-architectural-400)}:host(:first-child) .chevron{display:none}.back-icon svg{color:var(--ic-hyperlink)}:host(.back){display:flex;align-items:center}:host(.back) .chevron{display:none}ic-link{--breadcrumb-link-display:inline-flex;--breadcrumb-link-align-items:center;--breadcrumb-link-gap:var(--ic-space-xs)}:host([aria-current="page"]) .current-page-container{display:flex;align-items:center;gap:var(--ic-space-xs)}:host(.collapsed-breadcrumb-wrapper){margin-right:var(--ic-space-xs) !important;display:flex;align-items:center;gap:var(--ic-space-xs)}:host(.collapsed-breadcrumb-wrapper) ::slotted(.collapsed-breadcrumb){border:none;background-color:transparent;color:var(--ic-hyperlink);text-decoration:underline;font-weight:var(--ic-font-weight-bold);cursor:pointer}:host(.collapsed-breadcrumb-wrapper) ::slotted(.collapsed-breadcrumb:hover),:host(.collapsed-breadcrumb-wrapper) ::slotted(.collapsed-breadcrumb:focus){outline:var(--ic-hc-focus-outline);border-bottom:0.25rem solid !important;margin-bottom:-0.25rem !important;text-decoration:none}.hide,:host(.collapsed-breadcrumb-wrapper) ::slotted(.hide){display:none}@media (forced-colors: active){.back-icon svg{color:currentcolor}}@supports (text-decoration-thickness: 25%){ic-link{--breadcrumb-link-display:flex}:host(.collapsed-breadcrumb-wrapper) ::slotted(.collapsed-breadcrumb:hover),:host(.collapsed-breadcrumb-wrapper) ::slotted(.collapsed-breadcrumb:focus){text-decoration-line:underline;text-decoration-thickness:25%;text-underline-offset:25%;border-bottom:0 !important;margin-bottom:0 !important}}'}}]);
//# sourceMappingURL=1990-d2db9b09ea88074c350c.js.map