const CACHE_NAME='mkduo-v1';
const CORE_ASSETS=[
  './manifest.webmanifest',
  './icon-192.png',
  './icon-512.png',
  './apple-touch-icon.png',
  './favicon-32.png',
  './favicon-16.png',
  './favicon.ico',
  './logo.png'
];

self.addEventListener('install',e=>{
  e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(CORE_ASSETS)).then(()=>self.skipWaiting()));
});

self.addEventListener('activate',e=>{
  e.waitUntil(
    caches.keys()
      .then(keys=>Promise.all(keys.filter(k=>k!==CACHE_NAME).map(k=>caches.delete(k))))
      .then(()=>self.clients.claim())
  );
});

/* Navegação/HTML sempre busca a versão mais nova primeiro (o app muda com
   frequência) e só cai pro cache se estiver offline. Os demais assets do
   mesmo domínio usam cache-first, populando o cache no primeiro acesso. */
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET')return;
  const isNav=e.request.mode==='navigate'||e.request.url.endsWith('/index.html');
  if(isNav){
    e.respondWith(
      fetch(e.request)
        .then(res=>{
          caches.open(CACHE_NAME).then(c=>c.put(e.request,res.clone()));
          return res;
        })
        .catch(()=>caches.match(e.request).then(r=>r||caches.match('./index.html')))
    );
    return;
  }
  if(!e.request.url.startsWith(self.location.origin))return;
  e.respondWith(
    caches.match(e.request).then(cached=>cached||fetch(e.request).then(res=>{
      if(res.ok)caches.open(CACHE_NAME).then(c=>c.put(e.request,res.clone()));
      return res;
    }))
  );
});
