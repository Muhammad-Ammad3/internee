import React, { useState } from 'react';

const GraduateFaqAndCta = () => {
  // State hook to trace the current expanded index key inside accordion system
  const [expandedIndex, setExpandedIndex] = useState(0); // 0 means first index is open by default like image

  // FAQ Array Dataset mapped directly from image_5673e2.png
  const faqs = [
    {
      question: "Who can join the graduate programs?",
      answer: "Recent graduates and professionals looking to upskill. No prior experience needed - we provide complete training from basics to advanced."
    },
    {
      question: "What is the program duration?",
      answer: "The program spans exactly 12 weeks of intensive, structured layout learning including industry projects and live mentoring support."
    },
    {
      question: "Do I get a job after completing the program?",
      answer: "We provide direct job placement support and referrals to top-performing graduates across our network of hiring tech partners."
    },
    {
      question: "Is the certificate recognized by employers?",
      answer: "Yes, our industry-recognized credentials are highly valued and designed to significantly boost your professional CV and portfolio status."
    },
    {
      question: "What if I need technical support?",
      answer: "You will have 24/7 dedicated access to Discord developer communities and direct sync sessions with assigned engineering mentors."
    },
    {
      question: "Can I switch programs after starting?",
      answer: "Program migration is allowed within the first week of commencement after evaluation from our career counseling department."
    }
  ];

  const toggleFaq = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white py-16 px-6 lg:px-16 font-sans select-none">
      <div className="max-w-4xl mx-auto space-y-16">
        
        {/* ========================================================================= */}
        {/* ACCORDION SEGMENT: FREQUENTLY ASKED QUESTIONS                             */}
        {/* ========================================================================= */}
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-3xl sm:text-[36px] font-black text-gray-950 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-500 text-xs sm:text-sm font-semibold">
              Find answers to common questions about our graduate programs
            </p>
          </div>

          {/* Interactive Stack Row List */}
          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = expandedIndex === idx;
              return (
                <div 
                  key={idx}
                  className="bg-white border border-gray-100 rounded-[18px] overflow-hidden transition-all duration-300"
                >
                  {/* Interactive Header Toggle Button */}
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-center justify-between p-5 text-left transition-colors hover:bg-neutral-50/40 focus:outline-none"
                  >
                    <span className={`text-xs sm:text-[13px] font-black tracking-tight transition-colors ${isOpen ? 'text-[#3FB628]' : 'text-gray-950'}`}>
                      {faq.question}
                    </span>
                    <span className={`text-xs transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#3FB628]' : 'text-gray-400'}`}>
                      ▼
                    </span>
                  </button>

                  {/* Collapsible content slider box container wrapper */}
                  <div 
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-40 border-t border-gray-50 bg-[#fbfcfb]/40' : 'max-h-0'}`}
                  >
                    <p className="p-5 text-gray-500 text-[11px] sm:text-xs font-semibold leading-relaxed text-justify">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* BOTTOM SEGMENT: HERO CALL TO ACTION BRAND OVERLAY BANNER                   */}
        {/* ========================================================================= */}
        <div className="w-full bg-[#111215] text-white rounded-[28px] p-8 sm:p-12 relative overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-8 shadow-xl">
          
          {/* Right Background Grid Geometric Circles Art Vector Emulation */}
          <div className="absolute right-0 bottom-0 top-0 w-1/2 opacity-10 pointer-events-none hidden md:block select-none">
            <div className="absolute bottom-[-20px] right-[-20px] w-64 h-64 border-[32px] border-white rounded-full"></div>
            <div className="absolute top-[-40px] right-[120px] w-32 h-32 bg-white rounded-lg rotate-45"></div>
            <div className="absolute top-[30%] right-[40px] w-16 h-16 bg-white rounded-full"></div>
          </div>

          {/* Left Metadata Descriptions Column Block */}
          <div className="space-y-5 max-w-xl relative z-10">
            {/* Green Upper Mini Pill */}
            <div className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full">
              <div className="w-1.5 h-1.5 bg-[#3FB628] rounded-full animate-pulse"></div>
              <span className="text-white text-[9px] font-black uppercase tracking-wider">
                Ready? Start Your Graduate Program Today
              </span>
            </div>

            <div className="space-y-2">
              <h3 className="text-3xl sm:text-[38px] font-black tracking-tight text-white leading-tight">
                Transform Your Career<br />In 12 Weeks
              </h3>
              <p className="text-neutral-400 text-[11px] sm:text-xs font-semibold leading-relaxed">
                Join 500+ graduates who have successfully launched careers with our programs. Get job-ready skills, mentorship, and direct placement support.
              </p>
            </div>
          </div>

          {/* Right Align Interactive Core Link Click Triggers */}
          <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto relative z-10">
            <button className="bg-[#3FB628] hover:bg-[#349e1e] text-white text-xs font-black px-6 py-3.5 rounded-full transition-all active:scale-95 shadow-md shadow-green-900/20 whitespace-nowrap">
              Enroll Now ⚡
            </button>
            <button className="bg-transparent hover:bg-white/5 text-white border border-neutral-700 text-xs font-black px-6 py-3.5 rounded-full transition active:scale-95 whitespace-nowrap">
              Explore Programs
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};

export default GraduateFaqAndCta;