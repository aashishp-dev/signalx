import Navbar from "@/components/Navbar";

export default function ForecastPage() {
  return (
    <main className="min-h-screen bg-black text-white p-10">
      <Navbar />

      <h1 className="text-5xl font-bold mb-8">
        SignalX Forecast Engine
      </h1>

      <p className="text-zinc-400 mb-10">
        Predicting future student risk trends based on AI intelligence signals.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-zinc-900 border border-cyan-500/20 p-6 rounded-xl">
          <h2 className="text-xl font-bold mb-4">30 Day Forecast</h2>
          <p>Placement Anxiety: 65%</p>
          <p>Burnout Risk: 52%</p>
          <p>Internship Scarcity: 70%</p>
        </div>

        <div className="bg-zinc-900 border border-orange-500/20 p-6 rounded-xl">
          <h2 className="text-xl font-bold mb-4">60 Day Forecast</h2>
          <p>Placement Anxiety: 72%</p>
          <p>Burnout Risk: 58%</p>
          <p>Internship Scarcity: 75%</p>
        </div>

        <div className="bg-zinc-900 border border-red-500/20 p-6 rounded-xl">
          <h2 className="text-xl font-bold mb-4">90 Day Forecast</h2>
          <p>Placement Anxiety: 80%</p>
          <p>Burnout Risk: 66%</p>
          <p>Internship Scarcity: 82%</p>
        </div>
      </div>
    </main>
  );
}