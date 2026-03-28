import React, { useState } from 'react';
import { ChevronRight, PlayCircle, Star, Atom, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

export const TeachersSection = () => (
  <section className="py-20 bg-white border-t border-slate-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-16">Learn from India's Best Teachers</h2>
      <div className="relative flex items-center justify-center group">
        <button className="absolute left-0 md:-left-4 z-10 p-3 bg-white rounded-full shadow-lg hover:bg-slate-50 opacity-0 group-hover:opacity-100 transition-opacity">
          <ChevronRight className="w-6 h-6 rotate-180 text-slate-800" />
        </button>
        <div className="flex overflow-x-auto gap-4 md:gap-8 px-4 py-4 w-full justify-start md:justify-center snap-x" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {[
            { name: "Prof. Balaji Sampath", subject: "Physics", img: "https://i.pravatar.cc/300?img=11" },
            { name: "Prof. S. Gomathi", subject: "Physics", img: "https://i.pravatar.cc/300?img=5" },
            { name: "Prof. D.P. Sankaran", subject: "Chemistry", img: "https://i.pravatar.cc/300?img=12" },
            { name: "Prof. S. Santhanam", subject: "Chemistry", img: "https://i.pravatar.cc/300?img=13" },
            { name: "Prof. K.S. Balaji", subject: "Physics", img: "https://i.pravatar.cc/300?img=14" }
          ].map((teacher, idx) => (
            <div key={idx} className="flex flex-col items-center flex-shrink-0 w-40 md:w-52 snap-center">
              <div className="w-36 h-36 md:w-48 md:h-48 rounded-full overflow-hidden border-[3px] border-slate-100 p-1 mb-6 shadow-sm">
                <img src={teacher.img} alt={teacher.name} className="w-full h-full object-cover rounded-full" />
              </div>
              <h4 className="font-extrabold text-slate-900 text-center text-base md:text-lg">{teacher.name}</h4>
              <p className="text-red-600 font-bold italic text-center text-sm md:text-base mt-1">{teacher.subject}</p>
            </div>
          ))}
        </div>
        <button className="absolute right-0 md:-right-4 z-10 p-3 bg-white rounded-full shadow-lg hover:bg-slate-50 opacity-0 group-hover:opacity-100 transition-opacity">
          <ChevronRight className="w-6 h-6 text-slate-800" />
        </button>
      </div>
      {/* Pagination Dots */}
      <div className="flex justify-center gap-2 mt-10">
         <div className="w-2.5 h-2.5 rounded-full bg-slate-400 cursor-pointer"></div>
         <div className="w-2.5 h-2.5 rounded-full bg-slate-200 cursor-pointer hover:bg-slate-300"></div>
         <div className="w-2.5 h-2.5 rounded-full bg-slate-200 cursor-pointer hover:bg-slate-300"></div>
      </div>
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

export const TestimonialsSection = () => (
  <section className="py-20 bg-slate-50 border-t border-slate-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-16">What Our Students Say...</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Testimonial 1 */}
        <div className="bg-white rounded-xl shadow-lg border border-slate-100 overflow-hidden group">
          <div className="relative h-56 bg-gradient-to-br from-blue-500 to-blue-700 p-6 flex flex-col justify-between">
            <h3 className="text-white font-serif italic text-2xl font-bold">ScienceLMS <span className="text-xs uppercase font-sans font-normal tracking-wide ml-2 bg-blue-800/40 px-2 py-0.5 rounded">IIT JEE • CBSE • NEET</span></h3>
            <div className="text-white/90 font-medium text-lg leading-snug w-2/3">"Understanding concepts comes first before actually solving problems"</div>
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform pointer-events-auto cursor-pointer">
                <PlayCircle className="w-8 h-8 text-white fill-current" />
              </div>
            </div>
            {/* Funny Emoji */}
            <div className="absolute right-4 top-1/2 -translate-y-1/2">
                <div className="text-4xl filter drop-shadow animate-bounce">🤪</div>
            </div>
            {/* Student Image */}
            <div className="absolute -bottom-4 right-6 w-24 h-24 rounded-tl-3xl rounded-br-3xl bg-blue-900 overflow-hidden border-4 border-white shadow-md">
                 <img src="https://i.pravatar.cc/300?img=42" className="w-full h-full object-cover" alt="Student" />
            </div>
            {/* Thumbs up */}
            <div className="absolute -bottom-2 left-10 text-white bg-blue-600 rounded-full p-1 border-2 border-white shadow-sm z-10 w-8 h-8 flex items-center justify-center">👍</div>
            {/* Outline curve element */}
            <div className="absolute bottom-4 right-1/4 w-32 h-32 border-t-2 border-r-2 border-white/40 rounded-tr-3xl"></div>
          </div>
          <div className="p-6 pt-8 pb-6 bg-white flex flex-col border-t border-slate-100">
             <div className="font-bold text-slate-900 text-lg">Keerthana Kasi</div>
             <div className="font-exrabold text-slate-800 text-sm mt-1">AIR 12 TN State First Rank in NEET</div>
          </div>
        </div>

        {/* Testimonial 2 */}
        <div className="bg-white rounded-xl shadow-lg border border-slate-100 overflow-hidden group">
          <div className="relative h-56 bg-gradient-to-br from-blue-500 to-blue-700 p-6 flex flex-col justify-between">
            <h3 className="text-white font-serif italic text-2xl font-bold">ScienceLMS <span className="text-xs uppercase font-sans font-normal tracking-wide ml-2 bg-blue-800/40 px-2 py-0.5 rounded">IIT JEE • CBSE • NEET</span></h3>
            <div className="text-white/90 font-medium text-lg leading-snug w-2/3">"Found myself solving harder problems easily as I progressed along"</div>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform pointer-events-auto cursor-pointer">
                <PlayCircle className="w-8 h-8 text-white fill-current" />
              </div>
            </div>
            <div className="absolute right-4 top-1/2 -translate-y-1/2">
                <div className="text-4xl filter drop-shadow animate-bounce delay-100">😜</div>
            </div>
            <div className="absolute -bottom-4 right-6 w-24 h-24 rounded-tl-3xl rounded-br-3xl bg-blue-900 overflow-hidden border-4 border-white shadow-md">
                 <img src="https://i.pravatar.cc/300?img=11" className="w-full h-full object-cover" alt="Student" />
            </div>
             <div className="absolute -bottom-2 left-10 text-white bg-blue-600 rounded-full p-1 border-2 border-white shadow-sm z-10 w-8 h-8 flex items-center justify-center">👍</div>
            <div className="absolute bottom-4 right-1/4 w-32 h-32 border-t-2 border-r-2 border-white/40 rounded-tr-3xl"></div>
          </div>
          <div className="p-6 pt-8 pb-6 bg-white flex flex-col border-t border-slate-100">
             <div className="font-bold text-slate-900 text-lg">Bhadresh</div>
             <div className="font-bold text-slate-800 text-sm mt-1">99.07% in JEE Mains</div>
          </div>
        </div>

        {/* Testimonial 3 */}
        <div className="bg-white rounded-xl shadow-lg border border-slate-100 overflow-hidden group">
          <div className="relative h-56 bg-gradient-to-br from-blue-500 to-blue-700 p-6 flex flex-col justify-between">
            <h3 className="text-white font-serif italic text-2xl font-bold">ScienceLMS <span className="text-xs uppercase font-sans font-normal tracking-wide ml-2 bg-blue-800/40 px-2 py-0.5 rounded">IIT JEE • CBSE • NEET</span></h3>
            <div className="text-white/90 font-medium text-lg leading-snug w-2/3">"Helped me love the subject and top my exams"</div>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform pointer-events-auto cursor-pointer">
                <PlayCircle className="w-8 h-8 text-white fill-current" />
              </div>
            </div>
            <div className="absolute right-4 top-1/2 -translate-y-1/2">
                <div className="text-4xl filter drop-shadow animate-bounce delay-200">🥸</div>
            </div>
            <div className="absolute -bottom-4 right-6 w-24 h-24 rounded-tl-3xl rounded-br-3xl bg-blue-900 overflow-hidden border-4 border-white shadow-md">
                 <img src="https://i.pravatar.cc/300?img=5" className="w-full h-full object-cover" alt="Student" />
            </div>
             <div className="absolute -bottom-2 left-10 text-white bg-blue-600 rounded-full p-1 border-2 border-white shadow-sm z-10 w-8 h-8 flex items-center justify-center">👍</div>
            <div className="absolute bottom-4 right-1/4 w-32 h-32 border-t-2 border-r-2 border-white/40 rounded-tr-3xl"></div>
          </div>
          <div className="p-6 pt-8 pb-6 bg-white flex flex-col border-t border-slate-100">
             <div className="font-bold text-slate-900 text-lg">Gayathri Rajesh</div>
             <div className="font-bold text-slate-800 text-sm mt-1">AIR 7945 in JEE Advanced</div>
          </div>
        </div>

      </div>
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
                <p className="text-[13px] text-slate-800 leading-relaxed font-semibold">
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
