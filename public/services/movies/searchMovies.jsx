import movieDB, { key } from '../api.jsx';

export default query =>
  movieDB
    .get(`search/movie?api_key=${key}&language=pt-BR&query=${query}`)
    .then(response => response.data)
    .catch(error => error);
