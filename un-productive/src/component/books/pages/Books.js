import React, { Component } from 'react'
import BooksItems from './BooksItems'
import Spinner from '../../layout/Spinner'
import PropTypes from 'prop-types'


const Books = ({books, loading}) =>{
    if(loading) {
        return <Spinner/>
    }else{
        return (
            <div >
            <h1>Books</h1>
            <div className="container">
            {books.map(data =>(
                
                <BooksItems key={data.volumeInfo.title} books={data.volumeInfo}/>
              
            ))}
            </div>
            </div>
        )
    }
}

export default Books;