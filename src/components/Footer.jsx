import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          
          {/* Terminal Command Style */}
          <div className="footer-command">
            <span className="prompt">$</span>
            <span className="command">
              ./deploy.sh --env production --region ap-south-asia
            </span>
          </div>

          {/* Footer Information */}
          <div className="footer-info">
            <p>
              <span className="info-prompt">[✓]</span>
              Designed & Built by <strong>Sameer</strong> in React • {currentYear}
            </p>

            <p>
              <span className="info-prompt">[✓]</span>
              Deployed via CI/CD Pipeline (GitHub Actions → Cloud)
            </p>

            <p>
              <span className="info-prompt">[✓]</span>
              Stack: React • Kubernetes • DevOps • Cloud Engineering
            </p>

            <p>
              <span className="info-prompt">[✓]</span>
              नेपालको माटोमा जन्मिएको 🇳🇵 | Globally Deploying Solutions
            </p>
          </div>

          {/* Status Section */}
          <div className="footer-status">
            <span className="status-led">⬤</span>
            <span className="status-text">
              Production Stable | System Operational 24/7
            </span>
          </div>

          {/* Professional Links Section */}
          <div className="footer-links">
            <a href="https://github.com/" target="_blank" rel="noreferrer">
              GitHub
            </a>
            {" | "}
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            {" | "}
            <a href="mailto:youremail@example.com">
              Contact
            </a>
          </div>

          {/* Copyright */}
          <div className="footer-bottom">
            <p>
              © {currentYear} Sameer. All Rights Reserved.  
              Made with ❤️ from Nepal.
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;