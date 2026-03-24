import React from "react";
import { useRouter } from 'next/navigation';
export default function Navbar() {

    const router = useRouter();

    const handleNavClick = (id) => {
        if (window.location.pathname !== '/') {
            router.push(`/`);
        } else {
            document.getElementById(id)?.scrollIntoView({
                behavior: 'smooth',
            });
        }
    };
    return (
        <nav style={{
            // 1. Spacing & Positioning
            padding: '12px 24px',
            margin: '20px auto', // Centers the nav and gives it space from the top
            display: 'flex',
            justifyContent: 'center',
            gap: '40px',
            position: 'sticky',
            top: '20px',
            zIndex: 10,
            width: 'fit-content', // Only spans the amount of buttons present

            // 2. Glass Finish
            backgroundColor: 'rgba(38, 38, 44, 0.7)', // Semi-transparent
            backdropFilter: 'blur(12px)', // The "glass" frost effect
            WebkitBackdropFilter: 'blur(12px)', // Safari support

            // 3. Rounded Edges & Border
            borderRadius: '100px', // Pill shape
            border: '1px solid rgba(255, 255, 255, 0.1)', // Subtle highlight
            boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)', // Adds depth
        }}>
            {/* Your buttons/links here */}
            <a onClick={() => handleNavClick('about')} style={{ color: '#94a3b8', textDecoration: 'none', cursor: 'pointer' }}>About</a>
            <a onClick={() => handleNavClick('projects')} style={{ color: '#94a3b8', textDecoration: 'none', cursor: 'pointer' }}>Projects</a>
            <a onClick={() => handleNavClick('contact')} style={{ color: '#94a3b8', textDecoration: 'none', cursor: 'pointer' }}>Contact</a>
            <a href="/medium" style={{ color: '#94a3b8', textDecoration: 'none', cursor: 'pointer' }}>Medium</a>
        </nav>
    );
}