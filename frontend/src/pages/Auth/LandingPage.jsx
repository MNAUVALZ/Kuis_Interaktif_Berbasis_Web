/* ==========================================================================
   QuisZoors Landing Page Stylesheet
   Matching exact design mockup with responsive layout and rich visual details
   ========================================================================== */

:root {
  --qz-primary-red: #e52535;
  --qz-primary-gold: #f5b324;
  --qz-navy-bg: #0d1f3d;
  --qz-navy-dark: #08142b;
  --qz-green-btn-1: #6ed336;
  --qz-green-btn-2: #48b724;
  --qz-text-dark: #111827;
  --qz-text-muted: #4b5563;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
  color: var(--qz-text-dark);
  background-color: #ffffff;
  overflow-x: hidden;
}

/* Base Wrapper */
.qz-landing {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.qz-container {
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 24px;
}

/* ==========================================================================
   1. HERO SECTION & NAVBAR
   ========================================================================== */
.qz-hero {
  position: relative;
  background-size: cover;
  background-position: center top;
  background-repeat: no-repeat;
  padding-top: 16px;
  padding-bottom: 100px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* Navbar */
.qz-nav {
  position: relative;
  z-index: 20;
  padding: 6px 0 10px 0;
}

.qz-nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.qz-logo {
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  transform: translateX(-75px);
  transition: transform 0.3s ease;
}

.qz-nav-logo {
  height: 74px;
  width: auto;
  max-width: 260px;
  object-fit: contain;
  filter: drop-shadow(0 3px 8px rgba(0, 0, 0, 0.1));
}

.qz-logo:hover {
  transform: translateX(-75px) scale(1.05);
}

.qz-nav-menu {
  display: flex;
  align-items: center;
  gap: 24px;
}

.qz-nav-menu a {
  text-decoration: none;
  color: #1f2937;
  font-size: 14.5px;
  font-weight: 600;
  transition: color 0.2s ease;
}

.qz-nav-menu a:hover {
  color: var(--qz-primary-red);
}

.qz-nav-link-login {
  background: rgba(255, 255, 255, 0.95);
  padding: 6px 16px;
  border-radius: 9999px;
  border: 1.5px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
}

.qz-mobile-toggle {
  display: none;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #111827;
}

/* Hero Content Grid */
.qz-hero-grid {
  display: grid;
  grid-template-columns: 1.12fr 0.88fr;
  align-items: center;
  gap: 28px;
  position: relative;
  z-index: 10;
  margin-top: auto;
  margin-bottom: auto;
  width: 100%;
}

.qz-hero .qz-container {
  max-width: 1420px;
}

/* Left Hero: Typography & Green Login Button */
.qz-hero-left {
  max-width: 860px;
  transform: translateX(-75px);
}

.qz-hero-title {
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: clamp(44px, 5.8vw, 74px);
  font-weight: 900;
  font-style: italic;
  line-height: 1.1;
  letter-spacing: -0.5px;
}

.qz-title-black {
  color: #0b1320;
}

.qz-title-red {
  color: var(--qz-primary-red);
}

.qz-hero-desc {
  margin-top: 16px;
  font-size: 15px;
  line-height: 1.6;
  color: #374151;
  font-weight: 450;
  max-width: 580px;
}

/* 🟢 TOMBOL HIJAU MASUK SEKARANG */
.qz-hero-action {
  margin-top: 24px;
}

.qz-green-login-btn {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 220px;
  height: 56px;
  background: linear-gradient(135deg, var(--qz-green-btn-1) 0%, var(--qz-green-btn-2) 100%);
  border-radius: 9999px;
  text-decoration: none;
  box-shadow: 
    0 10px 24px rgba(72, 183, 36, 0.42),
    0 3px 8px rgba(0, 0, 0, 0.08),
    inset 0 2px 4px rgba(255, 255, 255, 0.5);
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.4);
}

.qz-green-login-btn:hover {
  transform: translateY(-2px) scale(1.03);
  box-shadow: 
    0 14px 30px rgba(72, 183, 36, 0.55),
    0 5px 12px rgba(0, 0, 0, 0.12),
    inset 0 2px 4px rgba(255, 255, 255, 0.7);
  background: linear-gradient(135deg, #7be83c 0%, #4ec927 100%);
}

.qz-green-login-btn:active {
  transform: translateY(1px) scale(0.99);
}

.qz-green-btn-glow {
  position: absolute;
  top: 0;
  left: -100%;
  width: 60%;
  height: 100%;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.4) 50%,
    rgba(255, 255, 255, 0) 100%
  );
  transform: skewX(-25deg);
  animation: shineLoop 3.5s infinite;
}

