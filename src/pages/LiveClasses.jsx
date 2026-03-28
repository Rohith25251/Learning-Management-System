import React, { useState } from 'react';
import { Calendar, Clock, Monitor, User, BookOpen, Atom, FlaskConical, Dna, Trophy, X, FileText } from 'lucide-react';
import { TeachersSection, FAQSection, TestimonialsSection, FooterSection } from '../components/SharedSections';

const LiveClasses = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);

  const [selectedCourseIds, setSelectedCourseIds] = useState([]);
  const [activeTab, setActiveTab] = useState('Class 11');

  const toggleCourse = (id) => {
    setSelectedCourseIds(prev => 
      prev.includes(id) ? prev.filter(courseId => courseId !== id) : [...prev, id]
    );
  };

  const getPhysicsCourses = (cls) => [
    { 
      id: `${cls}-p1`, 
      title: 'Advanced Physics Fundamentals', 
      teacher: 'Prof. Balaji Sampath',
      image: 'https://images.unsplash.com/photo-1632559648607-4c7fa4338e55?auto=format&fit=crop&w=800&q=80',
      batch: `P${cls.split(' ')[1]}`, 
      feeOld: '45000', feeNew: '38000',
      features: [
        { icon: <Monitor size={18} strokeWidth={2} />, text: 'Complementary LIVE Webinar Sessions' },
        { icon: <User size={18} strokeWidth={2} />, text: '320+ Live Interactive Classes' },
        { icon: <Calendar size={18} strokeWidth={2} />, text: 'Saturday (6.00 pm - 9.00 pm)' }
      ]
    },
    { 
      id: `${cls}-p2`, 
      title: 'Conceptual Chemistry Mastery', 
      teacher: 'Prof. Evvie Chockalingam',
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80',
      batch: `C${cls.split(' ')[1]}`, 
      feeOld: '45000', feeNew: '38000',
      features: [
        { icon: <Monitor size={18} strokeWidth={2} />, text: 'Complementary LIVE Webinar Sessions' },
        { icon: <User size={18} strokeWidth={2} />, text: '240+ Live Interactive Classes' },
        { icon: <Calendar size={18} strokeWidth={2} />, text: 'Tuesday (6.00 pm - 9.00 pm)' }
      ]
    },
  ];

  const getBiologyCourses = (cls) => [
    { 
      id: `${cls}-b1`, 
      title: 'High School Physics Core', 
      teacher: 'Prof. Amit Kumar',
      image: 'https://images.unsplash.com/photo-1632559648607-4c7fa4338e55?auto=format&fit=crop&w=800&q=80',
      batch: `P${cls.split(' ')[1]}N`, 
      feeOld: '45000', feeNew: '38000',
      features: [
        { icon: <Monitor size={18} strokeWidth={2} />, text: 'Complementary LIVE Webinar Sessions' },
        { icon: <User size={18} strokeWidth={2} />, text: '320+ Live Interactive Classes' },
        { icon: <Calendar size={18} strokeWidth={2} />, text: 'Saturday (6.00 pm - 9.00 pm)' }
      ]
    },
    { 
      id: `${cls}-b2`, 
      title: 'High School Chemistry Core', 
      teacher: 'Prof. Evvie Chockalingam',
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80',
      batch: `C${cls.split(' ')[1]}N`, 
      feeOld: '45000', feeNew: '38000',
      features: [
        { icon: <Monitor size={18} strokeWidth={2} />, text: 'Complementary LIVE Webinar Sessions' },
        { icon: <User size={18} strokeWidth={2} />, text: '240+ Live Interactive Classes' },
        { icon: <Calendar size={18} strokeWidth={2} />, text: 'Tuesday (6.00 pm - 9.00 pm)' }
      ]
    },
    { 
      id: `${cls}-b3`, 
      title: 'Advanced Biology Core', 
      teacher: 'Dr. Priya Sharma',
      image: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&w=800&q=80',
      batch: `B${cls.split(' ')[1]}N`, 
      feeOld: '45000', feeNew: '38000',
      features: [
        { icon: <Monitor size={18} strokeWidth={2} />, text: 'Complementary LIVE Webinar Sessions' },
        { icon: <User size={18} strokeWidth={2} />, text: '400+ Live Interactive Classes' },
        { icon: <Calendar size={18} strokeWidth={2} />, text: 'Friday (6.00 pm - 9.00 pm)' }
      ]
    },
  ];

  const physicsCourses = getPhysicsCourses(activeTab);
  const biologyCourses = getBiologyCourses(activeTab);

  const CourseCard = ({ course }) => {
    const isSelected = selectedCourseIds.includes(course.id);
    
    return (
      <div className={`bg-white rounded-[24px] shadow-xl flex flex-col overflow-hidden transition-all duration-300 transform hover:-translate-y-1 w-full mx-auto md:max-w-[360px] ${isSelected ? 'ring-4 ring-blue-500 shadow-blue-500/20' : 'border border-slate-100 shadow-slate-200/50 hover:shadow-2xl'}`}>
        
        {/* Dark Hero Image Section */}
        <div className="h-[210px] relative bg-slate-900 overflow-hidden group/image">
           <img src={course.image} alt={course.title} className="w-full h-full object-cover opacity-30 mix-blend-overlay group-hover/image:scale-105 transition-transform duration-700" />
           <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent"></div>
           
           {/* Top Badges */}
           <div className="absolute top-5 left-5 right-5 flex justify-between items-start z-10">
             <span className="bg-indigo-700 text-white text-[11px] font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-md border border-indigo-600/50 flex items-center justify-center">
               {activeTab}
             </span>
             <div className="bg-slate-900/80 backdrop-blur-md rounded-full px-4 py-1.5 flex items-center gap-2 shadow-lg border border-white/5">
               <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
               <span className="text-white text-[11px] font-semibold tracking-wide">{course.teacher}</span>
             </div>
           </div>

           {/* Title aligned at bottom */}
           <div className="absolute bottom-6 left-5 right-5 z-10 flex flex-col items-start gap-1">
             <h3 className="font-extrabold text-slate-50 text-[26px] leading-none drop-shadow-md">{course.title}</h3>
           </div>
        </div>

        {/* Features List */}
        <div className="flex-grow pt-6 pb-2 px-3">
          <ul className="space-y-4">
            {course.features.map((feat, idx) => (
              <li key={idx} className="flex items-center gap-5 px-4 rounded-xl transition-colors group/feat">
                <div className="w-11 h-11 rounded-full bg-[#f0f5ff] flex items-center justify-center text-indigo-700 flex-shrink-0 shadow-[0_2px_10px_-3px_rgba(67,56,202,0.3)] group-hover/feat:bg-[#e0e7ff] transition-colors">
                  {feat.icon}
                </div>
                <span className="text-slate-800 font-bold text-[15px] leading-snug flex-1">{feat.text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Footer Pricing & Actions */}
        <div className="p-6 pt-6 bg-gradient-to-b from-white to-slate-50 mt-auto">
          <div className="flex justify-between items-center mb-6">
            <div>
              <div className="flex items-baseline gap-2.5">
                <span className="text-[22px] font-black text-slate-900 tracking-tight">Rs.{course.feeNew}</span>
                <span className="text-[13px] font-bold text-slate-400 line-through decoration-slate-300">Rs.{course.feeOld}</span>
              </div>
            </div>
            <button 
              onClick={() => setSelectedCourse(course)}
              className="text-blue-600 font-bold text-[13px] tracking-tight hover:text-blue-700 decoration-2 underline-offset-4 hover:underline transition-all"
            >
              View Details
            </button>
          </div>
          
          {/* Two Buttons Row */}
          <div className="flex gap-3">
            <button className="flex-1 bg-green-500 hover:bg-green-600 text-white font-bold py-3.5 rounded-xl text-[14px] shadow-lg shadow-green-500/20 transition-all transform hover:-translate-y-0.5 border border-green-500">
              Enroll Now
            </button>
            <button 
              onClick={() => toggleCourse(course.id)}
              className={`flex-1 font-bold py-3.5 rounded-xl text-[14px] flex items-center justify-center gap-2 shadow-lg transition-all transform hover:-translate-y-0.5 ${
                isSelected 
                  ? 'bg-blue-600 text-white shadow-blue-500/20 border border-blue-700' 
                  : 'bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50'
              }`}
            >
              <div className={`w-[14px] h-[14px] rounded-[3px] flex items-center justify-center border transition-colors ${isSelected ? 'bg-white border-white text-blue-600' : 'border-blue-600 bg-transparent'}`}>
                 {isSelected && <svg viewBox="0 0 14 14" fill="none" className="w-[10px] h-[10px]"><path d="M3 7.5L5.5 10L11 4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>}
              </div>
              {isSelected ? 'Unselect' : 'Select'}
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
              <h1 className="text-5xl md:text-6xl font-black text-white leading-tight mb-2 drop-shadow-md">LIVE Online Classes</h1>
              <h2 className="text-2xl md:text-3xl font-black text-yellow-400 mb-8 uppercase tracking-wide">FOR IIT JEE + CBSE + NEET</h2>
              
              <div className="inline-block bg-white rounded-full px-6 py-2.5 mb-10 shadow-lg border-2 border-slate-100 transform -rotate-1 hover:rotate-0 transition-transform cursor-default">
                <span className="text-2xl font-bold text-slate-900 mr-2">Register For</span>
                <span className="text-2xl font-black text-red-500">2026-2027</span>
              </div>
              
              <h3 className="text-2xl font-black text-yellow-400 mb-2">Learn and Interact with India's Best Teachers</h3>
              <p className="text-lg md:text-xl font-medium text-white tracking-widest uppercase opacity-90">PHYSICS, CHEMISTRY, BIOLOGY MADE EASY!</p>
            </div>
            
            <div className="w-full lg:w-2/5 relative">
               {/* Stand-in for the computer graphic */}
               <div className="relative overflow-hidden rounded-xl shadow-2xl border-4 border-slate-800 bg-slate-900 aspect-[4/3]">
                  <img src="https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=800&q=80" alt="Student learning" className="w-full h-full object-cover opacity-80" />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent flex items-end p-6">
                    <p className="text-white font-bold text-lg drop-shadow-lg">Interactive Online Learning Experience</p>
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
        
        {/* Registration Header from Image 2 */}
        <div className="flex flex-col items-center mb-8 mt-4">
          <h2 className="text-xl font-semibold text-slate-500 uppercase tracking-widest">LIVE Online Classes Registration Open for</h2>
          <h1 className="text-3xl font-extrabold text-slate-900 mt-2">April 2026 - March 2027</h1>
        </div>

        <div className="flex justify-center flex-wrap gap-4 mb-20">
          {['Class 10', 'Class 11', 'Class 12'].map((cls) => (
            <button 
              key={cls}
              onClick={() => setActiveTab(cls)}
              className={`px-8 py-2.5 rounded-full font-bold text-[14px] transition-all duration-300 shadow-sm border ${
                activeTab === cls 
                  ? 'bg-blue-600 border-blue-600 text-white scale-105 shadow-blue-600/20' 
                  : 'bg-slate-50 border-slate-200 text-slate-500 hover:bg-white hover:text-slate-800'
              }`}
            >
              {cls}
            </button>
          ))}
        </div>

        <div className="mb-16">
          <div className="flex flex-col items-center mb-10">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">High School Science Core LIVE Classes</h2>
          </div>
          <div className="flex flex-wrap gap-6 justify-center">
            {physicsCourses.map(c => <CourseCard key={c.id} course={c} />)}
          </div>
        </div>

        <div className="mb-12">
          <div className="flex flex-col items-center mb-10">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">Advanced Subject Specializations</h2>
          </div>
          <div className="flex flex-wrap gap-6 justify-center">
            {biologyCourses.map(c => <CourseCard key={c.id} course={c} />)}
          </div>
        </div>

        {/* Global Register Now Button */}
        <div className="flex flex-col items-center mt-6">
          <button className="bg-blue-600 hover:bg-blue-600 text-white font-bold py-3.5 px-10 rounded-full shadow-lg transition-transform hover:scale-105 text-xl">
             Register Now
          </button>
          <span className="text-blue-600 font-bold mt-3 text-[15px]">
            ({selectedCourseIds.length} Course{selectedCourseIds.length !== 1 ? 's' : ''} selected)
          </span>
        </div>
        
      </section>

      {/* Course Details Modal */}
      {selectedCourse && (
        <div className="fixed inset-0 bg-slate-900/60 z-[100] flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="flex justify-between items-start p-6 border-b border-slate-100">
              <div className="flex gap-4 items-center">
                 <div className={`w-14 h-14 bg-slate-100 rounded-full flex items-center justify-center ${selectedCourse.iconColor}`}>
                    {selectedCourse.icon}
                 </div>
                 <div>
                    <h4 className="text-slate-600 font-medium">{activeTab}</h4>
                    <h3 className="text-3xl font-bold text-slate-900 leading-tight">{selectedCourse.title}</h3>
                 </div>
              </div>
              <div className="flex items-center gap-4">
                 <button className="bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg text-sm hover:bg-blue-700 transition-colors">
                    View Topics
                 </button>
                 <button onClick={() => setSelectedCourse(null)} className="text-slate-400 hover:text-slate-600 p-1">
                    <X size={24} />
                 </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-8 overflow-y-auto">
               
               {/* Pricing & Schedule Table */}
               <div className="w-full border border-[#C52A2D] rounded-lg overflow-hidden mb-10 relative">
                 {/* Table Split into two on larger screens */}
                 <div className="grid md:grid-cols-2">
                    {/* Schedule Col */}
                    <div className="border-b md:border-b-0 md:border-r border-[#C52A2D]">
                       <div className="bg-[#C52A2D] text-white font-bold text-center py-2.5 text-lg">Class Schedule</div>
                       <div className="bg-white text-center py-5">
                          <p className="font-medium text-slate-900 text-xl">{selectedCourse.day}</p>
                          <p className="text-slate-700 text-lg mt-1">{selectedCourse.time}</p>
                       </div>
                    </div>
                    {/* Fee Col */}
                    <div>
                       <div className="bg-[#C52A2D] text-white font-bold text-center py-2.5 text-lg">Course Fee</div>
                       <div className="bg-white text-center py-5 flex flex-col items-center justify-center">
                          <div className="flex items-center gap-3">
                             <span className="text-red-500 line-through text-lg font-medium opacity-70">₹{selectedCourse.feeOld}</span>
                             <span className="text-blue-500 font-bold text-2xl">₹{selectedCourse.feeNew}</span>
                          </div>
                          <span className="text-emerald-600 font-semibold text-sm mt-1">Early Bird Offer</span>
                       </div>
                    </div>
                 </div>
               </div>

               {/* About the class */}
               <h3 className="text-2xl font-bold text-slate-900 mb-4">About the Class</h3>
               <div className="text-slate-800 space-y-4 font-medium mb-8 leading-relaxed">
                  <p>ScienceLMS's LIVE {selectedCourse.title} classes for IIT JEE + CBSE will help the student in building a strong foundation in {selectedCourse.title}.</p>
                  <p>This course is for hard-working students who want to excel at school and also crack competitive exams like IIT JEE. If you are looking to understand concepts in {selectedCourse.title} and to build your problem-solving skills, this course is for you.</p>
                  <p>In this course the students are expected to complete their online assignments prior to their LIVE classes, which will help the student in grasping the subject better.</p>
               </div>

               <p className="font-bold text-slate-900 mb-4">As part of this course you will get</p>
               <div className="border-l-4 border-[#C52A2D] pl-6 py-2 border-y border-y-slate-100 border-r border-r-slate-100 rounded-r-xl">
                  <ol className="list-decimal pl-5 space-y-5 text-slate-800 font-medium pb-2">
                     <li>3 hours of LIVE Online Classes by Expert Teachers</li>
                     <li>4 - 5 hours of Online Homework Assignments (Which Include Concept Videos, Solved Examples, and Practice Problems)</li>
                     <li>Doubt Clearing Support During LIVE Class; Includes Access to DoubtZap</li>
                     <li>Access to Parent App to Monitor Performance</li>
                  </ol>
               </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-slate-100 bg-slate-50 flex justify-end">
               <button onClick={() => setSelectedCourse(null)} className="text-slate-600 font-bold px-6 py-2 hover:text-slate-900 mr-2">Close</button>
               <button className="bg-blue-600 text-white font-bold px-8 py-2 rounded-lg shadow hover:bg-blue-700">Enroll Now</button>
            </div>
          </div>
        </div>
      )}

      {/* Shared Sections */}
      <TeachersSection />
      <TestimonialsSection />
      <FAQSection />
      <FooterSection />
    </div>
  );
};

export default LiveClasses;
