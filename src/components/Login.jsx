import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router";
import { BASE_URL } from "../utils/constants";

const Login = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState(18)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoginForm, setIsLoginForm] = useState(true);
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
      <div className="card bg-base-300 w-96 shadow-sm">
        <div className="card-body items-center text-center">
          <h2 className="card-title">{isLoginForm ? "Login" : "SignUp"}</h2>
          {!isLoginForm && (
            <>
              {" "}
              <fieldset className="fieldset">
                <legend className="fieldset-legend">FirstName</legend>
                <input
                  type="text"
                  className="input"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </fieldset>
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Last Name</legend>
                <input
                  type="text"
                  className="input"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </fieldset>
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Age</legend>
                <input
                  type="number"
                  className="input"
                  value={age}
                  min={18}
                  max={120}
                  onChange={(e) => setAge(Number(e.target.value))}
                />
              </fieldset>
            </>
          )}

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
            {isLoginForm ? (
              <>
                <button
                  className="btn btn-primary"
                  onClick={() => handleLogin()}
                >
                  Login
                </button>
                <u onClick={() => setIsLoginForm(false)}>
                  New User? Sign Up Here
                </u>
              </>
            ) : (
              <>
                <button
                  className="btn btn-primary"
                  onClick={() => handleSignUp()}
                >
                  SignUp
                </button>
                <u onClick={() => setIsLoginForm(true)}>Already A User</u>
              </>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
