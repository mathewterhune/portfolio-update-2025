import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('');
  const [pastHero, setPastHero] = useState(false); // This keeps track of whether the user has scrolled pas the hero section
  const [isMobile, setIsMobile] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

///

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
  // Check if the user is on a mobile device
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false); // Close mobile menu on desktop view
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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
  },);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }

    setIsMobileMenuOpen(false); // Close mobile menu after scrolling
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        pastHero ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-white/10 backdrop-blur-sm border-b border-gray-200 shadow-sm'
      }`}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16 md:justify-center">
            {/* Logo/Brand - visible on mobile */}
            <div className="md:hidden">
              <span className="text-xl font-bold text-gray-800">Mathew Terhune's Portfolio</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex">
              <div className={`flex space-x-1 rounded-full p-1 transition-all duration-300 ${
                pastHero ? 'bg-white/80 backdrop-blur-sm shadow-lg' : 'bg-gray-100'
              }`}>
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

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
              onClick={toggleMobileMenu}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center space-y-1">
                <motion.span
                  className="w-5 h-0.5 bg-current block"
                  animate={isMobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.2 }}
                />
                <motion.span
                  className="w-5 h-0.5 bg-current block"
                  animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                  transition={{ duration: 0.2 }}
                />
                <motion.span
                  className="w-5 h-0.5 bg-current block"
                  animate={isMobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.2 }}
                />
              </div>
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Mobile Menu */}
            <motion.div
              className="fixed top-16 left-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-gray-200 z-50 md:hidden overflow-hidden"
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <div className="py-4">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full text-left px-6 py-3 text-base font-medium transition-colors duration-200 ${
                      activeSection === item.id
                        ? 'bg-blue-500 text-white'
                        : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
                    }`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;