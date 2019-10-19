import React from 'react';
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom';


const GamesItem = ({games: {name, background_image}}) => {
  const finalName= name.replace(/[&\/\\#,+()$~%.'":*?<>{}-]/g, '').split(" ").join("").toLowerCase();
  ;
  return (
    <section id="game" >
    <div className="front">
    {background_image && (<img src={background_image} alt='' />)}
    </div>
    <div className="back">
    <div className="see-container">
                <div className="see"></div>
                <div className="see"></div>
                <div className="see"></div>
                <div className="see"></div>
            </div>
    <div className="back-content">
    <h1>{name}</h1>
      
      <Link to={`/unproductive/${finalName}`} className='btn btn-game'>
          Learn More
        </Link>
    </div>
    </div>
      
    </section>
  );
};

GamesItem.propTypes = {
    games: PropTypes.object.isRequired,
}

export default GamesItem;

