`// ==UserScript==
// @id             google_hover_zoom
// @name           Google+ Hover Zoom
// @description    Enlarge thumbnails & profile icons on mouse hover. Display pictures in comments directly. Download albums quickly.
// @author         SkyArrow
// @website        http://userscripts.org/scripts/show/106681
// @namespace      http://zespia.tw
// @version        1.4
// @license        MIT License
// @include        https://plus.google.com/*
// @exclude        https://plus.google.com/ripples/*
// ==/UserScript==

/*! jQuery v1.7.1 jquery.com | jquery.org/license */
(function(a,b){function cy(a){return f.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}function cv(a){if(!ck[a]){var b=c.body,d=f("<"+a+">").appendTo(b),e=d.css("display");d.remove();if(e==="none"||e===""){cl||(cl=c.createElement("iframe"),cl.frameBorder=cl.width=cl.height=0),b.appendChild(cl);if(!cm||!cl.createElement)cm=(cl.contentWindow||cl.contentDocument).document,cm.write((c.compatMode==="CSS1Compat"?"<!doctype html>":"")+"<html><body>"),cm.close();d=cm.createElement(a),cm.body.appendChild(d),e=f.css(d,"display"),b.removeChild(cl)}ck[a]=e}return ck[a]}function cu(a,b){var c={};f.each(cq.concat.apply([],cq.slice(0,b)),function(){c[this]=a});return c}function ct(){cr=b}function cs(){setTimeout(ct,0);return cr=f.now()}function cj(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function ci(){try{return new a.XMLHttpRequest}catch(b){}}function cc(a,c){a.dataFilter&&(c=a.dataFilter(c,a.dataType));var d=a.dataTypes,e={},g,h,i=d.length,j,k=d[0],l,m,n,o,p;for(g=1;g<i;g++){if(g===1)for(h in a.converters)typeof h=="string"&&(e[h.toLowerCase()]=a.converters[h]);l=k,k=d[g];if(k==="*")k=l;else if(l!=="*"&&l!==k){m=l+" "+k,n=e[m]||e["* "+k];if(!n){p=b;for(o in e){j=o.split(" ");if(j[0]===l||j[0]==="*"){p=e[j[1]+" "+k];if(p){o=e[o],o===!0?n=p:p===!0&&(n=o);break}}}}!n&&!p&&f.error("No conversion from "+m.replace(" "," to ")),n!==!0&&(c=n?n(c):p(o(c)))}}return c}function cb(a,c,d){var e=a.contents,f=a.dataTypes,g=a.responseFields,h,i,j,k;for(i in g)i in d&&(c[g[i]]=d[i]);while(f[0]==="*")f.shift(),h===b&&(h=a.mimeType||c.getResponseHeader("content-type"));if(h)for(i in e)if(e[i]&&e[i].test(h)){f.unshift(i);break}if(f[0]in d)j=f[0];else{for(i in d){if(!f[0]||a.converters[i+" "+f[0]]){j=i;break}k||(k=i)}j=j||k}if(j){j!==f[0]&&f.unshift(j);return d[j]}}function ca(a,b,c,d){if(f.isArray(b))f.each(b,function(b,e){c||bE.test(a)?d(a,e):ca(a+"["+(typeof e=="object"||f.isArray(e)?b:"")+"]",e,c,d)});else if(!c&&b!=null&&typeof b=="object")for(var e in b)ca(a+"["+e+"]",b[e],c,d);else d(a,b)}function b_(a,c){var d,e,g=f.ajaxSettings.flatOptions||{};for(d in c)c[d]!==b&&((g[d]?a:e||(e={}))[d]=c[d]);e&&f.extend(!0,a,e)}function b$(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h=a[f],i=0,j=h?h.length:0,k=a===bT,l;for(;i<j&&(k||!l);i++)l=h[i](c,d,e),typeof l=="string"&&(!k||g[l]?l=b:(c.dataTypes.unshift(l),l=b$(a,c,d,e,l,g)));(k||!l)&&!g["*"]&&(l=b$(a,c,d,e,"*",g));return l}function bZ(a){return function(b,c){typeof b!="string"&&(c=b,b="*");if(f.isFunction(c)){var d=b.toLowerCase().split(bP),e=0,g=d.length,h,i,j;for(;e<g;e++)h=d[e],j=/^\+/.test(h),j&&(h=h.substr(1)||"*"),i=a[h]=a[h]||[],i[j?"unshift":"push"](c)}}}function bC(a,b,c){var d=b==="width"?a.offsetWidth:a.offsetHeight,e=b==="width"?bx:by,g=0,h=e.length;if(d>0){if(c!=="border")for(;g<h;g++)c||(d-=parseFloat(f.css(a,"padding"+e[g]))||0),c==="margin"?d+=parseFloat(f.css(a,c+e[g]))||0:d-=parseFloat(f.css(a,"border"+e[g]+"Width"))||0;return d+"px"}d=bz(a,b,b);if(d<0||d==null)d=a.style[b]||0;d=parseFloat(d)||0;if(c)for(;g<h;g++)d+=parseFloat(f.css(a,"padding"+e[g]))||0,c!=="padding"&&(d+=parseFloat(f.css(a,"border"+e[g]+"Width"))||0),c==="margin"&&(d+=parseFloat(f.css(a,c+e[g]))||0);return d+"px"}function bp(a,b){b.src?f.ajax({url:b.src,async:!1,dataType:"script"}):f.globalEval((b.text||b.textContent||b.innerHTML||"").replace(bf,"/*$0*/")),b.parentNode&&b.parentNode.removeChild(b)}function bo(a){var b=c.createElement("div");bh.appendChild(b),b.innerHTML=a.outerHTML;return b.firstChild}function bn(a){var b=(a.nodeName||"").toLowerCase();b==="input"?bm(a):b!=="script"&&typeof a.getElementsByTagName!="undefined"&&f.grep(a.getElementsByTagName("input"),bm)}function bm(a){if(a.type==="checkbox"||a.type==="radio")a.defaultChecked=a.checked}function bl(a){return typeof a.getElementsByTagName!="undefined"?a.getElementsByTagName("*"):typeof a.querySelectorAll!="undefined"?a.querySelectorAll("*"):[]}function bk(a,b){var c;if(b.nodeType===1){b.clearAttributes&&b.clearAttributes(),b.mergeAttributes&&b.mergeAttributes(a),c=b.nodeName.toLowerCase();if(c==="object")b.outerHTML=a.outerHTML;else if(c!=="input"||a.type!=="checkbox"&&a.type!=="radio"){if(c==="option")b.selected=a.defaultSelected;else if(c==="input"||c==="textarea")b.defaultValue=a.defaultValue}else a.checked&&(b.defaultChecked=b.checked=a.checked),b.value!==a.value&&(b.value=a.value);b.removeAttribute(f.expando)}}function bj(a,b){if(b.nodeType===1&&!!f.hasData(a)){var c,d,e,g=f._data(a),h=f._data(b,g),i=g.events;if(i){delete h.handle,h.events={};for(c in i)for(d=0,e=i[c].length;d<e;d++)f.event.add(b,c+(i[c][d].namespace?".":"")+i[c][d].namespace,i[c][d],i[c][d].data)}h.data&&(h.data=f.extend({},h.data))}}function bi(a,b){return f.nodeName(a,"table")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function U(a){var b=V.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}function T(a,b,c){b=b||0;if(f.isFunction(b))return f.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return f.grep(a,function(a,d){return a===b===c});if(typeof b=="string"){var d=f.grep(a,function(a){return a.nodeType===1});if(O.test(b))return f.filter(b,d,!c);b=f.filter(b,d)}return f.grep(a,function(a,d){return f.inArray(a,b)>=0===c})}function S(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function K(){return!0}function J(){return!1}function n(a,b,c){var d=b+"defer",e=b+"queue",g=b+"mark",h=f._data(a,d);h&&(c==="queue"||!f._data(a,e))&&(c==="mark"||!f._data(a,g))&&setTimeout(function(){!f._data(a,e)&&!f._data(a,g)&&(f.removeData(a,d,!0),h.fire())},0)}function m(a){for(var b in a){if(b==="data"&&f.isEmptyObject(a[b]))continue;if(b!=="toJSON")return!1}return!0}function l(a,c,d){if(d===b&&a.nodeType===1){var e="data-"+c.replace(k,"-$1").toLowerCase();d=a.getAttribute(e);if(typeof d=="string"){try{d=d==="true"?!0:d==="false"?!1:d==="null"?null:f.isNumeric(d)?parseFloat(d):j.test(d)?f.parseJSON(d):d}catch(g){}f.data(a,c,d)}else d=b}return d}function h(a){var b=g[a]={},c,d;a=a.split(/\s+/);for(c=0,d=a.length;c<d;c++)b[a[c]]=!0;return b}var c=a.document,d=a.navigator,e=a.location,f=function(){function J(){if(!e.isReady){try{c.documentElement.doScroll("left")}catch(a){setTimeout(J,1);return}e.ready()}}var e=function(a,b){return new e.fn.init(a,b,h)},f=a.jQuery,g=a.$,h,i=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,j=/\S/,k=/^\s+/,l=/\s+$/,m=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,n=/^[\],:{}\s]*$/,o=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,p=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,q=/(?:^|:|,)(?:\s*\[)+/g,r=/(webkit)[ \/]([\w.]+)/,s=/(opera)(?:.*version)?[ \/]([\w.]+)/,t=/(msie) ([\w.]+)/,u=/(mozilla)(?:.*? rv:([\w.]+))?/,v=/-([a-z]|[0-9])/ig,w=/^-ms-/,x=function(a,b){return(b+"").toUpperCase()},y=d.userAgent,z,A,B,C=Object.prototype.toString,D=Object.prototype.hasOwnProperty,E=Array.prototype.push,F=Array.prototype.slice,G=String.prototype.trim,H=Array.prototype.indexOf,I={};e.fn=e.prototype={constructor:e,init:function(a,d,f){var g,h,j,k;if(!a)return this;if(a.nodeType){this.context=this[0]=a,this.length=1;return this}if(a==="body"&&!d&&c.body){this.context=c,this[0]=c.body,this.selector=a,this.length=1;return this}if(typeof a=="string"){a.charAt(0)!=="<"||a.charAt(a.length-1)!==">"||a.length<3?g=i.exec(a):g=[null,a,null];if(g&&(g[1]||!d)){if(g[1]){d=d instanceof e?d[0]:d,k=d?d.ownerDocument||d:c,j=m.exec(a),j?e.isPlainObject(d)?(a=[c.createElement(j[1])],e.fn.attr.call(a,d,!0)):a=[k.createElement(j[1])]:(j=e.buildFragment([g[1]],[k]),a=(j.cacheable?e.clone(j.fragment):j.fragment).childNodes);return e.merge(this,a)}h=c.getElementById(g[2]);if(h&&h.parentNode){if(h.id!==g[2])return f.find(a);this.length=1,this[0]=h}this.context=c,this.selector=a;return this}return!d||d.jquery?(d||f).find(a):this.constructor(d).find(a)}if(e.isFunction(a))return f.ready(a);a.selector!==b&&(this.selector=a.selector,this.context=a.context);return e.makeArray(a,this)},selector:"",jquery:"1.7.1",length:0,size:function(){return this.length},toArray:function(){return F.call(this,0)},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var d=this.constructor();e.isArray(a)?E.apply(d,a):e.merge(d,a),d.prevObject=this,d.context=this.context,b==="find"?d.selector=this.selector+(this.selector?" ":"")+c:b&&(d.selector=this.selector+"."+b+"("+c+")");return d},each:function(a,b){return e.each(this,a,b)},ready:function(a){e.bindReady(),A.add(a);return this},eq:function(a){a=+a;return a===-1?this.slice(a):this.slice(a,a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(F.apply(this,arguments),"slice",F.call(arguments).join(","))},map:function(a){return this.pushStack(e.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:E,sort:[].sort,splice:[].splice},e.fn.init.prototype=e.fn,e.extend=e.fn.extend=function(){var a,c,d,f,g,h,i=arguments[0]||{},j=1,k=arguments.length,l=!1;typeof i=="boolean"&&(l=i,i=arguments[1]||{},j=2),typeof i!="object"&&!e.isFunction(i)&&(i={}),k===j&&(i=this,--j);for(;j<k;j++)if((a=arguments[j])!=null)for(c in a){d=i[c],f=a[c];if(i===f)continue;l&&f&&(e.isPlainObject(f)||(g=e.isArray(f)))?(g?(g=!1,h=d&&e.isArray(d)?d:[]):h=d&&e.isPlainObject(d)?d:{},i[c]=e.extend(l,h,f)):f!==b&&(i[c]=f)}return i},e.extend({noConflict:function(b){a.$===e&&(a.$=g),b&&a.jQuery===e&&(a.jQuery=f);return e},isReady:!1,readyWait:1,holdReady:function(a){a?e.readyWait++:e.ready(!0)},ready:function(a){if(a===!0&&!--e.readyWait||a!==!0&&!e.isReady){if(!c.body)return setTimeout(e.ready,1);e.isReady=!0;if(a!==!0&&--e.readyWait>0)return;A.fireWith(c,[e]),e.fn.trigger&&e(c).trigger("ready").off("ready")}},bindReady:function(){if(!A){A=e.Callbacks("once memory");if(c.readyState==="complete")return setTimeout(e.ready,1);if(c.addEventListener)c.addEventListener("DOMContentLoaded",B,!1),a.addEventListener("load",e.ready,!1);else if(c.attachEvent){c.attachEvent("onreadystatechange",B),a.attachEvent("onload",e.ready);var b=!1;try{b=a.frameElement==null}catch(d){}c.documentElement.doScroll&&b&&J()}}},isFunction:function(a){return e.type(a)==="function"},isArray:Array.isArray||function(a){return e.type(a)==="array"},isWindow:function(a){return a&&typeof a=="object"&&"setInterval"in a},isNumeric:function(a){return!isNaN(parseFloat(a))&&isFinite(a)},type:function(a){return a==null?String(a):I[C.call(a)]||"object"},isPlainObject:function(a){if(!a||e.type(a)!=="object"||a.nodeType||e.isWindow(a))return!1;try{if(a.constructor&&!D.call(a,"constructor")&&!D.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}var d;for(d in a);return d===b||D.call(a,d)},isEmptyObject:function(a){for(var b in a)return!1;return!0},error:function(a){throw new Error(a)},parseJSON:function(b){if(typeof b!="string"||!b)return null;b=e.trim(b);if(a.JSON&&a.JSON.parse)return a.JSON.parse(b);if(n.test(b.replace(o,"@").replace(p,"]").replace(q,"")))return(new Function("return "+b))();e.error("Invalid JSON: "+b)},parseXML:function(c){var d,f;try{a.DOMParser?(f=new DOMParser,d=f.parseFromString(c,"text/xml")):(d=new ActiveXObject("Microsoft.XMLDOM"),d.async="false",d.loadXML(c))}catch(g){d=b}(!d||!d.documentElement||d.getElementsByTagName("parsererror").length)&&e.error("Invalid XML: "+c);return d},noop:function(){},globalEval:function(b){b&&j.test(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(w,"ms-").replace(v,x)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,c,d){var f,g=0,h=a.length,i=h===b||e.isFunction(a);if(d){if(i){for(f in a)if(c.apply(a[f],d)===!1)break}else for(;g<h;)if(c.apply(a[g++],d)===!1)break}else if(i){for(f in a)if(c.call(a[f],f,a[f])===!1)break}else for(;g<h;)if(c.call(a[g],g,a[g++])===!1)break;return a},trim:G?function(a){return a==null?"":G.call(a)}:function(a){return a==null?"":(a+"").replace(k,"").replace(l,"")},makeArray:function(a,b){var c=b||[];if(a!=null){var d=e.type(a);a.length==null||d==="string"||d==="function"||d==="regexp"||e.isWindow(a)?E.call(c,a):e.merge(c,a)}return c},inArray:function(a,b,c){var d;if(b){if(H)return H.call(b,a,c);d=b.length,c=c?c<0?Math.max(0,d+c):c:0;for(;c<d;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,c){var d=a.length,e=0;if(typeof c.length=="number")for(var f=c.length;e<f;e++)a[d++]=c[e];else while(c[e]!==b)a[d++]=c[e++];a.length=d;return a},grep:function(a,b,c){var d=[],e;c=!!c;for(var f=0,g=a.length;f<g;f++)e=!!b(a[f],f),c!==e&&d.push(a[f]);return d},map:function(a,c,d){var f,g,h=[],i=0,j=a.length,k=a instanceof e||j!==b&&typeof j=="number"&&(j>0&&a[0]&&a[j-1]||j===0||e.isArray(a));if(k)for(;i<j;i++)f=c(a[i],i,d),f!=null&&(h[h.length]=f);else for(g in a)f=c(a[g],g,d),f!=null&&(h[h.length]=f);return h.concat.apply([],h)},guid:1,proxy:function(a,c){if(typeof c=="string"){var d=a[c];c=a,a=d}if(!e.isFunction(a))return b;var f=F.call(arguments,2),g=function(){return a.apply(c,f.concat(F.call(arguments)))};g.guid=a.guid=a.guid||g.guid||e.guid++;return g},access:function(a,c,d,f,g,h){var i=a.length;if(typeof c=="object"){for(var j in c)e.access(a,j,c[j],f,g,d);return a}if(d!==b){f=!h&&f&&e.isFunction(d);for(var k=0;k<i;k++)g(a[k],c,f?d.call(a[k],k,g(a[k],c)):d,h);return a}return i?g(a[0],c):b},now:function(){return(new Date).getTime()},uaMatch:function(a){a=a.toLowerCase();var b=r.exec(a)||s.exec(a)||t.exec(a)||a.indexOf("compatible")<0&&u.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},sub:function(){function a(b,c){return new a.fn.init(b,c)}e.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.sub=this.sub,a.fn.init=function(d,f){f&&f instanceof e&&!(f instanceof a)&&(f=a(f));return e.fn.init.call(this,d,f,b)},a.fn.init.prototype=a.fn;var b=a(c);return a},browser:{}}),e.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){I["[object "+b+"]"]=b.toLowerCase()}),z=e.uaMatch(y),z.browser&&(e.browser[z.browser]=!0,e.browser.version=z.version),e.browser.webkit&&(e.browser.safari=!0),j.test(" ")&&(k=/^[\s\xA0]+/,l=/[\s\xA0]+$/),h=e(c),c.addEventListener?B=function(){c.removeEventListener("DOMContentLoaded",B,!1),e.ready()}:c.attachEvent&&(B=function(){c.readyState==="complete"&&(c.detachEvent("onreadystatechange",B),e.ready())});return e}(),g={};f.Callbacks=function(a){a=a?g[a]||h(a):{};var c=[],d=[],e,i,j,k,l,m=function(b){var d,e,g,h,i;for(d=0,e=b.length;d<e;d++)g=b[d],h=f.type(g),h==="array"?m(g):h==="function"&&(!a.unique||!o.has(g))&&c.push(g)},n=function(b,f){f=f||[],e=!a.memory||[b,f],i=!0,l=j||0,j=0,k=c.length;for(;c&&l<k;l++)if(c[l].apply(b,f)===!1&&a.stopOnFalse){e=!0;break}i=!1,c&&(a.once?e===!0?o.disable():c=[]:d&&d.length&&(e=d.shift(),o.fireWith(e[0],e[1])))},o={add:function(){if(c){var a=c.length;m(arguments),i?k=c.length:e&&e!==!0&&(j=a,n(e[0],e[1]))}return this},remove:function(){if(c){var b=arguments,d=0,e=b.length;for(;d<e;d++)for(var f=0;f<c.length;f++)if(b[d]===c[f]){i&&f<=k&&(k--,f<=l&&l--),c.splice(f--,1);if(a.unique)break}}return this},has:function(a){if(c){var b=0,d=c.length;for(;b<d;b++)if(a===c[b])return!0}return!1},empty:function(){c=[];return this},disable:function(){c=d=e=b;return this},disabled:function(){return!c},lock:function(){d=b,(!e||e===!0)&&o.disable();return this},locked:function(){return!d},fireWith:function(b,c){d&&(i?a.once||d.push([b,c]):(!a.once||!e)&&n(b,c));return this},fire:function(){o.fireWith(this,arguments);return this},fired:function(){return!!e}};return o};var i=[].slice;f.extend({Deferred:function(a){var b=f.Callbacks("once memory"),c=f.Callbacks("once memory"),d=f.Callbacks("memory"),e="pending",g={resolve:b,reject:c,notify:d},h={done:b.add,fail:c.add,progress:d.add,state:function(){return e},isResolved:b.fired,isRejected:c.fired,then:function(a,b,c){i.done(a).fail(b).progress(c);return this},always:function(){i.done.apply(i,arguments).fail.apply(i,arguments);return this},pipe:function(a,b,c){return f.Deferred(function(d){f.each({done:[a,"resolve"],fail:[b,"reject"],progress:[c,"notify"]},function(a,b){var c=b[0],e=b[1],g;f.isFunction(c)?i[a](function(){g=c.apply(this,arguments),g&&f.isFunction(g.promise)?g.promise().then(d.resolve,d.reject,d.notify):d[e+"With"](this===i?d:this,[g])}):i[a](d[e])})}).promise()},promise:function(a){if(a==null)a=h;else for(var b in h)a[b]=h[b];return a}},i=h.promise({}),j;for(j in g)i[j]=g[j].fire,i[j+"With"]=g[j].fireWith;i.done(function(){e="resolved"},c.disable,d.lock).fail(function(){e="rejected"},b.disable,d.lock),a&&a.call(i,i);return i},when:function(a){function m(a){return function(b){e[a]=arguments.length>1?i.call(arguments,0):b,j.notifyWith(k,e)}}function l(a){return function(c){b[a]=arguments.length>1?i.call(arguments,0):c,--g||j.resolveWith(j,b)}}var b=i.call(arguments,0),c=0,d=b.length,e=Array(d),g=d,h=d,j=d<=1&&a&&f.isFunction(a.promise)?a:f.Deferred(),k=j.promise();if(d>1){for(;c<d;c++)b[c]&&b[c].promise&&f.isFunction(b[c].promise)?b[c].promise().then(l(c),j.reject,m(c)):--g;g||j.resolveWith(j,b)}else j!==a&&j.resolveWith(j,d?[a]:[]);return k}}),f.support=function(){var b,d,e,g,h,i,j,k,l,m,n,o,p,q=c.createElement("div"),r=c.documentElement;q.setAttribute("className","t"),q.innerHTML="   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>",d=q.getElementsByTagName("*"),e=q.getElementsByTagName("a")[0];if(!d||!d.length||!e)return{};g=c.createElement("select"),h=g.appendChild(c.createElement("option")),i=q.getElementsByTagName("input")[0],b={leadingWhitespace:q.firstChild.nodeType===3,tbody:!q.getElementsByTagName("tbody").length,htmlSerialize:!!q.getElementsByTagName("link").length,style:/top/.test(e.getAttribute("style")),hrefNormalized:e.getAttribute("href")==="/a",opacity:/^0.55/.test(e.style.opacity),cssFloat:!!e.style.cssFloat,checkOn:i.value==="on",optSelected:h.selected,getSetAttribute:q.className!=="t",enctype:!!c.createElement("form").enctype,html5Clone:c.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0},i.checked=!0,b.noCloneChecked=i.cloneNode(!0).checked,g.disabled=!0,b.optDisabled=!h.disabled;try{delete q.test}catch(s){b.deleteExpando=!1}!q.addEventListener&&q.attachEvent&&q.fireEvent&&(q.attachEvent("onclick",function(){b.noCloneEvent=!1}),q.cloneNode(!0).fireEvent("onclick")),i=c.createElement("input"),i.value="t",i.setAttribute("type","radio"),b.radioValue=i.value==="t",i.setAttribute("checked","checked"),q.appendChild(i),k=c.createDocumentFragment(),k.appendChild(q.lastChild),b.checkClone=k.cloneNode(!0).cloneNode(!0).lastChild.checked,b.appendChecked=i.checked,k.removeChild(i),k.appendChild(q),q.innerHTML="",a.getComputedStyle&&(j=c.createElement("div"),j.style.width="0",j.style.marginRight="0",q.style.width="2px",q.appendChild(j),b.reliableMarginRight=(parseInt((a.getComputedStyle(j,null)||{marginRight:0}).marginRight,10)||0)===0);if(q.attachEvent)for(o in{submit:1,change:1,focusin:1})n="on"+o,p=n in q,p||(q.setAttribute(n,"return;"),p=typeof q[n]=="function"),b[o+"Bubbles"]=p;k.removeChild(q),k=g=h=j=q=i=null,f(function(){var a,d,e,g,h,i,j,k,m,n,o,r=c.getElementsByTagName("body")[0];!r||(j=1,k="position:absolute;top:0;left:0;width:1px;height:1px;margin:0;",m="visibility:hidden;border:0;",n="style='"+k+"border:5px solid #000;padding:0;'",o="<div "+n+"><div></div></div>"+"<table "+n+" cellpadding='0' cellspacing='0'>"+"<tr><td></td></tr></table>",a=c.createElement("div"),a.style.cssText=m+"width:0;height:0;position:static;top:0;margin-top:"+j+"px",r.insertBefore(a,r.firstChild),q=c.createElement("div"),a.appendChild(q),q.innerHTML="<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>",l=q.getElementsByTagName("td"),p=l[0].offsetHeight===0,l[0].style.display="",l[1].style.display="none",b.reliableHiddenOffsets=p&&l[0].offsetHeight===0,q.innerHTML="",q.style.width=q.style.paddingLeft="1px",f.boxModel=b.boxModel=q.offsetWidth===2,typeof q.style.zoom!="undefined"&&(q.style.display="inline",q.style.zoom=1,b.inlineBlockNeedsLayout=q.offsetWidth===2,q.style.display="",q.innerHTML="<div style='width:4px;'></div>",b.shrinkWrapBlocks=q.offsetWidth!==2),q.style.cssText=k+m,q.innerHTML=o,d=q.firstChild,e=d.firstChild,h=d.nextSibling.firstChild.firstChild,i={doesNotAddBorder:e.offsetTop!==5,doesAddBorderForTableAndCells:h.offsetTop===5},e.style.position="fixed",e.style.top="20px",i.fixedPosition=e.offsetTop===20||e.offsetTop===15,e.style.position=e.style.top="",d.style.overflow="hidden",d.style.position="relative",i.subtractsBorderForOverflowNotVisible=e.offsetTop===-5,i.doesNotIncludeMarginInBodyOffset=r.offsetTop!==j,r.removeChild(a),q=a=null,f.extend(b,i))});return b}();var j=/^(?:\{.*\}|\[.*\])$/,k=/([A-Z])/g;f.extend({cache:{},uuid:0,expando:"jQuery"+(f.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){a=a.nodeType?f.cache[a[f.expando]]:a[f.expando];return!!a&&!m(a)},data:function(a,c,d,e){if(!!f.acceptData(a)){var g,h,i,j=f.expando,k=typeof c=="string",l=a.nodeType,m=l?f.cache:a,n=l?a[j]:a[j]&&j,o=c==="events";if((!n||!m[n]||!o&&!e&&!m[n].data)&&k&&d===b)return;n||(l?a[j]=n=++f.uuid:n=j),m[n]||(m[n]={},l||(m[n].toJSON=f.noop));if(typeof c=="object"||typeof c=="function")e?m[n]=f.extend(m[n],c):m[n].data=f.extend(m[n].data,c);g=h=m[n],e||(h.data||(h.data={}),h=h.data),d!==b&&(h[f.camelCase(c)]=d);if(o&&!h[c])return g.events;k?(i=h[c],i==null&&(i=h[f.camelCase(c)])):i=h;return i}},removeData:function(a,b,c){if(!!f.acceptData(a)){var d,e,g,h=f.expando,i=a.nodeType,j=i?f.cache:a,k=i?a[h]:h;if(!j[k])return;if(b){d=c?j[k]:j[k].data;if(d){f.isArray(b)||(b in d?b=[b]:(b=f.camelCase(b),b in d?b=[b]:b=b.split(" ")));for(e=0,g=b.length;e<g;e++)delete d[b[e]];if(!(c?m:f.isEmptyObject)(d))return}}if(!c){delete j[k].data;if(!m(j[k]))return}f.support.deleteExpando||!j.setInterval?delete j[k]:j[k]=null,i&&(f.support.deleteExpando?delete a[h]:a.removeAttribute?a.removeAttribute(h):a[h]=null)}},_data:function(a,b,c){return f.data(a,b,c,!0)},acceptData:function(a){if(a.nodeName){var b=f.noData[a.nodeName.toLowerCase()];if(b)return b!==!0&&a.getAttribute("classid")===b}return!0}}),f.fn.extend({data:function(a,c){var d,e,g,h=null;if(typeof a=="undefined"){if(this.length){h=f.data(this[0]);if(this[0].nodeType===1&&!f._data(this[0],"parsedAttrs")){e=this[0].attributes;for(var i=0,j=e.length;i<j;i++)g=e[i].name,g.indexOf("data-")===0&&(g=f.camelCase(g.substring(5)),l(this[0],g,h[g]));f._data(this[0],"parsedAttrs",!0)}}return h}if(typeof a=="object")return this.each(function(){f.data(this,a)});d=a.split("."),d[1]=d[1]?"."+d[1]:"";if(c===b){h=this.triggerHandler("getData"+d[1]+"!",[d[0]]),h===b&&this.length&&(h=f.data(this[0],a),h=l(this[0],a,h));return h===b&&d[1]?this.data(d[0]):h}return this.each(function(){var b=f(this),e=[d[0],c];b.triggerHandler("setData"+d[1]+"!",e),f.data(this,a,c),b.triggerHandler("changeData"+d[1]+"!",e)})},removeData:function(a){return this.each(function(){f.removeData(this,a)})}}),f.extend({_mark:function(a,b){a&&(b=(b||"fx")+"mark",f._data(a,b,(f._data(a,b)||0)+1))},_unmark:function(a,b,c){a!==!0&&(c=b,b=a,a=!1);if(b){c=c||"fx";var d=c+"mark",e=a?0:(f._data(b,d)||1)-1;e?f._data(b,d,e):(f.removeData(b,d,!0),n(b,c,"mark"))}},queue:function(a,b,c){var d;if(a){b=(b||"fx")+"queue",d=f._data(a,b),c&&(!d||f.isArray(c)?d=f._data(a,b,f.makeArray(c)):d.push(c));return d||[]}},dequeue:function(a,b){b=b||"fx";var c=f.queue(a,b),d=c.shift(),e={};d==="inprogress"&&(d=c.shift()),d&&(b==="fx"&&c.unshift("inprogress"),f._data(a,b+".run",e),d.call(a,function(){f.dequeue(a,b)},e)),c.length||(f.removeData(a,b+"queue "+b+".run",!0),n(a,b,"queue"))}}),f.fn.extend({queue:function(a,c){typeof a!="string"&&(c=a,a="fx");if(c===b)return f.queue(this[0],a);return this.each(function(){var b=f.queue(this,a,c);a==="fx"&&b[0]!=="inprogress"&&f.dequeue(this,a)})},dequeue:function(a){return this.each(function(){f.dequeue(this,a)})},delay:function(a,b){a=f.fx?f.fx.speeds[a]||a:a,b=b||"fx";return this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,c){function m(){--h||d.resolveWith(e,[e])}typeof a!="string"&&(c=a,a=b),a=a||"fx";var d=f.Deferred(),e=this,g=e.length,h=1,i=a+"defer",j=a+"queue",k=a+"mark",l;while(g--)if(l=f.data(e[g],i,b,!0)||(f.data(e[g],j,b,!0)||f.data(e[g],k,b,!0))&&f.data(e[g],i,f.Callbacks("once memory"),!0))h++,l.add(m);m();return d.promise()}});var o=/[\n\t\r]/g,p=/\s+/,q=/\r/g,r=/^(?:button|input)$/i,s=/^(?:button|input|object|select|textarea)$/i,t=/^a(?:rea)?$/i,u=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,v=f.support.getSetAttribute,w,x,y;f.fn.extend({attr:function(a,b){return f.access(this,a,b,!0,f.attr)},removeAttr:function(a){return this.each(function(){f.removeAttr(this,a)})},prop:function(a,b){return f.access(this,a,b,!0,f.prop)},removeProp:function(a){a=f.propFix[a]||a;return this.each(function(){try{this[a]=b,delete this[a]}catch(c){}})},addClass:function(a){var b,c,d,e,g,h,i;if(f.isFunction(a))return this.each(function(b){f(this).addClass(a.call(this,b,this.className))});if(a&&typeof a=="string"){b=a.split(p);for(c=0,d=this.length;c<d;c++){e=this[c];if(e.nodeType===1)if(!e.className&&b.length===1)e.className=a;else{g=" "+e.className+" ";for(h=0,i=b.length;h<i;h++)~g.indexOf(" "+b[h]+" ")||(g+=b[h]+" ");e.className=f.trim(g)}}}return this},removeClass:function(a){var c,d,e,g,h,i,j;if(f.isFunction(a))return this.each(function(b){f(this).removeClass(a.call(this,b,this.className))});if(a&&typeof a=="string"||a===b){c=(a||"").split(p);for(d=0,e=this.length;d<e;d++){g=this[d];if(g.nodeType===1&&g.className)if(a){h=(" "+g.className+" ").replace(o," ");for(i=0,j=c.length;i<j;i++)h=h.replace(" "+c[i]+" "," ");g.className=f.trim(h)}else g.className=""}}return this},toggleClass:function(a,b){var c=typeof a,d=typeof b=="boolean";if(f.isFunction(a))return this.each(function(c){f(this).toggleClass(a.call(this,c,this.className,b),b)});return this.each(function(){if(c==="string"){var e,g=0,h=f(this),i=b,j=a.split(p);while(e=j[g++])i=d?i:!h.hasClass(e),h[i?"addClass":"removeClass"](e)}else if(c==="undefined"||c==="boolean")this.className&&f._data(this,"__className__",this.className),this.className=this.className||a===!1?"":f._data(this,"__className__")||""})},hasClass:function(a){var b=" "+a+" ",c=0,d=this.length;for(;c<d;c++)if(this[c].nodeType===1&&(" "+this[c].className+" ").replace(o," ").indexOf(b)>-1)return!0;return!1},val:function(a){var c,d,e,g=this[0];{if(!!arguments.length){e=f.isFunction(a);return this.each(function(d){var g=f(this),h;if(this.nodeType===1){e?h=a.call(this,d,g.val()):h=a,h==null?h="":typeof h=="number"?h+="":f.isArray(h)&&(h=f.map(h,function(a){return a==null?"":a+""})),c=f.valHooks[this.nodeName.toLowerCase()]||f.valHooks[this.type];if(!c||!("set"in c)||c.set(this,h,"value")===b)this.value=h}})}if(g){c=f.valHooks[g.nodeName.toLowerCase()]||f.valHooks[g.type];if(c&&"get"in c&&(d=c.get(g,"value"))!==b)return d;d=g.value;return typeof d=="string"?d.replace(q,""):d==null?"":d}}}}),f.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text}},select:{get:function(a){var b,c,d,e,g=a.selectedIndex,h=[],i=a.options,j=a.type==="select-one";if(g<0)return null;c=j?g:0,d=j?g+1:i.length;for(;c<d;c++){e=i[c];if(e.selected&&(f.support.optDisabled?!e.disabled:e.getAttribute("disabled")===null)&&(!e.parentNode.disabled||!f.nodeName(e.parentNode,"optgroup"))){b=f(e).val();if(j)return b;h.push(b)}}if(j&&!h.length&&i.length)return f(i[g]).val();return h},set:function(a,b){var c=f.makeArray(b);f(a).find("option").each(function(){this.selected=f.inArray(f(this).val(),c)>=0}),c.length||(a.selectedIndex=-1);return c}}},attrFn:{val:!0,css:!0,html:!0,text:!0,data:!0,width:!0,height:!0,offset:!0},attr:function(a,c,d,e){var g,h,i,j=a.nodeType;if(!!a&&j!==3&&j!==8&&j!==2){if(e&&c in f.attrFn)return f(a)[c](d);if(typeof a.getAttribute=="undefined")return f.prop(a,c,d);i=j!==1||!f.isXMLDoc(a),i&&(c=c.toLowerCase(),h=f.attrHooks[c]||(u.test(c)?x:w));if(d!==b){if(d===null){f.removeAttr(a,c);return}if(h&&"set"in h&&i&&(g=h.set(a,d,c))!==b)return g;a.setAttribute(c,""+d);return d}if(h&&"get"in h&&i&&(g=h.get(a,c))!==null)return g;g=a.getAttribute(c);return g===null?b:g}},removeAttr:function(a,b){var c,d,e,g,h=0;if(b&&a.nodeType===1){d=b.toLowerCase().split(p),g=d.length;for(;h<g;h++)e=d[h],e&&(c=f.propFix[e]||e,f.attr(a,e,""),a.removeAttribute(v?e:c),u.test(e)&&c in a&&(a[c]=!1))}},attrHooks:{type:{set:function(a,b){if(r.test(a.nodeName)&&a.parentNode)f.error("type property can't be changed");else if(!f.support.radioValue&&b==="radio"&&f.nodeName(a,"input")){var c=a.value;a.setAttribute("type",b),c&&(a.value=c);return b}}},value:{get:function(a,b){if(w&&f.nodeName(a,"button"))return w.get(a,b);return b in a?a.value:null},set:function(a,b,c){if(w&&f.nodeName(a,"button"))return w.set(a,b,c);a.value=b}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(a,c,d){var e,g,h,i=a.nodeType;if(!!a&&i!==3&&i!==8&&i!==2){h=i!==1||!f.isXMLDoc(a),h&&(c=f.propFix[c]||c,g=f.propHooks[c]);return d!==b?g&&"set"in g&&(e=g.set(a,d,c))!==b?e:a[c]=d:g&&"get"in g&&(e=g.get(a,c))!==null?e:a[c]}},propHooks:{tabIndex:{get:function(a){var c=a.getAttributeNode("tabindex");return c&&c.specified?parseInt(c.value,10):s.test(a.nodeName)||t.test(a.nodeName)&&a.href?0:b}}}}),f.attrHooks.tabindex=f.propHooks.tabIndex,x={get:function(a,c){var d,e=f.prop(a,c);return e===!0||typeof e!="boolean"&&(d=a.getAttributeNode(c))&&d.nodeValue!==!1?c.toLowerCase():b},set:function(a,b,c){var d;b===!1?f.removeAttr(a,c):(d=f.propFix[c]||c,d in a&&(a[d]=!0),a.setAttribute(c,c.toLowerCase()));return c}},v||(y={name:!0,id:!0},w=f.valHooks.button={get:function(a,c){var d;d=a.getAttributeNode(c);return d&&(y[c]?d.nodeValue!=="":d.specified)?d.nodeValue:b},set:function(a,b,d){var e=a.getAttributeNode(d);e||(e=c.createAttribute(d),a.setAttributeNode(e));return e.nodeValue=b+""}},f.attrHooks.tabindex.set=w.set,f.each(["width","height"],function(a,b){f.attrHooks[b]=f.extend(f.attrHooks[b],{set:function(a,c){if(c===""){a.setAttribute(b,"auto");return c}}})}),f.attrHooks.contenteditable={get:w.get,set:function(a,b,c){b===""&&(b="false"),w.set(a,b,c)}}),f.support.hrefNormalized||f.each(["href","src","width","height"],function(a,c){f.attrHooks[c]=f.extend(f.attrHooks[c],{get:function(a){var d=a.getAttribute(c,2);return d===null?b:d}})}),f.support.style||(f.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||b},set:function(a,b){return a.style.cssText=""+b}}),f.support.optSelected||(f.propHooks.selected=f.extend(f.propHooks.selected,{get:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex);return null}})),f.support.enctype||(f.propFix.enctype="encoding"),f.support.checkOn||f.each(["radio","checkbox"],function(){f.valHooks[this]={get:function(a){return a.getAttribute("value")===null?"on":a.value}}}),f.each(["radio","checkbox"],function(){f.valHooks[this]=f.extend(f.valHooks[this],{set:function(a,b){if(f.isArray(b))return a.checked=f.inArray(f(a).val(),b)>=0}})});var z=/^(?:textarea|input|select)$/i,A=/^([^\.]*)?(?:\.(.+))?$/,B=/\bhover(\.\S+)?\b/,C=/^key/,D=/^(?:mouse|contextmenu)|click/,E=/^(?:focusinfocus|focusoutblur)$/,F=/^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,G=function(a){var b=F.exec(a);b&&(b[1]=(b[1]||"").toLowerCase(),b[3]=b[3]&&new RegExp("(?:^|\\s)"+b[3]+"(?:\\s|$)"));return b},H=function(a,b){var c=a.attributes||{};return(!b[1]||a.nodeName.toLowerCase()===b[1])&&(!b[2]||(c.id||{}).value===b[2])&&(!b[3]||b[3].test((c["class"]||{}).value))},I=function(a){return f.event.special.hover?a:a.replace(B,"mouseenter$1 mouseleave$1")};
f.event={add:function(a,c,d,e,g){var h,i,j,k,l,m,n,o,p,q,r,s;if(!(a.nodeType===3||a.nodeType===8||!c||!d||!(h=f._data(a)))){d.handler&&(p=d,d=p.handler),d.guid||(d.guid=f.guid++),j=h.events,j||(h.events=j={}),i=h.handle,i||(h.handle=i=function(a){return typeof f!="undefined"&&(!a||f.event.triggered!==a.type)?f.event.dispatch.apply(i.elem,arguments):b},i.elem=a),c=f.trim(I(c)).split(" ");for(k=0;k<c.length;k++){l=A.exec(c[k])||[],m=l[1],n=(l[2]||"").split(".").sort(),s=f.event.special[m]||{},m=(g?s.delegateType:s.bindType)||m,s=f.event.special[m]||{},o=f.extend({type:m,origType:l[1],data:e,handler:d,guid:d.guid,selector:g,quick:G(g),namespace:n.join(".")},p),r=j[m];if(!r){r=j[m]=[],r.delegateCount=0;if(!s.setup||s.setup.call(a,e,n,i)===!1)a.addEventListener?a.addEventListener(m,i,!1):a.attachEvent&&a.attachEvent("on"+m,i)}s.add&&(s.add.call(a,o),o.handler.guid||(o.handler.guid=d.guid)),g?r.splice(r.delegateCount++,0,o):r.push(o),f.event.global[m]=!0}a=null}},global:{},remove:function(a,b,c,d,e){var g=f.hasData(a)&&f._data(a),h,i,j,k,l,m,n,o,p,q,r,s;if(!!g&&!!(o=g.events)){b=f.trim(I(b||"")).split(" ");for(h=0;h<b.length;h++){i=A.exec(b[h])||[],j=k=i[1],l=i[2];if(!j){for(j in o)f.event.remove(a,j+b[h],c,d,!0);continue}p=f.event.special[j]||{},j=(d?p.delegateType:p.bindType)||j,r=o[j]||[],m=r.length,l=l?new RegExp("(^|\\.)"+l.split(".").sort().join("\\.(?:.*\\.)?")+"(\\.|$)"):null;for(n=0;n<r.length;n++)s=r[n],(e||k===s.origType)&&(!c||c.guid===s.guid)&&(!l||l.test(s.namespace))&&(!d||d===s.selector||d==="**"&&s.selector)&&(r.splice(n--,1),s.selector&&r.delegateCount--,p.remove&&p.remove.call(a,s));r.length===0&&m!==r.length&&((!p.teardown||p.teardown.call(a,l)===!1)&&f.removeEvent(a,j,g.handle),delete o[j])}f.isEmptyObject(o)&&(q=g.handle,q&&(q.elem=null),f.removeData(a,["events","handle"],!0))}},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(c,d,e,g){if(!e||e.nodeType!==3&&e.nodeType!==8){var h=c.type||c,i=[],j,k,l,m,n,o,p,q,r,s;if(E.test(h+f.event.triggered))return;h.indexOf("!")>=0&&(h=h.slice(0,-1),k=!0),h.indexOf(".")>=0&&(i=h.split("."),h=i.shift(),i.sort());if((!e||f.event.customEvent[h])&&!f.event.global[h])return;c=typeof c=="object"?c[f.expando]?c:new f.Event(h,c):new f.Event(h),c.type=h,c.isTrigger=!0,c.exclusive=k,c.namespace=i.join("."),c.namespace_re=c.namespace?new RegExp("(^|\\.)"+i.join("\\.(?:.*\\.)?")+"(\\.|$)"):null,o=h.indexOf(":")<0?"on"+h:"";if(!e){j=f.cache;for(l in j)j[l].events&&j[l].events[h]&&f.event.trigger(c,d,j[l].handle.elem,!0);return}c.result=b,c.target||(c.target=e),d=d!=null?f.makeArray(d):[],d.unshift(c),p=f.event.special[h]||{};if(p.trigger&&p.trigger.apply(e,d)===!1)return;r=[[e,p.bindType||h]];if(!g&&!p.noBubble&&!f.isWindow(e)){s=p.delegateType||h,m=E.test(s+h)?e:e.parentNode,n=null;for(;m;m=m.parentNode)r.push([m,s]),n=m;n&&n===e.ownerDocument&&r.push([n.defaultView||n.parentWindow||a,s])}for(l=0;l<r.length&&!c.isPropagationStopped();l++)m=r[l][0],c.type=r[l][1],q=(f._data(m,"events")||{})[c.type]&&f._data(m,"handle"),q&&q.apply(m,d),q=o&&m[o],q&&f.acceptData(m)&&q.apply(m,d)===!1&&c.preventDefault();c.type=h,!g&&!c.isDefaultPrevented()&&(!p._default||p._default.apply(e.ownerDocument,d)===!1)&&(h!=="click"||!f.nodeName(e,"a"))&&f.acceptData(e)&&o&&e[h]&&(h!=="focus"&&h!=="blur"||c.target.offsetWidth!==0)&&!f.isWindow(e)&&(n=e[o],n&&(e[o]=null),f.event.triggered=h,e[h](),f.event.triggered=b,n&&(e[o]=n));return c.result}},dispatch:function(c){c=f.event.fix(c||a.event);var d=(f._data(this,"events")||{})[c.type]||[],e=d.delegateCount,g=[].slice.call(arguments,0),h=!c.exclusive&&!c.namespace,i=[],j,k,l,m,n,o,p,q,r,s,t;g[0]=c,c.delegateTarget=this;if(e&&!c.target.disabled&&(!c.button||c.type!=="click")){m=f(this),m.context=this.ownerDocument||this;for(l=c.target;l!=this;l=l.parentNode||this){o={},q=[],m[0]=l;for(j=0;j<e;j++)r=d[j],s=r.selector,o[s]===b&&(o[s]=r.quick?H(l,r.quick):m.is(s)),o[s]&&q.push(r);q.length&&i.push({elem:l,matches:q})}}d.length>e&&i.push({elem:this,matches:d.slice(e)});for(j=0;j<i.length&&!c.isPropagationStopped();j++){p=i[j],c.currentTarget=p.elem;for(k=0;k<p.matches.length&&!c.isImmediatePropagationStopped();k++){r=p.matches[k];if(h||!c.namespace&&!r.namespace||c.namespace_re&&c.namespace_re.test(r.namespace))c.data=r.data,c.handleObj=r,n=((f.event.special[r.origType]||{}).handle||r.handler).apply(p.elem,g),n!==b&&(c.result=n,n===!1&&(c.preventDefault(),c.stopPropagation()))}}return c.result},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){a.which==null&&(a.which=b.charCode!=null?b.charCode:b.keyCode);return a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,d){var e,f,g,h=d.button,i=d.fromElement;a.pageX==null&&d.clientX!=null&&(e=a.target.ownerDocument||c,f=e.documentElement,g=e.body,a.pageX=d.clientX+(f&&f.scrollLeft||g&&g.scrollLeft||0)-(f&&f.clientLeft||g&&g.clientLeft||0),a.pageY=d.clientY+(f&&f.scrollTop||g&&g.scrollTop||0)-(f&&f.clientTop||g&&g.clientTop||0)),!a.relatedTarget&&i&&(a.relatedTarget=i===a.target?d.toElement:i),!a.which&&h!==b&&(a.which=h&1?1:h&2?3:h&4?2:0);return a}},fix:function(a){if(a[f.expando])return a;var d,e,g=a,h=f.event.fixHooks[a.type]||{},i=h.props?this.props.concat(h.props):this.props;a=f.Event(g);for(d=i.length;d;)e=i[--d],a[e]=g[e];a.target||(a.target=g.srcElement||c),a.target.nodeType===3&&(a.target=a.target.parentNode),a.metaKey===b&&(a.metaKey=a.ctrlKey);return h.filter?h.filter(a,g):a},special:{ready:{setup:f.bindReady},load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(a,b,c){f.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}},simulate:function(a,b,c,d){var e=f.extend(new f.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?f.event.trigger(e,null,b):f.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},f.event.handle=f.event.dispatch,f.removeEvent=c.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){a.detachEvent&&a.detachEvent("on"+b,c)},f.Event=function(a,b){if(!(this instanceof f.Event))return new f.Event(a,b);a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?K:J):this.type=a,b&&f.extend(this,b),this.timeStamp=a&&a.timeStamp||f.now(),this[f.expando]=!0},f.Event.prototype={preventDefault:function(){this.isDefaultPrevented=K;var a=this.originalEvent;!a||(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){this.isPropagationStopped=K;var a=this.originalEvent;!a||(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=K,this.stopPropagation()},isDefaultPrevented:J,isPropagationStopped:J,isImmediatePropagationStopped:J},f.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){f.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c=this,d=a.relatedTarget,e=a.handleObj,g=e.selector,h;if(!d||d!==c&&!f.contains(c,d))a.type=e.origType,h=e.handler.apply(this,arguments),a.type=b;return h}}}),f.support.submitBubbles||(f.event.special.submit={setup:function(){if(f.nodeName(this,"form"))return!1;f.event.add(this,"click._submit keypress._submit",function(a){var c=a.target,d=f.nodeName(c,"input")||f.nodeName(c,"button")?c.form:b;d&&!d._submit_attached&&(f.event.add(d,"submit._submit",function(a){this.parentNode&&!a.isTrigger&&f.event.simulate("submit",this.parentNode,a,!0)}),d._submit_attached=!0)})},teardown:function(){if(f.nodeName(this,"form"))return!1;f.event.remove(this,"._submit")}}),f.support.changeBubbles||(f.event.special.change={setup:function(){if(z.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")f.event.add(this,"propertychange._change",function(a){a.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),f.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1,f.event.simulate("change",this,a,!0))});return!1}f.event.add(this,"beforeactivate._change",function(a){var b=a.target;z.test(b.nodeName)&&!b._change_attached&&(f.event.add(b,"change._change",function(a){this.parentNode&&!a.isSimulated&&!a.isTrigger&&f.event.simulate("change",this.parentNode,a,!0)}),b._change_attached=!0)})},handle:function(a){var b=a.target;if(this!==b||a.isSimulated||a.isTrigger||b.type!=="radio"&&b.type!=="checkbox")return a.handleObj.handler.apply(this,arguments)},teardown:function(){f.event.remove(this,"._change");return z.test(this.nodeName)}}),f.support.focusinBubbles||f.each({focus:"focusin",blur:"focusout"},function(a,b){var d=0,e=function(a){f.event.simulate(b,a.target,f.event.fix(a),!0)};f.event.special[b]={setup:function(){d++===0&&c.addEventListener(a,e,!0)},teardown:function(){--d===0&&c.removeEventListener(a,e,!0)}}}),f.fn.extend({on:function(a,c,d,e,g){var h,i;if(typeof a=="object"){typeof c!="string"&&(d=c,c=b);for(i in a)this.on(i,c,d,a[i],g);return this}d==null&&e==null?(e=c,d=c=b):e==null&&(typeof c=="string"?(e=d,d=b):(e=d,d=c,c=b));if(e===!1)e=J;else if(!e)return this;g===1&&(h=e,e=function(a){f().off(a);return h.apply(this,arguments)},e.guid=h.guid||(h.guid=f.guid++));return this.each(function(){f.event.add(this,a,e,d,c)})},one:function(a,b,c,d){return this.on.call(this,a,b,c,d,1)},off:function(a,c,d){if(a&&a.preventDefault&&a.handleObj){var e=a.handleObj;f(a.delegateTarget).off(e.namespace?e.type+"."+e.namespace:e.type,e.selector,e.handler);return this}if(typeof a=="object"){for(var g in a)this.off(g,c,a[g]);return this}if(c===!1||typeof c=="function")d=c,c=b;d===!1&&(d=J);return this.each(function(){f.event.remove(this,a,d,c)})},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},live:function(a,b,c){f(this.context).on(a,this.selector,b,c);return this},die:function(a,b){f(this.context).off(a,this.selector||"**",b);return this},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return arguments.length==1?this.off(a,"**"):this.off(b,a,c)},trigger:function(a,b){return this.each(function(){f.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0])return f.event.trigger(a,b,this[0],!0)},toggle:function(a){var b=arguments,c=a.guid||f.guid++,d=0,e=function(c){var e=(f._data(this,"lastToggle"+a.guid)||0)%d;f._data(this,"lastToggle"+a.guid,e+1),c.preventDefault();return b[e].apply(this,arguments)||!1};e.guid=c;while(d<b.length)b[d++].guid=c;return this.click(e)},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){f.fn[b]=function(a,c){c==null&&(c=a,a=null);return arguments.length>0?this.on(b,null,a,c):this.trigger(b)},f.attrFn&&(f.attrFn[b]=!0),C.test(b)&&(f.event.fixHooks[b]=f.event.keyHooks),D.test(b)&&(f.event.fixHooks[b]=f.event.mouseHooks)}),function(){function x(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}if(j.nodeType===1){g||(j[d]=c,j.sizset=h);if(typeof b!="string"){if(j===b){k=!0;break}}else if(m.filter(b,[j]).length>0){k=j;break}}j=j[a]}e[h]=k}}}function w(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}j.nodeType===1&&!g&&(j[d]=c,j.sizset=h);if(j.nodeName.toLowerCase()===b){k=j;break}j=j[a]}e[h]=k}}}var a=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,d="sizcache"+(Math.random()+"").replace(".",""),e=0,g=Object.prototype.toString,h=!1,i=!0,j=/\\/g,k=/\r\n/g,l=/\W/;[0,0].sort(function(){i=!1;return 0});var m=function(b,d,e,f){e=e||[],d=d||c;var h=d;if(d.nodeType!==1&&d.nodeType!==9)return[];if(!b||typeof b!="string")return e;var i,j,k,l,n,q,r,t,u=!0,v=m.isXML(d),w=[],x=b;do{a.exec(""),i=a.exec(x);if(i){x=i[3],w.push(i[1]);if(i[2]){l=i[3];break}}}while(i);if(w.length>1&&p.exec(b))if(w.length===2&&o.relative[w[0]])j=y(w[0]+w[1],d,f);else{j=o.relative[w[0]]?[d]:m(w.shift(),d);while(w.length)b=w.shift(),o.relative[b]&&(b+=w.shift()),j=y(b,j,f)}else{!f&&w.length>1&&d.nodeType===9&&!v&&o.match.ID.test(w[0])&&!o.match.ID.test(w[w.length-1])&&(n=m.find(w.shift(),d,v),d=n.expr?m.filter(n.expr,n.set)[0]:n.set[0]);if(d){n=f?{expr:w.pop(),set:s(f)}:m.find(w.pop(),w.length===1&&(w[0]==="~"||w[0]==="+")&&d.parentNode?d.parentNode:d,v),j=n.expr?m.filter(n.expr,n.set):n.set,w.length>0?k=s(j):u=!1;while(w.length)q=w.pop(),r=q,o.relative[q]?r=w.pop():q="",r==null&&(r=d),o.relative[q](k,r,v)}else k=w=[]}k||(k=j),k||m.error(q||b);if(g.call(k)==="[object Array]")if(!u)e.push.apply(e,k);else if(d&&d.nodeType===1)for(t=0;k[t]!=null;t++)k[t]&&(k[t]===!0||k[t].nodeType===1&&m.contains(d,k[t]))&&e.push(j[t]);else for(t=0;k[t]!=null;t++)k[t]&&k[t].nodeType===1&&e.push(j[t]);else s(k,e);l&&(m(l,h,e,f),m.uniqueSort(e));return e};m.uniqueSort=function(a){if(u){h=i,a.sort(u);if(h)for(var b=1;b<a.length;b++)a[b]===a[b-1]&&a.splice(b--,1)}return a},m.matches=function(a,b){return m(a,null,null,b)},m.matchesSelector=function(a,b){return m(b,null,null,[a]).length>0},m.find=function(a,b,c){var d,e,f,g,h,i;if(!a)return[];for(e=0,f=o.order.length;e<f;e++){h=o.order[e];if(g=o.leftMatch[h].exec(a)){i=g[1],g.splice(1,1);if(i.substr(i.length-1)!=="\\"){g[1]=(g[1]||"").replace(j,""),d=o.find[h](g,b,c);if(d!=null){a=a.replace(o.match[h],"");break}}}}d||(d=typeof b.getElementsByTagName!="undefined"?b.getElementsByTagName("*"):[]);return{set:d,expr:a}},m.filter=function(a,c,d,e){var f,g,h,i,j,k,l,n,p,q=a,r=[],s=c,t=c&&c[0]&&m.isXML(c[0]);while(a&&c.length){for(h in o.filter)if((f=o.leftMatch[h].exec(a))!=null&&f[2]){k=o.filter[h],l=f[1],g=!1,f.splice(1,1);if(l.substr(l.length-1)==="\\")continue;s===r&&(r=[]);if(o.preFilter[h]){f=o.preFilter[h](f,s,d,r,e,t);if(!f)g=i=!0;else if(f===!0)continue}if(f)for(n=0;(j=s[n])!=null;n++)j&&(i=k(j,f,n,s),p=e^i,d&&i!=null?p?g=!0:s[n]=!1:p&&(r.push(j),g=!0));if(i!==b){d||(s=r),a=a.replace(o.match[h],"");if(!g)return[];break}}if(a===q)if(g==null)m.error(a);else break;q=a}return s},m.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)};var n=m.getText=function(a){var b,c,d=a.nodeType,e="";if(d){if(d===1||d===9){if(typeof a.textContent=="string")return a.textContent;if(typeof a.innerText=="string")return a.innerText.replace(k,"");for(a=a.firstChild;a;a=a.nextSibling)e+=n(a)}else if(d===3||d===4)return a.nodeValue}else for(b=0;c=a[b];b++)c.nodeType!==8&&(e+=n(c));return e},o=m.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(a){return a.getAttribute("href")},type:function(a){return a.getAttribute("type")}},relative:{"+":function(a,b){var c=typeof b=="string",d=c&&!l.test(b),e=c&&!d;d&&(b=b.toLowerCase());for(var f=0,g=a.length,h;f<g;f++)if(h=a[f]){while((h=h.previousSibling)&&h.nodeType!==1);a[f]=e||h&&h.nodeName.toLowerCase()===b?h||!1:h===b}e&&m.filter(b,a,!0)},">":function(a,b){var c,d=typeof b=="string",e=0,f=a.length;if(d&&!l.test(b)){b=b.toLowerCase();for(;e<f;e++){c=a[e];if(c){var g=c.parentNode;a[e]=g.nodeName.toLowerCase()===b?g:!1}}}else{for(;e<f;e++)c=a[e],c&&(a[e]=d?c.parentNode:c.parentNode===b);d&&m.filter(b,a,!0)}},"":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("parentNode",b,f,a,d,c)},"~":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("previousSibling",b,f,a,d,c)}},find:{ID:function(a,b,c){if(typeof b.getElementById!="undefined"&&!c){var d=b.getElementById(a[1]);return d&&d.parentNode?[d]:[]}},NAME:function(a,b){if(typeof b.getElementsByName!="undefined"){var c=[],d=b.getElementsByName(a[1]);for(var e=0,f=d.length;e<f;e++)d[e].getAttribute("name")===a[1]&&c.push(d[e]);return c.length===0?null:c}},TAG:function(a,b){if(typeof b.getElementsByTagName!="undefined")return b.getElementsByTagName(a[1])}},preFilter:{CLASS:function(a,b,c,d,e,f){a=" "+a[1].replace(j,"")+" ";if(f)return a;for(var g=0,h;(h=b[g])!=null;g++)h&&(e^(h.className&&(" "+h.className+" ").replace(/[\t\n\r]/g," ").indexOf(a)>=0)?c||d.push(h):c&&(b[g]=!1));return!1},ID:function(a){return a[1].replace(j,"")},TAG:function(a,b){return a[1].replace(j,"").toLowerCase()},CHILD:function(a){if(a[1]==="nth"){a[2]||m.error(a[0]),a[2]=a[2].replace(/^\+|\s*/g,"");var b=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2]==="even"&&"2n"||a[2]==="odd"&&"2n+1"||!/\D/.test(a[2])&&"0n+"+a[2]||a[2]);a[2]=b[1]+(b[2]||1)-0,a[3]=b[3]-0}else a[2]&&m.error(a[0]);a[0]=e++;return a},ATTR:function(a,b,c,d,e,f){var g=a[1]=a[1].replace(j,"");!f&&o.attrMap[g]&&(a[1]=o.attrMap[g]),a[4]=(a[4]||a[5]||"").replace(j,""),a[2]==="~="&&(a[4]=" "+a[4]+" ");return a},PSEUDO:function(b,c,d,e,f){if(b[1]==="not")if((a.exec(b[3])||"").length>1||/^\w/.test(b[3]))b[3]=m(b[3],null,null,c);else{var g=m.filter(b[3],c,d,!0^f);d||e.push.apply(e,g);return!1}else if(o.match.POS.test(b[0])||o.match.CHILD.test(b[0]))return!0;return b},POS:function(a){a.unshift(!0);return a}},filters:{enabled:function(a){return a.disabled===!1&&a.type!=="hidden"},disabled:function(a){return a.disabled===!0},checked:function(a){return a.checked===!0},selected:function(a){a.parentNode&&a.parentNode.selectedIndex;return a.selected===!0},parent:function(a){return!!a.firstChild},empty:function(a){return!a.firstChild},has:function(a,b,c){return!!m(c[3],a).length},header:function(a){return/h\d/i.test(a.nodeName)},text:function(a){var b=a.getAttribute("type"),c=a.type;return a.nodeName.toLowerCase()==="input"&&"text"===c&&(b===c||b===null)},radio:function(a){return a.nodeName.toLowerCase()==="input"&&"radio"===a.type},checkbox:function(a){return a.nodeName.toLowerCase()==="input"&&"checkbox"===a.type},file:function(a){return a.nodeName.toLowerCase()==="input"&&"file"===a.type},password:function(a){return a.nodeName.toLowerCase()==="input"&&"password"===a.type},submit:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"submit"===a.type},image:function(a){return a.nodeName.toLowerCase()==="input"&&"image"===a.type},reset:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"reset"===a.type},button:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&"button"===a.type||b==="button"},input:function(a){return/input|select|textarea|button/i.test(a.nodeName)},focus:function(a){return a===a.ownerDocument.activeElement}},setFilters:{first:function(a,b){return b===0},last:function(a,b,c,d){return b===d.length-1},even:function(a,b){return b%2===0},odd:function(a,b){return b%2===1},lt:function(a,b,c){return b<c[3]-0},gt:function(a,b,c){return b>c[3]-0},nth:function(a,b,c){return c[3]-0===b},eq:function(a,b,c){return c[3]-0===b}},filter:{PSEUDO:function(a,b,c,d){var e=b[1],f=o.filters[e];if(f)return f(a,c,b,d);if(e==="contains")return(a.textContent||a.innerText||n([a])||"").indexOf(b[3])>=0;if(e==="not"){var g=b[3];for(var h=0,i=g.length;h<i;h++)if(g[h]===a)return!1;return!0}m.error(e)},CHILD:function(a,b){var c,e,f,g,h,i,j,k=b[1],l=a;switch(k){case"only":case"first":while(l=l.previousSibling)if(l.nodeType===1)return!1;if(k==="first")return!0;l=a;case"last":while(l=l.nextSibling)if(l.nodeType===1)return!1;return!0;case"nth":c=b[2],e=b[3];if(c===1&&e===0)return!0;f=b[0],g=a.parentNode;if(g&&(g[d]!==f||!a.nodeIndex)){i=0;for(l=g.firstChild;l;l=l.nextSibling)l.nodeType===1&&(l.nodeIndex=++i);g[d]=f}j=a.nodeIndex-e;return c===0?j===0:j%c===0&&j/c>=0}},ID:function(a,b){return a.nodeType===1&&a.getAttribute("id")===b},TAG:function(a,b){return b==="*"&&a.nodeType===1||!!a.nodeName&&a.nodeName.toLowerCase()===b},CLASS:function(a,b){return(" "+(a.className||a.getAttribute("class"))+" ").indexOf(b)>-1},ATTR:function(a,b){var c=b[1],d=m.attr?m.attr(a,c):o.attrHandle[c]?o.attrHandle[c](a):a[c]!=null?a[c]:a.getAttribute(c),e=d+"",f=b[2],g=b[4];return d==null?f==="!=":!f&&m.attr?d!=null:f==="="?e===g:f==="*="?e.indexOf(g)>=0:f==="~="?(" "+e+" ").indexOf(g)>=0:g?f==="!="?e!==g:f==="^="?e.indexOf(g)===0:f==="$="?e.substr(e.length-g.length)===g:f==="|="?e===g||e.substr(0,g.length+1)===g+"-":!1:e&&d!==!1},POS:function(a,b,c,d){var e=b[2],f=o.setFilters[e];if(f)return f(a,c,b,d)}}},p=o.match.POS,q=function(a,b){return"\\"+(b-0+1)};for(var r in o.match)o.match[r]=new RegExp(o.match[r].source+/(?![^\[]*\])(?![^\(]*\))/.source),o.leftMatch[r]=new RegExp(/(^(?:.|\r|\n)*?)/.source+o.match[r].source.replace(/\\(\d+)/g,q));var s=function(a,b){a=Array.prototype.slice.call(a,0);if(b){b.push.apply(b,a);return b}return a};try{Array.prototype.slice.call(c.documentElement.childNodes,0)[0].nodeType}catch(t){s=function(a,b){var c=0,d=b||[];if(g.call(a)==="[object Array]")Array.prototype.push.apply(d,a);else if(typeof a.length=="number")for(var e=a.length;c<e;c++)d.push(a[c]);else for(;a[c];c++)d.push(a[c]);return d}}var u,v;c.documentElement.compareDocumentPosition?u=function(a,b){if(a===b){h=!0;return 0}if(!a.compareDocumentPosition||!b.compareDocumentPosition)return a.compareDocumentPosition?-1:1;return a.compareDocumentPosition(b)&4?-1:1}:(u=function(a,b){if(a===b){h=!0;return 0}if(a.sourceIndex&&b.sourceIndex)return a.sourceIndex-b.sourceIndex;var c,d,e=[],f=[],g=a.parentNode,i=b.parentNode,j=g;if(g===i)return v(a,b);if(!g)return-1;if(!i)return 1;while(j)e.unshift(j),j=j.parentNode;j=i;while(j)f.unshift(j),j=j.parentNode;c=e.length,d=f.length;for(var k=0;k<c&&k<d;k++)if(e[k]!==f[k])return v(e[k],f[k]);return k===c?v(a,f[k],-1):v(e[k],b,1)},v=function(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}),function(){var a=c.createElement("div"),d="script"+(new Date).getTime(),e=c.documentElement;a.innerHTML="<a name='"+d+"'/>",e.insertBefore(a,e.firstChild),c.getElementById(d)&&(o.find.ID=function(a,c,d){if(typeof c.getElementById!="undefined"&&!d){var e=c.getElementById(a[1]);return e?e.id===a[1]||typeof e.getAttributeNode!="undefined"&&e.getAttributeNode("id").nodeValue===a[1]?[e]:b:[]}},o.filter.ID=function(a,b){var c=typeof a.getAttributeNode!="undefined"&&a.getAttributeNode("id");return a.nodeType===1&&c&&c.nodeValue===b}),e.removeChild(a),e=a=null}(),function(){var a=c.createElement("div");a.appendChild(c.createComment("")),a.getElementsByTagName("*").length>0&&(o.find.TAG=function(a,b){var c=b.getElementsByTagName(a[1]);if(a[1]==="*"){var d=[];for(var e=0;c[e];e++)c[e].nodeType===1&&d.push(c[e]);c=d}return c}),a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!="undefined"&&a.firstChild.getAttribute("href")!=="#"&&(o.attrHandle.href=function(a){return a.getAttribute("href",2)}),a=null}(),c.querySelectorAll&&function(){var a=m,b=c.createElement("div"),d="__sizzle__";b.innerHTML="<p class='TEST'></p>";if(!b.querySelectorAll||b.querySelectorAll(".TEST").length!==0){m=function(b,e,f,g){e=e||c;if(!g&&!m.isXML(e)){var h=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);if(h&&(e.nodeType===1||e.nodeType===9)){if(h[1])return s(e.getElementsByTagName(b),f);if(h[2]&&o.find.CLASS&&e.getElementsByClassName)return s(e.getElementsByClassName(h[2]),f)}if(e.nodeType===9){if(b==="body"&&e.body)return s([e.body],f);if(h&&h[3]){var i=e.getElementById(h[3]);if(!i||!i.parentNode)return s([],f);if(i.id===h[3])return s([i],f)}try{return s(e.querySelectorAll(b),f)}catch(j){}}else if(e.nodeType===1&&e.nodeName.toLowerCase()!=="object"){var k=e,l=e.getAttribute("id"),n=l||d,p=e.parentNode,q=/^\s*[+~]/.test(b);l?n=n.replace(/'/g,"\\$&"):e.setAttribute("id",n),q&&p&&(e=e.parentNode);try{if(!q||p)return s(e.querySelectorAll("[id='"+n+"'] "+b),f)}catch(r){}finally{l||k.removeAttribute("id")}}}return a(b,e,f,g)};for(var e in a)m[e]=a[e];b=null}}(),function(){var a=c.documentElement,b=a.matchesSelector||a.mozMatchesSelector||a.webkitMatchesSelector||a.msMatchesSelector;if(b){var d=!b.call(c.createElement("div"),"div"),e=!1;try{b.call(c.documentElement,"[test!='']:sizzle")}catch(f){e=!0}m.matchesSelector=function(a,c){c=c.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!m.isXML(a))try{if(e||!o.match.PSEUDO.test(c)&&!/!=/.test(c)){var f=b.call(a,c);if(f||!d||a.document&&a.document.nodeType!==11)return f}}catch(g){}return m(c,null,null,[a]).length>0}}}(),function(){var a=c.createElement("div");a.innerHTML="<div class='test e'></div><div class='test'></div>";if(!!a.getElementsByClassName&&a.getElementsByClassName("e").length!==0){a.lastChild.className="e";if(a.getElementsByClassName("e").length===1)return;o.order.splice(1,0,"CLASS"),o.find.CLASS=function(a,b,c){if(typeof b.getElementsByClassName!="undefined"&&!c)return b.getElementsByClassName(a[1])},a=null}}(),c.documentElement.contains?m.contains=function(a,b){return a!==b&&(a.contains?a.contains(b):!0)}:c.documentElement.compareDocumentPosition?m.contains=function(a,b){return!!(a.compareDocumentPosition(b)&16)}:m.contains=function(){return!1},m.isXML=function(a){var b=(a?a.ownerDocument||a:0).documentElement;return b?b.nodeName!=="HTML":!1};var y=function(a,b,c){var d,e=[],f="",g=b.nodeType?[b]:b;while(d=o.match.PSEUDO.exec(a))f+=d[0],a=a.replace(o.match.PSEUDO,"");a=o.relative[a]?a+"*":a;for(var h=0,i=g.length;h<i;h++)m(a,g[h],e,c);return m.filter(f,e)};m.attr=f.attr,m.selectors.attrMap={},f.find=m,f.expr=m.selectors,f.expr[":"]=f.expr.filters,f.unique=m.uniqueSort,f.text=m.getText,f.isXMLDoc=m.isXML,f.contains=m.contains}();var L=/Until$/,M=/^(?:parents|prevUntil|prevAll)/,N=/,/,O=/^.[^:#\[\.,]*$/,P=Array.prototype.slice,Q=f.expr.match.POS,R={children:!0,contents:!0,next:!0,prev:!0};f.fn.extend({find:function(a){var b=this,c,d;if(typeof a!="string")return f(a).filter(function(){for(c=0,d=b.length;c<d;c++)if(f.contains(b[c],this))return!0});var e=this.pushStack("","find",a),g,h,i;for(c=0,d=this.length;c<d;c++){g=e.length,f.find(a,this[c],e);if(c>0)for(h=g;h<e.length;h++)for(i=0;i<g;i++)if(e[i]===e[h]){e.splice(h--,1);break}}return e},has:function(a){var b=f(a);return this.filter(function(){for(var a=0,c=b.length;a<c;a++)if(f.contains(this,b[a]))return!0})},not:function(a){return this.pushStack(T(this,a,!1),"not",a)},filter:function(a){return this.pushStack(T(this,a,!0),"filter",a)},is:function(a){return!!a&&(typeof a=="string"?Q.test(a)?f(a,this.context).index(this[0])>=0:f.filter(a,this).length>0:this.filter(a).length>0)},closest:function(a,b){var c=[],d,e,g=this[0];if(f.isArray(a)){var h=1;while(g&&g.ownerDocument&&g!==b){for(d=0;d<a.length;d++)f(g).is(a[d])&&c.push({selector:a[d],elem:g,level:h});g=g.parentNode,h++}return c}var i=Q.test(a)||typeof a!="string"?f(a,b||this.context):0;for(d=0,e=this.length;d<e;d++){g=this[d];while(g){if(i?i.index(g)>-1:f.find.matchesSelector(g,a)){c.push(g);break}g=g.parentNode;if(!g||!g.ownerDocument||g===b||g.nodeType===11)break}}c=c.length>1?f.unique(c):c;return this.pushStack(c,"closest",a)},index:function(a){if(!a)return this[0]&&this[0].parentNode?this.prevAll().length:-1;if(typeof a=="string")return f.inArray(this[0],f(a));return f.inArray(a.jquery?a[0]:a,this)},add:function(a,b){var c=typeof a=="string"?f(a,b):f.makeArray(a&&a.nodeType?[a]:a),d=f.merge(this.get(),c);return this.pushStack(S(c[0])||S(d[0])?d:f.unique(d))},andSelf:function(){return this.add(this.prevObject)}}),f.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return f.dir(a,"parentNode")},parentsUntil:function(a,b,c){return f.dir(a,"parentNode",c)},next:function(a){return f.nth(a,2,"nextSibling")},prev:function(a){return f.nth(a,2,"previousSibling")},nextAll:function(a){return f.dir(a,"nextSibling")},prevAll:function(a){return f.dir(a,"previousSibling")},nextUntil:function(a,b,c){return f.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return f.dir(a,"previousSibling",c)},siblings:function(a){return f.sibling(a.parentNode.firstChild,a)},children:function(a){return f.sibling(a.firstChild)},contents:function(a){return f.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:f.makeArray(a.childNodes)}},function(a,b){f.fn[a]=function(c,d){var e=f.map(this,b,c);L.test(a)||(d=c),d&&typeof d=="string"&&(e=f.filter(d,e)),e=this.length>1&&!R[a]?f.unique(e):e,(this.length>1||N.test(d))&&M.test(a)&&(e=e.reverse());return this.pushStack(e,a,P.call(arguments).join(","))}}),f.extend({filter:function(a,b,c){c&&(a=":not("+a+")");return b.length===1?f.find.matchesSelector(b[0],a)?[b[0]]:[]:f.find.matches(a,b)},dir:function(a,c,d){var e=[],g=a[c];while(g&&g.nodeType!==9&&(d===b||g.nodeType!==1||!f(g).is(d)))g.nodeType===1&&e.push(g),g=g[c];return e},nth:function(a,b,c,d){b=b||1;var e=0;for(;a;a=a[c])if(a.nodeType===1&&++e===b)break;return a},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var V="abbr|article|aside|audio|canvas|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",W=/ jQuery\d+="(?:\d+|null)"/g,X=/^\s+/,Y=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,Z=/<([\w:]+)/,$=/<tbody/i,_=/<|&#?\w+;/,ba=/<(?:script|style)/i,bb=/<(?:script|object|embed|option|style)/i,bc=new RegExp("<(?:"+V+")","i"),bd=/checked\s*(?:[^=]|=\s*.checked.)/i,be=/\/(java|ecma)script/i,bf=/^\s*<!(?:\[CDATA\[|\-\-)/,bg={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},bh=U(c);bg.optgroup=bg.option,bg.tbody=bg.tfoot=bg.colgroup=bg.caption=bg.thead,bg.th=bg.td,f.support.htmlSerialize||(bg._default=[1,"div<div>","</div>"]),f.fn.extend({text:function(a){if(f.isFunction(a))return this.each(function(b){var c=f(this);c.text(a.call(this,b,c.text()))});if(typeof a!="object"&&a!==b)return this.empty().append((this[0]&&this[0].ownerDocument||c).createTextNode(a));return f.text(this)},wrapAll:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapAll(a.call(this,b))});if(this[0]){var b=f(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapInner(a.call(this,b))});return this.each(function(){var b=f(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=f.isFunction(a);return this.each(function(c){f(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){f.nodeName(this,"body")||f(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=f.clean(arguments);a.push.apply(a,this.toArray());return this.pushStack(a,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=this.pushStack(this,"after",arguments);a.push.apply(a,f.clean(arguments));return a}},remove:function(a,b){for(var c=0,d;(d=this[c])!=null;c++)if(!a||f.filter(a,[d]).length)!b&&d.nodeType===1&&(f.cleanData(d.getElementsByTagName("*")),f.cleanData([d])),d.parentNode&&d.parentNode.removeChild(d);return this},empty:function()
{for(var a=0,b;(b=this[a])!=null;a++){b.nodeType===1&&f.cleanData(b.getElementsByTagName("*"));while(b.firstChild)b.removeChild(b.firstChild)}return this},clone:function(a,b){a=a==null?!1:a,b=b==null?a:b;return this.map(function(){return f.clone(this,a,b)})},html:function(a){if(a===b)return this[0]&&this[0].nodeType===1?this[0].innerHTML.replace(W,""):null;if(typeof a=="string"&&!ba.test(a)&&(f.support.leadingWhitespace||!X.test(a))&&!bg[(Z.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(Y,"<$1></$2>");try{for(var c=0,d=this.length;c<d;c++)this[c].nodeType===1&&(f.cleanData(this[c].getElementsByTagName("*")),this[c].innerHTML=a)}catch(e){this.empty().append(a)}}else f.isFunction(a)?this.each(function(b){var c=f(this);c.html(a.call(this,b,c.html()))}):this.empty().append(a);return this},replaceWith:function(a){if(this[0]&&this[0].parentNode){if(f.isFunction(a))return this.each(function(b){var c=f(this),d=c.html();c.replaceWith(a.call(this,b,d))});typeof a!="string"&&(a=f(a).detach());return this.each(function(){var b=this.nextSibling,c=this.parentNode;f(this).remove(),b?f(b).before(a):f(c).append(a)})}return this.length?this.pushStack(f(f.isFunction(a)?a():a),"replaceWith",a):this},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,d){var e,g,h,i,j=a[0],k=[];if(!f.support.checkClone&&arguments.length===3&&typeof j=="string"&&bd.test(j))return this.each(function(){f(this).domManip(a,c,d,!0)});if(f.isFunction(j))return this.each(function(e){var g=f(this);a[0]=j.call(this,e,c?g.html():b),g.domManip(a,c,d)});if(this[0]){i=j&&j.parentNode,f.support.parentNode&&i&&i.nodeType===11&&i.childNodes.length===this.length?e={fragment:i}:e=f.buildFragment(a,this,k),h=e.fragment,h.childNodes.length===1?g=h=h.firstChild:g=h.firstChild;if(g){c=c&&f.nodeName(g,"tr");for(var l=0,m=this.length,n=m-1;l<m;l++)d.call(c?bi(this[l],g):this[l],e.cacheable||m>1&&l<n?f.clone(h,!0,!0):h)}k.length&&f.each(k,bp)}return this}}),f.buildFragment=function(a,b,d){var e,g,h,i,j=a[0];b&&b[0]&&(i=b[0].ownerDocument||b[0]),i.createDocumentFragment||(i=c),a.length===1&&typeof j=="string"&&j.length<512&&i===c&&j.charAt(0)==="<"&&!bb.test(j)&&(f.support.checkClone||!bd.test(j))&&(f.support.html5Clone||!bc.test(j))&&(g=!0,h=f.fragments[j],h&&h!==1&&(e=h)),e||(e=i.createDocumentFragment(),f.clean(a,i,e,d)),g&&(f.fragments[j]=h?e:1);return{fragment:e,cacheable:g}},f.fragments={},f.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){f.fn[a]=function(c){var d=[],e=f(c),g=this.length===1&&this[0].parentNode;if(g&&g.nodeType===11&&g.childNodes.length===1&&e.length===1){e[b](this[0]);return this}for(var h=0,i=e.length;h<i;h++){var j=(h>0?this.clone(!0):this).get();f(e[h])[b](j),d=d.concat(j)}return this.pushStack(d,a,e.selector)}}),f.extend({clone:function(a,b,c){var d,e,g,h=f.support.html5Clone||!bc.test("<"+a.nodeName)?a.cloneNode(!0):bo(a);if((!f.support.noCloneEvent||!f.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!f.isXMLDoc(a)){bk(a,h),d=bl(a),e=bl(h);for(g=0;d[g];++g)e[g]&&bk(d[g],e[g])}if(b){bj(a,h);if(c){d=bl(a),e=bl(h);for(g=0;d[g];++g)bj(d[g],e[g])}}d=e=null;return h},clean:function(a,b,d,e){var g;b=b||c,typeof b.createElement=="undefined"&&(b=b.ownerDocument||b[0]&&b[0].ownerDocument||c);var h=[],i;for(var j=0,k;(k=a[j])!=null;j++){typeof k=="number"&&(k+="");if(!k)continue;if(typeof k=="string")if(!_.test(k))k=b.createTextNode(k);else{k=k.replace(Y,"<$1></$2>");var l=(Z.exec(k)||["",""])[1].toLowerCase(),m=bg[l]||bg._default,n=m[0],o=b.createElement("div");b===c?bh.appendChild(o):U(b).appendChild(o),o.innerHTML=m[1]+k+m[2];while(n--)o=o.lastChild;if(!f.support.tbody){var p=$.test(k),q=l==="table"&&!p?o.firstChild&&o.firstChild.childNodes:m[1]==="<table>"&&!p?o.childNodes:[];for(i=q.length-1;i>=0;--i)f.nodeName(q[i],"tbody")&&!q[i].childNodes.length&&q[i].parentNode.removeChild(q[i])}!f.support.leadingWhitespace&&X.test(k)&&o.insertBefore(b.createTextNode(X.exec(k)[0]),o.firstChild),k=o.childNodes}var r;if(!f.support.appendChecked)if(k[0]&&typeof (r=k.length)=="number")for(i=0;i<r;i++)bn(k[i]);else bn(k);k.nodeType?h.push(k):h=f.merge(h,k)}if(d){g=function(a){return!a.type||be.test(a.type)};for(j=0;h[j];j++)if(e&&f.nodeName(h[j],"script")&&(!h[j].type||h[j].type.toLowerCase()==="text/javascript"))e.push(h[j].parentNode?h[j].parentNode.removeChild(h[j]):h[j]);else{if(h[j].nodeType===1){var s=f.grep(h[j].getElementsByTagName("script"),g);h.splice.apply(h,[j+1,0].concat(s))}d.appendChild(h[j])}}return h},cleanData:function(a){var b,c,d=f.cache,e=f.event.special,g=f.support.deleteExpando;for(var h=0,i;(i=a[h])!=null;h++){if(i.nodeName&&f.noData[i.nodeName.toLowerCase()])continue;c=i[f.expando];if(c){b=d[c];if(b&&b.events){for(var j in b.events)e[j]?f.event.remove(i,j):f.removeEvent(i,j,b.handle);b.handle&&(b.handle.elem=null)}g?delete i[f.expando]:i.removeAttribute&&i.removeAttribute(f.expando),delete d[c]}}}});var bq=/alpha\([^)]*\)/i,br=/opacity=([^)]*)/,bs=/([A-Z]|^ms)/g,bt=/^-?\d+(?:px)?$/i,bu=/^-?\d/,bv=/^([\-+])=([\-+.\de]+)/,bw={position:"absolute",visibility:"hidden",display:"block"},bx=["Left","Right"],by=["Top","Bottom"],bz,bA,bB;f.fn.css=function(a,c){if(arguments.length===2&&c===b)return this;return f.access(this,a,c,!0,function(a,c,d){return d!==b?f.style(a,c,d):f.css(a,c)})},f.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=bz(a,"opacity","opacity");return c===""?"1":c}return a.style.opacity}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":f.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,d,e){if(!!a&&a.nodeType!==3&&a.nodeType!==8&&!!a.style){var g,h,i=f.camelCase(c),j=a.style,k=f.cssHooks[i];c=f.cssProps[i]||i;if(d===b){if(k&&"get"in k&&(g=k.get(a,!1,e))!==b)return g;return j[c]}h=typeof d,h==="string"&&(g=bv.exec(d))&&(d=+(g[1]+1)*+g[2]+parseFloat(f.css(a,c)),h="number");if(d==null||h==="number"&&isNaN(d))return;h==="number"&&!f.cssNumber[i]&&(d+="px");if(!k||!("set"in k)||(d=k.set(a,d))!==b)try{j[c]=d}catch(l){}}},css:function(a,c,d){var e,g;c=f.camelCase(c),g=f.cssHooks[c],c=f.cssProps[c]||c,c==="cssFloat"&&(c="float");if(g&&"get"in g&&(e=g.get(a,!0,d))!==b)return e;if(bz)return bz(a,c)},swap:function(a,b,c){var d={};for(var e in b)d[e]=a.style[e],a.style[e]=b[e];c.call(a);for(e in b)a.style[e]=d[e]}}),f.curCSS=f.css,f.each(["height","width"],function(a,b){f.cssHooks[b]={get:function(a,c,d){var e;if(c){if(a.offsetWidth!==0)return bC(a,b,d);f.swap(a,bw,function(){e=bC(a,b,d)});return e}},set:function(a,b){if(!bt.test(b))return b;b=parseFloat(b);if(b>=0)return b+"px"}}}),f.support.opacity||(f.cssHooks.opacity={get:function(a,b){return br.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=f.isNumeric(b)?"alpha(opacity="+b*100+")":"",g=d&&d.filter||c.filter||"";c.zoom=1;if(b>=1&&f.trim(g.replace(bq,""))===""){c.removeAttribute("filter");if(d&&!d.filter)return}c.filter=bq.test(g)?g.replace(bq,e):g+" "+e}}),f(function(){f.support.reliableMarginRight||(f.cssHooks.marginRight={get:function(a,b){var c;f.swap(a,{display:"inline-block"},function(){b?c=bz(a,"margin-right","marginRight"):c=a.style.marginRight});return c}})}),c.defaultView&&c.defaultView.getComputedStyle&&(bA=function(a,b){var c,d,e;b=b.replace(bs,"-$1").toLowerCase(),(d=a.ownerDocument.defaultView)&&(e=d.getComputedStyle(a,null))&&(c=e.getPropertyValue(b),c===""&&!f.contains(a.ownerDocument.documentElement,a)&&(c=f.style(a,b)));return c}),c.documentElement.currentStyle&&(bB=function(a,b){var c,d,e,f=a.currentStyle&&a.currentStyle[b],g=a.style;f===null&&g&&(e=g[b])&&(f=e),!bt.test(f)&&bu.test(f)&&(c=g.left,d=a.runtimeStyle&&a.runtimeStyle.left,d&&(a.runtimeStyle.left=a.currentStyle.left),g.left=b==="fontSize"?"1em":f||0,f=g.pixelLeft+"px",g.left=c,d&&(a.runtimeStyle.left=d));return f===""?"auto":f}),bz=bA||bB,f.expr&&f.expr.filters&&(f.expr.filters.hidden=function(a){var b=a.offsetWidth,c=a.offsetHeight;return b===0&&c===0||!f.support.reliableHiddenOffsets&&(a.style&&a.style.display||f.css(a,"display"))==="none"},f.expr.filters.visible=function(a){return!f.expr.filters.hidden(a)});var bD=/%20/g,bE=/\[\]$/,bF=/\r?\n/g,bG=/#.*$/,bH=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,bI=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,bJ=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,bK=/^(?:GET|HEAD)$/,bL=/^\/\//,bM=/\?/,bN=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,bO=/^(?:select|textarea)/i,bP=/\s+/,bQ=/([?&])_=[^&]*/,bR=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,bS=f.fn.load,bT={},bU={},bV,bW,bX=["*/"]+["*"];try{bV=e.href}catch(bY){bV=c.createElement("a"),bV.href="",bV=bV.href}bW=bR.exec(bV.toLowerCase())||[],f.fn.extend({load:function(a,c,d){if(typeof a!="string"&&bS)return bS.apply(this,arguments);if(!this.length)return this;var e=a.indexOf(" ");if(e>=0){var g=a.slice(e,a.length);a=a.slice(0,e)}var h="GET";c&&(f.isFunction(c)?(d=c,c=b):typeof c=="object"&&(c=f.param(c,f.ajaxSettings.traditional),h="POST"));var i=this;f.ajax({url:a,type:h,dataType:"html",data:c,complete:function(a,b,c){c=a.responseText,a.isResolved()&&(a.done(function(a){c=a}),i.html(g?f("<div>").append(c.replace(bN,"")).find(g):c)),d&&i.each(d,[c,b,a])}});return this},serialize:function(){return f.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?f.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||bO.test(this.nodeName)||bI.test(this.type))}).map(function(a,b){var c=f(this).val();return c==null?null:f.isArray(c)?f.map(c,function(a,c){return{name:b.name,value:a.replace(bF,"\r\n")}}):{name:b.name,value:c.replace(bF,"\r\n")}}).get()}}),f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){f.fn[b]=function(a){return this.on(b,a)}}),f.each(["get","post"],function(a,c){f[c]=function(a,d,e,g){f.isFunction(d)&&(g=g||e,e=d,d=b);return f.ajax({type:c,url:a,data:d,success:e,dataType:g})}}),f.extend({getScript:function(a,c){return f.get(a,b,c,"script")},getJSON:function(a,b,c){return f.get(a,b,c,"json")},ajaxSetup:function(a,b){b?b_(a,f.ajaxSettings):(b=a,a=f.ajaxSettings),b_(a,b);return a},ajaxSettings:{url:bV,isLocal:bJ.test(bW[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":bX},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":f.parseJSON,"text xml":f.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:bZ(bT),ajaxTransport:bZ(bU),ajax:function(a,c){function w(a,c,l,m){if(s!==2){s=2,q&&clearTimeout(q),p=b,n=m||"",v.readyState=a>0?4:0;var o,r,u,w=c,x=l?cb(d,v,l):b,y,z;if(a>=200&&a<300||a===304){if(d.ifModified){if(y=v.getResponseHeader("Last-Modified"))f.lastModified[k]=y;if(z=v.getResponseHeader("Etag"))f.etag[k]=z}if(a===304)w="notmodified",o=!0;else try{r=cc(d,x),w="success",o=!0}catch(A){w="parsererror",u=A}}else{u=w;if(!w||a)w="error",a<0&&(a=0)}v.status=a,v.statusText=""+(c||w),o?h.resolveWith(e,[r,w,v]):h.rejectWith(e,[v,w,u]),v.statusCode(j),j=b,t&&g.trigger("ajax"+(o?"Success":"Error"),[v,d,o?r:u]),i.fireWith(e,[v,w]),t&&(g.trigger("ajaxComplete",[v,d]),--f.active||f.event.trigger("ajaxStop"))}}typeof a=="object"&&(c=a,a=b),c=c||{};var d=f.ajaxSetup({},c),e=d.context||d,g=e!==d&&(e.nodeType||e instanceof f)?f(e):f.event,h=f.Deferred(),i=f.Callbacks("once memory"),j=d.statusCode||{},k,l={},m={},n,o,p,q,r,s=0,t,u,v={readyState:0,setRequestHeader:function(a,b){if(!s){var c=a.toLowerCase();a=m[c]=m[c]||a,l[a]=b}return this},getAllResponseHeaders:function(){return s===2?n:null},getResponseHeader:function(a){var c;if(s===2){if(!o){o={};while(c=bH.exec(n))o[c[1].toLowerCase()]=c[2]}c=o[a.toLowerCase()]}return c===b?null:c},overrideMimeType:function(a){s||(d.mimeType=a);return this},abort:function(a){a=a||"abort",p&&p.abort(a),w(0,a);return this}};h.promise(v),v.success=v.done,v.error=v.fail,v.complete=i.add,v.statusCode=function(a){if(a){var b;if(s<2)for(b in a)j[b]=[j[b],a[b]];else b=a[v.status],v.then(b,b)}return this},d.url=((a||d.url)+"").replace(bG,"").replace(bL,bW[1]+"//"),d.dataTypes=f.trim(d.dataType||"*").toLowerCase().split(bP),d.crossDomain==null&&(r=bR.exec(d.url.toLowerCase()),d.crossDomain=!(!r||r[1]==bW[1]&&r[2]==bW[2]&&(r[3]||(r[1]==="http:"?80:443))==(bW[3]||(bW[1]==="http:"?80:443)))),d.data&&d.processData&&typeof d.data!="string"&&(d.data=f.param(d.data,d.traditional)),b$(bT,d,c,v);if(s===2)return!1;t=d.global,d.type=d.type.toUpperCase(),d.hasContent=!bK.test(d.type),t&&f.active++===0&&f.event.trigger("ajaxStart");if(!d.hasContent){d.data&&(d.url+=(bM.test(d.url)?"&":"?")+d.data,delete d.data),k=d.url;if(d.cache===!1){var x=f.now(),y=d.url.replace(bQ,"$1_="+x);d.url=y+(y===d.url?(bM.test(d.url)?"&":"?")+"_="+x:"")}}(d.data&&d.hasContent&&d.contentType!==!1||c.contentType)&&v.setRequestHeader("Content-Type",d.contentType),d.ifModified&&(k=k||d.url,f.lastModified[k]&&v.setRequestHeader("If-Modified-Since",f.lastModified[k]),f.etag[k]&&v.setRequestHeader("If-None-Match",f.etag[k])),v.setRequestHeader("Accept",d.dataTypes[0]&&d.accepts[d.dataTypes[0]]?d.accepts[d.dataTypes[0]]+(d.dataTypes[0]!=="*"?", "+bX+"; q=0.01":""):d.accepts["*"]);for(u in d.headers)v.setRequestHeader(u,d.headers[u]);if(d.beforeSend&&(d.beforeSend.call(e,v,d)===!1||s===2)){v.abort();return!1}for(u in{success:1,error:1,complete:1})v[u](d[u]);p=b$(bU,d,c,v);if(!p)w(-1,"No Transport");else{v.readyState=1,t&&g.trigger("ajaxSend",[v,d]),d.async&&d.timeout>0&&(q=setTimeout(function(){v.abort("timeout")},d.timeout));try{s=1,p.send(l,w)}catch(z){if(s<2)w(-1,z);else throw z}}return v},param:function(a,c){var d=[],e=function(a,b){b=f.isFunction(b)?b():b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=f.ajaxSettings.traditional);if(f.isArray(a)||a.jquery&&!f.isPlainObject(a))f.each(a,function(){e(this.name,this.value)});else for(var g in a)ca(g,a[g],c,e);return d.join("&").replace(bD,"+")}}),f.extend({active:0,lastModified:{},etag:{}});var cd=f.now(),ce=/(\=)\?(&|$)|\?\?/i;f.ajaxSetup({jsonp:"callback",jsonpCallback:function(){return f.expando+"_"+cd++}}),f.ajaxPrefilter("json jsonp",function(b,c,d){var e=b.contentType==="application/x-www-form-urlencoded"&&typeof b.data=="string";if(b.dataTypes[0]==="jsonp"||b.jsonp!==!1&&(ce.test(b.url)||e&&ce.test(b.data))){var g,h=b.jsonpCallback=f.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,i=a[h],j=b.url,k=b.data,l="$1"+h+"$2";b.jsonp!==!1&&(j=j.replace(ce,l),b.url===j&&(e&&(k=k.replace(ce,l)),b.data===k&&(j+=(/\?/.test(j)?"&":"?")+b.jsonp+"="+h))),b.url=j,b.data=k,a[h]=function(a){g=[a]},d.always(function(){a[h]=i,g&&f.isFunction(i)&&a[h](g[0])}),b.converters["script json"]=function(){g||f.error(h+" was not called");return g[0]},b.dataTypes[0]="json";return"script"}}),f.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){f.globalEval(a);return a}}}),f.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),f.ajaxTransport("script",function(a){if(a.crossDomain){var d,e=c.head||c.getElementsByTagName("head")[0]||c.documentElement;return{send:function(f,g){d=c.createElement("script"),d.async="async",a.scriptCharset&&(d.charset=a.scriptCharset),d.src=a.url,d.onload=d.onreadystatechange=function(a,c){if(c||!d.readyState||/loaded|complete/.test(d.readyState))d.onload=d.onreadystatechange=null,e&&d.parentNode&&e.removeChild(d),d=b,c||g(200,"success")},e.insertBefore(d,e.firstChild)},abort:function(){d&&d.onload(0,1)}}}});var cf=a.ActiveXObject?function(){for(var a in ch)ch[a](0,1)}:!1,cg=0,ch;f.ajaxSettings.xhr=a.ActiveXObject?function(){return!this.isLocal&&ci()||cj()}:ci,function(a){f.extend(f.support,{ajax:!!a,cors:!!a&&"withCredentials"in a})}(f.ajaxSettings.xhr()),f.support.ajax&&f.ajaxTransport(function(c){if(!c.crossDomain||f.support.cors){var d;return{send:function(e,g){var h=c.xhr(),i,j;c.username?h.open(c.type,c.url,c.async,c.username,c.password):h.open(c.type,c.url,c.async);if(c.xhrFields)for(j in c.xhrFields)h[j]=c.xhrFields[j];c.mimeType&&h.overrideMimeType&&h.overrideMimeType(c.mimeType),!c.crossDomain&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");try{for(j in e)h.setRequestHeader(j,e[j])}catch(k){}h.send(c.hasContent&&c.data||null),d=function(a,e){var j,k,l,m,n;try{if(d&&(e||h.readyState===4)){d=b,i&&(h.onreadystatechange=f.noop,cf&&delete ch[i]);if(e)h.readyState!==4&&h.abort();else{j=h.status,l=h.getAllResponseHeaders(),m={},n=h.responseXML,n&&n.documentElement&&(m.xml=n),m.text=h.responseText;try{k=h.statusText}catch(o){k=""}!j&&c.isLocal&&!c.crossDomain?j=m.text?200:404:j===1223&&(j=204)}}}catch(p){e||g(-1,p)}m&&g(j,k,m,l)},!c.async||h.readyState===4?d():(i=++cg,cf&&(ch||(ch={},f(a).unload(cf)),ch[i]=d),h.onreadystatechange=d)},abort:function(){d&&d(0,1)}}}});var ck={},cl,cm,cn=/^(?:toggle|show|hide)$/,co=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,cp,cq=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]],cr;f.fn.extend({show:function(a,b,c){var d,e;if(a||a===0)return this.animate(cu("show",3),a,b,c);for(var g=0,h=this.length;g<h;g++)d=this[g],d.style&&(e=d.style.display,!f._data(d,"olddisplay")&&e==="none"&&(e=d.style.display=""),e===""&&f.css(d,"display")==="none"&&f._data(d,"olddisplay",cv(d.nodeName)));for(g=0;g<h;g++){d=this[g];if(d.style){e=d.style.display;if(e===""||e==="none")d.style.display=f._data(d,"olddisplay")||""}}return this},hide:function(a,b,c){if(a||a===0)return this.animate(cu("hide",3),a,b,c);var d,e,g=0,h=this.length;for(;g<h;g++)d=this[g],d.style&&(e=f.css(d,"display"),e!=="none"&&!f._data(d,"olddisplay")&&f._data(d,"olddisplay",e));for(g=0;g<h;g++)this[g].style&&(this[g].style.display="none");return this},_toggle:f.fn.toggle,toggle:function(a,b,c){var d=typeof a=="boolean";f.isFunction(a)&&f.isFunction(b)?this._toggle.apply(this,arguments):a==null||d?this.each(function(){var b=d?a:f(this).is(":hidden");f(this)[b?"show":"hide"]()}):this.animate(cu("toggle",3),a,b,c);return this},fadeTo:function(a,b,c,d){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){function g(){e.queue===!1&&f._mark(this);var b=f.extend({},e),c=this.nodeType===1,d=c&&f(this).is(":hidden"),g,h,i,j,k,l,m,n,o;b.animatedProperties={};for(i in a){g=f.camelCase(i),i!==g&&(a[g]=a[i],delete a[i]),h=a[g],f.isArray(h)?(b.animatedProperties[g]=h[1],h=a[g]=h[0]):b.animatedProperties[g]=b.specialEasing&&b.specialEasing[g]||b.easing||"swing";if(h==="hide"&&d||h==="show"&&!d)return b.complete.call(this);c&&(g==="height"||g==="width")&&(b.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY],f.css(this,"display")==="inline"&&f.css(this,"float")==="none"&&(!f.support.inlineBlockNeedsLayout||cv(this.nodeName)==="inline"?this.style.display="inline-block":this.style.zoom=1))}b.overflow!=null&&(this.style.overflow="hidden");for(i in a)j=new f.fx(this,b,i),h=a[i],cn.test(h)?(o=f._data(this,"toggle"+i)||(h==="toggle"?d?"show":"hide":0),o?(f._data(this,"toggle"+i,o==="show"?"hide":"show"),j[o]()):j[h]()):(k=co.exec(h),l=j.cur(),k?(m=parseFloat(k[2]),n=k[3]||(f.cssNumber[i]?"":"px"),n!=="px"&&(f.style(this,i,(m||1)+n),l=(m||1)/j.cur()*l,f.style(this,i,l+n)),k[1]&&(m=(k[1]==="-="?-1:1)*m+l),j.custom(l,m,n)):j.custom(l,h,""));return!0}var e=f.speed(b,c,d);if(f.isEmptyObject(a))return this.each(e.complete,[!1]);a=f.extend({},a);return e.queue===!1?this.each(g):this.queue(e.queue,g)},stop:function(a,c,d){typeof a!="string"&&(d=c,c=a,a=b),c&&a!==!1&&this.queue(a||"fx",[]);return this.each(function(){function h(a,b,c){var e=b[c];f.removeData(a,c,!0),e.stop(d)}var b,c=!1,e=f.timers,g=f._data(this);d||f._unmark(!0,this);if(a==null)for(b in g)g[b]&&g[b].stop&&b.indexOf(".run")===b.length-4&&h(this,g,b);else g[b=a+".run"]&&g[b].stop&&h(this,g,b);for(b=e.length;b--;)e[b].elem===this&&(a==null||e[b].queue===a)&&(d?e[b](!0):e[b].saveState(),c=!0,e.splice(b,1));(!d||!c)&&f.dequeue(this,a)})}}),f.each({slideDown:cu("show",1),slideUp:cu("hide",1),slideToggle:cu("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){f.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),f.extend({speed:function(a,b,c){var d=a&&typeof a=="object"?f.extend({},a):{complete:c||!c&&b||f.isFunction(a)&&a,duration:a,easing:c&&b||b&&!f.isFunction(b)&&b};d.duration=f.fx.off?0:typeof d.duration=="number"?d.duration:d.duration in f.fx.speeds?f.fx.speeds[d.duration]:f.fx.speeds._default;if(d.queue==null||d.queue===!0)d.queue="fx";d.old=d.complete,d.complete=function(a){f.isFunction(d.old)&&d.old.call(this),d.queue?f.dequeue(this,d.queue):a!==!1&&f._unmark(this)};return d},easing:{linear:function(a,b,c,d){return c+d*a},swing:function(a,b,c,d){return(-Math.cos(a*Math.PI)/2+.5)*d+c}},timers:[],fx:function(a,b,c){this.options=b,this.elem=a,this.prop=c,b.orig=b.orig||{}}}),f.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this),(f.fx.step[this.prop]||f.fx.step._default)(this)},cur:function(){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null))return this.elem[this.prop];var a,b=f.css(this.elem,this.prop);return isNaN(a=parseFloat(b))?!b||b==="auto"?0:b:a},custom:function(a,c,d){function h(a){return e.step(a)}var e=this,g=f.fx;this.startTime=cr||cs(),this.end=c,this.now=this.start=a,this.pos=this.state=0,this.unit=d||this.unit||(f.cssNumber[this.prop]?"":"px"),h.queue=this.options.queue,h.elem=this.elem,h.saveState=function(){e.options.hide&&f._data(e.elem,"fxshow"+e.prop)===b&&f._data(e.elem,"fxshow"+e.prop,e.start)},h()&&f.timers.push(h)&&!cp&&(cp=setInterval(g.tick,g.interval))},show:function(){var a=f._data(this.elem,"fxshow"+this.prop);this.options.orig[this.prop]=a||f.style(this.elem,this.prop),this.options.show=!0,a!==b?this.custom(this.cur(),a):this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur()),f(this.elem).show()},hide:function(){this.options.orig[this.prop]=f._data(this.elem,"fxshow"+this.prop)||f.style(this.elem,this.prop),this.options.hide=!0,this.custom(this.cur(),0)},step:function(a){var b,c,d,e=cr||cs(),g=!0,h=this.elem,i=this.options;if(a||e>=i.duration+this.startTime){this.now=this.end,this.pos=this.state=1,this.update(),i.animatedProperties[this.prop]=!0;for(b in i.animatedProperties)i.animatedProperties[b]!==!0&&(g=!1);if(g){i.overflow!=null&&!f.support.shrinkWrapBlocks&&f.each(["","X","Y"],function(a,b){h.style["overflow"+b]=i.overflow[a]}),i.hide&&f(h).hide();if(i.hide||i.show)for(b in i.animatedProperties)f.style(h,b,i.orig[b]),f.removeData(h,"fxshow"+b,!0),f.removeData(h,"toggle"+b,!0);d=i.complete,d&&(i.complete=!1,d.call(h))}return!1}i.duration==Infinity?this.now=e:(c=e-this.startTime,this.state=c/i.duration,this.pos=f.easing[i.animatedProperties[this.prop]](this.state,c,0,1,i.duration),this.now=this.start+(this.end-this.start)*this.pos),this.update();return!0}},f.extend(f.fx,{tick:function(){var a,b=f.timers,c=0;for(;c<b.length;c++)a=b[c],!a()&&b[c]===a&&b.splice(c--,1);b.length||f.fx.stop()},interval:13,stop:function(){clearInterval(cp),cp=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){f.style(a.elem,"opacity",a.now)},_default:function(a){a.elem.style&&a.elem.style[a.prop]!=null?a.elem.style[a.prop]=a.now+a.unit:a.elem[a.prop]=a.now}}}),f.each(["width","height"],function(a,b){f.fx.step[b]=function(a){f.style(a.elem,b,Math.max(0,a.now)+a.unit)}}),f.expr&&f.expr.filters&&(f.expr.filters.animated=function(a){return f.grep(f.timers,function(b){return a===b.elem}).length});var cw=/^t(?:able|d|h)$/i,cx=/^(?:body|html)$/i;"getBoundingClientRect"in c.documentElement?f.fn.offset=function(a){var b=this[0],c;if(a)return this.each(function(b){f.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return f.offset.bodyOffset(b);try{c=b.getBoundingClientRect()}catch(d){}var e=b.ownerDocument,g=e.documentElement;if(!c||!f.contains(g,b))return c?{top:c.top,left:c.left}:{top:0,left:0};var h=e.body,i=cy(e),j=g.clientTop||h.clientTop||0,k=g.clientLeft||h.clientLeft||0,l=i.pageYOffset||f.support.boxModel&&g.scrollTop||h.scrollTop,m=i.pageXOffset||f.support.boxModel&&g.scrollLeft||h.scrollLeft,n=c.top+l-j,o=c.left+m-k;return{top:n,left:o}}:f.fn.offset=function(a){var b=this[0];if(a)return this.each(function(b){f.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return f.offset.bodyOffset(b);var c,d=b.offsetParent,e=b,g=b.ownerDocument,h=g.documentElement,i=g.body,j=g.defaultView,k=j?j.getComputedStyle(b,null):b.currentStyle,l=b.offsetTop,m=b.offsetLeft;while((b=b.parentNode)&&b!==i&&b!==h){if(f.support.fixedPosition&&k.position==="fixed")break;c=j?j.getComputedStyle(b,null):b.currentStyle,l-=b.scrollTop,m-=b.scrollLeft,b===d&&(l+=b.offsetTop,m+=b.offsetLeft,f.support.doesNotAddBorder&&(!f.support.doesAddBorderForTableAndCells||!cw.test(b.nodeName))&&(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),e=d,d=b.offsetParent),f.support.subtractsBorderForOverflowNotVisible&&c.overflow!=="visible"&&(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),k=c}if(k.position==="relative"||k.position==="static")l+=i.offsetTop,m+=i.offsetLeft;f.support.fixedPosition&&k.position==="fixed"&&(l+=Math.max(h.scrollTop,i.scrollTop),m+=Math.max(h.scrollLeft,i.scrollLeft));return{top:l,left:m}},f.offset={bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;f.support.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(f.css(a,"marginTop"))||0,c+=parseFloat(f.css(a,"marginLeft"))||0);return{top:b,left:c}},setOffset:function(a,b,c){var d=f.css(a,"position");d==="static"&&(a.style.position="relative");var e=f(a),g=e.offset(),h=f.css(a,"top"),i=f.css(a,"left"),j=(d==="absolute"||d==="fixed")&&f.inArray("auto",[h,i])>-1,k={},l={},m,n;j?(l=e.position(),m=l.top,n=l.left):(m=parseFloat(h)||0,n=parseFloat(i)||0),f.isFunction(b)&&(b=b.call(a,c,g)),b.top!=null&&(k.top=b.top-g.top+m),b.left!=null&&(k.left=b.left-g.left+n),"using"in b?b.using.call(a,k):e.css(k)}},f.fn.extend({position:function(){if(!this[0])return null;var a=this[0],b=this.offsetParent(),c=this.offset(),d=cx.test(b[0].nodeName)?{top:0,left:0}:b.offset();c.top-=parseFloat(f.css(a,"marginTop"))||0,c.left-=parseFloat(f.css(a,"marginLeft"))||0,d.top+=parseFloat(f.css(b[0],"borderTopWidth"))||0,d.left+=parseFloat(f.css(b[0],"borderLeftWidth"))||0;return{top:c.top-d.top,left:c.left-d.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||c.body;while(a&&!cx.test(a.nodeName)&&f.css(a,"position")==="static")a=a.offsetParent;return a})}}),f.each(["Left","Top"],function(a,c){var d="scroll"+c;f.fn[d]=function(c){var e,g;if(c===b){e=this[0];if(!e)return null;g=cy(e);return g?"pageXOffset"in g?g[a?"pageYOffset":"pageXOffset"]:f.support.boxModel&&g.document.documentElement[d]||g.document.body[d]:e[d]}return this.each(function(){g=cy(this),g?g.scrollTo(a?f(g).scrollLeft():c,a?c:f(g).scrollTop()):this[d]=c})}}),f.each(["Height","Width"],function(a,c){var d=c.toLowerCase();f.fn["inner"+c]=function(){var a=this[0];return a?a.style?parseFloat(f.css(a,d,"padding")):this[d]():null},f.fn["outer"+c]=function(a){var b=this[0];return b?b.style?parseFloat(f.css(b,d,a?"margin":"border")):this[d]():null},f.fn[d]=function(a){var e=this[0];if(!e)return a==null?null:this;if(f.isFunction(a))return this.each(function(b){var c=f(this);c[d](a.call(this,b,c[d]()))});if(f.isWindow(e)){var g=e.document.documentElement["client"+c],h=e.document.body;return e.document.compatMode==="CSS1Compat"&&g||h&&h["client"+c]||g}if(e.nodeType===9)return Math.max(e.documentElement["client"+c],e.body["scroll"+c],e.documentElement["scroll"+c],e.body["offset"+c],e.documentElement["offset"+c]);if(a===b){var i=f.css(e,d),j=parseFloat(i);return f.isNumeric(j)?j:i}return this.css(d,typeof a=="string"?a:a+"px")}}),a.jQuery=a.$=f,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return f})})(window);

/**
 * jQuery Masonry v2.1.0
 * A dynamic layout plugin for jQuery
 * The flip-side of CSS Floats
 * http://masonry.desandro.com
 *
 * Licensed under the MIT license.
 * Copyright 2011 David DeSandro
 */
(function(a,b,c){var d=b.event,e;d.special.smartresize={setup:function(){b(this).bind("resize",d.special.smartresize.handler)},teardown:function(){b(this).unbind("resize",d.special.smartresize.handler)},handler:function(a,b){var c=this,d=arguments;a.type="smartresize",e&&clearTimeout(e),e=setTimeout(function(){jQuery.event.handle.apply(c,d)},b==="execAsap"?0:100)}},b.fn.smartresize=function(a){return a?this.bind("smartresize",a):this.trigger("smartresize",["execAsap"])},b.Mason=function(a,c){this.element=b(c),this._create(a),this._init()};var f=["position","height"];b.Mason.settings={isResizable:!0,isAnimated:!1,animationOptions:{queue:!1,duration:500},gutterWidth:0,isRTL:!1,isFitWidth:!1},b.Mason.prototype={_filterFindBricks:function(a){var b=this.options.itemSelector;return b?a.filter(b).add(a.find(b)):a},_getBricks:function(a){var b=this._filterFindBricks(a).css({position:"absolute"}).addClass("masonry-brick");return b},_create:function(c){this.options=b.extend(!0,{},b.Mason.settings,c),this.styleQueue=[],this.reloadItems();var d=this.element[0].style;this.originalStyle={};for(var e=0,g=f.length;e<g;e++){var h=f[e];this.originalStyle[h]=d[h]||""}this.element.css({position:"relative"}),this.horizontalDirection=this.options.isRTL?"right":"left",this.offset={x:parseInt(this.element.css("padding-"+this.horizontalDirection),10),y:parseInt(this.element.css("padding-top"),10)},this.isFluid=this.options.columnWidth&&typeof this.options.columnWidth=="function";var i=this;setTimeout(function(){i.element.addClass("masonry")},0),this.options.isResizable&&b(a).bind("smartresize.masonry",function(){i.resize()})},_init:function(a){this._getColumns(),this._reLayout(a)},option:function(a,c){b.isPlainObject(a)&&(this.options=b.extend(!0,this.options,a))},layout:function(a,b){for(var c=0,d=a.length;c<d;c++)this._placeBrick(a[c]);var e={};e.height=Math.max.apply(Math,this.colYs);if(this.options.isFitWidth){var f=0,c=this.cols;while(--c){if(this.colYs[c]!==0)break;f++}e.width=(this.cols-f)*this.columnWidth-this.options.gutterWidth}this.styleQueue.push({$el:this.element,style:e});var g=this.isLaidOut?this.options.isAnimated?"animate":"css":"css",h=this.options.animationOptions,i;for(c=0,d=this.styleQueue.length;c<d;c++)i=this.styleQueue[c],i.$el[g](i.style,h);this.styleQueue=[],b&&b.call(a),this.isLaidOut=!0},_getColumns:function(){var a=this.options.isFitWidth?this.element.parent():this.element,b=a.width();this.columnWidth=this.isFluid?this.options.columnWidth(b):this.options.columnWidth||this.$bricks.outerWidth(!0)||b,this.columnWidth+=this.options.gutterWidth,this.cols=Math.floor((b+this.options.gutterWidth)/this.columnWidth),this.cols=Math.max(this.cols,1)},_placeBrick:function(a){var c=b(a),d,e,f,g,h;d=Math.ceil(c.outerWidth(!0)/(this.columnWidth+this.options.gutterWidth)),d=Math.min(d,this.cols);if(d===1)f=this.colYs;else{e=this.cols+1-d,f=[];for(h=0;h<e;h++)g=this.colYs.slice(h,h+d),f[h]=Math.max.apply(Math,g)}var i=Math.min.apply(Math,f),j=0;for(var k=0,l=f.length;k<l;k++)if(f[k]===i){j=k;break}var m={top:i+this.offset.y};m[this.horizontalDirection]=this.columnWidth*j+this.offset.x,this.styleQueue.push({$el:c,style:m});var n=i+c.outerHeight(!0),o=this.cols+1-l;for(k=0;k<o;k++)this.colYs[j+k]=n},resize:function(){var a=this.cols;this._getColumns(),(this.isFluid||this.cols!==a)&&this._reLayout()},_reLayout:function(a){var b=this.cols;this.colYs=[];while(b--)this.colYs.push(0);this.layout(this.$bricks,a)},reloadItems:function(){this.$bricks=this._getBricks(this.element.children())},reload:function(a){this.reloadItems(),this._init(a)},appended:function(a,b,c){if(b){this._filterFindBricks(a).css({top:this.element.height()});var d=this;setTimeout(function(){d._appended(a,c)},1)}else this._appended(a,c)},_appended:function(a,b){var c=this._getBricks(a);this.$bricks=this.$bricks.add(c),this.layout(c,b)},remove:function(a){this.$bricks=this.$bricks.not(a),a.remove()},destroy:function(){this.$bricks.removeClass("masonry-brick").each(function(){this.style.position="",this.style.top="",this.style.left=""});var c=this.element[0].style;for(var d=0,e=f.length;d<e;d++){var g=f[d];c[g]=this.originalStyle[g]}this.element.unbind(".masonry").removeClass("masonry").removeData("masonry"),b(a).unbind(".masonry")}},b.fn.imagesLoaded=function(a){function h(){--e<=0&&this.src!==f&&(setTimeout(g),d.unbind("load error",h))}function g(){a.call(b,d)}var b=this,d=b.find("img").add(b.filter("img")),e=d.length,f="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";e||g(),d.bind("load error",h).each(function(){if(this.complete||this.complete===c){var a=this.src;this.src=f,this.src=a}});return b};var g=function(a){this.console&&console.error(a)};b.fn.masonry=function(a){if(typeof a=="string"){var c=Array.prototype.slice.call(arguments,1);this.each(function(){var d=b.data(this,"masonry");if(!d)g("cannot call methods on masonry prior to initialization; attempted to call method '"+a+"'");else{if(!b.isFunction(d[a])||a.charAt(0)==="_"){g("no such method '"+a+"' for masonry instance");return}d[a].apply(d,c)}})}else this.each(function(){var c=b.data(this,"masonry");c?(c.option(a||{}),c._init()):b.data(this,"masonry",new b.Mason(a,this))});return this}})(window,jQuery);
`

