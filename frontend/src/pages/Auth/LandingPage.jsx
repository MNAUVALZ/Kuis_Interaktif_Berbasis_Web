import React from 'react';
import { Link } from 'react-router-dom';

/**
 * 🎨 [Design UI] LandingPage.jsx
 * Halaman promosi paling depan
 */
export default function LandingPage() {
  return (
    <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1e293b' }}>
        Selamat Datang di QuisZoors! 🎮📝
      </h2>
      <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: '1.6' }}>
        Ujian online jadi menyenangkan dengan sistem gamifikasi! Dapatkan poin dari setiap jawaban benar, naikkan level, dan kumpulkan karakter avatar keren!
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '1rem' }}>
        <Link
          to="/auth/login"
          style={{
            display: 'block',
            padding: '0.75rem',
            backgroundColor: '#2563eb',
            color: '#ffffff',
            borderRadius: '8px',
            fontWeight: '600'
          }}
        >
          Masuk ke Akun Anda
        </Link>
        <Link
          to="/auth/register"
          style={{
            display: 'block',
            padding: '0.75rem',
            backgroundColor: '#f8fafc',
            color: '#2563eb',
            border: '1px solid #cbd5e1',
            borderRadius: '8px',
            fontWeight: '600'
          }}
        >
          Daftar Akun Baru
        </Link>
      </div>
    </div>
  );
}
