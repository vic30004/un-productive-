import React, { Component } from 'react';
import Games from '../games/Games'


class Body extends Component {
    constructor(props){
        super(props)
      this.state = {
    books: []
  };  
    }
  
  componentDidMount() {
    let queryUrl =
      'https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=al4ODs5BxXbM3ab3RBGmIsl5c5ArdKT2';
    fetch(queryUrl)
      .then(res => res.json())
      .then(data => {
      this.setState({books:data.results.books})
      })
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
