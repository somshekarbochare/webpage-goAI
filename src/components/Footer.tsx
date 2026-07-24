import { BRAND, FOOTER_SITEMAP_LINKS } from "../data/content";
import { GoAILogo } from "./GoAILogo";

interface FooterProps {
  activeSection: string;
  onNavigate: (id: string) => void;
}

export function Footer({ activeSection, onNavigate }: FooterProps) {
  return (
    <footer className="border-t border-gray-100 bg-gray-900 px-6 py-8 text-gray-400 dark:border-gray-800 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="flex shrink-0 flex-col items-center md:items-start">
            <GoAILogo className="h-8 w-auto" />
            <p className="mt-2 text-sm">{BRAND.tagline}</p>
          </div>

          <nav aria-label="Sitemap" className="w-full md:w-auto">
            <ul className="flex flex-col items-center gap-0.5 md:items-end">
              {FOOTER_SITEMAP_LINKS.map((item, i) => {
                const isActive = activeSection === item.id;
                return (
                  <li key={`${item.id}-${item.label}-${i}`}>
                    <button
                      type="button"
                      onClick={() => onNavigate(item.id)}
                      className={`rounded-md py-0.5 text-sm transition-colors duration-200 md:text-right ${
                        isActive
                          ? "text-accent"
                          : "text-gray-400 hover:text-white"
                      }`}
                    >
                      {item.label}
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        <p className="mt-6 border-t border-gray-800 pt-6 text-center text-sm md:text-left">
          &copy; {new Date().getFullYear()} {BRAND.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
