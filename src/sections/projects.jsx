
import React, { useMemo, useState } from "react";
import { rawProjects } from "../projectsData";
import { motion } from "framer-motion";
import { Code, Calendar, BookOpen } from "lucide-react";
import ProjectModal, { ReadMoreButton } from "../components/ProjectModal";

const statusStyle = (status) => {
  switch (status) {
    case "Completed":
      return "bg-green-100 text-green-800 border-green-200";
    case "In Progress":
      return "bg-yellow-100 text-yellow-800 border-yellow-200";
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
        Highlighted Projects
      </motion.h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
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

            {/* Brief content + Read more */}
            <div className="p-6">
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
          </motion.article>
        ))}
      </div>

      {/* Modal */}
      <ProjectModal open={open} onClose={closeModal} project={activeProject} />
    </section>
  );
}
