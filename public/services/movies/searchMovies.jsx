import moviedb, {key} from '../api'

export default (searchTerm) => {
  return moviedb.get(`search/movie?api_key=${key}&language=pt-BR&query=${searchTerm}`)
    .then(response => response.data.results)
    .catch(err => err)
}
