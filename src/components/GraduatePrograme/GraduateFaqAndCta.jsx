// import React, { useState } from 'react';

// const GraduateFaqAndCta = () => {
//   // State hook to trace the current expanded index key inside accordion system
//   const [expandedIndex, setExpandedIndex] = useState(0); // 0 means first index is open by default like image

//   // FAQ Array Dataset mapped directly from image_5673e2.png
//   const faqs = [
//     {
//       question: "Who can join the graduate programs?",
//       answer: "Recent graduates and professionals looking to upskill. No prior experience needed - we provide complete training from basics to advanced."
//     },
//     {
//       question: "What is the program duration?",
//       answer: "The program spans exactly 12 weeks of intensive, structured layout learning including industry projects and live mentoring support."
//     },
//     {
//       question: "Do I get a job after completing the program?",
//       answer: "We provide direct job placement support and referrals to top-performing graduates across our network of hiring tech partners."
//     },
//     {
//       question: "Is the certificate recognized by employers?",
//       answer: "Yes, our industry-recognized credentials are highly valued and designed to significantly boost your professional CV and portfolio status."
//     },
//     {
//       question: "What if I need technical support?",
//       answer: "You will have 24/7 dedicated access to Discord developer communities and direct sync sessions with assigned engineering mentors."
//     },
//     {
//       question: "Can I switch programs after starting?",
//       answer: "Program migration is allowed within the first week of commencement after evaluation from our career counseling department."
//     }
//   ];

//   const toggleFaq = (index) => {
//     setExpandedIndex(expandedIndex === index ? null : index);
//   };

//   return (
//     <section className="w-full bg-white py-16 px-6 lg:px-16 font-sans select-none">
//        <motion.div 
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, margin: "-100px" }}
//       variants={containerVariants}
//       className="space-y-10"
//     >
//       <div className="text-center space-y-3">
//         <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
//           Frequently Asked Questions
//         </motion.h2>
//         <motion.p variants={itemVariants} className="text-gray-500 text-sm font-medium max-w-md mx-auto">
//           Find answers to common questions about our graduate programs
//         </motion.p>
//       </div>

//       {/* FAQ Accordion */}
//       <div className="space-y-3">
//         {faqs.map((faq, idx) => {
//           const isOpen = expandedIndex === idx;
//           return (
//             <motion.div
//               key={idx}
//               variants={itemVariants}
//               className="bg-white border border-gray-100 rounded-2xl overflow-hidden transition-all duration-300 hover:border-gray-200 hover:shadow-lg hover:shadow-gray-100/50"
//             >
//               <button
//                 onClick={() => toggleFaq(idx)}
//                 className="w-full flex items-center justify-between p-5 sm:p-6 text-left transition-colors focus:outline-none"
//               >
//                 <span className={`text-sm sm:text-base font-bold tracking-tight pr-4 transition-colors ${isOpen ? 'text-[#43A047]' : 'text-gray-900'}`}>
//                   {faq.question}
//                 </span>
//                 <motion.div
//                   animate={{ rotate: isOpen ? 180 : 0 }}
//                   transition={{ duration: 0.3 }}
//                   className={`shrink-0 p-1 rounded-full ${isOpen ? 'bg-[#43A047] text-white' : 'bg-gray-100 text-gray-400'}`}
//                 >
//                   <ChevronDown className="w-4 h-4" />
//                 </motion.div>
//               </button>

//               <AnimatePresence>
//                 {isOpen && (
//                   <motion.div
//                     initial={{ height: 0, opacity: 0 }}
//                     animate={{ height: "auto", opacity: 1 }}
//                     exit={{ height: 0, opacity: 0 }}
//                     transition={{ duration: 0.3, ease: "easeInOut" }}
//                     className="overflow-hidden"
//                   >
//                     <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-2 border-t border-gray-50">
//                       <p className="text-gray-500 text-sm font-medium leading-relaxed">
//                         {faq.answer}
//                       </p>
//                     </div>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </motion.div>
//           );
//         })}
//       </div>
//     </motion.div>

//     {/* ========================================================================= */}
//     {/* BOTTOM SEGMENT: HERO CALL TO ACTION                        */}
//     {/* ========================================================================= */}
//     <motion.div
//       initial={{ opacity: 0, y: 40 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.6, ease: "easeOut" }}
//       className="w-full bg-[#0a0a0a] text-white rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden"
//     >
//       {/* Background Decorations */}
//       <div className="absolute right-0 bottom-0 top-0 w-full md:w-1/2 opacity-10 pointer-events-none">
//         <div className="absolute bottom-[-100px] right-[-100px] w-80 h-80 border-[40px] border-white/20 rounded-full" />
//         <div className="absolute top-[-60px] right-[100px] w-40 h-40 bg-white/10 rounded-full" />
//         <div className="absolute top-[20%] right-[20px] w-20 h-20 bg-white/10 rounded-full" />
//       </div>
      
