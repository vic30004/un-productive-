import React from 'react'

const UgamesItems = ({games}) => {
    const {game_name,picture,release_date,genre,platform,user_name}=games
    return (
        <div>
        <div className="bPic">
        <img src={picture} alt=""/>
        </div>
        <div className="content">
        <h3>{game_name}</h3> 
        <h3>{genre}</h3>
        <h3>{release_date}</h3>
        <h3>{platform}</h3>
        <h3>Added by: {user_name}</h3>
        </div>
        </div>
 
    )
}

export default UgamesItems
