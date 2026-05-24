import React from 'react';

const TaskPlatform = () => {
  return (
    <section className="w-full bg-[#0B0F17] text-white py-20 px-6 lg:px-16 font-sans relative overflow-hidden">
      
      {/* Decorative Subtle Background Shapes */}
      <div className="absolute right-0 top-10 w-96 h-96 bg-gradient-to-b from-gray-900/40 to-transparent rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="max-w-screen-2xl mx-auto">
        
        {/* ================= HEADER SECTION ================= */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-xs text-gray-300">
            <span className="text-[#3FB628] text-sm">🛠️</span>
            <span className="font-semibold tracking-wide">Task Management Platform</span>
          </div>

          {/* Main Typography */}
          <h2 className="text-3xl sm:text-[40px] font-bold tracking-tight text-white leading-tight">
            Turn Learning into Proof with <br />
            the <span className="text-gray-100">internee.pk</span> Task Portal
          </h2>
          
          <p className="text-gray-400 text-sm sm:text-[15px] max-w-2xl mx-auto font-medium leading-relaxed">
            Complete real tasks, get structured feedback, and build a portfolio employers trust. Every milestone moves you closer to job-ready.
          </p>
        </div>

        {/* ================= CARDS CONTAINER (GRID) ================= */}
        <div className="space-y-6 max-w-5xl mx-auto">
          
          {/* Row 1: Two Large Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Box 1: Hands-on Industry Projects */}
            <div className="bg-[#111622] border border-gray-800/60 rounded-3xl p-8 space-y-5 hover:border-gray-700/80 transition duration-300">
              <div className="w-12 h-12 rounded-2xl bg-green-500/10 flex items-center justify-center border border-green-500/20">
                <svg className="w-6 h-6 text-[#3FB628]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-gray-100">Hands-on Industry Projects</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Practice with real-world projects that mirror industry workflows. Each task sharpens your skills and strengthens your portfolio.
                </p>
              </div>
              {/* Feature Checkmarks list based on screenshot */}
              <ul className="space-y-2.5 text-sm text-gray-300 font-medium pt-2">
                <li className="flex items-center gap-2.5">
                  <span className="text-[#3FB628] text-xs bg-green-500/10 w-5 h-5 rounded-full flex items-center justify-center border border-green-500/20">✓</span> Project-based learning
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="text-[#3FB628] text-xs bg-green-500/10 w-5 h-5 rounded-full flex items-center justify-center border border-green-500/20">✓</span> Industry-standard practices
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="text-[#3FB628] text-xs bg-green-500/10 w-5 h-5 rounded-full flex items-center justify-center border border-green-500/20">✓</span> Portfolio building
                </li>
              </ul>
            </div>

            {/* Box 2: Skill Verification System */}
            <div className="bg-[#111622] border border-gray-800/60 rounded-3xl p-8 space-y-5 hover:border-gray-700/80 transition duration-300">
              <div className="w-12 h-12 rounded-2xl bg-green-500/10 flex items-center justify-center border border-green-500/20">
                <svg className="w-6 h-6 text-[#3FB628]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-gray-100">Skill Verification System</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Every completed task adds verified proof to your profile. Track progress and showcase outcomes with confidence.
                </p>
              </div>
              {/* Feature Checkmarks list */}
              <ul className="space-y-2.5 text-sm text-gray-300 font-medium pt-2">
                <li className="flex items-center gap-2.5">
                  <span className="text-[#3FB628] text-xs bg-green-500/10 w-5 h-5 rounded-full flex items-center justify-center border border-green-500/20">✓</span> Skill verification
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="text-[#3FB628] text-xs bg-green-500/10 w-5 h-5 rounded-full flex items-center justify-center border border-green-500/20">✓</span> Progress tracking
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="text-[#3FB628] text-xs bg-green-500/10 w-5 h-5 rounded-full flex items-center justify-center border border-green-500/20">✓</span> Achievement badges
                </li>
              </ul>
            </div>

          </div>

          {/* Row 2: Two Smaller Supporting Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Box 3: SDLC Implementation */}
            <div className="bg-[#111622] border border-gray-800/60 rounded-3xl p-6 flex gap-4 items-start hover:border-gray-700/80 transition duration-300">
              <div className="p-3 bg-green-500/10 text-[#3FB628] rounded-xl flex-shrink-0 border border-green-500/20">
                🔗
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-gray-100 text-[15px]">SDLC Implementation via internee.pk</h4>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed font-normal">
                  Experience the complete Software Development Life Cycle through structured tasks and milestones, part of our virtual internship offerings.
                </p>
              </div>
            </div>

            {/* Box 4: Guided Learning Path */}
            <div className="bg-[#111622] border border-gray-800/60 rounded-3xl p-6 flex gap-4 items-start hover:border-gray-700/80 transition duration-300">
              <div className="p-3 bg-green-500/10 text-[#3FB628] rounded-xl flex-shrink-0 border border-green-500/20">
                📖
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-gray-100 text-[15px]">Guided Learning Path at internee.pk</h4>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed font-normal">
                  Follow a structured learning path designed for both beginners and advanced learners as part of our virtual internship curriculum.
                </p>
              </div>
            </div>

          </div>

          {/* ================= ROW 3: BOTTOM BIG CALL-TO-ACTION PANEL ================= */}
          <div className="w-full bg-gradient-to-r from-[#111622] to-[#151C2C] border border-gray-800/80 rounded-[32px] p-8 sm:p-12 text-center relative overflow-hidden mt-10 shadow-xl">
            
            {/* Abstract Background Design for Bottom Banner */}
            <div className="absolute right-4 bottom-0 opacity-10 pointer-events-none hidden lg:block">
              <div className="grid grid-cols-3 gap-3">
                <div className="w-16 h-16 rounded-full border-4 border-white"></div>
                <div className="w-16 h-16 bg-white rounded-xl"></div>
                <div className="w-16 h-16 rounded-full border-4 border-white"></div>
              </div>
            </div>

            <div className="relative z-10 space-y-5 max-w-2xl mx-auto">
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                Ready to Build Your Professional Portfolio with internee.pk?
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm font-medium leading-relaxed">
                Join our virtual internships and get access to industry-standard tasks that will help you build a remarkable portfolio, only at internee.pk.
              </p>
              <div className="pt-2">
                <button className="bg-[#3FB628] text-white px-8 py-3.5 rounded-full font-bold text-sm flex items-center justify-center gap-2 hover:bg-[#349e1e] transition-all duration-300 shadow-lg shadow-green-900/30 mx-auto">
                  <span>Start Your Journey Now</span>
                  <svg className="w-4 h-4 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default TaskPlatform;