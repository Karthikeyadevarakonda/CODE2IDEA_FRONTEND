import { useEffect, useState } from "react";
import StudentHeader from "./StudentHeader";
import BannerList from "./BannerList";
import SummaryCard from "./SummaryCard";
import EnrolledEvents from "./EnrolledEvents";
import Achievements from "./Achievements";
import PastIdeas from "./PastIdeaRepo/PastIdeas";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [liveEvents, setLiveEvents] = useState([]);

  useEffect(() => {
    fetch("/data/student-dashboard.json")
      .then((res) => res.json())
      .then(setData);

    fetch("/data/live-events.json")
      .then((res) => res.json())
      .then((json) => setLiveEvents(json.liveEvents));
  }, []);

  if (!data) return <p className="text-center mt-10">Loading...</p>;

  const handleBannerClick = (event) => {
    navigate(`/event/${event.contestId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-2 md:p-10 space-y-8">
      <StudentHeader student={data.student} />

      {/* LIVE EVENTS BANNERS */}
      <BannerList banners={liveEvents} onBannerClick={handleBannerClick} />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <SummaryCard title="Live Events" value={liveEvents.length} />
        <SummaryCard
          title="Past Events"
          value={data.enrolledEvents.past.length}
        />
        <SummaryCard title="Achievements" value={data.achievements.length} />
      </div>

      <EnrolledEvents events={data.enrolledEvents} />
      <Achievements achievements={data.achievements} name={data.student.name} />
      <PastIdeas />
    </div>
  );
}
