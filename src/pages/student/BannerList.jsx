import { useEffect, useState, useRef } from "react";

export default function BannerList({ banners, onBannerClick }) {
  const [current, setCurrent] = useState(0);
  const [hovering, setHovering] = useState(false);
  const intervalRef = useRef(null);

  const prevBanner = () =>
    setCurrent((prev) => (prev - 1 + banners.length) % banners.length);
  const nextBanner = () => setCurrent((prev) => (prev + 1) % banners.length);

  useEffect(() => {
    if (!hovering) {
      intervalRef.current = setInterval(() => {
        setCurrent((prev) => (prev + 1) % banners.length);
      }, 2000);
    }
    return () => clearInterval(intervalRef.current);
  }, [banners.length, hovering]);

  return (
    <div
      className="w-full relative overflow-hidden rounded-2xl"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      {/* Slides */}
      <div
        className="flex transition-transform duration-700 ease-in-out cursor-pointer"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {banners.map((b) => (
          <div
            key={b.contestId}
            className="min-w-full h-[120px] sm:h-[240px] md:h-[320px] relative"
            onClick={() => onBannerClick?.(b)}
          >
            <img
              src={b.imageUrl}
              alt={b.message}
              className="w-full h-full object-cover rounded-xl"
            />
            <div className="absolute bottom-4 left-6 md:bottom-6 md:left-8">
              <p className="text-white text-lg md:text-xl font-semibold drop-shadow-lg">
                {b.message}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Arrows */}
      <button
        onClick={prevBanner}
        className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md transition"
      >
        {/* Left arrow SVG */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-3 sm:h-6 sm:w-6 text-gray-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        onClick={nextBanner}
        className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md transition"
      >
        {/* Right arrow SVG */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-3 sm:h-6 sm:w-6 text-gray-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots (below carousel) */}
      <div className="mt-3 flex justify-center gap-2">
        {banners.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`h-1 w-1 sm:h-2 sm:w-2 rounded-full transition ${
              idx === current ? "bg-gray-800" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
