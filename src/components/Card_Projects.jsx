import { motion } from "framer-motion";
import Tag from "./tag";

const Card_Projects = ({ project }) => {
  return (
<div className="w-full max-w-md min-h-[460px] rounded-2xl bg-gray-100 shadow-md p-5 flex flex-col justify-between hover:shadow-lg transition-shadow">
  <div className="flex flex-col flex-grow space-y-4">
    <div className="flex justify-between items-start">
      <h1 className="text-xl font-semibold text-gray-800 leading-snug">{project.title}</h1>
      <span className="text-sm text-gray-500">{project.date}</span>
    </div>
    {project.course_link ? (
      <a
        href={project.course_link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-blue-600 hover:underline font-medium"
      >
        {project.course}
      </a>
    ) : (
      <h3 className="text-sm text-gray-600">{project.course}</h3>
    )}
    <div className="flex flex-wrap gap-2">
      {project.tags.map((tag, index) => (
        <Tag key={index} tagname={tag} />
      ))}
    </div>
    <p className="text-sm text-gray-700">{project.description}</p>
  </div>

  {/* Buttons at consistent bottom position */}
  <div className="flex justify-center gap-4 pt-4 mt-auto">
    {project.github && (
      <motion.a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        GitHub
      </motion.a>
    )}
    {project.website && (
      <motion.a
        href={project.website}
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Website
      </motion.a>
    )}
  </div>
</div>


  );
};

export default Card_Projects;
