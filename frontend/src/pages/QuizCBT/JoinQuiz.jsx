import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function JoinQuiz() {
  const [pin, setPin] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: validate PIN via API
    navigate('/quiz/exam');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow max-w-sm w-full text-center">
        <h1 className="text-2xl font-bold mb-4">Masuk Ujian</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" placeholder="Masukkan PIN" value={pin} onChange={(e) => setPin(e.target.value)} className="w-full border px-3 py-2 rounded text-center text-2xl tracking-widest" maxLength={6} required />
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Mulai Ujian</button>
        </form>
      </div>
    </div>
  );
}
