import React, { useState } from 'react';

export default function CreateClass() {
  const [className, setClassName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: call API to create class
    console.log('Create class:', className);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Buat Kelas Baru</h1>
      <form onSubmit={handleSubmit} className="max-w-md space-y-4">
        <input
          type="text"
          placeholder="Nama Kelas"
          value={className}
          onChange={(e) => setClassName(e.target.value)}
          className="w-full border px-3 py-2 rounded"
          required
        />
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          Buat Kelas
        </button>
      </form>
    </div>
  );
}
