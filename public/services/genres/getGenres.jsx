import movieDB, { key } from '../api';

export default () => {
  movieDB
    .get(`/genre/movie/list?api_key=${key}&language=pt-BR`)
    .then(response => response.data)
    .catch(error => error);
};
