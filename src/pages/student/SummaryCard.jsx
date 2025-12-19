export default function SummaryCard({ title, value }) {
  // Assign icon based on title (simple example)
  const icons = {
    "Live Events": "🟢",
    "Past Events": "📜",
    Achievements: "🏆",
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-5 flex flex-col items-center justify-center gap-3 hover:shadow-lg transition-shadow">
      <div className="text-4xl">{icons[title] || "📊"}</div>
      <p className="text-gray-500 text-sm font-medium">{title}</p>
      <p className="text-3xl font-bold text-gray-800">{value}</p>
    </div>
  );
}
