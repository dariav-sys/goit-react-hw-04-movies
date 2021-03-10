import axios from 'axios';
const key = '6f1c32f58bd439b838f8f392fdf2c4dc';

const fetchTrendingMovies = () => {
  return (
    axios
      .get(`https://api.themoviedb.org/3/trending/all/day?api_key=${key}`)
      //https://api.themoviedb.org/3/trending/all/day?api_key=<<api_key>> --------yes
      .then(({ data }) => data.results)
  );
};

const fetchMovieByName = query => {
  return axios
    .get(
      `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=${query}&page=1&include_adult=false`,
      //https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false -------yes
    )
    .then(({ data }) => data.results);
};

const fetchFullMovieInfo = id => {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=en-US`,
      //https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US ------yes
    )
    .then(response => response.data);
};

const fetchMovieCast = id => {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${key}&language=en-US`,
      //https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>>&language=en-US   ----yes
    )
    .then(response => {
      // console.log(response.data);
      return response.data.cast;
    });
};

const fetchMovieReviews = id => {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${key}&language=en-US&page=1`,
      //https://api.themoviedb.org/3/movie/{movie_id}/reviews?api_key=<<api_key>>&language=en-US&page=1 -----yes
    )
    .then(response => response.data.results);
};

const fetchData = id => {
  const fetchFullInfo = fetchFullMovieInfo(id);
  const fetchCast = fetchMovieCast(id);
  const fetchReviews = fetchMovieReviews(id);

  return Promise.all([fetchFullInfo, fetchCast, fetchReviews]);
};

export {
  fetchTrendingMovies,
  fetchMovieByName,
  fetchFullMovieInfo,
  fetchMovieCast,
  fetchMovieReviews,
  fetchData,
};
