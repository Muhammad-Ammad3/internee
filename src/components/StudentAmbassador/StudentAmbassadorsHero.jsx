// import React from 'react';
// import { 
//   ArrowRight, 
//   Users, 
//   BookOpen, 
//   Trophy, 
//   Sparkles, 
//   CheckSquare,
//   GraduationCap,
//   Code
// } from 'lucide-react';

// export default function StudentAmbassadorsHero() {
//   return (
//     <div className="w-full bg-white font-sans antialiased px-6 py-12 md:px-16 md:py-20 max-w-7xl mx-auto selection:bg-green-100">
      
//       {/* ==========================================
//           1. HERO MAIN SECTION 
//           ========================================== */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
        
//         {/* Left Side: Content */}
//         <div className="space-y-6 max-w-xl">
//           <span className="inline-block bg-[#F4F6F5] text-gray-700 text-sm font-medium px-4 py-1.5 rounded-full tracking-wide">
//             Student Ambassadors
//           </span>
          
//           <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-black leading-[1.1] tracking-tight">
//             Internee.pk Student <br /> Ambassadors
//           </h1>
          
//           <p className="text-gray-600 text-base md:text-lg leading-relaxed">
//             Join our global community of students who build real projects, grow 
//             leadership skills, and represent Internee.pk on campus.
//           </p>
          
//           <div className="flex flex-wrap gap-4 pt-2">
//             <button className="flex items-center gap-2 bg-[#43A047] hover:bg-[#388E3C] text-white font-semibold px-6 py-3.5 rounded-full transition-all duration-200 transform active:scale-95 shadow-md shadow-green-600/10">
//               Get Started <ArrowRight className="w-5 h-5" />
//             </button>
//             <button className="border border-gray-200 hover:border-gray-300 text-[#43A047] font-semibold px-7 py-3.5 rounded-full transition-colors bg-transparent">
//               View Community
//             </button>
//           </div>
//         </div>

//         {/* Right Side: Dashboard/Cards Visuals */}
//         <div className="space-y-6 lg:pl-6">
          
//           {/* Top White Card: Ambassador Hub */}
//           <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
//             <div className="flex items-center justify-between mb-6">
//               <div className="flex items-center gap-3">
//                 <div className="p-2.5 bg-[#E8F5E9] text-[#43A047] rounded-xl">
//                   <Users className="w-6 h-6" />
//                 </div>
//                 <div>
//                   <p className="text-xs text-gray-400 uppercase tracking-wider font-bold">AMBASSADOR HUB</p>
//                   <h3 className="text-lg font-bold text-gray-900">Community Pulse</h3>
//                 </div>
//               </div>
//               <span className="text-xs font-semibold bg-gray-50 text-gray-500 px-3 py-1 rounded-full border border-gray-100">
//                 Weekly
//               </span>
//             </div>
            
//             {/* Stats Inside Top Card */}
//             <div className="grid grid-cols-3 gap-2 text-center">
//               <div className="border border-dashed border-gray-200 rounded-xl p-3 bg-gray-50/50">
//                 <p className="text-xl md:text-2xl font-bold text-gray-900">34</p>
//                 <p className="text-[10px] text-gray-400 mt-0.5">Events</p>
//               </div>
//               <div className="border border-dashed border-gray-200 rounded-xl p-3 bg-gray-50/50">
//                 <p className="text-xl md:text-2xl font-bold text-gray-900">120+</p>
//                 <p className="text-[10px] text-gray-400 mt-0.5">Leads</p>
//               </div>
//               <div className="border border-dashed border-gray-200 rounded-xl p-3 bg-gray-50/50">
//                 <p className="text-xl md:text-2xl font-bold text-gray-900">8.4k</p>
//                 <p className="text-[10px] text-gray-400 mt-0.5">Campus Reach</p>
//               </div>
//             </div>
//           </div>

//           {/* Bottom Dark Card: Leadership Track */}
//           <div className="bg-[#121212] rounded-2xl p-6 text-white shadow-2xl relative overflow-hidden">
//             <div className="flex justify-between items-start mb-6">
//               <div>
//                 <p className="text-xs text-gray-400 uppercase tracking-wider font-medium mb-1">Leadership Track</p>
//                 <h3 className="text-2xl font-bold tracking-tight">Build Your Impact</h3>
//               </div>
//               <Sparkles className="w-5 h-5 text-[#43A047]" />
//             </div>

