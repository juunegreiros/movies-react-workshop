import moviedb, { key } from '../api';

export default () =>
  moviedb.get(`/movie/popular?api_key=${key}&language=pt-BR`)
    .then(response => response.data.results)
    .catch(err => err);