import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { motion as m, AnimatePresence } from "framer-motion";

export default function Sidebar({
  navItems,
  activeTab,
  setActiveTab,
  isMobileMenuOpen,
  setIsMobileMenuOpen,
  user,
}) {
  return (
    <>
      <aside className="w-72 bg-[#0d1117] text-white p-6 hidden md:flex flex-col justify-between fixed h-full z-20 border-r border-slate-800/80 shadow-2xl">
        <div className="space-y-10">
          <div className="flex items-center gap-2 px-2">
            <span className="text-2xl font-bold tracking-tight">
              Internee<span className="text-[#50d523]">.pk</span>
            </span>
          </div>

          <nav className="space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-4 px-5 py-3.5 rounded-xl font-bold text-sm cursor-pointer transition-all duration-300 group ${
                  activeTab === item.id
                    ? "bg-[#50d523] text-white shadow-lg shadow-green-600/20 translate-x-1"
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

        <div className="border-t border-slate-800/80 pt-5 flex items-center justify-between">
          <div className="flex items-center gap-3 w-full overflow-hidden">
            {user?.imageUrl ? (
              <img
                src={user.imageUrl}
                alt="Profile"
                className="w-10 h-10 rounded-full object-cover border-2 border-[#50d523]"
              />
            ) : (
              <div className="w-10 h-10 rounded-full bg-[#50d523] text-white flex items-center justify-center font-bold text-lg shrink-0">
                {user?.firstName ? user.firstName.charAt(0).toUpperCase() : "U"}
              </div>
            )}
            <div className="truncate">
              <h4 className="text-sm font-bold text-white truncate">
                {user?.fullName || "Loading..."}
              </h4>
              <div className="flex items-center gap-1 mt-0.5">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                <p className="text-[10px] text-slate-400 font-medium uppercase tracking-wide">
                  Student Pro
                </p>
              </div>
            </div>
          </div>
        </div>
      </aside>

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
                <span className="text-xl font-bold tracking-tight">
                  Internee<span className="text-[#50d523]">.pk</span>
                </span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-slate-400 hover:text-white p-1 text-lg"
                >
                  <FontAwesomeIcon icon={faXmark} />
                </button>
              </div>
              <nav className="space-y-2">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveTab(item.id);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl font-bold text-sm cursor-pointer ${
                      activeTab === item.id
                        ? "bg-[#50d523] text-white shadow-md shadow-green-600/20"
                        : "text-slate-400"
                    }`}
                  >
                    <FontAwesomeIcon icon={item.icon} className="text-base" />
                    <span>{item.name}</span>
                  </button>
                ))}
              </nav>
            </div>
            <div className="border-t border-slate-800/80 pt-4 flex items-center gap-3">
              {user?.imageUrl ? (
                <img
                  src={user.imageUrl}
                  alt="Profile"
                  className="w-9 h-9 rounded-full object-cover border border-[#50d523]"
                />
              ) : (
                <div className="w-9 h-9 rounded-full bg-[#50d523] text-white flex items-center justify-center font-bold text-sm">
                  {user?.firstName?.charAt(0)}
                </div>
              )}
              <span className="text-sm font-bold text-white truncate">
                {user?.fullName || "Student Account"}
              </span>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </>
  );
}
