import { motion } from "framer-motion";
import { ArrowDown, ChevronRight } from "lucide-react";
import { ScrollReveal } from "../components/ScrollReveal";

const headlineLines = [
  "The future of software isn't coming.",
  "It's already here.",
];

export function Landing() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="landing"
      className="relative flex min-h-screen items-center justify-center px-6 pt-24 pb-12"
    >
      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <ScrollReveal animation="scale">
          <p className="mb-6 font-heading text-sm font-semibold tracking-widest text-primary uppercase">
            The AI Pod Delivery Model
          </p>
        </ScrollReveal>

        <h1 className="font-heading text-5xl leading-tight font-bold text-secondary md:text-7xl">
          {headlineLines.map((line, i) => (
            <motion.span
              key={line}
              className="block"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.15 + i * 0.2, ease: "easeOut" }}
            >
              {i === 1 ? (
                <span className="text-primary">{line}</span>
              ) : (
                line
              )}
            </motion.span>
          ))}
        </h1>

        <ScrollReveal delay={0.5}>
          <p className="mx-auto mt-8 max-w-2xl font-heading text-xl leading-relaxed text-gray-600 dark:text-gray-300">
            Powered by Human + AI Collaboration
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.65}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => scrollTo("apdm")}
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-base font-semibold text-white transition hover:bg-primary/90"
            >
              Explore APDM
              <ChevronRight size={18} />
            </button>
            <button
              onClick={() => scrollTo("projects")}
              className="rounded-xl border-2 border-secondary/10 px-8 py-4 text-base font-semibold text-secondary transition hover:border-primary hover:text-primary dark:border-gray-600 dark:hover:border-accent dark:hover:text-accent"
            >
              View Projects
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="rounded-xl border-2 border-accent/30 bg-accent/5 px-8 py-4 text-base font-semibold text-primary transition hover:bg-accent/10 dark:bg-accent/10"
            >
              Talk To Us
            </button>
          </div>
        </ScrollReveal>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown className="text-gray-400 dark:text-gray-500" size={24} />
      </motion.div>
    </section>
  );
}
