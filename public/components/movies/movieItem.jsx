import React from 'react';
import handleImage from '../../services/handleImages.jsx';

export default ( props ) => {
  return (
    <li class="movie-item">
      <img class="movie-item__image" src={handleImage('w342',props.image)} />

      <div class="movie-item__info">
        <h3 class="movie-item__title">{props.title}</h3>

        <div class="movie-item__icons">
          <span class="movie-item__note">{props.vote}</span>
        </div>

        <p class="movie-item__overview">{props.overview}</p>
      </div>
    </li>
  )
}
