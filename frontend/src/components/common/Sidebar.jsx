import React from 'react';
import { NavLink } from 'react-router-dom';

/**
 * 🎨 [Design UI] Sidebar.jsx
 * Menu navigasi samping
 */
export default function Sidebar() {
  const links = [
    { to: '/dashboard', label: '🏠 Dashboard' },
    { to: '/shop', label: '🛍️ Toko Karakter' },
    { to: '/classes', label: '📚 Daftar Kelas' },
    { to: '/classes/create', label: '➕ Buat Kelas' },
    { to: '/quiz/create', label: '📝 Buat Kuis CBT' },
    { to: '/quiz/join', label: '🔑 Masuk Ujian PIN' },
  ];

  return (
    <aside style={{
      width: '240px',
      backgroundColor: '#1e293b',
      color: '#ffffff',
      display: 'flex',
      flexDirection: 'column',
      padding: '1.5rem 1rem',
      flexShrink: 0,
      minHeight: 'calc(100vh - 64px)'
    }}>
      <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to === '/dashboard' || link.to === '/classes'}
            style={({ isActive }) => ({
              display: 'block',
              padding: '0.75rem 1rem',
              borderRadius: '8px',
              color: isActive ? '#ffffff' : '#94a3b8',
              backgroundColor: isActive ? '#3b82f6' : 'transparent',
              fontWeight: isActive ? '600' : 'normal',
              transition: 'all 0.2s'
            })}
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
