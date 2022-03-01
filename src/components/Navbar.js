import React, {useState} from "react";
import {Link} from "react-router-dom";
import {CgWebsite} from "react-icons/cg";
import {FaBars, FaTimes} from "react-icons/fa";
import {IconContext} from "react-icons/lib";
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return(
        <>
            <IconContext.Provider value={{className: 'react-icons'}}>
            <div className="navbar">
                <div className="navbar-container container">
                    <Link to='/portfolio/' className="navbar-logo" onClick={() => closeMobileMenu()}>
                        <CgWebsite className="navbar-icon"/>
                        PORTFOLIO
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars/>}
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/portfolio/about-me' className='nav-links' onClick={() => closeMobileMenu()}>
                                About Me
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/portfolio/projects' className='nav-links' onClick={() => closeMobileMenu()}>
                                Projects
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            </IconContext.Provider>
        </>
    )
}

export default Navbar;