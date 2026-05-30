import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { motion as m } from "framer-motion";

export function InternshipsTab({ registeredInternships }) {
  return (
    <m.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.25 }}
      className="space-y-6 text-left"
    >
      <div>
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
          My Registered Internships
        </h2>
        <p className="text-xs sm:text-sm text-gray-400 font-semibold mt-1">
          Track your active tracks, upload assignments, and access completion
          badges.
        </p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {registeredInternships.map((intern) => (
          <div
            key={intern.id}
            className="bg-white border border-slate-100 rounded-2xl p-5 sm:p-6 shadow-sm space-y-5"
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div className="space-y-1">
                <span
                  className={`text-[10px] font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-full ${intern.status === "Active" ? "bg-green-50 text-[#50d523] border border-green-100" : "bg-blue-50 text-blue-600 border border-blue-100"}`}
                >
                  {intern.status}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight pt-1">
                  {intern.role}
                </h3>
                <p className="text-xs text-slate-400 font-bold">
                  {intern.company} • {intern.duration}
                </p>
              </div>
              <span className="text-xs font-bold bg-slate-50 border border-slate-100 px-3 py-1 rounded-xl text-slate-700">
                {intern.currentWeek}
              </span>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-xs font-bold text-slate-400">
                <span>Syllabus Completion</span>
                <span className="text-slate-800">{intern.progress}%</span>
              </div>
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-[#50d523] h-full rounded-full transition-all duration-500"
                  style={{ width: `${intern.progress}%` }}
                />
              </div>
            </div>

            <div className="pt-2 flex gap-3">
              {intern.status === "Active" ? (
                <>
                  <button className="flex-1 bg-[#111111] hover:bg-neutral-800 text-white font-bold py-2.5 rounded-xl text-xs transition-colors cursor-pointer text-center">
                    Submit Assignments
                  </button>
                  <button className="flex-1 border border-slate-200 text-slate-700 font-bold py-2.5 rounded-xl text-xs hover:bg-slate-50 transition-colors cursor-pointer text-center">
                    View Resources
                  </button>
                </>
              ) : (
                <button className="w-full bg-[#50d523] hover:bg-green-600 text-white font-bold py-2.5 rounded-xl text-xs transition-colors cursor-pointer text-center">
                  Download Virtual Internship Certificate
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </m.div>
  );
}

export function WebinarsTab() {
  return (
    <m.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.25 }}
      className="space-y-6 text-left"
    >
      <div>
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
          Digital Baithaks & Bootcamps
        </h2>
        <p className="text-xs sm:text-sm text-gray-400 font-semibold mt-1">
          Exclusive technical meetups and corporate mentorship recordings.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          {
            title: "Digital Baithak: High-Scale Cloud Frameworks",
            expert: "Qasim Hassan (Senior Data Engineer)",
            type: "Recorded Masterclass",
          },
          {
            title: "Building Scalable SaaS Products with React 19",
            expert: "Tech Architecture Team",
            type: "Trending Ecosystem",
          },
        ].map((webinar, idx) => (
          <div
            key={idx}
            className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm flex flex-col justify-between space-y-5"
          >
            <div className="space-y-2">
              <span className="text-[#50d523] text-[10px] font-bold uppercase tracking-wider bg-green-50/60 px-2.5 py-0.5 rounded-full border border-green-100/30 inline-block">
                {webinar.type}
              </span>
              <h3 className="text-base font-bold text-slate-900 leading-snug tracking-tight">
                {webinar.title}
              </h3>
              <p className="text-xs text-gray-400 font-semibold">
                Moderator/Speaker: {webinar.expert}
              </p>
            </div>
            <button className="w-full flex items-center justify-center gap-2 cursor-pointer bg-[#111111] hover:bg-neutral-800 text-white text-xs font-bold py-3 rounded-xl transition-all">
              <FontAwesomeIcon icon={faCirclePlay} />
              <span>Watch Recorded Session</span>
            </button>
          </div>
        ))}
      </div>
    </m.div>
  );
}
