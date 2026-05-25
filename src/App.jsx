import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";  
import Footer from "./components/Footer"; 
import Home from "./pages/Home";
import Internships from "./pages/Internships";
import GraduatePrograme from "./pages/GraduatePrograme";
import StudentAmbassador from "./pages/StudentAmbassador";

function App() {
  return (
    <Router>
      <div className="w-full min-h-screen bg-white text-gray-900 antialiased selection:bg-[#3FB628]/20 selection:text-[#3FB628] flex flex-col justify-between">
        
        {/* Navbar screen par har page ke upar constant rahegi */}
        <Navbar />
        
        {/* Dynamic Route Content Selector */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/internships" element={<Internships />} />
            <Route path="/graduate-program" element={<GraduatePrograme />} />
            <Route path="/studentambassadors" element={<StudentAmbassador />} />
            {/* Agle pages ke routes hum yahan mazeed add karte jayenge */}
          </Routes>
        </main>
        
        {/* Footer screen par har page ke niche constant rahega */}
        <Footer />
        
      </div>
    </Router>
  );
}

export default App;