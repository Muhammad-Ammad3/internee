import { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
  animate,
  useInView,
} from "framer-motion";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faUsers,
  faStar,
  faArrowRight,
  faBriefcase,
  faMagnifyingGlass,
  faGraduationCap,
  faHandSparkles,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const Counter = ({ value, suffix }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) => Math.round(latest));
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(motionValue, value, {
        duration: 2, // Animation duration (seconds)
        ease: "easeOut",
      });
      return controls.stop;
    }
  }, [motionValue, value, isInView]);

  return (
    <span ref={ref}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
};

const LaunchCareer = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: "Mohammad Rafiq",
      location: "Larkana, Pakistan",
      text: "I find internee.pk to be an outstanding to get hands on experience. Sometimes you have to spend to make lot of projects.",
      avatar:
        "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=150&auto=format&fit=crop",
    },
    {
      name: "Kashan Soomro",
      location: "Karachi, Pakistan",
      text: "Thanks to internee.pk, I grew up my skills here and now I am working as a Flutter Developer in a US company.",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop",
    },
    {
      name: "Ali Raza",
      location: "Islamabad, Pakistan",
      text: "I built my confidence and technical skills through this platform. Highly recommended!",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const metrics = [
    {
      targetValue: 20,
      suffix: "+",
      label: "Expert-Led Internships",
      icon: faBriefcase,
    },
    {
      targetValue: 1500,
      suffix: "+",
      label: "Successful Graduates",
      icon: faGraduationCap,
    },
    {
      targetValue: 120,
      suffix: "k+",
      label: "LinkedIn Followers",
      icon: faLinkedinIn,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="w-full bg-white py-20 lg:py-28 px-6 lg:px-12 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
        >
          <motion.div
            variants={itemVariants}
            className="lg:col-span-7 space-y-7"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-green-50 border border-green-100 rounded-full px-4 py-1.5"
            >
              <FontAwesomeIcon
                icon={faUsers}
                className="text-xs text-[#50d523]"
              />
              <span className="text-xs font-bold tracking-wider text-gray-600">
                Trusted By Thousands
              </span>
            </motion.div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight leading-tight">
              Join Thousands of{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#50d523] to-[#50d523]">
                Achievers
              </span>
              <br />
              Connect, Learn, Succeed.
            </h2>

            <motion.div
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="pt-2"
            >
              <Link to="/internships">
              <button className="flex items-center gap-2 bg-linear-to-r from-[#50d523] to-[#50d523] text-white px-6 py-3.5 rounded-full text-sm font-bold shadow-lg shadow-green-500/25 hover:shadow-green-500/40 transition-all">
                <span>Join Our Community</span>
                <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
              </button>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="lg:col-span-5 w-full flex flex-col items-center lg:items-start space-y-5"
          >
            <div className="bg-white border border-gray-100 rounded-3xl p-7 shadow-xl shadow-gray-100/50 w-full max-w-lg min-h-45 flex flex-col justify-between transition-all duration-300">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonials[currentSlide].avatar}
                      alt={testimonials[currentSlide].name}
                      className="w-14 h-14 rounded-2xl object-cover shadow-lg border border-gray-100"
                    />
                    <div className="space-y-1">
                      <h4 className="text-base font-bold text-gray-900">
                        {testimonials[currentSlide].name}
                      </h4>
                      <p className="text-xs font-medium text-gray-400">
                        {testimonials[currentSlide].location}
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm font-medium leading-relaxed italic">
                    "{testimonials[currentSlide].text}"
                  </p>

                  <div className="flex items-center gap-0.5 pt-1">
                    {[...Array(5)].map((_, i) => (
                      <FontAwesomeIcon
                        key={i}
                        icon={faStar}
                        className="text-xs text-[#50d523]"
                      />
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex items-center gap-2">
              {testimonials.map((_, idx) => (
                <motion.button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentSlide === idx
                      ? "w-8 bg-[#50d523]"
                      : "w-2 bg-gray-200 hover:bg-gray-300"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full bg-[#0a0a0a] rounded-3xl p-8 sm:p-12 lg:p-16 text-white relative overflow-hidden border border-gray-800 shadow-2xl"
        >
          <div className="absolute top-0 right-0 w-72 h-72 bg-[#50d523]/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#50d523]/5 rounded-full blur-[80px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-8 space-y-6"
            >
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5"
              >
                <div className="w-2 h-2 bg-[#50d523] rounded-full animate-pulse" />
                <span className="text-xs font-bold text-gray-400 tracking-wider">
                  Trending · Explore Internship Opportunities
                </span>
              </motion.div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight">
                Unlock New Opportunities{" "}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-[#50d523] to-[#50d523]">
                  With Top-tier Internships
                </span>
                .
              </h3>

              <p className="text-gray-400 text-sm font-medium max-w-md">
                Take the first step toward a successful career with internee.pk.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link to="/graduate-program">
                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center cursor-pointer gap-2 bg-linear-to-r from-[#50d523] to-[#50d523] text-white px-6 py-3.5 rounded-xl text-sm font-bold shadow-lg shadow-green-500/25 hover:shadow-green-500/40 transition-all"
                >
                  <span>Get Started Now</span>
                  <FontAwesomeIcon icon={faHandSparkles} className="text-xs" />
                </motion.button>
                </Link>
                <Link to="internships">
                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center cursor-pointer gap-2 bg-transparent text-white border border-gray-700 px-5 py-3.5 rounded-xl text-sm font-bold hover:bg-white/5 hover:border-gray-600 transition-all"
                >
                  <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    className="text-xs"
                  />
                  <span>Explore Internships</span>
                </motion.button>
                </Link>
              </div>
            </motion.div>

            <div className="lg:col-span-4 hidden lg:flex justify-end opacity-20 select-none pointer-events-none">
              <div className="w-64 h-64 grid grid-cols-2 gap-4 transform rotate-6">
                <div className="border-[5px] border-neutral-400 rounded-full" />
                <div className="bg-neutral-600 rounded-3xl" />
                <div className="bg-neutral-600 rounded-tl-[90px]" />
                <div className="border-[5px] border-neutral-400 rounded-2xl" />
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8 max-w-5xl mx-auto text-center"
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.03, y: -4 }}
              className="space-y-3 sm:border-r sm:border-gray-100 last:border-0 py-4"
            >
              <div className="w-12 h-12 mx-auto bg-green-50 rounded-xl flex items-center justify-center mb-3">
                <FontAwesomeIcon
                  icon={metric.icon}
                  className="text-lg text-[#50d523]"
                />
              </div>
              <h4 className="text-4xl lg:text-5xl font-black text-gray-900 tracking-tight">
                <Counter value={metric.targetValue} suffix={metric.suffix} />
              </h4>
              <p className="text-xs font-bold text-gray-400 tracking-wider uppercase">
                {metric.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LaunchCareer;
