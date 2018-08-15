// authored by Maye Edwin : https://twitter.com/MayeEdwin1
// Add offline properties, push notification, web share, web payments, etc
// pwafire 4.0.0

importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js')
  
if (workbox) {
    console.log(`Yay! Workbox is loaded ! Cheers to PWA Fire 🎉`);
    workbox.precaching.precacheAndRoute([
  {
    "url": "index.html",
    "revision": "41d197014bb235f0ac27bb7559c73982"
  },
  {
    "url": "manifest.json",
    "revision": "8a3d5b14a98c42feb6b5beff8707f88f"
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
    "url": "images/pwafireapp.gif",
    "revision": "719418b077a83f2af47f2a07b1ac28d1"
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
    "url": "pages/index.html",
    "revision": "f2e9dd28b2101850b743cca5373407ca"
  },
  {
    "url": "assets/js/app.js",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "assets/css/main.css",
    "revision": "2b06d114a639e7cc96bb6d12e3d4a1b5"
  },
  {
    "url": "assets/scss/app.scss",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  }
]);
    
   /*  cache images in the e.g others folder; edit to other folders you got 
   and config in the sw-config.js file
    */
   workbox.routing.registerRoute(
    /(.*)others(.*)\.(?:png|gif|jpg)/,
    workbox.strategies.cacheFirst({
      cacheName: 'images',
      plugins: [
        new workbox.expiration.Plugin({
          maxEntries: 50,
          maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
        })
      ]
    })
  );
    /* Make your JS and CSS ⚡ fast by returning the assets from the cache, 
  while making sure they are updated in the background for the next use.
  */
  workbox.routing.registerRoute(
    // cache js, css, scc files 
    /.*\.(?:css|js|scss|)/,
    // use cache but update in the background ASAP
    workbox.strategies.staleWhileRevalidate({
      // use a custom cache name
      cacheName: 'assets',
    })
  );

   // cache google fonts
  workbox.routing.registerRoute(
    new RegExp('https://fonts.(?:googleapis|gstatic).com/(.*)'),
    workbox.strategies.cacheFirst({
      cacheName: 'google-fonts',
      plugins: [
        new workbox.cacheableResponse.Plugin({
          statuses: [0, 200],
        }),
      ],
    }),
  ); 

  // add offline analytics 
  workbox.googleAnalytics.initialize(); 

workbox.skipWaiting();
workbox.clientsClaim();
    
} else {
    console.log(`Oops! Workbox didn't load `);
}

  