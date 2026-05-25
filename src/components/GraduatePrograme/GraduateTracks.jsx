// import React from 'react';
// import { Link } from 'react-router-dom';

// const GraduateTracks = () => {
//   // Dataset matching the categories grid in image_561d8d.png
//   const tracks = [
//     {
//       id: 1,
//       category: "Health Care",
//       desc: "Step into the world where every second counts and lives are changed. Whether it's assisting in patient care, supporting medical research, or exploring health tech innovation our internships put you at the heart of the action. Join the frontlines of impact and make your mark in the future of healthcare.",
//       image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=600&auto=format&fit=crop", // Soft placeholder matching layout medical vibe
//       gradient: "from-gray-300 to-gray-400"
//     },
//     {
//       id: 2,
//       category: "Engineering",
//       desc: "Enter the realm where ideas turn into structures, circuits, and code. From building the future to solving real-world challenges, our engineering internships place you in the driver's seat of innovation. Whether it's civil, electrical, mechanical, or software get ready to design, build, and disrupt.",
//       image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=600&auto=format&fit=crop", // Engineering tech placeholder
//       gradient: "from-gray-400 to-gray-500"
//     },
//     {
//       id: 3,
//       category: "Information Technology",
//       desc: "Dive into the digital battlefield where code is power and innovation never sleeps. From software development to cybersecurity, data analytics to cloud computing our IT internships equip you to lead the tech revolution. Step in, gear up, and shape the future of technology.",
//       image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop", // Tech network digital circuitry image
//       isDigitalBg: true // Handled explicitly to show the circuit pattern style from image
//     }
//   ];

//   return (
//     <section className="w-full bg-white py-16 px-6 lg:px-16 font-sans select-none">
//       <div className="max-w-screen-2xl mx-auto space-y-10">
        
//         {/* ================= HEADER CONTROLS LAYER ================= */}
//         <div className="flex items-end justify-between w-full border-b border-gray-50 pb-4">
//           <div className="space-y-1.5">
//             <h2 className="text-3xl sm:text-[36px] font-black text-gray-950 tracking-tight">
//               Explore All Categories
//             </h2>
//             <p className="text-gray-400 text-xs sm:text-[13px] font-semibold">
//               Choose from diverse program tracks tailored to your interests
//             </p>
//           </div>
          
//           {/* Action Navigation Anchor link right aligned */}
//           <Link 
//             to="/all-programs" 
//             className="text-[#3FB628] hover:text-[#349e1e] text-xs sm:text-sm font-black tracking-tight flex items-center gap-1 transition-colors whitespace-nowrap"
//           >
//             View All Programs <span className="text-base font-normal">→</span>
//           </Link>
//         </div>

//         {/* ================= CARD GRID GENERATOR ================= */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {tracks.map((track) => (
//             <div 
//               key={track.id} 
//               className="bg-white border border-gray-100 rounded-[22px] overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.015)] hover:shadow-[0_15px_45px_rgba(0,0,0,0.025)] transition-all duration-300 flex flex-col h-full"
//             >
              
//               {/* Top Graphic Thumbnail Banner Area */}
//               <div className="h-44 w-full relative bg-neutral-100 overflow-hidden shrink-0">
//                 {track.isDigitalBg ? (
//                   /* Custom dark digital circuitry blueprint bg simulating the 3rd card */
//                   <div className="w-full h-full bg-[#031525] bg-gradient-to-br from-[#021324] to-[#0a2540] flex items-center justify-center p-4">
//                     <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#3FB628_1px,transparent_1px)] [background-size:16px_16px]"></div>
//                     <span className="text-cyan-500/20 text-5xl font-mono tracking-widest selection:bg-transparent">010101</span>
//                   </div>
//                 ) : (
//                   /* Soft monochrome gradient overlaid cover image matching cards 1 & 2 */
//                   <div className={`w-full h-full bg-gradient-to-b ${track.gradient} relative`}>
//                     <div className="absolute inset-0 bg-neutral-900/10 mix-blend-multiply"></div>
//                   </div>
//                 )}
                
//                 {/* Floating Absolute Green Capsule Badge */}
//                 <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm border border-gray-100 px-3 py-1 rounded-full shadow-sm">
//                   <span className="text-[#3FB628] text-[9px] font-black tracking-wide uppercase">
//                     Graduate Track
//                   </span>
//                 </div>
//               </div>

//               {/* Bottom Context Text Area */}
//               <div className="p-6 flex flex-col flex-grow space-y-3">
//                 <h3 className={`text-lg font-black tracking-tight ${track.id === 2 ? 'text-[#3FB628]' : 'text-gray-950'}`}>
//                   {track.category}
//                 </h3>
//                 <p className="text-gray-400 text-[11px] sm:text-xs font-semibold leading-relaxed text-justify">
//                   {track.desc}
//                 </p>
//               </div>

//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// };

// export default GraduateTracks;



"use client";

import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Stethoscope, Cpu, Code, Zap } from "lucide-react";

