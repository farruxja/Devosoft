import React from "react";

const careerData = [
  {
    id: 1,
    title: "Senior Full Stack Developer",
    type: "Remote",
    description:
      "Lead the development of enterprise-level web applications using modern JavaScript frameworks and cloud technologies.",
    skills: ["React", "Node.js", "AWS", "5+ Years"],
  },
  {
    id: 2,
    title: "Data Scientist",
    type: "Hybrid",
    description:
      "Develop machine learning models and data analytics solutions to drive business insights and automated decision-making.",
    skills: ["Python", "TensorFlow", "SQL", "3+ Years"],
  },
  {
    id: 3,
    title: "UX/UI Designer",
    type: "On-site",
    description:
      "Create intuitive, engaging user experiences for web and mobile applications through user research and interface design.",
    skills: ["Figma", "Adobe XD", "User Research", "2+ Years"],
  },
  {
    id: 4,
    title: "DevOps Engineer",
    type: "Remote",
    description:
      "Implement and manage CI/CD pipelines, containerization, and cloud infrastructure for scalable applications.",
    skills: ["Docker", "Kubernetes", "Jenkins", "4+ Years"],
  },
  {
    id: 5,
    title: "Project Manager",
    type: "Hybrid",
    description:
      "Lead cross-functional teams to deliver complex IT projects on time, within scope, and budget using agile methodologies.",
    skills: ["Agile", "Scrum", "PMP", "5+ Years"],
  },
  {
    id: 6,
    title: "Cloud Solutions Architect",
    type: "On-site",
    description:
      "Design and implement secure, scalable cloud infrastructure solutions for enterprise clients across various industries.",
    skills: ["AWS", "Azure", "GCP", "6+ Years"],
  },
];

const CareerSection = () => {
  return (
    <section id="career" className="py-20 px-6 bg-darkBg text-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Join Our <span className="text-primary">Team</span>
        </h2>
        <p className="max-w-2xl mx-auto text-lg opacity-80">
          Be part of a dynamic team that's shaping the future of technology. Explore our current openings.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {careerData.map((career) => (
          <div
            key={career.id}
            className="p-6 bg-white text-gray-800 dark:bg-darkSecondary dark:text-white rounded-xl shadow-md flex flex-col justify-between transition hover:scale-[1.01]"
          >
            <div>
              <div className="flex justify-between items-start mb-4">
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                  {career.title}
                </h4>
                <span className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary">
                  {career.type}
                </span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                {career.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {career.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-700 dark:bg-white/10 dark:text-white/80"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <a
              href="#hero"
              className="inline-block mt-2 px-4 py-2 bg-gradient-to-r from-primary to-blue-500 text-white text-sm rounded-md text-center"
            >
              Apply Now
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CareerSection;
