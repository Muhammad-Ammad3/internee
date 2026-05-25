// import React, { useState } from 'react';

// const FAQSection = () => {
//   // Accordion state manage karne ke liye active index tracking
//   const [activeIndex, setActiveIndex] = useState(0);

//   const faqs = [
//     {
//       question: "What is internee.pk and how does it work?",
//       answer: "Internee.pk is Pakistan's premium virtual internship platform designed to help students and fresh graduates gain practical, hands-on experience by working on real-world industry tasks and cloning top platforms."
//     },
//     {
//       question: "Are these virtual internships certified?",
//       answer: "Yes, upon successful completion of your tasks, milestones, and project reviews, you will receive a verified digital certificate that you can showcase on LinkedIn and your resume."
//     },
//     {
//       question: "Is there any fee to apply for internships?",
//       answer: "We offer both free learning tracks and premium mentor-led programs. You can choose the path that best fits your learning goals and career trajectory."
//     },
//     {
//       question: "Can I manage these internships along with my university?",
//       answer: "Absolutely! The programs are fully remote and self-paced, allowing you to manage your tasks flexibly alongside your university exams and classes."
//     }
//   ];

//   return (
//     <section className="w-full bg-white py-24 px-6 lg:px-16 font-sans">
//       <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
//         {/* ================= LEFT SIDE: HEADINGS & CTA ================= */}
//         <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-8">
//           <div className="inline-block bg-gray-100 rounded-full px-4 py-1 text-[11px] font-bold tracking-wider uppercase text-gray-500 border border-gray-200/60">
//             Have Questions?
//           </div>
//           <h2 className="text-3xl sm:text-[40px] font-black text-gray-950 leading-[1.15] tracking-tight">
//             Frequently Asked <br />Questions.
//           </h2>
//           <p className="text-gray-500 text-sm sm:text-base leading-relaxed font-medium max-w-sm">
//             Can't find the answer you're looking for? Reach out to our dedicated support team for further assistance.
//           </p>
//           <div className="pt-2">
//             <button className="bg-[#3FB628] text-white px-7 py-3.5 rounded-full text-sm font-bold hover:bg-[#349e1e] transition shadow-md shadow-green-100">
//               Contact Support
//             </button>
//           </div>
//         </div>

//         {/* ================= RIGHT SIDE: ACCORDION GRID LIST ================= */}
//         <div className="lg:col-span-7 space-y-4">
//           {faqs.map((faq, index) => {
//             const isOpen = activeIndex === index;
//             return (
//               <div 
//                 key={index}
//                 className={`border rounded-3xl transition-all duration-300 overflow-hidden bg-white ${
//                   isOpen ? 'border-[#3FB628] shadow-[0_10px_30px_rgba(63,182,40,0.03)]' : 'border-gray-100 hover:border-gray-200'
//                 }`}
//               >
//                 {/* Accordion Trigger Header */}
//                 <button
//                   onClick={() => setActiveIndex(isOpen ? -1 : index)}
//                   className="w-full text-left p-6 sm:p-8 flex justify-between items-center gap-4 focus:outline-none"
//                 >
//                   <span className={`text-sm sm:text-base font-bold transition-colors ${isOpen ? 'text-[#3FB628]' : 'text-gray-950'}`}>
//                     {faq.question}
//                   </span>
                  
//                   {/* Plus / Minus Custom Icon Toggle */}
//                   <div className={`w-8 h-8 rounded-full flex items-center justify-center border flex-shrink-0 transition-all duration-300 ${
//                     isOpen ? 'bg-[#3FB628] border-[#3FB628] text-white rotate-45' : 'bg-gray-50 border-gray-200 text-gray-400'
//                   }`}>
//                     <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
//                     </svg>
//                   </div>
//                 </button>

//                 {/* Accordion Content Body */}
//                 <div 
//                   className={`transition-all duration-300 ease-in-out font-medium text-gray-500 text-xs sm:text-sm leading-relaxed ${
//                     isOpen ? 'max-h-60 p-6 sm:p-8 pt-0 border-t border-gray-50' : 'max-h-0 pointer-events-none'
//                   }`}
//                 >
//                   <p>{faq.answer}</p>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//       </div>
//     </section>
//   );
// };

// export default FAQSection;




import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  HelpCircle, 
  MessageCircle, 
  Plus, 
  Minus,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  X
} from "lucide-react";

