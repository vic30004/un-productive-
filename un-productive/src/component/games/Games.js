import React, { Fragment, Component } from 'react';
import GamesItem from './GamesItem';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';

const Games = ({ games, loading }) => {
 
    return (
      <div className="contnent-container">
        {games.map(data => (
          <GamesItem key={data.name} games={data} />
        ))}
      </div>
    );
  
};

Games.prototype = {
  games: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
};

export default Games;
