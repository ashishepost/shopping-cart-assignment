export const fetchData = (url, data, type) => {
  // Default options are marked with *
  switch (type) {
    case 'GET':
      return fetch(url, {
        method: type,
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrer: 'no-referrer'
      }).then(res => res.json());
    case 'POST':
      return fetch(url, {
        method: type,
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrer: 'no-referrer',
        body: {
          productId: data
        }
      }).then(res => res.json());
  }
};
