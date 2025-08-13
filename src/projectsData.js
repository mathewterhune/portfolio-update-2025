export const rawProjects = [
  {
    title: "Tangle Defense (Nelson Summer Game Jam 2025)",
    description:
      "A prototype strategy/tower-defense game inspired by Bloons Tower Defense, developed under a 48-hour time constraint for a game jam.",
    additionalInfo:
      "Built in Godot using GDScript, the game features rope-based tower mechanics, wave progression, health/money systems, and parallax visuals.",
    date: "Summer 2025",
    status: "Completed",
    tags: [
      "Godot",
      "GDScript",
      "Game Jam",
      "Rapid Prototyping",
      "Tower Defense",
      "Game Development",
    ],
    github: "https://github.com/bmachado18/tangle-defence",
    website: "",
    shortDescription:
      "Fast-made for Nelson’s 2025 Game Jam, Tangle Defense challenges players to use rope-connected towers to stop advancing enemy waves, with dynamic waves, resource management, and strategic rope intersections.",
    longDescription:
      "Tangle Defense is a Godot-based tower-defense style prototype built in just 48 hours for the Nelson Summer Game Jam 2025 under the theme “Tangle”. Drawing inspiration from Bloons Tower Defense, players place towers on a grid and link them with rope—intersecting ropes become stronger—to stop waves of enemies. The build includes a functioning health and money economy, five progressively challenging waves, UI feedback (health, money, placement), parallax backgrounds, game over and victory screens, and core mechanics for rope-based damage. Disclaimer: currently contains only one level.",
    coverImage: "/project-photos/tangle_defence/tangle_defence_cover.png",
    sliderImages: [
      "project-photos/tangle_defence/1.png",
      "project-photos/tangle_defence/2.png",
      "project-photos/tangle_defence/3.png",
      "project-photos/tangle_defence/4.png",
    ],
  },
  {
    title: "J-Star Excavations Website",
    description: "A modern, responsive website for a local excavation company",
    additionalInfo: "Under construction, website is not live yet.",
    date: "Summer 2025",
    coverImage: "/JSTAR-Cover-Photo.png",
    sliderImages: [
      "/JSTAR-Cover-Photo.png",
      "/project-photos/jstar/J-Star Excavations Website-1.png",
      "/project-photos/jstar/J-Star Excavations Website-2.png",
      "/project-photos/jstar/J-Star Excavations Website-3.png",
    ],
    status: "Under Construction",
    tags: [
      "React",
      "TailwindCSS",
      "TypeScript",
      "Web Development",
      "Responsive Design",
      "SEO",
    ],
    shortDescription:
      "J-Star Excavations is a local excavation company in the west kootenays. This websites purpose is to provide a centralize location for customers to discover the services offered, communicate with employees, and provide a location for potential employees to apply",
  },
  {
    title: "Search Algorithm Visualization Tool",
    description: "In progress of developing a web-based visualization tool...",
    additionalInfo: "Early stages of development, if curious please reach out.",
    date: "Summer 2025",
    status: "Completed",
    tags: [
      "React",
      "TailwindCSS",
      "TypeScript",
      "Sorting Algorithms",
      "Visualization",
    ],
    github: "https://github.com/mathewterhune/Search-Algorithm-Visualization",
    website: "",
    shortDescription:
      "An interactive React-based web app for visualizing search algorithms like BFS, DFS, and Dijkstra’s in real time. Users can draw walls, set start/end points, adjust speed, and watch the algorithm explore the grid step-by-step.",
    longDescription:
      "The Search Algorithm Visualization Tool is an interactive web application designed to help users explore and understand the inner workings of graph traversal algorithms in real time. Built with React and Tailwind CSS, it provides a visually engaging environment where users can experiment with algorithms such as Breadth-First Search (BFS), Depth-First Search (DFS), and Dijkstra’s algorithm on a customizable grid.Users can place start and end points, draw obstacles, and control algorithm execution speed, with the option to pause, resume, or step through the process. The system’s backend is powered by a Graph Manager for efficient data handling and an Algorithm Engine that animates each step, enabling users to see how nodes are explored, paths are determined, and decisions are made. Key features include color-coded nodes for clarity, maze generation, real-time path highlighting, and performance-optimized rendering using memoization and compact data structures. This project aims to be both an educational resource for learning algorithmic concepts and a practical tool for experimenting with problem-solving strategies, with planned expansions to include A*, weighted graphs, and enhanced statistical feedback.",
    coverImage: "/project-photos/pathfinding_visualization/2.png",
    sliderImages: [
      "/project-photos/pathfinding_visualization/1.png",
      "/project-photos/pathfinding_visualization/2.png",
      "/project-photos/pathfinding_visualization/3.png",
      "/project-photos/pathfinding_visualization/4.png",
      "/project-photos/pathfinding_visualization/5.png",
      "/project-photos/pathfinding_visualization/6.png",
    ],
  },
  {
    title: "Search Algorithm Comparison in Decentralized Peer-to-Peer Networks",
    description:
      "Designed and implemented a simulation framework in Python and C++ using NS-3 to evaluate decentralized search algorithms across various unstructured peer-to-peer network topologies.",
    additionalInfo:
      "Completed as part of CSC 466 (Overlay and Peer-to-Peer Networking) at the University of Victoria, focusing on algorithmic trade-offs in search efficiency, scalability, and network load.",
    date: "Spring 2025",
    course: "CSC 466 - Overlay and Peer-to-Peer Networking",
    course_link:
      "https://www.uvic.ca/calendar/undergrad/#/courses/r1l21daXE?bc=true&bcCurrent=CSC466%20-%20Overlay%20and%20Peer-to-Peer%20Networking&bcGroup=Computer%20Science%20(CSC)&bcItemType=courses",
    status: "Completed",
    tags: [
      "C++",
      "Python",
      "NS-3",
      "Networks",
      "Peer-to-Peer",
      "Simulation",
      "Flooding",
      "Random Walk",
      "Search Algorithms",
      "Network Topologies",
    ],
    github: "https://github.com/ali-gaineshev/p2p_network_simulation",
    website: "https://ali-gaineshev.github.io/p2p_network_simulation/",
    shortDescription:
      "Simulated and analyzed Flooding, Normalized Flooding, and Random Walk search algorithms across tree, regular, clustered, and megagraph topologies to assess performance trade-offs in decentralized networks.",
    longDescription:
      "This project implemented a decentralized peer-to-peer (P2P) network simulation framework in NS-3 to compare three unstructured search algorithms—Flooding, Normalized Flooding, and Random Walk—across multiple topologies: tree, regular, clustered, and megagraph. The system modeled realistic network behavior, including packet transmission delays, node degree distribution, and dynamic query propagation. Performance metrics such as query success rate, average number of hops, and latency were measured over multiple simulation runs. Results revealed that while Flooding achieved the highest success rates, it generated excessive network traffic and latency. Normalized Flooding offered a balance between coverage and efficiency by limiting message replication based on node degree, and Random Walk significantly reduced traffic at the cost of lower query success. The findings highlight key trade-offs between aggressiveness, efficiency, and scalability in decentralized P2P search strategies, with implications for large-scale, resource-constrained networks.",
    coverImage: "/project-photos/466/466-cover.png",

  },
  {
    title: "GPU-Accelerated A* Pathfinding with Batched Priority Queue",
    description:
      "Designed and implemented a parallelized A* pathfinding algorithm in C++ and CUDA, integrating a custom Batched Priority Queue (BPQ) to accelerate performance on large grid graphs. Profiled and optimized GPU kernels using NVIDIA Nsight Compute (ncu cli) to identify bottlenecks and improve throughput.",
    additionalInfo:
      "Developed for CSC 485B at the University of Victoria, this project explored GPU memory-bound performance, occupancy optimization, and the integration of advanced data structures into pathfinding workloads.",
    date: "Fall 2024",
    course: "CSC 485B - GPU Computation",
    course_link: "",
    status: "Completed",
    tags: [
      "C++",
      "CUDA",
      "Parallel Computing",
      "A*",
      "Pathfinding",
      "Batched Priority Queue",
      "GPU Optimization",
      "Profiling",
    ],
    github: "https://github.com/CudaQueueX/485B",
    website: "",
    shortDescription:
      "Implemented a high-performance A* pathfinding algorithm using a custom Batched Priority Queue on the GPU, achieving over 90% memory throughput and improved occupancy with shared memory optimizations.",
    longDescription:
      "This project implemented a GPU-accelerated A* pathfinding algorithm that integrates a Batched Priority Queue (BPQ) for efficient batch insertions and deletions. Written in C++ and CUDA, the system processes large grid graphs by leveraging GPU parallelism to accelerate node expansion and heuristic calculations. The BPQ design was based on Chen et al. (2021) and enhanced with a buffer node to optimize batch sizes and memory throughput. The project compared sorting algorithms (bitonic sort, radix sort, merge sort) in both CPU and GPU contexts, and tested shared memory optimizations to improve occupancy and compute throughput. Profiling with NVIDIA Nsight Compute revealed memory-bound kernels consistently achieving 90–92% DRAM throughput, with occupancy reaching up to 92% in shared-memory-optimized kernels. While global memory bandwidth remained the limiting factor, the work provided deep insights into GPU performance tuning, concurrency bottlenecks, and pathfinding algorithm behavior on parallel architectures.",
    coverImage: "/project-photos/485B/cover.png",
    sliderImages: [],
  },
  {
    title: "NHL Game Outcome Predictor using Machine Learning",
    description:
      "Developed a machine learning model in Python to predict the outcomes of NHL games using historical performance data and advanced statistical features.",
    additionalInfo:
      "Created as part of SENG 474 (Data Mining) at the University of Victoria. The project focused on applying feature engineering, model tuning, and evaluation techniques to sports analytics.",
    date: "Spring 2024",
    course: "SENG 474 - Data Mining",
    course_link:
      "https://www.uvic.ca/calendar/undergrad/#/courses/S1aylKTX4?bc=true&bcCurrent=SENG474%20-%20Data%20Mining&bcGroup=Software%20Engineering%20(SENG)&bcItemType=courses",
    status: "Completed",
    tags: [
      "Python",
      "Scikit-learn",
      "Machine Learning",
      "Data Mining",
      "Sports Analytics",
      "Logistic Regression",
      "Neural Network",
      "LSTM",
      "Feature Engineering",
    ],
    github: "",
    website: "https://matthewtrent.me/articles/hockey-predictor",
    shortDescription:
      "Built and evaluated multiple machine learning models to predict NHL game outcomes, achieving over 80% accuracy on historical datasets through effective feature selection and algorithm optimization.",
    longDescription:
      "This project applied data mining and machine learning techniques to predict the outcomes of National Hockey League (NHL) games. Using historical performance data sourced from the MoneyPuck dataset, we performed extensive data cleaning, preprocessing, and feature engineering to capture key predictive variables such as team statistics, player performance metrics, and game context. Multiple models were trained and compared, including logistic regression, neural networks, and Long Short-Term Memory (LSTM) architectures. Hyperparameter tuning and cross-validation were employed to optimize performance, resulting in over 80% accuracy on the test set. The project demonstrates how predictive modeling and statistical analysis can be leveraged in sports analytics to produce actionable insights. Results and methodology are documented in detail on the linked project page.",
    coverImage: "/project-photos/474/474-cover.png",

  },
];
