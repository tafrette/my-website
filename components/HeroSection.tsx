import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold text-gray-800 mb-6">
              Hi, I'm <span className="text-blue-600">Thomas Frette</span>
            </h1>
            <h2 className="text-2xl text-gray-600 mb-6">
              Full-Stack Developer & Software Engineer
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Passionate about creating innovative solutions and bringing ideas to life through code. 
              I specialize in modern web technologies and enjoy tackling complex challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                View My Work
              </button>
              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
              >
                Get In Touch
              </button>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-full flex items-center justify-center">
                <Image
                  src="/thomasCV.png"
                  alt="Thomas Frette"
                  width={300}
                  height={300}
                  className="rounded-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center">
                <span className="text-4xl">💻</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
