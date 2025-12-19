import { useNavigate } from "react-router-dom";

export default function PastIdeaCard({ idea, tagIcons }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/past-ideas/${idea.ideaId}`)}
      className="bg-white rounded-3xl shadow-lg p-6 transition hover:shadow-2xl hover:scale-[1.02] cursor-pointer"
    >
      <h3 className="text-xl font-semibold text-gray-900 mb-1">{idea.title}</h3>

      <p className="text-gray-500 text-sm">
        {idea.department} • {idea.contestYear}
      </p>

      <div className="flex flex-wrap gap-2 mt-4">
        {idea.categories.map((c) => (
          <span
            key={c}
            className="text-xs bg-gray-100 px-3 py-1 rounded-full flex items-center gap-1 font-medium"
          >
            {tagIcons[c]} {c}
          </span>
        ))}
      </div>
    </div>
  );
}
