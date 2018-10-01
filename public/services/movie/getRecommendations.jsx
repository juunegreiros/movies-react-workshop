import movieDB, { key } from '../api.jsx';

export default id =>
  movieDB
    .get(`movie/${id}/recommendations?api_key=${key}&language=pt-BR`)
    .then(response => response.data)
    .catch(error => error);
