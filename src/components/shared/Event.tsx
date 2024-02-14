import CloseButton from "../../assets/close.png";
import { convertTime, getTimeOfDay } from "../../utils/date";
import { TEvent } from "../../utils/schema";


interface EventProps {
  onClose: () => void
  event: TEvent
  events: TEvent[]
}

// A component that acts as a modal and overlays the screen to display an event
const Event: React.FC<EventProps> = (props) => {

  const name = props.event.name;
  const time = getTimeOfDay(convertTime(props.event.start_time)) + " - " + getTimeOfDay(convertTime(props.event.end_time));
  const description = props.event.description;
  const relatedEvents = props.event.related_events;

  return (
    <div className='fixed left-0 top-0 h-screen w-screen bg-metal-light flex items-center justify-center'>
      <div className="relative bg-black-light md:h-event-len md:w-event-wid flex justify-center items-center shadow-xl overflow-scroll">
        <span className="absolute left-10 top-10"><img alt="Close Button" className="cursor-pointer" height={30} width={30} src={CloseButton} onClick={() => { props.onClose() }} /></span>
        <div className="h-4/6 w-5/6 flex flex-col">
          {/* Title */}
          <h2 className="text-almond font-bold text-3xl">{name}</h2>

          {/* Date */}
          <span className="mt-2 text-khaki">{time}</span>

          {/* Line */}
          <div className="my-5 block w-event-len h-px bg-white" />

          <div className="flex gap-5 md:gap-40">
            {/* Desrciption */}
            <div className="">
              <span className="font-bold text-white">Description:</span>
              <p className="text-white my-2">{description}</p>
            </div>

            {/* Related */}
            <div>
              <div className="">
                <span className="font-bold text-white">Related Events:</span>
                <div className="rounded-lg cursor-pointer flex flex-col gap-4 mt-3">
                  {relatedEvents.map(eventId => props.events[eventId] !== undefined && <div className="h-12 w-20 md:w-80 flex justify-center bg-khaki items-center rounded-md">{props.events[eventId].name}</div>)}
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
