// components/ProjectModal.jsx
import React, { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, Calendar, Github, Globe, Tag, BookOpen, ExternalLink } from "lucide-react";
import { rawProjects } from "../projectsData";
import ProjectSlider from "./ProjectSlider";

/**
 * Project shape 
 * {
 *   title: string
 *   date?: string
 *   course?: string
 *   course_link?: string
 *   status?: "Completed" | "In Progress" | string
 *   tags?: string[]
 *   github?: string
 *   website?: string
 *   shortDescription?: string
 *   longDescription?: string   // falls back to additionalInfo or description if provided
 *   images?: string[]          // optional gallery of image URLs
 * }
 */

const backdrop = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 }
};

const modal = {
  hidden: { y: 40, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 240, damping: 22 } },
  exit: { y: 20, opacity: 0, transition: { duration: 0.2 } }
};

export function ReadMoreButton({ onClick }) {
  return (
    <motion.button
      onClick={onClick}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
    >
      Read more
    </motion.button>
  );
}

export default function ProjectModal({ open, onClose, project }) {
  const closeBtnRef = useRef(null);

  // Basic body scroll lock
  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = original; };
  }, [open]);

  // ESC to close and initial focus on Close button
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === "Escape") onClose?.(); };
    document.addEventListener("keydown", onKey);
    // Focus the close button on open
    closeBtnRef.current?.focus();
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const {
     title,
     date,
     course,
     course_link,
     status,
     tags = [],
     github,
     website,
     longDescription,
     shortDescription,
     additionalInfo,          // fallback used below
     description,             // fallback used below
    images = [],
    sliderImages = []
  } = (project ?? {});   

  const fullText = longDescription || additionalInfo || description || "";

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
          variants={backdrop}
          initial="hidden"
          animate="visible"
          exit="exit"
          aria-modal="true"
          role="dialog"
          onClick={(e) => {
            // Close if backdrop is clicked
            if (e.target === e.currentTarget) onClose?.();
          }}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

          {/* Modal card - now with flex column and max height */}
          <motion.div
            variants={modal}
            className="relative z-[10000] w-full max-w-3xl max-h-[90vh] bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden flex flex-col"
          >
            {/* Header - fixed at top */}
            <div className="flex-shrink-0 flex items-start gap-4 p-6 bg-gradient-to-r from-purple-50 to-blue-50 border-b border-gray-200">
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
                <div className="mt-2 flex flex-wrap gap-3 text-sm text-gray-700">
                  {date && (
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="w-4 h-4" /> {date}
                    </span>
                  )}
                  {course && (
                    <span className="inline-flex items-center gap-1">
                      <BookOpen className="w-4 h-4" />
                      {course_link ? (
                        <a
                          className="hover:text-blue-700 inline-flex items-center gap-1"
                          href={course_link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {course}
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      ) : (
                        course
                      )}
                    </span>
                  )}
                  {status && (
                    <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold border
                      bg-gray-50 border-gray-200 text-gray-700"
                    >
                      {status}
                    </span>
                  )}
                </div>
              </div>

              <button
                ref={closeBtnRef}
                onClick={onClose}
                aria-label="Close project details"
                className="p-2 rounded-lg hover:bg-white/60 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <X className="w-5 h-5 text-gray-700" />
              </button>
            </div>

            {/* Scrollable body content */}
            <div className="flex-1 overflow-y-auto">
              <div className="p-6 space-y-6">
                {/* Links */}
                {(github || website) && (
                  <div className="flex flex-wrap gap-3">
                    {github && (
                      <a
                        href={github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm px-3 py-2 rounded-lg border border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                      >
                        <Github className="w-4 h-4" />
                        View on GitHub
                      </a>
                    )}
                    {website && (
                      <a
                        href={website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm px-3 py-2 rounded-lg border border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                      >
                        <Globe className="w-4 h-4" />
                        Live demo
                      </a>
                    )}
                  </div>
                )}

                {/* Tags */}
                {!!tags.length && (
                  <div>
                    <div className="flex items-center gap-2 mb-2 text-gray-800 font-semibold">
                      <Tag className="w-5 h-5" />
                      Technologies
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {tags.map((t, i) => (
                        <span
                          key={`${t}-${i}`}
                          className="px-3 py-1 rounded-full text-xs bg-purple-100 text-purple-800 border border-purple-200"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Media slider (no heading above) */}
                {sliderImages?.length > 0 && (
                  <ProjectSlider
                    title={title}
                    images={sliderImages.map((src, i) => ({
                      id: i + 1,
                      src,
                      alt: `${title}-${i + 1}`,
                    }))}
                    className="!mb-4"
                    hideHeader                         // NEW: hide the header inside the modal
                  />
                )}

                {/* Long text under the slider */}
                {longDescription && (
                  <div className="prose prose-sm max-w-none text-gray-700">
                    <p className="whitespace-pre-wrap">{longDescription}</p>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}