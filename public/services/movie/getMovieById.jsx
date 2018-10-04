import moviedb, {key} from '../api';

export default (movieId) => {
  return moviedb.get(`/movie/${movieId}?api_key=${key}&language=pt-BR`)
    .then(response => response.data)
    .catch(err => err)
}