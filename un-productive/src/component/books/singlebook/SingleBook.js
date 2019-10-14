import React, { Component } from 'react'
import Navbar from '../../layout/Navbar'

export class SingleBook extends Component {
   componentDidMount(){
       this.props.getBook(this.props.match.params.book)
   }
    render() {
       
        const {loading,book}=this.props;
        return (
            <div style={{background:"var(--dark-color)", color:"var(--light-color)"}}>
            <Navbar/>
            <section id="single-page">
               {book.map(data=> (
                   <div className="container" key={data.volumeInfo.title}>
                   <div className="book-pic">
                   <img src={data.volumeInfo.imageLinks.thumbnail} alt=""/>
                   <p>visit this <a href={data.volumeInfo.previewLink}>Link</a> for a preview</p>
                   <p>For more information, visit this <a href={data.volumeInfo.infoLink} target="_blank">link</a></p>
                   </div>

                   <div className="book-content">
                    <h1>{data.volumeInfo.title}</h1>
                   <p>By: {data.volumeInfo.authors}</p>
                   <p>Publisher: {data.volumeInfo.publisher}</p>
                   <p>Genre: {data.volumeInfo.categories}</p>
                   <p>{data.volumeInfo.description}</p>
                   </div>

                   
                   </div>
               ))}
               </section>
            </div>
        )
    }
}

export default SingleBook
