// import React, { useState } from 'react';
// import { Clock, Search, SlidersHorizontal, ChevronDown, Rocket } from 'lucide-react';

// export default function ResourcesBlogDashboard() {
//   const [selectedCategory, setSelectedCategory] = useState('All Categories');
//   const [sortBy, setSortBy] = useState('Newest');

//   return (
//     <div className="w-full bg-[#F8FAFC]/40 min-h-screen font-sans antialiased pb-24">

//       {/* ==========================================
//           1. DARK HEADER SECTION
//           ========================================== */}
//       <div className="w-full bg-[#1A1A1A] text-white px-6 py-16 md:px-16 md:py-20">
//         <div className="max-w-7xl mx-auto space-y-3">
//           <span className="text-[#43A047] text-xs font-bold uppercase tracking-wider block">
//             Our blog
//           </span>
//           <h1 className="text-3xl md:text-5xl font-black tracking-tight">
//             Explore the Internee.pk Blog
//           </h1>
//           <p className="text-neutral-400 text-xs md:text-sm max-w-2xl leading-relaxed">
//             Expert insights on user research, product development, and building evidence-based products.
//           </p>
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto px-6 mt-8 space-y-12">

//         {/* ==========================================
//             2. FILTER & SORT BAR
//             ========================================== */}
//         <div className="w-full bg-white border border-gray-100 rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 shadow-[0_4px_20px_rgba(0,0,0,0.01)]">
//           {/* Category Dropdown Selector */}
//           <div className="space-y-1.5">
//             <span className="text-[10px] font-black text-[#43A047] uppercase tracking-wider block">
//               Categories
//             </span>
//             <div className="relative inline-block w-48">
//               <select
//                 value={selectedCategory}
//                 onChange={(e) => setSelectedCategory(e.target.value)}
//                 className="w-full bg-white border border-gray-200 text-gray-800 text-xs font-bold rounded-xl px-4 py-2.5 appearance-none cursor-pointer focus:outline-none focus:border-[#43A047] transition-colors"
//               >
//                 <option>All Categories</option>
//                 <option>Web Development</option>
//                 <option>UI/UX Design</option>
//                 <option>AI & Tech</option>
//               </select>
//               <ChevronDown className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
//             </div>
//           </div>

//           {/* Sort Toggles */}
//           <div className="flex items-center gap-3 sm:self-end">
//             <span className="text-xs font-bold text-gray-500">Sort by:</span>
//             <div className="bg-gray-100/80 border border-gray-200/50 p-1 rounded-xl flex items-center">
//               <button
//                 onClick={() => setSortBy('Newest')}
//                 className={`text-[11px] font-bold px-3 py-1.5 rounded-lg transition-all ${
//                   sortBy === 'Newest' ? 'bg-[#43A047] text-white shadow-sm' : 'text-gray-600 hover:text-gray-900'
//                 }`}
//               >
//                 Newest
//               </button>
//               <button
//                 onClick={() => setSortBy('Oldest')}
//                 className={`text-[11px] font-bold px-3 py-1.5 rounded-lg transition-all ${
//                   sortBy === 'Oldest' ? 'bg-[#43A047] text-white shadow-sm' : 'text-gray-600 hover:text-gray-900'
//                 }`}
//               >
//                 Oldest
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* ==========================================
//             3. FEATURED ARTICLE EMPTY STATE
//             ========================================== */}
//         <div className="space-y-4">
//           <h2 className="text-xl font-black text-gray-900 tracking-tight">
//             Featured Article
//           </h2>
//           <div className="w-full bg-white border border-gray-200 rounded-3xl p-12 flex flex-col items-center justify-center text-center min-h-[260px] shadow-[0_4px_30px_rgba(0,0,0,0.01)]">
//             <div className="w-12 h-12 rounded-full bg-slate-50 text-slate-400 border border-slate-100 flex items-center justify-center mb-4">
//               <Clock className="w-5 h-5 stroke-[2]" />
//             </div>
//             <h3 className="text-base font-bold text-gray-900 tracking-tight">
//               Stay Tuned for Features
//             </h3>
//             <p className="text-gray-500 text-xs max-w-md mt-1.5 leading-relaxed">
//               We're currently preparing our next big featured article. Check back soon for deep dives and exclusive insights from our top writers.
//             </p>
//           </div>
//         </div>

