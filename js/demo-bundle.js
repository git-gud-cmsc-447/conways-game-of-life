!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=15)}([function(e,t){var n,r,i=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function s(e){if(n===setTimeout)return setTimeout(e,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:o}catch(e){n=o}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(e){r=a}}();var c,l=[],u=!1,h=-1;function f(){u&&c&&(u=!1,c.length?l=c.concat(l):h=-1,l.length&&d())}function d(){if(!u){var e=s(f);u=!0;for(var t=l.length;t;){for(c=l,l=[];++h<t;)c&&c[h].run();h=-1,t=l.length}c=null,u=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function y(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new p(e,t)),1!==l.length||u||s(d)},p.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=y,i.addListener=y,i.once=y,i.off=y,i.removeListener=y,i.removeAllListeners=y,i.emit=y,i.prependListener=y,i.prependOnceListener=y,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},,function(e,t,n){(function(e,r,i){var o;function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var s,c=(s="undefined"!=typeof document&&document.currentScript?document.currentScript.src:void 0,function(t){t=void 0!==(t=t||{})?t:{};var i,o={};for(i in t)t.hasOwnProperty(i)&&(o[i]=t[i]);t.arguments=[],t.thisProgram="./this.program",t.quit=function(e,t){throw t},t.preRun=[],t.postRun=[];var c,l,u=!1,h=!1;u="object"===("undefined"==typeof window?"undefined":a(window)),h="function"==typeof importScripts,c="object"===(void 0===e?"undefined":a(e))&&!u&&!h,l=!u&&!c&&!h;var f,d,p="";c?(p=r+"/",t.read=function(e,t){var r;return f||(f=n(5)),d||(d=n(6)),e=d.normalize(e),r=f.readFileSync(e),t?r:r.toString()},t.readBinary=function(e){var n=t.read(e,!0);return n.buffer||(n=new Uint8Array(n)),k(n.buffer),n},e.argv.length>1&&(t.thisProgram=e.argv[1].replace(/\\/g,"/")),t.arguments=e.argv.slice(2),e.on("uncaughtException",function(e){if(!(e instanceof X))throw e}),e.on("unhandledRejection",J),t.quit=function(t){e.exit(t)},t.inspect=function(){return"[Emscripten Module object]"}):l?("undefined"!=typeof read&&(t.read=function(e){return read(e)}),t.readBinary=function(e){var t;return"function"==typeof readbuffer?new Uint8Array(readbuffer(e)):(k("object"===a(t=read(e,"binary"))),t)},"undefined"!=typeof scriptArgs?t.arguments=scriptArgs:void 0!==arguments&&(t.arguments=arguments),"function"==typeof quit&&(t.quit=function(e){quit(e)})):(u||h)&&(h?p=self.location.href:document.currentScript&&(p=document.currentScript.src),s&&(p=s),p=0!==p.indexOf("blob:")?p.substr(0,p.lastIndexOf("/")+1):"",t.read=function(e){var t=new XMLHttpRequest;return t.open("GET",e,!1),t.send(null),t.responseText},h&&(t.readBinary=function(e){var t=new XMLHttpRequest;return t.open("GET",e,!1),t.responseType="arraybuffer",t.send(null),new Uint8Array(t.response)}),t.readAsync=function(e,t,n){var r=new XMLHttpRequest;r.open("GET",e,!0),r.responseType="arraybuffer",r.onload=function(){200==r.status||0==r.status&&r.response?t(r.response):n()},r.onerror=n,r.send(null)},t.setWindowTitle=function(e){document.title=e});var y=t.print||("undefined"!=typeof console?console.log.bind(console):"undefined"!=typeof print?print:null),v=t.printErr||("undefined"!=typeof printErr?printErr:"undefined"!=typeof console&&console.warn.bind(console)||y);for(i in o)o.hasOwnProperty(i)&&(t[i]=o[i]);o=void 0;var g,m={"f64-rem":function(e,t){return e%t},debugger:function(){}};new Array(0),"object"!==("undefined"==typeof WebAssembly?"undefined":a(WebAssembly))&&v("no native wasm support detected");var b,w,x,S,_=!1;function k(e,t){e||J("Assertion failed: "+t)}function O(e){var t=function(e){for(var t=0,n=0;n<e.length;++n){var r=e.charCodeAt(n);r>=55296&&r<=57343&&(r=65536+((1023&r)<<10)|1023&e.charCodeAt(++n)),r<=127?++t:t+=r<=2047?2:r<=65535?3:4}return t}(e)+1,n=$(t);return function(e,t,n,r){if(!(r>0))return 0;for(var i=n+r-1,o=0;o<e.length;++o){var a=e.charCodeAt(o);if(a>=55296&&a<=57343&&(a=65536+((1023&a)<<10)|1023&e.charCodeAt(++o)),a<=127){if(n>=i)break;t[n++]=a}else if(a<=2047){if(n+1>=i)break;t[n++]=192|a>>6,t[n++]=128|63&a}else if(a<=65535){if(n+2>=i)break;t[n++]=224|a>>12,t[n++]=128|a>>6&63,t[n++]=128|63&a}else{if(n+3>=i)break;t[n++]=240|a>>18,t[n++]=128|a>>12&63,t[n++]=128|a>>6&63,t[n++]=128|63&a}}t[n]=0}(e,w,n,t),n}"undefined"!=typeof TextDecoder&&new TextDecoder("utf8"),"undefined"!=typeof TextDecoder&&new TextDecoder("utf-16le");var T=t.TOTAL_MEMORY||16777216;function P(e){for(;e.length>0;){var n=e.shift();if("function"!=typeof n){var r=n.func;"number"==typeof r?void 0===n.arg?t.dynCall_v(r):t.dynCall_vi(r,n.arg):r(void 0===n.arg?null:n.arg)}else n()}}T<5242880&&v("TOTAL_MEMORY should be larger than TOTAL_STACK, was "+T+"! (TOTAL_STACK=5242880)"),t.buffer?b=t.buffer:"object"===("undefined"==typeof WebAssembly?"undefined":a(WebAssembly))&&"function"==typeof WebAssembly.Memory?(g=new WebAssembly.Memory({initial:T/65536,maximum:T/65536}),b=g.buffer):b=new ArrayBuffer(T),t.HEAP8=w=new Int8Array(b),t.HEAP16=new Int16Array(b),t.HEAP32=S=new Int32Array(b),t.HEAPU8=x=new Uint8Array(b),t.HEAPU16=new Uint16Array(b),t.HEAPU32=new Uint32Array(b),t.HEAPF32=new Float32Array(b),t.HEAPF64=new Float64Array(b),S[708]=5245744;var A=[],C=[],j=[],R=[],E=!1;function N(){E||(E=!0,P(C))}var I=0,F=null,U=null;t.preloadedImages={},t.preloadedAudios={};var W="data:application/octet-stream;base64,";function q(e){return String.prototype.startsWith?e.startsWith(W):0===e.indexOf(W)}var M,B="engine.wasm";function D(){try{if(t.wasmBinary)return new Uint8Array(t.wasmBinary);if(t.readBinary)return t.readBinary(B);throw"both async and sync fetching of the wasm failed"}catch(e){J(e)}}function z(e){var n={env:e,global:{NaN:NaN,Infinity:1/0},"global.Math":Math,asm2wasm:m};function r(e,n){var r=e.exports;t.asm=r,function(e){if(I--,t.monitorRunDependencies&&t.monitorRunDependencies(I),0==I&&(null!==F&&(clearInterval(F),F=null),U)){var n=U;U=null,n()}}()}if(I++,t.monitorRunDependencies&&t.monitorRunDependencies(I),t.instantiateWasm)try{return t.instantiateWasm(n,r)}catch(e){return v("Module.instantiateWasm callback failed with error: "+e),!1}function i(e){r(e.instance)}function o(e){(t.wasmBinary||!u&&!h||"function"!=typeof fetch?new Promise(function(e,t){e(D())}):fetch(B,{credentials:"same-origin"}).then(function(e){if(!e.ok)throw"failed to load wasm binary file at '"+B+"'";return e.arrayBuffer()}).catch(function(){return D()})).then(function(e){return WebAssembly.instantiate(e,n)}).then(e,function(e){v("failed to asynchronously prepare wasm: "+e),J(e)})}return t.wasmBinary||"function"!=typeof WebAssembly.instantiateStreaming||q(B)||"function"!=typeof fetch?o(i):WebAssembly.instantiateStreaming(fetch(B,{credentials:"same-origin"}),n).then(i,function(e){v("wasm streaming compile failed: "+e),v("falling back to ArrayBuffer instantiation"),o(i)}),{}}q(B)||(M=B,B=t.locateFile?t.locateFile(M,p):p+M),t.asm=function(e,t,n){return t.memory=g,t.table=new WebAssembly.Table({initial:0,maximum:0,element:"anyfunc"}),t.__memory_base=1024,t.__table_base=0,z(t)};var L=[function(){console.log("ok, run")}];function H(e){J("OOM")}var G={b:function(e){return t.___errno_location&&(S[t.___errno_location()>>2]=e),e},g:function(e){return L[e]()},f:function(){return w.length},e:function(e,t,n){x.set(x.subarray(t,t+n),e)},d:function(e){H()},c:H,a:2832},K=t.asm({},G,b);t.asm=K,t.___errno_location=function(){return t.asm.h.apply(null,arguments)},t._cell=function(){return t.asm.i.apply(null,arguments)},t._cellSafe=function(){return t.asm.j.apply(null,arguments)},t._cellUsed=function(){return t.asm.k.apply(null,arguments)},t._computeNextState=function(){return t.asm.l.apply(null,arguments)},t._getNext=function(){return t.asm.m.apply(null,arguments)},t._init=function(){return t.asm.n.apply(null,arguments)},t._main=function(){return t.asm.o.apply(null,arguments)},t._set=function(){return t.asm.p.apply(null,arguments)},t._setNext=function(){return t.asm.q.apply(null,arguments)},t._setRule=function(){return t.asm.r.apply(null,arguments)},t._setWrap=function(){return t.asm.s.apply(null,arguments)};var $=t.stackAlloc=function(){return t.asm.t.apply(null,arguments)};function X(e){this.name="ExitStatus",this.message="Program terminated with exit("+e+")",this.status=e}function Y(e){function n(){t.calledRun||(t.calledRun=!0,_||(N(),P(j),t.onRuntimeInitialized&&t.onRuntimeInitialized(),t._main&&Q&&t.callMain(e),function(){if(t.postRun)for("function"==typeof t.postRun&&(t.postRun=[t.postRun]);t.postRun.length;)e=t.postRun.shift(),R.unshift(e);var e;P(R)}()))}e=e||t.arguments,I>0||(function(){if(t.preRun)for("function"==typeof t.preRun&&(t.preRun=[t.preRun]);t.preRun.length;)e=t.preRun.shift(),A.unshift(e);var e;P(A)}(),I>0||t.calledRun||(t.setStatus?(t.setStatus("Running..."),setTimeout(function(){setTimeout(function(){t.setStatus("")},1),n()},1)):n()))}function J(e){throw t.onAbort&&t.onAbort(e),void 0!==e?(y(e),v(e),e=JSON.stringify(e)):e="",_=!0,"abort("+e+"). Build with -s ASSERTIONS=1 for more info."}if(t.asm=K,t.then=function(e){if(t.calledRun)e(t);else{var n=t.onRuntimeInitialized;t.onRuntimeInitialized=function(){n&&n(),e(t)}}return t},X.prototype=new Error,X.prototype.constructor=X,U=function e(){t.calledRun||Y(),t.calledRun||(U=e)},t.callMain=function(e){e=e||[],N();var n,r=e.length+1,i=$(4*(r+1));S[i>>2]=O(t.thisProgram);for(var o=1;o<r;o++)S[(i>>2)+o]=O(e[o-1]);S[(i>>2)+r]=0;try{n=t._main(r,i,0),!0&&t.noExitRuntime&&0===n||(t.noExitRuntime||(_=!0,t.onExit&&t.onExit(n)),t.quit(n,new X(n)))}catch(e){if(e instanceof X)return;if("SimulateInfiniteLoop"==e)return void(t.noExitRuntime=!0);var s=e;e&&"object"===a(e)&&e.stack&&(s=[e,e.stack]),v("exception thrown: "+s),t.quit(1,e)}},t.run=Y,t.abort=J,t.preInit)for("function"==typeof t.preInit&&(t.preInit=[t.preInit]);t.preInit.length>0;)t.preInit.pop()();var Q=!0;return t.noInitialRun&&(Q=!1),t.noExitRuntime=!0,Y(),t});"object"===a(t)&&"object"===a(i)?i.exports=c:void 0===(o=function(){return c}.apply(t,[]))||(i.exports=o)}).call(this,n(0),"/",n(4)(e))},function(e,t,n){"use strict";var r=n(7),i=n(8),o=n(9);function a(e,t){return t.encode?t.strict?r(e):encodeURIComponent(e):e}t.extract=function(e){return e.split("?")[1]||""},t.parse=function(e,t){var n=function(e){var t;switch(e.arrayFormat){case"index":return function(e,n,r){t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===r[e]&&(r[e]={}),r[e][t[1]]=n):r[e]=n};case"bracket":return function(e,n,r){t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==r[e]?r[e]=[].concat(r[e],n):r[e]=[n]:r[e]=n};default:return function(e,t,n){void 0!==n[e]?n[e]=[].concat(n[e],t):n[e]=t}}}(t=i({arrayFormat:"none"},t)),r=Object.create(null);return"string"!=typeof e?r:(e=e.trim().replace(/^(\?|#|&)/,""))?(e.split("&").forEach(function(e){var t=e.replace(/\+/g," ").split("="),i=t.shift(),a=t.length>0?t.join("="):void 0;a=void 0===a?null:o(a),n(o(i),a,r)}),Object.keys(r).sort().reduce(function(e,t){var n=r[t];return Boolean(n)&&"object"==typeof n&&!Array.isArray(n)?e[t]=function e(t){return Array.isArray(t)?t.sort():"object"==typeof t?e(Object.keys(t)).sort(function(e,t){return Number(e)-Number(t)}).map(function(e){return t[e]}):t}(n):e[t]=n,e},Object.create(null))):r},t.stringify=function(e,t){var n=function(e){switch(e.arrayFormat){case"index":return function(t,n,r){return null===n?[a(t,e),"[",r,"]"].join(""):[a(t,e),"[",a(r,e),"]=",a(n,e)].join("")};case"bracket":return function(t,n){return null===n?a(t,e):[a(t,e),"[]=",a(n,e)].join("")};default:return function(t,n){return null===n?a(t,e):[a(t,e),"=",a(n,e)].join("")}}}(t=i({encode:!0,strict:!0,arrayFormat:"none"},t));return e?Object.keys(e).sort().map(function(r){var i=e[r];if(void 0===i)return"";if(null===i)return a(r,t);if(Array.isArray(i)){var o=[];return i.slice().forEach(function(e){void 0!==e&&o.push(n(r,e,o.length))}),o.join("&")}return a(r,t)+"="+a(i,t)}).filter(function(e){return e.length>0}).join("&"):""}},function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},function(e,t){},function(e,t,n){(function(e){function n(e,t){for(var n=0,r=e.length-1;r>=0;r--){var i=e[r];"."===i?e.splice(r,1):".."===i?(e.splice(r,1),n++):n&&(e.splice(r,1),n--)}if(t)for(;n--;n)e.unshift("..");return e}var r=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,i=function(e){return r.exec(e).slice(1)};function o(e,t){if(e.filter)return e.filter(t);for(var n=[],r=0;r<e.length;r++)t(e[r],r,e)&&n.push(e[r]);return n}t.resolve=function(){for(var t="",r=!1,i=arguments.length-1;i>=-1&&!r;i--){var a=i>=0?arguments[i]:e.cwd();if("string"!=typeof a)throw new TypeError("Arguments to path.resolve must be strings");a&&(t=a+"/"+t,r="/"===a.charAt(0))}return(r?"/":"")+(t=n(o(t.split("/"),function(e){return!!e}),!r).join("/"))||"."},t.normalize=function(e){var r=t.isAbsolute(e),i="/"===a(e,-1);return(e=n(o(e.split("/"),function(e){return!!e}),!r).join("/"))||r||(e="."),e&&i&&(e+="/"),(r?"/":"")+e},t.isAbsolute=function(e){return"/"===e.charAt(0)},t.join=function(){var e=Array.prototype.slice.call(arguments,0);return t.normalize(o(e,function(e,t){if("string"!=typeof e)throw new TypeError("Arguments to path.join must be strings");return e}).join("/"))},t.relative=function(e,n){function r(e){for(var t=0;t<e.length&&""===e[t];t++);for(var n=e.length-1;n>=0&&""===e[n];n--);return t>n?[]:e.slice(t,n-t+1)}e=t.resolve(e).substr(1),n=t.resolve(n).substr(1);for(var i=r(e.split("/")),o=r(n.split("/")),a=Math.min(i.length,o.length),s=a,c=0;c<a;c++)if(i[c]!==o[c]){s=c;break}var l=[];for(c=s;c<i.length;c++)l.push("..");return(l=l.concat(o.slice(s))).join("/")},t.sep="/",t.delimiter=":",t.dirname=function(e){var t=i(e),n=t[0],r=t[1];return n||r?(r&&(r=r.substr(0,r.length-1)),n+r):"."},t.basename=function(e,t){var n=i(e)[2];return t&&n.substr(-1*t.length)===t&&(n=n.substr(0,n.length-t.length)),n},t.extname=function(e){return i(e)[3]};var a="b"==="ab".substr(-1)?function(e,t,n){return e.substr(t,n)}:function(e,t,n){return t<0&&(t=e.length+t),e.substr(t,n)}}).call(this,n(0))},function(e,t,n){"use strict";e.exports=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}},function(e,t,n){"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var r=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var n,a,s=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),c=1;c<arguments.length;c++){for(var l in n=Object(arguments[c]))i.call(n,l)&&(s[l]=n[l]);if(r){a=r(n);for(var u=0;u<a.length;u++)o.call(n,a[u])&&(s[a[u]]=n[a[u]])}}return s}},function(e,t,n){"use strict";var r=new RegExp("%[a-f0-9]{2}","gi"),i=new RegExp("(%[a-f0-9]{2})+","gi");function o(e,t){try{return decodeURIComponent(e.join(""))}catch(e){}if(1===e.length)return e;t=t||1;var n=e.slice(0,t),r=e.slice(t);return Array.prototype.concat.call([],o(n),o(r))}function a(e){try{return decodeURIComponent(e)}catch(i){for(var t=e.match(r),n=1;n<t.length;n++)t=(e=o(t,n).join("")).match(r);return e}}e.exports=function(e){if("string"!=typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch(t){return function(e){for(var t={"%FE%FF":"��","%FF%FE":"��"},n=i.exec(e);n;){try{t[n[0]]=decodeURIComponent(n[0])}catch(e){var r=a(n[0]);r!==n[0]&&(t[n[0]]=r)}n=i.exec(e)}t["%C2"]="�";for(var o=Object.keys(t),s=0;s<o.length;s++){var c=o[s];e=e.replace(new RegExp(c,"g"),t[c])}return e}(e)}}},,,,,,function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}n.r(t);var i=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.wasm=!1,this.width=t,this._width=t+2,this.height=n,this._height=n+2,this.module={calledRun:!0}}var t,n,i;return t=e,(n=[{key:"init",value:function(){var e=new ArrayBuffer(this._width*this._height);this._current=new Uint8Array(e);var t=new ArrayBuffer(this._width*this._height);this._next=new Uint8Array(t),this.module={calledRun:!0}}},{key:"index",value:function(e,t){return e*this._width+t}},{key:"cell",value:function(e,t){return this._current[this.index(e,t)]}},{key:"cellSafe",value:function(e,t){return this._current[(e+1)*this._width+t+1]}},{key:"next",value:function(e,t){return this._next[this.index(e,t)]}},{key:"loopCurrentState",value:function(){for(var e=1;e<this._width+1;e++)this._current[this.index(0,e)]=this._current[this.index(this._height-2,e)],this._current[this.index(this._height-1,e)]=this._current[this.index(1,e)];for(var t=1;t<this._height+1;t++)this._current[this.index(t,0)]=this._current[this.index(t,this._width-2)],this._current[this.index(t,this._width-1)]=this._current[this.index(t,1)];this._current[this.index(0,0)]=this._current[this.index(this._height-2,this._width-2)],this._current[this.index(0,this._width-1)]=this._current[this.index(this._height-2,1)],this._current[this.index(this._height-1,0)]=this._current[this.index(1,this._width-2)],this._current[this.index(this._height-1,this._width-1)]=this._current[this.index(1,1)]}},{key:"computeNextState",value:function(){var e,t,n,r,i,o;this.loopCurrentState();for(var a=1;a<this._height-1;a++){t=(a-1)*this._width,n=(a+1)*this._width,r=a*this._width;for(var s=1;s<this._width-1;s++)i=s-1,o=s+1,e=this._current[t+i],e+=this._current[t+s],e+=this._current[t+o],e+=this._current[r+i],e+=this._current[r+o],e+=this._current[n+i],e+=this._current[n+s],e+=this._current[n+o],this._next[r+s]=3===e?1:2===e?this._current[r+s]:0}this._current.set(this._next)}},{key:"set",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;this._current[this.index(e,t)]=n}},{key:"setNext",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;this._next[this.index(e,t)]=n}}])&&r(t.prototype,n),i&&r(t,i),e}(),o=n(2),a=n.n(o);function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var c=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.wasm=!0,this.width=t,this.height=n,this.module=a()({wasmBinaryFile:"js/engine.wasm"}),window.module=this.module}var t,n,r;return t=e,(n=[{key:"init",value:function(){this.currentAdress=this.module._init(this.width,this.height)}},{key:"cellSafe",value:function(e,t){var n=this.module.HEAP8[this.currentAdress+(e+1)*(this.width+2)+t+1];return 3==n&&(n=0),n}},{key:"cellUsed",value:function(e,t){return this.module._cellUsed(e+1,t+1)}},{key:"computeNextState",value:function(){this.module._computeNextState()}},{key:"set",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;this.module._set(e,t,n)}},{key:"setWrap",value:function(e){this.module._setWrap(e)}},{key:"setRule",value:function(e,t){this.module._setRule(e,t)}}])&&s(t.prototype,n),r&&s(t,r),e}();function l(e,t,n){e.set(t-1,n),e.set(t,n+2),e.set(t+1,n-1),e.set(t+1,n),e.set(t+1,n+3),e.set(t+1,n+4),e.set(t+1,n+5)}function u(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;e.set(t,n,r)}function h(e,t,n){for(var r=0;r<=t;r++)for(var i=0;i<=n;i++)Math.random()<.01&&l(e,r,i)}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var d=function(){function e(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.canvas=t,this.context=t.getContext("2d"),this.engine=n,this.pixelsPerCell=r.pixelsPerCell||5,this.desiredFPS=r.desiredFPS||30,this.fpsNode=r.fpsNode||!1,this.cellNode=r.cellNode||!1,this.genNode=r.genNode||!1,this.strokeStyle=r.strokeStyle||"rgba(255,118,5,0.5)",this.fillStyle=r.fillStyle||"rgba(222,122,39,0.5)",this.deadStyle=r.deadStyle||"rgba(222,122,39,0.1)",this.shape=r.shape||"rectangle",this.play=!1,this.fpsTime=0,this.engineTime=0,this.fps=0,this.frameNumber=0,this.skips=0,this.genNumber=0,this.canvas.width=this.engine.width*this.pixelsPerCell,this.canvas.height=this.engine.height*this.pixelsPerCell}var t,n,r;return t=e,(n=[{key:"togglePlay",value:function(){this.play=!this.play}},{key:"draw",value:function(e){window.requestAnimationFrame(this.draw.bind(this)),this.context.clearRect(0,0,this.canvas.width,this.canvas.height),this.context.strokeStyle=this.strokeStyle;for(var t=this.pixelsPerCell>1,n=0,r=this.engine.width*this.engine.height,i=0;i<this.engine.height;i++){var o=this.pixelsPerCell*i;this.context.beginPath(),this.context.moveTo(0,o),this.context.lineTo(this.engine.width*this.pixelsPerCell,o),this.context.stroke();for(var a=0;a<this.engine.width;a++){var s=this.pixelsPerCell*a;this.context.fillStyle=this.fillStyle,0==i&&(this.context.beginPath(),this.context.moveTo(s,0),this.context.lineTo(s,this.engine.height*this.pixelsPerCell),this.context.stroke());var c=this.engine.cellSafe(i,a),l=!1;if(c||(l=this.engine.cellUsed(i,a)),(c||l)&&(c?n++:this.context.fillStyle=this.deadStyle,t))switch(this.shape){case"rectangle":this.context.fillRect(s,o,this.pixelsPerCell,this.pixelsPerCell);break;case"triangle":this.context.beginPath(),this.context.moveTo(s,o+this.pixelsPerCell),this.context.lineTo(s+this.pixelsPerCell/2,o),this.context.lineTo(s+this.pixelsPerCell,o+this.pixelsPerCell),this.context.fill();break;case"circle":this.context.beginPath(),this.context.arc(s+this.pixelsPerCell/2,o+this.pixelsPerCell/2,this.pixelsPerCell/2,0,Math.PI/180*360),this.context.fill()}}}this.cellNode.textContent="".concat(n,"/").concat(r," Alive"),this.genNode.textContent="Generation: ".concat(this.genNumber);var u=e-this.engineTime;if(u>1e3/this.desiredFPS&&this.play){0==n&&(alert("Game over: No cells are left alive"),location.reload()),this.engine.computeNextState();for(var h=0;h<this.skips;h++)this.engine.computeNextState(),this.genNumber+=1;this.frameNumber+=1,this.genNumber+=1,this.engineTime=e-u%(1e3/this.desiredFPS)}if(this.fpsNode){var f=e-this.fpsTime;f>500&&(this.fps=1e3/f*this.frameNumber,this.fpsNode.textContent="".concat(this.fps.toFixed(2)," FPS"),this.fpsTime=e,this.frameNumber=0)}}},{key:"start",value:function(){this.play=!1,window.requestAnimationFrame(this.draw.bind(this))}},{key:"changeShape",value:function(e){this.shape=e}},{key:"changeSpeed",value:function(e){this.desiredFPS=e}},{key:"changeSkips",value:function(e){this.skips=e}},{key:"changeColor",value:function(e,t){switch(e){case"cell":this.fillStyle=t;break;case"grid":this.strokeStyle=t;break;case"dead":this.deadStyle=t}}}])&&f(t.prototype,n),r&&f(t,r),e}();function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var y=function(){function e(t,n,r){var i=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.canvas=t,this.engine=n,this.renderer=r,this.mouseDown=!1,this.listeners=[],this.addEvents([{eventType:"mousedown",callback:this.mouseIsDown.bind(this)},{eventType:"mouseup",callback:this.mouseIsUp.bind(this)},{eventType:"mousemove",callback:this.addCells.bind(this)},{eventType:"touchmove",callback:function(e){for(var t=0;t<e.touches.length;t++)i.addCells(e.touches[t],!0)}}])}var t,n,r;return t=e,(n=[{key:"addEvents",value:function(){var e=this;(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).forEach(function(t){e.listeners.push(t);var n=document;t.selector&&(n=document.querySelector(t.selector)),n&&n.addEventListener(t.eventType,t.callback)})}},{key:"addCells",value:function(e){var t,n,r,i=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o=this.canvas.getBoundingClientRect(),a=(e.clientX-o.left)/(o.right-o.left)*this.canvas.width,s={i:~~((e.clientY-o.top)/(o.bottom-o.top)*this.canvas.height/this.renderer.pixelsPerCell),j:~~(a/this.renderer.pixelsPerCell)};(this.mouseDown||i)&&(e.ctrlKey?(t=this.engine,n=s.i,r=s.j,t.set(n-1,r-1,0),t.set(n-1,r,0),t.set(n-1,r+1,0),t.set(n,r-1,0),t.set(n,r,0),t.set(n,r+1,0),t.set(n+1,r-1,0),t.set(n+1,r,0),t.set(n+1,r+1,0)):e.shiftKey?u(this.engine,s.i,s.j,2):e.altKey?u(this.engine,s.i,s.j,3):u(this.engine,s.i,s.j))}},{key:"mouseIsDown",value:function(e){0===e.button&&(this.mouseDown=!0,this.addCells(e))}},{key:"mouseIsUp",value:function(e){this.mouseDown=!1}}])&&p(t.prototype,n),r&&p(t,r),e}(),v=n(3),g={canvasSelector:"#universe",fpsNodeSelector:"#fps-info",infoNodeSelector:"#cell-info",genNodeSelector:"#gen-info",playButtonSelector:"#ctrl-play-pause",switchShapeSelector:"#ctrl-avatar-shape",switchCellColorSelector:"#ctrl-color-cell",switchGridColorSelector:"#ctrl-color-grid",switchDeadColorSelector:"#ctrl-color-dead",switchPatternSelector:"#ctrl-pattern",switchWrapSelector:"#wrap",changeSpeedSelector:"#speed-slider",changeSkipsSelector:"#ctrl-skips",xSizeSelector:"#ctl-grid-x",ySizeSelector:"#ctl-grid-y",applySizeSelector:"#apply",desiredFPS:30,width:50,height:20,pixelsPerCell:10,strokeStyle:"rgba(255,118,5,0.1)",fillStyle:"rgba(222,122,39,0.5)",showText:!0,useWasm:!0,shape:"rectangle"},m=n.n(v).a.parse(window.location.search);(m.desiredFPS||m.pixelsperCell)&&(g.showText=!1);var b=Object.assign(g,m);b.desiredFPS=parseInt(b.desiredFPS,10),b.pixelsperCell=parseInt(b.pixelsperCell,10),b.width=parseInt(b.width,10),b.height=parseInt(b.height,10);window.onload=function(){var e=document.querySelector(b.canvasSelector),t=b.width,n=b.height;document.querySelector(b.xSizeSelector).value=t,document.querySelector(b.ySizeSelector).value=n,b.pixelsPerCell=~~(e.clientWidth/t);var r,o=new c(t,n),a=new i(t,n);r=!0===b.useWasm?o:a,window.engine=r;var s=new d(e,r,{desiredFPS:b.desiredFPS,pixelsPerCell:b.pixelsPerCell,fpsNode:document.querySelector(b.fpsNodeSelector),genNode:document.querySelector(b.genNodeSelector),cellNode:document.querySelector(b.infoNodeSelector),strokeStyle:b.strokeStyle,fillStyle:b.fillStyle});b.showText;var u=function(e){var t,n=parseInt(e.target.id.substr(-1));switch(e.target.value){case"K":t=0;break;case"G":t=1;break;case"N":t=2}console.log("Setting ".concat(n," to ").concat(t)),r.setRule(n,t)},f=new y(e,r,s);f.addEvents([{selector:b.playButtonSelector,eventType:"click",callback:function(e){s.togglePlay(),e.target.textContent="Pause"===e.target.textContent?"Play":"Pause"}},{selector:b.changeSkipsSelector,eventType:"change",callback:function(e){s.changeSkips(e.target.value)}},{selector:b.changeSpeedSelector,eventType:"change",callback:function(e){console.log(e),b.desiredFPS=e.target.value,s.changeSpeed(b.desiredFPS)}},{selector:b.switchShapeSelector,eventType:"change",callback:function(e){console.log(e),s.changeShape(e.target.value)}},{selector:b.switchCellColorSelector,eventType:"change",callback:function(e){console.log(e),s.changeColor("cell",e.target.value)}},{selector:b.switchGridColorSelector,eventType:"change",callback:function(e){s.changeColor("grid",e.target.value)}},{selector:b.switchWrapSelector,eventType:"change",callback:function(e){console.log(e),r.setWrap(e.target.checked)}},{selector:b.applySizeSelector,eventType:"click",callback:function(e){var t=document.querySelector(b.xSizeSelector).value,n=document.querySelector(b.ySizeSelector).value;window.location.search="width=".concat(t,"&height=").concat(n)}},{selector:b.switchPatternSelector,eventType:"change",callback:function(e){switch(function(e,t,n){for(var r=0;r<=t;r++)for(var i=0;i<=n;i++)e.set(r,i,0)}(r,n,t),e.target.value){case"random":h(r,n,t);break;case"acorn":l(r,~~(n/2),~~(t/2));break;case"gun":!function(e,t,n){var r="........................O\n......................O.O\n............OO......OO............OO\n...........O...O....OO............OO\nOO........O.....O...OO\nOO........O...O.OO....O.O\n..........O.....O.......O\n...........O...O\n............OO";console.log(r);var i=0,o=0,a=!0,s=!1,c=void 0;try{for(var l,u=r[Symbol.iterator]();!(a=(l=u.next()).done);a=!0){var h=l.value;"\n"!=h?("O"==h&&(e.set(t+o,n+i),console.log(i+", "+o)),i+=1):(i=0,o+=1)}}catch(e){s=!0,c=e}finally{try{a||null==u.return||u.return()}finally{if(s)throw c}}}(r,~~(n/2),~~(t/2))}}},{selector:b.switchDeadColorSelector,eventType:"change",callback:function(e){s.changeColor("dead",e.target.value)}}]);for(var p=[],v=0;v<9;v++)p.push({selector:"#Rule".concat(v),eventType:"change",callback:u});f.addEvents(p);!function e(){!0!==r.module.calledRun?window.setTimeout(e.bind(void 0),100):(o.init(),a.init(),h(o,n,t),s.start())}()}}]);
//# sourceMappingURL=demo-bundle.js.map?44ff5ed8