import React from 'react'


const pBooksItems = ({ books }) => {
    const { author_name, book_name, picture, date_published, user_name } = books
    return (
        <div class="book-card">
        <a href="#">
            <figure style={{backgroundImage:`url('${picture}')`}}>
                <div class="date"><span class="card-date-day">{date_published}</span></div>
                <figcaption>
                    <h4> <span>{book_name}</span></h4>
                    <p>{author_name}</p>
            <p>{user_name}</p>
                </figcaption>
            </figure></a>
            </div>
        
           
    )
}

export default pBooksItems
