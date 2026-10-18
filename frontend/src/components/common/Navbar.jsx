// Navbar placeholder
import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-white shadow p-4 flex justify-between items-center">
      <div className="text-xl font-bold">QuisZoors</div>
      <div className="space-x-4">
        <Link to="/dashboard" className="text-gray-700 hover:text-blue-600">Dashboard</Link>
        <Link to="/classes" className="text-gray-700 hover:text-blue-600">Kelas</Link>
        <Link to="/quiz" className="text-gray-700 hover:text-blue-600">Kuis</Link>
      </div>
    </nav>
  );
}
