import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import LiveClasses from './pages/LiveClasses';
import MentoredPrograms from './pages/MentoredPrograms';
import VideoCourses from './pages/VideoCourses';
import Microcourses from './pages/Microcourses';
import Subjects from './pages/Subjects';
import LiveOfflineClasses from './pages/LiveOfflineClasses';

import AdminDashboard from './pages/AdminDashboard';
import MentorDashboard from './pages/MentorDashboard';
import MenteeDashboard from './pages/MenteeDashboard';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import Pricing from './pages/Pricing';
import FAQ from './pages/FAQ';
import Register from './pages/Register';

import { AuthProvider } from './context/AuthContext';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col font-sans text-slate-900 bg-slate-50">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/live-classes" element={<LiveClasses />} />
              <Route path="/live-class" element={<LiveOfflineClasses />} />
              <Route path="/mentored-programs" element={<MentoredPrograms />} />
              <Route path="/video-courses" element={<VideoCourses />} />
              <Route path="/microcourses" element={<Microcourses />} />
              <Route path="/courses" element={<Subjects />} />
              <Route path="/courses/:subjectId" element={<Subjects />} />
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="/mentor-dashboard" element={<MentorDashboard />} />
              <Route path="/mentee-dashboard" element={<MenteeDashboard />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </main>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