//             {/* Progress Bars */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
//               {/* Skill Growth */}
//               <div className="bg-[#1E1E1E] border border-neutral-800 p-4 rounded-xl">
//                 <div className="flex items-center gap-2 text-xs font-medium text-gray-300 mb-2">
//                   <BookOpen className="w-4 h-4 text-[#43A047]" /> Skill Growth
//                 </div>
//                 <div className="w-full bg-neutral-800 h-2 rounded-full overflow-hidden">
//                   <div className="bg-[#43A047] h-full w-[65%]" />
//                 </div>
//               </div>

//               {/* Recognition */}
//               <div className="bg-[#1E1E1E] border border-neutral-800 p-4 rounded-xl">
//                 <div className="flex items-center gap-2 text-xs font-medium text-gray-300 mb-2">
//                   <Trophy className="w-4 h-4 text-[#43A047]" /> Recognition
//                 </div>
//                 <div className="w-full bg-neutral-800 h-2 rounded-full overflow-hidden">
//                   <div className="bg-[#43A047] h-full w-[45%]" />
//                 </div>
//               </div>
//             </div>

//             {/* Verified Footer */}
//             <div className="flex justify-between items-center text-xs pt-2 border-t border-neutral-800 text-gray-400">
//               <span>Verified Projects</span>
//               <span className="text-[#43A047] font-semibold">+27%</span>
//             </div>
//           </div>

//         </div>
//       </div>

//       {/* ==========================================
//           2. BOTTOM FEATURES GRID (4 COLUMNS)
//           ========================================== */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
        
//         {/* Card 1: Get started */}
//         <div className="bg-white border border-gray-100 hover:border-gray-200 p-5 rounded-2xl flex items-start gap-4 transition-all hover:shadow-[0_10px_30px_rgb(0,0,0,0.03)] group">
//           <div className="p-3 bg-[#E8F5E9] text-[#43A047] rounded-xl shrink-0 group-hover:scale-105 transition-transform">
//             <BookOpen className="w-6 h-6" />
//           </div>
//           <div>
//             <h4 className="font-bold text-gray-900 text-base mb-1">Get started</h4>
//             <p className="text-gray-500 text-sm leading-snug">Become a Student Ambassador</p>
//           </div>
//         </div>

//         {/* Card 2: Community */}
//         <div className="bg-white border border-gray-100 hover:border-gray-200 p-5 rounded-2xl flex items-start gap-4 transition-all hover:shadow-[0_10px_30px_rgb(0,0,0,0.03)] group">
//           <div className="p-3 bg-[#E8F5E9] text-[#43A047] rounded-xl shrink-0 group-hover:scale-105 transition-transform">
//             <Users className="w-6 h-6" />
//           </div>
//           <div>
//             <h4 className="font-bold text-gray-900 text-base mb-1">Community</h4>
//             <p className="text-gray-500 text-sm leading-snug">Explore Student Ambassador profiles</p>
//           </div>
//         </div>

//         {/* Card 3: Startup Competition */}
//         <div className="bg-white border border-gray-100 hover:border-gray-200 p-5 rounded-2xl flex items-start gap-4 transition-all hover:shadow-[0_10px_30px_rgb(0,0,0,0.03)] group">
//           <div className="p-3 bg-[#E8F5E9] text-[#43A047] rounded-xl shrink-0 group-hover:scale-105 transition-transform">
//             <Trophy className="w-6 h-6" />
//           </div>
//           <div>
//             <h4 className="font-bold text-gray-900 text-base mb-1">Startup Competition</h4>
//             <p className="text-gray-500 text-sm leading-snug">Student competition for AI startups</p>
//           </div>
//         </div>

