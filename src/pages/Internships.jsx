import InternshipHero from '../components/Internship/InternshipHero';
import CommunityAndBanner from '../components/Internship/CommunityAndBanner';
import HowItWorks from '../components/Internship/HowItWorks';
import InternshipGrid from '../components/Internship/InternshipGrid';

const Internships = () => {
  return (
    <div className="w-full bg-white">
      {/* Internship cards yahan render honge */}
      <InternshipHero />
      <InternshipGrid />
      <HowItWorks />
      <CommunityAndBanner />
    </div>
  );
};

export default Internships;