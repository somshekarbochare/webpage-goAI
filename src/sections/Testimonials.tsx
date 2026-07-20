import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote } from "lucide-react";
import { TRUST_SIGNALS } from "../data/content";
import { ScrollReveal } from "../components/ScrollReveal";

export function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % TRUST_SIGNALS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="px-6 py-28">
      <div className="mx-auto max-w-4xl">
        <ScrollReveal>
          <p className="text-center text-sm font-semibold tracking-widest text-primary uppercase">
            Testimonials
          </p>
          <h2 className="mt-4 text-center font-heading text-4xl font-bold text-secondary md:text-5xl">
            Building trust through outcomes
          </h2>
        </ScrollReveal>

        <div className="relative mt-16 min-h-[280px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl border border-gray-200 bg-white p-10 shadow-sm md:p-14"
            >
              <Quote className="mb-6 text-primary/30" size={40} />
              <p className="text-xl leading-relaxed text-gray-700 md:text-2xl">
                {TRUST_SIGNALS[active].feedback}
              </p>
              <div className="mt-8 border-t border-gray-100 pt-6">
                <p className="font-heading font-bold text-secondary">
                  {TRUST_SIGNALS[active].theme}
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  Verified enterprise engagement outcomes
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex justify-center gap-2">
            {TRUST_SIGNALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`h-2 rounded-full transition-all ${
                  i === active ? "w-8 bg-primary" : "w-2 bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
