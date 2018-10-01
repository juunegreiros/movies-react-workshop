import movieDB, { key } from '../api.jsx';

export default () =>
  movieDB
    .get(`/movie/popular?api_key=${key}&language=pt-BR`)
    .then(response => response.data)
    .catch(error => error);
