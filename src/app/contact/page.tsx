"use client";

import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: connect to backend/email service
    setSubmitted(true);
  }

  return (
    <>
      {/* Hero */}
      <section className="relative px-6 py-24 sm:py-32">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-purple-500/10 blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Let&apos;s{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Connect
            </span>
          </h1>
          <p className="mt-6 text-lg text-gray-400">
            Ready to automate? Book a free discovery call or send us a message.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-24">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-6 text-xl font-bold">Send a Message</h2>

            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="mb-4 text-4xl">✓</div>
                <h3 className="text-lg font-semibold">Message Sent!</h3>
                <p className="mt-2 text-sm text-gray-400">
                  We&apos;ll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm text-gray-300">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-gray-500 outline-none transition-colors focus:border-blue-500"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm text-gray-300">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-gray-500 outline-none transition-colors focus:border-blue-500"
                    placeholder="you@company.com"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="mb-1.5 block text-sm text-gray-300">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white outline-none transition-colors focus:border-blue-500"
                  >
                    <option value="">Select a service</option>
                    <option value="script-mapping">Script & Name Mapping</option>
                    <option value="db-sync">DB Sync Agents</option>
                    <option value="pdf-parsers">PDF Doc Parsers</option>
                    <option value="api-bridges">Network API Bridges</option>
                    <option value="private-cloud">Private Cloud AI</option>
                    <option value="agentic-ops">Agentic Operations</option>
                    <option value="other">Other / Custom</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm text-gray-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full resize-none rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-gray-500 outline-none transition-colors focus:border-blue-500"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 text-sm font-medium text-white transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-500/25"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Book a Call + Info */}
          <div className="space-y-8">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
              <h2 className="mb-4 text-xl font-bold">Book a Discovery Call</h2>
              <p className="text-sm text-gray-400">
                Schedule a free 30-minute call to discuss your automation needs.
                We&apos;ll explore your workflows and identify the best AI solutions.
              </p>
              <a
                href="#"
                className="mt-6 inline-block rounded-full border border-white/20 px-6 py-2.5 text-sm font-medium text-gray-300 transition-all hover:border-white/40 hover:text-white"
              >
                Schedule a Call →
              </a>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
              <h2 className="mb-4 text-xl font-bold">Quick Info</h2>
              <ul className="space-y-3 text-sm text-gray-400">
                <li className="flex items-start gap-3">
                  <span className="text-blue-400">✉</span>
                  <span>hello@fuseai.dev</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400">⏱</span>
                  <span>Response within 24 hours</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400">🌍</span>
                  <span>Working with clients globally</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
