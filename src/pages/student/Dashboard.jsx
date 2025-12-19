import { useEffect, useState } from "react";
import StudentHeader from "./StudentHeader";
import BannerList from "./BannerList";
import SummaryCard from "./SummaryCard";
import EnrolledEvents from "./EnrolledEvents";
import Achievements from "./Achievements";
import PastIdeas from "./PastIdeas";

export default function Dashboard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/data/student-dashboard.json")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  if (!data) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  return (
    <div className="min-h-screen bg-blue-100 p-6 space-y-6">
      <StudentHeader student={data.student} />

      <BannerList banners={data.banners} />

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
