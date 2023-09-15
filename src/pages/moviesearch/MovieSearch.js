import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import Search from "../Homepage/Header/SearchBar"

const SearchResults = () => {
  const { query } = useParams();
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_KEY = '2d8e239bcc218a755fba1f6e6fd6879e';
  const BASE_URL = 'https://api.themoviedb.org/3/search/movie';

  useEffect(() => {
    const fetchSearchResults = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get(BASE_URL, {
          params: {
            api_key: API_KEY,
            query: query,
          },
        });

        setSearchResults(response.data.results);
        setLoading(false);
      } catch (error) {
        setError('Error fetching search results');
        setLoading(false);
      }
    };

    if (query) {
      fetchSearchResults();
    }
  }, [query]);


  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {searchResults.length <= 0 && (
        <div className="loading">
            <h2>Movie not found.</h2> 
            <button>
                <Link to={`/`}>
                <span>Go Back</span>
                </Link>
            </button>
        </div>
      
      )}
      {searchResults.length > 0 && (
        <div className='search-results'>
            <div className="nav">
                <Link to={`/`} className="custom-link">
                <div className="header-logo">
                    <div className="logo"></div>
                    <span>MovieBox</span>
                </div>
                </Link>
                <Search />
                <div className="menu-box">
                    <div className="sign-in">Sign in</div>
                    <div className="menu">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M3.59998 8.40001C3.59998 7.73727 4.13723 7.20001 4.79998 7.20001H19.2C19.8627 7.20001 20.4 7.73727 20.4 8.40001C20.4 9.06275 19.8627 9.60001 19.2 9.60001H4.79998C4.13723 9.60001 3.59998 9.06275 3.59998 8.40001Z" fill="white"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M3.59998 15.6C3.59998 14.9373 4.13723 14.4 4.79998 14.4H19.2C19.8627 14.4 20.4 14.9373 20.4 15.6C20.4 16.2628 19.8627 16.8 19.2 16.8H4.79998C4.13723 16.8 3.59998 16.2628 3.59998 15.6Z" fill="white"/>
                        </svg>
                    </div>
                </div>
            </div>
      
            <div className='featured'>
                <h2>Search Results for "{query}"</h2>
                <div className="movie-list">
                    {searchResults.map((movie) => (
                    <div key={movie.id} className="movie-card">
                        <Link to={`/movies/${movie.id}`}>
                            <img
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            alt={movie.title}
                            className="poster-img"
                            />
                        </Link>
                        <h3>{movie.title}</h3>
                        <p>{movie.release_date}</p>
                    </div>
                    ))}
                </div>
            </div>
        </div>
      )}
    </div>
  );
};

export default SearchResults;
