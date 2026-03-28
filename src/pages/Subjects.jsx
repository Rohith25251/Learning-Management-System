import React from 'react';
import { useParams } from 'react-router-dom';
import { BookOpen, Atom, FlaskConical, Dna } from 'lucide-react';
import { TeachersSection, FAQSection, TestimonialsSection, FooterSection } from '../components/SharedSections';

const Subjects = () => {
  const { subjectId } = useParams();
  
  // Default to general view if no specific subject is selected
  const displaySubject = subjectId ? subjectId.charAt(0).toUpperCase() + subjectId.slice(1) : 'Physics, Chemistry & Biology';

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Master {displaySubject}</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-10">
            Comprehensive curriculum tailored for State Board, CBSE, and competitive exams with expert guidance.
          </p>
          <button className="bg-white text-blue-800 font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:bg-slate-50 transition-colors">
            Explore Syllabus
          </button>
        </div>
      </section>

      {/* Curriculum Highlight */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">What you will learn</h2>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-lg transition-all">
            <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
              <Atom size={32} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Physics</h3>
            <p className="text-slate-600">From Mechanics to Modern Physics, understand the fundamental laws that govern our universe with clear, practical examples.</p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-lg transition-all">
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mb-6">
              <FlaskConical size={32} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Chemistry</h3>
            <p className="text-slate-600">Master Organic, Inorganic and Physical Chemistry with easy-to-remember techniques and comprehensive problem solving.</p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-lg transition-all">
            <div className="w-16 h-16 bg-rose-100 text-rose-600 rounded-2xl flex items-center justify-center mb-6">
              <Dna size={32} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Biology</h3>
            <p className="text-slate-600">Deep dive into Botany and Zoology with high quality diagrams, mnemonics, and extensive state board syllabus coverage.</p>
          </div>
        </div>
      </section>

      <TeachersSection />
      <TestimonialsSection />
      <FAQSection />
      <FooterSection />
    </div>
  );
};

export default Subjects;
