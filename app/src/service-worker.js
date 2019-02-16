
// Authored by Maye Edwin : https://twitter.com/MayeEdwin1
// Add custom cache strategies and routing methods
// pwafire v4.0.1

importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.2/workbox-sw.js');

if (workbox) {
  console.log(`Yay! Workbox is loaded ! Cheers to PWA Fire 🐹`);
  workbox.precaching.precacheAndRoute([]);

  /* cache images in the e.g others folder; edit to other folders you got 
   and config in the sw-config.js file

   -- notes --
   if you are using *networkFirst* cache strategies, 
   they should come first as in this app
    */
  workbox.routing.registerRoute(
    /(.*)others(.*)\.(?:|svg|png|gif|jpg)/,
    workbox.strategies.networkFirst({
      cacheName: 'images-cache',
      plugins: [
        new workbox.expiration.Plugin({
          maxEntries: 50, // max number of images to cache
          maxAgeSeconds: 7 * 24 * 60 * 60, // 7 Days
        })
      ]
    })
  );

  // cache google fonts
    workbox.routing.registerRoute(
      new RegExp('https://fonts.(?:googleapis|gstatic).com/(.*)'),
      workbox.strategies.networkFirst({
        cacheName: 'google-fonts',
        plugins: [
          new workbox.cacheableResponse.Plugin({
            statuses: [0, 200],
          }),
        ],
      })
    );
  
  /* cache resources from a specific subdirectory
    -- notes --
    add url for other sub-directories that a user visits depending
    on his or her needs "/subdirectory/" as shown below ; *subdirectory*
    could be any name eg *latest* if a user shows interest in *latest* categ of a news app;
    this means all .html articles in the *latest* route that the user reads, get cached 
   */
  workbox.routing.registerRoute(
    new RegExp('/latest/'),
    workbox.strategies.staleWhileRevalidate({
      // use a custom cache name
      cacheName: 'latest-cache',
      plugins: [
        new workbox.expiration.Plugin({
          // max number of items to be cached
          maxEntries: 20,
          maxAgeSeconds: 7 * 24 * 60 * 60, // 7 Days
        }),
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
      cacheName: 'assets-cache',
      plugins: [
        new workbox.expiration.Plugin({
          // max number of items to be cached
          maxEntries: 20,
        }),
      ]
    })
  );

  // add offline analytics 
  workbox.googleAnalytics.initialize();

  /* Install a new service worker and have it update 
  and control a web page as soon as possible
  */

  workbox.skipWaiting();
  workbox.clientsClaim();

} else {
  console.log("Oops! Workbox didn't load 👺");
}
