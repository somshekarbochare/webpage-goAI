import { CLIENTS } from "../data/content";
import { ScrollReveal } from "../components/ScrollReveal";

function LogoWall() {
  const doubled = [...CLIENTS, ...CLIENTS];

  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute top-0 left-0 z-10 h-full w-24 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute top-0 right-0 z-10 h-full w-24 bg-gradient-to-l from-white to-transparent" />
      <div className="animate-marquee flex w-max gap-6">
        {doubled.map((client, i) => (
          <div
            key={`${client.name}-${i}`}
            className="group relative w-64 shrink-0"
          >
            <div className="flex h-28 items-center justify-center rounded-2xl border border-gray-200 bg-white px-6 transition hover:border-primary/30 hover:shadow-md">
              <span className="text-center font-heading text-sm font-semibold text-secondary">
                {client.name}
              </span>
            </div>
            <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center rounded-2xl bg-primary/95 px-4 opacity-0 transition group-hover:opacity-100">
              <p className="font-heading text-sm font-bold text-white">
                {client.name}
              </p>
              <p className="mt-1 text-xs text-white/80">{client.industry}</p>
              <p className="mt-1 text-xs text-accent">{client.relationship}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Clients() {
  return (
    <section id="clients" className="bg-gray-50 px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <p className="text-center text-sm font-semibold tracking-widest text-primary uppercase">
            Clients & Partners
          </p>
          <h2 className="mt-4 text-center font-heading text-4xl font-bold text-secondary md:text-5xl">
            Trusted by enterprises worldwide
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-center text-lg text-gray-600">
            Hover to explore our client relationships across industries.
          </p>
        </ScrollReveal>

        <div className="mt-16">
          <LogoWall />
        </div>
      </div>
    </section>
  );
}
