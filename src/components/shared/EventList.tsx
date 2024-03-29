import "../../App.css"
import { useEffect, useState } from "react";
import { TEvent } from "../../utils/schema";
import { convertTime, getTimeOfDay } from "../../utils/date";
import Event from "../shared/Event";
import { motion } from 'framer-motion';
import { createCalendarEvents } from '../../utils/calendar';
import { EventListProps, EventTileProps, displayVariants, item } from "../../utils/types";


const EventList: React.FC<EventListProps> = (props) => {
  const [events, setEvents] = useState<TEvent[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedEvent, setSelectedEvent] = useState<TEvent | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>(""); // State to store search query value.
  const [selectedEventType, setSelectedEventType] = useState<string>("all"); // State to store selected event type for filtering.

  // Export calendar
  const handleExport = () => {
    const calendarData = createCalendarEvents(events);
    const blob = new Blob([calendarData], { type: 'text/calendar' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'events.ics'; // name of the file to be downloaded
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };



  // Fetches event data from the API and filter based on permission.
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

  // Handles clicking on an event to open its details.
  const handleEventClick = (id: number) => {
    const event: TEvent | undefined = events.find(e => e.id === id);

    if (!event) return;

    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  // Fetch data on component mount.
  useEffect(() => {
    fetchData();
  }, []);


  // Filters events based on search query and selected event type.
  const filteredEvents = events.filter(event => {
    if (!event.name.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    if (selectedEventType === "liked") {
      return localStorage.getItem(`event-${event.id}`) === 'true';
    }
    return (selectedEventType === "all" || event.event_type === selectedEventType);
  });

  // Group events by date
  const groupedEvents = filteredEvents.reduce((acc: { [key: string]: TEvent[] }, event) => {
    const date = new Date(event.start_time);
    const dateKey: string = (date.toLocaleString('default', { month: 'long' })) + " " + (date.getUTCDate() + ", " + date.getFullYear()); // Ensure you have a utility function to format Date to a string
    if (!acc[dateKey]) {
      acc[dateKey] = [];
    }
    acc[dateKey].push(event);
    return acc;
  }, {});


  return <div className="bg-black-light w-full h-full my-12 m-auto p-10 lg:p-20 max-w-screen-xl rounded-2xl border-khaki border-solid border flex flex-col">

    {/* Info Row */}
    <div className="flex flex-col md:flex-row w-full justify-between">
      
      <h2 className="text-4xl font-bold text-white">{props.permission === "public" ? "Public" : "All"} Events</h2>
      <div className="flex flex-col md:flex-row mt-3">
        <input
          type="text"
          aria-label="Search"
          placeholder="🔎 Search for events"
          className="mx-4 py-2 px-5 bg-white rounded-lg"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <select
          className="mx-4 py-2 px-4 bg-metal text-white rounded-lg"
          aria-label="Select"
          value={selectedEventType}
          onChange={(e) => setSelectedEventType(e.target.value)}
        >
          <option value="all">🪄 All Types</option>
          <option value="workshop">⛽️ Workshop</option>
          <option value="tech_talk">🎙️ Tech Talk</option>
          <option value="activity">🎯 Activity</option>
          <option value="liked">⭐️ Liked</option>
        </select>
      </div>
    </div>

    <div className="w-full my-4">
      {Object.entries(groupedEvents).map(([date, events]) => (
        <motion.div key={date} className="w-full my-10" initial="hidden" animate="show" viewport={{ once: true }} variants={displayVariants}>
          <h3 className="w-full text-left text-khaki text-xl">{date}</h3>
          {events.map(event => (
            <motion.div variants={item}>
              <EventTile
                key={event.id}
                id={event.id}
                start_time={convertTime(event.start_time)}
                end_time={convertTime(event.end_time)}
                event_name={event.name}
                event_type={event.event_type}
                onClick={handleEventClick}
              />
            </motion.div>
          ))}
        </motion.div>
      ))}

      {isModalOpen && selectedEvent && <Event event={selectedEvent} events={events} onClose={() => setIsModalOpen(false)} handleEventClick={handleEventClick} />}
      
      {/* Export Button */}
      <button
        className="mb-4 py-2 px-5 w-full h-16 bg-khaki text-black rounded-lg shadow hover:bg-almond"
        onClick={handleExport}
      >
        Export Calendar
      </button>
    </div>

    
  </div>
}
export default EventList;


const EventTile: React.FC<EventTileProps> = ({ start_time, end_time, event_name, event_type, id, onClick }) => {
  const colorMap: { [key: string]: string } = {
    'workshop': 'bg-emerald-800',
    'tech_talk': 'bg-slate-700',
    'activity': 'bg-sky-600',
  }

  const tagColor = colorMap[event_type];
  return <div className="tile w-full md:h-24 bg-almond my-6 mr-40 p-5 rounded-xl flex flex-col items-start md:flex-row md:items-center justify-between text-lg cursor-pointer hover:opacity-85" onClick={() => onClick(id)}>
    <h3 className="md:flex md:w-3/12">{getTimeOfDay(start_time)} - {getTimeOfDay(end_time)}</h3>
    <span className="tile-text w-full md:w-7/12 font-bold">{event_name}</span>
    <span className={`mt-3 md:mt-0 md:flex ${tagColor} text-center px-10 py-1 rounded-full text-white font`} style={{ backgroundColor: tagColor }}>
      {event_type}
    </span>
  </div>
}
