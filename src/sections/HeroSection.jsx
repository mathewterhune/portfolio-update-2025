import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail, Download, FolderOpen, GraduationCap, User, Code } from 'lucide-react';

const HeroSection = ({ darkMode }) => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className={`min-h-screen flex items-center justify-center relative overflow-hidden rounded-2xl ${
      darkMode ? 'bg-gray-900 text-white' : 'bg-gradient-to-br from-blue-50 via-white to-purple-50 text-gray-900'
    }`}>
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute -top-40 -right-40 w-80 h-80 rounded-full ${
          darkMode ? 'bg-blue-500/10' : 'bg-blue-200/30'
        } blur-3xl`}></div>
        <div className={`absolute -bottom-40 -left-40 w-80 h-80 rounded-full ${
          darkMode ? 'bg-purple-500/10' : 'bg-purple-200/30'
        } blur-3xl`}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className={`w-32 h-32 sm:w-40 sm:h-40 mx-auto rounded-full ${
              darkMode ? 'bg-gray-700' : 'bg-gray-300'
            } flex items-center justify-center text-4xl sm:text-5xl font-bold ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              MT
            </div>
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className={`${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                Full Stack
              </span>
              <br />
              Developer
            </h1>
            
            <motion.p 
              className={`text-lg sm:text-xl lg:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Creating digital experiences with modern technologies. 
              Passionate about clean code, user experience, and solving complex problems.
            </motion.p>

            {/* Main Navigation Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.button
                onClick={() => scrollToSection('projects')}
                className={`px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:cursor-pointer ${
                  darkMode 
                    ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                    : 'bg-blue-600 hover:bg-blue-700 text-white'
                } shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center gap-2`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FolderOpen size={20} />
                View My Projects
              </motion.button>
              
              <motion.button
                onClick={() => scrollToSection('education')}
                className={`px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 border-2 hover:cursor-pointer ${
                  darkMode 
                    ? 'border-gray-600 text-gray-300 hover:bg-gray-800' 
                    : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                } hover:shadow-lg transform hover:-translate-y-1 inline-flex items-center gap-2`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <GraduationCap size={20} />
                My Education
              </motion.button>
            </motion.div>

            {/* Secondary Action Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-12"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <motion.button
                onClick={() => scrollToSection('about')}
                className={`px-6 py-3 rounded-full font-medium text-base transition-all duration-300 hover:cursor-pointer ${
                  darkMode 
                    ? 'bg-gray-700 hover:bg-gray-600 text-gray-300' 
                    : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
                } hover:shadow-md transform hover:-translate-y-0.5 inline-flex items-center gap-2`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <User size={18} />
                About Me
              </motion.button>

              <motion.button
                onClick={() => scrollToSection('skills')}
                className={`px-6 py-3 rounded-full font-medium text-base transition-all duration-300 hover:cursor-pointer ${
                  darkMode 
                    ? 'bg-gray-700 hover:bg-gray-600 text-gray-300' 
                    : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
                } hover:shadow-md transform hover:-translate-y-0.5 inline-flex items-center gap-2`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Code size={18} />
                Skills & Tech
              </motion.button>
              
              <motion.button
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/Mathew_Terhune_Resume.pdf';
                  link.download = 'Mathew_Terhune_Resume.pdf';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
                className={`px-6 py-3 rounded-full font-medium text-base transition-all duration-300 hover:cursor-pointer ${
                  darkMode 
                    ? 'bg-purple-600 hover:bg-purple-700 text-white' 
                    : 'bg-purple-600 hover:bg-purple-700 text-white'
                } hover:shadow-md transform hover:-translate-y-0.5 inline-flex items-center gap-2`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={18} />
                Download Resume
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-16 pb-10"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className={`text-sm font-medium mb-2 sm:mb-0 sm:mr-4 ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Connect with me:
              </div>
              <div className="flex space-x-4">
                {[
                  { icon: Github, href: "https://github.com/mathewterhune", label: "View GitHub", description: "Browse my code repositories" },
                  { icon: Linkedin, href: "https://www.linkedin.com/in/mathew-terhune-b07749235/", label: "LinkedIn Profile", description: "Professional network & experience" },
                  { icon: Mail, href: "mailto:mathewterhune@gmail.com", label: "Send Email", description: "Get in touch directly" }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    className={`group relative px-4 py-3 rounded-lg transition-all duration-300 ${
                      darkMode 
                        ? 'bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white' 
                        : 'bg-white hover:bg-gray-50 text-gray-600 hover:text-gray-900'
                    } shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center gap-3`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                    <div className="flex flex-col">
                      <span className="font-medium text-sm">{social.label}</span>
                      <span className={`text-xs ${
                        darkMode ? 'text-gray-400' : 'text-gray-500'
                      }`}>
                        {social.description}
                      </span>
                    </div>
                    
                    {/* Tooltip for mobile/additional context */}
                    <div className={`absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 rounded-md text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none ${
                      darkMode 
                        ? 'bg-gray-700 text-gray-200' 
                        : 'bg-gray-900 text-white'
                    }`}>
                      {social.description}
                      <div className={`absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent ${
                        darkMode ? 'border-t-gray-700' : 'border-t-gray-900'
                      }`}></div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
            onClick={() => scrollToSection('projects')}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="flex flex-col items-center gap-2">
              <span className={`text-sm font-medium ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                Explore My Work
              </span>
              <ChevronDown 
                size={32} 
                className={`${darkMode ? 'text-gray-400' : 'text-gray-500'} hover:text-blue-600 transition-colors`} 
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;