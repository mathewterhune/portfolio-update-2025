import Card_Experience from "../components/Card_Experience";

const Experience = () => {
    const experiences = [
        {
            company: "Columbia Basin Trust",
            company_link: "https://ourtrust.org/",
            title: "Information Systems, CO-OP",
            location : "Castlegar, BC",
            timeframe: "May 2024 - August 2024",
            length: "4 Months",
            bullets: ["Responded to and resolved support tickets, ensuring timely and effective troubleshooting of technical issues.",
                "Researched, tested, documented, presented, and prototyped the integration of Microsoft Power BI to management",
                "Assisted is regular servicing and secure data wiping on physical servers.",
                "Managed and maintained multiple virtual machines, creating a virtual network for communication.",
            ]
        },
        {
            company: "Cortex Labs",
            company_link: "https://decision-map.com/",
            title: "Undergraduate Research Assistant and Software Developer",
            location : "Victoria, BC",
            timeframe: "September 2023 - April 2025",
            length: "1 Year, 8 months",
            bullets: [
                "Designed and helped maintain a visualization tool relating to brain injury, mental health, and addiction.",
                "Project has been presented globally at events including Canadian MP, Canadian Traumatic Brain Injury Research Consortium, and the Global Neuropsychology Congress in Portugal",
                "Designed landing website for the project. (no longer in use)"
            ]
        }

    ]

    return (
        <div className="w-full p-10">
            <h1 className="text-4xl text-gray-700 font-bold"> Experience </h1>
            <div className="grid grid-cols-1 gap-5 mt-5">
                {experiences.map((exp, index) => (
                    <Card_Experience key={index} experience={exp} />
                ))}
            </div>
        </div>
    );
}

export default Experience;