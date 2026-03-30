import React, { useState, useEffect } from 'react';
import { ChevronRight, PlayCircle, Star, Atom, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const TeachersSection = () => (
  <section className="py-24 bg-slate-50 border-t border-slate-100 overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
      <div className="text-center">
        <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">
          Learn from India's Best Science Mentors
        </h2>
        <p className="text-lg text-slate-500 font-medium">Connect with researchers and professors from top scientific institutions</p>
      </div>
    </div>

    {/* Seamless Infinite Marquee with Masked Edges */}
    <div className="relative flex overflow-hidden py-12">
      {/* Gradient Masks for edge smoothness */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-50 to-transparent z-20 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-50 to-transparent z-20 pointer-events-none"></div>

      <motion.div 
        className="flex gap-10 whitespace-nowrap w-max"
        animate={{ x: [0, "-50%"] }}
        style={{ willChange: "transform" }}
        transition={{ 
          duration: 240, 
          repeat: Infinity, 
          ease: "linear",
        }}
      >
        {[...Array(2)].map((_, listIdx) => (
          <React.Fragment key={listIdx}>
            {[
              { name: "Dr. Arun Kumar", role: "Physics Researcher", company: "IISc Bangalore", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop", companyLogo: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b0/Indian_Institute_of_Science_logo.png/200px-Indian_Institute_of_Science_logo.png" },
              { name: "Prof. Priya Sharma", role: "Biotech Expert", company: "AIIMS Delhi", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&h=600&fit=crop", companyLogo: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e5/All_India_Institute_of_Medical_Sciences_Delhi_logo.png/200px-All_India_Institute_of_Medical_Sciences_Delhi_logo.png" },
              { name: "Dr. S. Ranganathan", role: "Chemistry Lead", company: "IIT Madras", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&h=600&fit=crop", companyLogo: "https://upload.wikimedia.org/wikipedia/en/thumb/6/69/IIT_Madras_Logo.png/200px-IIT_Madras_Logo.png" },
              { name: "Dr. Amit Varma", role: "Quantum Physics", company: "TIFR Mumbai", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&h=600&fit=crop", companyLogo: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9f/Tifr_logo_new.png/200px-Tifr_logo_new.png" },
              { name: "Prof. Kavita Mehra", role: "Molecular Biology", company: "IIT Bombay", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&h=600&fit=crop", companyLogo: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1d/Indian_Institute_of_Technology_Bombay_Logo.svg/200px-Indian_Institute_of_Technology_Bombay_Logo.svg.png" },
              { name: "Dr. Rahul Deshmukh", role: "Astrophysicist", company: "IUCAA Pune", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&h=600&fit=crop", companyLogo: "https://upload.wikimedia.org/wikipedia/en/thumb/1/14/IUCAA_logo.png/200px-IUCAA_logo.png" },
              { name: "Dr. Anjali Das", role: "Organic Chemist", company: "IIT Kharagpur", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&h=600&fit=crop", companyLogo: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1c/IIT_Kharagpur_Logo.png/200px-IIT_Kharagpur_Logo.png" },
              { name: "Prof. S. Vishwanathan", role: "Space Scientist", company: "ISRO", img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=500&h=600&fit=crop", companyLogo: "https://upload.wikimedia.org/wikipedia/en/thumb/b/bd/Indian_Space_Research_Organisation_Logo.svg/200px-Indian_Space_Research_Organisation_Logo.svg.png" },
              { name: "Dr. Vikram Seth", role: "Advanced Physics", company: "IIT Delhi", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&h=600&fit=crop", companyLogo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/fd/Indian_Institute_of_Technology_Delhi_Logo.svg/200px-Indian_Institute_of_Technology_Delhi_Logo.svg.png" },
              { name: "Prof. Shweta Kulkarni", role: "Cell Biology", company: "IIT Guwahati", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&h=600&fit=crop", companyLogo: "https://upload.wikimedia.org/wikipedia/en/thumb/1/12/IIT_Guwahati_Logo.svg/200px-IIT_Guwahati_Logo.svg.png" },
              { name: "Dr. Neha Goyal", role: "Nuclear Chemistry", company: "IIT Roorkee", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=600&fit=crop", companyLogo: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Indian_Institute_of_Technology_Roorkee_logo.png/200px-Indian_Institute_of_Technology_Roorkee_logo.png" },
              { name: "Dr. Rajesh Raman", role: "Computational Science", company: "IIT Kanpur", img: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=500&h=600&fit=crop", companyLogo: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a3/IIT_Kanpur_Logo.svg/200px-IIT_Kanpur_Logo.svg.png" }
            ].map((mentor, mIdx) => (
              <div key={`${listIdx}-${mIdx}`} className="flex-shrink-0 w-[240px] md:w-[280px] bg-white rounded-[2rem] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.03)] border border-slate-100/80 transform transition-all hover:scale-[1.03] duration-700 hover:shadow-2xl">
                <div className="h-[280px] md:h-[340px] overflow-hidden bg-slate-100">
                  <img src={mentor.img} alt={mentor.name} className="w-full h-full object-cover grayscale-[50%] hover:grayscale-0 transition-all duration-1000 ease-out" />
                </div>
                <div className="p-7 relative">
                  <div className="mb-4">
                    <h4 className="font-black text-slate-900 text-lg leading-[1.1] whitespace-normal">{mentor.name}</h4>
                  </div>
                  <div className="flex justify-between items-center mb-6">
                    <div className="inline-flex py-1 px-3 bg-blue-50 text-blue-600 rounded-lg text-[9px] font-black uppercase tracking-widest leading-none">
                      {mentor.role}
                    </div>
                    <a 
                      href={`https://www.linkedin.com/search/results/all/?keywords=${encodeURIComponent(mentor.name + ' ' + mentor.company)}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[#0a66c2]/80 hover:text-[#0a66c2] transition-all hover:scale-110 flex-shrink-0"
                    >
                      <svg className="w-6 h-6 fill-current" viewBox="0 0 32 32">
                        <path d="M29 0h-26c-1.65 0-3 1.35-3 3v26c0 1.65 1.35 3 3 3h26c1.65 0 3-1.35 3-3v-26c0-1.65-1.35-3-3-3zM9.5 27h-4.5v-13h4.5v13zM7.25 12.125c-1.375 0-2.5-1.125-2.5-2.5s1.125-2.5 2.5-2.5 2.5 1.125 2.5 2.5-1.125 2.5-2.5 2.5zM27 27h-4.5v-6.875c0-1.625-0.031-3.75-2.25-3.75-2.25 0-2.594 1.75-2.594 3.625v7h-4.5v-13h4.312v1.781h0.063c0.625-1.094 2.125-2.25 4.312-2.25 4.625 0 5.469 2.875 5.469 6.625v6.844z"></path>
                      </svg>
                    </a>
                  </div>
                  <div className="flex justify-between items-center mt-2 h-10 bg-[#f8faff] px-4 rounded-2xl border border-slate-50 group/badge">
                    <span className="text-[10px] font-extrabold text-slate-500 uppercase tracking-widest truncate flex-1 mr-3 group-hover/badge:text-blue-600 transition-colors">{mentor.company}</span>
                    <div className="h-7 w-7 flex-shrink-0">
                      <img 
                        src={mentor.companyLogo} 
                        alt={mentor.company} 
                        className="h-full w-full object-contain filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" 
                        onError={(e) => { e.target.style.display = 'none'; }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  </section>
);

export const FAQSection = () => {
   const [openIndex, setOpenIndex] = useState(2); // Set 3rd one open by default as in image

   const faqs = [
      { 
         q: "Are the ScienceLMS courses suitable for Class 10, 11, and 12 State Board syllabus?", 
         a: "Absolutely. Our courses are meticulously designed to align with the Class 10, 11, and 12 Science curriculum. We focus on ensuring that students master every concept required for their board exams while building a strong foundation for higher scientific studies." 
      },
      { 
         q: "How are the classes conducted at ScienceLMS for high school science subjects?", 
         a: "We offer both LIVE online interactive sessions and intensive weekend offline laboratory-style sessions. Our classes follow a conceptual pedagogy that starts with 'Why' and 'How' of scientific principles, using immersive 3D visualizations and real-world experiments to make learning intuitive." 
      },
      { 
         q: "What makes ScienceLMS the best choice for Class 10-12 Science students?", 
         a: "ScienceLMS stands out with its tech-driven learning environment specifically tailored for high school science. With a strong faculty of subject matter experts, small batch sizes for personalized attention, and regular conceptual feedback, we cater to the unique learning needs of students in their most critical academic years. Our comprehensive study materials are regularly updated to reflect the latest board patterns, and our flexible learning options make world-class science education accessible to all." 
      },
      { 
         q: "How can I find ScienceLMS learning centres for my standard?", 
         a: "You can find our specialized learning centers across major cities. Visit our 'Centres' section on the website to find the nearest ScienceLMS campus that offers dedicated modules for Class 10, 11, or 12. All our centres provide a high standard of mentored learning and peer collaboration." 
      },
      { 
         q: "What are the success rates of students in their board exams after joining ScienceLMS?", 
         a: "Our students consistently achieve outstanding results in their Class 10 and 12 board examinations, with a high percentage of students scoring above 95% in Physics, Chemistry, and Biology. Our focus on conceptual understanding ensures that students don't just memorize, but actually excel in their academic journey." 
      }
   ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-black text-[#0f172a] mb-16 tracking-tight">
           Frequently <span className="text-[#ff6b35]">Asked Questions</span>
        </h2>
        
        <div className="space-y-4">
           {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className={`rounded-xl border-2 transition-all duration-300 ${
                  openIndex === idx ? 'border-[#ff6b35] bg-white' : 'border-[#f1f5f9] bg-[#f8fafc]'
                }`}
              >
                 <button 
                   onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                   className="w-full text-left p-6 md:p-8 flex items-center justify-between gap-4 group"
                 >
                    <span className="text-lg md:text-xl font-bold text-slate-800 group-hover:text-slate-900 transition-colors tracking-tight">
                       {faq.q}
                    </span>
                    <div className={`flex-shrink-0 w-8 md:w-10 h-8 md:h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                       openIndex === idx ? 'bg-[#ff6b35] text-white rotate-180' : 'bg-slate-300 text-slate-600'
                    }`}>
                       <ChevronDown size={20} strokeWidth={3} />
                    </div>
                 </button>
                 
                 <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openIndex === idx ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                 }`}>
                    <div className="p-6 md:p-8 pt-0 border-t-0 text-slate-500 font-medium text-[15px] md:text-lg leading-relaxed max-w-[95%]">
                       {faq.a}
                    </div>
                 </div>
              </div>
           ))}
        </div>
      </div>
    </section>
  );
};

export const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setVisibleItems(1);
      else if (window.innerWidth < 1024) setVisibleItems(2);
      else setVisibleItems(3);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const stories = [
    { name: "Arya Verma", score: "98.4% CBSE XII", text: "I had a great experience at ScienceLMS. All my concepts were clear and I felt confident while appearing for the board exams.", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop" },
    { name: "Akshat Kumar", score: "98.2% CBSE XII", text: "The LIVE Interactive classes with visual explanations helped me learn and retain all the topics better.", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop" },
    { name: "Ritika Kumari", score: "97.8% CBSE XII", text: "The fact that I could learn every topic at my own pace was extremely helpful. The Master Teachers supported me every step of the way.", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop" },
    { name: "Sameer Malhotra", score: "99.0% Class 12 Science", text: "The problem-solving techniques shared in the advanced physics sessions were crucial. My confidence in tackling tough questions has doubled.", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop" },
    { name: "Ananya Deshpande", score: "99.2% Class 12 Science", text: "Biology was my nightmare until I joined these classes. The 3D visual models made complex anatomical concepts look so simple and clear.", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop" },
    { name: "Kunal Jha", score: "98.6% State Board", text: "The doubt clearing sessions were always available when I needed them. I never felt left behind during my entire board preparation journey.", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop" },
    { name: "Ishan Sharma", score: "99.2% Science Topper", text: "The research-oriented approach to science here is what sets it apart. It's not just about exams; it's about understanding the 'why' behind everything.", img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=200&h=200&fit=crop" },
    { name: "Meera Reddy", score: "98.8% Chemistry Topper", text: "Organic chemistry equations became logically intuitive. I didn't have to memorize a single reaction because the underlying mechanisms were so well explained.", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop" },
    { name: "Vivek Gupta", score: "99.5% Physics Topper", text: "Achieving a top rank in the Physics Board Exams wouldn't have been possible without the high-level conceptual grounding I received from the mentors here.", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop" },
  ];

  const totalSlides = stories.length - (visibleItems - 1);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= totalSlides - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  return (
    <div className="relative group/slider">
      {/* Carousel Navigation Arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 z-20 w-12 h-12 bg-[#0f172a] text-white rounded-full flex items-center justify-center shadow-xl opacity-0 group-hover/slider:opacity-100 group-hover/slider:-translate-x-1/2 transition-all duration-300 hover:bg-blue-600"
      >
        <ChevronRight className="rotate-180 w-6 h-6" />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 z-20 w-12 h-12 bg-[#0f172a] text-white rounded-full flex items-center justify-center shadow-xl opacity-0 group-hover/slider:opacity-100 group-hover/slider:translate-x-1/2 transition-all duration-300 hover:bg-blue-600"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Carousel Content Container */}
      <div className="overflow-hidden px-4 md:px-0">
        <motion.div 
          className="flex"
          animate={{ x: `-${currentIndex * (100 / visibleItems)}%` }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {stories.map((item, i) => (
            <div key={i} className={`min-w-[100%] md:min-w-[50%] lg:min-w-[33.333%] px-2 md:px-3`}>
              <div className="bg-white p-6 md:p-10 rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-slate-50 flex flex-col h-full min-h-[340px] md:min-h-[380px]">
                <p className="text-[#334155] text-lg font-medium leading-[1.6] mb-12 flex-grow">
                  "{item.text}"
                </p>

                <div className="flex items-center gap-4 mt-auto">
                  <img src={item.img} alt={item.name} className="w-14 h-14 rounded-full object-cover filter grayscale" />
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2 mb-0.5">
                      <h4 className="font-bold text-[#0f172a] text-lg">{item.name}</h4>
                      <span className="bg-[#ff6b35] text-white text-[10px] font-black uppercase px-2 py-0.5 rounded-md tracking-wider">Student</span>
                    </div>
                    <p className="text-slate-400 text-sm font-bold uppercase tracking-wide">{item.score}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-2 mt-12">
        {Array.from({ length: totalSlides }).map((_, dotIdx) => (
          <button
            key={dotIdx}
            onClick={() => setCurrentIndex(dotIdx)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-500 ${dotIdx === currentIndex ? 'bg-[#0f172a] w-5' : 'bg-slate-200 hover:bg-slate-300'}`}
          />
        ))}
      </div>
    </div>
  );
};

export const TestimonialsSection = () => (
  <section className="pt-36 pb-24 bg-white relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 relative z-10">
      {/* Header with Icon and Wavy Underline */}
      <div className="mb-20">
         <div className="flex items-center gap-6">
            <div className="w-14 h-14 md:w-20 md:h-20 rounded-full overflow-hidden flex-shrink-0 shadow-lg border-2 border-slate-50 flex items-center justify-center bg-blue-100">
               {/* Use a lightbulb or similar scientific inspiration icon if the asset is missing */}
               <Star className="text-blue-600 w-8 h-8 md:w-10 md:h-10 fill-current" />
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0f172a] leading-tight flex flex-wrap items-center gap-x-3">
               Stories that 
               <span className="relative inline-block text-[#ff5733]">
                  inspire
                  <svg className="absolute -bottom-2 left-0 w-full" height="10" viewBox="0 0 100 10" preserveAspectRatio="none">
                     <path d="M0 5 Q 25 0, 50 5 T 100 5" fill="none" stroke="#ffd43b" strokeWidth="4" strokeLinecap="round" />
                  </svg>
               </span>
            </h2>
         </div>
      </div>

      <TestimonialSlider />
    </div>
  </section>
);

export const FooterSection = () => (
  <footer className="w-full font-sans border-t-4 border-slate-200">
    {/* Top Section */}
    <div className="bg-[#F4F9FF] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap lg:flex-nowrap justify-between gap-12 lg:gap-8">
          
          {/* BRAND COLUMN */}
          <div className="w-full lg:w-[25%] mb-10 lg:mb-0">
             <Link 
               to="/" 
               onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
               className="flex items-center gap-2 mb-6 group"
             >
                <div className="text-blue-600 transform group-hover:scale-110 transition-transform duration-300">
                   <Atom size={40} strokeWidth={2.5} />
                </div>
                <span className="font-black text-2xl tracking-tighter text-slate-900 group-hover:text-blue-600 transition-colors">
                   Science<span className="text-blue-600">LMS</span>
                </span>
             </Link>
             <p className="text-slate-600 font-medium text-[15px] leading-relaxed mb-8 max-w-[280px]">
                Empowering India's next generation of scientists with immersive, conceptual learning and personalized mentor guidance.
             </p>
          </div>

          <div className="flex flex-wrap flex-1 justify-between gap-8 md:gap-4">
            
            {/* COURSE OFFERINGS */}
            <div className="w-full sm:w-[45%] md:w-[28%] lg:w-auto">
              <h4 className="font-bold text-slate-900 mb-5 text-[13px] uppercase tracking-wide">COURSE OFFERINGS</h4>
              <ul className="space-y-3.5 text-sm text-slate-800 font-medium tracking-tight">
                <li><Link to="/live-class" className="hover:text-blue-600 transition-colors">Live Classes</Link></li>
                <li><Link to="/live-classes" className="hover:text-blue-600 transition-colors">Online Classes</Link></li>
                <li><Link to="/mentored-programs" className="hover:text-blue-600 transition-colors">Mentored Programs</Link></li>
                <li><Link to="/video-courses" className="hover:text-blue-600 transition-colors">Video courses</Link></li>
                <li><Link to="/microcourses" className="hover:text-blue-600 transition-colors">Microcourses</Link></li>
              </ul>
            </div>

            {/* CLASSES */}
            <div className="w-full sm:w-[45%] md:w-[15%] lg:w-auto">
              <h4 className="font-bold text-slate-900 mb-5 text-[13px] uppercase tracking-wide">CLASSES</h4>
              <ul className="space-y-3.5 text-sm text-slate-800 font-medium tracking-tight">
                <li><Link to="#" className="hover:text-blue-600 transition-colors">Class 10</Link></li>
                <li><Link to="#" className="hover:text-blue-600 transition-colors">Class 11</Link></li>
                <li><Link to="#" className="hover:text-blue-600 transition-colors">Class 12</Link></li>
              </ul>
            </div>

            {/* SUBJECTS column */}
            <div className="w-full sm:w-[45%] md:w-[15%] lg:w-auto">
              <h4 className="font-bold text-slate-900 mb-5 text-[13px] uppercase tracking-wide">SUBJECTS</h4>
              <ul className="space-y-3.5 text-sm text-slate-800 font-medium tracking-tight">
                <li><Link to="#" className="hover:text-blue-600 transition-colors">Biology</Link></li>
                <li><Link to="#" className="hover:text-blue-600 transition-colors">Physics</Link></li>
                <li><Link to="#" className="hover:text-blue-600 transition-colors">Chemistry</Link></li>
              </ul>
            </div>

            {/* INFO COLUMN */}
            <div className="w-full sm:w-[45%] md:w-[15%] lg:w-auto">
              <h4 className="font-bold text-slate-900 mb-5 text-[13px] uppercase tracking-wide">INFO</h4>
              <ul className="space-y-3.5 text-sm text-slate-800 font-medium tracking-tight">
                <li><Link to="/about" className="hover:text-blue-600 transition-colors">About us</Link></li>
                <li><Link to="/parents" className="hover:text-blue-600 transition-colors">Parents Orientation</Link></li>
              </ul>
            </div>

            {/* CONTACT US Column */}
            <div className="w-full sm:w-[45%] md:w-[45%] lg:w-auto">
              <h4 className="font-bold text-slate-900 mb-5 text-[13px] uppercase tracking-wide">CONTACT US</h4>
              <ul className="space-y-4 text-sm text-slate-800 mb-6 font-medium tracking-tight">
                <li className="flex items-center gap-2.5">
                  <svg className="w-4 h-4 text-slate-700" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.036 11.036 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg>
                  <a href="tel:+919600100090" className="hover:text-blue-600 transition-colors">+91 96001 00090</a>
                </li>
                <li className="flex items-center gap-2.5">
                  <svg className="w-4 h-4 text-slate-700" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.036 11.036 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg>
                  <a href="tel:+919600100020" className="hover:text-blue-600 transition-colors">+91 96001 00020</a>
                </li>
                <li className="flex items-center gap-2.5">
                  <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                  <a href="mailto:contact@sciencelms.com" className="hover:text-blue-600 transition-colors">contact@sciencelms.com</a>
                </li>
              </ul>
            </div>

            {/* ADDRESS */}
            <div className="w-full lg:w-[25%] mt-4 lg:mt-0">
              <h4 className="font-bold text-slate-900 mb-5 text-[13px] uppercase tracking-wide">ADDRESS</h4>
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 bg-white rounded flex items-center justify-center p-1 border border-slate-200 shadow-sm group-hover:border-blue-200 transition-colors">
                    <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path></svg>
                  </div>
                </div>
                <p className="text-[15px] text-slate-600 leading-relaxed font-medium">
                  3, Bhim Sena Building Flat 3B, 1st Floor,<br />
                  Murrays Gate Rd, Alwarpet,<br />
                  Chennai, Tamil Nadu 600018.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>

    {/* Bottom Bar */}
    <div className="bg-black py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-[12px] text-slate-400 gap-y-4">
          
          <div className="font-medium flex flex-col items-center md:items-start tracking-tight">
            <div className="flex gap-2 mb-1">
              <Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link> | 
              <Link to="/terms" className="hover:text-white transition-colors">Terms & conditions</Link>
            </div>
            <p className="opacity-80">© ScienceLMS, All rights reserved.</p>
          </div>

          <div className="flex gap-5 items-center">
            <a href="#" className="text-slate-400 hover:text-white transition-all transform hover:scale-110">
              <svg className="w-5 h-5 mx-0.5" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
            </a>
            <a href="#" className="text-slate-400 hover:text-white transition-all transform hover:scale-110">
              <svg className="w-[20px] h-[20px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="#" className="text-slate-400 hover:text-white transition-all transform hover:scale-110">
              <svg className="w-[20px] h-[20px]" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
            </a>
            <a href="#" className="text-slate-400 hover:text-white transition-all transform hover:scale-110">
              <svg className="w-[24px] h-[24px]" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 0 0-2.122 2.136C0 8.07 0 12 0 12s0 3.93.501 5.814a3.016 3.016 0 0 0 2.122 2.136c1.872.55 9.377.55 9.377.55s7.505 0 9.377-.55a3.016 3.016 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);
