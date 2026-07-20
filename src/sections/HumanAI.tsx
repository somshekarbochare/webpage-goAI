import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { ScrollReveal } from "../components/ScrollReveal";

const traditionalItems = [
  "20–30 person teams",
  "Individual Copilot per developer",
  "No shared organizational context",
  "Months to first deliverable",
  "Coordination overhead scales with headcount",
  "5–10% incremental productivity gain",
];

const apdmItems = [
  "4–6 person AI-augmented pods",
  "Team-centric AI with shared context",
  "MCP connected to enterprise data",
  "First deliverable in days",
  "AI handles boilerplate; humans handle judgment",
  "Up to 80% structural transformation",
];

export function HumanAI() {
  return (
    <section id="human-ai" className="bg-gray-50 px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <p className="text-center text-sm font-semibold tracking-widest text-primary uppercase">
            Human + AI
          </p>
          <h2 className="mt-4 text-center font-heading text-4xl font-bold text-secondary md:text-5xl">
            AI Alone Is Not Enough.
            <br />
            Humans Alone Is Not Enough.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-center text-lg text-gray-600">
            Human + AI creates better outcomes.
          </p>
        </ScrollReveal>

        <div className="relative mt-16 grid gap-8 lg:grid-cols-2">
          <ScrollReveal animation="slide">
            <div className="h-full rounded-3xl border border-gray-200 bg-white p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100">
                  <X className="text-red-500" size={20} />
                </div>
                <h3 className="font-heading text-2xl font-bold text-secondary">
                  Traditional Team
                </h3>
              </div>
              <ul className="space-y-4">
                {traditionalItems.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-600">
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
            <div className="rounded-full bg-primary px-6 py-3 font-heading text-lg font-bold text-white shadow-lg">
              VS
            </div>
          </motion.div>

          <ScrollReveal delay={0.15} animation="slide">
            <div className="h-full rounded-3xl border-2 border-primary/20 bg-white p-8 shadow-lg">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <Check className="text-primary" size={20} />
                </div>
                <h3 className="font-heading text-2xl font-bold text-secondary">
                  APDM Pod
                </h3>
              </div>
              <ul className="space-y-4">
                {apdmItems.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-700">
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
