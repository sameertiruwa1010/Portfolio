import React, { useState } from 'react';

// Import your project images
import project1 from '../assets/k8s.jpg';
import project2 from '../assets/jenkins.jpeg';
import project3 from '../assets/terraform.png';
import project4 from '../assets/monitoring.jpeg';
import project5 from '../assets/github-actions.jpeg';
import project6 from '../assets/microservices.jpeg';

const Projects = () => {
    const [filter, setFilter] = useState('all');
    
    const projects = [
        {
            title: 'k8s-cluster',
            fullTitle: 'Kubernetes Cluster Setup',
            description: 'Multi-node Kubernetes cluster with automated deployment using kubeadm',
            image: project1,
            tech: ['k8s', 'docker', 'ansible'],
            category: 'kubernetes',
            github: 'sameertiruwa1010/-kubernetes-practice-labs',
            stars: 24,
            forks: 8,
            status: 'prod'
        },
        {
            title: 'jenkins-pipeline',
            fullTitle: 'CI/CD Pipeline with Jenkins',
            description: 'Complete Jenkins pipeline for automated testing and deployment',
            image: project2,
            tech: ['jenkins', 'docker', 'groovy'],
            category: 'cicd',
            github: 'sameertiruwa1010/CI-CD-GithubAction',
            stars: 18,
            forks: 5,
            status: 'prod'
        },
        {
            title: 'terraform-aws',
            fullTitle: 'AWS Infrastructure as Code',
            description: 'Terraform modules for deploying scalable AWS infrastructure',
            image: project3,
            tech: ['terraform', 'aws', 'ec2', 's3'],
            category: 'cloud',
            github: 'sameertiruwa1010/terraform-aws-labs',
            stars: 32,
            forks: 12,
            status: 'stable'
        },
        {
            title: 'monitoring-stack',
            fullTitle: 'Monitoring Stack',
            description: 'Grafana dashboards with Prometheus monitoring for microservices',
            image: project4,
            tech: ['grafana', 'prometheus', 'alertmanager'],
            category: 'monitoring',
            github: 'user/monitoring-stack',
            stars: 15,
            forks: 4,
            status: 'beta'
        },
        {
            title: 'github-actions',
            fullTitle: 'GitHub Actions Workflows',
            description: 'Reusable GitHub Actions workflows for various DevOps tasks',
            image: project5,
            tech: ['actions', 'yaml', 'docker'],
            category: 'cicd',
            github: 'user/github-actions',
            stars: 21,
            forks: 7,
            status: 'prod'
        },
        {
            title: 'microservices',
            fullTitle: 'Dockerized Microservices',
            description: 'Microservices architecture with Docker Compose and networking',
            image: project6,
            tech: ['docker', 'node.js', 'nginx'],
            category: 'containers',
            github: 'user/docker-microservices',
            live: 'demo.app',
            stars: 27,
            forks: 9,
            status: 'prod'
        },
    ];

    const filters = [
        { id: 'all', icon: '📋', label: 'ALL' },
        { id: 'kubernetes', icon: '⎈', label: 'K8S' },
        { id: 'cicd', icon: '🔄', label: 'CI/CD' },
        { id: 'cloud', icon: '☁️', label: 'CLOUD' },
        { id: 'monitoring', icon: '📊', label: 'MONITOR' },
        { id: 'containers', icon: '🐳', label: 'CONTAINERS' },
    ];

    const filtered = filter === 'all' 
        ? projects 
        : projects.filter(p => p.category === filter);

    const statusColors = {
        prod: '#34d399',
        stable: '#f0a500',
        beta: '#60a5fa'
    };

    return (
        <section id="projects" className="projects">
            <style>{`
                .projects-fade {
                    opacity: 0;
                    transform: translateY(20px);
                    transition: 0.5s;
                }
                .projects-fade.visible {
                    opacity: 1;
                    transform: translateY(0);
                }
                .project-row {
                    display: grid;
                    grid-template-columns: 200px 1fr;
                    gap: 20px;
                    padding: 16px;
                    margin: 12px 0;
                    background: #1a1e24;
                    border: 1px solid #333;
                    border-radius: 8px;
                    animation: slideIn 0.3s ease both;
                    transition: all 0.2s;
                }
                .project-row:hover {
                    border-color: #f0a500;
                    background: rgba(240,165,0,0.05);
                }
                @keyframes slideIn {
                    from { opacity: 0; transform: translateX(-10px); }
                    to { opacity: 1; transform: translateX(0); }
                }
                .project-image {
                    width: 200px;
                    height: 120px;
                    border-radius: 6px;
                    overflow: hidden;
                    border: 1px solid #333;
                }
                .project-image img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.3s;
                }
                .project-row:hover .project-image img {
                    transform: scale(1.05);
                }
                .tech-tag {
                    background: #2a2a2a;
                    padding: 4px 10px;
                    border-radius: 20px;
                    font-size: 0.7rem;
                    margin: 0 4px 4px 0;
                    display: inline-block;
                    color: #888;
                }
                .tech-tag span {
                    color: #f0a500;
                    margin-right: 4px;
                }
                .stat-badge {
                    padding: 2px 8px;
                    border-radius: 12px;
                    font-size: 0.7rem;
                    margin-left: 8px;
                    background: #2a2a2a;
                }
                .status-badge {
                    padding: 2px 10px;
                    border-radius: 20px;
                    font-size: 0.7rem;
                    display: inline-flex;
                    align-items: center;
                    gap: 4px;
                }
                .cmd-prompt {
                    color: #f0a500;
                    margin-right: 6px;
                }
                .filter-btn {
                    background: transparent;
                    border: 1px solid #333;
                    color: #888;
                    padding: 6px 14px;
                    border-radius: 20px;
                    cursor: pointer;
                    transition: 0.2s;
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    font-size: 0.85rem;
                }
                .filter-btn:hover {
                    border-color: #f0a500;
                    color: #fff;
                }
                .filter-btn.active {
                    background: #f0a500;
                    border-color: #f0a500;
                    color: #000;
                }
                .command-line {
                    display: flex;
                    gap: 10px;
                    margin-bottom: 20px;
                    color: #00ff00;
                    font-family: monospace;
                }
                .prompt {
                    color: #00ff00;
                    font-weight: bold;
                }
            `}</style>

            <div className="container">
                <h2 className="section-title">
                    <span className="title-prompt">$</span> projects --list
                </h2>

                {/* Filter tabs - matching Skills theme */}
                <div className="projects-terminal-header" style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: 20, 
                    background: '#1e1e1e', 
                    padding: '12px 20px', 
                    borderRadius: '8px 8px 0 0', 
                    borderBottom: '2px solid #333' 
                }}>
                    <div className="terminal-dots" style={{ display: 'flex', gap: 8 }}>
                        <span className="dot red" style={{ width: 12, height: 12, borderRadius: '50%', background: '#ff5f56' }}></span>
                        <span className="dot yellow" style={{ width: 12, height: 12, borderRadius: '50%', background: '#ffbd2e' }}></span>
                        <span className="dot green" style={{ width: 12, height: 12, borderRadius: '50%', background: '#27c93f' }}></span>
                    </div>
                    <div className="terminal-categories" style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                        {filters.map(f => (
                            <button
                                key={f.id}
                                className={`filter-btn ${filter === f.id ? 'active' : ''}`}
                                onClick={() => setFilter(f.id)}
                            >
                                <span>{f.icon}</span> {f.label}
                            </button>
                        ))}
                    </div>
                    <div style={{ color: '#888', fontFamily: 'monospace', fontSize: '0.85rem' }}>
                        [{filtered.length}] projects
                    </div>
                </div>

                {/* Projects list - Terminal body */}
                <div style={{ 
                    background: '#0a0c0f', 
                    padding: 24, 
                    borderRadius: '0 0 8px 8px', 
                    border: '1px solid #333', 
                    borderTop: 'none' 
                }}>
                    {/* Command line */}
                    <div className="command-line">
                        <span className="prompt">$</span>
                        <span>ls -la projects/{filter}/ | grep "active"</span>
                    </div>

                    {/* Project rows */}
                    {filtered.map((p, i) => (
                        <div key={i} className="project-row" style={{ animationDelay: `${i * 0.05}s` }}>
                            {/* Image */}
                            <div className="project-image">
                                <img src={p.image} alt={p.fullTitle} />
                            </div>

                            {/* Content */}
                            <div>
                                {/* Title row with badges */}
                                <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap', marginBottom: 8 }}>
                                    <span style={{ fontWeight: 600, fontSize: '1.1rem' }}>{p.fullTitle}</span>
                                    <span style={{ color: '#888', fontSize: '0.8rem' }}>({p.title})</span>
                                    <div style={{ display: 'flex', gap: 6 }}>
                                        <span className="stat-badge">⭐ {p.stars}</span>
                                        <span className="stat-badge">⑂ {p.forks}</span>
                                    </div>
                                    <span 
                                        className="status-badge"
                                        style={{ 
                                            background: `${statusColors[p.status]}20`,
                                            color: statusColors[p.status],
                                            border: `1px solid ${statusColors[p.status]}40`
                                        }}
                                    >
                                        <span style={{ 
                                            width: 6, 
                                            height: 6, 
                                            borderRadius: '50%', 
                                            background: statusColors[p.status],
                                            display: 'inline-block',
                                            animation: 'pulse 2s infinite'
                                        }}></span>
                                        {p.status}
                                    </span>
                                </div>

                                {/* Description */}
                                <div style={{ color: '#888', fontSize: '0.9rem', marginBottom: 12 }}>
                                    {p.description}
                                </div>

                                {/* Tech tags */}
                                <div style={{ marginBottom: 12 }}>
                                    {p.tech.map((t, idx) => (
                                        <span key={idx} className="tech-tag">
                                            <span className="cmd-prompt">$</span> {t}
                                        </span>
                                    ))}
                                </div>

                                {/* Action buttons */}
                                <div style={{ display: 'flex', gap: 12 }}>
                                    <a 
                                        href={`https://github.com/${p.github}`}
                                        target="_blank"
                                        rel="noreferrer"
                                        style={{ 
                                            padding: '6px 16px',
                                            background: '#2a2a2a',
                                            borderRadius: 5,
                                            textDecoration: 'none',
                                            color: '#fff',
                                            fontSize: '0.85rem',
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: 6,
                                            border: '1px solid #444',
                                            transition: '0.2s'
                                        }}
                                        onMouseOver={(e) => e.currentTarget.style.background = '#333'}
                                        onMouseOut={(e) => e.currentTarget.style.background = '#2a2a2a'}
                                    >
                                        <span style={{ color: '#f0a500' }}>&lt;/&gt;</span> git clone
                                    </a>
                                    {p.live && (
                                        <a 
                                            href={`https://${p.live}`}
                                            target="_blank"
                                            rel="noreferrer"
                                            style={{ 
                                                padding: '6px 16px',
                                                background: '#f0a500',
                                                borderRadius: 5,
                                                textDecoration: 'none',
                                                color: '#000',
                                                fontSize: '0.85rem',
                                                display: 'inline-flex',
                                                alignItems: 'center',
                                                gap: 6,
                                                transition: '0.2s'
                                            }}
                                            onMouseOver={(e) => e.currentTarget.style.background = '#fbbf24'}
                                            onMouseOut={(e) => e.currentTarget.style.background = '#f0a500'}
                                        >
                                            🌐 curl demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Summary line - matching Skills theme */}
                    <div style={{ 
                        display: 'flex', 
                        justifyContent: 'space-between', 
                        marginTop: 24, 
                        padding: 12, 
                        background: '#1a1e24', 
                        borderRadius: 5,
                        borderLeft: '3px solid #f0a500'
                    }}>
                        <span>
                            📊 total: {filtered.length} · 
                            ⭐ {filtered.reduce((acc, p) => acc + p.stars, 0)} stars · 
                            ⑂ {filtered.reduce((acc, p) => acc + p.forks, 0)} forks
                        </span>
                        <span style={{ color: '#34d399' }}>
                            ● {filtered.filter(p => p.status === 'prod').length} prod · 
                            {filtered.filter(p => p.status === 'stable').length} stable · 
                            {filtered.filter(p => p.status === 'beta').length} beta
                        </span>
                    </div>

                    {/* Hidden animation keyframes */}
                    <style>{`
                        @keyframes pulse {
                            0%,100% { opacity: 1; }
                            50% { opacity: 0.3; }
                        }
                    `}</style>
                </div>
            </div>
        </section>
    );
};

export default Projects;