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
              <div className="group flex h-full flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800 dark:hover:border-accent/40">
                <div className="relative bg-gradient-to-br from-primary/5 to-accent/5 p-6 pb-0 dark:from-primary/10 dark:to-accent/5">
                  <div className="mx-auto aspect-square w-full max-w-[200px] overflow-hidden rounded-2xl shadow-md ring-2 ring-white/80 dark:ring-gray-700">
                    <img
                      src={leader.image}
                      alt={`${leader.name} — ${leader.role}`}
                      className="h-full w-full object-cover object-top transition duration-300 group-hover:scale-[1.02]"
                      loading="lazy"
                      decoding="async"
                      width={200}
                      height={200}
                    />
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-7 pt-5">
                  <div className="text-center">
                    <h3 className="font-heading text-lg font-bold text-secondary">
                      {leader.name}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-primary">{leader.role}</p>
                  </div>
                  <p className="mt-4 flex-1 text-center text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                    {leader.biography}
                  </p>
                  <a
                    href={leader.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center justify-center gap-2 text-sm font-semibold text-primary transition hover:text-accent"
                    aria-label={`Connect with ${leader.name} on LinkedIn`}
                  >
                    <LinkedInIcon size={16} />
                    Connect on LinkedIn
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
