import React, { Component } from 'react';



class Games extends Component {
    
state= {
    games:[],
}

componentWillMount(){
    this.setState({loading:true})
      let queryUrl =
      `https://api.rawg.io/api/games?page_size=15`;
    fetch(queryUrl)
      .then(res => res.json())
      .then(data => {console.log(data.results)
      this.setState({games:data.results, loading:false})
      })
      console.log(this.state.games)
  }


  render() {
    const {games} = this.state;  
    return (
      <div>
      <section className="container">
        {games.map(data => (
            
            <div className="card">
            <h1>{data.name}</h1>
            <img src={data.background_image} alt=""/>
            </div>
            
        ))}
        </section>
       </div>     
    )
}
      
  }


export default Games
