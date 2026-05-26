// import React, { useState } from 'react';

// const CareerPath = () => {
//   // Active feature tracking for interactive right-side preview element
//   const [activeTab, setActiveTab] = useState(0);

//   const features = [
//     {
//       title: "AI Resume Building",
//       desc: "Stand out in the AI job market with our professional resume-building guide. Learn how to highlight your AI skills, experience, and key accomplishments to catch the attention of top employers.",
//       icon: (
//         <svg className="w-5 h-5 text-[#3FB628]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
//         </svg>
//       )
//     },
//     {
//       title: "Cover Letter Creation",
//       desc: "Create compelling cover letters that showcase your passion for AI and demonstrate your value to employers. Make a strong first impression that speaks directly to your AI expertise.",
//       icon: (
//         <svg className="w-5 h-5 text-[#3FB628]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
//         </svg>
//       )
//     },
//     {
//       title: "Interview Preparation",
//       desc: "Ace your AI job interviews with confidence through practice questions, interview strategies, and tips for answering technical AI-related queries.",
//       icon: (
//         <svg className="w-5 h-5 text-[#3FB628]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
//         </svg>
//       )
//     },
//     {
//       title: "Industry Insights",
//       desc: "Stay ahead of the curve with up-to-date insights on the latest AI trends, market demands, and emerging technologies in the AI industry.",
//       icon: (
//         <svg className="w-5 h-5 text-[#3FB628]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
//         </svg>
//       )
//     }
//   ];

//   return (
//     <section className="w-full bg-white py-20 px-6 lg:px-16 font-sans">
//       <div className="max-w-screen-2xl mx-auto space-y-16">
        
//         {/* ================= TOP BLOCK: TWO COLUMN HERO GRID ================= */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
//           {/* Left Text Block */}
//           <div className="lg:col-span-6 space-y-5">
//             <div className="inline-flex items-center gap-1.5 bg-gray-100 rounded-full px-4 py-1.5 text-[11px] font-bold tracking-wide text-gray-500 border border-gray-200/50">
//               <span>🧭</span> Your AI Career Journey
//             </div>
//             <h2 className="text-3xl sm:text-[40px] font-black text-gray-950 tracking-tight leading-[1.15]">
//               Master the AI Career Path
//             </h2>
//             <p className="text-gray-500 text-xs sm:text-sm font-semibold leading-relaxed max-w-xl">
//               Looking to kickstart your career in the AI industry? Our AI Career Coach platform offers expert guidance in resume building, cover letter creation, interview preparation, quizzes, and industry insights—all designed to help you land your dream job in Artificial Intelligence.
//             </p>
//             <div className="flex items-center gap-3 pt-2">
//               <button className="bg-[#3FB628] text-white px-6 py-3 rounded-full text-xs font-bold hover:bg-[#349e1e] transition shadow-md shadow-green-100">
//                 Start Teaching Today
//               </button>
//               <button className="bg-white text-gray-700 border border-gray-200 px-6 py-3 rounded-full text-xs font-bold hover:bg-gray-50 transition">
//                 Explore Tools
//               </button>
//             </div>
//           </div>

//           {/* Right Interface Visual Box Block */}
//           <div className="lg:col-span-6 bg-gray-50 border border-gray-100 rounded-[32px] p-6 sm:p-8 relative">
//             <div className="grid grid-cols-2 gap-3 mb-6">
//               {features.map((f, i) => (
//                 <div 
//                   key={i}
//                   onClick={() => setActiveTab(i)}
//                   className={`p-3.5 rounded-xl border text-[11px] font-bold flex items-center gap-2.5 transition-all duration-200 cursor-pointer ${
//                     activeTab === i 
//                       ? 'bg-white border-[#3FB628] text-gray-900 shadow-sm' 
//                       : 'bg-white/60 border-gray-200/40 text-gray-500 hover:bg-white hover:border-gray-200'
//                   }`}
//                 >
//                   <div className="scale-90">{f.icon}</div>
//                   <span>{f.title}</span>
//                 </div>
//               ))}
//             </div>

