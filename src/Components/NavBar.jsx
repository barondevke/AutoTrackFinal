import React from "react";
import { NavLink, Link } from "react-router-dom";

export default function NavBar() {

    const handleScrollToFooter = () => {
        const footerElement = document.getElementById('footer');
        if (footerElement) {
            footerElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav>
            <div className="logo">
                <i className="fa-solid fa-car" ></i>
                <span className="logo-text">Auto Track</span>
            </div>
            <ul>
                <li><NavLink exact to="/">Home</NavLink></li>
                <li><NavLink exact to="/buy">Buy</NavLink></li>
                <li><NavLink exact to="/sell">Sell</NavLink></li>
                <li><NavLink exact to="/about">About</NavLink></li>
                <li><Link to="#" onClick={handleScrollToFooter}>Contact us</Link></li>
            </ul>
        </nav>
    )
}