import { BRAND } from "../data/content";

interface GoAILogoProps {
  className?: string;
}

export function GoAILogo({ className = "h-11 w-auto shrink-0 md:h-12" }: GoAILogoProps) {
  return (
    <img
      src={BRAND.logoSrc}
      alt={BRAND.logoAlt}
      className={className}
      loading="eager"
      decoding="async"
    />
  );
}
