"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type WorkExperience = {
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  description: string;
};

type Education = {
  institution: string;
  degree: string;
  startDate: string;
  endDate: string;
  description: string;
};

const mockWorkExperience: WorkExperience[] = [
  {
    company: "Company A",
    role: "Software Developer",
    startDate: "Jan 2020",
    endDate: "Present",
    description:
      "Worked on various projects involving web development and software engineering.",
  },
  {
    company: "Company B",
    role: "Intern",
    startDate: "Jun 2019",
    endDate: "Dec 2019",
    description:
      "Assisted in the development of internal tools and applications.",
  },
];

const mockEducation: Education[] = [
  {
    institution: "University X",
    degree: "BSc in Computer Science",
    startDate: "Sep 2016",
    endDate: "May 2020",
    description:
      "Studied various aspects of computer science including algorithms, data structures, and web development.",
  },
];

const AboutPage: React.FC = () => {
  const router = useRouter();
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("authenticated");

    if (!isAuthenticated) {
      router.push("/");
    } else {
      setAuthenticated(true);
    }
  }, [router]);

  if (!authenticated) {
    return <div>Redirecting...</div>;
  }

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">My CV</h1>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Work Experience</h2>
          {mockWorkExperience.map((experience, index) => (
            <div key={index} className="mb-4">
              <h3 className="text-xl font-bold">{experience.company}</h3>
              <p className="text-gray-600">{experience.role}</p>
              <p className="text-gray-500">
                {experience.startDate} - {experience.endDate}
              </p>
              <p>{experience.description}</p>
            </div>
          ))}
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Education</h2>
          {mockEducation.map((education, index) => (
            <div key={index} className="mb-4">
              <h3 className="text-xl font-bold">{education.institution}</h3>
              <p className="text-gray-600">{education.degree}</p>
              <p className="text-gray-500">
                {education.startDate} - {education.endDate}
              </p>
              <p>{education.description}</p>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
