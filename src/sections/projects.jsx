import React, { useMemo, useState } from "react";
import { rawProjects } from "../projectsData";
import { motion } from "framer-motion";
import { Code, Calendar, BookOpen, Image as ImageIcon, Github, Globe } from "lucide-react";
import ProjectModal, { ReadMoreButton } from "../components/ProjectModal";

const statusStyle = (status) => {
  switch (status) {
    case "Completed":
      return "bg-green-100 text-green-800 border-green-200";
    case "In Progress":
      return "bg-yellow-100 text-yellow-800 border-yellow-200";
    case "Under Construction":
      return "bg-orange-100 text-orange-800 border-orange-200";
    default:
      return "bg-gray-100 text-gray-800 border-gray-200";
  }
};

export default function Projects() {
  const [open, setOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(null);

  const projects = React.useMemo(() => rawProjects, []);

  const openModal = (project) => {
    setActiveProject(project);
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
    // Wait for animation then clear for GC and to avoid flicker
    setTimeout(() => setActiveProject(null), 250);
  };

  return (
    <section id="projects" className="w-full p-10">
      <motion.h1
        className="text-4xl text-gray-700 font-bold mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Highlighted Projects (images may load slowly)
      </motion.h1>

      <div className="grid grid-cols-1 lg:grid-cols-1 gap-6">
        {projects.map((project, i) => (
          <motion.article
            key={project.title + i}
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.35, delay: i * 0.05 }}
            className="bg-white rounded-xl shadow-lg hover:shadow-xl border border-gray-100 overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-start gap-4 p-6 bg-gradient-to-r from-purple-50 to-pink-50 border-b border-gray-100">
              <div className="bg-purple-100 p-3 rounded-full">
                <Code className="w-6 h-6 text-purple-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                <div className="mt-2 flex flex-wrap gap-4 text-sm text-gray-600">
                  {project.date && (
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {project.date}
                    </span>
                  )}
                  {project.course && (
                    <span className="inline-flex items-center gap-1">
                      <BookOpen className="w-4 h-4" />
                      {project.course}
                    </span>
                  )}
                </div>
                
                {/* Links in header */}
                {(project.github || project.website) && (
                  <div className="flex flex-wrap gap-2 mt-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm px-2 py-1 rounded-md bg-white/60 hover:bg-white border border-gray-400 hover:border-gray-700 transition-colors text-gray-700 hover:text-gray-900"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github className="w-3 h-3" />
                        View on GitHub
                      </a>
                    )}
                    {project.website && (
                      <a
                        href={project.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm px-2 py-1 rounded-md bg-white/60 hover:bg-white border border-white/40 hover:border-gray-400 transition-colors text-gray-700 hover:text-gray-900"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Globe className="w-3 h-3" />
                        Live Demo
                      </a>
                    )}
                  </div>
                )}
              </div>
              {project.status && (
                <span
                  className={`border rounded-full px-3 py-1 text-xs font-semibold self-start ${statusStyle(
                    project.status
                  )}`}
                >
                  {project.status}
                </span>
              )}
            </div>

            {/* Main content with image */}
            <div className="p-6">
              <div className="flex gap-6">
                {/* Left content */}
                <div className="flex-1">
                  <p className="text-gray-600 line-clamp-3 mb-4">
                    {project.shortDescription}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {(project.tags || []).slice(0, 6).map((tag, idx) => (
                      <span
                        key={tag + idx}
                        className="px-3 py-1 rounded-full text-xs bg-purple-100 text-purple-800 border border-purple-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>



                  <ReadMoreButton onClick={() => openModal(project)} />
                </div>

                {/* Right side - Cover image */}
                <div className="flex-shrink-0 w-48 h-32">
                  {project.coverImage ? (
                    <motion.div
                      className="w-full h-full rounded-lg overflow-hidden bg-gray-100 border border-gray-200"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <img
                        src={project.coverImage}
                        alt={`${project.title} preview`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </motion.div>
                  ) : (
                    <div className="w-full h-full rounded-lg bg-gradient-to-br from-purple-100 to-pink-100 border border-gray-200 flex items-center justify-center">
                      <ImageIcon className="w-8 h-8 text-gray-400" />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Modal */}
      <ProjectModal open={open} onClose={closeModal} project={activeProject} />
    </section>
  );
}