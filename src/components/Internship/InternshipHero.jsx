import React from 'react';

const InternshipHero = () => {
  // Bottom counter section data
  const stats = [
    { value: "15+", label: "INTERNSHIP TRACKS" },
    { value: "50000+", label: "STUDENTS JOINED" },
    { value: "100%", label: "REMOTE-FIRST" }
  ];

  return (
    <section className="w-full bg-white pt-24 pb-8 px-6 lg:px-16 font-sans overflow-hidden relative">
      
      {/* Main Grid Wrapper */}
      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* ================= LEFT CONTENT COLUMN ================= */}
        <div className="lg:col-span-7 space-y-6">
          {/* Trending Micro Tag */}
          <div className="inline-flex items-center gap-2 bg-[#f4fbf2] border border-green-100 rounded-full px-3 py-1">
            <span className="bg-[#3FB628] text-white text-[9px] font-black tracking-wider uppercase px-1.5 py-0.5 rounded-full">
              Trending
            </span>
            <span className="text-gray-500 text-[11px] font-bold tracking-wide">
              Explore Internship Opportunities
            </span>
          </div>

          {/* Core Master Typography Title */}
          <h1 className="text-4xl sm:text-[64px] font-black text-gray-950 tracking-tight leading-[1.05]">
            Build Skills.<br />
            Get Experience.<br />
            <span className="text-[#3FB628]">Land Your Job.</span>
          </h1>

          {/* Subtext description */}
          <p className="text-gray-500 text-xs sm:text-base font-semibold leading-relaxed max-w-xl">
            Stop waiting for opportunities. Start building real skills with Pakistan's largest virtual internship platform. Your dream tech career begins here.
          </p>

          {/* Primary Action Button Row */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button className="bg-[#3FB628] text-white px-7 py-4 rounded-full text-xs font-bold hover:bg-[#349e1e] transition shadow-md shadow-green-100 flex items-center gap-2 group">
              Browse Tracks 
              <span className="transform group-hover:translate-x-1 transition-transform">→</span>
            </button>
            <button className="bg-transparent text-gray-900 border border-gray-200 px-7 py-4 rounded-full text-xs font-bold hover:bg-gray-50 transition">
              How It Works
            </button>
          </div>

          {/* Value Checks Footer Row */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-4 border-t border-gray-100/60">
            <div className="flex items-center gap-2 text-xs font-bold text-gray-700">
              <svg className="w-4 h-4 text-[#3FB628]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
              </svg>
              <span>No Experience Required</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-bold text-gray-700">
              <svg className="w-4 h-4 text-[#3FB628]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
              </svg>
              <span>Industry-Ready Projects</span>
            </div>
          </div>
        </div>

        {/* ================= RIGHT ASYMMETRIC FLOATING CARDS ARTWORK ================= */}
        <div className="lg:col-span-5 w-full flex justify-center lg:justify-end relative pt-6 lg:pt-0">
          <div className="grid grid-cols-2 gap-4 w-full max-w-lg items-center">
            
            {/* Left Vertical Column inside artwork */}
            <div className="space-y-4">
              {/* Skill Growth White Card */}
              <div className="bg-white border border-gray-100/80 rounded-[24px] p-6 shadow-[0_15px_40px_rgba(0,0,0,0.02)] space-y-3">
                <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center text-blue-500">
                  ⚡
                </div>
                <h4 className="text-sm font-black tracking-tight text-gray-950">Skill Growth</h4>
                <p className="text-gray-400 text-[11px] font-semibold leading-normal">
                  Systematic track design for maximum career impact.
                </p>
              </div>

              {/* Verified Track Signature Green Card */}
              <div className="bg-[#3FB628] rounded-[24px] p-6 text-white shadow-[0_15px_45px_rgba(63,182,40,0.15)] space-y-3 relative overflow-hidden">
                <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-white text-sm">
                  ✓
                </div>
                <h4 className="text-sm font-black tracking-tight">Verified track</h4>
                <p className="text-white/80 text-[11px] font-medium leading-normal">
                  Trusted by top recruiters and tech partners.
                </p>
              </div>
            </div>

            {/* Right Vertical Column inside artwork (Staggered offset) */}
            <div className="space-y-4 transform lg:translate-y-8">
              {/* Flexible Pace Navy Card */}
              <div className="bg-[#121926] rounded-[24px] p-6 text-white shadow-[0_15px_40px_rgba(0,0,0,0.03)] space-y-3">
                <div className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center text-green-400 text-xs">
                  ⚡
                </div>
                <h4 className="text-sm font-black tracking-tight">Flexible Pace</h4>
                <p className="text-gray-400 text-[11px] font-semibold leading-normal">
                  Learn on your schedule, anywhere in the world.
                </p>
              </div>

              {/* Job Support White Card */}
              <div className="bg-white border border-gray-100/80 rounded-[24px] p-6 shadow-[0_15px_40px_rgba(0,0,0,0.02)] space-y-3">
                <div className="w-9 h-9 rounded-xl bg-green-50 flex items-center justify-center text-[#3FB628]">
                  📋
                </div>
                <h4 className="text-sm font-black tracking-tight text-gray-950">Job Support</h4>
                <p className="text-gray-400 text-[11px] font-semibold leading-normal">
                  Direct referrals for top performing internees.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* ================= BOTTOM STATS COUNTER BAR ================= */}
      <div className="max-w-screen-2xl mx-auto mt-20 pt-10 border-t border-gray-100/70">
        <div className="grid grid-cols-3 gap-6 text-center max-w-4xl mx-auto">
          {stats.map((stat, idx) => (
            <div key={idx} className="space-y-1">
              <div className="text-3xl sm:text-5xl font-black text-gray-950 tracking-tight">
                {stat.value}
              </div>
              <div className="text-[9px] sm:text-[11px] font-bold text-gray-400 tracking-widest uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= FLOATING HELP SUPPORT WIDGET (BOTTOM RIGHT) ================= */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="w-12 h-12 rounded-full bg-[#3FB628] hover:bg-[#349e1e] text-white flex items-center justify-center shadow-lg shadow-green-200/50 transition-all active:scale-95 group">
          <svg className="w-5 h-5 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        </button>
      </div>

    </section>
  );
};

export default InternshipHero;