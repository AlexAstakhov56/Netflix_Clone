import { useState } from "react";
import { useNavigate } from "react-router";
import backgroundImage from "/background.jpg";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { setUsername, setIsAdmin } from "../store/authSlice";

const LoginPage = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === "1234") dispatch(setIsAdmin(true));
    else if (password !== "") {
      setPassword("");
      toast.error("Incorrect password!");
      return;
    }
    dispatch(setUsername(user));
    navigate("/");
  };

  return (
    <div className="container py-6 relative">
      <img
        src={backgroundImage}
        alt="background"
        className="w-full max-h-[480px] object-cover "
      />
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/60 flex justify-center items-center">
        <form
          onSubmit={(e) => handleLogin(e)}
          className="lg:w-[400px] w-[200px] p-5 lg:h-[300px] h-[150px] bg-white rounded-xl text-black flex gap-8 flex-col text-center"
        >
          <div className="text-2xl font-semibold">Login</div>
          <input
            value={user}
            onChange={(e) => setUser(e.target.value)}
            className="border p-2 rounded-lg text-lg"
            type="text"
            placeholder="Enter your Username:"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border p-2 rounded-lg text-lg"
            type="password"
            placeholder="Enter password (if you're an admin):"
          />
          <button
            type="submit"
            className="text-lg bg-secondary text-white rounded-xl py-2 cursor-pointer"
          >
            OK
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
