import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';

/**
 * 🎨 [Design UI] ClassList.jsx
 * Daftar kelas bentuk kartu (grid)
 */
export default function ClassList() {
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const res = await api.get('/api/classes');
        setClasses(res.data);
      } catch (err) {
        // Sample default classes if API isn't populated yet
        setClasses([
          { _id: '1', name: 'Matematika Diskrit - Kelas 10A', code: 'MTK10A', studentCount: 28 },
          { _id: '2', name: 'Bahasa Indonesia - Sesi CBT', code: 'BINDO1', studentCount: 32 },
          { _id: '3', name: 'Ilmu Pengetahuan Alam - Bab 4', code: 'IPA404', studentCount: 30 },
        ]);
      } finally {
        setLoading(false);
      }
    };
    fetchClasses();
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h1 style={{ fontSize: '1.875rem', fontWeight: 'bold', color: '#1e293b' }}>
            Daftar Ruang Kelas 📚
          </h1>
          <p style={{ color: '#64748b' }}>
            Pilih kelas untuk melihat materi dan daftar kuis aktif
          </p>
        </div>
        <Link
          to="/classes/create"
          style={{
            backgroundColor: '#2563eb',
            color: '#ffffff',
            padding: '0.6rem 1.2rem',
            borderRadius: '8px',
            fontWeight: '600',
            fontSize: '0.95rem'
          }}
        >
          ➕ Buat Kelas Baru
        </Link>
      </div>

      {loading ? (
        <p style={{ color: '#64748b' }}>Memuat daftar kelas...</p>
      ) : (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '1.5rem'
        }}>
          {classes.map((cls) => (
            <div
              key={cls._id}
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '12px',
                padding: '1.5rem',
                boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                border: '1px solid #e2e8f0',
                transition: 'transform 0.2s',
              }}
            >
              <div>
                <span style={{
                  fontSize: '0.75rem',
                  fontWeight: 'bold',
                  backgroundColor: '#e0f2fe',
                  color: '#0369a1',
                  padding: '0.2rem 0.6rem',
                  borderRadius: '4px',
                  display: 'inline-block',
                  marginBottom: '0.5rem'
                }}>
                  KODE: {cls.code}
                </span>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#1e293b', marginBottom: '0.5rem' }}>
                  {cls.name}
                </h3>
                <p style={{ fontSize: '0.875rem', color: '#64748b' }}>
                  👥 {cls.studentCount || cls.students?.length || 0} Siswa terdaftar
                </p>
              </div>

              <div style={{ marginTop: '1.5rem' }}>
                <Link
                  to={`/classes/${cls._id}`}
                  style={{
                    display: 'block',
                    textAlign: 'center',
                    backgroundColor: '#f1f5f9',
                    color: '#1e293b',
                    padding: '0.6rem',
                    borderRadius: '6px',
                    fontWeight: '600',
                    fontSize: '0.875rem'
                  }}
                >
                  Buka Ruang Kelas →
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
