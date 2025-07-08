
const QuickInfo = () => {
    return(
        <div className="w-full p-10">
          <div className="">
            <h1 className="text-4xl text-gray-700 font-bold">About me</h1>
            <p className="pl-5 text-2xl text-gray-600">
              I recently graduated with a bachelor's degree in Computer Science
              from the University of Victoria.
            </p>
            <p className="pl-5 text-gray-600">
My background blends academic research, co-operative education, and hands-on personal projects, all of which have shaped a practical and well-rounded technical foundation. I have purposefully followed a broad academic path, exploring diverse areas of computer science including algorithms, data structures, machine learning, artificial intelligence, low-level systems, and functional programming. Fueled by a strong drive to learn and improve, I actively seek out complex, challenging problems that push me to grow as a developer.
            </p>
          </div>
        </div>
    );

}
export default QuickInfo;

/**
 * import React from 'react';
import { motion } from 'framer-motion';
import { User, GraduationCap, Code, BookOpen, Target, Lightbulb } from 'lucide-react';

const QuickInfo = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Academic Excellence",
      description: "Bachelor's degree in Computer Science from University of Victoria with a 7.5/9.0 GPA"
    },
    {
      icon: Code,
      title: "Diverse Experience",
      description: "Academic research, co-operative education, and hands-on personal projects"
    },
    {
      icon: BookOpen,
      title: "Broad Technical Foundation",
      description: "Explored algorithms, data structures, ML, AI, low-level systems, and functional programming"
    },
    {
      icon: Target,
      title: "Problem-Solving Focus",
      description: "Actively seeks complex, challenging problems that drive personal and professional growth"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
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

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
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
        About Me
      </motion.h1>
      
      <motion.div 
        className="space-y-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        
        <motion.div
          variants={cardVariants}
          className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
        >
          <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-6 border-b border-gray-100">
            <div className="flex items-start gap-4">
              <div className="bg-indigo-100 p-3 rounded-full">
                <User className="w-6 h-6 text-indigo-600" />
              </div>
              <div className="flex-1">
                <motion.h2 
                  className="text-2xl font-bold text-gray-900 mb-3"
                  whileHover={{ scale: 1.01 }}
                >
                  Computer Science Graduate
                </motion.h2>
                <motion.p 
                  className="text-lg text-gray-700 mb-4 leading-relaxed"
                  variants={itemVariants}
                >
                  I recently graduated with a bachelor's degree in Computer Science from the University of Victoria.
                </motion.p>
                <motion.p 
                  className="text-gray-600 leading-relaxed"
                  variants={itemVariants}
                >
                  My background blends academic research, co-operative education, and hands-on personal projects, all of which have shaped a practical and well-rounded technical foundation. I have purposefully followed a broad academic path, exploring diverse areas of computer science including algorithms, data structures, machine learning, artificial intelligence, low-level systems, and functional programming. Fueled by a strong drive to learn and improve, I actively seek out complex, challenging problems that push me to grow as a developer.
                </motion.p>
              </div>
            </div>
          </div>
        </motion.div>

       
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
        >
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
              whileHover={{ scale: 1.02 }}
            >
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-3 rounded-full">
                    <highlight.icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {highlight.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>


        <motion.div
          variants={cardVariants}
          className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
        >
          <div className="bg-gradient-to-r from-green-50 to-teal-50 p-6 border-b border-gray-100">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-green-100 p-3 rounded-full">
                <Lightbulb className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Core Strengths</h3>
            </div>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <motion.div 
                className="bg-gray-50 rounded-lg p-4 text-center"
                whileHover={{ scale: 1.05 }}
                variants={itemVariants}
              >
                <div className="text-2xl font-bold text-blue-600 mb-2">7.5/9.0</div>
                <div className="text-sm text-gray-600">Academic GPA</div>
              </motion.div>
              <motion.div 
                className="bg-gray-50 rounded-lg p-4 text-center"
                whileHover={{ scale: 1.05 }}
                variants={itemVariants}
              >
                <div className="text-2xl font-bold text-green-600 mb-2">1.5+</div>
                <div className="text-sm text-gray-600">Years Research Experience</div>
              </motion.div>
              <motion.div 
                className="bg-gray-50 rounded-lg p-4 text-center"
                whileHover={{ scale: 1.05 }}
                variants={itemVariants}
              >
                <div className="text-2xl font-bold text-purple-600 mb-2">Full-Stack</div>
                <div className="text-sm text-gray-600">Development Skills</div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default QuickInfo;
 */