export default function SummaryCard({ title, value }) {
  const icons = {
    "Live Events": "🟢",
    "Past Events": "📜",
    Achievements: "🏆",
  };

  const colors = {
    "Live Events": "bg-emerald-100 text-emerald-600",
    "Past Events": "bg-blue-100 text-blue-600",
    Achievements: "bg-yellow-100 text-yellow-600",
  };

  return (
    <div
      className="min-w-[220px] relative bg-white shadow sm:rounded-2xl sm:shadow-md 
      p-3 sm:p-6 flex  items-center gap-4 hover:shadow-xl transition"
    >
      <div className={`p-3 rounded-full ${colors[title]} text-3xl`}>
        {icons[title] || "📊"}
      </div>

      <div>
        <p className="text-gray-500 text-sm font-semibold">{title}</p>
        <p className="text-3xl font-extrabold text-gray-800">{value}</p>
      </div>
    </div>
  );
}
