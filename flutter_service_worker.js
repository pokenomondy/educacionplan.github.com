'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "65f3dae864feadf24aea043a5f92bc73",
"main.dart.js_24.part.js": "4f65b9144f078b6d6ab6716843dd97ed",
"main.dart.js_34.part.js": "abf427782c64991c2cd371e8544d6210",
"version.json": "056f384927d8e2d09d8231af787b20ad",
"main.dart.js_7.part.js": "04a4066e0b4070ba0e5a0ee56ef569ba",
"main.dart.js_12.part.js": "a60a743cc4fc0142765ff6a14df4898d",
"main.dart.js_6.part.js": "d62e9ed1eb57d8f513fde1223ef607b1",
"index.html": "ca6ceef6dbad1ce7f9c93e4bd6c573cc",
"/": "ca6ceef6dbad1ce7f9c93e4bd6c573cc",
"main.dart.js_13.part.js": "4c1f7a2ba34d1f072995a2221b138d4e",
"main.dart.js_35.part.js": "91bca103a8109e6fa2c675d4babe609a",
"main.dart.js_25.part.js": "911ad7eb32a0899403a5025c34555d19",
"firebase-messaging-sw.js": "befaa7495aaf51b92b2030f1ca9d3803",
"main.dart.js_4.part.js": "cd9f17af750a82095512032833d2720a",
"main.dart.js": "da7862e497f878509971b1cd970f4dd8",
"main.dart.js_18.part.js": "5c91652c4b4f99fe9846e7f0ddeff137",
"main.dart.js_27.part.js": "d3da92db5726ab997b6f09cf84c5a3ef",
"main.dart.js_37.part.js": "aa9af74a90649c6eabfc18f9291395f6",
"main.dart.js_19.part.js": "c6a015810e1d70dffb416d9fad2e8e1e",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"main.dart.js_36.part.js": "a5b7b3a14f1888907c9904b185350d6c",
"main.dart.js_26.part.js": "4ee534e8002051887717b77b6a3eab8c",
"main.dart.js_5.part.js": "8ad3f8dff42d4454bda4a99106d6f23e",
"main.dart.js_15.part.js": "750d5aab973b1f8edb36e3eb0d94628e",
"favicon.png": "1a35dc15b79da98394fea701ee0768c6",
"main.dart.js_23.part.js": "b2918c2e7fc5a7f2026baa199ebe08aa",
"main.dart.js_33.part.js": "16abe08f180d41d24c6fd755cc15c099",
"main.dart.js_32.part.js": "92c999c8b42c12a86036350b5a0a0ea6",
"main.dart.js_22.part.js": "a4d7bcebc22983c8e08826b6fb3d6c00",
"main.dart.js_8.part.js": "a99152aef4921dcb016648f6d40bea28",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "cb958d1d1c5997b266e86ed6222a11bc",
"main.dart.js_14.part.js": "d80b6094848b6cabb916b7ba26e47223",
"main.dart.js_1.part.js": "34efb8bc5acd0ccb0f6e9457d7f8e173",
"main.dart.js_20.part.js": "0d538e5464c87efc2728e82e3dd675df",
"main.dart.js_30.part.js": "06cdbc26d6ae5b6d73f63760275a6a94",
"main.dart.js_29.part.js": "66d16111959fdf2db33106422e8d1be9",
"main.dart.js_3.part.js": "84f5cac35dd23c6a83ccc99f1631eac5",
"main.dart.js_16.part.js": "81db7ac4b4f8c6756b7c1d86a3605d8a",
"assets/AssetManifest.json": "31b53ef508ab93b326d096147e84456e",
"assets/NOTICES": "b3c79a6fa682fb716bfab2042a8c7587",
"assets/FontManifest.json": "ce1d0ae664e14238869feff07c71ce21",
"assets/AssetManifest.bin.json": "f3058a9264b6515a518baa9d85492bef",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/timezone/data/latest_all.tzf": "a3a6cb5d912b5375926e5b027f91cb00",
"assets/packages/youtube_player_flutter/assets/speedometer.webp": "50448630e948b5b3998ae5a5d112622b",
"assets/packages/fluent_ui/fonts/FluentIcons.ttf": "f3c4f09a37ace3246250ff7142da5cdd",
"assets/packages/fluent_ui/assets/AcrylicNoise.png": "81f27726c45346351eca125bd062e9a7",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "ffd063c5ddbbe185f778e7e41fdceb31",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/syncfusion_flutter_datagrid/assets/font/FilterIcon.ttf": "b8e5e5bf2b490d3576a9562f24395532",
"assets/packages/syncfusion_flutter_datagrid/assets/font/UnsortIcon.ttf": "acdd567faa403388649e37ceb9adeb44",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "341d81e1216c6c080887eda48d7052cc",
"assets/fonts/MaterialIcons-Regular.otf": "c3bb7b94129cdc62e5f29b458e004361",
"main.dart.js_28.part.js": "6eb7b0f7205b9a5bf7ebccdedfcbfd80",
"main.dart.js_2.part.js": "62a7ee68c23558ff9c06bcdf024b725b",
"main.dart.js_17.part.js": "7f5cb545c281875d3fade6ab5e922fb9",
"main.dart.js_31.part.js": "7cac3e2b28c66770e538cfcca89caa6d",
"main.dart.js_21.part.js": "ae2ce1856edb1ab04fd18a6168edca82",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
