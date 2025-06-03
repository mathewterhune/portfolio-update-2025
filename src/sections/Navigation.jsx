import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('');
  const [pastHero, setPastHero] = useState(false); // This keeps track of whether the user has scrolled pas the hero section

  const navItems = [
    // { id: 'hero', label: 'Hero' },
    { id: 'hero', label: 'Home' },
    { id: 'header', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100; // Offset for better detection

        // Get the header section
        const headerSection = document.getElementById('header');
        if (headerSection) {
            // use the bottom of the header section to determine if we have scrolled past the hero section
            const headerBottom = headerSection.offsetTop + headerSection.offsetHeight;
            setPastHero(scrollPosition > headerBottom);
        }

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Set initial active section

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${pastHero ? '' : 'bg-white/10 backdrop-blur-sm border-b border-gray-200 shadow-sm'}`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-center items-center h-16">
          <div className={`flex space-x-1 rounded-full p-1 transition-all duration-300 ${pastHero ? 'bg-white/80 backdrop-blur-sm shadow-lg' : 'bg-gray-100'}`}>
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  activeSection === item.id
                    ? 'bg-blue-500 text-white shadow-sm'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;