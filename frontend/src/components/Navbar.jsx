// src/components/Navbar.jsx

import React from 'react';

const Navbar = ({ isLoggedIn, onLogout }) => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-blue-600 to-blue-800 shadow-lg z-50">
      <div className="flex items-center justify-between px-6 py-4">
        <h1 className="text-2xl md:text-3xl font-bold text-white tracking-wide">
          🏢 Assets Management
          <span className="block text-xs font-mono tracking-widest lowercas text-gray-200">
            by-shubham pandey
          </span>
        </h1>

        {isLoggedIn && (
          <button
            onClick={onLogout}
            className="bg-white text-blue-700 font-medium px-4 py-2 rounded-full shadow hover:bg-gray-100 transition duration-200"
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
