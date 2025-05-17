
const Card_Experience = ( { experience }) => {
    return (
        <div className = "w-full p-10 bg-white rounded-2xl"> 
        <div className="flex justify-between items-start">
            <h1 className="text-xl">{experience.title}</h1>
            <p className="font-light">{experience.timeframe}</p>
        </div>
        <span> {experience.location}</span>
        <div className="flex justify-between items-start">
            <p className="font-light">{experience.company}</p>  
            <p className="font-light">{experience.length}</p>
        </div>
            <ul className="list-disc pl-5">
                {experience.bullets.map((bullet, index) => (
                    <li key={index} className="font-light">{bullet}</li>
                ))}
            </ul>
        </div>
    );
}

export default Card_Experience;