const FAQSection = () => {
  // Accordion state manage karne ke liye active index tracking
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      question: "What is internee.pk and how does it work?",
      answer: "Internee.pk is Pakistan's premium virtual internship platform designed to help students and fresh graduates gain practical, hands-on experience by working on real-world industry tasks and cloning top platforms."
    },
    {
      question: "Are these virtual internships certified?",
      answer: "Yes, upon successful completion of your tasks, milestones, and project reviews, you will receive a verified digital certificate that you can showcase on LinkedIn and your resume."
    },
    {
      question: "Is there any fee to apply for internships?",
      answer: "We offer both free learning tracks and premium mentor-led programs. You can choose the path that best fits your learning goals and career trajectory."
    },
    {
      question: "Can I manage these internships along with my university?",
      answer: "Absolutely! The programs are fully remote and self-paced, allowing you to manage your tasks flexibly alongside your university exams and classes."
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

  const accordionVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: "easeOut" } }
  };

  return (
    <section className="w-full bg-white py-24 lg:py-32 px-6 lg:px-12 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* ================= LEFT SIDE: HEADINGS & CTA ================= */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="lg:col-span-5 space-y-7 lg:sticky lg:top-8"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 bg-green-50 border border-green-100 rounded-full px-4 py-1.5">
            <HelpCircle className="w-4 h-4 text-[#43A047]" />
            <span className="font-bold tracking-wider uppercase text-xs text-[#43A047]">Have Questions?</span>
          </motion.div>
          
          <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 leading-tight tracking-tight">
            Frequently Asked{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#43A047] to-[#388E3C]">
              Questions
            </span>.
          </motion.h2>
          
          <motion.p variants={itemVariants} className="text-gray-500 text-sm lg:text-base leading-relaxed font-medium max-w-sm">
            Can't find the answer you're looking for? Reach out to our dedicated support team for further assistance.
          </motion.p>
          
          <motion.div 
            variants={itemVariants}
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="pt-2"
          >
            <button className="flex items-center gap-2 bg-gradient-to-r from-[#43A047] to-[#388E3C] text-white px-7 py-3.5 rounded-full text-sm font-bold shadow-lg shadow-green-500/25 hover:shadow-green-500/40 transition-all group">
              <span>Contact Support</span>
              <MessageCircle className="w-4 h-4 group-hover:rotate-12 transition-transform" />
            </button>
          </motion.div>
        </motion.div>

        {/* ================= RIGHT SIDE: ACCORDION GRID LIST ================= */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="lg:col-span-7 space-y-4"
        >
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;
            return (
              <motion.div
                key={index}
                variants={accordionVariants}
                whileHover={{ scale: 1.01 }}
                className={`border rounded-3xl transition-all duration-500 overflow-hidden bg-white ${
                  isOpen 
                    ? 'border-[#43A047]/30 shadow-xl shadow-green-500/10' 
                    : 'border-gray-100 hover:border-gray-200 hover:shadow-lg'
                }`}
              >
                {/* Accordion Trigger Header */}
                <button
                  onClick={() => setActiveIndex(isOpen ? -1 : index)}
                  className="w-full text-left p-6 sm:p-7 flex justify-between items-center gap-4 focus:outline-none group"
                >
                  <span className={`text-base lg:text-lg font-bold transition-colors pr-4 ${isOpen ? 'text-[#43A047]' : 'text-gray-900 group-hover:text-gray-700'}`}>
                    {faq.question}
                  </span>
                  
                  {/* Plus / Minus Custom Icon Toggle */}
                  <motion.div 
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`w-10 h-10 rounded-xl flex items-center justify-center border flex-shrink-0 transition-all duration-300 ${
                      isOpen 
                        ? 'bg-[#43A047] border-[#43A047] text-white' 
                        : 'bg-gray-50 border-gray-200 text-gray-400 group-hover:border-[#43A047]/50 group-hover:text-[#43A047]'
                    }`}
                  >
                    <Plus className="w-5 h-5" />
                  </motion.div>
                </button>

                {/* Accordion Content Body */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 sm:px-7 pb-6 sm:pb-7 pt-2 border-t border-gray-50">
                        <p className="text-gray-500 text-sm font-medium leading-relaxed">
                          {faq.answer}
                        </p>
                        
                        {/* Success indicator */}
                        <div className="flex items-center gap-2 mt-4 text-[#43A047]">
                          <CheckCircle2 className="w-4 h-4" />
                          <span className="text-xs font-bold">Answer verified</span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};

export default FAQSection;