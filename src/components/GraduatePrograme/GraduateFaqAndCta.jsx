import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Zap,
  ArrowRight,
  CheckCircle2,
  MessageCircle,
} from "lucide-react";

export default function GraduateFaqAndCta() {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const faqs = [
    {
      question: "Who can join the graduate programs?",
      answer:
        "Recent graduates and professionals looking to upskill. No prior experience needed - we provide complete training from basics to advanced.",
    },
    {
      question: "What is the program duration?",
      answer:
        "The program spans exactly 12 weeks of intensive, structured learning including industry projects and live mentoring support.",
    },
    {
      question: "Do I get a job after completing the program?",
      answer:
        "We provide direct job placement support and referrals to top-performing graduates across our network of hiring tech partners.",
    },
    {
      question: "Is the certificate recognized by employers?",
      answer:
        "Yes, our industry-recognized credentials are highly valued and designed to significantly boost your professional CV and portfolio.",
    },
    {
      question: "What if I need technical support?",
      answer:
        "You will have 24/7 dedicated access to Discord developer communities and direct sessions with assigned engineering mentors.",
    },
    {
      question: "Can I switch programs after starting?",
      answer:
        "Program migration is allowed within the first week after evaluation from our career counseling department.",
    },
  ];

  const toggleFaq = (index) => {
    setExpandedIndex(expandedIndex === index ? -1 : index);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="w-full bg-white py-12 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-12 font-sans antialiased max-w-7xl mx-auto">
      <div className="w-full flex flex-col items-center space-y-16 sm:space-y-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="w-full max-w-4xl space-y-8 sm:space-y-12"
        >
          <div className="text-center space-y-3 px-2">
            <motion.h2
              variants={itemVariants}
              className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-950 tracking-tight"
            >
              Frequently Asked Questions
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-gray-500 text-xs sm:text-sm md:text-base font-medium max-w-lg mx-auto"
            >
              Find answers to common questions about our graduate programs
            </motion.p>
          </div>

          <div className="space-y-3 sm:space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = expandedIndex === idx;
              return (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className={`bg-white border rounded-2xl overflow-hidden transition-all duration-300 ${
                    isOpen
                      ? "border-[#50d523] shadow-[0_10px_30px_rgba(67,160,71,0.04)]"
                      : "border-gray-100 hover:border-gray-200 hover:shadow-md hover:shadow-gray-100/50"
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-center justify-between p-4 sm:p-5 md:p-6 text-left focus:outline-none select-none gap-3"
                  >
                    <span
                      className={`text-xs sm:text-sm md:text-base font-bold tracking-tight transition-colors duration-200 flex-1 ${
                        isOpen ? "text-[#50d523]" : "text-gray-900"
                      }`}
                    >
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className={`shrink-0 p-1.5 rounded-xl border transition-colors ${
                        isOpen
                          ? "bg-[#E8F5E9] border-[#50d523]/20 text-[#50d523]"
                          : "bg-gray-50 border-gray-100 text-gray-400"
                      }`}
                    >
                      <ChevronDown className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.5]" />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-4 sm:px-5 md:px-6 pb-5 sm:pb-6 pt-2 border-t border-gray-50">
                          <p className="text-gray-500 text-[11px] sm:text-xs md:text-sm leading-relaxed font-normal">
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

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full max-w-6xl bg-[#1A1A1A] text-white rounded-2xl sm:rounded-3xl p-6 sm:p-10 lg:p-16 relative overflow-hidden shadow-2xl"
        >
          <div className="absolute right-0 bottom-0 top-0 w-full md:w-1/2 opacity-5 md:opacity-10 pointer-events-none z-0">
            <div className="absolute -bottom-25 -right-25 w-60 h-60 sm:w-80 sm:h-80 border-30 sm:border-40 border-white rounded-full" />
            <div className="absolute -top-15 right-25 w-40 h-32 sm:w-56 sm:h-40 bg-white rounded-full" />
            <div className="absolute top-[20%] right-5 w-14 h-14 sm:w-20 sm:h-20 bg-white rounded-full" />
          </div>

          <div className="absolute inset-0 bg-linear-to-r from-[#1A1A1A] via-transparent to-transparent pointer-events-none z-0" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center lg:items-center justify-between gap-8 lg:gap-12 text-center lg:text-left">
            <div className="space-y-4 sm:space-y-6 w-full max-w-2xl flex flex-col items-center lg:items-start">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-[#2E2E2E] border border-neutral-800 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full"
              >
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#50d523] rounded-full animate-pulse" />
                <span className="text-gray-300 text-[9px] sm:text-xs font-bold uppercase tracking-wider">
                  Ready to Transform Your Career?
                </span>
              </motion.div>

              <div className="space-y-2 sm:space-y-3 w-full">
                <h3 className="text-2xl sm:text-3xl lg:text-5xl font-black tracking-tight text-white leading-tight">
                  Transform Your Career
                  <br />
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-[#50d523] to-[#50d523]">
                    In Just 12 Weeks
                  </span>
                </h3>
                <p className="text-neutral-400 text-xs sm:text-sm font-medium leading-relaxed max-w-xl mx-auto lg:mx-0">
                  Join 500+ graduates who have successfully launched careers
                  with our programs. Get job-ready skills, mentorship, and
                  direct placement support.
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-4 gap-y-2.5 pt-3 border-t border-neutral-800/60 w-full">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#50d523] shrink-0" />
                  <span className="text-[11px] sm:text-xs font-bold text-white">
                    500+ Placed
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-[#50d523] shrink-0" />
                  <span className="text-[11px] sm:text-xs font-bold text-white">
                    12 Weeks Track
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MessageCircle className="w-3.5 h-3.5 text-[#50d523] shrink-0" />
                  <span className="text-[11px] sm:text-xs font-bold text-white">
                    24/7 Support
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto shrink-0 lg:self-center">
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#50d523] hover:bg-[#388E3C] text-white px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl text-xs sm:text-sm font-bold shadow-lg shadow-green-900/20 transition-all whitespace-nowrap cursor-pointer"
              >
                <span>Enroll Now</span>
                <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-white stroke-none" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-transparent hover:bg-neutral-800/40 text-white border border-neutral-700 hover:border-neutral-500 px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap cursor-pointer"
              >
                <span>Explore Programs</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
