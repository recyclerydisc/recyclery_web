import { EditLink } from '../../components/generic/edit-image-button.tsx';
import CalendarSection from '../../components/home/calendar-section.tsx';
import HeroSection from '../../components/home/hero-section.tsx';
import ProgramsSection from '../../components/home/programs-section.tsx';
import VideoSection from '../../components/home/video-section.tsx';
import { useUser } from '../../hooks/useUser.tsx';

export default function Home() {
  const { isAuthenticated } = useUser();

  return (
    <main>
      <title>The Recyclery</title>
      <HeroSection />
      {isAuthenticated && <EditLink id="1"></EditLink>}
      <ProgramsSection />
      <CalendarSection />
      <VideoSection />
    </main>
  );
}
