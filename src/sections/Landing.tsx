import { motion } from "framer-motion";
import { ArrowDown, ChevronRight } from "lucide-react";
import { HERO_WORKFLOW } from "../data/content";
import { ScrollReveal } from "../components/ScrollReveal";

export function Landing() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="landing"
      className="relative flex min-h-screen items-center justify-center px-6 pt-24 pb-16"
    >
      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <ScrollReveal animation="scale">
          <p className="mb-6 text-sm font-semibold tracking-widest text-primary uppercase">
            The AI Pod Delivery Model
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h1 className="font-heading text-5xl leading-tight font-bold text-secondary md:text-7xl">
            Software delivery has changed.
            <br />
            <span className="text-primary">Most companies haven&apos;t.</span>
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="mx-auto mt-8 max-w-2xl text-xl leading-relaxed text-gray-600">
            Welcome to goAI. We don&apos;t ask whether AI can replace developers —
            we ask how AI can make every developer extraordinary.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
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
              className="rounded-xl border-2 border-secondary/10 px-8 py-4 text-base font-semibold text-secondary transition hover:border-primary hover:text-primary"
            >
              View Projects
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="rounded-xl border-2 border-accent/30 bg-accent/5 px-8 py-4 text-base font-semibold text-primary transition hover:bg-accent/10"
            >
              Talk To Us
            </button>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.5} animation="scale">
          <div className="mx-auto mt-20 max-w-3xl">
            <p className="mb-6 text-sm font-medium tracking-wide text-gray-500 uppercase">
              The APDM Workflow
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 md:gap-0">
              {HERO_WORKFLOW.map((step, i) => (
                <div key={step} className="flex items-center">
                  <motion.div
                    className="rounded-2xl border border-primary/20 bg-white px-5 py-3 shadow-sm"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + i * 0.15 }}
                    whileHover={{ scale: 1.05, borderColor: "rgba(10,102,194,0.5)" }}
                  >
                    <span className="font-heading text-sm font-semibold text-secondary md:text-base">
                      {step}
                    </span>
                  </motion.div>
                  {i < HERO_WORKFLOW.length - 1 && (
                    <motion.div
                      className="mx-2 hidden text-accent md:block"
                      animate={{ y: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                    >
                      <ArrowDown size={20} className="rotate-[-90deg]" />
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown className="text-gray-400" size={24} />
      </motion.div>
    </section>
  );
}
