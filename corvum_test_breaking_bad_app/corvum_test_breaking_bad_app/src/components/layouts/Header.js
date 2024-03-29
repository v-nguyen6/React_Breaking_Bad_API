/*
----------------------------------------------------------------
General React Dependencies / Custom Imports & Components
----------------------------------------------------------------
*/
// React Dependencies
import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

// Custom React Components 
// - Headroom: Hide/Show header while scrolling 
import Headroom from "react-headroom"; 
// - Hamburger Menu (controls the creation and animation of hamburger menu)
import { Twirl as Hamburger } from "hamburger-react";
import logo from "../../assets/logo.png";

//--------------------------------------------------------------
const Header = () => {
    // Create states for when header is open/closed (currently set to false)
    const [isOpen, setIsOpen] = useState(false);

    const toggleNav = () => {
        const navigation = document.querySelector("nav.main-nav");

        if(!isOpen) {
            navigation.classList.add("main-nav--active");
        } else {
            navigation.classList.remove("main-nav--active");
        }
    };

    // Create media query for navigation/hamburger menu 
    const hideNav = () => {
        const navigation = document.querySelector("nav.main-nav");
        // Hides nav --> shows hamburger menu
        if (window.innerWidth <= 800) {
            if (navigation.classList.contains("main-nav--active")) {
                navigation.classList.remove("main-nav--active");
                setIsOpen(false);
            }
        }
    };

    return (
        <header>
            <Headroom>
                <Link to={"/"}>
                   
                    <img 
                        src={logo} 
                        alt="Breaking Bad Logo"
                        className="app-logo"
                    />

                </Link>

                {/* Hamburger Menu Button */}
                <div className="hamburger-button"
                     onClick={() => {
                     toggleNav();
                    }}
                >
                    <Hamburger toggled={isOpen} toggle={setIsOpen} size="25" />    
                </div>

                {/* Main Navigation */}
                <nav className="main-nav"
                     style={{display: "none"}}
                     onClick={() => {
                        hideNav();
                        //window.scrollBy(0, -50);
                     }}
                >
                    <ul className="main-nav__ul">
                        <li className="main-nav__list-item">
                            <Link to={"/"}>Home</Link>
                        </li>
                        <li className="main-nav__list-item">
                            <Link to={"/about"}>About</Link>
                        </li>
                    </ul>
                </nav>
            </Headroom>
        </header>
    );
}

export default Header;