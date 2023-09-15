import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Featured = () => {
  const [topMovies, setTopMovies] = useState([]);
  const [movieLikes, setMovieLikes] = useState({});

  useEffect(() => {
    const apiKey = '2d8e239bcc218a755fba1f6e6fd6879e';
    const apiUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`;

    axios.get(apiUrl)
      .then(response => {
        const topTen = response.data.results.slice(0, 10);
        setTopMovies(topTen);
        const initialLikes = {};
        topTen.forEach(movie => {
          initialLikes[movie.id] = false;
        });
        setMovieLikes(initialLikes);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleMovieLike = (movieId) => {
    setMovieLikes(prevLikes => ({
      ...prevLikes,
      [movieId]: !prevLikes[movieId],
    }));
  };

  if (!topMovies) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div>
      <div className="movie-list">
        {topMovies.map((movie) => (
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
        ))}
      </div>
    </div>
  );
}

export default Featured;
