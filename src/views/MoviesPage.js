import React, { Component } from 'react';
import MoviesList from '../components/MoviesList/MoviesList';
import { fetchMovieByName } from '../services/FetchMovies';

export default class MoviesPage extends Component {
  state = {
    movies: [],
    query: '',
  };

  componentDidMount() {
    if (this.props.location.search) {
      const { query } = Object.fromEntries(
        new URL(window.location).searchParams.entries(),
      );
      fetchMovieByName(query).then(movies =>
        this.setState({
          movies,
        }),
      );
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location.search !== this.props.location.search) {
      fetchMovieByName(this.state.query).then(movies =>
        this.setState({
          movies,
        }),
      );
    }
  }

  onHandleChange = e => {
    this.setState({ query: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.history.push({
      pathname: this.props.location.pathname,
      search: `?query=${this.state.query}`,
    });
  };

  render() {
    const { movies, query } = this.state;
    return (
      <>
        <form onSubmit={this.onSubmit}>
          <input type="text" value={query} onChange={this.onHandleChange} />
          <button type="submit" className="Button">
            Search
          </button>
        </form>
        {movies.length > 0 && <MoviesList movies={movies} query={query} />}
      </>
    );
  }
}
