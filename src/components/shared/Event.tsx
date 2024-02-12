import CloseButton from "../../assets/close.png";

// TODO: consider using portals? only if I have time
// Idea: Use a modal and overlay to display an event

interface EventProps {
  onClose: () => void
}

const Event: React.FC<EventProps> = (props) => {
  
  return (
    <div className='absolute left-0 top-0 h-screen w-screen bg-metal-light flex items-center justify-center'>
      <div className="relative bg-black-light h-event-len w-event-wid flex justify-center items-center shadow-xl">
        {/* To be changed (icon) */}
        <span className="absolute left-10 top-10"><img className="cursor-pointer"height={30} width={30} src={CloseButton} onClick={() =>{props.onClose()}}/></span>
        <div className="h-4/6 w-5/6 flex flex-col">
          {/* Title */}
          <h2 className="text-almond font-bold text-3xl">Event Name</h2>

          {/* Date */}
          <span className="mt-2 text-khaki">4:00 - 6:00 PM, Jan. 24</span>
          
          {/* Line */}
          <div className="my-5 block w-event-len h-px bg-white" />

          <div className="flex gap-40">
            {/* Desrciption */}
            <div className="">
              <span className="font-bold text-white">Description:</span>
              <p className="text-white my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, mollitia autem error neque ducimus voluptatem enim quibusdam. Inventore corrupti totam quisquam. Beatae, laudantium accusamus facilis velit iure cum voluptate suscipit.</p>
            </div>

            {/* Related */}
            <div>
              <div className="">
                <span className="font-bold text-white">Related Events:</span>
                <div className="rounded-lg cursor-pointer flex flex-col gap-3">
                  <div className="h-8 w-60 flex justify-center bg-khaki items-center" onClick={() => {}} >A</div>
                  <div className="h-8 w-60 flex justify-center bg-khaki items-center" onClick={() => {}} >B</div>
                  <div className="h-8 w-60 flex justify-center bg-khaki items-center" onClick={() => {}} >C</div>
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
