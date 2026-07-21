import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { HERO_WORKFLOW } from "../data/content";
import { ScrollReveal } from "./ScrollReveal";

export function APDMWorkflow() {
  return (
    <div id="apdm-workflow" className="scroll-mt-28">
      <ScrollReveal animation="scale">
        <p className="mb-6 text-center text-sm font-medium tracking-wide text-gray-500 uppercase dark:text-gray-400">
          The APDM Workflow
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-0">
          {HERO_WORKFLOW.map((step, i) => (
            <div key={step} className="flex items-center">
              <motion.div
                className="rounded-2xl border border-primary/20 bg-white px-5 py-3 shadow-sm dark:border-primary/30 dark:bg-gray-800"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.15 }}
                whileHover={{ scale: 1.05, borderColor: "rgba(10,102,194,0.5)" }}
              >
                <span className="font-heading text-sm font-semibold text-secondary md:text-base dark:text-gray-100">
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
      </ScrollReveal>
    </div>
  );
}
