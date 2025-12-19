import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import EventDetails from "./EventDetails";
import StudentHeader from "./StudentHeader";

export default function EventPage() {
  const { id } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    fetch("/data/live-events.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.liveEvents.find(
          (e) => e.contestId.toString() === id
        );
        setEvent(found);
      });
  }, [id]);

  if (!event) return <p className="text-center mt-10">Loading event...</p>;

  return (
    <div className="min-h-screen bg-gray-50 p-0 space-y-8">
      <EventDetails event={event} />
    </div>
  );
}
