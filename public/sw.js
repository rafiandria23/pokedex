if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return r[e]||(s=new Promise((async s=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},s=(s,r)=>{Promise.all(s.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(s)};self.define=(s,c,a)=>{r[s]||(r[s]=Promise.resolve().then((()=>{let r={};const n={uri:location.origin+s.slice(1)};return Promise.all(c.map((s=>{switch(s){case"exports":return r;case"module":return n;default:return e(s)}}))).then((e=>{const s=a(...e);return r.default||(r.default=s),r}))})))}}define("./sw.js",["./workbox-030153e1"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/GENUINE.ttf",revision:"7e1ad9a1d3fa64ac44961cf59546b0b7"},{url:"/_error",revision:"sKSdwjbrkGYo5y_lcOAOQ"},{url:"/_next/static/chunks/74ea1733397e8bad850509e751ce6f17c7c05b6f.bc17eeddf9c27f60a9c0.js",revision:"sKSdwjbrkGYo5y_lcOAOQ"},{url:"/_next/static/chunks/91029058df214e67886a30ba08ac755950d325f7.f14bc636765099c9af3a.js",revision:"sKSdwjbrkGYo5y_lcOAOQ"},{url:"/_next/static/chunks/ae04177590cf951bb643574f82faab6a2ea3ca2d.c75ad4f623987c86a69c.js",revision:"sKSdwjbrkGYo5y_lcOAOQ"},{url:"/_next/static/chunks/bdc7fbc0ccc584b0eea5a69af64d9ad5cdf20396.9194bb8d272936e642dc.js",revision:"sKSdwjbrkGYo5y_lcOAOQ"},{url:"/_next/static/chunks/c6c5a8b1cf4ae0c72701c6c16360352663dec43a.62fbe0a9456dde0e5cc1.js",revision:"sKSdwjbrkGYo5y_lcOAOQ"},{url:"/_next/static/chunks/commons.b042f75688f9e6ff3d69.js",revision:"sKSdwjbrkGYo5y_lcOAOQ"},{url:"/_next/static/chunks/framework.6fff953eb0f638171baa.js",revision:"sKSdwjbrkGYo5y_lcOAOQ"},{url:"/_next/static/chunks/main-237a0bf8bd590b3f3d1d.js",revision:"sKSdwjbrkGYo5y_lcOAOQ"},{url:"/_next/static/chunks/pages/_app-8a2908a79fd2be3d62c9.js",revision:"sKSdwjbrkGYo5y_lcOAOQ"},{url:"/_next/static/chunks/pages/_error-623524b52b59b51e6aaa.js",revision:"sKSdwjbrkGYo5y_lcOAOQ"},{url:"/_next/static/chunks/pages/index-69f3f052867447d2096f.js",revision:"sKSdwjbrkGYo5y_lcOAOQ"},{url:"/_next/static/chunks/pages/mypokemon-cadb22819eb92d3cd087.js",revision:"sKSdwjbrkGYo5y_lcOAOQ"},{url:"/_next/static/chunks/pages/pokemon-details/%5Bname%5D-b4e7c902517ac6045982.js",revision:"sKSdwjbrkGYo5y_lcOAOQ"},{url:"/_next/static/chunks/polyfills-4f4acd756cef4fe6da1b.js",revision:"sKSdwjbrkGYo5y_lcOAOQ"},{url:"/_next/static/chunks/webpack-50bee04d1dc61f8adf5b.js",revision:"sKSdwjbrkGYo5y_lcOAOQ"},{url:"/_next/static/css/447ad7adac172a9f5de9.css",revision:"sKSdwjbrkGYo5y_lcOAOQ"},{url:"/_next/static/css/528b7d391c59a980e587.css",revision:"sKSdwjbrkGYo5y_lcOAOQ"},{url:"/_next/static/sKSdwjbrkGYo5y_lcOAOQ/_buildManifest.js",revision:"sKSdwjbrkGYo5y_lcOAOQ"},{url:"/_next/static/sKSdwjbrkGYo5y_lcOAOQ/_ssgManifest.js",revision:"sKSdwjbrkGYo5y_lcOAOQ"},{url:"/arrow-left-solid.svg",revision:"713fe29d10415a51910d79f66c21d161"},{url:"/e9ae0a8505194c8e-.gif",revision:"745fb2c1fe17f679beeb5097de215db9"},{url:"/favicon.ico",revision:"21b739d43fcb9bbb83d8541fe4fe88fa"},{url:"/manifest.json",revision:"e7e1d69e3c5bb21d3565d499d8a4e89e"},{url:"/pikachu.svg",revision:"a7662a6306d4ecb1bfb5496e4cce0f85"},{url:"/pokeball.png",revision:"d0be19612edf7215225a435a18ee3d9c"},{url:"/pokeball.svg",revision:"2b4798f5c303bb0d9001413af970a22b"},{url:"/pokeballs.svg",revision:"6b4ffa55fdd7e087c6990685887572b4"},{url:"/pokedex-logo.png",revision:"f12990d1a7cbac448911ed4a4227ff6e"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",networkTimeoutSeconds:10,plugins:[{requestWillFetch:async({request:e})=>(Request(),e)},new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[{handlerDidError:async({request:e,event:s,error:r,state:c})=>caches.match("/offline.jpg",{ignoreSearch:!0})},new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:mp3|mp4)$/i,new e.StaleWhileRevalidate({cacheName:"static-media-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[{handlerDidError:async({request:e,event:s,error:r,state:c})=>caches.match("/_error",{ignoreSearch:!0})},new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