version = '1.4'
picRegex = /.(jpg|jpeg|gif|bmp|png|tiff)/i
picasaRegex = /\/\w\d+(-\w\d*)*\/([^\/]+)$/
gcRegex = /googleusercontent.com/
mouse = []
$content = $('#content')

# Options
options = 
	hz_delay: parseInt(localStorage.hz_delay) or 500
	hz_opacity: parseInt(localStorage.hz_opacity) or 100
	hz_maxwidth: parseInt(localStorage.hz_maxwidth) or 0
	hz_download: localStorage.hz_download or 'false'
	hz_his: localStorage.hz_his or 'false'
	hz_his_max: parseInt(localStorage.hz_his_max) or 100
	hz_trigger: parseInt(localStorage.hz_trigger) or 0
	hz_direct: localStorage.hz_direct or 'true'
	hz_direct_max: parseInt(localStorage.hz_direct_max) or 0
	hz_resolution: localStorage.hz_resolution or 'false'
	hz_fullscreen: parseInt(localStorage.hz_fullscreen) or 0
	hz_dl_key: parseInt(localStorage.hz_dl_key) or 0
	hz_shortcut: localStorage.hz_shortcut or 'false'
	hz_album: localStorage.hz_album or 'true'
	hz_direct_yt: localStorage.hz_direct_yt or 'false'
	hz_direct_ytaspect: parseInt(localStorage.hz_direct_ytaspect) or 2
	hz_direct_ytmaxwidth: parseInt(localStorage.hz_direct_ytmaxwidth) or 0
	hz_language: localStorage.hz_language or navigator.language
	hz_his_columns: parseInt(localStorage.hz_his_columns) or 5
	hz_enable_main: localStorage.hz_enable_main or 'true'
	hz_enable_icon: localStorage.hz_enable_icon or 'true'
	hz_enable_link: localStorage.hz_enable_link or 'true'
	hz_allpics: localStorage.hz_allpics or 'false'
	hz_update: localStorage.hz_update or 'true'
	hz_dl_link: localStorage.hz_dl_link or 'true'
	hz_maxpic: localStorage.hz_maxpic or 'false'
	hz_maxpic_option: localStorage.hz_maxpic_option or '0'
	hz_hovering: localStorage.hz_hovering or 'false'
	hz_maxyt: localStorage.hz_maxyt or 'false'
	hz_maxyt_aspect: parseInt(localStorage.hz_maxyt_aspect) or 2
	hz_direct_post: localStorage.hz_direct_post or 'false'
	hz_direct_post_max: parseInt(localStorage.hz_direct_post_max) or 0
	hz_ytdl: localStorage.hz_ytdl or 'true'

