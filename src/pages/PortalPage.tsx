import { useNavigate } from "react-router-dom"
import EventList from '../components/shared/EventList';

interface PortalProps {
  name?: String
}


const PortalPage: React.FC<PortalProps> = ({ name = "Eugene" }: PortalProps) => {
  const navigate = useNavigate();
  const onLogout = () => {
    navigate("/");
  }


  return (
    <div className="w-screen h-full min-h-screen bg-metal p-4 md:p-24 pt-36 flex flex-col">
      <div className="flex justify-between">
        <div>
          <h2 className="text-almond font-bold text-5xl">Welcome, {name}!</h2>
          <h3 className="text-xl mt-5 text-white">This is your hacker portal with a list of all available events</h3>
        </div>

        <div className="h-10 w-32 rounded-lg bg-khaki cursor-pointer">
          <div className="h-full w-full flex justify-center items-center" onClick={onLogout}> Log Out</div>
        </div>
      </div>

      <EventList permission="private" />
    </div>
  )
}
export default PortalPage;