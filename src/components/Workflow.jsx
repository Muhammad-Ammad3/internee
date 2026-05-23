import React from "react";

const Workflow = () => {
  return (
    <section className="w-full bg-[#f5f5f5] py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left Content */}
        <div>
          <button className="px-5 py-2 rounded-full bg-white text-sm text-gray-700 shadow-sm border border-gray-200">
            How It Works
          </button>

          <h1 className="mt-8 text-5xl md:text-6xl font-bold leading-tight text-black">
            Start Fast.
            <br />
            Learn Smart.
            <br />
            Get Job-Ready.
          </h1>

          <p className="mt-6 text-gray-600 text-lg leading-8 max-w-md">
            Follow three clear steps to start, learn, and earn your certificate.
            Everything is structured so you can move fast and stay focused.
          </p>

          <button className="mt-10 bg-[#48b41f] hover:bg-[#3da118] transition-all duration-300 text-white font-medium px-8 py-4 rounded-full text-lg shadow-md">
            Get Started Now
          </button>
        </div>

        {/* Right Cards */}
        <div className="flex flex-col gap-8">
          {/* Card 1 */}
          <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#e8f7e1] flex items-center justify-center text-[#48b41f] font-semibold">
                01
              </div>

              <span className="text-gray-500 text-sm">Step 01</span>
            </div>

            <h2 className="mt-6 text-3xl font-semibold text-black">
              Sign Up & Choose a Domain
            </h2>

            <p className="mt-4 text-gray-600 text-lg leading-7">
              Explore a wide range of internships across various industries,
              tailored to your skills.
            </p>

            <div className="flex flex-wrap gap-3 mt-6">
              <span className="px-4 py-2 rounded-full bg-gray-100 text-gray-600 text-sm">
                Fast setup
              </span>

              <span className="px-4 py-2 rounded-full bg-gray-100 text-gray-600 text-sm">
                Guided steps
              </span>

              <span className="px-4 py-2 rounded-full bg-gray-100 text-gray-600 text-sm">
                Verified outcome
              </span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#e8f7e1] flex items-center justify-center text-[#48b41f] font-semibold">
                02
              </div>

              <span className="text-gray-500 text-sm">Step 02</span>
            </div>

            <h2 className="mt-6 text-3xl font-semibold text-black">
              Complete Your Application
            </h2>

            <p className="mt-4 text-gray-600 text-lg leading-7">
              Submit a short form and secure your internship opportunity in
              minutes.
            </p>

            <div className="flex flex-wrap gap-3 mt-6">
              <span className="px-4 py-2 rounded-full bg-gray-100 text-gray-600 text-sm">
                Fast setup
              </span>

              <span className="px-4 py-2 rounded-full bg-gray-100 text-gray-600 text-sm">
                Guided steps
              </span>

              <span className="px-4 py-2 rounded-full bg-gray-100 text-gray-600 text-sm">
                Verified outcome
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workflow;
