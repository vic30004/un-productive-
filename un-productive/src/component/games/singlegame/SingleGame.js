import React, { Component } from 'react';
import Navbar from '../../layout/Navbar'

export class SingleGame extends Component {
    componentDidMount(){
        this.props.getGames(this.props.match.params.game)
    }

        
    render() {
        const {loading,game}=this.props;
        return (
            
            <div style={{background:"var(--dark-color)", color:"var(--light-color)"}}>
            <Navbar/>
            <section id="single-page">
               
               {game.map(data=>(
                    <div className="container" key={data.name}>
                        <div className="book-pic">
                        <img src={data.background_image} alt=""/>
                        </div>

                        <div className="book-content">
                        <h1>{data.name}</h1>
                        <p>{data.genres[0].name}</p>

                        </div>
                    </div>
               ))}
               </section> 
            </div>
        )
    }
}

export default SingleGame
