import SkillSection from "../components/SkillSection";

const Skills = () => {
  const skills = {
    programmingLanguages: ["C++", "C", "Python", "JavaScript", "Rust", "Haskell", "CUDA"],
    frontEnd: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Vue.js", "Bootstrap"],
    backEnd: ["Node.js", "Express", "Flask", "Django"],
    database: ["MySQL", "MongoDB", "PostgreSQL"],
    tools: ["Git", "Docker", "Kubernetes"],
    software: [
      "Microsoft Office Suite (Word, Outlook, PowerPoint, Excel, OneNote, OneDrive, SharePoint, Teams, PowerBI, Excel ...)",
      "Visual Studio Code",
      "IntelliJ",
      "Xcode",
      "WireShark",
      "Figma",
      "Jupyter Notebook",
      "Supabase",
      "Firebase",
    ],
  };

  return (
    <div className="w-full p-10">
      <h1 className="text-4xl text-gray-700 font-bold">Technical Skills</h1>
      <div className="bg-white shadow-lg rounded-2xl p-5 space-y-4">
        <SkillSection title="Programming Languages" skills={skills.programmingLanguages} />
        <SkillSection title="Front End" skills={skills.frontEnd} />
        <SkillSection title="Back End" skills={skills.backEnd} />
        <SkillSection title="Databases" skills={skills.database} />
        <SkillSection title="Tools" skills={skills.tools} />
        <SkillSection title="Software" skills={skills.software} />
      </div>
    </div>
  );
};

export default Skills;
