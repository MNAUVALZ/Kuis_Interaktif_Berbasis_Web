import React from 'react';

export default function QuestionNav({ total, current, answers, onNavigate }) {
  return (
    <aside className="w-64 bg-gray-50 border-l p-4">
      <h3 className="font-bold mb-3">Navigasi Soal</h3>
      <div className="grid grid-cols-5 gap-2">
        {Array.from({ length: total }, (_, i) => (
          <button
            key={i}
            onClick={() => onNavigate(i)}
            className={`w-10 h-10 rounded text-sm font-bold ${
              i === current
                ? 'bg-blue-600 text-white'
                : answers[i]
                ? 'bg-green-500 text-white'
                : 'bg-gray-200 text-gray-700'
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </aside>
  );
}
