import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faSearch } from "@fortawesome/free-solid-svg-icons";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      question: "Are these internships remote?",
      answer:
        "Yes, all our internships are 100% remote-first, allowing you to learn and grow from anywhere in the world.",
    },
    {
      question: "Do I get a certificate upon completion?",
      answer:
        "Yes, upon successful completion of your internship track, tasks, and final evaluation, you will receive an official verifiable digital certificate.",
    },
    {
      question: "What is the duration of the internship?",
      answer:
        "Typically, the internships range from 1 to 3 months depending on the specific technical track and your pace of learning.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white py-16 sm:py-24 font-sans">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3">
          <h2 className="text-2xl sm:text-4xl font-black text-[#0f172a] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500 text-sm sm:text-base font-medium">
            Everything you need to know about our programs.
          </p>
        </div>

        <div className="space-y-4 max-w-3xl mx-auto">
          {faqs.map((faq, idx) => {
            const isOpen = activeIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left focus:outline-none select-none cursor-pointer group"
                >
                  <span className="text-sm sm:text-base font-semibold text-gray-800 group-hover:text-gray-900 transition-colors">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="text-gray-400 p-1"
                  >
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      className="text-xs sm:text-sm"
                    />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-5 pb-6 sm:px-6 sm:pb-7 text-xs sm:text-sm text-gray-500 font-medium leading-relaxed border-t border-gray-50/50 pt-1">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>

      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="relative w-full bg-[#111111] rounded-[28px] p-8 sm:p-12 lg:p-14 overflow-hidden shadow-2xl border border-white/3">
          <div className="absolute right-0 top-0 bottom-0 w-[45%] h-full opacity-[0.12] pointer-events-none select-none z-0 hidden md:block">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 300 200"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M 200 0 L 300 0 L 300 100 Z" fill="white" />
              <rect x="100" y="50" width="100" height="100" fill="white" />
              <circle cx="250" cy="100" r="50" fill="white" />
              <path d="M 100 50 A 50 50 0 0 0 100 150 Z" fill="white" />
              <circle cx="150" cy="200" r="50" fill="white" />
              <path d="M 200 200 L 300 100 L 300 200 Z" fill="white" />
            </svg>
          </div>

          <div className="relative z-10 max-w-2xl space-y-6 sm:space-y-8 text-left">
            <div className="inline-flex items-center gap-2 bg-[#1b2518] border border-green-900/40 rounded-full pl-1.5 pr-3.5 py-1.5 w-fit">
              <span className="text-[10px] font-black px-2 py-0.5 rounded-full text-white bg-[#42b81b] tracking-wide uppercase">
                Trending
              </span>
              <span className="text-[11px] sm:text-xs font-bold text-gray-300 tracking-wide">
                Explore Internship Opportunities
              </span>
            </div>

            <h3 className="text-3xl sm:text-[42px] font-bold text-white tracking-tight leading-[1.15]">
              Unlock New Opportunities <br />
              With Top-tier Internships.
            </h3>

            <p className="text-gray-400 text-sm sm:text-base font-normal tracking-wide max-w-lg">
              Take the first step toward a successful career with Internee.pk.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-[#42b81b] hover:bg-[#39a316] text-white text-xs sm:text-sm font-bold px-7 py-3.5 rounded-full transition-all duration-200 shadow-xl shadow-green-600/20 cursor-pointer"
              >
                Get Started Now
              </motion.button>

              <motion.button
                whileHover={{
                  scale: 1.02,
                  backgroundColor: "rgba(255,255,255,0.03)",
                  borderColor: "rgba(255,255,255,0.2)",
                }}
                whileTap={{ scale: 0.98 }}
                className="bg-transparent border border-[#50d523] text-white text-xs sm:text-sm font-bold px-6 py-3.5 rounded-full flex items-center gap-2.5 transition-all duration-200 cursor-pointer"
              >
                <FontAwesomeIcon
                  icon={faSearch}
                  className="text-xs text-gray-400"
                />
                <span>Explore Internships</span>
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
