export default function HeatmapPage() {
  const cities = [
    { city: "Noida", risk: 91 },
    { city: "Delhi", risk: 88 },
    { city: "Bangalore", risk: 67 },
    { city: "Mumbai", risk: 72 },
    { city: "Pune", risk: 59 },
    { city: "Hyderabad", risk: 64 },
  ];

  return (
    <main className="min-h-screen bg-black text-white p-4 md:p-10">
     <div className="grid grid-cols-2 gap-3 mb-8 text-sm">
        <a href="/" className="text-cyan-400">Home</a>
        <a href="/dashboard" className="text-cyan-400">Dashboard</a>
        <a href="/analyze" className="text-cyan-400">Analyze</a>
        <a href="/forecast" className="text-cyan-400">Forecast</a>
        <a href="/heatmap" className="text-cyan-400">Heatmap</a>
      </div>

      <h1 className="text-5xl font-bold mb-8">
        SignalX Risk Heatmap
      </h1>

      <div className="mb-8 bg-zinc-900 p-5 rounded-xl">
        <h2 className="text-2xl font-bold mb-2">
          National Student Risk Intelligence Map
        </h2>

        <p className="text-zinc-400">
          Visualizing emerging student risk signals across major cities.
        </p>
      </div>

      <div className="space-y-4">
        {cities.map((c) => (
          <div
            key={c.city}
            className="bg-zinc-900 border border-zinc-800 rounded-xl p-5"
          >
            <div className="flex justify-between mb-2">
              <span>{c.city}</span>
              <span>{c.risk}%</span>
            </div>

            <div className="w-full bg-zinc-800 rounded-full h-4">
              <div
                className="bg-red-500 h-4 rounded-full"
                style={{ width: `${c.risk}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}