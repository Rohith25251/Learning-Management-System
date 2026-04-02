import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import { AuthProvider } from './context/AuthContext';
import ScrollToTop from './components/ScrollToTop';

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const Login = lazy(() => import('./pages/Login'));
const LiveClasses = lazy(() => import('./pages/LiveClasses'));
const MentoredPrograms = lazy(() => import('./pages/MentoredPrograms'));
const VideoCourses = lazy(() => import('./pages/VideoCourses'));
const Microcourses = lazy(() => import('./pages/Microcourses'));
const Subjects = lazy(() => import('./pages/Subjects'));
const LiveOfflineClasses = lazy(() => import('./pages/LiveOfflineClasses'));
const AdminDashboard = lazy(() => import('./pages/AdminDashboard'));
const MentorDashboard = lazy(() => import('./pages/MentorDashboard'));
const MenteeDashboard = lazy(() => import('./pages/MenteeDashboard'));
const AboutUs = lazy(() => import('./pages/AboutUs'));
const Contact = lazy(() => import('./pages/Contact'));
const Pricing = lazy(() => import('./pages/Pricing'));
const FAQ = lazy(() => import('./pages/FAQ'));
const Register = lazy(() => import('./pages/Register'));

// Loading Screen
const LoadingScreen = () => (
  <div className="flex items-center justify-center min-h-[60vh]">
    <div className="w-12 h-12 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

function App() {
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col font-sans text-slate-900 bg-slate-50">
          <Navbar />
          <main className="flex-grow">
            <Suspense fallback={<LoadingScreen />}>
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
            </Suspense>
          </main>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
