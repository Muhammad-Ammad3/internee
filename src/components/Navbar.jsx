// import React, { useState } from "react";
// // React Router links aur active state check karne ke liye hooks import kiye hain
// import { Link, useLocation } from "react-router-dom";

// // Internee.pk logo component
// const Logo = () => (
//   <Link to="/" className="flex items-center gap-1.5 cursor-pointer select-none">
//     <div className="p-1.5 bg-black rounded-lg">
//       <div className="w-4 h-4 rounded-full border-2 border-white flex items-center justify-center relative">
//         <div className="absolute top-[-5px] right-[-5px] text-[8px] text-white font-sans">
//           ^
//         </div>
//       </div>
//     </div>
//     <span className="text-[#3FB628] font-black text-xl tracking-tight">
//       Internee
//     </span>
//     <span className="text-gray-900 font-black text-xl tracking-tight">.pk</span>
//     <span className="text-[9px] text-gray-400 font-bold mt-2 block ml-1 tracking-wider uppercase">
//       VIRTUAL INTERNSHIP PLATFORM
//     </span>
//   </Link>
// );

// // Dropdown item structure
// const ResourcesDropdown = () => (
//   <div className="absolute top-[calc(100%+10px)] right-0 md:left-[-50%] bg-white p-5 rounded-2xl shadow-[0_15px_50px_rgba(0,0,0,0.08)] border border-gray-100/80 z-50 w-[270px]">
//     {/* Blog Item */}
//     <Link
//       to="/blog"
//       className="flex items-start gap-3.5 group p-2 rounded-xl hover:bg-gray-50 transition"
//     >
//       <div className="p-2.5 bg-green-50 rounded-xl text-green-700 text-base group-hover:bg-green-100 transition-colors">
//         📚
//       </div>
//       <div>
//         <p className="text-gray-900 font-black text-sm tracking-tight">Blog</p>
//         <p className="text-gray-400 text-[11px] font-semibold mt-0.5 leading-normal">
//           Read our latest insights and articles
//         </p>
//       </div>
//     </Link>

//     {/* Webinars Item */}
//     <Link
//       to="/webinars"
//       className="flex items-start gap-3.5 group p-2 rounded-xl hover:bg-gray-50 transition mt-3"
//     >
//       <div className="p-2.5 bg-green-50 rounded-xl text-green-700 text-base group-hover:bg-green-100 transition-colors">
//         🎙️
//       </div>
//       <div>
//         <p className="text-gray-900 font-black text-sm tracking-tight">
//           Webinars
//         </p>
//         <p className="text-gray-400 text-[11px] font-semibold mt-0.5 leading-normal">
//           Join expert-led sessions and masterclasses
//         </p>
//       </div>
//     </Link>
//   </div>
// );

// const Navbar = () => {
//   const [showResources, setShowResources] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   // Current active route track karne ke liye location hook call kiya
//   const location = useLocation();

//   // Helper function: check karega ke kaunsa link active hai taake color styling upgrade ho ske
//   const isActive = (path) => location.pathname === path;

//   return (
//     <nav className="w-full h-20 bg-white border-b border-gray-100 sticky top-0 z-50 font-sans select-none">
//       <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 h-full flex items-center justify-between">
//         {/* Left Side: Logo */}
//         <div className="flex-shrink-0">
//           <Logo />
//         </div>

//         {/* Center: Desktop Navigation Links with route parameters */}
//         <div className="hidden lg:flex items-center gap-7 text-gray-700 text-sm font-semibold">
//           <Link
//             to="/"
//             className={`transition-colors ${isActive("/") ? "text-[#3FB628] font-bold" : "text-gray-400 hover:text-gray-900"}`}
//           >
//             Home
//           </Link>

//           {/* INTERNSHIP ROUTE ADDED HERE */}
//           <Link
//             to="/internships"
//             className={`transition-colors ${isActive("/internships") ? "text-[#3FB628] font-bold" : "text-gray-400 hover:text-gray-900"}`}
//           >
//             Internship
//           </Link>

//           <Link
//             to="/graduate-program"
//             className={`transition-colors ${isActive("/GraduatePrograme") ? "text-[#3FB628] font-bold" : "text-gray-400 hover:text-gray-900"}`}
//           >
//             Graduate Program
//           </Link>

//           <Link
//             to="/studentambassadors"
//             className={`transition-colors ${isActive("/StudentAmbassador") ? "text-[#3FB628] font-bold" : "text-gray-400 hover:text-gray-900"}`}
//           >
//             Student Ambassador
//           </Link>

//           <Link
//             to="/startupjourney"
//             className={`transition-colors ${isActive("/startupjourney") ? "text-[#3FB628] font-bold" : "text-gray-400 hover:text-gray-900"}`}
//           >
//             Startup Journey
//           </Link>

//           {/* Resources Dropdown Core */}
//           <div
//             className="relative group cursor-pointer py-2"
//             onClick={() => setShowResources(!showResources)}
//             onMouseLeave={() => setShowResources(false)}
//           >
//             <div
//               className={`flex items-center gap-1 transition-colors ${
//                 showResources || isActive("/blog") || isActive("/webinars")
//                   ? "text-[#3FB628]"
//                   : "text-gray-400 hover:text-gray-900"
//               }`}
//             >
//               <span className="font-semibold text-[14px]">Resources</span>
//               <svg
//                 className={`w-3.5 h-3.5 transition-transform duration-200 ${showResources ? "rotate-180" : ""}`}
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2.5"
//                   d="M19 9l-7 7-7-7"
//                 />
//               </svg>
//             </div>

//             {/* Dropdown visibility handlers */}
//             {showResources && (
//               <div onMouseEnter={() => setShowResources(true)}>
//                 <ResourcesDropdown />
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Right Side: Action Buttons */}
//         <div className="flex items-center gap-3.5">
//           {/* Job Portal Button */}
//           <button className="bg-[#3FB628] text-white px-5 py-2.5 rounded-full text-xs font-black flex items-center gap-1.5 hover:bg-[#349e1e] transition-all shadow-md shadow-green-100 flex-shrink-0 active:scale-95">
//             <span>Job Portal</span>
//             <svg
//               className="w-3.5 h-3.5"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2.5"
//                 d="M14 5l7 7m0 0l-7 7m7-7H3"
//               />
//             </svg>
//           </button>

//           {/* Sign In Button */}
//           <button className="border border-gray-200 text-gray-800 px-5 py-2.5 rounded-full text-xs font-bold hover:bg-gray-50 transition-colors whitespace-nowrap flex-shrink-0 active:scale-95">
//             Sign In
//           </button>

//           {/* Mobile Menu Icon Toggle */}
//           <div
//             className="lg:hidden p-2 text-gray-600 cursor-pointer active:bg-gray-50 rounded-lg transition"
//             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//           >
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d={
//                   mobileMenuOpen
//                     ? "M6 18L18 6M6 6l12 12"
//                     : "M4 6h16M4 12h16m-7 6h7"
//                 }
//               />
//             </svg>
//           </div>
//         </div>
//       </div>

//       {/* ================= MOBILE EXPANDABLE DRAWER MENU ================= */}
//       {mobileMenuOpen && (
//         <div className="lg:hidden fixed top-20 left-0 w-full bg-white border-b border-gray-100 shadow-xl py-6 px-6 z-40 flex flex-col gap-4 animate-fadeIn">
//           <Link
//             to="/"
//             onClick={() => setMobileMenuOpen(false)}
//             className={`text-sm font-bold ${isActive("/") ? "text-[#3FB628]" : "text-gray-500"}`}
//           >
//             Home
//           </Link>
//           <Link
//             to="/internships"
//             onClick={() => setMobileMenuOpen(false)}
//             className={`text-sm font-bold ${isActive("/internships") ? "text-[#3FB628]" : "text-gray-500"}`}
//           >
//             Internship
//           </Link>
//           <Link
//             to="/graduate-program"
//             onClick={() => setMobileMenuOpen(false)}
//             className={`text-sm font-bold ${isActive("/graduate-program") ? "text-[#3FB628]" : "text-gray-500"}`}
//           >
//             Graduate Program
//           </Link>
//           <Link
//             to="/student-ambassador"
//             onClick={() => setMobileMenuOpen(false)}
//             className={`text-sm font-bold ${isActive("/student-ambassador") ? "text-[#3FB628]" : "text-gray-500"}`}
//           >
//             Student Ambassador
//           </Link>
//           <Link
//             to="/startup-journey"
//             onClick={() => setMobileMenuOpen(false)}
//             className={`text-sm font-bold ${isActive("/startup-journey") ? "text-[#3FB628]" : "text-gray-500"}`}
//           >
//             Startup Journey
//           </Link>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;




import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Briefcase, ArrowUpRight, Menu, X, User } from "lucide-react";

// Logo Component with premium styling
const Logo = () => (
  <Link to="/" className="flex items-center gap-2 cursor-pointer select-none group">
    <div className="relative">
      <div className="w-10 h-10 bg-gradient-to-br from-[#43A047] to-[#388E3C] rounded-xl flex items-center justify-center shadow-lg shadow-green-500/20 group-hover:scale-105 transition-transform duration-300">
        <span className="text-white font-black text-lg">i</span>
      </div>
      <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full shadow-sm" />
    </div>
    <div className="flex flex-col">
      <div className="flex items-baseline gap-0.5">
        <span className="text-[#43A047] font-black text-xl tracking-tight">
          Internee
        </span>
        <span className="text-gray-900 font-black text-xl tracking-tight">.pk</span>
      </div>
      <span className="text-[9px] text-gray-400 font-bold mt-0.5 tracking-widest uppercase">
        Virtual Internship Platform
      </span>
    </div>
  </Link>
);

// Dropdown Component with premium animations
const ResourcesDropdown = () => (
  <motion.div
    initial={{ opacity: 0, y: 10, scale: 0.95 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    exit={{ opacity: 0, y: 10, scale: 0.95 }}
    transition={{ duration: 0.2, ease: "easeOut" }}
    className="absolute top-[calc(100%+12px)] right-0 md:left-1/2 md:-translate-x-1/2 bg-white/95 backdrop-blur-xl p-2 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.12)] border border-gray-100 z-50 w-[280px]"
  >
    <div className="flex flex-col gap-1">
      <Link
        to="/blog"
        className="flex items-center gap-3 group p-3 rounded-xl hover:bg-gray-50 transition-all duration-200"
      >
        <div className="p-2.5 bg-gradient-to-br from-green-50 to-green-100/50 rounded-xl text-[#43A047] group-hover:scale-110 transition-transform">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        </div>
        <div className="flex-1">
          <p className="text-gray-900 font-bold text-sm">Blog</p>
          <p className="text-gray-400 text-xs font-medium mt-0.5">
            Latest insights & articles
          </p>
        </div>
      </Link>

      <Link
        to="/webinars"
        className="flex items-center gap-3 group p-3 rounded-xl hover:bg-gray-50 transition-all duration-200"
      >
        <div className="p-2.5 bg-gradient-to-br from-green-50 to-green-100/50 rounded-xl text-[#43A047] group-hover:scale-110 transition-transform">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
        </div>
        <div className="flex-1">
          <p className="text-gray-900 font-bold text-sm">Webinars</p>
          <p className="text-gray-400 text-xs font-medium mt-0.5">
            Expert sessions & masterclasses
          </p>
        </div>
      </Link>
    </div>
  </motion.div>
);

const Navbar = () => {
  const [showResources, setShowResources] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/internships", label: "Internship" },
    { path: "/graduate-program", label: "Graduate Program" },
    { path: "/studentambassadors", label: "Student Ambassador" },
    { path: "/startupjourney", label: "Startup Journey" },
  ];

  return (
    <nav className="w-full h-20 bg-white/80 backdrop-blur-xl border-b border-gray-100/50 sticky top-0 z-50 font-sans select-none">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-full flex items-center justify-between">
        {/* Left Side: Logo */}
        <div className="flex-shrink-0">
          <Logo />
        </div>

        {/* Center: Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                isActive(link.path)
                  ? "text-[#43A047] bg-green-50/50"
                  : "text-gray-500 hover:text-gray-900 hover:bg-gray-50"
              }`}
            >
              {link.label}
            </Link>
          ))}

          {/* Resources Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setShowResources(true)}
            onMouseLeave={() => setShowResources(false)}
          >
            <button
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                showResources || isActive("/blog") || isActive("/webinars")
                  ? "text-[#43A047] bg-green-50/50"
                  : "text-gray-500 hover:text-gray-900 hover:bg-gray-50"
              }`}
            >
              <span>Resources</span>
              <motion.div
                animate={{ rotate: showResources ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDown className="w-4 h-4" />
              </motion.div>
            </button>

            <AnimatePresence>
              {showResources && <ResourcesDropdown />}
            </AnimatePresence>
          </div>
        </div>

        {/* Right Side: Action Buttons */}
        <div className="flex items-center gap-3">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-[#43A047] to-[#388E3C] text-white px-5 py-2.5 rounded-full text-xs font-bold shadow-lg shadow-green-500/25 hover:shadow-green-500/40 transition-all"
          >
            <Briefcase className="w-3.5 h-3.5" />
            <span>Job Portal</span>
            <ArrowUpRight className="w-3 h-3" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 border border-gray-200 bg-white text-gray-700 px-4 py-2.5 rounded-full text-xs font-bold hover:border-gray-300 hover:shadow-md transition-all"
          >
            <User className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Sign In</span>
          </motion.button>

          {/* Mobile Menu Toggle */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="lg:hidden p-2.5 text-gray-600 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-100 shadow-xl overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-2">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                      isActive(link.path)
                        ? "text-[#43A047] bg-green-50"
                        : "text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
              >
                <Link
                  to="/blog"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-3 rounded-xl text-sm font-semibold text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                >
                  Blog
                </Link>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: (navLinks.length + 1) * 0.05 }}
              >
                <Link
                  to="/webinars"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-3 rounded-xl text-sm font-semibold text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                >
                  Webinars
                </Link>
              </motion.div>
              
              <hr className="my-2 border-gray-100" />
              
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: (navLinks.length + 2) * 0.05 }}
                className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-[#43A047] to-[#388E3C] text-white px-5 py-3 rounded-xl text-sm font-bold shadow-lg"
              >
                <Briefcase className="w-4 h-4" />
                <span>Job Portal</span>
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;