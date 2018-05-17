const getData = (url, cb) => fetch(url)
  .then(res => res.json())
  .then(results => cb(results))
  .catch((err) => {
    throw err;
  });

export default {
  getData,
};
