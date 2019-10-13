import React, { useState, useContext } from 'react';
import Ugames from '../uGames/Ugames';
import UnproductiveContext from '../../../context/unproductive/UnproductiveContext';

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
    e.preventDefault();
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
      <form onSubmit={onSubmit}>
        <h2>Add Game</h2>
        <input
          type='text'
          placeholder='Game Name'
          name='game_name'
          value={game_name}
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
          placeholder='Release Date'
          name='release_date'
          value={release_date}
          onChange={onChange}
        />
        <input
          type='text'
          placeholder='Genre'
          name='genre'
          value={genre}
          onChange={onChange}
        />
        <input
          type='text'
          placeholder='Platform'
          name='platform'
          value={platform}
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
          <input type='submit' value='Add Game' className='btn btn-game' />
        </div>
      </form>

      <Ugames />
    </div>
  );
};

export default Form;
