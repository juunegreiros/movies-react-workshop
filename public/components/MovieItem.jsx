import React from 'react';
import { Link } from 'react-router-dom';
import handleImage from '../services/handleImages'

export default (props) => {
  return (
    <li className="movie-item">
      <Link to={`/movie/${props.movieId}`} className="movie-item__link">
        <img className="movie-item__image" src={handleImage('w342',props.image)} />

        <div className="movie-item__info">
          <h3 className="movie-item__title">{props.title}</h3>

          <div className="movie-item__icons">
            <span className="movie-item__note">{props.vote}</span>
          </div>

          <p className="movie-item__overview">{props.overview}</p>
        </div>
      </Link>
    </li>
  )
}