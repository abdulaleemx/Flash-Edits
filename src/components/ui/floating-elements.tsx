import { cn } from "@/lib/utils";

interface FloatingElementsProps {
  className?: string;
  density?: "low" | "medium" | "high";
}

export const FloatingElements = ({ className, density = "medium" }: FloatingElementsProps) => {
  const getElementCount = () => {
    switch (density) {
      case "low": return 3;
      case "medium": return 5;
      case "high": return 8;
      default: return 5;
    }
  };

  const elements = Array.from({ length: getElementCount() }, (_, i) => ({
    id: i,
    size: Math.random() * 60 + 20, // 20-80px
    left: Math.random() * 90 + 5, // 5-95%
    top: Math.random() * 90 + 5, // 5-95%
    animationDelay: Math.random() * 4, // 0-4s delay
    animationType: ["float-slow", "float-medium", "float-fast"][Math.floor(Math.random() * 3)],
    opacity: Math.random() * 0.3 + 0.1, // 0.1-0.4
  }));

  return (
    <div className={cn("absolute inset-0 pointer-events-none overflow-hidden", className)}>
      {elements.map((element) => (
        <div
          key={element.id}
          className={cn(
            "absolute rounded-full",
            "bg-primary/20 backdrop-blur-sm",
            "border border-primary/30",
            "shadow-glow",
            `animate-${element.animationType}`
          )}
          style={{
            width: `${element.size}px`,
            height: `${element.size}px`,
            left: `${element.left}%`,
            top: `${element.top}%`,
            animationDelay: `${element.animationDelay}s`,
            opacity: element.opacity,
          }}
        />
      ))}
      
      {/* Additional purple glow effects */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/10 rounded-full blur-2xl animate-glow" 
           style={{ animationDelay: "1s" }} />
      <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-primary/15 rounded-full blur-xl animate-glow" 
           style={{ animationDelay: "3s" }} />
      <div className="absolute top-2/3 left-1/6 w-20 h-20 bg-primary/8 rounded-full blur-lg animate-glow" 
           style={{ animationDelay: "2s" }} />
    </div>
  );
};