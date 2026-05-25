// import React from 'react';
// import { CheckCircle2, Rocket } from 'lucide-react';

// export default function ImpactAndStartJourney() {
//   const checkmarks = [
//     "20,000+ students empowered with real-world experience",
//     "200+ companies partnering with us for talent development",
//     "50+ diverse skill tracks covering various tech domains",
//     "98% success rate in securing internships or jobs",
//     "2 years of rapid growth and excellence since 2023",
//     "4 major national and international awards"
//   ];

//   return (
//     <div className="w-full bg-white font-sans antialiased px-6 py-16 md:px-16 md:py-24 max-w-7xl mx-auto space-y-28">
      
//       {/* ==========================================
//           1. REAL IMPACT, REAL RESULTS SECTION
//           ========================================== */}
//       <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
//         {/* Left Side: Headings & Checkmarks */}
//         <div className="lg:col-span-6 space-y-6">
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-950 tracking-tight leading-tight">
//             Real Impact, <span className="text-[#43A047]">Real Results</span>
//           </h2>
          
//           <p className="text-gray-500 text-sm md:text-base leading-relaxed font-normal max-w-xl">
//             We measure our success by the careers launched, skills developed, and lives transformed. Every statistic represents a student who changed their trajectory through Internee.pk.
//           </p>

//           {/* Checkmark List */}
//           <div className="space-y-3.5 pt-2">
//             {checkmarks.map((text, index) => (
//               <div key={index} className="flex items-start gap-3 text-gray-700 text-xs md:text-sm font-medium leading-relaxed">
//                 <CheckCircle2 className="w-5 h-5 text-[#43A047] shrink-0 mt-0.5" />
//                 <span>{text}</span>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Right Side: Mission, Vision, Promise Stack Card */}
//         <div className="lg:col-span-6 bg-[#E8F5E9]/40 border-2 border-[#43A047]/5 rounded-3xl p-6 md:p-8 shadow-[0_10px_40px_rgba(0,0,0,0.01)]">
//           <div className="space-y-4">
            
//             {/* Box 1: Our Mission */}
//             <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm space-y-1.5">
//               <span className="text-[10px] uppercase font-black text-gray-400 tracking-wider block">Our Mission</span>
//               <p className="text-gray-950 font-bold text-sm md:text-base leading-snug">
//                 Bridge the gap between fresh talent and industry needs through experiential learning.
//               </p>
//             </div>

//             {/* Box 2: Our Vision */}
//             <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm space-y-1.5">
//               <span className="text-[10px] uppercase font-black text-gray-400 tracking-wider block">Our Vision</span>
//               <p className="text-gray-950 font-bold text-sm md:text-base leading-snug">
//                 Become South Asia's premier platform transforming youth into industry-ready professionals.
//               </p>
//             </div>

//             {/* Box 3: Our Promise */}
//             <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm space-y-1.5">
//               <span className="text-[10px] uppercase font-black text-gray-400 tracking-wider block">Our Promise</span>
//               <p className="text-gray-950 font-bold text-sm md:text-base leading-snug">
//                 Every student deserves a chance to succeed. We provide the platform, mentorship, and opportunity.
//               </p>
//             </div>

//           </div>
//         </div>

//       </div>

//       {/* ==========================================
//           2. DARK FOOTER CTA BANNER
//           ========================================== */}
//       <div className="w-full bg-[#1A1A1A] rounded-3xl p-8 md:p-12 lg:p-16 text-white relative overflow-hidden shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-12">
        
//         {/* Left Layout Content */}
//         <div className="space-y-6 max-w-xl z-10 relative">
          
//           {/* Tag Badge */}
//           <div className="inline-flex items-center gap-2 bg-[#2E2E2E] border border-neutral-800 rounded-full py-1.5 pl-2 pr-4 text-xs font-semibold">
//             <span className="bg-[#43A047] text-white text-[10px] uppercase font-black px-2 py-0.5 rounded-full tracking-wide">
//               Featured
//             </span>
//             <span className="text-gray-300 text-[11px] md:text-xs">Join Our Growing Community</span>
//           </div>

//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight">
//             Start Your Journey <br /> With Internee.pk
//           </h2>

//           <p className="text-neutral-400 text-xs md:text-sm leading-relaxed max-w-lg">
//             Join 20,000+ students who've transformed their careers. Be part of a movement building Pakistan's tech future.
//           </p>

