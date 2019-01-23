importScripts("precache-manifest.38a1078711e6d670232a037b93f38af9.js", "https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

workbox.core.setCacheNameDetails({
  prefix: 'next-ss',
})

workbox.skipWaiting()
workbox.clientsClaim()

workbox.precaching.suppressWarnings()
/**
 * Ignore the non-important files added as a result of
 * webpack's publicPath thingy, for now...
 */
// workbox.precaching.precacheAndRoute(self.__precacheManifest, {})

/**
 * You can read about Cache Strategies here
 * (https://developers.google.com/web/tools/workbox/modules/workbox-strategies)
 */

workbox.precaching.precacheAndRoute(
  self.__precacheManifest.filter(
    m => !m.url.startsWith('bundles/')
      && !m.url.startsWith('static/commons')
      && m.url !== 'build-manifest.json',
  ),
  {
  },
)

workbox.routing.registerRoute(
  /[.](css)/,
  workbox.strategies.cacheFirst({
    cacheName: 'assets-cache',
    cacheableResponse: {
      statuses: [0, 200],
    },
  }),
  'GET',
)
workbox.routing.registerRoute(
  /\.(?:png|gif|jpg|jpeg|svg)$/,
  workbox.strategies.cacheFirst({
    cacheName: 'images',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 60,
        maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
      }),
    ],
  }),
);
workbox.routing.registerRoute(
  /^https:\/\/fonts\.googleapis\.com/,
  workbox.strategies.staleWhileRevalidate({
    cacheName: 'google-fonts-stylesheets',
  }),
);

// Fetch the root route as fast as possible
workbox.routing.registerRoute(
  '/',
  workbox.strategies.staleWhileRevalidate({
    cacheName: 'root',
  }),
  'GET',
)

workbox.routing.registerRoute(
  /^http.*/,
  workbox.strategies.networkFirst({
    cacheName: 'http-cache',
  }),
  'GET',
)

