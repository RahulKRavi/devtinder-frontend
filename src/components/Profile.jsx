import { useState } from "react";

const Profile = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [about, setAbout] = useState("");
  return (
    <main className="flex justify-center py-10">
      <div className="card bg-base-300 w-96 shadow-sm">
        <div className="card-body items-center text-center">
          <h2 className="card-title">Profile</h2>
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
            <legend className="fieldset-legend">Lastname</legend>
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
              type="text"
              className="input"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Gender</legend>
            <input
              type="text"
              className="input"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">About</legend>
            <input
              type="text"
              className="input"
              value={about}
              onChange={(e) => setAbout(e.target.value)}
            />
          </fieldset>
          <div className="card-actions">
            <button className="btn btn-primary" onClick={() => handleSaveProfile()}>
              Save Profile
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Profile;
