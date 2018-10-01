import movieDB, { key } from '../api';

export default query => {
  movieDB
    .get(`search/movie?api_key=${key}&language=pt-BR&query=${query}`)
    .then(response => response.data)
      .then(data => console.log(data))
    .catch(error => console.log(error));
};
