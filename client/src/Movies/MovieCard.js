import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = props => {

  const { id, title, director, metascore, stars } = props.movie;

  // Uncomment this only when you have moved on to the stretch goals
  const saveMovie = () => {
    const addToSavedList = props.addToSavedList;
    addToSavedList(props.movie)
  }

  return (
    <div className="save-wrapper">
      <div className="movie-card">
        <Link to={`/movies/${id}`} >
          <h2>{title}</h2>
        </Link>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
        <h3>Actors</h3>

        {stars.map(star => (
          <div key={star} className="movie-star">
            {star}
          </div>
        ))}
      </div>
      <div className="save-button" onClick={e => saveMovie()}>Save</div>
    </div>
  );
};

export default MovieCard;
