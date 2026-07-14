import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Process from "@/components/Process";
import TechStack from "@/components/TechStack";
import Pricing from "@/components/Pricing";
import Story from "@/components/Story";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Process />
      <TechStack />
      <Pricing />
      <Story />
    </main>
  );
}