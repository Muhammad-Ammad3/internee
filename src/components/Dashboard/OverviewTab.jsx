import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faClock,
  faCheckCircle,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { motion as m } from "framer-motion";

export default function OverviewTab({ stats, tasks, user, setActiveTab }) {
  return (
    <m.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.25 }}
      className="space-y-6 sm:space-y-8"
    >
      <div className="bg-linear-to-r from-slate-900 via-slate-850 to-slate-800 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
        <div className="relative z-10 text-left max-w-xl space-y-2">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight leading-tight">
            Welcome Back, {user?.firstName || "Champ"}! 👋
          </h1>
          <p className="text-slate-400 font-medium text-xs sm:text-sm leading-relaxed">
            You have completed{" "}
            <span className="text-[#50d523] font-bold">85%</span> of your weekly
            goals. Keep the momentum going!
          </p>
          <div className="pt-2">
            <button className="bg-[#50d523] hover:bg-green-600 text-white font-bold py-3 px-5 text-xs sm:text-sm rounded-xl transition-all duration-200 shadow-lg shadow-green-900/30 cursor-pointer">
              Continue Learning
            </button>
          </div>
        </div>
        <div className="absolute -right-10 -bottom-20 w-64 h-64 bg-[#50d523] rounded-full blur-[80px] opacity-15 pointer-events-none"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {stats.map((stat, index) => (
          <m.div
            key={stat.label}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm text-left flex flex-col justify-between min-h-27.5"
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase text-slate-400 tracking-wider">
                {stat.label}
              </span>
              <FontAwesomeIcon
                icon={stat.icon}
                className={`text-lg ${stat.color}`}
              />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-800 mt-2">
              {stat.value}
            </h3>
          </m.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4 text-left">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
            Active Track Progress
          </h2>
          <div className="bg-white border border-slate-100 rounded-2xl p-5 sm:p-6 shadow-sm space-y-6">
            <div className="flex items-center gap-4 pb-4 border-b border-slate-100/70">
              <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center text-xl shrink-0">
                <FontAwesomeIcon icon={faBriefcase} />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 truncate">
                  Full-Stack Web Development
                </h3>
                <p className="text-xs text-slate-400 font-semibold flex items-center gap-1 mt-0.5">
                  <FontAwesomeIcon icon={faClock} className="text-[10px]" /> 6
                  Weeks Internship Program
                </p>
              </div>
              <div className="bg-green-50 text-[#50d523] text-xs font-bold px-3 py-1 rounded-full border border-green-100/50 shrink-0">
                Week 3
              </div>
            </div>

            <div className="space-y-4">
              {[
                { label: "Environment Setup", status: "completed" },
                { label: "HTML5 & CSS3 Mastery", status: "completed" },
                { label: "JavaScript Logic & Structures", status: "completed" },
                {
                  label: "React.js Fundamentals & State",
                  status: "in-progress",
                },
                { label: "Backend Integration & Prisma", status: "locked" },
              ].map((step, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between text-xs sm:text-sm"
                >
                  <div className="flex items-center gap-3">
                    {step.status === "completed" ? (
                      <div className="w-5 h-5 rounded-full bg-[#50d523] flex items-center justify-center text-white text-[10px] shrink-0">
                        <FontAwesomeIcon icon={faCheckCircle} />
                      </div>
                    ) : step.status === "in-progress" ? (
                      <div className="w-5 h-5 rounded-full border-2 border-[#50d523] bg-green-50 shrink-0 flex items-center justify-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#50d523]" />
                      </div>
                    ) : (
                      <div className="w-5 h-5 rounded-full border-2 border-slate-200 bg-white shrink-0"></div>
                    )}
                    <span
                      className={`font-semibold tracking-wide ${step.status === "completed" ? "text-slate-900" : step.status === "in-progress" ? "text-[#50d523]" : "text-slate-300"}`}
                    >
                      {step.label}
                    </span>
                  </div>
                  {step.status === "locked" && (
                    <span className="text-[10px] text-slate-300 font-bold uppercase tracking-wider">
                      Locked
                    </span>
                  )}
                </div>
              ))}
            </div>
            <button
              onClick={() => setActiveTab("internships")}
              className="w-full border border-slate-200 text-slate-600 font-bold py-3 rounded-xl text-xs sm:text-sm hover:bg-slate-50 transition-colors cursor-pointer"
            >
              View Full Curriculum
            </button>
          </div>
        </div>

        <div className="space-y-4 text-left">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
            Pending Tasks
          </h2>
          <div className="bg-white border border-slate-100 rounded-2xl p-4 sm:p-5 shadow-sm space-y-3">
            {tasks.map((task) => (
              <div
                key={task.id}
                className="group cursor-pointer p-3 rounded-xl hover:bg-slate-50 transition-all border border-transparent hover:border-slate-100"
              >
                <div className="flex items-start justify-between gap-3">
                  <h4
                    className={`text-xs sm:text-sm font-bold leading-tight ${task.status === "Completed" ? "text-slate-400 line-through" : "text-slate-800"}`}
                  >
                    {task.title}
                  </h4>
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="text-slate-300 text-xs mt-0.5 group-hover:text-[#50d523] group-hover:translate-x-0.5 transition-all"
                  />
                </div>
                <div className="flex items-center justify-between mt-3">
                  <span
                    className={`text-[10px] font-bold tracking-wide px-2.5 py-0.5 rounded-full ${task.badgeStyle}`}
                  >
                    {task.status}
                  </span>
                  <span className="text-[10px] font-bold text-slate-400">
                    {" "}
                    {task.date}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </m.div>
  );
}
