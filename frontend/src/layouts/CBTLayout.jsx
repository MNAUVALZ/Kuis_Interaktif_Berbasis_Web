// CBT layout for full‑screen quiz (placeholder)
import React from 'react';
import { Outlet } from 'react-router-dom';

export default function CBTLayout({ children }) {
  return (
    <div className="cbt-layout min-h-screen bg-white">
      {children || <Outlet />}
    </div>
  );
}
