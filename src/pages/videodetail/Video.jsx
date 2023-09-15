import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import './video.css';


const Video = () => {
  // Extract movie id from URL using useParams
  const { id } = useParams();

  // State variables to hold movie data and related information
  const [movieDetails, setMovieDetails] = useState(null);
  const [trailerKey, setTrailerKey] = useState(null);
  const [genres, setGenres] = useState([]);
  
  const API_KEY = "2d8e239bcc218a755fba1f6e6fd6879e";

  // Effect to fetch movie details and related data
  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
        );
        setMovieDetails(response.data);

        // Fetch movie trailer information
        const trailerResponse = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`
        );

        const officialTrailers = trailerResponse.data.results.filter(
          (video) => video.type === "Trailer"
        );

        if (officialTrailers.length > 0) {
          setTrailerKey(officialTrailers[0].key);
        }

        setGenres(response.data.genres);
      } catch (error) {
        if (error.response && error.response.status === 404) {
        } else {
          console.error("Error fetching movie details: ", error);
        }
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (!movieDetails) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="container">

      <div className="main-container">
        <div>
          <div className="trailer">
            {trailerKey && (
              <iframe
                title="Trailer"
                width="100%"
                height="450"
                src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1`}
                allowFullScreen
              ></iframe>
            )}
          </div>

          <div className="movie-data">
            <div className="movie-details">
              <div className="main-info">
                <div className="movie-title">
                  <span data-testid="movie-title">{movieDetails.title}</span>
                </div>

                <div className="release-date">
                  <span data-testid="movie-release-date">
                    {movieDetails.release_date}
                  </span>
                </div>

                <div className="runtime-container">
                  <span data-testid="movie-runtime">
                    {movieDetails.runtime} minutes
                  </span>
                </div>

                <div className="genre">
                  {genres.length > 0 && (
                    <div className="genre-list">
                      {genres.map((genre) => (
                        <p key={genre.id}>{genre.name}</p>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="overview-container">
                <span data-testid="movie-overview">
                  {movieDetails.overview}
                </span>
              </div>
            </div> 

            <div className="small-poster-details">
              <div className="small-poster">
                <img
                  src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
                  alt={movieDetails.title}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
