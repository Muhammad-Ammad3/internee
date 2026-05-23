import Footer from './components/Footer'; 
import AIInterviews from './components/AIInterviews';
import CareerPath from './components/CareerPath';
import CareerLaunchpad from './components/CareerLaunchpad'; 
import Hero from './components/Hero'; 
import InstructorPortal from './components/InstructorPortal';
import Navbar from './components/Navbar';  
import Partners from './components/Partners'; 
import TaskPlatform from './components/TaskPlatform'; 
import Workflow from './components/Workflow'; 
import InternshipOpportunities from './components/InternshipOpportunities'; 
import LaunchCareer from './components/LaunchCareer'; 

function App() {
  return (
    <div className="w-full min-h-screen bg-white text-gray-900 antialiased selection:bg-[#3FB628]/20 selection:text-[#3FB628]">
      <Navbar />
      
      <main>
        <Hero />
        <Partners />
        <InternshipOpportunities />
        <TaskPlatform />
        <InstructorPortal />
        <CareerLaunchpad />
        <AIInterviews />
        <Workflow />
        <CareerPath />
        <LaunchCareer />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;