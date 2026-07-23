import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_DROPDOWNS } from "../data/content";
import { GoAILogo } from "./GoAILogo";
import { NavDropdownDesktop, NavDropdownMobile } from "./NavDropdown";
import { ThemeToggle } from "./ThemeToggle";

interface NavbarProps {
  activeSection: string;
}

export function Navbar({ activeSection }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
    setMobileDropdown(null);
  };

  const toggleMobileDropdown = (label: string) => {
    setMobileDropdown((prev) => (prev === label ? null : label));
  };

  const contactActive = activeSection === "contact";

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-gray-100 bg-white/90 shadow-sm backdrop-blur-md dark:border-gray-800 dark:bg-gray-900/90"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <button
          onClick={() => scrollTo("landing")}
          className="flex shrink-0 items-center"
          aria-label="goAI — Home"
        >
          <GoAILogo />
        </button>

        <div className="hidden items-center gap-1 lg:flex">
          {NAV_DROPDOWNS.map((dropdown) => (
            <NavDropdownDesktop
              key={dropdown.label}
              label={dropdown.label}
              items={dropdown.items}
              activeSection={activeSection}
              onNavigate={scrollTo}
            />
          ))}
          <button
            onClick={() => scrollTo("contact")}
            className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
              contactActive
                ? "bg-primary/10 text-primary"
                : "text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-accent"
            }`}
          >
            Contact
          </button>
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <button
            onClick={() => scrollTo("contact")}
            className="rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-primary/90 hover:shadow-md hover:shadow-primary/20"
          >
            Talk To Us
          </button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            className="rounded-lg p-2 text-secondary"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-gray-100 bg-white dark:border-gray-800 dark:bg-gray-900 lg:hidden"
          >
            <div className="flex flex-col gap-2 px-6 py-4">
              {NAV_DROPDOWNS.map((dropdown) => (
                <NavDropdownMobile
                  key={dropdown.label}
                  label={dropdown.label}
                  items={dropdown.items}
                  activeSection={activeSection}
                  onNavigate={scrollTo}
                  isOpen={mobileDropdown === dropdown.label}
                  onToggle={() => toggleMobileDropdown(dropdown.label)}
                />
              ))}
              <button
                onClick={() => scrollTo("contact")}
                className={`rounded-lg px-4 py-3 text-left text-sm font-medium ${
                  contactActive
                    ? "bg-primary/10 text-primary"
                    : "text-gray-700 dark:text-gray-300"
                }`}
              >
                Contact
              </button>
              <button
                onClick={() => scrollTo("contact")}
                className="mt-1 rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-white"
              >
                Talk To Us
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
