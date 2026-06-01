import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Monitor, User, FileText, Laptop, BookOpen, Handshake, ClipboardList, PenTool, Smartphone, HelpCircle, Grip, Users, ChevronRight, Check, Zap, Award, ShieldCheck, Star as StarIcon, MessageSquare, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { TeachersSection, FAQSection, TestimonialsSection, FooterSection } from '../components/SharedSections';

const MentoredPrograms = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedCourseIds, setSelectedCourseIds] = useState([]);
  const [activeTab, setActiveTab] = useState('Class 11');

  const toggleCourse = (id) => {
    setSelectedCourseIds(prev => 
      prev.includes(id) ? prev.filter(courseId => courseId !== id) : [...prev, id]
    );
  };

  const getCourses = (cls) => [
    {
      id: `${cls}-m1`,
      teacher: 'Prof. Balaji Sampath',
      title: 'IIT JEE Science Foundation',
      image: 'https://images.unsplash.com/photo-1524169358666-79f22534bc6e?auto=format&fit=crop&w=800&q=80',
      feeOld: '20,000', feeNew: '14,000',
      features: [
        { icon: <Handshake />, text: 'Personalised 1-on-1 Mentor' },
        { icon: <Monitor />, text: 'LIVE Webinar Sessions' },
        { icon: <Users />, text: 'Peer Learning Groups' },
        { icon: <Smartphone />, text: 'Parent Monitoring App' }
      ],
      allFeatures: [
        'Personalised Mentor Support',
        '354 Video Lectures',
        '104 Solved Video Examples',
        '195 Practice Exercises',
        'Printed Study Materials',
        'Monthly Consolidated Tests',
        'Term-wise Descriptive Exam',
        'Chapter Based Doubt Clearing',
        'Skill Builders & Skill Tests'
      ]
    },
    {
      id: `${cls}-m2`,
      teacher: 'Prof. Amit Kumar',
      title: 'Advanced Science Mentorship',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80',
      feeOld: '22,000', feeNew: '16,000',
      features: [
        { icon: <Award />, text: 'Elite Exam Preparation' },
        { icon: <FileText />, text: 'Custom Study Plans' },
        { icon: <Check />, text: 'Regular Assessment' },
        { icon: <MessageSquare />, text: '24/7 DoubtZap Access' }
      ],
      allFeatures: [
        'Elite Exam Preparation',
        'Custom Study Plans',
        'Regular Performance Assessment',
        '24/7 DoubtZap Access',
        'Advanced Problem Solving Sessions',
        'Direct Access to Senior Mentors',
        'Holistic Learning Map',
        'Interview Preparation Skills'
      ]
    }
  ];

  const currentCourses = getCourses(activeTab);

  const CourseCard = ({ course }) => {
    const isSelected = selectedCourseIds.includes(course.id);
    
    return (
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`group relative bg-white rounded-[2.5rem] p-7 border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.02)] hover:shadow-[0_30px_70px_rgba(0,0,0,0.08)] transition-all duration-500 flex flex-col h-full w-full max-w-[360px] ${isSelected ? 'ring-2 ring-indigo-600 shadow-indigo-600/10' : ''}`}
      >
        <div className="flex justify-between items-start mb-6">
          <div className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest ${isSelected ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-500'}`}>
            {activeTab}
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-indigo-50 rounded-full border border-indigo-100">
             <div className="w-1.5 h-1.5 rounded-full bg-indigo-600 animate-pulse"></div>
             <span className="text-[10px] font-bold text-indigo-700 uppercase tracking-wider">Mentored</span>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-black text-slate-900 leading-tight mb-2 group-hover:text-indigo-600 transition-colors line-clamp-2 h-[3em]">{course.title}</h3>
          <p className="text-sm font-bold text-slate-400 uppercase tracking-wide">Led by {course.teacher}</p>
        </div>

        <div className="relative h-44 rounded-2xl overflow-hidden mb-6 bg-slate-100">
           <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700" />
           <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
        </div>

        <div className="space-y-4 mb-8 flex-grow">
          {course.features.map((feat, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center flex-shrink-0">
                 {React.cloneElement(feat.icon, { size: 16, strokeWidth: 2.5 })}
              </div>
              <span className="text-sm font-bold text-slate-700">{feat.text}</span>
            </div>
          ))}
        </div>

        <div className="pt-6 border-t border-slate-50">
          <div className="flex justify-between items-end mb-6">
             <div>
               <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Total Program Fee</p>
               <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-black text-slate-900 leading-none">₹{course.feeNew}</span>
                  <span className="text-sm font-bold text-slate-300 line-through decoration-slate-200">₹{course.feeOld}</span>
               </div>
             </div>
             <button 
               onClick={() => setSelectedCourse(course)}
               className="text-xs font-black text-indigo-600 uppercase tracking-widest hover:text-indigo-700 transition-colors pb-1 border-b-2 border-indigo-100"
             >
               View Details
             </button>
          </div>

          <div className="flex gap-3">
             <button className="flex-1 bg-slate-900 hover:bg-black text-white font-black py-4 rounded-2xl text-[11px] uppercase tracking-widest transition-all hover:scale-[1.02] active:scale-95 shadow-xl shadow-slate-900/10">
                Enroll Program
             </button>
             <button 
               onClick={() => toggleCourse(course.id)}
               className={`w-14 flex items-center justify-center rounded-2xl border-2 transition-all hover:scale-[1.02] active:scale-95 ${isSelected ? 'bg-indigo-600 border-indigo-600 text-white' : 'border-slate-100 hover:border-indigo-200 text-slate-400'}`}
             >
               <Check size={20} strokeWidth={3} />
             </button>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Premium Header Section */}
      <section className="pt-32 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex items-center gap-2 mb-10 text-[11px] font-bold text-slate-400 uppercase tracking-widest">
              <Link to="/" className="hover:text-indigo-600 transition-colors">Home</Link>
              <ChevronRight size={12} strokeWidth={3} />
              <span className="text-indigo-600">Mentored Programs</span>
           </div>
           <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-center">
              <div className="lg:col-span-7">
                 <motion.div
                   initial={{ opacity: 0, x: -20 }}
                   animate={{ opacity: 1, x: 0 }}
                   className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-50 rounded-lg text-[10px] font-black text-indigo-600 uppercase tracking-widest mb-6"
                 >
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-600"></div>
                    1-on-1 Personalized Education
                 </motion.div>
                 <motion.h1 
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ delay: 0.1 }}
                   className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.1] mb-8 tracking-tighter"
                 >
                    Human <span className="text-indigo-600">Guidance</span> <br />Powered Learning
                 </motion.h1>
                 <motion.p 
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ delay: 0.2 }}
                   className="text-lg md:text-xl text-slate-500 font-medium leading-relaxed max-w-2xl"
                 >
                    Step beyond generic courses. Our Mentored Programs provide dedicated 1-on-1 human support to ensure you stay on track, clear every doubt, and reach your full potential.
                 </motion.p>
              </div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="lg:col-span-5 flex flex-col gap-6"
              >
                 <div className="bg-slate-50 rounded-[3rem] p-10 border border-slate-100 relative group overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full -translate-y-1/2 translate-x-1/2 transition-transform group-hover:scale-150 duration-700"></div>
                    
                    <div className="flex items-center gap-6 mb-8">
                       <div className="w-16 h-16 rounded-2xl bg-indigo-600 text-white flex items-center justify-center shadow-2xl shadow-indigo-200 group-hover:rotate-6 transition-transform">
                          <Handshake size={32} />
                       </div>
                       <div>
                          <h3 className="text-4xl font-black text-slate-900 tracking-tighter">500+</h3>
                          <p className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] mt-1 leading-none">Expert Mentors</p>
                       </div>
                    </div>

                    <div className="flex flex-col gap-4">
                       <div className="h-px bg-slate-200 w-full mb-2"></div>
                       <div className="flex justify-between items-center">
                          <div className="flex items-center gap-2">
                             <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                             <span className="text-[11px] font-black text-slate-900 uppercase tracking-widest whitespace-nowrap">Active Mentorship</span>
                          </div>
                          <div className="flex items-center gap-1.5 px-3 py-1 bg-indigo-600 text-white rounded-full">
                             <StarIcon size={10} className="fill-white" />
                             <span className="text-[9px] font-black uppercase tracking-wider">Premium Experience</span>
                          </div>
                       </div>
                    </div>
                 </div>

                 <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white border border-slate-50 p-6 rounded-[2rem] shadow-[0_15px_40px_rgba(0,0,0,0.03)] group hover:-translate-y-1 transition-all duration-300">
                       <div className="flex items-center gap-3 mb-3">
                          <div className="w-8 h-8 rounded-lg bg-orange-50 text-orange-500 flex items-center justify-center">
                             <Laptop size={18} strokeWidth={2.5} />
                          </div>
                          <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Digital</span>
                       </div>
                       <p className="text-sm font-black text-slate-900 leading-tight">Video Library <br /><span className="text-indigo-600">350+ Lectures</span></p>
                    </div>
                    <div className="bg-white border border-slate-50 p-6 rounded-[2rem] shadow-[0_15px_40px_rgba(0,0,0,0.03)] group hover:-translate-y-1 transition-all duration-300">
                       <div className="flex items-center gap-3 mb-3">
                          <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
                             <Smartphone size={18} strokeWidth={2.5} />
                          </div>
                          <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Connect</span>
                       </div>
                       <p className="text-sm font-black text-slate-900 leading-tight">Parent Portal <br /><span className="text-indigo-600">Deep Insights</span></p>
                    </div>
                 </div>
              </motion.div>
           </div>
        </div>
      </section>

      {/* Quick Info Bar */}
      <div className="bg-white py-14 border-y border-slate-100 shadow-[0_10px_40px_rgba(0,0,0,0.01)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-12">
           <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 rounded-[1.25rem] bg-orange-50 text-orange-600 flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110 duration-300">
                 <Handshake size={28} />
              </div>
              <div>
                 <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Mentor Type</p>
                 <h4 className="text-base font-black text-slate-900 uppercase tracking-wide">1-on-1 Human Support</h4>
              </div>
           </div>
           <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 rounded-[1.25rem] bg-indigo-50 text-indigo-600 flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110 duration-300">
                 <ClipboardList size={28} />
              </div>
              <div>
                 <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Assessment</p>
                 <h4 className="text-base font-black text-slate-900 uppercase tracking-wide">Monthly Consolidated Tests</h4>
              </div>
           </div>
           <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 rounded-[1.25rem] bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110 duration-300">
                 <BookOpen size={28} />
              </div>
              <div>
                 <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Study Material</p>
                 <h4 className="text-base font-black text-slate-900 uppercase tracking-wide">Printed Core Modules</h4>
              </div>
           </div>
        </div>
      </div>

      {/* Main Content Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col items-center mb-16">
            <h2 className="text-sm font-black text-slate-400 uppercase tracking-[0.3em] mb-8">Select Your Standard</h2>
            <div className="inline-flex p-1.5 bg-slate-100 rounded-3xl gap-1">
              {['Class 10', 'Class 11', 'Class 12'].map((cls) => (
                <button 
                  key={cls}
                  onClick={() => setActiveTab(cls)}
                  className={`px-10 py-3 rounded-[1.25rem] font-black text-[11px] uppercase tracking-widest transition-all duration-300 ${
                    activeTab === cls 
                      ? 'bg-white text-indigo-600 shadow-xl shadow-slate-200/50' 
                      : 'text-slate-500 hover:text-slate-900 translate-z-0'
                  }`}
                >
                  {cls}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-24">
            <div className="flex items-center gap-6 mb-12">
               <div className="h-px bg-slate-100 flex-grow"></div>
               <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">Mentored <span className="text-indigo-600">Learning Path</span></h2>
               <div className="h-px bg-slate-100 flex-grow"></div>
            </div>
            <div className="flex flex-wrap gap-8 justify-center lg:justify-start">
              {currentCourses.map(c => <CourseCard key={c.id} course={c} />)}
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center mt-12 pt-16 border-t border-slate-100"
          >
            <div className="bg-slate-950 text-white rounded-[3rem] p-10 md:p-16 w-full relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
               
               <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
                  <div className="text-center md:text-left">
                     <h3 className="text-3xl md:text-5xl font-black mb-4 tracking-tighter">Ready for personalized <br />growth?</h3>
                     <p className="text-slate-400 font-medium text-lg max-w-md">Get your own devoted mentor and a customized path to success.</p>
                  </div>
                  <div className="flex flex-col items-center gap-4">
                     <button className="bg-white text-slate-950 hover:bg-slate-100 font-black py-6 px-14 rounded-2xl text-[13px] uppercase tracking-[0.2em] shadow-2xl transition-all hover:scale-105 active:scale-95 group/btn flex items-center gap-3">
                        Join Mentorship Program
                        <ChevronRight className="group-hover:translate-x-1 transition-transform" />
                     </button>
                     <span className="text-indigo-400 font-bold text-xs uppercase tracking-[0.2em]">
                        ({selectedCourseIds.length} Program{selectedCourseIds.length !== 1 ? 's' : ''} selected)
                     </span>
                  </div>
               </div>
            </div>
          </motion.div>
          
        </div>
      </section>

      {/* Course Details Modal */}
      <AnimatePresence>
        {selectedCourse && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCourse(null)}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
            ></motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white rounded-[3rem] shadow-2xl w-full max-w-5xl max-h-[90vh] flex flex-col overflow-hidden relative z-10"
            >
              <div className="flex justify-between items-start p-10 pb-6">
                <div className="flex gap-6 items-center">
                   <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-indigo-600 border border-slate-100">
                      <Handshake size={32} strokeWidth={2.5} />
                   </div>
                   <div>
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{activeTab}</span>
                      <h3 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tighter leading-tight mt-1">{selectedCourse.title}</h3>
                   </div>
                </div>
                <button onClick={() => setSelectedCourse(null)} className="w-12 h-12 rounded-full bg-slate-50 hover:bg-slate-100 flex items-center justify-center text-slate-400 hover:text-slate-900 transition-all">
                  <X size={24} />
                </button>
              </div>

              <div className="p-10 pt-4 overflow-y-auto custom-scrollbar">
                 <div className="grid lg:grid-cols-3 gap-8 mb-12">
                    <div className="lg:col-span-2 space-y-8">
                       <div className="bg-indigo-50/50 rounded-3xl p-8 border border-indigo-100">
                          <h4 className="text-indigo-600 font-black text-xs uppercase tracking-widest mb-4">About the Mentored Program</h4>
                          <div className="text-slate-700 space-y-4 font-medium leading-relaxed italic">
                             <p>ScienceLMS's Mentored Program is designed for students who want a structured, guided, and accountable learning journey.</p>
                             <p>You don't just get access to content; you get a <strong className="text-indigo-900">Personal Mentor</strong> who monitors your progress, helps you overcome obstacles, and ensures you're ready for the most competitive exams.</p>
                          </div>
                       </div>
                       
                       <div>
                          <h4 className="font-black text-slate-900 text-lg mb-6">Full Program Features:</h4>
                          <div className="grid md:grid-cols-2 gap-4">
                             {selectedCourse.allFeatures.map((item, i) => (
                                <div key={i} className="flex gap-3 items-start p-4 bg-slate-50 rounded-2xl border border-slate-100 group hover:border-indigo-200 transition-colors">
                                   <div className="w-5 h-5 rounded-full bg-indigo-600 text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                                      <Check size={12} strokeWidth={4} />
                                   </div>
                                   <p className="text-sm font-bold text-slate-700 group-hover:text-slate-900 transition-colors">{item}</p>
                                </div>
                             ))}
                          </div>
                       </div>
                    </div>

                    <div className="space-y-6">
                       <div className="bg-white rounded-[2rem] border border-slate-100 p-8 shadow-xl shadow-slate-200/20">
                          <div className="mb-8">
                             <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">Model</p>
                             <div className="flex items-center gap-3 mb-2">
                                <User size={18} className="text-indigo-600" />
                                <span className="font-black text-slate-900">Personalized 1-on-1</span>
                             </div>
                             <div className="flex items-center gap-3">
                                <Monitor size={18} className="text-indigo-600" />
                                <span className="font-black text-slate-900">Hybrid Support</span>
                             </div>
                          </div>

                          <div className="mb-10">
                             <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">Program Fee</p>
                             <div className="flex items-baseline gap-3">
                                <span className="text-3xl font-black text-indigo-600 font-sans">₹{selectedCourse.feeNew}</span>
                                <span className="text-base font-bold text-slate-300 line-through">₹{selectedCourse.feeOld}</span>
                             </div>
                          </div>

                          <button className="w-full bg-slate-950 hover:bg-black text-white font-black py-5 rounded-2xl text-[11px] uppercase tracking-widest shadow-xl transition-all hover:scale-[1.02] active:scale-95 mb-4">
                             Apply for Mentorship
                          </button>
                       </div>

                       <div className="p-6 bg-orange-50/50 rounded-2xl border border-orange-100">
                          <p className="text-[10px] font-black text-orange-600 uppercase tracking-widest mb-2 flex items-center gap-2">
                             <Zap size={14} /> High Demand
                          </p>
                          <p className="text-[13px] font-bold text-slate-600 leading-snug">Limited mentor slots available for the current academic cycle.</p>
                       </div>
                    </div>
                 </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <div className="pt-20">
        <TeachersSection />
        <TestimonialsSection />
        <FAQSection />
        <FooterSection />
      </div>
    </div>
  );
};

export default MentoredPrograms;

