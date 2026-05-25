// import React from 'react';

// const AIInterviews = () => {
//   // Right stacked layout cards data
//   const rightFeatures = [
//     {
//       id: 1,
//       icon: (
//         <svg className="w-5 h-5 text-[#3FB628]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
//         </svg>
//       ),
//       title: "Realistic AI Interview Simulations",
//       desc: "Simulate real interview environments powered by AI. Perfect for students seeking online internship interview practice or job readiness."
//     },
//     {
//       id: 2,
//       icon: (
//         <svg className="w-5 h-5 text-[#3FB628]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
//         </svg>
//       ),
//       title: "Smart Feedback with AI",
//       desc: "Instantly analyze your answers, tone, and relevance. Improve every time with feedback tailored for virtual internship candidates."
//     },
//     {
//       id: 3,
//       icon: (
//         <svg className="w-5 h-5 text-[#3FB628]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
//         </svg>
//       ),
//       title: "Role-Based Mock Interviews",
//       desc: "Practice interviews for software engineering, product management, business, and digital marketing roles in our internee.pk platform."
//     }
//   ];

//   // Bottom row grid items data
//   const bottomCards = [
//     {
//       id: 1,
//       badge: "🏅",
//       title: "Build Real Interview Confidence",
//       desc: "Reduce anxiety and increase success rate through repeated AI-based mock interview sessions."
//     },
//     {
//       id: 2,
//       badge: "📈",
//       title: "Become Job-Ready Fast",
//       desc: "Structured interview training that prepares you for real-world scenarios. Perfect for students applying for internships."
//     },
//     {
//       id: 3,
//       badge: "📄",
//       title: "Track Progress with Reports",
//       desc: "Access detailed performance reports you can share with mentors and hiring managers."
//     }
//   ];

//   return (
//     <section className="w-full bg-[#0A0A0A] text-gray-100 py-24 px-6 lg:px-16 font-sans overflow-hidden">
//       <div className="max-w-screen-2xl mx-auto space-y-20">
        
//         {/* ================= TOP CONTENT LAYER (SPLIT VIEW) ================= */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
//           {/* Left Side Header Text */}
//           <div className="lg:col-span-5 space-y-6">
//             <div className="inline-flex items-center gap-2 bg-[#162512] text-[#42c729] rounded-full px-4 py-1.5 border border-[#224419]">
//               <span className="w-1.5 h-1.5 rounded-full bg-[#3FB628] animate-pulse"></span>
//               <span className="font-bold tracking-wider uppercase text-[10px]">AI Mock Interviews</span>
//             </div>
            
//             <h2 className="text-3xl sm:text-[42px] font-bold text-white leading-[1.15] tracking-tight">
//               Ace Your Internship <br className="hidden sm:inline" /> Interviews with AI Practice
//             </h2>
            
//             <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-md font-medium">
//               Get realistic, role-specific mock interviews for tech, marketing, and business. Receive instant feedback and build confidence before the real interview.
//             </p>
            
//             <div className="pt-2">
//               <button className="bg-[#3FB628] text-white px-8 py-3.5 rounded-full text-sm font-bold hover:bg-[#349e1e] transition-all duration-300 shadow-lg shadow-green-900/20 flex items-center gap-2 group">
//                 <span>Apply Now</span>
//                 <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
//                 </svg>
//               </button>
//             </div>
//           </div>

//           {/* Right Side Stacked List */}
//           <div className="lg:col-span-7 space-y-4">
//             {rightFeatures.map((item) => (
//               <div 
//                 key={item.id}
//                 className="bg-[#121212] border border-gray-900 rounded-2xl p-6 flex gap-5 hover:border-gray-800 transition-all duration-300 group"
//               >
//                 <div className="w-10 h-10 rounded-xl bg-[#161f14] border border-[#23381e] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
//                   {item.icon}
//                 </div>
//                 <div className="space-y-1.5">
//                   <h3 className="text-base font-bold text-white group-hover:text-[#3FB628] transition-colors">
//                     {item.title}
//                   </h3>
//                   <p className="text-gray-400 text-xs sm:text-sm leading-relaxed font-medium">
//                     {item.desc}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>

//         </div>

//         {/* ================= BOTTOM 3-COLUMN FEATURE MATRIX ================= */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-gray-900">
//           {bottomCards.map((card) => (
//             <div 
//               key={card.id}
//               className="bg-[#111111]/40 border border-gray-900/80 p-8 rounded-2xl space-y-4 hover:bg-[#121212] hover:border-gray-800 transition-all duration-300 group"
//             >
//               <div className="text-2xl bg-[#161616] w-12 h-12 rounded-xl flex items-center justify-center border border-gray-800 shadow-inner group-hover:scale-105 transition-transform">
//                 {card.badge}
//               </div>
              
//               <div className="space-y-2">
//                 <h4 className="text-[16px] font-bold text-gray-100 group-hover:text-[#3FB628] transition-colors">
//                   {card.title}
//                 </h4>
//                 <p className="text-gray-500 text-xs sm:text-sm leading-relaxed font-medium">
//                   {card.desc}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// };

