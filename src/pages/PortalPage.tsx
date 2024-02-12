import { useState } from "react";
import { useNavigate } from "react-router-dom"
import Event from "../components/shared/Event";

interface PortalProps {
  name?: String
}


const PortalPage: React.FC<PortalProps> = ({ name = "Eugene" }: PortalProps) => {
  const [modalOn, setModalOn] = useState(false);

  const navigate = useNavigate();
  const onLogout = () => {
    navigate("/");
  }


  // TODO: Modal close logic

  return (
    <div className="w-screen h-screen bg-metal p-24 flex flex-col">
      <div className="flex justify-between">
        <div>
          <h2 className="text-almond font-bold text-3xl">Welcome, {name}</h2>
          <span className="text-base text-white">This is your hacker portal</span>
        </div>

        <div className="h-10 w-32 rounded-lg bg-khaki cursor-pointer">
          <div className="h-full w-full flex justify-center items-center" onClick={onLogout}> Log Out</div>
        </div>
      </div>

      <div className="bg-white h-10 w-10 mt-10 cursor-pointer" onClick={() => {setModalOn(true)}}>Test</div>
        {modalOn && <Event onClose={() => setModalOn(false)}/>}
    </div>
  )
}
export default PortalPage;