import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { motion as m, AnimatePresence as Ap } from "framer-motion";
import { useUser } from "@clerk/clerk-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faTableColumns, 
  faBriefcase, 
  faChalkboardUser, 
  faCheckCircle, 
  faCirclePlay, 
  faRankingStar, 
  faMedal, 
  faTrophy,
  faChevronRight,
  faClock,
  faBars,
  faXmark
} from "@fortawesome/free-solid-svg-icons";

export default function UserDashboard() {
  const [activeTab, setActiveTab] = useState("overview");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Clerk integration variables hook
  const { isLoaded, isSignedIn, user } = useUser();

  // Sidebar navigation options
  const navItems = [
    { id: "overview", name: "Overview", icon: faTableColumns },
    { id: "internships", name: "My Internships", icon: faBriefcase },
    { id: "webinars", name: "Webinars & Events", icon: faChalkboardUser },
  ];

  // Dashboard Stats Widgets
  const stats = [
    { label: "Global Rank", value: "#842", icon: faRankingStar, color: "text-orange-500" },
    { label: "Internship Points", value: "450 XP", icon: faTrophy, color: "text-indigo-500" },
    { label: "Certifications", value: "02", icon: faMedal, color: "text-[#40b71c]" },
  ];

  // Structured Task List Data
  const tasks = [
    { id: 1, title: "Complete HTML/CSS Landing Page", status: "Pending", date: "Today, 11:59 PM", badgeStyle: "bg-red-50 text-red-500 border border-red-100" },
    { id: 2, title: "Submit Weekly Progress Report", status: "In Review", date: "Tomorrow", badgeStyle: "bg-yellow-50 text-yellow-600 border border-yellow-100" },
    { id: 3, title: "Attend Live Q&A Session", status: "Completed", date: "Yesterday", badgeStyle: "bg-green-50 text-green-600 border border-green-100" },
  ];

  // Static Mock Data for My Internships Screen
  const registeredInternships = [
    {
      id: 1,
      role: "Full-Stack Web Development",
      company: "Internee.pk",
      duration: "6 Weeks",
      status: "Active",
      progress: 50,
      currentWeek: "Week 3",
    },
    {
      id: 2,
      role: "React.js Developer Internship",
      company: "Internee.pk",
      duration: "4 Weeks",
      status: "Completed",
      progress: 100,
      currentWeek: "Finished",
    }
  ];

  return (
    <div className="w-full min-h-screen bg-slate-50/80 font-sans antialiased flex text-left selection:bg-[#40b71c]/20 overflow-x-hidden">
      
      {/* ================= SIDEBAR NAVIGATION (DESKTOP) ================= */}
      <aside className="w-72 bg-[#0d1117] text-white p-6 hidden md:flex flex-col justify-between fixed h-full z-20 border-r border-slate-800/80 shadow-2xl">
        <div className="space-y-10">
          {/* Logo / Brand */}
          <div className="flex items-center gap-2 px-2">
            <span className="text-2xl font-black tracking-tight">Internee<span className="text-[#40b71c]">.pk</span></span>
          </div>

          {/* Nav Links */}
          <nav className="space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-4 px-5 py-3.5 rounded-xl font-bold text-sm cursor-pointer transition-all duration-300 group ${
                  activeTab === item.id 
                    ? "bg-[#40b71c] text-white shadow-lg shadow-green-600/20 translate-x-1" 
                    : "text-slate-400 hover:bg-white/5 hover:text-white hover:translate-x-1"
                }`}
              >
                <FontAwesomeIcon 
                  icon={item.icon} 
                  className={`text-lg transition-colors ${activeTab === item.id ? "text-white" : "text-slate-500 group-hover:text-white"}`} 
                />
                <span>{item.name}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* User Profile Info Footer */}
        <div className="border-t border-slate-800/80 pt-5 flex items-center justify-between">
          <div className="flex items-center gap-3 w-full overflow-hidden">
            {isLoaded && isSignedIn && user?.imageUrl ? (
              <img src={user.imageUrl} alt="Profile" className="w-10 h-10 rounded-full object-cover border-2 border-[#40b71c]" />
            ) : (
              <div className="w-10 h-10 rounded-full bg-[#40b71c] text-white flex items-center justify-center font-black text-lg shrink-0">
                {user?.firstName ? user.firstName.charAt(0).toUpperCase() : "U"}
              </div>
            )}
            <div className="truncate">
              <h4 className="text-sm font-bold text-white truncate">
                {isLoaded && isSignedIn && user?.fullName ? user.fullName : "Loading..."}
              </h4>
              <div className="flex items-center gap-1 mt-0.5">
                 <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                 <p className="text-[10px] text-slate-400 font-medium uppercase tracking-wide">Student Pro</p>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* ================= MOBILE NAV MENU OVERLAY ================= */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <m.div 
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -200 }}
            transition={{ type: "spring", bounce: 0, duration: 0.3 }}
            className="fixed inset-0 bg-[#0d1117] text-white z-50 p-6 flex flex-col justify-between md:hidden w-72 border-r border-slate-800"
          >
            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <span className="text-xl font-black tracking-tight">Internee<span className="text-[#40b71c]">.pk</span></span>
                <button onClick={() => setIsMobileMenuOpen(false)} className="text-slate-400 hover:text-white p-1 text-lg">
                  <FontAwesomeIcon icon={faXmark} />
                </button>
              </div>
              <nav className="space-y-2">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => { setActiveTab(item.id); setIsMobileMenuOpen(false); }}
                    className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl font-bold text-sm cursor-pointer ${
                      activeTab === item.id ? "bg-[#40b71c] text-white shadow-md shadow-green-600/20" : "text-slate-400"
                    }`}
                  >
                    <FontAwesomeIcon icon={item.icon} className="text-base" />
                    <span>{item.name}</span>
                  </button>
                ))}
              </nav>
            </div>
            <div className="border-t border-slate-800/80 pt-4 flex items-center gap-3">
              {isLoaded && isSignedIn && user?.imageUrl ? (
                <img src={user.imageUrl} alt="Profile" className="w-9 h-9 rounded-full object-cover border border-[#40b71c]" />
              ) : (
                <div className="w-9 h-9 rounded-full bg-[#40b71c] text-white flex items-center justify-center font-bold text-sm">{user?.firstName?.charAt(0)}</div>
              )}
              <span className="text-sm font-bold text-white truncate">{user?.fullName || "Student Account"}</span>
            </div>
          </m.div>
        )}
      </AnimatePresence>

      {/* ================= MAIN CONTENT MODULE WINDOW ================= */}
      <main className="flex-1 md:ml-72 min-h-screen p-4 sm:p-6 lg:p-8 overflow-y-auto w-full">
        
        {/* Top Mobile Utilities Row */}
        <div className="flex items-center justify-between mb-6 md:hidden bg-white p-4 rounded-2xl border border-slate-100 shadow-xs">
           <span className="text-xl font-black text-slate-900">Internee<span className="text-[#40b71c]">.pk</span></span>
           <div className="flex items-center gap-3">
              {isLoaded && isSignedIn && user?.imageUrl && (
                 <img src={user.imageUrl} alt="User" className="w-8 h-8 rounded-full border border-slate-200" />
              )}
              <button onClick={() => setIsMobileMenuOpen(true)} className="p-2 text-slate-700 text-lg hover:bg-slate-50 rounded-xl">
                <FontAwesomeIcon icon={faBars} />
              </button>
           </div>
        </div>

        {/* Tab Context Real-time Switching */}
        <AnimatePresence mode="wait">
          
          {/* ================= TAB 1: OVERVIEW DASHBOARD ================= */}
          {activeTab === "overview" && (
            <m.div 
              key="overview"
              initial={{ opacity: 0, y: 15 }} 
              animate={{ opacity: 1, y: 0 }} 
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="space-y-6 sm:space-y-8"
            >
              {/* Welcome Modern Jumbotron Banner */}
              <div className="bg-gradient-to-r from-slate-900 via-slate-850 to-slate-800 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
                <div className="relative z-10 text-left max-w-xl space-y-2">
                   <h1 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight leading-tight">
                      Welcome Back, {isLoaded && isSignedIn ? user?.firstName : "Champ"}! 👋
                    </h1>
                    <p className="text-slate-400 font-medium text-xs sm:text-sm leading-relaxed">
                      You have completed <span className="text-[#40b71c] font-bold">85%</span> of your weekly goals. Keep the momentum going!
                    </p>
                    <div className="pt-2">
                      <button className="bg-[#40b71c] hover:bg-green-600 text-white font-bold py-3 px-5 text-xs sm:text-sm rounded-xl transition-all duration-200 shadow-lg shadow-green-900/30 cursor-pointer">
                        Continue Learning
                      </button>
                    </div>
                </div>
                <div className="absolute -right-10 -bottom-20 w-64 h-64 bg-[#40b71c] rounded-full blur-[80px] opacity-15 pointer-events-none"></div>
              </div>

              {/* Stat Boxes row summary */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {stats.map((stat, index) => (
                  <m.div 
                    key={stat.label}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm text-left flex flex-col justify-between min-h-[110px]"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase text-slate-400 tracking-wider">{stat.label}</span>
                      <FontAwesomeIcon icon={stat.icon} className={`text-lg ${stat.color}`} />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-black text-slate-800 mt-2">{stat.value}</h3>
                  </m.div>
                ))}
              </div>

              {/* Split layout view block */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                
                {/* Active Course Status Tracks Progress Tracker */}
                <div className="lg:col-span-2 space-y-4 text-left">
                  <h2 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">Active Track Progress</h2>
                  <div className="bg-white border border-slate-100 rounded-2xl p-5 sm:p-6 shadow-sm space-y-6">
                    <div className="flex items-center gap-4 pb-4 border-b border-slate-100/70">
                       <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center text-xl shrink-0">
                         <FontAwesomeIcon icon={faBriefcase} />
                       </div>
                       <div className="flex-1 min-w-0">
                         <h3 className="text-base sm:text-lg font-black text-slate-900 truncate">Full-Stack Web Development</h3>
                         <p className="text-xs text-slate-400 font-semibold flex items-center gap-1 mt-0.5">
                           <FontAwesomeIcon icon={faClock} className="text-[10px]" /> 6 Weeks Internship Program
                         </p>
                       </div>
                       <div className="bg-green-50 text-[#40b71c] text-xs font-bold px-3 py-1 rounded-full border border-green-100/50 shrink-0">Week 3</div>
                    </div>

                    {/* Detailed Milestones Steps */}
                    <div className="space-y-4">
                       {[
                         { label: "Environment Setup", status: "completed" },
                         { label: "HTML5 & CSS3 Mastery", status: "completed" },
                         { label: "JavaScript Logic & Structures", status: "completed" },
                         { label: "React.js Fundamentals & State", status: "in-progress" },
                         { label: "Backend Integration & Prisma", status: "locked" },
                       ].map((step, i) => (
                         <div key={i} className="flex items-center justify-between text-xs sm:text-sm">
                           <div className="flex items-center gap-3">
                             {step.status === "completed" ? (
                               <div className="w-5 h-5 rounded-full bg-[#40b71c] flex items-center justify-center text-white text-[10px] shrink-0"><FontAwesomeIcon icon={faCheckCircle} /></div>
                             ) : step.status === "in-progress" ? (
                               <div className="w-5 h-5 rounded-full border-2 border-[#40b71c] bg-green-50 shrink-0 flex items-center justify-center"><div className="w-1.5 h-1.5 rounded-full bg-[#40b71c]" /></div>
                             ) : (
                               <div className="w-5 h-5 rounded-full border-2 border-slate-200 bg-white shrink-0"></div>
                             )}
                             <span className={`font-semibold tracking-wide ${step.status === 'completed' ? 'text-slate-900' : step.status === 'in-progress' ? 'text-[#40b71c]' : 'text-slate-300'}`}>
                               {step.label}
                             </span>
                           </div>
                           {step.status === 'locked' && <span className="text-[10px] text-slate-300 font-black uppercase tracking-wider">Locked</span>}
                         </div>
                       ))}
                    </div>
                    
                    <button onClick={() => setActiveTab("internships")} className="w-full border border-slate-200 text-slate-600 font-bold py-3 rounded-xl text-xs sm:text-sm hover:bg-slate-50 transition-colors cursor-pointer">
                      View Full Curriculum
                    </button>
                  </div>
                </div>

                {/* Sidebar Quick Action Task Cards Box */}
                <div className="space-y-4 text-left">
                   <h2 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">Pending Tasks</h2>
                   <div className="bg-white border border-slate-100 rounded-2xl p-4 sm:p-5 shadow-sm space-y-3">
                      {tasks.map(task => (
                        <div key={task.id} className="group cursor-pointer p-3 rounded-xl hover:bg-slate-50 transition-all border border-transparent hover:border-slate-100">
                          <div className="flex items-start justify-between gap-3">
                            <h4 className={`text-xs sm:text-sm font-bold leading-tight ${task.status === 'Completed' ? 'text-slate-400 line-through' : 'text-slate-800'}`}>
                              {task.title}
                            </h4>
                            <FontAwesomeIcon icon={faChevronRight} className="text-slate-300 text-xs mt-0.5 group-hover:text-[#40b71c] group-hover:translate-x-0.5 transition-all" />
                          </div>
                          <div className="flex items-center justify-between mt-3">
                            <span className={`text-[10px] font-black tracking-wide px-2.5 py-0.5 rounded-full ${task.badgeStyle}`}>
                              {task.status}
                            </span>
                            <span className="text-[10px] font-bold text-slate-400">{task.date}</span>
                          </div>
                        </div>
                      ))}
                   </div>
                </div>

              </div>
            </m.div>
          )}

          {/* ================= TAB 2: MY INTERNSHIPS PORTAL ================= */}
          {activeTab === "internships" && (
            <m.div 
              key="internships"
              initial={{ opacity: 0, y: 15 }} 
              animate={{ opacity: 1, y: 0 }} 
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="space-y-6 text-left"
            >
              <div>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">My Registered Internships</h2>
                <p className="text-xs sm:text-sm text-gray-400 font-semibold mt-1">Track your active tracks, upload assignments, and access completion badges.</p>
              </div>

              <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                {registeredInternships.map((intern) => (
                  <div key={intern.id} className="bg-white border border-slate-100 rounded-2xl p-5 sm:p-6 shadow-sm space-y-5">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div className="space-y-1">
                        <span className={`text-[10px] font-black tracking-wider uppercase px-2.5 py-0.5 rounded-full ${
                          intern.status === "Active" ? "bg-green-50 text-[#40b71c] border border-green-100" : "bg-blue-50 text-blue-600 border border-blue-100"
                        }`}>
                          {intern.status}
                        </span>
                        <h3 className="text-base sm:text-lg font-black text-slate-900 tracking-tight pt-1">{intern.role}</h3>
                        <p className="text-xs text-slate-400 font-bold">{intern.company} • {intern.duration}</p>
                      </div>
                      <span className="text-xs font-black bg-slate-50 border border-slate-100 px-3 py-1 rounded-xl text-slate-700">{intern.currentWeek}</span>
                    </div>

                    {/* Timeline Meter */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs font-bold text-slate-400">
                        <span>Syllabus Completion</span>
                        <span className="text-slate-800">{intern.progress}%</span>
                      </div>
                      <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                        <div className="bg-[#40b71c] h-full rounded-full transition-all duration-500" style={{ width: `${intern.progress}%` }} />
                      </div>
                    </div>

                    {/* Operational Action Row */}
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
                        <button className="w-full bg-[#40b71c] hover:bg-green-600 text-white font-bold py-2.5 rounded-xl text-xs transition-colors cursor-pointer text-center">
                          Download Virtual Internship Certificate
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </m.div>
          )}

          {/* ================= TAB 3: WEBINARS & MASTERCLASSES ================= */}
          {activeTab === "webinars" && (
            <m.div 
              key="webinars"
              initial={{ opacity: 0, y: 15 }} 
              animate={{ opacity: 1, y: 0 }} 
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="space-y-6 text-left"
            >
              <div>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">Digital Baithaks & Bootcamps</h2>
                <p className="text-xs sm:text-sm text-gray-400 font-semibold mt-1">Exclusive technical meetups and corporate mentorship recordings.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: "Digital Baithak: High-Scale Cloud Frameworks", expert: "Qasim Hassan (Senior Data Engineer)", type: "Recorded Masterclass" },
                  { title: "Building Scalable SaaS Products with React 19", expert: "Tech Architecture Team", type: "Trending Ecosystem" }
                ].map((webinar, idx) => (
                  <div key={idx} className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm flex flex-col justify-between space-y-5">
                    <div className="space-y-2">
                      <span className="text-[#40b71c] text-[10px] font-black uppercase tracking-wider bg-green-50/60 px-2.5 py-0.5 rounded-full border border-green-100/30 inline-block">
                        {webinar.type}
                      </span>
                      <h3 className="text-base font-black text-slate-900 leading-snug tracking-tight">{webinar.title}</h3>
                      <p className="text-xs text-gray-400 font-semibold">Moderator/Speaker: {webinar.expert}</p>
                    </div>
                    <button className="w-full flex items-center justify-center gap-2 cursor-pointer bg-[#111111] hover:bg-neutral-800 text-white text-xs font-bold py-3 rounded-xl transition-all">
                      <FontAwesomeIcon icon={faCirclePlay} />
                      <span>Watch Recorded Session</span>
                    </button>
                  </div>
                ))}
              </div>
            </m.div>
          )}

        </AnimatePresence>
      </main>
    </div>
  );
}