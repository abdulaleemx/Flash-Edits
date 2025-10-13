import { Mail, CheckCircle, Instagram, Twitter } from "lucide-react";
import { FloatingElements } from "@/components/ui/floating-elements";
export const ContactSection = () => {
  const benefits = [
    "24-hour delivery guarantee",
    "Multiple revisions included",
    "Custom brand color grading",
    "Professional motion graphics",
    "Multi-format delivery",
  ];
  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-glow" />
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-primary/15 rounded-full blur-3xl animate-glow delay-1000" />
      </div>

      {/* Purple Floating Elements */}
      <FloatingElements density="medium" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <div className="animate-fade-in-up">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Ready to <span className="text-slate-50">Transform</span> Your
              Content?
            </h2>
            <p className="text-xl text-foreground/90 mb-8 leading-relaxed">
              Join hundreds of creators and businesses who trust Flash Edits to
              elevate their video content. Get professional talking head edits
              that engage your audience and drive results.
            </p>

            {/* Benefits */}
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 animate-fade-in"
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center p-4 bg-card/30 backdrop-blur-sm rounded-xl border border-accent/20">
                <div className="text-2xl font-bold text-white">24h</div>
                <div className="text-sm text-foreground/80">Delivery</div>
              </div>
              <div className="text-center p-4 bg-card/30 backdrop-blur-sm rounded-xl border border-accent/20">
                <div className="text-2xl font-bold text-white">500+</div>
                <div className="text-sm text-foreground/80">Videos Edited</div>
              </div>
              <div className="text-center p-4 bg-card/30 backdrop-blur-sm rounded-xl border border-accent/20">
                <div className="text-2xl font-bold text-white">95%</div>
                <div className="text-sm text-foreground/80">Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Contact Card */}
          <div
            className="animate-fade-in-up"
            style={{
              animationDelay: "200ms",
            }}
          >
            <div className="bg-card/40 backdrop-blur-lg rounded-3xl border border-accent/30 p-8 shadow-elegant">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Get In Touch</h3>
                <p className="text-foreground/90">
                  Ready to elevate your content? Let's discuss your project
                </p>
              </div>

              {/* Social Links */}
              <div className="space-y-4">
                <a
                  href="mailto:contact@flashedits.agency"
                  className="flex items-center gap-4 p-4 bg-muted/20 rounded-xl hover:bg-muted/30 transition-colors group"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Email</div>
                    <div className="text-foreground/90 bg-transparent">
                      contact@flashedits.agency
                    </div>
                  </div>
                </a>

                <a
                  href="https://instagram.com/flashedits.agency"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-muted/20 rounded-xl hover:bg-muted/30 transition-colors group"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Instagram className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Instagram</div>
                    <div className="text-foreground/90">@flashedits.agency</div>
                  </div>
                </a>

                <a
                  href="https://twitter.com/flash_edlts"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-muted/20 rounded-xl hover:bg-muted/30 transition-colors group"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Twitter className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Twitter</div>
                    <div className="text-foreground/90">@flash_edlts</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
