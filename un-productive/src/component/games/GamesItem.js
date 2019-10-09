import React from 'react';
import PropTypes from 'prop-types'


const GamesItem = ({games: {name, background_image}}) => {
  return (
    <div className='card'>
      <h1>{name}</h1>
      <img src={background_image} alt='' />
    </div>
  );
};

GamesItem.propTypes = {
    games: PropTypes.object.isRequired,
}

export default GamesItem;
