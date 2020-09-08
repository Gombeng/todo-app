const myCache = "my-cahce";
const assets = [
  "/",
  "/index.html",
  "/css/style.css",
  "/css/bootstrap.css",
  "/js/app.js",
  "/js/regSw.js",
  "/manifest.json",
  "https://fonts.googleapis.com/css2?family=Karla&display=swap",
];

// install service worker
self.addEventListener("install", (evt) => {
  // console.log('service worker has been installed');
  evt.waitUntil(
    caches.open(myCache).then((cache) => {
      console.log("caching all assets");
      cache.addAll(assets);
    })
  );
});

// activate service worker
self.addEventListener("activate", (evt) => {
  console.log("sercice worker has been activate");
});

// fetch event
self.addEventListener("fetch", (evt) => {
  console.log("fetch event", evt);
});
