import HeroSection from '../../../components/support-us/donate-time/hero-section';
import VolunteerMission from '../../../components/support-us/donate-time/volunteer-mission';
import Roles from '../../../components/support-us/donate-time/roles';
import headerImage from '../../../assets/images/support-us/donate-time/donate-time-header.jpg';
import volunteerFun from '../../../assets/images/support-us/donate-time/volunteer-fun.jpg';

function DonateTime() {
  return (
    <>
      <title>Become a Volunteer - The Recyclery</title>
      <HeroSection image={headerImage} />
      <VolunteerMission image={volunteerFun} />
      <Roles />
    </>
  );
}

export default DonateTime;
