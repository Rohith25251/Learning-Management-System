import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { FooterSection } from '../components/SharedSections';

const Contact = () => {
   return (
      <div className="bg-slate-50 min-h-screen flex flex-col">
         <div className="flex-grow">
            <section className="py-12 md:py-20 max-w-7xl mx-auto px-4">
               <div className="grid lg:grid-cols-3 gap-12">
                  <div className="lg:col-span-2 bg-white p-10 rounded-3xl shadow-sm border border-slate-100">
                     <h2 className="text-2xl font-bold text-slate-900 mb-8">Send us a Message</h2>
                     <form className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                           <div className="space-y-2">
                              <label className="text-sm font-bold text-slate-700">Full Name</label>
                              <input type="text" className="w-full bg-slate-50 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary-500" placeholder="John Doe" />
                           </div>
                           <div className="space-y-2">
                              <label className="text-sm font-bold text-slate-700">Email Address</label>
                              <input type="email" className="w-full bg-slate-50 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary-500" placeholder="john@example.com" />
                           </div>
                        </div>
                        <div className="space-y-2">
                           <label className="text-sm font-bold text-slate-700">Subject</label>
                           <input type="text" className="w-full bg-slate-50 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary-500" placeholder="Question about courses" />
                        </div>
                        <div className="space-y-2">
                           <label className="text-sm font-bold text-slate-700">Message</label>
                           <textarea rows="5" className="w-full bg-slate-50 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary-500" placeholder="Your message here..."></textarea>
                        </div>
                        <button className="bg-primary-600 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-primary-700 transition-all shadow-lg w-full md:w-auto"><Send size={18} /> Send Message</button>
                     </form>
                  </div>

                  <div className="space-y-8">
                     <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                        <h3 className="text-lg font-bold text-slate-900 mb-6">Contact Information</h3>
                        <div className="space-y-6">
                           <div className="flex gap-4 items-start">
                              <div className="p-3 bg-primary-50 rounded-xl text-primary-600"><Mail size={20} /></div>
                              <div>
                                 <p className="text-sm font-bold text-slate-900">Email Us</p>
                                 <p className="text-sm text-slate-600">contact@sciencelms.com</p>
                              </div>
                           </div>
                           <div className="flex gap-4 items-start">
                              <div className="p-3 bg-primary-50 rounded-xl text-primary-600"><Phone size={20} /></div>
                              <div>
                                 <p className="text-sm font-bold text-slate-900">Call Us</p>
                                 <p className="text-sm text-slate-600">+91 98765 43210</p>
                              </div>
                           </div>
                           <div className="flex gap-4 items-start">
                              <div className="p-3 bg-primary-50 rounded-xl text-primary-600"><MapPin size={20} /></div>
                              <div>
                                 <p className="text-sm font-bold text-slate-900">Visit Us</p>
                                 <p className="text-sm text-slate-600">Science Block, Education Valley, Mumbai, India</p>
                              </div>
                           </div>
                        </div>
                     </div>

                     <div className="bg-slate-900 text-white p-8 rounded-3xl shadow-xl">
                        <h3 className="text-lg font-bold mb-4">Follow Us</h3>
                        <p className="text-sm text-slate-400 mb-6 font-light">Join our community on social media for daily tips and updates.</p>
                        <div className="flex gap-4">
                           <a href="#" className="w-10 h-10 bg-slate-800 text-white rounded-xl flex items-center justify-center hover:bg-blue-600 transition-colors">
                              <svg className="w-5 h-5 mx-0.5" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                           </a>
                           <a href="#" className="w-10 h-10 bg-slate-800 text-white rounded-xl flex items-center justify-center hover:bg-pink-600 transition-colors">
                              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                           </a>
                           <a href="#" className="w-10 h-10 bg-slate-800 text-white rounded-xl flex items-center justify-center hover:bg-blue-700 transition-colors">
                              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                           </a>
                           <a href="#" className="w-10 h-10 bg-slate-800 text-white rounded-xl flex items-center justify-center hover:bg-red-600 transition-colors">
                              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 0 0-2.122 2.136C0 8.07 0 12 0 12s0 3.93.501 5.814a3.016 3.016 0 0 0 2.122 2.136c1.872.55 9.377.55 9.377.55s7.505 0 9.377-.55a3.016 3.016 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
                           </a>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
         </div>
         <FooterSection />
      </div>
   );
};

export default Contact;
