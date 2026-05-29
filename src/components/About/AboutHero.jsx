import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faCircleCheck,
  faBolt,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import about from "../../assets/about.png";
import { useNavigate } from "react-router-dom";

// Animations Configuration
const containerVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const itemVariants = {
  initial: { opacity: 0, y: 30 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const cardHoverEffects = {
  whileHover: { y: -6, scale: 1.01, transition: { duration: 0.3 } },
};

export default function AboutHero() {
  const navigate = useNavigate();

  const handleJoinPlatform = () => {
    // Add navigation action or modal open trigger here
  };

  return (
    <section className="w-full min-h-screen bg-gray-50/30 font-sans antialiased flex items-center py-16 overflow-x-hidden selection:bg-[#50d523]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          variants={containerVariants}
          initial="initial"
          animate="animate"
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center"
        >
          {/* Left Text Block (6 Columns) */}
          <div className="lg:col-span-6 space-y-6 md:space-y-8 text-left">
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 bg-gray-100/80 border border-gray-200/60 rounded-full py-1.5 pl-2 pr-4 shadow-2xs"
            >
              <span className="bg-[#50d523] text-white text-[10px] font-bold uppercase px-2.5 py-1 rounded-full tracking-wider">
                Our Mission
              </span>
              <span className="text-[11px] sm:text-xs font-bold text-gray-600">
                Defining the Future of Work
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-[1.1]"
            >
              Empowering Careers, <br />
              <span className="text-[#50d523] relative inline-block">
                One Internship
              </span>{" "}
              at a Time
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-gray-500 font-medium text-sm sm:text-base max-w-xl leading-relaxed"
            >
              We're Pakistan's leading virtual internship platform, closing the
              talent gap and launching careers for thousands of students
              nationwide.
            </motion.p>

            {/* Feature Mini Cards Group */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl"
            >
              <div className="bg-white/80 border border-gray-100 rounded-2xl p-4 flex items-start gap-4 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#50d523] flex items-center justify-center shrink-0 border border-emerald-100/50">
                  <FontAwesomeIcon icon={faBolt} className="text-base" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">
                    Skill Mastery
                  </h3>
                  <p className="text-[11px] sm:text-xs text-gray-400 font-medium leading-normal mt-0.5">
                    High-impact, industry-standard project work.
                  </p>
                </div>
              </div>

              <div className="bg-white/80 border border-gray-100 rounded-2xl p-4 flex items-start gap-4 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-500 flex items-center justify-center shrink-0 border border-blue-100/50">
                  <FontAwesomeIcon icon={faGlobe} className="text-base" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">
                    Global Network
                  </h3>
                  <p className="text-[11px] sm:text-xs text-gray-400 font-medium leading-normal mt-0.5">
                    Direct paths to top-tier tech companies.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Call to Action Button */}
            <motion.div variants={itemVariants} className="pt-2">
              <motion.button
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 10px 25px -5px rgba(80, 213, 35, 0.4)",
                }}
                whileTap={{ scale: 0.97 }}
                onClick={() => navigate("/graduate-program")}
                className="inline-flex items-center gap-2 cursor-pointer bg-[#50d523] text-white font-bold px-6 py-4 rounded-2xl transition-all text-sm group shadow-lg shadow-green-500/20"
              >
                <span>Join the Platform</span>
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="text-xs group-hover:translate-x-1 transition-transform duration-200"
                />
              </motion.button>
            </motion.div>
          </div>

          {/* Right Layout Visual Complex Grid (6 Columns) */}
          <div className="lg:col-span-6 grid grid-cols-12 gap-4 sm:gap-6 relative items-center mt-6 lg:mt-0 select-none">
            {/* Background Accent Decorative Blurs */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-[#50d523]/5 rounded-full blur-[80px] pointer-events-none z-0" />

            {/* Left Column Inside Right Grid (Vertical Stacking) */}
            <div className="col-span-7 space-y-4 sm:space-y-6 z-10">
              {/* Main Student Story Centerpiece Card */}
              <motion.div
                variants={itemVariants}
                {...cardHoverEffects}
                className="relative w-60 h-72 aspect-4/5 bg-slate-200 rounded-4xl overflow-hidden shadow-xl border border-white/60 group"
              >
                <img
                  src={about}
                  alt="Student Working"
                  className="w-full h-full object-cover grayscale-10 contrast-105 group-hover:scale-103 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-5 left-5 right-5 text-left text-white space-y-0.5">
                  <h4 className="font-bold text-sm sm:text-base tracking-tight">
                    Student Story
                  </h4>
                  <p className="text-[10px] sm:text-xs text-gray-300 font-medium">
                    Working at Google PK
                  </p>
                </div>
              </motion.div>

              {/* 50K+ Active Metrics Status Card */}
              <motion.div
                variants={itemVariants}
                {...cardHoverEffects}
                className="bg-[#0e131f] rounded-2xl p-5 text-left text-white shadow-xl border border-slate-800/80"
              >
                <div className="text-2xl sm:text-3xl font-bold text-[#50d523] tracking-tight">
                  50K+
                </div>
                <div className="text-[10px] sm:text-xs text-slate-400 font-bold tracking-wide mt-0.5 uppercase">
                  Active Students Nationwide
                </div>
              </motion.div>
            </div>

            {/* Right Column Inside Right Grid (Vertical Stacking) */}
            <div className="col-span-5 space-y-4 sm:space-y-6 z-10 self-center lg:pt-8">
              {/* Verified Badge Profile Check Card */}
              <motion.div
                variants={itemVariants}
                {...cardHoverEffects}
                className="bg-white rounded-3xl p-5 text-left shadow-lg border border-gray-100"
              >
                <div className="w-9 h-9 rounded-xl bg-emerald-50 text-[#50d523] flex items-center justify-center border border-emerald-100/50">
                  <FontAwesomeIcon icon={faCircleCheck} className="text-base" />
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-slate-900 mt-3">
                  Verified
                </h4>
                <p className="text-[10px] sm:text-xs text-gray-400 font-semibold leading-normal mt-1">
                  Official partners with leading tech firms.
                </p>
              </motion.div>

              {/* #1 Platform Green Accent Highlight Card */}
              <motion.div
                variants={itemVariants}
                {...cardHoverEffects}
                className="bg-[#50d523] rounded-3xl p-5 text-left text-white shadow-lg shadow-green-500/10 border border-green-400/20"
              >
                <h4 className="text-sm sm:text-base font-bold tracking-tight">
                  "#1 Platform"
                </h4>
                <p className="text-[10px] sm:text-xs text-green-50/90 font-medium leading-relaxed mt-1.5">
                  Voted most reliable virtual program in Pakistan.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
