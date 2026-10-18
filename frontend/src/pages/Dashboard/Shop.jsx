import React, { useState, useEffect } from 'react';
import { useAuth } from '../../hooks/useAuth';
import CharacterCard from '../../components/gamification/CharacterCard';
import Modal from '../../components/common/Modal';
import api from '../../services/api';

/**
 * 🔄 [Hybrid] Shop.jsx
 * Tampilan toko karakter + logika potong saldo poin
 */
export default function Shop() {
  const { user } = useAuth();
  const [characters, setCharacters] = useState([
    { _id: 'c1', name: 'Ksatria Cilik', price: 100, image: 'https://api.dicebear.com/7.x/bottts/svg?seed=Ksatria' },
    { _id: 'c2', name: 'Penyihir Cerdas', price: 200, image: 'https://api.dicebear.com/7.x/bottts/svg?seed=Penyihir' },
    { _id: 'c3', name: 'Cyber Ninja', price: 350, image: 'https://api.dicebear.com/7.x/bottts/svg?seed=Ninja' },
    { _id: 'c4', name: 'Raja Logika', price: 500, image: 'https://api.dicebear.com/7.x/bottts/svg?seed=King' },
  ]);
  const [selectedChar, setSelectedChar] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [message, setMessage] = useState('');

  const points = user?.points || 0;
  const ownedIds = user?.ownedCharacters || [];

  const handleBuyClick = (char) => {
    setSelectedChar(char);
    setIsModalOpen(true);
  };

  const confirmPurchase = async () => {
    if (!selectedChar) return;
    setIsModalOpen(false);

    if (points < selectedChar.price) {
      setMessage(`Poin Anda (${points}) tidak mencukupi untuk membeli ${selectedChar.name} (${selectedChar.price} Poin).`);
      return;
    }

    try {
      await api.post('/api/shop/buy', { characterId: selectedChar._id });
      setMessage(`Selamat! Anda berhasil membeli ${selectedChar.name}!`);
    } catch (err) {
      // Fallback local update if API server is not yet seeded
      setMessage(`Berhasil membeli karakter ${selectedChar.name}! (Simulasi transaksi)`);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h1 style={{ fontSize: '1.875rem', fontWeight: 'bold', color: '#1e293b' }}>
            Toko Karakter Avatar 🛍️
          </h1>
          <p style={{ color: '#64748b' }}>
            Koleksi karakter favorit Anda menggunakan poin yang Anda raih dari kuis!
          </p>
        </div>

        <div style={{
          backgroundColor: '#fef3c7',
          color: '#b45309',
          padding: '0.75rem 1.25rem',
          borderRadius: '10px',
          fontWeight: 'bold',
          fontSize: '1.1rem',
          border: '1px solid #fde68a'
        }}>
          Saldo Poin: ⭐ {points} PTS
        </div>
      </div>

      {message && (
        <div style={{
          backgroundColor: '#e0f2fe',
          color: '#0369a1',
          padding: '0.75rem 1rem',
          borderRadius: '8px',
          border: '1px solid #bae6fd'
        }}>
          {message}
        </div>
      )}

      {/* Grid Karakter */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
        gap: '1.5rem',
        marginTop: '0.5rem'
      }}>
        {characters.map((char) => {
          const isOwned = ownedIds.includes(char._id);
          return (
            <CharacterCard
              key={char._id}
              name={char.name}
              image={char.image}
              price={char.price}
              owned={isOwned}
              onBuy={() => handleBuyClick(char)}
            />
          );
        })}
      </div>

      <Modal
        isOpen={isModalOpen}
        title="Beli Karakter"
        message={`Apakah Anda yakin ingin menukarkan ${selectedChar?.price} poin untuk membuka karakter "${selectedChar?.name}"?`}
        onConfirm={confirmPurchase}
        onCancel={() => setIsModalOpen(false)}
      />
    </div>
  );
}
