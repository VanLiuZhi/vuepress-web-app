/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "d2f18023af535933c2b90bc2cc315975"
  },
  {
    "url": "assets/css/0.styles.a6229f19.css",
    "revision": "3338b641ff6aa711a48b388099497403"
  },
  {
    "url": "assets/fonts/element-icons.6f0a7632.ttf",
    "revision": "6f0a76321d30f3c8120915e57f7bd77e"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.9ae675b4.js",
    "revision": "da68ef8f48354f09acc4b952d41b379d"
  },
  {
    "url": "assets/js/10.84390ed8.js",
    "revision": "dbd4961940ba47853461302bf13aa15b"
  },
  {
    "url": "assets/js/11.dca9305c.js",
    "revision": "d782a6bea532505685b4b1ca9b405fdf"
  },
  {
    "url": "assets/js/12.62ae46e0.js",
    "revision": "45b5465ddd578eba289858fc44a3b656"
  },
  {
    "url": "assets/js/13.d52e784d.js",
    "revision": "3f22c35ed2e12a5cdcc32955e5bd4547"
  },
  {
    "url": "assets/js/14.449d4568.js",
    "revision": "d4efbdb556436f66059f2f3f2928caf5"
  },
  {
    "url": "assets/js/15.7919ba72.js",
    "revision": "f0246ebd26571bdc9be768731bc44307"
  },
  {
    "url": "assets/js/16.bc020aec.js",
    "revision": "88a4f528f0c4796824df65be9c22b376"
  },
  {
    "url": "assets/js/17.27a12b6e.js",
    "revision": "b0a4671e0a79aca813b0830102556ea5"
  },
  {
    "url": "assets/js/18.aedc85c3.js",
    "revision": "bec89d2d924bd324a58a8bd67842cb50"
  },
  {
    "url": "assets/js/19.e299cce7.js",
    "revision": "c64915af89a5ac126c2506fca57669a1"
  },
  {
    "url": "assets/js/2.e5e9ab4e.js",
    "revision": "8eb7e098fb1d62335a010dbf2919b504"
  },
  {
    "url": "assets/js/20.6f52c0cd.js",
    "revision": "4099057bb663e17fa9acc2dbb179c60c"
  },
  {
    "url": "assets/js/21.97136008.js",
    "revision": "922a3e12674eaf8cbaa05c841d2ae16a"
  },
  {
    "url": "assets/js/22.ab6d2a28.js",
    "revision": "df5fe38ced865ad77a749f13639200be"
  },
  {
    "url": "assets/js/23.7ebfd52f.js",
    "revision": "4cc0d22a107b5ebe83d9e082495b4a64"
  },
  {
    "url": "assets/js/24.1124a838.js",
    "revision": "c810b6c3a867730ea15a918bdb592066"
  },
  {
    "url": "assets/js/25.c9a4ebc6.js",
    "revision": "b6e5a7eb5f9d660e81cb3610599eb626"
  },
  {
    "url": "assets/js/26.8185b663.js",
    "revision": "cd704b8db3e99bfb64ea37be66d0205a"
  },
  {
    "url": "assets/js/27.af182920.js",
    "revision": "073df0cbe6429b57e5f800c206cc4451"
  },
  {
    "url": "assets/js/28.cbc990d2.js",
    "revision": "e7666737af00e332e02908d9cff8cee3"
  },
  {
    "url": "assets/js/29.cf3d4f25.js",
    "revision": "ac9a6bc576958349c3220f9a89c08a26"
  },
  {
    "url": "assets/js/3.dcea37e2.js",
    "revision": "6413e3dc54cbd30aea88dd0698bf897d"
  },
  {
    "url": "assets/js/30.684b37cd.js",
    "revision": "15aec1f2d9b9cb2ef4633dcceb5e00b1"
  },
  {
    "url": "assets/js/31.5e2faebd.js",
    "revision": "3e11aa81daf9a5107f14dc50a28fabe2"
  },
  {
    "url": "assets/js/32.c1bb9b9f.js",
    "revision": "a78420f8e0243f6104eae4773e8874e0"
  },
  {
    "url": "assets/js/5.6b8fbb79.js",
    "revision": "80fa0702e45466ef0c4baf55e1879454"
  },
  {
    "url": "assets/js/6.f20d2c49.js",
    "revision": "cb0909817953d59a5028bb0a6abe99a0"
  },
  {
    "url": "assets/js/7.53fd1e79.js",
    "revision": "1867de067c1f769ca32df36b07054558"
  },
  {
    "url": "assets/js/8.3fb99288.js",
    "revision": "4c502b9e6bde22de74bca38923cc8cab"
  },
  {
    "url": "assets/js/9.e91b621b.js",
    "revision": "df96929c7695b1d0567f133e8826c10c"
  },
  {
    "url": "assets/js/app.55f070bc.js",
    "revision": "75f50ffcc232dcd704e6a64a10dcd1b7"
  },
  {
    "url": "assets/js/vendors~docsearch.daaca16b.js",
    "revision": "98097b82dea3f004684bc75ad2732e16"
  },
  {
    "url": "en/application/index.html",
    "revision": "88b5ed57cc11a96dd258510b40b0ede4"
  },
  {
    "url": "en/index.html",
    "revision": "ab4ab8610f538db03fec9d4379028e25"
  },
  {
    "url": "google21c733509a589aaa.html",
    "revision": "dc170db798841bd226dabf5217b26a1f"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "bbe9fcca4132438afbd61d01f5b573b9"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "5de773e7f554dc38c354662e62bbde3c"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "c924d6c1d7abf0827bf05e7f533d41c4"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "5285f5460f1f76972a12d741280b73cb"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "cc40dfd01cf3b235ce6a10ebedec10c0"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "2a0b600f3ad0d71d9a6f789b99d3609a"
  },
  {
    "url": "icons/mstile-144x144.png",
    "revision": "d9e30f1bb3c8825211698eb1de034288"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "8230c53bdf042e4a40d3f61e3d1e6b8b"
  },
  {
    "url": "icons/mstile-310x150.png",
    "revision": "80aeead9a626b8e46289d81c90d0f264"
  },
  {
    "url": "icons/mstile-310x310.png",
    "revision": "1a07aeea0d6762459b94e520bbacec69"
  },
  {
    "url": "icons/mstile-70x70.png",
    "revision": "51884ae4c1403f79bf48adb9ca3427df"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "ee5048b66d53514bd4e6535007eef213"
  },
  {
    "url": "images/MG-1P.png",
    "revision": "b33194b1fcd1a81287fee93e49e43c86"
  },
  {
    "url": "index.html",
    "revision": "ec24c2ea064db0a4b0f474c23bd75175"
  },
  {
    "url": "logo.png",
    "revision": "bbe9fcca4132438afbd61d01f5b573b9"
  },
  {
    "url": "love.svg",
    "revision": "dce92620955225095706c1f4a9010533"
  },
  {
    "url": "zh/application/index.html",
    "revision": "f2f923fdf89376ae530e8e6ee24507b1"
  },
  {
    "url": "zh/article/beautify-vue-by-eslint-and-prettier.html",
    "revision": "571451a0835d3dc9faed9d6bd912e32f"
  },
  {
    "url": "zh/article/develop-quick-app-experience-notes.html",
    "revision": "da4d09d38d58ed071df79baddce6d9ee"
  },
  {
    "url": "zh/article/index.html",
    "revision": "8c223137583220860e25efd0c13614aa"
  },
  {
    "url": "zh/article/talk-about-my-blogs.html",
    "revision": "2faabdddfed7e9c999e871334c67d785"
  },
  {
    "url": "zh/article/vue-webpack-boilerplate-template.html",
    "revision": "1e465eff283738d26cdd6283f94343de"
  },
  {
    "url": "zh/blog/csdn-blog.html",
    "revision": "c187eead4699611684f8ea1e37c58cde"
  },
  {
    "url": "zh/blog/hexo-blog.html",
    "revision": "e7d1da05d384fe13fdea6713adcbd33d"
  },
  {
    "url": "zh/blog/index.html",
    "revision": "387d5159d854cf3ef39c3be5851eec43"
  },
  {
    "url": "zh/blog/jekyll-blog.html",
    "revision": "0402e0b169cde14adb5d452dd7ddb6ad"
  },
  {
    "url": "zh/blog/jianshu-blog.html",
    "revision": "4fe5ebe3b51f7cb5de0d15cc521ef5d4"
  },
  {
    "url": "zh/blog/vuepress-blog.html",
    "revision": "ed353094285be1e010ee2192ec620c57"
  },
  {
    "url": "zh/blog/wechat-blog.html",
    "revision": "d0063e757d8a0fd0a5f3ed82ca98e6f9"
  },
  {
    "url": "zh/index.html",
    "revision": "b648a743874d588cda3d70e649bcb53d"
  },
  {
    "url": "zh/recruit/index.html",
    "revision": "7b9998ce4aeca1cd7f6a128b2912752a"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
