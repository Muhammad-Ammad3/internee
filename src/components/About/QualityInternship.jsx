import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faCircleCheck, 
  faBookOpen, 
  faBriefcase, 
  faBolt,
  faUsers,
  faGlobe,
  faGraduationCap,
  faChartLine
} from "@fortawesome/free-solid-svg-icons";

// Animation Framer Motion Variants
const containerVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 }
  }
};

const itemVariants = {
  initial: { opacity: 0, y: 30 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" }
  }
};

const hoverInteraction = {
  whileHover: { y: -6, scale: 1.012, transition: { duration: 0.25, ease: "easeInOut" } }
};

export default function QualityInternship() {
  
  // Impact Stats Counter Array Mock Data
  const impactStats = [
    {
      id: 1,
      metric: "20K+",
      label: "Students Launched",
      icon: faUsers,
      themeColor: "bg-[#2563eb] text-white",
    },
    {
      id: 2,
      metric: "200+",
      label: "Partner Companies",
      icon: faGlobe,
      themeColor: "bg-[#10b981] text-white",
    },
    {
      id: 3,
      metric: "50+",
      label: "Skill Tracks",
      icon: faGraduationCap,
      themeColor: "bg-[#a855f7] text-white",
    },
    {
      id: 4,
      metric: "95%",
      label: "Success Rate",
      icon: faChartLine,
      themeColor: "bg-[#f97316] text-white",
    }
  ];

  return (
    <section className="w-full bg-white font-sans antialiased py-20 lg:py-24 overflow-x-hidden selection:bg-[#50d523]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-28 md:space-y-36">
        
        {/* ================= SECTION 1: QUALITY INTERNSHIPS BENTO & LIST ================= */}
        <motion.div 
          variants={containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center"
        >
          
          {/* Left Asymmetric Staggered Grid Shell (6 Columns) */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6 relative order-2 lg:order-1 pt-6 lg:pt-0">
            {/* Ambient Background Decorative Accent Radial Blur */}
            <div className="absolute -inset-10 bg-radial from-green-500/5 via-transparent to-transparent blur-3xl pointer-events-none z-0" />

            {/* Card 1: Verified */}
            <motion.div 
              variants={itemVariants}
              {...hoverInteraction}
              className="bg-white rounded-4xl p-7 border border-gray-100 shadow-xl shadow-gray-200/20 flex flex-col items-start space-y-4 z-10"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#40b71c] text-white flex items-center justify-center shadow-lg shadow-green-500/20">
                <FontAwesomeIcon icon={faCircleCheck} className="text-xl" />
              </div>
              <div className="text-left">
                <h4 className="text-base font-black text-slate-900 tracking-tight">Verified</h4>
                <p className="text-xs text-gray-400 font-semibold leading-relaxed mt-1">
                  Trusted partners and authentic tracks.
                </p>
              </div>
            </motion.div>

            {/* Card 2: LMS (Asymmetrical translation offset applied on screen width > sm) */}
            <motion.div 
              variants={itemVariants}
              {...hoverInteraction}
              className="bg-[#2563eb] rounded-4xl p-7 text-white flex flex-col items-start space-y-4 shadow-xl shadow-blue-600/20 sm:translate-y-6 z-10"
            >
              <div className="w-12 h-12 rounded-2xl bg-white/15 backdrop-blur-xs text-white flex items-center justify-center">
                <FontAwesomeIcon icon={faBookOpen} className="text-lg" />
              </div>
              <div className="text-left">
                <h4 className="text-base font-black tracking-tight">LMS</h4>
                <p className="text-xs text-blue-100/80 font-medium leading-relaxed mt-1">
                  High-quality learning resources provided.
                </p>
              </div>
            </motion.div>

            {/* Card 3: Flexible */}
            <motion.div 
              variants={itemVariants}
              {...hoverInteraction}
              className="bg-[#0f131f] rounded-4xl p-7 text-white flex flex-col items-start space-y-4 shadow-2xl z-10"
            >
              <div className="w-12 h-12 rounded-2xl bg-slate-800 text-[#50d523] flex items-center justify-center border border-slate-700/50">
                <FontAwesomeIcon icon={faBolt} className="text-lg" />
              </div>
              <div className="text-left">
                <h4 className="text-base font-black tracking-tight">Flexible</h4>
                <p className="text-xs text-slate-400 font-semibold leading-relaxed mt-1">
                  Work from anywhere at your own pace.
                </p>
              </div>
            </motion.div>

            {/* Card 4: Career (Asymmetrical translation offset applied on screen width > sm) */}
            <motion.div 
              variants={itemVariants}
              {...hoverInteraction}
              className="bg-white rounded-4xl p-7 border border-gray-100 shadow-xl shadow-gray-200/20 flex flex-col items-start space-y-4 sm:translate-y-6 z-10"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#ea580c] text-white flex items-center justify-center shadow-lg shadow-orange-500/20">
                <FontAwesomeIcon icon={faBriefcase} className="text-lg" />
              </div>
              <div className="text-left">
                <h4 className="text-base font-black text-slate-900 tracking-tight">Career</h4>
                <p className="text-xs text-gray-400 font-semibold leading-relaxed mt-1">
                  Direct path to top tech employers.
                </p>
              </div>
            </motion.div>

          </div>

          {/* Right Rich Typography and Feature List Blocks (6 Columns) */}
          <div className="lg:col-span-6 space-y-6 text-left lg:pl-12 order-1 lg:order-2">
            <motion.div variants={itemVariants} className="inline-block bg-green-50 text-[#40b71c] text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full border border-green-100">
              Why Internee.pk?
            </motion.div>

            <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-[1.12]">
              Quality Internships <br />
              Designed for <span className="text-[#50d523]">Your Growth</span>
            </motion.h2>

            <motion.p variants={itemVariants} className="text-gray-500 font-medium text-sm sm:text-base leading-relaxed max-w-xl">
              We don't just provide tasks; we provide a career launchpad. Join the movement that's redefining the virtual internship experience in Pakistan.
            </motion.p>

            {/* Item Feature Rows */}
            <motion.div variants={itemVariants} className="space-y-5 pt-4">
              
              <div className="flex items-start gap-4 group">
                <div className="w-9 h-9 rounded-xl bg-green-50 text-[#40b71c] border border-green-100/60 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#40b71c] group-hover:text-white transition-colors duration-300">
                  <FontAwesomeIcon icon={faCircleCheck} className="text-sm" />
                </div>
                <div>
                  <h5 className="text-sm font-black text-slate-900 tracking-tight">Verified Internships</h5>
                  <p className="text-xs text-gray-400 font-medium leading-normal mt-0.5">
                    Gain access to trusted opportunities from reputable companies across various industries.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 border border-blue-100/60 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  <FontAwesomeIcon icon={faBookOpen} className="text-sm" />
                </div>
                <div>
                  <h5 className="text-sm font-black text-slate-900 tracking-tight">LMS for Skill Growth</h5>
                  <p className="text-xs text-gray-400 font-medium leading-normal mt-0.5">
                    Access our Learning Management System to upskill with high-quality courses and workshops.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-9 h-9 rounded-xl bg-orange-50 text-orange-600 border border-orange-100/60 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-orange-600 group-hover:text-white transition-colors duration-300">
                  <FontAwesomeIcon icon={faBriefcase} className="text-sm" />
                </div>
                <div>
                  <h5 className="text-sm font-black text-slate-900 tracking-tight">Dedicated Job Portal</h5>
                  <p className="text-xs text-gray-400 font-medium leading-normal mt-0.5">
                    Explore full-time job opportunities after your internship and connect with top employers.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-9 h-9 rounded-xl bg-purple-50 text-purple-600 border border-purple-100/60 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300">
                  <FontAwesomeIcon icon={faBolt} className="text-sm" />
                </div>
                <div>
                  <h5 className="text-sm font-black text-slate-900 tracking-tight">Flexibility & Pace</h5>
                  <p className="text-xs text-gray-400 font-medium leading-normal mt-0.5">
                    Learn on your own schedule with our remote-first approach designed for your convenience.
                  </p>
                </div>
              </div>

            </motion.div>
          </div>

        </motion.div>

        {/* ================= SECTION 2: OUR IMPACT AT A GLANCE METRICS ================= */}
        <div className="space-y-12">
          {/* Impact Heading Text Panel */}
          <div className="text-center space-y-2.5 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Our Impact at a Glance
            </h2>
            <p className="text-gray-400 font-medium text-xs sm:text-sm max-w-lg mx-auto leading-relaxed">
              Transforming Pakistan's tech talent landscape through education and opportunity
            </p>
          </div>

          {/* 4x1 Stat Card Responsive Grid Loop */}
          <motion.div 
            variants={containerVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {impactStats.map((stat) => (
              <motion.div
                key={stat.id}
                variants={itemVariants}
                whileHover={{ y: -5, boxShadow: "0 20px 40px -15px rgba(0,0,0,0.05)" }}
                className="bg-white border border-gray-100 p-6 sm:p-7 rounded-4xl shadow-xs flex flex-col items-start text-left space-y-4 transition-all duration-300"
              >
                {/* Custom Dynamic Vector Icon Wrapper Background Box */}
                <div className={`w-11 h-11 rounded-xl ${stat.themeColor} flex items-center justify-center shadow-xs`}>
                  <FontAwesomeIcon icon={stat.icon} className="text-lg" />
                </div>
                
                <div className="space-y-0.5">
                  <div className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                    {stat.metric}
                  </div>
                  <div className="text-xs text-gray-400 font-bold tracking-normal">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}