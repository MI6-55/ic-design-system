"use strict";(self.webpackChunkic_design_system=self.webpackChunkic_design_system||[]).push([[2594],{2594:function(e,t,o){o.r(t),o.d(t,{ic_theme:function(){return s}});var r=o(5671),n=o(3144),i=o(2686),c=o(2907),s=(o(9455),function(){function e(t){var o=this;(0,r.Z)(this,e),(0,i.r)(this,t),this.themeChange=(0,i.c)(this,"themeChange",7),this.checkThemeColorContrast=function(){(0,c.A)()<c.B&&(0,c.A)()>c.W&&console.warn("The theme colour does not provide enough contrast with either of the ICDS black or white foreground colours. Consider choosing a colour with a different brightness to achieve sufficient colour contrast for good visibility. See https://www.w3.org/TR/AERT/#color-contrast for more information about colour contrast.")},this.setThemeColor=function(){if(null!==o.color){var e=null,t=o.color.slice(0,1);"#"===t?e=(0,c.C)(o.color):"r"===t.toLowerCase()&&(e=(0,c.E)(o.color)),o.setThemeRGBA(e)}},this.setThemeRGBA=function(e){if(null!==e){var t=document.documentElement;t.style.setProperty("--ic-theme-primary-r",e.r.toString()),t.style.setProperty("--ic-theme-primary-g",e.g.toString()),t.style.setProperty("--ic-theme-primary-b",e.b.toString()),t.style.setProperty("--ic-theme-primary-a",e.a.toString()),o.checkThemeColorContrast();var r=(0,c.k)();o.themeChange.emit({mode:r,color:e})}},this.color=null}return(0,n.Z)(e,[{key:"watchColorPropHandler",value:function(){this.setThemeColor()}},{key:"componentWillLoad",value:function(){this.setThemeColor()}},{key:"render",value:function(){return(0,i.h)(i.H,null)}}],[{key:"watchers",get:function(){return{color:["watchColorPropHandler"]}}}]),e}())}}]);
//# sourceMappingURL=2594-96158d7bb49faad826f6.js.map