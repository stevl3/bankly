import { cn } from "@/lib/utils";
import { Button } from "./button";
import { ButtonProps } from "./button";

export function GradientButton({ className, ...props }: ButtonProps) {
  return (
    <Button
      className={cn(
        "bg-gradient-to-r from-[hsl(47.9,95.8%,53.1%)] to-[hsl(36,100%,50%)] hover:from-[hsl(47.9,95.8%,48%)] hover:to-[hsl(36,100%,45%)]",
        className
      )}
      {...props}
    />
  );
}
