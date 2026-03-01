import React from 'react';
import photo from '../assets/p.png';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        
        {/* Left Side */}
        <div className="hero-content">
          <h1>DevOps & Cloud Engineer</h1>
          <p>
            Automating infrastructure, building CI/CD pipelines,
            and managing cloud-native applications
          </p>

          <div className="tech-stack">
            <span>Kubernetes</span>
            <span>Docker</span>
            <span>Terraform</span>
            <span>AWS</span>
            <span>Jenkins</span>
            <span>GitHub Actions</span>
          </div>

          <a href="#projects" className="btn">
            View My Projects
          </a>
        </div>

        {/* Right Side */}
        <div className="hero-image">
          
          {/* Profile Photo */}
          <div className="profile-photo">
            <img src={photo} alt="Sameer Tiruwa" />
          </div>

          {/* Terminal Card */}
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
              <p>NAME&nbsp;&nbsp;&nbsp;&nbsp;READY&nbsp;&nbsp;STATUS</p>
              <p>app-deploy&nbsp;1/1&nbsp;&nbsp;&nbsp;&nbsp;Running</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;