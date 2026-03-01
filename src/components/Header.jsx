import React, { useState, useEffect } from 'react';

const Header = () => {
    const [activeSection, setActiveSection] = useState('home');
    const [currentTime, setCurrentTime] = useState('');

    // Update time for status bar
    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date();
            setCurrentTime(now.toLocaleTimeString());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    // Handle scroll to update active section
    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'skills', 'projects', 'contact'];
            const scrollPosition = window.scrollY + 100;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className="navbar">
            <div className="container">
                {/* Left side - Logo with terminal prompt */}
                <div className="logo-container">
                    <span className="prompt">$</span>
                    <span className="logo-icon">⎈</span>
                    <div className="logo-text">
                        <span className="user">sameer</span>
                        <span className="at">@</span>
                        <span className="host">portfolio</span>
                        <span className="path">:~$</span>
                    </div>
                    <span className="cursor blinking">_</span>
                </div>

                {/* Right side - Navigation links */}
                <div className="nav-right">
                    <ul className="nav-links">
                        <li className={activeSection === 'home' ? 'active' : ''}>
                            <a href="#home">
                                <span className="nav-prompt">></span>
                                <span className="nav-text">~/home</span>
                            </a>
                        </li>
                        <li className={activeSection === 'skills' ? 'active' : ''}>
                            <a href="#skills">
                                <span className="nav-prompt">></span>
                                <span className="nav-text">~/skills</span>
                            </a>
                        </li>
                        <li className={activeSection === 'projects' ? 'active' : ''}>
                            <a href="#projects">
                                <span className="nav-prompt">></span>
                                <span className="nav-text">~/projects</span>
                            </a>
                        </li>
                        <li className={activeSection === 'contact' ? 'active' : ''}>
                            <a href="#contact">
                                <span className="nav-prompt">></span>
                                <span className="nav-text">~/contact</span>
                            </a>
                        </li>
                    </ul>

                    {/* Status indicator */}
                    <div className="header-status">
                        <span className="status-dot">●</span>
                        <span className="status-text">online</span>
                        <span className="status-time">{currentTime}</span>
                    </div>
                </div>
            </div>

            {/* Progress bar that shows scroll progress */}
            <div className="scroll-progress" id="scrollProgress"></div>
        </nav>
    );
};

export default Header;