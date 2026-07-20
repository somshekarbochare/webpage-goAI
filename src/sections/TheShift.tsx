import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";
import { TRADITIONAL_FLOW } from "../data/content";
import { ScrollReveal } from "../components/ScrollReveal";

export function TheShift() {
  return (
    <section id="shift" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <p className="text-sm font-semibold tracking-widest text-primary uppercase">
            The Shift
          </p>
          <h2 className="mt-4 font-heading text-4xl font-bold text-secondary md:text-5xl">
            Traditional software delivery is broken
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-gray-600">
            For three decades, enterprises outsourced software at scale through the
            Global Delivery Model. It worked — until AI changed everything.
          </p>
        </ScrollReveal>

        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          <ScrollReveal animation="slide">
            <div className="rounded-3xl border border-red-100 bg-red-50/50 p-8">
              <div className="mb-6 flex items-center gap-3">
                <AlertTriangle className="text-red-500" size={24} />
                <h3 className="font-heading text-2xl font-bold text-secondary">
                  Traditional Software Delivery
                </h3>
              </div>
              <div className="space-y-3">
                {TRADITIONAL_FLOW.map((step, i) => (
                  <motion.div
                    key={step}
                    className="relative"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <div
                      className={`flex items-center gap-4 rounded-xl px-5 py-4 ${
                        step === "Delays" || step === "Rework"
                          ? "border border-red-200 bg-red-100/80"
                          : "border border-gray-200 bg-white"
                      }`}
                    >
                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold ${
                          step === "Delays" || step === "Rework"
                            ? "bg-red-500 text-white"
                            : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {i + 1}
                      </span>
                      <span className="font-medium text-secondary">{step}</span>
                      {(step === "Meetings" || step === "Delays") && (
                        <motion.span
                          className="ml-auto text-xs font-semibold text-red-500 uppercase"
                          animate={{ opacity: [1, 0.4, 1] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          Bottleneck
                        </motion.span>
                      )}
                    </div>
                    {i < TRADITIONAL_FLOW.length - 1 && (
                      <div className="flex justify-center py-1">
                        <div className="h-4 w-0.5 bg-gray-300" />
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="flex h-full flex-col justify-center">
              <blockquote className="border-l-4 border-primary pl-6">
                <p className="font-heading text-2xl leading-snug font-semibold text-secondary md:text-3xl">
                  &ldquo;The enterprise delivery model hasn&apos;t evolved in 30
                  years. We built what comes next.&rdquo;
                </p>
              </blockquote>
              <p className="mt-8 text-lg leading-relaxed text-gray-600">
                Large offshore teams, linear handoffs, waterfall cadences — all
                designed for a world before AI. Today, a small AI-augmented pod can
                dramatically outperform teams many times its size.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { label: "Team Size", value: "20–30 people" },
                  { label: "Ramp-up", value: "Months" },
                  { label: "Overhead", value: "Scales with headcount" },
                  { label: "Quality", value: "Degrades as teams grow" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-xl border border-gray-100 bg-white p-4"
                  >
                    <p className="text-xs font-semibold tracking-wide text-gray-500 uppercase">
                      {item.label}
                    </p>
                    <p className="mt-1 font-semibold text-secondary">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
