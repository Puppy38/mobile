self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('game-cache').then((cache) => {
      return cache.addAll([
        'index.html',
        'icon.png',
        'iconolds.png',
        'DTMLogo.png',
        'weblogo.png',
        'manifest.json',
        'service-worker.js',

        'books/books.png',
        'books/DTMLogo.png',
        'books/index.html',
        'books/reader-gbook1.html',

        'djspace-music/weblogo.png',
        'djspace-music/DTMLogo.png',
        'djspace-music/index.html',

        'games/icwe.png',
        'games/DTMLogo.png',
        'games/index.html',
        'games/weblogo.png',

        'pictureblog/weblogo.png',
        'pictureblog/DTMLogo.png',
        'pictureblog/index.html',

        'software/weblogo.png',
        'software/DTMLogo.png',
        'software/index.html',

        'support/weblogo.png',
        'support/DTMLogo.png',
        'support/index.html',
        'support/script.js',
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
