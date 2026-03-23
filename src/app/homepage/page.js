'use client'
import Image from 'next/image';
import Navbar from '../components/navbar';
import {
    SiReact, SiNodedotjs, SiNextdotjs, SiJavascript,
    SiPython, SiFlask, SiCplusplus, SiC,
    SiPostgresql, SiMongodb,
    SiTensorflow, SiPytorch, SiHuggingface, SiLangchain, SiOpenai, SiGithub,
} from 'react-icons/si';
import { FaCoffee } from 'react-icons/fa';

import TechStackIcons from '../components/techstack_icons';

export default function HomePage() {

    const projects = [
        { title: "Data Structures Viz", tech: "C++, React", desc: "Interactive visualization of Linked Lists and Trees." },
        { title: "Task Manager API", tech: "Node.js, PostgreSQL", desc: "RESTful API with user authentication and CRUD operations." },
        { title: "Personal Portfolio", tech: "Next.js, Tailwind", desc: "This site! Built with modern web standards." },
    ];

    const buttonStyle = {
        padding: '10px 24px',
        borderRadius: '8px',
        border: '2px solid #38bdf8',
        color: '#38bdf8',
        textDecoration: 'none',
        fontSize: '0.9rem',
        fontWeight: 'bold',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
        textAlign: 'center'
    };

    return (
        <div>

            {/* 1. Navbar */}
            <Navbar />
            {/* 2. Hero Section */}

            <div className="hero" style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '5% 10%',
                height: '80vh'
            }}>
                {/* Left Side: Details */}
                <div className="details" style={{ width: '45%' }}>
                    <h1 style={{ fontSize: '3rem', margin: 0 }}>Meghanand Gejjela</h1>
                    <p style={{ fontSize: '1.25rem', color: '#38bdf8' }}>MS Computer Science | University of Michigan,Ann Arbor</p>
                    <p style={{ color: '#94a3b8', marginTop: '20px' }}>
                        I write code when I'm bored, or high on caffeine.
                    </p>
                    <TechStackIcons />
                    <div className="button-row" style={{ marginTop: '30px', display: 'flex', gap: '15px' }}>

                        {/* GitHub Button */}
                        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer"
                            style={{ ...buttonStyle, display: 'flex', alignItems: 'center', gap: '8px' }}
                            onMouseOver={e => { e.currentTarget.style.backgroundColor = '#333'; e.currentTarget.style.borderColor = '#333'; e.currentTarget.style.color = '#fff'; }}
                            onMouseOut={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.borderColor = '#38bdf8'; e.currentTarget.style.color = '#38bdf8'; }}>
                            <SiGithub size={18} />
                            GitHub
                        </a>

                        {/* LinkedIn Button */}
                        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer"
                            style={{ ...buttonStyle, display: 'flex', alignItems: 'center', gap: '8px' }}
                            onMouseOver={e => { e.currentTarget.style.backgroundColor = '#0077b5'; e.currentTarget.style.borderColor = '#0077b5'; e.currentTarget.style.color = '#fff'; }}
                            onMouseOut={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.borderColor = '#38bdf8'; e.currentTarget.style.color = '#38bdf8'; }}>

                            LinkedIn
                        </a>

                        {/* Resume Button */}
                        <a href="/resume.pdf" target="_blank"
                            style={{ ...buttonStyle, backgroundColor: '#38bdf8', color: '#0f172a' }}
                            onMouseOver={e => { e.currentTarget.style.opacity = '0.8'; }}
                            onMouseOut={e => { e.currentTarget.style.opacity = '1'; }}>
                            View Resume
                        </a>

                    </div>

                </div>

                {/* Image Container */}
                <div className="image-container" style={{
                    width: '40%',
                    position: 'relative',
                    height: '100%'
                }}>

                    <Image
                        src="/myPhoto.png"
                        alt="Meghanand Gejjela"
                        fill
                        style={{
                            objectFit: 'cover',
                            borderRadius: '20px',
                            boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.5)'
                        }}
                        priority
                    />
                </div>

            </div>
            {/* 3. About Section */}
            < section id="about" style={{ padding: '60px 20px', maxWidth: '800px', margin: '0 auto' }
            }>

            </section >

            {/* 4. Projects Section */}
            < section id="projects" style={{ padding: '60px 20px', maxWidth: '1000px', margin: '0 auto' }}>
                <h2 style={{ marginBottom: '30px' }}>Projects</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
                    {projects.map((p, i) => (
                        <div key={i} style={{ background: '#1e293b', padding: '25px', borderRadius: '12px', transition: '0.3s' }}>
                            <h3 style={{ color: '#38bdf8', marginTop: 0 }}>{p.title}</h3>
                            <p style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 'bold' }}>{p.tech}</p>
                            <p style={{ color: '#94a3b8' }}>{p.desc}</p>
                        </div>
                    ))}
                </div>
            </section >

            {/* 5. Contact Section */}
            < section id="contact" style={{ padding: '80px 20px', textAlign: 'center', backgroundColor: '#1e293b' }}>
                <h2>Let's Connect</h2>
                <p>Email: <a href="mailto:your.email@example.com" style={{ color: '#38bdf8' }}>your.email@example.com</a></p>
                <div style={{ marginTop: '20px' }}>
                    <a href="https://github.com" style={{ margin: '0 10px', color: '#fff' }}>GitHub</a>
                    <a href="https://linkedin.com" style={{ margin: '0 10px', color: '#fff' }}>LinkedIn</a>
                </div>
            </section >

        </div >
    );
}