// export default AIInterviews;


import React from "react";
import { motion } from "framer-motion";
import { 
  MessageCircle, 
  Lightbulb, 
  ShieldCheck, 
  Trophy, 
  TrendingUp, 
  FileText, 
  ArrowRight,
  Sparkles,
  Zap
} from "lucide-react";

const AIInterviews = () => {
  // Right stacked layout cards data
  const rightFeatures = [
    {
      id: 1,
      icon: MessageCircle,
      title: "Realistic AI Interview Simulations",
      desc: "Simulate real interview environments powered by AI. Perfect for students seeking online internship interview practice or job readiness."
    },
    {
      id: 2,
      icon: Lightbulb,
      title: "Smart Feedback with AI",
      desc: "Instantly analyze your answers, tone, and relevance. Improve every time with feedback tailored for virtual internship candidates."
    },
    {
      id: 3,
      icon: ShieldCheck,
      title: "Role-Based Mock Interviews",
      desc: "Practice interviews for software engineering, product management, business, and digital marketing roles."
    }
  ];

  // Bottom row grid items data
  const bottomCards = [
    {
      id: 1,
      icon: Trophy,
      title: "Build Real Interview Confidence",
      desc: "Reduce anxiety and increase success rate through repeated AI-based mock interview sessions."
    },
    {
      id: 2,
      icon: TrendingUp,
      title: "Become Job-Ready Fast",
      desc: "Structured interview training that prepares you for real-world scenarios. Perfect for students applying for internships."
    },
    {
      id: 3,
      icon: FileText,
      title: "Track Progress with Reports",
      desc: "Access detailed performance reports you can share with mentors and hiring managers."
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
    <section className="w-full bg-[#0a0a0a] text-gray-100 py-24 lg:py-32 px-6 lg:px-12 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-20">
        
        {/* ================= TOP CONTENT LAYER (SPLIT VIEW) ================= */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
        >
          
          {/* Left Side Header Text */}
          <motion.div variants={itemVariants} className="lg:col-span-5 space-y-7">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-green-900/20 text-[#43A047] rounded-full px-4 py-1.5 border border-green-800/50"
            >
              <div className="w-2 h-2 rounded-full bg-[#43A047] animate-pulse" />
              <span className="font-bold tracking-wider uppercase text-xs">AI Mock Interviews</span>
            </motion.div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight">
              Ace Your Internship{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#43A047] to-[#66BB6A]">
                Interviews
              </span>
              <br />with AI Practice
            </h2>
            
            <p className="text-gray-400 text-sm lg:text-base leading-relaxed max-w-md font-medium">
              Get realistic, role-specific mock interviews for tech, marketing, and business. Receive instant feedback and build confidence before the real interview.
            </p>
            
            <motion.div 
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="pt-2"
            >
              <button className="flex items-center gap-2 bg-gradient-to-r from-[#43A047] to-[#388E3C] text-white px-8 py-3.5 rounded-full text-sm font-bold shadow-lg shadow-green-500/25 hover:shadow-green-500/40 transition-all group">
                <span>Apply Now</span>
                <Sparkles className="w-4 h-4 group-hover:rotate-12 transition-transform" />
              </button>
            </motion.div>
          </motion.div>

          {/* Right Side Stacked List */}
          <motion.div variants={containerVariants} className="lg:col-span-7 space-y-4">
            {rightFeatures.map((item, index) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                whileHover={{ scale: 1.01, x: 4 }}
                className="bg-[#111111] border border-gray-800 rounded-2xl p-6 flex gap-5 hover:border-green-800/50 hover:bg-green-900/10 transition-all duration-300 group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-xl bg-green-900/30 border border-green-800/50 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <item.icon className="w-5 h-5 text-[#43A047]" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-base font-bold text-white group-hover:text-[#43A047] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </motion.div>

        {/* ================= BOTTOM 3-COLUMN FEATURE MATRIX ================= */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-gray-800"
        >
          {bottomCards.map((card) => (
            <motion.div
              key={card.id}
              variants={cardVariants}
              whileHover={{ y: -6, scale: 1.02 }}
              className="bg-[#111111]/60 border border-gray-800 p-8 rounded-2xl space-y-5 hover:bg-[#151515] hover:border-green-800/30 hover:shadow-lg hover:shadow-green-500/5 transition-all duration-300 group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-green-900/20 border border-green-800/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                <card.icon className="w-5 h-5 text-[#43A047]" />
              </div>
              
              <div className="space-y-2">
                <h4 className="text-base font-bold text-gray-100 group-hover:text-[#43A047] transition-colors">
                  {card.title}
                </h4>
                <p className="text-gray-500 text-sm leading-relaxed font-medium">
                  {card.desc}
                </p>
              </div>

              {/* Arrow indicator */}
              <div className="flex items-center gap-2 pt-2 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0">
                <span className="text-xs font-bold text-[#43A047]">Learn more</span>
                <ArrowRight className="w-3 h-3 text-[#43A047]" />
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default AIInterviews;