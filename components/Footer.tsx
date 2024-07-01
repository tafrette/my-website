"use client";
import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="bg-gray-100 py-4">
      <nav>
        <ul className="flex justify-center space-x-4">
          <li>
            <Link
              to="/about"
              className="text-gray-800 hover:text-blue-500 transition-colors duration-300"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/cv"
              className="text-gray-800 hover:text-blue-500 transition-colors duration-300"
            >
              CV
            </Link>
          </li>
          <li>
            <Link
              to="/technologies"
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
