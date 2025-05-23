import CalendarSection from '../../components/home/calendar-section.tsx';
import HeroSection from '../../components/home/hero-section.tsx';
import ProgramsSection from '../../components/home/programs-section.tsx';
import VideoSection from '../../components/home/video-section.tsx';

export default function Home() {
  return (
    <main>
      <title>The Recyclery</title>
      <HeroSection />
      <ProgramsSection />
      <CalendarSection />
      <VideoSection />
    </main>
  );
}
