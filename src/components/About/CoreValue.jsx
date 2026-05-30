import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBullseye,
  faHeart,
  faLightbulb,
  faEarthAmericas,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

const containerVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const itemVariants = {
  initial: { opacity: 0, y: 25 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function CoreValue() {
  const navigate = useNavigate();

  const values = [
    {
      id: 1,
      title: "Excellence First",
      description:
        "We're committed to delivering industry-leading experiences and outcomes for every student and partner.",
      icon: faBullseye,
      iconColor: "text-[#50d523]",
      bgColor: "bg-green-50/50",
      hasGreenBorder: false,
    },
    {
      id: 2,
      title: "Student-Centric",
      description:
        "Every decision we make puts student success, growth, and career advancement at the center.",
      icon: faHeart,
      iconColor: "text-[#50d523]",
      bgColor: "bg-green-50/50",
      hasGreenBorder: false,
    },
    {
      id: 3,
      title: "Innovation Always",
      description:
        "We continuously evolve our platform, programs, and partnerships to stay ahead of industry needs.",
      icon: faLightbulb,
      iconColor: "text-[#50d523]",
      bgColor: "bg-green-50/50",
      hasGreenBorder: false,
    },
    {
      id: 4,
      title: "Community Impact",
      description:
        "We believe in building an ecosystem that uplifts not just individuals, but entire communities.",
      icon: faEarthAmericas,
      iconColor: "text-[#50d523]",
      bgColor: "bg-green-50/50",
      hasGreenBorder: true,
    },
  ];

  return (
    <section className="w-full bg-white font-sans antialiased text-left py-20 overflow-x-hidden selection:bg-[#50d523]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-24 sm:space-y-32">
        <div className="space-y-12">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Our Core Values
            </h2>
            <p className="text-gray-400 font-medium text-xs sm:text-sm">
              The principles that guide everything we do
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8"
          >
            {values.map((item) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                whileHover={{
                  y: -5,
                  boxShadow: "0 15px 35px -10px rgba(0,0,0,0.04)",
                }}
                className="bg-white rounded-[1.8rem] p-6 sm:p-8 flex flex-col items-start text-left border transition-all duration-300 border-gray-300 shadow-lg shadow-green-500/5 hover:border-[#50d523]"
              >
                <div
                  className={`w-11 h-11 rounded-xl ${item.bgColor} ${item.iconColor} flex items-center justify-center shrink-0 mb-5`}
                >
                  <FontAwesomeIcon icon={item.icon} className="text-lg" />
                </div>
                <h3 className="text-base font-bold text-slate-900 tracking-tight mb-2.5">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-400 font-semibold leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="w-full bg-[#111111] rounded-4xl p-8 sm:p-12 md:p-14 lg:p-16 text-white relative overflow-hidden shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 border border-neutral-800"
        >
          <div className="space-y-6 max-w-2xl z-10 relative w-full text-left">
            <div className="inline-flex items-center gap-2 bg-[#222222] border border-neutral-800 rounded-full py-1 pl-1.5 pr-4">
              <span className="bg-[#50d523] text-white text-[10px] font-bold uppercase px-2.5 py-0.5 rounded-full tracking-wider">
                Trending
              </span>
              <span className="text-[11px] font-bold text-neutral-300 tracking-wide">
                Explore Internship Opportunities
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-white leading-[1.15] tracking-tight">
              Unlock New Opportunities <br />
              With Top-tier Internships.
            </h2>

            <p className="text-neutral-400 text-xs sm:text-sm font-medium tracking-wide">
              Take the first step toward a successful career with Internee.pk.
            </p>

            <div className="flex flex-wrap gap-3.5 pt-2">
              <button
                onClick={() => navigate("/graduate-program")}
                className="cursor-pointer bg-[#50d523] hover:bg-[#41b71d] text-white font-bold px-6 py-3 rounded-full transition-colors duration-200 text-xs sm:text-sm shadow-md"
              >
                Get Started Now
              </button>

              <button
                onClick={() => navigate("/internships")}
                className="flex items-center gap-2 cursor-pointer border border-[#50d523]/40 hover:border-[#50d523] bg-[#111111] text-white font-bold px-6 py-3 rounded-full transition-colors duration-200 text-xs sm:text-sm"
              >
                <FontAwesomeIcon
                  icon={faSearch}
                  className="text-xs text-neutral-400"
                />
                <span>Explore Internships</span>
              </button>
            </div>
          </div>

          <div className="hidden lg:block absolute right-0 top-0 h-full w-1/2 opacity-40 pointer-events-none z-0 select-none">
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-95 h-95 grid grid-cols-2 gap-0 mix-blend-luminosity">
              <div className="w-47.5 h-47.5 bg-[#222222] rounded-l-full" />
              <div className="w-47.5 h-47.5 bg-[#1a1a1a]" />
              <div className="w-47.5 h-47.5 bg-[#181818] rounded-full" />
              <div className="w-47.5 h-47.5 bg-[#2d2d2d] rounded-tr-full" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
