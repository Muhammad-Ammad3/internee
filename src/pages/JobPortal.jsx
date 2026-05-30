import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faChevronRight,
  faArrowTrendUp,
  faCheck,
  faAward,
  faUsers,
  faSearch,
  faMapMarkerAlt,
  faCalendarAlt,
  faBookmark as faBookmarkSolid,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import { faBookmark as faBookmarkRegular } from "@fortawesome/free-regular-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const INITIAL_JOBS = [
  {
    id: 1,
    title: "MERN STACK Developer",
    company: "MIT SOLUTIONS",
    location: "Lahore Johar Town, Pakistan",
    date: "Feb 24, 2026",
    type: "Full Time/Permanent",
    experience: "1 Years",
    salary: "40000 - 60000 PKR",
    description:
      "Job Title: MERN Stack Developer (1 Year Experience) Salary: 40k to 60k Location: Johar Town / Onsite] Job Type: Full Time Job Description: We are...",
  },
  {
    id: 2,
    title: "Senior Python Developer",
    company: "E-Khareedari",
    location: "Pakistan, Pakistan",
    date: "Mar 8, 2026",
    type: "Full Time/Permanent",
    experience: "Senior",
    salary: "250000 - 450000 PKR",
    description:
      "We are seeking a Senior Python Developer to lead the development of high-performance backend systems and integrate cutting-edge AI capabilities. You will be responsible for architecting scalable APIs and...",
  },
  {
    id: 3,
    title: "Mid Backend Developer (Node.js)",
    company: "Azya Consulting FZ LLE",
    location: "Pakistan, Pakistan",
    date: "Feb 24, 2026",
    type: "Internship",
    experience: "Mid Level",
    salary: "Confidential",
    description:
      "Job Type: Full-time Work Location: Remote (Pakistan / India) About the company: We operate multiple custom backend systems powering our platforms, serving re...",
  },
  {
    id: 4,
    title: "Remote - PHP WordPress Developer",
    company: "The Ghani IT Solutions",
    location: "Pakistan, Pakistan",
    date: "Feb 28, 2026",
    type: "Full Time/Permanent",
    experience: "Not Specified",
    salary: "50000 - 80000 PKR",
    description:
      "Key Responsibilities: Develop and customize WordPress and Shopify websites based on client requirements. Build and maintain custom websites...",
  },
  {
    id: 5,
    title: "UI/UX Web Designer",
    company: "Cyngro",
    location: "Lahore, Pakistan",
    date: "Feb 26, 2026",
    type: "Full Time/Permanent",
    experience: "2 Years",
    salary: "50000 - 100000 PKR",
    description:
      "Key Responsibilities: Design user-friendly and visually appealing web interfaces, landing pages, and dashboards. Translate user needs and business goal... into effective wireframes, mockups, and prototypes.",
  },
  {
    id: 6,
    title: "React JS Developer",
    company: "Hul Hub Pvt Ltd",
    location: "Karachi Shahra-E-Faisal, Pakistan",
    date: "Feb 23, 2026",
    type: "Full Time/Permanent",
    experience: "1 Years",
    salary: "Confidential",
    description:
      "Hul Hub Pakistan is Hiring - React JS Developer Hul Hub Pakistan is looking for a passionate React JS Developer with 1 year of hands-on experience in...",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 16 },
  },
};

const cardHoverVariants = {
  hover: { y: -6, boxShadow: "0px 15px 35px rgba(0, 0, 0, 0.06)" },
};

