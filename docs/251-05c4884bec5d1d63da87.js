"use strict";(self.webpackChunkic_design_system=self.webpackChunkic_design_system||[]).push([[251],{251:function(e,t,o){o.r(t),o.d(t,{ic_theme:function(){return c}});var r=o(2815),s=o(2025);o(4581);const c=class{constructor(e){(0,r.r)(this,e),this.themeChange=(0,r.c)(this,"themeChange",7),this.checkThemeColorContrast=()=>{(0,s.H)()<s.J&&(0,s.H)()>s.W&&console.warn("The theme colour does not provide enough contrast with either of the ICDS black or white foreground colours. Consider choosing a colour with a different brightness to achieve sufficient colour contrast for good visibility. See https://www.w3.org/TR/AERT/#color-contrast for more information about colour contrast.")},this.setThemeColor=()=>{const e=(0,s.c)(this.color);if(e){const{r:t,g:o,b:r,a:c}=e,{style:i}=document.documentElement;i.setProperty("--ic-theme-primary-r",`${t}`),i.setProperty("--ic-theme-primary-g",`${o}`),i.setProperty("--ic-theme-primary-b",`${r}`),i.setProperty("--ic-theme-primary-a",`${c}`),this.checkThemeColorContrast(),this.themeChange.emit({mode:(0,s.b)(),color:e})}},this.color=null}watchColorPropHandler(){this.setThemeColor()}componentWillLoad(){this.setThemeColor()}render(){return(0,r.h)(r.H,null)}static get watchers(){return{color:["watchColorPropHandler"]}}}}}]);