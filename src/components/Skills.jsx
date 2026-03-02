import React, { useState, useEffect, useRef } from 'react';

const Skills = () => {
    const [category, setCategory] = useState('all');
    const [visible, setVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setVisible(true); },
            { threshold: 0.1 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    const skills = [
        { name: 'Kubernetes', icon: '⎈', cat: 'containers', level: 5, exp: '5y', color: '#326CE5' },
        { name: 'Docker', icon: '🐳', cat: 'containers', level: 5, exp: '6y', color: '#2496ED' },
        { name: 'AWS', icon: '☁️', cat: 'cloud', level: 5, exp: '5y', color: '#FF9900' },
        { name: 'Terraform', icon: '🏗️', cat: 'cloud', level: 4, exp: '4y', color: '#7B42BC' },
        { name: 'Jenkins', icon: '⚙️', cat: 'cicd', level: 4, exp: '4y', color: '#D24939' },
        { name: 'GitHub Actions', icon: '🔄', cat: 'cicd', level: 5, exp: '4y', color: '#2088FF' },
        { name: 'Prometheus', icon: '📊', cat: 'monitor', level: 4, exp: '3y', color: '#E6522C' },
        { name: 'Grafana', icon: '📈', cat: 'monitor', level: 4, exp: '3y', color: '#F46800' },
        { name: 'Linux', icon: '🐧', cat: 'os', level: 5, exp: '7y', color: '#FCC624' },
        { name: 'Python', icon: '🐍', cat: 'os', level: 4, exp: '4y', color: '#3776AB' },
        { name: 'Ansible', icon: '⚡', cat: 'cloud', level: 4, exp: '3y', color: '#EE0000' },
        { name: 'ArgoCD', icon: '⎈', cat: 'cicd', level: 3, exp: '2y', color: '#EF7B4D' },
    ];

    const filters = [
        { id: 'all', icon: '⚡', label: 'ALL' },
        { id: 'containers', icon: '⎈', label: 'K8S' },
        { id: 'cloud', icon: '☁️', label: 'CLOUD' },
        { id: 'cicd', icon: '🔄', label: 'CI/CD' },
        { id: 'monitor', icon: '📊', label: 'MONITOR' },
        { id: 'os', icon: '🐧', label: 'OS' },
    ];

    const filtered = category === 'all' 
        ? skills 
        : skills.filter(s => s.cat === category);

    const levelMap = { 5: 'Expert', 4: 'Advanced', 3: 'Intermediate' };
    const avgLevel = Math.round(filtered.reduce((a, s) => a + s.level, 0) / filtered.length) || 0;

    return (
        <section id="skills" className="skills" ref={sectionRef}>
            <style>{`
    .skills-fade { 
        opacity: 0; 
        transform: translateY(20px); 
        transition: 0.5s; 
    }
    .skills-fade.visible { 
        opacity: 1; 
        transform: translateY(0); 
    }
    
    /* Desktop default */
    .skill-row {
        display: grid; 
        grid-template-columns: 40px 110px 90px 80px 1fr 60px;
        align-items: center; 
        padding: 12px; 
        margin: 8px 0;
        background: #1a1e24; 
        border: 1px solid #333; 
        border-radius: 8px;
        animation: slideIn 0.3s ease both;
    }
    
    @keyframes slideIn { 
        from { opacity:0; transform: translateX(-10px); } 
        to { opacity:1; transform: translateX(0); } 
    }
    
    .skill-row:hover { 
        border-color: #f0a500; 
        background: rgba(240,165,0,0.05); 
    }
    
    .level-badge { 
        padding: 4px 8px; 
        border-radius: 20px; 
        font-size: 0.75rem; 
        text-align: center; 
    }
    
    .exp-badge { 
        background: #2a2a2a; 
        padding: 4px 8px; 
        border-radius: 20px; 
        font-size: 0.75rem; 
        color: #888; 
    }
    
    .status-dot { 
        width: 8px; 
        height: 8px; 
        background: #34d399; 
        border-radius: 50%; 
        animation: pulse 2s infinite; 
    }
    
    @keyframes pulse { 
        0%,100% { opacity:1; } 
        50% { opacity:0.3; } 
    }

    /* ===== MOBILE RESPONSIVE STYLES ===== */
    
    /* Tablet (max-width: 960px) */
    @media (max-width: 960px) {
        .skills-terminal-header {
            flex-wrap: wrap;
            gap: 12px;
        }
        
        .terminal-categories {
            justify-content: center;
        }
        
        .category-btn {
            padding: 4px 12px;
            font-size: 0.75rem;
        }
        
        .skill-row {
            grid-template-columns: 40px 100px 80px 70px 1fr;
        }
        
        .skill-row > div:nth-child(6) {
            display: none; /* Hide status on tablet */
        }
    }

    /* Mobile (max-width: 768px) */
    @media (max-width: 768px) {
        .skills-terminal-header {
            padding: 12px;
            justify-content: center;
        }
        
        .terminal-dots {
            width: 100%;
            justify-content: center;
        }
        
        .category-btn {
            padding: 4px 10px;
            font-size: 0.7rem;
            gap: 4px;
        }
        
        .cat-icon {
            font-size: 0.8rem;
        }
        
        .skills-terminal-body {
            padding: 16px;
        }
        
        .command-line {
            font-size: 0.8rem;
            flex-wrap: wrap;
            padding: 8px 12px;
        }
        
        /* Redesign skill row for mobile */
        .skill-row {
            grid-template-columns: 40px 1fr 70px;
            gap: 8px;
            padding: 12px;
            position: relative;
        }
        
        /* Icon */
        .skill-row > div:nth-child(1) {
            grid-column: 1;
            grid-row: 1;
        }
        
        /* Name */
        .skill-row > div:nth-child(2) {
            grid-column: 2;
            grid-row: 1;
            font-size: 0.9rem;
            font-weight: 600;
        }
        
        /* Command badge - hidden on mobile */
        .skill-row > div:nth-child(3) {
            display: none;
        }
        
        /* Level badge */
        .skill-row > div:nth-child(4) {
            grid-column: 3;
            grid-row: 1;
        }
        
        .level-badge {
            font-size: 0.7rem;
            padding: 3px 6px;
        }
        
        /* Experience badge */
        .skill-row > div:nth-child(5) {
            grid-column: 1 / -1;
            grid-row: 2;
            margin-top: 4px;
        }
        
        .exp-badge {
            display: inline-block;
            font-size: 0.65rem;
            padding: 2px 8px;
        }
        
        /* Status - hidden on mobile */
        .skill-row > div:nth-child(6) {
            display: none;
        }
        
        /* Command output */
        .command-output {
            flex-direction: column;
            gap: 8px;
            text-align: center;
            font-size: 0.75rem;
        }
    }

    /* Small Mobile (max-width: 480px) */
    @media (max-width: 480px) {
        .category-btn {
            padding: 3px 8px;
            font-size: 0.65rem;
        }
        
        .cat-icon {
            font-size: 0.7rem;
        }
        
        .command-line {
            font-size: 0.7rem;
            padding: 6px 10px;
            gap: 6px;
        }
        
        .prompt {
            font-size: 0.7rem;
        }
        
        .skills-terminal-body {
            padding: 12px;
        }
        
        .skill-row {
            grid-template-columns: 30px 1fr 60px;
            padding: 10px;
            margin: 6px 0;
        }
        
        .skill-row > div:nth-child(1) {
            font-size: 1rem;
        }
        
        .skill-row > div:nth-child(2) {
            font-size: 0.8rem;
        }
        
        .level-badge {
            font-size: 0.6rem;
            padding: 2px 5px;
        }
        
        .exp-badge {
            font-size: 0.6rem;
            padding: 2px 6px;
        }
        
        .command-output {
            font-size: 0.7rem;
            padding: 10px;
        }
        
        .output-pills {
            flex-direction: column;
            gap: 5px;
        }
        
        .output-pill {
            font-size: 0.65rem;
        }
    }

    /* Extra Small Mobile (max-width: 360px) */
    @media (max-width: 360px) {
        .category-btn {
            padding: 2px 6px;
            font-size: 0.6rem;
        }
        
        .skill-row {
            grid-template-columns: 25px 1fr 50px;
            padding: 8px;
        }
        
        .skill-row > div:nth-child(2) {
            font-size: 0.7rem;
        }
        
        .level-badge {
            font-size: 0.55rem;
            padding: 2px 4px;
        }
        
        .exp-badge {
            font-size: 0.55rem;
            padding: 1px 5px;
        }
        
        .command-output span:first-child {
            font-size: 0.6rem;
        }
        
        .command-output span:last-child {
            font-size: 0.6rem;
        }
    }

    /* Landscape mode for mobile */
    @media (max-width: 768px) and (orientation: landscape) {
        .skill-row {
            grid-template-columns: 40px 120px 80px 1fr 60px;
        }
        
        .skill-row > div:nth-child(3) {
            display: block; /* Show command in landscape */
        }
        
        .skill-row > div:nth-child(5) {
            grid-column: auto;
            grid-row: auto;
        }
        
        .skill-row > div:nth-child(6) {
            display: flex; /* Show status in landscape */
        }
        
        .exp-badge {
            display: inline-block;
        }
        
        .command-output {
            flex-direction: row;
        }
        
        .output-pills {
            flex-direction: row;
        }
    }

    /* Medium devices (769px - 1024px) */
    @media (min-width: 769px) and (max-width: 1024px) {
        .skill-row {
            grid-template-columns: 40px 100px 80px 70px 1fr 50px;
            gap: 8px;
            padding: 10px;
        }
        
        .command-badge {
            font-size: 0.7rem;
            padding: 2px 6px;
        }
        
        .level-badge {
            font-size: 0.7rem;
            padding: 3px 6px;
        }
        
        .exp-badge {
            font-size: 0.7rem;
            padding: 3px 6px;
        }
        
        .status-dot {
            width: 6px;
            height: 6px;
        }
    }
`}</style>

            <div className="container">
                <h2 className="section-title"><span className="title-prompt">$</span> skills --matrix</h2>
                
                <div className={`skills-fade ${visible ? 'visible' : ''}`}>
                    {/* Filter tabs */}
                    <div className="skills-terminal-header">
                        <div className="terminal-dots">
                            <span className="dot red"></span><span className="dot yellow"></span><span className="dot green"></span>
                        </div>
                        <div className="terminal-categories">
                            {filters.map(f => (
                                <button key={f.id} className={`category-btn ${category === f.id ? 'active' : ''}`} onClick={() => setCategory(f.id)}>
                                    <span>{f.icon}</span> {f.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Skills list */}
                    <div className="skills-terminal-body">
                        <div className="command-line">
                            <span className="prompt">$</span> <span>ls -la skills/{category}/</span>
                        </div>

                        {filtered.map((s, i) => (
                            <div key={i} className="skill-row" style={{ animationDelay: `${i * 0.05}s` }}>
                                <div style={{ color: s.color }}>{s.icon}</div>
                                <div style={{ fontWeight: 600 }}>{s.name}</div>
                                <div><span className="command-badge">${s.name.toLowerCase()}</span></div>
                                <div><span className="level-badge" style={{ background: s.level > 4 ? '#34d39920' : s.level > 3 ? '#f0a50020' : '#60a5fa20', color: s.level > 4 ? '#34d399' : s.level > 3 ? '#f0a500' : '#60a5fa' }}>{levelMap[s.level]}</span></div>
                                <div><span className="exp-badge">{s.exp}</span></div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                                    <span className="status-dot"></span> <span style={{ fontSize: '0.75rem', color: '#34d399' }}>active</span>
                                </div>
                            </div>
                        ))}

                        {/* Summary */}
                        <div className="command-output" style={{ display: 'flex', justifyContent: 'space-between', marginTop: 20, padding: 12, background: '#1a1e24', borderRadius: 5 }}>
                            <span>📊 {filtered.length} skills · ⚡ avg: {levelMap[avgLevel] || 'Intermediate'}</span>
                            <span>✓ last sync: 2026-03-02</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;