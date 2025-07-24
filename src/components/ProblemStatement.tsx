const ProblemStatement = () => {
  const challenges = [
    "Outdated legacy systems slowing operations",
    "Cybersecurity vulnerabilities exposing sensitive data", 
    "Inefficient workflows reducing productivity",
    "Lack of scalable cloud infrastructure",
    "Poor digital transformation strategies"
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              The Challenges Facing Modern Newsrooms
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Today's newspaper industry faces unprecedented technological challenges. 
              From legacy systems to cybersecurity threats, newsrooms need a trusted 
              partner to navigate the complex digital landscape.
            </p>
            
            <ul className="space-y-4">
              {challenges.map((challenge, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-destructive"></div>
                  </div>
                  <span className="text-foreground">{challenge}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-primary/5 to-primary-glow/5 rounded-3xl p-8 border border-primary/10">
              <div className="text-center">
                <div className="text-6xl mb-6">📰</div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  We Understand Your Industry
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our team specializes exclusively in newspaper technology solutions. 
                  We know the unique challenges you face because we've helped dozens 
                  of publications overcome them.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemStatement;