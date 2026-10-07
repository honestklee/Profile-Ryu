import ThemeToggle from "@/components/ThemeToggle";
import Navbar from "@/components/Navbar";
import ProfileSection from "@/components/ProfileSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsetSection from "@/components/SkillsetSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <ThemeToggle />
      <ProfileSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsetSection />
      <Footer />
    </main>
  );
}
