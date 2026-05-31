import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
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
import Community from "./pages/Community";
import Digital from "./pages/Digital";
import About from "./pages/about";
import InternshipDetail from "./components/InternshipDetail";
import UserDashboard from "./pages/UserDashboard";

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

function AppContent() {
  const location = useLocation();

  const isDashboardRoute = location.pathname === "/dashboard";

  return (
    <div className="w-full min-h-screen bg-white text-gray-900 antialiased selection:bg-green-100 selection:text-green-700 flex flex-col justify-between">
      {!isDashboardRoute && <Navbar />}

      <main className={`grow ${isDashboardRoute ? "pt-0" : "pt-2"}`}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <PageWrapper>
                  <Home />
                </PageWrapper>
              }
            />
            <Route
              path="/dashboard"
              element={
                <PageWrapper>
                  <UserDashboard />
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
            <Route
              path="/studentambassadors/community"
              element={
                <PageWrapper>
                  <Community />
                </PageWrapper>
              }
            />
            <Route
              path="/webinars/digital"
              element={
                <PageWrapper>
                  <Digital />
                </PageWrapper>
              }
            />
            <Route
              path="/about"
              element={
                <PageWrapper>
                  <About />
                </PageWrapper>
              }
            />
          </Routes>
        </AnimatePresence>
      </main>

      {!isDashboardRoute && <Footer />}
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppContent />
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
