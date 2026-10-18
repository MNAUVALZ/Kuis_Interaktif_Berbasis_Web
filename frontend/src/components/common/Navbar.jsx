import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

/**
 * 🎨 [Design UI] Navbar.jsx
 * Menu navigasi atas untuk Dashboard
 */
export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <header style={{
      height: '64px',
      backgroundColor: '#ffffff',
      borderBottom: '1px solid #e2e8f0',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 1.5rem',
      position: 'sticky',
      top: 0,
      zIndex: 10
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <span style={{ fontWeight: 'bold', fontSize: '1.25rem', color: '#2563eb' }}>QuisZoors</span>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
        {user && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '0.875rem' }}>
            <span style={{ backgroundColor: '#fef3c7', color: '#d97706', padding: '0.25rem 0.75rem', borderRadius: '9999px', fontWeight: 'bold' }}>
              ⭐ {user.points || 0} Poin
            </span>
            <span style={{ backgroundColor: '#e0e7ff', color: '#4338ca', padding: '0.25rem 0.75rem', borderRadius: '9999px', fontWeight: 'bold' }}>
              Lv. {user.level || 1}
            </span>
            <span style={{ color: '#334155', fontWeight: '500' }}>{user.name || user.email}</span>
            <button
              onClick={logout}
              style={{ backgroundColor: '#ef4444', color: '#ffffff', padding: '0.4rem 0.8rem', borderRadius: '6px', fontSize: '0.8rem' }}
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
