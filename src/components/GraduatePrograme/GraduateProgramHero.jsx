import React from 'react';

const GraduateProgramHero = () => {
  // Mini metrics dataset for the top feature card in artwork
  const miniMetrics = [
    { value: "20+", label: "Tracks" },
    { value: "80+", label: "Projects" },
    { value: "35+", label: "Mentors" }
  ];

  return (
    <section className="w-full bg-white pt-20 pb-16 px-6 lg:px-16 font-sans overflow-hidden select-none">
      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* ========================================================================= */}
        {/* LEFT COLUMN: BRANDING TITLES & INTERACTION CONTROLS                       */}
        {/* ========================================================================= */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Micro Graduate Program Capsule Tag */}
          <div className="inline-flex items-center gap-2 bg-[#f4fbf2] border border-green-100 rounded-full px-3 py-1">
            <span className="text-xs">🎓</span>
            <span className="text-[#3FB628] text-[11px] font-black tracking-wide uppercase">
              Graduate Programs
            </span>
          </div>

          {/* Main Master Heading */}
          <h1 className="text-4xl sm:text-[56px] font-black text-gray-950 tracking-tight leading-[1.1] max-w-2xl">
            Graduate Programs That<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-950 to-neutral-700">
              Launch Careers
            </span>
          </h1>

          {/* Short Narrative Subtext */}
          <p className="text-gray-500 text-xs sm:text-[15px] font-semibold leading-relaxed max-w-xl">
            Explore structured, career-focused programs designed to build job-ready skills through real projects, mentorship, and industry expertise.
          </p>

          {/* Action Interface Buttons Row */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button className="bg-[#3FB628] text-white px-7 py-3.5 rounded-full text-xs font-black hover:bg-[#349e1e] transition-all shadow-md shadow-green-100 flex items-center gap-2 group active:scale-95">
              Browse Programs 
              <span className="text-sm transform group-hover:translate-x-0.5 transition-transform">✨</span>
            </button>
            <button className="bg-transparent text-gray-900 border border-gray-200 px-7 py-3.5 rounded-full text-xs font-black hover:bg-gray-50 transition active:scale-95">
              Get Started
            </button>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* RIGHT COLUMN: ASYMMETRIC VISUAL LAYOUTS (ARTWORK CARDS)                  */}
        {/* ========================================================================= */}
        <div className="lg:col-span-5 w-full flex flex-col items-center lg:items-end justify-center gap-5 relative">
          
          {/* 1. TOP CARD: COMPREHENSIVE LEARNING OVERVIEW PANEL */}
          <div className="w-full max-w-md bg-white border border-gray-100/90 rounded-[28px] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.02)] space-y-5">
            
            {/* Header Layout inside card */}
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#f4fbf2] flex items-center justify-center text-sm">
                  🟢
                </div>
                <div>
                  <span className="text-[10px] font-bold text-gray-400 tracking-wider uppercase block">
                    Program Features
                  </span>
                  <h4 className="text-sm font-black text-gray-950 tracking-tight">
                    Comprehensive Learning
                  </h4>
                </div>
              </div>
              
              {/* Duration badge */}
              <span className="bg-gray-50 border border-gray-100 text-gray-400 text-[10px] font-bold px-2.5 py-1 rounded-md">
                12 Weeks
              </span>
            </div>

            {/* Nested Inner Metrics Grid Setup */}
            <div className="grid grid-cols-3 gap-3">
              {miniMetrics.map((metric, i) => (
                <div key={i} className="bg-white border border-dashed border-gray-200 rounded-xl p-3 text-center space-y-0.5">
                  <div className="text-base font-black text-gray-950 tracking-tight">
                    {metric.value}
                  </div>
                  <div className="text-[9px] font-bold text-gray-400 uppercase tracking-wide">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 2. BOTTOM CARD: JET BLACK OUTCOME SNAPSHOT COMPONENT */}
          <div className="w-full max-w-md bg-[#121212] rounded-[28px] p-6 text-white shadow-xl space-y-4 relative overflow-hidden transform lg:-translate-x-6">
            
            {/* Micro Top Header Details */}
            <div className="flex items-center justify-between">
              <span className="text-neutral-500 text-[10px] font-bold tracking-wider uppercase">
                Outcome Snapshot
              </span>
              <span className="text-[#3FB628] text-xs">✦</span>
            </div>

            {/* Central Typography Header */}
            <div className="space-y-1.5">
              <h3 className="text-lg font-black tracking-tight text-white">
                Career-Ready Portfolio
              </h3>
              <p className="text-neutral-400 text-[11px] font-semibold leading-relaxed">
                Build verified projects with feedback and present a portfolio recruiters trust.
              </p>
            </div>

            {/* Bottom Twin Micro Capsule Tags Row */}
            <div className="grid grid-cols-2 gap-2.5 pt-1.5">
              <div className="bg-neutral-900 border border-neutral-800/80 rounded-xl p-3 flex items-center gap-2">
                <span className="text-neutral-400 text-xs">💼</span>
                <span className="text-neutral-300 text-[11px] font-bold tracking-tight">
                  Real-World Work
                </span>
              </div>
              <div className="bg-neutral-900 border border-neutral-800/80 rounded-xl p-3 flex items-center gap-2">
                <span className="text-[#3FB628] text-xs">✓</span>
                <span className="text-neutral-300 text-[11px] font-bold tracking-tight">
                  Verified Skills
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default GraduateProgramHero;