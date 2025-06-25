import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ExternalLink, Clock, ChevronDown, Building } from 'lucide-react';

const Experience = () => {
  const [expandedSections, setExpandedSections] = useState({});
  
  const experiences = [
    {
      company: "Columbia Basin Trust",
      company_link: "https://ourtrust.org/",
      title: "Information Systems, CO-OP",
      location: "Castlegar, BC",
      timeframe: "May 2024 - August 2024",
      length: "4 Months",
      type: "Co-op",
      description: "Gained hands-on experience in IT support and infrastructure management while contributing to organizational digital transformation initiatives. Focused on technical problem-solving, research, and system maintenance in a professional environment.",
      bullets: [
        "Responded to and resolved support tickets, ensuring timely and effective troubleshooting of technical issues.",
        "Researched, tested, documented, presented, and prototyped the integration of Microsoft Power BI to management",
        "Assisted in regular servicing and secure data wiping on physical servers.",
        "Managed and maintained multiple virtual machines, creating a virtual network for communication."
      ]
    },
    {
      company: "Cortex Labs",
      company_link: "https://decision-map.com/",
      title: "Undergraduate Research Assistant and Software Developer",
      location: "Victoria, BC",
      timeframe: "September 2023 - April 2025",
      length: "1 Year, 8 months",
      type: "Research",
      description: "Contributing to cutting-edge research in brain injury, mental health, and addiction through software development and data visualization. Collaborating with researchers to create tools that advance understanding in neuropsychology and support clinical decision-making.",
      bullets: [
        "Designed and helped maintain a visualization tool relating to brain injury, mental health, and addiction.",
        "Project has been presented globally at events including Canadian MP, Canadian Traumatic Brain Injury Research Consortium, and the Global Neuropsychology Congress in Portugal",
        "Designed landing website for the project. (no longer in use)"
      ]
    }
  ];

  // Initialize expanded state for all sections (default to expanded)
  React.useEffect(() => {
    const initialState = {};
    experiences.forEach((_, index) => {
      initialState[index] = true; // Default to expanded
    });
    setExpandedSections(initialState);
  }, []);

  const toggleSection = (index) => {
    setExpandedSections(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'Co-op':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Research':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="w-full p-10">
      <motion.h1 
        className="text-4xl text-gray-700 font-bold mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Experience
      </motion.h1>
      
      <motion.div 
        className="space-y-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
          >
            {/* Header Section */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 border-b border-gray-100">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Briefcase className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <motion.h3 
                      className="text-xl font-bold text-gray-900 mb-1"
                      whileHover={{ scale: 1.02 }}
                    >
                      {exp.company_link ? (
                        <a 
                          href={exp.company_link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="hover:text-green-600 transition-colors inline-flex items-center gap-1"
                        >
                          {exp.company}
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      ) : (
                        exp.company
                      )}
                    </motion.h3>
                    <p className="text-lg font-medium text-gray-700 mb-2">{exp.title}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {exp.timeframe}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {exp.length}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Type Badge */}
                <motion.div 
                  className={`border rounded-full px-4 py-2 self-start ${getTypeColor(exp.type)}`}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex items-center gap-2">
                    <Building className="w-4 h-4" />
                    <span className="font-semibold">{exp.type}</span>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-6">
              {/* Description */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-3">Role Overview</h4>
                <p className="text-gray-600 leading-relaxed">{exp.description}</p>
              </div>

              {/* Key Responsibilities */}
              <div>
                <motion.button
                  onClick={() => toggleSection(index)}
                  className="flex items-center justify-between w-full mb-4 text-left group"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <h4 className="text-lg font-semibold text-gray-800 group-hover:text-green-600 transition-colors">
                    Key Responsibilities & Achievements
                  </h4>
                  <motion.div
                    animate={{ rotate: expandedSections[index] ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-gray-500 group-hover:text-green-600 transition-colors"
                  >
                    <ChevronDown className="w-5 h-5" />
                  </motion.div>
                </motion.button>
                
                <AnimatePresence initial={false}>
                  {expandedSections[index] && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="space-y-3">
                        {exp.bullets.map((bullet, bulletIndex) => (
                          <motion.div
                            key={bulletIndex}
                            className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors duration-200"
                            whileHover={{ scale: 1.01 }}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: bulletIndex * 0.1 }}
                          >
                            <div className="flex items-start gap-3">
                              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                              <p className="text-gray-700 leading-relaxed">{bullet}</p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Experience;