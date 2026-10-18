import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../../services/api';

/**
 * 🔄 [Hybrid] ClassDetail.jsx
 * Tampilan materi kelas + logika verifikasi masuk kuis
 */
export default function ClassDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [classData, setClassData] = useState({
    name: 'Ruang Kelas Pembelajaran',
    code: 'CLS123',
    materials: [
      { id: 1, title: 'Modul 1: Pengantar Algoritma & Flowchart', type: 'PDF' },
      { id: 2, title: 'Modul 2: Struktur Data Dasar & Array', type: 'VIDEO' },
    ],
    quizzes: [
      { _id: 'q1', title: 'Kuis Evaluasi Bab 1', duration: 30, pin: '748291', totalQuestions: 15 },
    ]
  });

  const [pinInput, setPinInput] = useState('');
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [error, setError] = useState('');

  const handleVerifyAndEnterQuiz = (quiz) => {
    setSelectedQuiz(quiz);
    setError('');
  };

  const handleStartExam = (e) => {
    e.preventDefault();
    if (!selectedQuiz) return;

    if (pinInput.trim().toUpperCase() === selectedQuiz.pin.toUpperCase()) {
      // PIN valid, masuk ujian CBT
      navigate('/quiz/exam');
    } else {
      setError('PIN Kuis salah! Silakan tanyakan PIN kepada pengawas / guru.');
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div>
        <span style={{ backgroundColor: '#dbeafe', color: '#1d4ed8', fontSize: '0.8rem', padding: '0.2rem 0.6rem', borderRadius: '4px', fontWeight: 'bold' }}>
          KODE KELAS: {classData.code}
        </span>
        <h1 style={{ fontSize: '1.875rem', fontWeight: 'bold', color: '#1e293b', marginTop: '0.5rem' }}>
          {classData.name}
        </h1>
      </div>

      {/* Bagian Materi */}
      <section style={{ backgroundColor: '#ffffff', borderRadius: '12px', padding: '1.5rem', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
        <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1e293b', marginBottom: '1rem' }}>
          📖 Materi Pembelajaran
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {classData.materials.map((m) => (
            <div key={m.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.75rem 1rem', backgroundColor: '#f8fafc', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
              <span style={{ fontWeight: '500' }}>{m.title}</span>
              <span style={{ fontSize: '0.75rem', backgroundColor: '#e2e8f0', padding: '0.25rem 0.5rem', borderRadius: '4px', fontWeight: 'bold' }}>
                {m.type}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Bagian Kuis CBT Aktif */}
      <section style={{ backgroundColor: '#ffffff', borderRadius: '12px', padding: '1.5rem', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
        <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1e293b', marginBottom: '1rem' }}>
          📝 Kuis & Evaluasi CBT
        </h2>

        {selectedQuiz ? (
          <div style={{ backgroundColor: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '8px', padding: '1.25rem' }}>
            <h3 style={{ fontWeight: 'bold', color: '#1e40af', marginBottom: '0.5rem' }}>
              Verifikasi Masuk: {selectedQuiz.title}
            </h3>
            <p style={{ fontSize: '0.875rem', color: '#3b82f6', marginBottom: '1rem' }}>
              Durasi: {selectedQuiz.duration} Menit | Masukkan 6 digit PIN untuk memulai:
            </p>

            {error && (
              <div style={{ backgroundColor: '#fee2e2', color: '#b91c1c', padding: '0.5rem', borderRadius: '4px', fontSize: '0.85rem', marginBottom: '0.75rem' }}>
                {error}
              </div>
            )}

            <form onSubmit={handleStartExam} style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
              <input
                type="text"
                placeholder="PIN Kuis (misal: 748291)"
                value={pinInput}
                onChange={(e) => setPinInput(e.target.value)}
                maxLength={6}
                required
                style={{ padding: '0.6rem 1rem', borderRadius: '6px', border: '1px solid #93c5fd', fontSize: '1rem', width: '220px' }}
              />
              <button
                type="submit"
                style={{ backgroundColor: '#2563eb', color: '#ffffff', padding: '0.6rem 1.25rem', borderRadius: '6px', fontWeight: 'bold' }}
              >
                Mulai Ujian 🚀
              </button>
              <button
                type="button"
                onClick={() => setSelectedQuiz(null)}
                style={{ backgroundColor: '#e2e8f0', color: '#475569', padding: '0.6rem 1rem', borderRadius: '6px' }}
              >
                Batal
              </button>
            </form>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {classData.quizzes.map((quiz) => (
              <div key={quiz._id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem', backgroundColor: '#f8fafc', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                <div>
                  <h4 style={{ fontWeight: 'bold', color: '#1e293b' }}>{quiz.title}</h4>
                  <p style={{ fontSize: '0.85rem', color: '#64748b' }}>
                    ⏱️ Durasi: {quiz.duration} Menit | {quiz.totalQuestions} Soal
                  </p>
                </div>
                <button
                  onClick={() => handleVerifyAndEnterQuiz(quiz)}
                  style={{ backgroundColor: '#3b82f6', color: '#ffffff', padding: '0.5rem 1rem', borderRadius: '6px', fontWeight: '600', fontSize: '0.875rem' }}
                >
                  Ikuti Kuis
                </button>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
