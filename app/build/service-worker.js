// authored by Maye Edwin : https://twitter.com/MayeEdwin1
// Add offline properties, push notification, web share, web payments, etc
// pwafire 4.0.0
importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js')
  
if (workbox) {
    console.log(`Yay! Workbox is loaded ! Cheers to PWA Fire 🎉`);
    workbox.precaching.precacheAndRoute([
  {
    "url": "index.html",
    "revision": "8c88d9165f51271eaa879dc65a69d857"
  },
  {
    "url": "manifest.json",
    "revision": "091a3c637be5dbae4aaeaf6e4d108243"
  },
  {
    "url": "images/sample.png",
    "revision": "072517e17445cc907c5e33fed5bc37bd"
  },
  {
    "url": "images/sample.svg",
    "revision": "52ec66cadebd140286fb6eaf764bfe33"
  },
  {
    "url": "images/sample.jpg",
    "revision": "6d9bab13381d02d7519e759bd3a04377"
  },
  {
    "url": "images/sample.gif",
    "revision": "af1c75fca697e689f560f79a432828ea"
  },
  {
    "url": "images/icons/icon-128x128.png",
    "revision": "77489d93c3c696ef273012eb8dc4974f"
  },
  {
    "url": "images/icons/icon-144x144.png",
    "revision": "dfe18e48039cab4922007fd074af0513"
  },
  {
    "url": "images/icons/icon-152x152.png",
    "revision": "33ce3d7a6d3d589db4343e8d2e1acbd6"
  },
  {
    "url": "images/icons/icon-192x192.png",
    "revision": "62a10e0d2392e9012d9a5d33735e9498"
  },
  {
    "url": "images/icons/icon-384x384.png",
    "revision": "feedd855dd402ba655aba5b7ca305ea1"
  },
  {
    "url": "images/icons/icon-48x48.png",
    "revision": "072517e17445cc907c5e33fed5bc37bd"
  },
  {
    "url": "images/icons/icon-512x512.png",
    "revision": "1bda3235e63ef336b99b9e036ca8b143"
  },
  {
    "url": "images/icons/icon-72x72.png",
    "revision": "e31638a951e41f2659e2a458e17f640b"
  },
  {
    "url": "images/icons/icon-96x96.png",
    "revision": "1569b9a007badec275f5e03fcabbda05"
  },
  {
    "url": "images/icons/icon48.png",
    "revision": "072517e17445cc907c5e33fed5bc37bd"
  },
  {
    "url": "images/icons/sample48.png",
    "revision": "072517e17445cc907c5e33fed5bc37bd"
  },
  {
    "url": "js/app.js",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "css/main.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "scss/app.scss",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  }
]);
} else {
    console.log(`Oops! Workbox didn't load 😬`);
}
