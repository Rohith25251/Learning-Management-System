import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BookOpen, MonitorPlay, Users, Zap, Atom, FlaskConical, Dna, PlayCircle, Trophy, Target, Clock, ShieldCheck, Star, CheckCircle2, Video, ChevronRight, Check, Monitor, Grip, BarChart2, TrendingUp, Signal, MapPin } from 'lucide-react';
import { useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef } from 'react';
import { FAQSection } from '../components/SharedSections';


const FeatureSection = ({ section, index }) => {
  const isEven = index % 2 !== 0;
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const yParallax = useTransform(scrollYProgress, [0, 1], [-60, 60]);
  const smoothY = useSpring(yParallax, { stiffness: 100, damping: 30 });

  const colorStyles = {
    blue: { bg: 'bg-blue-500/10', text: 'text-blue-600', border: 'border-blue-100', iconBg: 'bg-blue-50', solidBg: 'bg-blue-600' },
    indigo: { bg: 'bg-indigo-500/10', text: 'text-indigo-600', border: 'border-indigo-100', iconBg: 'bg-indigo-50', solidBg: 'bg-indigo-600' },
    emerald: { bg: 'bg-emerald-500/10', text: 'text-emerald-600', border: 'border-emerald-100', iconBg: 'bg-emerald-50', solidBg: 'bg-emerald-600' },
    purple: { bg: 'bg-purple-500/10', text: 'text-purple-600', border: 'border-purple-100', iconBg: 'bg-purple-50', solidBg: 'bg-purple-600' },
    pink: { bg: 'bg-pink-500/10', text: 'text-pink-600', border: 'border-pink-100', iconBg: 'bg-pink-50', solidBg: 'bg-pink-600' },
  }[section.color];

  // Animation variants
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.1, // 100ms staggering
        delayChildren: 0.3
      }
    }
  };

  const featureItem = {
    hidden: { opacity: 0, x: isEven ? 30 : -30 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1.0] } 
    }
  };

  return (
    <div ref={ref} className={`flex flex-col ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 lg:gap-20`}>
      {/* Image Side - No entry animations, no parallax */}
      <div className="md:w-[55%] relative w-full group overflow-hidden rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.15)] bg-slate-100">
        <div className="relative overflow-hidden aspect-[4/3] md:aspect-auto md:h-[550px] w-full h-full">
          <img 
            src={section.image} 
            alt={section.title} 
            className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
            onError={(e) => {
              e.target.src = "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=80";
            }}
          />
        </div>
      </div>

      {/* Text Side - Keep all scroll-triggered reveal animations */}
      <motion.div 
        initial={{ opacity: 0, x: isEven ? -120 : 120 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.9, delay: 0.1, ease: [0.25, 0.1, 0.25, 1.0] }}
        className="md:w-[45%]"
      >
        <div className="flex gap-4 mb-6">
          <div className={`w-16 h-16 ${colorStyles.iconBg} ${colorStyles.text} rounded-2xl flex items-center justify-center shadow-sm border ${colorStyles.border}`}>
            {section.icon}
          </div>
          <div className="flex items-center">
            <span className={`text-xs font-black uppercase tracking-[0.2em] ${colorStyles.text} opacity-70`}>{section.tag}</span>
          </div>
        </div>
        
        <h3 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-[1.1] tracking-tight">{section.title}</h3>
        <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed font-medium">{section.description}</p>
        
        {/* Staggered Features List */}
        <motion.ul 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-5 mb-12"
        >
          {section.features.map((feature, i) => (
            <motion.li 
              key={i} 
              variants={featureItem}
              className="flex items-start gap-4 group"
            >
              <div className={`mt-1.5 w-5 h-5 rounded-full ${colorStyles.iconBg} flex items-center justify-center flex-shrink-0`}>
                <Check className={`w-3 h-3 ${colorStyles.text} stroke-[3]`} />
              </div>
              <span className="text-slate-700 font-bold text-lg leading-snug group-hover:text-slate-900 transition-colors">{feature}</span>
            </motion.li>
          ))}
        </motion.ul>
        
        <Link to={section.btnLink}>
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6, delay: 0.8 }}
          >
            <button className={`relative overflow-hidden group/btn px-10 py-4 rounded-2xl ${colorStyles.solidBg} text-white font-black text-lg shadow-[0_20px_40px_rgba(0,0,0,0.1)] hover:shadow-[0_25px_50px_rgba(0,0,0,0.15)] transition-all transform hover:-translate-y-1 active:translate-y-0`}>
              <span className="relative z-10">{section.btnText}</span>
              <div className={`absolute inset-0 bg-white/20 transform translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500`}></div>
            </button>
          </motion.div>
        </Link>
      </motion.div>
    </div>
  );
};

