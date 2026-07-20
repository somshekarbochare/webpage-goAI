import { Bot, Brain, RefreshCw, Shield, Sparkles, Zap } from "lucide-react";
import { APDM_CHARACTERISTICS } from "../data/content";
import { ScrollReveal } from "../components/ScrollReveal";

const icons = [Bot, Brain, Zap, Sparkles, RefreshCw, Shield];

export function IntroducingAPDM() {
  return (
    <section id="apdm" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <p className="text-sm font-semibold tracking-widest text-primary uppercase">
            Introducing APDM
          </p>
          <h2 className="mt-4 font-heading text-4xl font-bold text-secondary md:text-5xl">
            The AI Pod Delivery Model
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-gray-600">
            APDM is an AI-native software delivery model that combines AI Agents,
            Human Expertise, Continuous Collaboration, and Shared Intelligence.
          </p>
        </ScrollReveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
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
                <p className="mt-2 text-gray-600">
                  A delivery methodology where small pods of 4–6 senior engineers
                  work with AI that understands your codebase, architecture, and
                  business rules.
                </p>
              </div>
              <div>
                <h3 className="font-heading text-xl font-bold text-secondary">
                  Why APDM exists
                </h3>
                <p className="mt-2 text-gray-600">
                  The bottleneck is no longer keystrokes — it&apos;s judgment.
                  APDM frees humans to focus on what only humans can do.
                </p>
              </div>
              <div>
                <h3 className="font-heading text-xl font-bold text-secondary">
                  How APDM works
                </h3>
                <p className="mt-2 text-gray-600">
                  MCP connects AI to GitHub repos, internal data, and knowledge
                  bases. Pods work as coordinated AI-augmented units — not
                  individuals with generic assistants.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {APDM_CHARACTERISTICS.map((item, i) => {
            const Icon = icons[i];
            return (
              <ScrollReveal key={item.title} delay={i * 0.07} animation="scale">
                <div className="h-full rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:shadow-md">
                  <Icon className="mb-4 text-primary" size={28} />
                  <h3 className="font-heading text-lg font-bold text-secondary">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-gray-600">{item.description}</p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
