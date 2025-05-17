import Projects from "./sections/projects.jsx";
import Hero from "./sections/hero.jsx";
import Header from "./sections/Header.jsx";
import Skills from "./sections/Skills.jsx"; 
import Education from "./sections/education.jsx";
import Experience from "./sections/experience.jsx";
import ParticlesComponent from "./components/particles.jsx"; 



export default function App() {
  return (
    <div className="relative min-h-screen bg-gray-50 overflow-hidden">
      {/* Background Particles */}
      <ParticlesComponent id="particles" />

      {/* Main Content */}
      <div className="relative z-10 flex justify-center">
        <div className="w-full max-w-6xl mt-10 bg-gray-300 shadow-lg rounded-2xl">
          <Header />
          <Hero />
          <Experience />
          <Education />
          <Skills />
          <Projects />
        </div>
      </div>
    </div>
  );
}