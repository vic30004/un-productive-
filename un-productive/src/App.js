import React, {Component} from 'react';
import Header from './component/layout/Header';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
        <div>
          <Header/>
        </div>

    )
  }

}

export default App;