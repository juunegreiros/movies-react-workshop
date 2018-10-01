import movieDB, { key } from '../api';

export default () =>
  movieDB
    .get(`/movie/popular?api_key=${key}&language=pt-BR`)
    .then(response => response.data)
    .catch(error => error);
