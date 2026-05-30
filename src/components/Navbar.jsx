import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../assets/logo.png";

import {
  faChevronDown,
  faBriefcase,
  faBars,
  faXmark,
  faUser,
  faBookOpenReader,
  faChalkboardUser,
} from "@fortawesome/free-solid-svg-icons";

const Logo = () => (
  <Link
    to="/"
    className="flex items-center gap-2 cursor-pointer select-none group"
  >
    <div className="relative">
      <div className="w-16 h-16 bg-linear-to-br rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
        <img src={logo} alt="" className="w-48 h-16" />
      </div>
    </div>
    <div className="flex flex-col">
      <div className="flex items-baseline gap-0.5">
        <span className="text-[#50d523] font-medium text-2xl tracking-tight">
          Internee
        </span>
        <span className="text-gray-900 font-bold text-xl tracking-tight">
          .pk
        </span>
      </div>
      <span className="text-[7px] text-purple-400 font-bold mt-0.5 tracking-widest uppercase">
        Virtual Internship Platform
      </span>
    </div>
  </Link>
);

const ResourcesDropdown = () => (
  <motion.div
    initial={{ opacity: 0, y: 10, scale: 0.95 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    exit={{ opacity: 0, y: 10, scale: 0.95 }}
    transition={{ duration: 0.2, ease: "easeOut" }}
    className="absolute top-[calc(100%+12px)] right-0 md:left-1/2 md:-translate-x-1/2 bg-white/95 backdrop-blur-xl p-2 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.12)] border border-gray-100 z-50 w-70"
  >
    <div className="flex flex-col gap-1 text-left">
      <Link
        to="/blog"
        className="flex items-center gap-3 group p-3 rounded-xl hover:bg-gray-50 transition-all duration-200"
      >
        <div className="w-10 h-10 bg-linear-to-br from-green-50 to-green-100/50 rounded-xl text-[#50d523] flex items-center justify-center group-hover:scale-110 transition-transform shrink-0">
          <FontAwesomeIcon icon={faBookOpenReader} className="text-sm" />
        </div>
        <div className="flex-1">
          <p className="text-gray-900 font-bold text-sm">Blog</p>
          <p className="text-gray-400 text-xs font-medium mt-0.5">
            Latest insights & articles
          </p>
        </div>
      </Link>

      <Link
        to="/webinars"
        className="flex items-center gap-3 group p-3 rounded-xl hover:bg-gray-50 transition-all duration-200"
      >
        <div className="w-10 h-10 bg-linear-to-br from-green-50 to-green-100/50 rounded-xl text-[#50d523] flex items-center justify-center group-hover:scale-110 transition-transform shrink-0">
          <FontAwesomeIcon icon={faChalkboardUser} className="text-sm" />
        </div>
        <div className="flex-1">
          <p className="text-gray-900 font-bold text-sm">Webinars</p>
          <p className="text-gray-400 text-xs font-medium mt-0.5">
            Expert sessions & masterclasses
          </p>
        </div>
      </Link>
    </div>
  </motion.div>
);

const Navbar = () => {
  const [showResources, setShowResources] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/internships", label: "Intership" },
    { path: "/graduate-program", label: "Graduate Program" },
    { path: "/studentambassadors", label: "Student Ambassador" },
    { path: "/startupjourney", label: "Startup Journey" },
  ];

  return (
    <nav className="w-full h-20 bg-white backdrop-blur-xl border-b border-gray-100/50 sticky top-0 z-50 font-sans select-none">
      <div className="max-w-7xl mx-auto px-6 lg:px-2 h-full flex items-center justify-between">
        <div className="shrink-0">
          <Logo />
        </div>

        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                isActive(link.path)
                  ? "text-[#50d523] bg-green-50/50"
                  : "text-black hover:text-gray-900 hover:bg-gray-50"
              }`}
            >
              {link.label}
            </Link>
          ))}

          <div
            className="relative"
            onMouseEnter={() => setShowResources(true)}
            onMouseLeave={() => setShowResources(false)}
          >
            <button
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                showResources || isActive("/blog") || isActive("/webinars")
                  ? "text-[#50d523] bg-green-50/50"
                  : "text-black hover:text-gray-900 hover:bg-gray-50"
              }`}
            >
              <span>Resources</span>
              <motion.div
                animate={{ rotate: showResources ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="flex items-center justify-center"
              >
                <FontAwesomeIcon icon={faChevronDown} className="text-xs" />
              </motion.div>
            </button>

            <AnimatePresence>
              {showResources && <ResourcesDropdown />}
            </AnimatePresence>
          </div>
        </div>

        <div className="flex items-center gap-3">
          
          <SignedIn>
            <Link to="/dashboard" className="hidden sm:inline-block">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2 border border-green-200 bg-green-50 text-[#50d523] px-5 py-2.5 rounded-full text-xs font-bold hover:bg-green-100/70 transition-all cursor-pointer"
              >
                <span>Dashboard</span>
              </motion.button>
            </Link>
          </SignedIn>
          <Link to="/jobportal">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="hidden sm:flex items-center gap-2 bg-linear-to-r from-[#50d523] to-[#50d523] text-white px-5 py-2.5 rounded-full text-xs font-bold shadow-lg shadow-green-500/25 hover:shadow-green-500/40 transition-all cursor-pointer"
          >
            <span>Job Portal</span>
          </motion.button>
          </Link>

          <SignedOut>
            <SignInButton mode="modal">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2 border border-gray-200 bg-white text-gray-700 px-4 py-2.5 rounded-full text-xs font-bold hover:border-gray-300 hover:shadow-md transition-all cursor-pointer"
              >
                <FontAwesomeIcon icon={faUser} className="text-xs" />
                <span className="hidden sm:inline">Sign In</span>
              </motion.button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <div className="flex items-center justify-center border border-gray-100 p-0.5 rounded-full shadow-sm hover:shadow transition-all">
              <UserButton afterSignOutUrl="/" />
            </div>
          </SignedIn>

          <motion.button
            whileTap={{ scale: 0.9 }}
            className="lg:hidden w-10 h-10 flex items-center justify-center text-gray-600 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <FontAwesomeIcon icon={faXmark} className="text-base" />
            ) : (
              <FontAwesomeIcon icon={faBars} className="text-base" />
            )}
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-100 shadow-xl overflow-hidden text-left"
          >
            <div className="px-6 py-4 flex flex-col gap-2">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                      isActive(link.path)
                        ? "text-[#50d523] bg-green-50"
                        : "text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
              >
                <Link
                  to="/blog"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-3 rounded-xl text-sm font-semibold text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                >
                  Blog
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: (navLinks.length + 1) * 0.05 }}
              >
                <Link
                  to="/webinars"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-3 rounded-xl text-sm font-semibold text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                >
                  Webinars
                </Link>
              </motion.div>

              <hr className="my-2 border-gray-100" />

              <SignedIn>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: (navLinks.length + 2) * 0.05 }}
                >
                  <Link
                    to="/dashboard"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-center gap-2 w-full border border-green-200 bg-green-50 text-[#50d523] px-5 py-3 rounded-xl text-sm font-bold mb-2 transition-all"
                  >
                    <span>Dashboard</span>
                  </Link>
                </motion.div>
              </SignedIn>

              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: (navLinks.length + 3) * 0.05 }}
                className="flex items-center justify-center gap-2 w-full bg-linear-to-r from-[#50d523] to-[#50d523] text-white px-5 py-3 rounded-xl text-sm font-bold shadow-lg"
              >
                <FontAwesomeIcon icon={faBriefcase} className="text-sm" />
                <span>Job Portal</span>
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;