import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Calendar, ExternalLink, Github, Globe, ChevronDown, BookOpen, Tag, Zap } from 'lucide-react';

const Projects = () => {
  const [expandedSections, setExpandedSections] = useState({});
  
  const projects = [
    {
      title: "Sorting Algorithm Visualization Tool",
      description: "In progress of developing a web-based visualization tool using React, tailwindcss, and typescript to demonstrate how different sorting algorithms function. This tool will allow users to select among different sorting algorithms and step through them in real-time to visualize thier differences. This project hopes to have the option to clone a blank template version of the tool and allow users to implement the algorithms themselves as an option to understand how they work.",
      additionalInfo: "Early stages of development, if curious please reach out.",
      date: "Summer 2025 (Ongoing)",
      course: "",
      course_link: "",
      status: "In Progress",
      tags: ["React", "TailwindCSS", "TypeScript", "Sorting Algorithms", "Visualization"],
      github: "",
      website: "",
    },
    {
      title: "Search Algorithm Visualization Tool",
      description: "Developing a web-based visualization tool using React and TailwindCSS to demonstrate search algorithms such as BFS, DFS, ... on a grid-based graph structure. This tool allows users to input their own start, stop, and wall nodes, and visualize the algorithms execution in real-time. This project aims to have features that will allow users to stop and step through the algorithm execution.",
      additionalInfo: "At the moment it has a backend Graph Manager and an algorithm engine that controls activity. This project hopes to have the option to clone a blank template version of the tool and allow users to implement the algorithms themselves as an option to understand how they work.",
      date: "Summer 2025 (Ongoing)",
      course: "",
      course_link: "",
      status: "In Progress",
      tags: ["React", "TailwindCSS", "JavaScript", "Search Algorithms", "Visualization"],
      github: "https://github.com/mathewterhune/Search-Algorithm-Visualization",
      website: "",
    },
    {
      title: "Search Algorithm Comparison In Decentralized Peer-to-Peer Networks",
      description: "Designed and implemented a simulation framework in Python and C++ to evaluate decentralized search algorithms Flooding, Normalized Flooding, and Random Walk across various peer-to-peer network topologies (e.g., tree, regular, clustered).",
      additionalInfo: "The project measured metrics such as query success rate, average hops, and latency, revealing performance trade-offs between aggressive propagation and efficiency in large-scale unstructured networks.",
      date: "Spring 2025",
      course: "CSC 466 - Overlay and Peer-to-Peer Networking",
      course_link: "https://www.uvic.ca/calendar/undergrad/#/courses/r1l21daXE?bc=true&bcCurrent=CSC466%20-%20Overlay%20and%20Peer-to-Peer%20Networking&bcGroup=Computer%20Science%20(CSC)&bcItemType=courses",
      status: "Completed",
      tags: ["C++", "NS-3", "Networks", "peer-to-peer", "Python"],
      github: "https://github.com/ali-gaineshev/p2p_network_simulation",
      website: "https://ali-gaineshev.github.io/p2p_network_simulation/",
    },
    {
      title: "GPU-Accelerated Pathfinding Algorithm",
      description: "Implemented a highly optimized parallel version of the A* (A-Star) pathfinding algorithm using C++ and CUDA to accelerate performance on large-scale graph datasets. The system leverages GPU parallelism to distribute node expansion and heuristic calculations, significantly reducing computation time compared to traditional CPU-based implementations.",
      additionalInfo: "",
      date: "Fall 2024",
      course: "CSC 485B - GPU Computation (Topics course, link not available)",
      course_link: "",
      status: "Completed",
      tags: ["C++", "CUDA", "a-star", "Parallel Computing", "Pathfinding", "Priority Queue"],
      github: "https://github.com/CudaQueueX/485B",
      website: "",
    },
    {
      title: "NHL Game outcome Predictor using Machine Learning",
      description: "Developed a machine learning model to predict the outcomes of NHL games using Python and various ML algorithms. The project involved data collection, preprocessing, feature engineering, and model evaluation.",
      additionalInfo: "The model achieved an accuracy of over 80% on historical game data, demonstrating effective feature selection and model optimization techniques.",
      date: "Spring 2024",
      course: "SENG 474 - Data Mining",
      course_link: "https://www.uvic.ca/calendar/undergrad/#/courses/S1aylKTX4?bc=true&bcCurrent=SENG474%20-%20Data%20Mining&bcGroup=Software%20Engineering%20(SENG)&bcItemType=courses",
      status: "Completed",
      tags: ["Python", "Scikit-learn", "Machine Learning", "Data Mining", "LSTM", "Logistic Regression", "Neural Network", "MoneyPuck"],
      github: "",
      website: "https://matthewtrent.me/articles/hockey-predictor",
    },
    {
      title: "EduPath - Educational Pathway Planner",
      description: "Designed and developed a web-based application using React and Node.js to help students plan their educational pathways. The application allows users to input their interests, skills, and career goals, and generates personalized course recommendations and degree plans.",
      additionalInfo: "WIP, if curious please reach out.",
      date: "Ongoing",
      course: "Personal Project (Private repository, available upon request)",
      course_link: "",
      status: "In Progress",
      tags: ["React", "Node.js", "tailwindcss", "Web Development", "Full Stack", "PostgreSQL"],
      github: "",
      website: ""
    }
  ];

  // Initialize expanded state for all sections (default to expanded)
  React.useEffect(() => {
    const initialState = {};
    projects.forEach((_, index) => {
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

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'In Progress':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Completed':
        return '✓';
      case 'In Progress':
        return '⚡';
      default:
        return '•';
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
        Highlighted Projects
      </motion.h1>
      
      <motion.div 
        className="space-y-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
          >
            {/* Header Section */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 border-b border-gray-100">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <Code className="w-6 h-6 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <motion.h3 
                      className="text-xl font-bold text-gray-900 mb-2"
                      whileHover={{ scale: 1.02 }}
                    >
                      {project.title}
                    </motion.h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {project.date}
                      </div>
                      {project.course && (
                        <div className="flex items-center gap-1">
                          <BookOpen className="w-4 h-4" />
                          {project.course_link ? (
                            <a 
                              href={project.course_link} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="hover:text-purple-600 transition-colors inline-flex items-center gap-1"
                            >
                              {project.course}
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          ) : (
                            project.course
                          )}
                        </div>
                      )}
                    </div>
                    
                    {/* Links */}
                    <div className="flex gap-3">
                      {project.github && (
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-sm text-gray-600 hover:text-purple-600 transition-colors"
                          whileHover={{ scale: 1.05 }}
                        >
                          <Github className="w-4 h-4" />
                          GitHub
                        </motion.a>
                      )}
                      {project.website && (
                        <motion.a
                          href={project.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-sm text-gray-600 hover:text-purple-600 transition-colors"
                          whileHover={{ scale: 1.05 }}
                        >
                          <Globe className="w-4 h-4" />
                          Live Demo
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>
                
                {/* Status Badge */}
                <motion.div 
                  className={`border rounded-full px-4 py-2 self-start ${getStatusColor(project.status)}`}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{getStatusIcon(project.status)}</span>
                    <span className="font-semibold">{project.status}</span>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-6">
              {/* Description */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-3">Project Overview</h4>
                <p className="text-gray-600 leading-relaxed">{project.description}</p>
              </div>

              {/* Technologies */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                  <Tag className="w-5 h-5" />
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <motion.span
                      key={tagIndex}
                      className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium border border-purple-200"
                      whileHover={{ scale: 1.05 }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: tagIndex * 0.1 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Additional Details */}
              {project.additionalInfo && (
                <div>
                  <motion.button
                    onClick={() => toggleSection(index)}
                    className="flex items-center justify-between w-full mb-4 text-left group"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    <h4 className="text-lg font-semibold text-gray-800 group-hover:text-purple-600 transition-colors flex items-center gap-2">
                      <Zap className="w-5 h-5" />
                      Additional Details
                    </h4>
                    <motion.div
                      animate={{ rotate: expandedSections[index] ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-gray-500 group-hover:text-purple-600 transition-colors"
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
                        <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors duration-200">
                          <p className="text-gray-700 leading-relaxed">{project.additionalInfo}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;