//         {/* ==========================================
//             4. OUR RECENT BLOG ENTRIES EMPTY STATE
//             ========================================== */}
//         <div className="space-y-4">
//           <div className="space-y-1">
//             <h2 className="text-xl font-black text-gray-900 tracking-tight">
//               Our Recent Blog Entries
//             </h2>
//             <p className="text-gray-400 text-xs max-w-xl">
//               Stay updated with the latest articles covering emerging threats, innovative solutions, and timely insights to keep your business secure.
//             </p>
//           </div>

//           <div className="w-full bg-white border-2 border-dashed border-gray-200 rounded-3xl p-12 flex flex-col items-center justify-center text-center min-h-[280px]">
//             <div className="w-12 h-12 rounded-full bg-slate-50 text-slate-400 border border-slate-100 flex items-center justify-center mb-4">
//               <Search className="w-5 h-5 stroke-[2]" />
//             </div>
//             <h3 className="text-base font-bold text-gray-900 tracking-tight">
//               No posts found
//             </h3>
//             <p className="text-gray-500 text-xs max-w-sm mt-1.5 leading-relaxed">
//               We couldn't find any articles matching your current filters. Try selecting a different category or clearing your search.
//             </p>
//           </div>
//         </div>

//         {/* ==========================================
//             5. PAGINATION ROW
//             ========================================== */}
//         <div className="flex items-center justify-between border-t border-gray-200/80 pt-6 text-xs font-bold text-gray-400">
//           <button className="hover:text-gray-700 cursor-not-allowed opacity-50 transition-colors">
//             &lt; Previous
//           </button>
//           <span className="bg-gray-100 text-gray-800 px-3 py-1.5 rounded-lg border border-gray-200/40 select-none">
//             1
//           </span>
//           <button className="hover:text-gray-700 cursor-not-allowed opacity-50 transition-colors">
//             Next &gt;
//           </button>
//         </div>

//         {/* ==========================================
//             6. BOTTOM PREMIUM DARK CTA BANNER
//             ========================================== */}
//         <div className="w-full bg-[#1A1A1A] rounded-3xl p-8 md:p-12 lg:p-16 text-white relative overflow-hidden shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-12 mt-16">
//           <div className="space-y-5 max-w-xl z-10 relative">
//             <div className="inline-flex items-center gap-2 bg-[#2E2E2E] border border-neutral-800 rounded-full py-1.5 pl-2 pr-4 text-xs font-semibold">
//               <span className="bg-[#43A047] text-white text-[10px] uppercase font-black px-2 py-0.5 rounded-full tracking-wide">
//                 Our blog
//               </span>
//               <span className="text-gray-300 text-[11px]">Stay in the Loop</span>
//             </div>

//             <h2 className="text-3xl md:text-4xl font-black text-white leading-tight tracking-tight">
//               Build Skills With <br /> Practical Insights
//             </h2>

//             <p className="text-neutral-400 text-xs md:text-sm leading-relaxed">
//               Discover practical strategies from product, design, and research teams to help you ship better work faster.
//             </p>

//             <div className="flex flex-wrap gap-4 pt-2">
//               <button className="bg-[#43A047] hover:bg-[#388E3C] text-white font-bold px-6 py-3.5 rounded-xl transition-all active:scale-95 text-sm flex items-center gap-2 shadow-lg shadow-green-900/20">
//                 Explore Internships <Rocket className="w-4 h-4" />
//               </button>
//               <button className="border border-neutral-700 hover:border-neutral-500 hover:bg-neutral-800/40 text-white font-bold px-6 py-3.5 rounded-xl transition-colors text-sm bg-transparent">
//                 Become Ambassador
//               </button>
//             </div>
//           </div>

//           {/* Background Structural Geometry Artwork shapes */}
//           <div className="hidden lg:block absolute right-0 top-0 h-full w-1/2 opacity-10 pointer-events-none select-none z-0">
//             <div className="absolute right-12 bottom-12 w-32 h-32 bg-white rounded-full" />
//             <div className="absolute right-48 top-12 w-28 h-28 bg-white" />
//             <div className="absolute right-12 top-24 w-24 h-48 border-t-[48px] border-l-[48px] border-transparent border-t-white" />
//             <div className="absolute right-48 bottom-16 w-32 h-32 bg-white rounded-tl-full" />
//           </div>
//         </div>

