import { useEffect, useState } from "react";
import CloseButton from "../../assets/close.png";
import { convertTime, getTimeOfDay } from "../../utils/date";
import { TEvent } from "../../utils/schema";
import StarFilled from '../../assets/star-filled.png';
import StarUnFilled from '../../assets/star.png';


interface EventProps {
  onClose: () => void
  event: TEvent
  events: TEvent[]
  handleEventClick: (id: number) => void
}

// A component that acts as a modal and overlays the screen to display an event
const Event: React.FC<EventProps> = (props) => {

  // extract event info from props
  const name = props.event.name;
  const id = props.event.id;
  const time = getTimeOfDay(convertTime(props.event.start_time)) + " - " + getTimeOfDay(convertTime(props.event.end_time));
  const description = props.event.description;
  const relatedEvents = props.event.related_events;
  const link = props.event.permission === "private" ? props.event.private_url : props.event.public_url;
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
    <div className='fixed left-0 top-0 h-screen w-screen bg-metal-light flex items-center justify-center'>
      <div className="relative bg-black-light py-10 md:p-0 md:h-event-len md:w-event-wid flex justify-center items-center shadow-xl overflow-y-scroll">
        <span className="absolute left-10 top-10"><img alt="Close Button" className="cursor-pointer" height={30} width={30} src={CloseButton} onClick={() => { props.onClose() }} /></span>
        <div className="h-4/6 w-5/6 flex flex-col">
          {/* Title */}
          <div className="flex items-center gap-6">
            <a href={link} target="_blank"><h2 className="text-almond font-bold text-3xl hover:opacity-85">{name}</h2></a>
            <img className="cursor-pointer hover:scale-110" alt="Liked Status" src={liked ? StarFilled : StarUnFilled} height={36} width={36} onClick={toggleLike} />
          </div>


          {/* Date */}
          <span className="mt-2 text-khaki">{time}</span>

          {/* Line */}
          <span className="my-5 block h-px border-t border-white" />

          <div className="flex gap-5 md:gap-40 flex-col md:flex-row">
            {/* Desrciption */}
            <div className="">
              <span className="font-bold text-white">Description:</span>
              <p className="text-white my-2">{description}</p>
            </div>

            {/* Related */}
            <div>
              <div className="">
                <span className="font-bold text-white">Related Events:</span>
                <div className="rounded-lg flex md:flex-col gap-4 mt-3">
                  {props.events.filter(event => relatedEvents.includes(event.id)).map(filteredEvent =>
                    <div className="h-12 w-50 md:w-80 flex justify-center bg-khaki items-center rounded-md hover:opacity-85 cursor-pointer"
                      key={filteredEvent.id}
                      onClick={() => switchEvent(filteredEvent.id)}
                    >{filteredEvent.name}</div>
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
