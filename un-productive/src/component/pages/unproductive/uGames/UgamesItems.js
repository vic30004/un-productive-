import React from 'react'

const UgamesItems = ({games}) => {
    const {game_name,picture,release_date,genre,platform,user_name}=games
    return (
        <div class="book-card">
        <a href="#">
            <figure style={{backgroundImage:`url('${picture}')`}}>
                <div class="date"><span class="card-date-day">{release_date}</span></div>
                <figcaption>
                    <h4> <span>{game_name}</span></h4>
            <p>{genre}</p>
            <p>{platform}</p>
            <p>{user_name}
            </p>

                </figcaption>
            </figure></a>
            </div>
 
    )
}

export default UgamesItems

 