//       </div>

//     </div>
//   );
// }

import React, { useState } from "react";
import { motion } from "framer-motion";

// Font Awesome Core aur Component Imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Solid Icons Imports
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

// Page transition configuration
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

// Section animation variants
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

// Animated section wrapper
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

// Animated section for smaller/later sections
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
      className="w-full bg-gray-50/50 min-h-screen font-sans antialiased pb-24 text-left"
    >
      {/* ==========================================
          1. DARK HEADER SECTION
          ========================================== */}
      <AnimatedSection className="w-full">
        <motion.div
          whileInView="animate"
          className="w-full bg-[#0a0a0a] text-white px-6 py-16 md:px-16 md:py-20"
        >
          <div className="max-w-7xl mx-auto space-y-5">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2"
            >
              <FontAwesomeIcon
                icon={faWandMagicSparkles}
                className="text-xs text-[#43A047]"
              />
              <span className="text-xs font-bold text-[#43A047] uppercase tracking-wider">
                Our blog
              </span>
            </motion.div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight">
              Explore the Internee.pk{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#43A047] to-[#66BB6A]">
                Blog
              </span>
            </h1>
            <p className="text-gray-400 text-sm lg:text-base max-w-2xl leading-relaxed font-medium">
              Expert insights on user research, product development, and
              building evidence-based products.
            </p>
          </div>
        </motion.div>
      </AnimatedSection>

      <div className="max-w-7xl mx-auto px-6 mt-10 space-y-14">
        {/* ==========================================
            2. FILTER & SORT BAR
            ========================================== */}
        <AnimatedSection className="w-full">
          <div className="w-full bg-white border border-gray-100 rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 shadow-lg hover:shadow-xl transition-shadow">
            {/* Category Dropdown Selector */}
            <div className="space-y-2">
              <span className="text-[10px] font-black text-[#43A047] uppercase tracking-wider block">
                Categories
              </span>
              <div className="relative inline-block w-52">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full bg-white border border-gray-200 text-gray-800 text-sm font-bold rounded-xl px-4 py-2.5 appearance-none cursor-pointer focus:outline-none focus:border-[#43A047] transition-colors"
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

            {/* Sort Toggles */}
            <div className="flex items-center gap-3 sm:self-end">
              <span className="text-sm font-bold text-gray-500">Sort by:</span>
              <div className="bg-gray-100/80 border border-gray-200/50 p-1 rounded-xl flex items-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSortBy("Newest")}
                  className={`text-sm font-bold px-4 py-2 rounded-lg transition-all ${
                    sortBy === "Newest"
                      ? "bg-[#43A047] text-white shadow-lg shadow-green-500/25"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  Newest
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSortBy("Oldest")}
                  className={`text-sm font-bold px-4 py-2 rounded-lg transition-all ${
                    sortBy === "Oldest"
                      ? "bg-[#43A047] text-white shadow-lg shadow-green-500/25"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  Oldest
                </motion.button>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* ==========================================
            3. FEATURED ARTICLE EMPTY STATE
            ========================================== */}
        <AnimatedSection className="space-y-5">
          <h2 className="text-xl lg:text-2xl font-black text-gray-900 tracking-tight">
            Featured Article
          </h2>
          <motion.div
            whileHover={{ y: -4 }}
            className="w-full bg-white border border-gray-100 rounded-3xl p-12 flex flex-col items-center justify-center text-center min-h-[260px] shadow-xl hover:shadow-2xl transition-all cursor-pointer group"
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="w-14 h-14 rounded-2xl bg-green-50 text-[#43A047] border border-green-100 flex items-center justify-center mb-5"
            >
              <FontAwesomeIcon icon={faClock} className="text-xl" />
            </motion.div>
            <h3 className="text-lg font-bold text-gray-900 tracking-tight group-hover:text-[#43A047] transition-colors">
              Stay Tuned for Features
            </h3>
            <p className="text-gray-500 text-sm max-w-md mt-2 leading-relaxed">
              We're currently preparing our next big featured article. Check
              back soon for deep dives and exclusive insights from our top
              writers.
            </p>
          </motion.div>
        </AnimatedSection>

        {/* ==========================================
            4. OUR RECENT BLOG ENTRIES EMPTY STATE
            ========================================== */}
        <AnimatedSectionLate className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-xl lg:text-2xl font-black text-gray-900 tracking-tight">
              Our Recent Blog Entries
            </h2>
            <p className="text-gray-400 text-sm max-w-xl">
              Stay updated with the latest articles covering emerging threats,
              innovative solutions, and timely insights to keep your business
              secure.
            </p>
          </div>

          <motion.div
            whileHover={{ y: -4 }}
            className="w-full bg-white border border-gray-100 rounded-3xl p-12 flex flex-col items-center justify-center text-center min-h-[280px] shadow-xl hover:shadow-2xl transition-all cursor-pointer group"
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="w-14 h-14 rounded-2xl bg-gray-50 text-gray-400 border border-gray-100 flex items-center justify-center mb-5 group-hover:bg-green-50 group-hover:text-[#43A047] group-hover:border-green-100 transition-all"
            >
              <FontAwesomeIcon icon={faMagnifyingGlass} className="text-xl" />
            </motion.div>
            <h3 className="text-lg font-bold text-gray-900 tracking-tight group-hover:text-[#43A047] transition-colors">
              No posts found
            </h3>
            <p className="text-gray-500 text-sm max-w-sm mt-2 leading-relaxed">
              We couldn't find any articles matching your current filters. Try
              selecting a different category or clearing your search.
            </p>
          </motion.div>
        </AnimatedSectionLate>

        {/* ==========================================
            5. PAGINATION ROW
            ========================================== */}
        <AnimatedSectionLate className="flex items-center justify-between border-t border-gray-200/80 pt-8 text-sm font-bold">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-gray-400 hover:text-gray-600 cursor-not-allowed opacity-50 transition-colors"
          >
            ← Previous
          </motion.button>
          <motion.span
            whileHover={{ scale: 1.1 }}
            className="bg-[#43A047] text-white px-4 py-2 rounded-xl border border-[#43A047] shadow-lg shadow-green-500/25 select-none"
          >
            1
          </motion.span>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-gray-400 hover:text-gray-600 cursor-not-allowed opacity-50 transition-colors"
          >
            Next →
          </motion.button>
        </AnimatedSectionLate>

        {/* ==========================================
            6. BOTTOM PREMIUM DARK CTA BANNER
            ========================================== */}
        <AnimatedSectionLate className="mt-8">
          <motion.div
            whileInView="animate"
            className="w-full bg-[#0a0a0a] rounded-3xl p-8 md:p-12 lg:p-16 text-white relative overflow-hidden shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-12"
          >
            {/* Background decorations */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#43A047]/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500/10 rounded-full blur-[80px] pointer-events-none" />

            <div className="space-y-6 max-w-xl z-10 relative">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full py-1.5 pl-2 pr-4"
              >
                <FontAwesomeIcon
                  icon={faBookOpen}
                  className="text-xs text-[#43A047]"
                />
                <span className="text-xs font-medium text-gray-300">
                  Stay in the Loop
                </span>
              </motion.div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight">
                Build Skills With{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#43A047] to-[#66BB6A]">
                  Practical Insights
                </span>
              </h2>

              <p className="text-gray-400 text-sm lg:text-base font-medium leading-relaxed">
                Discover practical strategies from product, design, and research
                teams to help you ship better work faster.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-2 bg-gradient-to-r from-[#43A047] to-[#388E3C] text-white font-bold px-6 py-3.5 rounded-xl transition-all text-sm shadow-lg shadow-green-500/25 hover:shadow-green-500/40 group"
                >
                  <FontAwesomeIcon icon={faPenNib} className="text-sm" />
                  <span>Explore Internships</span>
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
                  <span>Become Ambassador</span>
                </motion.button>
              </div>
            </div>

            {/* Background Artwork */}
            <div className="hidden lg:block absolute right-0 top-0 h-full w-1/2 opacity-10 pointer-events-none z-0">
              <div className="absolute right-12 bottom-12 w-32 h-32 bg-white rounded-full" />
              <div className="absolute right-48 top-12 w-28 h-28 bg-white" />
              <div className="absolute right-12 top-24 w-24 h-48 border-t-[48px] border-l-[48px] border-transparent border-t-white" />
              <div className="absolute right-48 bottom-16 w-32 h-32 bg-white rounded-tl-full" />
            </div>
          </motion.div>
        </AnimatedSectionLate>
      </div>
    </motion.div>
  );
}
