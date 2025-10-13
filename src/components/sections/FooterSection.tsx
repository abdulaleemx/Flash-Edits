import { Mail, Clock, Star } from "lucide-react";

export const FooterSection = () => {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-accent/20 bg-card/20 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Flash Edits
            </h3>
            <p className="text-muted-foreground mb-4">
              Professional video editing agency specializing in high-quality talking head edits delivered in 24 hours.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <Star className="w-4 h-4 text-secondary fill-current" />
              <span className="text-muted-foreground">Trusted by 500+ creators</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Services</h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li className="hover:text-secondary transition-colors cursor-pointer">Shortform Video Editing</li>
              <li className="hover:text-secondary transition-colors cursor-pointer">Longform Video Editing</li>
              <li className="hover:text-secondary transition-colors cursor-pointer">Color Grading</li>
              <li className="hover:text-secondary transition-colors cursor-pointer">Motion Graphics</li>
              <li className="hover:text-secondary transition-colors cursor-pointer">Custom Animations</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-secondary" />
                <a 
                  href="mailto:contact@flashedits.agency"
                  className="text-muted-foreground hover:text-secondary transition-colors"
                >
                  contact@flashedits.agency
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-secondary" />
                <span className="text-muted-foreground">24h delivery guarantee</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-accent/20 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            © 2025 Flash Edits. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <button className="hover:text-secondary transition-colors">Privacy Policy</button>
            <button className="hover:text-secondary transition-colors">Terms of Service</button>
          </div>
        </div>
      </div>
    </footer>
  );
};