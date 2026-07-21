import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PROJECTS } from "../data/content";
import { ScrollReveal } from "../components/ScrollReveal";

export function Projects() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="projects" className="section-padding">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <p className="text-sm font-semibold tracking-widest text-primary uppercase">
            Major Projects
          </p>
          <h2 className="mt-4 font-heading text-4xl font-bold text-secondary md:text-5xl">
            Enterprise expertise in action
          </h2>
          <p className="mt-6 max-w-3xl text-lg text-gray-600 dark:text-gray-300">
            APDM delivers across the full spectrum of enterprise software — from
            greenfield builds to legacy transformation to AI-native intelligence
            layers.
          </p>
        </ScrollReveal>

        <div className="mt-12 space-y-4">
          {PROJECTS.map((project, i) => {
            const isOpen = expanded === i;
            return (
              <ScrollReveal key={project.name} delay={i * 0.06}>
                <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white transition hover:shadow-md dark:border-gray-700 dark:bg-gray-800">
                  <button
                    className="flex w-full items-center justify-between px-6 py-5 text-left"
                    onClick={() => setExpanded(isOpen ? null : i)}
                  >
                    <div>
                      <p className="text-xs font-semibold tracking-wide text-primary uppercase">
                        {project.industry}
                      </p>
                      <h3 className="mt-1 font-heading text-xl font-bold text-secondary">
                        {project.name}
                      </h3>
                    </div>
                    {isOpen ? (
                      <ChevronUp className="shrink-0 text-gray-400" />
                    ) : (
                      <ChevronDown className="shrink-0 text-gray-400" />
                    )}
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-gray-100 px-6 pt-2 pb-6 dark:border-gray-700">
                          <div className="grid gap-6 md:grid-cols-2">
                            <div>
                              <h4 className="text-sm font-semibold text-gray-500 uppercase dark:text-gray-400">
                                Challenge
                              </h4>
                              <p className="mt-2 text-gray-700 dark:text-gray-300">
                                {project.challenge}
                              </p>
                            </div>
                            <div>
                              <h4 className="text-sm font-semibold text-gray-500 uppercase dark:text-gray-400">
                                Solution
                              </h4>
                              <p className="mt-2 text-gray-700 dark:text-gray-300">
                                {project.solution}
                              </p>
                            </div>
                            <div>
                              <h4 className="text-sm font-semibold text-gray-500 uppercase dark:text-gray-400">
                                Outcome
                              </h4>
                              <p className="mt-2 text-gray-700 dark:text-gray-300">
                                {project.outcome}
                              </p>
                            </div>
                            <div>
                              <h4 className="text-sm font-semibold text-gray-500 uppercase dark:text-gray-400">
                                Technologies
                              </h4>
                              <div className="mt-2 flex flex-wrap gap-2">
                                {project.technologies.map((tech) => (
                                  <span
                                    key={tech}
                                    className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