//           {/* Action Buttons */}
//           <div className="flex flex-wrap gap-4 pt-2">
//             <button className="bg-[#43A047] hover:bg-[#388E3C] text-white font-bold px-6 py-3.5 rounded-xl transition-all active:scale-95 text-sm flex items-center gap-2 shadow-lg shadow-green-900/20">
//               Explore Internships <Rocket className="w-4 h-4" />
//             </button>
//             <button className="border border-neutral-700 hover:border-neutral-500 hover:bg-neutral-800/40 text-white font-bold px-6 py-3.5 rounded-xl transition-colors text-sm bg-transparent">
//               Become Ambassador
//             </button>
//           </div>
//         </div>

//         {/* Right Side Pattern Simulation (Matching exact image background artwork lines) */}
//         <div className="hidden lg:block absolute right-0 top-0 h-full w-1/2 opacity-10 pointer-events-none select-none z-0">
//           <div className="absolute right-12 bottom-12 w-32 h-32 bg-white rounded-full" />
//           <div className="absolute right-48 top-12 w-28 h-28 bg-white" />
//           <div className="absolute right-12 top-24 w-24 h-48 border-t-[48px] border-l-[48px] border-transparent border-t-white" />
//           <div className="absolute right-48 bottom-16 w-32 h-32 bg-white rounded-tl-full" />
//         </div>

//       </div>

//     </div>
//   );
// }



"use client";


import React from "react";
import { motion } from "framer-motion"; 
import { 
  Rocket, Target, Eye, HandHeart, ArrowRight, Sparkles, 
  Award, TrendingUp, Users, Briefcase, GraduationCap 
} from "lucide-react";

