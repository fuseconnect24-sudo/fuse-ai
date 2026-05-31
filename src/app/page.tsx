import Link from "next/link";

const services = [
  {
    title: "AI Agents & Digital Employees",
    description: "Autonomous agents for support, research, sales, and workflow execution.",
    icon: "🤖",
  },
  {
    title: "Workflow Automation",
    description: "Intelligent workflows that connect tools, teams, and data automatically.",
    icon: "⚙️",
  },
  {
    title: "Document Intelligence",
    description: "Extract and process structured data from any business document using AI.",
    icon: "📄",
  },
  {
    title: "AI for Financial Services",
    description: "Risk analysis, fraud detection, and underwriting automation for fintechs.",
    icon: "💹",
  },
  {
    title: "Customer Support Automation",
    description: "24/7 AI agents across chat, WhatsApp, voice, and email channels.",
    icon: "💬",
  },
  {
    title: "Custom AI Solutions",
    description: "RAG systems, knowledge assistants, and industry-specific AI platforms.",
    icon: "🧠",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden px-6 text-center">
        {/* Background glow */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/4 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-500/20 blur-[120px]" />
          <div className="absolute right-1/4 top-1/3 h-[300px] w-[300px] rounded-full bg-purple-500/20 blur-[100px]" />
        </div>

        <div className="relative z-10 max-w-4xl space-y-6">
          <div className="inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-gray-400 backdrop-blur-sm">
            Building AI Employees, Agents & Automations That Run Businesses
          </div>
          <h1 className="text-5xl font-bold leading-tight tracking-tight sm:text-7xl">
            Your AI Workforce.{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Built & Deployed.
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-400 sm:text-xl">
            We design AI agents, intelligent workflows, and business automations
            that eliminate manual work, reduce costs, and scale operations.
          </p>
          <div className="flex flex-col items-center gap-4 pt-4 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className="rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-3 text-sm font-medium text-white transition-all hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
            >
              Book Strategy Call
            </Link>
            <Link
              href="/services"
              className="rounded-full border border-white/20 px-8 py-3 text-sm font-medium text-gray-300 transition-all hover:border-white/40 hover:text-white"
            >
              Explore Solutions
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-16 text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-blue-400">What We Build</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">AI Solutions for Every Business</h2>
          <p className="mt-4 text-gray-400">
            From autonomous agents to intelligent workflows — we handle it all
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="glass glass-hover group rounded-2xl p-6 transition-all duration-300"
            >
              <div className="mb-4 text-3xl">{service.icon}</div>
              <h3 className="mb-2 text-lg font-semibold">{service.title}</h3>
              <p className="text-sm text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="text-sm text-gray-400 underline underline-offset-4 transition-colors hover:text-white"
          >
            Learn more about our services →
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto max-w-4xl px-6 py-24 text-center">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-12 sm:p-16">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Ready to Build Your{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">AI Workforce?</span>
          </h2>
          <p className="mt-4 text-gray-400">
            Whether you need a single automation or an entire AI-powered operating system, FuseAI can help.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className="rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-3 text-sm font-medium text-white transition-all hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
            >
              Get Started Today
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-white/20 px-8 py-3 text-sm font-medium text-gray-300 transition-all hover:border-white/40 hover:text-white"
            >
              Book a Free Call
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