//       {/* Gradient Overlay */}
//       <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-transparent to-transparent pointer-events-none" />

//       {/* Content */}
//       <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
//         <div className="space-y-6 max-w-xl">
//           {/* Green Mini Pill */}
//           <motion.div 
//             initial={{ opacity: 0, x: -20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.2 }}
//             className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 px-4 py-1.5 rounded-full"
//           >
//             <div className="w-2 h-2 bg-[#43A047] rounded-full animate-pulse" />
//             <span className="text-white text-xs font-bold uppercase tracking-wider">
//               Ready to Transform Your Career?
//             </span>
//           </motion.div>

//           <div className="space-y-3">
//             <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
//               Transform Your Career<br />
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#43A047] to-[#66BB6A]">
//                 In Just 12 Weeks
//               </span>
//             </h3>
//             <p className="text-neutral-400 text-sm font-medium leading-relaxed max-w-md">
//               Join 500+ graduates who have successfully launched careers with our programs. Get job-ready skills, mentorship, and direct placement support.
//             </p>
//           </div>

//           {/* Stats */}
//           <div className="flex items-center gap-8 pt-2">
//             <div className="flex items-center gap-2">
//               <CheckCircle2 className="w-5 h-5 text-[#43A047]" />
//               <span className="text-sm font-bold text-white">500+ Placed</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <Zap className="w-5 h-5 text-[#43A047]" />
//               <span className="text-sm font-bold text-white">12 Weeks</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <MessageCircle className="w-5 h-5 text-[#43A047]" />
//               <span className="text-sm font-bold text-white">24/7 Support</span>
//             </div>
//           </div>
//         </div>

//         {/* CTA Buttons */}
//         <div className="flex flex-col sm:flex-row items-start gap-3 w-full sm:w-auto">
//           <motion.button
//             whileHover={{ scale: 1.02, y: -2 }}
//             whileTap={{ scale: 0.98 }}
//             className="flex items-center gap-2 bg-gradient-to-r from-[#43A047] to-[#388E3C] text-white px-7 py-3.5 rounded-full text-sm font-bold shadow-lg shadow-green-500/25 hover:shadow-green-500/40 transition-all whitespace-nowrap"
//           >
//             <span>Enroll Now</span>
//             <Zap className="w-4 h-4" />
//           </motion.button>
//           <motion.button
//             whileHover={{ scale: 1.02, y: -2 }}
//             whileTap={{ scale: 0.98 }}
//             className="flex items-center gap-2 bg-transparent hover:bg-white/5 text-white border border-neutral-700 hover:border-neutral-500 px-7 py-3.5 rounded-full text-sm font-bold transition-all whitespace-nowrap"
//           >
//             <span>Explore Programs</span>
//             <ArrowRight className="w-4 h-4" />
//           </motion.button>
//         </div>
//       </div>
//     </motion.div>

//   </div>
// </section>
//   );
// };

// export default GraduateFaqAndCta;

"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Zap, ArrowRight, CheckCircle2, MessageCircle } from "lucide-react";

