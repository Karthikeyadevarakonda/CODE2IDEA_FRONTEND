import { useState, useRef } from "react";
import CustomDropdown from "./components/CustomDropdown";

export default function EventDetails({ event }) {
  const [showEnrollForm, setShowEnrollForm] = useState(true);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    attachments: [],
  });

  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData((prev) => ({
        ...prev,
        attachments: [...prev.attachments, ...Array.from(files)],
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setFormData((prev) => ({
      ...prev,
      attachments: [...prev.attachments, ...Array.from(e.dataTransfer.files)],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Enrollment Data:", formData);
    alert("Enrollment submitted!");
    setFormData({
      title: "",
      description: "",
      category: "",
      attachments: [],
    });
  };

  const removeFile = (index) => {
    setFormData((prev) => ({
      ...prev,
      attachments: prev.attachments.filter((_, i) => i !== index),
    }));
  };

  return (
    <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-8 transition-all animate-fadeIn">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">{event.message}</h2>
      <p className="text-gray-600 mb-6">
        Event ID: {event.contestId} • Status: {event.type}
      </p>

      {showEnrollForm && (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Title
            </label>
            <input
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-emerald-500 focus:border-emerald-500"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-emerald-500 focus:border-emerald-500"
              rows="4"
              required
            />
          </div>

          <div>
            <CustomDropdown
              label="Category"
              options={[
                "AI",
                "IoT",
                "Smart City",
                "HealthTech",
                "FullStack",
                "RealTime",
              ]}
              value={formData.category}
              onChange={(val) =>
                setFormData((prev) => ({ ...prev, category: val }))
              }
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Attachments
            </label>
            <div
              onDrop={handleDrop}
              onDragOver={(e) => e.preventDefault()}
              className="w-full border-2 border-dashed border-gray-300 rounded-lg p-4 text-center cursor-pointer hover:border-emerald-500 transition"
              onClick={() => fileInputRef.current.click()}
            >
              Drag & drop files here or click to upload
              <input
                ref={fileInputRef}
                type="file"
                multiple
                onChange={handleChange}
                className="hidden"
              />
            </div>
            {formData.attachments.length > 0 && (
              <ul className="mt-2 space-y-1">
                {formData.attachments.map((file, index) => (
                  <li
                    key={index}
                    className="flex justify-between items-center bg-gray-100 p-2 rounded"
                  >
                    <span>{file.name}</span>
                    <button
                      type="button"
                      onClick={() => removeFile(index)}
                      className="text-red-500 hover:text-red-700 font-bold"
                    >
                      ✖
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="flex justify-end gap-3 mt-4">
            <button
              type="submit"
              className="px-6 py-2 rounded-xl bg-emerald-600 text-white hover:bg-emerald-700 transition"
            >
              Submit
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
