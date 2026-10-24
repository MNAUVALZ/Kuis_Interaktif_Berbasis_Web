import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import './Navbar.css';

//Menu navigasi atas untuk Dashboard

export default function Navbar() {
  const { user, logout } = useAuth();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const profileMenuRef = useRef(null);
  const profileButtonRef = useRef(null);
  const displayName = user?.name || user?.email || 'Pengguna';
  const avatarSeed = encodeURIComponent(user?.name || user?.email || 'QuisZoors');
  const avatarUrl = `https://api.dicebear.com/7.x/bottts/svg?seed=${avatarSeed}`;
  const isFocusedWorkPage =
    (pathname.startsWith('/classes/') && pathname !== '/classes/create') ||
    pathname === '/quiz/add';

  useEffect(() => {
    if (!isProfileMenuOpen) return undefined;

    const handlePointerDown = (event) => {
      if (!profileMenuRef.current?.contains(event.target)) {
        setIsProfileMenuOpen(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsProfileMenuOpen(false);
        profileButtonRef.current?.focus();
      }
    };

    document.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isProfileMenuOpen]);
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
  const handleLogout = () => {
    logout();
    setIsProfileMenuOpen(false);
    navigate('/auth/login');
  };

  return (
    <header className={`app-navbar${isFocusedWorkPage ? ' app-navbar--focused' : ''}`}>
      {isFocusedWorkPage ? (
        <button
          type="button"
          className="app-navbar__home-button"
          aria-label="Kembali ke Dashboard"
          title="Kembali ke Dashboard"
          onClick={() => navigate('/dashboard')}
        >
          <span aria-hidden="true" className="app-navbar__hamburger">
            <span />
            <span />
            <span />
          </span>
        </button>
      ) : (
        <>
          <span className="app-navbar__brand">QuisZoors</span>

          <div className="app-navbar__profile" ref={profileMenuRef}>
            <button
              type="button"
              ref={profileButtonRef}
              className="app-navbar__profile-trigger"
              aria-label={`Buka menu profil ${displayName}`}
              aria-expanded={isProfileMenuOpen}
              aria-haspopup="true"
              onClick={() => setIsProfileMenuOpen((isOpen) => !isOpen)}
            >
              <img className="app-navbar__avatar" src={avatarUrl} alt="" />
              <span className="app-navbar__profile-name">{displayName}</span>
              <span className="app-navbar__profile-chevron" aria-hidden="true">▾</span>
            </button>

            {isProfileMenuOpen && (
              <div className="app-navbar__profile-menu" aria-label="Menu profil">
                <span className="app-navbar__menu-username">{displayName}</span>
                <button type="button" disabled className="app-navbar__menu-item">
                  Pengaturan
                </button>
                <button
                  type="button"
                  onClick={handleLogout}
                  className="app-navbar__menu-item app-navbar__menu-item--logout"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </>
      )}
    </header>
  );
}
