import { useNavigate } from "react-router-dom";
import Navbar from "../components/shared/Nav";
import { useState } from "react";

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState<string>('');

  const onLogin = () => {
    navigate('/portal', {
      state: {text: username}
    })
  }

  return <div className="bg-metal h-screen w-screen flex">
    <Navbar />

    <div className="w-login-wid h-login-len bg-black-light m-auto drop-shadow-2xl flex flex-col p-16 rounded-md">
      <h2 className="text-almond font-bold text-3xl">Sign In</h2>
      <form className="my-4 flex flex-col gap-4">
        <span className="text-white text-lg">Username</span>
        <input className="h-12 rounded-lg bg-slate-200 p-2" value={username} onChange={(e) => setUsername(e.target.value)}/>
        <span className="text-white text-lg">Password</span>
        <input className="h-12 rounded-lg bg-slate-200 p-2" />

        <span></span>
        <span></span>

        <div className="h-12 rounded-lg bg-khaki cursor-pointer">
          <div className="h-full w-full flex justify-center items-center" onClick={onLogin} >Submit</div>
        </div>
      </form>
    </div>
  </div>
}
export default LoginPage;