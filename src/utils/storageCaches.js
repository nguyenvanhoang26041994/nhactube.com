const storageCaches = {};

export const register = () => {
  try {
    caches.open('storage-cache')
      .then(cache => cache.keys()
      .then(requests => {
        for(let request of requests) {
          storageCaches[request.url] = true;
        }
      }));
  }
  catch(e) {
    alert(e.message);
  }
}

export default storageCaches;

window.storageCaches = storageCaches;
