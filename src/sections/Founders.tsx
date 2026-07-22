import { ExternalLink } from "lucide-react";
import { FOUNDERS } from "../data/content";
import { LinkedInIcon } from "../components/SocialIcons";
import { ScrollReveal } from "../components/ScrollReveal";

export function Founders() {
  return (
    <section id="founders" className="section-padding bg-surface">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <p className="text-center text-sm font-semibold tracking-widest text-primary uppercase">
            Leadership
          </p>
          <h2 className="mt-4 text-center font-heading text-4xl font-bold text-secondary md:text-5xl">
            The people behind goAI
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-center text-lg text-gray-600 dark:text-gray-300">
            We didn&apos;t set out to build a services company. We set out to end
            the need for one.
          </p>
        </ScrollReveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FOUNDERS.map((leader, i) => (
            <ScrollReveal key={leader.name} delay={i * 0.07} animation="scale">
              <div className="group flex h-full flex-col rounded-3xl border border-gray-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800 dark:hover:border-accent/40">
                <div className="mb-5 flex items-center gap-4">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/80 font-heading text-lg font-bold text-white shadow-md ring-2 ring-accent/20 transition group-hover:scale-105">
                    {leader.initials}
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-bold text-secondary">
                      {leader.name}
                    </h3>
                    <p className="text-sm font-medium text-primary">{leader.role}</p>
                  </div>
                </div>
                <p className="flex-1 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                  {leader.biography}
                </p>
                <a
                  href={leader.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-accent"
                  aria-label={`Connect with ${leader.name} on LinkedIn`}
                >
                  <LinkedInIcon size={16} />
                  Connect on LinkedIn
                  <ExternalLink size={12} />
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
