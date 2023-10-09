import axios from '../../api/axios';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './SearchPage.css';
import { useDebounce } from '../../hooks/useDebounce';

const SearchPage = () => {
  const navigate = useNavigate();
  const [searchResult, setSearchResult] = useState({});
  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };
  let query = useQuery();
  const debouncedSearchTerm = useDebounce(query.get('q'), 1000);

  useEffect(() => {
    if (debouncedSearchTerm) {
      fetchSearchMovie(debouncedSearchTerm);
    }
  }, [debouncedSearchTerm]);

  const fetchSearchMovie = async (searchTerm) => {
    try {
      const response = await axios.get(`/search/multi?include_adult=true&query=${searchTerm}`);
      console.log(response);
      setSearchResult(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };
  if (searchResult.length > 0) {
    return (
      <section className='search-container'>
        {searchResult.map((movie) => {
          if (movie.backdrop_path != null && movie.media_type !== 'person') {
            const movieImageUrl = 'https://image.tmdb.org/t/p/w500' + movie.backdrop_path;
            return (
              <div className='movie' key={movie.id}>
                <div className='movie__column-poster' onClick={() => navigate(`/${movie.id}`)}>
                  <img src={movieImageUrl} alt='movie' className='movie__poster' />
                </div>
              </div>
            );
          }
          return <></>;
        })}
      </section>
    );
  } else {
    return (
      <section className='no-results'>
        <div className='no-results__text'>
          <p>검색하신 {debouncedSearchTerm}는 존재하지 않는 영화입니다.</p>
        </div>
      </section>
    );
  }
};

export default SearchPage;
