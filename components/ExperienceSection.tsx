import React from "react";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Senior Software Developer",
      company: "Tech Solutions Inc.",
      period: "2022 - Present",
      description: "Leading development of scalable web applications using modern technologies. Mentoring junior developers and implementing best practices.",
      technologies: ["React", "Node.js", "AWS", "Docker", "Kubernetes"]
    },
    {
      title: "Full-Stack Developer",
      company: "Digital Agency Co.",
      period: "2021 - 2022",
      description: "Developed custom web applications for clients across various industries. Collaborated with design teams to create user-friendly interfaces.",
      technologies: ["Vue.js", "Python", "PostgreSQL", "Docker"]
    },
    {
      title: "Junior Developer",
      company: "StartupXYZ",
      period: "2020 - 2021",
      description: "Built features for the company's main product. Gained experience in agile development and version control best practices.",
      technologies: ["JavaScript", "React", "MongoDB", "Express.js"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Experience</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-lg shadow-sm">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">{exp.title}</h3>
                  <p className="text-blue-600 font-medium">{exp.company}</p>
                </div>
                <span className="text-gray-500 mt-2 md:mt-0">{exp.period}</span>
              </div>
              <p className="text-gray-600 mb-4 leading-relaxed">{exp.description}</p>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
