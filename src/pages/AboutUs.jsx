import React from 'react';
import { Target, Users, BookOpen, Award } from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      <section className="bg-white py-24 relative overflow-hidden">
         <div className="max-w-7xl mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-1/2">
               <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-8 leading-tight">Revolutionizing <span className="text-primary-600">Science Education</span> for Everyone.</h1>
               <p className="text-xl text-slate-600 leading-relaxed mb-10">We started ScienceLMS with a simple mission: to make high-quality science education accessible, affordable, and engaging for state board students across the country.</p>
               <div className="flex gap-4">
                  <div className="text-center bg-slate-50 p-6 rounded-2xl border border-slate-100 flex-1">
                     <p className="text-3xl font-extrabold text-primary-600">2020</p>
                     <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Founded</p>
                  </div>
                  <div className="text-center bg-slate-50 p-6 rounded-2xl border border-slate-100 flex-1">
                     <p className="text-3xl font-extrabold text-primary-600">50K+</p>
                     <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Students</p>
                  </div>
               </div>
            </div>
            <div className="md:w-1/2">
               <img src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1000&q=80" alt="About Us" className="rounded-3xl shadow-2xl rotate-2" />
            </div>
         </div>
      </section>

      <section className="py-24 bg-slate-900 text-white">
         <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
               <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Core Values</h2>
               <p className="text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">The principles that guide us every day in our pursuit of educational excellence.</p>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
               {[
                  { title: 'Student First', desc: 'Every decision we make starts with how it benefits the student.', icon: <Target className="text-primary-500"/> },
                  { title: 'Expert Guided', desc: 'Learning from those who have walked the path to success.', icon: <Users className="text-primary-500"/> },
                  { title: 'Quality Content', desc: 'Syllabus-aligned, deeply researched, and easy to grasp.', icon: <BookOpen className="text-primary-500"/> },
                  { title: 'Excellence', desc: 'Striving for the best results and continuous improvement.', icon: <Award className="text-primary-500"/> },
               ].map((val, i) => (
                  <div key={i} className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-primary-500 transition-colors group">
                     <div className="mb-6 p-4 rounded-xl bg-slate-900 inline-block group-hover:scale-110 transition-transform">{val.icon}</div>
                     <h3 className="text-xl font-bold mb-4">{val.title}</h3>
                     <p className="text-sm text-slate-400 leading-relaxed font-light">{val.desc}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>
    </div>
  );
};

export default AboutUs;
