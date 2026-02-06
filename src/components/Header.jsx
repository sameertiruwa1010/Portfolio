import React from 'react';

const Header = () => {
    return (
        <nav className="navbar">
            <div className="container">
                <h1 className="logo">DevOps Portfolio</h1>
                <ul className="nav-links">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#skills">Skillssss</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;
