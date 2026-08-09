import Hero from "@/components/sections/Hero";
import Marquee from "@/components/ui/Marquee";
import CurrentlyBuilding from "@/components/sections/CurrentlyBuilding";
import Metrics from "@/components/sections/Metrics";
import ProfessionalPhilosophy from "@/components/sections/ProfessionalPhilosophy";
import Skills from "@/components/sections/Skills";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      <Marquee />
      <CurrentlyBuilding />
      <Metrics />
      <Skills />
      <ProfessionalPhilosophy />
    </main>
  );
}
