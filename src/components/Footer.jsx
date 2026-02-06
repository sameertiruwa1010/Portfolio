import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    
    return (
        <footer className="footer">
            <div className="container">
                <p>Built by sameer in  React & deployed on GitHub Pages • {currentYear}</p>
                <p className="footer-note">
                    This portfolio demonstrates DevOps skills: CI/CD, automation, and cloud infrastructure
                </p>
            </div>
        </footer>
    );
};

export default Footer;
