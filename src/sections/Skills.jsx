const SkillSection = ({ title, skills }) => {
  return (
    <div className="mb-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span key={index} className={`px-3 py-1 bg-gray-100 rounded-full text-sm border-2 ${getRatingBorderColor(skill.rating)}`}>
            {skill.name}
          </span>
        ))}
      </div>
    </div>
  );
};

const getRatingBorderColor = (rating) => {
  switch (rating) {
    case 'Expert':
      return 'border-green-500';
    case 'Proficient':
      return 'border-blue-500';
    case 'Intermediate':
      return 'border-yellow-500';
    case 'Educational':
      return 'border-orange-500';
    case 'Exposure':
      return 'border-red-500';
    default:
      return 'border-gray-400';
  }
};

const Legend = () => {
  const ratings = [
    { level: 'Expert', borderColor: 'border-green-500', description: 'Advanced proficiency' },
    { level: 'Proficient', borderColor: 'border-blue-500', description: 'Strong working knowledge' },
    { level: 'Intermediate', borderColor: 'border-yellow-500', description: 'Comfortable with basics' },
    { level: 'Educational', borderColor: 'border-orange-500', description: 'Some experience, learning' },
    { level: 'Exposure', borderColor: 'border-red-500', description: 'Academic/theoretical knowledge' }
  ];

  return (
    <div className="bg-gray-50 rounded-lg p-4 mb-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-3">Skill Level Legend</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {ratings.map((rating) => (
          <div key={rating.level} className="flex items-center gap-2">
            <div className={`px-2 py-1 bg-gray-100 rounded-full text-xs border-2 ${rating.borderColor}`}>
              {rating.level}
            </div>
            <span className="text-sm text-gray-700">{rating.description}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  const skills = {
    programmingLanguages: [
      { name: "C++", rating: "Proficient" },
      { name: "C", rating: "Proficient" },
      { name: "Python", rating: "Expert" },
      { name: "JavaScript", rating: "Proficient" },
      { name: "TypeScript", rating: "Intermediate" },
      { name: "Rust", rating: "Intermediate" },
      { name: "Haskell", rating: "Educational" },
      { name: "CUDA", rating: "Exposure" },
      { name: "Swift", rating: "Exposure" },
      { name: "Flutter", rating: "Exposure" },
      { name: "Dart", rating: "Exposure" },
    ],
    frontEnd: [
      { name: "HTML", rating: "Proficient" },
      { name: "CSS", rating: "Proficient" },
      { name: "JavaScript", rating: "Proficient" },
      { name: "React", rating: "Proficient" },
      { name: "Tailwind CSS", rating: "Proficient" },
      { name: "Vue.js", rating: "Intermediate" },
      { name: "Bootstrap", rating: "Exposure" },
      { name: "TypeScript", rating: "Intermediate" } 
    ],
    backEnd: [
      { name: "Node.js", rating: "Intermediate" },
      { name: "Express", rating: "Exposure" },
      { name: "Flask", rating: "Exposure" },
      { name: "Django", rating: "Exposure" }
    ],
    database: [
      { name: "MySQL", rating: "Proficient" },
      { name: "MongoDB", rating: "Exposure" },
      { name: "PostgreSQL", rating: "Intermediate" }
    ],
    tools: [
      { name: "Git", rating: "Proficient" },
      { name: "Docker", rating: "Exposure" },
      { name: "Kubernetes", rating: "Exposure" }
    ],
    software: [
      { name: "Microsoft Office Suite", rating: "Expert" },
      { name: "Visual Studio Code", rating: "Expert" },
      { name: "IntelliJ", rating: "Proficient" },
      { name: "Xcode", rating: "Exposure" },
      { name: "WireShark", rating: "Educational" },
      { name: "Figma", rating: "Intermediate" },
      { name: "Jupyter Notebook", rating: "Proficient" },
      { name: "Supabase", rating: "Intermediate" },
      { name: "Firebase", rating: "Exposure" }
    ]
  };

  return (
    <div className="w-full p-10">
      <h1 className="text-4xl text-gray-700 font-bold mb-6">Technical Skills</h1>
      <div className="bg-white shadow-lg rounded-2xl p-6">
        <Legend />
        <div className="space-y-6">
          <SkillSection title="Programming Languages" skills={skills.programmingLanguages} />
          <SkillSection title="Front End" skills={skills.frontEnd} />
          <SkillSection title="Back End" skills={skills.backEnd} />
          <SkillSection title="Databases" skills={skills.database} />
          <SkillSection title="Tools" skills={skills.tools} />
          <SkillSection title="Software" skills={skills.software} />
        </div>
      </div>
    </div>
  );
};

export default Skills;