import React from "react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">My Story</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              I'm a passionate software developer with a love for creating digital solutions that make a difference. 
              With experience in both frontend and backend development, I enjoy working on projects that challenge me 
              and allow me to grow as a developer.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to open source projects, 
              or working on personal side projects. I believe in continuous learning and staying up-to-date with 
              the latest industry trends.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                Problem Solver
              </div>
              <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                Team Player
              </div>
              <div className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">
                Continuous Learner
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">3+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-3xl font-bold text-green-600 mb-2">20+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-3xl font-bold text-purple-600 mb-2">10+</div>
              <div className="text-gray-600">Technologies</div>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-3xl font-bold text-orange-600 mb-2">5+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
