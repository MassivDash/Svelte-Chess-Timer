if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return r[e]||(s=new Promise((async s=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},s=(s,r)=>{Promise.all(s.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(s)};self.define=(s,i,d)=>{r[s]||(r[s]=Promise.resolve().then((()=>{let r={};const n={uri:location.origin+s.slice(1)};return Promise.all(i.map((s=>{switch(s){case"exports":return r;case"module":return n;default:return e(s)}}))).then((e=>{const s=d(...e);return r.default||(r.default=s),r}))})))}}define("./sw.js",["./workbox-f7715658"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/android-chrome-192x192.png",revision:"5e3fb686001cbfd9d3bf8ddc7e1dbab2"},{url:"assets/android-chrome-256x256.png",revision:"e513871cb5475dfe2be0dd330f6ced54"},{url:"assets/apple-touch-icon.png",revision:"b5a5daefe4be313a2e155987f2d5e8c0"},{url:"assets/favicon-16x16.png",revision:"902ac62119c39d46130e6904bc4359c9"},{url:"assets/favicon-32x32.png",revision:"8b1a81ea056114b3112e537d4a59abfb"},{url:"assets/greyzz.png",revision:"1b9e2d195f0f2f88fcb0a83315ce7a1f"},{url:"assets/icon-384.png",revision:"ddf3a646bc12e5f7d771b4d793f8af0d"},{url:"assets/icon-512x512.png",revision:"3697d651c12196e9beece6449d98dd8c"},{url:"assets/logo.png",revision:"5fde860979570105d6c30b1e3aa42d30"},{url:"assets/logo2.png",revision:"b9ff8236ddc5ea593ffb6dae811c68e1"},{url:"assets/mstile-150x150.png",revision:"3891a7d3207d9c316bae26ba5125342b"},{url:"assets/Screenshot.png",revision:"f14316afba36e3e3a0df7dbf724bb4f0"},{url:"assets/ScreenshotMobile.png",revision:"520a7f1d72f328f6cb11a1649c6304e5"},{url:"assets/svleteChessTimer.png",revision:"37dcd8ad5526701e911a711cf02bc3d6"},{url:"build/bundle.css",revision:"4e7d06e25d543a101930507e5b3f62af"},{url:"build/bundle.js",revision:"aaa1a1ecc9abdcb669ebeb8bf3390cde"},{url:"global.css",revision:"d934d4ed6b448b975676d95eb0b23918"},{url:"index.html",revision:"fc83d24bf4361d4660835012c1541b49"}],{})}));
//# sourceMappingURL=sw.js.map
