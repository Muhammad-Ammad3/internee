// import React, { useState } from 'react';
// import { ChevronDown } from 'lucide-react';

// export default function FaqsAndCtaBanner() {
//   // State to track which FAQ is currently open
//   const [openFaq, setOpenFaq] = useState(null);

//   const faqs = [
//     {
//       id: 1,
//       question: "What are the eligibility requirements?",
//       answer: "You must be a currently enrolled university or college student with a passion for technology, community building, and leadership. Basic management or technical skills are a plus!"
//     },
//     {
//       id: 2,
//       question: "How much time does this require?",
//       answer: "The program requires approximately 8-10 hours per week. It is completely flexible, allowing you to manage it alongside your academic schedule and exams."
//     },
//     {
//       id: 3,
//       question: "Is there a time commitment or contract?",
//       answer: "Yes, we look for a commitment of 6-12 months to ensure real campus impact and complete execution of the planned leadership track and events."
//     },
//     {
//       id: 4,
//       question: "Do I get paid for being an ambassador?",
//       answer: "Yes! Ambassadors are eligible for a performance-based stipend, exclusive rewards, event hosting budgets, and milestones incentives."
//     },
//     {
//       id: 5,
//       question: "Can I become an ambassador from any city?",
//       answer: "Absolutely! Internee.pk Student Ambassador program is open to students from all major cities across Pakistan."
//     },
//     {
//       id: 6,
//       question: "What support will I get?",
//       answer: "You will receive continuous mentorship, access to core team communication tools, promotional designs, financial sponsorships for events, and official swag kits."
//     }
//   ];

//   const toggleFaq = (id) => {
//     setOpenFaq(openFaq === id ? null : id);
//   };

//   return (
//     <div className="w-full bg-white font-sans antialiased px-6 py-16 md:px-16 md:py-24 max-w-7xl mx-auto space-y-24">

//       {/* ==========================================
//           1. FREQUENTLY ASKED QUESTIONS SECTION
//           ========================================== */}
//       <div className="max-w-3xl mx-auto space-y-12">
//         {/* Header */}
//         <div className="text-center space-y-3">
//           <h2 className="text-3xl md:text-4xl font-extrabold text-black tracking-tight">
//             Frequently Asked Questions
//           </h2>
//           <p className="text-gray-500 text-sm md:text-base">
//             Everything you need to know about being an ambassador
//           </p>
//         </div>

//         {/* Accordion List */}
//         <div className="space-y-4">
//           {faqs.map((faq) => {
//             const isOpen = openFaq === faq.id;
//             return (
//               <div
//                 key={faq.id}
//                 className={`border rounded-xl transition-all duration-200 overflow-hidden bg-white ${
//                   isOpen ? 'border-[#43A047]' : 'border-gray-200'
//                 }`}
//               >
//                 {/* Trigger Button */}
//                 <button
//                   onClick={() => toggleFaq(faq.id)}
//                   className="w-full text-left px-6 py-4 flex items-center justify-between gap-4 font-bold text-gray-900 text-sm md:text-base select-none hover:bg-gray-50/50 transition-colors"
//                 >
//                   <span>{faq.question}</span>
//                   <ChevronDown
//                     className={`w-5 h-5 text-gray-400 shrink-0 transition-transform duration-200 ${
//                       isOpen ? 'transform rotate-180 text-[#43A047]' : ''
//                     }`}
//                   />
//                 </button>

//                 {/* Animated content box */}
//                 <div
//                   className={`transition-all duration-200 ease-in-out ${
//                     isOpen ? 'max-h-40 border-t border-gray-100' : 'max-h-0'
//                   }`}
//                 >
//                   <div className="p-6 text-gray-500 text-xs md:text-sm leading-relaxed">
//                     {faq.answer}
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>

//       {/* ==========================================
//           2. PREMIUM DARK CTA BANNER
//           ========================================== */}
//       <div className="w-full bg-[#1A1A1A] rounded-3xl p-8 md:p-12 lg:p-16 text-white relative overflow-hidden shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-12">

//         {/* Left Side: Content Text */}
//         <div className="space-y-6 max-w-xl z-10 relative">

