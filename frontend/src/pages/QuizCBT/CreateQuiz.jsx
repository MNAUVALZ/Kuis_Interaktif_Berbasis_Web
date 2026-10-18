import React, { useState } from 'react';

export default function CreateQuiz() {
  const [title, setTitle] = useState('');
  const [duration, setDuration] = useState(60);
  const [shuffle, setShuffle] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: call API to create quiz
    console.log('Create quiz:', { title, duration, shuffle });
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Buat Kuis Baru</h1>
      <form onSubmit={handleSubmit} className="max-w-md space-y-4">
        <input type="text" placeholder="Judul Kuis" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full border px-3 py-2 rounded" required />
        <input type="number" placeholder="Durasi (menit)" value={duration} onChange={(e) => setDuration(Number(e.target.value))} className="w-full border px-3 py-2 rounded" min={1} />
        <label className="flex items-center space-x-2">
          <input type="checkbox" checked={shuffle} onChange={(e) => setShuffle(e.target.checked)} />
          <span>Acak urutan soal</span>
        </label>
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Buat Kuis</button>
      </form>
    </div>
  );
}
