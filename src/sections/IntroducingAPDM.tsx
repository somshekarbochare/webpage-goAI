import { Bot, Brain, ChevronRight, RefreshCw, Shield, Sparkles, Zap } from "lucide-react";
import { APDM_CHARACTERISTICS, IMPACT_METRICS } from "../data/content";
import { APDMWorkflow } from "../components/APDMWorkflow";
import { AnimatedCounter } from "../components/AnimatedCounter";
import { ScrollReveal } from "../components/ScrollReveal";

const icons = [Bot, Brain, Zap, Sparkles, RefreshCw, Shield];

export function IntroducingAPDM() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="apdm" className="section-padding">
      <div className="mx-auto max-w-6xl">
        {/* 1. APDM Hero */}
        <ScrollReveal>
          <div className="rounded-3xl border border-primary/10 bg-gradient-to-br from-primary/5 to-accent/5 px-8 py-12 text-center md:px-16 md:py-16 dark:border-primary/20 dark:from-primary/10 dark:to-accent/5">
            <p className="text-sm font-semibold tracking-widest text-primary uppercase">
              Introducing APDM
            </p>
            <h2 className="mt-4 font-heading text-4xl font-bold text-secondary md:text-5xl">
              The AI Pod Delivery Model
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-gray-600 dark:text-gray-300">
              APDM is an AI-native software delivery model that combines AI Agents,
              Human Expertise, Continuous Collaboration, and Shared Intelligence.
            </p>
            <button
              onClick={() => scrollTo("apdm-workflow")}
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-primary/80"
            >
              See the workflow
              <ChevronRight size={16} />
            </button>
          </div>
        </ScrollReveal>

        {/* 2. APDM Definition / Explanation */}
        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <ScrollReveal animation="slide">
            <div className="rounded-3xl bg-primary p-8 text-white md:p-10">
              <h3 className="font-heading text-2xl font-bold">
                AI does not replace humans.
              </h3>
              <p className="mt-4 text-lg text-white/90">
                AI removes repetitive work.
              </p>
              <div className="mt-8 space-y-4">
                {["Context", "Creativity", "Judgment", "Accountability"].map(
                  (trait) => (
                    <div
                      key={trait}
                      className="flex items-center gap-3 rounded-xl bg-white/10 px-5 py-3"
                    >
                      <div className="h-2 w-2 rounded-full bg-accent" />
                      <span className="font-medium">Humans provide: {trait}</span>
                    </div>
                  ),
                )}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="space-y-6">
              <div>
                <h3 className="font-heading text-xl font-bold text-secondary">
                  What APDM is
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  A delivery methodology where small pods of 4–6 senior engineers
                  work with AI that understands your codebase, architecture, and
                  business rules.
                </p>
              </div>
              <div>
                <h3 className="font-heading text-xl font-bold text-secondary">
                  Why APDM exists
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  The bottleneck is no longer keystrokes — it&apos;s judgment.
                  APDM frees humans to focus on what only humans can do.
                </p>
              </div>
              <div>
                <h3 className="font-heading text-xl font-bold text-secondary">
                  How APDM works
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  MCP connects AI to GitHub repos, internal data, and knowledge
                  bases. Pods work as coordinated AI-augmented units — not
                  individuals with generic assistants.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* 3. APDM Workflow */}
        <div className="mt-14">
          <APDMWorkflow />
        </div>

        {/* 4. APDM Benefits */}
        <div className="mt-14">
          <ScrollReveal>
            <h3 className="text-center font-heading text-3xl font-bold text-secondary md:text-4xl">
              Why APDM works
            </h3>
            <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600 dark:text-gray-300">
              Six pillars that make AI-native delivery measurable, repeatable, and
              enterprise-ready.
            </p>
          </ScrollReveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {APDM_CHARACTERISTICS.map((item, i) => {
              const Icon = icons[i];
              return (
                <ScrollReveal key={item.title} delay={i * 0.07} animation="scale">
                  <div className="h-full rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-gray-700 dark:bg-gray-800">
                    <Icon className="mb-4 text-primary" size={28} />
                    <h3 className="font-heading text-lg font-bold text-secondary">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">
                      {item.description}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>

        {/* 5. APDM Impact Metrics */}
        <div className="mt-14">
          <ScrollReveal>
            <h3 className="text-center font-heading text-3xl font-bold text-secondary md:text-4xl">
              APDM impact at a glance
            </h3>
            <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600 dark:text-gray-300">
              Production outcomes from engagements with global enterprises running
              real workloads at scale.
            </p>
          </ScrollReveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {IMPACT_METRICS.map((metric, i) => (
              <ScrollReveal key={metric.label} delay={i * 0.08} animation="scale">
                <div className="rounded-2xl border border-primary/10 bg-primary/5 p-8 text-center dark:border-primary/20 dark:bg-primary/10">
                  <p className="font-heading text-4xl font-bold text-primary md:text-5xl">
                    <AnimatedCounter
                      value={metric.value}
                      prefix={"prefix" in metric ? metric.prefix : ""}
                      suffix={metric.suffix}
                    />
                  </p>
                  <p className="mt-3 text-sm font-medium tracking-wide text-gray-500 uppercase dark:text-gray-400">
                    {metric.label}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* 6. APDM CTA */}
        <ScrollReveal delay={0.1}>
          <div className="mt-14 rounded-3xl bg-gray-900 px-8 py-12 text-center text-white dark:bg-gray-800">
            <h3 className="font-heading text-3xl font-bold md:text-4xl">
              Ready to transform your delivery model?
            </h3>
            <p className="mx-auto mt-4 max-w-xl text-gray-300">
              Discover how APDM can reduce team size, accelerate delivery, and
              compound intelligence across your organization.
            </p>
            <button
              onClick={() => scrollTo("contact")}
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-base font-semibold text-white transition hover:bg-primary/90"
            >
              Talk To Us
              <ChevronRight size={18} />
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
