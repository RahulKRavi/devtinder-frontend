import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { BASE_URL } from "../utils/constants";
import LargeUserCard from "./LargeUserCard";

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
      const {firstName,lastName,age,about,photoURL} = userData
      const updatedUser = await axios.patch(BASE_URL + '/profile/edit', {firstName,lastName,age,about,photoURL} , {withCredentials:true})
    } catch (err) {
      console.log('Caught Error: ' + err.message)
    }
  }

  useEffect(()=>{
    setUserData(user)
  },[user])

  if(!userData) return null
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
            <button className="btn btn-primary" onClick={() => handleUpdateProfile(userData)}>
              Save Profile
            </button>
          </div>
        </div>
      </div>
      <LargeUserCard user={user} isButtonVisible={false}/>
      </>}

    </main>
  );
};

export default Profile;
