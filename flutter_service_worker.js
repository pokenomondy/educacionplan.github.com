'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_24.part.js": "3dc37483456bddc3030e70cef8505cf3",
"main.dart.js_34.part.js": "cf1fa7876cae94d6890b58499902ad37",
"main.dart.js_46.part.js": "ebb78ca6967f8ef39db5846f95113c0b",
"main.dart.js_56.part.js": "89d769cf12286a7fef9ab89c65f5e2f6",
"version.json": "056f384927d8e2d09d8231af787b20ad",
"main.dart.js_7.part.js": "500ce9eb63e4c50691b2ab6661f3bfa8",
"main.dart.js_12.part.js": "9fc2cb49e2471ea34d0a8fbeb739f572",
"main.dart.js_6.part.js": "7a91e0ff1f8a4559c6e7dcd6539fdccb",
"index.html": "851cdf9fbbffd939880414aa44f04f5a",
"/": "851cdf9fbbffd939880414aa44f04f5a",
"main.dart.js_13.part.js": "8d215ad8564d841b09adfb4de11952dd",
"main.dart.js_35.part.js": "b0dbe4b935792ccd420497fd3d2a3dd1",
"main.dart.js_25.part.js": "cab7f321f31ca4733894b344e4921014",
"main.dart.js_57.part.js": "3a419932d09ed04b3e995c93ecffe55a",
"main.dart.js_47.part.js": "e49b41299f30890e85981ff69f8bd5f0",
"firebase-messaging-sw.js": "6f2521f1ced555dc5f42210e62585805",
"main.dart.js_11.part.js": "32d9e446876e6c6f59b358627215528b",
"main.dart.js_4.part.js": "e1f676d769bf86a8d5a48cf271dd4441",
"main.dart.js": "24746667a5e94a017a0711b77244f2b6",
"main.dart.js_18.part.js": "9ef501fe821ec07035345de41fa207ac",
"main.dart.js_45.part.js": "8c5a729de365c2751580ef821685232d",
"main.dart.js_55.part.js": "0ee8e732059d0f8c459f2a1f9d723802",
"main.dart.js_27.part.js": "b6a78bcd4079a6d0735d68121c4324bf",
"main.dart.js_37.part.js": "74495eaf5d776c1e9297f3ab7fe2e8ba",
"main.dart.js_19.part.js": "33229280998262379b8fb434df41f045",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"main.dart.js_54.part.js": "04b5e7c9d97330f697480a7372a3ee08",
"main.dart.js_44.part.js": "89a95c410c16dc3bda7d9e357eef7116",
"main.dart.js_36.part.js": "2bafff405c36fbe1310caf3cd9083d37",
"main.dart.js_26.part.js": "05c41785916b7f59b8903bd3aaef1fac",
"main.dart.js_10.part.js": "ea4ab801a47532a8f2608a9a97164ff2",
"main.dart.js_5.part.js": "2ead828998d8f463e94b5adecc8f2318",
"main.dart.js_48.part.js": "a09a7c21228c2362137cc1a22554331c",
"main.dart.js_15.part.js": "10295424f9d4a83fb5b60c8a402bed6f",
"favicon.png": "1a35dc15b79da98394fea701ee0768c6",
"main.dart.js_41.part.js": "c2752561058993c7952c782e07ed4602",
"main.dart.js_51.part.js": "c05ade2687534d0a32cbe60a0e0108b8",
"main.dart.js_23.part.js": "ebf0d162f3b3c4ef4d91ba59a1677043",
"main.dart.js_33.part.js": "3b13214101c05b81fca6483cf3ecf85e",
"main.dart.js_9.part.js": "fc58056336b27db2e0acd4c3922b06f9",
"main.dart.js_40.part.js": "54d1daee7f5cd4895adf45ed1f1241f6",
"main.dart.js_32.part.js": "b1d117cfb40c906e2545195a907d521d",
"main.dart.js_22.part.js": "89ff3c0860afbcf6d95306d0a710a640",
"main.dart.js_8.part.js": "4e69e70047410f549dbd16e2dc5ed49a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "cb958d1d1c5997b266e86ed6222a11bc",
"main.dart.js_49.part.js": "c5deedb8a550e9aedbbc5946e59f8660",
"main.dart.js_14.part.js": "b44137cc893f2d3982e33bde3bbbcca4",
"main.dart.js_1.part.js": "e78a11c772915bd0498cb37715dcfe3b",
"main.dart.js_20.part.js": "a0c94e9e2d1600ef153c10770eb60da1",
"main.dart.js_30.part.js": "1cbf8d46f3f9f8d82f4648c75990e715",
"main.dart.js_42.part.js": "ce79ac4fd64d4d0f0392de09917c91b9",
"main.dart.js_39.part.js": "e87a1494287c8e285c2b0a5f0b0690ff",
"main.dart.js_29.part.js": "b6fe66088162a2a29f0f8e8172a96c09",
"main.dart.js_3.part.js": "a7ba4a2cd2f1af02e6623849338b6938",
"main.dart.js_16.part.js": "3034fc669c6c054a52612b6298214e37",
"assets/AssetManifest.json": "66196d167c5f888b6d1196d26f610255",
"assets/NOTICES": "8f06d5a08995543005a8edef820cd6d1",
"assets/FontManifest.json": "ce1d0ae664e14238869feff07c71ce21",
"assets/AssetManifest.bin.json": "4331258ac9541b487bc79e4751e6a382",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/timezone/data/latest_all.tzf": "871b8008607c14f36bae2388a95fdc8c",
"assets/packages/youtube_player_flutter/assets/speedometer.webp": "50448630e948b5b3998ae5a5d112622b",
"assets/packages/fluent_ui/fonts/FluentIcons.ttf": "f3c4f09a37ace3246250ff7142da5cdd",
"assets/packages/fluent_ui/assets/AcrylicNoise.png": "81f27726c45346351eca125bd062e9a7",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/syncfusion_flutter_datagrid/assets/font/FilterIcon.ttf": "b8e5e5bf2b490d3576a9562f24395532",
"assets/packages/syncfusion_flutter_datagrid/assets/font/UnsortIcon.ttf": "acdd567faa403388649e37ceb9adeb44",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "2188c80b878e160123b99ab4853c244c",
"assets/fonts/MaterialIcons-Regular.otf": "d67c9e2acc4f493b5a7ba51297ea4e1c",
"main.dart.js_28.part.js": "d530f6921a41619f50a284e53f0d2701",
"main.dart.js_38.part.js": "e7ef4a531100681abf7c0d71580cc3cd",
"main.dart.js_2.part.js": "c8d4de362a3ae580e65902f4aebd62a4",
"main.dart.js_17.part.js": "ee1b4154eea45a91acbcb3b1f75cf738",
"main.dart.js_31.part.js": "e7b88ffdcf2e69c2880c79fc71032737",
"main.dart.js_21.part.js": "54934318f233d97c035c4ed6ed2dfb34",
"main.dart.js_53.part.js": "caee4500123db945e9ae16a4cbcc949b",
"main.dart.js_43.part.js": "4879a32b2b7887b8b07e762a879ed233",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
