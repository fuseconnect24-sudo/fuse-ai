import Link from "next/link";

/* ── Services Data ── */
const services = [
  {
    title: "AI Agents & Digital Employees",
    description:
      "Deploy autonomous AI agents capable of performing repetitive business tasks, customer communication, research, analysis, and workflow execution.",
    features: [
      "Customer Support Agents",
      "Research Agents",
      "Sales Agents",
      "Internal Copilots",
      "Executive Assistants",
      "Multi-Agent Systems",
    ],
    icon: "🤖",
  },
  {
    title: "Workflow Automation",
    description:
      "Connect your tools, teams, and data into intelligent workflows that run automatically — eliminating bottlenecks and manual handoffs.",
    features: [
      "n8n Automation",
      "CRM Automation",
      "Lead Routing",
      "Approval Workflows",
      "Notifications",
      "Business Process Automation",
    ],
    icon: "⚙️",
  },
  {
    title: "Document Intelligence",
    description:
      "Extract, classify, analyze, and process business documents using AI — turning unstructured data into actionable insights.",
    features: [
      "OCR Pipelines",
      "PDF Processing",
      "Contract Analysis",
      "Credit Report Analysis",
      "Open Banking Data Processing",
      "Intelligent Data Extraction",
    ],
    icon: "📄",
  },
  {
    title: "AI for Financial Services",
    description:
      "Specialized AI solutions for lenders, fintechs, banks, and open banking platforms — built for compliance and scale.",
    features: [
      "Affordability Assessment",
      "Risk Analysis",
      "Fraud Detection",
      "Transaction Categorization",
      "Financial Insights",
      "Underwriting Support",
    ],
    icon: "💹",
  },
  {
    title: "Customer Support Automation",
    description:
      "Provide instant, accurate support through AI-powered agents available 24/7 across every channel.",
    features: [
      "Website Chatbots",
      "WhatsApp Agents",
      "Voice Agents",
      "Email Automation",
      "Ticket Triage",
      "Knowledge Base Assistants",
    ],
    icon: "💬",
  },
  {
    title: "Lead Generation Systems",
    description:
      "Build AI-powered outbound and inbound lead generation engines that find, qualify, and nurture prospects automatically.",
    features: [
      "Prospect Research",
      "Lead Scoring",
      "Personalized Outreach",
      "LinkedIn Automation",
      "Email Sequences",
      "CRM Sync",
    ],
    icon: "🎯",
  },
  {
    title: "Data Engineering & AI Infrastructure",
    description:
      "Build the scalable foundations your AI-powered organization needs — from data pipelines to cloud infrastructure.",
    features: [
      "Data Pipelines",
      "Data Warehousing",
      "AWS Solutions",
      "API Integrations",
      "ETL Workflows",
      "AI Infrastructure",
    ],
    icon: "☁️",
  },
  {
    title: "Custom AI Solutions",
    description:
      "Bespoke AI products designed around your unique business challenges — no off-the-shelf limitations.",
    features: [
      "RAG Systems",
      "Internal Knowledge Assistants",
      "AI Dashboards",
      "Industry-specific Platforms",
      "Predictive Analytics",
      "Enterprise AI Systems",
    ],
    icon: "🧠",
  },
];

/* ── Industries ── */
const industries = [
  { name: "Insurance", icon: "🛡️", pain: "Manual claims processing", outcome: "80% faster claims with AI triage" },
  { name: "Banking & Fintech", icon: "🏦", pain: "Slow underwriting & compliance", outcome: "Automated risk assessment in seconds" },
  { name: "Healthcare", icon: "🏥", pain: "Administrative overload", outcome: "AI-assisted patient workflows" },
  { name: "Legal", icon: "⚖️", pain: "Hours on document review", outcome: "Instant contract analysis & extraction" },
  { name: "Recruitment", icon: "👥", pain: "Manual candidate screening", outcome: "AI-powered talent matching" },
  { name: "Real Estate", icon: "🏢", pain: "Repetitive client follow-ups", outcome: "Automated lead nurturing 24/7" },
  { name: "E-commerce", icon: "🛒", pain: "Support ticket overload", outcome: "AI agents handling 90% of queries" },
  { name: "Political Campaigns", icon: "🗳️", pain: "Voter outreach at scale", outcome: "Personalized AI-driven engagement" },
  { name: "Government", icon: "🏛️", pain: "Slow citizen services", outcome: "Intelligent process automation" },
];

/* ── Process ── */
const processSteps = [
  { step: "01", title: "Discovery & Process Audit", description: "We identify repetitive work and high-impact automation opportunities across your operations." },
  { step: "02", title: "Solution Design", description: "We architect AI agents, workflows, and integrations tailored to your systems and goals." },
  { step: "03", title: "Build & Integration", description: "We build and integrate with your existing tools — CRMs, ERPs, databases, and APIs." },
  { step: "04", title: "Testing & Human Oversight", description: "Rigorous testing with human-in-the-loop validation to ensure reliability and compliance." },
  { step: "05", title: "Deployment & Optimization", description: "Go live with continuous monitoring, performance tracking, and iterative improvement." },
];

/* ── Tech Stack ── */
const techStack = [
  "OpenAI", "Anthropic", "n8n", "LangChain", "AWS", "Python",
  "FastAPI", "Docker", "PostgreSQL", "Supabase", "Pinecone", "Azure AI",
];

