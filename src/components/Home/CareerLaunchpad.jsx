import React from 'react';

const CareerLaunchpad = () => {
  return (
    <section className="w-full bg-[#FAFAFA] py-20 px-6 lg:px-16 font-sans">
      <div className="max-w-screen-2xl mx-auto space-y-16">
        
        {/* ================= 1. HEADER TITLE ================= */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 bg-gray-100/80 rounded-full px-4 py-1 text-xs border border-gray-200 text-gray-500">
            <span>🎓</span>
            <span className="font-bold tracking-wide uppercase text-[10px]">Professional Development</span>
          </div>
          <h2 className="text-3xl sm:text-[42px] font-bold text-gray-950 leading-tight">
            Launch Your Career with Internee.pk
          </h2>
          <p className="text-gray-500 text-sm sm:text-base max-w-2xl mx-auto font-medium">
            Pakistan's innovative platform for career growth and professional development. Join our virtual internships to gain practical experience and kickstart your professional journey.
          </p>
        </div>

        {/* ================= 2. FOUR COUNTER BLOCKS ================= */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="bg-white border border-gray-100 p-6 rounded-2xl text-center shadow-[0_4px_20px_rgba(0,0,0,0.01)]">
            <span className="block text-2xl sm:text-3xl font-black text-[#3FB628]">1000+</span>
            <span className="text-xs sm:text-sm font-bold text-gray-500 mt-1 block">Active Internships</span>
          </div>
          <div className="bg-white border border-gray-100 p-6 rounded-2xl text-center shadow-[0_4px_20px_rgba(0,0,0,0.01)]">
            <span className="block text-2xl sm:text-3xl font-black text-[#3FB628]">500+</span>
            <span className="text-xs sm:text-sm font-bold text-gray-500 mt-1 block">Partner Companies</span>
          </div>
          <div className="bg-white border border-gray-100 p-6 rounded-2xl text-center shadow-[0_4px_20px_rgba(0,0,0,0.01)]">
            <span className="block text-2xl sm:text-3xl font-black text-[#3FB628]">10,000+</span>
            <span className="text-xs sm:text-sm font-bold text-gray-500 mt-1 block">Success Stories</span>
          </div>
          <div className="bg-white border border-gray-100 p-6 rounded-2xl text-center shadow-[0_4px_20px_rgba(0,0,0,0.01)]">
            <span className="block text-2xl sm:text-3xl font-black text-[#3FB628]">50+</span>
            <span className="text-xs sm:text-sm font-bold text-gray-500 mt-1 block">Industry Sectors</span>
          </div>
        </div>

        {/* ================= 3. THREE CENTRAL MATRIX CARDS ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Card 1: Targeted Learning */}
          <div className="bg-white border border-gray-100 p-8 rounded-3xl space-y-5 shadow-[0_4px_25px_rgba(0,0,0,0.01)]">
            <div className="w-10 h-10 bg-green-50 text-[#3FB628] rounded-xl flex items-center justify-center font-bold text-lg border border-green-100">
              🎯
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-gray-950">Targeted Learning</h3>
              <p className="text-gray-400 text-sm font-medium leading-relaxed">
                Industry-specific virtual internships designed to build practical skills and experience.
              </p>
            </div>
            <ul className="space-y-3 pt-2 text-sm font-bold text-gray-600">
              <li className="flex items-center gap-3"><span className="text-[#3FB628]">✓</span> Web Development</li>
              <li className="flex items-center gap-3"><span className="text-[#3FB628]">✓</span> Digital Marketing</li>
              <li className="flex items-center gap-3"><span className="text-[#3FB628]">✓</span> UI/UX Design</li>
            </ul>
          </div>

          {/* Card 2: Mentorship Program */}
          <div className="bg-white border border-gray-100 p-8 rounded-3xl space-y-5 shadow-[0_4px_25px_rgba(0,0,0,0.01)]">
            <div className="w-10 h-10 bg-green-50 text-[#3FB628] rounded-xl flex items-center justify-center font-bold text-lg border border-green-100">
              👥
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-gray-950">Mentorship Program</h3>
              <p className="text-gray-400 text-sm font-medium leading-relaxed">
                Learn directly from industry experts at Internee.pk with guided weekly sessions.
              </p>
            </div>
            <ul className="space-y-3 pt-2 text-sm font-bold text-gray-600">
              <li className="flex items-center gap-3"><span className="text-[#3FB628]">✓</span> One-on-One Guidance</li>
              <li className="flex items-center gap-3"><span className="text-[#3FB628]">✓</span> Project Reviews</li>
              <li className="flex items-center gap-3"><span className="text-[#3FB628]">✓</span> Career Planning</li>
            </ul>
          </div>

          {/* Card 3: Certification Track */}
          <div className="bg-white border border-gray-100 p-8 rounded-3xl space-y-5 shadow-[0_4px_25px_rgba(0,0,0,0.01)]">
            <div className="w-10 h-10 bg-green-50 text-[#3FB628] rounded-xl flex items-center justify-center font-bold text-lg border border-green-100">
              🏅
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-gray-950">Certification Track</h3>
              <p className="text-gray-400 text-sm font-medium leading-relaxed">
                Earn recognized certifications and build a portfolio that employers trust.
              </p>
            </div>
            <ul className="space-y-3 pt-2 text-sm font-bold text-gray-600">
              <li className="flex items-center gap-3"><span className="text-[#3FB628]">✓</span> Skill Verification</li>
              <li className="flex items-center gap-3"><span className="text-[#3FB628]">✓</span> Performance Badges</li>
              <li className="flex items-center gap-3"><span className="text-[#3FB628]">✓</span> Digital Certificates</li>
            </ul>
          </div>

        </div>

        {/* ================= 4. BOTTOM TWO-COLUMN METRIC PLATFORM ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4">
          
          {/* Left Block: Learning Journey Progress Indicators */}
          <div className="lg:col-span-5 bg-white border border-gray-100 rounded-3xl p-6 sm:p-8 shadow-[0_4px_25px_rgba(0,0,0,0.01)] space-y-6">
            <h4 className="text-base font-bold text-gray-900 mb-2">Your Learning Journey</h4>
            
            {/* Phase 1 */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-bold text-gray-700">
                <span>Phase 1: Foundation</span>
                <span className="text-gray-400">75%</span>
              </div>
              <div className="w-full bg-gray-100 h-2.5 rounded-full overflow-hidden">
                <div className="bg-[#3FB628] h-full rounded-full transition-all duration-500" style={{ width: '75%' }}></div>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-bold text-gray-700">
                <span>Phase 2: Practical Skills</span>
                <span className="text-gray-400">60%</span>
              </div>
              <div className="w-full bg-gray-100 h-2.5 rounded-full overflow-hidden">
                <div className="bg-[#3FB628] h-full rounded-full transition-all duration-500" style={{ width: '60%' }}></div>
              </div>
            </div>

            {/* Phase 3 */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-bold text-gray-700">
                <span>Phase 3: Industry Projects</span>
                <span className="text-gray-400">85%</span>
              </div>
              <div className="w-full bg-gray-100 h-2.5 rounded-full overflow-hidden">
                <div className="bg-[#3FB628] h-full rounded-full transition-all duration-500" style={{ width: '85%' }}></div>
              </div>
            </div>

          </div>

          {/* Right Block: Career Resources Link Items */}
          <div className="lg:col-span-7 bg-white border border-gray-100 rounded-3xl p-6 sm:p-8 shadow-[0_4px_25px_rgba(0,0,0,0.01)] space-y-4">
            <h4 className="text-base font-bold text-gray-900 mb-2">Career Resources</h4>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="bg-gray-50/70 border border-gray-100/60 p-4 rounded-xl flex items-center gap-3 hover:bg-gray-100/50 transition cursor-pointer">
                <span className="text-green-600 bg-white shadow-sm w-8 h-8 rounded-lg flex items-center justify-center text-sm">📄</span>
                <span className="text-xs sm:text-sm font-bold text-gray-700">Resume Templates</span>
              </div>
              <div className="bg-gray-50/70 border border-gray-100/60 p-4 rounded-xl flex items-center gap-3 hover:bg-gray-100/50 transition cursor-pointer">
                <span className="text-green-600 bg-white shadow-sm w-8 h-8 rounded-lg flex items-center justify-center text-sm">💬</span>
                <span className="text-xs sm:text-sm font-bold text-gray-700">Mock Interviews</span>
              </div>
              <div className="bg-gray-50/70 border border-gray-100/60 p-4 rounded-xl flex items-center gap-3 hover:bg-gray-100/50 transition cursor-pointer">
                <span className="text-green-600 bg-white shadow-sm w-8 h-8 rounded-lg flex items-center justify-center text-sm">📊</span>
                <span className="text-xs sm:text-sm font-bold text-gray-700">Skill Analysis</span>
              </div>
              <div className="bg-gray-50/70 border border-gray-100/60 p-4 rounded-xl flex items-center gap-3 hover:bg-gray-100/50 transition cursor-pointer">
                <span className="text-green-600 bg-white shadow-sm w-8 h-8 rounded-lg flex items-center justify-center text-sm">📖</span>
                <span className="text-xs sm:text-sm font-bold text-gray-700">Learning Paths</span>
              </div>
              <div className="bg-gray-50/70 border border-gray-100/60 p-4 rounded-xl flex items-center gap-3 hover:bg-gray-100/50 transition cursor-pointer">
                <span className="text-green-600 bg-white shadow-sm w-8 h-8 rounded-lg flex items-center justify-center text-sm">🎯</span>
                <span className="text-xs sm:text-sm font-bold text-gray-700">Goal Tracking</span>
              </div>
              <div className="bg-gray-50/70 border border-gray-100/60 p-4 rounded-xl flex items-center gap-3 hover:bg-gray-100/50 transition cursor-pointer">
                <span className="text-green-600 bg-white shadow-sm w-8 h-8 rounded-lg flex items-center justify-center text-sm">👥</span>
                <span className="text-xs sm:text-sm font-bold text-gray-700">Peer Feedback</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default CareerLaunchpad;