import React, { useState } from 'react';

const Projects = () => {
    const [filter, setFilter] = useState('all');
    
    const projects = [
        {
            title: 'Kubernetes Cluster Setup',
            description: 'Multi-node Kubernetes cluster with automated deployment using kubeadm',
            tech: ['Kubernetes', 'Docker', 'Bash', 'Ansible'],
            category: 'kubernetes',
            github: 'https://github.com/sameertiruwa1010/-kubernetes-practice-labs',
            live: null,
            stars: 12,
            forks: 3,
            status: 'active'
        },
        {
            title: 'CI/CD Pipeline with Jenkins',
            description: 'Complete Jenkins pipeline for automated testing and deployment',
            tech: ['Jenkins', 'Docker', 'Git', 'Groovy'],
            category: 'cicd',
            github: 'https://github.com/sameertiruwa1010/CI-CD-GithubAction',
            live: null,
            stars: 8,
            forks: 2,
            status: 'active'
        },
        {
            title: 'AWS Infrastructure as Code',
            description: 'Terraform modules for deploying scalable AWS infrastructure',
            tech: ['Terraform', 'AWS', 'EC2', 'S3', 'RDS'],
            category: 'cloud',
            github: 'https://github.com/sameertiruwa1010/terraform-aws-labs',
            live: null,
            stars: 15,
            forks: 4,
            status: 'stable'
        },
        {
            title: 'Monitoring Stack',
            description: 'Grafana dashboards with Prometheus monitoring for microservices',
            tech: ['Grafana', 'Prometheus', 'Docker', 'AlertManager'],
            category: 'monitoring',
            github: 'https://github.com/yourusername/monitoring-stack',
            live: null,
            stars: 6,
            forks: 1,
            status: 'beta'
        },
        {
            title: 'GitHub Actions Workflows',
            description: 'Reusable GitHub Actions workflows for various DevOps tasks',
            tech: ['GitHub Actions', 'YAML', 'Docker', 'Bash'],
            category: 'cicd',
            github: 'https://github.com/yourusername/github-actions',
            live: null,
            stars: 10,
            forks: 2,
            status: 'active'
        },
        {
            title: 'Dockerized Microservices',
            description: 'Microservices architecture with Docker Compose and networking',
            tech: ['Docker', 'Docker Compose', 'Node.js', 'Nginx'],
            category: 'containers',
            github: 'https://github.com/yourusername/docker-microservices',
            live: 'https://yourapp.herokuapp.com',
            stars: 7,
            forks: 1,
            status: 'active'
        },
    ];

    const filters = [
        { id: 'all', name: 'ALL', icon: '📋' },
        { id: 'kubernetes', name: 'K8S', icon: '⎈' },
        { id: 'cicd', name: 'CI/CD', icon: '🔄' },
        { id: 'cloud', name: 'CLOUD', icon: '☁️' },
        { id: 'monitoring', name: 'MONITOR', icon: '📊' },
        { id: 'containers', name: 'CONTAINERS', icon: '🐳' },
    ];

    const filteredProjects = filter === 'all' 
        ? projects 
        : projects.filter(p => p.category === filter);

    return (
        <section id="projects" className="projects">
            <div className="container">
                <h2 className="section-title">
                    <span className="title-prompt">$</span> projects --list
                </h2>

                {/* Terminal-style filter tabs */}
                <div className="projects-terminal-header">
                    <div className="terminal-dots">
                        <span className="dot red"></span>
                        <span className="dot yellow"></span>
                        <span className="dot green"></span>
                    </div>
                    <div className="terminal-filters">
                        {filters.map(f => (
                            <button
                                key={f.id}
                                className={`filter-btn ${filter === f.id ? 'active' : ''}`}
                                onClick={() => setFilter(f.id)}
                            >
                                <span className="filter-icon">{f.icon}</span>
                                <span className="filter-name">{f.name}</span>
                            </button>
                        ))}
                    </div>
                    <div className="filter-count">
                        <span className="count">{filteredProjects.length}</span> items
                    </div>
                </div>

                {/* Terminal body with projects */}
                <div className="projects-terminal-body">
                    <div className="command-line">
                        <span className="prompt">$</span>
                        <span className="command">cat projects.md | grep {filter === 'all' ? '.*' : filter}</span>
                    </div>

                    <div className="projects-matrix">
                        {filteredProjects.map((project, index) => (
                            <div key={index} className="project-matrix-row">
                                <div className="project-matrix-header">
                                    <div className="project-name">
                                        <span className="project-icon">📦</span>
                                        <span className="project-title">{project.title}</span>
                                    </div>
                                    <div className="project-badges">
                                        <span className="badge-stars">
                                            <span className="badge-icon">⭐</span> {project.stars}
                                        </span>
                                        <span className="badge-forks">
                                            <span className="badge-icon">⑂</span> {project.forks}
                                        </span>
                                        <span className={`badge-status ${project.status}`}>
                                            ● {project.status}
                                        </span>
                                    </div>
                                </div>
                                
                                <div className="project-description">
                                    <span className="desc-prompt">{'//'}</span> {project.description}
                                </div>
                                
                                <div className="project-tech-stack">
                                    {project.tech.map((tech, i) => (
                                        <span key={i} className="tech-badge">
                                            <span className="tech-prompt">$</span> {tech}
                                        </span>
                                    ))}
                                </div>
                                
                                <div className="project-actions">
                                    <a 
                                        href={project.github} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="action-btn github"
                                    >
                                        <span className="btn-prompt">&gt;</span> git clone
                                    </a>
                                    {project.live && (
                                        <a 
                                            href={project.live} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="action-btn live"
                                        >
                                            <span className="btn-prompt">&gt;</span> curl demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Summary line */}
                    <div className="command-output">
                        <span className="output-text">
                            total {filteredProjects.length} | 
                            active: {filteredProjects.filter(p => p.status === 'active').length} | 
                            stable: {filteredProjects.filter(p => p.status === 'stable').length} | 
                            beta: {filteredProjects.filter(p => p.status === 'beta').length}
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;