export default function GraduateTracks() {
  // Dataset matching the categories grid
  const tracks = [
    {
      id: 1,
      category: "Health Care",
      desc: "Step into the world where every second counts and lives are changed. Whether it's assisting in patient care, supporting medical research, or exploring health tech innovation our internships put you at the heart of the action.",
      icon: Stethoscope,
      gradient: "from-slate-300 to-slate-400"
    },
    {
      id: 2,
      category: "Engineering",
      desc: "Enter the realm where ideas turn into structures, circuits, and code. From building the future to solving real-world challenges, our engineering internships place you in the driver's seat of innovation.",
      icon: Cpu,
      gradient: "from-slate-400 to-slate-500",
      isFeatured: true
    },
    {
      id: 3,
      category: "Information Technology",
      desc: "Dive into the digital battlefield where code is power and innovation never sleeps. From software development to cybersecurity, data analytics to cloud computing our IT internships equip you to lead the tech revolution.",
      icon: Code,
      isDigitalBg: true
    }
  ];

  // Modern Clean Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section className="w-full bg-white py-20 lg:py-28 px-6 lg:px-12 font-sans antialiased max-w-7xl mx-auto">
      <div className="space-y-16">

        {/* ========================================================================= */}
        {/* 1. HEADER SECTIONS & NAVIGATION LINK                                      */}
        {/* ========================================================================= */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="flex flex-col sm:flex-row items-start sm:items-end justify-between w-full border-b border-gray-100 pb-6 gap-4"
        >
          <div className="space-y-3">
            <motion.h2 
              variants={itemVariants} 
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-950 tracking-tight"
            >
              Explore All{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#43A047] to-[#388E3C]">
                Categories
              </span>
            </motion.h2>
            <motion.p 
              variants={itemVariants} 
              className="text-gray-500 text-xs sm:text-sm font-medium"
            >
              Choose from diverse program tracks tailored to your interests and career goals
            </motion.p>
          </div>

          {/* View All Programs Action Trigger Anchor Link */}
          <motion.div variants={itemVariants} className="shrink-0">
            <Link
              to="/all-programs"
              className="inline-flex items-center gap-2 text-[#43A047] hover:text-[#388E3C] text-xs sm:text-sm font-bold transition-colors group"
            >
              <span>View All Programs</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </motion.div>
        </motion.div>

        {/* ========================================================================= */}
        {/* 2. CATEGORIES GRID CARDS GENERATOR                                        */}
        {/* ========================================================================= */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch"
        >
          {tracks.map((track) => {
            const IconComponent = track.icon;
            
            return (
              <motion.div
                key={track.id}
                variants={itemVariants}
                whileHover={{ y: -6, scale: 1.01 }}
                className={`bg-white border rounded-3xl overflow-hidden flex flex-col h-full group transition-all duration-300 ${
                  track.isFeatured
                    ? "border-[#43A047] shadow-[0_15px_40px_rgba(67,160,71,0.08)]"
                    : "border-gray-100 hover:border-gray-200 hover:shadow-xl hover:shadow-gray-100/40"
                }`}
              >
                {/* Top Half Area: Graphic Thumbnail Placeholder */}
                <div className="h-48 lg:h-52 w-full relative bg-gray-50 overflow-hidden shrink-0 select-none">
                  
                  {/* Conditional Digital Bg Pattern vs Regular Gradient Bg */}
                  {track.isDigitalBg ? (
                    <div className="w-full h-full bg-[#1A1A1A] flex items-center justify-center relative">
                      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#43A047_1px,transparent_1px)] [background-size:16px_16px]" />
                      <div className="relative z-10 grid grid-cols-3 gap-3 opacity-20">
                        {[...Array(9)].map((_, i) => (
                          <div key={i} className="w-7 h-7 border border-[#43A047] rounded flex items-center justify-center">
                            <Zap className="w-3 h-3 text-[#43A047] fill-[#43A047]" />
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className={`w-full h-full bg-gradient-to-br ${track.gradient} opacity-85`} />
                  )}

                  {/* Absolute Badge on top of Graphic area */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-xs border border-gray-100 px-3 py-1 rounded-full shadow-sm">
                    <span className="text-[#43A047] text-[10px] font-black uppercase tracking-wider block">
                      Graduate Track
                    </span>
                  </div>

                  {/* Icon Badge Holder Box Container */}
                  <div className={`absolute bottom-4 right-4 w-12 h-12 rounded-2xl flex items-center justify-center shadow-md ${
                    track.isFeatured
                      ? "bg-[#43A047] text-white"
                      : "bg-white text-gray-800"
                  }`}>
                    <IconComponent className="w-5 h-5 stroke-[2]" />
                  </div>
                </div>

                {/* Bottom Half Area: Content Text Blocks */}
                <div className="p-6 md:p-7 flex flex-col flex-1 justify-between gap-6">
                  <div className="space-y-3">
                    <h3 className={`text-lg font-black tracking-tight ${
                      track.isFeatured ? "text-[#43A047]" : "text-gray-900"
                    }`}>
                      {track.category}
                    </h3>
                    <p className="text-gray-500 text-xs sm:text-sm font-medium leading-relaxed line-clamp-4">
                      {track.desc}
                    </p>
                  </div>

                  {/* Interactive Learn More Trigger Action */}
                  <div className="pt-2 border-t border-gray-50 flex items-center transition-transform group-hover:translate-x-1 duration-200">
                    <Link
                      to={`/programs/${track.category.toLowerCase().replace(/\s+/g, "-")}`}
                      className="inline-flex items-center gap-1.5 text-[#43A047] text-xs sm:text-sm font-bold"
                    >
                      <span>Learn more</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}