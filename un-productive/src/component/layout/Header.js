import React from 'react'

const Header = () => {
    return (
        <div id="header">
        <div className="search-container">
            <h1>Un||Productive</h1>
            <input type="text" name="search" id="search" placeholder="Search..."/>
            <div className="submit">
            <a href="#" className="btn btn-book">Search Book</a>
            <a href="#" className="btn btn-game">Search Game</a>
            <a href="#" className="btn btn-random">Random</a>
            </div>
            </div>
        </div>
    )
}

export default Header