const FeatureSections = () => {
  const sections = [
    {
      title: "Live Classes",
      tag: "WEEKEND OFFLINE SESSIONS",
      icon: <MonitorPlay size={32} />,
      description: "Join our intensive in-person classroom sessions held every Saturday and Sunday. Experience the discipline of a physical classroom with our specialized offline curriculum and expert live mentors.",
      features: ["In-person Classroom Learning (Sat & Sun)", "6 hours of weekly intensive weekend sessions", "Separate optimized offline curriculum for depth"],
      btnText: "Explore Offline Classes",
      btnLink: "/live-class",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80",
      color: "blue"
    },
    {
      title: "Online Classes",
      tag: "LIVE STREAMING & INTERACTIVE",
      icon: <BookOpen size={32} />,
      description: "Engage with top educators in real-time from anywhere. Participate in interactive polls and get your doubts resolved instantly in our structured online learning environment.",
      features: ["Real-time interactive live sessions", "Daily guided learning with SY syllabus coverage", "Instant doubt resolution and session recordings"],
      btnText: "Join Online Classes",
      btnLink: "/live-classes",
      image: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?auto=format&fit=crop&w=800&q=80",
      color: "indigo"
    },
    {
      title: "Mentored Programs",
      tag: "1-ON-1 GUIDANCE",
      icon: <Users size={32} />,
      description: "Don't just learn, be guided. Our personal mentors help you create custom study plans, track your progress, and provide motivation throughout your journey.",
      features: ["Personalized study timetable & scheduling", "Weekly 1-on-1 strategy and motivation calls", "Continuous parent-mentor feedback loops"],
      btnText: "Discover Mentorship",
      btnLink: "/mentored-programs",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
      color: "emerald",
    },
    {
      title: "Video Courses",
      tag: "LEARN ON DEMAND",
      icon: <Video size={32} />,
      description: "High-quality cinematic 4K video lectures that break down complex scientific concepts into easy-to-digest visual lessons. Learn at your own pace, anytime.",
      features: ["Cinematic quality production for better retention", "Available for offline viewing on the app", "Chapter-wise detailed study notes included"],
      btnText: "Browse Video Courses",
      btnLink: "/video-courses",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      color: "purple",
    },
    {
      title: "Microcourses",
      tag: "TARGETED MASTERY",
      icon: <Zap size={32} />,
      description: "Focus on exactly what you need. Our range of specialized microcourses allows you to master specific topics or bridge learning gaps in just a few hours.",
      features: ["Short, intensive modules focused on one topic", "Ideal for quick pre-exam preparation", "Bridge gaps in prerequisite knowledge"],
      btnText: "Explore Microcourses",
      btnLink: "/microcourses",
      image: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&w=800&q=80",
      color: "pink"
    }
  ];

  return (
    <div className="space-y-40">
      {sections.map((section, index) => (
        <FeatureSection key={index} section={section} index={index} />
      ))}
    </div>
  );
};

