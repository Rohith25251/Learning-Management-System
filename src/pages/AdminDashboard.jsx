import React from 'react';
import { Users, BookOpen, BarChart3, Settings, CheckCircle, XCircle, Download, Plus } from 'lucide-react';

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-slate-900 text-slate-300 flex flex-col">
        <div className="p-6 border-b border-slate-800">
          <h2 className="text-xl font-bold text-white">Admin Panel</h2>
        </div>
        <nav className="flex-1 p-4 space-y-2">
           <button className="w-full flex items-center gap-3 px-4 py-2 bg-primary-600 text-white rounded-lg"><BarChart3 size={18}/> Overview</button>
           <button className="w-full flex items-center gap-3 px-4 py-2 hover:bg-slate-800 rounded-lg transition-colors"><Users size={18}/> Users</button>
           <button className="w-full flex items-center gap-3 px-4 py-2 hover:bg-slate-800 rounded-lg transition-colors"><BookOpen size={18}/> Content</button>
           <button className="w-full flex items-center gap-3 px-4 py-2 hover:bg-slate-800 rounded-lg transition-colors"><Settings size={18}/> Settings</button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto p-10">
        <header className="flex justify-between items-center mb-10">
           <h1 className="text-3xl font-bold text-slate-900">Platform Overview</h1>
           <div className="flex gap-4">
              <button className="bg-white border border-slate-200 px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 hover:bg-slate-50 transition-colors"><Download size={16}/> Export Report</button>
              <button className="bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 hover:bg-primary-700 transition-colors shadow-md"><Plus size={16}/> Create Subject</button>
           </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          {[
            { label: 'Total Users', value: '12,482', change: '+12%', color: 'text-blue-600' },
            { label: 'Active Mentors', value: '450', change: '+5%', color: 'text-emerald-600' },
            { label: 'Content Hours', value: '1,200', change: '+18%', color: 'text-primary-600' },
            { label: 'Total Revenue', value: '₹5.2L', change: '+24%', color: 'text-violet-600' },
          ].map((stat, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <p className="text-sm font-medium text-slate-500 mb-2 uppercase tracking-wider">{stat.label}</p>
              <div className="flex items-end justify-between">
                <p className="text-3xl font-bold text-slate-900">{stat.value}</p>
                <p className={`text-xs font-bold ${stat.change.startsWith('+') ? 'text-emerald-500' : 'text-rose-500'}`}>{stat.change}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mentor Approvals */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden mb-10">
          <div className="p-6 border-b border-slate-50 flex justify-between items-center">
            <h3 className="font-bold text-slate-900 text-lg">Pending Mentor Approvals</h3>
            <button className="text-primary-600 text-sm font-semibold hover:underline">View All</button>
          </div>
          <table className="w-full text-left">
            <thead className="bg-slate-50 text-slate-500 text-xs uppercase tracking-wider">
              <tr>
                <th className="px-6 py-4">Mentor Name</th>
                <th className="px-6 py-4">Subject</th>
                <th className="px-6 py-4">Experience</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {[
                { name: 'Dr. Ramesh Kumar', sub: 'Physics', exp: '10 Years', status: 'Pending' },
                { name: 'Anjali Sharma', sub: 'Biology', exp: '5 Years', status: 'In Review' },
              ].map((user, i) => (
                <tr key={i} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-slate-200 rounded-full"></div>
                      <span className="font-semibold text-slate-900">{user.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600">{user.sub}</td>
                  <td className="px-6 py-4 text-sm text-slate-600">{user.exp}</td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-700 text-xs font-bold rounded-full">{user.status}</span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-2">
                       <button className="p-2 text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"><CheckCircle size={18}/></button>
                       <button className="p-2 text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"><XCircle size={18}/></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
