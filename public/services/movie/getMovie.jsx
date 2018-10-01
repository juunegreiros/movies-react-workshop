import movieDB, { key } from '../api';

export default id => {
  movieDB
    .get(`movie/${id}?api_key=${key}&language=pt-BR`)
    .then(response => response.data)
      .then(data => console.log(data))
    .catch(error => console.log(error));
};
