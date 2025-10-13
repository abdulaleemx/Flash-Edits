import { Button } from "./button";
import { cn } from "@/lib/utils";
import { forwardRef } from "react";

export interface HeroButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  size?: "default" | "lg";
}

const HeroButton = forwardRef<HTMLButtonElement, HeroButtonProps>(
  ({ className, variant = "primary", size = "default", ...props }, ref) => {
    return (
      <Button
        ref={ref}
        className={cn(
          "font-semibold transition-all duration-300",
          "hover:scale-105",
          {
            "bg-primary text-primary-foreground border-0": variant === "primary",
            "bg-card/20 backdrop-blur-sm border border-accent/30 text-foreground hover:bg-card/30": variant === "secondary",
            "h-12 px-8 text-base": size === "default",
            "h-14 px-10 text-lg": size === "lg",
          },
          className
        )}
        {...props}
      />
    );
  }
);

HeroButton.displayName = "HeroButton";

export { HeroButton };