import Hero from "@/components/Hero";
import ProblemStatement from "@/components/ProblemStatement";
import Services from "@/components/Services";
import CallToAction from "@/components/CallToAction";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ProblemStatement />
      <Services />
      <CallToAction />
    </div>
  );
};

export default Index;
