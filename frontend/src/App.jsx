import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ExamProvider } from './context/ExamContext';

// Layouts
import AuthLayout from './layouts/AuthLayout';
import MainLayout from './layouts/MainLayout';
import CBTLayout from './layouts/CBTLayout';

// Auth Pages
import LandingPage from './pages/Auth/LandingPage';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';

// Dashboard Pages
import Home from './pages/Dashboard/Home';
import Shop from './pages/Dashboard/Shop';

// Class Pages
import ClassList from './pages/Classes/ClassList';
import ClassDetail from './pages/Classes/ClassDetail';
import CreateClass from './pages/Classes/CreateClass';

// Quiz CBT Pages
import CreateQuiz from './pages/QuizCBT/CreateQuiz';
import AddQuestion from './pages/QuizCBT/AddQuestion';
import JoinQuiz from './pages/QuizCBT/JoinQuiz';
import ExamRoom from './pages/QuizCBT/ExamRoom';
import ResultScore from './pages/QuizCBT/ResultScore';

/**
 * 🔄 [Hybrid] App.jsx
 * Pengatur rute URL utama aplikasi QuisZoors
 */
export default function App() {
  return (
    <AuthProvider>
      <ExamProvider>
        <Router>
          <Routes>
            {/* Landing & Otentikasi */}
            <Route path="/" element={<Navigate to="/auth" replace />} />
            <Route path="/auth" element={<AuthLayout />}>
              <Route index element={<LandingPage />} />
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
            </Route>

            {/* Dashboard & Menu Utama dengan MainLayout (Sidebar & Navbar) */}
            <Route element={<MainLayout />}>
              <Route path="/dashboard" element={<Home />} />
              <Route path="/shop" element={<Shop />} />

              {/* Manajemen Kelas */}
              <Route path="/classes" element={<ClassList />} />
              <Route path="/classes/create" element={<CreateClass />} />
              <Route path="/classes/:id" element={<ClassDetail />} />

              {/* Manajemen Pembuatan Kuis (Guru) */}
              <Route path="/quiz/create" element={<CreateQuiz />} />
              <Route path="/quiz/add" element={<AddQuestion />} />
            </Route>

            {/* CBT Exam Mode dengan CBTLayout (Full-Screen, tanpa navbar/sidebar) */}
            <Route path="/quiz" element={<CBTLayout />}>
              <Route path="join" element={<JoinQuiz />} />
              <Route path="exam" element={<ExamRoom />} />
              <Route path="result" element={<ResultScore />} />
            </Route>

            {/* Fallback 404 Route */}
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
          </Routes>
        </Router>
      </ExamProvider>
    </AuthProvider>
  );
}
