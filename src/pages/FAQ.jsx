import React, { useState } from 'react';
import { Plus, Minus, Search } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
       category: 'For Students',
       questions: [
          { q: 'How do I join a live class?', a: 'You can join a live class from your Dashboard under the "Live Classes" tab. Classes go live 5 minutes before the scheduled time.' },
          { q: 'Can I watch recordings of live classes later?', a: 'Yes! All live sessions are recorded and made available in your course library within 2 hours of completion.' },
          { q: 'Are microcourses suitable for board exam revision?', a: 'Absolutely. Microcourses are specifically designed for quick revision, focusing on diagrams, formula mastery, and numeric problems.' }
       ]
    },
    {
       category: 'For Parents',
       questions: [
          { q: "How can I track my child's progress?", a: "Parents get a separate login link to view weekly performance reports, attendance, and mentor feedback." },
          { q: 'Is there a money-back guarantee?', a: 'Yes, we offer a full refund if requested within the first 7 days of subscription, no questions asked.' }
       ]
    },
    {
       category: 'Technical Issues',
       questions: [
          { q: 'What is the minimum internet speed required?', a: 'A minimum of 2 Mbps is recommended for a smooth live class experience. Recordings can be watched at lower bandwidths.' }
       ]
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-6">Frequently Asked Questions</h1>
        <div className="relative">
           <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" size={20}/>
           <input type="text" className="w-full bg-white border border-slate-200 rounded-2xl px-12 py-4 focus:ring-2 focus:ring-primary-500 shadow-sm" placeholder="Search for a question..." />
        </div>
      </div>

      <div className="max-w-3xl mx-auto space-y-12">
         {faqs.map((cat, i) => (
            <div key={i}>
               <h2 className="text-xl font-bold text-slate-900 mb-6 border-l-4 border-primary-500 pl-4 capitalize">{cat.category}</h2>
               <div className="space-y-4">
                  {cat.questions.map((item, j) => {
                     const index = `${i}-${j}`;
                     const isOpen = openIndex === index;
                     return (
                        <div key={j} className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
                           <button 
                              className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
                              onClick={() => setOpenIndex(isOpen ? null : index)}
                           >
                              <span className="font-bold text-slate-800">{item.q}</span>
                              <div className={`p-1 rounded-full ${isOpen ? 'bg-primary-50 text-primary-600' : 'bg-slate-50 text-slate-400'}`}>
                                 {isOpen ? <Minus size={18}/> : <Plus size={18}/>}
                              </div>
                           </button>
                           {isOpen && (
                              <div className="px-6 pb-6 text-slate-600 font-light leading-relaxed animate-in fade-in slide-in-from-top-2 duration-300">
                                 {item.a}
                              </div>
                           )}
                        </div>
                     )
                  })}
               </div>
            </div>
         ))}
      </div>

      <div className="mt-20 text-center">
         <p className="text-slate-600 mb-4">Still have questions?</p>
         <a href="/contact" className="text-primary-600 font-bold hover:underline">Contact our support team</a>
      </div>
    </div>
  );
};

export default FAQ;
