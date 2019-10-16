import React from 'react'

const pBooksItems = ({books}) => {
    const {author_name,book_name,picture,date_published,user_name}=books
    return (
        <div >
           
            <div className="bPic">
            <img src={picture} alt=""/>
            </div>
            <div className="content">
            <h3>Book:<span>{book_name}</span></h3> 
            <h3>Author: {author_name}</h3>
            <h3>Date Published: {date_published}</h3>
            <h3>Added by: {user_name}</h3>
            </div>
            </div>
           
    )
}

export default pBooksItems
