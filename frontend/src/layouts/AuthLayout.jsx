import React from 'react';
import { Outlet } from 'react-router-dom';

/**
 * 🎨 [Design UI] AuthLayout.jsx
 * Bingkai polos untuk halaman Login / Register / LandingPage
 */
export default function AuthLayout() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f1f5f9', padding: '1rem' }}>
      <header style={{ marginBottom: '2rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#2563eb' }}>QuisZoors</h1>
        <p style={{ color: '#64748b' }}>Platform Belajar & Kuis Interaktif Berbasis Gamifikasi</p>
      </header>
      <main style={{ width: '100%', maxWidth: '420px', backgroundColor: '#ffffff', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)', padding: '2rem' }}>
        <Outlet />
      </main>
    </div>
  );
}
