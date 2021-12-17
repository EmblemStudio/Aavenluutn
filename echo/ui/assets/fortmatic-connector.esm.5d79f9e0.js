import{A as t}from"./abstract-connector.esm.b8d83b65.js";import{i as r}from"./vendor.e2ee514a.js";var e={1:"mainnet",3:"ropsten",4:"rinkeby",42:"kovan"},n=function(t){var n,o;function i(n){var o,i=n.apiKey,c=n.chainId;return Object.keys(e).includes(c.toString())||r(!1),(o=t.call(this,{supportedChainIds:[c]})||this).apiKey=i,o.chainId=c,o}o=t,(n=i).prototype=Object.create(o.prototype),n.prototype.constructor=n,n.__proto__=o;var c=i.prototype;return c.activate=function(){try{var t=function(){return Promise.resolve(r.fortmatic.getProvider().enable().then((function(t){return t[0]}))).then((function(t){return{provider:r.fortmatic.getProvider(),chainId:r.chainId,account:t}}))},r=this,n=function(){if(!r.fortmatic)return Promise.resolve(import("./fortmatic.b782960b.js").then((function(t){return t.f})).then((function(t){var r;return null!=(r=null==t?void 0:t.default)?r:t}))).then((function(t){r.fortmatic=new t(r.apiKey,1===r.chainId||4===r.chainId?void 0:e[r.chainId])}))}();return Promise.resolve(n&&n.then?n.then(t):t())}catch(o){return Promise.reject(o)}},c.getProvider=function(){try{return Promise.resolve(this.fortmatic.getProvider())}catch(t){return Promise.reject(t)}},c.getChainId=function(){try{return Promise.resolve(this.chainId)}catch(t){return Promise.reject(t)}},c.getAccount=function(){try{return Promise.resolve(this.fortmatic.getProvider().send("eth_accounts").then((function(t){return t[0]})))}catch(t){return Promise.reject(t)}},c.deactivate=function(){},c.close=function(){try{var t=this;return Promise.resolve(t.fortmatic.user.logout()).then((function(){t.emitDeactivate()}))}catch(r){return Promise.reject(r)}},i}(t);export{n as FortmaticConnector};
