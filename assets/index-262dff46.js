(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function e(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(n){if(n.ep)return;n.ep=!0;const i=e(n);fetch(n.href,i)}})();/*!
 * vanilla-picker v2.12.1
 * https://vanilla-picker.js.org
 *
 * Copyright 2017-2021 Andreas Borgen (https://github.com/Sphinxxxx), Adam Brooks (https://github.com/dissimulate)
 * Released under the ISC license.
 */var I=function(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")},T=function(){function t(r,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}return function(r,e,o){return e&&t(r.prototype,e),o&&t(r,o),r}}(),x=function(){function t(r,e){var o=[],n=!0,i=!1,s=void 0;try{for(var c=r[Symbol.iterator](),a;!(n=(a=c.next()).done)&&(o.push(a.value),!(e&&o.length===e));n=!0);}catch(l){i=!0,s=l}finally{try{!n&&c.return&&c.return()}finally{if(i)throw s}}return o}return function(r,e){if(Array.isArray(r))return r;if(Symbol.iterator in Object(r))return t(r,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();String.prototype.startsWith=String.prototype.startsWith||function(t){return this.indexOf(t)===0};String.prototype.padStart=String.prototype.padStart||function(t,r){for(var e=this;e.length<t;)e=r+e;return e};var X={cb:"0f8ff",tqw:"aebd7",q:"-ffff",qmrn:"7fffd4",zr:"0ffff",bg:"5f5dc",bsq:"e4c4",bck:"---",nch:"ebcd",b:"--ff",bvt:"8a2be2",brwn:"a52a2a",brw:"deb887",ctb:"5f9ea0",hrt:"7fff-",chcT:"d2691e",cr:"7f50",rnw:"6495ed",crns:"8dc",crms:"dc143c",cn:"-ffff",Db:"--8b",Dcn:"-8b8b",Dgnr:"b8860b",Dgr:"a9a9a9",Dgrn:"-64-",Dkhk:"bdb76b",Dmgn:"8b-8b",Dvgr:"556b2f",Drng:"8c-",Drch:"9932cc",Dr:"8b--",Dsmn:"e9967a",Dsgr:"8fbc8f",DsTb:"483d8b",DsTg:"2f4f4f",Dtrq:"-ced1",Dvt:"94-d3",ppnk:"1493",pskb:"-bfff",mgr:"696969",grb:"1e90ff",rbrc:"b22222",rwht:"af0",stg:"228b22",chs:"-ff",gnsb:"dcdcdc",st:"8f8ff",g:"d7-",gnr:"daa520",gr:"808080",grn:"-8-0",grnw:"adff2f",hnw:"0fff0",htpn:"69b4",nnr:"cd5c5c",ng:"4b-82",vr:"0",khk:"0e68c",vnr:"e6e6fa",nrb:"0f5",wngr:"7cfc-",mnch:"acd",Lb:"add8e6",Lcr:"08080",Lcn:"e0ffff",Lgnr:"afad2",Lgr:"d3d3d3",Lgrn:"90ee90",Lpnk:"b6c1",Lsmn:"a07a",Lsgr:"20b2aa",Lskb:"87cefa",LsTg:"778899",Lstb:"b0c4de",Lw:"e0",m:"-ff-",mgrn:"32cd32",nn:"af0e6",mgnt:"-ff",mrn:"8--0",mqm:"66cdaa",mmb:"--cd",mmrc:"ba55d3",mmpr:"9370db",msg:"3cb371",mmsT:"7b68ee","":"-fa9a",mtr:"48d1cc",mmvt:"c71585",mnLb:"191970",ntc:"5fffa",mstr:"e4e1",mccs:"e4b5",vjw:"dead",nv:"--80",c:"df5e6",v:"808-0",vrb:"6b8e23",rng:"a5-",rngr:"45-",rch:"da70d6",pgnr:"eee8aa",pgrn:"98fb98",ptrq:"afeeee",pvtr:"db7093",ppwh:"efd5",pchp:"dab9",pr:"cd853f",pnk:"c0cb",pm:"dda0dd",pwrb:"b0e0e6",prp:"8-080",cc:"663399",r:"--",sbr:"bc8f8f",rb:"4169e1",sbrw:"8b4513",smn:"a8072",nbr:"4a460",sgrn:"2e8b57",ssh:"5ee",snn:"a0522d",svr:"c0c0c0",skb:"87ceeb",sTb:"6a5acd",sTgr:"708090",snw:"afa",n:"-ff7f",stb:"4682b4",tn:"d2b48c",t:"-8080",thst:"d8bfd8",tmT:"6347",trqs:"40e0d0",vt:"ee82ee",whT:"5deb3",wht:"",hts:"5f5f5",w:"-",wgrn:"9acd32"};function z(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1,e=r>0?t.toFixed(r).replace(/0+$/,"").replace(/\.$/,""):t.toString();return e||"0"}var j=function(){function t(r,e,o,n){I(this,t);var i=this;function s(a){if(a.startsWith("hsl")){var l=a.match(/([\-\d\.e]+)/g).map(Number),d=x(l,4),p=d[0],u=d[1],f=d[2],h=d[3];h===void 0&&(h=1),p/=360,u/=100,f/=100,i.hsla=[p,u,f,h]}else if(a.startsWith("rgb")){var b=a.match(/([\-\d\.e]+)/g).map(Number),g=x(b,4),w=g[0],v=g[1],N=g[2],y=g[3];y===void 0&&(y=1),i.rgba=[w,v,N,y]}else a.startsWith("#")?i.rgba=t.hexToRgb(a):i.rgba=t.nameToRgb(a)||t.hexToRgb(a)}if(r!==void 0)if(Array.isArray(r))this.rgba=r;else if(o===void 0){var c=r&&""+r;c&&s(c.toLowerCase())}else this.rgba=[r,e,o,n===void 0?1:n]}return T(t,[{key:"printRGB",value:function(e){var o=e?this.rgba:this.rgba.slice(0,3),n=o.map(function(i,s){return z(i,s===3?3:0)});return e?"rgba("+n+")":"rgb("+n+")"}},{key:"printHSL",value:function(e){var o=[360,100,100,1],n=["","%","%",""],i=e?this.hsla:this.hsla.slice(0,3),s=i.map(function(c,a){return z(c*o[a],a===3?3:1)+n[a]});return e?"hsla("+s+")":"hsl("+s+")"}},{key:"printHex",value:function(e){var o=this.hex;return e?o:o.substring(0,7)}},{key:"rgba",get:function(){if(this._rgba)return this._rgba;if(!this._hsla)throw new Error("No color is set");return this._rgba=t.hslToRgb(this._hsla)},set:function(e){e.length===3&&(e[3]=1),this._rgba=e,this._hsla=null}},{key:"rgbString",get:function(){return this.printRGB()}},{key:"rgbaString",get:function(){return this.printRGB(!0)}},{key:"hsla",get:function(){if(this._hsla)return this._hsla;if(!this._rgba)throw new Error("No color is set");return this._hsla=t.rgbToHsl(this._rgba)},set:function(e){e.length===3&&(e[3]=1),this._hsla=e,this._rgba=null}},{key:"hslString",get:function(){return this.printHSL()}},{key:"hslaString",get:function(){return this.printHSL(!0)}},{key:"hex",get:function(){var e=this.rgba,o=e.map(function(n,i){return i<3?n.toString(16):Math.round(n*255).toString(16)});return"#"+o.map(function(n){return n.padStart(2,"0")}).join("")},set:function(e){this.rgba=t.hexToRgb(e)}}],[{key:"hexToRgb",value:function(e){var o=(e.startsWith("#")?e.slice(1):e).replace(/^(\w{3})$/,"$1F").replace(/^(\w)(\w)(\w)(\w)$/,"$1$1$2$2$3$3$4$4").replace(/^(\w{6})$/,"$1FF");if(!o.match(/^([0-9a-fA-F]{8})$/))throw new Error("Unknown hex color; "+e);var n=o.match(/^(\w\w)(\w\w)(\w\w)(\w\w)$/).slice(1).map(function(i){return parseInt(i,16)});return n[3]=n[3]/255,n}},{key:"nameToRgb",value:function(e){var o=e.toLowerCase().replace("at","T").replace(/[aeiouyldf]/g,"").replace("ght","L").replace("rk","D").slice(-5,4),n=X[o];return n===void 0?n:t.hexToRgb(n.replace(/\-/g,"00").padStart(6,"f"))}},{key:"rgbToHsl",value:function(e){var o=x(e,4),n=o[0],i=o[1],s=o[2],c=o[3];n/=255,i/=255,s/=255;var a=Math.max(n,i,s),l=Math.min(n,i,s),d=void 0,p=void 0,u=(a+l)/2;if(a===l)d=p=0;else{var f=a-l;switch(p=u>.5?f/(2-a-l):f/(a+l),a){case n:d=(i-s)/f+(i<s?6:0);break;case i:d=(s-n)/f+2;break;case s:d=(n-i)/f+4;break}d/=6}return[d,p,u,c]}},{key:"hslToRgb",value:function(e){var o=x(e,4),n=o[0],i=o[1],s=o[2],c=o[3],a=void 0,l=void 0,d=void 0;if(i===0)a=l=d=s;else{var p=function(g,w,v){return v<0&&(v+=1),v>1&&(v-=1),v<.16666666666666666?g+(w-g)*6*v:v<.5?w:v<.6666666666666666?g+(w-g)*(.6666666666666666-v)*6:g},u=s<.5?s*(1+i):s+i-s*i,f=2*s-u;a=p(f,u,n+1/3),l=p(f,u,n),d=p(f,u,n-1/3)}var h=[a*255,l*255,d*255].map(Math.round);return h[3]=c,h}}]),t}(),U=function(){function t(){I(this,t),this._events=[]}return T(t,[{key:"add",value:function(e,o,n){e.addEventListener(o,n,!1),this._events.push({target:e,type:o,handler:n})}},{key:"remove",value:function(e,o,n){this._events=this._events.filter(function(i){var s=!0;return e&&e!==i.target&&(s=!1),o&&o!==i.type&&(s=!1),n&&n!==i.handler&&(s=!1),s&&t._doRemove(i.target,i.type,i.handler),!s})}},{key:"destroy",value:function(){this._events.forEach(function(e){return t._doRemove(e.target,e.type,e.handler)}),this._events=[]}}],[{key:"_doRemove",value:function(e,o,n){e.removeEventListener(o,n,!1)}}]),t}();function K(t){var r=document.createElement("div");return r.innerHTML=t,r.firstElementChild}function L(t,r,e){var o=!1;function n(a,l,d){return Math.max(l,Math.min(a,d))}function i(a,l,d){if(d&&(o=!0),!!o){a.preventDefault();var p=r.getBoundingClientRect(),u=p.width,f=p.height,h=l.clientX,b=l.clientY,g=n(h-p.left,0,u),w=n(b-p.top,0,f);e(g/u,w/f)}}function s(a,l){var d=a.buttons===void 0?a.which:a.buttons;d===1?i(a,a,l):o=!1}function c(a,l){a.touches.length===1?i(a,a.touches[0],l):o=!1}t.add(r,"mousedown",function(a){s(a,!0)}),t.add(r,"touchstart",function(a){c(a,!0)}),t.add(window,"mousemove",s),t.add(r,"touchmove",c),t.add(window,"mouseup",function(a){o=!1}),t.add(r,"touchend",function(a){o=!1}),t.add(r,"touchcancel",function(a){o=!1})}var J=`linear-gradient(45deg, lightgrey 25%, transparent 25%, transparent 75%, lightgrey 75%) 0 0 / 2em 2em,
                   linear-gradient(45deg, lightgrey 25%,       white 25%,       white 75%, lightgrey 75%) 1em 1em / 2em 2em`,Q=360,D="keydown",k="mousedown",M="focusin";function m(t,r){return(r||document).querySelector(t)}function O(t){t.preventDefault(),t.stopPropagation()}function E(t,r,e,o,n){t.add(r,D,function(i){e.indexOf(i.key)>=0&&(n&&O(i),o(i))})}var P=function(){function t(r){I(this,t),this.settings={popup:"right",layout:"default",alpha:!0,editor:!0,editorFormat:"hex",cancelButton:!1,defaultColor:"#0cf"},this._events=new U,this.onChange=null,this.onDone=null,this.onOpen=null,this.onClose=null,this.setOptions(r)}return T(t,[{key:"setOptions",value:function(e){var o=this;if(!e)return;var n=this.settings;function i(l,d,p){for(var u in l)p&&p.indexOf(u)>=0||(d[u]=l[u])}if(e instanceof HTMLElement)n.parent=e;else{n.parent&&e.parent&&n.parent!==e.parent&&(this._events.remove(n.parent),this._popupInited=!1),i(e,n),e.onChange&&(this.onChange=e.onChange),e.onDone&&(this.onDone=e.onDone),e.onOpen&&(this.onOpen=e.onOpen),e.onClose&&(this.onClose=e.onClose);var s=e.color||e.colour;s&&this._setColor(s)}var c=n.parent;if(c&&n.popup&&!this._popupInited){var a=function(d){return o.openHandler(d)};this._events.add(c,"click",a),E(this._events,c,[" ","Spacebar","Enter"],a),this._popupInited=!0}else e.parent&&!n.popup&&this.show()}},{key:"openHandler",value:function(e){if(this.show()){e&&e.preventDefault(),this.settings.parent.style.pointerEvents="none";var o=e&&e.type===D?this._domEdit:this.domElement;setTimeout(function(){return o.focus()},100),this.onOpen&&this.onOpen(this.colour)}}},{key:"closeHandler",value:function(e){var o=e&&e.type,n=!1;if(!e)n=!0;else if(o===k||o===M){var i=(this.__containedEvent||0)+100;e.timeStamp>i&&(n=!0)}else O(e),n=!0;n&&this.hide()&&(this.settings.parent.style.pointerEvents="",o!==k&&this.settings.parent.focus(),this.onClose&&this.onClose(this.colour))}},{key:"movePopup",value:function(e,o){this.closeHandler(),this.setOptions(e),o&&this.openHandler()}},{key:"setColor",value:function(e,o){this._setColor(e,{silent:o})}},{key:"_setColor",value:function(e,o){if(typeof e=="string"&&(e=e.trim()),!!e){o=o||{};var n=void 0;try{n=new j(e)}catch(s){if(o.failSilently)return;throw s}if(!this.settings.alpha){var i=n.hsla;i[3]=1,n.hsla=i}this.colour=this.color=n,this._setHSLA(null,null,null,null,o)}}},{key:"setColour",value:function(e,o){this.setColor(e,o)}},{key:"show",value:function(){var e=this.settings.parent;if(!e)return!1;if(this.domElement){var o=this._toggleDOM(!0);return this._setPosition(),o}var n=this.settings.template||'<div class="picker_wrapper" tabindex="-1"><div class="picker_arrow"></div><div class="picker_hue picker_slider"><div class="picker_selector"></div></div><div class="picker_sl"><div class="picker_selector"></div></div><div class="picker_alpha picker_slider"><div class="picker_selector"></div></div><div class="picker_editor"><input aria-label="Type a color name or hex value"/></div><div class="picker_sample"></div><div class="picker_done"><button>Ok</button></div><div class="picker_cancel"><button>Cancel</button></div></div>',i=K(n);return this.domElement=i,this._domH=m(".picker_hue",i),this._domSL=m(".picker_sl",i),this._domA=m(".picker_alpha",i),this._domEdit=m(".picker_editor input",i),this._domSample=m(".picker_sample",i),this._domOkay=m(".picker_done button",i),this._domCancel=m(".picker_cancel button",i),i.classList.add("layout_"+this.settings.layout),this.settings.alpha||i.classList.add("no_alpha"),this.settings.editor||i.classList.add("no_editor"),this.settings.cancelButton||i.classList.add("no_cancel"),this._ifPopup(function(){return i.classList.add("popup")}),this._setPosition(),this.colour?this._updateUI():this._setColor(this.settings.defaultColor),this._bindEvents(),!0}},{key:"hide",value:function(){return this._toggleDOM(!1)}},{key:"destroy",value:function(){this._events.destroy(),this.domElement&&this.settings.parent.removeChild(this.domElement)}},{key:"_bindEvents",value:function(){var e=this,o=this,n=this.domElement,i=this._events;function s(l,d,p){i.add(l,d,p)}s(n,"click",function(l){return l.preventDefault()}),L(i,this._domH,function(l,d){return o._setHSLA(l)}),L(i,this._domSL,function(l,d){return o._setHSLA(null,l,1-d)}),this.settings.alpha&&L(i,this._domA,function(l,d){return o._setHSLA(null,null,null,1-d)});var c=this._domEdit;s(c,"input",function(l){o._setColor(this.value,{fromEditor:!0,failSilently:!0})}),s(c,"focus",function(l){var d=this;d.selectionStart===d.selectionEnd&&d.select()}),this._ifPopup(function(){var l=function(u){return e.closeHandler(u)};s(window,k,l),s(window,M,l),E(i,n,["Esc","Escape"],l);var d=function(u){e.__containedEvent=u.timeStamp};s(n,k,d),s(n,M,d),s(e._domCancel,"click",l)});var a=function(d){e._ifPopup(function(){return e.closeHandler(d)}),e.onDone&&e.onDone(e.colour)};s(this._domOkay,"click",a),E(i,n,["Enter"],a)}},{key:"_setPosition",value:function(){var e=this.settings.parent,o=this.domElement;e!==o.parentNode&&e.appendChild(o),this._ifPopup(function(n){getComputedStyle(e).position==="static"&&(e.style.position="relative");var i=n===!0?"popup_right":"popup_"+n;["popup_top","popup_bottom","popup_left","popup_right"].forEach(function(s){s===i?o.classList.add(s):o.classList.remove(s)}),o.classList.add(i)})}},{key:"_setHSLA",value:function(e,o,n,i,s){s=s||{};var c=this.colour,a=c.hsla;[e,o,n,i].forEach(function(l,d){(l||l===0)&&(a[d]=l)}),c.hsla=a,this._updateUI(s),this.onChange&&!s.silent&&this.onChange(c)}},{key:"_updateUI",value:function(e){if(!this.domElement)return;e=e||{};var o=this.colour,n=o.hsla,i="hsl("+n[0]*Q+", 100%, 50%)",s=o.hslString,c=o.hslaString,a=this._domH,l=this._domSL,d=this._domA,p=m(".picker_selector",a),u=m(".picker_selector",l),f=m(".picker_selector",d);function h(G,S,C){S.style.left=C*100+"%"}function b(G,S,C){S.style.top=C*100+"%"}h(a,p,n[0]),this._domSL.style.backgroundColor=this._domH.style.color=i,h(l,u,n[1]),b(l,u,1-n[2]),l.style.color=s,b(d,f,1-n[3]);var g=s,w=g.replace("hsl","hsla").replace(")",", 0)"),v="linear-gradient("+[g,w]+")";if(this._domA.style.background=v+", "+J,!e.fromEditor){var N=this.settings.editorFormat,y=this.settings.alpha,_=void 0;switch(N){case"rgb":_=o.printRGB(y);break;case"hsl":_=o.printHSL(y);break;default:_=o.printHex(y)}this._domEdit.value=_}this._domSample.style.color=c}},{key:"_ifPopup",value:function(e,o){this.settings.parent&&this.settings.popup?e&&e(this.settings.popup):o&&o()}},{key:"_toggleDOM",value:function(e){var o=this.domElement;if(!o)return!1;var n=e?"":"none",i=o.style.display!==n;return i&&(o.style.display=n),i}}]),t}();{var H=document.createElement("style");H.textContent='.picker_wrapper.no_alpha .picker_alpha{display:none}.picker_wrapper.no_editor .picker_editor{position:absolute;z-index:-1;opacity:0}.picker_wrapper.no_cancel .picker_cancel{display:none}.layout_default.picker_wrapper{display:flex;flex-flow:row wrap;justify-content:space-between;align-items:stretch;font-size:10px;width:25em;padding:.5em}.layout_default.picker_wrapper input,.layout_default.picker_wrapper button{font-size:1rem}.layout_default.picker_wrapper>*{margin:.5em}.layout_default.picker_wrapper::before{content:"";display:block;width:100%;height:0;order:1}.layout_default .picker_slider,.layout_default .picker_selector{padding:1em}.layout_default .picker_hue{width:100%}.layout_default .picker_sl{flex:1 1 auto}.layout_default .picker_sl::before{content:"";display:block;padding-bottom:100%}.layout_default .picker_editor{order:1;width:6.5rem}.layout_default .picker_editor input{width:100%;height:100%}.layout_default .picker_sample{order:1;flex:1 1 auto}.layout_default .picker_done,.layout_default .picker_cancel{order:1}.picker_wrapper{box-sizing:border-box;background:#f2f2f2;box-shadow:0 0 0 1px silver;cursor:default;font-family:sans-serif;color:#444;pointer-events:auto}.picker_wrapper:focus{outline:none}.picker_wrapper button,.picker_wrapper input{box-sizing:border-box;border:none;box-shadow:0 0 0 1px silver;outline:none}.picker_wrapper button:focus,.picker_wrapper button:active,.picker_wrapper input:focus,.picker_wrapper input:active{box-shadow:0 0 2px 1px #1e90ff}.picker_wrapper button{padding:.4em .6em;cursor:pointer;background-color:#f5f5f5;background-image:linear-gradient(0deg, gainsboro, transparent)}.picker_wrapper button:active{background-image:linear-gradient(0deg, transparent, gainsboro)}.picker_wrapper button:hover{background-color:#fff}.picker_selector{position:absolute;z-index:1;display:block;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%);border:2px solid #fff;border-radius:100%;box-shadow:0 0 3px 1px #67b9ff;background:currentColor;cursor:pointer}.picker_slider .picker_selector{border-radius:2px}.picker_hue{position:relative;background-image:linear-gradient(90deg, red, yellow, lime, cyan, blue, magenta, red);box-shadow:0 0 0 1px silver}.picker_sl{position:relative;box-shadow:0 0 0 1px silver;background-image:linear-gradient(180deg, white, rgba(255, 255, 255, 0) 50%),linear-gradient(0deg, black, rgba(0, 0, 0, 0) 50%),linear-gradient(90deg, #808080, rgba(128, 128, 128, 0))}.picker_alpha,.picker_sample{position:relative;background:linear-gradient(45deg, lightgrey 25%, transparent 25%, transparent 75%, lightgrey 75%) 0 0/2em 2em,linear-gradient(45deg, lightgrey 25%, white 25%, white 75%, lightgrey 75%) 1em 1em/2em 2em;box-shadow:0 0 0 1px silver}.picker_alpha .picker_selector,.picker_sample .picker_selector{background:none}.picker_editor input{font-family:monospace;padding:.2em .4em}.picker_sample::before{content:"";position:absolute;display:block;width:100%;height:100%;background:currentColor}.picker_arrow{position:absolute;z-index:-1}.picker_wrapper.popup{position:absolute;z-index:2;margin:1.5em}.picker_wrapper.popup,.picker_wrapper.popup .picker_arrow::before,.picker_wrapper.popup .picker_arrow::after{background:#f2f2f2;box-shadow:0 0 10px 1px rgba(0,0,0,.4)}.picker_wrapper.popup .picker_arrow{width:3em;height:3em;margin:0}.picker_wrapper.popup .picker_arrow::before,.picker_wrapper.popup .picker_arrow::after{content:"";display:block;position:absolute;top:0;left:0;z-index:-99}.picker_wrapper.popup .picker_arrow::before{width:100%;height:100%;-webkit-transform:skew(45deg);transform:skew(45deg);-webkit-transform-origin:0 100%;transform-origin:0 100%}.picker_wrapper.popup .picker_arrow::after{width:150%;height:150%;box-shadow:none}.popup.popup_top{bottom:100%;left:0}.popup.popup_top .picker_arrow{bottom:0;left:0;-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}.popup.popup_bottom{top:100%;left:0}.popup.popup_bottom .picker_arrow{top:0;left:0;-webkit-transform:rotate(90deg) scale(1, -1);transform:rotate(90deg) scale(1, -1)}.popup.popup_left{top:0;right:100%}.popup.popup_left .picker_arrow{top:0;right:0;-webkit-transform:scale(-1, 1);transform:scale(-1, 1)}.popup.popup_right{top:0;left:100%}.popup.popup_right .picker_arrow{top:0;left:0}',document.documentElement.firstElementChild.appendChild(H),P.StyleElement=H}window.renderSelectedNote=()=>{let t=allNotes.findIndex(s=>s.selected),r=document.querySelector(".-main-note"),e;try{e=editMode?`
            <div class="-main-note-virtual"><p>${allNotes[t].body}</p></div>
            <textarea
            oninput="updateSelectedNote(this, '${allNotes[t].id}', 'body')"
            value="${allNotes[t].body}"
            spellcheck="false"
            class="-main-note-body-textarea">${allNotes[t].body}</textarea>
            `:`<div class='-main-note-preview'>${allNotes[t].bodyPreview}</div>`}catch{}if(t===-1){r.innerHTML="";return}else{r.innerHTML=`
            <div style="display:flex; width: 100%; align-items:center;">
                <div class="-main-note-title">
                    <input 
                        oninput="updateSelectedNote(this, '${allNotes[t].id}', 'title')"
                        value="${allNotes[t].title}"
                        spellcheck="false"
                        placeholder="Note title"
                    ></input>
                </div>
                <div style="width:25%; max-width: 25%; height: 80%; border-radius: 0.3rem; display: flex; align-items: center; justify-content: flex-end">
                    <div style="text-align:right; font-size: 1.2rem; color: var(${editMode?"--accent-color":"--submain-color"}); margin-right: 0.5rem; margin-top: -0.4rem; width: max-content" class='k1'>
                        <p style="font-size: 1rem" class='k2'>Mode:</p>
                        <h4>${editMode?"EDIT":"PREVIEW"}</h4>
                    </div>
                    <svg onclick="toggleEditMode()" style="user-select: none; cursor: pointer;"
                    fill="var(${editMode?"--accent-color":"--submain-color"})" width="2.2rem" height="2.2rem" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20.7,5.2a1.024,1.024,0,0,1,0,1.448L18.074,9.276l-3.35-3.35L17.35,3.3a1.024,1.024,0,0,1,1.448,0Zm-4.166,5.614-3.35-3.35L4.675,15.975,3,21l5.025-1.675Z"/></svg>
                </div>
            </div>
            <hr class="customhr">
            <div class="-toolbar -toolbar2">
                <div class="-main-sidebar-toolbar2-button -button-animation" onmouseenter="toggleInfobox(this, 'enter')" onmouseleave="toggleInfobox(this, 'leave')"
                onclick="insertTextMutation('**')">
                    ${getInfobox("Puts boldening ** tags around selected text")}
                    <svg viewBox="-6.5 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 25.531v1.344c1.063-0.031 1.938-0.063 2.563-0.094 0.625 0 1.094-0.031 1.313-0.031 1.656-0.125 3.063-0.219 4.281-0.188l2.813 0.063c2.438 0 4.25-0.313 5.75-1 0.719-0.344 1.344-0.844 1.969-1.531 0.469-0.469 0.813-1.031 1.031-1.656 0.25-0.844 0.375-1.594 0.375-2.281 0-2.5-1.719-4.625-5.094-5.406 0.531-0.25 1.031-0.5 1.375-0.688s0.625-0.313 0.781-0.438c1.188-0.875 1.781-1.906 1.781-3.281 0-0.594-0.094-1.188-0.281-1.719-0.375-1.094-1.219-2-2.406-2.563-0.531-0.313-1.031-0.469-1.375-0.531-0.938-0.25-1.844-0.375-2.719-0.375h-1.094c-0.219 0-0.406 0-0.531-0.031h-0.5c-0.063 0-0.156 0-0.25 0.031h-0.625l-5.406 0.156-3.719 0.094 0.063 1.188c0.875 0.125 1.406 0.188 1.625 0.188 0.438 0 0.781 0.094 0.969 0.219 0.094 0 0.156 0.063 0.188 0.125 0.063 0.219 0.125 0.688 0.156 1.563 0.063 1.563 0.063 2.813 0.063 3.75 0.031 0.969 0.031 1.625 0.094 2v7.031c0 1.219-0.031 2.125-0.156 2.75-0.031 0.219-0.125 0.438-0.281 0.688-0.438 0.188-1 0.375-1.75 0.469-0.375 0.063-0.719 0.125-1 0.156zM7.719 14.281v-2.469c0.063-1.719 0-2.969-0.031-3.969-0.063-0.438-0.063-0.844-0.063-1.063 0.75-0.156 1.344-0.219 1.844-0.219 1.625 0 2.844 0.344 3.656 1.094 0.813 0.688 1.219 1.563 1.219 2.656 0 2.969-1.75 4.094-5.063 4.094-0.563 0-1.094-0.031-1.563-0.125zM7.719 20.406v-4.5c0.313-0.063 0.75-0.125 1.438-0.125 1.594-0.031 2.813 0.125 3.563 0.438 1.531 0.563 2.594 2.188 2.594 4.344 0 1.031-0.219 1.844-0.563 2.563-0.375 0.719-0.906 1.219-1.719 1.594-1.656 0.781-3.719 0.719-5.125 0.125-0.094-0.25-0.125-0.438-0.125-0.594z"></path>
                    </svg>
                </div>
                <div class="-main-sidebar-toolbar2-button -button-animation" onmouseenter="toggleInfobox(this, 'enter')" onmouseleave="toggleInfobox(this, 'leave')"
                onclick="insertTextMutation('^^')">
                    ${getInfobox("Puts italic ^^ tags around selected text")}
                    <svg width="1.1rem" height="1.1rem" viewBox="0 0 48 48" enable-background="new 0 0 48 48" id="Layer_3" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <g>
                            <path d="M22.066,44.07c0,0.661,0.149,1.168,0.446,1.521c0.299,0.353,0.767,0.602,1.405,0.744c0.64,0.144,1.543,0.237,2.712,0.281   l-0.265,1.355c-2.116-0.133-4.982-0.199-8.597-0.199c-3.77,0-6.646,0.066-8.63,0.199l0.363-1.355   c1.587-0.066,2.778-0.243,3.572-0.529c0.793-0.287,1.427-0.82,1.901-1.604c0.474-0.782,0.931-2.012,1.372-3.687l8.928-33.594   c0.375-1.433,0.562-2.513,0.562-3.24c0-0.684-0.153-1.201-0.463-1.554c-0.309-0.353-0.776-0.601-1.405-0.744   c-0.628-0.144-1.526-0.237-2.694-0.281l0.331-1.355c1.851,0.132,4.717,0.198,8.596,0.198c3.638,0,6.525-0.066,8.663-0.198   l-0.33,1.355c-1.653,0.066-2.883,0.242-3.687,0.529C34.04,2.199,33.401,2.729,32.928,3.5s-0.931,2.006-1.372,3.703l-8.928,33.594   C22.254,42.252,22.066,43.343,22.066,44.07z"/>
                        </g>
                    </svg>
                </div>
                <div class="-main-sidebar-toolbar2-button -button-animation" 
                onmouseenter="toggleInfobox(this, 'enter')" onmouseleave="toggleInfobox(this, 'leave')"
                onclick="insertTextMutation('__')">
                    ${getInfobox("Puts underline __ tags around selected text")}
                    <svg width="1.1rem" height="1.1rem" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
                            viewBox="0 0 29.501 29.501"
                            xml:space="preserve">
                    <g>
                        <path d="M27.408,0.001v0.67H26.9c-0.689,0-1.265,0.141-1.724,0.418c-0.459,0.277-0.793,0.695-0.997,1.252
                            c-0.156,0.387-0.236,1.082-0.236,2.084v9.34c0,2.892-0.189,4.978-0.57,6.256c-0.381,1.281-1.309,2.459-2.783,3.535
                            c-1.477,1.076-3.486,1.615-6.039,1.615c-2.127,0-3.771-0.285-4.934-0.854c-1.583-0.773-2.701-1.765-3.354-2.974
                            c-0.653-1.211-0.979-2.836-0.979-4.879V4.424c0-1.414-0.077-2.293-0.235-2.639C4.893,1.44,4.619,1.166,4.233,0.961
                            C3.849,0.756,3.132,0.658,2.093,0.67V0h12.693v0.67h-0.635c-0.955,0-1.609,0.1-1.968,0.301c-0.356,0.199-0.61,0.476-0.763,0.824
                            c-0.149,0.352-0.227,1.227-0.227,2.629v12.043c0,2.199,0.166,3.656,0.499,4.371c0.332,0.713,0.88,1.305,1.642,1.775
                            c0.762,0.473,1.724,0.709,2.883,0.709c1.33,0,2.466-0.303,3.4-0.898c0.938-0.598,1.639-1.424,2.104-2.475
                            c0.467-1.055,0.698-2.887,0.698-5.497V4.424c0-1.1-0.114-1.885-0.346-2.356c-0.229-0.472-0.521-0.798-0.869-0.979
                            c-0.545-0.277-1.312-0.418-2.304-0.418v-0.67H27.408L27.408,0.001z M4.25,29.501h21v-1.828h-21V29.501z"/>
                    </g>
                    </svg>
                </div>
                <div class="-main-sidebar-toolbar2-button -button-animation" onmouseenter="toggleInfobox(this, 'enter')" onmouseleave="toggleInfobox(this, 'leave')"
                onclick="insertTextMutation('--')">
                    ${getInfobox("Puts strikethrough -- tags around selected text")}
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <g>
                    <path fill="none" d="M0 0h24v24H0z"/>
                    <path d="M17.154 14c.23.516.346 1.09.346 1.72 0 1.342-.524 2.392-1.571 3.147C14.88 19.622 13.433 20 11.586 20c-1.64 0-3.263-.381-4.87-1.144V16.6c1.52.877 3.075 1.316 4.666 1.316 2.551 0 3.83-.732 3.839-2.197a2.21 2.21 0 0 0-.648-1.603l-.12-.117H3v-2h18v2h-3.846zm-4.078-3H7.629a4.086 4.086 0 0 1-.481-.522C6.716 9.92 6.5 9.246 6.5 8.452c0-1.236.466-2.287 1.397-3.153C8.83 4.433 10.271 4 12.222 4c1.471 0 2.879.328 4.222.984v2.152c-1.2-.687-2.515-1.03-3.946-1.03-2.48 0-3.719.782-3.719 2.346 0 .42.218.786.654 1.099.436.313.974.562 1.613.75.62.18 1.297.414 2.03.699z"/>
                    </g>
                    </svg>
                </div>
                <div class="-main-sidebar-toolbar2-button -button-animation" onmouseenter="toggleInfobox(this, 'enter')" onmouseleave="toggleInfobox(this, 'leave')">
                    <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M18 5a1 1 0 100-2H2a1 1 0 000 2h16zm0 4a1 1 0 100-2H2a1 1 0 100 2h16zm1 3a1 1 0 01-1 1H2a1 1 0 110-2h16a1 1 0 011 1zm-1 5a1 1 0 100-2H2a1 1 0 100 2h16z"/>
                    </svg>
                </div>
                <div class="-main-sidebar-toolbar2-button -button-animation" onmouseenter="toggleInfobox(this, 'enter')" onmouseleave="toggleInfobox(this, 'leave')">
                    ${getInfobox("Change font of selected text")}
                    <svg width="1.1rem" height="1.1rem" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0h16v4h-2V2H9v12h3v2H4v-2h3V2H2v2H0V2z" fill-rule="evenodd"/>
                    </svg>
                </div>
                <div class="-main-sidebar-toolbar2-button -button-animation -color" onmouseenter="toggleInfobox(this, 'enter')" onmouseleave="toggleInfobox(this, 'leave')"
                onclick="handleColorChange()">
                ${getInfobox("Change font color of selected text")}
                    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--gis" preserveAspectRatio="xMidYMid meet"><path d="M44.55 10.526C18.234 10.526 0 31.58 0 42.106s5.263 18.42 15.79 18.42c10.526 0 15.789 2.632 15.789 10.527c0 10.526 7.895 18.42 18.421 18.42c34.21 0 50-18.42 50-36.841c0-31.58-23.87-42.106-55.45-42.106zm-7.024 10.527a6.58 6.58 0 1 1 0 13.158a6.58 6.58 0 0 1 0-13.158zm21.053 0a6.58 6.58 0 1 1 0 13.158a6.58 6.58 0 0 1 0-13.158zm19.053 10.526a6.579 6.579 0 1 1 0 13.158a6.579 6.579 0 0 1 0-13.158zm-58.527 1.263a6.58 6.58 0 1 1 0 13.158a6.58 6.58 0 0 1 0-13.158zM54 63.158a7.895 7.895 0 0 1 7.895 7.895c0 4.36-5.535 7.894-9.895 7.894a7.895 7.895 0 0 1-7.895-7.894c0-4.36 5.535-7.895 9.895-7.895z"></path></svg>
                </div>
                <div class="-main-sidebar-toolbar2-button -button-animation" onmouseenter="toggleInfobox(this, 'enter')" onmouseleave="toggleInfobox(this, 'leave')">
                    ${getInfobox("Change font size of selected text")}
                    <svg viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M2.78233 2.21707C2.70732 2.14206 2.60557 2.09991 2.49949 2.09991C2.3934 2.09991 2.29166 2.14206 2.21664 2.21707L0.216645 4.21707C0.0604351 4.37328 0.0604351 4.62655 0.216645 4.78276C0.372855 4.93897 0.626121 4.93897 0.78233 4.78276L2.09949 3.4656L2.09949 11.5342L0.78233 10.2171C0.62612 10.0609 0.372854 10.0609 0.216645 10.2171C0.0604349 10.3733 0.0604349 10.6265 0.216645 10.7828L2.21664 12.7828C2.29166 12.8578 2.3934 12.8999 2.49949 12.8999C2.60557 12.8999 2.70731 12.8578 2.78233 12.7828L4.78233 10.7828C4.93854 10.6265 4.93854 10.3733 4.78233 10.2171C4.62612 10.0609 4.37285 10.0609 4.21664 10.2171L2.89949 11.5342L2.89949 3.4656L4.21664 4.78276C4.37285 4.93897 4.62612 4.93897 4.78233 4.78276C4.93854 4.62655 4.93854 4.37328 4.78233 4.21707L2.78233 2.21707ZM10.5 2.74997C10.7107 2.74997 10.8988 2.88211 10.9703 3.08036L13.9703 11.3999C14.064 11.6597 13.9293 11.9462 13.6696 12.0399C13.4098 12.1336 13.1233 11.9989 13.0296 11.7392L12.0477 9.016H8.95228L7.97033 11.7392C7.87666 11.9989 7.59013 12.1336 7.33036 12.0399C7.07059 11.9462 6.93595 11.6597 7.02962 11.3999L10.0296 3.08036C10.1011 2.88211 10.2892 2.74997 10.5 2.74997ZM10.5 4.72396L11.7412 8.166H9.25879L10.5 4.72396Z"
                        />
                    </svg>
                </div>
            </div>
            </div>
            <div class='-main-note-body'>
                ${e}
            </div>
        `,selectedNoteId=allNotes[t].id,processVirtualDisplay(allNotes[t].body);var o=document.querySelector(".-color"),n=new P({parent:o,color:"var(--accent-color)",cancelButton:!0});n.onDone=function(s){mutateColor(s.hex)};try{let l=function(u,f,h){const b=u[f];return u.splice(f,1),u.splice(h,0,b),u};var i=l;let s=document.querySelector(".-drag-virtual"),c=[],a=0;s.addEventListener("mousedown",function(u){console.log("INITIATE"),a=u.clientY,c=[];for(let f of allNotes){let h=document.querySelectorAll(`[data-noteid='${f.id}']`)[0].getBoundingClientRect();c.push((h.top+h.bottom)/2)}window.addEventListener("mousemove",d),window.addEventListener("mouseup",p)});const d=u=>{a=u.clientY,console.log("HANDLED");for(let f in c)if(a<c[f]){allNotes=l(allNotes,allNotes.findIndex(h=>h.id==selectedNoteId),f),moveStarredToTop(),renderNotes();break}},p=u=>{saveAllNotes(),renderSelectedNote(),window.removeEventListener("mousemove",d),window.removeEventListener("mouseup",p)}}catch{}}};window.getNoteElement=t=>{let r=[],e=[];return e[0]=t.selected?`<div class="-main-sidebar-note-buttons">
            <div class="-main-sidebar-note-buttons-button -button-animation" 
                onclick="deleteNote('${t.id}')">
                <svg xmlns="http://www.w3.org/2000/svg" width="1.1rem" height="1.1rem" viewBox="0 0 16 16"> <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/> <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/> </svg>
            </div>
            <div class="-main-sidebar-note-buttons-button -button-animation"
                onclick="toggleStarred('${t.id}')">
                <svg height="1.1rem" width="1.1rem" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
                viewBox="0 0 473.486 473.486" xml:space="preserve" ${t.starred&&'fill="var(--accent-color)"'}>
                    <polygon points="473.486,182.079 310.615,157.952 235.904,11.23 162.628,158.675 0,184.389 117.584,299.641 91.786,462.257 
                    237.732,386.042 384.416,460.829 357.032,298.473 "/>
                </svg>
            </div>
            <div class="-main-sidebar-note-buttons-button -button-animation">
                <svg width="1.1rem" height="1.1rem" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.00001 5V8.00415C7.50208 8.01124 7.05704 8.03041 6.67222 8.08214C6.0167 8.17028 5.38835 8.36902 4.87869 8.87868C4.36902 9.38835 4.17028 10.0167 4.08215 10.6722C3.99991 11.2839 3.99995 12.0477 4 12.9342V17.0658C3.99995 17.9523 3.99991 18.7161 4.08215 19.3278C4.17028 19.9833 4.36902 20.6117 4.87869 21.1213C5.38835 21.631 6.0167 21.8297 6.67222 21.9179C7.28387 22.0001 8.0477 22.0001 8.93417 22H15.0659C15.9523 22.0001 16.7161 22.0001 17.3278 21.9179C17.9833 21.8297 18.6117 21.631 19.1213 21.1213C19.631 20.6117 19.8297 19.9833 19.9179 19.3278C20.0001 18.7161 20.0001 17.9523 20 17.0658V12.9342C20.0001 12.0477 20.0001 11.2839 19.9179 10.6722C19.8297 10.0167 19.631 9.38835 19.1213 8.87868C18.6117 8.36902 17.9833 8.17028 17.3278 8.08215C16.943 8.03041 16.4979 8.01124 16 8.00415V5C16 3.34315 14.6569 2 13 2H11C9.34316 2 8.00001 3.34315 8.00001 5ZM11 4C10.4477 4 10 4.44772 10 5V8L14 8V5C14 4.44772 13.5523 4 13 4H11ZM12 13C10.8954 13 10 13.8954 10 15C10 16.1046 10.8954 17 12 17C13.1046 17 14 16.1046 14 15C14 13.8954 13.1046 13 12 13Z"/>
                </svg>
            </div>
            <div class="-main-sidebar-note-buttons-button -button-animation -alarm">
                <div class="-alarm-popup"></div>
                <svg width="1.1rem" height="1.1rem" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" fill="var(--submain-color)" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM14.4453 14.8321C14.9048 15.1384 15.5257 15.0142 15.8321 14.5547C16.1384 14.0952 16.0142 13.4743 15.5547 13.1679L13 11.4648V7C13 6.44772 12.5523 6 12 6C11.4477 6 11 6.44772 11 7V11.5V11.5196C11 12.1541 11.3171 12.7466 11.8451 13.0986L14.4453 14.8321Z"/>
                <path fill-rule="evenodd" clip-rule="evenodd" fill="var(--submain-color)" d="M4.70711 2.29289C5.09763 2.68342 5.09763 3.31658 4.70711 3.70711L3.70711 4.70711C3.31658 5.09763 2.68342 5.09763 2.29289 4.70711C1.90237 4.31658 1.90237 3.68342 2.29289 3.29289L3.29289 2.29289C3.68342 1.90237 4.31658 1.90237 4.70711 2.29289Z"/>
                <path fill-rule="evenodd" clip-rule="evenodd" fill="var(--submain-color)" d="M19.2929 2.29289C18.9024 2.68342 18.9024 3.31658 19.2929 3.70711L20.2929 4.70711C20.6834 5.09763 21.3166 5.09763 21.7071 4.70711C22.0976 4.31658 22.0976 3.68342 21.7071 3.29289L20.7071 2.29289C20.3166 1.90237 19.6834 1.90237 19.2929 2.29289Z"/>
                </svg>
            </div>
        </div>`:"",e[1]=t.selected?`
            <div class="-main-note-card-draghandle">
                <div class="-drag-virtual"></div>
                <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                    width="5rem" height="5rem" style="margin-top: -2.4rem; position: absolute" viewBox="0 0 700.000000 700.000000"
                    preserveAspectRatio="xMidYMid meet">
                <g transform="translate(0.000000,700.000000) scale(0.100000,-0.100000)"
                fill="var(--sub-submain-color)" stroke="none">
                <path d="M149 3741 c-39 -40 -39 -82 0 -122 20 -20 39 -29 61 -29 43 0 90 47
                90 90 0 43 -47 90 -90 90 -22 0 -41 -9 -61 -29z"/>
                <path d="M689 3741 c-20 -20 -29 -39 -29 -61 0 -43 47 -90 90 -90 43 0 90 47
                90 90 0 43 -47 90 -90 90 -22 0 -41 -9 -61 -29z"/>
                <path d="M1229 3741 c-20 -20 -29 -39 -29 -61 0 -43 47 -90 90 -90 43 0 90 47
                90 90 0 43 -47 90 -90 90 -22 0 -41 -9 -61 -29z"/>
                <path d="M1769 3741 c-20 -20 -29 -39 -29 -61 0 -43 47 -90 90 -90 43 0 90 47
                90 90 0 43 -47 90 -90 90 -22 0 -41 -9 -61 -29z"/>
                <path d="M5049 3741 c-20 -20 -29 -39 -29 -61 0 -43 47 -90 90 -90 43 0 90 47
                90 90 0 43 -47 90 -90 90 -22 0 -41 -9 -61 -29z"/>
                <path d="M5589 3741 c-20 -20 -29 -39 -29 -61 0 -43 47 -90 90 -90 43 0 90 47
                90 90 0 43 -47 90 -90 90 -22 0 -41 -9 -61 -29z"/>
                <path d="M6129 3741 c-20 -20 -29 -39 -29 -61 0 -43 47 -90 90 -90 43 0 90 47
                90 90 0 43 -47 90 -90 90 -22 0 -41 -9 -61 -29z"/>
                <path d="M6669 3741 c-20 -20 -29 -39 -29 -61 0 -43 47 -90 90 -90 43 0 90 47
                90 90 0 43 -47 90 -90 90 -22 0 -41 -9 -61 -29z"/>
                <path d="M2329 3731 c-20 -20 -29 -39 -29 -61 0 -43 47 -90 90 -90 43 0 90 47
                90 90 0 43 -47 90 -90 90 -22 0 -41 -9 -61 -29z"/>
                <path d="M2869 3731 c-20 -20 -29 -39 -29 -61 0 -43 47 -90 90 -90 22 0 41 9
                61 29 20 20 29 39 29 61 0 22 -9 41 -29 61 -20 20 -39 29 -61 29 -22 0 -41 -9
                -61 -29z"/>
                <path d="M3409 3731 c-20 -20 -29 -39 -29 -61 0 -43 47 -90 90 -90 22 0 41 9
                61 29 20 20 29 39 29 61 0 22 -9 41 -29 61 -20 20 -39 29 -61 29 -22 0 -41 -9
                -61 -29z"/>
                <path d="M3949 3731 c-20 -20 -29 -39 -29 -61 0 -43 47 -90 90 -90 22 0 41 9
                61 29 20 20 29 39 29 61 0 22 -9 41 -29 61 -20 20 -39 29 -61 29 -22 0 -41 -9
                -61 -29z"/>
                <path d="M4489 3731 c-20 -20 -29 -39 -29 -61 0 -43 47 -90 90 -90 22 0 41 9
                61 29 20 20 29 39 29 61 0 22 -9 41 -29 61 -20 20 -39 29 -61 29 -22 0 -41 -9
                -61 -29z"/>
                <path d="M419 3421 c-20 -20 -29 -39 -29 -61 0 -43 47 -90 90 -90 43 0 90 47
                90 90 0 43 -47 90 -90 90 -22 0 -41 -9 -61 -29z"/>
                <path d="M959 3421 c-20 -20 -29 -39 -29 -61 0 -43 47 -90 90 -90 43 0 90 47
                90 90 0 43 -47 90 -90 90 -22 0 -41 -9 -61 -29z"/>
                <path d="M1499 3421 c-20 -20 -29 -39 -29 -61 0 -43 47 -90 90 -90 43 0 90 47
                90 90 0 43 -47 90 -90 90 -22 0 -41 -9 -61 -29z"/>
                <path d="M5319 3421 c-20 -20 -29 -39 -29 -61 0 -43 47 -90 90 -90 43 0 90 47
                90 90 0 43 -47 90 -90 90 -22 0 -41 -9 -61 -29z"/>
                <path d="M5859 3421 c-20 -20 -29 -39 -29 -61 0 -43 47 -90 90 -90 43 0 90 47
                90 90 0 43 -47 90 -90 90 -22 0 -41 -9 -61 -29z"/>
                <path d="M6399 3421 c-20 -20 -29 -39 -29 -61 0 -43 47 -90 90 -90 43 0 90 47
                90 90 0 43 -47 90 -90 90 -22 0 -41 -9 -61 -29z"/>
                <path d="M2059 3411 c-20 -20 -29 -39 -29 -61 0 -43 47 -90 90 -90 43 0 90 47
                90 90 0 43 -47 90 -90 90 -22 0 -41 -9 -61 -29z"/>
                <path d="M2599 3411 c-20 -20 -29 -39 -29 -61 0 -43 47 -90 90 -90 22 0 41 9
                61 29 20 20 29 39 29 61 0 22 -9 41 -29 61 -20 20 -39 29 -61 29 -22 0 -41 -9
                -61 -29z"/>
                <path d="M3139 3411 c-20 -20 -29 -39 -29 -61 0 -43 47 -90 90 -90 22 0 41 9
                61 29 20 20 29 39 29 61 0 22 -9 41 -29 61 -20 20 -39 29 -61 29 -22 0 -41 -9
                -61 -29z"/>
                <path d="M3679 3411 c-20 -20 -29 -39 -29 -61 0 -43 47 -90 90 -90 22 0 41 9
                61 29 20 20 29 39 29 61 0 22 -9 41 -29 61 -20 20 -39 29 -61 29 -22 0 -41 -9
                -61 -29z"/>
                <path d="M4219 3411 c-20 -20 -29 -39 -29 -61 0 -43 47 -90 90 -90 22 0 41 9
                61 29 20 20 29 39 29 61 0 22 -9 41 -29 61 -20 20 -39 29 -61 29 -22 0 -41 -9
                -61 -29z"/>
                <path d="M4759 3411 c-20 -20 -29 -39 -29 -61 0 -43 47 -90 90 -90 22 0 41 9
                61 29 20 20 29 39 29 61 0 22 -9 41 -29 61 -20 20 -39 29 -61 29 -22 0 -41 -9
                -61 -29z"/>
                </g>
                </svg>
           
            </div>
        `:"",t.starred?r.push(`
                        ${e[1]}
                        <div style="display:flex;width:100%;justify-content:space-between;align-items:center">
                            <svg fill="var(--accent-color)" height="1.1rem" width="1.1rem" style="margin-right:0.2rem" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
                            viewBox="0 0 473.486 473.486" xml:space="preserve">
                                <polygon points="473.486,182.079 310.615,157.952 235.904,11.23 162.628,158.675 0,184.389 117.584,299.641 91.786,462.257 
                                237.732,386.042 384.416,460.829 357.032,298.473 "/>
                            </svg>
                            <h2
                                style="${t.selected&&"color: var(--accent-color); letter-spacing: 0.1rem;"}"
                                class="-starred-title"
                            >${t.title}</h2>
                        </div>
                        <p
                            ${t.selected&&'style="color: var(--submain-color); margin-left: -1rem"'}
                        >${t.body}</p>
                        <p class="-main-sidebar-note-card-time">${t.date}</p>
                        ${e[0]}
            `):r.push(`
                        ${e[1]}
                        <h2
                        ${t.selected&&'style="color: var(--accent-color); letter-spacing: 0.1rem; margin-left: -1rem"'}
                        >${t.title}</h2>
                        <p
                            ${t.selected&&'style="color: var(--submain-color); margin-left: -1rem"'}
                        >${t.body}</p>
                        <p class="-main-sidebar-note-card-time">${t.date}</p>
                        ${e[0]}
            `),r[0]};window.renderNotes=(t=!1)=>{let r=document.querySelector(".-main-sidebar-notes");r.innerHTML="";let e=[];for(let o of allNotes)o.starred?e.push(`
                <div 
                    class="
                        -main-sidebar-note-card 
                        ${o.selected&&t&&"cardSelectAnimation"} 
                        ${o.id===lastSelectedNoteId&&t&&"cardDeselectAnimation"}
                        ${o.selected&&!t&&"card-selected"}
                    "
                    data-noteid="${o.id}"
                    onmouseenter="mouseEnterStyles(this)"
                    onmouseleave="mouseLeaveStyles(this)"
                    onclick="selectNote(this)"
                >
                    ${getNoteElement(o)}
                </div>
            `):e.push(`
                <div class="
                        -main-sidebar-note-card 
                        ${o.selected&&t&&"cardSelectAnimation"} 
                        ${o.selected&&!t&&"card-selected"}
                        ${o.id===lastSelectedNoteId&&t&&"cardDeselectAnimation"}
                    "
                    data-noteid="${o.id}"
                    onmouseenter="mouseEnterStyles(this)"
                    onmouseleave="mouseLeaveStyles(this)"
                    onclick="selectNote(this)"
                >
                    ${getNoteElement(o)}
                </div>
            `);for(let o of e)r.innerHTML+=o};window.idGenerator=()=>Math.trunc(Math.random()*1e14).toString(32);window.getCurrentDate=()=>{const t=new Date,r=t.getDate().toString().padStart(2,"0"),e=(t.getMonth()+1).toString().padStart(2,"0"),o=t.getFullYear().toString(),n=t.getHours().toString().padStart(2,"0"),i=t.getMinutes().toString().padStart(2,"0");return`${n}:${i} ${r}/${e}/${o}`};window.mouseEnterStyles=t=>{if(t.dataset.noteid===selectedNoteId)return;let r=document.querySelector(`[data-noteid="${t.dataset.noteid}"] h2`),e=document.querySelector(`[data-noteid="${t.dataset.noteid}"] p`);r.style.color="var(--accent-color)",r.style.letterSpacing="1px",e.style.color="var(--accent-color)"};window.mouseLeaveStyles=t=>{if(t.dataset.noteid===selectedNoteId)return;let r=document.querySelector(`[data-noteid="${t.dataset.noteid}"] h2`),e=document.querySelector(`[data-noteid="${t.dataset.noteid}"] p`);r.style.color="var(--submain-color)",r.style.letterSpacing="0px",e.style.color="var(--sub-submain-color)"};window.sampleNote=t=>({title:"New title",body:"Beggining of a new note",bodyPreview:"Beggining of a new note",id:t,selected:!1,date:getCurrentDate(),starred:!1});window.allNotes=JSON.parse(localStorage.getItem("allNotes"))||[{title:"Welcome",body:"Welcome to Noteplace. Start by creating a note",id:idGenerator()}];window.selectedNoteId="";window.lastSelectedNoteId="";window.editMode=!1;let $=!1;window.getInfobox=t=>`<div class="-infobox-wrapper">
        ⏶
        <div class="-infobox">
            ${t}
        </div>
    </div>`;const V=t=>({start:t.selectionStart,end:t.selectionEnd});window.handleColorChange=()=>{};window.mutateColor=t=>{function r(e,o,n){const i=e.slice(0,o),s=e.slice(o);return i+n+s}try{if(elementContainsSelection(document.querySelector(".-main-note-body"))){const e=t.length==9?t.slice(1,7):t.slice(1),o=allNotes.findIndex(i=>i.id==selectedNoteId),n=V(document.querySelector(".-main-note-body-textarea"));allNotes[o].body=r(allNotes[o].body,n.start,`⎊${e}`),allNotes[o].body=r(allNotes[o].body,n.end+e.length+1,"⎊"),bodyProcessor({value:allNotes[o].body},o),renderSelectedNote(),reRenderNote(o),saveAllNotes()}}catch(e){console.log(e)}};window.insertTextMutation=t=>{function r(e,o,n){const i=e.slice(0,o),s=e.slice(o);return i+n+s}try{if(elementContainsSelection(document.querySelector(".-main-note-body"))){const e=allNotes.findIndex(n=>n.id==selectedNoteId),o=V(document.querySelector(".-main-note-body-textarea"));allNotes[e].body=r(allNotes[e].body,o.start,t),allNotes[e].body=r(allNotes[e].body,o.end+t.length,t),bodyProcessor({value:allNotes[e].body},e),renderSelectedNote(),reRenderNote(e),saveAllNotes()}}catch{}};window.elementContainsSelection=t=>{var r=window.getSelection();if(r.rangeCount>0){for(var e=0;e<r.rangeCount;++e)if(!t.contains(r.getRangeAt(e).commonAncestorContainer))return!1;return!0}return!1};window.getSelectionText=()=>{var t="";return window.getSelection?t=window.getSelection().toString():document.selection&&document.selection.type!="Control"&&(t=document.selection.createRange().text),t};window.moveStarredToTop=()=>{let t=[],r=[];for(let e in allNotes)allNotes[e].starred?t.push(allNotes[e]):r.push(allNotes[e]);allNotes=[...t,...r]};window.reRenderNote=t=>{let r=document.querySelector(".-main-sidebar-notes"),e=getNoteElement(allNotes[t]);r.children[t].innerHTML=e};window.saveAllNotes=()=>{localStorage.setItem("allNotes",JSON.stringify(allNotes))};window.deleteNote=async t=>{await document.querySelectorAll(`[data-noteid='${t}']`)[0].animate([{transform:"translateX(0)",opacity:"1"},{transform:"translateX(-3vw)",opacity:"0"}],{duration:200,iterations:1,easing:"ease-in-out"}).finished,selectedNoteId="",lastSelectedNoteId="",allNotes.splice(allNotes.findIndex(e=>e.id==t),1),renderNotes(),renderSelectedNote(),saveAllNotes()};window.deleteNotes=(t=null)=>{debugger;if(t){for(let r of t)selectedNoteId==r&&(selectedNoteId="",lastSelectedNoteId=""),allNotes.splice(allNotes.findIndex(e=>e.id==r),1);renderNotes(),renderSelectedNote()}};window.updateSelectedNote=(t,r,e)=>{let o=allNotes.findIndex(i=>i.id===r),n=t.value.replaceAll("<","<​");allNotes[o][e]=`${n}`,e=="body"&&(processVirtualDisplay(n),bodyProcessor(t,o)),reRenderNote(o),saveAllNotes()};window.isValidHex=t=>!(t.length!==6||!/^[0-9A-Fa-f]+$/.test(t));window.processVirtualDisplay=t=>{try{document.querySelector(".-main-note-virtual").innerHTML="";let r=getComputedStyle(document.body),e=r.getPropertyValue("--accent-color"),o=r.getPropertyValue("--main-color");const n=l=>{const d=new RegExp("(⎊.{6})","g");let p=1;return l.replace(d,u=>(p++,p%2===0?`<span style="color:${e}">${isValidHex(u.slice(1))?`${u[0]}</span><span style="color:#${u.slice(1)};text-shadow:#${u.slice(1)} 0px 0px 2px">${u.slice(1)}</span>`:`${u[0]}</span>${u.slice(1)}`}`:u))},i=`<span style="color:${e};filter:invert(1)">`,s=`<span style="color:${e}">`,c="</span>";let a=t;a=replaceEveryOther(a,"\\-\\-",i+"--"+c),a=a.replaceAll("--",s+"--"+c),a=replaceEveryOther(a,"\\*\\*",i+"**"+c),a=a.replaceAll("**",s+"**"+c),a=replaceEveryOther(a,"\\^\\^",i+"^^"+c),a=a.replaceAll("^^",s+"^^"+c),a=replaceEveryOther(a,"\\_\\_",i+"__"+c),a=a.replaceAll("__",s+"__"+c),a=replaceEveryOther(a,"⎊",i+"⎊"+c),a=n(a),document.querySelector(".-main-note-virtual").innerHTML=a}catch{}};window.flushSelected=()=>{for(let t of allNotes)t.selected=!1};window.selectNote=t=>{if(selectedNoteId!==t.dataset.noteid){lastSelectedNoteId=selectedNoteId;for(let r of allNotes)r.id!==t.dataset.noteid?r.selected=!1:r.selected=!0;editMode=!1,renderNotes(!0),renderSelectedNote()}};window.selectNoteWithID=t=>{lastSelectedNoteId=selectedNoteId,flushSelected(),allNotes[allNotes.findIndex(r=>r.id==t)].selected=!0,editMode=!1,renderNotes(!0),renderSelectedNote()};window.createNewNote=()=>{const t=idGenerator();let r=0;for(let n in allNotes)if(!allNotes[n].starred){r=n;break}let e=allNotes.slice(0,r);allNotes.splice(0,r);let o=allNotes;allNotes.unshift(sampleNote(t)),allNotes=[...e,...o],selectNoteWithID(t),saveAllNotes()};window.toggleStarred=t=>{const r=allNotes.findIndex(e=>e.id==t);allNotes[r].starred=!allNotes[r].starred,moveStarredToTop(),renderNotes(),renderSelectedNote(),saveAllNotes()};window.toggleEditMode=()=>{editMode=!editMode,renderSelectedNote()};let A;window.toggleInfobox=(t,r)=>{r==="enter"?($=!0,A=setTimeout(()=>{$&&(t.querySelector(".-infobox-wrapper").style.display="block")},500)):($=!1,clearTimeout(A),t.querySelector(".-infobox-wrapper").style.display="none")};let R=0,q=document.querySelector(".-main-sidebar"),B=document.querySelector(".-main-note"),F,W;document.querySelector(".-resizer-notch").addEventListener("mousedown",function(t){R=t.clientX,W=B.clientWidth,F=q.clientWidth,window.addEventListener("mousemove",Z),window.addEventListener("mouseup",Y)});const Z=t=>{const r=R-t.clientX;q.style.width=`${F-r}px`,B.style.width=`${W+r}px`},Y=t=>{window.removeEventListener("mousemove",Z),window.removeEventListener("mouseup",Y)};window.replaceEveryOtherColor=t=>{const r=new RegExp("(⎊(?:(?!⎊).){0,6})","g");let e=1;return t.replace(r,o=>(e++,e%2===0?`<span style="color:#${isValidHex(o.slice(1))?o.slice(1):"FFFFFF"}">`:o))};window.replaceEveryOther=(t,r,e)=>{let o=0;return t.replace(new RegExp(r,"g"),n=>(o++,o%2===0?e:n))};window.bodyProcessor=(t,r)=>{let e=t.value;(function(){e=e.replaceAll("<","<​"),e=e.replaceAll(`
`,"<br>")})(),e=replaceEveryOtherColor(e),e=e.replaceAll("⎊","</span>"),e=replaceEveryOther(e,"\\*\\*","</b>"),e=e.replaceAll("**","<b>"),e=replaceEveryOther(e,"\\^\\^","</i>"),e=e.replaceAll("^^","<i>"),e=replaceEveryOther(e,"\\_\\_","</u>"),e=e.replaceAll("__","<u>"),e=replaceEveryOther(e,"\\-\\-","</s>"),e=e.replaceAll("--","<s>"),allNotes[r].bodyPreview=e};for(let t in allNotes)bodyProcessor({value:allNotes[t].body},t);moveStarredToTop();renderNotes();renderSelectedNote();
