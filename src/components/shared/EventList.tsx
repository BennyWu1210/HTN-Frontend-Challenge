import { useEffect, useState } from "react";
import { TEvent } from "../../utils/schema";
import { convertTime, getTimeOfDay } from "../../utils/date";
import Event from "../shared/Event";

interface EventListProps {
  permission: string
}

const EventList: React.FC<EventListProps> = (props) => {
  const [events, setEvents] = useState<TEvent[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<TEvent | null>(null);

  const fetchData = () => {
    fetch("https://api.hackthenorth.com/v3/events")
      .then(response => response.json())
      .then(data => {
        if (props.permission === "public") {
          data = data.filter((event: TEvent) => event.permission === "public");
        }
        const sortedEvents = data.sort((a: TEvent, b: TEvent) => new Date(a.start_time).getTime() - new Date(b.start_time).getTime());
        setEvents(sortedEvents)
      }
      );
  };

  const handleEventClick = (id: number) => {
    const event: TEvent | undefined = events.find(e => e.id === id);

    if (!event) return;

    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const groupedEvents = events.reduce((acc: { [key: string]: TEvent[] }, event) => {
    const date = new Date(event.start_time);
    const dateKey: string = (date.toLocaleString('default', { month: 'long' })) + " " + (date.getUTCDate() + ", " + date.getFullYear()); // Ensure you have a utility function to format Date to a string
    if (!acc[dateKey]) {
      acc[dateKey] = [];
    }
    acc[dateKey].push(event);
    return acc;
  }, {});

  

  return <div className="bg-black-light w-full h-full my-12 m-auto p-10 lg:p-20 max-w-screen-xl rounded-2xl border-khaki border-solid border flex flex-col items-center">
    {/* Info Row */}
    <div className="flex flex-col md:flex-row w-full justify-between">
      <h2 className="text-4xl font-bold text-white">{props.permission === "public" ? "Public" : "All"} Events</h2>
      <div className="flex">
        <div className="mx-4 py-2 px-5 bg-white rounded-lg"> 🔎 Search for events</div>
        <div className="mx-4 py-2 px-5 bg-metal text-white rounded-lg">🪄 Filter</div>
      </div>
    </div>

    <div className="w-full my-4">

      {/* Instead of hardcoding it, I want the events to be categorized under their respective dates  */}
      {/* <h3 className="w-full text-left text-khaki text-xl">Friday, September 13</h3> 
      {events.map(
        event =>
          <EventTile start_time={convertTime(event.start_time)}
            end_time={convertTime(event.end_time)}
            event_name={event.name}
            event_type={event.event_type} />
      )} */}

      {Object.entries(groupedEvents).map(([date, events]) => (
        <div key={date} className="w-full my-10">
          <h3 className="w-full text-left text-khaki text-xl">{date}</h3>
          {events.map(event => (
            <EventTile
              key={event.id}
              id={event.id}
              start_time={convertTime(event.start_time)}
              end_time={convertTime(event.end_time)}
              event_name={event.name}
              event_type={event.event_type}
              onClick={handleEventClick}
            />
          ))}
        </div>
      ))}

        {isModalOpen && selectedEvent && <Event event={selectedEvent} events={events} onClose={() => setIsModalOpen(false)} />}

    </div>
  </div>
}
export default EventList;

interface EventTileProps {
  start_time: string,
  end_time: string,
  event_name: string,
  event_type: string,
  id: number,
  onClick: (id: number) => void
}


const EventTile: React.FC<EventTileProps> = ({ start_time, end_time, event_name, event_type, id, onClick }) => {
  const colorMap: {[key: string]: string} = {
    'workshop': 'bg-emerald-800',
    'tech_talk': 'bg-slate-700',
    'activity': 'bg-sky-600',
  }

  const tagColor = colorMap[event_type];
  return <div className="w-full md:h-24 bg-almond my-6 mr-40 p-5 rounded-xl flex items-center justify-between text-lg cursor-pointer" onClick={() => onClick(id)}>
    <h3 className="hidden md:flex w-3/12">{getTimeOfDay(start_time)} - {getTimeOfDay(end_time)}</h3>
    <span className="w-full md:w-7/12 font-bold">{event_name}</span>

    {/* Colour TBD */}
    <span className={`hidden md:flex w-2/12 ${tagColor} text-center px-10 py-1 rounded-full text-white font`} style={{backgroundColor:tagColor}}>
      {event_type}
    </span>
  </div>
}