import React from 'react';
import PropTypes from 'prop-types';

const BooksItems = ({ books: { title, imageLinks } }) => {
  return (
    <section id='books'>
      <div className='card'>
        <h2 className='title'>{title}</h2>
        <img src={imageLinks.thumbnail} alt='' />
        <a href='#' className='btn btn-book'>
          Learn More
        </a>
      </div>
    </section>
  );
};

BooksItems.propTypes = {
  books: PropTypes.object.isRequired
};

export default BooksItems;
