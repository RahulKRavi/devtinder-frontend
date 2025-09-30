import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFeed, removeUserFromFeed } from "../utils/feedSlice";

const Feed = () => {
  const dispatch = useDispatch();
  const feed = useSelector((store) => store.feed);

  async function fetchFeed() {
    try {
      const res = await axios.get(BASE_URL + "/user/feed", {
        withCredentials: true,
      });

      dispatch(addFeed(res?.data?.data));
    } catch (err) {
      console.log("Caught Error: " + err.message);
    }
  }

  async function handleClick(status,id) {
    try {
      const res = await axios.post(BASE_URL + '/request/send/' + status + '/' + id,{},{withCredentials:true} )
      dispatch(removeUserFromFeed(id))
    } catch (err) {
      console.log("Caught Error: " + err.message)
    }
  }
  
  useEffect(() => {
    fetchFeed();
  }, []);
  if(!feed) return null;

  if(feed.length === 0) {
    return <>NO MORE NEW USERS</>
  }
  return (
    <div className="min-h-lvh flex justify-center my-20">
      {feed && (
        <div className="card card-side bg-base-100 shadow-sm">
          <figure>
            <img src={feed[0]?.photoURL} alt="Movie" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {feed[0]?.firstName + " " + feed[0].lastName}
            </h2>
            <p>{feed[0]?.about}</p>
            <div className="card-actions justify-around">
              <button className="btn btn-primary" onClick={()=>handleClick('ignored',feed[0]._id)}>Ignore</button>
              <button className="btn btn-primary" onClick={()=>handleClick('interested',feed[0]._id)}>Interested</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Feed;
