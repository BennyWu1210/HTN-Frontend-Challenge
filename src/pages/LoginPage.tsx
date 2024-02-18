import { useNavigate } from "react-router-dom";
import Navbar from "../components/shared/Nav";
import { useState } from "react";

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const onLogin = () => {
    if (username !== "Benny" || password !== "12345") {
      alert("Invalid Credentials! But I'll let you in for testing purposes (don't tell anyone) :D");
    }
    navigate('/portal', {
      state: { text: username }
    })
  }

  return <div className="bg-metal h-screen w-screen flex">
    <Navbar />

    {/* Sign In Box */}
    <div className="w-login-wid h-login-len bg-black-light m-auto drop-shadow-2xl flex flex-col p-16 rounded-md">
      <h2 className="text-almond font-bold text-3xl">Sign In</h2>
      <form className="my-4 flex flex-col gap-4">
        <label className="text-white text-lg" htmlFor="usernameInput">Username</label>
        <input className="h-12 rounded-lg bg-slate-200 p-2" id="usernameInput" aria-label="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <label className="text-white text-lg" htmlFor="passwordInput">Password</label>
        <input className="h-12 rounded-lg bg-slate-200 p-2" id="passwordInput" aria-label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <span></span>
        <span></span>
        <div className="h-12 rounded-lg bg-khaki cursor-pointer hover:opacity-90">
          <div className="h-full w-full flex justify-center items-center" onClick={onLogin} >Submit</div>
        </div>
      </form>
    </div>
  </div>
}
export default LoginPage;