import React from 'react';
import PropTypes from 'prop-types';


const pBooksItems = ({ books }) => {
    const { author_name, book_name, picture, date_published, user_name } = books
    return (
        <div class="book-card">
        <a href="#">
            <figure style={{backgroundImage:`url('${picture}')`}}>
                <div class="date"><span class="card-date-day">{date_published}</span></div>
                <figcaption>
                    <h4> <span>{book_name}</span></h4>
                    <p>{author_name}</p>
            <p>{user_name}</p>
                </figcaption>
            </figure></a>
            </div>
        
           
    )
}

  
  return (
    <div>
      <div className='bPic'>
        <img src={picture} alt='' />
      </div>
      <div className='content'>
        <h3>
          Book:<span>{book_name}</span>
        </h3>
        <h3>Author: {author_name}</h3>
        <h3>Date Published: {date_published}</h3>
        <h3>Added by: {user_name}</h3>
      </div>
    </div>
  );


export default pBooksItems;
