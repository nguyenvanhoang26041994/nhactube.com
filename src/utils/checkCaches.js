caches.open('storage-cache').then(d => d.keys().then(keys => console.log(keys[0].url)));
