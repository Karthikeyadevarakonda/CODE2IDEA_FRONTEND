export default function EnrolledEvents({ events }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md">
      <h2 className="text-xl font-semibold mb-6 flex items-center gap-2 text-gray-800">
        🏅 Enrolled Events
      </h2>

      {/* Live Events */}
      <h3 className="font-medium text-emerald-600 mb-4 flex items-center gap-1">
        🔴 Live
      </h3>
      <div className="flex flex-col gap-3">
        {events.live.map((e) => (
          <div
            key={e.contestId}
            className="border border-gray-200 rounded-xl p-4 hover:shadow-lg transition-shadow flex flex-col gap-1"
          >
            <p className="font-semibold text-gray-800 flex items-center gap-2">
              🟢 {e.title}
            </p>
            <p className="text-sm text-gray-500">
              💡 Idea: {e.idea.title} • 📊 Votes: {e.idea.votes} • ⭐ Avg Score:{" "}
              {e.idea.averageScore}
            </p>
          </div>
        ))}
      </div>

      {/* Past Events */}
      <h3 className="font-medium text-gray-600 mt-6 mb-4 flex items-center gap-1">
        ⏮ Past
      </h3>
      <div className="flex flex-col gap-3">
        {events.past.map((e) => (
          <div
            key={e.contestId}
            className="border border-gray-200 rounded-xl p-4 hover:shadow-lg transition-shadow flex flex-col gap-1"
          >
            <p className="font-semibold text-gray-800 flex items-center gap-2">
              📜 {e.title}
            </p>
            <p className="text-sm text-gray-500">
              🏆 Rank: {e.idea.rank} • ⭐ Score: {e.idea.finalScore}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
