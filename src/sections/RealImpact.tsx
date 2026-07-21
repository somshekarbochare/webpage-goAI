import { IMPACT_METRICS } from "../data/content";
import { AnimatedCounter } from "../components/AnimatedCounter";
import { ScrollReveal } from "../components/ScrollReveal";

export function RealImpact() {
  return (
    <section id="impact" className="section-padding bg-gray-900 text-white dark:bg-gray-950">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <p className="text-center text-sm font-semibold tracking-widest text-accent uppercase">
            Real Impact
          </p>
          <h2 className="mt-4 text-center font-heading text-4xl font-bold md:text-5xl">
            Measurable value, delivered
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-center text-lg text-gray-300">
            These aren&apos;t pilot metrics. They&apos;re production outcomes from
            engagements with global enterprises running real workloads at scale.
          </p>
        </ScrollReveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {IMPACT_METRICS.map((metric, i) => (
            <ScrollReveal key={metric.label} delay={i * 0.1} animation="scale">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
                <p className="font-heading text-4xl font-bold text-accent md:text-5xl">
                  <AnimatedCounter
                    value={metric.value}
                    prefix={"prefix" in metric ? metric.prefix : ""}
                    suffix={metric.suffix}
                  />
                </p>
                <p className="mt-3 text-sm font-medium tracking-wide text-gray-400 uppercase">
                  {metric.label}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
