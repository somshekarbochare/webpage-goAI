import { AnimatePresence, motion } from "framer-motion";
import { Fragment, useEffect, useState } from "react";
import { APDM_WORKFLOW } from "../data/content";
import { GoAILogo } from "./GoAILogo";

interface LoadingScreenProps {
  onComplete: () => void;
}

const STEP_DURATION_MS = 360;
const FINAL_PAUSE_MS = 250;
const EXIT_MS = 350;

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
      setTimeout(onComplete, EXIT_MS);
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
          transition={{ duration: EXIT_MS / 1000, ease: "easeInOut" }}
        >
          <div className="mb-8">
            <GoAILogo className="h-11 w-auto shrink-0 md:h-12" />
          </div>

          <motion.p
            className="mb-8 text-center text-sm font-medium tracking-widest text-white/60 uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.3 }}
          >
            AI Orchestration Engine
          </motion.p>

          <div className="flex max-w-full flex-wrap items-center justify-center gap-x-1.5 gap-y-1">
            {APDM_WORKFLOW.map((step, i) => (
              <Fragment key={step}>
                {i > 0 && (
                  <span className="font-heading text-[10px] text-white/20 md:text-xs">
                    →
                  </span>
                )}
                <motion.span
                  className="font-heading text-[10px] tracking-wide md:text-xs"
                  animate={{
                    opacity: i === activeStep ? 1 : i < activeStep ? 0.45 : 0.2,
                    color:
                      i === activeStep
                        ? "#f7d107"
                        : i < activeStep
                          ? "rgba(255,255,255,0.5)"
                          : "rgba(255,255,255,0.25)",
                    fontWeight: i === activeStep ? 700 : 500,
                  }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                >
                  {step}
                </motion.span>
              </Fragment>
            ))}
          </div>

          <motion.div
            className="mt-8 h-1 w-56 overflow-hidden rounded-full bg-white/10 md:w-72"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.3 }}
          >
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-primary via-accent to-primary"
              animate={{
                width: `${((activeStep + 1) / APDM_WORKFLOW.length) * 100}%`,
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            />
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.p
              key={activeStep}
              className="mt-5 text-center text-sm text-white/50"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2 }}
            >
              {activeStep < APDM_WORKFLOW.length - 1
                ? `Orchestrating: ${APDM_WORKFLOW[activeStep]}...`
                : "Engine ready."}
            </motion.p>
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
