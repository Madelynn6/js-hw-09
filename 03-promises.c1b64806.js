function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},r={},n=t.parcelRequire95a2;null==n&&((n=function(e){if(e in o)return o[e].exports;if(e in r){var t=r[e];delete r[e];var n={id:e,exports:{}};return o[e]=n,t.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},t.parcelRequire95a2=n);var i=n("7Y9D8");function u(e,t){return new Promise(((o,r)=>{Math.random()>.3?setTimeout((()=>o({position:e,delay:t})),t):setTimeout((()=>r({position:e,delay:t})),t)}))}document.querySelector(".form").addEventListener("submit",(function(t){t.preventDefault();const o=Number(t.currentTarget[0].value),r=Number(t.currentTarget[1].value),n=Number(t.currentTarget[2].value);for(let t=0;t<n;t++)position=t+1,delay=o+r*t,u(position,delay).then((({position:t,delay:o})=>{e(i).Notify.success(`✅ Fulfilled promise ${t} in ${o}ms`)})).catch((({position:t,delay:o})=>{e(i).Notify.failure(`❌ Rejected promise ${t} in ${o}ms`)}))}));
//# sourceMappingURL=03-promises.c1b64806.js.map