//         {/* Card 4: Founders Hub */}
//         <div className="bg-white border border-gray-100 hover:border-gray-200 p-5 rounded-2xl flex items-start gap-4 transition-all hover:shadow-[0_10px_30px_rgb(0,0,0,0.03)] group">
//           <div className="p-3 bg-[#E8F5E9] text-[#43A047] rounded-xl shrink-0 group-hover:scale-105 transition-transform">
//             <CheckSquare className="w-6 h-6" />
//           </div>
//           <div>
//             <h4 className="font-bold text-gray-900 text-base mb-1">Founders Hub</h4>
//             <p className="text-gray-500 text-sm leading-snug">A platform for entrepreneurs at any stage</p>
//           </div>
//         </div>

//       </div>

//       {/* ==========================================
//           3. WHY YOU SHOULD JOIN SECTION (NEW ADDITION)
//           ========================================== */}
//       <div className="space-y-12">
//         {/* Header content */}
//         <div className="space-y-3">
//           <h2 className="text-3xl md:text-4xl font-extrabold text-black tracking-tight">
//             Why you should join
//           </h2>
//           <p className="text-gray-500 text-base md:text-lg">
//             Build skills, grow your network, and create real impact on campus.
//           </p>
//         </div>

//         {/* 3-Column Info Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
//           {/* Card 1: Learn and Grow */}
//           <div className="bg-white border border-gray-100 rounded-2xl p-8 space-y-6 shadow-[0_4px_20px_rgb(0,0,0,0.01)] hover:shadow-[0_10px_30px_rgb(0,0,0,0.03)] transition-all">
//             <div className="text-[#43A047]">
//               <GraduationCap className="w-8 h-8 stroke-[2]" />
//             </div>
//             <div className="space-y-2">
//               <h3 className="text-lg font-bold text-gray-900">Learn and Grow</h3>
//               <p className="text-gray-500 text-sm leading-relaxed">
//                 Access exclusive learning resources and certifications to build your technical skills.
//               </p>
//             </div>
//           </div>

//           {/* Card 2: Build Community */}
//           <div className="bg-white border border-gray-100 rounded-2xl p-8 space-y-6 shadow-[0_4px_20px_rgb(0,0,0,0.01)] hover:shadow-[0_10px_30px_rgb(0,0,0,0.03)] transition-all">
//             <div className="text-[#43A047]">
//               <Users className="w-8 h-8 stroke-[2]" />
//             </div>
//             <div className="space-y-2">
//               <h3 className="text-lg font-bold text-gray-900">Build Community</h3>
//               <p className="text-gray-500 text-sm leading-relaxed">
//                 Connect with fellow students and mentors from around the world.
//               </p>
//             </div>
//           </div>

//           {/* Card 3: Create Solutions */}
//           <div className="bg-white border border-gray-100 rounded-2xl p-8 space-y-6 shadow-[0_4px_20px_rgb(0,0,0,0.01)] hover:shadow-[0_10px_30px_rgb(0,0,0,0.03)] transition-all">
//             <div className="text-[#43A047]">
//               <Code className="w-8 h-8 stroke-[2]" />
//             </div>
//             <div className="space-y-2">
//               <h3 className="text-lg font-bold text-gray-900">Create Solutions</h3>
//               <p className="text-gray-500 text-sm leading-relaxed">
//                 Work on real projects using cutting-edge Internee's technologies.
//               </p>
//             </div>
//           </div>

//         </div>
//       </div>

//     </div>
//   );
// }



"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  ArrowRight, Users, BookOpen, Trophy, Sparkles, 
  GraduationCap, Code, Play, Globe, Rocket, ChevronRight 
} from "lucide-react";

