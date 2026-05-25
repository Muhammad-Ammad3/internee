  // import React, { useState } from 'react';
  // import { Calendar, Play, Rocket } from 'lucide-react';

  // export default function ResourcesWebiners() {
  //   const [activeFilter, setActiveFilter] = useState('All');

  //   const filters = ['All', 'Upcoming', 'Live', 'Completed', 'Webinars'];

  //   const classes = [
  //     {
  //       id: 1,
  //       status: 'Completed',
  //       duration: '1h',
  //       category: 'Career Development',
  //       title: 'Digital Baithak: Exploring Career Paths with Umair Ahmed',
  //       speaker: 'Umair Ahmed',
  //       role: 'Career Coach and Industry Expert',
  //       date: 'Mar 15, 2026',
  //       tags: ['career development', 'personal branding', 'networking', '+2'],
  //       image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80'
  //     },
  //     {
  //       id: 2,
  //       status: 'Completed',
  //       duration: '1h',
  //       category: 'Career Development',
  //       title: 'Digital Baithak: The Future of Career Development with Qasim Hassan',
  //       speaker: 'Qasim Hassan',
  //       role: 'Career Strategist and Coach',
  //       date: 'Mar 15, 2026',
  //       tags: ['career development', 'networking', 'digital skills', '+2'],
  //       image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80'
  //     },
  //     {
  //       id: 3,
  //       status: 'Completed',
  //       duration: '1h',
  //       category: 'Career Development',
  //       title: 'Building a Successful Career in Software Engineering',
  //       speaker: 'Muhammad Abdullah',
  //       role: 'Senior Software Engineer at Tech Solutions Ltd.',
  //       date: 'Mar 10, 2026',
  //       tags: ['career', 'software engineering', 'professional growth', '+2'],
  //       image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80'
  //     },
  //     {
  //       id: 4,
  //       status: 'Live',
  //       duration: '1h',
  //       category: 'Career Development',
  //       title: 'Exploring Digital Innovation: Episode 02 of Digital Baithak',
  //       speaker: 'Zeeshan Awan',
  //       role: 'Digital Innovation Specialist',
  //       date: 'Feb 28, 2026',
  //       tags: ['digital innovation', 'innovation', 'career growth', '+2'],
  //       image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=400&q=80' // Representing the dark digital background asset look
  //     },
  //     {
  //       id: 5,
  //       status: 'Completed',
  //       duration: '1h',
  //       category: 'AI & Machine Learning',
  //       title: 'Digital Baithak: Navigating Careers ft. Nasir Hussain',
  //       speaker: 'Nasir Hussain',
  //       role: 'AI Engineer and Mentor',
  //       date: 'Mar 09, 2026',
  //       tags: ['career development', 'networking', 'skill enhancement', '+2'],
  //       image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80'
  //     }
  //   ];

  //   return (
  //     <div className="w-full bg-[#F8FAFC]/40 min-h-screen font-sans antialiased pb-24">
        
  //       {/* ==========================================
  //           1. HEADER SECTION
  //           ========================================== */}
  //       <div className="w-full bg-[#1A1A1A] text-white px-6 py-16 md:px-16 md:py-20">
  //         <div className="max-w-7xl mx-auto space-y-3">
  //           <span className="text-[#43A047] text-xs font-bold uppercase tracking-wider block">
  //             Expert-Led Sessions
  //           </span>
  //           <h1 className="text-3xl md:text-5xl font-black tracking-tight">
  //             Webinars & Masterclasses
  //           </h1>
  //           <p className="text-neutral-400 text-xs md:text-sm max-w-2xl leading-relaxed">
  //             Join exclusive online sessions hosted by industry professionals. Gain practical insights, learn trending technologies, and accelerate your career growth.
  //           </p>
  //         </div>
  //       </div>

  //       <div className="max-w-7xl mx-auto px-6 mt-8 space-y-10">
          
  //         {/* ==========================================
  //             2. FILTER PILLS BAR
  //             ========================================== */}
  //         <div className="flex flex-wrap items-center gap-2 pb-4 overflow-x-auto no-scrollbar">
  //           {filters.map((filter) => (
  //             <button
  //               key={filter}
  //               onClick={() => setActiveFilter(filter)}
  //               className={`text-xs font-bold px-4 py-2 rounded-full border transition-all whitespace-nowrap ${
  //                 (filter === 'All' && activeFilter === 'All') || activeFilter === filter
  //                   ? 'bg-[#43A047] border-[#43A047] text-white shadow-sm'
  //                   : 'bg-white border-gray-200 text-gray-600 hover:text-gray-900 hover:border-gray-300'
  //               }`}
  //             >
  //               {filter}
  //             </button>
  //           ))}
  //         </div>

  //         {/* ==========================================
  //             3. WEBINARS CARDS GRID
  //             ========================================== */}
  //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  //           {classes.map((item) => (
  //             <div 
  //               key={item.id}
  //               className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col group"
  //             >
  //               {/* Card Image Area with Badges */}
  //               <div className="relative aspect-[16/10] bg-slate-100 overflow-hidden">
  //                 <img 
  //                   src={item.image} 
  //                   alt={item.title} 
  //                   className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-102"
  //                 />
  //                 {/* Meta Tags on Image */}
  //                 <div className="absolute top-3 left-3 flex gap-1.5">
  //                   <span className={`text-[9px] uppercase font-black px-2.5 py-1 rounded-md tracking-wider text-white ${
  //                     item.status === 'Live' ? 'bg-red-600 animate-pulse' : 'bg-neutral-700/80'
  //                   }`}>
  //                     {item.status}
  //                   </span>
  //                 </div>
  //                 <div className="absolute top-3 right-3">
  //                   <span className="bg-black/60 backdrop-blur-xs text-white text-[10px] font-bold px-2 py-0.5 rounded-md flex items-center gap-1">
  //                     ⏱️ {item.duration}
  //                   </span>
  //                 </div>
  //               </div>

  //               {/* Card Content Data */}
  //               <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
  //                 <div className="space-y-2">
  //                   <span className="text-[10px] font-bold uppercase tracking-wider text-[#43A047] block">
  //                     {item.category}
  //                   </span>
  //                   <h3 className="text-sm md:text-base font-black text-gray-900 tracking-tight line-clamp-2 leading-snug min-h-[44px]">
  //                     {item.title}
  //                   </h3>
                    
  //                   {/* Speaker Meta */}
  //                   <div className="flex items-center gap-2 pt-1">
  //                     <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center font-bold text-[10px] text-gray-600 border border-gray-200">
  //                       {item.speaker.charAt(0)}
  //                     </div>
  //                     <div>
  //                       <p className="text-xs font-bold text-gray-800">{item.speaker}</p>
  //                       <p className="text-[10px] text-gray-400 font-medium line-clamp-1">{item.role}</p>
  //                     </div>
  //                   </div>

  //                   {/* Date Block */}
  //                   <div className="flex items-center gap-1.5 text-gray-400 text-[11px] pt-1 font-semibold">
  //                     <Calendar className="w-3.5 h-3.5" />
  //                     <span>{item.date}</span>
  //                   </div>
  //                 </div>

  //                 {/* Tags and Action Button Area */}
  //                 <div className="space-y-4 pt-2">
  //                   {/* Micro Tags pills */}
  //                   <div className="flex flex-wrap gap-1">
  //                     {item.tags.map((tag, i) => (
  //                       <span 
  //                         key={i} 
  //                         className="bg-gray-50 text-gray-500 border border-gray-100 text-[9px] md:text-[10px] font-bold px-2 py-0.5 rounded-md whitespace-nowrap"
  //                       >
  //                         {tag}
  //                       </span>
  //                     ))}
  //                   </div>

  //                   {/* Primary Trigger CTA */}
  //                   <button className="w-full bg-[#1A2530] hover:bg-black text-white font-bold text-xs py-3 rounded-xl transition-colors flex items-center justify-center gap-2 group-hover:bg-black">
  //                     <Play className="w-3.5 h-3.5 fill-white stroke-none" /> Watch Recording
  //                   </button>
  //                 </div>
  //               </div>
  //             </div>
  //           ))}
  //         </div>

  //         {/* ==========================================
  //             4. BOTTOM NEVER MISS A LEARNING OPPORTUNITY BANNER
  //             ========================================== */}
  //         <div className="w-full bg-[#1A1A1A] rounded-3xl p-8 md:p-12 lg:p-16 text-white relative overflow-hidden shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-12 mt-16">
  //           <div className="space-y-5 max-w-xl z-10 relative">
  //             <div className="inline-flex items-center gap-2 bg-[#2E2E2E] border border-neutral-800 rounded-full py-1.5 pl-2 pr-4 text-xs font-semibold">
  //               <span className="bg-[#43A047] text-white text-[10px] uppercase font-black px-2 py-0.5 rounded-full tracking-wide">
  //                 Learn & Grow
  //               </span>
  //               <span className="text-gray-300 text-[11px]">Stay Ahead of the Curve</span>
  //             </div>

  //             <h2 className="text-3xl md:text-4xl font-black text-white leading-tight tracking-tight">
  //               Never Miss a <br /> Learning Opportunity
  //             </h2>

  //             <p className="text-neutral-400 text-xs md:text-sm leading-relaxed">
  //               Register for upcoming webinars and watch recordings of past sessions to continuously build your skills.
  //             </p>

  //             <div className="flex flex-wrap gap-4 pt-2">
  //               <button className="bg-[#43A047] hover:bg-[#388E3C] text-white font-bold px-6 py-3.5 rounded-xl transition-all active:scale-95 text-sm flex items-center gap-2 shadow-lg shadow-green-900/20">
  //                 Explore Internships <Rocket className="w-4 h-4" />
  //               </button>
  //               <button className="border border-neutral-700 hover:border-neutral-500 hover:bg-neutral-800/40 text-white font-bold px-6 py-3.5 rounded-xl transition-colors text-sm bg-transparent">
  //                 Become Ambassador
  //               </button>
  //             </div>
  //           </div>

  //           {/* Background Structural Geometry Abstract Shapes */}
  //           <div className="hidden lg:block absolute right-0 top-0 h-full w-1/2 opacity-10 pointer-events-none select-none z-0">
  //             <div className="absolute right-12 bottom-12 w-32 h-32 bg-white rounded-full" />
  //             <div className="absolute right-48 top-12 w-28 h-28 bg-white" />
  //             <div className="absolute right-12 top-24 w-24 h-48 border-t-[48px] border-l-[48px] border-transparent border-t-white" />
  //             <div className="absolute right-48 bottom-16 w-32 h-32 bg-white rounded-tl-full" />
  //           </div>
  //         </div>

  //       </div>

  //     </div>
  //   );
  // }



  import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Play, Rocket, Sparkles, ArrowRight, Video, Users, BookOpen, Clock, Bell, Mic, Mic2 } from "lucide-react";

