"use strict";(self.webpackChunkic_design_system=self.webpackChunkic_design_system||[]).push([[1841],{1841:function(e,t,i){i.r(t),i.d(t,{ic_top_navigation:function(){return l}});var a=i(4942),n=i(5671),s=i(3144),o=i(6902),r=i(7331),l=function(){function e(t){var i=this;(0,n.Z)(this,e),(0,o.r)(this,t),this.icNavigationMenuOpened=(0,o.c)(this,"icNavigationMenuOpened",7),this.icNavigationMenuClosed=(0,o.c)(this,"icNavigationMenuClosed",7),this.hasAppIcon=!1,this.hasNavigation=!1,this.hasIconButtons=!1,this.hasSearchSlotContent=!1,this.searchBar=null,this.initialiseSearchBar=function(){if(i.hasSearchSlotContent){var e=(0,r.C)(i.el,"search");e&&"IC-SEARCH-BAR"===e.tagName?i.searchBar=e:e&&"FORM"===e.tagName&&(i.searchBar=e.querySelector("ic-search-bar")),null!==i.searchBar&&(i.searchBar.hideLabel=!0)}},this.emitTopNavResized=function(e){var t=new CustomEvent("topNavResized",{detail:{size:e}});i.el.dispatchEvent(t)},this.menuButtonClick=function(){i.showNavMenu(!0)},this.searchButtonMouseDownHandler=function(){i.searchButtonClick=!0},this.searchButtonClickHandler=function(){i.toggleSearchBar(),i.searchButtonClick=!1},this.resizeObserver=null,this.resizeObserverCallback=function(e){e!==i.deviceSize&&(i.deviceSize=e,e>r.D.L&&(i.showNavMenu(!1),i.mobileSearchBarVisible&&i.toggleSearchBar()),i.emitTopNavResized(e),null!==document.activeElement&&void 0!==document.activeElement&&"IC-SEARCH-BAR"===document.activeElement.tagName&&(i.searchBar.setAttribute("hidden","true"),i.searchBar.removeAttribute("hidden"),setTimeout((function(){i.searchBar.setFocus()}),100)))},this.runResizeObserver=function(){i.resizeObserver=new ResizeObserver((function(){var e=(0,r.g)();i.resizeObserverCallback(e)})),i.resizeObserver.observe(i.el)},this.appTitle=void 0,this.href="/",this.version="",this.status="",this.contentAligned="full-width",this.inline=!1,this.menuOpen=!1,this.deviceSize=r.D.XL,this.mobileSearchBarVisible=!1,this.navMenuVisible=!1,this.searchValue="",this.mobileSearchHiddenOnBlur=!1,this.searchButtonClick=!1,this.foregroundColor=(0,r.f)(),this.hasFullWidthSearchBar=!1}return(0,s.Z)(e,[{key:"watchPropHandler",value:function(e,t){(0,r.o)(t,e,this.initialiseSearchBar)}},{key:"navBarMenuCloseHandler",value:function(){this.showNavMenu(!1),this.el.shadowRoot.querySelector("#menu-button").setFocus()}},{key:"searchInputBlurHandler",value:function(e){null!==e.detail&&(this.mobileSearchBarVisible&&!this.searchButtonClick&&this.toggleSearchBar(),this.searchValue=e.detail.value)}},{key:"searchValueChangeHandler",value:function(e){this.searchValue=e.detail.value}},{key:"themeChangeHandler",value:function(e){var t=e.detail;this.foregroundColor=t.mode}},{key:"toggleSearchBar",value:function(){var e=this;this.mobileSearchBarVisible=!this.mobileSearchBarVisible,null!==this.searchBar&&(this.mobileSearchBarVisible?(this.mobileSearchButtonEl.updateAriaLabel("Hide search"),this.hasFullWidthSearchBar=!0,this.searchBar.fullWidth=!0,setTimeout((function(){e.searchBar.setFocus()}),100)):(this.mobileSearchButtonEl.updateAriaLabel("Show search"),this.hasFullWidthSearchBar=!1,this.searchBar.fullWidth=!1))}},{key:"showNavMenu",value:function(e){this.navMenuVisible=e,e?this.icNavigationMenuOpened.emit():this.icNavigationMenuClosed.emit()}},{key:"componentWillLoad",value:function(){this.hasAppIcon=(0,r.i)(this.el,"app-icon"),this.hasNavigation=(0,r.i)(this.el,"navigation"),this.hasIconButtons=(0,r.i)(this.el,"buttons"),this.hasSearchSlotContent=(0,r.i)(this.el,"search"),this.deviceSize=(0,r.g)(),this.initialiseSearchBar()}},{key:"componentWillRender",value:function(){this.hasNavigation=(0,r.i)(this.el,"navigation"),this.hasSearchSlotContent=(0,r.i)(this.el,"search"),this.hasIconButtons=(0,r.i)(this.el,"buttons"),this.hasAppIcon=(0,r.i)(this.el,"app-icon")}},{key:"componentDidLoad",value:function(){(0,r.c)(this.runResizeObserver),(0,r.a)([{prop:this.appTitle,propName:"app-title"}],"Top Navigation")}},{key:"disconnectedCallback",value:function(){null!==this.resizeObserver&&this.resizeObserver.disconnect()}},{key:"render",value:function(){var e,t=this,i=this.hasNavigation||this.hasIconButtons||""!==this.status||""!==this.version,n=this.deviceSize<=r.D.S?"default":"emphasis",s="h3",l=""!==this.appTitle&&void 0!==this.appTitle;this.deviceSize<=r.D.L&&(s="h4",this.deviceSize<=r.D.S&&(s="subtitle-small"));var c=this.mobileSearchBarVisible?"Hide search":"Show search",h=this.deviceSize<=r.D.S?"dense":"default";return(0,o.h)(o.H,{class:(e={},(0,a.Z)(e,"fullwidth-searchbar",this.hasFullWidthSearchBar),(0,a.Z)(e,r.I.Dark,this.foregroundColor===r.I.Dark),e)},(0,o.h)("div",{class:"top-navigation"},(0,o.h)("ic-section-container",{aligned:"full-width","full-height":!0},(0,o.h)("header",{role:"banner"},(0,o.h)("div",{class:"top-panel-container"},(0,o.h)("div",{class:"app-details-container"},l&&(0,o.h)("a",{class:"title-link",href:this.href},this.hasAppIcon&&(0,o.h)("div",{class:"app-icon-container","aria-hidden":"true"},(0,o.h)("slot",{name:"app-icon"})),(0,o.h)("ic-typography",{variant:s},(0,o.h)("h1",null,this.appTitle))),""!==this.status&&(0,o.h)("div",{class:"app-status"},(0,o.h)("ic-typography",{"aria-label":"app tag",variant:"label-uppercase",class:"app-status-text"},this.status)),""!==this.version&&(0,o.h)("div",{class:"app-version"},(0,o.h)("ic-typography",{variant:"label",class:"app-version-text","aria-label":"app version"},this.version))),(this.hasSearchSlotContent||i)&&(0,o.h)("div",{class:"search-menu-container"},(0,o.h)("div",{class:"search-actions-container"},this.deviceSize>r.D.L&&(0,o.h)("slot",{name:"search"}),this.hasSearchSlotContent&&this.deviceSize<=r.D.L&&(0,o.h)("ic-button",{id:"search-toggle-button",ref:function(e){return t.mobileSearchButtonEl=e},onMouseDown:this.searchButtonMouseDownHandler,variant:"icon",size:n,"aria-label":c,buttonStyle:this.foregroundColor,onClick:this.searchButtonClickHandler},(0,o.h)("slot",{name:"toggle-icon",slot:"icon"},(0,o.h)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#ffffff"},(0,o.h)("path",{d:"M0 0h24v24H0V0z",fill:"none"}),(0,o.h)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"})))),this.hasIconButtons&&this.deviceSize>r.D.L&&(0,o.h)("div",{class:"icon-buttons-container"},(0,o.h)("slot",{name:"buttons"})),i&&this.deviceSize<=r.D.L&&(0,o.h)("div",{class:"menu-button-container"},(0,o.h)("nav",{"aria-labelledby":"navigation-landmark-text","aria-hidden":!this.hasNavigation||this.navMenuVisible?"true":"false"},(0,o.h)("ic-button",{id:"menu-button",buttonStyle:this.foregroundColor,variant:"secondary","aria-expanded":this.menuOpen?"true":"false","aria-haspopup":"true","aria-label":"Open ".concat(this.hasNavigation?"navigation":"app"," menu"),size:h,onClick:this.menuButtonClick},"Menu",(0,o.h)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#ffffff",slot:"icon"},(0,o.h)("path",{d:"M0 0h24v24H0V0z",fill:"none"}),(0,o.h)("path",{d:"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"})))))))),this.mobileSearchBarVisible&&(0,o.h)("div",{class:"search-bar-container"},(0,o.h)("slot",{name:"search"})),this.hasNavigation&&this.deviceSize>r.D.L&&(0,o.h)("div",{class:"navigation-tabs"},(0,o.h)("span",{id:"navigation-landmark-text",class:"navigation-landmark-text","aria-hidden":"true"},"Main navigation"),(0,o.h)("nav",{"aria-labelledby":"navigation-landmark-text",class:"nav-panel-container"},(0,o.h)("ul",{class:"navigation-item-list"},(0,o.h)("slot",{name:"navigation"}))))))),this.navMenuVisible&&(0,o.h)("ic-navigation-menu",{version:this.version,status:this.status,class:(0,a.Z)({},"inline",this.inline)},(0,o.h)("div",{class:"menu-buttons-slot",slot:"buttons"},(0,o.h)("slot",{name:"buttons"})),(0,o.h)("ul",{slot:"navigation"},(0,o.h)("slot",{name:"navigation"}))))}},{key:"el",get:function(){return(0,o.g)(this)}}],[{key:"watchers",get:function(){return{appTitle:["watchPropHandler"]}}}]),e}();l.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host{display:block;color:var(--ic-theme-text);width:100%;position:relative}:host .top-navigation{background-color:var(--ic-theme-primary);height:-moz-max-content;height:max-content}:host(.fullwidth-searchbar) slot[name="search"]::slotted(form){width:100%}:host .title-link{display:inline-flex;align-items:center;text-decoration:none;padding:var(--ic-space-xxs);margin-left:calc(-1 * var(--ic-space-xxs));transition:var(--ic-easing-transition-fast)}:host .title-link,:host .title-link:visited,:host .title-link:active{color:var(--ic-theme-text)}:host .title-link:hover:not(:focus){background-color:var(--ic-theme-hover)}:host .title-link:active:not(:focus){background-color:var(--ic-theme-active)}:host .title-link:hover{border-radius:var(--ic-border-radius)}:host .title-link:focus{border-radius:var(--ic-border-radius);box-shadow:var(--ic-border-focus);outline:none}:host .title-link ic-typography{font-weight:600}:host .nav-panel-container{border-top:var(--ic-keyline-lighten);padding-left:var(--ic-space-lg);margin-left:calc(-1 * var(--section-container-margin));margin-right:calc(-1 * var(--section-container-margin));display:flex}:host(.dark) .nav-panel-container{border-top:var(--ic-keyline-darken)}.top-panel-container{display:flex;padding-top:8px;padding-bottom:8px}.navigation-tabs{margin-top:-1px}.app-details-container{display:flex;align-items:center;flex:1 1 auto;margin-right:var(--ic-space-md)}.app-icon-container{display:flex;padding-right:var(--ic-space-xs)}.icon-buttons-container{display:flex;margin-left:var(--ic-space-md)}.icon-buttons-container ::slotted(nav){display:flex}.app-title{padding-right:var(--ic-space-lg)}:host .app-status{border-radius:80px;background-color:var(--ic-architectural-white);color:var(--ic-color-primary-text);padding:var(--ic-space-xxs) var(--ic-space-lg);margin-left:var(--ic-space-md)}:host(.dark) .app-status{background-color:var(--ic-theme-text);color:var(--ic-color-white-text)}:host .app-version{border-radius:16px;background-color:var(--ic-theme-active);padding:var(--ic-space-xxs) var(--ic-space-sm);margin-left:var(--ic-space-xs)}.app-status-text,.app-version-text{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:96px}slot[name="app-icon"]::slotted(svg){fill:var(--ic-theme-text);width:2em;height:2em}slot[name="toggle-icon"] svg{fill:var(--ic-theme-text)}.search-menu-container{justify-content:right;display:flex;align-items:center;flex:1 auto}.menu-button-container{margin-left:var(--ic-space-md)}.search-actions-container{display:flex}.menu-buttons-slot{display:flex;flex-direction:column}.navigation-landmark-text{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden}.navigation-item-list{display:flex;list-style:none;height:44px}:host([content-aligned="left"]) .app-details-container{flex-basis:1}:host([content-aligned="left"]) .app-details-container,:host([content-aligned="left"]) .nav-panel-container,:host([content-aligned="center"]) .nav-panel-container,:host([content-aligned="left"]) .search-menu-container,:host([content-aligned="center"]) .search-menu-container{justify-content:flex-start}:host([content-aligned="center"]) .app-details-container{justify-content:flex-end}@media screen and (min-width: 993px){.app-details-container{margin-right:var(--ic-space-lg)}:host([content-aligned="center"]) .top-navigation{display:flex;justify-content:center}:host([content-aligned="left"]) .top-navigation{display:flex}}@media screen and (max-width: 1200px){:host .nav-panel-container{padding-left:var(--ic-space-md)}@media screen and (max-width: 992px){:host .nav-panel-container,:host .app-status,:host .app-version{display:none}:host .title-link{margin-right:var(--ic-space-xs)}.search-menu-container{max-width:160px}.search-bar-container{display:flex;justify-content:center;align-items:center;border-top:var(--ic-keyline-darken);height:64px;padding-left:var(--ic-space-md);padding-right:var(--ic-space-md);margin-left:calc(-1 * var(--section-container-margin));margin-right:calc(-1 * var(--section-container-margin))}:host([content-aligned="left"]) .app-details-container,:host([content-aligned="left"]) .search-menu-container,:host([content-aligned="center"]) .search-menu-container,:host([content-aligned="center"]) .app-details-container{justify-content:flex-start}}@media screen and (max-width: 576px){:host .title-link{margin-right:var(--ic-space-xxxs);word-break:break-word;-webkit-hyphens:auto;hyphens:auto}.top-panel-container{min-height:40px}.searchbox-inline{display:none}.search-bar-container{margin-top:0;height:56px;padding-left:var(--ic-space-xs);padding-right:var(--ic-space-xs)}.menu-button-container{margin-left:var(--ic-space-sm)}slot[name="app-icon"]::slotted(svg){width:1.5em;height:1.5em}slot[name="toggle-icon"] svg{width:1.5em;height:1.5em}:host([content-aligned="left"]) .app-details-container,:host([content-aligned="left"]) .search-menu-container,:host([content-aligned="center"]) .app-details-container,:host([content-aligned="center"]) .search-menu-container{justify-content:flex-start}}}'}}]);
//# sourceMappingURL=1841-bd7f23c204e63d74d11c.js.map