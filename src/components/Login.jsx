import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router";
import { BASE_URL } from "../utils/constants";

const Login = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState(18);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoginForm, setIsLoginForm] = useState(true);
  const linkText = isLoginForm ? "New User? Sign Up Here":"Already A User"
  const buttonText = isLoginForm ? "LOGIN":"SIGNUP"
  const buttonAction = isLoginForm ? handleLogin : handleSignUp
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function handleLogin() {
    try {
      const res = await axios.post(
        BASE_URL + "/login",
        {
          email,
          password,
        },
        {
          withCredentials: true,
        }
      );
      dispatch(addUser(res?.data?.data));
      navigate("/");
    } catch (err) {
      console.log("Caught Error: " + err.message);
    }
  }

  async function handleSignUp() {
    try {
      const res = await axios.post(
        BASE_URL + "/signup",
        { firstName, lastName, age, email, password },
        { withCredentials: true }
      );
      dispatch(addUser(res?.data?.data));
      navigate("/profile");
    } catch (err) {
      console.log("Caught Error: " + err.message);
    }
  }

  return (
    <main className="flex justify-center py-10">
      <div className="card bg-base-300 shadow-sm min-w-96 min-h-96">
        <div className="card-body items-center text-center">
          <h2 className="card-title">{isLoginForm ? "LOGIN" : "SIGNUP"}</h2>
          <fieldset className="fieldset">
            {!isLoginForm && (
              <>
                {" "}
                <label className="label">FirstName</label>
                <input
                  type="text"
                  className="input"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <label className="label">LastName</label>
                <input
                  type="text"
                  className="input"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
                <label className="label">Age</label>{" "}
                <input
                  type="number"
                  className="input"
                  value={age}
                  min={18}
                  max={120}
                  onChange={(e) => setAge(Number(e.target.value))}
                />
              </>
            )}
            <label className="label">Email</label>
            <input
              type="email"
              className="input"
              placeholder="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <label className="label">Password</label>
            <input
              type="password"
              className="input"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <div className="flex flex-col">
              <div>
                <a className="link link-hover" onClick={() => setIsLoginForm(!isLoginForm)}> {linkText}</a>
              </div>
              <button className="btn btn-neutral mt-4" onClick={() => buttonAction()}> {buttonText} </button>
            </div>
          </fieldset>
        </div>
      </div>
    </main>
  );
};

export default Login;
