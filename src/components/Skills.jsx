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
                .skills-fade { opacity: 0; transform: translateY(20px); transition: 0.5s; }
                .skills-fade.visible { opacity: 1; transform: translateY(0); }
                .skill-row {
                    display: grid; grid-template-columns: 40px 110px 90px 80px 1fr 60px;
                    align-items: center; padding: 12px; margin: 8px 0;
                    background: #1a1e24; border: 1px solid #333; border-radius: 8px;
                    animation: slideIn 0.3s ease both;
                }
                @keyframes slideIn { from { opacity:0; x: -10px; } to { opacity:1; x:0; } }
                .skill-row:hover { border-color: #f0a500; background: rgba(240,165,0,0.05); }
                .level-badge { padding: 4px 8px; border-radius: 20px; font-size: 0.75rem; text-align: center; }
                .exp-badge { background: #2a2a2a; padding: 4px 8px; border-radius: 20px; font-size: 0.75rem; color: #888; }
                .status-dot { width: 8px; height: 8px; background: #34d399; border-radius: 50%; animation: pulse 2s infinite; }
                @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.3} }
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