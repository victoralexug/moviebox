import React from 'react';
import { Link } from "react-router-dom";

function MovieCard({ movie, handleMovieLike, movieLikes }) {
    return (
        <div>
            <div className="movie-card" key={movie.id} data-testid="movie-card">
            <div className="poster" data-testid="movie-poster">
              <div className="poster-rating">
                <div className="tv-series">
                  <span>TV SERIES</span>
                </div>
                <div className="favorite" onClick={() => handleMovieLike(movie.id)}>
                  <div className="heart">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path fillRule="evenodd" clipRule="evenodd" d="M3.17157 5.48284C4.73367 3.96185 7.26633 3.96185 8.82842 5.48284L9.99999 6.62359L11.1716 5.48284C12.7337 3.96185 15.2663 3.96185 16.8284 5.48284C18.3905 7.00383 18.3905 9.46984 16.8284 10.9908L9.99999 17.6396L3.17157 10.9908C1.60948 9.46984 1.60948 7.00383 3.17157 5.48284Z" fill={movieLikes[movie.id] ? "#ff0000" : "#D1D5DB"} />
                    </svg>
                  </div>
                </div>
              </div>
              <Link to={`/movies/${movie.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className="poster-img"
                />
              </Link>
            </div>
            <div className="movie-detail" data-testid="movie-release-date">
              <span>{movie.release_date}</span>
            </div>
            <div className="movie-title" data-testid="movie-title">
              <span>{movie.title}</span>
            </div>
            <div className="movie-rating">
              <div className="imdb">
                <div className="imdb-img"></div>
                <span>{movie.vote_average.toFixed(1) * 10}.0 / 100</span>
              </div>
              <div className="rotten-tomatoes">
                <div className="rotten-tomatoes-img"></div>
                <span>{movie.vote_average.toFixed(1) * 10}%</span>
              </div>
            </div>
            <div className="movie-category">
              <span>{movie.name}</span>
            </div>
          </div>
        </div>
    );
}

export default MovieCard;