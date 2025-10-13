import { HeroButton } from "@/components/ui/hero-button";
import { ArrowDown, Play } from "lucide-react";
import { FloatingOrbs } from "@/components/ui/floating-orbs";
import { FloatingElements } from "@/components/ui/floating-elements";
import flashIcon from "@/assets/flash-icon.png";
export const HeroSection = () => {
  const scrollToPortfolio = () => {
    document.getElementById('portfolio')?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-animated bg-[400%_400%] animate-gradient-shift"></div>
      
      {/* Floating Orbs Background */}
      <FloatingOrbs />
      
      {/* Enhanced Purple Floating Elements */}
      <FloatingElements density="high" />
      
      {/* Purple particles */}
      <div className="absolute inset-0 z-5 pointer-events-none">
        {[...Array(8)].map((_, i) => <div key={i} className="absolute w-1 h-1 bg-primary/60 rounded-full animate-particle-float opacity-60" style={{
        left: `${10 + i * 12}%`,
        top: `${20 + i * 8}%`,
        animationDelay: `${i * 0.8}s`
      }} />)}
      </div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 z-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/8 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="space-y-6">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black mb-6 tracking-tight flex items-center justify-center gap-4 animate-text-fade-up">
            <img src={flashIcon} alt="Flash Icon" className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 hover:scale-110 transition-transform duration-300 cursor-pointer" />
            <span className="text-foreground drop-shadow-lg">
              Flash Edits
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl lg:text-3xl font-light mb-8 text-foreground/90 max-w-4xl mx-auto leading-relaxed animate-text-fade-up" style={{
          animationDelay: '0.2s'
        }}>
            Get high quality talking head edits in{" "}
            <span className="text-golden font-semibold drop-shadow-md">24 hours</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-text-fade-up" style={{
          animationDelay: '0.4s'
        }}>
            <HeroButton variant="primary" size="lg" onClick={() => document.getElementById('contact')?.scrollIntoView({
            behavior: 'smooth'
          })} className="group transition-all duration-300">
              Contact Us
              <Play className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </HeroButton>
            
            <HeroButton variant="secondary" size="lg" onClick={scrollToPortfolio} className="hover:bg-white/5 transition-colors">
              View Portfolio
            </HeroButton>
          </div>

          
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <ArrowDown className="w-6 h-6 text-foreground/70 cursor-pointer hover:text-secondary transition-colors" onClick={scrollToPortfolio} />
      </div>
    </section>;
};