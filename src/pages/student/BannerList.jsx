import { useEffect, useState, useRef } from "react";

export default function BannerList({ banners }) {
  const [current, setCurrent] = useState(0);
  const [hovering, setHovering] = useState(false);
  const intervalRef = useRef(null);

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
      className="w-full overflow-hidden rounded-xl shadow"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {banners.map((b) => (
          <div
            key={b.id}
            className="min-w-full h-[220px] md:h-[300px] relative"
          >
            <img
              src={b.imageUrl}
              alt={b.message}
              className="w-full h-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 flex items-end ">
              <p className="text-white text-lg md:text-xl font-semibold p-6">
                {b.message}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
