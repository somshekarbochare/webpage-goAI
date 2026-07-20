import { useState, type FormEvent } from "react";
import { Link2, Mail, Send } from "lucide-react";
import { BRAND } from "../data/content";
import { ScrollReveal } from "../components/ScrollReveal";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <p className="text-center text-sm font-semibold tracking-widest text-primary uppercase">
            Contact
          </p>
          <h2 className="mt-4 text-center font-heading text-4xl font-bold text-secondary md:text-5xl">
            Let&apos;s explore what&apos;s possible
          </h2>
        </ScrollReveal>

        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          <ScrollReveal animation="slide">
            <div className="space-y-8">
              <div>
                <h3 className="font-heading text-xl font-bold text-secondary">
                  Get in touch
                </h3>
                <p className="mt-3 text-gray-600">
                  Whether you&apos;re exploring AI transformation or ready to
                  deploy APDM at scale, we&apos;d love to hear from you.
                </p>
              </div>

              <div className="space-y-4">
                <a
                  href={`mailto:${BRAND.email}`}
                  className="flex items-center gap-3 text-gray-700 transition hover:text-primary"
                >
                  <Mail className="text-primary" size={20} />
                  {BRAND.email}
                </a>
                <a
                  href={`mailto:${BRAND.enterpriseEmail}`}
                  className="flex items-center gap-3 text-gray-700 transition hover:text-primary"
                >
                  <Mail className="text-primary" size={20} />
                  {BRAND.enterpriseEmail}
                </a>
              </div>

              <div className="flex gap-4">
                <a
                  href={BRAND.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-gray-200 text-gray-600 transition hover:border-primary hover:text-primary"
                  aria-label="LinkedIn"
                >
                  <Link2 size={20} />
                </a>
                <a
                  href={BRAND.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-gray-200 text-gray-600 transition hover:border-primary hover:text-primary"
                  aria-label="X (Twitter)"
                >
                  <Link2 size={20} />
                </a>
              </div>

              <div>
                <h4 className="text-sm font-semibold tracking-wide text-gray-500 uppercase">
                  Global Presence
                </h4>
                <div className="mt-3 flex flex-wrap gap-2">
                  {BRAND.locations.map((loc) => (
                    <span
                      key={loc}
                      className="rounded-full bg-gray-100 px-4 py-2 text-sm text-gray-700"
                    >
                      {loc}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            {submitted ? (
              <div className="flex h-full items-center justify-center rounded-3xl border border-green-200 bg-green-50 p-12 text-center">
                <div>
                  <p className="font-heading text-2xl font-bold text-green-800">
                    Thank you!
                  </p>
                  <p className="mt-3 text-green-700">
                    We&apos;ll be in touch shortly. For immediate inquiries,
                    email us at {BRAND.email}.
                  </p>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      First Name
                    </label>
                    <input
                      required
                      type="text"
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 text-secondary outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      Last Name
                    </label>
                    <input
                      required
                      type="text"
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 text-secondary outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                </div>
                <div className="mt-5">
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Work Email
                  </label>
                  <input
                    required
                    type="email"
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 text-secondary outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <div className="mt-5">
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Company
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 text-secondary outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <div className="mt-5">
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    className="w-full resize-none rounded-xl border border-gray-200 px-4 py-3 text-secondary outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <button
                  type="submit"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-4 font-semibold text-white transition hover:bg-primary/90"
                >
                  Send Message
                  <Send size={18} />
                </button>
              </form>
            )}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
