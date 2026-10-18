import React, { useState } from 'react';

export default function AddQuestion() {
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState({ A: '', B: '', C: '', D: '' });
  const [correctAnswer, setCorrectAnswer] = useState('A');

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: save question to array / API
    console.log('Add question:', { question, options, correctAnswer });
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Tambah Soal</h1>
      <form onSubmit={handleSubmit} className="max-w-lg space-y-4">
        <textarea placeholder="Tulis soal di sini..." value={question} onChange={(e) => setQuestion(e.target.value)} className="w-full border px-3 py-2 rounded" rows={3} required />
        {['A', 'B', 'C', 'D'].map((key) => (
          <input key={key} type="text" placeholder={`Opsi ${key}`} value={options[key]} onChange={(e) => setOptions({ ...options, [key]: e.target.value })} className="w-full border px-3 py-2 rounded" required />
        ))}
        <select value={correctAnswer} onChange={(e) => setCorrectAnswer(e.target.value)} className="w-full border px-3 py-2 rounded">
          {['A', 'B', 'C', 'D'].map((k) => <option key={k} value={k}>Jawaban Benar: {k}</option>)}
        </select>
        <button type="submit" className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">Simpan Soal</button>
      </form>
    </div>
  );
}
