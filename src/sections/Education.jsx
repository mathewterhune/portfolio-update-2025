import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, ExternalLink, Award, ChevronDown, ChevronUp } from 'lucide-react';

const Education = () => {
  const [expandedSections, setExpandedSections] = useState({}); // Track expanded state for each education item
  
  const education = [
    {
      institution: "University of Victoria",
      institution_link: "https://www.uvic.ca/",
      degree: "Bachelor of Science in Computer Science",
      location: "Victoria, BC",
      timeframe: "September 2021 - April 2025",
      gpa: "7.5/9.0",
      description: "Comprehensive computer science program covering theoretical foundations and practical applications. Focused on algorithms, data structures, software engineering principles, and modern development practices. Emphasized problem-solving, mathematical reasoning, and collaborative software development.",
      relevantCourses: [
        {
          code: "CSC 225",
          name: "Algorithms and Data Structures I",
          link: "https://www.uvic.ca/calendar/undergrad/#/courses/SyEl1F6XE?bc=true&bcCurrent=CSC225%20-%20Algorithms%20and%20Data%20Structures%20I&bcGroup=Computer%20Science%20(CSC)&bcItemType=courses"
        },
        {
          code: "CSC 226",
          name: "Algorithms and Data Structures II",
          link: "https://www.uvic.ca/calendar/undergrad/#/courses/ryNxyKa7E?bc=true&bcCurrent=CSC226%20-%20Algorithms%20and%20Data%20Structures%20II&bcGroup=Computer%20Science%20(CSC)&bcItemType=courses"
        },
        {
          code: "CSC 320",
          name: "Foundations of Computer Science",
          link: "https://www.uvic.ca/calendar/undergrad/#/courses/H1Bl1K6XE?bc=true&bcCurrent=CSC320%20-%20Foundations%20of%20Computer%20Science&bcGroup=Computer%20Science%20(CSC)&bcItemType=courses"
        },
        {
          code: "CSC 360",
          name: "Operating Systems",
          link: "https://www.uvic.ca/calendar/undergrad/#/courses/SkIl1Y6XE?bc=true&bcCurrent=CSC360%20-%20Operating%20Systems&bcGroup=Computer%20Science%20(CSC)&bcItemType=courses"
        },
        {
          code: "SENG 265",
          name: "Software Development Methods",
          link: "https://www.uvic.ca/calendar/undergrad/#/courses/ryVeyKaXE?bc=true&bcCurrent=SENG265%20-%20Software%20Development%20Methods&bcGroup=Software%20Engineering%20(SENG)&bcItemType=courses"
        },
        {
          code: "CSC 466",
          name: "Overlay and Peer-to-Peer Networking",
          link: "https://www.uvic.ca/calendar/undergrad/#/courses/r1l21daXE?bc=true&bcCurrent=CSC466%20-%20Overlay%20and%20Peer-to-Peer%20Networking&bcGroup=Computer%20Science%20(CSC)&bcItemType=courses"
        },
        {
          code: "SENG 275",
          name: "Software Testing",
          link: "https://www.uvic.ca/calendar/undergrad/index.php#/courses/H11yxFamE?bc=true&bcCurrent=SENG275%20-%20Software%20Testing&bcGroup=Software%20Engineering%20(SENG)&bcItemType=courses"
        },
        {
          code: "CSC 485B",
          name: "GPU Computation (Topics course, link not available)",
          link: ""
        }
      ]
    }
  ];

  // Initialize expanded state for all sections (default to expanded)
  React.useEffect(() => {
    const initialState = {};
    education.forEach((_, index) => {
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
        Education
      </motion.h1>
      
      <motion.div 
        className="space-y-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {education.map((edu, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
          >
            {/* Header Section */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 border-b border-gray-100">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <GraduationCap className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <motion.h3 
                      className="text-xl font-bold text-gray-900 mb-1"
                      whileHover={{ scale: 1.02 }}
                    >
                      {edu.institution_link ? (
                        <a 
                          href={edu.institution_link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="hover:text-blue-600 transition-colors inline-flex items-center gap-1"
                        >
                          {edu.institution}
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      ) : (
                        edu.institution
                      )}
                    </motion.h3>
                    <p className="text-lg font-medium text-gray-700 mb-2">{edu.degree}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {edu.timeframe}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {edu.location}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* GPA Badge */}
                <motion.div 
                  className="bg-green-100 border border-green-200 rounded-full px-4 py-2 self-start"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-green-600" />
                    <span className="text-green-800 font-semibold">GPA: {edu.gpa}</span>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-6">
              {/* Description */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-3">Program Overview</h4>
                <p className="text-gray-600 leading-relaxed">{edu.description}</p>
              </div>

              {/* Relevant Courses */}
              <div>
                <motion.button
                  onClick={() => toggleSection(index)}
                  className="flex items-center justify-between w-full mb-4 text-left group"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <h4 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                    Relevant Coursework
                  </h4>
                  <motion.div
                    animate={{ rotate: expandedSections[index] ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-gray-500 group-hover:text-blue-600 transition-colors"
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
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {edu.relevantCourses.map((course, courseIndex) => (
                          <motion.div
                            key={courseIndex}
                            className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors duration-200"
                            whileHover={{ scale: 1.02 }}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: courseIndex * 0.1 }}
                          >
                            {course.link ? (
                              <a 
                                href={course.link} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="group block"
                              >
                                <div className="flex items-center justify-between">
                                  <div>
                                    <span className="font-mono text-sm font-medium text-blue-600">
                                      {course.code}
                                    </span>
                                    <p className="text-gray-800 group-hover:text-blue-600 transition-colors">
                                      {course.name}
                                    </p>
                                  </div>
                                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                                </div>
                              </a>
                            ) : (
                              <div>
                                <span className="font-mono text-sm font-medium text-blue-600">
                                  {course.code}
                                </span>
                                <p className="text-gray-800">{course.name}</p>
                              </div>
                            )}
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

export default Education;