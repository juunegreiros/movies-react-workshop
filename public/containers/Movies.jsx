import React from 'react';

import MovieItem from '../components/movies/movieItem'
import getPopularMovies from '../services/movies/getPopularMovies'
import searchMovies from '../services/movies/searchMovies'

class Movies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      filteredMovies: [],
      searchTerm: ''
    };
  }

  componentWillMount() {
    this.setPopularMoviesOnState()
  }

  setPopularMoviesOnState() {
    getPopularMovies()
      .then(data => {
        this.setState({movies: data.results, filteredMovies: data.results})
      })
      .catch(err => {
        console.log(err)
      })
  }

  searchAndFilterMovies() {
    searchMovies(this.state.searchTerm)
      .then(data => {
        this.setState({filteredMovies: data.results})
      })
  }

  handleSubmit(e) {
    e.preventDefault()
    this.searchAndFilterMovies()
  }

  handleTyping(e) {
    this.setState({searchTerm: e.target.value}, () => {
      this.searchAndFilterMovies()
    })
  }

  render() {
    return (
      <div>
        <h1 className="main-title">My Movies</h1>

        <form
          class="search-container"
          data-form="search"
          onSubmit={this.handleSubmit.bind(this)}>
          <input
            type="text"
            name="query"
            class="search-container__input"
            onKeyUp={this.handleTyping.bind(this)}
          >
          </input>
        </form>

        <ul className="movies-container">
          {this.state.filteredMovies.map((movie, index) => {
            return (
              <MovieItem
                key={index}
                image={movie.poster_path}
                title={movie.title}
                vote={movie.vote_average}
                overview={movie.overview}
              />
            )
          })}
        </ul>
      </div>
    );
  };
};

export default Movies;
