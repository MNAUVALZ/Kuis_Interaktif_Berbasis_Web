import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthLayout from './layouts/AuthLayout';
import MainLayout from './layouts/MainLayout';
import CBTLayout from './layouts/CBTLayout';
import LandingPage from './pages/Auth/LandingPage';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import Home from './pages/Dashboard/Home';
import Shop from './pages/Dashboard/Shop';
import ClassList from './pages/Classes/ClassList';
import ClassDetail from './pages/Classes/ClassDetail';
import CreateClass from './pages/Classes/CreateClass';
import CreateQuiz from './pages/QuizCBT/CreateQuiz';
import AddQuestion from './pages/QuizCBT/AddQuestion';
import JoinQuiz from './pages/QuizCBT/JoinQuiz';
import ExamRoom from './pages/QuizCBT/ExamRoom';
import ResultScore from './pages/QuizCBT/ResultScore';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<AuthLayout />} path="/auth/*">
          <Route index element={<LandingPage />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route element={<MainLayout />} path="/dashboard/*">
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
        </Route>
        <Route element={<MainLayout />} path="/classes/*">
          <Route index element={<ClassList />} />
          <Route path=":id" element={<ClassDetail />} />
          <Route path="create" element={<CreateClass />} />
        </Route>
        <Route element={<CBTLayout />} path="/quiz/*">
          <Route path="create" element={<CreateQuiz />} />
          <Route path="add" element={<AddQuestion />} />
          <Route path="join" element={<JoinQuiz />} />
          <Route path="exam" element={<ExamRoom />} />
          <Route path="result" element={<ResultScore />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
