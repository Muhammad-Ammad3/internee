import React from 'react';
import { 
  ArrowRight, 
  Users, 
  BookOpen, 
  Trophy, 
  Sparkles, 
  CheckSquare,
  GraduationCap,
  Code
} from 'lucide-react';

export default function StudentAmbassadorsHero() {
  return (
    <div className="w-full bg-white font-sans antialiased px-6 py-12 md:px-16 md:py-20 max-w-7xl mx-auto selection:bg-green-100">
      
      {/* ==========================================
          1. HERO MAIN SECTION 
          ========================================== */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
        
        {/* Left Side: Content */}
        <div className="space-y-6 max-w-xl">
          <span className="inline-block bg-[#F4F6F5] text-gray-700 text-sm font-medium px-4 py-1.5 rounded-full tracking-wide">
            Student Ambassadors
          </span>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-black leading-[1.1] tracking-tight">
            Internee.pk Student <br /> Ambassadors
          </h1>
          
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            Join our global community of students who build real projects, grow 
            leadership skills, and represent Internee.pk on campus.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-2">
            <button className="flex items-center gap-2 bg-[#43A047] hover:bg-[#388E3C] text-white font-semibold px-6 py-3.5 rounded-full transition-all duration-200 transform active:scale-95 shadow-md shadow-green-600/10">
              Get Started <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border border-gray-200 hover:border-gray-300 text-[#43A047] font-semibold px-7 py-3.5 rounded-full transition-colors bg-transparent">
              View Community
            </button>
          </div>
        </div>

        {/* Right Side: Dashboard/Cards Visuals */}
        <div className="space-y-6 lg:pl-6">
          
          {/* Top White Card: Ambassador Hub */}
          <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-[#E8F5E9] text-[#43A047] rounded-xl">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider font-bold">AMBASSADOR HUB</p>
                  <h3 className="text-lg font-bold text-gray-900">Community Pulse</h3>
                </div>
              </div>
              <span className="text-xs font-semibold bg-gray-50 text-gray-500 px-3 py-1 rounded-full border border-gray-100">
                Weekly
              </span>
            </div>
            
            {/* Stats Inside Top Card */}
            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="border border-dashed border-gray-200 rounded-xl p-3 bg-gray-50/50">
                <p className="text-xl md:text-2xl font-bold text-gray-900">34</p>
                <p className="text-[10px] text-gray-400 mt-0.5">Events</p>
              </div>
              <div className="border border-dashed border-gray-200 rounded-xl p-3 bg-gray-50/50">
                <p className="text-xl md:text-2xl font-bold text-gray-900">120+</p>
                <p className="text-[10px] text-gray-400 mt-0.5">Leads</p>
              </div>
              <div className="border border-dashed border-gray-200 rounded-xl p-3 bg-gray-50/50">
                <p className="text-xl md:text-2xl font-bold text-gray-900">8.4k</p>
                <p className="text-[10px] text-gray-400 mt-0.5">Campus Reach</p>
              </div>
            </div>
          </div>

          {/* Bottom Dark Card: Leadership Track */}
          <div className="bg-[#121212] rounded-2xl p-6 text-white shadow-2xl relative overflow-hidden">
            <div className="flex justify-between items-start mb-6">
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wider font-medium mb-1">Leadership Track</p>
                <h3 className="text-2xl font-bold tracking-tight">Build Your Impact</h3>
              </div>
              <Sparkles className="w-5 h-5 text-[#43A047]" />
            </div>

            {/* Progress Bars */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {/* Skill Growth */}
              <div className="bg-[#1E1E1E] border border-neutral-800 p-4 rounded-xl">
                <div className="flex items-center gap-2 text-xs font-medium text-gray-300 mb-2">
                  <BookOpen className="w-4 h-4 text-[#43A047]" /> Skill Growth
                </div>
                <div className="w-full bg-neutral-800 h-2 rounded-full overflow-hidden">
                  <div className="bg-[#43A047] h-full w-[65%]" />
                </div>
              </div>

              {/* Recognition */}
              <div className="bg-[#1E1E1E] border border-neutral-800 p-4 rounded-xl">
                <div className="flex items-center gap-2 text-xs font-medium text-gray-300 mb-2">
                  <Trophy className="w-4 h-4 text-[#43A047]" /> Recognition
                </div>
                <div className="w-full bg-neutral-800 h-2 rounded-full overflow-hidden">
                  <div className="bg-[#43A047] h-full w-[45%]" />
                </div>
              </div>
            </div>

            {/* Verified Footer */}
            <div className="flex justify-between items-center text-xs pt-2 border-t border-neutral-800 text-gray-400">
              <span>Verified Projects</span>
              <span className="text-[#43A047] font-semibold">+27%</span>
            </div>
          </div>

        </div>
      </div>

      {/* ==========================================
          2. BOTTOM FEATURES GRID (4 COLUMNS)
          ========================================== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
        
        {/* Card 1: Get started */}
        <div className="bg-white border border-gray-100 hover:border-gray-200 p-5 rounded-2xl flex items-start gap-4 transition-all hover:shadow-[0_10px_30px_rgb(0,0,0,0.03)] group">
          <div className="p-3 bg-[#E8F5E9] text-[#43A047] rounded-xl shrink-0 group-hover:scale-105 transition-transform">
            <BookOpen className="w-6 h-6" />
          </div>
          <div>
            <h4 className="font-bold text-gray-900 text-base mb-1">Get started</h4>
            <p className="text-gray-500 text-sm leading-snug">Become a Student Ambassador</p>
          </div>
        </div>

        {/* Card 2: Community */}
        <div className="bg-white border border-gray-100 hover:border-gray-200 p-5 rounded-2xl flex items-start gap-4 transition-all hover:shadow-[0_10px_30px_rgb(0,0,0,0.03)] group">
          <div className="p-3 bg-[#E8F5E9] text-[#43A047] rounded-xl shrink-0 group-hover:scale-105 transition-transform">
            <Users className="w-6 h-6" />
          </div>
          <div>
            <h4 className="font-bold text-gray-900 text-base mb-1">Community</h4>
            <p className="text-gray-500 text-sm leading-snug">Explore Student Ambassador profiles</p>
          </div>
        </div>

        {/* Card 3: Startup Competition */}
        <div className="bg-white border border-gray-100 hover:border-gray-200 p-5 rounded-2xl flex items-start gap-4 transition-all hover:shadow-[0_10px_30px_rgb(0,0,0,0.03)] group">
          <div className="p-3 bg-[#E8F5E9] text-[#43A047] rounded-xl shrink-0 group-hover:scale-105 transition-transform">
            <Trophy className="w-6 h-6" />
          </div>
          <div>
            <h4 className="font-bold text-gray-900 text-base mb-1">Startup Competition</h4>
            <p className="text-gray-500 text-sm leading-snug">Student competition for AI startups</p>
          </div>
        </div>

        {/* Card 4: Founders Hub */}
        <div className="bg-white border border-gray-100 hover:border-gray-200 p-5 rounded-2xl flex items-start gap-4 transition-all hover:shadow-[0_10px_30px_rgb(0,0,0,0.03)] group">
          <div className="p-3 bg-[#E8F5E9] text-[#43A047] rounded-xl shrink-0 group-hover:scale-105 transition-transform">
            <CheckSquare className="w-6 h-6" />
          </div>
          <div>
            <h4 className="font-bold text-gray-900 text-base mb-1">Founders Hub</h4>
            <p className="text-gray-500 text-sm leading-snug">A platform for entrepreneurs at any stage</p>
          </div>
        </div>

      </div>

      {/* ==========================================
          3. WHY YOU SHOULD JOIN SECTION (NEW ADDITION)
          ========================================== */}
      <div className="space-y-12">
        {/* Header content */}
        <div className="space-y-3">
          <h2 className="text-3xl md:text-4xl font-extrabold text-black tracking-tight">
            Why you should join
          </h2>
          <p className="text-gray-500 text-base md:text-lg">
            Build skills, grow your network, and create real impact on campus.
          </p>
        </div>

        {/* 3-Column Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Learn and Grow */}
          <div className="bg-white border border-gray-100 rounded-2xl p-8 space-y-6 shadow-[0_4px_20px_rgb(0,0,0,0.01)] hover:shadow-[0_10px_30px_rgb(0,0,0,0.03)] transition-all">
            <div className="text-[#43A047]">
              <GraduationCap className="w-8 h-8 stroke-[2]" />
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-gray-900">Learn and Grow</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Access exclusive learning resources and certifications to build your technical skills.
              </p>
            </div>
          </div>

          {/* Card 2: Build Community */}
          <div className="bg-white border border-gray-100 rounded-2xl p-8 space-y-6 shadow-[0_4px_20px_rgb(0,0,0,0.01)] hover:shadow-[0_10px_30px_rgb(0,0,0,0.03)] transition-all">
            <div className="text-[#43A047]">
              <Users className="w-8 h-8 stroke-[2]" />
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-gray-900">Build Community</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Connect with fellow students and mentors from around the world.
              </p>
            </div>
          </div>

          {/* Card 3: Create Solutions */}
          <div className="bg-white border border-gray-100 rounded-2xl p-8 space-y-6 shadow-[0_4px_20px_rgb(0,0,0,0.01)] hover:shadow-[0_10px_30px_rgb(0,0,0,0.03)] transition-all">
            <div className="text-[#43A047]">
              <Code className="w-8 h-8 stroke-[2]" />
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-gray-900">Create Solutions</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Work on real projects using cutting-edge Internee's technologies.
              </p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}