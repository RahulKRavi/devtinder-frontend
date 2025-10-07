import axios from "axios";
import { BASE_URL } from "../utils/constants";

const SmallUserCard = ({ reqID, user, isViewButtons,handleRemoveRequest}) => {
  const { firstName, lastName, age, about, photoURL } = user;

  const handleRequest = async (status, reqID) => {
    try {
      await axios.post(
        BASE_URL + "/request/recieved/" + status + "/" + reqID,
        {},
        { withCredentials: true }
      );
      handleRemoveRequest(reqID)
    } catch (err) {
      console.log("Caught Error: " + err.message);
    }
  };

  return (
    <div className="card bg-base-300 shadow-sm">
      <figure className="px-10 pt-10 h-60 w-60 overflow-hidden">
        <img src={photoURL} alt="Shoes"  className="rounded-xl h-full w-full object-cover" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{firstName + " " + lastName}</h2>
        <p>{about}</p>
        {isViewButtons && (
          <div className="card-actions">
            <button
              className="btn btn-success"
              onClick={() => handleRequest("accepted", reqID)}
            >
              Accept
            </button>
            <button
              className="btn btn-error"
              onClick={() => handleRequest("rejected", reqID)}
            >
              Reject
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SmallUserCard;
