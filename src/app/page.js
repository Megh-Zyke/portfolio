'use client'
import Image from "next/image";
import styles from "./page.module.css";
import HomePage from "./components/HomePage";
import Terminal from "./components/Terminal";
import AboutMe from "./components/AboutMe";
import { useState } from "react";

export default function Home() {

  const [showAboutMe, setShowAboutMe] = useState(false);

  return (
    <>

      <HomePage />
      <div className="buttons" style={{ display: 'flex', gap: '10px', alignItems: 'center', justifyContent: 'center' }}>

        <button
          onClick={(e) => { e.preventDefault(); setShowAboutMe(false) }}
          className={!showAboutMe ? styles.active : styles.buttonStyle}
        >
          Talk to Me?
        </button>

        <button
          onClick={(e) => { e.preventDefault(); setShowAboutMe(true) }}
          className={showAboutMe ? styles.active : styles.buttonStyle}
        >
          About Me?
        </button>

      </div>

      <div id="about">
        <div style={{ display: showAboutMe ? 'block' : 'none' }}>
          <AboutMe />
        </div>

        <div style={{ display: !showAboutMe ? 'block' : 'none' }}>
          <Terminal />
        </div>
      </div>

    </>
  );
}
