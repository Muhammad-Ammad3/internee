import React from 'react';

const Hero = () => {
  return (
    <section className="w-full bg-white pt-12 pb-24 px-6 lg:px-16 overflow-hidden font-sans">
      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* ================= LEFT CONTENT COLUMN ================= */}
        <div className="lg:col-span-6 space-y-6">
          <h1 className="text-[44px] sm:text-[56px] font-bold text-gray-950 leading-[1.15] tracking-tight">
            Build Skills. <br />
            Get Experience. <br />
            <span className="text-[#3FB628]">Land Your Job.</span>
          </h1>
          
          <p className="text-gray-500 text-base sm:text-[17px] max-w-xl leading-relaxed font-normal">
            Stop waiting for opportunities. Start building real skills with Pakistan's largest virtual internship platform. Your dream tech career begins here.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button className="bg-[#3FB628] text-white px-7 py-3.5 rounded-full text-[15px] font-bold flex items-center gap-2 hover:bg-[#349e1e] transition shadow-sm shadow-green-100">
              Our Job Portal
              <svg className="w-4 h-4 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
            <button className="border border-gray-200 text-gray-800 px-7 py-3.5 rounded-full text-[15px] font-semibold hover:bg-gray-50 transition">
              Sign In
            </button>
          </div>

          {/* Bottom Trust Badges */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-6 text-[14px] font-medium text-gray-6xl">
            <div className="flex items-center gap-2 text-gray-600">
              <span className="text-[#3FB628] text-base border border-green-200 bg-green-50 w-5 h-5 rounded-full flex items-center justify-center font-bold text-[10px]">✓</span> 
              No Experience Required
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <span className="text-[#3FB628] text-base border border-green-200 bg-green-50 w-5 h-5 rounded-full flex items-center justify-center font-bold text-[10px]">✓</span> 
              Industry-Ready Projects
            </div>
          </div>
        </div>

        {/* ================= RIGHT GRAPHICAL COLUMN ================= */}
        <div className="lg:col-span-6 relative flex justify-center items-center mt-12 lg:mt-0">
          
          {/* Main Rounded Green Backdrop Grid Block */}
          <div className="relative w-[340px] h-[340px] sm:w-[420px] sm:h-[420px] bg-[#3FB628] rounded-[40px] flex items-end justify-center overflow-visible">
            
            {/* Girl/Instructor Image */}
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop" 
              alt="Internee Professional" 
              className="absolute bottom-0 w-[95%] h-[115%] object-cover object-top drop-shadow-2xl pointer-events-none"
            />
          </div>

          {/* --- Floating Card 1: 200k+ Students (Middle Left) --- */}
          <div className="absolute left-[-20px] sm:left-4 top-[22%] bg-white p-3.5 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-50 z-20 flex flex-col items-center gap-2 max-w-[155px]">
            <div className="flex -space-x-1.5 overflow-hidden">
              <img className="inline-block h-7 w-7 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=80" alt="Student"/>
              <img className="inline-block h-7 w-7 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=80" alt="Student"/>
              <img className="inline-block h-7 w-7 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=80" alt="Student"/>
              <img className="inline-block h-7 w-7 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=80" alt="Student"/>
            </div>
            <p className="text-[11px] font-bold text-center text-gray-800 leading-tight">
              Join our community of <br /> <span className="text-gray-500 font-medium">200K+ Students</span>
            </p>
          </div>

          {/* --- Floating Card 2: Internship Rate (Top Right Gauge) --- */}
          <div className="absolute right-[-20px] sm:right-6 top-[5%] bg-white p-4 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-50 z-20 flex flex-col items-center w-[165px]">
            {/* Custom SVG Half-Circle Gauge for 92.6% view */}
            <div className="relative w-24 h-12 flex items-end justify-center">
              <svg className="w-full h-full" viewBox="0 0 100 50">
                <path d="M 10 50 A 40 40 0 0 1 90 50" fill="none" stroke="#f3f4f6" strokeWidth="10" strokeLinecap="round" />
                <path d="M 10 50 A 40 40 0 0 1 85 22" fill="none" stroke="#3FB628" strokeWidth="10" strokeLinecap="round" />
              </svg>
              <span className="absolute bottom-0 text-[14px] font-bold text-gray-800">92.6 %</span>
            </div>
            <p className="text-[11px] text-center text-gray-700 font-bold mt-2 leading-tight">
              Internship Rate <br />
              <span className="text-[10px] text-gray-400 font-medium">Students find internships</span>
            </p>
          </div>

          {/* --- Floating Card 3: Courses Finished (Bottom Left) --- */}
          <div className="absolute left-[-10px] sm:left-4 bottom-[10%] bg-white py-3.5 px-4 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-50 z-20 flex items-center gap-3 min-w-[190px]">
            <div className="p-2.5 bg-green-50 text-[#3FB628] rounded-xl font-bold text-lg border border-green-100">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <div>
              <p className="text-[11px] text-gray-400 font-semibold leading-none">Students finished courses</p>
              <p className="text-xl font-extrabold text-gray-800 mt-1">12,000+</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;