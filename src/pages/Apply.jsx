import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; 
import { useUser, useAuth } from "@clerk/clerk-react"; // Clerk Hooks Import Kiye
import { toast, ToastContainer } from "react-toastify"; 
import "react-toastify/dist/ReactToastify.css"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

// --- ANIMATION VARIANTS ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
};

export default function Apply() {
  const navigate = useNavigate();
  
  // Clerk se user aur loading state nikaali
  const { isSignedIn, isLoaded: isUserLoaded } = useUser(); 
  const { isLoaded: isAuthLoaded } = useAuth();

  // Form State Configuration
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    pronoun: "",
    dob: "",
    gender: "",
    country: "",
    province: "",
    institution: "",
    degreeProgram: "",
    degreeLevel: "",
    graduationDate: "",
    programmingLanguage: "",
    techOfInterest: "",
  });

  // Automatically scroll to top on page mount
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  // Clerk ki authentication state check karne ke liye useEffect
  useEffect(() => {
    // Jab tak Clerk poori tarah load na ho jaye, tab tak rukna hai
    if (isUserLoaded && isAuthLoaded) {
      if (!isSignedIn) {
        // Agar user login NAHI hai, toh toast dikhao aur redirect karo
        toast.error("Please login first to access the application form!", {
          position: "top-center",
          autoClose: 3000,
          theme: "colored",
        });

        setTimeout(() => {
          navigate("/"); // Aapka home ya login page
        }, 2500);
      }
    }
  }, [isSignedIn, isUserLoaded, isAuthLoaded, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Application Data:", formData);
    toast.success("🚀 Application Submitted Successfully!");
  };

  // Jab tak Clerk backend se status confirm nahi karta, loading screen dikhao
  if (!isUserLoaded || !isAuthLoaded || !isSignedIn) {
    return (
      <div className="w-full min-h-screen bg-neutral-50/40 flex items-center justify-center">
        <ToastContainer />
        <div className="animate-pulse text-gray-400 font-medium text-sm">
          Verifying secure session...
        </div>
      </div>
    );
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full min-h-screen bg-neutral-50/40 font-sans px-4 sm:px-8 lg:px-24 pt-12 pb-20 text-left selection:bg-green-100 selection:text-green-800"
    >
      <ToastContainer />

      <form onSubmit={handleSubmit} className="max-w-4xl mx-auto space-y-8">
        {/* Top Header Section */}
        <motion.div variants={itemVariants} className="space-y-2">
          <div className="mb-3">
            <span className="bg-neutral-100 text-gray-600 text-sm font-semibold px-4 py-1.5 rounded-full border border-neutral-200/50">
              Student Ambassador
            </span>
          </div>
          <h1 className="text-5xl font-medium text-neutral-900 tracking-tight">
            Application Form
          </h1>
          <p className="text-gray-600 text-md font-medium leading-relaxed">
            Provide accurate details to complete your application. Fields marked are required.
          </p>
        </motion.div>

        {/* SECTION 1: Personal Information */}
        <motion.div
          variants={itemVariants}
          className="w-full bg-white border border-gray-300 rounded-3xl p-6 sm:p-8 shadow-xl shadow-neutral-100/40 space-y-6"
        >
          <h2 className="text-xl font-medium text-neutral-900 tracking-tight">
            Personal Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl text-md placeholder-gray-500 focus:outline-hidden focus:border-[#3ca81a] transition-colors"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl text-md placeholder-gray-500 focus:outline-hidden focus:border-[#3ca81a] transition-colors"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <select
                name="pronoun"
                value={formData.pronoun}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl text-md text-gray-800 font-medium appearance-none bg-white focus:outline-hidden focus:border-[#3ca81a] transition-colors cursor-pointer"
              >
                <option value="" disabled hidden>Select Pronoun</option>
                <option value="He/Him">He/Him</option>
                <option value="She/Her">She/Her</option>
                <option value="They/Them">They/Them</option>
                <option value="Prefer not to say">Prefer not to say</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-gray-400">
                <FontAwesomeIcon icon={faChevronDown} className="text-xs text-gray-800" />
              </div>
            </div>

            <input
              type="text"
              name="dob"
              placeholder="Enter Your Date of Birth"
              onFocus={(e) => (e.target.type = "date")}
              onBlur={(e) => !e.target.value && (e.target.type = "text")}
              value={formData.dob}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl text-md text-gray-600 placeholder-gray-500 focus:outline-hidden focus:border-[#3ca81a] transition-colors"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl text-md text-gray-800 font-medium appearance-none bg-white focus:outline-hidden focus:border-[#3ca81a] transition-colors cursor-pointer"
              >
                <option value="" disabled hidden>Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-gray-400">
                <FontAwesomeIcon icon={faChevronDown} className="text-xs text-gray-800" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* SECTION 2: Educational Information */}
        <motion.div
          variants={itemVariants}
          className="w-full bg-white border border-gray-300 rounded-3xl p-6 sm:p-8 shadow-xl shadow-neutral-100/40 space-y-6"
        >
          <h2 className="text-xl font-medium text-neutral-900 tracking-tight">
            Educational Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl text-md text-gray-800 font-medium appearance-none bg-white focus:outline-hidden focus:border-[#3ca81a] transition-colors cursor-pointer"
              >
                <option value="" disabled hidden>Select Country</option>
                <option value="Pakistan">Pakistan</option>
                <option value="United States">United States</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="Canada">Canada</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-gray-400">
                <FontAwesomeIcon icon={faChevronDown} className="text-xs text-gray-800" />
              </div>
            </div>

            <input
              type="text"
              name="province"
              placeholder="Province"
              value={formData.province}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl text-md placeholder-gray-500 focus:outline-hidden focus:border-[#3ca81a] transition-colors"
            />
          </div>

          <div className="w-full">
            <input
              type="text"
              name="institution"
              placeholder="Academic Institution"
              value={formData.institution}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl text-md placeholder-gray-500 focus:outline-hidden focus:border-[#3ca81a] transition-colors"
            />
          </div>

          <div className="w-full">
            <div className="relative">
              <select
                name="degreeProgram"
                value={formData.degreeProgram}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl text-md text-gray-800 font-medium appearance-none bg-white focus:outline-hidden focus:border-[#3ca81a] transition-colors cursor-pointer"
              >
                <option value="" disabled hidden>Select Degree Program</option>
                <option value="Computer Science">Computer Science</option>
                <option value="Software Engineering">Software Engineering</option>
                <option value="Information Technology">Information Technology</option>
                <option value="Data Science">Data Science</option>
                <option value="Business Administration">Business Administration</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-gray-400">
                <FontAwesomeIcon icon={faChevronDown} className="text-xs text-gray-800" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <select
                name="degreeLevel"
                value={formData.degreeLevel}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl text-md text-gray-800 font-medium appearance-none bg-white focus:outline-hidden focus:border-[#3ca81a] transition-colors cursor-pointer"
              >
                <option value="" disabled hidden>Select Degree Level</option>
                <option value="Bachelors">Bachelors</option>
                <option value="Masters">Masters</option>
                <option value="Diploma / Certification">Diploma / Certification</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-gray-400">
                <FontAwesomeIcon icon={faChevronDown} className="text-xs text-gray-800" />
              </div>
            </div>

            <input
              type="text"
              name="graduationDate"
              placeholder="Expected Graduation Date"
              onFocus={(e) => (e.target.type = "date")}
              onBlur={(e) => !e.target.value && (e.target.type = "text")}
              value={formData.graduationDate}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl text-md text-gray-600 placeholder-gray-500 focus:outline-hidden focus:border-[#3ca81a] transition-colors"
            />
          </div>
        </motion.div>

        {/* SECTION 3: Additional Information */}
        <motion.div
          variants={itemVariants}
          className="w-full bg-white border border-gray-300 rounded-3xl p-6 sm:p-8 shadow-xl shadow-neutral-100/40 space-y-6"
        >
          <h2 className="text-xl font-medium text-neutral-900 tracking-tight">
            Additional Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <select
                name="programmingLanguage"
                value={formData.programmingLanguage}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl text-md text-gray-800 font-medium appearance-none bg-white focus:outline-hidden focus:border-[#3ca81a] transition-colors cursor-pointer"
              >
                <option value="" disabled hidden>Select a programming language</option>
                <option value="JavaScript">JavaScript</option>
                <option value="TypeScript">TypeScript</option>
                <option value="Python">Python</option>
                <option value="Java">Java</option>
                <option value="C++">C++</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-gray-400">
                <FontAwesomeIcon icon={faChevronDown} className="text-xs text-gray-800" />
              </div>
            </div>

            <input
              type="text"
              name="techOfInterest"
              placeholder="Technologies of Interest"
              value={formData.techOfInterest}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl text-md placeholder-gray-500 focus:outline-hidden focus:border-[#3ca81a] transition-colors"
            />
          </div>
        </motion.div>

        {/* Submit Actions Block */}
        <motion.div variants={itemVariants} className="flex justify-end pt-2">
          <button
            type="submit"
            className="text-sm font-bold bg-[#3ca81a] hover:bg-[#328f15] text-white px-8 py-2.5 rounded-full shadow-md shadow-green-600/10 cursor-pointer transition-all duration-300 transform active:scale-98"
          >
            Submit
          </button>
        </motion.div>
      </form>
    </motion.div>
  );
}