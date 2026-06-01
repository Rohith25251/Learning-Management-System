import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Tag, Timer, Book, PlayCircle, Users, ChevronRight, Check, Star as StarIcon, Monitor, Layout, X, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { TeachersSection, FAQSection, TestimonialsSection, FooterSection } from '../components/SharedSections';

const Microcourses = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedCourseIds, setSelectedCourseIds] = useState([]);

  const toggleCourse = (id) => {
    setSelectedCourseIds(prev => 
      prev.includes(id) ? prev.filter(courseId => courseId !== id) : [...prev, id]
    );
  };

  const courses = [
    { 
      id: `m2`, 
      title: 'Organic Chemistry', 
      teacher: 'Prof. Evvie Chockalingam',
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80',
      duration: '2.5 hrs', 
      feeOld: '1299', feeNew: '599',
      features: [
        { icon: <Timer />, text: '150 Mins Content' },
        { icon: <Book />, text: 'Detailed Study Notes' },
        { icon: <Zap />, text: 'Topic Wise Tests' }
      ],
      allFeatures: [
        '150 Minutes of Focused Content',
        'Downloadable Detailed Notes',
        'Topic-wise Assessment Tests',
        'Crystal Clear Conceptual Clarity',
        'Access on all devices',
        'Certificate of Completion',
        'Expert Faculty Guidance'
      ]
    },
    { 
      id: `m3`, 
      title: 'Genetics & Evolution', 
      teacher: 'Dr. Priya Sharma',
      image: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&w=800&q=80',
      duration: '2.0 hrs', 
      feeOld: '1199', feeNew: '499',
      features: [
        { icon: <Timer />, text: '120 Mins Content' },
        { icon: <Book />, text: 'Topic Wise Tests' },
        { icon: <Zap />, text: 'Instant Access' }
      ],
      allFeatures: [
        '120 Minutes of Focused Content',
        'Topic-wise Practice MCQ Set',
        'Chapter Revision Summaries',
        'Instant Access After Purchase',
        'Deep Dive into complex genes',
        'Certificate of Completion'
      ]
    },
    { 
      id: `m4`, 
      title: "Newton's Laws", 
      teacher: 'Prof. Balaji Sampath',
      image: 'https://images.unsplash.com/photo-1629196914594-5777bdfe1b94?auto=format&fit=crop&w=800&q=80',
      duration: '3.0 hrs', 
      feeOld: '1499', feeNew: '699',
      features: [
        { icon: <Timer />, text: '180 Mins Content' },
        { icon: <Book />, text: '50+ PYQs Solved' },
        { icon: <Zap />, text: 'Instant Access' }
      ],
      allFeatures: [
        '180 Minutes Video Content',
        '50+ Previous Year Questions',
        'Interactive Simulation Demos',
        'Doubt Solving Framework',
        'Exam Strategy for Mechanics',
        'Concept Mapping Included'
      ]
    },
    { 
      id: `m5`, 
      title: 'Thermodynamics', 
      teacher: 'Prof. Amit Kumar',
      image: 'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&w=800&q=80',
      duration: '2.0 hrs', 
      feeOld: '1299', feeNew: '599',
      features: [
        { icon: <Timer />, text: '120 Mins Content' },
        { icon: <Book />, text: 'Concept Maps' },
        { icon: <Zap />, text: 'Instant Access' }
      ],
      allFeatures: [
        '120 Minutes Expert Content',
        'High Impact Concept Maps',
        'Thermodynamics Cheat-Sheet',
        'Step-by-Step Solver Guide',
        'Numerical Mastery Module',
        'Lifetime Self-Paced Access'
      ]
    },
    { 
      id: `m7`, 
      title: 'Human Reproduction', 
      teacher: 'Dr. Priya Sharma',
      image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=800&q=80',
      duration: '2.5 hrs', 
      feeOld: '1199', feeNew: '599',
      features: [
        { icon: <Timer />, text: '150 Mins Content' },
        { icon: <Book />, text: 'Detailed Diagrams' },
        { icon: <Zap />, text: 'Instant Access' }
      ],
      allFeatures: [
        '150 Minutes Video Series',
        'Hand-drawn Detailed Diagrams',
        'Exam-focused Question Bank',
        'Memory Mnemonics',
        'Scientific Terminology Guide',
        'Certificate of Completion'
      ]
    },
    { 
      id: `m8`, 
      title: 'Electrochemistry', 
      teacher: 'Prof. Evvie Chockalingam',
      image: 'https://images.unsplash.com/photo-1614935151651-0bea6508abb0?auto=format&fit=crop&w=800&q=80',
      duration: '2.0 hrs', 
      feeOld: '1099', feeNew: '499',
      features: [
        { icon: <Timer />, text: '120 Mins Content' },
        { icon: <Book />, text: 'Numerical Walks' },
        { icon: <Zap />, text: 'Instant Access' }
      ],
      allFeatures: [
        '120 Minutes Focused Insight',
        'Complex Numerical Walkthroughs',
        'Electrochemical Table Summaries',
        'Quick Revision Cards',
        'Mobile App Access',
        'Doubt Solving Community'
      ]
    }
  ];

  const CourseCard = ({ course }) => {
    const isSelected = selectedCourseIds.includes(course.id);
    
    return (
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`group relative bg-white rounded-[2.5rem] p-6 border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.02)] hover:shadow-[0_30px_70px_rgba(0,0,0,0.08)] transition-all duration-500 flex flex-col h-full w-full ${isSelected ? 'ring-2 ring-indigo-600 shadow-indigo-600/10' : ''}`}
      >
        <div className="flex justify-between items-start mb-6">
          <div className={`px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest ${isSelected ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-500'}`}>
            Microcourse
          </div>
          <div className="flex items-center gap-1 bg-yellow-50 px-3 py-1.5 rounded-full border border-yellow-100">
             <Zap size={10} className="text-yellow-600 fill-yellow-600" />
             <span className="text-[9px] font-bold text-yellow-700 uppercase tracking-wider">{course.duration}</span>
          </div>
        </div>

        <div className="mb-5">
          <h3 className="text-xl font-black text-slate-900 leading-tight mb-2 group-hover:text-indigo-600 transition-colors line-clamp-1">{course.title}</h3>
          <p className="text-[12px] font-bold text-slate-400 uppercase tracking-wide">With {course.teacher}</p>
        </div>

        <div className="relative h-32 rounded-2xl overflow-hidden mb-5 bg-slate-100">
           <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700 opacity-80" />
           <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
        </div>

        <div className="space-y-3 mb-6 flex-grow">
          {course.features.map((feat, idx) => (
            <div key={idx} className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center flex-shrink-0">
                 {React.cloneElement(feat.icon, { size: 14, strokeWidth: 2.5 })}
              </div>
              <span className="text-[12px] font-bold text-slate-700">{feat.text}</span>
            </div>
          ))}
        </div>

        <div className="pt-5 border-t border-slate-50">
          <div className="flex justify-between items-end mb-5">
             <div>
               <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">One-time Fee</p>
               <div className="flex items-baseline gap-2">
                  <span className="text-xl font-black text-slate-900 leading-none">₹{course.feeNew}</span>
                  <span className="text-[12px] font-bold text-slate-300 line-through decoration-slate-200">₹{course.feeOld}</span>
               </div>
             </div>
             <button 
               onClick={() => setSelectedCourse(course)}
               className="text-[10px] font-black text-indigo-600 uppercase tracking-widest hover:text-indigo-700 transition-colors pb-1 border-b-2 border-indigo-100"
             >
               Explore
             </button>
          </div>

          <div className="flex gap-2">
             <button className="flex-1 bg-slate-900 hover:bg-black text-white font-black py-3.5 rounded-2xl text-[10px] uppercase tracking-widest transition-all hover:scale-[1.02] active:scale-95 shadow-xl shadow-slate-900/10">
                Buy Now
             </button>
             <button 
               onClick={() => toggleCourse(course.id)}
               className={`w-12 flex items-center justify-center rounded-2xl border-2 transition-all hover:scale-[1.02] active:scale-95 ${isSelected ? 'bg-indigo-600 border-indigo-600 text-white' : 'border-slate-100 hover:border-indigo-200 text-slate-400'}`}
             >
               <Check size={18} strokeWidth={3} />
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
              <span className="text-indigo-600">Microcourses</span>
           </div>
           <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-center">
              <div className="lg:col-span-7">
                 <motion.div
                   initial={{ opacity: 0, x: -20 }}
                   animate={{ opacity: 1, x: 0 }}
                   className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-50 rounded-lg text-[10px] font-black text-indigo-600 uppercase tracking-widest mb-6"
                 >
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-600"></div>
                    Focused Conceptual Learning
                 </motion.div>
                 <motion.h1 
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ delay: 0.1 }}
                   className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.1] mb-8 tracking-tighter"
                 >
                    Master <span className="text-indigo-600">Topics</span> <br />in Hours
                 </motion.h1>
                 <motion.p 
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ delay: 0.2 }}
                   className="text-lg md:text-xl text-slate-500 font-medium leading-relaxed max-w-2xl"
                 >
                    Skip the long syllabus. Choose specific chapters you find difficult and master them with condensed, high-impact sessions designed for maximum recall.
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
                          <Zap size={32} />
                       </div>
                       <div>
                          <h3 className="text-4xl font-black text-slate-900 tracking-tighter">120+</h3>
                          <p className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] mt-1 leading-none">Modules Online</p>
                       </div>
                    </div>

                    <div className="flex flex-col gap-4">
                       <div className="h-px bg-slate-200 w-full mb-2"></div>
                       <div className="flex justify-between items-center">
                          <div className="flex items-center gap-2">
                             <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></div>
                             <span className="text-[11px] font-black text-slate-900 uppercase tracking-widest whitespace-nowrap">Instant Delivery</span>
                          </div>
                          <div className="flex items-center gap-1.5 px-3 py-1 bg-indigo-600 text-white rounded-full">
                             <StarIcon size={10} className="fill-white" />
                             <span className="text-[9px] font-black uppercase tracking-wider">High Speed Mastery</span>
                          </div>
                       </div>
                    </div>
                 </div>

                 <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white border border-slate-50 p-6 rounded-[2rem] shadow-[0_15px_40px_rgba(0,0,0,0.03)] group hover:-translate-y-1 transition-all duration-300">
                       <div className="flex items-center gap-3 mb-3">
                          <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-500 flex items-center justify-center">
                             <Check size={18} strokeWidth={2.5} />
                          </div>
                          <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Quality</span>
                       </div>
                       <p className="text-sm font-black text-slate-900 leading-tight">Expert Verified <br /><span className="text-indigo-600">Concept Maps</span></p>
                    </div>
                    <div className="bg-white border border-slate-50 p-6 rounded-[2rem] shadow-[0_15px_40px_rgba(0,0,0,0.03)] group hover:-translate-y-1 transition-all duration-300">
                       <div className="flex items-center gap-3 mb-3">
                          <div className="w-8 h-8 rounded-lg bg-orange-50 text-orange-500 flex items-center justify-center">
                             <Timer size={18} strokeWidth={2.5} />
                          </div>
                          <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Fast Track</span>
                       </div>
                       <p className="text-sm font-black text-slate-900 leading-tight">Zero Fluff <br /><span className="text-indigo-600">3hr Mastery</span></p>
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
              <div className="w-14 h-14 rounded-[1.25rem] bg-indigo-50 text-indigo-600 flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110 duration-300">
                 <Zap size={28} />
              </div>
              <div>
                 <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Method</p>
                 <h4 className="text-base font-black text-slate-900 uppercase tracking-wide">Instant Topic Onboarding</h4>
              </div>
           </div>
           <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 rounded-[1.25rem] bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110 duration-300">
                 <Layout size={28} />
              </div>
              <div>
                 <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Resources</p>
                 <h4 className="text-base font-black text-slate-900 uppercase tracking-wide">Topic Wise Assessment</h4>
              </div>
           </div>
           <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 rounded-[1.25rem] bg-orange-50 text-orange-600 flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110 duration-300">
                 <Monitor size={28} />
              </div>
              <div>
                 <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Certificate</p>
                 <h4 className="text-base font-black text-slate-900 uppercase tracking-wide">Skills Course Badge</h4>
              </div>
           </div>
        </div>
      </div>

      {/* Selection Summary Bar */}
      <AnimatePresence>
        {selectedCourseIds.length > 0 && (
          <motion.div 
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50 w-full max-w-3xl px-6"
          >
            <div className="bg-slate-950 text-white rounded-[2rem] p-5 pl-10 flex items-center justify-between shadow-2xl border border-white/10 backdrop-blur-xl">
               <div className="flex items-center gap-6">
                  <div className="flex -space-x-3">
                     {[1,2,3].slice(0, selectedCourseIds.length).map(i => (
                        <div key={i} className="w-10 h-10 rounded-full bg-indigo-600 border-4 border-slate-950 flex items-center justify-center">
                           <Zap size={14} className="fill-white" />
                        </div>
                     ))}
                  </div>
                  <div>
                     <p className="text-sm font-black tracking-tight">{selectedCourseIds.length} Topic{selectedCourseIds.length !== 1 ? 's' : ''} Selected</p>
                     <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Added to your checkout</p>
                  </div>
               </div>
               <button className="bg-white text-slate-950 hover:bg-slate-100 font-black px-8 py-4 rounded-2xl text-[11px] uppercase tracking-widest transition-all hover:scale-105 flex items-center gap-3">
                  <ShoppingCart size={16} />
                  Proceed to Checkout
               </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col items-center mb-16">
             <div className="h-px bg-slate-100 w-32 mb-8"></div>
             <h2 className="text-sm font-black text-slate-400 uppercase tracking-[0.3em]">Curated Library</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
             {courses.map(c => <CourseCard key={c.id} course={c} />)}
          </div>
          
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
              className="bg-white rounded-[3rem] shadow-2xl w-full max-w-4xl max-h-[85vh] flex flex-col overflow-hidden relative z-10"
            >
              <div className="flex justify-between items-start p-10 pb-6">
                <div className="flex gap-6 items-center">
                   <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-indigo-600 border border-slate-100">
                      <Zap size={32} strokeWidth={2.5} className="fill-indigo-600" />
                   </div>
                   <div>
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{selectedCourse.duration} Short Course</span>
                      <h3 className="text-3xl font-black text-slate-900 tracking-tighter leading-tight mt-1">{selectedCourse.title}</h3>
                   </div>
                </div>
                <button onClick={() => setSelectedCourse(null)} className="w-12 h-12 rounded-full bg-slate-50 hover:bg-slate-100 flex items-center justify-center text-slate-400 hover:text-slate-900 transition-all">
                  <X size={24} />
                </button>
              </div>

              <div className="p-10 pt-4 overflow-y-auto custom-scrollbar">
                 <div className="grid md:grid-cols-2 gap-12">
                    <div>
                       <h4 className="font-black text-slate-900 text-lg mb-6">Expert Coverage:</h4>
                       <div className="space-y-3">
                          {selectedCourse.allFeatures.map((item, i) => (
                             <div key={i} className="flex gap-3 items-start p-4 bg-slate-50 rounded-2xl border border-slate-100 group">
                                <div className="w-5 h-5 rounded-full bg-indigo-600 text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                                   <Check size={12} strokeWidth={4} />
                                </div>
                                <p className="text-sm font-bold text-slate-700">{item}</p>
                             </div>
                          ))}
                       </div>
                    </div>

                    <div className="space-y-6">
                       <div className="bg-white rounded-[2rem] border border-slate-100 p-8 shadow-xl shadow-slate-200/20">
                          <div className="mb-8">
                             <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">Model</p>
                             <div className="flex items-center gap-3 mb-2">
                                <PlayCircle size={18} className="text-indigo-600" />
                                <span className="font-black text-slate-900">Instant Digital Delivery</span>
                             </div>
                             <div className="flex items-center gap-3">
                                <Layout size={18} className="text-indigo-600" />
                                <span className="font-black text-slate-900">Interactive Quiz Mode</span>
                             </div>
                          </div>

                          <div className="mb-10">
                             <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">Investment</p>
                             <div className="flex items-baseline gap-3">
                                <span className="text-3xl font-black text-indigo-600 font-sans">₹{selectedCourse.feeNew}</span>
                                <span className="text-base font-bold text-slate-300 line-through">₹{selectedCourse.feeOld}</span>
                             </div>
                          </div>

                          <button className="w-full bg-slate-950 hover:bg-black text-white font-black py-5 rounded-2xl text-[11px] uppercase tracking-widest shadow-xl transition-all hover:scale-[1.02] active:scale-95 mb-4">
                             Add to my Library
                          </button>
                       </div>

                       <div className="p-6 bg-indigo-50/50 rounded-2xl border border-indigo-100 text-center">
                          <p className="text-[11px] font-bold text-slate-600 leading-snug">Perfect for quick revisions before scheduled exams.</p>
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

export default Microcourses;