const JobPortal = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("All Locations");
  const [sortOrder, setSortOrder] = useState("Latest First");
  const [jobs, setJobs] = useState(INITIAL_JOBS);
  const [bookmarkedJobs, setBookmarkedJobs] = useState([]);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  const toggleBookmark = (id) => {
    if (bookmarkedJobs.includes(id)) {
      setBookmarkedJobs(bookmarkedJobs.filter((item) => item !== id));
    } else {
      setBookmarkedJobs([...bookmarkedJobs, id]);
    }
  };

  const filteredJobs = jobs
    .filter((job) => {
      const matchesSearch =
        job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.description.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesLocation =
        selectedLocation === "All Locations" ||
        job.location.toLowerCase().includes(selectedLocation.toLowerCase());

      return matchesSearch && matchesLocation;
    })
    .sort((a, b) => {
      if (sortOrder === "Latest First") {
        return b.id - a.id;
      }
      return a.id - b.id;
    });

  const stats = [
    {
      id: 1,
      icon: faAward,
      value: "20+",
      label: "Expert-Led Internships",
      bgColor: "bg-emerald-50",
      iconColor: "text-emerald-500",
    },
    {
      id: 2,
      icon: faUsers,
      value: "1,500+",
      label: "Successful Graduates",
      bgColor: "bg-green-50",
      iconColor: "text-green-500",
    },
    {
      id: 3,
      icon: faLinkedin,
      value: "120k+",
      label: "LinkedIn Followers",
      bgColor: "bg-emerald-50",
      iconColor: "text-emerald-600",
    },
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full min-h-screen bg-neutral-50/60 font-sans px-4 sm:px-8 lg:px-24 pt-6 pb-20 selection:bg-green-100 selection:text-green-700"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={itemVariants}
          className="flex items-center gap-2 text-xs font-semibold text-gray-400 mb-6"
        >
          <Link to="/" className="hover:text-gray-600 transition-colors">
            Home
          </Link>
          <FontAwesomeIcon icon={faChevronRight} className="text-[9px]" />
          <span className="text-gray-800">Latest Job Updates</span>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="space-y-1 mb-8 text-left"
        >
          <div className="flex items-center gap-2 text-gray-900">
            <div className="bg-green-100 text-[#50d523] w-7 h-7 rounded-lg flex items-center justify-center">
              <FontAwesomeIcon icon={faBriefcase} className="text-sm" />
            </div>
            <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Opportunity Portal
            </h1>
          </div>
          <p className="text-gray-500 text-sm font-medium pl-9">
            Discover your next career milestone in Pakistan's tech ecosystem
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="w-full bg-linear-to-r from-[#50d523] via-[#43be1d] to-[#3faa1c] rounded-3xl p-8 sm:p-12 text-white shadow-xl shadow-green-600/10 relative overflow-hidden mb-10 text-left"
        >
          <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-white/5 rounded-full blur-2xl" />
          <div className="max-w-2xl space-y-4 relative z-10">
            <div className="inline-flex items-center gap-1.5 bg-white/15 backdrop-blur-md text-[10px] font-bold tracking-wider uppercase px-3 py-1.5 rounded-full border border-white/10">
              <FontAwesomeIcon icon={faCheck} className="text-[9px]" /> Verified
              Jobs Only
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight leading-tight">
              Find Your Dream Tech Job in Pakistan
            </h2>
            <p className="text-white/85 text-sm sm:text-base font-medium leading-relaxed">
              We've partnered with Pakistan's top IT companies to bring you
              exclusive, verified job opportunities — updated daily.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2 text-xs font-semibold">
              <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-xl">
                <FontAwesomeIcon
                  icon={faArrowTrendUp}
                  className="text-[11px]"
                />{" "}
                <span>New daily</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-xl">
                <FontAwesomeIcon icon={faUsers} className="text-[11px]" />{" "}
                <span>Active listings</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.id}
              variants={itemVariants}
              whileHover="hover"
              variants={Object.assign({}, itemVariants, cardHoverVariants)}
              className="bg-white border border-gray-100 rounded-2xl p-6 flex flex-col items-center justify-center text-center transition-all duration-300"
            >
              <div
                className={`w-12 h-12 ${stat.bgColor} rounded-2xl flex items-center justify-center mb-4 text-xl`}
              >
                <FontAwesomeIcon icon={stat.icon} className="text-[#50d523]" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 tracking-tight mb-1">
                {stat.value}
              </h3>
              <p className="text-gray-400 text-xs font-bold tracking-wide">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <hr className="border-neutral-200/60 mb-10" />

        <motion.div
          variants={itemVariants}
          className="w-full bg-white border border-neutral-100 rounded-2xl p-3 shadow-md shadow-neutral-100/80 flex flex-col md:flex-row gap-3 items-center mb-8"
        >
          <div className="w-full md:flex-1 flex items-center gap-2.5 px-3 py-2 bg-neutral-50 rounded-xl border border-neutral-100 focus-within:border-green-400 transition-colors">
            <FontAwesomeIcon
              icon={faSearch}
              className="text-gray-400 text-sm"
            />
            <input
              type="text"
              placeholder="Search jobs, companies, keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent text-sm font-medium outline-hidden text-gray-800 placeholder-gray-400/80"
            />
          </div>

          <div className="w-full md:w-48 flex items-center gap-2 px-3 py-2 bg-neutral-50 rounded-xl border border-neutral-100">
            <FontAwesomeIcon
              icon={faMapMarkerAlt}
              className="text-gray-400 text-sm"
            />
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="w-full bg-transparent text-sm font-semibold outline-hidden text-gray-600 cursor-pointer"
            >
              <option value="All Locations">All Locations</option>
              <option value="Lahore">Lahore</option>
              <option value="Karachi">Karachi</option>
              <option value="Pakistan">Remote (Pakistan)</option>
            </select>
          </div>

          <div className="w-full md:w-44 flex items-center gap-2 px-3 py-2 bg-neutral-50 rounded-xl border border-neutral-100">
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="w-full bg-transparent text-sm font-semibold outline-hidden text-gray-600 cursor-pointer"
            >
              <option value="Latest First">Latest First</option>
              <option value="Oldest First">Oldest First</option>
            </select>
          </div>

          <button className="w-full md:w-auto bg-[#3ca81a] hover:bg-[#328f15] text-white text-sm font-bold px-7 py-3 rounded-xl transition-colors cursor-pointer shadow-xs">
            Search
          </button>
        </motion.div>

        <motion.div
          layout
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left"
        >
          <AnimatePresence>
            {filteredJobs.map((job) => {
              const isBookmarked = bookmarkedJobs.includes(job.id);
              return (
                <motion.div
                  key={job.id}
                  layout
                  variants={itemVariants}
                  whileHover="hover"
                  variants={Object.assign({}, itemVariants, cardHoverVariants)}
                  className="bg-white border border-neutral-100/80 rounded-2xl p-5 flex flex-col justify-between shadow-xs relative group transition-all duration-300 hover:border-transparent"
                >
                  <div>
                    <div className="flex justify-between items-start gap-3 mb-3">
                      <h4 className="text-base font-extrabold text-green-700 tracking-tight leading-snug group-hover:text-green-600 transition-colors">
                        {job.title}
                      </h4>
                      <button
                        onClick={() => toggleBookmark(job.id)}
                        className="text-neutral-300 hover:text-green-600 transition-colors cursor-pointer p-1 text-sm"
                      >
                        <FontAwesomeIcon
                          icon={
                            isBookmarked ? faBookmarkSolid : faBookmarkRegular
                          }
                          className={isBookmarked ? "text-green-600" : ""}
                        />
                      </button>
                    </div>

                    <div className="flex flex-wrap items-center gap-1.5 text-[10px] font-bold mb-3">
                      <span className="bg-green-50 text-green-700 px-2 py-1 rounded-md uppercase tracking-wider">
                        {job.company}
                      </span>
                      <span className="bg-neutral-50 text-gray-400 px-2 py-1 rounded-md flex items-center gap-1">
                        <FontAwesomeIcon
                          icon={faMapMarkerAlt}
                          className="text-[9px]"
                        />{" "}
                        {job.location}
                      </span>
                    </div>

                    <div className="flex items-center gap-1 text-[10px] text-gray-400 font-bold mb-4">
                      <FontAwesomeIcon
                        icon={faCalendarAlt}
                        className="text-[9px]"
                      />
                      <span>{job.date}</span>
                    </div>

                    <div className="flex flex-wrap gap-1.5 mb-4 text-[10px] font-extrabold">
                      <span className="bg-blue-50 text-blue-600 px-2.5 py-1 rounded-full">
                        {job.type}
                      </span>
                      {job.experience && (
                        <span className="bg-purple-50 text-purple-600 px-2.5 py-1 rounded-full">
                          {job.experience}
                        </span>
                      )}
                      {job.salary && (
                        <span className="bg-amber-50 text-amber-600 px-2.5 py-1 rounded-full">
                          {job.salary}
                        </span>
                      )}
                    </div>

                    <p className="text-gray-500 text-xs font-medium leading-relaxed mb-6 line-clamp-3">
                      {job.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-2 border-t border-neutral-50">
                    <button className="w-full bg-neutral-50 hover:bg-neutral-100 text-gray-700 text-xs font-bold py-2.5 px-3 rounded-xl transition-colors cursor-pointer border border-neutral-100 text-center">
                      View Details
                    </button>
                    <button className="w-full bg-[#3ca81a] hover:bg-[#328f15] text-white text-xs font-bold py-2.5 px-3 rounded-xl transition-colors cursor-pointer flex items-center justify-center gap-1 text-center shadow-xs">
                      <span>Apply Now</span>
                      <FontAwesomeIcon
                        icon={faArrowUpRightFromSquare}
                        className="text-[10px]"
                      />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {filteredJobs.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16 bg-white border border-dashed border-neutral-200 rounded-2xl"
          >
            <p className="text-gray-400 font-bold text-sm">
              No jobs found matching your criteria.
            </p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default JobPortal;
