import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Atom, ChevronDown, Menu, X, Search, Bell, User, BellOff, LogIn } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const [showNotifications, setShowNotifications] = useState(false);
  const [notificationTab, setNotificationTab] = useState('All');

  // Mock login state - in a real app, this would come from a Context or Auth Hook
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Basic check for demo purposes
    const token = localStorage.getItem('token');
    if (token) setIsLoggedIn(true);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setMobileDropdown(null);
  };

  const navItems = [
    { name: 'Subjects', dropdown: ['Physics', 'Chemistry', 'Biology'] },
    { name: 'Live Classes', link: '/live-class' },
    { name: 'Online Classes', link: '/live-classes' },
    { name: 'Mentored Programs', link: '/mentored-programs' },
    { name: 'Video courses', link: '/video-courses' },
    { name: 'Microcourses', link: '/microcourses' },
    { name: 'Say Hello 👋', link: '/contact' }
  ];

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white border-b border-slate-100 shadow-sm shadow-slate-200/20">
        {/* 1. Main Navbar */}
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-[72px]">
            {/* Left: Logo and Search */}
            <div className="flex items-center flex-1 gap-8">
              <Link 
                to="/" 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="flex-shrink-0 flex items-center gap-1.5 group"
              >
                <div className="text-primary-600 transform group-hover:scale-110 transition-transform duration-300">
                  <Atom size={32} strokeWidth={2.5} />
                </div>
                <span className="font-black text-xl tracking-tighter text-slate-900 group-hover:text-primary-600 transition-colors">
                  Science<span className="text-primary-600">LMS</span>
                </span>
              </Link>

              <div className="hidden md:flex relative max-w-[280px] w-full group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Search size={16} className="text-slate-400 group-focus-within:text-primary-600 transition-colors" />
                </div>
                <input
                  type="text"
                  placeholder="Search courses..."
                  className="block w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-100 rounded-full text-[13px] focus:outline-none focus:ring-2 focus:ring-primary-600/10 focus:border-primary-600 hover:border-slate-200 transition-all font-medium"
                />
              </div>
            </div>

            {/* Center: Navigation Links */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className="relative group"
                  onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {item.dropdown ? (
                    <>
                      <button className="flex items-center gap-1 text-slate-600 hover:text-primary-600 px-3 py-2 rounded-md text-[13px] font-semibold tracking-wide transition-colors">
                        {item.name}
                        <ChevronDown size={12} className={`transition-transform duration-300 ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                      </button>
                      {activeDropdown === item.name && (
                        <div className="absolute left-0 mt-0 w-48 bg-white border border-slate-50 rounded-xl shadow-2xl shadow-slate-200/50 py-2 z-[60] animate-in fade-in slide-in-from-top-2 duration-200">
                          {item.dropdown.map((sub) => (
                            <Link
                              key={sub}
                              to={`/courses/${sub.toLowerCase()}`}
                              className="block px-4 py-2 text-[13px] font-semibold text-slate-500 hover:bg-slate-50 hover:text-primary-600 transition-colors"
                            >
                              {sub}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      to={item.link}
                      className="text-slate-600 hover:text-primary-600 px-3 py-2 rounded-md text-[13px] font-semibold tracking-wide transition-colors"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Right: Actions */}
            <div className="flex items-center gap-3">
              <div className="relative">
                <button
                  onClick={() => setShowNotifications(true)}
                  className="p-2.5 text-slate-500 hover:bg-slate-50 hover:text-slate-900 rounded-full transition-all relative"
                >
                  <Bell size={20} />
                  {isLoggedIn && (
                    <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white animate-pulse"></span>
                  )}
                </button>
              </div>

              <Link to="/login" className="hidden lg:flex bg-[#2f3542] hover:bg-[#1e232b] text-white px-6 py-2 rounded-lg text-sm font-bold shadow-sm transition-all transform hover:-translate-y-0.5 active:scale-95 items-center gap-2">
                <User size={16} />
                Sign In
              </Link>

              {/* Mobile menu button */}
              <div className="flex items-center lg:hidden">
                <button
                  onClick={toggleMenu}
                  className="p-2 text-slate-600 hover:bg-slate-50 rounded-lg"
                >
                  {isOpen ? <X size={26} /> : <Menu size={26} />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'calc(100vh - 72px)', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden bg-white fixed inset-x-0 top-[72px] z-50 overflow-y-auto border-t border-slate-100"
            >
              <div className="px-4 pt-4 pb-6 space-y-2">
                <div className="px-3 mb-6">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input type="text" placeholder="Search..." className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl" />
                  </div>
                </div>
                {navItems.map((item) => (
                  <div key={item.name}>
                    {item.dropdown ? (
                      <div className="space-y-1">
                        <button
                          onClick={() => setMobileDropdown(mobileDropdown === item.name ? null : item.name)}
                          className="w-full px-4 py-3 text-lg font-bold text-slate-800 flex items-center justify-between hover:bg-slate-50 rounded-xl transition-colors"
                        >
                          {item.name}
                          <ChevronDown size={18} className={`transition-transform duration-300 ${mobileDropdown === item.name ? 'rotate-180' : ''}`} />
                        </button>
                        <AnimatePresence>
                          {mobileDropdown === item.name && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="pl-6 space-y-1 overflow-hidden"
                            >
                              {item.dropdown.map((sub) => (
                                <Link
                                  key={sub}
                                  to={`/courses/${sub.toLowerCase()}`}
                                  onClick={() => setIsOpen(false)}
                                  className="block px-4 py-2.5 text-slate-600 font-semibold hover:text-primary-600 transition-colors"
                                >
                                  {sub}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        to={item.link}
                        onClick={() => setIsOpen(false)}
                        className="block px-4 py-3 rounded-xl text-lg font-bold text-slate-800 hover:bg-slate-50"
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
                <div className="pt-8 grid grid-cols-2 gap-4 pb-12">
                  <Link to="/login" onClick={() => setIsOpen(false)} className="flex justify-center items-center h-12 border-2 border-slate-200 rounded-xl font-bold text-slate-800">Sign In</Link>
                  <Link to="/register" onClick={() => setIsOpen(false)} className="flex justify-center items-center h-12 bg-[#2f3542] text-white rounded-xl font-bold">Sign Up</Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* 2. Notification Sidebar */}
      <AnimatePresence>
        {showNotifications && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowNotifications(false)}
              className="fixed inset-0 bg-slate-900/40 backdrop-blur-[2px] z-[100]"
            />

            {/* Sidebar Container */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-full w-full max-w-[480px] bg-white z-[101] shadow-2xl flex flex-col"
            >
              <div className="p-6 flex items-center justify-between border-b border-slate-100">
                <h2 className="text-xl font-bold text-slate-800">Notifications</h2>
                <button
                  onClick={() => setShowNotifications(false)}
                  className="p-2 text-slate-400 hover:text-slate-900 hover:bg-slate-50 rounded-full transition-all"
                >
                  <X size={24} />
                </button>
              </div>

              {!isLoggedIn ? (
                /* Guest View: Suggest Login */
                <div className="flex-1 flex flex-col items-center justify-center p-8 text-center bg-slate-50/50">
                  <div className="w-20 h-20 bg-primary-50 rounded-full flex items-center justify-center text-primary-600 mb-6">
                    <LogIn size={40} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Login Required</h3>
                  <p className="text-slate-500 mb-8 max-w-[280px]">
                    Sign in to your account to view your personalized notifications and track your progress.
                  </p>
                  <Link
                    to="/login"
                    onClick={() => setShowNotifications(false)}
                    className="w-full py-4 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-2xl shadow-lg transition-all transform hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2"
                  >
                    <User size={18} />
                    Sign In to Continue
                  </Link>
                </div>
              ) : (
                /* Logged In View: Tabs and Content */
                <div className="flex-1 flex flex-col overflow-hidden">
                  {/* Tabs matching User Image */}
                  <div className="flex px-6 border-b border-slate-100 bg-white">
                    {['All', 'Unread', 'Read'].map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setNotificationTab(tab)}
                        className={`relative py-4 px-4 text-sm font-bold transition-colors ${notificationTab === tab ? 'text-primary-600' : 'text-slate-500 hover:text-slate-800'
                          }`}
                      >
                        <div className="flex items-center gap-2">
                          {tab}
                          {tab === 'All' && (
                            <span className="bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full text-[10px]">0</span>
                          )}
                        </div>
                        {notificationTab === tab && (
                          <motion.div
                            layoutId="activeTab"
                            className="absolute bottom-0 left-4 right-4 h-0.5 bg-primary-600 rounded-full"
                          />
                        )}
                      </button>
                    ))}
                  </div>

                  {/* Empty State Content */}
                  <div className="flex-1 flex flex-col items-center justify-center p-12 text-center overflow-y-auto">
                    <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center text-slate-300 mb-6">
                      <BellOff size={32} />
                    </div>
                    <p className="text-slate-400 font-bold text-lg tracking-tight">
                      You're all caught up!!
                    </p>
                  </div>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
