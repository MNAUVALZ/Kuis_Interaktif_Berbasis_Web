import { useState } from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

// ============================================================================
// 📸 KONFIGURASI FOTO & GAMBAR (Bisa Anda ganti dengan mudah)
// Letakkan file gambar Anda di folder: public/images/
// Atau ganti URL di bawah ini dengan nama file gambar Anda sendiri.
// ============================================================================
const CONFIG_IMAGES = {
  // 1. Foto Background Hero (Langit / Awan)
  heroBg: '/images/hero-bg.jpg',

  // 2. 🟢 LOGO KIRI ATAS (NAVBAR):
  // Ganti path file ini jika ingin ganti logo di kiri atas
  logoNavbar: '/images/logo-transparent.png',

  // 3. 🟡 LOGO BESAR KANAN (HERO):
  // Ganti path file ini jika ingin ganti logo besar di sisi kanan
  logoHeroKanan: '/images/logo-transparent.png',

  // 4. Foto Ilustrasi / Preview Guru & Admin
  educatorPreview: '/images/educator-preview.jpg',

  // 5. Foto Thumbnail Kartu Kelas
  classThumbnail: '/images/class-placeholder.jpg',
};

// Data 4 Kartu "Our Class"
const classList = [
  {
    id: 1,
    tag: 'MATEMATIKA XII',
    subtitle: 'Aljabar & Kalkulus',
    desc: 'Latihan soal dan pembahasan interaktif untuk persiapan ujian akhir.',
    image: CONFIG_IMAGES.classThumbnail,
  },
  {
    id: 2,
    tag: 'FISIKA XI',
    subtitle: 'Mekanika & Gelombang',
    desc: 'Eksplorasi konsep fisika dengan simulasi kuis yang menyenangkan.',
    image: CONFIG_IMAGES.classThumbnail,
  },
  {
    id: 3,
    tag: 'BAHASA INGGRIS',
    subtitle: 'Grammar & Vocabulary',
    desc: 'Asah kemampuan reading, listening, dan kosa kata bahasa Inggris.',
    image: CONFIG_IMAGES.classThumbnail,
  },
  {
    id: 4,
    tag: 'KIMIA XII',
    subtitle: 'Stoikiometri & Reaksi',
    desc: 'Pahami reaksi kimia dan hitungan mol melalui kuis terarah.',
    image: CONFIG_IMAGES.classThumbnail,
  },
];