@keyframes shineLoop {
  0% { left: -100%; }
  30% { left: 160%; }
  100% { left: 160%; }
}

.qz-green-btn-text {
  position: relative;
  z-index: 2;
  color: #ffffff;
  font-size: 17.5px;
  font-weight: 800;
  letter-spacing: 0.5px;
  display: flex;
  align-items: center;
  gap: 10px;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.25);
}

.qz-login-icon {
  width: 20px;
  height: 20px;
}

/* Right Hero: Big Emblem */
.qz-hero-right {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.qz-emblem-wrapper {
  position: relative;
  width: 100%;
  max-width: 580px;
  animation: floatEmblem 5s ease-in-out infinite alternate;
}

@keyframes floatEmblem {
  0% { transform: translateY(0px) rotate(0deg); }
  100% { transform: translateY(-10px) rotate(1.2deg); }
}

.qz-big-hero-logo {
  width: 100%;
  max-width: 580px;
  height: auto;
  object-fit: contain;
  filter: drop-shadow(0 20px 42px rgba(0, 0, 0, 0.25));
}

.qz-sparkle-star {
  position: absolute;
  top: 15px;
  right: 40px;
  color: #fce882;
  font-size: 42px;
  text-shadow: 0 0 18px rgba(245, 179, 36, 0.85);
  animation: twinkle 2.5s infinite ease-in-out;
  pointer-events: none;
}

@keyframes twinkle {
  0%, 100% { transform: scale(1) rotate(0deg); opacity: 0.9; }
  50% { transform: scale(1.3) rotate(20deg); opacity: 1; }
}

/* Wave Divider */
.qz-wave-divider {
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  line-height: 0;
  overflow: hidden;
  z-index: 5;
}

.qz-wave-divider svg {
  display: block;
  width: 100%;
  height: 90px;
}

/* ==========================================================================
   2. NAVY SECTION (Fitur, Our Class, Let's find a way)
   ========================================================================== */
.qz-navy-wrapper {
  background: linear-gradient(180deg, var(--qz-navy-bg) 0%, var(--qz-navy-dark) 100%);
  color: #ffffff;
  padding: 30px 0 0 0;
  position: relative;
  overflow: hidden;
}

/* 3 Feature Circles */
.qz-features-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  padding: 40px 24px;
  text-align: center;
}

.qz-feature-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.qz-feature-badge {
  width: 86px;
  height: 86px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 18px;
  background: rgba(13, 31, 61, 0.7);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);
  transition: transform 0.3s ease;
}

.qz-feature-badge svg {
  width: 40px;
  height: 40px;
}

.qz-feature-item:hover .qz-feature-badge {
  transform: translateY(-6px) scale(1.08);
}

.qz-badge-gold {
  border: 2.5px solid var(--qz-primary-gold);
  box-shadow: 0 0 20px rgba(245, 179, 36, 0.25);
}

.qz-badge-red {
  border: 2.5px solid var(--qz-primary-red);
  box-shadow: 0 0 20px rgba(229, 37, 53, 0.35);
}

.qz-feature-title {
  font-size: 20px;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 8px;
}

.qz-feature-desc {
  font-size: 13.5px;
  line-height: 1.5;
  color: rgba(220, 235, 255, 0.85);
  max-width: 250px;
}

/* ==========================================================================
   3. SECTION "OUR CLASS" (Box Rounded dengan 4 Kartu)
   ========================================================================== */
.qz-class-box {
  margin-top: 40px;
  border: 1.5px solid rgba(255, 255, 255, 0.22);
  border-radius: 28px;
  padding: 36px 32px 42px 32px;
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(10px);
}

.qz-class-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 28px;
}

.qz-class-heading {
  font-size: clamp(28px, 3.2vw, 40px);
  font-weight: 800;
  color: #ffffff;
  letter-spacing: -0.5px;
}

.qz-class-subtext {
  text-align: right;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 1.2px;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
}

/* 4 Cards Grid */
.qz-class-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.qz-card {
  background: #f7f9fc;
  color: #111827;
  border-radius: 20px;
  padding: 18px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: all 0.3s ease;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}

.qz-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 16px 32px rgba(0, 0, 0, 0.3);
  background: #ffffff;
}

.qz-card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 12px;
}

.qz-card-tag {
  font-size: 13px;
  font-weight: 800;
  color: #111827;
  letter-spacing: 0.2px;
}

.qz-card-subtitle {
  font-size: 11px;
  color: #6b7280;
  font-weight: 600;
  margin-top: 2px;
}

.qz-card-arrow-btn {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #0d1f3d;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.2s ease;
}

