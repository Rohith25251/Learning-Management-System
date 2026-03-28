import React from 'react';
import { Upload, Video, Users, MessageSquare, PieChart, Calendar, ChevronRight } from 'lucide-react';

const MentorDashboard = () => {
  return (
    <div className="min-h-screen bg-slate-50 p-6 md:p-10">
      <div className="max-w-7xl mx-auto">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
           <div>
              <h1 className="text-3xl font-bold text-slate-900">Welcome Back, Dr. Sarah!</h1>
              <p className="text-slate-600">Here's what's happening in your courses today.</p>
           </div>
           <div className="flex gap-4">
              <button className="bg-primary-600 text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"><Upload size={20}/> Upload Content</button>
              <button className="bg-white border border-slate-200 text-slate-700 px-6 py-3 rounded-xl font-bold hover:bg-slate-50 transition-colors">Calendar</button>
           </div>
        </header>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          {[
            { label: 'Enrolled Students', value: '1,240', icon: <Users className="text-blue-500"/> },
            { label: 'Course Views', value: '45.2K', icon: <Video className="text-emerald-500"/> },
            { label: 'Unresolved Doubts', value: '12', icon: <MessageSquare className="text-rose-500"/> },
            { label: 'Total Earnings', value: '₹12,400', icon: <PieChart className="text-violet-500"/> },
          ].map((stat, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4">
              <div className="p-3 bg-slate-50 rounded-xl">{stat.icon}</div>
              <div>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">{stat.label}</p>
                <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
           {/* Course Management */}
           <div className="lg:col-span-2 space-y-6">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                 <div className="flex justify-between items-center mb-8">
                    <h3 className="text-xl font-bold text-slate-900">My Active Courses</h3>
                    <button className="text-primary-600 font-bold text-sm">See All</button>
                 </div>
                 <div className="space-y-4">
                    {[
                      { title: '12th Physics - Electrostatics', students: 450, lessons: 12, progress: 85 },
                      { title: '11th Physics - Optics', students: 320, lessons: 15, progress: 40 },
                    ].map((course, i) => (
                      <div key={i} className="group border border-slate-100 rounded-xl p-4 hover:border-primary-200 transition-colors">
                         <div className="flex justify-between items-start mb-4">
                            <div>
                               <h4 className="font-bold text-slate-800">{course.title}</h4>
                               <p className="text-xs text-slate-500 font-medium">{course.students} Students • {course.lessons} Lessons</p>
                            </div>
                            <button className="text-slate-400 group-hover:text-primary-600"><ChevronRight/></button>
                         </div>
                         <div className="bg-slate-100 h-2 rounded-full overflow-hidden">
                            <div className="bg-primary-500 h-full" style={{ width: `${course.progress}%` }}></div>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                 <h3 className="text-xl font-bold text-slate-900 mb-8">Recent Student Activity</h3>
                 <div className="space-y-6">
                    {[
                      { user: 'Rahul Sharma', action: 'asked a doubt in Electrostatics', time: '2 mins ago' },
                      { user: 'Priya Verma', action: 'completed Quiz: Electric Field', time: '15 mins ago' },
                      { user: 'Amit Sahni', action: 'enrolled in 11th Physics', time: '1 hour ago' },
                    ].map((node, i) => (
                      <div key={i} className="flex gap-4 items-start">
                         <div className="w-10 h-10 bg-slate-200 rounded-full flex-shrink-0"></div>
                         <div>
                            <p className="text-sm text-slate-800"><span className="font-bold">{node.user}</span> {node.action}</p>
                            <p className="text-xs text-slate-400 font-medium">{node.time}</p>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>
           </div>

           {/* Sidebar Info */}
           <div className="space-y-10">
              <div className="bg-primary-900 text-white p-8 rounded-2xl shadow-xl relative overflow-hidden">
                 <div className="relative z-10">
                    <h3 className="text-xl font-bold mb-4">Upcoming Live Class</h3>
                    <div className="space-y-4 mb-6">
                       <div className="flex items-center gap-3">
                          <Calendar size={18} className="text-primary-300"/>
                          <span className="text-sm font-medium">Tomorrow, 10:30 AM</span>
                       </div>
                       <div className="flex items-center gap-3">
                          <Video size={18} className="text-primary-300"/>
                          <span className="text-sm font-medium">Topic: Gauss's Law</span>
                       </div>
                    </div>
                    <button className="w-full bg-primary-500 hover:bg-primary-400 py-3 rounded-xl font-bold transition-all">Prepare Room</button>
                 </div>
                 <div className="absolute -right-6 -bottom-6 opacity-20">
                    <Video size={120}/>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default MentorDashboard;
