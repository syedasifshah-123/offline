// service-worker.js

const cacheName = 'v1';
const cacheAssets = [
  'index.html',
  'style.css',
  'script.js',
  // Aap aur files bhi add kar sakte hain jo aap offline use karna chahte hain
];

// Install Event
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName)
      .then(cache => {
        console.log('Service Worker: Files Cache ho gayi hain');
        return cache.addAll(cacheAssets);
      })
      .then(() => self.skipWaiting())
  );
});

// Activate Event
self.addEventListener('activate', event => {
  console.log('Service Worker: Activate ho gaya');
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== cacheName) {
            console.log('Service Worker: Purani Cache Delete ho rahi hai');
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

// Fetch Event
self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