# l10n
locale =
	'en-US':
		menu01: 'Disable',
		menu02: 'Enable',
		fs01: 'Press full screen mode trigger or click here to exit fullscreen mode.',
		fs03: 'Download',
		fs04: 'Loading…',
		fs06: 'Page Width',
		fs07: 'Actual Size (100%)',
		fs08: 'Fullscreen',
		fs09: 'Window Size',
		fs10: 'Prev (&larr; / Right-click)',
		fs11: 'Next (&rarr; / Left-click)',
		al01: 'Download Album',
		al02: 'Browse',
		al03: 'Open with Picasa',
		al04: 'Open with Picasa (Require Picasa)',
		al05: 'Copy Links',
		al06: 'Open in New Tab',
		al07: 'This album is private and can\'t be fetched. Please click "Open with Picasa" button to download this album.',
		yt01: 'Remove',
		allpic01: 'Batch Download',
		piclink01: 'Download Photos:',
		ytdl01: 'Download Video:',
		ytdl02: 'Low',
		ytdl03: 'Standard',
		ytdl04: 'Original',
		ytdl05: 'HD',
		ytdl06: 'Full HD',
		ytdl07: 'Connection Failed',
		ytdl08: 'Incompatible',
		ytdl09: 'Unknown Format',
		maxpic01: 'Zoom',
		update01: 'Update',
		update02: 'New: ',
		update03: 'Current: ',
		update04: 'Cancel',
		update05: 'Check Update',
		update06: 'is the latest version!',
		set01: 'Settings',
		set02: 'Save & Reload page',
		set03: 'Reset',
		set04: 'Are you sure to reset all options?',
		set06: 'History',
		set07: ' photo',
		set08: ' photos',
		set09: 'Clear',
		set10: 'Close',
		set11: 'General',
		set12: 'Shortcuts',
		set13: 'Other',
		set14: 'Delay:',
		set15: 'ms',
		set16: 'Opacity:',
		set17: 'Max Width:',
		set18: 'px (0: Unlimited)',
		set19: 'Enable Download Button',
		set20: 'Enable History, Max Records:',
		set21: ', Columns:',
		set22: '(0: Unlimited)',
		set23: 'Trigger:',
		set24: 'None',
		set25: 'Show photo links in comments directly, max width:',
		set26: 'Show Resolution',
		set27: 'Full Screen Mode:',
		set28: 'Download Shortcut:',
		set31: 'Show Shortcuts',
		set32: 'Enable Album Download',
		set33: 'Show Youtube links in comments directly, video aspect:',
		set34: ', max width:',
		set35: 'Language:',
		set36: 'Enable:',
		set37: 'Contents',
		set38: 'Profile Icon',
		set39: 'Links',
		set40: 'Enable Batch Download',
		set41: 'Enable Auto Update',
		set42: 'Display download links below pictures',
		set43: 'Resize photos to width of stream',
		set44: 'Apply to all photos',
		set45: 'Only apply to the first photo in album',
		set46: 'Not hide photo when hovered',
		set47: 'Resize videos as width of stream, video aspect:',
		set48: 'Show photo links in posts directly, max width:',
		set49: 'Enable Youtube Video Download'
	'zh-TW':
		menu01: '停用',
		menu02: '啟用',
		fs01: '輕按全螢幕觸發鍵，或點擊此處離開全螢幕模式。',
		fs03: '下載',
		fs04: '載入中…',
		fs06: '頁面寬度',
		fs07: '實際大小 (100%)',
		fs08: '全螢幕',
		fs09: '視窗大小',
		fs10: '上一張 (&larr; / 右鍵)',
		fs11: '下一張 (&rarr; / 左鍵)',
		al01: '下載相簿',
		al02: '瀏覽',
		al03: '以 Picasa 開啟',
		al04: '以 Picasa 開啟 (需安裝 Picasa)',
		al05: '複製網址',
		al06: '開啟於新分頁',
		al07: '此相簿為私密相簿，無法取得相簿內容，請點擊右上角的「以 Picasa 開啟」按鈕下載此相簿。',
		yt01: '移除',
		allpic01: '批次下載',
		piclink01: '圖片下載：',
		ytdl01: '影片下載：',
		ytdl02: '低畫質',
		ytdl03: '標準畫質',
		ytdl04: '原始畫質',
		ytdl05: 'HD',
		ytdl06: 'Full HD',
		ytdl07: '連接失敗',
		ytdl08: '不相容',
		ytdl09: '未知格式',
		maxpic01: '縮放',
		update01: '更新',
		update02: '更新版本：',
		update03: '目前版本：',
		update04: '取消',
		update05: '檢查更新',
		update06: '已是最新版本！',
		set01: '設定',
		set02: '儲存並重載頁面',
		set03: '重設',
		set04: '您確定要重設所有設定值嗎？',
		set06: '記錄',
		set07: ' 張相片',
		set08: ' 張相片',
		set09: '清除',
		set10: '關閉',
		set11: '一般',
		set12: '快捷鍵',
		set13: '其它',
		set14: '延遲：',
		set15: '毫秒 (ms)',
		set16: '透明度：',
		set17: '最大寬度：',
		set18: 'px (0: 無限制)',
		set19: '啟用下載按鈕',
		set20: '啟用記錄，最大記錄數：',
		set21: '，直欄數：',
		set22: '(0: 無限制)',
		set23: '觸發鍵：',
		set24: '無',
		set25: '直接顯示留言內的圖片連結，最大寬度：',
		set26: '顯示圖片解析度',
		set27: '全螢幕模式：',
		set28: '下載快捷鍵：',
		set31: '顯示快捷鍵',
		set32: '啟用相簿下載',
		set33: '直接顯示留言內的 Youtube 連結，影片長寬比例：',
		set34: '，最大寬度：',
		set35: '語言：',
		set36: '啟用：',
		set37: '內文',
		set38: '個人資料相片',
		set39: '連結',
		set40: '啟用批次下載',
		set41: '啟用自動更新',
		set42: '在圖片下方顯示下載連結',
		set43: '以訊息串寬度顯示圖片',
		set44: '套用至所有圖片',
		set45: '僅套用至相簿第一張圖片',
		set46: '滑鼠移入大圖時不隱藏',
		set47: '以訊息串寬度顯示影片，影片長寬比例：',
		set48: '直接顯示文章內的圖片連結，最大寬度：',
		set49: '啟用 Youtube 影片下載'
	'zh-CN':
		menu01: '停用',
		menu02: '启用',
		fs01: '轻按全屏触发键，或点击此处离开全屏模式。',
		fs03: '下载',
		fs04: '加载中…',
		fs06: '页面宽度',
		fs07: '实际大小 (100%)',
		fs08: '全屏',
		fs09: '窗口大小',
		fs10: '上一张 (&larr; / 右键)',
		fs11: '下一张 (&rarr; / 左键)',
		al01: '下载相簿',
		al02: '浏览',
		al03: '以 Picasa 开启',
		al04: '以 Picasa 开启 (需安装 Picasa)',
		al05: '复制网址',
		al06: '开启于新分页',
		al07: '此相簿为私密相簿，无法取得相簿内容，请点击右上角的「以 Picasa 开启」按钮下载此相簿。',
		yt01: '移除',
		allpic01: '批量下载',
		piclink01: '图片下载：',
		ytdl01: '视频下载：',
		ytdl02: '低品质',
		ytdl03: '标清',
		ytdl04: '原始',
		ytdl05: '高清',
		ytdl06: '全高清',
		ytdl07: '连接失败',
		ytdl08: '不相容',
		ytdl09: '未知格式',
		maxpic01: '缩放',
		update01: '更新',
		update02: '更新版本：',
		update03: '当前版本：',
		update04: '取消',
		update05: '检查更新',
		update06: '已是最新版本！',
		set01: '设置',
		set02: '保存并重载页面',
		set03: '重设',
		set04: '您确定要重设所有设定值吗？',
		set06: '记录',
		set07: ' 张相片',
		set08: ' 张相片',
		set09: '清除',
		set10: '关闭',
		set11: '通用',
		set12: '热键',
		set13: '其它',
		set14: '延迟：',
		set15: '毫秒 (ms)',
		set16: '透明度：',
		set17: '最大宽度：',
		set18: 'px (0: 无限制)',
		set19: '启用下载按钮',
		set20: '启用记录，最大记录数：',
		set21: '，直栏数：',
		set22: '(0: 无限制)',
		set23: '触发键：',
		set24: '无',
		set25: '直接显示评论内的图片连结，最大宽度：',
		set26: '显示图片分辨率',
		set27: '全屏模式：',
		set28: '下载热键：',
		set31: '显示热键',
		set32: '启用相簿下载',
		set33: '直接显示留言内的 Youtube 连结，视频长宽比例：',
		set34: '，最大宽度：',
		set35: '语言：',
		set36: '启用：',
		set37: '內文',
		set38: '个人资料相片',
		set39: '链结',
		set40: '启用批量下载',
		set41: '启用自动更新',
		set42: '在图片下方显示下载链结',
		set43: '以讯息流宽度显示图片',
		set44: '套用至所有图片',
		set45: '仅套用至相簿第一张图片',
		set46: '鼠标移入大图时不隐藏',
		set47: '以讯息流宽度显示视频，视频长宽比例：',
		set48: '直接显示文章内的图片链结，最大宽度：',
		set49: '启用 Youtube 视频下载'
	'ja-JP':
		menu01: 'オフ',
		menu02: 'オン',
		fs01: 'フルスクリーントリガーを押してください、まだはこちらをクリックしてフルスクリーンモードを終了します。',
		fs03: 'ダウンロード',
		fs04: '読み込み中…',
		fs06: 'ページ幅',
		fs07: 'オリジナルサイズ (100%)',
		fs08: 'フルスクリーン',
		fs09: 'ウィンドウサイズ',
		fs10: '前の画像 (&larr; / 右クリック)',
		fs11: '次の画像 (&rarr; / 左クリック)',
		al01: 'アルバムダウンロード',
		al02: '閲覧する',
		al03: 'Picasa で閲覧',
		al04: 'Picasa で閲覧 (Picasa インストール必要)',
		al05: 'リンクをコビー',
		al06: '新しいタブで開け',
		al07: 'プライベートアルバムの為、アルバムをアクセスできない。右上辺りの「Picasa で閲覧」ボタンを押して、アルバムをダウンロードして下さい。',
		yt01: '削除',
		allpic01: 'バッチダウンロード',
		piclink01: '画像をダウンロード：',
		ytdl01: '動画をダウンロード：',
		ytdl02: '低画質',
		ytdl03: '標準画質',
		ytdl04: 'オリジナル画質',
		ytdl05: 'HD 画質',
		ytdl06: 'フル HD 画質',
		ytdl07: '接続に失敗しました',
		ytdl08: '非対応',
		ytdl09: '未知の形式',
		maxpic01: 'ズーム',
		update01: 'アップデート',
		update02: '新しいバージョン：',
		update03: '現行バージョン：',
		update04: 'キャンセル',
		update05: 'アップデートチェック',
		update06: 'もう更新済！',
		set01: '設定',
		set02: '設定保存とページ再読込',
		set03: 'リセット',
		set04: '全ての設定をリセットしますが？',
		set06: '閲覧記録',
		set07: ' 枚写真',
		set08: ' 枚写真',
		set09: 'クリア',
		set10: '閉じる',
		set11: '一般',
		set12: 'ショートカット',
		set13: 'その他',
		set14: '遅れ：',
		set15: 'ミリセカンド (ms)',
		set16: '不透明度：',
		set17: '最大幅：',
		set18: 'px (0：限制無し)',
		set19: 'ダウンロードボタンを有効にする',
		set20: '閲覧記録を有効にする、最大記録数：',
		set21: '、段数：',
		set22: '(0: 限制無し)',
		set23: 'トリガー：',
		set24: '無',
		set25: 'コメント欄内の画像リンクを表示、最大幅：',
		set26: '画像解像度を表示',
		set27: 'フルスクリーンモード：',
		set28: 'ダウンロードショートカット：',
		set31: 'ショートカットを表示',
		set32: 'アルバムダウンロードを有効にする',
		set33: 'コメント欄内の Youtube リンクを表示、長さと幅の比：',
		set34: '，最大幅：',
		set35: '言語：',
		set36: '有効にする：',
		set37: 'コンテンツ',
		set38: 'プロフィールアイコン',
		set39: 'リンク',
		set40: 'バッチダウンロードを有効にする',
		set41: '自動的にアップデートチェック',
		set42: '画像の下にダウンロードリンクを表示',
		set43: 'ストリーム幅で画像表示',
		set44: '全ての画像に適用する',
		set45: 'アルバムの一つ目の画像に適用する',
		set46: '画像にカーソルを重ねた時に画像を隠さない',
		set47: 'ストリームの幅で動画表示、長さと幅の比：',
		set48: '画像の直リンクをポストで表示、最大幅：',
		set49: 'YouTube ダウンロード機能を有効にする'
	'index': [
		['en-US', 'English']
		['zh-TW', '繁體中文']
		['zh-CN', '简体中文']
		['ja-JP', '日本語']
	]

