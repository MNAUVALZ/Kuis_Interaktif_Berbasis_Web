// Sidebar placeholder
import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-800 text-white h-screen p-4">
      <nav className="space-y-2">
        <NavLink to="/dashboard" className={({ isActive }) => isActive ? 'block py-2 px-3 bg-gray-700 rounded' : 'block py-2 px-3 hover:bg-gray-700 rounded'}>Dashboard</NavLink>
        <NavLink to="/classes" className={({ isActive }) => isActive ? 'block py-2 px-3 bg-gray-700 rounded' : 'block py-2 px-3 hover:bg-gray-700 rounded'}>Kelas</NavLink>
        <NavLink to="/quiz" className={({ isActive }) => isActive ? 'block py-2 px-3 bg-gray-700 rounded' : 'block py-2 px-3 hover:bg-gray-700 rounded'}>Kuis</NavLink>
        <NavLink to="/shop" className={({ isActive }) => isActive ? 'block py-2 px-3 bg-gray-700 rounded' : 'block py-2 px-3 hover:bg-gray-700 rounded'}>Toko</NavLink>
      </nav>
    </aside>
  );
}
