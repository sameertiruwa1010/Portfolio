import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="contact">
            <div className="container">
                <h2 className="section-title">Get In Touch</h2>
                <div className="contact-content">
                    <div className="contact-info">
                        <h3>Let's connect!</h3>
                        <p>Open to DevOps, SRE, and Cloud Engineering opportunities</p>
                        <div className="contact-links">
                            <a href="mailto:your.email@example.com" className="contact-link">
                                <i className="fas fa-envelope"></i> your.email@example.com
                            </a>
                            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="contact-link">
                                <i className="fab fa-linkedin"></i> LinkedIn
                            </a>
                            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="contact-link">
                                <i className="fab fa-github"></i> GitHub
                            </a>
                        </div>
                    </div>
                    <div className="resume-download">
                        <h3>Resume</h3>
                        <p>Download my resume for detailed experience and certifications</p>
                        <a href="/resume.pdf" download className="btn-resume">
                            <i className="fas fa-download"></i> Download Resume (PDF)
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;