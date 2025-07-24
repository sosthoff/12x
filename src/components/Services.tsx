import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    title: "IT Infrastructure & Network Support",
    description: "Modernize your newspaper's technology backbone with robust infrastructure solutions designed for reliability and scalability.",
    icon: "🌐"
  },
  {
    title: "Cybersecurity & Data Protection",
    description: "Protect your valuable news content and subscriber data with enterprise-grade security solutions and compliance frameworks.",
    icon: "🔒"
  },
  {
    title: "Custom Software Development",
    description: "Tailored digital solutions that streamline your editorial workflow, content management, and publishing processes.",
    icon: "💻"
  },
  {
    title: "Cloud Computing & Storage",
    description: "Scale your operations with secure cloud infrastructure that grows with your newsroom's evolving needs.",
    icon: "☁️"
  },
  {
    title: "Digital Transformation",
    description: "Complete modernization services to help your newspaper thrive in the digital age with cutting-edge technology.",
    icon: "🚀"
  }
];

const Services = () => {
  return (
    <section className="py-24 bg-accent/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our team of expert IT professionals have a deep understanding of the unique needs 
            and challenges of the newspaper industry. We offer tailored solutions that increase 
            efficiency, boost productivity, and drive growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-2 border-0 bg-card/80 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;