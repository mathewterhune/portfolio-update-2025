import React, { useState, useEffect } from "react";

import Projects from "./sections/projects.jsx";
import QuickInfo from "./sections/QuickInfo.jsx";
import Header from "./sections/Header.jsx";
import Skills from "./sections/Skills.jsx"; 
import Education from "./sections/Education.jsx";
import Experience from "./sections/Experience.jsx";
import ParticlesComponent from "./components/particles.jsx"; 
import HeroSection from "./sections/HeroSection.jsx";
import Navigation from "./sections/Navigation.jsx";



export default function App() {
    const [blurBackground, setBlurBackground] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const heroSection = document.getElementById("hero");
            if (heroSection) {
                const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
                setBlurBackground(window.scrollY < heroBottom);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);



  return (
    <div className="relative min-h-screen bg-gray-50 overflow-hidden mt-8">
      {/* Background Particles */}
      <div
        className={`fixed inset-0 transition-all duration-500 ease-in-out ${blurBackground ? "blur-md" : "blur-none"}`}
        style={{ zIndex: 0}}
        >

        <ParticlesComponent id="particles" />
      </div>
      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <div className="relative z-10 flex justify-center">
        <div className="w-full max-w-6xl mt-10 bg-gray-300 shadow-lg rounded-2xl">
          <div id="hero"><HeroSection darkMode={true} /></div>
          <div id="header"><Header /></div>
          <div id="quick-info"><QuickInfo /></div>
          <div id="experience"><Experience /></div>
          <div id="education"><Education /></div>
          <div id="projects"><Projects /></div>
          <div id="skills"><Skills /></div>
        </div>
      </div>
    </div>
  );
}