import Link from "next/link";

const services = [
  {
    title: "Script & Name Mapping",
    description:
      "Automated script generation and intelligent entity name mapping across disparate systems. We build agents that understand your naming conventions and translate between platforms seamlessly.",
    features: ["Auto-generate migration scripts", "Cross-system entity resolution", "Intelligent naming standardization"],
    icon: "⚡",
  },
  {
    title: "DB Sync Agents",
    description:
      "AI-powered agents that keep your databases in perfect sync across environments. Real-time, conflict-aware, and self-healing — no manual intervention required.",
    features: ["Real-time bi-directional sync", "Conflict detection & resolution", "Schema drift monitoring"],
    icon: "🔄",
  },
  {
    title: "PDF Doc Parsers",
    description:
      "Extract structured data from any PDF document with intelligent parsing. Handles invoices, contracts, reports, and custom document types with high accuracy.",
    features: ["Multi-format document ingestion", "Custom field extraction", "Validation & error handling"],
    icon: "📄",
  },
  {
    title: "Network API Bridges",
    description:
      "Seamlessly connect disparate APIs with intelligent middleware. We build bridges that handle rate limiting, retries, transformations, and protocol translation.",
    features: ["Protocol translation (REST, gRPC, SOAP)", "Rate limiting & retry logic", "Real-time data transformation"],
    icon: "🌐",
  },
  {
    title: "Private Cloud AI",
    description:
      "Deploy AI models on your own infrastructure with full data sovereignty. No data leaves your network — ever. Custom fine-tuned models tailored to your domain.",
    features: ["On-premise LLM deployment", "Custom model fine-tuning", "Zero data leakage guarantee"],
    icon: "☁️",
  },
  {
    title: "Agentic Operations",
    description:
      "Autonomous AI agents that manage, monitor, and optimize your operations around the clock. Self-healing systems that escalate only when human judgment is needed.",
    features: ["24/7 autonomous monitoring", "Self-healing workflows", "Intelligent escalation"],
    icon: "🤖",
  },
];

export default function Services() {
  return (
    <>
      {/* Hero */}
      <section className="relative px-6 py-24 sm:py-32">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/4 top-0 h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Our{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Services
            </span>
          </h1>
          <p className="mt-6 text-lg text-gray-400">
            End-to-end AI automation solutions — from document parsing to
            autonomous operations.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="space-y-8">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`rounded-2xl border border-white/10 bg-white/5 p-8 transition-all hover:border-white/20 hover:bg-white/[0.08] lg:flex lg:items-center lg:gap-12 ${
                i % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-3xl lg:mb-0 lg:shrink-0">
                {service.icon}
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold">{service.title}</h3>
                <p className="mt-2 text-gray-400">{service.description}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300"
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-4xl px-6 pb-24 text-center">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-12">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Need a Custom Solution?
          </h2>
          <p className="mt-3 text-gray-400">
            Every business is unique. Let&apos;s build automation tailored to yours.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-block rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-3 text-sm font-medium text-white transition-all hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
          >
            Discuss Your Project
          </Link>
        </div>
      </section>
    </>
  );
}
