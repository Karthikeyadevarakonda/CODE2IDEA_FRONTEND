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
    <div className="relative bg-white rounded-2xl shadow-md p-6 flex overflow-x-auto items-center justify-center gap-4 hover:shadow-xl transition-shadow transform hover:-translate-y-1">
      {/* Icon with colored background */}
      <div className={`p-4 rounded-full ${colors[title]} text-3xl`}>
        {icons[title] || "📊"}
      </div>

      {/* Title */}
      <p className="text-gray-500 text-sm font-semibold">{title}</p>

      {/* Value */}
      <p className="text-3xl font-extrabold text-gray-800">{value}</p>

      {/* Optional subtle background accent */}
      <div className="absolute -top-6 -right-6 w-16 h-16 rounded-full bg-gray-100 opacity-30 mix-blend-multiply" />
    </div>
  );
}
