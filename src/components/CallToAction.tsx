import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-primary to-primary-glow relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255,255,255,0.2) 1px, transparent 1px),
                           radial-gradient(circle at 80% 50%, rgba(255,255,255,0.2) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-primary-foreground">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Transform Your Newsroom?
        </h2>
        
        <p className="text-xl opacity-90 mb-8 leading-relaxed">
          With 12x, you can rest assured that your IT needs are in good hands. Our commitment 
          to excellence and our track record of delivering results speak for themselves. 
          Let us help you take your newspaper to the next level.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="hero" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
            Contact Us Today
          </Button>
          <Button variant="outline" className="bg-transparent text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/10">
            View Case Studies
          </Button>
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold mb-2">50+</div>
            <div className="text-primary-foreground/80">Newspapers Served</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-2">99.9%</div>
            <div className="text-primary-foreground/80">Uptime Guarantee</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-2">24/7</div>
            <div className="text-primary-foreground/80">Expert Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;