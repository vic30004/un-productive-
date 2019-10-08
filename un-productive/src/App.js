import React, { Component } from 'react';
import Header from './component/layout/Header';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    let queryUrl =
      'https://gist.githubusercontent.com/vic30004/59d9abf8c119578210f486c53d953205/raw/c3670f660da5d9554ce4c5aae37e3144a701dd3d/cupcake.json';
    fetch(queryUrl)
      .then(res => res.json())
      .then(data => {console.log(data);
      this.setState({data:data})
      });
  }

  render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
}

export default App;
