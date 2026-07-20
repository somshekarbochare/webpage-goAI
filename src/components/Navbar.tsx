import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BRAND, NAV_ITEMS } from "../data/content";

interface NavbarProps {
  activeSection: string;
}

export function Navbar({ activeSection }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-gray-100 bg-white/90 shadow-sm backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <button
          onClick={() => scrollTo("landing")}
          className="font-heading text-xl font-bold text-secondary"
        >
          {BRAND.name}
        </button>

        <div className="hidden items-center gap-1 lg:flex">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                activeSection === item.id
                  ? "bg-primary/10 text-primary"
                  : "text-gray-600 hover:text-primary"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <button
          onClick={() => scrollTo("contact")}
          className="hidden rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-primary/90 lg:block"
        >
          Talk To Us
        </button>

        <button
          className="rounded-lg p-2 text-secondary lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-gray-100 bg-white lg:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`rounded-lg px-4 py-3 text-left text-sm font-medium ${
                    activeSection === item.id
                      ? "bg-primary/10 text-primary"
                      : "text-gray-700"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => scrollTo("contact")}
                className="mt-2 rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-white"
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
