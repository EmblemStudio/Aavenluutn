var e=Object.defineProperty,t=Object.defineProperties,n=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,l=(t,n,a)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[n]=a;"undefined"!=typeof require&&require;import{r as s,R as o,g as c,C as u,W as m,B as d,a as p,A as y,u as b,L as v,b as f,p as g,f as E,U as h,c as x,d as T,e as N,h as w}from"./vendor.e2ee514a.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const n of e)if("childList"===n.type)for(const e of n.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const k={errors:[],warnings:[],status:[]},I=s.exports.createContext({notifications:k,addNotification:(e,t)=>{},removeNotification:(e,t)=>{}});var M=({children:e})=>{const[t,n]=s.exports.useState(k);const a={notifications:t,addNotification:function(e,a){if(-1===t[e].indexOf(a)){const i=Object.assign({},t);i[e].push(a),n(i)}},removeNotification:function(e,a){const i=t[e].indexOf(a);if(i>=0){const a=Object.assign({},t);a[e]=[...a[e].slice(0,i),...a[e].slice(i+1)],n(a)}}};return o.createElement(I.Provider,{value:a},e)};const A={network:"localhost",narratorIndex:2},S={no_connection:`connect to ${A.network} to bid or claim`,wrong_network:`switch to ${A.network} to bid or claim`},C={tx_submitted:"transaction submitted--awaiting confirmation",tx_confirmed:"transacton confirmed"},F={mainnet:"",ropsten:"0x2A7b3033c100044178E7c7FDdC939Be660178458",goerli:"0x854757c41Ba48ad8C53cF1890B2B8672ad8b0c15",polygon:"",localhost:"0x720472c8ce72c2A2D711333e064ABD3E6BbEAdd3"},$={localhost:"http://localhost:8000",mainnet:"http://67.205.138.92",ropsten:"http://67.205.138.92",polygon:"http://67.205.138.92",goerli:"http://67.205.138.92"}[A.network],O={ropsten:"https://eth-ropsten.alchemyapi.io/v2/tDTu2vhfHnGOWJuM0p1DrA6BBJn0uDL3",goerli:"https://eth-goerli.alchemyapi.io/v2/tDTu2vhfHnGOWJuM0p1DrA6BBJn0uDL3",localhost:"http://localhost:8545"},_=["green","red","blue","yellow","purple","orange"],D=`${{ropsten:"https://ropsten.etherscan.io/",mainnet:"https://www.etherscan.io/",polygon:"https://polygonscan.com/",goerli:"https://goerli.etherscan.io/",localhost:""}[A.network]}address/${F[A.network]}`;var B=[{inputs:[{internalType:"uint256",name:"_baseAuctionDuration",type:"uint256"},{internalType:"uint256",name:"_timeBuffer",type:"uint256"},{internalType:"uint256",name:"_minBidAmount",type:"uint256"},{internalType:"uint8",name:"_minBidIncrementPercentage",type:"uint8"},{internalType:"string",name:"name",type:"string"},{internalType:"string",name:"symbol",type:"string"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"approved",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!1,internalType:"bool",name:"approved",type:"bool"}],name:"ApprovalForAll",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"narratorIndex",type:"uint256"},{indexed:!0,internalType:"uint256",name:"collectionIndex",type:"uint256"},{indexed:!0,internalType:"uint256",name:"storyIndex",type:"uint256"},{indexed:!1,internalType:"uint256",name:"newDuration",type:"uint256"}],name:"AuctionExtended",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"narratorIndex",type:"uint256"},{indexed:!0,internalType:"uint256",name:"collectionIndex",type:"uint256"},{indexed:!0,internalType:"uint256",name:"storyIndex",type:"uint256"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"},{indexed:!1,internalType:"address",name:"bidder",type:"address"}],name:"Bid",type:"event"},{anonymous:!1,inputs:[{components:[{internalType:"address",name:"NFTAddress",type:"address"},{internalType:"uint256",name:"NFTId",type:"uint256"},{internalType:"uint256",name:"start",type:"uint256"},{internalType:"uint256",name:"totalCollections",type:"uint256"},{internalType:"uint256",name:"collectionLength",type:"uint256"},{internalType:"uint256",name:"collectionSpacing",type:"uint256"},{internalType:"uint256",name:"collectionSize",type:"uint256"}],indexed:!1,internalType:"struct Publisher.Narrator",name:"narrator",type:"tuple"},{indexed:!1,internalType:"uint256",name:"count",type:"uint256"}],name:"NarratorAdded",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Transfer",type:"event"},{inputs:[{internalType:"address",name:"NFTAddress",type:"address"},{internalType:"uint256",name:"NFTId",type:"uint256"},{internalType:"uint256",name:"start",type:"uint256"},{internalType:"uint256",name:"totalCollections",type:"uint256"},{internalType:"uint256",name:"collectionLength",type:"uint256"},{internalType:"uint256",name:"collectionSpacing",type:"uint256"},{internalType:"uint256",name:"collectionSize",type:"uint256"}],name:"addNarrator",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"approve",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"baseAuctionDuration",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"narratorIndex",type:"uint256"},{internalType:"uint256",name:"collectionIndex",type:"uint256"},{internalType:"uint256",name:"storyIndex",type:"uint256"},{internalType:"address",name:"mintTo",type:"address"}],name:"bid",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"payable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"getApproved",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"narratorIndex",type:"uint256"},{internalType:"uint256",name:"collectionIndex",type:"uint256"},{internalType:"uint256",name:"storyIndex",type:"uint256"}],name:"getStoryId",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"pure",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"operator",type:"address"}],name:"isApprovedForAll",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"minBidIncrementPercentage",outputs:[{internalType:"uint8",name:"",type:"uint8"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"narratorIndex",type:"uint256"},{internalType:"uint256",name:"collectionIndex",type:"uint256"},{internalType:"uint256",name:"storyIndex",type:"uint256"},{internalType:"address",name:"to",type:"address"}],name:"mint",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"mintedStories",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"narratorCount",outputs:[{internalType:"uint256",name:"_value",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"narrators",outputs:[{internalType:"address",name:"NFTAddress",type:"address"},{internalType:"uint256",name:"NFTId",type:"uint256"},{internalType:"uint256",name:"start",type:"uint256"},{internalType:"uint256",name:"totalCollections",type:"uint256"},{internalType:"uint256",name:"collectionLength",type:"uint256"},{internalType:"uint256",name:"collectionSpacing",type:"uint256"},{internalType:"uint256",name:"collectionSize",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"nftIds",outputs:[{internalType:"uint256",name:"_value",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"ownerOf",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"bytes",name:"_data",type:"bytes"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"operator",type:"address"},{internalType:"bool",name:"approved",type:"bool"}],name:"setApprovalForAll",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes32",name:"",type:"bytes32"}],name:"stories",outputs:[{internalType:"uint256",name:"narratorIndex",type:"uint256"},{internalType:"uint256",name:"collectionIndex",type:"uint256"},{internalType:"uint256",name:"index",type:"uint256"},{components:[{internalType:"uint256",name:"amount",type:"uint256"},{internalType:"address payable",name:"bidder",type:"address"},{internalType:"uint256",name:"duration",type:"uint256"}],internalType:"struct Publisher.Auction",name:"auction",type:"tuple"},{internalType:"bool",name:"minted",type:"bool"},{internalType:"uint256",name:"nftId",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"narratorIndex",type:"uint256"},{internalType:"uint256",name:"collectionIndex",type:"uint256"},{internalType:"uint256",name:"storyIndex",type:"uint256"}],name:"storyStartTime",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes4",name:"interfaceId",type:"bytes4"}],name:"supportsInterface",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"timeBuffer",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"index",type:"uint256"}],name:"tokenByIndex",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"uint256",name:"index",type:"uint256"}],name:"tokenOfOwnerByIndex",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"nftId",type:"uint256"}],name:"tokenURI",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"transferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"}];function P(e){return e?e.slice(0,6)+"..."+e.slice(e.length-7,e.length-1):""}function L(e){var t;return null!=(t=_[e%(_.length-1)])?t:"gray"}function z(e){let t=e-Math.floor(Date.now()/1e3);return t<0?0:t}function j(e){if(!e)return"";if(-1===_.indexOf(e))throw new Error("Invalid color");return` has-text-${e} has-text-weight-bold`}function q(e){return Number(e)<=Math.floor(Date.now()/1e3)}function R(e){return`${e.narratorIndex}-${e.storyIndex}-${e.collectionIndex}`}function G(e){return!e.ethereum}function U(e,t){return e.networkName!==t}const W={NFTAddress:". . .",NFTId:d.from(0),start:d.from(0),totalCollections:d.from(0),collectionLength:d.from(0),collectionSize:d.from(0),collectionSpacing:d.from(0),collections:[],stories:{}};const H=s.exports.createContext({narrator:W,updateNarrator:()=>{},lastUpdate:0});var J=({params:e,children:t})=>{const[n,a]=s.exports.useState({narrator:W,updateNarrator:()=>{},lastUpdate:0});return s.exports.useEffect((()=>{K(n,a,e)}),[n]),o.createElement(H.Provider,{value:n},t)};let Y,V=d.from(-1);async function K(e,s,o){if(e.lastUpdate>Date.now()-18e4)return void console.log("Cache still valid, skipping narrator state update");const m=F[o.network];!function(e,t){if(null==e)throw new Error(null!=t?t:`'val' required to be defined, but received ${e}`)}(m,"Address for ${params.netowrk} required");const d=((e,t,n)=>{const a=O[n];if(console.log("provider api",a),!a)return null;const i=c(a);return new u(e,t,i)})(m,B,o.network);if(!d)return;V.eq(-1)&&(V=await d.baseAuctionDuration(),console.log("fetched baseAuctionDuration",Number(V))),void 0===Y&&(Y=await d.narrators(o.narratorIndex),console.log("Feched narratorData",Y));let p=(y=((e,t)=>{for(var n in t||(t={}))i.call(t,n)&&l(e,n,t[n]);if(a)for(var n of a(t))r.call(t,n)&&l(e,n,t[n]);return e})({},Y),t(y,n({collections:[],stories:{}})));var y;const b=Number(p.totalCollections),v=Math.floor(Date.now()/1e3)-Number(p.start),f=Math.floor(v/Number(p.collectionSpacing))+2;console.log("updating narratorState from",e);const g=[];for(let t=0;t<Math.min(f,b);t++)g.push(new Promise((async(n,a)=>{const i=await Q(o.narratorIndex,t);i&&(p.collections.push(i),p.stories=await Z(d,V,o.narratorIndex,Number(p.collectionSize),p.collectionLength,i,p.stories,i.scriptResult)),s({narrator:p,updateNarrator:()=>{K(e,s,o)},lastUpdate:Date.now()}),n()})));await Promise.all(g),console.log("updated narratorState")}function X(e,t){return Number(e.startTime.sub(t.startTime))}async function Q(e,t){console.log("getting collection",e,t);const n=await p.get(`${$}/runs/${e}/${t}`);if(!n.data)return null;const a=n.data;console.log("got response",e,t,a);return{collectionIndex:t,scriptResult:a}}async function Z(e,t,n,a,i,r,l,s){const o=r.collectionIndex;for(let c=0;c<a;c++){const a=c,r=await e.getStoryId(n,o,a),u=await e.storyStartTime(n,o,a),m=u.add(i),d=await e.stories(r),p=d.auction,b=s.stories[c];if(void 0===b){console.warn("scriptResult missing story at index",c);continue}const v={narratorIndex:n,collectionIndex:o,storyIndex:a,id:r,startTime:u,endTime:m,auction:p,minted:d.minted,nftId:d.nftId,text:b};p.bidder===y&&(v.auction=Object.assign({},p,{duration:t}));const f=q(v.startTime),g=q(v.endTime),E=q(v.endTime.add(v.auction.duration));l[a]||(l[a]={upcoming:[],inProgress:[],onAuction:[],completed:[]}),f?f&&!g?l[a].inProgress.push(v):g&&!E?l[a].onAuction.push(v):g&&E&&l[a].completed.push(v):l[a].upcoming.push(v),l[a].upcoming.sort(X),l[a].inProgress.sort(X),l[a].onAuction.sort(X),l[a].completed.sort(X)}return l}var ee=()=>{const[e,t]=s.exports.useState(""),n=b();return o.createElement("div",null,"connected"===n.status?o.createElement("a",{className:"button is-ghost is-medium is-size-5 is-vertical",onClick:()=>n.reset()},o.createElement("span",null,"Disconnect"),o.createElement("span",{className:"is-size-6"},P(n.account))):o.createElement("a",{className:"button is-ghost is-medium is-size-5",onClick:()=>t("is-active")},"Connect"),o.createElement("div",{className:`modal ${e}`},o.createElement("div",{className:"modal-background",onClick:()=>t("")}),o.createElement("div",{className:"modal-content has-background-white"},o.createElement("div",{className:"box"},o.createElement("section",{className:"section"},o.createElement("a",{className:"button is-ghost has-text-black",onClick:()=>{n.connect("injected"),t("")}},o.createElement("img",{src:"/assets/metamask-fox.b8558514.svg",alt:"Metamask",width:"80px"}),o.createElement("h2",{className:"subtitle pl-5"},"Metamask"))))),o.createElement("button",{className:"modal-close is-large",onClick:()=>t("")})))},te=()=>o.createElement("nav",{className:"level mt-5 mb-0 mr-5 ml-5"},o.createElement("div",{className:"level-left"},o.createElement("div",{className:"level-item"},o.createElement(v,{to:"/"},o.createElement("div",{className:"block has-text-centered mb-0"},o.createElement("h2",{className:"subtitle has-text-white"},"The Grand Adventure:")),o.createElement("div",{className:"block has-text-centered"},o.createElement("h1",{className:"title"},"Avenluutn"))))),o.createElement("div",{className:"level-right"},o.createElement("div",{className:"level-item"},o.createElement(ee,null)))),ne=()=>o.createElement("nav",{className:"level m-5 is-size-5"},o.createElement("div",{className:"level-item has-text-centered"},o.createElement(v,{to:"/about"},o.createElement("span",{className:"has-text-white has-hover-underline"},"About"))),o.createElement("div",{className:"level-item has-text-centered"},o.createElement("a",{className:"has-text-white has-hover-underline",target:"_blank",href:"https://github.com/EmblemStudio/Aavenluutn"},"Github")),o.createElement("div",{className:"level-item has-text-centered"},o.createElement("a",{className:"has-text-white has-hover-underline",target:"_blank",href:D},"Etherscan")),o.createElement("div",{className:"level-item has-text-centered"},o.createElement("a",{className:"has-text-white has-hover-underline",target:"_blank",href:"https://discord.gg/VfvtD6NDuM"},"Discord"))),ae=()=>s.exports.useContext(I),ie=({text:e,color:t,close:n})=>o.createElement("div",{className:`notification is-fixed has-text-${t}`},o.createElement("nav",{className:"level"},o.createElement("div",{className:"level-left"},o.createElement("div",{className:"level-item"},e)),o.createElement("div",{className:"level-right"},o.createElement("div",{className:"level-item"},o.createElement("a",{className:"close has-text-black",onClick:n},"X"))))),re=()=>{const{notifications:e,removeNotification:t}=ae(),n=b();function a(e,n){return()=>{t(e,n)}}return s.exports.useEffect((()=>{G(n)||t("warnings",S.no_connection),U(n,A.network)||t("warnings",S.wrong_network)}),[n]),o.createElement("div",{className:"container is-fluid pl-4 pb-3"},e.errors.map(((e,t)=>o.createElement(ie,{key:t,text:"Error: "+e,color:"red",close:a("errors",e)}))),e.warnings.map(((e,t)=>o.createElement(ie,{key:t,text:"Warning: "+e,color:"orange",close:a("warnings",e)}))),e.status.map(((e,t)=>o.createElement(ie,{key:t,text:"Status: "+e,color:"green",close:a("status",e)}))))},le=({children:e})=>o.createElement(o.Fragment,null,o.createElement("div",{id:"top"},o.createElement(te,null),o.createElement("section",{className:"section pt-5 is-ibm is-size-6"},o.createElement(re,null),e)),o.createElement(ne,null)),se=e=>{const t=L(e.id);return o.createElement("div",{key:e.id,className:"level-item m-3"},o.createElement(v,{to:`/${e.id}/lobby`},o.createElement("div",{className:`guild-button outer-border has-border-${t}`},o.createElement("div",{className:`container has-text-centered inner-border has-border-${t} has-text-${t} pt-3 pb-3`},o.createElement("div",{className:"block"},e.name)))))},oe=({guilds:e})=>{var t;return o.createElement("div",{className:"level does-wrap"},null!=(t=null==e?void 0:e.map((e=>se(e))))?t:"Guilds are shrouded beyond time.")},ce=()=>s.exports.useContext(H),ue=()=>{var e,t;const{narrator:n,updateNarrator:a}=ce();return o.createElement(o.Fragment,null,o.createElement("div",{className:"block"},"You have entered Avenluutn, on the edge of nowhere."),o.createElement("div",{className:"block"},"The humble road into town smells of grass and earth. Sweet wind rustles the treetops. You feel hopeful."),n.collections.length>0?o.createElement(o.Fragment,null,o.createElement("div",{className:"block"},"A sign in the road directs you. Choose a guild:"),o.createElement(oe,{guilds:null!=(t=null==(e=n.collections[n.collections.length-1])?void 0:e.scriptResult.nextState.guilds)?t:null})):o.createElement("div",{className:"block"},". . ."))};function me(e,t,n){return e===t?j(n):" has-text-white"}var de=({guild:e,selected:t})=>{if(!e)return o.createElement("nav",{className:"level"},o.createElement("div",{className:"level-item"},". . ."));const n=L(e.id);return o.createElement("nav",{className:"level"},o.createElement("div",{className:"level-left"},se(e),o.createElement("div",{className:"level-item pl-3 pr-3"},o.createElement(v,{to:`/${e.id}/lobby`},o.createElement("div",{className:"is-underlined"+me(t,"lobby",n)},"Lobby"))),o.createElement("div",{className:"level-item pl-3 pr-3"},o.createElement(v,{to:`/${e.id}/auctions`},o.createElement("div",{className:"is-underlined"+me(t,"auctions",n)},"Auctions"))),o.createElement("div",{className:"level-item pl-3 pr-3"},o.createElement(v,{to:`/${e.id}/logbook`},o.createElement("div",{className:"is-underlined"+me(t,"logbook",n)},"Logbook"))),o.createElement("div",{className:"level-item pl-3 pr-3"},o.createElement(v,{to:"/"},o.createElement("div",{className:"is-underlined has-text-white"},"Back")))))},pe=({to:e})=>{const[t,n]=s.exports.useState(z(e));return s.exports.useEffect((()=>{const t=setInterval((()=>{n(z(e))}),1e3);return console.log("set interval",t),()=>{console.log("clearing interval",t),clearInterval(t)}}),[]),o.createElement("span",{className:"has-text-grey"},function(e){let t=Math.floor(e/60);const n=Math.floor(t/60);if(e-=60*t,t-=60*n,e>59)throw new Error("Seconds > 59");if(t>59)throw new Error("Minutes > 59");let a,i,r;return a=e<10?`0${e}`:e.toString(),i=t<10?`0${t}`:t.toString(),r=n<10?`0${n}`:n.toString(),`${r}:${i}:${a}`}(t))};function ye(e,t){return o.createElement("span",{key:t,className:e.label},e.string)}var be=({story:e})=>o.createElement("section",{className:"section pt-2 pb-5"},o.createElement("div",{className:"container outer-border"},o.createElement("div",{className:"container inner-border"},o.createElement("section",{className:"section pt-5 pb-5"},o.createElement("div",{className:"block beginning"},e.text.richText.beginning.map(ye)),o.createElement("div",{className:"block middle"},e.text.richText.middle.obstacleText.map(((t,n)=>{var a,i,r;return o.createElement("div",{className:"block middle obstacle",key:n},o.createElement("div",{className:"block outcome main"},o.createElement("div",null,t.map(ye)),o.createElement("div",null,null==(a=e.text.richText.middle.outcomeText[n])?void 0:a.main.map(ye))),o.createElement("div",{className:"block outcome results"},null==(i=e.text.richText.middle.outcomeText[n])?void 0:i.resultTexts.map(((e,t)=>o.createElement("div",{key:t},e.map(ye))))),o.createElement("div",{className:"block outcome triggers"},null==(r=e.text.richText.middle.outcomeText[n])?void 0:r.triggerTexts.map(((e,t)=>o.createElement("div",{key:t},e.map(ye))))))}))),o.createElement("div",{className:"block"},e.text.richText.ending.map(ye)),z(Number(e.endTime))>0&&o.createElement("div",{className:"has-text-centered"},o.createElement("div",{className:"block"},". . ."),o.createElement("div",{className:"block"},o.createElement(pe,{to:Number(e.endTime)})))))),o.createElement("div",{className:"container has-text-right is-garamond is-italic is-size-5 pr-1"},`NFT ${R(e)}`)),ve=({story:e})=>o.createElement("div",{className:"block has-text-grey"},"\"They'll be leaving in ",o.createElement(pe,{to:Number(e.startTime)}),'"'),fe=e=>{var t;const{guildId:n}=f();let a=null,i=null;if(n){const r=parseInt(n);if(a=L(r),e.collections.length>0){const n=e.collections[e.collections.length-1];if(void 0===n)return{guild:null,collor:null};i=null!=(t=n.scriptResult.nextState.guilds[r])?t:null}}return{guild:i,color:a}},ge=()=>{var e,t,n,a;const{narrator:i}=ce(),{guild:r,color:l}=fe(i);return console.log("GuildLobby, narrator",i),o.createElement(o.Fragment,null,o.createElement(de,{guild:r,selected:"lobby"}),o.createElement("div",{className:"block p-4"},r&&o.createElement(o.Fragment,null,o.createElement("div",{className:"block"},"You enter ",r.name," in ",r.location,"."),o.createElement("div",{className:"block"},"A plaque over the door reads ",o.createElement("span",{className:j(null!=l?l:null)},'"',r.motto,'"'),"."),(null==(e=i.stories[r.id])?void 0:e.inProgress[0])&&o.createElement("div",{className:"block mb-4"},o.createElement("div",{className:"block"},"Adventurers from ",r.name," have set forth. The bard tells their tales:"),null==(t=i.stories[r.id])?void 0:t.inProgress.map((e=>o.createElement(be,{key:e.collectionIndex,story:e})))),(null==(n=i.stories[r.id])?void 0:n.upcoming[0])&&o.createElement("div",{className:"block"},o.createElement("div",{className:"block"},"The bard indicates a shadowed crew in the corner:"),o.createElement(ve,{story:null==(a=i.stories[r.id])?void 0:a.upcoming[0]})))))},Ee=({story:e,publisher:t,addNotification:n,removeNotification:a})=>{const i=q(e.endTime.add(e.auction.duration)),[r,l]=s.exports.useState(g("0"));return o.createElement("div",{className:"container"},o.createElement("nav",{className:"level mb-0 mt-5"},o.createElement("div",{className:"level-item"},o.createElement("span",{className:"pr-1"},"Time left: "),o.createElement(pe,{to:Number(e.endTime.add(e.auction.duration))})),o.createElement("div",{className:"level-item is-vertical"},o.createElement("div",{className:"container"},"Last bid: ",o.createElement("span",{className:"has-text-grey"},E(e.auction.amount)," ETH")),e.auction.bidder!==y&&o.createElement("div",{className:"container is-size-7 has-text-grey"},"by ",P(e.auction.bidder))),o.createElement("div",{className:"level-item"},i?e.minted?o.createElement("span",{className:"is-italic"},"Claimed"):e.auction.bidder===y?o.createElement("a",{className:"button is-ghost is-underlined",onClick:()=>{"string"==typeof t?n("warnings",t):t.signer.getAddress().then((i=>{t.mint(e.narratorIndex,e.collectionIndex,e.storyIndex,i).then((e=>{n("status",C.tx_submitted),e.wait().then((e=>{n("status",C.tx_confirmed),a("status",C.tx_submitted)}))}))}))}},"Claim"):o.createElement("a",{className:"button is-ghost is-underlined",onClick:()=>{"string"==typeof t?n("warnings",t):t.mint(e.narratorIndex,e.collectionIndex,e.storyIndex,e.auction.bidder).then((e=>{n("status",C.tx_submitted),e.wait().then((e=>{n("status",C.tx_confirmed),a("status",C.tx_submitted)}))}))}},"Claim for Winner"):o.createElement("div",{className:"container has-text-centered is-flex-row"},o.createElement("div",{className:"outer-border mr-1"},o.createElement("input",{className:"input has-text-black is-ibm is-size-6",type:"text",placeholder:"0",onChange:e=>{let t=e.target.value;null!==t&&(""===t&&(t="0"),l(g(t)))}})),o.createElement("span",{className:"has-text-grey mr-1"},"ETH"),o.createElement("a",{className:"button is-ghost is-underlined",onClick:()=>{"string"==typeof t?n("warnings",t):t.signer.getAddress().then((i=>{t.bid(e.narratorIndex,e.collectionIndex,e.storyIndex,i,{value:r}).then((e=>{n("status",C.tx_submitted),e.wait().then((e=>{n("status",C.tx_confirmed),a("status",C.tx_submitted)}))}))}))}},"Bid")))),o.createElement(be,{story:e}))},he=(e,t,n)=>{const a=b();if(G(a))return S.no_connection;if(U(a,n))return S.wrong_network;return function(e,t,n){const a=new m(n).getSigner();return new u(e,t,a)}(e,t,a.ethereum)},xe=e=>{const t=F[e.network];if(void 0===t)throw new Error(`Missing required address for ${e.network}`);return he(t,B,e.network)},Te=()=>{var e;const{narrator:t}=ce(),n=xe(A),{guild:a,color:i}=fe(t),{addNotification:r,removeNotification:l}=ae();return o.createElement(o.Fragment,null,o.createElement(de,{guild:a,selected:"auctions"}),o.createElement("div",{className:"block p-4"},a&&o.createElement(o.Fragment,null,o.createElement("div",{className:"block"},"New pages for the guild logbook are being auctioned. Will you sponsor these quests?"),o.createElement("div",{className:"block"},null==(e=t.stories[a.id])?void 0:e.onAuction.map((e=>o.createElement(Ee,{key:e.collectionIndex,publisher:n,story:e,addNotification:r,removeNotification:l})))))))},Ne=({children:e,index:t,name:n,claimable:a,expanders:i,setExpanders:r})=>{let l=i[t];function s(){const e={};e[t]=!l,r(Object.assign({},i,e)),l=i[t]}return o.createElement("div",null,l?o.createElement(o.Fragment,null,o.createElement("a",{className:"has-text-white is-size-4",onClick:s},"V ",o.createElement("span",{className:"is-garamond is-italic"},n),a&&o.createElement("span",null," ✨ ")),e):o.createElement(o.Fragment,null,o.createElement("a",{className:"has-text-white is-size-4",onClick:s},"> ",o.createElement("span",{className:"is-garamond is-italic"},n),a&&o.createElement("span",null," ✨ "))))},we=()=>{const{narrator:e}=ce(),t=xe(A),n=b(),{guild:a,color:i}=fe(e),[r,l]=s.exports.useState({}),{addNotification:c,removeNotification:u}=ae();function m(e){if(!e.minted){if(e.auction.bidder===y)return!0;if("string"==typeof t)return!1;if(n.account===e.auction.bidder)return!0}return!1}return o.createElement(o.Fragment,null,o.createElement(de,{guild:a,selected:"logbook"}),o.createElement("div",{className:"block p-4"},a&&o.createElement(o.Fragment,null,o.createElement("div",{className:"block"},"The logbook is engraved with the guild motto: ",o.createElement("span",{className:j(null!=i?i:null)},"“",a.motto,"”"),". It records deeds past:"),0===e.stories[a.id].completed.length?o.createElement("div",{className:"block"},'"The pages are blank."'):o.createElement("div",{className:"block"},e.stories[a.id].completed.map((e=>o.createElement(Ne,{key:e.collectionIndex,index:e.collectionIndex,name:R(e),claimable:m(e),expanders:r,setExpanders:l},o.createElement(Ee,{story:e,publisher:t,addNotification:c,removeNotification:u}))))))))},ke=()=>o.createElement(o.Fragment,null,o.createElement("div",{className:"block"},"About page"),o.createElement(v,{to:"/"},o.createElement("div",{className:"is-underlined has-text-white"},"Back"))),Ie=()=>o.createElement("div",{className:"App"},o.createElement(h,null,o.createElement(M,null,o.createElement(J,{params:A},o.createElement(x,null,o.createElement(le,null,o.createElement(T,null,o.createElement(N,{path:"/",element:o.createElement(ue,null)}),o.createElement(N,{path:"/:guildId/lobby",element:o.createElement(ge,null)}),o.createElement(N,{path:"/:guildId/auctions",element:o.createElement(Te,null)}),o.createElement(N,{path:"/:guildId/logbook",element:o.createElement(we,null)}),o.createElement(N,{path:"/about",element:o.createElement(ke,null)}))))))));w.render(o.createElement(o.StrictMode,null,o.createElement(Ie,null)),document.getElementById("root"));
