import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Alert from './Alert';
import { Link } from 'react-router-dom';
import Un__producitve from './../../images/Un__productive.png'
export class Header extends Component {
  state = {
    text: ''
  };

  static propTypes = {
    searchGames: PropTypes.func.isRequired,
    searchBooks: PropTypes.func.isRequired,
    clear: PropTypes.func.isRequired,
    showClearGames: PropTypes.bool.isRequired,
    showClearBooks: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired
  };



  onSubmitGame = e => {
    e.preventDefault();
    if (this.state.text === '') {
      this.props.setAlert('Please enter something', 'light');
    } else {
      this.props.searchGames(this.state.text);
      this.setState({ text: '' });
    }
  };
  onSubmitBook = e => {
    e.preventDefault();
    if (this.state.text === '') {
      this.props.setAlert('Please enter something', 'light');
    } else {
      this.props.searchBooks(this.state.text);
      this.setState({ text: '' });
    }
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { showClearBooks, showClearGames, onSearchChange,searchfield } = this.props;
    return (
      <div id='header'>
        <nav className='nav-bar'>
          <ul>
            <li>
              <Link to="/" >Home</Link>{' '}
            </li>
            <li>
              <Link to="/productive">Productive</Link>{' '}
            </li>
            <li>
              <Link to='/unproductive'>Unproductive</Link>{' '}
            </li>
          </ul>
        </nav>
        

        <div className='search-container'>
          <h1>un||productive</h1>
          <Alert alert={this.props.alert} />
          <input
            type='text'
            name='text'
            id='search'
            placeholder='Search...'
            value={this.state.text}
            onChange={this.onChange}
            
          />

          <div className='submit'>
            <Link
              onClick={this.onSubmitBook}
              to='/books'
              className='btn btn-book'
            >
              Search Book
            </Link>
            <Link
              onClick={this.onSubmitGame}
              to='/games'
              className='btn btn-game'
            >
              {' '}
              Search Game
            </Link>
{showClearGames && <button className="btn btn-random" onClick={this.props.clear}>Clear</button>}
        {showClearBooks && <button className="btn btn-random" onClick={this.props.clear}>Clear</button>}
          </div>
        </div>
       
      </div>
    );
  }
}

export default Header;
