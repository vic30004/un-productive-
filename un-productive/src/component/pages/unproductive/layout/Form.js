import React, { useState, useContext } from 'react';
import Ugames from '../uGames/Ugames';
import UnproductiveContext from '../../../context/unproductive/UnproductiveContext';
import Navbar from '../../../layout/Navbar'


const Form = () => {
  const unproductiveContext = useContext(UnproductiveContext);
  const [uGames, setUgame] = useState({
    game_name: '',
    picture: '',
    release_date: '',
    genre: '',
    platform: '',
    user_name: ''
  });
  const {
    game_name,
    picture,
    release_date,
    genre,
    platform,
    user_name
  } = uGames;

  const onChange = e =>
    setUgame({ ...uGames, [e.target.name]: [e.target.value] });

  const onSubmit = e => {
    if(game_name === '' || picture === '' || release_date=== '' || genre === ''|| platform===''|| user_name ===''){
      return alert("Please fill out all the fileds")
    }
    window.location.reload();
    unproductiveContext.addNewGame(uGames);
    setUgame({
      game_name: '',
      picture: '',
      release_date: '',
      genre: '',
      platform: '',
      user_name: ''
    });
  };

  return (
    <div>
    <Navbar/>
    <div className="form-container">
      <form onSubmit={onSubmit}>
        <h2>Favorite Games</h2>
        <label>Game</label>
        <input
          type='text'
          placeholder='Game Name'
          name='game_name'
          value={game_name}
          onChange={onChange}
        />
        <label>Picture</label>
        <input
          type='text'
          placeholder='https://picture.jpg'
          name='picture'
          value={picture}
          onChange={onChange}
        />
        <label>Release Date</label>
        <input
          type='text'
          placeholder='Release Date'
          name='release_date'
          value={release_date}
          onChange={onChange}
        />
        <label>Genre</label>
        <input
          type='text'
          placeholder='Genre'
          name='genre'
          value={genre}
          onChange={onChange}
        />
        <label>Platform</label>
        <input
          type='text'
          placeholder='Platform'
          name='platform'
          value={platform}
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
          <input type='submit' value='Add Game' className='btn btn-game' />
        </div>
      </form>
      </div>
      <Ugames />
    </div>
  );
};

export default Form;
