import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { LOADING_STEPS } from "../data/content";

interface LoadingScreenProps {
  onComplete: () => void;
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [stepIndex, setStepIndex] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (stepIndex < LOADING_STEPS.length) {
      const timer = setTimeout(() => setStepIndex((i) => i + 1), 700);
      return () => clearTimeout(timer);
    }

    const revealTimer = setTimeout(() => {
      setDone(true);
      setTimeout(onComplete, 600);
    }, 400);

    return () => clearTimeout(revealTimer);
  }, [stepIndex, onComplete]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-gray-900"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="mb-8 h-12 w-12 rounded-xl bg-primary"
            animate={{ scale: [1, 1.08, 1], rotate: [0, 180, 360] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="h-8 overflow-hidden">
            <AnimatePresence mode="wait">
              {stepIndex < LOADING_STEPS.length && (
                <motion.p
                  key={LOADING_STEPS[stepIndex]}
                  className="font-heading text-xl font-medium text-white"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {LOADING_STEPS[stepIndex]}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
          <div className="mt-8 h-1 w-48 overflow-hidden rounded-full bg-white/10">
            <motion.div
              className="h-full rounded-full bg-accent"
              initial={{ width: "0%" }}
              animate={{
                width: `${((stepIndex + 1) / LOADING_STEPS.length) * 100}%`,
              }}
              transition={{ duration: 0.4 }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
