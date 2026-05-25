import StudentAmbassadorsHero from '../components/StudentAmbassador/StudentAmbassadorsHero';
import AmbassadorBenefits from '../components/StudentAmbassador/AmbassadorBenefits';
import AmbassadorResponsibilities from '../components/StudentAmbassador/AmbassadorResponsibilities';
import CommunityImpactAndSteps from '../components/StudentAmbassador/CommunityImpactAndSteps';
import FaqsAndCtaBanner from '../components/StudentAmbassador/FaqsAndCtaBanner';


const StudentAmbassador = () => {
  return (
    <div className="w-full bg-white">
      <StudentAmbassadorsHero />
      <AmbassadorBenefits />
      <CommunityImpactAndSteps />
      <AmbassadorResponsibilities />
      <FaqsAndCtaBanner />
      
      {/* Agle dynamic sections yahan inject honge */}
    </div>
  );
};

export default StudentAmbassador;