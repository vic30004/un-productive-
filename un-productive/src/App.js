import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './component/layout/Header';
import Games from './component/games/Games';
import Books from './component/books/pages/Books';
import SearchGame from './component/games/pages/SearchGame';
import Productive from './component/pages/productive/Productive';
import Unproductive from './component/pages/unproductive/Unproductive';
import ProductiveState from './component/context/productive/ProductiveState';
import UnproductiveState from './component/context/unproductive/UnproductiveState';
import SingleBook from './component/books/singlebook/SingleBook'
import SingleGame from './component/games/singlegame/SingleGame'
import Body from './component/layout/Body'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      games: [],
      loading: false,
      alert: null,
      singleBook: [],
      singleGame:[],
      searchfield: '',
      test: [],
    };
  }

  componentWillMount() {
    this.setState({ loading: true });
    let queryUrl = `https://api.rawg.io/api/games?page_size=15`;
    fetch(queryUrl)
      .then(res => res.json())
      .then(data => {
        console.log(data.results);
        this.setState({ games: data.results, loading: false });
        console.log(this.state.games);
      });
    console.log(this.state.games);
  }

  // Get single Book

  getBook =(book) =>{
    this.setState({loading: true})
    let queryUrl = `https://www.googleapis.com/books/v1/volumes?q=${book}&maxResults=1&key=${process.env.REACT_APP_GOOGLE_KEY}`;
    fetch(queryUrl)
      .then(res => res.json())
      .then(data => {
        console.log(data.items);

        this.setState({ singleBook: data.items, loading:false });
      });
  }

  // Get Single Game
  getGames = game => {
    this.setState({loading: true})
    console.log(game);
    let queryUrl = `https://api.rawg.io/api/games/${game}`;
    fetch(queryUrl)
      .then(res => res.json())
      .then(data => {
        console.log(data.results);
        this.setState({ singleGame: data,  loading:false });
      });
  };

  // filter Game

 

  //search games
  searchGames = text => {
    this.setState({loading: true})
    console.log(text);
    let queryUrl = `https://api.rawg.io/api/games?page_size=9&search=${text}`;
    fetch(queryUrl)
      .then(res => res.json())
      .then(data => {
        console.log(data.results);
        this.setState({ games: data.results, books: [], loading:false });
      });
  };
  //search books
  searchBooks = text => {

    this.setState({loading: true})

    let queryUrl = `https://www.googleapis.com/books/v1/volumes?q=${text}&key=${process.env.REACT_APP_GOOGLE_KEY}`;

    fetch(queryUrl)
      .then(res => res.json())
      .then(data => {
        console.log(data.items);

        this.setState({ books: data.items, games: [],loading:false });
      });
  };

  // clear search
  clear = () => {
    this.setState({ books: [], loading: false, games: [] });
  };

  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type } });
    setTimeout(() => this.setState({ alert: null }), 5000);
  };

  render() {
    console.log(this.state.searchfield)
    
    const { loading, games, books, alert,singleBook,singleGame,} = this.state;
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
                    clear={this.clear}
                    showClearGames={this.state.games.length > 0 ? true : false}
                    showClearBooks={this.state.books.length > 0 ? true : false}
                    setAlert={this.setAlert}
                    alert={alert}
                  />
                  <Fragment>
  
                    <Games  loading={loading} games={games} />

                    <Books loading={loading} books={books} />
                  </Fragment>
                </div>
              )}
            />
            <Route exact path='/productive' component={Productive} />
            <Route exact path='/unproductive' component={Unproductive} />
            <Route  path ='/productive/:book' render={props=>(
              <SingleBook  {...props} getBook={this.getBook} book={singleBook} loading={loading}/>
            )}/>
            <Route path ='/unproductive/:game' render={props=>(
              <SingleGame {...props} getGames={this.getGames} game={singleGame} loading={loading}/>
            )}/>
              
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
