import React, { Component } from 'react';
import GamesItem from './GamesItem';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types'


const Games = ({ games, loading }) => {
  if (loading) {
    return <Spinner/>
  } else {
    return (
      <div>
        <h1>Games</h1>
        <section className='container'>
          <div className='container'>
            {games.map(data => (
              <GamesItem key={data.name} games={data} />
            ))}
          </div>
        </section>
      </div>
    );
  }
};

Games.prototype={
  games: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
}

export default Games;
