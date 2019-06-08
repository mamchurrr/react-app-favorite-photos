const YOUR_ACCESS_KEY = '682697f1978915eb5f13aef3dad4cfc63b0025894052fc8d1377c224bca5d93d';
const BASE_URL = 'https://api.unsplash.com/';

const getPhotos = (page = 1, perPage = 10) => {
  const url = `${BASE_URL}photos/?client_id=${YOUR_ACCESS_KEY}&per_page=${perPage}&page=${page}`;

  return fetch(url)
    .then(res => res.json());
};


export default getPhotos;
