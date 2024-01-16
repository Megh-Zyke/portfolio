import React from 'react';
import './css files/navbar.css';

function Navbar() {
    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="navbar">
            <div className="navbar-right">
                <span>Meghs</span>
            </div>
            <div className="navbar-left laptop">
                <p  onClick={() => scrollToSection('home')}>Home</p>
                <p  onClick={() => scrollToSection('aboutMe')}>About</p>
                <p  onClick={() => scrollToSection('techStack')}>Projects</p>
                <p  onClick={() => scrollToSection('contact')}>Contact</p>
            </div>


            <div className="navbar-left mobile">
            <i class="fa-solid fa-bars"></i>
            </div>

        </nav>
    );
}

export default Navbar;
