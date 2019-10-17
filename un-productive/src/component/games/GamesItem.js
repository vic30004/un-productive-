import React from 'react';
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom';


const GamesItem = ({games: {name, background_image}}) => {
  const finalName= name.replace(/[&\/\\#,+()$~%.'":*?<>{}-]/g, '').split(" ").join("").toLowerCase();
  ;
  return (
    <div >
      <h1>{name}</h1>
      {background_image && (<img src={background_image} alt='' />)}
      <Link to={`/unproductive/${finalName}`} className='btn btn-game'>
          Learn More
        </Link>
    </div>
  );
};

GamesItem.propTypes = {
    games: PropTypes.object.isRequired,
}

export default GamesItem;

