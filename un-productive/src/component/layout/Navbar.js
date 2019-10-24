import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <div id="navB">
            <nav id="nav-bar">
                <Link to="/" className="logo">
                <h1>Un||productive</h1>
                </Link>
                <ul className="nav-list">
                <Link to="/"><li>Home</li></Link>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