//             {/* Simulated Path Status Bar Indicator */}
//             <div className="bg-[#0F0F0F] rounded-2xl p-5 border border-neutral-900 text-white relative overflow-hidden">
//               <div className="flex justify-between items-start">
//                 <div className="space-y-1">
//                   <span className="text-[10px] font-bold text-neutral-400 tracking-wider uppercase block">Career Growth</span>
//                   <h4 className="text-sm font-black tracking-tight text-white">Personalized Path</h4>
//                 </div>
//                 <span className="text-base text-[#3FB628] animate-pulse">✨</span>
//               </div>
//               <div className="w-full bg-neutral-800 h-2 rounded-full mt-5 overflow-hidden">
//                 <div 
//                   className="bg-[#3FB628] h-full rounded-full transition-all duration-500 ease-out"
//                   style={{ width: `${(activeTab + 1) * 25}%` }}
//                 />
//               </div>
//             </div>
//           </div>

//         </div>

//         {/* ================= BOTTOM BLOCK: 2x2 DETAILED CARDS GRID ================= */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
//           {features.map((item, idx) => (
//             <div 
//               key={idx}
//               className="bg-white border border-gray-100/80 rounded-3xl p-6 sm:p-8 space-y-4 shadow-[0_8px_24px_rgba(0,0,0,0.01)] hover:border-gray-200 hover:shadow-[0_12px_30px_rgba(63,182,40,0.03)] transition-all duration-300"
//             >
//               <div className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center shadow-inner">
//                 {item.icon}
//               </div>
//               <div className="space-y-2">
//                 <h3 className="text-base font-black text-gray-950 tracking-tight">
//                   {item.title}
//                 </h3>
//                 <p className="text-gray-500 text-xs sm:text-sm font-semibold leading-relaxed">
//                   {item.desc}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// };

// export default CareerPath;



"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

// Font Awesome Core aur Component Imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Solid Icons Imports
import { 
  faEdit, 
  faEnvelope, 
  faUserCheck, 
  faLightbulb, 
  faCompass,
  faArrowRight,
  faWandMagicSparkles,
  faChevronRight
} from "@fortawesome/free-solid-svg-icons";

