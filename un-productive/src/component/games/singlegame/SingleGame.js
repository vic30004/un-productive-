import React, { Component } from 'react';
import Navbar from '../../layout/Navbar'

export class SingleGame extends Component {
    componentDidMount(){
        this.props.getGames(this.props.match.params.game)
    }

        
    render() {
        const {loading,game}=this.props;

        const {name,description_raw, genre,background_image}=game
        return (
            
            <div style={{background:"var(--dark-color)", color:"var(--light-color)"}}>
            <Navbar/>
            <section id="single-page">
               
            {console.log(game)}

            
                    <div className="container" key={name}>
                        <div className="book-pic">
                        <img src={background_image} alt=""/>
                        </div>

                        <div className="book-content">
                        <h1>{name}</h1>
                        <p>{genre}</p>
                        {description_raw}
                        </div>
                    </div>
               
               
               </section> 
            </div>
        )
    }
}

export default SingleGame
