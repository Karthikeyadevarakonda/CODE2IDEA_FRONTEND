export default function StudentHeader({ student }) {
  const hour = new Date().getHours();
  const greeting =
    hour < 12 ? "Good Morning" : hour < 18 ? "Good Afternoon" : "Good Evening";

  return (
    <div className="relative bg-white rounded shadow-lg overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-emerald-200 rounded-full opacity-30 mix-blend-multiply"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-indigo-200 rounded-full opacity-30 mix-blend-multiply"></div>

      <div className="relative p-6 md:p-8 flex flex-col gap-6">
        {/* Top Row */}
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
              {greeting}, {student.name} 👋
            </h1>
            <p className="text-gray-500 mt-2 text-sm md:text-base">
              Welcome to your Innovation & Hackathon Dashboard
            </p>
          </div>

          {/* Icons */}
          <div className="flex gap-3">
            <button className="h-10 w-10 rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100 flex items-center justify-center transition-colors">
              🔔
            </button>
            <button className="h-10 w-10 rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100 flex items-center justify-center transition-colors">
              ⚙️
            </button>
          </div>
        </div>

        {/* Profile & Info Row */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          {/* Profile */}
          <div className="flex items-center gap-4">
            {/* Avatar */}
            <div className="relative">
              <div className="h-20 w-20 rounded-full bg-gray-100 text-gray-700 flex items-center justify-center text-3xl font-bold border shadow-md">
                {student.name.charAt(0)}
              </div>
              <span className="absolute -bottom-1 -right-1 h-5 w-5 bg-emerald-500 border-2 border-white rounded-full animate-pulse" />
            </div>

            {/* Profile Info */}
            <div className="flex flex-col">
              <span className="text-gray-700 font-semibold text-lg md:text-xl">
                Student Profile
              </span>
              <span className="text-sm text-emerald-600 flex items-center gap-1">
                🟢 Active
              </span>
            </div>
          </div>

          {/* Info Chips */}
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 text-sm font-medium hover:bg-gray-200 transition">
              🎓 {student.department}
            </span>

            <span className="px-4 py-2 rounded-full bg-emerald-50 text-emerald-700 text-sm font-medium hover:bg-emerald-100 transition">
              🆔 ID: {student.id}
            </span>

            <span className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 text-sm font-medium hover:bg-gray-200 transition">
              🚀 Innovator
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
