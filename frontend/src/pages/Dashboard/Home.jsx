import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import ProgressBar from '../../components/gamification/ProgressBar';
import { calculateProgress } from '../../utils/levelCalculator';

/**
 * 🔄 [Hybrid] Home.jsx
 * Menampilkan data Poin, Level, dan tombol Menu
 */
export default function Home() {
  const { user } = useAuth();

  const points = user?.points || 0;
  const level = user?.level || 1;
  const progressPercent = calculateProgress(points);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div>
        <h1 style={{ fontSize: '1.875rem', fontWeight: 'bold', color: '#1e293b' }}>
          Selamat Datang, {user?.name || 'Siswa Hebat'}! 👋
        </h1>
        <p style={{ color: '#64748b', marginTop: '0.25rem' }}>
          Siap mengasah kemampuan dan mengumpulkan poin hari ini?
        </p>
      </div>

      {/* Status Gamifikasi Card */}
      <div style={{
        backgroundColor: '#ffffff',
        borderRadius: '12px',
        padding: '1.5rem',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '1.5rem',
        alignItems: 'center'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{ fontSize: '2.5rem' }}>🏆</div>
          <div>
            <div style={{ fontSize: '0.875rem', color: '#64748b' }}>Level Saat Ini</div>
            <div style={{ fontSize: '1.75rem', fontWeight: 'bold', color: '#1e293b' }}>Level {level}</div>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{ fontSize: '2.5rem' }}>⭐</div>
          <div>
            <div style={{ fontSize: '0.875rem', color: '#64748b' }}>Total Poin</div>
            <div style={{ fontSize: '1.75rem', fontWeight: 'bold', color: '#f59e0b' }}>{points} PTS</div>
          </div>
        </div>

        <div style={{ gridColumn: '1 / -1', marginTop: '0.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem', marginBottom: '0.5rem', color: '#475569' }}>
            <span>Progress ke Level {level + 1}</span>
            <span>{progressPercent}% ({points % 100}/100 PTS)</span>
          </div>
          <ProgressBar percentage={progressPercent} />
        </div>
      </div>

      {/* Menu Navigasi Utama */}
      <div>
        <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1e293b', marginBottom: '1rem' }}>
          Menu Cepat
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
          <Link
            to="/quiz/join"
            style={{
              backgroundColor: '#3b82f6',
              color: '#ffffff',
              padding: '1.5rem',
              borderRadius: '10px',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem',
              boxShadow: '0 2px 4px rgba(59,130,246,0.2)'
            }}
          >
            <span style={{ fontSize: '2rem' }}>🔑</span>
            <span style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>Masuk Ujian CBT</span>
            <span style={{ fontSize: '0.85rem', opacity: 0.9 }}>Masukkan 6-digit PIN untuk mulai mengerjakan kuis</span>
          </Link>

          <Link
            to="/classes"
            style={{
              backgroundColor: '#10b981',
              color: '#ffffff',
              padding: '1.5rem',
              borderRadius: '10px',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem',
              boxShadow: '0 2px 4px rgba(16,185,129,0.2)'
            }}
          >
            <span style={{ fontSize: '2rem' }}>📚</span>
            <span style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>Daftar Ruang Kelas</span>
            <span style={{ fontSize: '0.85rem', opacity: 0.9 }}>Lihat kelas yang Anda ikuti atau buat kelas baru</span>
          </Link>

          <Link
            to="/shop"
            style={{
              backgroundColor: '#8b5cf6',
              color: '#ffffff',
              padding: '1.5rem',
              borderRadius: '10px',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem',
              boxShadow: '0 2px 4px rgba(139,92,246,0.2)'
            }}
          >
            <span style={{ fontSize: '2rem' }}>🛍️</span>
            <span style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>Toko Karakter</span>
            <span style={{ fontSize: '0.85rem', opacity: 0.9 }}>Tukarkan akumulasi poin Anda dengan avatar karakter eksklusif</span>
          </Link>

          <Link
            to="/quiz/create"
            style={{
              backgroundColor: '#f97316',
              color: '#ffffff',
              padding: '1.5rem',
              borderRadius: '10px',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem',
              boxShadow: '0 2px 4px rgba(249,115,22,0.2)'
            }}
          >
            <span style={{ fontSize: '2rem' }}>📝</span>
            <span style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>Buat Kuis Baru</span>
            <span style={{ fontSize: '0.85rem', opacity: 0.9 }}>Pengaturan durasi, pengacakan soal, dan PIN kuis</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
