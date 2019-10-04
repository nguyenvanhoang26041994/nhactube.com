const storageCaches = {};

export const register = () => caches.open('storage-cache')
  .then(cache => cache.keys()
  .then(requests => {
    for(let request of requests) {
      storageCaches[request.url] = true;
    }
  }));

export default storageCaches;

window.storageCaches = storageCaches;
