!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=n.parcelRequire95a2;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){o[e]=n},n.parcelRequire95a2=r);var i=r("6JpON");function u(e,n){return new Promise((function(t,o){Math.random()>.3?setTimeout((function(){return t({position:e,delay:n})}),n):setTimeout((function(){return o({position:e,delay:n})}),n)}))}document.querySelector(".form").addEventListener("submit",(function(n){n.preventDefault();for(var t=Number(n.currentTarget[0].value),o=Number(n.currentTarget[1].value),r=Number(n.currentTarget[2].value),a=0;a<r;a++)position=a+1,delay=t+o*a,u(position,delay).then((function(n){var t=n.position,o=n.delay;e(i).Notify.success("✅ Fulfilled promise ".concat(t," in ").concat(o,"ms"))})).catch((function(n){var t=n.position,o=n.delay;e(i).Notify.failure("❌ Rejected promise ".concat(t," in ").concat(o,"ms"))}))}))}();
//# sourceMappingURL=03-promises.e8d47315.js.map