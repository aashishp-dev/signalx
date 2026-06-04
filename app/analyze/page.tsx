"use client";

import { useState } from "react";

export default function AnalyzePage() {
  const [text, setText] = useState("");
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  async function analyze() {
    try {
      setLoading(true);

      const res = await fetch("/api/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text }),
      });

      const data = await res.json();

      console.log("API RESPONSE:", data);

      setResult(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-black text-white p-4 md:p-10">
      {/* Navbar */}
      <div className="flex flex-wrap gap-4 mb-8 border-b border-zinc-800 pb-4">
        <a href="/" className="text-cyan-400 hover:text-cyan-300">
          Home
        </a>

        <a href="/dashboard" className="text-cyan-400 hover:text-cyan-300">
          Dashboard
        </a>

        <a href="/analyze" className="text-cyan-400 hover:text-cyan-300">
          Analyze
        </a>

        <a href="/forecast" className="text-cyan-400 hover:text-cyan-300">
          Forecast
        </a>

        <a href="/heatmap" className="text-cyan-400 hover:text-cyan-300">
          Heatmap
        </a>
      </div>

      {/* Header */}
      <div className="mb-8 bg-cyan-500/10 border border-cyan-500/20 p-5 rounded-xl">
        <h1 className="text-4xl font-bold mb-2">
          SignalX Intelligence Engine
        </h1>

        <p className="text-zinc-400">
          Analyze student discussions and identify emerging risks before they
          become institutional crises.
        </p>
      </div>

      {/* Input */}
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Paste student discussions here..."
        className="w-full h-52 p-4 rounded-xl bg-zinc-900 border border-zinc-700"
      />

      <button
        onClick={analyze}
        className="mt-4 px-6 py-3 bg-cyan-500 text-black rounded-xl font-bold hover:bg-cyan-400"
      >
        {loading ? "Analyzing..." : "Analyze Signals"}
      </button>

      {/* Results */}
      {result && (
        <div className="mt-10">
          {/* Risk Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="bg-zinc-900 border border-red-500/20 p-5 rounded-xl">
              <p className="text-zinc-400 text-sm">Placement Anxiety</p>
              <h2 className="text-4xl font-bold text-red-400">
                {result.placement_anxiety}%
              </h2>
            </div>

            <div className="bg-zinc-900 border border-orange-500/20 p-5 rounded-xl">
              <p className="text-zinc-400 text-sm">Burnout Risk</p>
              <h2 className="text-4xl font-bold text-orange-400">
                {result.burnout_risk}%
              </h2>
            </div>

            <div className="bg-zinc-900 border border-red-500/20 p-5 rounded-xl">
              <p className="text-zinc-400 text-sm">Internship Scarcity</p>
              <h2 className="text-4xl font-bold text-red-400">
                {result.internship_scarcity}%
              </h2>
            </div>

            <div className="bg-zinc-900 border border-cyan-500/20 p-5 rounded-xl">
              <p className="text-zinc-400 text-sm">Skill Gap Risk</p>
              <h2 className="text-4xl font-bold text-cyan-400">
                {result.skill_gap_risk}%
              </h2>
            </div>

            <div className="bg-zinc-900 border border-green-500/20 p-5 rounded-xl">
              <p className="text-zinc-400 text-sm">Cyber Scam Risk</p>
              <h2 className="text-4xl font-bold text-green-400">
                {result.cyber_scam_risk}%
              </h2>
            </div>
          </div>

          {/* Root Causes */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Root Causes</h2>

            <div className="space-y-3">
              {result.root_causes?.map(
                (cause: string, index: number) => (
                  <div
                    key={index}
                    className="bg-zinc-900 border border-zinc-800 p-4 rounded-lg"
                  >
                    {cause}
                  </div>
                )
              )}
            </div>
          </div>

          {/* Forecast */}
          <div className="mt-8 bg-cyan-500/10 border border-cyan-500/20 p-6 rounded-xl">
            <h2 className="text-2xl font-bold mb-3">
              Future Forecast
            </h2>

            <p>{result.future_forecast}</p>
          </div>

          {/* Recommendations */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">
              Recommendations
            </h2>

            <div className="space-y-3">
              {result.recommendations?.map(
                (rec: string, index: number) => (
                  <div
                    key={index}
                    className="bg-zinc-900 border border-cyan-500/20 p-4 rounded-lg"
                  >
                    {rec}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}