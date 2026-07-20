import {
  Clock,
  Layers,
  MessageSquare,
  Settings,
  TrendingUp,
  Users,
} from "lucide-react";
import { PROBLEM_TOPICS } from "../data/content";
import { ScrollReveal } from "../components/ScrollReveal";

const iconMap = {
  users: Users,
  clock: Clock,
  settings: Settings,
  layers: Layers,
  "trending-up": TrendingUp,
  "message-square": MessageSquare,
} as const;

export function TheProblem() {
  return (
    <section id="problem" className="bg-secondary px-6 py-28 text-white">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <p className="text-sm font-semibold tracking-widest text-accent uppercase">
            The Problem
          </p>
          <h2 className="mt-4 font-heading text-4xl font-bold md:text-5xl">
            Industry challenges holding delivery back
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-gray-300">
            Most companies are asking: &ldquo;Can AI replace developers?&rdquo;
            <br />
            <span className="font-semibold text-white">
              goAI asks: &ldquo;How can AI make every developer extraordinary?&rdquo;
            </span>
          </p>
        </ScrollReveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROBLEM_TOPICS.map((topic, i) => {
            const Icon = iconMap[topic.icon];
            return (
              <ScrollReveal key={topic.title} delay={i * 0.08} animation="scale">
                <div className="group h-full rounded-2xl border border-white/10 bg-white/5 p-8 transition hover:border-accent/40 hover:bg-white/10">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/20 text-accent transition group-hover:bg-primary/30">
                    <Icon size={24} />
                  </div>
                  <h3 className="font-heading text-xl font-bold">{topic.title}</h3>
                  <p className="mt-3 leading-relaxed text-gray-400">
                    {topic.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
