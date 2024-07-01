"use client";
import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="bg-gray-100 py-4">
      <nav>
        <ul className="flex justify-center space-x-4">
          <li>
            <Link
              href="/about"
              className="text-gray-800 hover:text-blue-500 transition-colors duration-300"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/cv"
              className="text-gray-800 hover:text-blue-500 transition-colors duration-300"
            >
              CV
            </Link>
          </li>
          <li>
            <Link
              href="/technologies"
              className="text-gray-800 hover:text-blue-500 transition-colors duration-300"
            >
              Technologies
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
