import React, { useState } from 'react';
import { Monitor, FileText, Laptop, HelpCircle, Grip, Award } from 'lucide-react';
import { TeachersSection, FAQSection, TestimonialsSection, FooterSection } from '../components/SharedSections';

const VideoCourses = () => {
  const [activeTab, setActiveTab] = useState('Class 11');
  const [selectedCourseIds, setSelectedCourseIds] = useState([]);

  const toggleCourse = (id) => {
    setSelectedCourseIds(prev => 
      prev.includes(id) ? prev.filter(courseId => courseId !== id) : [...prev, id]
    );
  };

  const getCourses = (cls) => [
    {
      id: `${cls}-1`,
      teacher: 'Prof. Balaji Sampath',
      title: 'Physics for IIT JEE + CBSE + NEET',
      image: 'https://images.unsplash.com/photo-1632559648607-4c7fa4338e55?auto=format&fit=crop&w=800&q=80',
      price: '8,500',
      numericPrice: 8500,
      oldPrice: '12,000',
      features: [
        { icon: <Monitor size={18} strokeWidth={1.75} />, text: '225 Concept Video Lectures' },
        { icon: <FileText size={18} strokeWidth={1.75} />, text: '497 Solved Video Examples', hasRedDot: true },
        { icon: <Laptop size={18} strokeWidth={1.75} />, text: '362 Practice Questions' },
        { icon: <HelpCircle size={18} strokeWidth={1.75} />, text: 'Chapter Based Doubt Clearing Sessions', isNew: true },
        { icon: <Grip size={18} strokeWidth={1.75} />, text: 'Chapter Based Skill Test', isNew: true },
        { icon: <Award size={18} strokeWidth={1.75} />, text: 'Certificate of Completion' },
      ]
    },
    {
      id: `${cls}-2`,
      teacher: 'Prof. Evvie Chockalingam',
      title: 'Chemistry for IIT JEE + CBSE + NEET',
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80',
      price: '8,500',
      numericPrice: 8500,
      oldPrice: '12,000',
      features: [
        { icon: <Monitor size={18} strokeWidth={1.75} />, text: '291 Concept Video Lectures' },
        { icon: <FileText size={18} strokeWidth={1.75} />, text: '218 Solved Video Examples', hasRedDot: true },
        { icon: <Laptop size={18} strokeWidth={1.75} />, text: '672 Practice Questions' },
        { icon: <HelpCircle size={18} strokeWidth={1.75} />, text: 'Chapter Based Doubt Clearing Sessions', isNew: true },
        { icon: <Grip size={18} strokeWidth={1.75} />, text: 'Chapter Based Skill Test', isNew: true },
        { icon: <Award size={18} strokeWidth={1.75} />, text: 'Certificate of Completion' },
      ]
    }
  ];

  const currentCourses = getCourses(activeTab);

  return (
    <div className="bg-white min-h-screen relative">
      
      {/* Floating Action Banner */}
      {selectedCourseIds.length > 0 && (
        <div className="fixed top-[72px] left-0 right-0 bg-blue-500 text-white z-50 shadow-md py-4 px-4 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 backdrop-blur-md bg-opacity-95">
          <span className="font-bold text-lg tracking-wide">Get {selectedCourseIds.length} Courses at Rs.{selectedCourseIds.length * 8500}/-</span>
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2.5 px-10 rounded-full shadow-lg transition-transform hover:scale-105">
            Buy Now
          </button>
        </div>
      )}

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 pt-24 pb-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="w-full lg:w-3/5">
              <h1 className="text-5xl md:text-6xl font-black text-white leading-tight mb-2 drop-shadow-md">Video Courses</h1>
              <h2 className="text-2xl md:text-3xl font-black text-yellow-400 mb-8 uppercase tracking-wide">LEARN AT YOUR OWN PACE</h2>
              
              <div className="inline-block bg-white rounded-full px-6 py-2.5 mb-10 shadow-lg border-2 border-slate-100 transform -rotate-1 hover:rotate-0 transition-transform cursor-default">
                <span className="text-2xl font-bold text-slate-900 mr-2">Complete Syllabus</span>
                <span className="text-2xl font-black text-red-500">2026-2027</span>
              </div>
              
              <h3 className="text-2xl font-black text-yellow-400 mb-2">Master Concepts with Expert Educators</h3>
              <p className="text-lg md:text-xl font-medium text-white tracking-widest uppercase opacity-90">COMPREHENSIVE VIDEO LECTURES & PRACTICE TESTS</p>
            </div>
            
            <div className="w-full lg:w-2/5 relative">
               <div className="relative overflow-hidden rounded-xl shadow-2xl border-4 border-slate-800 bg-slate-900 aspect-[4/3] flex items-center justify-center group cursor-pointer">
                  <img src="https://images.unsplash.com/photo-1610484826967-09c5720778c7?auto=format&fit=crop&w=800&q=80" alt="Video Courses" className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 to-transparent flex items-center justify-center">
                     <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors shadow-lg">
                        <svg className="w-10 h-10 text-white ml-2" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                     </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end">
                    <p className="text-white font-bold text-lg drop-shadow-lg">High-Quality Recorded Sessions</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
        
        {/* Background rays/patterns */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-400/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      </section>

      {/* Header & Tabs */}
      <div className="max-w-[850px] mx-auto px-4 sm:px-6 mt-16 mb-12">
        <div className="text-center">
          <h2 className="text-[36px] font-extrabold text-slate-900 tracking-tight mb-3">Recorded Video Courses</h2>
          <p className="text-[18px] text-slate-500 mb-10 w-full max-w-2xl mx-auto">Master concepts at your own pace with meticulously structured video series.</p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-3">
          {['Class 10', 'Class 11', 'Class 12'].map(cls => (
            <button 
              key={cls}
              onClick={() => {
                setActiveTab(cls);
                setSelectedCourseIds([]); // reset selection when changing class to avoid confusion
              }}
              className={`px-6 py-2.5 text-[14px] font-bold rounded-full transition-all duration-300 ${
                activeTab === cls 
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30 transform -translate-y-0.5' 
                  : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-200 shadow-sm'
              }`}
            >
              {cls}
            </button>
          ))}
        </div>
      </div>

      {/* Premium Cards Area */}
      <div className="w-full pb-24 relative z-10">
        <div className="max-w-[950px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {currentCourses.map(course => {
              const isSelected = selectedCourseIds.includes(course.id);
              
              return (
              <div key={course.id} className={`bg-white rounded-[24px] shadow-xl flex flex-col overflow-hidden transition-all duration-300 transform hover:-translate-y-1 ${isSelected ? 'ring-4 ring-blue-500 shadow-blue-500/20' : 'border border-slate-100 shadow-slate-200/50 hover:shadow-2xl'}`}>
                {/* Hero Image Section */}
                <div className="h-[220px] relative bg-slate-900 overflow-hidden group/image">
                   <img src={course.image} alt={course.teacher} className="w-full h-full object-cover opacity-70 mix-blend-overlay group-hover/image:scale-105 transition-transform duration-700" />
                   <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent"></div>
                   
                   {/* Top Badges */}
                   <div className="absolute top-5 left-5 right-5 flex justify-between items-start z-10">
                     <span className="bg-yellow-500/90 backdrop-blur-md border border-yellow-400/50 shadow-md text-slate-900 text-[11px] font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
                       {activeTab}
                     </span>
                     <div className="bg-black/40 backdrop-blur-md rounded-full px-3.5 py-1.5 flex items-center gap-2 border border-white/10 shadow-lg">
                       <span className="text-white text-[11px] font-semibold tracking-wide">{course.teacher}</span>
                     </div>
                   </div>

                   {/* Title aligned at bottom */}
                   <div className="absolute bottom-5 left-5 right-5 z-10">
                     <h3 className="font-extrabold text-white text-[22px] leading-tight drop-shadow-lg">{course.title}</h3>
                   </div>
                </div>

                {/* Features List */}
                <div className="flex-grow pt-4 pb-2 px-3">
                  <ul className="space-y-1">
                    {course.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-4 px-4 py-2.5 rounded-xl hover:bg-slate-50 transition-colors">
                        <div className="relative flex-shrink-0 w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                          {feat.icon}
                          {feat.hasRedDot && (
                            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 border border-white rounded-full"></span>
                          )}
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-slate-700 text-[14px] font-semibold">{feat.text}</span>
                          {feat.isNew && (
                            <span className="text-red-500 text-[10px] font-bold uppercase tracking-wider bg-red-50 px-1.5 py-0.5 rounded">New</span>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer Pricing & Actions */}
                <div className="p-6 pt-3 bg-gradient-to-b from-white to-slate-50 mt-auto">
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent mb-5"></div>
                  
                  <div className="flex justify-between items-center mb-6">
                    <div>
                      <div className="flex items-baseline gap-2.5">
                        <span className="text-2xl font-black text-slate-900 tracking-tight">Rs.{course.price}</span>
                        <span className="text-[14px] font-bold text-slate-400 line-through decoration-slate-300">Rs.{course.oldPrice}</span>
                      </div>
                    </div>
                    <button className="text-blue-600 font-bold text-[14px] tracking-tight hover:text-blue-700 decoration-2 underline-offset-4 hover:underline transition-all">
                      View Topics
                    </button>
                  </div>
                  
                  {/* Two Buttons Row */}
                  <div className="flex gap-3">
                    <button className="flex-1 bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-xl text-[15px] flex items-center justify-center shadow-lg shadow-green-500/20 transition-all transform hover:-translate-y-0.5">
                      Buy Now
                    </button>
                    
                    <button 
                      onClick={() => toggleCourse(course.id)}
                      className={`flex-1 font-bold py-3 rounded-xl text-[15px] flex items-center justify-center gap-2 shadow-lg transition-all transform hover:-translate-y-0.5 ${
                        isSelected 
                          ? 'bg-blue-600 text-white shadow-blue-500/20' 
                          : 'bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50'
                      }`}
                    >
                      {/* Checkbox Icon */}
                      <div className={`w-4 h-4 rounded-sm flex items-center justify-center border transition-colors ${isSelected ? 'bg-white border-white text-blue-600' : 'border-blue-600 bg-transparent'}`}>
                         {isSelected && <svg viewBox="0 0 14 14" fill="none" className="w-3 h-3"><path d="M3 7.5L5.5 10L11 4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>}
                      </div>
                      {isSelected ? 'Unselect' : 'Select'}
                    </button>
                  </div>
                </div>
              </div>
              );
            })}
          </div>
        </div>
      </div>

      <TeachersSection />
      <TestimonialsSection />
      <FAQSection />
      <FooterSection />
    </div>
  );
};

export default VideoCourses;
