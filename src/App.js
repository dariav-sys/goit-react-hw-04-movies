import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from './routes.js';
import AppBar from './components/AppBar/AppBar.js';

import './index.css';

const HomePage = lazy(() =>
  import('./views/HomePage.js' /* webpackChunkName: "HomePage" */),
);
const MoviesPage = lazy(() =>
  import('./views/MoviesPage.js' /* webpackChunkName: "MoviesListPage" */),
);
const MovieDetailsPage = lazy(() =>
  import(
    './views/MovieDetailsPage.js' /* webpackChunkName: "MovieDetailsPage" */
  ),
);
const Notfound = lazy(() =>
  import('./views/NotFound.js' /* webpackChunkName: "NotFound" */),
);

const App = () => (
  <>
    <AppBar />
    <Suspense fallback={<h1>Loading...</h1>}>
      <Switch>
        <Route exact path={routes.home} component={HomePage} />
        <Route exact path={routes.moviesList} component={MoviesPage} />
        <Route path={routes.movieId} component={MovieDetailsPage} />
        <Route component={Notfound} />
      </Switch>
    </Suspense>
  </>
);

export default App;
