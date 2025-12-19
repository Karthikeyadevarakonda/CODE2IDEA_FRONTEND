import { AiOutlineClose } from "react-icons/ai";

export default function IdeaDescriptionModal({ idea, onClose }) {
  if (!idea) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-lg w-full p-6 animate-fadeIn">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-gray-800">{idea.title}</h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800"
          >
            <AiOutlineClose size={22} />
          </button>
        </div>

        <p className="text-sm text-gray-600 mb-2">
          {idea.author.name} • {idea.author.college}
        </p>

        <div className="bg-gray-50 rounded-xl p-4 text-gray-700 text-sm leading-relaxed">
          {idea.description}
        </div>
      </div>
    </div>
  );
}
