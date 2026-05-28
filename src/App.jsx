
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import InternshipDetail from "./components/InternshipDetail";

function App() {
  return (
    <Router>
      <div className="w-full min-h-screen bg-white text-gray-900 antialiased selection:bg-green-100 selection:text-green-700 flex flex-col justify-between">
        
        {/* Navbar - fixed at top */}
        <Navbar />
        
        {/* Dynamic Route Content with Smooth Transitions */}
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
              <Route path="/internships/:trackId" element={<InternshipDetail />} />
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
              {/* Additional routes can be added here */}
            </Routes>
          </AnimatePresence>
        </main>
        
        {/* Footer - fixed at bottom */}
        <Footer />
        
      </div>
    </Router>
  );
}

// Page wrapper component for smooth transitions
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