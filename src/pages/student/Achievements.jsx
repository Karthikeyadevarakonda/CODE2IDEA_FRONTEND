export default function Achievements({ achievements }) {
  if (!achievements || achievements.length === 0) return null;

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md">
      <h2 className="text-xl font-semibold mb-6 flex items-center gap-2 text-gray-800">
        🏆 Achievements
      </h2>

      <div className="flex flex-col gap-3">
        {achievements.map((a, i) => (
          <div
            key={i}
            className="border border-gray-200 rounded-xl p-4 hover:shadow-lg transition-shadow flex flex-col gap-1"
          >
            <p className="font-semibold text-gray-800 flex items-center gap-2">
              🎖 {a.contest}
            </p>
            <p className="text-sm text-gray-500 flex items-center gap-1">
              🏅 Rank: {a.rank}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
