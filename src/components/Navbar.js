import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {CgWebsite} from "react-icons/cg";
import {FaBars, FaTimes} from "react-icons/fa";
import {Button} from "./Button";
import {IconContext} from "react-icons/lib";
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const [button, setButton] = useState(true);
    const closeMobileMenu = () => setClick(false);
    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        }
        else {
            setButton(true)
        }
    };
    useEffect(() => {
        showButton();
        window.addEventListener('resize', showButton);
        return (
            window.removeEventListener('resize',showButton)
        )
    }, []);

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
                        <li className='nav-item'>
                            <Link to='/portfolio/resume' className='nav-links' onClick={() => closeMobileMenu()}>
                                Resume
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/portfolio/contact' className='nav-links' onClick={() => closeMobileMenu()}>
                                Contact
                            </Link>
                        </li>
                        <li className="nav-btn">
                            {button ? (
                                <Link to='/portfolio/email' className="btn-link">
                                    <Button buttonStyle='btn--outline'>Email</Button>
                                </Link>
                            ): (
                                <Link to='email' className="btn-link" onClick={() => closeMobileMenu()}>
                                    <Button to='email' buttonStyle="btn--outline" buttonSize='btn--mobile'>Email</Button>
                                </Link>
                            )}
                        </li>
                    </ul>
                </div>
            </div>
            </IconContext.Provider>
        </>
    )
}

export default Navbar;