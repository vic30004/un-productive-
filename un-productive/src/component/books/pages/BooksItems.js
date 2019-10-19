import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const BooksItems = ({ books: { title, imageLinks, authors,description } }) => {
  return (
    <section id='books'>
      <div className='front'>
        <img src={imageLinks.thumbnail} alt='' />
      </div>
      <div className="back">
      <div className='back-content'>
        {title && (<h2 className='title'>{title}</h2>)}
        <div className="author"><i>By:{authors}</i></div>
        <div className="description">{description}</div>
        <Link to={`/productive/${title}`} className='btn btn-book'>
          Learn More
        </Link>
      </div>
      </div>
    </section>
  );
};
BooksItems.propTypes = {
  books: PropTypes.object.isRequired
};
export default BooksItems;
