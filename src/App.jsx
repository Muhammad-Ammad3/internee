import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"; // 1. useLocation ko import kiya
import { useEffect } from "react"; 
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";  
import Footer from "./components/Footer"; 
import Home from "./pages/Home";
import Internships from "./pages/Internships";
import GraduatePrograme from "./pages/GraduatePrograme";
import StudentAmbassador from "./pages/StudentAmbassador";
import StartupJourney from "./pages/StartupJourney";
import ResourcesBlogDashboard from "./pages/ResourcesBlogDashboard";
import ResourcesWebiners from "./pages/ResourcesWebiners";
import JobPortal from "./pages/JobPortal";
import GraduateTrackDetail from "./pages/GraduateTrackDetail";
import Agreement from "./pages/Agreement";
import Apply from "./pages/Apply";
import InternshipDetail from "./components/InternshipDetail";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", 
    });
  }, [pathname]);

  return null; 
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      
      <div className="w-full min-h-screen bg-white text-gray-900 antialiased selection:bg-green-100 selection:text-green-700 flex flex-col justify-between">
        
        <Navbar />
        
        <main className="grow pt-2">
          <AnimatePresence mode="wait">
            <Routes>
              <Route 
                path="/" 
                element={
                  <PageWrapper>
                    <Home />
                  </PageWrapper>
                } 
              />
              <Route 
                path="/internships" 
                element={
                  <PageWrapper>
                    <Internships />
                  </PageWrapper>
                } 
              />
              <Route 
                path="/internships/:trackId" 
                element={
                  <PageWrapper>
                    <InternshipDetail />
                  </PageWrapper>
                } 
              />
              <Route 
                path="/graduate-program" 
                element={
                  <PageWrapper>
                    <GraduatePrograme />
                  </PageWrapper>
                } 
              />
              <Route 
                path="/studentambassadors" 
                element={
                  <PageWrapper>
                    <StudentAmbassador />
                  </PageWrapper>
                } 
              />
              <Route 
                path="/startupjourney" 
                element={
                  <PageWrapper>
                    <StartupJourney />
                  </PageWrapper>
                } 
              />
              <Route 
                path="/blog" 
                element={
                  <PageWrapper>
                    <ResourcesBlogDashboard />
                  </PageWrapper>
                } 
              />
              <Route 
                path="/webinars" 
                element={
                  <PageWrapper>
                    <ResourcesWebiners />
                  </PageWrapper>
                } 
              />
              <Route 
                path="/jobportal" 
                element={
                  <PageWrapper>
                    <JobPortal />
                  </PageWrapper>
                } 
              />
              <Route 
                path="/programs/:trackSlug" 
                element={
                  <PageWrapper>
                    <GraduateTrackDetail />
                  </PageWrapper>
                } 
              />
              <Route 
                path="/studentambassadors/agreement" 
                element={
                  <PageWrapper>
                    <Agreement />
                  </PageWrapper>
                } 
              />
              <Route 
                path="/studentambassadors/apply" 
                element={
                  <PageWrapper>
                    <Apply />
                  </PageWrapper>
                } 
              />
            </Routes>
          </AnimatePresence>
        </main>
        
        <Footer />
        
      </div>
    </Router>
  );
}

function PageWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export default App;