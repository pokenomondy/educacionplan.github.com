'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "dd5b9572c73556031cba7ed883545fc8",
"main.dart.js_24.part.js": "47fde65843fb6b5ef4dad6524412816a",
"main.dart.js_34.part.js": "180515e146c04251c67d20a216be2600",
"main.dart.js_46.part.js": "0d1f404dd643105c0a7ac43d5e5a0137",
"main.dart.js_56.part.js": "1de558c5058898ce89c4acbd2833a8d0",
"version.json": "056f384927d8e2d09d8231af787b20ad",
"main.dart.js_7.part.js": "ed1e7eea05ca6e1288bca86efdfb2202",
"main.dart.js_60.part.js": "416652cbd3d7f53b7d2ccb28b84cafab",
"main.dart.js_12.part.js": "825de81af264796802ccbbcec6dc1131",
"main.dart.js_61.part.js": "5206bde7089dc7de4a5587916262a262",
"main.dart.js_6.part.js": "b0fe0497c29c50de34abc7fd4d33aa2e",
"index.html": "b3145c0fec513577b62386dd2bc930ea",
"/": "b3145c0fec513577b62386dd2bc930ea",
"main.dart.js_13.part.js": "4f7790baa327ed51d3889039c56b0e4d",
"main.dart.js_35.part.js": "9523f91f6ac4919a36e27a99e42bd69b",
"main.dart.js_25.part.js": "f3d099882e5e0441516c96d46179074a",
"main.dart.js_57.part.js": "3a9be8463807e6da0fa38495ca066520",
"main.dart.js_47.part.js": "34ca1c46747901effc60ae0d645968b8",
"firebase-messaging-sw.js": "befaa7495aaf51b92b2030f1ca9d3803",
"main.dart.js_11.part.js": "889f5806f3bc23c9ecec7631da583edb",
"main.dart.js_4.part.js": "19c80a147cf3d19d7b2c7f6d2e38d53b",
"main.dart.js": "8684d2ab8049fc99d54ed02086c5d795",
"main.dart.js_18.part.js": "58d182838af9a3aea3be57e1255bda9c",
"main.dart.js_45.part.js": "ca6db955207b3018320a6b43ef1daddf",
"main.dart.js_55.part.js": "349e4123b45a21af0955c0034e297bfb",
"main.dart.js_27.part.js": "27281d5568103618d8c30661946b6122",
"main.dart.js_37.part.js": "e6ab8668bf762b996521f8dd797c3d2b",
"main.dart.js_19.part.js": "e9c1c22962a72ac25ec05bf9dbf257e2",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"main.dart.js_54.part.js": "b381196b840da0c0d3ad72f7f5b8de49",
"main.dart.js_44.part.js": "d5518724b60472178d5065b61f12f4f5",
"main.dart.js_36.part.js": "63d8adad3694a6b8ecd3cdf977e63e94",
"main.dart.js_26.part.js": "850edc89a797d01de3901d68e7cfd56f",
"main.dart.js_10.part.js": "704b4051b16573ead8c9c9d40cef0763",
"main.dart.js_5.part.js": "ca5cd1314ffb315e9906ac8a74b05668",
"main.dart.js_58.part.js": "84be4f4f394af12e3c2f23f5807e2adb",
"main.dart.js_15.part.js": "238044495f37aabc7b687b7d51dffb38",
"favicon.png": "1a35dc15b79da98394fea701ee0768c6",
"main.dart.js_41.part.js": "8c1c638d09bdb0618912e592f8d7da3a",
"main.dart.js_51.part.js": "6a3acf8fb93510d1789e584a7bc0171a",
"main.dart.js_23.part.js": "052c51e2ebcce93ac9b64ecd487643ca",
"main.dart.js_33.part.js": "73174911568b9b06473ce356f779378c",
"main.dart.js_9.part.js": "a07f9102b343084b1deb85a556082e5e",
"main.dart.js_50.part.js": "324036a3a29f31c1f751947b602d57f8",
"main.dart.js_40.part.js": "0840801a5074d426cdb0929e5f019159",
"main.dart.js_32.part.js": "460bc6772f8b8a381af0b4fa3e390acf",
"main.dart.js_22.part.js": "d314b6195f65cc7b2ba849fca1e94ac4",
"main.dart.js_8.part.js": "4ff93735fb053e9797b4caa9cff251c8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "cb958d1d1c5997b266e86ed6222a11bc",
"main.dart.js_49.part.js": "a04ec9155013288a6946dd1ac5c354b6",
"main.dart.js_59.part.js": "095e224bd6db5bdb45ef6c221541efe1",
"main.dart.js_14.part.js": "7ea87eb813d20fd681b77fab066ed20e",
"main.dart.js_1.part.js": "c5b0940b33155acdcbb7b48d95bc8434",
"main.dart.js_20.part.js": "4a78dbb58bd6b474bc41c24613b7fb92",
"main.dart.js_30.part.js": "6a09137b3cc038e6cd54fda6756e0d70",
"main.dart.js_52.part.js": "48168ab771a328872df182fa6baf1d8c",
"main.dart.js_39.part.js": "33351cce4f6a2d01a3a5521064587326",
"main.dart.js_29.part.js": "39c93815b112eb682cc396b7461dfbe0",
"main.dart.js_3.part.js": "acc03249299f68c22db27c5cf755fd47",
"main.dart.js_16.part.js": "3f1a2ba533dedde98733d5157e1cf78f",
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
"assets/fonts/MaterialIcons-Regular.otf": "aa5baae0478ff00665e4257c722f3c53",
"main.dart.js_28.part.js": "68d85f2ba262660756f49aa034c67daf",
"main.dart.js_38.part.js": "7833eedd9b4f67ccf9a47c656536c05c",
"main.dart.js_2.part.js": "eb17a1d3a824f9b5f7a5efe5e05fbcef",
"main.dart.js_17.part.js": "0dd348cbf078ea2028192e33157f1823",
"main.dart.js_31.part.js": "4ce39eb9206fcb948510e7d441250a39",
"main.dart.js_21.part.js": "1119a9e7a7aeeb7b682f312126e2c5a4",
"main.dart.js_53.part.js": "ef30e03ee9b397dbe775446d1b5481cf",
"main.dart.js_43.part.js": "0caadb8abb14db596d1f3ba2e89e6575",
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
