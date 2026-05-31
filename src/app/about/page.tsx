export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="relative px-6 py-24 sm:py-32">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute right-1/3 top-0 h-[400px] w-[400px] rounded-full bg-purple-500/10 blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            About{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Fuse AI
            </span>
          </h1>
          <p className="mt-6 text-lg text-gray-400">
            We&apos;re a team of AI engineers and automation specialists building the
            future of business operations.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl font-bold">Our Mission</h2>
            <p className="mt-4 text-gray-400 leading-relaxed">
              At Fuse AI, we believe every business deserves access to cutting-edge
              AI automation. We bridge the gap between complex AI technology and
              real-world business needs — delivering solutions that are practical,
              scalable, and transformative.
            </p>
            <p className="mt-4 text-gray-400 leading-relaxed">
              From startups to enterprises, we design autonomous agents and
              intelligent workflows that eliminate manual toil, reduce errors, and
              unlock new possibilities.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <div className="grid grid-cols-2 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  50+
                </div>
                <div className="mt-1 text-sm text-gray-400">Projects Delivered</div>
              </div>
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  99%
                </div>
                <div className="mt-1 text-sm text-gray-400">Uptime SLA</div>
              </div>
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  10x
                </div>
                <div className="mt-1 text-sm text-gray-400">Faster Operations</div>
              </div>
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  24/7
                </div>
                <div className="mt-1 text-sm text-gray-400">Autonomous Agents</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="mb-12 text-center text-3xl font-bold">What Drives Us</h2>
        <div className="grid gap-6 sm:grid-cols-3">
          {[
            {
              title: "Automation First",
              description:
                "Every repetitive process is an opportunity. We find them and automate them with precision.",
            },
            {
              title: "Data Sovereignty",
              description:
                "Your data stays yours. We deploy on private infrastructure with zero external dependencies when needed.",
            },
            {
              title: "Relentless Reliability",
              description:
                "Our agents run 24/7 with built-in monitoring, failovers, and self-healing capabilities.",
            },
          ].map((value) => (
            <div
              key={value.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <h3 className="mb-2 text-lg font-semibold">{value.title}</h3>
              <p className="text-sm text-gray-400">{value.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
