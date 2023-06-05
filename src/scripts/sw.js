self.addEventListener('install', function () {
    console.log('Installing Service Worker ...');
});

self.addEventListener('activate', function () {
    console.log('Activating Service Worker ...');
});

self.addEventListener('fetch', function (event) {
    console.log('Fetching Service Worker ...');
    event.respondWith(fetch(event.request));
});

