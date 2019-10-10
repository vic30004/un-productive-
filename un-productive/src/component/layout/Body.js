import React, { Component } from 'react';
import Games from '../games/Games'


class Body extends Component {
    constructor(props){
        super(props)
      this.state = {
    books: []
  };  
    }
  


  render() {
    return (
    <section id="books">
  <h1>Games</h1>
    </section>

    )
  }
}

export default Body;
