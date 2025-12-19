import { useState } from "react";
import CustomDropdown from "./components/CustomDropdown";
import { AiOutlineLike, AiFillLike, AiOutlineEye } from "react-icons/ai";
import EnrollmentForm from "./EnrollmentForm";
import IdeaDescriptionModal from "./IdeaDescriptionModel";

export default function EventDetails({ event }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [ideas, setIdeas] = useState(event.ideas || []);
  const [selectedIdea, setSelectedIdea] = useState(null);

  /* ---------- VOTE TOGGLE ---------- */
  const toggleVote = (id) => {
    setIdeas((prev) =>
      prev.map((idea) =>
        idea.ideaId === id
          ? {
              ...idea,
              hasVoted: !idea.hasVoted,
              votes: idea.hasVoted ? idea.votes - 1 : idea.votes + 1,
            }
          : idea
      )
    );
  };

  const filteredIdeas = ideas.filter(
    (idea) =>
      idea.title.toLowerCase().includes(search.toLowerCase()) &&
      (category ? idea.category === category : true)
  );

  return (
    <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-10 space-y-10">
      {/* ================= EVENT HEADER ================= */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">{event.title}</h1>
        <p className="text-gray-600 mt-2">{event.description}</p>

        {/* Meta */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <Meta label="Start" value={event.eventMeta.startDate} />
          <Meta label="End" value={event.eventMeta.endDate} />
          <Meta label="Deadline" value={event.eventMeta.submissionDeadline} />
          <Meta
            label="Registrations"
            value={event.eventMeta.totalRegistrations}
          />
        </div>

        {/* Domains */}
        <div className="flex flex-wrap gap-2 mt-4">
          {event.eventMeta.domains.map((d) => (
            <span
              key={d}
              className="px-3 py-1 text-sm rounded-full bg-emerald-50 text-emerald-700 font-medium"
            >
              {d}
            </span>
          ))}
        </div>
      </div>

      {/* ================= IDEAS SECTION ================= */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Submitted Ideas
        </h2>

        {/* Search + Filter */}
        <div className="flex flex-col md:flex-row gap-3 mb-6 items-center">
          {/* Search Input */}
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search ideas..."
            className="w-full md:w-1/2 border border-gray-400 rounded-lg px-4 py-2 text-sm focus:ring-emerald-500 focus:border-emerald-500 h-10"
          />

          {/* Category Dropdown */}
          <div className="w-full md:w-1/3">
            <CustomDropdown
              label="Category"
              options={event.eventMeta.domains}
              value={category}
              onChange={setCategory}
              compact
            />
          </div>

          {/* Clear Button */}
          <button
            onClick={() => {
              setSearch("");
              setCategory("");
            }}
            className="bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-lg px-20 sm:px-4 py-2 h-10 text-sm transition"
          >
            Clear
          </button>
        </div>

        {/* Horizontal Scrollable Ideas */}
        <div className="flex gap-4 overflow-x-auto pb-2">
          {filteredIdeas.length > 0 ? (
            filteredIdeas.map((idea) => (
              <div
                key={idea.ideaId}
                className="flex-shrink-0 w-64 border border-gray-300 rounded-2xl p-4 flex flex-col justify-between hover:shadow-md transition"
              >
                <div className="space-y-1">
                  <h3 className="font-semibold text-gray-800">{idea.title}</h3>
                  <p className="text-xs text-gray-500">
                    {idea.author.name} • {idea.author.college}
                  </p>

                  <span className="inline-block mt-1 text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-600">
                    {idea.category}
                  </span>
                </div>

                <div className="flex justify-between items-center mt-3">
                  {/* View Description */}
                  <button
                    onClick={() => setSelectedIdea(idea)}
                    className="text-gray-500 hover:text-emerald-600"
                    title="View description"
                  >
                    <AiOutlineEye size={22} />
                  </button>

                  {/* Vote */}
                  <button
                    onClick={() => toggleVote(idea.ideaId)}
                    className="flex flex-col items-center text-emerald-600"
                  >
                    {idea.hasVoted ? (
                      <AiFillLike size={24} />
                    ) : (
                      <AiOutlineLike size={24} />
                    )}
                    <span className="text-xs">{idea.votes}</span>
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center mt-6">No ideas found</p>
          )}
        </div>
      </div>

      {selectedIdea && (
        <IdeaDescriptionModal
          idea={selectedIdea}
          onClose={() => setSelectedIdea(null)}
        />
      )}

      {/* ================= ENROLLMENT FORM ================= */}
      <EnrollmentForm domains={event.eventMeta.domains} />
    </div>
  );
}

/* ---------- SMALL COMPONENTS ---------- */
function Meta({ label, value }) {
  return (
    <div className="bg-gray-100 rounded-xl p-4 text-center">
      <p className="text-xs text-gray-500">{label}</p>
      <p className="font-semibold text-gray-800">{value}</p>
    </div>
  );
}
