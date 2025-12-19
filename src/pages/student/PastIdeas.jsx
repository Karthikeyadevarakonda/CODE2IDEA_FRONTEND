export default function PastIdeas({ ideas }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md">
      <h2 className="text-xl font-semibold mb-6 text-gray-800 flex items-center gap-2">
        💡 Past Ideas Repository
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {ideas.map((idea) => (
          <div
            key={idea.ideaId}
            className="border border-gray-200 rounded-xl p-4 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">📝</span>
              <p className="font-semibold text-gray-800">{idea.title}</p>
            </div>

            <p className="text-sm text-gray-500 mb-2">
              {idea.department} • {idea.contestYear}
            </p>

            <div className="flex flex-wrap gap-2">
              {idea.categories.map((c) => (
                <span
                  key={c}
                  className="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-700 font-medium"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
