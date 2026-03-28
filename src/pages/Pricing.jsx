import React from 'react';
import { Check, Zap, Star, Shield } from 'lucide-react';

const Pricing = () => {
  return (
    <div className="bg-slate-50 min-h-screen py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Simple, Transparent Pricing</h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">Choose the plan that fits your learning goals. No hidden fees, cancel anytime.</p>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        {[
          { 
            name: 'Basic', 
            price: 'Free', 
            desc: 'Start your journey with essential resources.',
            features: ['Access to 20+ Microcourses', 'Subject-wise Formulas', 'Community Forum access', 'Practice Tests (Limited)'],
            btnText: 'Get Started',
            popular: false,
            color: 'bg-slate-100 text-slate-900'
          },
          { 
            name: 'Standard Pro', 
            price: '₹599', 
            period: '/mo',
            desc: 'The best value for individual students.',
            features: ['All Recorded Video Courses', '24/7 Doubt Resolution', 'Full Syllabus Practice Tests', 'Performance Analytics', 'Downloadable PDF Notes'],
            btnText: 'Start Free Trial',
            popular: true,
            color: 'bg-primary-600 text-white shadow-xl scale-105'
          },
          { 
            name: 'Mentored Pro', 
            price: '₹1499', 
            period: '/mo',
            desc: 'Personalized guidance for guaranteed success.',
            features: ['Everything in Standard Pro', '4 1-on-1 Sessions per Mo', 'Personalized Study Roadmap', 'Parent-Mentor Meetings', 'Priority Feedback'],
            btnText: 'Join Now',
            popular: false,
            color: 'bg-slate-900 text-white'
          },
        ].map((plan, i) => (
          <div key={i} className={`p-10 rounded-3xl flex flex-col relative ${plan.color} ${plan.popular ? 'z-10' : 'z-0'}`}>
            {plan.popular && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-yellow-400 text-yellow-900 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">Most Popular</div>
            )}
            <h3 className="text-xl font-bold mb-2 uppercase tracking-widest opacity-80">{plan.name}</h3>
            <div className="flex items-baseline gap-1 mb-6">
               <span className="text-5xl font-extrabold">{plan.price}</span>
               {plan.period && <span className="text-lg font-medium opacity-60">{plan.period}</span>}
            </div>
            <p className="text-sm mb-8 font-light leading-relaxed">{plan.desc}</p>
            <div className="space-y-4 mb-10 flex-1">
               {plan.features.map((feat, j) => (
                  <div key={j} className="flex gap-3 text-sm font-medium items-center">
                     <div className={`p-1 rounded-full ${plan.color.includes('primary') ? 'bg-white/20' : 'bg-primary-500/10'}`}>
                        <Check size={14} className={plan.color.includes('white') ? 'text-white' : 'text-primary-600'}/>
                     </div>
                     <span>{feat}</span>
                  </div>
               ))}
            </div>
            <button className={`w-full py-4 rounded-xl font-bold transition-all ${plan.popular ? 'bg-white text-primary-600 shadow-lg' : plan.color.includes('slate-900') ? 'bg-primary-600 text-white' : 'bg-slate-900 text-white'} hover:scale-105`}>{plan.btnText}</button>
          </div>
        ))}
      </div>
      
      <div className="mt-24 max-w-4xl mx-auto bg-white p-12 rounded-3xl shadow-sm border border-slate-100 flex flex-col md:flex-row items-center gap-10">
         <div className="flex-1">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Enterprise / School Plans</h3>
            <p className="text-slate-600 font-light">Looking to bring ScienceLMS to your entire classroom or institution? We offer custom solutions tailored for larger groups.</p>
         </div>
         <button className="bg-slate-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-800 transition-colors shrink-0">Contact for Enterprise</button>
      </div>
    </div>
  );
};

export default Pricing;
