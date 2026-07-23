import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface NavItem {
  id: string;
  label: string;
}

interface NavDropdownProps {
  label: string;
  items: readonly NavItem[];
  activeSection: string;
  onNavigate: (id: string) => void;
}

function isGroupActive(items: readonly NavItem[], activeSection: string) {
  return items.some((item) => item.id === activeSection);
}

export function NavDropdownDesktop({
  label,
  items,
  activeSection,
  onNavigate,
}: NavDropdownProps) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const groupActive = isGroupActive(items, activeSection);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-haspopup="true"
        className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
          groupActive
            ? "bg-primary/10 text-primary"
            : "text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-accent"
        }`}
      >
        {label}
        <ChevronDown
          size={14}
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="absolute top-full left-0 z-50 mt-2 min-w-[240px] overflow-hidden rounded-2xl border border-gray-200/80 bg-white/95 p-2 shadow-xl shadow-gray-900/10 backdrop-blur-xl dark:border-gray-700/80 dark:bg-gray-900/95 dark:shadow-black/30"
          >
            <div className="grid gap-0.5">
              {items.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => {
                      onNavigate(item.id);
                      setOpen(false);
                    }}
                    className={`rounded-xl px-4 py-2.5 text-left text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-primary/10 text-primary"
                        : "text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800"
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

interface NavDropdownMobileProps extends NavDropdownProps {
  isOpen: boolean;
  onToggle: () => void;
}

export function NavDropdownMobile({
  label,
  items,
  activeSection,
  onNavigate,
  isOpen,
  onToggle,
}: NavDropdownMobileProps) {
  const groupActive = isGroupActive(items, activeSection);

  return (
    <div className="overflow-hidden rounded-xl border border-gray-100 dark:border-gray-800">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className={`flex w-full items-center justify-between px-4 py-3 text-left text-sm font-medium transition-colors ${
          groupActive
            ? "bg-primary/10 text-primary"
            : "text-gray-700 dark:text-gray-300"
        }`}
      >
        {label}
        <ChevronDown
          size={16}
          className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeInOut" }}
            className="overflow-hidden border-t border-gray-100 dark:border-gray-800"
          >
            <div className="flex flex-col gap-0.5 p-2">
              {items.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => onNavigate(item.id)}
                    className={`rounded-lg px-4 py-2.5 text-left text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-primary/10 text-primary"
                        : "text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-800"
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
