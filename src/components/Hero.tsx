import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-primary/80 backdrop-blur-sm"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-primary-foreground">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
          12<span className="text-primary-glow">x</span>
        </h1>
        
        <h2 className="text-2xl md:text-4xl font-light mb-8 max-w-4xl mx-auto leading-relaxed">
          Your Trusted Partner in Information Technology for News
        </h2>
        
        <p className="text-lg md:text-xl opacity-90 mb-12 max-w-3xl mx-auto leading-relaxed">
          Are you tired of constantly grappling with outdated technology and systems at your newspaper? 
          Look no further! 12x is here to revolutionize the way you do business.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="hero" size="lg">
            Schedule Consultation
          </Button>
          <Button variant="outline" size="lg" className="bg-primary-foreground/10 text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/20">
            Learn More
          </Button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-primary-foreground/60">
        <div className="animate-bounce">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;