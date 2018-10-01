import React from 'react';

import getPopularMovies from '../services/movies/getPopularMovies'

class Movies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
  }

  componentWillMount() {
    this.setPopularMoviesOnState()
  }

  setPopularMoviesOnState() {
    getPopularMovies()
      .then(data => {
        this.setState({movies: data.results})
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    return (
      <div>
        <h1 className="main-title">My Movies</h1>

        <ul data-container="movies" className="movies-container">
          {this.state.movies.map(movie => {
            return <li>
              {movie.title}
            </li>
          })}
        </ul>
      </div>
    );
  };
};

export default Movies;
