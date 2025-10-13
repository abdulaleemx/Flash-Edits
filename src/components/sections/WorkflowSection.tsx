import { Search, Lightbulb, Zap, CheckCircle } from "lucide-react";
import { FloatingElements } from "@/components/ui/floating-elements";

const workflowSteps = [
  {
    icon: Search,
    title: "Discovery",
    description: "We start by getting to know you. What's your brand about? Who's your audience? What's your content goal? Whether you're a creator looking to up your game or a brand needing engaging social content, we customize our approach according to you."
  },
  {
    icon: Lightbulb,
    title: "Strategy & Planning - The Foundation",
    description: "Based on our call, we map out a game plan. This includes:",
    features: [
      "Attractive Hook",
      "Brand Colour Grading", 
      "Video editing style preferences",
      "Animation Placements"
    ]
  },
  {
    icon: Zap,
    title: "Execution",
    description: "This is where the magic happens. Our team gets to work:",
    features: [
      "High-quality video editing to match your brand aesthetic",
      "Custom Hooks that boost click-through rates",
      "Eye catching Animations for retention"
    ]
  },
  {
    icon: CheckCircle,
    title: "Review And Delivery",
    description: "We don't just deliver videos—we deliver growth. You'll receive your content for review, and we'll tweak it based on your feedback. Once everything is finalized, we deliver the content in your preferred format."
  }
];

export const WorkflowSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-subtle opacity-50" />
      
      {/* Purple Floating Elements */}
      <FloatingElements density="low" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-foreground">
            The <span className="text-primary">Process</span>
          </h2>
          <p className="text-xl text-foreground/90 max-w-3xl mx-auto leading-relaxed">
            From discovery to delivery, we follow a proven workflow that ensures your content not only looks amazing but drives results
          </p>
        </div>

        {/* Workflow Steps with Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Connecting Line - goes through icon centers */}
          <div className="absolute left-8 top-8 bottom-8 w-1 bg-primary/40 hidden sm:block" />
          
          <div className="space-y-16">
            {workflowSteps.map((step, index) => (
              <div
                key={step.title}
                className="group animate-fade-in-up relative"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex flex-col sm:flex-row items-start gap-8">
                  {/* Icon Container */}
                  <div className="flex-shrink-0 relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 backdrop-blur-sm border border-primary/30 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:shadow-glow group-hover:bg-gradient-to-br group-hover:from-primary/30 group-hover:to-primary/20 transition-all duration-500 relative z-10">
                      <step.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    {/* Step Title */}
                    <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-foreground">
                      <span className="text-primary">{step.title.split(' ')[0]}</span>
                      {step.title.includes(' ') && <span> {step.title.substring(step.title.indexOf(' ') + 1)}</span>}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-lg text-foreground/85 leading-relaxed mb-6">
                      {step.description}
                    </p>
                    
                    {/* Features List */}
                    {step.features && (
                      <div className="space-y-3">
                        {step.features.map((feature, featureIndex) => (
                          <div 
                            key={featureIndex}
                            className="flex items-start gap-3"
                          >
                            <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0 mt-2.5" />
                            <span className="text-foreground font-medium">{feature}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-20 animate-fade-in-up" style={{ animationDelay: "800ms" }}>
          <div className="bg-card/30 backdrop-blur-sm rounded-2xl border border-accent/20 p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to get started?</h3>
            <p className="text-foreground/90 mb-6">
              Let's discuss your video editing needs and create content that drives results
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-primary to-secondary text-primary-foreground px-8 py-4 rounded-xl font-semibold hover:scale-105 hover:shadow-glow transition-all duration-300"
            >
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};