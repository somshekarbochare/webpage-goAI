import { ORIGIN_TIMELINE } from "../data/content";
import { ScrollReveal } from "../components/ScrollReveal";

export function OriginStory() {
  return (
    <section id="origin" className="px-6 py-28">
      <div className="mx-auto max-w-4xl">
        <ScrollReveal>
          <p className="text-center text-sm font-semibold tracking-widest text-primary uppercase">
            Origin Story
          </p>
          <h2 className="mt-4 text-center font-heading text-4xl font-bold text-secondary md:text-5xl">
            How goAI came to be
          </h2>
        </ScrollReveal>

        <div className="relative mt-16">
          <div className="absolute top-0 left-8 h-full w-0.5 bg-primary/20 md:left-1/2 md:-translate-x-px" />

          {ORIGIN_TIMELINE.map((event, i) => (
            <ScrollReveal key={event.title} delay={i * 0.08}>
              <div
                className={`relative mb-12 flex items-start gap-8 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="hidden flex-1 md:block" />
                <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-primary font-heading text-lg font-bold text-white shadow-lg md:absolute md:left-1/2 md:-translate-x-1/2">
                  {i + 1}
                </div>
                <div className="flex-1 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:max-w-md">
                  <h3 className="font-heading text-lg font-bold text-secondary">
                    {event.title}
                  </h3>
                  <p className="mt-2 text-gray-600">{event.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
