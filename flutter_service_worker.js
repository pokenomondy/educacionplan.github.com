'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "ad947e90ff0e41f58d6083ffe55cb39e",
"main.dart.js_24.part.js": "01ff244175a3cbb24fff6541430a59ad",
"main.dart.js_34.part.js": "c56c9749cc2e2da740a6d8eb13e16d1d",
"main.dart.js_46.part.js": "a2f0ba1da793f14a70ea36c6a8c47219",
"main.dart.js_56.part.js": "1de558c5058898ce89c4acbd2833a8d0",
"version.json": "056f384927d8e2d09d8231af787b20ad",
"main.dart.js_7.part.js": "c0d41b602136ded29a69b470b1e2759a",
"main.dart.js_60.part.js": "416652cbd3d7f53b7d2ccb28b84cafab",
"main.dart.js_12.part.js": "03996e0d7dc98fa4b63a14dc5d7da178",
"main.dart.js_61.part.js": "5206bde7089dc7de4a5587916262a262",
"main.dart.js_6.part.js": "ae76b77f502778939ad584e2cd560b34",
"index.html": "9acc9faa45e31ec1f2bf58f09d968a89",
"/": "9acc9faa45e31ec1f2bf58f09d968a89",
"main.dart.js_13.part.js": "974302d4cf987fad540cdb148aeb2cf0",
"main.dart.js_35.part.js": "c0ed6095ff80a75b9b645a3ebcf22c10",
"main.dart.js_25.part.js": "b95be27d669a3ed0beeebbb67b0a923e",
"main.dart.js_57.part.js": "3a9be8463807e6da0fa38495ca066520",
"main.dart.js_47.part.js": "9afbdf17a49bd5e88b969b587ba82181",
"firebase-messaging-sw.js": "befaa7495aaf51b92b2030f1ca9d3803",
"main.dart.js_11.part.js": "dfe0f6f47e85a0e775cb9a62a603ed3f",
"main.dart.js_4.part.js": "569f92d27c6130c466c47de23138743b",
"main.dart.js": "e1b45fb6211aede6e848aed34cdc3b06",
"main.dart.js_18.part.js": "e8f9dad97bad14f90a017be75db13356",
"main.dart.js_45.part.js": "febcc9808b3afca0555b23f09de3d7ad",
"main.dart.js_55.part.js": "349e4123b45a21af0955c0034e297bfb",
"main.dart.js_27.part.js": "456b400d3afa2547154f20947018b57d",
"main.dart.js_37.part.js": "e6ab8668bf762b996521f8dd797c3d2b",
"main.dart.js_19.part.js": "f6b8b875d7087bbc1f0dd9388bb0e244",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"main.dart.js_54.part.js": "b381196b840da0c0d3ad72f7f5b8de49",
"main.dart.js_44.part.js": "62338a752723c25a953996e3040f9ceb",
"main.dart.js_36.part.js": "63d8adad3694a6b8ecd3cdf977e63e94",
"main.dart.js_26.part.js": "ba733360d4dfb4bb019d735cd9f4d209",
"main.dart.js_10.part.js": "88c201d5371b1586f7b332f9e488a948",
"main.dart.js_5.part.js": "2e33f6c2cdce008829f2ae411b0932c6",
"main.dart.js_58.part.js": "84be4f4f394af12e3c2f23f5807e2adb",
"main.dart.js_15.part.js": "a9d521159ca9e540a95901218b08be4a",
"favicon.png": "1a35dc15b79da98394fea701ee0768c6",
"main.dart.js_41.part.js": "8c1c638d09bdb0618912e592f8d7da3a",
"main.dart.js_51.part.js": "0e0ebae48f5b04e6788120d3556d8676",
"main.dart.js_23.part.js": "8a36f57a10fcae9839a236f04b365660",
"main.dart.js_33.part.js": "73174911568b9b06473ce356f779378c",
"main.dart.js_9.part.js": "d109eb1d45e1aa9704f8548139754da6",
"main.dart.js_40.part.js": "8a54b3c7b280eeab5300461ea107d15d",
"main.dart.js_32.part.js": "460bc6772f8b8a381af0b4fa3e390acf",
"main.dart.js_22.part.js": "2cdb7635e844894ed6bdd8797e9c38bd",
"main.dart.js_8.part.js": "d691ea2c6fdd38f2f2271bc997c6e1dd",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "cb958d1d1c5997b266e86ed6222a11bc",
"main.dart.js_59.part.js": "095e224bd6db5bdb45ef6c221541efe1",
"main.dart.js_14.part.js": "5b263f176df43f50e28e1ddec4a6e517",
"main.dart.js_1.part.js": "81058235aa2dd34ce4d8acdf0809a5ab",
"main.dart.js_20.part.js": "88652525c2ad508d7ec4ba4379444c16",
"main.dart.js_30.part.js": "b63b35b05cc7c594a33642a1eb335489",
"main.dart.js_52.part.js": "687aef72f7cf252681e0c83fcf4d8c48",
"main.dart.js_39.part.js": "fafd53d26ce9e58ec7fe25a285128f9b",
"main.dart.js_29.part.js": "93d8e4b336d6f80b74fe9fd897f54f2c",
"main.dart.js_3.part.js": "f7e0c916a79b82ef2c3955d92f2d5bdb",
"main.dart.js_16.part.js": "d795dea7b7515a175c9aaaa968694d10",
"assets/AssetManifest.json": "74acf81841190f1ed5db93330faf2d8a",
"assets/NOTICES": "388cb85ebd41e83419ba8e9cd5fbdbe7",
"assets/FontManifest.json": "ce1d0ae664e14238869feff07c71ce21",
"assets/AssetManifest.bin.json": "d8d7381b94c1f0963938d8205be04a60",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/timezone/data/latest_all.tzf": "a3a6cb5d912b5375926e5b027f91cb00",
"assets/packages/youtube_player_iframe/assets/player.html": "663ba81294a9f52b1afe96815bb6ecf9",
"assets/packages/youtube_player_flutter/assets/speedometer.webp": "50448630e948b5b3998ae5a5d112622b",
"assets/packages/fluent_ui/fonts/FluentIcons.ttf": "f3c4f09a37ace3246250ff7142da5cdd",
"assets/packages/fluent_ui/assets/AcrylicNoise.png": "81f27726c45346351eca125bd062e9a7",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "509ae636cfdd93e49b5a6eaf0f06d79f",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/syncfusion_flutter_datagrid/assets/font/FilterIcon.ttf": "b8e5e5bf2b490d3576a9562f24395532",
"assets/packages/syncfusion_flutter_datagrid/assets/font/UnsortIcon.ttf": "acdd567faa403388649e37ceb9adeb44",
"assets/packages/quill_native_bridge_linux/assets/xclip": "d37b0dbbc8341839cde83d351f96279e",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "c00d7c2ee293978f29aeb8a6ce4f58df",
"assets/fonts/MaterialIcons-Regular.otf": "32cf42136b9ec93618381d3246d3d84f",
"main.dart.js_28.part.js": "c21fc1855ada9bdcb22070d1b84a8aaa",
"main.dart.js_2.part.js": "c6faf6d16b7c9053bff3cd7414d9fddb",
"main.dart.js_17.part.js": "f406a313d0a55a8deaa8794ddecf25bf",
"main.dart.js_31.part.js": "1208d0283ad79a49878d34f51fa51e48",
"main.dart.js_21.part.js": "6bb62a4f5e15da499c44aa2e41fe2058",
"main.dart.js_53.part.js": "e8eb5614381d99e311bea82dd2cc8661",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
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
