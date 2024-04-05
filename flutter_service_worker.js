'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "2188c80b878e160123b99ab4853c244c",
"assets/AssetManifest.bin.json": "4331258ac9541b487bc79e4751e6a382",
"assets/AssetManifest.json": "66196d167c5f888b6d1196d26f610255",
"assets/FontManifest.json": "ce1d0ae664e14238869feff07c71ce21",
"assets/fonts/MaterialIcons-Regular.otf": "6a74ad660b0e791ccd96f203bcc3678d",
"assets/NOTICES": "379b3f16b27118f9cf5d73b6c8027e1e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/fluent_ui/assets/AcrylicNoise.png": "81f27726c45346351eca125bd062e9a7",
"assets/packages/fluent_ui/fonts/FluentIcons.ttf": "f3c4f09a37ace3246250ff7142da5cdd",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/syncfusion_flutter_datagrid/assets/font/FilterIcon.ttf": "b8e5e5bf2b490d3576a9562f24395532",
"assets/packages/syncfusion_flutter_datagrid/assets/font/UnsortIcon.ttf": "acdd567faa403388649e37ceb9adeb44",
"assets/packages/timezone/data/latest_all.tzf": "871b8008607c14f36bae2388a95fdc8c",
"assets/packages/youtube_player_flutter/assets/speedometer.webp": "50448630e948b5b3998ae5a5d112622b",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "db399b06d325de2419ef19519a4c1a1b",
"/": "db399b06d325de2419ef19519a4c1a1b",
"main.dart.js": "ee8b4177ae47f16c0e2cdce8c5025a60",
"main.dart.js_1.part.js": "940895f0aaf890692ece69c5c5e0d83b",
"main.dart.js_10.part.js": "4373c925585ce7e7f1b6dff2e33c937a",
"main.dart.js_11.part.js": "5734b2953105dbc118fc196cffdf58ad",
"main.dart.js_12.part.js": "8505f39e2251baa87e521a6c643e4df2",
"main.dart.js_13.part.js": "29efcbd94023d12a1e70b06d8c5b20f9",
"main.dart.js_14.part.js": "eab6c8f0273ec8f89e454c369bf6d29a",
"main.dart.js_15.part.js": "fb8cad87018bd4b26c9bcf188632e3e0",
"main.dart.js_16.part.js": "9630826201c77416e66f233d54bfec6c",
"main.dart.js_17.part.js": "97f82f0e2eeca2e00b7b8384a5f4a799",
"main.dart.js_18.part.js": "25181b727e2bb3c987d64000f01679b5",
"main.dart.js_19.part.js": "f57653f99a21b31919d34af655365b69",
"main.dart.js_2.part.js": "1a3c0eed8d4c23542a82baf19e33987b",
"main.dart.js_20.part.js": "d0b569306544a14c1c05f491996683ef",
"main.dart.js_21.part.js": "14b1db02224ca9bf2511a8751a6b0a81",
"main.dart.js_22.part.js": "ff8d5dac8b35af39d7858de4cfd231b7",
"main.dart.js_23.part.js": "375a4c510e13397bc39beccd71796a0f",
"main.dart.js_24.part.js": "334f640b2097e913085fca4d5e34fae2",
"main.dart.js_25.part.js": "53557e2b1f352722bf29b989aceddba2",
"main.dart.js_26.part.js": "83173d2c0d2ee23d531569e9d5adc1f9",
"main.dart.js_27.part.js": "7240c1cc7af8860d294240fba835eefc",
"main.dart.js_28.part.js": "fd80be218e6889dd3dfefbe5869aeca6",
"main.dart.js_3.part.js": "6e2b187ab128bbb91e9dfe1d1a82f1eb",
"main.dart.js_30.part.js": "1d79ee67628674c4b6e9e1981ee501fa",
"main.dart.js_4.part.js": "78aaa057b8603d8517dcda22ecbdc4f9",
"main.dart.js_5.part.js": "0eccaaa90cbb0c071d08596bdad3c920",
"main.dart.js_6.part.js": "ee94a3e12f00c19d244ffe52a95cfb9d",
"main.dart.js_7.part.js": "e6ea7598183d8667ec6ffe47e1eb1be4",
"main.dart.js_8.part.js": "0f7b6cabc07d63d26a71c2e121d63d10",
"main.dart.js_9.part.js": "6f713f453099c81bbfd9c6d36cf4931b",
"manifest.json": "5b9895d06a9e4a517790b35d60a9da8b",
"StreamObtener.js": "bdf5801d2241993f59e3f6782a7c3e71",
"version.json": "056f384927d8e2d09d8231af787b20ad",
"worker.js": "f916974921b8b3d98f9fdfc4b68e5432"};
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
