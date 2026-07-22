import { AnimatePresence, motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { APDM_WORKFLOW, BRAND } from "../data/content";

interface LoadingScreenProps {
  onComplete: () => void;
}

const STEP_DURATION_MS = 650;
const FINAL_PAUSE_MS = 500;

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [activeStep, setActiveStep] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (activeStep < APDM_WORKFLOW.length - 1) {
      const timer = setTimeout(() => setActiveStep((i) => i + 1), STEP_DURATION_MS);
      return () => clearTimeout(timer);
    }

    const finishTimer = setTimeout(() => {
      setDone(true);
      setTimeout(onComplete, 600);
    }, FINAL_PAUSE_MS);

    return () => clearTimeout(finishTimer);
  }, [activeStep, onComplete]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0f1a2e] px-6"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.img
            src={BRAND.logoSrc}
            alt={BRAND.logoAlt}
            className="mb-10 h-10 w-auto md:h-12"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          />

          <motion.p
            className="mb-8 text-center text-sm font-medium tracking-widest text-white/60 uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            AI Orchestration Engine
          </motion.p>

          <div className="flex max-w-4xl flex-wrap items-center justify-center gap-2 md:gap-0">
            {APDM_WORKFLOW.map((step, i) => (
              <div key={step} className="flex items-center">
                <motion.div
                  className={`rounded-xl border px-3 py-2.5 md:px-4 md:py-3 ${
                    i <= activeStep
                      ? "animate-orchestration-pulse border-accent/60 bg-primary/30"
                      : "border-white/10 bg-white/5"
                  }`}
                  animate={{
                    scale: i === activeStep ? 1.05 : 1,
                    opacity: i <= activeStep ? 1 : 0.4,
                  }}
                  transition={{ duration: 0.35 }}
                >
                  <span
                    className={`font-heading text-xs font-bold tracking-wide md:text-sm ${
                      i <= activeStep ? "text-accent" : "text-white/50"
                    }`}
                  >
                    {step}
                  </span>
                </motion.div>

                {i < APDM_WORKFLOW.length - 1 && (
                  <motion.div
                    className="mx-1 hidden md:block"
                    animate={{
                      opacity: i < activeStep ? 1 : 0.25,
                      x: i < activeStep ? [0, 3, 0] : 0,
                    }}
                    transition={{
                      opacity: { duration: 0.3 },
                      x: { duration: 1.2, repeat: Infinity, delay: i * 0.15 },
                    }}
                  >
                    <ChevronRight
                      size={18}
                      className={i < activeStep ? "text-accent" : "text-white/30"}
                    />
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          <motion.div
            className="mt-10 h-1 w-64 overflow-hidden rounded-full bg-white/10 md:w-80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-primary via-accent to-primary"
              animate={{
                width: `${((activeStep + 1) / APDM_WORKFLOW.length) * 100}%`,
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
          </motion.div>

          <motion.p
            className="mt-6 text-center text-sm text-white/50"
            key={activeStep}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {activeStep < APDM_WORKFLOW.length - 1
              ? `Orchestrating: ${APDM_WORKFLOW[activeStep]}...`
              : "Engine ready."}
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
