// import React from "react";

// const Footer = () => {
//   return (
//     <footer className="w-full bg-[#121212] text-neutral-400 font-sans pt-16 pb-8 px-6 lg:px-16 border-t border-neutral-900">
//       <div className="max-w-screen-2xl mx-auto space-y-12">
        
//         {/* ================= TOP SECTION: NEWSLETTER BANNER ================= */}
//         <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-12 border-b border-neutral-800/60">
//           <div className="space-y-1.5">
//             <h3 className="text-xl font-black tracking-tight text-white">
//               Subscribe to Newsletter
//             </h3>
//             <p className="text-xs sm:text-sm text-neutral-500 font-semibold">
//               Subscribe to our newsletter and get exclusive insights, industry trends.
//             </p>
//           </div>

//           {/* Interactive Form Action Field */}
//           <div className="w-full md:max-w-md bg-neutral-900 border border-neutral-800 p-1.5 rounded-full flex items-center justify-between focus-within:border-neutral-700 transition-all">
//             <input
//               type="email"
//               placeholder="Enter your email"
//               className="bg-transparent pl-4 pr-2 py-2 text-xs sm:text-sm text-white placeholder-neutral-600 focus:outline-none w-full font-medium"
//             />
//             <button className="bg-[#3FB628] hover:bg-[#349e1e] text-white text-xs font-black px-6 py-3 rounded-full transition-all shrink-0 tracking-wide">
//               Subscribe
//             </button>
//           </div>
//         </div>

//         {/* ================= MIDDLE SECTION: BRAND DETAILS & LINK MATRICES ================= */}
//         <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pt-4">
          
//           {/* Brand Presentation Identity column */}
//           <div className="md:col-span-5 space-y-6">
//             <div className="flex items-center gap-2">
//               {/* Mortarboard Grad Cap Logo Icon */}
//               <div className="text-white">
//                 <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
//                   <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3z" />
//                   <path d="M19 13.83v2.34l-7 3.83-7-3.83v-2.34l7 3.83 7-3.83z" />
//                 </svg>
//               </div>
//               <div className="leading-none">
//                 <span className="text-xl font-black text-white tracking-tight block">
//                   Internee<span className="text-[#3FB628]">.pk</span>
//                 </span>
//                 <span className="text-[9px] uppercase tracking-widest text-neutral-500 font-bold block mt-0.5">
//                   Virtual Internship Platform
//                 </span>
//               </div>
//             </div>

//             <p className="text-neutral-500 text-xs sm:text-[13px] font-semibold leading-relaxed max-w-sm">
//               The ultimate platform designed to turbocharge the IT sector in Pakistan.
//             </p>

//             {/* Direct Dial Telephone Hotline */}
//             <div className="flex items-center gap-2.5 text-xs font-bold text-neutral-300">
//               <svg className="w-4 h-4 text-[#3FB628] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.72.55.55 0 00.1.24l1.5 3.5a1 1 0 01-.25 1.2l-1.85 1.5a10.55 10.55 0 005.45 5.45l1.5-1.85a1 1 0 011.2-.25l3.5 1.5a1 1 0 01.72.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
//               </svg>
//               <span>+92 312 3023645</span>
//             </div>

//             {/* Brand Circle Social Handles Row */}
//             <div className="flex items-center gap-3 pt-1">
//               {['facebook', 'twitter', 'linkedin', 'instagram'].map((platform, index) => (
//                 <a 
//                   key={index}
//                   href={`#${platform}`}
//                   className="w-8 h-8 rounded-full bg-neutral-900 border border-neutral-800/80 flex items-center justify-center hover:bg-[#3FB628] hover:border-[#3FB628] group transition-all duration-200"
//                 >
//                   <span className="text-neutral-400 group-hover:text-white text-xs font-bold uppercase tracking-tighter scale-[0.85]">
//                     {platform[0]}
//                   </span>
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* Right Links Navigation Layout Columns Grid */}
//           <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            
//             {/* Company Link Bucket */}
//             <div className="space-y-4">
//               <h4 className="text-xs font-black uppercase tracking-widest text-white">
//                 Company
//               </h4>
//               <ul className="space-y-2.5 text-xs font-semibold text-neutral-500">
//                 {["Home", "Blog", "Student Ambassador", "Interns Profiles", "About Us"].map((link) => (
//                   <li key={link}>
//                     <a href={`#${link.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-white transition">
//                       {link}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* Resources Link Bucket */}
//             <div className="space-y-4">
//               <h4 className="text-xs font-black uppercase tracking-widest text-white">
//                 Resources
//               </h4>
//               <ul className="space-y-2.5 text-xs font-semibold text-neutral-500">
//                 {["Community", "Certification"].map((link) => (
//                   <li key={link}>
//                     <a href={`#${link.toLowerCase()}`} className="hover:text-white transition">
//                       {link}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//           </div>
//         </div>

//         {/* ================= BOTTOM SECTION: LEGAL & COPYRIGHT ROW ================= */}
//         <div className="pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-bold text-neutral-600">
//           <p>
//             Copyright © 2025 internee.pk
//           </p>
//           <div className="flex items-center gap-6">
//             <a href="#terms" className="hover:text-neutral-400 transition">Terms of Use</a>
//             <a href="#privacy" className="hover:text-neutral-400 transition">Privacy Policy</a>
//           </div>
//         </div>

//       </div>
//     </footer>
//   );
// };

// export default Footer;




