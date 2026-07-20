import { ArrowRight } from "lucide-react";
import { BLOG_CATEGORIES } from "../data/content";
import { ScrollReveal } from "../components/ScrollReveal";

const categoryColors: Record<string, string> = {
  APDM: "bg-primary/10 text-primary",
  AI: "bg-accent/10 text-primary",
  "Enterprise Transformation": "bg-purple-100 text-purple-700",
  Engineering: "bg-green-100 text-green-700",
  "Product Development": "bg-orange-100 text-orange-700",
};

export function Blogs() {
  return (
    <section id="blogs" className="bg-gray-50 px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <p className="text-center text-sm font-semibold tracking-widest text-primary uppercase">
            Blogs
          </p>
          <h2 className="mt-4 text-center font-heading text-4xl font-bold text-secondary md:text-5xl">
            Thought leadership
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-center text-lg text-gray-600">
            Insights on APDM, AI, enterprise transformation, and the future of
            software delivery.
          </p>
        </ScrollReveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {BLOG_CATEGORIES.map((post, i) => (
            <ScrollReveal key={post.title} delay={i * 0.07} animation="scale">
              <article className="group flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-6 transition hover:shadow-md">
                <span
                  className={`inline-block w-fit rounded-full px-3 py-1 text-xs font-semibold ${
                    categoryColors[post.category] ?? "bg-gray-100 text-gray-700"
                  }`}
                >
                  {post.category}
                </span>
                <h3 className="mt-4 font-heading text-lg font-bold text-secondary transition group-hover:text-primary">
                  {post.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-600">
                  {post.excerpt}
                </p>
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-xs text-gray-400">{post.date}</span>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary opacity-0 transition group-hover:opacity-100">
                    Read more <ArrowRight size={14} />
                  </span>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