lang = locale[options.hz_language] or locale['en-US']

#Detect cursor position
document.addEventListener 'mousemove', (e) ->
	mouse =
		x: e.pageX
		y: e.pageY
, false

# Hover Zoom
hoverzoom = ->
	_this = this

	main = ->
		tag = _this.tagName.toUpperCase()
		if tag is 'IMG'
			url = _this.src
			url = if url.match(/\?sz|\/proxy/) then url.replace(/(.*)url=|&(.*)|\?sz=\d{2,3}/g, '') else url.replace(picasaRegex,'/s0/$2')
		else if tag is 'A'
			url = _this.href
			return false if !url.match(picRegex)

		$main = $('#hoverzoom')
		$loading = $('#hz_loading')

		show = ->
			if $main.is(':hidden')
				$loading.show().offset
					top: mouse.y - 10
					left: mouse.x - 10
				$("<img src='#{url}'>").load ->
					$loading.hide()
					$main.append(this).fadeIn(300)
					$main.append("<small>#{@naturalWidth} x #{@naturalHeight}</small>") if options.hz_resolution is 'true'
					resize(this)
			
			resize = (img) ->
				x = mouse.x
				y = mouse.y
				wWidth = $(window).width()
				wHeight = $(window).height()

				if mouse.x > wWidth / 2
					img.style.maxWidth = if options.hz_maxwidth > 0 then options.hz_maxwidth + 'px' else x - 30 + 'px'
					img.style.maxHeight = if options.hz_resolution is 'true' then wHeight - 45 + 'px' else wHeight - 35 + 'px'
					$main.offset
						top: y + 20
						left: x - $main.width() - 20
				else
					img.style.maxWidth = if options.hz_maxwidth > 0 then options.hz_maxwidth + 'px' else wWidth - x - 40 + 'px'
					img.style.maxHeight = if options.hz_resolution is 'true' then wHeight - 45 + 'px' else wHeight - 35 + 'px'
					$main.offset
						top: y + 20
						left: x + 20

				if y + $main.height() + 20 > $(document).scrollTop() + wHeight - 20
					$main.offset
						top: if $main.offset().top - $main.height() < $(document).scrollTop() + 20 then $(document).scrollTop() + 10 else y - $main.height() - 20

		fullscreen = ->
			arr = $(_this).parent().parent().find('div[data-content-type^="image"] img, div[data-content-url*="picasa"] img')
			if arr.length > 0
				num = $.inArray(_this, arr)
				links = []
				for i in arr
					links.push if i.src.match(/\?sz|\/proxy/) then i.src.replace(/(.*)url=|&(.*)|\?sz=\d{2,3}/g, '') else i.src.replace(picasaRegex,'/s0/$2')
			else
				num = 0
				links.push _this.href or _this.src

			hide()
			lightbox.start links, num

		keys = (e) ->
			code = e.keyCode or e.which
			switch code
				when options.hz_trigger then show()
				when options.hz_fullscreen then fullscreen()
				when options.hz_dl_key then openWindow url

		shortcut = new ->
			$sc = $('#hoverzoom_sc')
			timer3 = ''

			close = ->
				timer3 = setTimeout ->
					$sc.hide().off()
				, options.hz_delay

			return {
				show: ->
					$sc.fadeIn(300).offset(
						top: mouse.y + 10
						left: mouse.x + 10
					).on(
						mouseenter: ->
							clearTimeout(timer3)
						mouseleave: close
					).on('click', 'span', ->
						lightbox _this, $(_this).parent().parent().find('div[data-content-type^="image"] img, div[data-content-url*="picasa"] img')
					)
					.children().eq(0).attr('href', url)
				hide: close
			}

		hide = ->
			timer2 = setTimeout ->
				delete url
				$main.hide().empty().off()
				$loading.hide()
				$(_this).off('mouseleave')
				$(document).off('keydown', keys)
				clearTimeout(timer1)
			, 100

			if options.hz_shortcut is 'true'
				shortcut.hide()

		show() if options.hz_trigger is 0
		shortcut.show() if options.hz_shortcut is 'true'
		$('#hoverzoom_db').attr('href', url) if options.hz_download is 'true'
		history.create(url)
		$(_this).on('mouseleave', hide)
		$(document).on('keydown', keys)

	timer1 = setTimeout(main, options.hz_delay)
	$(_this).on 'mouseleave', ->
		clearTimeout(timer1)

