'use client'
import Image from 'next/image';
import Navbar from './Navbar';
import {
    SiGithub,
} from 'react-icons/si';
import Typewriter from 'typewriter-effect';
import { useEffect, useState } from 'react';
import TechStackIcons from './techstack_icons';

export default function HomePage() {
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

    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

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
                height: '90vh'
            }}>
                {/* Left Side: Details */}
                <div className="details" style={{ width: '45%' }}>
                    <h1 style={{ fontSize: '3rem', margin: 0 }}>Meghanand Gejjela</h1>
                    <p style={{ fontSize: '1.25rem', color: '#38bdf8' }}>MS Computer Science | University of Michigan, Ann Arbor</p>

                    <div style={{ color: '#94a3b8', marginTop: '20px', display: "flex", gap: "5px" }}>
                        <span>I write code when I'm  </span>
                        <span style={{ color: '#38bdf8', fontWeight: 'bold' }}>
                            {isMounted ? (
                                <Typewriter
                                    options={{
                                        strings: [' bored.', ' high on caffeine.', " don't know what else to do.", ' done existing.'],
                                        autoStart: true,
                                        loop: true,
                                        delay: 50,
                                        deleteSpeed: 35,
                                    }}
                                />
                            ) : (
                                "..."
                            )}
                        </span>
                    </div>

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
                        fill // Keep the fill
                        sizes="(max-width: 768px) 100vw, 40vw"
                        style={{
                            objectFit: 'cover',
                            borderRadius: '20px',
                            boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.5)'
                        }}
                        priority
                    />
                </div>

            </div>

        </div >
    );
}