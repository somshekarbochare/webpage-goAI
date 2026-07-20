import { ExternalLink, Link2 } from "lucide-react";
import { FOUNDERS } from "../data/content";
import { ScrollReveal } from "../components/ScrollReveal";

export function Founders() {
  return (
    <section id="founders" className="bg-gray-50 px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <p className="text-center text-sm font-semibold tracking-widest text-primary uppercase">
            Founders
          </p>
          <h2 className="mt-4 text-center font-heading text-4xl font-bold text-secondary md:text-5xl">
            The people behind goAI
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-center text-lg text-gray-600">
            We didn&apos;t set out to build a services company. We set out to end
            the need for one.
          </p>
        </ScrollReveal>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {FOUNDERS.map((founder, i) => (
            <ScrollReveal key={founder.name} delay={i * 0.1} animation="scale">
              <div className="h-full rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
                <div className="mb-6 flex items-center gap-5">
                  <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-primary font-heading text-2xl font-bold text-white">
                    {founder.initials}
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold text-secondary">
                      {founder.name}
                    </h3>
                    <p className="text-primary font-medium">{founder.role}</p>
                  </div>
                </div>
                <p className="leading-relaxed text-gray-600">{founder.biography}</p>
                <a
                  href={founder.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-primary/80"
                >
                  <Link2 size={18} />
                  Connect on LinkedIn
                  <ExternalLink size={14} />
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
