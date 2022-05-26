import React from 'react'
import { Link } from "react-router-dom"
import './Header.css'

const Header = () => {
    return (
        <React.Fragment>
            <header classname="bg-image">
                <div className="bg-container">
                    <h1>Lori M Callum</h1>
                    <h2>Javascript Software Engineer</h2>
                    <Link to="/">See my awesome portfolio</Link>
                </div>
            </header>
        </React.Fragment>
    )
}

export default Header;