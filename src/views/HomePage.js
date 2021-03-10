import React, { Component } from 'react';
import MoviesList from '../components/MoviesList/MoviesList';
import { fetchTrendingMovies } from '../services/FetchMovies';

export default class HomePage extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    fetchTrendingMovies().then(movies =>
      this.setState({
        movies: [...movies],
      }),
    );
  }

  render() {
    const { movies } = this.state;

    return (
      <>
        <MoviesList className="MoviesList" movies={movies} />
      </>
    );
  }
}
