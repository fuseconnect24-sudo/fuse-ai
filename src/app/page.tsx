export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white">
      <div className="text-center space-y-6 px-6">
        <h1 className="text-5xl font-bold tracking-tight sm:text-7xl">
          Fuse AI
        </h1>
        <p className="text-lg text-gray-400 max-w-xl mx-auto sm:text-xl">
          Intelligent automation solutions powered by AI.
          <br />
          We help businesses scale with custom AI agents and workflows.
        </p>
        <div className="pt-4">
          <span className="inline-block rounded-full border border-gray-700 px-5 py-2 text-sm text-gray-300">
            Coming Soon
          </span>
        </div>
      </div>
    </main>
  );
}