# Enable functions
enable = ->
	$content.on 'mouseenter', 'div[data-content-type^="image"] img, div[data-content-url*="picasa"] img', hoverzoom if options.hz_enable_main is 'true'
	$content.on 'mouseenter', '.oP img', hoverzoom if options.hz_enable_icon is 'true'
	$content.on 'mouseenter', '.ot-anchor', hoverzoom if options.hz_enable_link is 'true'

	$('#hoverzoom_db').addClass 'enable'
	timer.start()

# Disable functions
disable = ->
	$content.off 'mouseenter', 'div[data-content-type^="image"] img, div[data-content-url*="picasa"] img', hoverzoom if options.hz_enable_main is 'true'
	$content.off 'mouseenter', '.oP img', hoverzoom if options.hz_enable_icon is 'true'
	$content.off 'mouseenter', '.ot-anchor', hoverzoom if options.hz_enable_link is 'true'

	$('#hoverzoom_db').removeClass 'enable'
	timer.stop()

# Lightbox
lightbox = new ->
	`var scroll, links, i, url, length`
	$fs = $('#hoverzoom_fs')
	$main = $fs.children('.main')
	trigger = false
	
	insert = (num) ->
		if !trigger
			if num < 0
				num = length - 1
			else if num is length
				num = 0

			`i = num`
			`url = links[i]`
			trigger = true
			$fs.addClass('load').find('a').attr('href', url)
			$("<img src='#{url}'>").load ->
				img = this
				others = $main.find('img')

				if others.length > 0
					others.fadeOut 300, ->
						$(this).remove()
						resize.start(img)
				else
					resize.start(img)

	resize = new ->
		`var img, nWidth, nHeight, wWidth, wHeight`

		$ctrl = $fs.children('.ctrl')
		$meta = $ctrl.find('small')
		$navi = $ctrl.find('span')

		main = (top, left) ->
			$main.css
				top: top
				left: left
			$meta.html "#{nWidth} x #{nHeight} (#{parseInt $(img).width() / nWidth * 100}%)"
			$navi.html "#{parseInt(i + 1)} / #{length}" if length > 1

		getSize = ->
			`wWidth = $fs[0].clientWidth`
			`wHeight = $fs[0].clientHeight`

		detect = ->
			if wWidth > nWidth and wHeight > nHeight
				$fs.removeClass 'zoom'
			else
				if nWidth > wWidth
					html = "#{lang.fs06} (#{parseInt wWidth / nWidth * 100}%)"
					$fs.addClass 'actual'
				else
					html = "#{lang.fs06} (100%)"
					$fs.removeClass 'actual'

				$fs.addClass('zoom').find('li').eq(0).html("#{lang.fs09} (#{parseInt $(img).width() / nWidth * 100}%)").end().eq(1).html(html)

		type = (i) ->
			switch i
				when 0
					$(img).css
						maxWidth: wWidth - 50
						maxHeight: wHeight - 50
					main (wHeight - $(img).height()) / 2, (wWidth - $(img).width()) / 2
				when 1
					$(img).css 'maxHeight', 'none'
					getSize()
					$(img).css 'maxWidth', wWidth
					main (if $(img).height() > wHeight then 0 else (wHeight - $(img).height()) / 2), (wWidth - $(img).width()) / 2
				when 2
					$(img).css
						maxWidth: 'none'
						maxHeight: 'none'
					main (if $(img).height() > wHeight then 0 else (wHeight - $(img).height()) / 2), 0

			$ctrl.find('li').css('fontWeight', 'normal').eq(i).css('fontWeight', 'bold')
		
		return {
			start: (obj) ->
				$main.append(obj)
				$fs.removeClass('load')
				
				`trigger = false`
				`img = obj`
				`nWidth = obj.naturalWidth`
				`nHeight = obj.naturalHeight`

				getSize()
				type(0)
				detect()

				$(obj).animate
					opacity: 1
				, 300
			type: type
		}

	prev = ->
		insert(i - 1) if length > 1

	next = ->
		insert(i + 1) if length > 1

	close = ->
		$fs.hide().attr('class', '').children('.main').empty().end().children('.ctrl').attr('style', '')
		$('html').css('overflowY', 'auto')
		$(document).scrollTop(scroll).off('keyup').off('keydown')

	return {
		start: (arr, i) ->
			`scroll = $(document).scrollTop()`
			`links = arr`
			`length = arr.length`
			
			$('html, body').css('overflowY', 'hidden')
			insert(i)
			$fs.show()
			$fs.addClass('multi') if length > 1

			$(document).on
				keyup: (e) ->
					code = e.keyCode or e.which
					switch code
						when 39 then next()
						when 37 then prev()
				keydown: (e) ->
					code = e.keyCode or e.which
					switch code
						when 27 then close()
						when options.hz_fullscreen then close()
						when options.hz_dl_key then openWindow url
		prev: prev
		next: next
		close: close
		resize: resize
	}

