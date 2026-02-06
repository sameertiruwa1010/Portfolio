import React from 'react';
const Skills = () => {
    const skills = [
        { name: 'Kubernetes', icon: '⛵', level: 90 },
        { name: 'Docker', icon: '🐳', level: 95 },
        { name: 'AWS', icon: '☁️', level: 85 },
        { name: 'Terraform', icon: '🏗️', level: 88 },
        { name: 'Jenkins', icon: '⚙️', level: 82 },
        { name: 'GitHub Actions', icon: '🔄', level: 87 },
        { name: 'Grafana', icon: '📊', level: 80 },
        { name: 'Linux', icon: '🐧', level: 90 },
        { name: 'Python', icon: '🐍', level: 75 },
        { name: 'Git', icon: '📚', level: 92 },
        { name: 'Helm', icon: '⎈', level: 78 },
        { name: 'Ansible', icon: '⚡', level: 72 },
    ];

    return (
        <section id="skills" className="skills">
            <div className="container">
                <h2 className="section-title">Technical Skills</h2>
                <div className="skills-grid">
                    {skills.map((skill, index) => (
                        <div key={index} className="skill-card">
                            <div className="skill-icon">{skill.icon}</div>
                            <div className="skill-info">
                                <h3>{skill.name}</h3>
                                <div className="skill-bar">
                                    <div 
                                        className="skill-level" 
                                        style={{ width: `${skill.level}%` }}
                                    ></div>
                                </div>
                                <span className="skill-percent">{skill.level}%</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;