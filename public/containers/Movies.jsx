import React from 'react';

import MovieItem from '../components/MovieItem';
import getPopularMovies from '../services/movies/getPopularMovies'
import searchMovies from '../services/movies/searchMovies';

export default class Movies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      searchTerm: ''
    };
  }

  componentWillMount() {
    this.popularMovies()
  }

  popularMovies() {
    getPopularMovies()
      .then(response => {
        this.setState({movies: response});
      })
      .catch(err => {console.log(err)});
  }

  searchAndFilterMovies(searchTerm) {
    searchMovies(searchTerm)
      .then(response => {
        this.setState({movies: response})
      })
      .catch(err => {console.log(err)})
  }

  handleTyping(e) {
    this.setState({searchTerm: e.target.value}, () => {
      this.searchAndFilterMovies(this.state.searchTerm)
    })
  }

  render() {
    return (
      <div>
        <h1 className="main-title">My Movies</h1>

        <form
          className="search-container">
          <input
            className="search-container__input"
            type="text"
            onKeyUp={this.handleTyping.bind(this)}>
          </input>
        </form>

        <ul className="movies-container">
          {
            this.state.movies.map((movie, index) => {
              return (
                <MovieItem
                  key={index}
                  image={movie.poster_path}
                  title={movie.title}
                  vote={movie.vote_average}
                  overview={movie.overview}/>
              );
            })
          }
        </ul>
      </div>
    );
  }
}
