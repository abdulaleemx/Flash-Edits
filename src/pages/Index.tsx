import { HeroSection } from "@/components/sections/HeroSection";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { WorkflowSection } from "@/components/sections/WorkflowSection";
import { ContactSection } from "@/components/sections/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <PortfolioSection />
      <WorkflowSection />
      <ContactSection />
    </div>
  );
};

export default Index;
