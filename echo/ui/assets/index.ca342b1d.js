import{k as t,n as e}from"./vendor.e2ee514a.js";var s={},r={},n={};Object.defineProperty(n,"__esModule",{value:!0});var o=function(t){this.type=t,this.bubbles=!1,this.cancelable=!1,this.loaded=0,this.lengthComputable=!1,this.total=0};n.ProgressEvent=o;var i,a={},h=t&&t.__extends||(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var s in e)e.hasOwnProperty(s)&&(t[s]=e[s])},function(t,e){function s(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(s.prototype=e.prototype,new s)});Object.defineProperty(a,"__esModule",{value:!0});var p=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return h(e,t),e}(Error);a.SecurityError=p;var u=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return h(e,t),e}(Error);a.InvalidStateError=u;var l=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return h(e,t),e}(Error);a.NetworkError=l;var d=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return h(e,t),e}(Error);a.SyntaxError=d;var c={};Object.defineProperty(c,"__esModule",{value:!0});var _=function(){function t(){this.listeners={}}return t.prototype.addEventListener=function(t,e){t=t.toLowerCase(),this.listeners[t]=this.listeners[t]||[],this.listeners[t].push(e.handleEvent||e)},t.prototype.removeEventListener=function(t,e){if(t=t.toLowerCase(),this.listeners[t]){var s=this.listeners[t].indexOf(e.handleEvent||e);s<0||this.listeners[t].splice(s,1)}},t.prototype.dispatchEvent=function(t){var e=t.type.toLowerCase();if(t.target=this,this.listeners[e])for(var s=0,r=this.listeners[e];s<r.length;s++){r[s].call(this,t)}var n=this["on"+e];return n&&n.call(this,t),!0},t}();c.XMLHttpRequestEventTarget=_;var f={},y=t&&t.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var s in e)e.hasOwnProperty(s)&&(t[s]=e[s])};return function(e,s){function r(){this.constructor=e}t(e,s),e.prototype=null===s?Object.create(s):(r.prototype=s.prototype,new r)}}();Object.defineProperty(f,"__esModule",{value:!0});var v=function(t){function e(){var e=t.call(this)||this;return e._contentType=null,e._body=null,e._reset(),e}return y(e,t),e.prototype._reset=function(){this._contentType=null,this._body=null},e.prototype._setData=function(t){if(null!=t)if("string"==typeof t)0!==t.length&&(this._contentType="text/plain;charset=UTF-8"),this._body=new Buffer(t,"utf-8");else if(Buffer.isBuffer(t))this._body=t;else if(t instanceof ArrayBuffer){for(var e=new Buffer(t.byteLength),s=new Uint8Array(t),r=0;r<t.byteLength;r++)e[r]=s[r];this._body=e}else{if(!(t.buffer&&t.buffer instanceof ArrayBuffer))throw new Error("Unsupported send() data "+t);e=new Buffer(t.byteLength);var n=t.byteOffset;for(s=new Uint8Array(t.buffer),r=0;r<t.byteLength;r++)e[r]=s[r+n];this._body=e}},e.prototype._finalizeHeaders=function(t,e){this._contentType&&!e["content-type"]&&(t["Content-Type"]=this._contentType),this._body&&(t["Content-Length"]=this._body.length.toString())},e.prototype._startUpload=function(t){this._body&&t.write(this._body),t.end()},e}(c.XMLHttpRequestEventTarget);f.XMLHttpRequestUpload=v;var E={};!function(){function t(e,s,r,n){return this instanceof t?(this.domain=e||void 0,this.path=s||"/",this.secure=!!r,this.script=!!n,this):new t(e,s,r,n)}function e(t,s,r){return t instanceof e?t:this instanceof e?(this.name=null,this.value=null,this.expiration_date=1/0,this.path=String(r||"/"),this.explicit_path=!1,this.domain=s||null,this.explicit_domain=!1,this.secure=!1,this.noscript=!1,t&&this.parse(t,s,r),this):new e(t,s,r)}t.All=Object.freeze(Object.create(null)),E.CookieAccessInfo=t,E.Cookie=e,e.prototype.toString=function(){var t=[this.name+"="+this.value];return this.expiration_date!==1/0&&t.push("expires="+new Date(this.expiration_date).toGMTString()),this.domain&&t.push("domain="+this.domain),this.path&&t.push("path="+this.path),this.secure&&t.push("secure"),this.noscript&&t.push("httponly"),t.join("; ")},e.prototype.toValueString=function(){return this.name+"="+this.value};var s=/[:](?=\s*[a-zA-Z0-9_\-]+\s*[=])/g;function r(){var t,s;return this instanceof r?(t=Object.create(null),this.setCookie=function(r,n,o){var i,a;if(i=(r=new e(r,n,o)).expiration_date<=Date.now(),void 0!==t[r.name]){for(s=t[r.name],a=0;a<s.length;a+=1)if(s[a].collidesWith(r))return i?(s.splice(a,1),0===s.length&&delete t[r.name],!1):(s[a]=r,r);return!i&&(s.push(r),r)}return!i&&(t[r.name]=[r],t[r.name])},this.getCookie=function(e,r){var n,o;if(s=t[e])for(o=0;o<s.length;o+=1)if((n=s[o]).expiration_date<=Date.now())0===s.length&&delete t[n.name];else if(n.matches(r))return n},this.getCookies=function(e){var s,r,n=[];for(s in t)(r=this.getCookie(s,e))&&n.push(r);return n.toString=function(){return n.join(":")},n.toValueString=function(){return n.map((function(t){return t.toValueString()})).join("; ")},n},this):new r}e.prototype.parse=function(t,s,r){if(this instanceof e){var n,o=t.split(";").filter((function(t){return!!t})),i=o[0].match(/([^=]+)=([\s\S]*)/);if(!i)return void console.warn("Invalid cookie header encountered. Header: '"+t+"'");var a=i[1],h=i[2];if("string"!=typeof a||0===a.length||"string"!=typeof h)return void console.warn("Unable to extract values from cookie header. Cookie: '"+t+"'");for(this.name=a,this.value=h,n=1;n<o.length;n+=1)switch(a=(i=o[n].match(/([^=]+)(?:=([\s\S]*))?/))[1].trim().toLowerCase(),h=i[2],a){case"httponly":this.noscript=!0;break;case"expires":this.expiration_date=h?Number(Date.parse(h)):1/0;break;case"path":this.path=h?h.trim():"",this.explicit_path=!0;break;case"domain":this.domain=h?h.trim():"",this.explicit_domain=!!this.domain;break;case"secure":this.secure=!0}return this.explicit_path||(this.path=r||"/"),this.explicit_domain||(this.domain=s),this}return(new e).parse(t,s,r)},e.prototype.matches=function(e){return e===t.All||!(this.noscript&&e.script||this.secure&&!e.secure||!this.collidesWith(e))},e.prototype.collidesWith=function(t){if(this.path&&!t.path||this.domain&&!t.domain)return!1;if(this.path&&0!==t.path.indexOf(this.path))return!1;if(this.explicit_path&&0!==t.path.indexOf(this.path))return!1;var e=t.domain&&t.domain.replace(/^[\.]/,""),s=this.domain&&this.domain.replace(/^[\.]/,"");if(s===e)return!0;if(s){if(!this.explicit_domain)return!1;var r=e.indexOf(s);return-1!==r&&r===e.length-s.length}return!0},E.CookieJar=r,r.prototype.setCookies=function(t,r,n){var o,i,a=[];for(t=(t=Array.isArray(t)?t:t.split(s)).map((function(t){return new e(t,r,n)})),o=0;o<t.length;o+=1)i=t[o],this.setCookie(i,r,n)&&a.push(i);return a}}();var g=t&&t.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var s in e)e.hasOwnProperty(s)&&(t[s]=e[s])};return function(e,s){function r(){this.constructor=e}t(e,s),e.prototype=null===s?Object.create(s):(r.prototype=s.prototype,new r)}}(),m=t&&t.__assign||Object.assign||function(t){for(var e,s=1,r=arguments.length;s<r;s++)for(var n in e=arguments[s])Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t};Object.defineProperty(r,"__esModule",{value:!0});var w=e,H=e,b=e,O=e,S=n,R=a,C=f,x=E,P=function(t){function e(s){void 0===s&&(s={});var r=t.call(this)||this;return r.UNSENT=e.UNSENT,r.OPENED=e.OPENED,r.HEADERS_RECEIVED=e.HEADERS_RECEIVED,r.LOADING=e.LOADING,r.DONE=e.DONE,r.onreadystatechange=null,r.readyState=e.UNSENT,r.response=null,r.responseText="",r.responseType="",r.status=0,r.statusText="",r.timeout=0,r.upload=new C.XMLHttpRequestUpload,r.responseUrl="",r.withCredentials=!1,r._method=null,r._url=null,r._sync=!1,r._headers={},r._loweredHeaders={},r._mimeOverride=null,r._request=null,r._response=null,r._responseParts=null,r._responseHeaders=null,r._aborting=null,r._error=null,r._loadedBytes=0,r._totalBytes=0,r._lengthComputable=!1,r._restrictedMethods={CONNECT:!0,TRACE:!0,TRACK:!0},r._restrictedHeaders={"accept-charset":!0,"accept-encoding":!0,"access-control-request-headers":!0,"access-control-request-method":!0,connection:!0,"content-length":!0,cookie:!0,cookie2:!0,date:!0,dnt:!0,expect:!0,host:!0,"keep-alive":!0,origin:!0,referer:!0,te:!0,trailer:!0,"transfer-encoding":!0,upgrade:!0,"user-agent":!0,via:!0},r._privateHeaders={"set-cookie":!0,"set-cookie2":!0},r._userAgent="Mozilla/5.0 ("+b.type()+" "+b.arch()+") node.js/"+process.versions.node+" v8/"+process.versions.v8,r._anonymous=s.anon||!1,r}return g(e,t),e.prototype.open=function(t,s,r,n,o){if(void 0===r&&(r=!0),t=t.toUpperCase(),this._restrictedMethods[t])throw new e.SecurityError("HTTP method "+t+" is not allowed in XHR");var i=this._parseUrl(s,n,o);this.readyState===e.HEADERS_RECEIVED||(this.readyState,e.LOADING),this._method=t,this._url=i,this._sync=!r,this._headers={},this._loweredHeaders={},this._mimeOverride=null,this._setReadyState(e.OPENED),this._request=null,this._response=null,this.status=0,this.statusText="",this._responseParts=[],this._responseHeaders=null,this._loadedBytes=0,this._totalBytes=0,this._lengthComputable=!1},e.prototype.setRequestHeader=function(t,s){if(this.readyState!==e.OPENED)throw new e.InvalidStateError("XHR readyState must be OPENED");var r=t.toLowerCase();this._restrictedHeaders[r]||/^sec-/.test(r)||/^proxy-/.test(r)?console.warn('Refused to set unsafe header "'+t+'"'):(s=s.toString(),null!=this._loweredHeaders[r]?(t=this._loweredHeaders[r],this._headers[t]=this._headers[t]+", "+s):(this._loweredHeaders[r]=t,this._headers[t]=s))},e.prototype.send=function(t){if(this.readyState!==e.OPENED)throw new e.InvalidStateError("XHR readyState must be OPENED");if(this._request)throw new e.InvalidStateError("send() already called");switch(this._url.protocol){case"file:":return this._sendFile(t);case"http:":case"https:":return this._sendHttp(t);default:throw new e.NetworkError("Unsupported protocol "+this._url.protocol)}},e.prototype.abort=function(){null!=this._request&&(this._request.abort(),this._setError(),this._dispatchProgress("abort"),this._dispatchProgress("loadend"))},e.prototype.getResponseHeader=function(t){if(null==this._responseHeaders||null==t)return null;var e=t.toLowerCase();return this._responseHeaders.hasOwnProperty(e)?this._responseHeaders[t.toLowerCase()]:null},e.prototype.getAllResponseHeaders=function(){var t=this;return null==this._responseHeaders?"":Object.keys(this._responseHeaders).map((function(e){return e+": "+t._responseHeaders[e]})).join("\r\n")},e.prototype.overrideMimeType=function(t){if(this.readyState===e.LOADING||this.readyState===e.DONE)throw new e.InvalidStateError("overrideMimeType() not allowed in LOADING or DONE");this._mimeOverride=t.toLowerCase()},e.prototype.nodejsSet=function(t){if(this.nodejsHttpAgent=t.httpAgent||this.nodejsHttpAgent,this.nodejsHttpsAgent=t.httpsAgent||this.nodejsHttpsAgent,t.hasOwnProperty("baseUrl")){if(null!=t.baseUrl)if(!O.parse(t.baseUrl,!1,!0).protocol)throw new e.SyntaxError("baseUrl must be an absolute URL");this.nodejsBaseUrl=t.baseUrl}},e.nodejsSet=function(t){e.prototype.nodejsSet(t)},e.prototype._setReadyState=function(t){this.readyState=t,this.dispatchEvent(new S.ProgressEvent("readystatechange"))},e.prototype._sendFile=function(t){throw new Error("Protocol file: not implemented")},e.prototype._sendHttp=function(t){if(this._sync)throw new Error("Synchronous XHR processing not implemented");!t||"GET"!==this._method&&"HEAD"!==this._method?t=t||"":(console.warn("Discarding entity body for "+this._method+" requests"),t=null),this.upload._setData(t),this._finalizeHeaders(),this._sendHxxpRequest()},e.prototype._sendHxxpRequest=function(){var t=this;if(this.withCredentials){var s=e.cookieJar.getCookies(x.CookieAccessInfo(this._url.hostname,this._url.pathname,"https:"===this._url.protocol)).toValueString();this._headers.cookie=this._headers.cookie2=s}var r="http:"===this._url.protocol?[w,this.nodejsHttpAgent]:[H,this.nodejsHttpsAgent],n=r[0],o=r[1],i=n.request.bind(n)({hostname:this._url.hostname,port:+this._url.port,path:this._url.path,auth:this._url.auth,method:this._method,headers:this._headers,agent:o});this._request=i,this.timeout&&i.setTimeout(this.timeout,(function(){return t._onHttpTimeout(i)})),i.on("response",(function(e){return t._onHttpResponse(i,e)})),i.on("error",(function(e){return t._onHttpRequestError(i,e)})),this.upload._startUpload(i),this._request===i&&this._dispatchProgress("loadstart")},e.prototype._finalizeHeaders=function(){this._headers=m({},this._headers,{Connection:"keep-alive",Host:this._url.host,"User-Agent":this._userAgent},this._anonymous?{Referer:"about:blank"}:{}),this.upload._finalizeHeaders(this._headers,this._loweredHeaders)},e.prototype._onHttpResponse=function(t,s){var r=this;if(this._request===t){if(this.withCredentials&&(s.headers["set-cookie"]||s.headers["set-cookie2"])&&e.cookieJar.setCookies(s.headers["set-cookie"]||s.headers["set-cookie2"]),[301,302,303,307,308].indexOf(s.statusCode)>=0)return this._url=this._parseUrl(s.headers.location),this._method="GET",this._loweredHeaders["content-type"]&&(delete this._headers[this._loweredHeaders["content-type"]],delete this._loweredHeaders["content-type"]),null!=this._headers["Content-Type"]&&delete this._headers["Content-Type"],delete this._headers["Content-Length"],this.upload._reset(),this._finalizeHeaders(),void this._sendHxxpRequest();this._response=s,this._response.on("data",(function(t){return r._onHttpResponseData(s,t)})),this._response.on("end",(function(){return r._onHttpResponseEnd(s)})),this._response.on("close",(function(){return r._onHttpResponseClose(s)})),this.responseUrl=this._url.href.split("#")[0],this.status=s.statusCode,this.statusText=w.STATUS_CODES[this.status],this._parseResponseHeaders(s);var n=this._responseHeaders["content-length"]||"";this._totalBytes=+n,this._lengthComputable=!!n,this._setReadyState(e.HEADERS_RECEIVED)}},e.prototype._onHttpResponseData=function(t,s){this._response===t&&(this._responseParts.push(new Buffer(s)),this._loadedBytes+=s.length,this.readyState!==e.LOADING&&this._setReadyState(e.LOADING),this._dispatchProgress("progress"))},e.prototype._onHttpResponseEnd=function(t){this._response===t&&(this._parseResponse(),this._request=null,this._response=null,this._setReadyState(e.DONE),this._dispatchProgress("load"),this._dispatchProgress("loadend"))},e.prototype._onHttpResponseClose=function(t){if(this._response===t){var s=this._request;this._setError(),s.abort(),this._setReadyState(e.DONE),this._dispatchProgress("error"),this._dispatchProgress("loadend")}},e.prototype._onHttpTimeout=function(t){this._request===t&&(this._setError(),t.abort(),this._setReadyState(e.DONE),this._dispatchProgress("timeout"),this._dispatchProgress("loadend"))},e.prototype._onHttpRequestError=function(t,s){this._request===t&&(this._setError(),t.abort(),this._setReadyState(e.DONE),this._dispatchProgress("error"),this._dispatchProgress("loadend"))},e.prototype._dispatchProgress=function(t){var s=new e.ProgressEvent(t);s.lengthComputable=this._lengthComputable,s.loaded=this._loadedBytes,s.total=this._totalBytes,this.dispatchEvent(s)},e.prototype._setError=function(){this._request=null,this._response=null,this._responseHeaders=null,this._responseParts=null},e.prototype._parseUrl=function(t,e,s){var r=null==this.nodejsBaseUrl?t:O.resolve(this.nodejsBaseUrl,t),n=O.parse(r,!1,!0);n.hash=null;var o=(n.auth||"").split(":"),i=o[0],a=o[1];return(i||a||e||s)&&(n.auth=(e||i||"")+":"+(s||a||"")),n},e.prototype._parseResponseHeaders=function(t){for(var e in this._responseHeaders={},t.headers){var s=e.toLowerCase();this._privateHeaders[s]||(this._responseHeaders[s]=t.headers[e])}null!=this._mimeOverride&&(this._responseHeaders["content-type"]=this._mimeOverride)},e.prototype._parseResponse=function(){var t=Buffer.concat(this._responseParts);switch(this._responseParts=null,this.responseType){case"json":this.responseText=null;try{this.response=JSON.parse(t.toString("utf-8"))}catch(n){this.response=null}return;case"buffer":return this.responseText=null,void(this.response=t);case"arraybuffer":this.responseText=null;for(var e=new ArrayBuffer(t.length),s=new Uint8Array(e),r=0;r<t.length;r++)s[r]=t[r];return void(this.response=e);case"text":default:try{this.responseText=t.toString(this._parseResponseEncoding())}catch(o){this.responseText=t.toString("binary")}this.response=this.responseText}},e.prototype._parseResponseEncoding=function(){return/;\s*charset=(.*)$/.exec(this._responseHeaders["content-type"]||"")[1]||"utf-8"},e.ProgressEvent=S.ProgressEvent,e.InvalidStateError=R.InvalidStateError,e.NetworkError=R.NetworkError,e.SecurityError=R.SecurityError,e.SyntaxError=R.SyntaxError,e.XMLHttpRequestUpload=C.XMLHttpRequestUpload,e.UNSENT=0,e.OPENED=1,e.HEADERS_RECEIVED=2,e.LOADING=3,e.DONE=4,e.cookieJar=x.CookieJar(),e}(c.XMLHttpRequestEventTarget);r.XMLHttpRequest=P,P.prototype.nodejsHttpAgent=w.globalAgent,P.prototype.nodejsHttpsAgent=H.globalAgent,P.prototype.nodejsBaseUrl=null,function(t){Object.defineProperty(t,"__esModule",{value:!0}),function(e){for(var s in e)t.hasOwnProperty(s)||(t[s]=e[s])}(r);var e=c;t.XMLHttpRequestEventTarget=e.XMLHttpRequestEventTarget}(s);export{s as d};
