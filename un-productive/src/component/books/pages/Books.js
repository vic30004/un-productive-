import React, { Fragment, Component } from 'react';
import BooksItems from './BooksItems';
import Spinner from '../../layout/Spinner';
import PropTypes from 'prop-types';

const Books = ({ books, loading }) => {
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <Fragment>
        {books.map(data => (
          <BooksItems key={data.volumeInfo.title} books={data.volumeInfo} />
        ))}
      </Fragment>
    );
  }
};

export default Books;
