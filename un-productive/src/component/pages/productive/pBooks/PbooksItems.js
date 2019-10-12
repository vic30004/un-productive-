import React from 'react'

const pBooksItems = ({books}) => {
    const {author,bookName,picture,datePublished,userName}=books
    return (
        <div >
           
            <div className="bPic">
            <img src={picture} alt=""/>
            </div>
            <div className="content">
            <h3>Book:<span>{bookName}</span></h3> 
            <h3>Author: {author}</h3>
            <h3>Date Published: {datePublished}</h3>
            <h3>Added by: {userName}</h3>
            </div>
            </div>
           
    )
}

export default pBooksItems