//           {/* Badge */}
//           <div className="inline-flex items-center gap-2 bg-[#2E2E2E] border border-neutral-800 rounded-full py-1.5 pl-2 pr-4 text-xs font-semibold">
//             <span className="bg-[#43A047] text-white text-[10px] uppercase font-black px-2 py-0.5 rounded-full tracking-wide">
//               Open
//             </span>
//             <span className="text-gray-300">Join 300+ Student Ambassadors</span>
//           </div>

//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight">
//             Make Impact on Your <br /> Campus & Beyond
//           </h2>

//           <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
//             Represent Internee.pk, grow your leadership skills, earn stipends, and create opportunities for 1000+ students. Apply now to become an ambassador!
//           </p>

//           <div className="flex flex-wrap gap-4 pt-2">
//             <button className="bg-[#43A047] hover:bg-[#388E3C] text-white font-bold px-6 py-3.5 rounded-xl transition-all active:scale-95 text-sm flex items-center gap-2 shadow-lg shadow-green-900/20">
//               Apply Now 🚀
//             </button>
//             <button className="border border-neutral-700 hover:border-neutral-500 hover:bg-neutral-800/40 text-white font-bold px-6 py-3.5 rounded-xl transition-colors text-sm bg-transparent">
//               View Community
//             </button>
//           </div>
//         </div>

