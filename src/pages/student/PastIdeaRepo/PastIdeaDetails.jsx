import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import PdfPreviewModal from "./PdfPreviewModel";
import {
  AiOutlineArrowLeft,
  AiOutlineFilePdf,
  AiOutlineDownload,
  AiOutlineEye,
  AiOutlineCalendar,
  AiOutlineApartment,
} from "react-icons/ai";
import { BsLightbulb } from "react-icons/bs";

export default function PastIdeaDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [idea, setIdea] = useState(null);
  const [previewPdf, setPreviewPdf] = useState(null);

  useEffect(() => {
    fetch("/data/past-idea.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.pastIdeasRepository.find(
          (i) => i.ideaId === Number(id)
        );
        setIdea(found);
      });
  }, [id]);

  if (!idea) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="min-h-screen bg-gray-50 px-4 sm:px-8 py-6">
      {/* Back */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-1 text-sm text-emerald-600 hover:underline mb-6"
      >
        <AiOutlineArrowLeft /> Back to Past Ideas
      </button>

      <div className="max-w-5xl mx-auto space-y-8">
        {/* Header */}
        <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-10">
          <div className="flex items-center gap-3 mb-2">
            <BsLightbulb className="text-emerald-600" size={28} />
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
              {idea.title}
            </h1>
          </div>

          {/* Meta */}
          <div className="flex flex-wrap gap-3 mt-4">
            <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-gray-100 text-sm text-gray-700">
              <AiOutlineApartment /> {idea.department}
            </span>
            <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-gray-100 text-sm text-gray-700">
              <AiOutlineCalendar /> {idea.contestYear}
            </span>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-4">
            {idea.categories.map((c) => (
              <span
                key={c}
                className="bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-xs font-semibold"
              >
                {c}
              </span>
            ))}
          </div>
        </div>

        {/* Abstract */}
        <div className="bg-white rounded-3xl shadow p-6 sm:p-8">
          <h2 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <BsLightbulb className="text-emerald-500" />
            Project Abstract
          </h2>
          <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
            {idea.description}
          </p>
        </div>

        {/* Attachments */}
        <div className="bg-white rounded-3xl shadow p-6 sm:p-8">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Attachments
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {idea.attachments.map((file) => (
              <div
                key={file.id}
                className="border rounded-xl p-4 flex items-center justify-between hover:shadow-md transition"
              >
                <div className="flex items-center gap-3">
                  <AiOutlineFilePdf className="text-red-500" size={28} />
                  <span className="text-sm font-medium text-gray-700">
                    {file.name}
                  </span>
                </div>

                <div className="flex items-center gap-4 text-sm">
                  {file.type === "pdf" && (
                    <button
                      onClick={() => setPreviewPdf(file.url)}
                      className="flex items-center gap-1 text-emerald-600 hover:underline"
                      aria-label="Preview PDF"
                    >
                      {/* Icon */}
                      <AiOutlineEye className="text-2xl sm:text-base" />

                      {/* Text only on desktop */}
                      <span className="hidden sm:inline">Preview</span>
                    </button>
                  )}

                  <a
                    href={file.url}
                    download
                    className="flex items-center gap-1 text-blue-600 hover:underline"
                    aria-label="Download file"
                  >
                    {/* Icon */}
                    <AiOutlineDownload className="text-2xl sm:text-base" />

                    {/* Text only on desktop */}
                    <span className="hidden sm:inline">Download</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {previewPdf && (
        <PdfPreviewModal url={previewPdf} onClose={() => setPreviewPdf(null)} />
      )}
    </div>
  );
}
