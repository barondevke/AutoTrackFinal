
import { NavLink, Link } from "react-router-dom";
import './App.css'

export default function NavBar() {

    const handleScrollToFooter = () => {
        const footerElement = document.getElementById('footer');
        if (footerElement) {
            footerElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="navbarParent">
        <nav>
            <div className="logo">
                <i className="fa-solid fa-car" ></i>
                <span className="logo-text">Auto Track</span>
            </div>
            <div className="listSection">
            <ul>
                <li><NavLink exact to="/">Home</NavLink></li>
                <li><NavLink exact to="/buy">Rent</NavLink></li>
                <li><NavLink exact to="/sell">Car</NavLink></li>
                <li><NavLink exact to="/about">About</NavLink></li>
                <li><NavLink exact to="/login">Login</NavLink></li>
                <li><NavLink exact to="/register">Register</NavLink></li>
            </ul>
         </div>
        </nav>
        </div>
    )
}