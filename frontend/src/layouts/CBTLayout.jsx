import React from 'react';
import { Outlet } from 'react-router-dom';

/**
 * 🎨 [Design UI] CBTLayout.jsx
 * Bingkai Full-Screen, tanpa menu sidebar/navbar, khusus ujian CBT
 */
export default function CBTLayout() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f1f5f9', display: 'flex', flexDirection: 'column' }}>
      <header style={{
        height: '56px',
        backgroundColor: '#0f172a',
        color: '#ffffff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 1.5rem',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
        <div style={{ fontWeight: 'bold', fontSize: '1.1rem', letterSpacing: '0.05em' }}>
          QUISZOORS CBT EXAM SYSTEM
        </div>
        <div style={{ fontSize: '0.875rem', color: '#94a3b8' }}>
          Mode Ujian Aman Aktif 🔒
        </div>
      </header>
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Outlet />
      </main>
    </div>
  );
}
