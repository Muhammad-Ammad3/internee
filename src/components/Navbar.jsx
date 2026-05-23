import React, { useState } from 'react';

// Internee.pk logo (placeholder text/style matching image)
const Logo = () => (
  <div className="flex items-center gap-1.5 cursor-pointer">
    <div className="p-1.5 bg-black rounded-lg">
      {/* Dynamic graphic part (simulating the atom/hat icon) */}
      <div className="w-4 h-4 rounded-full border-2 border-white flex items-center justify-center relative">
        <div className="absolute top-[-5px] right-[-5px] text-[8px] text-white">^</div>
      </div>
    </div>
    <span className="text-[#3FB628] font-bold text-xl tracking-tight">Internee</span>
    <span className="text-gray-900 font-bold text-xl tracking-tight">.pk</span>
    <span className="text-[10px] text-gray-400 mt-2 block ml-1">VIRTUAL INTERNSHIP PLATFORM</span>
  </div>
);

// Dropdown item structure based on image_12.png
const ResourcesDropdown = () => (
  <div className="absolute top-[calc(100%+10px)] right-0 md:left-[-50%] bg-white p-5 rounded-2xl shadow-xl border border-gray-100 z-50 w-[260px]">
    {/* Blog Item */}
    <a href="#" className="flex items-start gap-3.5 group p-2 rounded-lg hover:bg-gray-50 transition">
      <div className="p-2.5 bg-green-50 rounded-xl text-green-700 text-lg group-hover:bg-green-100">
        📚 {/* Icon placeholder */}
      </div>
      <div>
        <p className="text-gray-900 font-semibold text-sm">Blog</p>
        <p className="text-gray-400 text-xs font-medium mt-0.5">Read our latest insights and articles</p>
      </div>
    </a>

    {/* Webinars Item */}
    <a href="#" className="flex items-start gap-3.5 group p-2 rounded-lg hover:bg-gray-50 transition mt-4">
      <div className="p-2.5 bg-green-50 rounded-xl text-green-700 text-lg group-hover:bg-green-100">
        🎙️ {/* Icon placeholder */}
      </div>
      <div>
        <p className="text-gray-900 font-semibold text-sm">Webinars</p>
        <p className="text-gray-400 text-xs font-medium mt-0.5">Join expert-led sessions and masterclasses</p>
      </div>
    </a>
  </div>
);

const Navbar = () => {
  const [showResources, setShowResources] = useState(false);

  return (
    <nav className="w-full h-20 bg-white border-b border-gray-100 sticky top-0 z-50 font-sans">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 h-full flex items-center justify-between">
        
        {/* Left Side: Logo */}
        <div className="flex-shrink-0">
          <Logo />
        </div>

        {/* Center: Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-8 text-gray-700 text-sm font-medium">
          <a href="#" className="text-gray-500 hover:text-gray-900 transition">Home</a>
          <a href="#" className="text-gray-500 hover:text-gray-900 transition">Internship</a>
          <a href="#" className="text-gray-500 hover:text-gray-900 transition">Graduate Program</a>
          <a href="#" className="text-gray-500 hover:text-gray-900 transition">Student Ambassador</a>
          <a href="#" className="text-gray-500 hover:text-gray-900 transition relative">Startup Journey</a>
          
          {/* Resources with Dropdown */}
          <div 
            className="relative group cursor-pointer"
            onClick={() => setShowResources(!showResources)}
            onMouseLeave={() => setShowResources(false)}
          >
            <div className={`flex items-center gap-1.5 transition ${showResources ? 'text-[#3FB628]' : 'text-gray-500 hover:text-gray-900'}`}>
              <span className="font-semibold text-[15px]">Resources</span>
              <svg className={`w-4 h-4 transition-transform ${showResources ? 'rotate-180 text-[#3FB628]' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" /></svg>
            </div>
            {/* Show dropdown on click or hover (handling hover for desktop UX) */}
            {(showResources || (typeof window !== 'undefined' && window.matchMedia('(min-width: 1024px)').matches && <div className="absolute top-full left-0 h-4 w-full"></div>)) && (
              <div onMouseEnter={() => setShowResources(true)} className={`${showResources ? 'block' : 'hidden lg:group-hover:block'}`}>
                <ResourcesDropdown />
              </div>
            )}
          </div>
        </div>

        {/* Right Side: Action Buttons */}
        <div className="flex items-center gap-3.5">
          {/* Job Portal Button (Active green with icon) */}
          <button className="bg-[#3FB628] text-white px-5 py-2.5 rounded-full text-sm font-bold flex items-center gap-2 hover:bg-[#349e1e] transition-colors shadow-sm shadow-green-200 flex-shrink-0">
            <span>Job Portal</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </button>
          
          {/* Dashboard/Sign In Button */}
          <button className="border border-gray-200 text-gray-800 px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-gray-50 transition-colors whitespace-nowrap flex-shrink-0">
            Sign In
          </button>
          
          {/* Mobile Menu Icon (Hidden on desktop) */}
          <div className="lg:hidden p-2 text-gray-600 cursor-pointer">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" /></svg>
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;