// Page transition configuration
const pageTransition = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.08,
      delayChildren: 0.1
    }
  },
  exit: { 
    opacity: 0,
    transition: {
      duration: 0.3
    }
  }
};

// Section animation variants
const sectionVariants = {
  initial: { opacity: 0, y: 40 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

// Animated section wrapper
const AnimatedSection = ({ children, className }) => (
  <motion.div
    initial="initial"
    whileInView="animate"
    viewport={{ once: true, margin: "-100px" }}
    variants={sectionVariants}
    className={className}
  >
    {children}
  </motion.div>
);

// Animated section for later sections
const AnimatedSectionLate = ({ children, className }) => (
  <motion.div
    initial="initial"
    whileInView="animate"
    viewport={{ once: true, margin: "-50px" }}
    variants={sectionVariants}
    className={className}
  >
    {children}
  </motion.div>
);

export default function ResourcesWebiners() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Upcoming', 'Live', 'Completed', 'Webinars'];

  const webinars = [
    {
      id: 1,
      status: 'Completed',
      duration: '1h',
      category: 'Career Development',
      title: 'Digital Baithak: Exploring Career Paths with Umair Ahmed',
      speaker: 'Umair Ahmed',
      role: 'Career Coach and Industry Expert',
      date: 'Mar 15, 2026',
      tags: ['career development', 'personal branding', 'networking', '+2'],
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 2,
      status: 'Completed',
      duration: '1h',
      category: 'Career Development',
      title: 'Digital Baithak: The Future of Career Development with Qasim Hassan',
      speaker: 'Qasim Hassan',
      role: 'Career Strategist and Coach',
      date: 'Mar 15, 2026',
      tags: ['career development', 'networking', 'digital skills', '+2'],
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 3,
      status: 'Completed',
      duration: '1h',
      category: 'Career Development',
      title: 'Building a Successful Career in Software Engineering',
      speaker: 'Muhammad Abdullah',
      role: 'Senior Software Engineer at Tech Solutions Ltd.',
      date: 'Mar 10, 2026',
      tags: ['career', 'software engineering', 'professional growth', '+2'],
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 4,
      status: 'Live',
      duration: '1h',
      category: 'Career Development',
      title: 'Exploring Digital Innovation: Episode 02 of Digital Baithak',
      speaker: 'Zeeshan Awan',
      role: 'Digital Innovation Specialist',
      date: 'Feb 28, 2026',
      tags: ['digital innovation', 'innovation', 'career growth', '+2'],
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 5,
      status: 'Completed',
      duration: '1h',
      category: 'AI & Machine Learning',
      title: 'Digital Baithak: Navigating Careers ft. Nasir Hussain',
      speaker: 'Nasir Hussain',
      role: 'AI Engineer and Mentor',
      date: 'Mar 09, 2026',
      tags: ['career development', 'networking', 'skill enhancement', '+2'],
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80'
    }
  ];

  return (
    <motion.div 
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
      className="w-full bg-gray-50/50 min-h-screen font-sans antialiased pb-24"
    >
      
      {/* ==========================================
          1. HEADER SECTION
          ========================================== */}
      <AnimatedSection className="w-full">
        <motion.div 
          whileInView="animate"
          className="w-full bg-[#0a0a0a] text-white px-6 py-16 md:px-16 md:py-20"
        >
          <div className="max-w-7xl mx-auto space-y-5">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2"
            >
              <Video className="w-4 h-4 text-[#43A047]" />
              <span className="text-xs font-bold text-[#43A047] uppercase tracking-wider">
                Expert-Led Sessions
              </span>
            </motion.div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight">
              Webinars &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#43A047] to-[#66BB6A]">
                Masterclasses
              </span>
            </h1>
            <p className="text-gray-400 text-sm lg:text-base max-w-2xl leading-relaxed font-medium">
              Join exclusive online sessions hosted by industry professionals. Gain practical insights, learn trending technologies, and accelerate your career growth.
            </p>
          </div>
        </motion.div>
      </AnimatedSection>

      <div className="max-w-7xl mx-auto px-6 mt-10 space-y-12">
        
        {/* ==========================================
            2. FILTER PILLS BAR
            ========================================== */}
        <AnimatedSection className="flex flex-wrap items-center gap-3 pb-4 overflow-x-auto no-scrollbar">
          {filters.map((filter) => (
            <motion.button
              key={filter}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(filter)}
              className={`text-sm font-bold px-5 py-2.5 rounded-full border transition-all whitespace-nowrap ${
                (filter === 'All' && activeFilter === 'All') || activeFilter === filter
                  ? 'bg-[#43A047] border-[#43A047] text-white shadow-lg shadow-green-500/25'
                  : 'bg-white border-gray-200 text-gray-600 hover:text-gray-900 hover:border-gray-300'
              }`}
            >
              {filter}
            </motion.button>
          ))}
        </AnimatedSection>

        {/* ==========================================
            3. WEBINARS CARDS GRID
            ========================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {webinars.map((item, index) => (
            <AnimatedSectionLate key={item.id}>
              <motion.div 
                whileHover={{ y: -8 }}
                className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-green-500/10 hover:border-green-200/50 transition-all duration-500 flex flex-col group cursor-pointer"
              >
                {/* Card Image Area with Badges */}
                <div className="relative aspect-[16/10] bg-slate-100 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Meta Tags on Image */}
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className={`text-xs uppercase font-bold px-3 py-1.5 rounded-lg tracking-wider text-white ${
                      item.status === 'Live' ? 'bg-red-600' : 'bg-neutral-800/80'
                    }`}>
                      {item.status}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="bg-black/60 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      {item.duration}
                    </span>
                  </div>
                </div>

                {/* Card Content Data */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#43A047]">
                      {item.category}
                    </span>
                    <h3 className="text-base lg:text-lg font-bold text-gray-900 tracking-tight line-clamp-2 leading-snug group-hover:text-[#43A047] transition-colors">
                      {item.title}
                    </h3>
                    
                    {/* Speaker Meta */}
                    <div className="flex items-center gap-3 pt-1">
                      <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center font-bold text-sm text-gray-600 border border-gray-200">
                        {item.speaker.charAt(0)}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-gray-800">{item.speaker}</p>
                        <p className="text-xs text-gray-400 font-medium line-clamp-1">{item.role}</p>
                      </div>
                    </div>

                    {/* Date Block */}
                    <div className="flex items-center gap-2 text-gray-400 text-sm font-medium pt-1">
                      <Calendar className="w-4 h-4" />
                      <span>{item.date}</span>
                    </div>
                  </div>

                  {/* Tags and Action Button Area */}
                  <div className="space-y-4 pt-2">
                    {/* Micro Tags pills */}
                    <div className="flex flex-wrap gap-1.5">
                      {item.tags.map((tag, i) => (
                        <span 
                          key={i} 
                          className="bg-gray-50 text-gray-500 border border-gray-100 text-xs font-medium px-2.5 py-1 rounded-md whitespace-nowrap"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Primary Trigger CTA */}
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-[#0a0a0a] hover:bg-[#43A047] text-white font-bold text-sm py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2 group-hover:bg-[#43A047]"
                    >
                      <Play className="w-4 h-4 fill-white" /> 
                      Watch Recording
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </AnimatedSectionLate>
          ))}
        </div>

        {/* ==========================================
            4. BOTTOM NEVER MISS A LEARNING OPPORTUNITY BANNER
            ========================================== */}
        <AnimatedSectionLate className="mt-8">
          <motion.div 
            whileInView="animate"
            className="w-full bg-[#0a0a0a] rounded-3xl p-8 md:p-12 lg:p-16 text-white relative overflow-hidden shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-12"
          >
            {/* Background decorations */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#43A047]/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500/10 rounded-full blur-[80px] pointer-events-none" />
            
            <div className="space-y-6 max-w-xl z-10 relative">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full py-1.5 pl-2 pr-4"
              >
                <BookOpen className="w-4 h-4 text-[#43A047]" />
                <span className="text-xs font-medium text-gray-300">Stay Ahead of the Curve</span>
              </motion.div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight">
                Never Miss a{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#43A047] to-[#66BB6A]">
                  Learning Opportunity
                </span>
              </h2>

              <p className="text-gray-400 text-sm lg:text-base font-medium leading-relaxed">
                Register for upcoming webinars and watch recordings of past sessions to continuously build your skills.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-2 bg-gradient-to-r from-[#43A047] to-[#388E3C] text-white font-bold px-6 py-3.5 rounded-xl transition-all text-sm shadow-lg shadow-green-500/25 hover:shadow-green-500/40 group"
                >
                  <Mic2 className="w-4 h-4" />
                  <span>Explore Internships</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-2 border border-gray-700 hover:border-gray-500 hover:bg-white/5 text-white font-bold px-6 py-3.5 rounded-xl transition-colors text-sm bg-transparent"
                >
                  <Users className="w-4 h-4" />
                  <span>Become Ambassador</span>
                </motion.button>
              </div>
            </div>

            {/* Background Artwork */}
            <div className="hidden lg:block absolute right-0 top-0 h-full w-1/2 opacity-10 pointer-events-none z-0">
              <div className="absolute right-12 bottom-12 w-32 h-32 bg-white rounded-full" />
              <div className="absolute right-48 top-12 w-28 h-28 bg-white" />
              <div className="absolute right-12 top-24 w-24 h-48 border-t-[48px] border-l-[48px] border-transparent border-t-white" />
              <div className="absolute right-48 bottom-16 w-32 h-32 bg-white rounded-tl-full" />
            </div>
          </motion.div>
        </AnimatedSectionLate>

      </div>

    </motion.div>
  );
}