import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Notfound from '../../images/Notfound_img.png';

const Cast = ({ cast }) => {
  // console.log(cast);
  return (
    <ul className="Cast_card">
      {cast.map(({ name, profile_path, character }) => {
        const profilePic = `https://image.tmdb.org/t/p/w300${profile_path}`;
        return (
          <li key={uuidv4()} className="Cast_card_item">
            <img
              className="Cast_img"
              src={profile_path ? profilePic : Notfound}
              alt={name}
            />
            <p className="Cast_name">{name}</p>
            <p>Character: {character}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default Cast;