# Open in new window
openWindow = (url) ->
		time = new Date()
		window.open(url, "hz_newtab#{time.getTime()}")

sortPic = (ele, arr, message) ->
	wWidth = ele.width()
	wHeight = ele.height()
	$wrap = ele.find('.wrap')
	$inner = $wrap.children('.inner')
	length = arr.length
	counts = 0
	trigger = false

	append = (start, end) ->
		appends = ''
		trigger = true
		counts++

		for i in [start..end]
			appends += arr[i]

		ele.addClass('loading')
		$inner.append(appends).imagesLoaded ->
			if $(this).hasClass('masonry') then $(this).masonry('reload') else $(this).masonry({isFitWidth: true})
			ele.removeClass('loading')
			trigger = false

	load = ->
		if @scrollTop >= @scrollHeight - @offsetHeight - 200 and !trigger
			start = 50 * counts
			if length < 50 * (counts + 1)
				end = length
				$wrap.off('scroll')
			else
				end = 50 * (counts + 1)

			append(start, end - 1)

	copyLink = ->
		appends = ''
		for i in arr
			url = $(i).attr('href') + '\n'
			appends += if url.substring(0, 2) is '//' then 'https:' + url else url

		$('#hz_copyarea').fadeIn(300).find('textarea').html(appends)

	newTab = ->
		for i in arr
			openWindow $(i).attr('href')

	close = ->
		delete arr
		ele.off('click').fadeOut 300, ->
			$inner.empty()
			ele.find('small').html('')

	if length > 0
		max = if length >= 50 then 50 else length
		append(0, max - 1)
		$wrap.off('scroll').on('scroll', load) if length > 50

	ele.fadeIn(300).on('click', '.blue', copyLink)
	.on('click', '.green', newTab)
	.on('click', '.back, .close', close)
	.find('small').html(message).end()
	.children('.main').css(
		width: wWidth - 200
		height: wHeight - 140
		marginLeft: -(wWidth / 2) + 80
		marginTop: -(wHeight / 2) + 50
	).children('.wrap').scrollTop(0).css(
		width: wWidth - 180
		height: wHeight - 190
	).children('.inner').css(
		width: wWidth - 200
	)

# History
history = new ->
	read = ->
		storage = localStorage.hz_histories
		if typeof storage is 'undefined' or storage is ''
			return []
		else
			arr = storage.split('|||')
			length = arr.length
			max = options.hz_his_max
			
			if length > max
				arr.splice(max, length-max)

			return arr

	save = (url, date) ->
		storage = read()
		if storage.length > 0
			for i in storage
				if typeof i is 'undefined' or i is ''
					storage.splice(_i, 1)
				else
					item = i.split(';')
					if item[0] is url
						storage.splice(_i, 1)

			storage.push(url+';'+date)
			localStorage.hz_histories = storage.join('|||')
		else
			localStorage.hz_histories = url+';'+date

	return {
		create: (url) ->
			time = new Date()
			date = "#{time.getMonth()+1}/#{time.getDate()} #{time.getHours()}:#{if time.getMinutes() < 10 then '0' + time.getMinutes() else time.getMinutes()}:#{if time.getSeconds() < 10 then '0' + time.getSeconds() else time.getSeconds()}"
			save(url, date)
		
		display: ->
			width = parseInt ($(window).width() - 200) / options.hz_his_columns - 10
			storage = read().reverse()
			length = storage.length
			arr = []
			
			for i in storage
				item = i.split(';')
				thumbnail = if item[0].match(gcRegex) and item[0].match(picasaRegex) then item[0].replace(picasaRegex, "/w#{width}/$2") else item[0]
				arr.push "<a href='#{item[0]}' title='#{item[1]}'><img src='#{thumbnail}' width='#{width}'></a>"

			sortPic $('#hz_history_page'), arr, "<strong>#{length}</strong> / #{options.hz_his_max}#{if length > 1 then lang.set08 else lang.set07}"

		clear: ->
			localStorage.hz_histories = ''
	}