export default function ImpactAndStartJourney() {
  // 1. Checkmarks With Contextual Icons Dataset
  const checkmarks = [
    { text: "20,000+ students empowered with real-world experience", icon: Users },
    { text: "200+ companies partnering with us for talent development", icon: Briefcase },
    { text: "50+ diverse skill tracks covering various tech domains", icon: GraduationCap },
    { text: "98% success rate in securing internships or jobs", icon: TrendingUp },
    { text: "2 years of rapid growth and excellence since 2023", icon: Award },
    { text: "4 major national and international awards", icon: Award }
  ];

  // 2. Core Pillars Dataset (Mission, Vision, Promise)
  const pillars = [
    { label: "Our Mission", text: "Bridge the gap between fresh talent and industry needs through experiential learning.", icon: Target },
    { label: "Our Vision", text: "Become South Asia's premier platform transforming youth into industry-ready professionals.", icon: Eye },
    { label: "Our Promise", text: "Every student deserves a chance to succeed. We provide the platform, mentorship, and opportunity.", icon: HandHeart }
  ];

  // Clean Master Stagger Animations Configurations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.08, delayChildren: 0.1 } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: "easeOut" } 
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.96 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { duration: 0.5, ease: "easeOut" } 
    }
  };

  return (
    <div className="w-full bg-white font-sans antialiased px-6 py-20 lg:py-28 md:px-12 lg:px-16 max-w-7xl mx-auto space-y-28">
      
      {/* ========================================================================= */}
      {/* 1. REAL IMPACT, REAL RESULTS DATA ROW SHOWCASE                            */}
      {/* ========================================================================= */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
      >
        {/* Left Side Viewport Columns: Primary Headings & Stats Checkmarks */}
        <motion.div variants={itemVariants} className="lg:col-span-6 space-y-7">
          <div className="space-y-3">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-950 tracking-tight leading-tight">
              Real Impact,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#43A047] to-[#388E3C]">
                Real Results
              </span>
            </h2>
            <p className="text-gray-500 text-xs sm:text-sm md:text-base leading-relaxed font-medium max-w-xl">
              We measure our success by the careers launched, skills developed, and lives transformed. Every statistic represents a student who changed their trajectory through Internee.pk.
            </p>
          </div>

          {/* Interactive Checkmarks Metrics Rows */}
          <div className="space-y-3.5 pt-2">
            {checkmarks.map((item, index) => {
              const CheckIcon = item.icon;
              return (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  whileHover={{ x: 4 }}
                  className="flex items-start gap-3.5 text-gray-700 text-xs sm:text-sm font-semibold leading-relaxed cursor-pointer group"
                >
                  <div className="w-6 h-6 rounded-full bg-[#E8F5E9] border border-[#43A047]/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#43A047] group-hover:text-white transition-colors duration-200">
                    <CheckIcon className="w-3 h-3 text-[#43A047] group-hover:text-white transition-colors" />
                  </div>
                  <span className="group-hover:text-gray-950 transition-colors pt-0.5">
                    {item.text}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Right Side Viewport Columns: Core Strategic Stack Matrix Cards */}
        <motion.div variants={itemVariants} className="lg:col-span-6 bg-[#F8FAFC] border border-gray-100 rounded-3xl p-5 sm:p-8 shadow-xs">
          <div className="space-y-4">
            {pillars.map((pillar, index) => {
              const PillarIcon = pillar.icon;
              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{ scale: 1.01, x: 2 }}
                  className="bg-white rounded-2xl p-5 border border-gray-100/80 shadow-xs hover:shadow-xl hover:shadow-gray-200/30 hover:border-gray-200 transition-all duration-300 group cursor-pointer"
                >
                  <div className="flex items-center gap-3 mb-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[#E8F5E9] text-[#43A047] flex items-center justify-center border border-green-100/20 group-hover:scale-105 transition-transform">
                      <PillarIcon className="w-4 h-4 stroke-[2]" />
                    </div>
                    <span className="text-[10px] uppercase font-black text-gray-400 tracking-wider">
                      {pillar.label}
                    </span>
                  </div>
                  <p className="text-gray-600 font-medium text-xs sm:text-sm leading-relaxed group-hover:text-gray-950 transition-colors">
                    {pillar.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </motion.div>

      {/* ========================================================================= */}
      {/* 2. BOTTOM SEGMENT: PREMIUM BRAND DARK FOOTER CTA BANNER                   */}
      {/* ========================================================================= */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full bg-[#1A1A1A] rounded-3xl p-8 md:p-12 lg:p-16 text-white relative overflow-hidden shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-12"
      >
        {/* Modern Blur Gradient Background Radial Layers */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#43A047]/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-emerald-500/5 rounded-full blur-[80px] pointer-events-none" />

        {/* Action Content Layout Elements */}
        <div className="space-y-6 max-w-xl z-10 relative text-left w-full">
          
          {/* Micro Premium Glowing Tag Badge */}
          <div className="inline-flex items-center gap-2 bg-[#2E2E2E] border border-neutral-800 rounded-full py-1.5 pl-2 pr-4 select-none">
            <div className="w-5 h-5 bg-[#43A047]/20 border border-[#43A047]/30 rounded-full flex items-center justify-center">
              <Sparkles className="w-3 h-3 text-[#43A047] fill-[#43A047]" />
            </div>
            <span className="text-[10px] sm:text-xs font-bold text-gray-300 uppercase tracking-wider">
              Join Our Growing Community
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-[1.15] tracking-tight">
            Start Your Journey <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#43A047] to-[#66BB6A]">
              With Internee.pk
            </span>
          </h2>
          
          <p className="text-neutral-400 text-xs sm:text-sm font-medium leading-relaxed max-w-lg">
            Join 20,000+ students who've transformed their careers. Be part of a movement building Pakistan's tech future.
          </p>

          {/* Interactive Trigger CTA Action Grid buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#43A047] hover:bg-[#388E3C] text-white font-bold px-6 py-4 rounded-xl text-xs sm:text-sm shadow-lg shadow-green-900/20 group whitespace-nowrap"
            >
              <Rocket className="w-4 h-4 fill-white stroke-none group-hover:animate-bounce" />
              <span>Explore Internships</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto flex items-center justify-center border border-neutral-700 hover:border-neutral-500 hover:bg-neutral-800/40 text-white font-bold px-6 py-4 rounded-xl transition-all text-xs sm:text-sm bg-transparent whitespace-nowrap"
            >
              Become Ambassador
            </motion.button>
          </div>
        </div>

        {/* Abstract Geometrics Pattern Overlay Grid (Visible on Desktop Screen Sizes) */}
        <div className="hidden lg:block absolute right-0 top-0 h-full w-1/2 opacity-5 pointer-events-none select-none z-0">
          <div className="absolute right-12 bottom-12 w-32 h-32 bg-white rounded-full" />
          <div className="absolute right-48 top-12 w-28 h-28 bg-white rounded-2xl" />
          <div className="absolute right-48 bottom-16 w-32 h-32 bg-white rounded-tl-full" />
        </div>
      </motion.div>

    </div>
  );
}