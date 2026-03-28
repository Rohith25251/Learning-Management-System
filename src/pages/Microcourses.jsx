import React, { useState } from 'react';
import { Zap, Tag, Timer, Book, PlayCircle } from 'lucide-react';
import { TeachersSection, FAQSection, TestimonialsSection, FooterSection } from '../components/SharedSections';

const Microcourses = () => {
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
        { icon: <Timer size={18} strokeWidth={2} />, text: '150 Minutes of Content' },
        { icon: <Book size={18} strokeWidth={2} />, text: 'Detailed Study Notes' },
        { icon: <Zap size={18} strokeWidth={2} />, text: 'Instant Access' }
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
        { icon: <Timer size={18} strokeWidth={2} />, text: '120 Minutes of Content' },
        { icon: <Book size={18} strokeWidth={2} />, text: 'Topic Wise Tests' },
        { icon: <Zap size={18} strokeWidth={2} />, text: 'Instant Access' }
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
        { icon: <Timer size={18} strokeWidth={2} />, text: '180 Minutes of Content' },
        { icon: <Book size={18} strokeWidth={2} />, text: '50+ PYQs Solved' },
        { icon: <Zap size={18} strokeWidth={2} />, text: 'Instant Access' }
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
        { icon: <Timer size={18} strokeWidth={2} />, text: '120 Minutes of Content' },
        { icon: <Book size={18} strokeWidth={2} />, text: 'Concept Maps Included' },
        { icon: <Zap size={18} strokeWidth={2} />, text: 'Instant Access' }
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
        { icon: <Timer size={18} strokeWidth={2} />, text: '150 Minutes of Content' },
        { icon: <Book size={18} strokeWidth={2} />, text: 'Detailed Diagrams' },
        { icon: <Zap size={18} strokeWidth={2} />, text: 'Instant Access' }
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
        { icon: <Timer size={18} strokeWidth={2} />, text: '120 Minutes of Content' },
        { icon: <Book size={18} strokeWidth={2} />, text: 'Numerical Walkthroughs' },
        { icon: <Zap size={18} strokeWidth={2} />, text: 'Instant Access' }
      ]
    }
  ];

  const CourseCard = ({ course }) => {
    const isSelected = selectedCourseIds.includes(course.id);
    
    return (
      <div className={`bg-white rounded-[24px] shadow-xl flex flex-col overflow-hidden transition-all duration-300 transform hover:-translate-y-1 w-full mx-auto md:max-w-[360px] ${isSelected ? 'ring-4 ring-purple-500 shadow-purple-500/20' : 'border border-slate-100 shadow-slate-200/50 hover:shadow-2xl'}`}>
        
        {/* Dark Hero Image Section */}
        <div className="h-[210px] relative bg-slate-900 overflow-hidden group/image">
           <img src={course.image} alt={course.title} className="w-full h-full object-cover opacity-30 mix-blend-overlay group-hover/image:scale-105 transition-transform duration-700" />
           <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent"></div>
           
           {/* Top Badges */}
           <div className="absolute top-5 left-5 right-5 flex justify-between items-start z-10">
             <span className="bg-purple-600 text-white text-[11px] font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-md border border-purple-500/50 flex items-center justify-center">
               {course.duration}
             </span>
             <div className="bg-slate-900/80 backdrop-blur-md rounded-full px-4 py-1.5 flex items-center gap-2 shadow-lg border border-white/5">
               <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
               <span className="text-white text-[11px] font-semibold tracking-wide">{course.teacher}</span>
             </div>
           </div>

           {/* Title aligned at bottom */}
           <div className="absolute bottom-6 left-5 right-5 z-10 flex flex-col items-start gap-1">
             <h3 className="font-extrabold text-slate-50 text-[26px] leading-tight drop-shadow-md">{course.title}</h3>
           </div>
        </div>

        {/* Features List */}
        <div className="flex-grow pt-6 pb-2 px-3">
          <ul className="space-y-3">
            {course.features.map((feat, idx) => (
              <li key={idx} className="flex items-center gap-4 px-3 py-1 rounded-xl transition-colors group/feat">
                <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center text-purple-600 flex-shrink-0 shadow-[0_2px_10px_-3px_rgba(147,51,234,0.3)] group-hover/feat:bg-purple-100 transition-colors">
                  {feat.icon}
                </div>
                <span className="text-slate-800 font-bold text-[14px] leading-snug flex-1">{feat.text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Footer Pricing & Actions */}
        <div className="p-6 pt-5 bg-gradient-to-b from-white to-slate-50 mt-auto">
          <div className="flex justify-between items-center mb-6">
            <div>
              <div className="flex items-baseline gap-2.5">
                <span className="text-[22px] font-black text-slate-900 tracking-tight">Rs.{course.feeNew}</span>
                <span className="text-[13px] font-bold text-slate-400 line-through decoration-slate-300">Rs.{course.feeOld}</span>
              </div>
            </div>
            <button className="text-purple-600 font-bold text-[13px] tracking-tight hover:text-purple-700 decoration-2 underline-offset-4 hover:underline transition-all">
              Preview
            </button>
          </div>
          
          {/* Two Buttons Row */}
          <div className="flex gap-3">
            <button className="flex-1 bg-green-500 hover:bg-green-600 text-white font-bold py-3.5 rounded-xl text-[14px] shadow-lg shadow-green-500/20 transition-all transform hover:-translate-y-0.5 border border-green-500">
              Buy Now
            </button>
            <button 
              onClick={() => toggleCourse(course.id)}
              className={`flex-1 font-bold py-3.5 rounded-xl text-[14px] flex items-center justify-center gap-2 shadow-lg transition-all transform hover:-translate-y-0.5 ${
                isSelected 
                  ? 'bg-purple-600 text-white shadow-purple-500/20 border border-purple-700' 
                  : 'bg-white text-purple-600 border-2 border-purple-600 hover:bg-purple-50'
              }`}
            >
              <div className={`w-[14px] h-[14px] rounded-[3px] flex items-center justify-center border transition-colors ${isSelected ? 'bg-white border-white text-purple-600' : 'border-purple-600 bg-transparent'}`}>
                 {isSelected && <svg viewBox="0 0 14 14" fill="none" className="w-[10px] h-[10px]"><path d="M3 7.5L5.5 10L11 4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>}
              </div>
              {isSelected ? 'Remove' : 'Add to Cart'}
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 pt-16 pb-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="w-full lg:w-3/5">
              <h1 className="text-5xl md:text-6xl font-black text-white leading-tight mb-2 drop-shadow-md">Microcourses</h1>
              <h2 className="text-2xl md:text-3xl font-black text-yellow-400 mb-8 uppercase tracking-wide">Master Chapters Faster</h2>
              
              <div className="inline-block bg-white rounded-full px-6 py-2.5 mb-10 shadow-lg border-2 border-slate-100 transform -rotate-1 hover:rotate-0 transition-transform cursor-default flex items-center gap-3">
                <Zap className="text-yellow-500 shrink-0 fill-yellow-500" size={24} />
                <span className="text-2xl font-bold text-slate-900 mr-2">Top Rated</span>
                <span className="text-2xl font-black text-purple-600">Short Courses</span>
              </div>
              
              <h3 className="text-2xl font-black text-yellow-400 mb-2">Focused Learning for Quick Revisions</h3>
              <p className="text-lg md:text-xl font-medium text-white tracking-widest uppercase opacity-90">1.5 - 3 HOURS OF CONDENSED EXPERTISE!</p>
            </div>
            
            <div className="w-full lg:w-2/5 relative">
               <div className="relative overflow-hidden rounded-xl shadow-2xl border-4 border-slate-800 bg-slate-900 aspect-[4/3]">
                  <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80" alt="Student learning" className="w-full h-full object-cover opacity-80" />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent flex items-end justify-center pb-6">
                    <PlayCircle size={64} className="text-white drop-shadow-lg opacity-80 transition-transform hover:scale-110 cursor-pointer" />
                  </div>
               </div>
            </div>
          </div>
        </div>
        
        {/* Background rays/patterns */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-400/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 rounded-full"></div>
      </section>

      {/* Courses List Section */}
      <section className="py-16 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white relative -mt-6 rounded-t-3xl z-20 shadow-[0_-15px_30px_-15px_rgba(0,0,0,0.1)]">
        
        <div className="flex flex-col items-center mb-16 mt-4">
          <h2 className="text-xl font-semibold text-slate-500 uppercase tracking-widest">Available Microcourses</h2>
          <h1 className="text-3xl font-extrabold text-slate-900 mt-2">Target Your Weak Areas</h1>
        </div>

        {/* Global Action Bar */}
        {selectedCourseIds.length > 0 && (
          <div className="flex justify-between items-center bg-purple-50 border border-purple-100 p-4 rounded-2xl mb-10 shadow-sm animate-in fade-in slide-in-from-bottom-4 max-w-4xl mx-auto">
            <div className="flex items-center gap-3">
              <span className="bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shadow-md">{selectedCourseIds.length}</span>
              <span className="font-bold text-slate-800">Courses Added to Cart</span>
            </div>
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2.5 px-6 rounded-xl shadow-md transition-all">
              Proceed to Checkout
            </button>
          </div>
        )}

        {/* Microcourses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-center">
          {courses.map(c => <CourseCard key={c.id} course={c} />)}
        </div>
      </section>
      
      <TeachersSection />
      <TestimonialsSection />
      <FAQSection />
      <FooterSection />
    </div>
  );
};

export default Microcourses;
