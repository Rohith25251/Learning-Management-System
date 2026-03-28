import React from 'react';
import { Book, Play, CheckCircle, Clock, Trophy, Target, ChevronRight, Star } from 'lucide-react';

const MenteeDashboard = () => {
  return (
    <div className="min-h-screen bg-slate-50 p-6 md:p-10">
      <div className="max-w-7xl mx-auto">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
           <div>
              <h1 className="text-3xl font-bold text-slate-900">Happy Learning, Rahul!</h1>
              <p className="text-slate-600">You're on a <span className="text-primary-600 font-bold">5-day streak!</span> Keep it up.</p>
           </div>
           <div className="flex bg-white p-2 rounded-2xl shadow-sm border border-slate-100 gap-4">
              <div className="px-4 py-2 text-center">
                 <p className="text-2xl font-bold text-slate-900">12</p>
                 <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Courses</p>
              </div>
              <div className="w-px h-8 bg-slate-200 self-center"></div>
              <div className="px-4 py-2 text-center">
                 <p className="text-2xl font-bold text-slate-900">45</p>
                 <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Points</p>
              </div>
           </div>
        </header>

        <div className="grid lg:grid-cols-3 gap-10">
           {/* Progress & Courses */}
           <div className="lg:col-span-2 space-y-10">
              {/* Continue Watching */}
              <div className="bg-primary-600 text-white p-8 rounded-3xl shadow-xl relative overflow-hidden flex flex-col md:flex-row gap-8 items-center">
                 <div className="relative z-10 flex-1">
                    <p className="text-primary-200 font-semibold mb-2 uppercase text-xs tracking-widest">Continue Watching</p>
                    <h2 className="text-2xl font-bold mb-4">Electric Charges & Fields: Coulomb's Law</h2>
                    <div className="flex items-center gap-4 mb-6">
                       <div className="flex-1 bg-white/20 h-2 rounded-full overflow-hidden">
                          <div className="bg-white h-full" style={{ width: '65%' }}></div>
                       </div>
                       <span className="text-sm font-bold">65%</span>
                    </div>
                    <button className="bg-white text-primary-600 px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-slate-50 transition-all shadow-lg"><Play size={18} fill="currentColor"/> Resume Lesson</button>
                 </div>
                 <div className="w-48 h-32 bg-primary-700/50 rounded-2xl border border-white/10 flex items-center justify-center relative z-10">
                    <Play size={40} className="text-white/40"/>
                 </div>
              </div>

              {/* My Enrolled Courses */}
              <div>
                 <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-bold text-slate-900">My Courses</h3>
                    <button className="text-primary-600 font-bold text-sm">View All</button>
                 </div>
                 <div className="grid md:grid-cols-2 gap-6">
                    {[
                      { title: '12th Physics Mastery', mentor: 'Dr. Sarah', progress: 45, color: 'bg-blue-500' },
                      { title: 'Organic Chemistry Basics', mentor: 'Prof. Amit', progress: 12, color: 'bg-emerald-500' },
                      { title: 'Human Anatomy Pro', mentor: 'Dr. Anjali', progress: 88, color: 'bg-rose-500' },
                      { title: 'Advanced Calculus', mentor: 'Prof. Gupta', progress: 0, color: 'bg-violet-500' },
                    ].map((course, i) => (
                      <div key={i} className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow cursor-pointer flex gap-4">
                         <div className={`w-16 h-16 ${course.color} rounded-xl flex-shrink-0 opacity-80 flex items-center justify-center`}><Book className="text-white"/></div>
                         <div className="flex-1 min-w-0">
                            <h4 className="font-bold text-slate-900 truncate">{course.title}</h4>
                            <p className="text-xs text-slate-500 mb-3">{course.mentor}</p>
                            <div className="flex items-center gap-2">
                               <div className="flex-1 bg-slate-100 h-1.5 rounded-full overflow-hidden">
                                  <div className={`${course.color} h-full`} style={{ width: `${course.progress}%` }}></div>
                               </div>
                               <span className="text-[10px] font-bold text-slate-400">{course.progress}%</span>
                            </div>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>
           </div>

           {/* Stats & Sidebar */}
           <div className="space-y-10">
              <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
                 <h3 className="font-bold text-slate-900 mb-8 border-b border-slate-50 pb-4">Performance Insights</h3>
                 <div className="space-y-8">
                    <div className="flex items-center justify-between">
                       <div className="flex items-center gap-3">
                          <div className="p-2 bg-blue-50 rounded-lg text-blue-500"><Target size={18}/></div>
                          <span className="text-sm font-semibold text-slate-700">Topic Mastery</span>
                       </div>
                       <span className="font-bold text-slate-900 text-sm">78%</span>
                    </div>
                    <div className="flex items-center justify-between">
                       <div className="flex items-center gap-3">
                          <div className="p-2 bg-yellow-50 rounded-lg text-yellow-500"><Star size={18}/></div>
                          <span className="text-sm font-semibold text-slate-700">Quiz Ave Score</span>
                       </div>
                       <span className="font-bold text-slate-900 text-sm">82/100</span>
                    </div>
                    <div className="flex items-center justify-between">
                       <div className="flex items-center gap-3">
                          <div className="p-2 bg-emerald-50 rounded-lg text-emerald-500"><CheckCircle size={18}/></div>
                          <span className="text-sm font-semibold text-slate-700">Task Completion</span>
                       </div>
                       <span className="font-bold text-slate-900 text-sm">92%</span>
                    </div>
                 </div>
                 <button className="w-full mt-10 bg-slate-50 text-slate-700 py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-slate-100 transition-colors">Download Full Report <ChevronRight size={16}/></button>
              </div>

              <div className="bg-gradient-to-br from-violet-600 to-indigo-700 p-8 rounded-3xl text-white shadow-xl">
                 <h3 className="text-xl font-bold mb-2">Unlock Premium</h3>
                 <p className="text-sm text-indigo-100 mb-6 font-light">Get unlimited access to 1-on-1 mentoring and specialized microcourses.</p>
                 <button className="w-full bg-white text-violet-600 py-3 rounded-xl font-bold shadow-lg hover:scale-105 transition-all">Upgrade Now</button>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default MenteeDashboard;
