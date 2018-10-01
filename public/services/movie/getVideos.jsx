import movieDB, { key } from '../api';

export default id =>
  movieDB
    .get(`movie/${id}/videos?api_key=${key}&language=pt-BR`)
    .then(response => response.data)
    .catch(error => error);
