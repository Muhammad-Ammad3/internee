import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";

const graduateTracksData = {
  "health-care": {
    title: "Health Care",
    tagline: "Graduate Program",
    desc: "Step into the world where every second counts and lives are changed. Whether it's assisting in patient care, supporting medical research, or exploring health tech innovation our internships put you at the heart of the action. Join the frontlines of impact and make your mark in the future of healthcare.",
    snapshot: {
      format: "Project-Based",
      mentorship: "Expert Guidance",
      outcome: "Portfolio-Ready",
      footerNote: "Complete real tasks and finish with proof of skills.",
    },
  },
  engineering: {
    title: "Engineering",
    tagline: "Graduate Program",
    desc: "Enter the realm where ideas turn into structures, circuits, and code. From building the future to solving real-world challenges, our engineering internships place you in the driver's seat of innovation.",
    snapshot: {
      format: "Project-Based",
      mentorship: "Industry Mentors",
      outcome: "Certification-Ready",
      footerNote: "Build structural prototypes and handle real pipelines.",
    },
  },
  "information-technology": {
    title: "Information Technology",
    tagline: "Graduate Program",
    desc: "Dive into the digital battlefield where code is power and innovation never sleeps. From software development to cybersecurity, data analytics to cloud computing our IT internships equip you to lead the tech revolution.",
    snapshot: {
      format: "Project-Based",
      mentorship: "Senior Code Reviewers",
      outcome: "Production-Deployable",
      footerNote: "Write pristine codebases and ship real functional apps.",
    },
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
};

const GraduateTrackDetail = () => {
  const { trackSlug } = useParams();
  const currentTrack = graduateTracksData[trackSlug];

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [trackSlug]);

  if (!currentTrack) {
    return (
      <div className="w-full text-center py-24 font-sans">
        <h2 className="text-xl font-bold text-gray-800">
          Track Details Not Found
        </h2>
        <Link
          to="/graduate-program"
          className="text-[#50d523] underline mt-2 inline-block"
        >
          Back to Graduate Program
        </Link>
      </div>
    );
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full min-h-screen bg-white font-sans text-left px-6 lg:px-24 pt-12 pb-20 selection:bg-green-100"
    >
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <motion.div
            variants={itemVariants}
            className="lg:col-span-7 space-y-5"
          >
            <div className="inline-block bg-neutral-100 text-gray-500 text-xs font-semibold px-4 py-1.5 rounded-full">
              {currentTrack.tagline}
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-neutral-900 tracking-tight">
              {currentTrack.title}
            </h1>
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed font-medium">
              {currentTrack.desc}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link to="/internships">
                <button className="bg-[#3ca81a] hover:bg-[#328f15] text-white text-sm font-bold px-6 py-3 rounded-full shadow-md transition-colors cursor-pointer">
                  View All Tracks
                </button>
              </Link>
              <Link to="/">
                <button className="bg-white border border-neutral-200 hover:border-neutral-300 text-[#3ca81a] text-sm font-bold px-6 py-3 rounded-full transition-colors cursor-pointer">
                  Get Started
                </button>
              </Link>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="lg:col-span-5 w-full">
            <div className="bg-white border border-neutral-100 rounded-3xl p-6 sm:p-8 shadow-xl shadow-neutral-100/70 space-y-6">
              <h3 className="text-xs font-bold text-gray-400 tracking-wider uppercase">
                Program Snapshot
              </h3>

              <div className="space-y-4 text-xs sm:text-sm font-semibold">
                <div className="flex justify-between items-center border-b border-neutral-50 pb-3">
                  <span className="text-gray-400 font-medium">Format</span>
                  <span className="text-neutral-900 font-bold">
                    {currentTrack.snapshot.format}
                  </span>
                </div>
                <div className="flex justify-between items-center border-b border-neutral-50 pb-3">
                  <span className="text-gray-400 font-medium">Mentorship</span>
                  <span className="text-neutral-900 font-bold">
                    {currentTrack.snapshot.mentorship}
                  </span>
                </div>
                <div className="flex justify-between items-center border-b border-neutral-50 pb-3">
                  <span className="text-gray-400 font-medium">Outcome</span>
                  <span className="text-neutral-900 font-bold">
                    {currentTrack.snapshot.outcome}
                  </span>
                </div>
              </div>

              <p className="text-gray-400 text-xs font-medium leading-relaxed pt-2">
                {currentTrack.snapshot.footerNote}
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          className="border-t border-neutral-100 pt-12 space-y-2"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight">
            Explore Internship Subcategories
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm font-medium">
            Discover opportunities under the {currentTrack.title} category.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default GraduateTrackDetail;
