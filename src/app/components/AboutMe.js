'use client';
import { useState } from 'react';
import styles from './AboutMe.module.css';
import Image from 'next/image';
import umichLogo from '../../../public/umichL.jpeg';
import srmLogo from '../../../public/srmLogo.webp';


const education = [
    {
        key: 'umich',
        year: '2025 — Present',
        title: 'University of Michigan, Ann Arbor',
        sub: 'M.S. Computer Science',
        gpa: '3.9/4.0',
        current: true,
        logo: umichLogo,
    },
    {
        key: 'srm',
        year: '2021 — 2025',
        title: 'SRM Institute of Science and Technology',
        sub: 'B.Tech Artificial Intelligence',
        gpa: '9.65/10.0',
        current: false,
        logo: srmLogo,
    },
];

const experiences = [
    {
        key: 'exp1',
        type: 'internship',
        typeLabel: 'Internship',
        title: 'Infosys',
        sub: 'iOS Application Developer Intern',
        year: 'Feb 2024 - May 2024',
    },
    {
        key: 'exp2',
        type: 'research',
        typeLabel: 'Research Project',
        title: 'FEAST Project - UMich',
        sub: 'Super Conductor',
        year: 'Jan 2026 - Present',
    },
    {
        key: 'exp3',
        type: 'research',
        typeLabel: 'Independent Research',
        title: 'Univeristy of Michigan- Ann Arbor',
        sub: 'LLM Safety Research',
        year: 'Feb 2026 - Present',
    },


    {
        key: 'exp4',
        type: 'research',
        typeLabel: 'Research',
        title: 'Ross School of Business - UMich',
        sub: 'Research Assistant II',
        year: 'March 2026 - Present',
    },

];

const skills = ['Python', 'PyTorch', 'LLM Safety', 'React', 'ML Systems'];

export default function AboutMe() {
    const [activeEdu, setActiveEdu] = useState(null);

    return (
        <section className={styles.section} >
            <div className={styles.grid}>

                {/* TOP LEFT — About */}
                <div className={styles.about}>
                    <span className={styles.tag}>CS + AI Researcher</span>
                    <p className={styles.bio}>
                        Working through problems and understanding why systems behave the way they do has always excited me.
                        That’s why the mysteries behind the intricacies and apparent randomness of LLM generation fascinate me.
                        <br />
                        I build and study AI systems — with a focus on LLM safety, reliability,
                        and what it means for models to behave predictably.
                        <br />
                        Currently in grad school
                        at UMich, bridging research and engineering to make AI systems that are
                        actually trustworthy.
                    </p>
                    <div className={styles.skills}>
                        {skills.map((s) => (
                            <span key={s} className={styles.pill}>{s}</span>
                        ))}
                    </div>
                </div>

                {/* TOP RIGHT — Education Timeline */}
                <div className={styles.timeline}>
                    <p className={styles.sectionLabel}>Education</p>
                    <div className={styles.track}>
                        <div className={styles.trackLine} />
                        {education.map((item) => (
                            <div
                                key={item.key}
                                className={`${styles.tlItem} ${activeEdu === item.key ? styles.tlActive : ''}`}
                                onClick={() => setActiveEdu(activeEdu === item.key ? null : item.key)}
                            >
                                <p className={styles.tlYear}>{item.year}</p>
                                <div className={styles.tlDot} />
                                <Image
                                    src={item.logo}
                                    alt={item.title}
                                    width={50}
                                    height={50}
                                />
                                <p className={styles.tlTitle}>{item.title}</p>
                                <p className={styles.tlSub}>{item.sub}</p>
                                <p className={styles.tlSub}>{item.gpa}</p>
                                {item.current && <span className={styles.badge}>Current</span>}

                            </div>
                        ))}
                    </div>
                </div>

                {/* BOTTOM FULL WIDTH — Experience */}
                <div className={styles.experience}>
                    <p className={styles.sectionLabel}>Experience</p>
                    <div className={styles.flowRow}>
                        {experiences.map((exp, i) => (
                            <div key={exp.key} className={styles.flowItem}>
                                <div className={`${styles.flowNode} ${styles[exp.type]}`}>
                                    <p className={`${styles.nodeType} ${styles[exp.type + 'Type']}`}>
                                        {exp.typeLabel}
                                    </p>
                                    <p className={styles.nodeTitle}>{exp.title}</p>
                                    <p className={styles.nodeSub}>{exp.sub}</p>
                                    <p className={styles.nodeYear}>{exp.year}</p>
                                </div>
                                {i < experiences.length - 1 && (
                                    <span className={styles.arrow}>→</span>
                                )}
                            </div>
                        ))}
                    </div>
                    <div className={styles.legend}>
                        <div className={styles.legendItem}>
                            <span className={`${styles.legendDot} ${styles.legendResearch}`} />
                            Research
                        </div>
                        <div className={styles.legendItem}>
                            <span className={`${styles.legendDot} ${styles.legendInternship}`} />
                            Internship
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}