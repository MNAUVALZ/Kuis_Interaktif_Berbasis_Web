import React from 'react';

export default function CharacterCard({ name, image, price, owned, onBuy }) {
  return (
    <div className="border rounded-lg p-4 text-center shadow hover:shadow-md transition">
      <img src={image} alt={name} className="w-24 h-24 mx-auto rounded-full object-cover mb-3" />
      <h3 className="font-bold text-lg">{name}</h3>
      <p className="text-gray-500 text-sm">{price} Poin</p>
      {owned ? (
        <span className="inline-block mt-2 px-3 py-1 bg-green-100 text-green-700 rounded text-sm">Dimiliki</span>
      ) : (
        <button onClick={onBuy} className="mt-2 px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm">Beli</button>
      )}
    </div>
  );
}
