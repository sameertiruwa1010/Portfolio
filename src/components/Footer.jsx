import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-command">
                        <span className="prompt">$</span>
                        <span className="command">./build.sh --deploy</span>
                    </div>
                    <div className="footer-info">
                        <p>
                            <span className="info-prompt">[✓]</span> 
                            Built by sameer in React • {currentYear}
                        </p>
                        <p>
                            <span className="info-prompt">[✓]</span> 
                            Deployed on GitHub Pages via CI/CD
                        </p>
                        <p>
                            <span className="info-prompt">[✓]</span> 
                            Stack: React • DevOps • Cloud
                        </p>
                    </div>
                    <div className="footer-status">
                        <span className="status-led">⬤</span>
                        <span className="status-text">System ready | uptime 24/7</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;