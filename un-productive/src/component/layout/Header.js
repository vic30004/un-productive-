import React, { Component } from 'react';
import axios from 'axios'

export class Header extends Component {
  state = {
    text: '',
  };

//   onSubmit = e => {
//     e.preventDefault();
//     this.props.searchGames(this.state.text);
  
//       this.setState({text:''})
//   };

onSubmit = () =>{
//     let queryUrl =
//     `https://api.rawg.io/api/games?page_size=5&search=${this.state.text}`;
//   fetch(queryUrl)
//     .then(res => res.json())
//     .then(data => {console.log(data.results)
//     this.setState({games:data})
//     })
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
            <a href='#' className='btn btn-book'>
              Search Book
            </a>
            <a onClick={this.onSubmit} href='#' className='btn btn-game'>
              Search Game
            </a>
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
