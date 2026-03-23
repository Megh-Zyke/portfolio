import React from "react";

export default function Navbar() {
    return (
        <nav style={{ padding: '20px', display: 'flex', justifyContent: 'center', gap: '40px', borderBottom: '1px solid #1e293b', position: 'sticky', top: 0, backgroundColor: '#26262C', zIndex: 10 }}>
            <a href="#about" style={{ color: '#94a3b8', textDecoration: 'none' }}>About</a>
            <a href="#projects" style={{ color: '#94a3b8', textDecoration: 'none' }}>Projects</a>
            <a href="#contact" style={{ color: '#94a3b8', textDecoration: 'none' }}>Contact</a>
            <a href="https://medium.com/@meghanand1234" style={{ color: '#94a3b8', textDecoration: 'none' }}>Medium</a>
        </nav>
    );
}