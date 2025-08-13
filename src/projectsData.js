
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

export const rawProjects = [
  {
    title: "Sorting Algorithm Visualization Tool",
    description: "In progress of developing a web-based visualization tool...",
    additionalInfo: "Early stages of development, if curious please reach out.",
    date: "Summer 2025 (Ongoing)",
    status: "In Progress",
    tags: ["React", "TailwindCSS", "TypeScript", "Sorting Algorithms", "Visualization"],
    github: "",
    website: "",
    shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare, mi a placerat faucibus, purus augue condimentum risus, eu cursus mi sem et eros. Aliquam tristique id ipsum auctor condimentum. Donec metus tellus, ultrices sit amet venenatis eget, lacinia gravida tellus. Phasellus laoreet velit massa, vehicula aliquet ligula molestie egestas. ",
    longDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare, mi a placerat faucibus, purus augue condimentum risus, eu cursus mi sem et eros. Aliquam tristique id ipsum auctor condimentum. Donec metus tellus, ultrices sit amet venenatis eget, lacinia gravida tellus. Phasellus laoreet velit massa, vehicula aliquet ligula molestie egestas. ",
},

];
