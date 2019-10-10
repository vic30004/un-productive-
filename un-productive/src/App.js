import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './component/layout/Header';
import Body from './component/layout/Body';
import Games from './component/games/Games';
import Books from './component/books/pages/Books';
import SearchGame from './component/games/pages/SearchGame';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      games: [],
      loading: false
    };
  }

  // componentWillMount() {
  //   this.setState({ loading: true });
  //   let queryUrl = `https://api.rawg.io/api/games?page_size=15`;
  //   fetch(queryUrl)
  //     .then(res => res.json())
  //     .then(data => {
  //       console.log(data.results);
  //       this.setState({ games: data.results, loading: false });
  //       console.log(this.state.games);
  //     });
  //   console.log(this.state.games);
  // }

  //search games
  searchGames = text => {
    console.log(text);
    let queryUrl = `https://api.rawg.io/api/games?page_size=9&search=${text}`;
    fetch(queryUrl)
      .then(res => res.json())
      .then(data => {
        console.log(data.results);
        this.setState({ games: data.results });
      });
  };
  //search books
  searchBooks = text => {
    let queryUrl = `https://www.googleapis.com/books/v1/volumes?q=${text}&key=${process.env.REACT_APP_GOOGLE_KEY}`;
    fetch(queryUrl)
      .then(res => res.json())
      .then(data => {
        console.log(data.items);
        this.setState({ books: data.items });
      });
  };

  render() {
    const { loading, games, books } = this.state;
    return (
      <Router>
        <div>
          <Switch>
            <Route
              exact
              path='/'
              render={props => (
                <div>
                  <Header
                    searchGames={this.searchGames}
                    searchBooks={this.searchBooks}
                  />
                  <div className='container'>
                    <Games className="card" loading={loading} games={games} />
                    <Books loading={loading} books={books} />
                  </div>
                </div>
              )}
            />
          </Switch>
          <Route exact path='/game/:name' Component={SearchGame} />
        </div>
      </Router>
    );
  }
}

export default App;
