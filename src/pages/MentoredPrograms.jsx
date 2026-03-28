import React, { useState } from 'react';
import { Monitor, User, FileText, Laptop, BookOpen, Handshake, ClipboardList, PenTool, Smartphone, HelpCircle, Grip } from 'lucide-react';
import { TeachersSection, FAQSection, TestimonialsSection, FooterSection } from '../components/SharedSections';

const MentoredPrograms = () => {
  const [activeTab, setActiveTab] = useState('Class 12');

  const getCourses = (cls) => [
    {
      id: 1,
      teacher: 'Prof. Balaji Sampath',
      title: 'IIT JEE Science Foundation',
      image: 'https://images.unsplash.com/photo-1524169358666-79f22534bc6e?auto=format&fit=crop&w=800&q=80',
      price: '14,000',
      oldPrice: '20,000',
      features: [
        { icon: <Monitor size={18} strokeWidth={1.75} />, text: 'Complementary LIVE Webinar Sessions' },
        { icon: <User size={18} strokeWidth={1.75} />, text: '354 Video Lectures' },
        { icon: <FileText size={18} strokeWidth={1.75} />, text: '104 Solved Video Examples' },
        { icon: <Laptop size={18} strokeWidth={1.75} />, text: '195 Practice Exercises' },
        { icon: <BookOpen size={18} strokeWidth={1.75} />, text: 'Printed Study Materials' },
        { icon: <Handshake size={18} strokeWidth={1.75} />, text: 'Personalised Mentor Support' },
        { icon: <ClipboardList size={18} strokeWidth={1.75} />, text: 'Monthly Consolidated Tests' },
        { icon: <PenTool size={18} strokeWidth={1.75} />, text: 'Term-wise Descriptive Exam' },
        { icon: <Smartphone size={18} strokeWidth={1.75} />, text: 'Parents App to view Progress Reports' },
        { icon: <HelpCircle size={18} strokeWidth={1.75} />, text: 'Chapter Based Doubt Clearing Sessions' },
        { icon: <Grip size={18} strokeWidth={1.75} />, text: 'Skill Builders & Skill Tests on Key Topics' },
      ]
    }
  ];

  const currentCourses = getCourses(activeTab);

  return (
    <div className="bg-white min-h-screen">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 pt-24 pb-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="w-full lg:w-3/5">
              <h1 className="text-5xl md:text-6xl font-black text-white leading-tight mb-2 drop-shadow-md">Mentored Learning</h1>
              <h2 className="text-2xl md:text-3xl font-black text-yellow-400 mb-8 uppercase tracking-wide">PERSONALIZED 1-ON-1 GUIDANCE</h2>
              
              <div className="inline-block bg-white rounded-full px-6 py-2.5 mb-10 shadow-lg border-2 border-slate-100 transform -rotate-1 hover:rotate-0 transition-transform cursor-default">
                <span className="text-2xl font-bold text-slate-900 mr-2">Admissions Open</span>
                <span className="text-2xl font-black text-red-500">2026-2027</span>
              </div>
              
              <h3 className="text-2xl font-black text-yellow-400 mb-2">Learn from India's Top Mentors</h3>
              <p className="text-lg md:text-xl font-medium text-white tracking-widest uppercase opacity-90">CUSTOMIZED STUDY PLANS & REGULAR ASSESSMENTS</p>
            </div>
            
            <div className="w-full lg:w-2/5 relative">
               <div className="relative overflow-hidden rounded-xl shadow-2xl border-4 border-slate-800 bg-slate-900 aspect-[4/3]">
                  <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80" alt="Students with Mentor" className="w-full h-full object-cover opacity-80" />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent flex items-end p-6">
                    <p className="text-white font-bold text-lg drop-shadow-lg">1-on-1 Personalized Education</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
        
        {/* Background rays/patterns */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-400/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      </section>

      {/* Header & Tabs */}
      <div className="max-w-[850px] mx-auto px-4 sm:px-6 mt-20 mb-12">
        <div className="text-center">
          <h2 className="text-[36px] font-extrabold text-slate-900 tracking-tight mb-3">Select a subject and start learning</h2>
          <p className="text-[18px] text-slate-500 mb-10 w-full max-w-2xl mx-auto">Learn from India's Best Teachers from the comfort of your home.</p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-3">
          {['Class 10', 'Class 11', 'Class 12'].map(cls => (
            <button 
              key={cls}
              onClick={() => setActiveTab(cls)}
              className={`px-7 py-3 text-[15px] font-bold rounded-full transition-all duration-300 ${
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
      <div className="w-full pb-24 relative top-0 z-10">
        <div className="max-w-[850px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            {currentCourses.map(course => (
              <div key={course.id} className="bg-white rounded-[24px] shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col overflow-hidden hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 transform hover:-translate-y-1">
                {/* Hero Image Section */}
                <div className="h-[220px] relative bg-slate-900 overflow-hidden group/image">
                   <img src={course.image} alt={course.teacher} className="w-full h-full object-cover opacity-70 mix-blend-overlay group-hover/image:scale-105 transition-transform duration-700" />
                   <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent"></div>
                   
                   {/* Top Badges */}
                   <div className="absolute top-5 left-5 right-5 flex justify-between items-start z-10">
                     <span className="bg-blue-600 border border-blue-400/50 shadow-md text-white text-[11px] font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
                       {activeTab}
                     </span>
                     <div className="bg-black/40 backdrop-blur-md rounded-full px-3.5 py-1.5 flex items-center gap-2 border border-white/10 shadow-lg">
                       <span className="relative flex h-2 w-2">
                         <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                         <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                       </span>
                       <span className="text-white text-[11px] font-semibold tracking-wide">{course.teacher}</span>
                     </div>
                   </div>

                   {/* Title aligned at bottom */}
                   <div className="absolute bottom-5 left-5 right-5 z-10">
                     <h3 className="font-extrabold text-white text-2xl leading-tight drop-shadow-lg">{course.title}</h3>
                   </div>
                </div>

                {/* Features List */}
                <div className="flex-grow pt-5 pb-3 px-3">
                  <ul className="space-y-1">
                    {course.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-4 px-4 py-2.5 rounded-xl hover:bg-slate-50 transition-colors">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                          {feat.icon}
                        </div>
                        <span className="text-slate-700 text-[14px] font-semibold">{feat.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer Pricing */}
                <div className="p-6 pt-3 bg-gradient-to-b from-white to-slate-50 mt-auto">
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent mb-5"></div>
                  
                  <div className="flex justify-between items-center mb-6">
                    <div>
                      <p className="text-[11.5px] text-slate-400 font-bold uppercase tracking-wider mb-1">Total Fee</p>
                      <div className="flex items-baseline gap-2.5">
                        <span className="text-3xl font-black text-slate-900 tracking-tight">₹{course.price}</span>
                        <span className="text-[15px] font-bold text-slate-400 line-through decoration-slate-300">₹{course.oldPrice}</span>
                      </div>
                    </div>
                    <button className="text-blue-600 font-bold text-[14px] tracking-tight hover:text-blue-700 decoration-2 underline-offset-4 hover:underline transition-all">
                      View Topics
                    </button>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-bold py-[16px] rounded-xl text-[16px] flex items-center justify-center gap-2 shadow-xl shadow-blue-500/25 transition-all transform hover:-translate-y-0.5 relative overflow-hidden group">
                    <span className="relative z-10 flex items-center gap-2">
                      Take this course
                    </span>
                    <div className="absolute inset-0 h-full w-full bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
                  </button>
                </div>
              </div>
            ))}
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

export default MentoredPrograms;
