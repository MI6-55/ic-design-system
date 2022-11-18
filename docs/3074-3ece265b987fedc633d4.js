"use strict";(self.webpackChunkic_design_system=self.webpackChunkic_design_system||[]).push([[3074],{3074:function(e,i,t){t.r(i),t.d(i,{ic_navigation_group:function(){return c}});var n=t(5861),o=t(4942),a=t(5671),r=t(3144),s=t(4687),d=t.n(s),p=t(6902),u=t(7331),l=t(3914),c=function(){function e(i){var t=this;(0,a.Z)(this,e),(0,p.r)(this,i),this.DYNAMIC_GROUPED_LINKS_HEIGHT_MS=50,this.sideNavExpandHandler=function(){setTimeout((function(){return t.setInitialGroupedLinksWrapperHeight()}),t.DYNAMIC_GROUPED_LINKS_HEIGHT_MS)},this.topNavResizedHandler=function(e){var i=e.detail.size;i!==t.deviceSize&&(t.deviceSize=i,t.inTopNavSideMenu=i<=u.D.L)},this.setGroupedNavItemTabIndex=function(e){t.el.querySelectorAll("ic-navigation-item").forEach((function(i){var t=i.shadowRoot.querySelector("a")||i.querySelector("a");t&&t.setAttribute("tabindex",e)}))},this.toggleGroupedLinkWrapperHeight=function(e,i){e&&(i?(e.setAttribute("style","--navigation-child-items-height: ".concat(t.getNavigationChildItemsHeight())),t.setGroupedNavItemTabIndex("0")):(e.setAttribute("style","--navigation-child-items-height: 0"),t.setGroupedNavItemTabIndex("-1")))},this.toggleExpanded=function(){t.expanded=!t.expanded;var e=t.el.shadowRoot.querySelector(".grouped-links-wrapper");t.toggleGroupedLinkWrapperHeight(e,t.expanded)},this.handleClick=function(e){"top"===t.navigationType&&e.detail?t.toggleDropdown():t.toggleExpanded()},this.handleBlur=function(e){var i=e.relatedTarget;t.el.contains(i)||t.hideDropdown()},this.handleTopNavKeydown=function(e){t.inTopNavSideMenu||"Escape"!==e.key?" "!==e.key&&"Enter"!==e.key||t.toggleDropdown():(t.hideDropdown(),t.el.blur())},this.handleKeydown=function(e){if("Enter"===e.key||"Space"===e.key)switch(t.navigationType){case"top":t.handleTopNavKeydown(e);break;case"side":t.toggleExpanded(),e.preventDefault();break;default:t.toggleExpanded()}},this.handleMouseLeave=function(e){var i=e.relatedTarget;t.el.contains(i)||i===t.dropdown||document.activeElement===t.el||t.el.contains(document.activeElement)||t.hideDropdown()},this.triggerShowDropdown=function(){t.showDropdown()},this.renderDropdownGroupedLinks=function(){var e;return(0,p.h)("div",{class:(e={},(0,o.Z)(e,"navigation-group-dropdown",!t.inTopNavSideMenu),(0,o.Z)(e,"navigation-group-dropdown-side-menu",t.inTopNavSideMenu),(0,o.Z)(e,"selected",t.dropdownOpen&&!t.inTopNavSideMenu),e),onMouseLeave:t.inTopNavSideMenu?null:t.handleMouseLeave,ref:function(e){return t.dropdown=e}},(0,p.h)("nav",{class:(0,o.Z)({},"navigation-group-dropdown-items",!t.inTopNavSideMenu)},(0,p.h)("ul",null,(0,p.h)("slot",null))))},this.renderGroupedLinks=function(){return(0,p.h)("ul",{class:"grouped-links-wrapper"},(0,p.h)("slot",null))},this.getNavigationChildItemsHeight=function(){var e=t.el.querySelectorAll("ic-navigation-item").length||0,i=t.el.querySelector("ic-navigation-item")||null;return"side"===t.navigationType&&e&&i?"".concat(parseInt(getComputedStyle(i).height)*e,"px"):"auto"},this.setInitialGroupedLinksWrapperHeight=function(){var e=t.el.shadowRoot.querySelector(".grouped-links-wrapper");e&&t.expanded&&e.setAttribute("style","--navigation-child-items-height: ".concat(t.getNavigationChildItemsHeight()))},this.renderNavigationItems=function(){return t.dropdownOpen||t.inTopNavSideMenu&&!t.expandable?t.renderDropdownGroupedLinks():"top"!==t.navigationType?t.renderGroupedLinks():null},this.label=void 0,this.expandable=!1,this.dropdownOpen=!1,this.inTopNavSideMenu=!1,this.deviceSize=u.D.XL,this.focusStyle=(0,u.f)(),this.navigationType=void 0,this.parentEl=void 0,this.expanded=!0}var i;return(0,r.Z)(e,[{key:"childBlurHandler",value:function(){this.hideDropdown()}},{key:"navItemClickHandler",value:function(){this.hideDropdown()}},{key:"themeChangeHandler",value:function(e){var i=e.detail;this.focusStyle=i.mode}},{key:"setFocus",value:(i=(0,n.Z)(d().mark((function e(){return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.groupEl&&this.groupEl.focus();case 1:case"end":return e.stop()}}),e,this)}))),function(){return i.apply(this,arguments)})},{key:"toggleDropdown",value:function(){this.dropdownOpen=!this.dropdownOpen}},{key:"showDropdown",value:function(){this.dropdownOpen||this.toggleDropdown()}},{key:"hideDropdown",value:function(){this.dropdownOpen&&this.toggleDropdown()}},{key:"componentWillLoad",value:function(){this.deviceSize=(0,u.g)();var e=(0,u.m)(this.el);this.navigationType=e.navType,this.parentEl=e.parent,this.deviceSize<=u.D.L&&"top"===this.navigationType&&(this.inTopNavSideMenu=!0),"side"===this.navigationType?this.parentEl.addEventListener("sideNavExpanded",this.sideNavExpandHandler):"top"===this.navigationType&&this.parentEl.addEventListener("topNavResized",this.topNavResizedHandler)}},{key:"componentDidLoad",value:function(){var e=this;setTimeout((function(){return e.setInitialGroupedLinksWrapperHeight()}),this.DYNAMIC_GROUPED_LINKS_HEIGHT_MS)}},{key:"disconnectedCallback",value:function(){"side"===this.navigationType?this.parentEl.removeEventListener("sideNavExpanded",this.sideNavExpandHandler):"top"===this.navigationType&&this.parentEl.removeEventListener("topNavResized",this.topNavResizedHandler)}},{key:"render",value:function(){var e,i,t=this,n=this.label,a=this.dropdownOpen,r=this.inTopNavSideMenu,s=this.expandable,d=!r||s?"button":"div";return(0,p.h)(p.H,{class:(e={},(0,o.Z)(e,"in-side-menu",r),(0,o.Z)(e,"expanded",this.expanded),(0,o.Z)(e,"collapsed",!this.expanded),(0,o.Z)(e,"navigation-group-side-nav","side"===this.navigationType),e),role:"listitem"},(0,p.h)(d,{tabindex:r&&!s?"-1":"0",onMouseOver:r||"top"!==this.navigationType?null:this.triggerShowDropdown,onMouseLeave:"top"===this.navigationType&&this.handleMouseLeave,onBlur:this.handleBlur,onClick:s?this.handleClick:null,onKeyDown:this.handleKeydown,class:(i={},(0,o.Z)(i,"navigation-group",!0),(0,o.Z)(i,this.focusStyle,!r),(0,o.Z)(i,"navigation-group-side-menu",r&&!s),(0,o.Z)(i,"navigation-group-side-menu-collapsed",r&&s&&!a),(0,o.Z)(i,"navigation-group-side-menu-expanded",r&&s&&a),(0,o.Z)(i,"selected",a&&!r),i),ref:function(e){return t.groupEl=e},"aria-expanded":a||this.expanded?"true":"false","aria-haspopup":r||"top"!==this.navigationType?"false":"true"},(0,p.h)("ic-typography",{variant:"side"===this.navigationType?"caption":"label"},n),"side"===this.navigationType&&s&&(0,p.h)("div",{class:{"chevron-toggle-icon-wrapper":!0,"chevron-toggle-icon-closed":this.expanded},innerHTML:l.c})),this.renderNavigationItems())}},{key:"el",get:function(){return(0,p.g)(this)}}]),e}();c.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host{display:block}:host(.in-side-menu){border-bottom:1px solid var(--ic-architectural-200);padding:var(--ic-space-md) 0}:host .navigation-group{height:100%;width:-moz-fit-content;width:fit-content;color:var(--ic-theme-text);display:flex;align-items:center;justify-content:center;padding:0 var(--ic-space-md);transition:var(--ic-easing-transition-slow);position:relative;background:none;border:none}:host(.in-side-menu) .navigation-group{height:40px;width:100%;text-align:left}:host(.in-side-menu) .navigation-group .ic-typography-label{width:190px}:host(.in-side-menu) .navigation-group-side-menu{color:var(--ic-action-default);justify-content:flex-start;padding:0 var(--ic-space-md) 0 var(--ic-space-md)}:host(.in-side-menu) .navigation-group-side-menu-collapsed,:host(.in-side-menu) .navigation-group-side-menu-expanded{color:var(--ic-action-default);justify-content:flex-start;padding-left:var(--ic-space-md)}:host(.in-side-menu) .navigation-group-side-menu-expanded{margin-bottom:var(--ic-space-xs)}:host(.in-side-menu) .navigation-group-side-menu-collapsed::after,:host(.in-side-menu) .navigation-group-side-menu-expanded::after{border-style:solid;border-width:0.125em 0.125em 0 0;content:"";display:inline-block;height:0.45em;left:0.75em;position:relative;top:-0.1em;transform:rotate(135deg);vertical-align:top;width:0.45em}:host(.in-side-menu) .navigation-group-side-menu-expanded::after{top:0.15em;transform:rotate(-45deg)}:host .navigation-group:hover,:host .navigation-group:active,:host .selected{background-color:var(--ic-architectural-20);color:var(--ic-color-primary-text);outline:none;cursor:pointer}:host(:not(.in-side-menu)) .navigation-group:focus{box-shadow:var(--ic-border-focus);border-radius:var(--ic-border-radius);outline:none;z-index:1;transition:box-shadow var(--ic-easing-transition-fast)}:host(.in-side-menu) .navigation-group-side-menu:hover,:host(.in-side-menu) .navigation-group-side-menu:active,:host(.in-side-menu) .navigation-group-side-menu:focus{background-color:var(--ic-architectural-20);color:var(--ic-action-default);cursor:auto;box-shadow:none;outline:none}:host(.in-side-menu) .navigation-group-side-menu-expanded:hover:not(:focus),:host(.in-side-menu) .navigation-group-side-menu-collapsed:hover:not(:focus){background-color:var(--ic-action-dark-bg-hover);color:var(--ic-action-default);cursor:pointer}:host(.in-side-menu) .navigation-group-side-menu-expanded:active:not(:focus),:host(.in-side-menu) .navigation-group-side-menu-collapsed:active:not(:focus){background-color:var(--ic-action-dark-bg-active);color:var(--ic-action-default)}:host(.in-side-menu) .navigation-group-side-menu-expanded:focus,:host(.in-side-menu) .navigation-group-side-menu-collapsed:focus{color:var(--ic-action-default);box-shadow:var(--ic-border-focus-inset);border-radius:var(--ic-border-radius-inset);outline:none}:host .navigation-group-dropdown{background-color:var(--ic-architectural-20);border-bottom:1px solid var(--ic-architectural-300);position:absolute;left:0;right:0;padding:var(--ic-space-xs) var(--ic-space-md);box-shadow:0 6px 8px -6px rgba(0 0 0 / 20%)}:host .navigation-group-dropdown-items-list{list-style:none;display:flex;flex-flow:column wrap;align-content:flex-start;padding-left:var(--ic-space-md);max-height:264px}:host .chevron-toggle-icon-wrapper{display:flex;align-items:center}:host .chevron-toggle-icon-wrapper svg{transform:rotate(90deg)}:host .chevron-toggle-icon-closed svg{transform:rotate(-90deg)}:host(.expanded) .grouped-links-wrapper{height:var(--navigation-child-items-height, auto);transition:var(--ic-easing-transition-slow);overflow:hidden}:host(.collapsed) .grouped-links-wrapper{height:var(--navigation-child-items-height, 0);transition:var(--ic-easing-transition-slow);overflow:hidden}:host(.navigation-group-side-nav) .navigation-group{height:var(--navigation-group-height);width:var(--navigation-group-width);justify-content:var(--navigation-group-justify-content);padding-right:var(--navigation-group-expand-toggle-padding)}:host(.navigation-group-side-nav) .navigation-group:hover,:host(.navigation-group-side-nav) .navigation-group:active,:host(.navigation-group-side-nav) .selected{background-color:var(--navigation-group-hover);color:var(--navigation-group-text-hover)}:host(.navigation-group-side-nav) .navigation-group:focus{box-shadow:var(--ic-border-focus-inset);border-radius:var(--ic-border-radius-inset);background:none}:host(.navigation-group-side-nav) .ic-typography-caption{position:var(--navigation-group-title-position);left:var(--navigation-group-title-position-left);white-space:nowrap}.menu-visibility-visible{visibility:visible}.menu-visibility-hidden{visibility:hidden}'}}]);
//# sourceMappingURL=3074-3ece265b987fedc633d4.js.map