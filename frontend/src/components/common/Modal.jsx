import React from 'react';

export default function Modal({ isOpen, title, message, onConfirm, onCancel }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-sm w-full shadow-xl">
        <h2 className="text-xl font-bold mb-2">{title || 'Konfirmasi'}</h2>
        <p className="text-gray-600 mb-6">{message || 'Apakah Anda yakin?'}</p>
        <div className="flex justify-end space-x-3">
          <button onClick={onCancel} className="px-4 py-2 border rounded hover:bg-gray-100">Batal</button>
          <button onClick={onConfirm} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Ya, Lanjutkan</button>
        </div>
      </div>
    </div>
  );
}
