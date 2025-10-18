import React from "react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with user authentication, payment integration, and admin dashboard.",
      image: "/api/placeholder/400/300",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
      github: "#"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates and team collaboration features.",
      image: "/api/placeholder/400/300",
      technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Socket.io"],
      github: "#"
    },
    {
      title: "Weather Dashboard",
      description: "A responsive weather application with location-based forecasts and interactive charts.",
      image: "/api/placeholder/400/300",
      technologies: ["React", "Chart.js", "OpenWeather API", "Tailwind CSS"],
      github: "#"
    },
    {
      title: "Social Media Analytics",
      description: "Analytics dashboard for social media metrics with data visualization and reporting features.",
      image: "/api/placeholder/400/300",
      technologies: ["Vue.js", "Python", "Django", "PostgreSQL", "Docker"],
      github: "#"
    },
    {
      title: "Fragment Shader Library",
      description: "A collection of interactive fragment shaders for creative coding and visual effects.",
      image: "/api/placeholder/400/300",
      technologies: ["WebGL", "GLSL", "Three.js", "JavaScript"],
      github: "#"
    },
    {
      title: "API Documentation Tool",
      description: "Automated API documentation generator with interactive testing capabilities.",
      image: "/api/placeholder/400/300",
      technologies: ["Express.js", "Swagger", "Jest", "MongoDB", "Docker"],
      github: "#"
    }
  ];

  const getTechColor = (tech: string) => {
    const colors = [
      "bg-blue-100 text-blue-800",
      "bg-green-100 text-green-800",
      "bg-purple-100 text-purple-800",
      "bg-orange-100 text-orange-800",
      "bg-red-100 text-red-800",
      "bg-indigo-100 text-indigo-800",
      "bg-pink-100 text-pink-800",
      "bg-yellow-100 text-yellow-800"
    ];
    return colors[Math.abs(tech.split('').reduce((a, b) => a + b.charCodeAt(0), 0)) % colors.length];
  };

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center">
                <span className="text-white text-6xl">🚀</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-3 py-1 rounded-full text-xs font-medium ${getTechColor(tech)}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