.qz-card-arrow-btn:hover {
  background: var(--qz-primary-red);
  transform: rotate(45deg);
}

.qz-card-desc {
  font-size: 11.5px;
  line-height: 1.5;
  color: #4b5563;
  margin-bottom: 16px;
  min-height: 36px;
}

.qz-card-image-box {
  width: 100%;
  height: 120px;
  border-radius: 14px;
  overflow: hidden;
  background: #e5e7eb;
}

.qz-card-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.4s ease;
}

.qz-card:hover .qz-card-img {
  transform: scale(1.06);
}

/* ==========================================================================
   4. SECTION "LET'S FIND A WAY" (Audience / Role Tab)
   ========================================================================== */
.qz-audience-section {
  padding: 70px 24px 40px 24px;
  text-align: center;
}

.qz-audience-heading {
  font-size: clamp(30px, 3.8vw, 46px);
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 24px;
  letter-spacing: -0.5px;
}

/* Segmented Pill Tabs */
.qz-pill-tabs {
  display: inline-flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 9999px;
  padding: 4px;
  margin-bottom: 48px;
  backdrop-filter: blur(8px);
}

.qz-pill-btn {
  background: transparent;
  border: none;
  color: rgba(255, 255, 255, 0.7);
  font-size: 16px;
  font-weight: 600;
  padding: 10px 26px;
  border-radius: 9999px;
  cursor: pointer;
  transition: all 0.25s ease;
  font-family: inherit;
}

.qz-pill-btn.active {
  background: rgba(255, 255, 255, 0.28);
  color: #ffffff;
  font-weight: 700;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.qz-pill-divider {
  color: rgba(255, 255, 255, 0.4);
  font-size: 16px;
  padding: 0 4px;
}

/* Two-column layout */
.qz-audience-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 50px;
  text-align: left;
}

.qz-audience-title {
  font-size: clamp(20px, 2.2vw, 26px);
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 20px;
}

.qz-audience-paragraphs {
  display: flex;
  flex-direction: column;
  gap: 16px;
  font-size: 14px;
  line-height: 1.68;
  color: rgba(220, 235, 255, 0.88);
}

.qz-audience-image-box {
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 20px 45px rgba(0, 0, 0, 0.45);
  border: 2px solid rgba(255, 255, 255, 0.18);
  background: #0b1a38;
}

.qz-audience-img {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
}

/* ==========================================================================
   5. BOTTOM RIBBON WAVES & FOOTER
   ========================================================================== */
.qz-bottom-ribbons {
  width: 100%;
  line-height: 0;
  margin-top: 40px;
}

.qz-bottom-ribbons svg {
  display: block;
  width: 100%;
  height: 120px;
}

.qz-footer {
  background: #081224;
  padding: 24px 0 32px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.qz-footer-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.6);
}

.qz-footer-links {
  display: flex;
  gap: 20px;
}

.qz-footer-links a {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  transition: color 0.2s ease;
}

.qz-footer-links a:hover {
  color: var(--qz-primary-gold);
}

/* ==========================================================================
   RESPONSIVE MEDIA QUERIES
   ========================================================================== */
@media (max-width: 1024px) {
  .qz-class-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .qz-hero {
    min-height: auto;
    padding-bottom: 80px;
  }

  .qz-logo {
    transform: none;
  }

  .qz-logo:hover {
    transform: scale(1.05);
  }

  .qz-hero-grid {
    grid-template-columns: 1fr;
    text-align: center;
    margin-top: 24px;
    margin-bottom: 32px;
  }

  .qz-hero-left {
    max-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    transform: none;
  }

  .qz-hero-desc {
    max-width: 100%;
  }

  .qz-emblem-wrapper {
    max-width: 300px;
    margin: 20px auto 0 auto;
  }

  .qz-features-row {
    grid-template-columns: 1fr;
    gap: 36px;
  }

  .qz-class-header {
    flex-direction: column;
    gap: 10px;
  }

  .qz-class-subtext {
    text-align: left;
  }

  .qz-class-grid {
    grid-template-columns: 1fr;
  }

  .qz-audience-grid {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .qz-mobile-toggle {
    display: block;
  }

  .qz-nav-menu {
    display: none;
    position: absolute;
    top: 100%;
    left: 24px;
    right: 24px;
    background: #ffffff;
    border-radius: 16px;
    padding: 20px;
    flex-direction: column;
    gap: 16px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
    z-index: 50;
  }

  .qz-nav-menu--open {
    display: flex;
  }

  .qz-footer-inner {
    flex-direction: column;
    gap: 12px;
    text-align: center;
  }
}
