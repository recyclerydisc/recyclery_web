import CalendarSection from '../../components/home/calendar-section';
import HeroSection from '../../components/home/hero-section';
import ProgramsSection from '../../components/home/programs-section';
import VideoSection from '../../components/home/video-section';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ProgramsSection />
      <CalendarSection />
      <VideoSection />
    </main>
  );
}
