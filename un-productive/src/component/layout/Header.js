import React, { Component } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'

export class Header extends Component {
  state = {
    text: '',
  };



onSubmitGame = (e) =>{
  e.preventDefault();
  console.log(this.state.text)
  this.props.searchGames(this.state.text);
  this.setState({text:''});
}
onSubmitBook = (e) =>{
  e.preventDefault();
  console.log(this.state.text)
  this.props.searchBooks(this.state.text);
  this.setState({text:''});
}

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <div id='header'>
        <div className='search-container'>
          <h1>Un||Productive</h1>
          <input
            type='text'
            name='text'
            id='search'
            placeholder='Search...'
            value={this.state.text}
            onChange={this.onChange}
          />

          <div className='submit'>
            <Link onClick={this.onSubmitBook} to='/books' className='btn btn-book'>
              Search Book
            </Link>
            <Link onClick={this.onSubmitGame} to="/games" className='btn btn-game'> Search Game</Link>
              
          
            <a href='#' className='btn btn-random'>
              Random
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
