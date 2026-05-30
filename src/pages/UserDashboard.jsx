import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { useUser } from "@clerk/clerk-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTableColumns,
  faBriefcase,
  faChalkboardUser,
  faRankingStar,
  faMedal,
  faTrophy,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

import Sidebar from "../../src/components/Dashboard/Sidebar";
import OverviewTab from "../../src/components/Dashboard/OverviewTab";
import {
  InternshipsTab,
  WebinarsTab,
} from "../../src/components/Dashboard/OtherTabs";

export default function UserDashboard() {
  const [activeTab, setActiveTab] = useState("overview");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isLoaded, isSignedIn, user } = useUser();

  const navItems = [
    { id: "overview", name: "Overview", icon: faTableColumns },
    { id: "internships", name: "My Internships", icon: faBriefcase },
    { id: "webinars", name: "Webinars & Events", icon: faChalkboardUser },
  ];

  const stats = [
    {
      label: "Global Rank",
      value: "#842",
      icon: faRankingStar,
      color: "text-orange-500",
    },
    {
      label: "Internship Points",
      value: "450 XP",
      icon: faTrophy,
      color: "text-indigo-500",
    },
    {
      label: "Certifications",
      value: "02",
      icon: faMedal,
      color: "text-[#50d523]",
    },
  ];

  const tasks = [
    {
      id: 1,
      title: "Complete HTML/CSS Landing Page",
      status: "Pending",
      date: "Today, 11:59 PM",
      badgeStyle: "bg-red-50 text-red-500 border border-red-100",
    },
    {
      id: 2,
      title: "Submit Weekly Progress Report",
      status: "In Review",
      date: "Tomorrow",
      badgeStyle: "bg-yellow-50 text-yellow-600 border border-yellow-100",
    },
    {
      id: 3,
      title: "Attend Live Q&A Session",
      status: "Completed",
      date: "Yesterday",
      badgeStyle: "bg-green-50 text-green-600 border border-green-100",
    },
  ];

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
    },
  ];

  if (!isLoaded) {
    return (
      <div className="w-full min-h-screen bg-slate-50 flex flex-col items-center justify-center font-sans">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#50d523] mb-4"></div>
        <p className="text-slate-500 font-medium text-sm">
          Loading Dashboard...
        </p>
      </div>
    );
  }

  if (!isSignedIn) {
    return (
      <div className="w-full min-h-screen bg-slate-50 flex flex-col items-center justify-center text-center p-6 font-sans antialiased">
        <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 max-w-md w-full space-y-6">
          <div className="w-16 h-16 bg-red-50 text-red-500 rounded-2xl flex items-center justify-center text-2xl mx-auto">
            <FontAwesomeIcon icon={faXmark} className="text-3xl" />
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
              Access Denied
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed">
              Oops! Is dashboard ko dekhne ke liye login hona zaroori hai.
            </p>
          </div>
          <a
            href="/"
            className="block w-full bg-[#50d523] hover:bg-green-600 text-white font-bold py-3.5 px-6 rounded-xl text-center text-sm shadow-lg shadow-green-600/20"
          >
            Sign In Karen
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-slate-50/80 font-sans antialiased flex text-left selection:bg-[#50d523]/20 overflow-x-hidden">
      <Sidebar
        navItems={navItems}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        user={user}
      />

      <main className="flex-1 md:ml-72 min-h-screen p-4 sm:p-6 lg:p-8 overflow-y-auto w-full">
        <div className="flex items-center justify-between mb-6 md:hidden bg-white p-4 rounded-2xl border border-slate-100 shadow-xs">
          <span className="text-xl font-bold text-slate-900">
            Internee<span className="text-[#50d523]">.pk</span>
          </span>
          <div className="flex items-center gap-3">
            {user?.imageUrl && (
              <img
                src={user.imageUrl}
                alt="User"
                className="w-8 h-8 rounded-full border border-slate-200"
              />
            )}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="p-2 text-slate-700 text-lg hover:bg-slate-50 rounded-xl"
            >
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {activeTab === "overview" && (
            <OverviewTab
              stats={stats}
              tasks={tasks}
              user={user}
              setActiveTab={setActiveTab}
            />
          )}
          {activeTab === "internships" && (
            <InternshipsTab registeredInternships={registeredInternships} />
          )}
          {activeTab === "webinars" && <WebinarsTab />}
        </AnimatePresence>
      </main>
    </div>
  );
}
