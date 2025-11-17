const CACHE_NAME = 'yusuf-portfolio-cache-v1'

self.addEventListener('install', (event) => {
  event.waitUntil(self.skipWaiting())
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys()
      await Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key)
          }
          return undefined
        }),
      )
      await self.clients.claim()
    })(),
  )
})

self.addEventListener('fetch', (event) => {
  const { request } = event

  if (request.method !== 'GET') {
    return
  }

  event.respondWith(
    caches.match(request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse
      }

      return caches.open(CACHE_NAME).then((cache) =>
        fetch(request).then((response) => {
          if (response.status === 200 && response.type === 'basic') {
            cache.put(request, response.clone())
          }
          return response
        }),
      )
    }),
  )
})