const CareerPath = () => {
  // Active feature tracking for interactive right-side preview element
  const [activeTab, setActiveTab] = useState(0);

  const features = [
    {
      title: "AI Resume Building",
      desc: "Stand out in the AI job market with our professional resume-building guide. Learn how to highlight your AI skills, experience, and key accomplishments to catch the attention of top employers.",
      icon: faEdit, // FileEdit replacement
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Cover Letter Creation",
      desc: "Create compelling cover letters that showcase your passion for AI and demonstrate your value to employers. Make a strong first impression that speaks directly to your AI expertise.",
      icon: faEnvelope, // Mail replacement
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Interview Preparation",
      desc: "Ace your AI job interviews with confidence through practice questions, interview strategies, and tips for answering technical AI-related queries.",
      icon: faUserCheck, // UserCheck match
      color: "from-orange-500 to-orange-600"
    },
    {
      title: "Industry Insights",
      desc: "Stay ahead of the curve with up-to-date insights on the latest AI trends, market demands, and emerging technologies in the AI industry.",
      icon: faLightbulb, // Lightbulb match
      color: "from-pink-500 to-pink-600"
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section className="w-full bg-white py-20 lg:py-28 px-6 lg:px-12 font-sans">
      <div className="max-w-7xl mx-auto space-y-20">
        
        {/* ================= TOP BLOCK: TWO COLUMN HERO GRID ================= */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
        >
          
          {/* Left Text Block */}
          <motion.div variants={itemVariants} className="lg:col-span-6 space-y-7">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-green-50 border border-green-100 rounded-full px-4 py-1.5"
            >
              <FontAwesomeIcon icon={faCompass} className="text-xs text-[#43A047]" />
              <span className="font-bold tracking-wider uppercase text-xs text-[#43A047]">Your AI Career Journey</span>
            </motion.div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight leading-tight">
              Master the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#43A047] to-[#388E3C]">
                AI Career Path
              </span>
            </h2>
            
            <p className="text-gray-500 text-sm lg:text-base leading-relaxed max-w-xl font-medium">
              Looking to kickstart your career in the AI industry? Our AI Career Coach platform offers expert guidance in resume building, cover letter creation, interview preparation, quizzes, and industry insights—all designed to help you land your dream job in Artificial Intelligence.
            </p>
            
            <motion.div 
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-3 pt-2"
            >
              <button className="flex items-center gap-2 bg-gradient-to-r from-[#43A047] to-[#388E3C] text-white px-7 py-3.5 rounded-full text-sm font-bold shadow-lg shadow-green-500/25 hover:shadow-green-500/40 transition-all group">
                <span>Start Teaching Today</span>
                <FontAwesomeIcon icon={faWandMagicSparkles} className="text-xs group-hover:rotate-12 transition-transform" />
              </button>
              <button className="flex items-center gap-2 bg-white text-gray-700 border border-gray-200 px-7 py-3.5 rounded-full text-sm font-bold hover:border-gray-300 hover:shadow-lg transition-all">
                <span>Explore Tools</span>
                <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
              </button>
            </motion.div>
          </motion.div>

          {/* Right Interface Visual Box Block */}
          <motion.div variants={itemVariants} className="lg:col-span-6 bg-gray-50 border border-gray-100 rounded-[32px] p-6 sm:p-8 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#43A047]/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#43A047]/5 rounded-full blur-2xl" />
            
            <div className="relative z-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {features.map((f, i) => (
                  <motion.div 
                    key={i}
                    onClick={() => setActiveTab(i)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`p-4 rounded-xl border text-sm font-bold flex items-center gap-3 transition-all duration-200 cursor-pointer ${
                      activeTab === i 
                        ? 'bg-white border-[#43A047] text-gray-900 shadow-lg shadow-green-500/10' 
                        : 'bg-white/60 border-gray-200/40 text-gray-500 hover:bg-white hover:border-gray-200'
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${f.color} flex items-center justify-center flex-shrink-0`}>
                      <FontAwesomeIcon icon={f.icon} className="text-xs text-white" />
                    </div>
                    <span className="hidden sm:block">{f.title}</span>
                  </motion.div>
                ))}
              </div>

              {/* Simulated Path Status Bar Indicator */}
              <motion.div 
                key={activeTab}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-[#0a0a0a] rounded-2xl p-6 border border-gray-800 text-white relative overflow-hidden"
              >
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-[#43A047]/10 rounded-full blur-2xl" />
                
                <div className="relative z-10 flex justify-between items-start">
                  <div className="space-y-2">
                    <span className="text-xs font-bold text-neutral-400 tracking-wider uppercase block">Career Growth</span>
                    <h4 className="text-lg font-black tracking-tight text-white">
                      {features[activeTab].title}
                    </h4>
                  </div>
                  <div className="w-3 h-3 bg-[#43A047] rounded-full animate-pulse" />
                </div>
                
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-neutral-400 text-sm mt-3 font-medium"
                >
                  {features[activeTab].desc.substring(0, 100)}...
                </motion.p>
                
                <div className="w-full bg-neutral-800 h-2 rounded-full mt-5 overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${(activeTab + 1) * 25}%` }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="bg-gradient-to-r from-[#43A047] to-[#66BB6A] h-full rounded-full"
                  />
                </div>
                
                <div className="flex justify-between mt-2 text-xs font-bold text-neutral-500">
                  <span>Step {activeTab + 1} of 4</span>
                  <span>{(activeTab + 1) * 25}% Complete</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </motion.div>

        {/* ================= BOTTOM BLOCK: 2x2 DETAILED CARDS GRID ================= */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {features.map((item, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -6, scale: 1.01 }}
              className="bg-white border border-gray-100 rounded-3xl p-8 space-y-5 hover:shadow-2xl hover:shadow-green-500/10 transition-all duration-500 group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-50 to-green-100 border border-green-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <FontAwesomeIcon icon={item.icon} className="text-base text-[#43A047]" />
              </div>
              
              <div className="space-y-3">
                <h3 className="text-lg lg:text-xl font-bold text-gray-900 group-hover:text-[#43A047] transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm font-medium leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* Learn more indicator */}
              <div className="flex items-center gap-2 pt-2 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0">
                <span className="text-sm font-bold text-[#43A047]">Learn more</span>
                <FontAwesomeIcon icon={faChevronRight} className="text-xs text-[#43A047]" />
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default CareerPath;