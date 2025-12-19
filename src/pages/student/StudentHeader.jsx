import { useState, useEffect } from "react";

export default function StudentHeader({ student }) {
  const [open, setOpen] = useState(false);

  const hour = new Date().getHours();
  const greeting =
    hour < 12 ? "Good Morning" : hour < 18 ? "Good Afternoon" : "Good Evening";

  // Disable background scrolling when modal is open (only mobile)
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* ================= MOBILE TOP BAR ================= */}
      <div className="md:hidden rounded flex items-center justify-between px-4 py-3 bg-white shadow-sm sticky top-0 z-30">
        <button
          onClick={() => setOpen(true)}
          className="text-2xl font-semibold"
        >
          ☰
        </button>
        <h1 className="text-sm font-semibold text-gray-700">
          Student Dashboard
        </h1>
        <div className="w-6" />
      </div>

      {/* ================= DESKTOP HEADER ================= */}

      <div className="hidden md:block relative bg-white rounded-xl shadow-lg overflow-hidden p-8">
        {/* Background accents */}
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-emerald-200 rounded-full opacity-30 mix-blend-multiply"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-indigo-200 rounded-full opacity-30 mix-blend-multiply"></div>

        {/* Top Row */}
        <div className="flex items-start justify-between relative z-10">
          <div>
            <h1 className="text-4xl font-bold text-gray-800">
              {greeting}, {student.name} 👋
            </h1>
            <p className="text-gray-500 mt-2">
              Welcome to your Innovation & Hackathon Dashboard
            </p>
          </div>

          <div className="flex gap-3">
            <button className="h-10 w-10 rounded-full border flex items-center justify-center">
              🔔
            </button>
            <button className="h-10 w-10 rounded-full border flex items-center justify-center">
              ⚙️
            </button>
          </div>
        </div>

        {/* Profile */}
        <div className="mt-8 flex items-center justify-between relative z-10">
          <div className="flex items-center gap-4">
            <div className="h-20 w-20 rounded-full bg-gray-100 flex items-center justify-center text-3xl font-bold shadow">
              {student.name.charAt(0)}
            </div>

            <div>
              <p className="text-xl font-semibold text-gray-800">
                Student Profile
              </p>
              <p className="text-sm text-emerald-600">🟢 Active</p>
            </div>
          </div>

          <div className="flex gap-3">
            <span className="px-4 py-2 rounded-full bg-gray-100 text-sm">
              🎓 {student.department}
            </span>
            <span className="px-4 py-2 rounded-full bg-emerald-50 text-sm text-emerald-700">
              🆔 ID: {student.id}
            </span>
          </div>
        </div>
      </div>

      {/* ================= MOBILE FULL-SCREEN MODAL ================= */}
      {open && (
        <div className="md:hidden fixed inset-0 z-50 flex flex-col">
          {/* Backdrop */}
          <div
            className="absolute inset-0  transition-opacity duration-300"
            onClick={() => setOpen(false)}
          />

          {/* Modal content sliding from top */}
          <div className="relative bg-white w-full h-[300px] rounded-b-4xl  shadow-xl overflow-y-auto pt-5 pb-[env(safe-area-inset-bottom)] animate-slide-down">
            {/* Handle */}
            <div className="w-10 h-1.5 bg-gray-300 rounded-full mx-auto mb-3" />

            {/* Header */}
            <div className="flex items-center justify-between mb-4 px-5">
              <h2 className="text-lg font-bold text-gray-800">
                Student Profile
              </h2>
              <button onClick={() => setOpen(false)} className="text-xl">
                ✕
              </button>
            </div>

            {/* Profile */}
            <div className="flex items-center gap-4 mb-4 px-5">
              <div className="h-14 w-14 rounded-full bg-gray-100 flex items-center justify-center text-xl font-bold">
                {student.name.charAt(0)}
              </div>
              <div>
                <p className="font-semibold text-gray-800">{student.name}</p>
                <p className="text-sm text-emerald-600">🟢 Active</p>
              </div>
            </div>

            {/* Info */}
            <div className="space-y-3 text-sm px-5">
              <div className="flex justify-between">
                <span className="text-gray-500">Department</span>
                <span className="font-medium">{student.department}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Student ID</span>
                <span className="font-medium">{student.id}</span>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-6 flex gap-3 px-5">
              <button className="flex-1 py-2 rounded-lg bg-gray-100 font-medium">
                Settings
              </button>
              <button className="flex-1 py-2 rounded-lg bg-emerald-500 text-white font-medium">
                Notifications
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Tailwind animation (mobile only) */}
      <style>
        {`
          @keyframes slide-down {
            0% { transform: translateY(-100%); opacity: 0; }
            100% { transform: translateY(0); opacity: 1; }
          }
          .animate-slide-down {
            animation: slide-down 0.3s ease-out forwards;
          }
        `}
      </style>
    </>
  );
}
