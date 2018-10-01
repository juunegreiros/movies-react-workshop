import React from 'react';
import handleImage from '../../services/handleImages.jsx';

export default ( props ) => {
  return (
    <li className="movie-item">
      <img className="movie-item__image" src={handleImage('w342',props.image)} />

      <div className="movie-item__info">
        <h3 className="movie-item__title">{props.title}</h3>

        <div className="movie-item__icons">
          <span className="movie-item__note">{props.vote}</span>
        </div>

        <p className="movie-item__overview">{props.overview}</p>
      </div>
    </li>
  )
}
