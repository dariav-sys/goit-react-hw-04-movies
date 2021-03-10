import React, { Component } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import routes from '../routes.js';

import Notfound from '../images/Notfound_img.png';

import { fetchData } from '../services/FetchMovies';
import Reviews from '../components/Reviews/Reviews';
import Cast from '../components/Cast/Cast';

export default class MovieDetailsPage extends Component {
  state = {
    movie: {},
    cast: [],
    reviews: [],
  };

  componentDidMount() {
    const { movieId } = this.props.match.params;

    fetchData(movieId).then(([movie, cast, reviews]) =>
      this.setState({ movie, cast, reviews }),
    );
  }

  handleButtonBack = () => {
    const { history, location } = this.props;
    history.push(location?.state?.from ?? routes.home);
  };

  render() {
    const {
      title,
      vote_average,
      overview,
      genres,
      poster_path,
    } = this.state.movie;
    const { url, path } = this.props.match;

    const poster = `https://image.tmdb.org/t/p/w300${poster_path}`;
    return (
      <>
        <button
          type="button"
          className="Back_button"
          onClick={this.handleButtonBack}
        >
          Back
        </button>
        <div className="Movie_info">
          <img
            className="Poster"
            src={poster_path ? poster : Notfound}
            alt={title}
          />
          <div className="Movie_about">
            <h2>{title}</h2>
            <p>Rate: {vote_average}</p>
            <h3>Overview: </h3>
            <p>{overview}</p>

            <h3>Genre</h3>
            <div className="Movie_genres">
              {genres &&
                genres.map(genre => <p key={genre.id}>{genre.name}</p>)}
            </div>
          </div>
        </div>

        <ul className="Additional">
          <h3>Additional information: </h3>
          <li>
            <NavLink
              to={{
                pathname: `${url}/cast`,
                state: { from: this.props.location?.state?.from },
              }}
              className="NavLink"
              activeClassName="NavLink_active"
            >
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink
              to={{
                pathname: `${url}/reviews`,
                state: { from: this.props.location?.state?.from },
              }}
              className="NavLink"
              activeClassName="NavLink_active"
            >
              Reviews
            </NavLink>
          </li>
        </ul>

        <Switch>
          <Route
            path={`${path}/cast`}
            render={() => <Cast cast={this.state.cast} />}
          />
          <Route
            path={`${path}/reviews`}
            render={() => <Reviews reviews={this.state.reviews} />}
          />
        </Switch>
      </>
    );
  }
}