const TestimonialSlider = () => {
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
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 z-20 w-12 h-12 bg-[#0f172a] text-white rounded-full flex items-center justify-center shadow-xl opacity-0 group-hover/slider:opacity-100 group-hover/slider:-translate-x-1/2 transition-all duration-300 hover:bg-primary-600"
      >
        <ChevronRight className="rotate-180 w-6 h-6" />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 z-20 w-12 h-12 bg-[#0f172a] text-white rounded-full flex items-center justify-center shadow-xl opacity-0 group-hover/slider:opacity-100 group-hover/slider:translate-x-1/2 transition-all duration-300 hover:bg-primary-600"
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

const Home = () => {
  const [index, setIndex] = useState(0);
  const headings = ['Physics?', 'Chemistry?', 'Biology?', 'Science Concepts?'];

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const phrases = [
    "Search for Physics topics...",
    "Search for Class 12 notes...",
    "Search for Biology terms...",
    "Search for Science experiments...",
    "Search for Chemistry concepts..."
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % headings.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (isFocused) {
      setCurrentText("");
      return;
    }

    const timeout = setTimeout(() => {
      const currentFullText = phrases[currentPhraseIndex];

      if (!isDeleting) {
        setCurrentText(currentFullText.substring(0, currentText.length + 1));
        if (currentText.length === currentFullText.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setCurrentText(currentFullText.substring(0, currentText.length - 1));
        if (currentText.length === 0) {
          setIsDeleting(false);
          setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentPhraseIndex, isFocused]);

  return (
    <div className="bg-slate-50 min-h-screen">

      {/* 2. Professional Search Hero */}
      <section className="bg-[#f2fffb] pt-16 pb-20 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8"
          >
            What Science Concept Do You Want To Master?
          </motion.h1>

          <div className="relative max-w-2xl mx-auto mb-8">
            <input
              type="text"
              onFocus={() => setIsFocused(true)}
              onBlur={(e) => {
                if (e.target.value === "") setIsFocused(false);
              }}
              placeholder={!isFocused ? `${currentText}${currentText.length < phrases[currentPhraseIndex].length || currentText.length === 0 ? "|" : ""}` : ""}
              className="w-full pl-12 pr-4 py-5 bg-white border-2 border-slate-100 rounded-2xl shadow-lg focus:outline-none focus:ring-4 focus:ring-primary-600/10 focus:border-primary-600 transition-all text-lg font-medium"
            />
            <Atom className="absolute left-4 top-1/2 -translate-y-1/2 text-primary-600" size={24} />
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/courses/physics"><button className="bg-primary-600 text-white px-8 py-2.5 rounded-lg text-sm font-bold border border-primary-600 hover:bg-primary-700 transition-all">Physics</button></Link>
            <Link to="/courses/chemistry"><button className="bg-white text-slate-700 px-8 py-2.5 rounded-lg text-sm font-bold border border-slate-300 hover:border-primary-500 transition-all">Chemistry</button></Link>
            <Link to="/courses/biology"><button className="bg-white text-slate-700 px-8 py-2.5 rounded-lg text-sm font-bold border border-slate-300 hover:border-primary-500 transition-all">Biology</button></Link>
          </div>
        </div>

        {/* Background Accent */}
        <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
          <div className="absolute top-10 right-10 w-64 h-64 bg-primary-200 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-64 h-64 bg-primary-100 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* 3. Skill Development / Expert Help Section */}
      <section className="py-16 bg-slate-50/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[40px] shadow-[0_30px_100px_rgba(0,0,0,0.04)] border border-slate-100 p-6 md:p-12 flex flex-col lg:flex-row items-center justify-between gap-10 relative">
            {/* Subtle Gradient Overlay */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary-50/30 to-transparent pointer-events-none rounded-r-[40px]"></div>

            <div className="w-full lg:w-[60%] relative z-10">
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight min-h-[1.2em] flex flex-wrap items-center gap-x-3">
                <span className="shrink-0">Need help with</span>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={headings[index]}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="inline-block bg-gradient-to-r from-primary-600 to-indigo-600 bg-clip-text text-transparent whitespace-nowrap"
                  >
                    {headings[index]}
                  </motion.span>
                </AnimatePresence>
              </h2>
              <p className="text-lg text-slate-500 mb-10 leading-relaxed font-medium max-w-md">
                Connect with trusted science experts, anytime. Get real answers, real guidance, in real time.
              </p>
              <Link to="/courses">
                <button className="bg-gradient-to-r from-[#008d5f] to-[#00a871] hover:from-[#007b53] hover:to-[#008d5f] text-white font-bold px-12 py-4 rounded-2xl text-lg shadow-[0_10px_30px_rgba(0,141,95,0.3)] transition-all hover:scale-105 active:scale-95 flex items-center gap-2 group">
                  Explore Now
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>

            <div className="w-full lg:w-[55%] relative flex justify-center py-6">
              {/* Mentor Visualization - Responsive Compact Group */}
              <div className="relative w-full max-w-[300px] md:max-w-[340px] aspect-square">

                {/* 1. Physics Mentor (Top Center) */}
                <div className="absolute top-[-4px] md:top-0 left-1/2 -translate-x-1/2 group">
                  <div className="w-28 md:w-34 h-28 md:h-34 rounded-full border-[4px] md:border-[5px] border-[#f0f9f6] overflow-hidden shadow-2xl relative z-10 transition-transform hover:scale-105 duration-500">
                    <img src="https://images.unsplash.com/photo-1544717305-2782549b5136?w=400&h=400&fit=crop" className="w-full h-full object-cover" />
                  </div>
                  {/* Physics Bubble */}
                  <div className="absolute -left-20 md:-left-36 top-6 bg-white p-2 md:p-3 rounded-xl md:rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.06)] border border-slate-50 max-w-[90px] md:max-w-[120px] z-[20] flex flex-col group-hover:-translate-x-1 transition-transform duration-500">
                    <p className="text-[7px] md:text-[8.5px] font-black uppercase tracking-wider text-primary-600 mb-0.5">
                      Physics ⚛️
                    </p>
                    <p className="text-[7px] md:text-[8.5px] font-bold text-slate-500 leading-snug">
                      "Bohr Model? Nailed in minutes"
                    </p>
                  </div>
                </div>

                {/* 2. Chemistry Mentor (Bottom Left) */}
                <div className="absolute bottom-10 md:bottom-18 left-0 md:left-6 group">
                  <div className="w-20 md:w-26 h-20 md:h-26 rounded-full border-[4px] md:border-[5px] border-[#f0f9f6] overflow-hidden shadow-xl relative z-10 transition-transform hover:scale-105 duration-500">
                    <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop" className="w-full h-full object-cover" />
                  </div>
                  {/* Chemistry Bubble - BELOW photo on mobile */}
                  <div className="absolute left-1/2 -translate-x-1/2 md:translate-x-0 md:left-[-48px] -bottom-12 md:-bottom-6 bg-white p-2 md:p-3 rounded-xl md:rounded-2xl shadow-[0_12px_35px_rgba(0,0,0,0.06)] border border-slate-50 min-w-max max-w-[100px] md:max-w-[120px] z-[20] flex flex-col group-hover:-translate-y-1 transition-transform duration-500 text-center md:text-left">
                    <p className="text-[7px] md:text-[8.5px] font-black uppercase tracking-wider text-indigo-600 mb-0.5">
                      Chemistry 🧪
                    </p>
                    <p className="text-[7px] md:text-[8.5px] font-bold text-slate-500 leading-snug">
                      "No more mugging, <br className="md:hidden" /> only understanding."
                    </p>
                  </div>
                </div>

                {/* 3. Biology Mentor (Bottom Right) */}
                <div className="absolute bottom-12 md:bottom-22 right-0 md:right-12 group">
                  <div className="w-24 md:w-30 h-24 md:h-30 rounded-full border-[4px] md:border-[5px] border-[#f0f9f6] overflow-hidden shadow-xl relative z-10 transition-transform hover:scale-105 duration-500">
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop" className="w-full h-full object-cover" />
                  </div>
                  {/* Biology Bubble - BELOW photo on mobile */}
                  <div className="absolute left-1/2 -translate-x-1/2 md:translate-x-0 md:left-auto md:-right-32 -bottom-14 md:bottom-auto md:top-2 bg-white p-2 md:p-3 rounded-xl md:rounded-2xl shadow-[0_12px_35px_rgba(0,0,0,0.06)] border border-slate-50 min-w-max max-w-[110px] md:max-w-[130px] z-[20] flex flex-col group-hover:translate-x-1 transition-transform duration-500 text-center md:text-left">
                    <p className="text-[7px] md:text-[8.5px] font-black uppercase tracking-wider text-emerald-600 mb-0.5">
                      Biology 🧬
                    </p>
                    <p className="text-[7px] md:text-[8.5px] font-bold text-slate-500 leading-snug">
                      "Understand life, <br className="md:hidden" /> ace Biology."
                    </p>
                  </div>
                </div>

                {/* Background Decoration */}
                <div className="absolute inset-0 z-0 opacity-10 flex items-center justify-center">
                  <div className="w-52 h-52 rounded-full border-[10px] border-slate-200 border-dotted animate-spin-slow"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Feature Banner */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#f8fbff] rounded-2xl border border-blue-50 p-8 grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center text-purple-600"><Users size={24} /></div>
              <div className="font-bold text-slate-800 text-sm">1:1 Expert Sessions</div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-pink-50 rounded-xl flex items-center justify-center text-pink-600"><Zap size={24} /></div>
              <div className="font-bold text-slate-800 text-sm">Personalized Feed</div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600"><Clock size={24} /></div>
              <div className="font-bold text-slate-800 text-sm">Flexible & Affordable</div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center text-orange-600"><Users size={24} /></div>
              <div className="font-bold text-slate-800 text-sm">Build Your Network</div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Professional Course Grid */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-16 px-2">
            <div>
               <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">Courses</h2>
            </div>
            <Link to="/courses">
              <button className="text-slate-900 font-extrabold border-[1.5px] border-slate-900 bg-white px-8 py-2.5 rounded-full hover:bg-slate-900 hover:text-white transition-all duration-300 text-[13px] shadow-sm active:scale-95">
                View All
              </button>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            <CourseCard 
               title="Class 12 - Advanced Biology Mastery" 
               level="Beginner to Advanced" 
               interested="421k+" 
               headerColor="bg-gradient-to-br from-[#00695C] to-[#004D40]" 
               icon={<Dna />}
               type="live"
            />
            <CourseCard 
               title="Class 11 - Core Physics Fundamentals" 
               level="Intermediate and Advanced" 
               interested="408k+" 
               headerColor="bg-gradient-to-br from-[#1e2a6b] to-[#121a4d]" 
               icon={<Zap />}
               type="live"
            />
            <CourseCard 
               title="Class 12 - Organic Chemistry Bootcamp" 
               level="Beginner to Advanced" 
               interested="50k+" 
               headerColor="bg-gradient-to-br from-[#880E4F] to-[#560633]" 
               icon={<FlaskConical />}
               type="live"
            />
            <CourseCard 
               title="Class 10 - Science Foundations" 
               level="Beginner to Advanced" 
               interested="163k+" 
               headerColor="bg-gradient-to-br from-[#2e2b5f] to-[#1a1843]" 
               icon={<Trophy />}
               type="self-paced"
            />
            <CourseCard 
               title="Class 11 - Molecular Biology & Genetics" 
               level="Beginner to Advanced" 
               interested="318k+" 
               headerColor="bg-gradient-to-br from-[#2e7d32] to-[#1b5e20]" 
               icon={<Atom />}
               type="self-paced"
            />
            <CourseCard 
               title="Class 12 - Advanced Electrostatics" 
               level="Beginner to Advanced" 
               interested="427k+" 
               headerColor="bg-gradient-to-br from-[#2c3e50] to-[#1a252f]" 
               icon={<Monitor />}
               type="self-paced"
            />
          </div>
        </div>
      </section>

      {/* Learn from India's Best Science Mentors */}
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
              duration: 240, // Deeply slow, Zen-like speed
              repeat: Infinity, 
              ease: "linear",
            }}
          >
            {/* Doubling the entire list (12 items) for a perfect loop */}
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
                      {/* Name Row - Full Span */}
                      <div className="mb-4">
                        <h4 className="font-black text-slate-900 text-lg leading-[1.1]">{mentor.name}</h4>
                      </div>

                      {/* Domain & LinkedIn Row */}
                      <div className="flex justify-between items-center mb-6">
                        <div className="inline-flex py-1 px-3 bg-primary-50 text-primary-600 rounded-lg text-[9px] font-black uppercase tracking-widest leading-none">
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
                      
                      {/* Institution Badge */}
                      <div className="flex justify-between items-center mt-2 h-10 bg-[#f8faff] px-4 rounded-2xl border border-slate-50 group/badge">
                        <span className="text-[10px] font-extrabold text-slate-500 uppercase tracking-widest truncate flex-1 mr-3 group-hover/badge:text-primary-600 transition-colors uppercase">{mentor.company}</span>
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

      {/* 4. Core Subjects */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Core Subjects</h2>
            <p className="text-lg text-slate-600">Comprehensive syllabus coverage for State Board</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <Atom size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Physics</h3>
              <ul className="space-y-3 mb-8 text-slate-600">
                <li className="flex items-center"><ChevronRight /> Mechanics</li>
                <li className="flex items-center"><ChevronRight /> Optics</li>
                <li className="flex items-center"><ChevronRight /> Electricity</li>
                <li className="flex items-center"><ChevronRight /> Modern Physics</li>
              </ul>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-slate-100 text-xs font-semibold rounded-full text-slate-700">10th</span>
                <span className="px-3 py-1 bg-slate-100 text-xs font-semibold rounded-full text-slate-700">11th</span>
                <span className="px-3 py-1 bg-slate-100 text-xs font-semibold rounded-full text-slate-700">12th</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mb-6">
                <FlaskConical size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Chemistry</h3>
              <ul className="space-y-3 mb-8 text-slate-600">
                <li className="flex items-center"><ChevronRight /> Organic</li>
                <li className="flex items-center"><ChevronRight /> Inorganic</li>
                <li className="flex items-center"><ChevronRight /> Physical Chemistry</li>
                <li className="flex items-center"><ChevronRight /> Biochemistry</li>
              </ul>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-slate-100 text-xs font-semibold rounded-full text-slate-700">10th</span>
                <span className="px-3 py-1 bg-slate-100 text-xs font-semibold rounded-full text-slate-700">11th</span>
                <span className="px-3 py-1 bg-slate-100 text-xs font-semibold rounded-full text-slate-700">12th</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-rose-100 text-rose-600 rounded-2xl flex items-center justify-center mb-6">
                <Dna size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Biology</h3>
              <ul className="space-y-3 mb-8 text-slate-600">
                <li className="flex items-center"><ChevronRight /> Botany</li>
                <li className="flex items-center"><ChevronRight /> Zoology</li>
                <li className="flex items-center"><ChevronRight /> Human Physiology</li>
                <li className="flex items-center"><ChevronRight /> Genetics</li>
              </ul>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-slate-100 text-xs font-semibold rounded-full text-slate-700">10th</span>
                <span className="px-3 py-1 bg-slate-100 text-xs font-semibold rounded-full text-slate-700">11th</span>
                <span className="px-3 py-1 bg-slate-100 text-xs font-semibold rounded-full text-slate-700">12th</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Comprehensive Learning Ecosystem (Alternating Z-Layout) */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-sm font-bold tracking-widest text-primary-600 uppercase mb-3 text-center">Your Learning Ecosystem</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight text-center">Everything you need to succeed</h3>
            <p className="text-lg md:text-xl text-slate-600 text-center leading-relaxed">From real-time interactions to self-paced mastery, our platform adapts to your unique learning style.</p>
          </div>

          <FeatureSections />
        </div>
      </section>

      {/* 6. Success Stories / Testimonials */}
      <section className="pt-36 pb-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          {/* Header with Icon and Wavy Underline */}
          <div className="mb-20">
             <div className="flex items-center gap-6">
                <div className="w-14 h-14 md:w-20 md:h-20 rounded-full overflow-hidden flex-shrink-0 shadow-lg border-2 border-slate-50">
                   <img src="/assets/stories_inspire_icon.png" alt="Stories Icon" className="w-full h-full object-cover" />
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

      {/* 7. Why Choose Us? */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">Why Thousands of Students Choose ScienceLMS</h2>
              <div className="space-y-6">
                {[
                  { title: "State Board Expertise", desc: "Content perfectly aligned with your syllabus.", icon: <BookOpen className="text-primary-500" /> },
                  { title: "Expert Mentors", desc: "IIT/NIT alumni and highly experienced teachers.", icon: <ShieldCheck className="text-primary-500" /> },
                  { title: "Real-time Tracking", desc: "Detailed analytics on your strengths and weaknesses.", icon: <Zap className="text-primary-500" /> },
                  { title: "Affordable Pricing", desc: "Quality education accessible to everyone.", icon: <Trophy className="text-primary-500" /> },
                ].map((reason, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center">
                      {reason.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">{reason.title}</h4>
                      <p className="text-slate-600 text-sm">{reason.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80" alt="Students" className="rounded-3xl shadow-2xl" />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100">
                <p className="text-primary-600 font-bold text-2xl">95%</p>
                <p className="text-slate-600 text-sm">Success Rate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ScienceLMS Study Material */}
      <section className="relative mt-24 py-32 bg-[#050505] text-white overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=2000&q=80" alt="Open Book Background" className="w-full h-full object-cover opacity-10 mix-blend-luminosity" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/95 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
        </div>

        {/* Dynamic Glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-full bg-blue-900/10 blur-[150px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
            <div className="lg:w-5/12 mb-16 lg:mb-0">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 backdrop-blur-md rounded-full border border-white/10 mb-8">
                  <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-200/60">Study Materials</span>
                </div>
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.0] mb-8 tracking-tighter">
                   <span className="text-white">Master Every</span><br />
                   <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">Concept</span><br />
                   <span className="text-white">with ease.</span>
                </h2>
                <p className="text-lg text-slate-400 max-w-lg leading-relaxed font-medium mb-12">
                   Our comprehensive study materials are designed to transform complex science topics into intuitive, visual journeys.
                </p>
              </motion.div>
            </div>

            <div className="lg:w-7/12 w-full relative">
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-end gap-16 sm:gap-4 md:gap-5 perspective-2000 py-10">
                {[
                  { title: "PHYSICS", color: "from-[#1e293b] to-[#0f172a]", icon: <Atom />, rotation: "sm:-rotate-12 translate-y-4", mobileRotation: "rotate-0", delay: 0, accent: "text-sky-400" },
                  { title: "CHEMISTRY", color: "from-[#2d1b24] to-[#1a0c13]", icon: <FlaskConical />, rotation: "sm:-rotate-6 sm:translate-y-8", mobileRotation: "rotate-0", delay: 0.1, accent: "text-rose-500" },
                  { title: "BIOLOGY", color: "from-[#1a2d1b] to-[#0d1a0e]", icon: <Dna />, rotation: "sm:rotate-6 sm:translate-y-10", mobileRotation: "rotate-0", delay: 0.2, accent: "text-emerald-500" }
                ].map((book, bIdx) => (
                  <motion.div
                    key={book.title}
                    initial={{ opacity: 0, scale: 0.9, rotateY: 30 }}
                    whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: book.delay }}
                    whileHover={{ y: -30, rotate: 0, scale: 1.05, zIndex: 100 }}
                    className={`w-[180px] sm:w-[130px] md:w-[170px] aspect-[1/1.5] bg-gradient-to-br ${book.color} rounded-r-xl shadow-[30px_30px_60px_rgba(0,0,0,0.8)] border-l-[12px] border-black/80 flex flex-col items-center justify-between p-6 transform transition-all duration-500 cursor-pointer relative overflow-hidden group ${book.mobileRotation} ${book.rotation}`}
                  >
                    {/* Texture/Overlay */}
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent opacity-20 pointer-events-none"></div>

                    {/* Book Badge */}
                    <div className="relative z-10 w-full flex justify-center">
                       <div className={`text-[9px] font-black ${book.accent} tracking-[0.3em] mb-4`}>SCIENCE LMS</div>
                    </div>

                    <div className="relative z-10 flex flex-col items-center gap-6">
                      <div className={`w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center backdrop-blur-md border border-white/10 group-hover:bg-white group-hover:text-black transition-all duration-500 shadow-xl ${book.accent}`}>
                        {React.cloneElement(book.icon, { size: 30 })}
                      </div>
                      <div className="text-center">
                         <h4 className="text-2xl font-serif italic text-white leading-none tracking-tight">{book.title}</h4>
                      </div>
                    </div>

                    {/* Footer Detail */}
                    <div className="relative z-10 w-full text-center mt-auto">
                       <div className="text-[8px] font-bold text-white/30 tracking-widest uppercase">Volume I</div>
                    </div>

                    {/* Realistic Shadow on Spine */}
                    <div className="absolute top-0 left-0 w-[1px] h-full bg-white/10 shadow-[2px_0_10px_rgba(255,255,255,0.05)]"></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Learning Centres Section (Enhanced) */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Subtle Background Decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-50 rounded-full blur-[100px] -mr-48 -mt-48 opacity-40"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-50 rounded-full blur-[100px] -ml-48 -mb-48 opacity-40"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-start pt-16 mb-20">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0f172a] tracking-tight">
               Popular <span className="text-[#ff6b35]">ScienceLMS Centres</span> Near You
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              { 
                city: "Velachery, Chennai", 
                address: "ScienceLMS Centre, 3rd Floor, ASV Crown Plaza, No.391, Velachery - Tambaram Main Rd, Velachery...",
                img: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80"
              },
              { 
                city: "Anna Nagar, Chennai", 
                address: "1, Orandi Amman Koil St, Velachery, Chennai, Tamil Nadu 600042",
                img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
              },
              { 
                city: "Tambaram, Chennai", 
                address: "1st Floor, Trinity Enclave, 3, Muthalamman Koil St, Selaiyur, Chennai, Tamil Nadu 600073",
                img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80"
              }
            ].map((centre, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group bg-white rounded-3xl shadow-[0_10px_50px_rgba(0,0,0,0.04)] border border-slate-50 overflow-hidden hover:shadow-[0_20px_70px_rgba(0,0,0,0.08)] transition-all duration-500"
              >
                <div className="h-60 overflow-hidden relative">
                   <img src={centre.img} alt={centre.city} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                </div>
                <div className="p-8">
                  <h4 className="text-xl font-black text-[#0f172a] mb-5 tracking-tight">{centre.city}</h4>
                  <div className="flex items-start gap-3 mb-10 text-slate-500 text-sm leading-relaxed">
                    <div className="w-8 h-8 rounded-full bg-[#ff6b35]/5 flex items-center justify-center flex-shrink-0">
                       <MapPin size={16} className="text-[#ff6b35]" />
                    </div>
                    <span className="font-medium pt-1">{centre.address}</span>
                  </div>
                  <button className="w-full bg-[#ff7043] hover:bg-[#ff5722] text-white font-bold py-4 rounded-xl transition-all shadow-[0_10px_20px_rgba(255,112,67,0.2)] hover:shadow-[0_15px_30px_rgba(255,112,67,0.3)] hover:-translate-y-1 active:translate-y-0">
                    Visit Centre
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Premium CTA Section */}
      <section className="relative py-32 lg:py-40 bg-[#050505] overflow-hidden border-t border-white/5">
        {/* Deep Aurora Background Effects */}
        <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[60%] bg-blue-600/20 rounded-full blur-[120px] animate-pulse-slow"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[60%] bg-purple-600/20 rounded-full blur-[120px] animate-pulse-slow delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(5,5,5,1)_100%)] z-10"></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30 mix-blend-screen"></div>
        </div>

        {/* Floating Science Elements */}

        <motion.div animate={{ y: [0, 20, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute bottom-20 right-[15%] text-purple-500/20 z-0 hidden lg:block"><Trophy size={100} /></motion.div>
        <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 3, repeat: Infinity }} className="absolute top-1/2 right-[10%] text-white/5 z-0 hidden lg:block"><Star size={150} fill="currentColor" /></motion.div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "circOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-xl rounded-full border border-white/10 mb-8 border-b-white/20">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/60">Limited Lifetime Access</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-10 leading-[0.95] tracking-tighter">
               Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">Rewrite</span><br />
               Your Story?
            </h2>
            
            <p className="text-lg md:text-xl text-slate-400 mb-14 mx-auto max-w-2xl font-medium leading-relaxed">
               Join <span className="text-white font-bold underline decoration-blue-500/50 decoration-2 underline-offset-4">50,000+ Students</span> who have already taken the leap. The most comprehensive learning ecosystem is just one click away.
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/login" className="px-10 py-5 bg-white text-black font-black rounded-2xl text-lg shadow-[0_20px_40px_rgba(255,255,255,0.1)] hover:shadow-[0_25px_50px_rgba(255,255,255,0.2)] transition-all flex items-center gap-3">
                  Get Started Free <ChevronRight size={20} />
                </Link>
              </motion.div>
              
              <Link to="/contact" className="px-10 py-5 bg-white/5 border border-white/10 hover:bg-white/10 text-white font-bold rounded-2xl text-lg transition-all backdrop-blur-md">
                Talk to an Advisor
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <FAQSection />
      <Footer />
    </div>
  );
};

// 8. Footer Section
const Footer = () => (
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

// Professional Course Card Component
const CourseCard = ({ title, level, interested, headerColor, icon, type = "live" }) => (
  <div className="bg-white rounded-[16px] shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-slate-100 overflow-hidden group hover:shadow-[0_15px_50px_rgba(0,0,0,0.08)] transition-all duration-500 flex flex-col h-full relative">
    {/* Header */}
    <div className={`relative ${headerColor} h-[180px] p-6 flex flex-col justify-center overflow-hidden`}>
      {/* Watermark Icon */}
      <div className="absolute top-1/2 left-3/4 -translate-x-1/2 -translate-y-1/2 opacity-20 group-hover:scale-125 transition-transform duration-1000 rotate-12">
        {React.cloneElement(icon, { size: 120 })}
      </div>

      {/* Course Main Label in Header (Upper Left) */}
      <div className="relative z-10 space-y-2">
        <h4 className="text-white font-black text-2xl leading-[1.1] tracking-tight uppercase drop-shadow-md">
           {title.split('-')[1].trim().split(' ')[0]}
        </h4>
        {type === "live" && (
          <div className="inline-flex items-center gap-1 bg-red-600/90 text-[9px] font-black px-2 py-0.5 rounded text-white shadow-sm border border-white/10 uppercase tracking-wider">
             <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></div>
             LIVE COURSE
          </div>
        )}
      </div>
    </div>

    {/* Body */}
    <div className="p-6 flex flex-col flex-grow text-left">
      <h3 className="text-[19px] font-black text-slate-900 mb-6 leading-tight group-hover:text-blue-600 transition-colors h-[48px] line-clamp-2">
        {title}
      </h3>

      <div className="space-y-4 mt-auto">
        <div className="flex items-center gap-2 text-slate-400 font-bold text-[13px]">
          <Signal size={18} />
          {level}
        </div>
        <div className="flex items-center justify-between pt-4 border-t border-slate-50">
           <div className="flex items-center gap-2 text-[12px] font-black text-green-600">
             <TrendingUp size={18} />
             <span>{interested} interested</span>
           </div>
           <Link to="/courses" className="text-[#008d5f] font-black text-[13px] hover:text-[#007b53] flex items-center transition-colors underline-offset-4 hover:underline">
             Explore now
           </Link>
        </div>
      </div>
    </div>
  </div>
);


export default Home;