export default function StudentAmbassadorsHero() {
  // 1. Bottom Feature Highlight Matrix Dataset
  const features = [
    { title: "Get started", desc: "Become a Student Ambassador", icon: Play },
    { title: "Community", desc: "Explore Ambassador profiles", icon: Users },
    { title: "Startup Competition", desc: "Student competition for AI startups", icon: Trophy },
    { title: "Founders Hub", desc: "A platform for entrepreneurs at any stage", icon: Globe }
  ];

  // 2. Core Value Perks Dataset (Why You Should Join)
  const whyJoin = [
    { title: "Learn and Grow", desc: "Access exclusive learning resources and certifications to build your technical skills.", icon: GraduationCap },
    { title: "Build Community", desc: "Connect with fellow students and mentors from around the world.", icon: Users },
    { title: "Create Solutions", desc: "Work on real projects using cutting-edge Internee's technologies.", icon: Code }
  ];

  // Framework Master Animation Layout Configurations
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
    <div className="w-full bg-white font-sans antialiased px-6 py-20 lg:py-28 md:px-12 lg:px-16 max-w-7xl mx-auto selection:bg-green-100">

      {/* ========================================================================= */}
      {/* 1. HERO PRIMARY MAIN VIEW GRID SEGMENT                                    */}
      {/* ========================================================================= */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-28"
      >
        {/* Left Interactive Side: Contextual Content Rows */}
        <motion.div variants={itemVariants} className="space-y-7 max-w-xl text-left">
          <div className="inline-flex items-center gap-2 bg-[#E8F5E9] border border-[#43A047]/10 rounded-full px-4 py-1.5 select-none">
            <Sparkles className="w-3.5 h-3.5 text-[#43A047]" />
            <span className="text-[10px] sm:text-xs font-black text-[#388E3C] uppercase tracking-wider">
              Student Ambassadors
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-950 leading-tight tracking-tight">
            Internee.pk Student{" "} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#43A047] to-[#388E3C]">
              Ambassadors
            </span>
          </h1>
          
          <p className="text-gray-500 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            Join our global community of students who build real projects, grow leadership skills, and represent Internee.pk on campus.
          </p>
          
          {/* Action Trigger Handles Buttons */}
          <div className="flex flex-wrap gap-4 pt-2">
            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 bg-gradient-to-r from-[#43A047] to-[#388E3C] text-white font-bold px-6 py-3.5 rounded-xl text-xs sm:text-sm shadow-md shadow-green-900/10 group whitespace-nowrap"
            >
              <Rocket className="w-4 h-4 fill-white stroke-none" />
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 border border-gray-200 hover:border-gray-300 text-gray-700 font-bold px-6 py-3.5 rounded-xl text-xs sm:text-sm bg-transparent transition-colors whitespace-nowrap"
            >
              <Users className="w-4 h-4" />
              <span>View Community</span>
            </motion.button>
          </div>
        </motion.div>

        {/* Right Graphical Side: Micro Dashboard Matrix Showcase Visuals */}
        <motion.div variants={itemVariants} className="space-y-6 lg:pl-6 w-full">
          
          {/* Top Metric White Card: Ambassador Hub */}
          <motion.div 
            whileHover={{ y: -4 }}
            className="bg-white border border-gray-100 rounded-3xl p-6 shadow-xl shadow-gray-200/20 text-left"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-[#E8F5E9] text-[#43A047] rounded-xl">
                  <Users className="w-5 h-5 stroke-[2]" />
                </div>
                <div>
                  <p className="text-[9px] text-gray-400 uppercase tracking-widest font-black">AMBASSADOR HUB</p>
                  <h3 className="text-base font-black text-gray-950">Community Pulse</h3>
                </div>
              </div>
              <span className="text-[10px] font-bold bg-gray-50 text-gray-500 px-3 py-1 rounded-full border border-gray-100 select-none">
                Weekly
              </span>
            </div>
            
            {/* Split Stats Counter Row */}
            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="border border-dashed border-gray-200 rounded-xl p-3 bg-gray-50/50">
                <p className="text-lg sm:text-xl font-black text-gray-950">34</p>
                <p className="text-[10px] text-gray-400 mt-0.5 font-semibold">Events</p>
              </div>
              <div className="border border-dashed border-gray-200 rounded-xl p-3 bg-gray-50/50">
                <p className="text-lg sm:text-xl font-black text-gray-950">120+</p>
                <p className="text-[10px] text-gray-400 mt-0.5 font-semibold">Leads</p>
              </div>
              <div className="border border-dashed border-gray-200 rounded-xl p-3 bg-gray-50/50">
                <p className="text-lg sm:text-xl font-black text-gray-950">8.4k</p>
                <p className="text-[10px] text-gray-400 mt-0.5 font-semibold">Reach</p>
              </div>
            </div>
          </motion.div>

          {/* Bottom Branding Dark Card: Leadership Metrics Track */}
          <motion.div 
            whileHover={{ y: -4 }}
            className="bg-[#1A1A1A] rounded-3xl p-6 text-white shadow-2xl relative overflow-hidden text-left"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#43A047]/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="flex justify-between items-start mb-6 relative z-10">
              <div>
                <p className="text-[9px] text-gray-400 uppercase tracking-widest font-bold mb-0.5">Leadership Track</p>
                <h3 className="text-xl font-black tracking-tight">Build Your Impact</h3>
              </div>
              <Sparkles className="w-4 h-4 text-[#43A047]" />
            </div>

            {/* Simulated Animated Progress Tracker Bars */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 relative z-10">
              <div className="bg-[#262626] border border-neutral-800 p-4 rounded-xl">
                <div className="flex items-center gap-2 text-xs font-semibold text-gray-300 mb-2.5">
                  <BookOpen className="w-3.5 h-3.5 text-[#43A047]" /> Skill Growth
                </div>
                <div className="w-full bg-neutral-800 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-[#43A047] h-full rounded-full w-[65%]" />
                </div>
              </div>

              <div className="bg-[#262626] border border-neutral-800 p-4 rounded-xl">
                <div className="flex items-center gap-2 text-xs font-semibold text-gray-300 mb-2.5">
                  <Trophy className="w-3.5 h-3.5 text-[#43A047]" /> Recognition
                </div>
                <div className="w-full bg-neutral-800 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-[#43A047] h-full rounded-full w-[45%]" />
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center text-[11px] font-semibold pt-3 border-t border-neutral-800 text-gray-400 relative z-10">
              <span>Verified Campus Projects</span>
              <span className="text-[#43A047] font-black">+27%</span>
            </div>
          </motion.div>

        </motion.div>
      </motion.div>

      {/* ========================================================================= */}
      {/* 2. SUB-FEATURES SUMMARY HORIZONTAL GRID PANEL                             */}
      {/* ========================================================================= */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-32"
      >
        {features.map((feature, index) => {
          const FeatureIcon = feature.icon;
          return (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -5, scale: 1.01 }}
              className="bg-white border border-gray-100 p-5 rounded-2xl flex items-start gap-4 hover:shadow-xl hover:shadow-gray-200/30 hover:border-green-200 transition-all group cursor-pointer text-left"
            >
              <div className="p-2.5 bg-[#E8F5E9] text-[#43A047] rounded-xl shrink-0 group-hover:scale-105 group-hover:bg-[#43A047] group-hover:text-white transition-all">
                <FeatureIcon className="w-4 h-4 stroke-[2]" />
              </div>
              <div>
                <h4 className="font-black text-gray-900 text-sm mb-1 group-hover:text-[#43A047] transition-colors">
                  {feature.title}
                </h4>
                <p className="text-gray-400 text-xs font-medium leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* ========================================================================= */}
      {/* 3. CORE BENEFITS CHANNELS: WHY CHOOSE AMBASSADORSHIP LAYOUT               */}
      {/* ========================================================================= */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="space-y-14"
      >
        <motion.div variants={itemVariants} className="space-y-3 text-left">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-950 tracking-tight">
            Why you should{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#43A047] to-[#388E3C]">
              join
            </span>
          </h2>
          <p className="text-gray-500 text-xs sm:text-sm md:text-base font-medium">
            Build enterprise-ready tech skills, grow your global network, and create real campus impact.
          </p>
        </motion.div>

        {/* 3-Column Visual Value-Proposition Matrix */}
        <motion.div 
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {whyJoin.map((item, index) => {
            const WhyIcon = item.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -6, scale: 1.01 }}
                className="bg-white border border-gray-100 rounded-3xl p-6 lg:p-8 space-y-6 hover:shadow-2xl hover:shadow-gray-200/40 hover:border-green-200/70 transition-all duration-300 cursor-pointer group text-left flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-[#E8F5E9] rounded-xl border border-green-100/10 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <WhyIcon className="w-5 h-5 text-[#43A047] stroke-[2]" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-black text-gray-950 group-hover:text-[#43A047] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-xs font-medium leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
                
                {/* Micro Indicator Trigger Icon Link */}
                <div className="flex items-center gap-1 text-[#43A047] opacity-0 group-hover:opacity-100 transition-all duration-300 pt-4">
                  <span className="text-xs font-black">Learn more</span>
                  <ChevronRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>

    </div>
  );
}