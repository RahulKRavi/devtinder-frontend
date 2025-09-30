import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { BASE_URL } from "../utils/constants";

const Profile = () => {
  const user = useSelector(store => store.user)
  const [userData, setUserData] = useState(null)

  function handleChange(e) {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  }
  async function handleUpdateProfile(userData){
    try {
      const updatedUser = await axios.patch(BASE_URL + '/profile/edit', {...userData} , {withCredentials:true})
    } catch (err) {
      console.log('Caught Error: ' + err.message)
    }
  }
  useEffect(()=>{
    setUserData(user)
  },[user])
  return (
    <main className="flex justify-around py-10">
      {user && <>      
      <div className="card bg-base-300 w-96 shadow-sm">
        <div className="card-body items-center text-center">
          <h2 className="card-title">Profile</h2>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">FirstName</legend>
            <input
              name="firstName"
              type="text"
              className="input"
              value={userData?.firstName}
              onChange={(e)=>handleChange(e)}
            />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Lastname</legend>
            <input
              name="lastName"
              type="text"
              className="input"
              value={userData?.lastName}
              onChange={(e)=>handleChange(e)}
            />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Age</legend>
            <input
              name="age"
              type="text"
              className="input"
              value={userData?.age}
              onChange={(e)=>handleChange(e)}
            />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Gender</legend>
            <input
              name="gender"
              type="text"
              className="input"
              value={userData?.gender}
              onChange={(e)=>handleChange(e)}
            />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">About</legend>
            <input
              name="about"
              type="text"
              className="input"
              value={userData?.about}
              onChange={(e)=>handleChange(e)}
            />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Photo URL</legend>
            <input
              name="photoURL"
              type="text"
              className="input"
              value={userData?.photoURL}
              onChange={(e)=>handleChange(e)}
            />
          </fieldset>
          <div className="card-actions">
            <button className="btn btn-primary" onClick={(userData) => handleUpdateProfile(userData)}>
              Save Profile
            </button>
          </div>
        </div>
      </div>
      <div className="card card-side w-96 bg-base-100 shadow-sm">
        <figure>
          <img
            src={userData?.photoURL}
            alt="Movie"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{userData?.firstName + " " +userData?.lastName}</h2>
          <p>{userData?.about}</p>
          <p>{userData?.age + " " + userData?.gender}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">IGNORE</button>
          </div>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">INTERESTED</button>
          </div>
        </div>
      </div></>}

    </main>
  );
};

export default Profile;