export default function GraduateFaqAndCta() {
  // TypeScript ka <number> type remove kar diya hai
  const [expandedIndex, setExpandedIndex] = useState(0);

  const faqs = [
    { 
      question: "Who can join the graduate programs?", 
      answer: "Recent graduates and professionals looking to upskill. No prior experience needed - we provide complete training from basics to advanced." 
    },
    { 
      question: "What is the program duration?", 
      answer: "The program spans exactly 12 weeks of intensive, structured learning including industry projects and live mentoring support." 
    },
    { 
      question: "Do I get a job after completing the program?", 
      answer: "We provide direct job placement support and referrals to top-performing graduates across our network of hiring tech partners." 
    },
    { 
      question: "Is the certificate recognized by employers?", 
      answer: "Yes, our industry-recognized credentials are highly valued and designed to significantly boost your professional CV and portfolio." 
    },
    { 
      question: "What if I need technical support?", 
      answer: "You will have 24/7 dedicated access to Discord developer communities and direct sessions with assigned engineering mentors." 
    },
    { 
      question: "Can I switch programs after starting?", 
      answer: "Program migration is allowed within the first week after evaluation from our career counseling department." 
    }
  ];

  // Argument se type (: number) remove kar diya hai
  const toggleFaq = (index) => {
    setExpandedIndex(expandedIndex === index ? -1 : index);
  };

  // Modern Animation Variants
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

  return (
    <section className="w-full bg-white py-20 lg:py-28 px-6 lg:px-12 font-sans antialiased max-w-7xl mx-auto">
      <div className="max-w-4xl mx-auto space-y-24">

        {/* ========================================================================= */}
        {/* 1. ACCORDION SEGMENT: FREQUENTLY ASKED QUESTIONS                             */}
        {/* ========================================================================= */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="space-y-12"
        >
          {/* FAQ Section Header */}
          <div className="text-center space-y-3">
            <motion.h2 
              variants={itemVariants} 
              className="text-3xl sm:text-4xl font-black text-gray-950 tracking-tight"
            >
              Frequently Asked Questions
            </motion.h2>
            <motion.p 
              variants={itemVariants} 
              className="text-gray-500 text-sm md:text-base font-medium max-w-lg mx-auto"
            >
              Find answers to common questions about our graduate programs
            </motion.p>
          </div>

          {/* FAQ Accordion List */}
          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = expandedIndex === idx;
              return (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className={`bg-white border rounded-2xl overflow-hidden transition-all duration-300 ${
                    isOpen 
                      ? 'border-[#43A047] shadow-[0_10px_30px_rgba(67,160,71,0.04)]' 
                      : 'border-gray-100 hover:border-gray-200 hover:shadow-md hover:shadow-gray-100/50'
                  }`}
                >
                  {/* Trigger Button */}
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-center justify-between p-5 sm:p-6 text-left focus:outline-none select-none"
                  >
                    <span className={`text-sm sm:text-base font-bold tracking-tight pr-4 transition-colors duration-200 ${
                      isOpen ? 'text-[#43A047]' : 'text-gray-900'
                    }`}>
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className={`shrink-0 p-1.5 rounded-xl border transition-colors ${
                        isOpen 
                          ? 'bg-[#E8F5E9] border-[#43A047]/20 text-[#43A047]' 
                          : 'bg-gray-50 border-gray-100 text-gray-400'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4 stroke-[2.5]" />
                    </motion.div>
                  </button>

                  {/* Collapsible Content Area */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-gray-50">
                          <p className="text-gray-500 text-xs sm:text-sm leading-relaxed font-normal">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* ========================================================================= */}
        {/* 2. BOTTOM SEGMENT: PREMIUM CALL TO ACTION BANNER                          */}
        {/* ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full bg-[#1A1A1A] text-white rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl"
        >
          {/* Geometric Abstract Shapes */}
          <div className="absolute right-0 bottom-0 top-0 w-full md:w-1/2 opacity-10 pointer-events-none z-0">
            <div className="absolute bottom-[-100px] right-[-100px] w-80 h-80 border-[40px] border-white rounded-full" />
            <div className="absolute top-[-60px] right-[100px] w-40 h-40 bg-white rounded-full" />
            <div className="absolute top-[20%] right-[20px] w-20 h-20 bg-white rounded-full" />
          </div>
          
          {/* Dark Mirror Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A] via-transparent to-transparent pointer-events-none z-0" />
          
          {/* Banner Main Wrapper Content */}
          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12">
            <div className="space-y-6 max-w-xl">
              
              {/* Green Pulse Badge Pill */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-[#2E2E2E] border border-neutral-800 px-4 py-1.5 rounded-full"
              >
                <div className="w-2 h-2 bg-[#43A047] rounded-full animate-pulse" />
                <span className="text-gray-300 text-[10px] sm:text-xs font-bold uppercase tracking-wider">
                  Ready to Transform Your Career?
                </span>
              </motion.div>

              {/* Headings */}
              <div className="space-y-3">
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
                  Transform Your Career<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#43A047] to-[#66BB6A]">
                    In Just 12 Weeks
                  </span>
                </h3>
                <p className="text-neutral-400 text-xs sm:text-sm font-medium leading-relaxed max-w-md">
                  Join 500+ graduates who have successfully launched careers with our programs. Get job-ready skills, mentorship, and direct placement support.
                </p>
              </div>

              {/* Horizontal Micro Stats Metadata */}
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-2 border-t border-neutral-800/60">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#43A047]" />
                  <span className="text-xs font-bold text-white">500+ Placed</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-[#43A047]" />
                  <span className="text-xs font-bold text-white">12 Weeks Track</span>
                </div>
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4 text-[#43A047]" />
                  <span className="text-xs font-bold text-white">24/7 Support</span>
                </div>
              </div>

            </div>

            {/* Premium Interactive Action CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto shrink-0">
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#43A047] hover:bg-[#388E3C] text-white px-7 py-4 rounded-xl text-xs sm:text-sm font-bold shadow-lg shadow-green-900/20 transition-all whitespace-nowrap"
              >
                <span>Enroll Now</span>
                <Zap className="w-4 h-4 fill-white stroke-none" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-transparent hover:bg-neutral-800/40 text-white border border-neutral-700 hover:border-neutral-500 px-7 py-4 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap"
              >
                <span>Explore Programs</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}