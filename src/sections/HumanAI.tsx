import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { ScrollReveal } from "../components/ScrollReveal";

const traditionalItems = [
  "Individual tools per developer",
  "No shared organizational context",
  "Months to first deliverable",
  "Coordination overhead scales with headcount",
  "5–10% incremental productivity gain",
];

const apdmItems = [
  "Team-centric AI with shared context",
  "MCP connected to enterprise data",
  "First deliverable in days",
  "AI handles boilerplate; humans handle judgment",
  "Compounding intelligence across engagements",
];

export function HumanAI() {
  return (
    <section id="human-ai" className="section-padding bg-surface">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <p className="text-center text-sm font-semibold tracking-widest text-primary uppercase">
            Human + AI
          </p>
          <h2 className="mt-4 text-center font-heading text-4xl font-bold text-secondary md:text-5xl">
            AI alone is not enough.
            <br />
            Humans alone are not enough.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-center text-lg text-gray-600 dark:text-gray-300">
            Human + AI creates better outcomes.
          </p>
        </ScrollReveal>

        <div className="relative mt-12 grid gap-8 lg:grid-cols-2">
          <ScrollReveal animation="slide">
            <div className="h-full rounded-3xl border border-gray-200 bg-white p-8 dark:border-gray-700 dark:bg-gray-800">
              <div className="mb-2 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/30">
                  <X className="text-red-500" size={20} />
                </div>
                <h3 className="font-heading text-2xl font-bold text-secondary">
                  Traditional Team
                </h3>
              </div>
              <p className="mb-6 text-sm font-medium text-gray-500 dark:text-gray-400">
                Linear scaling through additional headcount
              </p>
              <ul className="space-y-4">
                {traditionalItems.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-600 dark:text-gray-300">
                    <X className="mt-0.5 shrink-0 text-red-400" size={18} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          <motion.div
            className="absolute top-1/2 left-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 lg:block"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="rounded-full bg-primary px-6 py-3 font-heading text-lg font-bold text-white shadow-lg ring-2 ring-accent/30">
              VS
            </div>
          </motion.div>

          <ScrollReveal delay={0.15} animation="slide">
            <div className="h-full rounded-3xl border-2 border-primary/25 bg-white p-8 shadow-lg dark:border-accent/30 dark:bg-gray-800">
              <div className="mb-2 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/20">
                  <Check className="text-primary" size={20} />
                </div>
                <h3 className="font-heading text-2xl font-bold text-secondary">
                  APDM Pod
                </h3>
              </div>
              <p className="mb-6 text-sm font-medium text-primary">
                Outcome scaling through AI-augmented pods
              </p>
              <ul className="space-y-4">
                {apdmItems.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                    <Check className="mt-0.5 shrink-0 text-primary" size={18} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
