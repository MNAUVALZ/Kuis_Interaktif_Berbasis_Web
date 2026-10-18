// Placeholder for AuthLayout component
// Define the layout for authentication pages (Login, Register, Landing).
import React from 'react';
import { Outlet } from 'react-router-dom';

export default function AuthLayout() {
  return (
    <div className="auth-layout min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <Outlet />
    </div>
  );
}
