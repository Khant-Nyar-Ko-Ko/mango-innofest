/* Offline saving for the booth.
   The first visit with internet saves every file below on the device. After that the
   pages open from the saved copy right away, even with no Wi-Fi, and a newer copy is
   fetched in the background whenever there is internet (it shows on the next visit).
   When you add a file the pages need, add it to FILES and change VERSION. */
const VERSION = 'mango-booth-v2';
const FILES = [
  './',
  'index.html',
  'learn.html',
  'mango.html',
  'site.webmanifest',
  'assets/icon.svg',
  'assets/favicon-32.png',
  'assets/apple-touch-icon.png',
  'assets/icon-192.png',
  'assets/icon-512.png',
  'assets/fonts/fonts.css',
  'assets/fonts/itim-400-latin-ext.woff2',
  'assets/fonts/itim-400-latin.woff2',
  'assets/fonts/itim-400-thai.woff2',
  'assets/fonts/mali-400-latin-ext.woff2',
  'assets/fonts/mali-400-latin.woff2',
  'assets/fonts/mali-400-thai.woff2',
  'assets/fonts/mali-600-latin-ext.woff2',
  'assets/fonts/mali-600-latin.woff2',
  'assets/fonts/mali-600-thai.woff2',
  'assets/fonts/mali-700-latin-ext.woff2',
  'assets/fonts/mali-700-latin.woff2',
  'assets/fonts/mali-700-thai.woff2'
];

self.addEventListener('install', function (e) {
  e.waitUntil(caches.open(VERSION).then(function (c) { return c.addAll(FILES); }).then(function () { return self.skipWaiting(); }));
});

self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (keys) {
    return Promise.all(keys.filter(function (k) { return k !== VERSION; }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});

self.addEventListener('fetch', function (e) {
  var req = e.request;
  if (req.method !== 'GET') return;
  var url = new URL(req.url);
  if (url.origin !== self.location.origin) return;
  var key = url.origin + url.pathname;            /* ignore ?query so one saved copy per file */
  e.respondWith(caches.open(VERSION).then(function (cache) {
    return cache.match(key).then(function (saved) {
      var fresh = fetch(req).then(function (res) {
        if (res && res.ok && res.type === 'basic') cache.put(key, res.clone());
        return res;
      }).catch(function () {
        return saved || (req.mode === 'navigate' ? cache.match(url.origin + '/') : undefined) || Response.error();
      });
      if (saved) { e.waitUntil(fresh.catch(function () {})); return saved; }
      return fresh;
    });
  }));
});
