import { motion } from "framer-motion";
import { ChevronDown, ChevronRight } from "lucide-react";
import { APDM_WORKFLOW } from "../data/content";
import { ScrollReveal } from "./ScrollReveal";

export function APDMWorkflow() {
  return (
    <div id="apdm-workflow" className="scroll-mt-28">
      <ScrollReveal animation="scale">
        <p className="mb-6 text-center text-sm font-medium tracking-wide text-gray-500 uppercase dark:text-gray-400">
          The APDM Workflow
        </p>

        {/* Desktop: horizontal flow */}
        <div className="hidden flex-wrap items-center justify-center gap-1 lg:flex">
          {APDM_WORKFLOW.map((step, i) => (
            <div key={step} className="flex items-center">
              <motion.div
                className="rounded-2xl border border-primary/25 bg-white px-4 py-3 shadow-sm dark:border-primary/35 dark:bg-gray-800"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.1 }}
                whileHover={{ scale: 1.05, borderColor: "rgba(247,209,7,0.6)" }}
              >
                <span className="font-heading text-xs font-bold tracking-wide text-primary md:text-sm">
                  {step}
                </span>
              </motion.div>
              {i < APDM_WORKFLOW.length - 1 && (
                <motion.div
                  className="mx-1 text-accent"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.15 }}
                >
                  <ChevronRight size={18} />
                </motion.div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile / tablet: vertical flow */}
        <div className="flex flex-col items-center gap-2 lg:hidden">
          {APDM_WORKFLOW.map((step, i) => (
            <div key={step} className="flex flex-col items-center">
              <motion.div
                className="rounded-2xl border border-primary/25 bg-white px-6 py-3 shadow-sm dark:border-primary/35 dark:bg-gray-800"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.1 }}
              >
                <span className="font-heading text-sm font-bold tracking-wide text-primary">
                  {step}
                </span>
              </motion.div>
              {i < APDM_WORKFLOW.length - 1 && (
                <motion.div
                  className="my-1 text-accent"
                  animate={{ y: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.15 }}
                >
                  <ChevronDown size={18} />
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </ScrollReveal>
    </div>
  );
}
