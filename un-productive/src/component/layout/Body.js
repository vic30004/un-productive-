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
        <h1>Bestsellers</h1> <span><a href="#" className="btn btn-books">More books</a></span>
        <div className="container">
    {this.state.books.map(data =>{
        return (
            <div className="card" key={data.title}>
                <h2 className="title">{data.title}</h2>
                <img src={data["book_image"]} alt=""/>
                <a href="#" className="btn btn-book">Learn More</a>
            </div>
        )
    })}
        </div>
        <section>
        <h1>Games</h1>
            <Games/>
        
        </section>
    </section>

    )
  }
}

export default Body;
