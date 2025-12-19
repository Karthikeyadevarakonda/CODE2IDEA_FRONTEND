import { useState, useRef, useEffect } from "react";

export default function CustomDropdown({ label, options, value, onChange }) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (option) => {
    onChange(option);
    setOpen(false);
  };

  return (
    <div className="relative " ref={dropdownRef}>
      {/* <label className="block text-gray-700 font-medium mb-1">{label}</label> */}
      <div
        className="bg-white border border-gray-300 rounded-lg p-2 flex justify-between items-center cursor-pointer shadow-sm hover:border-gray-400 transition"
        onClick={() => setOpen(!open)}
      >
        <span>{value || "Select Domain"}</span>
        <svg
          className={`h-5 w-5 text-gray-500 transform transition-transform ${
            open ? "rotate-180" : "rotate-0"
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>

      {open && (
        <ul className="absolute z-50 mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg max-h-48 overflow-y-auto">
          {options.map((opt) => (
            <li
              key={opt}
              className={`p-2 cursor-pointer hover:bg-emerald-100 ${
                opt === value ? "bg-emerald-50 font-semibold" : ""
              }`}
              onClick={() => handleSelect(opt)}
            >
              {opt}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
