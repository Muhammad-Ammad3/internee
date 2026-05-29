import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faClock,
  faMagnifyingGlass,
  faChevronDown,
  faWandMagicSparkles,
  faArrowRight,
  faPenNib,
  faBookOpen,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

const pageTransition = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
};

const sectionVariants = {
  initial: { opacity: 0, y: 40 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const AnimatedSection = ({ children, className }) => (
  <motion.div
    initial="initial"
    whileInView="animate"
    viewport={{ once: true, margin: "-100px" }}
    variants={sectionVariants}
    className={className}
  >
    {children}
  </motion.div>
);

const AnimatedSectionLate = ({ children, className }) => (
  <motion.div
    initial="initial"
    whileInView="animate"
    viewport={{ once: true, margin: "-50px" }}
    variants={sectionVariants}
    className={className}
  >
    {children}
  </motion.div>
);

export default function ResourcesBlogDashboard() {
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [sortBy, setSortBy] = useState("Newest");

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
      className="w-full bg-gray-50/50 min-h-screen font-sans antialiased pb-12 md:pb-24 text-left overflow-x-hidden"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full"
      >
        <div className="w-full bg-[#0a0a0a] text-white px-4 py-12 sm:px-6 md:px-12 lg:px-16 md:py-20 relative overflow-hidden">
          <div className="absolute inset-y-0 right-0 w-full sm:w-1/2 opacity-15 pointer-events-none z-0 hidden sm:block">
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-80 h-80 grid grid-cols-2 gap-0 mix-blend-overlay">
              <div className="w-40 h-40 bg-white rounded-l-full"></div>
              <div className="w-40 h-40 bg-white"></div>
              <div className="w-40 h-40 bg-white rounded-full"></div>
              <div className="w-40 h-40 bg-white rounded-tr-full"></div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto space-y-4 md:space-y-5 relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2"
            >
              <FontAwesomeIcon
                icon={faWandMagicSparkles}
                className="text-[10px] sm:text-xs text-[#50d523]"
              />
              <span className="text-[10px] sm:text-xs font-bold text-[#50d523] uppercase tracking-wider">
                Our blog
              </span>
            </motion.div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight wrap-break-words">
              Explore the Internee.pk{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#50d523] to-[#50d523]">
                Blog
              </span>
            </h1>
            <p className="text-gray-400 text-xs sm:text-sm lg:text-base max-w-2xl leading-relaxed font-medium">
              Expert insights on user research, product development, and
              building evidence-based products.
            </p>
          </div>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 md:mt-10 space-y-8 md:space-y-14">
        <AnimatedSection className="w-full">
          <div className="w-full bg-white border border-gray-100 rounded-2xl p-4 sm:p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-5 shadow-lg hover:shadow-xl transition-shadow">
            <div className="space-y-1.5 w-full md:w-auto">
              <span className="text-[10px] font-bold text-[#50d523] uppercase tracking-wider block">
                Categories
              </span>
              <div className="relative inline-block w-full md:w-52">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full bg-white border border-gray-200 text-gray-800 text-sm font-bold rounded-xl pl-4 pr-10 py-2.5 appearance-none cursor-pointer focus:outline-none focus:border-[#50d523] transition-colors"
                >
                  <option>All Categories</option>
                  <option>Web Development</option>
                  <option>UI/UX Design</option>
                  <option>AI & Tech</option>
                </select>
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-xs"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 w-full md:w-auto md:self-end">
              <span className="text-xs sm:text-sm font-bold text-gray-500">
                Sort by:
              </span>
              <div className="bg-gray-100/80 border border-gray-200/50 p-1 rounded-xl flex items-center w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSortBy("Newest")}
                  className={`text-xs sm:text-sm font-bold px-3 sm:px-4 py-2 rounded-lg transition-all flex-1 sm:flex-none ${
                    sortBy === "Newest"
                      ? "bg-[#50d523] text-white shadow-lg shadow-green-500/25"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  Newest
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSortBy("Oldest")}
                  className={`text-xs sm:text-sm font-bold px-3 sm:px-4 py-2 rounded-lg transition-all flex-1 sm:flex-none ${
                    sortBy === "Oldest"
                      ? "bg-[#50d523] text-white shadow-lg shadow-green-500/25"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  Oldest
                </motion.button>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="space-y-4 md:space-y-5">
          <h2 className="text-lg lg:text-2xl font-bold text-gray-900 tracking-tight">
            Featured Article
          </h2>
          <motion.div
            whileHover={{ y: -4 }}
            className="w-full bg-white border border-gray-100 rounded-3xl p-6 sm:p-8 md:p-12 flex flex-col items-center justify-center text-center min-h-55 sm:min-h-65 shadow-xl hover:shadow-2xl transition-all cursor-pointer group"
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-green-50 text-[#50d523] border border-green-100 flex items-center justify-center mb-4 sm:mb-5 shrink-0"
            >
              <FontAwesomeIcon icon={faClock} className="text-lg" />
            </motion.div>
            <h3 className="text-base sm:text-lg font-bold text-gray-900 tracking-tight group-hover:text-[#50d523] transition-colors">
              Stay Tuned for Features
            </h3>
            <p className="text-gray-500 text-xs sm:text-sm max-w-md mt-2 leading-relaxed">
              We're currently preparing our next big featured article. Check
              back soon for deep dives and exclusive insights from our top
              writers.
            </p>
          </motion.div>
        </AnimatedSection>

        <AnimatedSectionLate className="space-y-4 md:space-y-6">
          <div className="space-y-1.5 sm:space-y-2">
            <h2 className="text-lg lg:text-2xl font-bold text-gray-900 tracking-tight">
              Our Recent Blog Entries
            </h2>
            <p className="text-gray-400 text-xs sm:text-sm max-w-xl">
              Stay updated with the latest articles covering emerging threats,
              innovative solutions, and timely insights to keep your business
              secure.
            </p>
          </div>

          <motion.div
            whileHover={{ y: -4 }}
            className="w-full bg-white border border-gray-100 rounded-3xl p-6 sm:p-8 md:p-12 flex flex-col items-center justify-center text-center min-h-60 sm:min-h-70 shadow-xl hover:shadow-2xl transition-all cursor-pointer group"
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gray-50 text-gray-400 border border-gray-100 flex items-center justify-center mb-4 sm:mb-5 group-hover:bg-green-50 group-hover:text-[#50d523] group-hover:border-green-100 transition-all shrink-0"
            >
              <FontAwesomeIcon icon={faMagnifyingGlass} className="text-lg" />
            </motion.div>
            <h3 className="text-base sm:text-lg font-bold text-gray-900 tracking-tight group-hover:text-[#50d523] transition-colors">
              No posts found
            </h3>
            <p className="text-gray-500 text-xs sm:text-sm max-w-sm mt-2 leading-relaxed">
              We couldn't find any articles matching your current filters. Try
              selecting a different category or clearing your search.
            </p>
          </motion.div>
        </AnimatedSectionLate>

        <AnimatedSectionLate className="flex items-center justify-between border-t border-gray-200/80 pt-6 md:pt-8 text-xs sm:text-sm font-bold">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-gray-400 hover:text-gray-600 cursor-not-allowed opacity-50 transition-colors"
          >
            &larr; Previous
          </motion.button>
          <motion.span
            whileHover={{ scale: 1.1 }}
            className="bg-[#50d523] text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl border border-[#50d523] shadow-lg shadow-green-500/25 select-none"
          >
            1
          </motion.span>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-gray-400 hover:text-gray-600 cursor-not-allowed opacity-50 transition-colors"
          >
            Next &rarr;
          </motion.button>
        </AnimatedSectionLate>

        <AnimatedSectionLate className="mt-6 md:mt-8">
          <motion.div
            whileInView="animate"
            className="w-full bg-[#0a0a0a] rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 text-white relative overflow-hidden shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12"
          >
            <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-[#50d523]/10 rounded-full blur-[60px] sm:blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-36 h-36 sm:w-48 sm:h-48 bg-purple-500/10 rounded-full blur-[50px] sm:blur-[80px] pointer-events-none" />

            <div className="space-y-4 sm:space-y-6 max-w-xl z-10 relative w-full">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full py-1.5 pl-2 pr-4"
              >
                <FontAwesomeIcon
                  icon={faBookOpen}
                  className="text-[10px] sm:text-xs text-[#50d523]"
                />
                <span className="text-[10px] sm:text-xs font-medium text-gray-300">
                  Stay in the Loop
                </span>
              </motion.div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight wrap-break-words">
                Build Skills With{" "}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-[#50d523] to-[#50d523]">
                  Practical Insights
                </span>
              </h2>

              <p className="text-gray-400 text-xs sm:text-sm lg:text-base font-medium leading-relaxed">
                Discover practical strategies from product, design, and research
                teams to help you ship better work faster.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 w-full sm:w-auto">
                <Link to="/internships" className="w-full sm:w-auto block">
                  <motion.button
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center justify-center gap-2 bg-linear-to-r from-[#50d523] to-[#50d523] text-white font-bold px-5 py-3.5 sm:px-6 rounded-xl cursor-pointer transition-all text-xs sm:text-sm shadow-lg shadow-green-500/25 hover:shadow-green-500/40 group w-full"
                  >
                    <FontAwesomeIcon
                      icon={faPenNib}
                      className="text-xs sm:text-sm"
                    />
                    <span className="whitespace-nowrap">
                      Explore Internships
                    </span>
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="text-xs sm:text-sm group-hover:translate-x-1 transition-transform"
                    />
                  </motion.button>
                </Link>

                <Link
                  to="/studentambassadors"
                  className="w-full sm:w-auto block"
                >
                  <motion.button
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center justify-center gap-2 border border-gray-700 cursor-pointer hover:border-gray-500 hover:bg-white/5 text-white font-bold px-5 py-3.5 sm:px-6 rounded-xl transition-colors text-xs sm:text-sm bg-transparent w-full"
                  >
                    <FontAwesomeIcon
                      icon={faUsers}
                      className="text-xs sm:text-sm"
                    />
                    <span className="whitespace-nowrap">Become Ambassador</span>
                  </motion.button>
                </Link>
              </div>
            </div>

            <div className="hidden lg:block absolute right-0 top-0 h-full w-1/2 opacity-10 pointer-events-none z-0">
              <div className="absolute right-12 bottom-12 w-32 h-32 bg-white rounded-full" />
              <div className="absolute right-48 top-12 w-28 h-28 bg-white" />
              <div className="absolute right-12 top-24 w-24 h-48 border-t-48px border-l-48px border-transparent border-t-white" />
              <div className="absolute right-48 bottom-16 w-32 h-32 bg-white rounded-tl-full" />
            </div>
          </motion.div>
        </AnimatedSectionLate>
      </div>
    </motion.div>
  );
}
