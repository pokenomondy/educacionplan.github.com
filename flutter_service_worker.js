'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_24.part.js": "4cbad615e3dd66424bc6344b6b1fd016",
"main.dart.js_56.part.js": "3c2853143dcb40ae13124d42be13ee51",
"version.json": "056f384927d8e2d09d8231af787b20ad",
"main.dart.js_7.part.js": "eee3cabe93da7d4d916a72328ee90529",
"main.dart.js_12.part.js": "64018b5ac0c8497d8133c604107e6c87",
"main.dart.js_6.part.js": "276edb6165b17fe55619be8c3ffba816",
"index.html": "aa9fc9e7c8a996758e488008226581bf",
"/": "aa9fc9e7c8a996758e488008226581bf",
"main.dart.js_25.part.js": "5ab00438f7940082f9fb43d204e76e85",
"main.dart.js_57.part.js": "ab46b59728cdcc5c72acc27f88d4c083",
"main.dart.js_47.part.js": "cd26679020a841e986b7d35bb8dc4790",
"main.dart.js_11.part.js": "2cdbc2a22d05dd0ef345a4f87d910282",
"main.dart.js_4.part.js": "e1f676d769bf86a8d5a48cf271dd4441",
"main.dart.js": "d9d58d171fcd335cfa9341f88976d68f",
"main.dart.js_18.part.js": "66a861f949d927d1bfe18c1acf017ce7",
"main.dart.js_55.part.js": "eefe17c67020c2501e8e9854c84e9549",
"main.dart.js_27.part.js": "b6074aa8533a6657f8d1a1e00fd7b5d9",
"main.dart.js_19.part.js": "f6639fff9d111e30c5ee9c1e88607940",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"main.dart.js_54.part.js": "2a377a02460963da46cffe89d486cadb",
"main.dart.js_44.part.js": "b52edbf602f8c3a647edfbdd7973999a",
"main.dart.js_36.part.js": "60200e33d73e89c70fa4245aee536e79",
"main.dart.js_5.part.js": "8abe172a87d4f6297254f4500e8d55d9",
"main.dart.js_48.part.js": "9a77c92800669c408ab64549ae6080f7",
"main.dart.js_15.part.js": "01d9112b92842dae0fcd82651a110aff",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js_41.part.js": "d9faff9107a1a5e488ae445129290221",
"main.dart.js_51.part.js": "6dda545ae0286e7481f853dd392fc5ef",
"main.dart.js_23.part.js": "fb7e519cdd875a5844c1dc73c9fc072a",
"main.dart.js_33.part.js": "105ed4c27f9bf59b03a61e04a5a61f71",
"main.dart.js_40.part.js": "9a5ca7b677dfe3cdb6421643c40d6954",
"main.dart.js_32.part.js": "dc5d0e4294c0894d278c3bc2e620a1e3",
"main.dart.js_22.part.js": "64766f923c5905a683284ec56e10527d",
"main.dart.js_8.part.js": "b831dfcf2d4f74e0e462f0752ab5ac04",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "cb958d1d1c5997b266e86ed6222a11bc",
"main.dart.js_49.part.js": "e5c36dbcd9fbdb6c31bbe4b453c5a5cc",
"main.dart.js_14.part.js": "108ae1a776e82da69bde288c806893d5",
"main.dart.js_1.part.js": "cb3ee870b241f47faa9339d336bb44b6",
"main.dart.js_30.part.js": "492e25bf808f16d7d9ffde8d9e4f1950",
"main.dart.js_42.part.js": "5f7ece854a87bacef3ce14bb18af1d3d",
"main.dart.js_29.part.js": "fe24ebd0b49b94fcdac7c19dee848693",
"main.dart.js_3.part.js": "cf5491215000eff1bf03fe2607ccdd8b",
"main.dart.js_16.part.js": "0f8e752fb985e979be7c103a1ebf1ede",
"assets/AssetManifest.json": "66196d167c5f888b6d1196d26f610255",
"assets/NOTICES": "a7828728433346d538355026144d1f5f",
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
"assets/fonts/MaterialIcons-Regular.otf": "4a3ecf5ec0399dec612696d3565bdf9c",
"main.dart.js_38.part.js": "072913f22d8c78ba9be8c87f1231c67f",
"main.dart.js_2.part.js": "2e3dc1c6f56204707223b536f8d0aad5",
"main.dart.js_17.part.js": "9439a63ea8d5edd9b195377ca417839e",
"main.dart.js_31.part.js": "522f00b1fbbc4e75704cc6a93d7e0317",
"main.dart.js_53.part.js": "8f39647fb6f1e037ec19fd92583d6111",
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
