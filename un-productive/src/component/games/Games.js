import React, { Fragment,Component } from 'react';
import GamesItem from './GamesItem';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types'


const Games = ({ games, loading }) => {
  if (loading) {
    return <Spinner/>
  } else {
    return (
      <Fragment>
        <h1>Games</h1>
    
            {games.map(data => (
              <GamesItem key={data.name} games={data} />
            ))}

      </Fragment>
    );
  }
};

Games.prototype={
  games: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
}

export default Games;