//         {/* Right Side: Vector Geometrical Shapes Background Simulation */}
//         <div className="hidden lg:block absolute right-0 top-0 h-full w-1/2 opacity-15 pointer-events-none select-none z-0">
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

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Font Awesome Core aur Component Imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Solid Icons Imports
import {
  faChevronDown,
  faRocket,
  faArrowRight,
  faWandMagicSparkles,
  faAward,
  faCheckCircle,
  faGlobe,
  faUsers,
  faCalendarAlt,
  faDollarSign,
  faCommentAlt,
  faHeadphones,
  faPlay,
  faEye,
  faHeart,
  faStar,
  faEnvelope,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

export default function FaqsAndCtaBanner() {
  // State to track which FAQ is currently open
  const [openFaq, setOpenFaq] = useState(null);

  // FAQ items data with Font Awesome icons
  const faqs = [
    {
      id: 1,
      question: "What are the eligibility requirements?",
      answer:
        "You must be a currently enrolled university or college student with a passion for technology, community building, and leadership. Basic management or technical skills are a plus!",
      icon: faCheckCircle,
    },
    {
      id: 2,
      question: "How much time does this require?",
      answer:
        "The program requires approximately 8-10 hours per week. It is completely flexible, allowing you to manage it alongside your academic schedule and exams.",
      icon: faClock,
    },
    {
      id: 3,
      question: "Is there a time commitment or contract?",
      answer:
        "Yes, we look for a commitment of 6-12 months to ensure real campus impact and complete execution of the planned leadership track and events.",
      icon: faCalendarAlt,
    },
    {
      id: 4,
      question: "Do I get paid for being an ambassador?",
      answer:
        "Yes! Ambassadors are eligible for a performance-based stipend, exclusive rewards, event hosting budgets, and milestones incentives.",
      icon: faDollarSign,
    },
    {
      id: 5,
      question: "Can I become an ambassador from any city?",
      answer:
        "Absolutely! Internee.pk Student Ambassador program is open to students from all major cities across Pakistan.",
      icon: faGlobe,
    },
    {
      id: 6,
      question: "What support will I get?",
      answer:
        "You will receive continuous mentorship, access to core team communication tools, promotional designs, financial sponsorships for events, and official swag kits.",
      icon: faHeadphones,
    },
  ];

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const accordionVariants = {
    hidden: { opacity: 0, scale: 0.98 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
  };

  return (
    <div className="w-full bg-white font-sans antialiased px-6 py-20 lg:py-28 md:px-12 lg:px-16 max-w-7xl mx-auto space-y-28">
      {/* ==========================================
          1. FREQUENTLY ASKED QUESTIONS SECTION
          ========================================== */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="max-w-3xl mx-auto space-y-14"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center space-y-5">
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 bg-green-50 border border-green-100 rounded-full px-4 py-1.5"
          >
            <FontAwesomeIcon
              icon={faCommentAlt}
              className="text-xs text-[#43A047]"
            />
            <span className="text-xs font-bold text-[#43A047] uppercase tracking-wider">
              FAQ
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight"
          >
            Frequently{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#43A047] to-[#388E3C]">
              Asked Questions
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-gray-500 text-sm lg:text-base"
          >
            Everything you need to know about being an ambassador
          </motion.p>
        </motion.div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq) => {
            const isOpen = openFaq === faq.id;
            return (
              <motion.div
                key={faq.id}
                variants={accordionVariants}
                className={`border rounded-2xl transition-all duration-300 overflow-hidden bg-white ${
                  isOpen
                    ? "border-[#43A047]/30 shadow-lg shadow-green-500/10"
                    : "border-gray-100 hover:border-gray-200"
                }`}
              >
                {/* Trigger Button */}
                <motion.button
                  onClick={() => toggleFaq(faq.id)}
                  whileHover={{ scale: 1.005 }}
                  whileTap={{ scale: 0.995 }}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-bold text-gray-900 text-sm md:text-base select-none hover:bg-gray-50/50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-8 h-8 rounded-xl flex items-center justify-center transition-colors shrink-0 ${
                        isOpen
                          ? "bg-[#43A047] text-white"
                          : "bg-gray-100 text-gray-500"
                      }`}
                    >
                      <FontAwesomeIcon icon={faq.icon} className="text-xs" />
                    </div>
                    <span>{faq.question}</span>
                  </div>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="shrink-0 flex items-center justify-center"
                  >
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      className={`text-sm transition-colors ${
                        isOpen ? "text-[#43A047]" : "text-gray-400"
                      }`}
                    />
                  </motion.div>
                </motion.button>

                {/* Animated content box */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 py-5 pt-0 border-t border-gray-100">
                        <p className="text-gray-500 text-sm leading-relaxed pl-0 md:pl-11">
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

      {/* ==========================================
          2. PREMIUM DARK CTA BANNER
          ========================================== */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full bg-[#0a0a0a] rounded-3xl p-8 md:p-12 lg:p-16 text-white relative overflow-hidden shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-12"
      >
        {/* Background decorations */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#43A047]/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500/10 rounded-full blur-[80px] pointer-events-none" />

        {/* Left Side: Content Text */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-7 max-w-xl z-10 relative"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full py-1.5 pl-2 pr-4"
          >
            <div className="w-6 h-6 rounded-full bg-[#43A047]/20 flex items-center justify-center shrink-0">
              <FontAwesomeIcon
                icon={faWandMagicSparkles}
                className="text-xs text-[#43A047]"
              />
            </div>
            <span className="text-xs font-medium text-gray-300">
              Join 300+ Student Ambassadors
            </span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight">
            Make Impact on Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#43A047] to-[#66BB6A]">
              Campus & Beyond
            </span>
          </h2>

          <p className="text-gray-400 text-sm lg:text-base font-medium leading-relaxed">
            Represent Internee.pk, grow your leadership skills, earn stipends,
            and create opportunities for 1000+ students. Apply now to become an
            ambassador!
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 bg-gradient-to-r from-[#43A047] to-[#388E3C] text-white font-bold px-6 py-3.5 rounded-xl transition-all text-sm shadow-lg shadow-green-500/25 hover:shadow-green-500/40 group"
            >
              <FontAwesomeIcon icon={faRocket} className="text-sm" />
              <span>Apply Now</span>
              <FontAwesomeIcon
                icon={faArrowRight}
                className="text-sm group-hover:translate-x-1 transition-transform"
              />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 border border-gray-700 hover:border-gray-500 hover:bg-white/5 text-white font-bold px-6 py-3.5 rounded-xl transition-colors text-sm bg-transparent"
            >
              <FontAwesomeIcon icon={faUsers} className="text-sm" />
              <span>View Community</span>
            </motion.button>
          </div>
        </motion.div>

        {/* Right Side: Vector Geometric Shapes Background */}
        <div className="hidden lg:block absolute right-0 top-0 h-full w-1/2 opacity-10 pointer-events-none select-none z-0">
          <div className="absolute right-12 bottom-12 w-32 h-32 bg-white rounded-full" />
          <div className="absolute right-48 top-12 w-28 h-28 bg-white" />
          <div className="absolute right-12 top-24 w-24 h-48 border-t-[48px] border-l-[48px] border-transparent border-t-white" />
          <div className="absolute right-48 bottom-16 w-32 h-32 bg-white rounded-tl-full" />
        </div>
      </motion.div>
    </div>
  );
}
