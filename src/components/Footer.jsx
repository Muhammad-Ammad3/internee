import { useState } from "react";
import { motion } from "framer-motion";
import footerLogo from "../assets/footerLogo.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faEnvelope,
  faPhone,
  faArrowRight,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";

import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => setIsSubscribed(false), 3000);
      setEmail("");
    }
  };

  const socialLinks = [
    {
      icon: faFacebookF,
      label: "Facebook",
      href: "https://www.facebook.com/internee.pk/",
    },
    { icon: faTwitter, label: "Twitter", href: "https://x.com/interneepk" },
    {
      icon: faLinkedinIn,
      label: "LinkedIn",
      href: "https://www.linkedin.com/checkpoint/challengesV3/AQGxHRB584m5dwAAAZ5uyhvEPE-UsSUbLHiTcpFAFt6TV3iXgPe9BTIHcEAar9nrP-IDESmEV5l55VP1rZ2lBzityqgAmg",
    },
    {
      icon: faInstagram,
      label: "Instagram",
      href: "https://www.instagram.com/internee.pk/",
    },
  ];

  const companyLinks = [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "Student Ambassador", href: "/studentambassadors" },
    { label: "Interns Profiles", href: "/interns" },
    { label: "About Us", href: "/about" },
  ];

  const resourceLinks = [
    { label: "Community", href: "/community" },
    { label: "Certification", href: "/certification" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <footer className="w-full bg-[#0a0a0a] text-neutral-400 font-sans pt-16 lg:pt-12 pb-6 px-6 lg:px-12 border-t border-neutral-800/50">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="max-w-7xl mx-auto space-y-12 lg:space-y-10"
      >
        <motion.div
          variants={itemVariants}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-10 lg:pb-8 border-b border-neutral-800/60"
        >
          <div className="space-y-2 max-w-md">
            <h3 className="text-xl lg:text-2xl font-medium tracking-tight text-white">
              Subscribe to Newsletter
            </h3>
            <p className="text-sm text-neutral-500 font-medium leading-relaxed">
              Subscribe to our newsletter and get exclusive insights, industry
              trends.
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="w-full lg:max-w-md">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-linear-to-r from-[#43A047] to-[#388E3C] rounded-full opacity-0 group-focus-within:opacity-30 transition-opacity duration-300" />
              <div className="relative bg-white backdrop-blur-sm border border-neutral-800 p-1.5 rounded-full flex items-center">
                <div className="flex items-center gap-2.5 pl-4 text-neutral-500 w-full">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="text-neutral-400"
                  />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="bg-transparent text-sm text-black placeholder-neutral-400 focus:outline-none w-full font-medium"
                    required
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubscribed}
                  className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold transition-all shrink-0 ${
                    isSubscribed
                      ? "bg-green-500 text-white"
                      : "bg-linear-to-r from-[#50d523] to-[#50d523] text-white shadow-lg shadow-green-500/25 hover:shadow-green-500/40"
                  }`}
                >
                  {isSubscribed ? (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="text-xs font-black"
                    >
                      Subscribed!
                    </motion.div>
                  ) : (
                    <>
                      <span>Subscribe</span>
                      <FontAwesomeIcon
                        icon={faPaperPlane}
                        className="text-[10px]"
                      />
                    </>
                  )}
                </motion.button>
              </div>
            </div>
          </form>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 pt-2 lg:pt-0">
          <motion.div
            variants={itemVariants}
            className="lg:col-span-5 space-y-6 lg:space-y-4"
          >
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-12 h-12 bg-linear-to-br rounded-xl flex items-center justify-center">
                  <img src={footerLogo} alt="" />
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full shadow-sm" />
              </div>
              <div className="leading-none">
                <span className="text-2xl font-bold text-white tracking-tight block">
                  Internee<span className="text-[#50d523]">.pk</span>
                </span>
                <span className="text-[9px] uppercase tracking-widest text-neutral-500 font-bold block mt-1">
                  Virtual Internship Platform
                </span>
              </div>
            </div>

            <p className="text-neutral-500 text-sm font-medium leading-relaxed max-w-sm">
              The ultimate platform designed to turbocharge the IT sector in
              Pakistan by connecting talented students with industry-leading
              opportunities.
            </p>

            <div className="flex items-center gap-3 text-sm font-medium text-neutral-300">
              <div className="p-2 bg-red-500/10 rounded-lg flex items-center justify-center w-8 h-8">
                <FontAwesomeIcon icon={faPhone} className="text-red-400" />
              </div>
              <span>+92 312 3023645</span>
            </div>

            <div className="flex items-center gap-3 pt-1">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full bg-[#50d523] border border-neutral-800 flex items-center justify-center hover:bg-[#50d523] hover:border-[#50d523] group transition-all duration-200"
                  aria-label={social.label}
                >
                  <FontAwesomeIcon
                    icon={social.icon}
                    className="text-white group-hover:text-white transition-colors text-sm"
                  />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="lg:col-span-7 lg:ml-72 grid grid-cols-2 sm:grid-cols-3 gap-8 lg:gap-6"
          >
            <div className="space-y-4 lg:space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-widest text-white">
                Company
              </h4>
              <ul className="space-y-2.5 text-sm font-medium text-neutral-500">
                {companyLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="group flex items-center gap-2 hover:text-white transition-colors"
                    >
                      <span>{link.label}</span>
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="text-[10px] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4 lg:space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-widest text-white">
                Resources
              </h4>
              <ul className="space-y-2.5 text-sm font-medium text-neutral-500">
                {resourceLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="group flex items-center gap-2 hover:text-white transition-colors"
                    >
                      <span>{link.label}</span>
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="text-[10px] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          className="pt-6 border-t border-neutral-800/50 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-bold text-neutral-600"
        >
          <p>© 2026 internee.pk — All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a
              href="#terms"
              className="hover:text-neutral-400 transition-colors"
            >
              Terms of Use
            </a>
            <a
              href="#privacy"
              className="hover:text-neutral-400 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#cookies"
              className="hover:text-neutral-400 transition-colors"
            >
              Cookie Policy
            </a>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