function LandingPage() {
  const [activeTab, setActiveTab] = useState('admin'); // 'admin' atau 'teacher'
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="qz-landing">
      {/* ===================================================================
          1. HERO SECTION (Atas)
          Foto background dikontrol oleh CONFIG_IMAGES.heroBg
      =================================================================== */}
      <section
        className="qz-hero"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(235, 245, 255, 0.3) 0%, rgba(255, 255, 255, 0.85) 75%, #ffffff 100%), url(${CONFIG_IMAGES.heroBg})`,
        }}
      >
        {/* Navigation Bar */}
        <header className="qz-nav">
          <div className="qz-container qz-nav-inner">
            <Link to="/" className="qz-logo" aria-label="QuisZoors Beranda">
              {/* Gambar Logo Kiri Atas */}
              <img src={CONFIG_IMAGES.logoNavbar} alt="QuisZoors" className="qz-nav-logo" />
            </Link>

            <button
              className="qz-mobile-toggle"
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? '✕' : '☰'}
            </button>

            <nav className={`qz-nav-menu ${menuOpen ? 'qz-nav-menu--open' : ''}`}>
              <a href="#features" onClick={() => setMenuOpen(false)}>Fitur</a>
              <a href="#our-class" onClick={() => setMenuOpen(false)}>Our Class</a>
              <a href="#about" onClick={() => setMenuOpen(false)}>Tentang Kami</a>
              <Link to="/login" className="qz-nav-link-login" onClick={() => setMenuOpen(false)}>
                Masuk
              </Link>
            </nav>
          </div>
        </header>

        {/* Hero Main Content */}
        <div className="qz-container qz-hero-grid">
          {/* Kolom Kiri: Judul, Deskripsi, Tombol Hijau LOGIN */}
          <div className="qz-hero-left">
            <h1 className="qz-hero-title">
              <span className="qz-title-black">Uji Pengetahuanmu</span>
              <span className="qz-title-red">Raih Poinmu</span>
              <span className="qz-title-black">Taklukkan Tantangannya!</span>
            </h1>

            <p className="qz-hero-desc">
              Selamat datang di QuisZoors, platform kuis interaktif yang dirancang
              untuk menguji kemampuan, menambah wawasan, dan mengasah pola pikir
              melalui berbagai tantangan menarik. Belajar tidak harus membosankan,
              Temukan keseruan menjawab pertanyaan, kumpulkan skor, dan buktikan
              kemampuanmu di setiap kuis!
            </p>

            {/* 🟢 TOMBOL HIJAU LOGIN (Sesuai Permintaan) */}
            <div className="qz-hero-action">
              <Link
                to="/login"
                className="qz-green-login-btn"
                title="Klik untuk Masuk ke Akun Anda"
                id="hero-login-button"
              >
                <span className="qz-green-btn-glow" />
                <span className="qz-green-btn-text">
                  <svg className="qz-login-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M10 17l5-5-5-5v10zM4 19h10v2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h10v2H4v14z" />
                  </svg>
                  LOGIN
                </span>
              </Link>
            </div>
          </div>

          {/* Kolom Kanan: Gambar Lambang Besar QuisZoors dengan Animasi */}
          <div className="qz-hero-right">
            <div className="qz-emblem-wrapper">
              {/* Sparkle Star */}
              <div className="qz-sparkle-star">✦</div>

              {/* Gambar Logo Besar Kanan */}
              <img
                src={CONFIG_IMAGES.logoHeroKanan}
                alt="QuisZoors Logo"
                className="qz-big-hero-logo"
              />
            </div>
          </div>
        </div>

        {/* Gelombang Transisi ke Bagian Biru Navy */}
        <div className="qz-wave-divider">
          <svg viewBox="0 0 1440 200" fill="none" preserveAspectRatio="none">
            <path
              d="M0 60 C 380 180, 1020 0, 1440 100 L1440 200 L0 200 Z"
              fill="#0d1f3d"
            />
          </svg>
        </div>
      </section>

      {/* ===================================================================
          2. NAVY SECTION (Fitur, Our Class, Let's find a way)
      =================================================================== */}
      <div className="qz-navy-wrapper">
        {/* 3 ICON FITUR UTAMA */}
        <section id="features" className="qz-container qz-features-row">
          {/* Fitur 1: Quis Seru */}
          <div className="qz-feature-item">
            <div className="qz-feature-badge qz-badge-gold">
              <svg viewBox="0 0 24 24" fill="none" stroke="#f5b324" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="6" width="20" height="12" rx="4" />
                <path d="M6 12h4m-2-2v4m7-2h.01m3 0h.01" />
              </svg>
            </div>
            <h3 className="qz-feature-title">Quis Seru</h3>
            <p className="qz-feature-desc">
              Berbagai pertanyaan menarik dari berbagai kategori
            </p>
          </div>

          {/* Fitur 2: Scor Instan */}
          <div className="qz-feature-item">
            <div className="qz-feature-badge qz-badge-red">
              <svg viewBox="0 0 24 24" fill="#e52535">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
            </div>
            <h3 className="qz-feature-title">Scor Instan</h3>
            <p className="qz-feature-desc">
              Lihat hasil dan skor kamu secara langsung
            </p>
          </div>

          {/* Fitur 3: Papan Peringkat */}
          <div className="qz-feature-item">
            <div className="qz-feature-badge qz-badge-gold">
              <svg viewBox="0 0 24 24" fill="none" stroke="#f5b324" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 9H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h2m12 6h2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-2M6 3h12v7a6 6 0 0 1-12 0V3z" />
                <path d="M9 21h6m-3-7v7" />
              </svg>
            </div>
            <h3 className="qz-feature-title">Papan Peringkat</h3>
            <p className="qz-feature-desc">
              Tentang teman dan bukti kamu yang terbaik!
            </p>
          </div>
        </section>

        {/* -------------------------------------------------------------------
            3. SECTION "OUR CLASS" (Box Biru Bergaris dengan 4 Kartu)
        ------------------------------------------------------------------- */}
        <section id="our-class" className="qz-container">
          <div className="qz-class-box">
            <div className="qz-class-header">
              <h2 className="qz-class-heading">Our Class</h2>
              <div className="qz-class-subtext">
                <p>TEMUKAN MATERI KELAS PILIHAN</p>
                <p>ASAH KEMAMPUAN BERSAMA TEMAN</p>
              </div>
            </div>

            <div className="qz-class-grid">
              {classList.map((item) => (
                <div key={item.id} className="qz-card">
                  {/* Bagian Atas Kartu: Teks & Tombol Panah */}
                  <div className="qz-card-header">
                    <div>
                      <h4 className="qz-card-tag">{item.tag}</h4>
                      <h5 className="qz-card-subtitle">{item.subtitle}</h5>
                    </div>
                    <Link
                      to="/login"
                      className="qz-card-arrow-btn"
                      aria-label={`Buka kelas ${item.tag}`}
                    >
                      ↗
                    </Link>
                  </div>

                  <p className="qz-card-desc">{item.desc}</p>

                  {/* Bagian Bawah Kartu: Thumbnail Foto (Bisa Diganti) */}
                  <div className="qz-card-image-box">
                    <img
                      src={item.image}
                      alt={item.tag}
                      className="qz-card-img"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* -------------------------------------------------------------------
            4. SECTION "LET'S FIND A WAY" (Tab Guru / Administrator)
        ------------------------------------------------------------------- */}
        <section id="about" className="qz-container qz-audience-section">
          <h2 className="qz-audience-heading">Let’s find a way</h2>

          {/* Toggle Tab Administrators | Teacher */}
          <div className="qz-pill-tabs" role="tablist">
            <button
              type="button"
              className={`qz-pill-btn ${activeTab === 'admin' ? 'active' : ''}`}
              onClick={() => setActiveTab('admin')}
              role="tab"
              aria-selected={activeTab === 'admin'}
            >
              Administrators
            </button>
            <span className="qz-pill-divider">|</span>
            <button
              type="button"
              className={`qz-pill-btn ${activeTab === 'teacher' ? 'active' : ''}`}
              onClick={() => setActiveTab('teacher')}
              role="tab"
              aria-selected={activeTab === 'teacher'}
            >
              Theacer
            </button>
          </div>

          {/* Dua Kolom Konten */}
          <div className="qz-audience-grid">
            {/* Kolom Teks Kiri */}
            <div className="qz-audience-text">
              <h3 className="qz-audience-title">
                {activeTab === 'admin'
                  ? 'The platform educators teach on'
                  : 'Empowering every student to achieve'}
              </h3>

              <div className="qz-audience-paragraphs">
                <p>
                  A place for activities, assessments, presentations videos, and
                  flashcards with the AI and accommodations built in.
                </p>
                <p>
                  Interactive slides, videos, flashcards, passages, and formative
                  assessments. Every format teachers reach for without buying a
                  separate tool for each.
                </p>
                <p>
                  Every response, every data point, every accommodation feeds into
                  the record. The picture of student outcomes stays whole instead of
                  fragmented across platforms.
                </p>
                <p>
                  Recover the budget, procurement overhead, and the training
                  cycles when 5 tools consolidate into 1.
                </p>
                <p>
                  Keep student engagement and rigor. The same activity students
                  find joy in meets the standards districts need.
                </p>
              </div>
            </div>

            {/* Kolom Gambar Kanan: Foto Preview Edukasi (Bisa Diganti) */}
            <div className="qz-audience-image-box">
              <img
                src={CONFIG_IMAGES.educatorPreview}
                alt="Digital Learning Platform Preview"
                className="qz-audience-img"
              />
            </div>
          </div>
        </section>

        {/* -------------------------------------------------------------------
            5. BOTTOM RIBBON WAVES (Pita Melengkung Merah & Kuning Emas)
        ------------------------------------------------------------------- */}
        <div className="qz-bottom-ribbons" aria-hidden="true">
          <svg viewBox="0 0 1440 180" fill="none" preserveAspectRatio="none">
            {/* Red Ribbon */}
            <path
              d="M0 120 C 350 160, 850 40, 1440 110 L 1440 180 L 0 180 Z"
              fill="#b30919"
            />
            {/* Bright Red Ribbon */}
            <path
              d="M0 135 C 420 175, 920 60, 1440 130 L 1440 180 L 0 180 Z"
              fill="#e52535"
            />
            {/* Golden Yellow Ribbon */}
            <path
              d="M0 155 C 480 190, 1000 80, 1440 150 L 1440 180 L 0 180 Z"
              fill="#f5b324"
            />
          </svg>
        </div>

        {/* Footer Minimalis */}
        <footer className="qz-footer">
          <div className="qz-container qz-footer-inner">
            <p>© {new Date().getFullYear()} QuisZoors. All rights reserved.</p>
            <div className="qz-footer-links">
              <Link to="/login">Masuk</Link>
              <Link to="/register">Daftar</Link>
              <a href="#features">Fitur</a>
              <a href="#our-class">Kelas</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default LandingPage;