import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  GraduationCap, 
  Mail, 
  Phone, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  ArrowRight,
  Send
} from "lucide-react";

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
    { icon: Facebook, label: "Facebook", href: "#facebook" },
    { icon: Twitter, label: "Twitter", href: "#twitter" },
    { icon: Linkedin, label: "LinkedIn", href: "#linkedin" },
    { icon: Instagram, label: "Instagram", href: "#instagram" },
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

  // Footer fade-in animation variants
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
    <footer className="w-full bg-[#0a0a0a] text-neutral-400 font-sans pt-20 pb-8 px-6 lg:px-12 border-t border-neutral-800/50">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="max-w-7xl mx-auto space-y-16"
      >
        {/* ================= TOP SECTION: NEWSLETTER BANNER ================= */}
        <motion.div variants={itemVariants} className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-12 border-b border-neutral-800/60">
          <div className="space-y-3 max-w-md">
            <h3 className="text-2xl lg:text-3xl font-black tracking-tight text-white">
              Stay in the Loop
            </h3>
            <p className="text-sm text-neutral-500 font-medium leading-relaxed">
              Subscribe to our newsletter for exclusive insights, industry trends, and internship opportunities.
            </p>
          </div>

          {/* Interactive Newsletter Form */}
          <form onSubmit={handleSubscribe} className="w-full lg:max-w-md">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#43A047] to-[#388E3C] rounded-full opacity-0 group-focus-within:opacity-30 transition-opacity duration-300" />
              <div className="relative bg-neutral-900/80 backdrop-blur-sm border border-neutral-800 p-1.5 rounded-full flex items-center">
                <div className="flex items-center gap-2 pl-4 text-neutral-500">
                  <Mail className="w-4 h-4" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="bg-transparent text-sm text-white placeholder-neutral-600 focus:outline-none w-full font-medium"
                    required
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubscribed}
                  className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold transition-all ${
                    isSubscribed
                      ? "bg-green-500 text-white"
                      : "bg-gradient-to-r from-[#43A047] to-[#388E3C] text-white shadow-lg shadow-green-500/25 hover:shadow-green-500/40"
                  }`}
                >
                  {isSubscribed ? (
                    <>
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="text-xs font-black"
                      >
                        Subscribed!
                      </motion.div>
                    </>
                  ) : (
                    <>
                      <span>Subscribe</span>
                      <Send className="w-3 h-3" />
                    </>
                  )}
                </motion.button>
              </div>
            </div>
          </form>
        </motion.div>

        {/* ================= MIDDLE SECTION: BRAND DETAILS & LINK MATRICES ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-4">
          {/* Brand Presentation Column */}
          <motion.div variants={itemVariants} className="lg:col-span-5 space-y-8">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-[#43A047] to-[#388E3C] rounded-xl flex items-center justify-center shadow-lg shadow-green-500/20">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full shadow-sm" />
              </div>
              <div className="leading-none">
                <span className="text-2xl font-black text-white tracking-tight block">
                  Internee<span className="text-[#43A047]">.pk</span>
                </span>
                <span className="text-[9px] uppercase tracking-widest text-neutral-500 font-bold block mt-1">
                  Virtual Internship Platform
                </span>
              </div>
            </div>

            <p className="text-neutral-500 text-sm font-medium leading-relaxed max-w-sm">
              The ultimate platform designed to turbocharge the IT sector in Pakistan by connecting talented students with industry-leading opportunities.
            </p>

            {/* Contact Information */}
            <div className="flex items-center gap-3 text-sm font-medium text-neutral-300">
              <div className="p-2 bg-green-500/10 rounded-lg">
                <Phone className="w-4 h-4 text-[#43A047]" />
              </div>
              <span>+92 312 3023645</span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center hover:bg-[#43A047] hover:border-[#43A047] group transition-all duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4 text-neutral-400 group-hover:text-white transition-colors" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links Grid */}
          <motion.div variants={itemVariants} className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 lg:gap-12">
            {/* Company Links */}
            <div className="space-y-5">
              <h4 className="text-xs font-black uppercase tracking-widest text-white">
                Company
              </h4>
              <ul className="space-y-3 text-sm font-medium text-neutral-500">
                {companyLinks.map((link) => (
                  <li key={link.label}>
                    <a 
                      href={link.href} 
                      className="group flex items-center gap-2 hover:text-white transition-colors"
                    >
                      <span>{link.label}</span>
                      <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Links */}
            <div className="space-y-5">
              <h4 className="text-xs font-black uppercase tracking-widest text-white">
                Resources
              </h4>
              <ul className="space-y-3 text-sm font-medium text-neutral-500">
                {resourceLinks.map((link) => (
                  <li key={link.label}>
                    <a 
                      href={link.href} 
                      className="group flex items-center gap-2 hover:text-white transition-colors"
                    >
                      <span>{link.label}</span>
                      <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div className="space-y-5">
              <h4 className="text-xs font-black uppercase tracking-widest text-white">
                Support
              </h4>
              <ul className="space-y-3 text-sm font-medium text-neutral-500">
                <li>
                  <a href="#contact" className="hover:text-white transition-colors">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-white transition-colors">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* ================= BOTTOM SECTION: LEGAL & COPYRIGHT ================= */}
        <motion.div variants={itemVariants} className="pt-8 border-t border-neutral-800/50 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-bold text-neutral-600">
          <p>
            © 2025 internee.pk — All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#terms" className="hover:text-neutral-400 transition-colors">Terms of Use</a>
            <a href="#privacy" className="hover:text-neutral-400 transition-colors">Privacy Policy</a>
            <a href="#cookies" className="hover:text-neutral-400 transition-colors">Cookie Policy</a>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;