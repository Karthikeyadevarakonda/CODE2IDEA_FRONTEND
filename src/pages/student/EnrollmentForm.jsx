import { useState, useRef } from "react";
import CustomDropdown from "./components/CustomDropdown";
import { AiOutlineUpload, AiOutlineDelete } from "react-icons/ai";

export default function EnrollmentForm({ domains }) {
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

  const removeFile = (index) => {
    setFormData((prev) => ({
      ...prev,
      attachments: prev.attachments.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Idea:", formData);
    alert("Idea submitted successfully 🚀");

    setFormData({
      title: "",
      description: "",
      category: "",
      attachments: [],
    });
  };

  return (
    <div className="border-t pt-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Submit Your Idea
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Title */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Idea Title
          </label>
          <input
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-emerald-500 focus:border-emerald-500"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Idea Description
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={4}
            required
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-emerald-500 focus:border-emerald-500"
          />
        </div>

        {/* Category */}
        <div>
          <CustomDropdown
            label="Category"
            options={domains}
            value={formData.category}
            onChange={(val) =>
              setFormData((prev) => ({ ...prev, category: val }))
            }
          />
        </div>

        {/* Attachments */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Attachments
          </label>

          <div
            onDrop={handleDrop}
            onDragOver={(e) => e.preventDefault()}
            onClick={() => fileInputRef.current.click()}
            className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center cursor-pointer hover:border-emerald-500 transition"
          >
            <AiOutlineUpload className="mx-auto text-3xl text-gray-400 mb-2" />
            <p className="text-sm text-gray-500">
              Drag & drop files or click to upload
            </p>

            <input
              ref={fileInputRef}
              type="file"
              multiple
              onChange={handleChange}
              className="hidden"
            />
          </div>

          {/* Uploaded files */}
          {formData.attachments.length > 0 && (
            <ul className="mt-3 space-y-2">
              {formData.attachments.map((file, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center bg-gray-100 px-3 py-2 rounded-lg text-sm"
                >
                  <span className="truncate">{file.name}</span>
                  <button
                    type="button"
                    onClick={() => removeFile(index)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <AiOutlineDelete />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Submit */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="px-8 py-2 rounded-xl bg-emerald-600 text-white hover:bg-emerald-700 transition"
          >
            Submit Idea
          </button>
        </div>
      </form>
    </div>
  );
}
