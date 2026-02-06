import React from 'react';

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="container">
                <div className="hero-content">
                    <h1>DevOps & Cloud Engineer</h1>
                    <p>Automating infrastructure, building CI/CD pipelines, and managing cloud-native applications</p>
                    <div className="tech-stack">
                        <span>Kubernetes</span>
                        <span>Docker</span>
                        <span>Terraform</span>
                        <span>AWS</span>
                        <span>Jenkins</span>
                        <span>GitHub Actions</span>
                    </div>
                    <a href="#projects" className="btn">View My Projects</a>
                </div>
                <div className="hero-image">
                    <div className="terminal">
                        <div className="terminal-header">
                            <div className="terminal-dots">
                                <span className="dot red"></span>
                                <span className="dot yellow"></span>
                                <span className="dot green"></span>
                            </div>
                            <span>bash</span>
                        </div>
                        <div className="terminal-body">
                            <p>$ kubectl get pods</p>
                            <p>NAME&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;READY&nbsp;&nbsp;STATUS</p>
                            <p>app-deploy&nbsp;&nbsp;1/1&nbsp;&nbsp;&nbsp;&nbsp;Running</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;