import React, { Component } from 'react';
import Header from './component/layout/Header';
import Body from './component/layout/Body';
import Games from './component/games/Games';
import axios from 'axios'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      games:[],
      loading: false,
    };
  }
  
  // Search Games

 


  

  render() {
    return (
      <div>
        <Header searchGames={this.searchGames}/>
        <Body/>
     
      </div>
    );
  }
}

export default App;