/* ── Stats ── */
const stats = [
  { value: "80%", label: "Reduction in Manual Work" },
  { value: "24/7", label: "AI Operations" },
  { value: "10x", label: "Faster Processes" },
  { value: "60%", label: "Lower Operational Costs" },
];

export default function Services() {
  return (
    <>
      {/* ════════ HERO ════════ */}
      <section className="relative flex min-h-[85vh] flex-col items-center justify-center overflow-hidden px-6 text-center">
        {/* Background glows */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/4 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-blue-600/15 blur-[140px] animate-pulse-glow" />
          <div className="absolute right-1/4 top-1/3 h-[400px] w-[400px] rounded-full bg-purple-600/15 blur-[120px] animate-pulse-glow" />
          <div className="absolute left-1/4 bottom-1/4 h-[300px] w-[300px] rounded-full bg-indigo-600/10 blur-[100px] animate-pulse-glow" />
        </div>

        <div className="relative z-10 max-w-4xl space-y-6">
          <div className="inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-gray-400 backdrop-blur-sm">
            AI Agents, Automation &amp; Intelligent Systems
          </div>
          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            AI Systems That Work Like{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Your Best Employees
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-400 sm:text-xl">
            We design AI agents, intelligent workflows, and business automations
            that eliminate manual work, reduce costs, and scale operations.
          </p>
          <div className="flex flex-col items-center gap-4 pt-4 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className="rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
            >
              Book Strategy Call
            </Link>
            <a
              href="#solutions"
              className="rounded-full border border-white/20 px-8 py-3.5 text-sm font-semibold text-gray-300 transition-all hover:border-white/40 hover:text-white"
            >
              Explore Solutions
            </a>
          </div>
        </div>
      </section>

      {/* ════════ SERVICES GRID ════════ */}
      <section id="solutions" className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-16 text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-blue-400">
            What We Build
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            End-to-End AI Solutions
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-400">
            From autonomous agents to data pipelines — everything your business needs
            to operate with AI-powered digital workers.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="glass glass-hover group rounded-2xl p-6 transition-all duration-300"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 text-2xl">
                {service.icon}
              </div>
              <h3 className="mb-2 text-base font-semibold">{service.title}</h3>
              <p className="mb-4 text-sm leading-relaxed text-gray-400">
                {service.description}
              </p>
              <ul className="flex flex-wrap gap-1.5">
                {service.features.map((f) => (
                  <li
                    key={f}
                    className="rounded-full bg-white/5 px-2.5 py-0.5 text-[11px] text-gray-400"
                  >
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ════════ INDUSTRIES ════════ */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-16 text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-purple-400">
            Industries
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Industries We Serve
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind) => (
            <div
              key={ind.name}
              className="glass glass-hover rounded-2xl p-6 transition-all duration-300"
            >
              <div className="mb-3 text-2xl">{ind.icon}</div>
              <h3 className="text-base font-semibold">{ind.name}</h3>
              <p className="mt-1 text-sm text-red-400/80">⚠ {ind.pain}</p>
              <p className="mt-1 text-sm text-emerald-400/80">✓ {ind.outcome}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ════════ HOW WE WORK ════════ */}
      <section className="mx-auto max-w-4xl px-6 py-24">
        <div className="mb-16 text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-blue-400">
            Process
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">How We Work</h2>
        </div>

        <div className="relative space-y-8">
          {/* Vertical line */}
          <div className="absolute left-[23px] top-2 hidden h-[calc(100%-16px)] w-px bg-gradient-to-b from-blue-500/50 via-purple-500/50 to-transparent sm:block" />

          {processSteps.map((p) => (
            <div key={p.step} className="flex gap-6">
              <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-sm font-bold">
                {p.step}
              </div>
              <div className="glass rounded-2xl p-6 flex-1">
                <h3 className="font-semibold">{p.title}</h3>
                <p className="mt-1 text-sm text-gray-400">{p.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ════════ TECH STACK ════════ */}
      <section className="mx-auto max-w-5xl px-6 py-24 text-center">
        <p className="text-sm font-medium uppercase tracking-widest text-purple-400">
          Technology
        </p>
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
          Powered By Enterprise AI Technologies
        </h2>

        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="glass rounded-full px-5 py-2 text-sm text-gray-300 transition-colors hover:text-white"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* ════════ WHY FUSEAI ════════ */}
      <section className="mx-auto max-w-5xl px-6 py-24">
        <div className="mb-16 text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-blue-400">
            Impact
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Why FuseAI</h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="gradient-border glass rounded-2xl p-6 text-center"
            >
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="mt-2 text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {[
            { icon: "👤", text: "Human-in-the-loop safety on every deployment" },
            { icon: "🔒", text: "Enterprise-grade security & data privacy" },
          ].map((item) => (
            <div
              key={item.text}
              className="glass rounded-2xl p-5 flex items-center gap-4"
            >
              <span className="text-xl">{item.icon}</span>
              <span className="text-sm text-gray-300">{item.text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ════════ FINAL CTA ════════ */}
      <section className="mx-auto max-w-4xl px-6 py-24 text-center">
        <div className="gradient-border glass rounded-3xl p-12 sm:p-16">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Ready to Build Your{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              AI Workforce?
            </span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto">
            Whether you need a single automation or an entire AI-powered operating
            system, FuseAI can help.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className="rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
            >
              Schedule Consultation
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-white/20 px-8 py-3.5 text-sm font-semibold text-gray-300 transition-all hover:border-white/40 hover:text-white"
            >
              Get Free AI Audit
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
