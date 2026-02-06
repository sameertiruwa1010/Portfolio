import React from 'react';

const Projects = () => {
    const projects = [
        {
            title: 'Kubernetes Cluster Setup',
            description: 'Multi-node Kubernetes cluster with automated deployment using kubeadm',
            tech: ['Kubernetes', 'Docker', 'Bash', 'Ansible'],
            github: 'https://github.com/yourusername/kubernetes-cluster',
            live: null
        },
        {
            title: 'CI/CD Pipeline with Jenkins',
            description: 'Complete Jenkins pipeline for automated testing and deployment',
            tech: ['Jenkins', 'Docker', 'Git', 'Groovy'],
            github: 'https://github.com/yourusername/jenkins-pipeline',
            live: null
        },
        {
            title: 'AWS Infrastructure as Code',
            description: 'Terraform modules for deploying scalable AWS infrastructure',
            tech: ['Terraform', 'AWS', 'EC2', 'S3', 'RDS'],
            github: 'https://github.com/yourusername/terraform-aws',
            live: null
        },
        {
            title: 'Monitoring Stack',
            description: 'Grafana dashboards with Prometheus monitoring for microservices',
            tech: ['Grafana', 'Prometheus', 'Docker', 'AlertManager'],
            github: 'https://github.com/yourusername/monitoring-stack',
            live: null
        },
        {
            title: 'GitHub Actions Workflows',
            description: 'Reusable GitHub Actions workflows for various DevOps tasks',
            tech: ['GitHub Actions', 'YAML', 'Docker', 'Bash'],
            github: 'https://github.com/yourusername/github-actions',
            live: null
        },
        {
            title: 'Dockerized Microservices',
            description: 'Microservices architecture with Docker Compose and networking',
            tech: ['Docker', 'Docker Compose', 'Node.js', 'Nginx'],
            github: 'https://github.com/yourusername/docker-microservices',
            live: 'https://yourapp.herokuapp.com'
        },
    ];

    return (
        <section id="projects" className="projects">
            <div className="container">
                <h2 className="section-title">DevOps Projects</h2>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card">
                            <div className="project-header">
                                <h3>{project.title}</h3>
                                <div className="project-tech">
                                    {project.tech.map((tech, i) => (
                                        <span key={i} className="tech-tag">{tech}</span>
                                    ))}
                                </div>
                            </div>
                            <p className="project-desc">{project.description}</p>
                            <div className="project-links">
                                <a 
                                    href={project.github} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="btn-github"
                                >
                                    <i className="fab fa-github"></i> View Code
                                </a>
                                {project.live && (
                                    <a 
                                        href={project.live} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="btn-live"
                                    >
                                        <i className="fas fa-external-link-alt"></i> Live Demo
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;