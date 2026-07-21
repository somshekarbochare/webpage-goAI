import { COMPARISON_ROWS } from "../data/content";
import { ScrollReveal } from "../components/ScrollReveal";

export function HowDifferent() {
  return (
    <section id="different" className="section-padding">
      <div className="mx-auto max-w-4xl">
        <ScrollReveal>
          <p className="text-center text-sm font-semibold tracking-widest text-primary uppercase">
            How goAI Is Different
          </p>
          <h2 className="mt-4 text-center font-heading text-4xl font-bold text-secondary md:text-5xl">
            A fundamentally different delivery model
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="mt-12 overflow-hidden rounded-3xl border border-gray-200 shadow-sm dark:border-gray-700">
            <div className="grid grid-cols-2 bg-gray-900 text-white dark:bg-gray-950">
              <div className="border-r border-white/10 px-6 py-5 text-center font-heading font-semibold">
                Traditional Delivery
              </div>
              <div className="px-6 py-5 text-center font-heading font-semibold text-accent">
                goAI APDM
              </div>
            </div>
            {COMPARISON_ROWS.map((row, i) => (
              <div
                key={row.traditional}
                className={`grid grid-cols-2 ${
                  i % 2 === 0
                    ? "bg-white dark:bg-gray-800"
                    : "bg-gray-50 dark:bg-gray-900"
                }`}
              >
                <div className="border-r border-gray-100 px-6 py-5 text-center text-gray-600 dark:border-gray-700 dark:text-gray-300">
                  {row.traditional}
                </div>
                <div className="px-6 py-5 text-center font-semibold text-primary">
                  {row.apdm}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
