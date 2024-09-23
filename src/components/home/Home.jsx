import ClientsSection from "./clientsSection/ClientsSection";
import Community from "./community/Community";
import HeroSection from "./heroSection/HeroSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ClientsSection />
      <Community />
    </div>
  );
}
