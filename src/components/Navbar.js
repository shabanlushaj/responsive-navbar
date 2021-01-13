import React, { useState } from "react"
import { NavLink } from "react-router-dom"
import "./Navbar.css"

const NavbarComponent = props => {
    return (
        <li className="nav-item">
            <NavLink
                exact
                to={props.path}
                activeClassName="active"
                className="nav-links"
                onClick={props.link}
            >
                {props.name}
            </NavLink>
        </li>
    )
}


const Navbar = () => {
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)
    return (
        <div>
            <nav className="navbar">
                <div className="nav-container">
                    <NavLink exact to="/" className="nav-logo">
                        Page title
                    </NavLink>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <NavbarComponent path="/" link={handleClick} name="Home" />
                        <NavbarComponent path="/Profile" link={handleClick} name="Profile" />
                        <NavbarComponent path="/About" link={handleClick} name="About" />


                    </ul>
                    <div className="nav-icon" onClick={handleClick}>
                        <i className={click ? "fas fa-times" : "fas fa-bars"} />
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar

