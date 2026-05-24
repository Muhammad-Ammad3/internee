import React, { useState } from "react";
// React Router links aur active state check karne ke liye hooks import kiye hain
import { Link, useLocation } from "react-router-dom";

// Internee.pk logo component
const Logo = () => (
  <Link to="/" className="flex items-center gap-1.5 cursor-pointer select-none">
    <div className="p-1.5 bg-black rounded-lg">
      <div className="w-4 h-4 rounded-full border-2 border-white flex items-center justify-center relative">
        <div className="absolute top-[-5px] right-[-5px] text-[8px] text-white font-sans">
          ^
        </div>
      </div>
    </div>
    <span className="text-[#3FB628] font-black text-xl tracking-tight">
      Internee
    </span>
    <span className="text-gray-900 font-black text-xl tracking-tight">.pk</span>
    <span className="text-[9px] text-gray-400 font-bold mt-2 block ml-1 tracking-wider uppercase">
      VIRTUAL INTERNSHIP PLATFORM
    </span>
  </Link>
);

// Dropdown item structure
const ResourcesDropdown = () => (
  <div className="absolute top-[calc(100%+10px)] right-0 md:left-[-50%] bg-white p-5 rounded-2xl shadow-[0_15px_50px_rgba(0,0,0,0.08)] border border-gray-100/80 z-50 w-[270px]">
    {/* Blog Item */}
    <Link
      to="/blog"
      className="flex items-start gap-3.5 group p-2 rounded-xl hover:bg-gray-50 transition"
    >
      <div className="p-2.5 bg-green-50 rounded-xl text-green-700 text-base group-hover:bg-green-100 transition-colors">
        📚
      </div>
      <div>
        <p className="text-gray-900 font-black text-sm tracking-tight">Blog</p>
        <p className="text-gray-400 text-[11px] font-semibold mt-0.5 leading-normal">
          Read our latest insights and articles
        </p>
      </div>
    </Link>

    {/* Webinars Item */}
    <Link
      to="/webinars"
      className="flex items-start gap-3.5 group p-2 rounded-xl hover:bg-gray-50 transition mt-3"
    >
      <div className="p-2.5 bg-green-50 rounded-xl text-green-700 text-base group-hover:bg-green-100 transition-colors">
        🎙️
      </div>
      <div>
        <p className="text-gray-900 font-black text-sm tracking-tight">Webinars</p>
        <p className="text-gray-400 text-[11px] font-semibold mt-0.5 leading-normal">
          Join expert-led sessions and masterclasses
        </p>
      </div>
    </Link>
  </div>
);

const Navbar = () => {
  const [showResources, setShowResources] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Current active route track karne ke liye location hook call kiya
  const location = useLocation();

  // Helper function: check karega ke kaunsa link active hai taake color styling upgrade ho ske
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="w-full h-20 bg-white border-b border-gray-100 sticky top-0 z-50 font-sans select-none">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 h-full flex items-center justify-between">
        
        {/* Left Side: Logo */}
        <div className="flex-shrink-0">
          <Logo />
        </div>

        {/* Center: Desktop Navigation Links with route parameters */}
        <div className="hidden lg:flex items-center gap-7 text-gray-700 text-sm font-semibold">
          <Link 
            to="/" 
            className={`transition-colors ${isActive("/") ? "text-[#3FB628] font-bold" : "text-gray-400 hover:text-gray-900"}`}
          >
            Home
          </Link>
          
          {/* INTERNSHIP ROUTE ADDED HERE */}
          <Link 
            to="/internships" 
            className={`transition-colors ${isActive("/internships") ? "text-[#3FB628] font-bold" : "text-gray-400 hover:text-gray-900"}`}
          >
            Internship
          </Link>
          
          <Link 
            to="/graduate-program" 
            className={`transition-colors ${isActive("/graduate-program") ? "text-[#3FB628] font-bold" : "text-gray-400 hover:text-gray-900"}`}
          >
            Graduate Program
          </Link>
          
          <Link 
            to="/student-ambassador" 
            className={`transition-colors ${isActive("/student-ambassador") ? "text-[#3FB628] font-bold" : "text-gray-400 hover:text-gray-900"}`}
          >
            Student Ambassador
          </Link>
          
          <Link 
            to="/startup-journey" 
            className={`transition-colors ${isActive("/startup-journey") ? "text-[#3FB628] font-bold" : "text-gray-400 hover:text-gray-900"}`}
          >
            Startup Journey
          </Link>

          {/* Resources Dropdown Core */}
          <div
            className="relative group cursor-pointer py-2"
            onClick={() => setShowResources(!showResources)}
            onMouseLeave={() => setShowResources(false)}
          >
            <div
              className={`flex items-center gap-1 transition-colors ${
                showResources || isActive("/blog") || isActive("/webinars")
                  ? "text-[#3FB628]" 
                  : "text-gray-400 hover:text-gray-900"
              }`}
            >
              <span className="font-semibold text-[14px]">Resources</span>
              <svg
                className={`w-3.5 h-3.5 transition-transform duration-200 ${showResources ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
              </svg>
            </div>

            {/* Dropdown visibility handlers */}
            {showResources && (
              <div onMouseEnter={() => setShowResources(true)}>
                <ResourcesDropdown />
              </div>
            )}
          </div>
        </div>

        {/* Right Side: Action Buttons */}
        <div className="flex items-center gap-3.5">
          {/* Job Portal Button */}
          <button className="bg-[#3FB628] text-white px-5 py-2.5 rounded-full text-xs font-black flex items-center gap-1.5 hover:bg-[#349e1e] transition-all shadow-md shadow-green-100 flex-shrink-0 active:scale-95">
            <span>Job Portal</span>
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>

          {/* Sign In Button */}
          <button className="border border-gray-200 text-gray-800 px-5 py-2.5 rounded-full text-xs font-bold hover:bg-gray-50 transition-colors whitespace-nowrap flex-shrink-0 active:scale-95">
            Sign In
          </button>

          {/* Mobile Menu Icon Toggle */}
          <div 
            className="lg:hidden p-2 text-gray-600 cursor-pointer active:bg-gray-50 rounded-lg transition"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
            </svg>
          </div>
        </div>
      </div>

      {/* ================= MOBILE EXPANDABLE DRAWER MENU ================= */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed top-20 left-0 w-full bg-white border-b border-gray-100 shadow-xl py-6 px-6 z-40 flex flex-col gap-4 animate-fadeIn">
          <Link to="/" onClick={() => setMobileMenuOpen(false)} className={`text-sm font-bold ${isActive("/") ? "text-[#3FB628]" : "text-gray-500"}`}>Home</Link>
          <Link to="/internships" onClick={() => setMobileMenuOpen(false)} className={`text-sm font-bold ${isActive("/internships") ? "text-[#3FB628]" : "text-gray-500"}`}>Internship</Link>
          <Link to="/graduate-program" onClick={() => setMobileMenuOpen(false)} className={`text-sm font-bold ${isActive("/graduate-program") ? "text-[#3FB628]" : "text-gray-500"}`}>Graduate Program</Link>
          <Link to="/student-ambassador" onClick={() => setMobileMenuOpen(false)} className={`text-sm font-bold ${isActive("/student-ambassador") ? "text-[#3FB628]" : "text-gray-500"}`}>Student Ambassador</Link>
          <Link to="/startup-journey" onClick={() => setMobileMenuOpen(false)} className={`text-sm font-bold ${isActive("/startup-journey") ? "text-[#3FB628]" : "text-gray-500"}`}>Startup Journey</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;