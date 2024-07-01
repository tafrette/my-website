"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

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
        <h1 className="text-3xl font-bold mb-6 text-center">About Me</h1>
        <div className="flex flex-col items-center">
          <Image
            src="/thomasCV.png"
            alt="Picture of me"
            width={200}
            height={200}
            className="rounded-full mb-4"
          />
          <p className="text-center mb-4">
            Hello! I'm [Your Name], a software developer with a passion for
            creating web applications. I have experience in various technologies
            including JavaScript, React, and Node.js. I'm always looking for new
            challenges and opportunities to grow.
          </p>
          <div className="flex space-x-4">
            <Link
              href="https://www.linkedin.com/in/thomasfrette/"
              target="_blank"
              className="text-blue-600 hover:underline"
            >
              <LinkedInIcon />
            </Link>
            <Link
              href="https://github.com/tafrette"
              target="_blank"
              className="text-gray-900 hover:underline"
            >
              <GitHubIcon />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
