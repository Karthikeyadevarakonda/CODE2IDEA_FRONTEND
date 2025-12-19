import { useState, useEffect } from "react";
import { AiOutlineRobot } from "react-icons/ai";
import { FaServer } from "react-icons/fa";
import CustomDropdown from "../components/CustomDropdown";
import { AiOutlineSearch, AiOutlineFolder } from "react-icons/ai";
import { AiOutlineBulb } from "react-icons/ai";
import PastIdeaCard from "./PastIdeaCard";

export default function PastIdeas() {
  const [ideas, setIdeas] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [activeTag, setActiveTag] = useState("");

  const categories = ["AI", "IoT", "Smart City", "HealthTech", "Full Stack"];
  const tagIcons = {
    AI: <AiOutlineRobot />,
    "Full Stack": <FaServer />,
    IoT: "📡",
    "Smart City": "🏙️",
    HealthTech: "💊",
  };

  useEffect(() => {
    fetch("/data/student-dashboard.json")
      .then((res) => res.json())
      .then((data) => setIdeas(data.pastIdeasRepository));
  }, []);

  const filteredIdeas = ideas.filter((idea) => {
    const text = `${idea.title} ${idea.description}`.toLowerCase();

    const matchesSearch = text.includes(search.toLowerCase());
    const matchesCategory = category
      ? idea.categories.includes(category)
      : true;
    const matchesTag = activeTag ? idea.categories.includes(activeTag) : true;

    return matchesSearch && matchesCategory && matchesTag;
  });

  return (
    <div className="min-h-screen bg-gray-50 p-0 sm:p-6 md:p-10 space-y-8">
      <h1 className="flex items-center text-xl md:text-3xl  text-gray-900 mb-6 gap-3">
        <AiOutlineBulb className="text-emerald-600" size={36} />
        Past Ideas Repository
      </h1>

      {/* Top Row: Search + Dropdown */}
      <div className="bg-white rounded-xl shadow p-4 md:p-5 flex flex-col md:flex-row items-center gap-4 mb-6">
        {/* Search Input */}

        <div className="relative w-full md:w-3/4">
          <AiOutlineSearch
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={20}
          />
          <input
            type="text"
            placeholder="Search ideas..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 border border-gray-300 rounded-md p-3 shadow-sm focus:ring-emerald-500 focus:border-emerald-500 transition"
          />
        </div>

        {/* Category Dropdown */}
        <div className="w-full md:w-1/4 relative">
          <AiOutlineFolder
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={20}
          />
          <CustomDropdown
            label="Category"
            options={categories}
            value={category}
            onChange={setCategory}
            className="pl-10"
          />
        </div>
      </div>

      {/* Bottom Row: Tag Buttons */}
      <div className="flex gap-2 overflow-x-auto mb-6 py-1 scrollbar-hide">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`flex items-center gap-1 px-4 py-2.5 sm:px-6 sm:py-2 text-sm sm:text-base rounded-md sm:rounded-full border transition-all transform hover:scale-105 shadow-sm flex-shrink-0 ${
              activeTag === cat
                ? "bg-emerald-600 text-white border-emerald-600"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
            }`}
            onClick={() => setActiveTag(activeTag === cat ? "" : cat)}
          >
            {tagIcons[cat]} {cat}
          </button>
        ))}

        {/* Clear Filter Button */}
        <button
          className="flex items-center gap-1 px-4 py-1 sm:px-6 sm:py-2 text-sm sm:text-base rounded-full border border-red-400 text-red-500 hover:bg-red-50 transition-all shadow-sm flex-shrink-0"
          onClick={() => {
            setActiveTag("");
            setCategory("");
            setSearch("");
          }}
        >
          ❌ Clear Filter
        </button>
      </div>

      {/* Ideas List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredIdeas.map((idea) => (
          <PastIdeaCard key={idea.ideaId} idea={idea} tagIcons={tagIcons} />
        ))}

        {filteredIdeas.length === 0 && (
          <p className="text-gray-500 col-span-full text-center mt-6 text-lg">
            No ideas found.
          </p>
        )}
      </div>
    </div>
  );
}
