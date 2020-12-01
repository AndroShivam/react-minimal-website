import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import './Navbar.css'


function Navbar() {

    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)
    const closeHamburgerMenu = () => setClick(false)

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to='/' className="navbar-logo" onClick={closeHamburgerMenu}>
                        Bit<span>co</span>
                    </Link>
                    <div className="hamburger-menu" onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars />}
                    </div>

                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to='/' className="nav-links" onClick={closeHamburgerMenu}>
                                Home
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to='/resources' className="nav-links" onClick={closeHamburgerMenu}>
                                Resources
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to='/pricing' className="nav-links" onClick={closeHamburgerMenu}>
                                Pricing
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to='/sales' className="nav-links" onClick={closeHamburgerMenu}>
                                Sales
                            </Link>
                        </li>

                        <li className="nav-btn-link">
                            <button className="nav-btn">Log in</button>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar
