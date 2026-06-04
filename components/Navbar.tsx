export default function Navbar() {
  return (
    <div className="flex gap-6 mb-8 text-cyan-400 font-medium">
      <a href="/">Home</a>
      <a href="/dashboard">Dashboard</a>
      <a href="/analyze">Analyze</a>
      <a href="/forecast">Forecast</a>
      <a href="/heatmap">Heatmap</a>
    </div>
  );
}