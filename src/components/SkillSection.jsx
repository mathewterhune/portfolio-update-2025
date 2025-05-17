const SkillSection = ({ title, skills }) => {
  return (
    <div className="mb-4">
      <h1 className="text-xl text-gray-600 font-bold">{title}</h1>
      <div className="pl-5 flex flex-wrap gap-x-3 gap-y-0">
        {skills.map((skill, index) => (
          <p key={index} className="font-light m-0 p-0 hover:text-gray-800 transition duration-300 ease-in-out">
            {skill}
          </p>
        ))}
      </div>
    </div>
  );
};

export default SkillSection;
