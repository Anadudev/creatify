import React from "react";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

interface SectionTitleProps {
  title: string;
  description?: string;
  primaryButton?: string;
  secondaryButton?: string;
  SecondaryIcon?: LucideIcon;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  description,
  primaryButton,
  secondaryButton,
  SecondaryIcon,
}) => {
  return (
    <div className="space-y-4 max-w-[25rem] mx-auto mb-12">
      <h2 className="text-4xl font-extrabold text-center">{title}</h2>
      <p className="text-center text-gray-400">{description}</p>
      <div className="flex justify-center space-x-4">
        {primaryButton && <Button className="">{primaryButton}</Button>}
        {secondaryButton && (
          <Button className="bg-neutral-900 border border-neutral-600">
            {SecondaryIcon && <SecondaryIcon />}
            {secondaryButton}
          </Button>
        )}
      </div>
    </div>
  );
};

export default SectionTitle;
