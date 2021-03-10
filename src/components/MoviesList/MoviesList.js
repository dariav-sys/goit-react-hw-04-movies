import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

const MoviesList = ({ movies = [], location }) => (
  <>
    <ul>
      {movies.map(({ id, title, name }) => (
        <li key={id}>
          <NavLink
            to={{
              pathname: `movies/${id}`,
              state: {
                from: location,
              },
            }}
          >
            {title ? title : name}
          </NavLink>
        </li>
      ))}
    </ul>
  </>
);

export default withRouter(MoviesList);
