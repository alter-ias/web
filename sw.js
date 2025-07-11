// Service Worker Básico
const CACHE_NAME = 'kaylum-cache-v1';
const urlsToCache = [
  '/',
  '/index.html'
  // Puedes agregar aquí otros archivos importantes si quieres que se guarden en caché
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Cache abierto');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Si la respuesta está en la caché, la retornamos. Si no, hacemos la petición a la red.
        return response || fetch(event.request);
      })
  );
});
