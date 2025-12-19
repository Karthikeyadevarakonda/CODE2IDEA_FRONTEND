import { useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import EventDetailsInline from "./EventDetails"; // reuse inline component
import StudentHeader from "./StudentHeader";

export default function EventPage() {
  const { id } = useParams();
  const location = useLocation();
  const [event, setEvent] = useState(location.state?.banner || null);

  useEffect(() => {
    // if navigated directly, fetch dashboard data to get event
    if (!event) {
      fetch("/data/student-dashboard.json")
        .then((res) => res.json())
        .then((data) => {
          const found = data.banners.find((b) => b.contestId.toString() === id);
          setEvent(found);
        });
    }
  }, [id, event]);

  if (!event)
    return <p className="text-center mt-10 text-gray-500">Loading event...</p>;

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-10 space-y-8">
      {/* Optionally show header again */}
      <StudentHeader student={{ name: "Karthik", department: "CSE", id: 1 }} />

      {/* Event Details + Enrollment Form */}
      <EventDetailsInline event={event} />
    </div>
  );
}
