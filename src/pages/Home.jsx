import AIInterviews from '../components/Home/AIInterviews';
import CareerPath from '../components/Home/CareerPath';
import CareerLaunchpad from '../components/Home/CareerLaunchpad'; 
import Hero from '../components/Home/Hero'; 
import InstructorPortal from '../components/Home/InstructorPortal';
import Partners from '../components/Home/Partners'; 
import TaskPlatform from '../components/Home/TaskPlatform'; 
import Workflow from '../components/Home/Workflow'; 
import InternshipOpportunities from '../components/Home/InternshipOpportunities'; 
import LaunchCareer from '../components/Home/LaunchCareer'; 

function App() {
  return (
    <div className="w-full min-h-screen bg-white text-gray-900 antialiased selection:bg-[#3FB628]/20 selection:text-[#3FB628]">
      
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
      
    </div>
  );
}

export default App;