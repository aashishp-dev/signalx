export default function DashboardPage() {
  return (
   <main className="min-h-screen bg-black text-white p-4 md:p-4 md:p-10">
      {/* Navbar */}
      <div className="flex flex-wrap gap-4 mb-8 border-b border-zinc-800 pb-4">
        <a href="/" className="text-cyan-400">Home</a>
        <a href="/dashboard" className="text-cyan-400">Dashboard</a>
        <a href="/analyze" className="text-cyan-400">Analyze</a>
        <a href="/forecast" className="text-cyan-400">Forecast</a>
        <a href="/heatmap" className="text-cyan-400">Heatmap</a>
      </div>

      <h1 className="text-5xl font-bold mb-4">
        SignalX Command Center
      </h1>
<div className="bg-cyan-500/10 border border-cyan-500/20 rounded-xl p-4 mb-8">
  <p className="text-cyan-400 font-semibold">
    ● LIVE MONITORING ACTIVE
  </p>

  <p className="text-zinc-300 mt-2">
    Monitoring 50,000+ students across engineering institutions.
    128 critical signals detected in the last 24 hours.
  </p>
</div>
      <p className="text-zinc-400 mb-10">
        AI-powered student risk intelligence dashboard.
      </p>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-10">
        <div className="bg-zinc-900 p-6 rounded-xl">
          <h3 className="text-zinc-400">Students Monitored</h3>
          <p className="text-4xl font-bold text-cyan-400">50K+</p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-xl">
          <h3 className="text-zinc-400">Signal Accuracy</h3>
          <p className="text-4xl font-bold text-green-400">98%</p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-xl">
          <h3 className="text-zinc-400">Forecast Window</h3>
          <p className="text-4xl font-bold text-orange-400">90D</p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-xl">
          <h3 className="text-zinc-400">Active Alerts</h3>
          <p className="text-4xl font-bold text-red-400">128</p>
        </div>
        <div className="bg-zinc-900 p-6 rounded-xl">
  <h3 className="text-zinc-400">
    AI Confidence
  </h3>
  <p className="text-4xl font-bold text-cyan-400">
    97.8%
  </p>
</div>

      </div>

      {/* Risk Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-10">
        <div className="bg-red-500/10 border border-red-500/20 p-5 rounded-xl">
          <p className="text-sm text-zinc-400">Placement Anxiety</p>
          <h2 className="text-3xl font-bold text-red-400">88%</h2>
        </div>

        <div className="bg-orange-500/10 border border-orange-500/20 p-5 rounded-xl">
          <p className="text-sm text-zinc-400">Burnout Risk</p>
          <h2 className="text-3xl font-bold text-orange-400">74%</h2>
        </div>

        <div className="bg-red-500/10 border border-red-500/20 p-5 rounded-xl">
          <p className="text-sm text-zinc-400">Internship Scarcity</p>
          <h2 className="text-3xl font-bold text-red-400">91%</h2>
        </div>

        <div className="bg-cyan-500/10 border border-cyan-500/20 p-5 rounded-xl">
          <p className="text-sm text-zinc-400">Skill Gap Risk</p>
          <h2 className="text-3xl font-bold text-cyan-400">65%</h2>
        </div>

        <div className="bg-green-500/10 border border-green-500/20 p-5 rounded-xl">
          <p className="text-sm text-zinc-400">Cyber Scam Risk</p>
          <h2 className="text-3xl font-bold text-green-400">42%</h2>
        </div>
      </div>
<div className="bg-zinc-900 rounded-xl p-6 mt-8 mb-8">
  <h2 className="text-2xl font-bold mb-4">
    AI Strategic Insights
  </h2>
  <div className="mt-8 bg-red-500/10 border border-red-500/20 rounded-xl p-6">
  <h2 className="text-2xl font-bold text-red-400 mb-4">
    🚨 Critical Alert
  </h2>

  <p className="text-zinc-300">
    SignalX has detected rising placement anxiety and internship scarcity
    across monitored student communities. Forecast models indicate elevated
    stress levels during upcoming recruitment cycles.
  </p>
</div>

  <div className="space-y-4">
    <div className="border-l-4 border-red-500 pl-4">
      Placement anxiety increased 22% among final-year students due to reduced hiring activity.
    </div>

    <div className="border-l-4 border-orange-500 pl-4">
      Burnout signals are rising because of coding rounds, aptitude tests, and interview preparation pressure.
    </div>

    <div className="border-l-4 border-cyan-500 pl-4">
      Skill gaps detected in AI, Cloud Computing, Prompt Engineering, and System Design.
    </div>

    <div className="border-l-4 border-green-500 pl-4">
      Internship fraud attempts have increased through Telegram and unofficial job portals.
    </div>
  </div>
</div>
      {/* Quick Actions */}
      <div className="flex gap-4">
        <a
          href="/analyze"
          className="bg-cyan-500 text-black px-6 py-3 rounded-lg font-bold"
        >
          Analyze Signals
        </a>

        <a
          href="/forecast"
          className="bg-zinc-900 border border-zinc-700 px-6 py-3 rounded-lg"
        >
          View Forecasts
        </a>

        <a
          href="/heatmap"
          className="bg-zinc-900 border border-zinc-700 px-6 py-3 rounded-lg"
        >
          Open Heatmap
        </a>
      </div>

      {/* Executive Summary */}
      <div className="mt-10 bg-cyan-500/10 border border-cyan-500/20 p-6 rounded-xl">
        <h2 className="text-2xl font-bold mb-3">
          Executive Intelligence Summary
        </h2>

        <p className="text-zinc-300">
          SignalX has detected rising placement anxiety, internship scarcity,
          and burnout risk across monitored student communities. Forecast models
          indicate elevated stress levels during upcoming recruitment cycles.
          Early intervention is recommended.
        </p>
      </div>
    </main>
  );
}