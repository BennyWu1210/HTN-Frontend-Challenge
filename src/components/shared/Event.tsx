import { useEffect, useState } from "react";
import CloseButton from "../../assets/close.png";
import { convertTime, getTimeOfDay } from "../../utils/date";
import StarFilled from '../../assets/star-filled.png';
import StarUnFilled from '../../assets/star.png';
import { EventProps, colorMap } from "../../utils/types";




// A component that acts as a modal and overlays the screen to display an event
const Event: React.FC<EventProps> = (props) => {

  // extract event info from props
  const name = props.event.name;
  const id = props.event.id;
  const time = getTimeOfDay(convertTime(props.event.start_time)) + " - " + getTimeOfDay(convertTime(props.event.end_time));
  const description = props.event.description;
  const relatedEvents = props.event.related_events;
  const speaker = props.event.speakers;
  const permission = props.event.permission;
  const link = permission === "private" ? props.event.private_url : props.event.public_url;
  const switchEvent = props.handleEventClick;

  // initialize the 'liked' state of the current event in localStorage
  const [liked, setLiked] = useState<boolean>(localStorage.getItem(`event-${id}`) === 'true');

  // whenever we are displaying a new event, update the "like status"
  useEffect(() => {
    setLiked(localStorage.getItem(`event-${id}`) === 'true');
  }, [id]);

  const toggleLike = () => {
    setLiked(prevValue => {
      localStorage.setItem(`event-${id}`, !prevValue ? 'true' : 'false');
      return !prevValue;
    });
  }

  return (
    <div className='fixed left-0 top-0 h-screen w-screen bg-metal-light flex items-center justify-center overflow-scroll'>
      <div className="relative bg-black-light py-20 md:p-0 md:h-event-len md:w-event-wid flex justify-center items-center shadow-xl overflow-scroll">
        <span className="absolute left-10 top-10"><img alt="Close Button" className="cursor-pointer" height={30} width={30} src={CloseButton} onClick={() => { props.onClose() }} /></span>
        <div className="h-4/6 w-5/6 flex flex-col">
          {/* Title */}
          <div className="flex items-center gap-6">
            <a href={link} target="_blank"><h2 className="text-almond font-bold text-3xl hover:opacity-85">{name}</h2></a>
            <img className="cursor-pointer hover:scale-110" alt="Liked Status" src={liked ? StarFilled : StarUnFilled} height={36} width={36} onClick={toggleLike} />
          </div>


          {/* Date & Speaker*/}
          <div className="mt-2">
            <span className="text-khaki hover:opacity-85">⌛️ {time}</span>
            <span className="text-khaki mx-3">/</span>
            <span className="text-khaki hover:opacity-85">{permission === "public" ? "Public Event" : "Private Event"}</span>
            <span className="text-khaki mx-3">/</span>
            <span className="text-khaki hover:opacity-85">{speaker[0] !== undefined ? speaker[0].name : "Activity"}</span>
          </div>


          {/* Line */}
          <span className="my-5 block h-px border-t border-white" />

          <div className="flex gap-5 md:gap-28 flex-col md:flex-row">
            {/* Desrciption */}
            <div className="">
              <span className="font-bold text-white">Description:</span>
              <p className="text-white my-2">{description}</p>
            </div>

            {/* Related */}
            <div>
              <div className="">
                <span className="font-bold text-white">Related Events:</span>
                <div className="rounded-lg flex flex-col gap-4 mt-3 mb-8">
                  {props.events.filter(event => relatedEvents.includes(event.id)).map(filteredEvent =>
                    <div className="h-20 w-50 min-w-96 md:w-96 flex flex-col justify-center items-start bg-khaki p-4 rounded-md hover:opacity-90 cursor-pointer"
                      key={filteredEvent.id}
                      onClick={() => switchEvent(filteredEvent.id)}
                    >
                      <h2>{filteredEvent.name}</h2>
                      <span className={`mt-1 md:flex ${colorMap[filteredEvent.event_type]} text-center px-5 py-1 rounded-full text-white font`}>
                        <span className="text-sm">{filteredEvent.event_type}</span>
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Event;
