import {
  Clock,
  Layers,
  MessageSquare,
  Settings,
  TrendingUp,
  Users,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { PROBLEM_TOPICS } from "../data/content";
import { ScrollReveal } from "../components/ScrollReveal";

const iconMap = {
  users: Users,
  clock: Clock,
  settings: Settings,
  layers: Layers,
  "trending-up": TrendingUp,
  "message-square": MessageSquare,
} as const;

function usePrefersHover() {
  const [prefersHover, setPrefersHover] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    setPrefersHover(mq.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersHover(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return prefersHover;
}

export function TheProblem() {
  const [expanded, setExpanded] = useState<number | null>(null);
  const prefersHover = usePrefersHover();

  const collapse = useCallback(() => setExpanded(null), []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") collapse();
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [collapse]);

  const handleMouseEnter = (index: number) => {
    if (prefersHover) setExpanded(index);
  };

  const handleMouseLeave = (index: number) => {
    if (prefersHover && expanded === index) setExpanded(null);
  };

  const handleClick = (index: number) => {
    if (!prefersHover) {
      setExpanded((prev) => (prev === index ? null : index));
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setExpanded((prev) => (prev === index ? null : index));
    }
  };

  return (
    <section id="problem" className="section-padding bg-gray-900 text-white dark:bg-gray-950">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <p className="text-sm font-semibold tracking-widest text-accent uppercase">
            The Problem
          </p>
          <h2 className="mt-4 font-heading text-4xl font-bold md:text-5xl">
            Industry challenges holding delivery back
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-gray-300">
            Most companies are asking: &ldquo;Can AI replace developers?&rdquo;
            <br />
            <span className="font-semibold text-white">
              goAI asks: &ldquo;How can AI make teams extraordinary?&rdquo;
            </span>
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PROBLEM_TOPICS.map((topic, i) => {
              const Icon = iconMap[topic.icon];
              const isOpen = expanded === i;

              return (
                <motion.div
                  key={topic.title}
                  className={`relative overflow-hidden rounded-2xl border transition-colors duration-300 ${
                    isOpen
                      ? "border-accent/40 bg-primary/25 shadow-lg shadow-primary/10"
                      : "border-white/10 bg-white/5 hover:border-white/20"
                  }`}
                  onMouseEnter={() => handleMouseEnter(i)}
                  onMouseLeave={() => handleMouseLeave(i)}
                >
                  <button
                    type="button"
                    id={`challenge-trigger-${i}`}
                    aria-expanded={isOpen}
                    aria-controls={`challenge-panel-${i}`}
                    onClick={() => handleClick(i)}
                    onKeyDown={(e) => handleKeyDown(e, i)}
                    className="flex w-full flex-col items-start p-6 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
                  >
                    <motion.span
                      animate={{
                        scale: isOpen ? 1.1 : 1,
                        rotate: isOpen ? 5 : 0,
                      }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl transition-colors duration-300 ${
                        isOpen
                          ? "bg-accent/20 text-accent"
                          : "bg-primary/30 text-accent/80"
                      }`}
                    >
                      <Icon size={24} />
                    </motion.span>

                    <h3 className="font-heading text-xl font-bold text-white">
                      {topic.title}
                    </h3>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          id={`challenge-panel-${i}`}
                          role="region"
                          aria-labelledby={`challenge-trigger-${i}`}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <motion.p
                            initial={{ y: 6, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 6, opacity: 0 }}
                            transition={{ duration: 0.25, delay: 0.05 }}
                            className="mt-3 leading-relaxed text-gray-300"
                          >
                            {topic.description}
                          </motion.p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </button>
                </motion.div>
              );
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
