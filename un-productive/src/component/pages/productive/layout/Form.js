import React, { useState, useContext } from 'react';
import Pbooks from '../pBooks/Pbooks';
import ProductiveContext from '../../../context/productive/ProductiveContext';
import Navbar from '../../../layout/Navbar'

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
    if(author_name === '' || book_name==='' || date_published === '' || user_name === ''){
      return alert("Please fill out all the fileds")
    }
    window.location.reload();;
    productiveContext.addNewBook(pBooks);
    setPbook({
      author_name: '',
      book_name: '',
      picture: '',
      date_published: '',
      user_name: ''
    });
  };

  return (
    <div>
    <Navbar/>
    <div className="form-container">
      <form onSubmit={onSubmit}>
        <h2>Favorite Books</h2>
        <label >Author Name</label>
        <input
          type='text'
          placeholder='Author'
          name='author_name'
          value={author_name}
          onChange={onChange}
        />
        <label >Book Name</label>

        <input
          type='text'
          placeholder='Book'
          name='book_name'
          value={book_name}
          onChange={onChange}
        />
        <label > Picture</label>
        <input
          type='text'
          placeholder='https://picture.jpg'
          name='picture'
          value={picture}
          onChange={onChange}
        />
        <label>Date Published</label>
        <input
          type='text'
          placeholder='MM-DD-YY'
          name='date_published'
          value={date_published}
          onChange={onChange}
        />
        <label>Username</label>
        <input
          type='text'
          placeholder='Username'
          name='user_name'
          value={user_name}
          onChange={onChange}
        />

        <div>
          <input type='submit' value='Add Book' className='btn btn-random' />
        </div>
        
      </form>
      </div>
      <Pbooks />
    </div>
  );
};

export default Form;
