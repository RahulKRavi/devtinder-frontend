import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router";

const Login = () => {
  const [email, setEmail] = useState("punk@gmail.com");
  const [password, setPassword] = useState("Punk@123");
  const dispatch = useDispatch();
  const navigate = useNavigate()

  async function handleLogin() {
    try {
      const res = await axios.post("http://localhost:5000/login", {
        email,
        password,
      },{
        withCredentials: true
      });
      dispatch(addUser(res?.data?.data))
      navigate('/')
    } catch (err) {
      console.log(err.message);
    }
  }

  return (
    <main className="flex justify-center py-10">
      <div className="card bg-yellow-700 w-96 shadow-sm h-96">
        <div className="card-body items-center text-center">
          <h2 className="card-title">Login</h2>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Email</legend>
            <input
              type="text"
              className="input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Password</legend>
            <input
              type="text"
              className="input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </fieldset>
          <div className="card-actions">
            <button className="btn btn-primary" onClick={() => handleLogin()}>
              Login
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
