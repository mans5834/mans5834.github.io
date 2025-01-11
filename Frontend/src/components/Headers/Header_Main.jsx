import React from 'react';
import './Header_Main.css';

function Header() {
    return (
        <header className="header">
            
            <nav>
                <ul>
                    <a>Home</a>
                    <li><a href="/about">About</a></li>
                    <li><a href="/services">Services</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;