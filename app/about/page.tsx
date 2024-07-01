"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const AboutPage: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("authenticated");

    if (!isAuthenticated) {
      router.push("/");
    }
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">About Page</h1>
        <p className="text-center">You have successfully logged in!</p>
        <p className="text-center">Heisann ❤️</p>
      </div>
    </div>
  );
};

export default AboutPage;
