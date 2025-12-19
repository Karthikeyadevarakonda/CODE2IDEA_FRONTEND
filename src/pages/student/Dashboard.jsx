import { useEffect, useState, useRef } from "react";
import StudentHeader from "./StudentHeader";
import BannerList from "./BannerList";
import SummaryCard from "./SummaryCard";
import EnrolledEvents from "./EnrolledEvents";
import Achievements from "./Achievements";
import PastIdeas from "./PastIdeas";
import EventDetails from "./EventDetails";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  // inside Dashboard
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const eventRef = useRef(null); // ref to scroll to EventDetails

  useEffect(() => {
    fetch("/data/student-dashboard.json")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  if (!data)
    return <p className="text-center mt-10 text-gray-500">Loading...</p>;

  const handleBannerClick = (banner) => {
    if (banner.type === "LIVE") {
      navigate(`/event/${banner.contestId}`, { state: { banner } });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-10 space-y-8">
      <StudentHeader student={data.student} />

      <BannerList banners={data.banners} onBannerClick={handleBannerClick} />

      {/* Inline Event Details Section */}
      {selectedEvent && (
        <div ref={eventRef}>
          <EventDetails event={selectedEvent} />
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <SummaryCard
          title="Live Events"
          value={data.enrolledEvents.live.length}
        />
        <SummaryCard
          title="Past Events"
          value={data.enrolledEvents.past.length}
        />
        <SummaryCard title="Achievements" value={data.achievements.length} />
      </div>

      <EnrolledEvents events={data.enrolledEvents} />
      <Achievements achievements={data.achievements} />
      <PastIdeas ideas={data.pastIdeasRepository} />
    </div>
  );
}
