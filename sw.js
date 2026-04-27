const CACHE_NAME = 'baca-arka-v2';

// Install Service Worker
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

// Aktifkan Service Worker
self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});

// Bypass fetch (agar tidak bentrok dengan Speech API)
self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
