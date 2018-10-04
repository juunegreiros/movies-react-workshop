import React from 'react';

import getMovieById from '../services/movie/getMovieById';
import handleImage from '../services/handleImages';

export default class MovieDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: null
    };
  }

  componentWillMount() {
    this.getMovieDetail(this.props.match.params.id);
  }

  getMovieDetail(movieId) {
    getMovieById(movieId)
      .then(response => {
        this.setState({movie: response}, () => {console.log(this.state.movie)})
      })
      .catch(err => {console.log(err)})
  }

  render() {
    return (
      <div>
        {this.state.movie ? 
          <div className="movie-detail__container">
            <img className="movie-detail__image" src={handleImage('w780', this.state.movie.poster_path)} alt={`poster do filme ${this.state.movie.title}`}/>
            <div className="movie-detail__info">
              <h1 className="movie-detail__title">{this.state.movie.title} {this.state.movie.title != this.state.movie.original_title ? ` (${this.state.movie.original_title})` : ''}</h1>
              {this.state.movie.genres.map(genre => <span className="movie-detail__genre">{genre.name}</span>)}
              <p className="movie-detail__overview">{this.state.movie.overview}</p>
              <p className="movie-detail__trivia">
                this movie was produced in {this.state.movie.production_countries.length === 1 ?
                  this.state.movie.production_countries[0].name :
                  this.state.movie.production_countries.map((country, index) => {
                    if(index === 0) {
                      return country.name
                    }
                    if((index + 1) === this.state.movie.production_countries.length) {
                      return `and ${country.name}`
                    }
                    return `, ${country.name}`
                  })
                }
                , with a budget of US$ {this.state.movie.budget} and was {this.state.movie.status} {this.state.movie.release_date ? `at ${this.state.movie.release_date}` : ''}
              </p>
              <h2 className="movie-detail__subtitle">Produced by:</h2>
              <ul className="movie-detail__productors">
                {this.state.movie.production_companies.map(company => {
                  return (
                    <li>
                      <img className="movie-detail__productor-logo" src={handleImage('w92', company.logo_path)} alt={`logo da produtora ${company.name}`}/>
                      <h3 className="movie-detail__productor-name">{company.name}</h3>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
          :
          ''
        }
      </div>
    )
  }
}