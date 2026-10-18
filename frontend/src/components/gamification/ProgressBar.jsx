import React from 'react';

export default function ProgressBar({ percentage = 0 }) {
  return (
    <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
      <div
        className="bg-gradient-to-r from-blue-500 to-purple-500 h-full rounded-full transition-all duration-500"
        style={{ width: `${Math.min(100, Math.max(0, percentage))}%` }}
      />
    </div>
  );
}
