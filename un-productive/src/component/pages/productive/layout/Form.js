import React, { useState, useContext } from 'react';
import Pbooks from '../pBooks/Pbooks';
import ProductiveContext from '../../../context/productive/ProductiveContext';

const Form = () => {
  const productiveContext = useContext(ProductiveContext);
  const [pBooks, setPbook] = useState({
    author_name: '',
    book_name: '',
    picture: '',
    date_published: '',
    user_name: ''
  });
  const { author_name, book_name, picture, date_published, user_name } = pBooks;

  const onChange = e =>
    setPbook({ ...pBooks, [e.target.name]: [e.target.value] });

    const onSubmit = e => {
        e.preventDefault();
        productiveContext.addNewBook(pBooks);
        setPbook ({
            author_name: '',
            book_name: '',
            picture: '',
            date_published: '',
            user_name: '' 
        })
    }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <h2>Add Book</h2>
        <input
          type='text'
          placeholder='Author Name'
          name='author_name'
          value={author_name}
          onChange={onChange}
        />
        <input
          type='text'
          placeholder='Book Name'
          name='book_name'
          value={book_name}
          onChange={onChange}
        />
        <input
          type='text'
          placeholder='Picture'
          name='picture'
          value={picture}
          onChange={onChange}
        />
        <input
          type='text'
          placeholder='Date Published'
          name='date_published'
          value={date_published}
          onChange={onChange}
        />
        <input
          type='text'
          placeholder='Full Name'
          name='user_name'
          value={user_name}
          onChange={onChange}
        />
        <div>
          <input type='submit' value='Add Book' className='btn btn-book' />
        </div>
      </form>

      <Pbooks />
    </div>
  );
};

export default Form;
