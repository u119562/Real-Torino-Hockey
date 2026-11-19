const CACHE_NAME="real-torino-pwa-v1";
const SHELL=["./","./index.html","./manifest.webmanifest","./icons/icon-192.png","./icons/icon-512.png","./icons/icon-512-maskable.png","./icons/apple-touch-icon.png"];
self.addEventListener("install",e=>e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(SHELL)).then(()=>self.skipWaiting())));
self.addEventListener("activate",e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE_NAME).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener("fetch",e=>{
 if(e.request.method!=="GET")return; const u=new URL(e.request.url); if(u.origin!==self.location.origin)return;
 e.respondWith(caches.match(e.request).then(cached=>cached||fetch(e.request).then(r=>{if(r&&r.ok)caches.open(CACHE_NAME).then(c=>c.put(e.request,r.clone()));return r;}).catch(()=>e.request.mode==="navigate"?caches.match("./index.html"):Promise.reject(new Error("Offline")))));
});