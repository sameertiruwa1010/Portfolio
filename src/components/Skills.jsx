import React, { useState } from 'react';

const Skills = () => {
    const [activeCategory, setActiveCategory] = useState('all');
    
    const skills = {
        containers: [
            { name: 'Kubernetes', icon: '⎈', command: 'kubectl', color: '#326CE5' },
            { name: 'Docker', icon: '🐳', command: 'docker', color: '#2496ED' },
            { name: 'Helm', icon: '⎈', command: 'helm', color: '#0F1689' },
        ],
        cloud: [
            { name: 'AWS', icon: '☁️', command: 'aws-cli', color: '#FF9900' },
            { name: 'Terraform', icon: '🏗️', command: 'terraform', color: '#7B42BC' },
            { name: 'Ansible', icon: '⚡', command: 'ansible', color: '#EE0000' },
        ],
        cicd: [
            { name: 'Jenkins', icon: '⚙️', command: 'jenkins', color: '#D24939' },
            { name: 'GitHub Actions', icon: '🔄', command: 'actions', color: '#2088FF' },
            { name: 'Git', icon: '📚', command: 'git', color: '#F05032' },
        ],
        monitoring: [
            { name: 'Grafana', icon: '📊', command: 'grafana', color: '#F46800' },
            { name: 'Prometheus', icon: '📈', command: 'prometheus', color: '#E6522C' },
        ],
        os: [
            { name: 'Linux', icon: '🐧', command: 'uname', color: '#FCC624' },
            { name: 'Python', icon: '🐍', command: 'python3', color: '#3776AB' },
        ]
    };

    const categories = [
        { id: 'all', name: 'ALL', icon: '⚡' },
        { id: 'containers', name: 'CONTAINERS', icon: '⎈' },
        { id: 'cloud', name: 'CLOUD', icon: '☁️' },
        { id: 'cicd', name: 'CI/CD', icon: '🔄' },
        { id: 'monitoring', name: 'MONITORING', icon: '📊' },
        { id: 'os', name: 'OS/DEV', icon: '🐧' },
    ];

    const getFilteredSkills = () => {
        if (activeCategory === 'all') {
            return Object.values(skills).flat();
        }
        return skills[activeCategory] || [];
    };

    return (
        <section id="skills" className="skills">
            <div className="container">
                <h2 className="section-title">
                    <span className="title-prompt">$</span> skills --list
                </h2>
                
                {/* Terminal-style category tabs */}
                <div className="skills-terminal-header">
                    <div className="terminal-dots">
                        <span className="dot red"></span>
                        <span className="dot yellow"></span>
                        <span className="dot green"></span>
                    </div>
                    <div className="terminal-categories">
                        {categories.map(cat => (
                            <button
                                key={cat.id}
                                className={`category-btn ${activeCategory === cat.id ? 'active' : ''}`}
                                onClick={() => setActiveCategory(cat.id)}
                            >
                                <span className="cat-icon">{cat.icon}</span>
                                <span className="cat-name">{cat.name}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Skills display */}
                <div className="skills-terminal-body">
                    <div className="command-line">
                        <span className="prompt">$</span>
                        <span className="command">skill-matrix --show</span>
                    </div>
                    
                    <div className="skills-matrix">
                        {getFilteredSkills().map((skill, index) => (
                            <div key={index} className="matrix-row">
                                <div className="matrix-cell icon" style={{ color: skill.color }}>
                                    {skill.icon}
                                </div>
                                <div className="matrix-cell name">
                                    {skill.name}
                                </div>
                                <div className="matrix-cell command">
                                    <span className="command-badge">${skill.command}</span>
                                </div>
                                <div className="matrix-cell progress">
                                    <div className="progress-bar">
                                        <div 
                                            className="progress-fill" 
                                            style={{ 
                                                width: `${Math.floor(Math.random() * 30 + 70)}%`,
                                                backgroundColor: skill.color 
                                            }}
                                        ></div>
                                    </div>
                                </div>
                                <div className="matrix-cell status">
                                    <span className="status-dot">●</span> ready
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Summary line */}
                    <div className="command-output">
                        <span className="output-text">
                            Total skills: {getFilteredSkills().length} | 
                            Last updated: 2026-03-01 | 
                            Status: <span className="success">operational</span>
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;