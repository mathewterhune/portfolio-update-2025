import Card_Projects from "../components/Card_Projects";


const Projects = () => {

    const projects = [
      {
        title: "Sorting Algorithm Visualization Tool",
        description: "In progress of developing a web-based visualization tool using React, tailwindcss, and typescript to demonstrate how different sorting algorithms function. This tool will allow users to select among different sorting algorithms and step through them in real-time to visualize thier differences. This project hopes to have the option to clone a blank template version of the tool and allow users to implement the algorithms themselves as an option to understand how they work. \n Early stages of development, if curious please reach out.",
        date: "Summer 2025 (Ongoing)",
        course: "",
        course_link: "",
        tags: ["React", "TailwindCSS", "TypeScript", "Soprting Algorithms", "Visualization"],
        github: "",
        website: "",
      },
      {
        title: "Search Algorithm Visualization Tool",
        description: "Developeding a web-based visualization tool using React and TailwindCSS to demonstrate search algorithms such as BFS, DFS, ... on a grid-based graph structure. This tool allows users to input thier own start, stop, and wall nodes, and visualize the algorithms execution in real-time. This project aims to have features that will allow users to stop and step through the alogrithm execution. At the moment it has a backend Graph Manager and an algorithm engine that controls activity. This project hopes to have the option to clone a blank template version of the tool and allow users to implement the algorithms themselves as an option to understand how they work.",
        date: "Summer 2025 (Ongoing)",
        course: "",
        course_link: "",
        tags: ["React", "TailwindCSS", "JavaScript", "Search Algorithms", "Visualization"],
        github: "github.com/mathewterhune/Search-Algorithm-Visualization",
        website: "",
      },
      {
          title:"Search Algorithm Comparison In Decentralized Peer-to-Peer Networks",
          description: "Designed and implemented a simulation framework in Python and C++ to evaluate decentralized search algorithms Flooding, Normalized Flooding, and Random Walk across various peer-to-peer network topologies (e.g., tree, regular, clustered). The project measured metrics such as query success rate, average hops, and latency, revealing performance trade-offs between aggressive propagation and efficiency in large-scale unstructured networks.",
          date: "Spring 2025",
          course: "CSC 466 - Overlay and Peer-to-Peer Networking",
          course_link: "https://www.uvic.ca/calendar/undergrad/#/courses/r1l21daXE?bc=true&bcCurrent=CSC466%20-%20Overlay%20and%20Peer-to-Peer%20Networking&bcGroup=Computer%20Science%20(CSC)&bcItemType=courses",
          tags: ["C++", "NS-3", "Networks", "peer-to-peer", "Python"],
          github: "https://github.com/ali-gaineshev/p2p_network_simulation",
          website: "https://ali-gaineshev.github.io/p2p_network_simulation/",
        },
        {
          title:"GPU-Accelerated Pathfinding Algorithm",
          description: "Implemented a highly optimized parallel version of the A* (A-Star) pathfinding algorithm using C++ and CUDA to accelerate performance on large-scale graph datasets. The system leverages GPU parallelism to distribute node expansion and heuristic calculations, significantly reducing computation time compared to traditional CPU-based implementations. Designed to handle multiple concurrent path queries, making it suitable for high-performance applications such as real-time navigation systems, robotics, and game AI.",
          date: "Fall 2024",
          course: "CSC 485B - GPU Computation (Topics course, link not available)",
          course_link: "",
          tags: ["C++", "CUDA","a-star","Parallel Computing", "Pathfinding", "Priority Queue"],
          github: "https://github.com/CudaQueueX/485B",
          website: "",
        },
        {
          title:"NHL Game outcome Predictor using Machine Learning",
          description: "Developed a machine learning model to predict the outcomes of NHL games using Python and various ML algorithms. The project involved data collection, preprocessing, feature engineering, and model evaluation. The model achieved an accuracy of over 80% on historical game data.",
          date: "Spring 2024",
          course: "SENG 474 - Data Mining",
          course_link: "https://www.uvic.ca/calendar/undergrad/#/courses/S1aylKTX4?bc=true&bcCurrent=SENG474%20-%20Data%20Mining&bcGroup=Software%20Engineering%20(SENG)&bcItemType=courses",
          tags: ["Python", "Scikit-learn", "Machine Learning", "Data Mining", "NHL", "Logistic Regression"],
          github: "",
          website: "https://matthewtrent.me/articles/hockey-predictor",
        },
        {
          title: "EduPath - Educational Pathway Planner",
          description: "Designed and developed a web-based application using React and Node.js to help students plan their educational pathways. The application allows users to input their interests, skills, and career goals, and generates personalized course recommendations and degree plans. Implemented features include user authentication, data visualization of course prerequisites, and integration with university course catalogs.",
          date: "Ongoing",
          course: "Personal Project (Private repository, available upon request)",
          course_link: "",
          tags: ["React", "Node.js", "tailwindcss", "Web Development", "Full Stack", "PostgreSQL"],
          github: "",
          website: ""
        }
      ];



    return (
        <div className="w-full p-10">
          <h1 className="text-4xl text-gray-700 font-bold">Highlighted Projects</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-5 w-full max-w-6xl mx-auto px-4">

            {projects.map((project, index) => (
              <Card_Projects key={index} project={project} />
            ))}
          </div>
        </div>
    );   
}

export default Projects;