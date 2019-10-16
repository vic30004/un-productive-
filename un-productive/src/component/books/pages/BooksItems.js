import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const BooksItems = ({ books: { title, imageLinks } }) => {
  return (
    <section id='books'>
      <div className="card">
        <h2 className='title'>{title}</h2>
        <img src={imageLinks.thumbnail} alt='' />
        <Link to={`/productive/${title}`} className='btn btn-book'>
          Learn More
        </Link>
      </div>
    </section>
  );
};

BooksItems.propTypes = {
  books: PropTypes.object.isRequired
};

export default BooksItems;
