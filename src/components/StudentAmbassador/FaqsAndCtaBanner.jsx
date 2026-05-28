import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faChevronDown,
  faRocket,
  faArrowRight,
  faWandMagicSparkles,
  faCheckCircle,
  faGlobe,
  faUsers,
  faCalendarAlt,
  faDollarSign,
  faCommentAlt,
  faHeadphones,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

export default function FaqsAndCtaBanner() {
  const [openFaq, setOpenFaq] = useState(null);

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
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="max-w-3xl mx-auto space-y-14"
      >
        <motion.div variants={itemVariants} className="text-center space-y-5">
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 bg-green-50 border border-green-100 rounded-full px-4 py-1.5"
          >
            <FontAwesomeIcon
              icon={faCommentAlt}
              className="text-xs text-[#50d523]"
            />
            <span className="text-xs font-bold text-[#50d523] uppercase tracking-wider">
              FAQ
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight"
          >
            Frequently{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#50d523] to-[#50d523]">
              Asked Questions
            </span>
          </motion.h2>

          <motion.p variants={itemVariants} className="text-gray-600 text-md">
            Everything you need to know about being an ambassador
          </motion.p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq) => {
            const isOpen = openFaq === faq.id;
            return (
              <motion.div
                key={faq.id}
                variants={accordionVariants}
                className={`border rounded-2xl transition-all duration-300 overflow-hidden bg-white ${
                  isOpen
                    ? "border-[#50d523]/30 shadow-lg shadow-green-500/10"
                    : "border-gray-100 hover:border-gray-200"
                }`}
              >
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
                          ? "bg-[#50d523] text-white"
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
                        isOpen ? "text-[#50d523]" : "text-gray-400"
                      }`}
                    />
                  </motion.div>
                </motion.button>

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

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full bg-[#0a0a0a] rounded-3xl p-8 md:p-12 lg:p-16 text-white relative overflow-hidden shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-12"
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#50d523]/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500/10 rounded-full blur-[80px] pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-7 max-w-xl z-10 relative"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full py-1.5 pl-2 pr-4"
          >
            <div className="w-6 h-6 rounded-full bg-[#50d523]/20 flex items-center justify-center shrink-0">
              <FontAwesomeIcon
                icon={faWandMagicSparkles}
                className="text-xs text-[#50d523]"
              />
            </div>
            <span className="text-xs font-medium text-gray-300">
              Join 300+ Student Ambassadors
            </span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
            Make Impact on Your{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#50d523] to-[#50d523]">
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
              className="flex items-center gap-2 bg-linear-to-r from-[#50d523] to-[#50d523] text-white font-bold px-6 py-3.5 rounded-xl transition-all text-sm shadow-lg shadow-green-500/25 hover:shadow-green-500/40 group"
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

        <div className="hidden lg:block absolute right-0 top-0 h-full w-1/2 opacity-10 pointer-events-none select-none z-0">
          <div className="absolute right-12 bottom-12 w-32 h-32 bg-white rounded-full" />
          <div className="absolute right-48 top-12 w-28 h-28 bg-white" />
          <div className="absolute right-12 top-24 w-24 h-48 border-t-48 border-l-48 border-transparent border-t-white" />
          <div className="absolute right-48 bottom-16 w-32 h-32 bg-white rounded-tl-full" />
        </div>
      </motion.div>
    </div>
  );
}