# Download albums
albumDL = ->
	$page = $('#hz_album_page')
	data = $(this).data('url')
	userid = data.replace(/(.*)\/photos\/(\d+)\/albums\/(\d+)/, '$2')
	albumid = data.replace(/(.*)\/photos\/(\d+)\/albums\/(\d+)/, '$3')
	width = parseInt ($(window).width() - 200) / options.hz_his_columns - 10
	arr = []

	$page.fadeIn(300).addClass('loading')
	.find('.orange').attr('href', "picasa://downloadfeed/?url=https://picasaweb.google.com/data/feed/back_compat/user/#{userid}/albumid/#{albumid}?imgdl=1")

	GM_xmlhttpRequest
		method: 'GET'
		url: "https://picasaweb.google.com/data/feed/api/user/#{userid}/albumid/#{albumid}?alt=json"
		onerror: ->
			sortPic $page, arr, lang.al07
		onload: (data) ->
			feed = JSON.parse(data.responseText).feed
			entry = feed.entry

			$(entry).each (i, data) ->
				a = data.media$group
				url = a.media$content[0].url
				original = url.replace(/(.*)\//, '$1/s0/')
				thumbnail = url.replace(/(.*)\//, "$1/w#{width}/")

				arr.push "<a href='#{original}' title='#{a.media$title.$t}'><img src='#{thumbnail}' width='#{width}'></a>"

			sortPic $page, arr, "<a href='#{feed.author[0].uri.$t}' target='_blank'>#{feed.author[0].name.$t}</a> &raquo; <a href='#{feed.link[3].href}' target='_blank'><strong>#{feed.title.$t}</strong></a> (#{entry.length} #{if entry.length > 1 then lang.set08 else lang.set07})"

# Batch download
batch = ->
	width = parseInt ($(window).width() - 200) / options.hz_his_columns - 10
	arr = []

	$('div[data-content-type^="image"] img, div[data-content-url*="picasa"] img, .ot-anchor, .s-W-Oh img').filter(':visible').each ->
		tag = this.tagName.toUpperCase()
		if tag is 'IMG'
			url = @src
			thumbnail = if url.match(gcRegex) and url.match(picasaRegex) then url.replace(picasaRegex, "/w#{width}/$2") else url
			arr.push "<a href='#{url}'><img src='#{thumbnail}' width='#{width}'></a>"
		else if tag is 'A'
			url = @href
			if url.match(picRegex)
				arr.push "<a href='#{url}'><img src='#{url}' width='#{width}'></a>"

	sortPic $('#hz_batch_page'), arr, "<strong>#{arr.length}</strong>#{if arr.length > 1 then lang.set08 else lang.set07}"

# Resize videos as stream width
maxYT = ->
	switch options.hz_maxyt_aspect
		when 1 then aspect = 3/4
		when 3 then aspect = 10/16
		else aspect = 9/16

	$content.on 'click', 'div[data-content-type$="flash"]', ->
		width = $(this).parent().parent().width()

		$(this).addClass('maxyt_container').children('iframe').load ->
			iframe = $(this)
			button = $("<span class='c-C' title='#{lang.set10}'> - #{lang.set10}</span>").click ->
				iframe.nextAll().show().parent().removeClass('maxyt_container').click ->
					$(this).children().hide()
					$(this).addClass('maxyt_container').prepend(iframe)
					button.show()
					return false
				
				iframe.remove()
				$(this).hide()

			iframe.attr(
				width: width
				height: width * aspect
			).parentsUntil('.Te').find('.vo').append(button)

# Youtube download
ytDL = (url, ele) ->
	$notify = ele.children('.notify')
	format =
		# FLV
    5: format: 'FLV', res: '224p', desc: lang.ytdl02
    6: format: 'FLV', res: '270p', desc: lang.ytdl02
    34: format: 'FLV', res: '360p', desc: lang.ytdl02
    35: format: 'FLV', res: '480p', desc: lang.ytdl03
    # MP4
    18: format: 'MP4', res: '360p', desc: lang.ytdl02
    22: format: 'MP4', res: '720p', desc: lang.ytdl05
    37: format: 'MP4', res: '1080p', desc: lang.ytdl06
    38: format: 'MP4', res: '2304p', desc: lang.ytdl06
    # MP4.3D
    83: format: 'MP4', res: '240p', desc: lang.ytdl02
    82: format: 'MP4', res: '360p', desc: lang.ytdl02
    85: format: 'MP4', res: '520p', desc: lang.ytdl03
    84: format: 'MP4', res: '720p', desc: lang.ytdl05
    # WebM
    43: format: 'WebM', res: '360p', desc: lang.ytdl02
    44: format: 'WebM', res: '480p', desc: lang.ytdl03
    45: format: 'WebM', res: '720p', desc: lang.ytdl05
    46: format: 'WebM', res: '1080p', desc: lang.ytdl06
    # WebM.3D
    100: format: 'WebM', res: '360p', desc: lang.ytdl02
    101: format: 'WebM', res: '480p', desc: lang.ytdl03
    102: format: 'WebM', res: '720p', desc: lang.ytdl05
    # 3GP
    13: format: '3GP', res: '176x144', desc: lang.ytdl02
    17: format: '3GP', res: '176x144', desc: lang.ytdl0

	execHash = (hash) ->
		query = []

		for i in hash.split('&')
			tmp = i.split('=')
			query[tmp[0]] = tmp[1]

		return query

	encode = (text) ->
		`text.replace(/"/g, "-").replace(/%/g, "%25").replace(/=/g, "%3D").replace(/,/g, "%2C").replace(/&/g, "%26").replace(/#/g, "%23").replace(/\?/g, "%3F").replace(/\//g, "_").replace(/\\/g, "_").replace(/ /g, "+")`

	GM_xmlhttpRequest
		method: 'GET'
		url: url
		onerror: ->
			$notify.html(lang.ytdl07)
		onload: (data) ->
			data = data.responseText
			title = encode $(data).find('#eow-title').attr('title')

			regexp_url = new RegExp('"url_encoded_fmt_stream_map": "([^"]*)"', 'i')
			data.match(regexp_url)
			map = RegExp.$1.split(',')

			if (map.length > 0)
				appends = ''
				
				for i in map
					item = execHash(i)
					if item.url?
						url = decodeURIComponent(item.url).replace(/\\u0026quality/, '')+'&title='+title
						itag = url.replace(/(.*)itag=(\d+)(.*)/, '$2')
						tag = format[itag]
						desc = if tag? then "#{tag.desc}<small>#{tag.format} / #{tag.res}</small>" else "#{lang.ytdl09}<small>itag=#{itag}</small>"

						appends += "<br><a class='c-C' href='#{url}' target='_blank'>#{desc}</a>"

				ele.addClass('loaded').append(appends)
			else
				$notify.html(lang.ytdl08)

timer = new ->
	switch options.hz_direct_ytaspect
		when 1 then aspect = 3/4
		when 3 then aspect = 10/16
		else aspect = 9/16

	# Process links in comments
	comment = ->
		$('.kH .ot-anchor').each ->
			url = @href
			# Show photo links in comments directly
			if options.hz_direct is 'true' and url.match(picRegex) and !$(this).hasClass('img-in-post')
				$(this).addClass('img-in-post').html("<img src='#{url}' style='max-width: #{options.hz_direct_max if options.hz_direct_max > 0}'>")
			# Show Youtube links in comments directly
			else if url.match(/youtube.com\/watch\?v=/) and !$(this).hasClass('yt-in-post') and options.hz_direct_yt is 'true'
				maxWidth = if options.hz_direct_ytmaxwidth > 0 then options.hz_direct_ytmaxwidth else $(this).parent().parent().width()
				url = url.replace(/(https?:)(.*)\?v=(.*)/, 'https://www.youtube.com/v/$3?version=3&autohide=1&feature=player_embedded')
				$(this).after("<div class='closeYT' title='#{lang.ytdl01}'>X</div><object style='width: #{maxWidth}; height: #{maxWidth * aspect}'><param name='movie' value='#{url}'><param name='allowFullScreen' value='true'><param name='allowScriptAccess' value='always'><embed src='#{url}' type='application/x-shockwave-flash' allowfullscreen='true' allowScriptAccess='always' width='#{maxWidth}' height='#{maxWidth * aspect}'></object></object>").addClass('yt-in-post').css
					display: 'block'
					fontWeight: 'bold'
					marginRight: 11
					
	# Append album download button
	album = ->
		page = location.href.replace(/\?(.*)/, '')

		if page.match(/\/photos\/\w+\/albums\/\w+/)
			$main = $('.aN8flf:visible')

			if !$main.data('class')
				button = $("<div class='in-albumDownload hz_button blue' title='#{lang.al01}'>#{lang.al01}</div>").data('url', page)
				if $main.children().length > 2 then $main.children().eq(1).after(button) else $main.children().eq(0).after(button)
				$main.data('class', true)
		else
			$('.s-r-za').each ->
				url = $(this).children().attr('href')

				if url.match(/\/photos\/\w+\/albums\/\w+/) and !$(this).data('class')
					button = $("<span class='c-C albumDownload' title='#{lang.al01}'>#{lang.fs03}</span>").data('url', url)
					$(this).data('class', true).parentsUntil('.Te').find('.vo').append(button)
	
	# Process links in posts
	post = ->
		$('.Vl .ot-anchor').each ->
			if !$(this).data('class')
				url = @href

				if url.match(picRegex)
					auto = $(this).parentsUntil('.Ks').find('div[data-content-type^="image"]')
					
					if auto[0]?
						auto = if auto.attr('data-content-url').match(picRegex) then auto.attr('data-content-url') else auto.children('img').attr('src').replace(/(https?:)?(.*)/, 'https:$2').replace(picasaRegex, '/s0/$2')
					
					if url isnt auto
						$(this).html("<img src='#{url}' style='max-width:#{options.hz_direct_post_max if options.hz_direct_post_max > 0}'>").addClass('img-in-post')

				$(this).data('class', true)

	# Process Youtube video in posts
	tube = ->
		$('div[data-content-type$="flash"]').each ->
			if !$(this).data('class')
				button = $("<span class='c-C tubeStacks'>#{lang.fs03}</span>").data('url', $(this).attr('data-content-url').replace(/^http/, 'https'))
				$(this).data('class', true).parentsUntil('.Te').find('.vo').append(button)

	# Display download links below pictures
	links = ->
		$('.Vl').each ->
			if !$(this).data('class')
				target = $(this).find('div[data-content-type^="image"], div[data-content-url*="picasa"], .img-in-post')
				length = target.length

				if length > 1
					link = $("<span class='c-C picStacks'>#{lang.fs03} (#{length})</span>").click ->
						if !$(this).next().hasClass('clickDetail')
							html = "<div class='closeButton' title='#{lang.set10}'></div><strong>#{lang.piclink01}</strong><br>"
							for i in target
								url = i.childNodes[0].src
								url = if url.match(/\?sz|\/proxy/) then url.replace(/(.*)url=|&(.*)|\?sz=\d{2,3}/g, '') else url.replace(picasaRegex,'/s0/$2')
								html += if _i is 0 then "<a class='c-C' href='#{url}'>#{_i+1}</a>" else " - <a class='c-C' href='#{url}'>#{_i+1}</a>"

							popup = $("<div class='clickDetail'>#{html}</div>").on 'click', '.closeButton', ->
								$(this).parent().fadeOut(300)

							$(this).after(popup).next().fadeIn(300).offset
								left: $(this).offset().left + 10
								top: $(this).offset().top + 25
						else
							if $(this).next().is(':hidden')
								$(this).next().fadeIn(300).offset
									left: $(this).offset().left + 10
									top: $(this).offset().top + 25
							else
								$(this).next().fadeOut(300)
				else if length is 1
					url = target[0].childNodes[0].src
					url = if url.match(/\?sz|\/proxy/) then url.replace(/(.*)url=|&(.*)|\?sz=\d{2,3}/g, '') else url.replace(picasaRegex,'/s0/$2')
					link = "<a class='c-C picStacks' href='#{url}'>#{lang.fs03}</a>"

				$(this).data('class', true).parentsUntil('.Te').find('.vo').append(link)

	#Resize photos to stream width
	maxPic = ->
		$content.find('.s-r-fa:visible').each ->
			if !$(this).data('class')
				children = $(this).children('div[data-content-type^="image"], div[data-content-url*="picasa"]')
				width = $(this).width()

				if children.length > 0
					children = children.eq(0) if options.hz_maxpic_option is '1'

					for i in children
						img = i.childNodes[0]
						src = img.src
						url = if src.match(/\?sz|\/proxy/) then src.replace(/resize_\D?=\d+/, 'resize_w='+width) else src.replace(picasaRegex,"/w#{width}/$2")

						img.src = url
						$(i).data('original', src).addClass('maxpic_container')

					zoom = $("<span class='c-C' title='#{lang.maxpic01}'> - #{lang.maxpic01}</span>").click ->
						for j in children
							data = $(j).data('original')
							if data?
								j.childNodes[0].src = data
								$(j).removeClass('maxpic_container')
						$(document).scrollTop $(this).parent().parent().parent().parent().offset().top - 100
						$(this).remove()

					$(this).parentsUntil('.Te').find('.vo').append(zoom);

				$(this).data('class', true)

	timeout = ''

	chain = [comment]
	chain.push(album) if options.hz_album is 'true'
	chain.push(post) if options.hz_direct_post is 'true'
	chain.push(tube) if options.hz_ytdl is 'true'
	chain.push(links) if options.hz_dl_link is 'true'
	chain.push(maxPic) if options.hz_maxpic is 'true'
	
	main = ->
		for i in chain
			i()
		timeout = setTimeout(main, 2500)
	return {
		start: ->
			timeout = setTimeout(main, 2500)
		stop: ->
			clearTimeout(timeout)
	}

# Check update
update = (manual) ->
	main = (news, content, latest) ->
		$page = $('#hz_update_note')
		appends = ''

		if latest
			$page.find('.green').hide().end()
			.find('small').html("<strong>#{version}</strong>#{lang.update06}")
		else
			$page.find('.green').show().end()
			.find('small').html("#{lang.update02}<strong>#{news}</strong> / #{lang.update06}<strong>#{version}</strong>")

		for i in content
			appends += "<li>#{i}</li>"

		$page.fadeIn(300).find('p').html("<ul>#{appends}</ul>")

	GM_xmlhttpRequest
		method: 'GET'
		url: 'https://sites.google.com/site/hoverzoomplus/sources/version.json'
		onload: (data) ->
			feed = JSON.parse(data.responseText)
			nowVer = version.split('.')
			newVer = feed.version.split('.')
			content = feed.content[options.hz_language] or feed.content['en-US']

			if version is feed.version and manual
				main(version, content, true)
			else
				for i in [nowVer.length..newVer.length]
					nowVer[i] = 0 if nowVer[i]?

					if newVer[i] > nowVer[i]
						main(feed.version, content, false)
						break;
					else if nowVer[i] > newVer[i]
						main(version, content, true) if manual
						break;

# Initialize
init =
	basic: ->
		$set = $('#hz_set_page')

		# Append options
		keys = "<option value='0'>#{lang.set24}</option><option value='16'>Shift</option><option value='17'>Ctrl</option>"
		keys += if navigator.appVersion.indexOf('Macintosh') > -1 then "<option value='18'>Option</option><option value='13'>Return</option>" else "<option value='18'>Alt</option><option value='13'>Enter</option>"
		for i in [65..90]
			keys += "<option value='#{i}'>&##{i};</option>"
		$('#hz_trigger, #hz_fullscreen, #hz_dl_key').append(keys)

		langTmp = ''
		for i in locale.index
			langTmp += "<option value='#{i[0]}'>#{i[1]}</option>"
		$('#hz_language').html(langTmp)

		# Bind menu events
		$('#hz_opts').on('click', '#disable_hz', (e) ->
			if !$(this).hasClass('off')
				disable()
				$(this).html(lang.menu01).addClass('off')
			else
				enable()
				$(this).html(lang.menu02).removeClass('off')
			e.stopPropagation()
		# Load options
		).on('click', '#hz_set_open', ->
			$set.fadeIn(300).find(':text').each(->
				$(this).val options[$(this).attr('id')]
			).end()
			.find('select').each(->
				$(this).children("option[value='#{options[$(this).attr('id')]}']").prop('selected', true)
			).end()
			.find(':checkbox').each(->
				if options[$(this).attr('id')] is 'true'
					$(this).prop('checked', true)
			)
		).on('click', '#hz_history_open', history.display).on('click', '#hz_allpic_dl', batch)

		# Manually check update
		$('#hz_checkupdate').click ->
			update(true)

		# Close options window
		$set.on('click', '.close, .back', ->
			$set.fadeOut(300)
		# Save options
		).on('click', '.green', ->
			$set.find(':text').each(->
				localStorage[$(this).attr('id')] = $(this).val()
			).end()
			.find('select').each(->
				localStorage[$(this).attr('id')] = $(this).find(':selected').val()
			).end()
			.find(':checkbox').each(->
				localStorage[$(this).attr('id')] = $(this).prop('checked').toString()
			)
			location.reload()
		# Reset options
		).on('click', '.white', ->
			sure = confirm(lang.set04)
			if sure
				localStorage.clear()
				location.reload()
			else
				return false
		# Tab events
		).find('.menu li').each (i) ->
			if i is 0
				$(this).addClass('current')

			$(this).attr('tabid', i).click ->
				$current = $(this).parent().children('.current')
				gap = 590 * (i - $current.attr('tabid'))
				height = $(this).parent().children('.tabs').children('div').eq(i).height()

				$set.children('.main').animate(
					height: height + 140
				, 300).find('.tabs').animate(
					left: '-=' + gap
				, 300)
				$current.removeClass('current')
				$(this).addClass('current')
	history: ->
		$page = $('#hz_history_page')
		$page.on 'click', '.white', ->
			$page.find('.inner').empty().end()
			.find('small').html("<strong>0</strong> / #{options.hz_his_max}#{lang.set07}")
			history.clear()
	copyarea: ->
		$page = $('#hz_copyarea')
		$page.on 'click', '.back, .close', ->
			$page.fadeOut 300, ->
				$(this).find('textarea').empty()
	lightbox: ->
		$('#hoverzoom_fs').on('click', '.back, .close', lightbox.close)
		.on('click', '.prev', lightbox.prev)
		.on('click', '.next, img', lightbox.next)
		.on('contextmenu', 'img', lightbox.prev)
		.on('scroll', ->
			$(this).children('.ctrl').css
				top: @scrollTop
				left: @scrollLeft
		).find('li').each (i) ->
			$(this).on 'click', ->
				lightbox.resize.type i
	update: ->
		$page = $('#hz_update_note')
		$page.on 'click', '.back, .close, .white', ->
			$page.fadeOut(300)
	timer: ->
		# Show Youtube links in comments directly
		$content.on('click', '.closeYT', ->
			$(this).prev().attr('style', '').end().next().remove().end().remove()
		# Album Download button
		).on('click', '.albumDownload, .in-albumDownload', albumDL)
		# Youtube download button
		.on('click', '.tubeStacks', ->
			if !$(this).next().hasClass('clickDetail')
				html = "<div class='closeButton' title='#{lang.set10}'></div><strong>#{lang.ytdl01}</strong><div class='notify'>#{lang.fs04}</div>"
				popup = $("<div class='clickDetail'>#{html}</div>").on 'click', '.closeButton', ->
					$(this).parent().fadeOut(300)

				$(this).after(popup).next().fadeIn(300).offset
					left: $(this).offset().left + 10
					top: $(this).offset().top + 25
				ytDL($(this).data('url'), popup)
			else
				if $(this).next().is(':hidden')
					$(this).next().fadeIn(300).offset
						left: $(this).offset().left + 10
						top: $(this).offset().top + 25
				else
					$(this).next().fadeOut(300)
		)
	append: ->
		elements =
			body:
				main:
					id: 'hoverzoom'
					css: "opacity:#{options.hz_opacity / 100}"
				loading:
					id: 'hz_loading'
				downloadButton:
					id: 'hoverzoom_db'
					type: 'a'
					html: '<div></div>'
				shortcuts:
					id: 'hoverzoom_sc'
					className: 'hz_button white'
					html: "<a>#{lang.fs03}</a><span>#{lang.fs08}</span>"
				lightbox:
					id: 'hoverzoom_fs'
					html: "
<div class='back'></div>
<div class='main'></div>
<div class='ctrl'>
<div class='close' title=#{lang.fs01}></div>
<div class='center'>
<div class='prev' title='#{lang.fs10}'></div>
<span></span>
<div class='next' title='#{lang.fs11}'></div>
</div>
<div class='right'>
<small></small>
<a>#{lang.fs03}</a>
<div class='zoom'>
#{lang.maxpic01}
<ul>
<li>#{lang.fs09}</li>
<li>#{lang.fs06}</li>
<li>#{lang.fs07}</li>
</ul>
</div>
</div>
</div>
<div class='loading'></div>"
				history:
					id: 'hz_history_page'
					className: 'hz_settings'
					html: "
<div class='back'></div>
<div class='main'>
<h3>#{lang.set06}</h3>
<small></small>
<div class='close' title='#{lang.set10}'></div>
<div class='wrap'>
<div class='inner'></div>
</div>
<div class='functions top'>
<div class='cycle'></div>
<div class='hz_button white' title='#{lang.set09}'>#{lang.set09}</div>
<div class='hz_button blue' title='#{lang.al05}'>#{lang.al05}</div>
<div class='hz_button green' title='#{lang.al06}'>#{lang.al06}</div>
</div>
</div>"
				album:
					id: 'hz_album_page'
					className: 'hz_settings'
					html: "
<div class='back'></div>
<div class='main'>
<h3>#{lang.al01}</h3>
<small></small>
<div class='close' title='#{lang.set10}'></div>
<div class='wrap'>
<div class='inner'></div>
</div>
<div class='functions top'>
<div class='cycle'></div>
<div class='hz_button blue' title='#{lang.al05}'>#{lang.al05}</div>
<div class='hz_button green' title='#{lang.al06}'>#{lang.al06}</div>
<a class='hz_button orange' title='#{lang.al04}'>#{lang.al03}</a>
</div>
</div>"
				batch:
					id: 'hz_batch_page'
					className: 'hz_settings'
					html: "
<div class='back'></div>
<div class='main'>
<h3>#{lang.allpic01}</h3>
<small></small>
<div class='close' title='#{lang.set10}'></div>
<div class='wrap'>
<div class='inner'></div>
</div>
<div class='functions top'>
<div class='cycle'></div>
<div class='hz_button blue' title='#{lang.al05}'>#{lang.al05}</div>
<div class='hz_button green' title='#{lang.al06}'>#{lang.al06}</div>
</div>
</div>"
				copyarea:
					id: 'hz_copyarea'
					className: 'hz_settings'
					html: "
<div class='back'></div>
<div class='main'>
<h3>#{lang.al05}</h3>
<small></small>
<div class='close' title='#{lang.set10}'></div>
<textarea readonly wrap='off'></textarea>
</div>"
				update:
					id: 'hz_update_note'
					className: 'hz_settings'
					html: "
<div class='back'></div>
<div class='main'>
<h3>#{lang.update01}</h3>
<small></small>
<div class='close' title='#{lang.set10}'></div>
<p></p>
<div>
<a class='meta' href='http://userscripts.org/scripts/show/106681'>Google+ Hover Zoom</a>
<a class='hz_button green' title='#{lang.update01}'>#{lang.update01}</a>
<div class='hz_button white' title='#{lang.update04}'>#{lang.update04}</div>
</div>
</div>"
				set:
					id: 'hz_set_page'
					className: 'hz_settings'
					html: "
<div class='back'></div>
<div class='main'>
<h3>#{lang.set01}</h3>
<small>Ver. #{version} by <a href='https://plus.google.com/105931860008509594725' target='_blank'>SkyArrow</a></small>
<div class='close' title='#{lang.set10}'></div>
<ul class='menu'>
<li>#{lang.set11}</li>
<li>#{lang.set12}</li>
<li>#{lang.set13}</li>
<div class='tabs'>
<div>
<label>#{lang.set36}</label>
<input id='hz_enable_main' type='checkbox'><label for='hz_enable_main'>#{lang.set37}</label>
<input id='hz_enable_icon' type='checkbox'><label for='hz_enable_icon'>#{lang.set38}</label>
<input id='hz_enable_link' type='checkbox'><label for='hz_enable_link'>#{lang.set39}</label><br>
<label for='hz_delay'>#{lang.set14}</label><input id='hz_delay' type='text' maxlength='4'><label for='hz_delay'>#{lang.set15}</label><br>
<label for='hz_opacity'>#{lang.set16}</label><input id='hz_opacity' type='text' maxlength='3'><label for='hz_opacity'>%</label><br>
<label for='hz_maxwidth'>#{lang.set17}</label><input id='hz_maxwidth' type='text' maxlength='4'><label for='hz_maxwidth'>#{lang.set18}</label><br>
<input id='hz_resolution' type='checkbox'><label for='hz_resolution'>#{lang.set26}</label><br>
<input id='hz_hovering' type='checkbox'><label for='hz_hovering'>#{lang.set46}</label><br>
</div>
<div>
<label for='hz_trigger'>#{lang.set23}</label><select id='hz_trigger'></select><br>
<label for='hz_dl_key'>#{lang.set28}</label><select id='hz_dl_key'></select><br>
<label for='hz_fullscreen'>#{lang.set27}</label><select id='hz_fullscreen'></select><br>
<input id='hz_download' type='checkbox'><label for='hz_download'>#{lang.set19}</label><br>
<input id='hz_shortcut' type='checkbox'><label for='hz_shortcut'>#{lang.set31}</label><br>
<input id='hz_dl_link' type='checkbox'><label for='hz_dl_link'>#{lang.set42}</label><br>
</div>
<div>
<label for='hz_language'>#{lang.set35}</label><select id='hz_language'></select><br>
<input id='hz_update' type='checkbox'><label for='hz_update'>#{lang.set41}</label>&nbsp;
<a id='hz_checkupdate' href='javascript:void(0)'>(#{lang.update05})</a><br>
<input id='hz_maxpic' type='checkbox'><label for='hz_maxpic'>#{lang.set43}</label>
<select id='hz_maxpic_option'>
<option value='0'>#{lang.set44}</option>
<option value='1'>#{lang.set45}</option>
</select><br>
<input id='hz_maxyt' type='checkbox'><label for='hz_maxyt'>#{lang.set47}</label>
<select id='hz_maxyt_aspect'>
<option value='1'>4:3</option>
<option value='2'>16:9</option>
<option value='3'>16:10</option>
</select><br>
<input id='hz_direct_post' type='checkbox'><label for='hz_direct_post'>#{lang.set48}</label>
<input id='hz_direct_post_max' type='text' maxlength='4'><label for='hz_direct_post_max'>#{lang.set18}</label><br>
<input id='hz_direct' type='checkbox'><label for='hz_direct'>#{lang.set25}</label>
<input id='hz_direct_max' type='text' maxlength='4'><label for='hz_direct_max'>#{lang.set18}</label><br>
<input id='hz_direct_yt' type='checkbox'><label for='hz_direct_yt'>#{lang.set33}</label>
<select id='hz_direct_ytaspect'>
<option value='1'>4:3</option>
<option value='2'>16:9</option>
<option value='3'>16:10</option>
</select>
<label for='hz_direct_ytaspect'>#{lang.set34}</label>
<input id='hz_direct_ytmaxwidth' type='text' maxlength='4'><label for='hz_direct_ytmaxwidth'>#{lang.set18}</label><br>
<input id='hz_album' type='checkbox'><label for='hz_album'>#{lang.set32}</label><br>
<input id='hz_allpics' type='checkbox'><label for='hz_allpics'>#{lang.set40}</label><br>
<input id='hz_ytdl' type='checkbox'><label for='hz_ytdl'>#{lang.set49}</label><br>
<input id='hz_his' type='checkbox'><label for='hz_his'>#{lang.set20}</label>
<input id='hz_his_max' type='text' maxlength='4'>
<label for='hz_his_columns'>#{lang.set21}</label><input id='hz_his_columns' type='text' maxlength='1'><br>
</div>
</div>
<div class='functions bottom'>
<div class='hz_button white' title='#{lang.set03}'>#{lang.set03}</div>
<div class='hz_button green' title='#{lang.set02}'>#{lang.set02}</div>
</div>
</ul>
</div>"
			menu:
				setting:
					id: 'hz_set_open'
					html: lang.set01
				history:
					id: 'hz_history_open'
					html: lang.set06
				allPic: 
					id: 'hz_allpic_dl'
					html: lang.allpic01

		bodyTmp = menuTmp = ''
		body = (arr) ->
			_defaults =
				id: ''
				type: 'div'
				className: ''
				html: ''
				css: ''

			arr = $.extend _defaults, arr
			bodyTmp += "<#{arr.type} id='#{arr.id}' class='#{arr.className}' style='#{arr.css}'>#{arr.html}</#{arr.type}>"

		menu = (arr) ->
			menuTmp += "<li><a id='#{arr.id}' class='gbmt'>#{arr.html}</a></li>"

		body(elements.body.main)
		body(elements.body.loading)
		body(elements.body.downloadButton) if options.hz_download is 'true'
		body(elements.body.shortcuts) if options.hz_shortcut is 'true'
		body(elements.body.lightbox) if options.hz_fullscreen > 0 or options.hz_shortcut is 'true'
		body(elements.body.history) if options.hz_his is 'true'
		body(elements.body.album) if options.hz_album is 'true'
		body(elements.body.batch) if options.hz_allpics is 'true'
		body(elements.body.copyarea)
		body(elements.body.set)
		body(elements.body.update)
		$content.parent().append(bodyTmp)

		menu(elements.menu.setting)
		menu(elements.menu.history) if options.hz_his is 'true'
		menu(elements.menu.allPic) if options.hz_allpics is 'true'
		$('#gbmpdv').append "<div id='hz_opts'><strong>Google+ Hover Zoom</strong><a id='disable_hz'>#{lang.menu02}</a><ul>#{menuTmp}</ul></div>"

# After page loaded completely
$(document).ready ->
	# Initialize
	init.append()
	init.basic()
	init.history() if options.hz_his is 'true'
	init.copyarea()
	init.lightbox() if options.hz_fullscreen > 0 or options.hz_shortcut is 'true'
	init.update()
	init.timer()
	# Enable functions
	enable()
	# Auto update
	update() if options.hz_update is 'true'
	# Resize Youtube videos to stream size
	maxYT() if options.hz_maxyt is 'true'

# CSS
GM_addStyle "#hoverzoom{position:fixed;box-shadow:0 4px 16px rgba(0,0,0,0.2);z-index:10002;display:none;background:rgba(255,255,255,0.5);width:auto;height:auto}#hoverzoom img{display:block;margin:5px}#hoverzoom small{display:block;text-align:center;line-height:1;margin:0 5px 5px}#hz_loading{width:20px;height:20px;box-shadow:0 -2px 1px 1px #dd4839;position:absolute;pointer-events:none;z-index:10000;display:none;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;animation:loading infinite 0.8s linear;-moz-animation:loading infinite 0.8s linear;-webkit-animation:loading infinite 0.8s linear}#hoverzoom_db{position:fixed;top:45%;right:-40px;background:#f5f5f5;border:1px solid #d2d2d2;border-right:none;box-shadow:0 0 5px rgba(0,0,0,0.1);width:37px;height:37px;-webkit-border-radius:2px 0 0 2px;-moz-border-radius:2px 0 0 2px;border-radius:2px 0 0 2px;-webkit-transition:0.3s;-moz-transition:0.3s;transition:0.3s}#hoverzoom_db:hover div{background:#666}#hoverzoom_db.enable{right:0}#hoverzoom_db div{margin:6px;width:25px;height:25px;background:#aaa;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;-webkit-transition:0.3s;-moz-transition:0.3s;transition:0.3s}#hoverzoom_db div:before,#hoverzoom_db div:after{position:absolute;content:''}#hoverzoom_db div:before{width:6px;height:8px;background:#f5f5f5;top:12px;left:15px}#hoverzoom_db div:after{border-style:solid;border-width:7px 8px;border-color:#f5f5f5 transparent transparent;top:19px;left:10px}#hoverzoom_sc{position:absolute;z-index:10005;box-shadow:0 4px 16px rgba(0,0,0,0.2);display:none}#hoverzoom_sc a,#hoverzoom_sc span{outline:none;cursor:pointer;color:#3366CC}#hoverzoom_sc a{border-right:1px solid #eee;padding-right:5px}#hoverzoom_sc span{border-left:1px solid #eee;padding-left:5px}#hoverzoom_sc span:hover{text-decoration:underline}.albumDownload{background:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACl0lEQVQ4jX1TX2iOcRR+zvm97++d720R1mxlLlg2EjWlFhe0tkUW1tRnSGFpUlJu9blgWUmKsmRo2lbaxcpopklq0tCKopRCjWWabeb73j+/33Fh1sbHU6fOxfM853SeDiELMp5XrJSqE+CwuKQ4xiVLdNf7/v1VNv4MWup71lzb13d8an5BmU3Mey++L7Hvi/i+RAn/43hV3oqR5qXLZ2v4d9Oa7N2iSfflsHehbUdnw9cFxZUQ+1wBsAAgUGYhlsCaB6NNhRVzDFqSvSVQ6CRQfjqagi+2oavi4rl3RTV7ROyT6Ski1sQQKiRCx5dzhSsBgAVCikyTyzovttHMam6cyTlT0/mJfqRrDPAQgD/tE3ouLbYWTQIQX6+/V0rgrWEcgEDQykMYBzfGo8mdrc00ScCo0nonWbnlhsoBgEwkYNC2z2eLStkKtrtKaxCglIPIhudzo4lDJ27vTv/ehsbGxlXw41hQ7H6BgEUAz4GGxNsdARqtGChSBsacPNhefSFbQgTISK6KAQMBEBoBkxxhEDRAabZxsjuM39bV9RX9N+s/4JClFCMc7g6pwAPdFBOu+xeZHCEACV8TtCKMpe0VAoC62runtNKnjQkDzuhV7T0V77IZSBnmx7vyG0HkhkxuALrqpFIpfv0SG5gdmDiKMssGF21qW3vAiJMggcw2KAfJBFFaeeSMRfTo496nHwgAkrW9JWB5LDFyv5X2b5so6bvDnpMzV/4L7BBM2kwJ88aB+sEhBoCOrqo3ZJEE0bAyjgOStA0s5lRoAQAmY0dEpGagfnAImPUL7V3VDzhIVAT+6DCEY9YMYgIxgTWDiDI2ki5j7eaB/S/6Zw7796VA5W3rV4OkEoKj06zLELo/sP/ZX+/8E1gaKlGc2T23AAAAAElFTkSuQmCC') no-repeat;padding-left:15px;margin-left:20px}.albumDownload:before{content:'-';cursor:default;left:-27px;position:relative;display:inline-block;border-bottom:1px solid transparent}.in-albumDownload{margin:25px 18px 25px 0;background:none}.picDownload{background:#bbb;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;color:#fff !important;display:inline-block;font-size:12px;line-height:1em;height:1em;width:1em;margin:0 2px;padding:5px;text-align:center}.picStacks{background:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA20lEQVQ4jbXRQUoDQRAF0DeTjhjExWwcdOVCxAu48/4X0EUUPYVgFonTLqYSmk7UDOKHhu6qrvq/fvFHNLjCDdqJtQNeGzwgRWAKWmwS5tjgEZ+RzJXKEhlnuMM8RSDjvWjQo8PLD8oycjqQuMQtZnGeQ2GJnaq6QR/FbTD3EV9iEbGPsiBV9+tg3coecGH0aREjPik8Kle3lVUauH13OMW5ceW7P/UIjX3Xa5x8N0LG6oCCmmDPg6ZILo9QkI3jQJOwjkb3v7DXSlqsZ8Ydd0b32wlnwNuRhP+IL+1ZLCIrPZQEAAAAAElFTkSuQmCC') no-repeat;padding-left:15px;margin-left:20px}.picStacks:before{content:'-';cursor:default;left:-27px;position:relative;display:inline-block;border-bottom:1px solid transparent}.tubeStacks{background:url(https://s.ytimg.com/yt/favicon-refresh-vfldLzJxy.ico) no-repeat;padding-left:15px;margin-left:20px}.tubeStacks:before{content:'-';cursor:default;left:-27px;position:relative;display:inline-block;border-bottom:1px solid transparent}.hz_button{position:relative;cursor:pointer;font-size:11px;font-weight:bold;height:27px;line-height:27px;margin-right:16px;min-width:54px;outline:none;padding:0 8px;text-align:center;float:left;text-decoration:none !important;-webkit-border-radius:2px;-moz-border-radius:2px;border-radius:2px;user-select:none;-moz-user-select:none;-webkit-user-select:none}.hz_button.green{background-color:#3D9400;border:1px solid #29691D;color:#fff;text-shadow:0 1px rgba(0,0,0,0.1);background:-webkit-gradient(linear, 0% 0%, 100% 100%, color-stop(0%, #3d9400), color-stop(100%, #398a00));background:-webkit-linear-gradient(left top, #3d9400,#398a00);background:-moz-linear-gradient(left top, #3d9400,#398a00);background:linear-gradient(left top, #3d9400,#398a00)}.hz_button.green:hover{background-color:#368200;border:1px solid #2D6200;text-shadow:0 1px rgba(0,0,0,0.3);background:-webkit-gradient(linear, 0% 0%, 100% 100%, color-stop(0%, #3d9400), color-stop(100%, #368200));background:-webkit-linear-gradient(left top, #3d9400,#368200);background:-moz-linear-gradient(left top, #3d9400,#368200);background:linear-gradient(left top, #3d9400,#368200)}.hz_button.green:focus,.hz_button.green:active{box-shadow:0 0 0 1px #fff inset}.hz_button.blue{background-color:#4D90FE;border:1px solid #3079ed;color:#fff;background:-webkit-gradient(linear, 0% 0%, 100% 100%, color-stop(0%, #4d90fe), color-stop(100%, #4787ed));background:-webkit-linear-gradient(left top, #4d90fe,#4787ed);background:-moz-linear-gradient(left top, #4d90fe,#4787ed);background:linear-gradient(left top, #4d90fe,#4787ed)}.hz_button.blue:hover{background-color:#357AE8;border:1px solid #2F5BB7;background:-webkit-gradient(linear, 0% 0%, 100% 100%, color-stop(0%, #4d90fe), color-stop(100%, #357ae8));background:-webkit-linear-gradient(left top, #4d90fe,#357ae8);background:-moz-linear-gradient(left top, #4d90fe,#357ae8);background:linear-gradient(left top, #4d90fe,#357ae8)}.hz_button.blue:focus,.hz_button.blue:active{box-shadow:0 0 0 1px #fff inset}.hz_button.white{background-color:#F5F5F5;border:1px solid rgba(0,0,0,0.1);color:#444;background:-webkit-gradient(linear, 0% 0%, 100% 100%, color-stop(0%, #f5f5f5), color-stop(100%, #f1f1f1));background:-webkit-linear-gradient(left top, #f5f5f5,#f1f1f1);background:-moz-linear-gradient(left top, #f5f5f5,#f1f1f1);background:linear-gradient(left top, #f5f5f5,#f1f1f1)}.hz_button.white:hover{background-color:#F8F8F8;border:1px solid #c6c6c6;color:#333;background:-webkit-gradient(linear, 0% 0%, 100% 100%, color-stop(0%, #f8f8f8), color-stop(100%, #f1f1f1));background:-webkit-linear-gradient(left top, #f8f8f8,#f1f1f1);background:-moz-linear-gradient(left top, #f8f8f8,#f1f1f1);background:linear-gradient(left top, #f8f8f8,#f1f1f1)}.hz_button.white:focus,.hz_button.white:active{box-shadow:0 1px 2px rgba(0,0,0,0.1) inset}.hz_button.orange{background-color:#D14836;color:#fff;text-shadow:0 1px rgba(0,0,0,0.1);border:1px solid transparent;background:-webkit-gradient(linear, 0% 0%, 100% 100%, color-stop(0%, #dd4b39), color-stop(100%, #d14836));background:-webkit-linear-gradient(left top, #dd4b39,#d14836);background:-moz-linear-gradient(left top, #dd4b39,#d14836);background:linear-gradient(left top, #dd4b39,#d14836)}.hz_button.orange:hover{background-color:#C53727;border:1px solid #B0281A;box-shadow:0 1px 1px rgba(0,0,0,0.2);background:-webkit-gradient(linear, 0% 0%, 100% 100%, color-stop(0%, #dd4b39), color-stop(100%, #c53727));background:-webkit-linear-gradient(left top, #dd4b39,#c53727);background:-moz-linear-gradient(left top, #dd4b39,#c53727);background:linear-gradient(left top, #dd4b39,#c53727)}.hz_button.orange:focus,.hz_button.orange:active{box-shadow:0 0 0 1px #fff inset}#hoverzoom_fs{position:fixed;top:0;left:0;height:100%;width:100%;z-index:10010;display:none;background:rgba(0,0,0,0.8);color:#ccc;text-shadow:1px 1px 2px #000;overflow:auto}#hoverzoom_fs.zoom .ctrl .right .zoom{display:inline-block}#hoverzoom_fs.load .loading{opacity:0.8}#hoverzoom_fs.multi .ctrl .center{display:block}#hoverzoom_fs.actual .ctrl .right .zoom ul li:last-of-type{display:block}#hoverzoom_fs .back{position:absolute;top:0;left:0;width:100%;height:100%}#hoverzoom_fs .main{position:absolute}#hoverzoom_fs .main img{opacity:0;box-shadow:0 4px 16px rgba(0,0,0,0.2);max-width:0;max-height:0;display:block}#hoverzoom_fs .ctrl{position:absolute;top:0;width:100%;height:100px;margin-top:-50px;opacity:0;-webkit-transition:opacity 0.5s,margin 0.5s;-moz-transition:opacity 0.5s,margin 0.5s;transition:opacity 0.5s,margin 0.5s;background:-webkit-gradient(linear, 50% 0%, 50% 100%, color-stop(0%, rgba(0,0,0,0.8)), color-stop(50%, rgba(0,0,0,0)));background:-webkit-linear-gradient(top, rgba(0,0,0,0.8) 0%,rgba(0,0,0,0) 50%);background:-moz-linear-gradient(top, rgba(0,0,0,0.8) 0%,rgba(0,0,0,0) 50%);background:linear-gradient(top, rgba(0,0,0,0.8) 0%,rgba(0,0,0,0) 50%)}#hoverzoom_fs .ctrl:hover{margin-top:0;opacity:1}#hoverzoom_fs .ctrl div{-webkit-transition:0.3s;-moz-transition:0.3s;transition:0.3s}#hoverzoom_fs .ctrl div:before,#hoverzoom_fs .ctrl div:after{content:'';position:absolute}#hoverzoom_fs .ctrl .close{position:absolute;left:23px;opacity:0.3;height:50px;cursor:pointer}#hoverzoom_fs .ctrl .close:hover{opacity:1}#hoverzoom_fs .ctrl .close:before,#hoverzoom_fs .ctrl .close:after{background:#fff;height:32px;bottom:10px;width:5px}#hoverzoom_fs .ctrl .close:before{-webkit-transform:rotate(-45deg);-moz-transform:rotate(-45deg);transform:rotate(-45deg)}#hoverzoom_fs .ctrl .close:after{-webkit-transform:rotate(45deg);-moz-transform:rotate(45deg);transform:rotate(45deg)}#hoverzoom_fs .ctrl .center{position:absolute;left:50%;top:15px;width:200px;margin-left:-100px;text-align:center;display:none}#hoverzoom_fs .ctrl .center .prev,#hoverzoom_fs .ctrl .center .next{position:absolute;top:5px;cursor:pointer;opacity:0.3}#hoverzoom_fs .ctrl .center .prev:hover,#hoverzoom_fs .ctrl .center .next:hover{opacity:1}#hoverzoom_fs .ctrl .center .prev:before,#hoverzoom_fs .ctrl .center .next:before{top:50%;border-top:5px solid #fff;border-left:5px solid #fff;width:10px;height:10px}#hoverzoom_fs .ctrl .center .prev{left:0}#hoverzoom_fs .ctrl .center .prev:before{left:0;-webkit-transform:rotate(-45deg);-moz-transform:rotate(-45deg);transform:rotate(-45deg)}#hoverzoom_fs .ctrl .center .next{right:0}#hoverzoom_fs .ctrl .center .next:before{right:0;-webkit-transform:rotate(135deg);-moz-transform:rotate(135deg);transform:rotate(135deg)}#hoverzoom_fs .ctrl .center span{font-size:20px}#hoverzoom_fs .ctrl .right{float:right;margin:15px 25px;position:relative}#hoverzoom_fs .ctrl .right a{color:#ccc;margin-left:20px;-webkit-transition:0.3s;-moz-transition:0.3s;transition:0.3s}#hoverzoom_fs .ctrl .right a:hover{color:#fff;text-decoration:none}#hoverzoom_fs .ctrl .right small{font-size:13px}#hoverzoom_fs .ctrl .right .zoom{margin-left:20px;padding-right:15px;display:none;position:relative;cursor:pointer}#hoverzoom_fs .ctrl .right .zoom:after{border-style:solid;border-color:#ccc transparent transparent;border-width:5px;top:6px;right:0}#hoverzoom_fs .ctrl .right .zoom:hover{color:#fff;border-top-color:#fff}#hoverzoom_fs .ctrl .right .zoom:hover ul{display:block}#hoverzoom_fs .ctrl .right .zoom ul{position:absolute;top:100%;right:0;list-style:none;color:#ccc;margin:0;padding:5px 0 0;white-space:nowrap;font-size:12px;z-index:10020;display:none}#hoverzoom_fs .ctrl .right .zoom ul li{padding:5px 10px;background:rgba(0,0,0,0.8)}#hoverzoom_fs .ctrl .right .zoom ul li:hover{background:#000;color:#fff}#hoverzoom_fs .ctrl .right .zoom ul li:last-of-type{display:none}#hoverzoom_fs .loading{background:#000;border-radius:50%;width:50px;height:50px;overflow:hidden;position:absolute;top:50%;left:50%;margin-top:-25px;margin-left:-25px;opacity:0;-webkit-transition:0.3s;-moz-transition:0.3s;transition:0.3s;animation:loading 2s infinite linear;-moz-animation:loading 2s infinite linear;-webkit-animation:loading 2s infinite linear}#hoverzoom_fs .loading:before,#hoverzoom_fs .loading:after{position:absolute;content:''}#hoverzoom_fs .loading:before{border:5px solid #fff;border-radius:50%;height:24px;width:24px;top:8px;left:8px}#hoverzoom_fs .loading:after{background:#000;content:'';height:12px;width:36px;top:30px;left:7px}.hz_settings{position:fixed;top:0;left:0;width:100%;height:100%;display:none;z-index:10000}.hz_settings.loading .cycle{opacity:1 !important;animation:loading infinite 0.8s linear;-moz-animation:loading infinite 0.8s linear;-webkit-animation:loading infinite 0.8s linear}.hz_settings .back{position:absolute;top:0;left:0;width:100%;height:100%;background:rgba(255,255,255,0.75);z-index:10000}.hz_settings .wrap{display:inline-block;overflow-x:hidden;overflow-y:auto;margin:10px 0}.hz_settings .wrap img{margin-right:10px;margin-top:5px}.hz_settings .meta{position:absolute;bottom:20px;color:#666}.hz_settings .main{position:absolute;top:50%;left:50%;width:550px;height:315px;margin-top:-250px;margin-left:-285px;background:#fff;border:1px solid #acacac;border-bottom:1px solid #999;box-shadow:0 4px 16px rgba(0,0,0,0.2);z-index:10001;border-radius:2px;padding:20px;overflow:hidden}.hz_settings .main h3{font-size:20px;font-weight:normal;margin:0}.hz_settings .main small{color:#666}.hz_settings .main .close{background:url(https://ssl.gstatic.com/s2/oz/images/dialogx.png) no-repeat;cursor:pointer;height:15px;width:15px;position:absolute;right:16px;top:16px}.hz_settings .main .menu{background:#f5f5f5;border-bottom:1px solid #ebebeb;border-top:1px solid #ebebeb;padding:0 5px 0 10px;margin:15px -20px 0}.hz_settings .main .menu li{display:inline-block;padding:7px 12px;color:#666;cursor:pointer}.hz_settings .main .menu li.current{font-weight:bold;color:#dd4839}.hz_settings .main .menu li:hover{color:#dd4839}.hz_settings .main .tabs{border-top:1px solid #ddd;position:absolute;left:0;width:1770px}.hz_settings .main .tabs div{float:left;width:550px;padding:15px 20px 0}.hz_settings .main input[type='text']{border:1px solid #d9d9d9;padding:2px 5px;margin-right:5px;width:50px}.hz_settings .main input[type='checkbox']{margin:0 5px 0 0}.hz_settings .main label{line-height:2;margin-right:5px;display:inline-block;min-width:120px}.hz_settings .main input+label,.hz_settings .main select+label{min-width:0}.hz_settings .main textarea{border:1px solid #ccc;font:12px 'Consolas', Monaco, Courier New, Courier, monospace !important;height:265px;width:540px;padding:10px 0 0 10px;margin-top:10px;resize:none}.hz_settings .main .functions{position:absolute}.hz_settings .main .functions.top{top:20px;right:50px}.hz_settings .main .functions.bottom{bottom:20px;right:20px}.hz_settings .main .functions :last-child{margin-right:0}.hz_settings .main .functions .cycle{float:left;border:3px solid #ccc;border-radius:50%;height:16px;width:16px;margin-right:10px;position:relative;top:4px;opacity:0;-webkit-transition:opacity 0.3s;-moz-transition:opacity 0.3s;transition:opacity 0.3s}.hz_settings .main .functions .cycle:before{content:'';position:absolute;bottom:-3px;right:-3px;width:12px;height:12px;background:#fff}#hz_copyarea .back{z-index:10001}#hz_update_note{z-index:10001}#hz_update_note .main{height:auto}#hz_update_note .hz_button{float:right;margin-left:16px;margin-right:0}#hz_update_note ul{padding-left:15px;line-height:2}#hz_opts{border-top:1px solid #e5e5e5;margin-top:10px;padding:10px 20px 0}#hz_opts strong{float:left}#hz_opts a{padding:0 10px;display:inline-block}#hz_opts a:hover{background:#eff3fb;text-decoration:none}#hz_opts #disable_hz{margin-right:-10px;float:right;position:relative}#hz_opts #disable_hz:before{content:'';position:absolute;top:10px;left:-5px;width:5px;height:5px;border-radius:50%;box-shadow:0 0 3px #3d9400;background:#3d9400}#hz_opts #disable_hz.off:before{box-shadow:0 0 3px #666;background:#666}#hz_opts ul{list-style:none;clear:both;padding:0;margin-left:-10px}.closeButton{background:url(https://ssl.gstatic.com/ui/v1/icons/common/x_8px.png) no-repeat;cursor:pointer;height:21px;width:21px;position:absolute;right:2px;top:2px;opacity:0.4;border:1px solid transparent}.closeButton:active,.closeButton:focus{opacity:1;border:1px solid #71a7ff}.detailButton{display:inline-block;border-color:#eee transparent transparent;border-style:solid;border-width:5px;height:0;margin:0 0 -4px 5px;top:3px;width:0}.img-in-post img{max-width:100%;height:auto;margin:5px 0;display:block}.img-in-post+br{display:none}.yt-in-post{margin:3px 0}.closeYT{cursor:pointer;float:right;margin-top:-22px;font-weight:bold}.clickDetail{position:absolute;top:25px;left:0;background:#fff;border:1px solid #ccc;box-shadow:0 2px 4px rgba(0,0,0,0.2);padding:16px 32px 16px 16px;position:absolute;z-index:1201;display:none;min-width:150px;-webkit-border-radius:2px;-moz-border-radius:2px;border-radius:2px}.clickDetail strong{color:#000 !important}.clickDetail a:hover{text-decoration:none;border-bottom:1px solid #36c}.clickDetail small{color:#999;position:absolute;right:16px}.clickDetail .notify{color:#999;margin-right:-16px;padding:10px 0 5px;text-align:center}.clickDetail.loaded .notify{display:none}.clickDetail:before{position:absolute;top:-9px;left:20px;border-left:9px solid transparent;border-right:9px solid transparent;border-bottom:9px dashed #ccc;content:''}.clickDetail:after{position:absolute;top:-7px;left:20px;border-left:9px solid transparent;border-right:9px solid transparent;border-bottom:9px dashed #fff;content:''}.maxpic_container{height:auto !important;max-width:none !important;max-height:none !important;margin-bottom:5px !important}.maxpic_container img{max-width:100% !important;height:auto !important}.maxyt_container{max-width:none !important;width:100% !important;height:auto !important}@keyframes loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@-webkit-keyframes loading{0%{-webkit-transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg)}}@-moz-keyframes loading{0%{-moz-transform:rotate(0deg)}100%{-moz-transform:rotate(360deg)}}"
