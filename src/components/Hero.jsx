import React, { useState, useEffect } from 'react';
import photo from '../assets/p.png';

const TERMINAL_LINES = [
    { text: '$ kubectl get pods --all-namespaces', type: 'cmd' },
    { text: 'NAMESPACE     NAME               READY   STATUS', type: 'head' },
    { text: 'production    api-deploy-7x9k    1/1     Running ✓', type: 'ok' },
    { text: 'staging       db-pod-m3n2        1/1     Running ✓', type: 'ok' },
    { text: '$ terraform apply --auto-approve', type: 'cmd' },
    { text: 'Apply complete! Resources: 12 added.', type: 'ok' },
    { text: '$ docker build -t sameer/app:v2.1 .', type: 'cmd' },
    { text: 'Successfully built. [4.2s]', type: 'ok' },
];

const TECH_BADGES = [
    { label: 'Kubernetes', icon: '⎈' },
    { label: 'Docker',     icon: '🐳' },
    { label: 'Terraform',  icon: '🏗️' },
    { label: 'AWS',        icon: '☁️' },
    { label: 'Jenkins',    icon: '⚙️' },
    { label: 'GitHub Actions', icon: '🔄' },
];

const Hero = () => {
    const [lines, setLines] = useState([]);
    const [charIdx, setCharIdx] = useState(0);
    const [lineIdx, setLineIdx] = useState(0);
    const [done, setDone] = useState(false);

    /* Live typing effect */
    useEffect(() => {
        if (lineIdx >= TERMINAL_LINES.length) { setDone(true); return; }
        const current = TERMINAL_LINES[lineIdx].text;
        if (charIdx <= current.length) {
            const t = setTimeout(() => {
                setLines(prev => {
                    const next = [...prev];
                    next[lineIdx] = { ...TERMINAL_LINES[lineIdx], text: current.slice(0, charIdx) };
                    return next;
                });
                setCharIdx(c => c + 1);
            }, 38);
            return () => clearTimeout(t);
        } else {
            const t = setTimeout(() => { setLineIdx(i => i + 1); setCharIdx(0); }, 600);
            return () => clearTimeout(t);
        }
    }, [lineIdx, charIdx]);

    const colorClass = (type) => ({
        cmd:  { color: '#f0a500', fontWeight: 600 },
        head: { color: '#505a70' },
        ok:   { color: '#34d399' },
    }[type] || { color: '#8b93a8' });

    return (
        <>
        <style>{`
            /* ── STATUS PILL ── */
            .hero-pill {
                display: inline-flex;
                align-items: center;
                gap: 8px;
                background: rgba(52,211,153,0.08);
                border: 1px solid rgba(52,211,153,0.25);
                padding: 5px 15px;
                border-radius: 9999px;
                font-family: var(--font-mono);
                font-size: 0.76rem;
                color: #34d399;
                margin-bottom: 22px;
                width: fit-content;
            }
            .hero-pill-dot {
                width: 7px; height: 7px;
                border-radius: 50%;
                background: #34d399;
                box-shadow: 0 0 8px #34d399;
                animation: heroPillBlink 1.4s ease-in-out infinite;
            }
            @keyframes heroPillBlink {
                0%,100% { opacity:1; } 50% { opacity:0.25; }
            }

            /* ── EYEBROW ── */
            .hero-eyebrow {
                font-family: var(--font-mono);
                font-size: 0.8rem;
                color: var(--gold);
                letter-spacing: 0.18em;
                text-transform: uppercase;
                margin-bottom: 14px;
                opacity: 0.85;
            }

            /* ── HEADING GOLD WORD ── */
            .hero-content h1 .gold-word {
                background: linear-gradient(90deg, #f6e31c, #fbbf24, #f0a500);
                background-size: 200% auto;
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
                animation: heroShimmer 2.8s linear infinite;
            }
            @keyframes heroShimmer {
                to { background-position: 200% center; }
            }

            /* ── CTA ROW ── */
            .hero-cta-row {
                display: flex;
                gap: 14px;
                align-items: center;
            }
            .btn-ghost {
                display: inline-flex;
                align-items: center;
                gap: 8px;
                background: transparent;
                color: var(--text-secondary);
                padding: 12px 22px;
                border-radius: var(--radius-md);
                font-size: 0.9rem;
                border: 1px solid var(--border);
                transition: var(--transition);
                font-family: var(--font-body);
                text-decoration: none;
            }
            .btn-ghost:hover {
                border-color: var(--gold);
                color: var(--gold);
                background: var(--gold-subtle);
            }

            /* ── TECH BADGES ── */
            .tech-stack span {
                display: inline-flex !important;
                align-items: center;
                gap: 6px;
            }
            .tech-icon { font-size: 0.88rem; }

            /* ── STATS STRIP ── */
            .hero-stats {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 1px;
                margin-top: 44px;
                background: var(--border);
                border: 1px solid var(--border);
                border-radius: var(--radius-md);
                overflow: hidden;
            }
            .hero-stat {
                background: var(--bg-card);
                padding: 16px 12px;
                text-align: center;
                transition: var(--transition);
            }
            .hero-stat:hover { background: var(--bg-hover); }
            .hero-stat-value {
                font-family: var(--font-display);
                font-size: 1.65rem;
                font-weight: 800;
                color: var(--gold);
                line-height: 1;
                margin-bottom: 5px;
            }
            .hero-stat-label {
                font-family: var(--font-mono);
                font-size: 0.68rem;
                color: var(--text-muted);
                text-transform: uppercase;
                letter-spacing: 0.07em;
            }

            /* ── PROFILE RING ── */
            .profile-ring-wrap {
                position: relative;
                width: 200px;
                height: 200px;
                margin: 0 auto 20px;
            }
            .profile-ring {
                position: absolute;
                inset: -10px;
                border-radius: 50%;
                background: conic-gradient(
                    #fbbf24 0deg, #fbbf24 60deg,
                    transparent 110deg, transparent 200deg,
                    #f0a500 260deg, #fbbf24 320deg, #f0a500 360deg
                );
                animation: heroSpinRing 5s linear infinite;
                z-index: 0;
            }
            .profile-ring-mask {
                position: absolute;
                inset: -5px;
                border-radius: 50%;
                background: var(--bg);
                z-index: 1;
            }
            /* Override original profile-photo to be circular */
            .hero-image .profile-photo {
                position: relative !important;
                z-index: 2 !important;
                width: 200px !important;
                height: 200px !important;
                border-radius: 50% !important;
                border: none !important;
                overflow: hidden !important;
                box-shadow: 0 0 36px rgba(240,165,0,0.2) !important;
                margin: 0 !important;
            }
            .hero-image .profile-photo img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                object-position: center;
            }
            @keyframes heroSpinRing {
                to { transform: rotate(360deg); }
            }

            /* Floating tags */
            .hero-float-tags {
                position: absolute;
                inset: 0;
                z-index: 3;
                pointer-events: none;
            }
            .hero-ftag {
                position: absolute;
                background: var(--bg-card);
                border: 1px solid var(--border);
                border-radius: 9999px;
                padding: 4px 11px;
                font-family: var(--font-mono);
                font-size: 0.7rem;
                white-space: nowrap;
                animation: heroFloat 4s ease-in-out infinite;
            }
            .hero-ftag-1 { top: 8px;  left: -58px; color: #60a5fa; border-color: rgba(96,165,250,0.35); animation-delay: 0s; }
            .hero-ftag-2 { top: 24px; right: -54px; color: #f0a500; border-color: rgba(240,165,0,0.35); animation-delay: 1.3s; }
            .hero-ftag-3 { bottom: 18px; left: -48px; color: #34d399; border-color: rgba(52,211,153,0.35); animation-delay: 2.6s; }
            @keyframes heroFloat {
                0%,100% { transform: translateY(0); }
                50%     { transform: translateY(-7px); }
            }

            /* ── TERMINAL UPGRADES ── */
            .terminal-cursor {
                display: inline-block;
                width: 7px; height: 13px;
                background: var(--gold);
                margin-left: 2px;
                vertical-align: text-bottom;
                border-radius: 2px;
                animation: heroCursorBlink 1s step-end infinite;
            }
            @keyframes heroCursorBlink {
                0%,49% { opacity:1; } 50%,100% { opacity:0; }
            }
            .terminal-header {
                display: flex;
                align-items: center;
                justify-content: space-between;
            }
            .terminal-header span {
                font-family: var(--font-mono);
                font-size: 0.74rem;
                color: var(--text-muted);
            }
            .terminal-live-badge {
                background: rgba(52,211,153,0.1);
                border: 1px solid rgba(52,211,153,0.28);
                color: #34d399;
                font-family: var(--font-mono);
                font-size: 0.65rem;
                padding: 2px 8px;
                border-radius: 9999px;
            }
            .terminal-body p {
                margin: 0;
                line-height: 1.85;
                font-family: var(--font-mono);
                font-size: 0.8rem;
            }

            /* ── SYSINFO ROW ── */
            .hero-sysinfo {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 8px 16px;
                background: var(--bg-card);
                border: 1px solid var(--border);
                border-radius: var(--radius-md);
                padding: 13px 16px;
                margin-top: 14px;
                width: 100%;
            }
            .sysinfo-row {
                display: flex;
                align-items: center;
                gap: 7px;
                font-family: var(--font-mono);
                font-size: 0.73rem;
            }
            .sysinfo-led {
                width: 6px; height: 6px;
                border-radius: 50%;
                background: #34d399;
                box-shadow: 0 0 5px #34d399;
                flex-shrink: 0;
            }
            .sysinfo-k { color: var(--text-muted); margin-right: 2px; }
            .sysinfo-v { color: var(--text-primary); }

            /* ── HERO IMAGE WRAPPER ── */
            .hero-image {
                display: flex !important;
                flex-direction: column !important;
                align-items: center !important;
                gap: 0 !important;
            }

            /* ── ENTRANCE ANIMATIONS ── */
            .hero-content > * {
                animation: heroFadeDown 0.55s ease both;
            }
            .hero-content > *:nth-child(1) { animation-delay: 0.04s; }
            .hero-content > *:nth-child(2) { animation-delay: 0.1s; }
            .hero-content > *:nth-child(3) { animation-delay: 0.17s; }
            .hero-content > *:nth-child(4) { animation-delay: 0.24s; }
            .hero-content > *:nth-child(5) { animation-delay: 0.31s; }
            .hero-content > *:nth-child(6) { animation-delay: 0.38s; }
            .hero-content > *:nth-child(7) { animation-delay: 0.46s; }
            .hero-image {
                animation: heroFadeUp 0.7s 0.2s ease both;
            }
            @keyframes heroFadeDown {
                from { opacity:0; transform: translateY(-15px); }
                to   { opacity:1; transform: translateY(0); }
            }
            @keyframes heroFadeUp {
                from { opacity:0; transform: translateY(18px); }
                to   { opacity:1; transform: translateY(0); }
            }

            /* ── RESPONSIVE ── */
            @media (max-width: 960px) {
                .hero-ftag-1,.hero-ftag-2,.hero-ftag-3 { display: none; }
            }
            @media (max-width: 480px) {
                .hero-cta-row { flex-direction: column; }
                .btn, .btn-ghost { width: 100%; justify-content: center; }
                .hero-sysinfo { grid-template-columns: 1fr; }
            }
        `}</style>

        <section id="home" className="hero">
            <div className="container">

                {/* ── LEFT SIDE ── */}
                <div className="hero-content">

                    <div className="hero-pill">
                        <span className="hero-pill-dot"></span>
                        Available for opportunities
                    </div>

                    <p className="hero-eyebrow">{'//'} sameer.tiruwa — devops engineer</p>

                    <h1>
                        DevOps &amp; <span className="gold-word">Cloud</span><br />
                        Engineer
                    </h1>

                    <p>
                        Automating infrastructure, building CI/CD pipelines,
                        and managing cloud-native applications at scale.
                    </p>

                    <div className="tech-stack">
                        {TECH_BADGES.map((b, i) => (
                            <span key={i}>
                                <span className="tech-icon">{b.icon}</span>
                                {b.label}
                            </span>
                        ))}
                    </div>

                    <div className="hero-cta-row">
                        <a href="#projects" className="btn">⚡ View Projects</a>
                        <a href="#contact" className="btn-ghost">📬 Contact Me</a>
                    </div>

                    <div className="hero-stats">
                        {[
                            ['25+', 'Projects'],
                            ['99%', 'Uptime'],
                            ['8+',  'Certs'],
                        ].map(([v, l]) => (
                            <div className="hero-stat" key={l}>
                                <div className="hero-stat-value">{v}</div>
                                <div className="hero-stat-label">{l}</div>
                            </div>
                        ))}
                    </div>

                </div>

                {/* ── RIGHT SIDE ── */}
                <div className="hero-image">

                    {/* Profile photo with spinning gold ring */}
                    <div className="profile-ring-wrap">
                        <div className="profile-ring"></div>
                        <div className="profile-ring-mask"></div>
                        <div className="profile-photo">
                            <img src={photo} alt="Sameer Tiruwa" />
                        </div>
                        <div className="hero-float-tags">
                            <span className="hero-ftag hero-ftag-1">⎈ K8s</span>
                            <span className="hero-ftag hero-ftag-2">☁️ AWS</span>
                            <span className="hero-ftag hero-ftag-3">✓ CI/CD</span>
                        </div>
                    </div>

                    {/* Terminal with live typing */}
                    <div className="terminal">
                        <div className="terminal-header">
                            <div className="terminal-dots">
                                <span className="dot red"></span>
                                <span className="dot yellow"></span>
                                <span className="dot green"></span>
                            </div>
                            <span>bash — sameer@devops</span>
                            <span className="terminal-live-badge">● LIVE</span>
                        </div>
                        <div className="terminal-body">
                            {lines.map((line, i) => (
                                <p key={i} style={colorClass(line.type)}>
                                    {line.text}
                                    {i === lines.length - 1 && !done && (
                                        <span className="terminal-cursor" />
                                    )}
                                </p>
                            ))}
                            {done && <p><span className="terminal-cursor" /></p>}
                        </div>
                    </div>

                    {/* System info */}
                    <div className="hero-sysinfo">
                        {[
                            ['ENV',    'production'],
                            ['REGION', 'ap-south-1'],
                            ['PODS',   '12 running'],
                            ['UPTIME', '99.97%'],
                        ].map(([k, v]) => (
                            <div className="sysinfo-row" key={k}>
                                <span className="sysinfo-led"></span>
                                <span className="sysinfo-k">{k}</span>
                                <span className="sysinfo-v">{v}</span>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
        </>
    );
};

export default Hero;