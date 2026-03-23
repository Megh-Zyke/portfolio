import {
    SiReact, SiNodedotjs, SiNextdotjs, SiJavascript,
    SiPython, SiFlask, SiCplusplus, SiC,
    SiPostgresql, SiMongodb,
    SiTensorflow, SiPytorch, SiHuggingface, SiLangchain, SiOpenai, SiGithub,
} from 'react-icons/si';
import React from "react";

const iconRowStyle = { display: 'flex', flexWrap: 'wrap', gap: '18px', fontSize: '1.8rem', color: '#94a3b8', marginTop: '20px' };
const iconStyle = { cursor: 'pointer', transition: '0.2s ease-in-out' };

export default function TechStackIcons() {
    return (

        <div style={iconRowStyle}>
            <SiPytorch title="PyTorch" style={iconStyle} onMouseOver={e => e.target.style.color = '#EE4C2C'} onMouseOut={e => e.target.style.color = '#94a3b8'} />
            <SiTensorflow title="TensorFlow" style={iconStyle} onMouseOver={e => e.target.style.color = '#FF6F00'} onMouseOut={e => e.target.style.color = '#94a3b8'} />
            <SiHuggingface title="Hugging Face (NLP)" style={iconStyle} onMouseOver={e => e.target.style.color = '#FFD21E'} onMouseOut={e => e.target.style.color = '#94a3b8'} />
            <SiLangchain title="LangChain (LLM Orchestration)" style={iconStyle} onMouseOver={e => e.target.style.color = '#ffffff'} onMouseOut={e => e.target.style.color = '#94a3b8'} />
            <SiOpenai title="OpenAI API / LLMs" style={iconStyle} onMouseOver={e => e.target.style.color = '#74aa9c'} onMouseOut={e => e.target.style.color = '#94a3b8'} />
            <SiPython title="Python" style={iconStyle} onMouseOver={e => e.target.style.color = '#3776AB'} onMouseOut={e => e.target.style.color = '#94a3b8'} />
            <SiCplusplus title="C++" style={iconStyle} onMouseOver={e => e.target.style.color = '#00599C'} onMouseOut={e => e.target.style.color = '#94a3b8'} />
            <SiC title="C" style={iconStyle} onMouseOver={e => e.target.style.color = '#A8B9CC'} onMouseOut={e => e.target.style.color = '#94a3b8'} />
            <SiFlask title="Flask" style={iconStyle} onMouseOver={e => e.target.style.color = '#ffffff'} onMouseOut={e => e.target.style.color = '#94a3b8'} />
            <SiPostgresql title="SQL (PostgreSQL)" style={iconStyle} onMouseOver={e => e.target.style.color = '#4169E1'} onMouseOut={e => e.target.style.color = '#94a3b8'} />
            <SiMongodb title="MongoDB" style={iconStyle} onMouseOver={e => e.target.style.color = '#47A248'} onMouseOut={e => e.target.style.color = '#94a3b8'} />
            <SiJavascript title="JavaScript" style={iconStyle} onMouseOver={e => e.target.style.color = '#F7DF1E'} onMouseOut={e => e.target.style.color = '#94a3b8'} />
            <SiReact title="React" style={iconStyle} onMouseOver={e => e.target.style.color = '#61DAFB'} onMouseOut={e => e.target.style.color = '#94a3b8'} />
            <SiNextdotjs title="Next.js" style={iconStyle} onMouseOver={e => e.target.style.color = '#ffffff'} onMouseOut={e => e.target.style.color = '#94a3b8'} />
            <SiNodedotjs title="Node.js" style={iconStyle} onMouseOver={e => e.target.style.color = '#339933'} onMouseOut={e => e.target.style.color = '#94a3b8'} />
        </div>

    );
}