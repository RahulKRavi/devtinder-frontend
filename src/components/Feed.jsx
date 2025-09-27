import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch ,useSelector } from "react-redux";
import { addFeed } from "../utils/feedSlice";

const Feed = () => {
  const dispatch = useDispatch();
  const feed = useSelector(store => store.feed)
  async function fetchFeed() {
    const res = await axios.get(BASE_URL + "/user/feed", {
      withCredentials: true,
    });
    dispatch(addFeed(res?.data?.data));
  }

  useEffect(() => {
    fetchFeed();
  },[]);

  return (
    <div className="min-h-lvh flex justify-center my-20">
      {feed && <div className="card card-side bg-base-100 shadow-sm">
        <figure>
          <img
            src={feed[1]?.photoURL}
            alt="Movie"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{feed[1]?.firstName + " " +feed[1].lastName}</h2>
          <p>{feed[1]?.about}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Watch</button>
          </div>
        </div>
      </div>}

    </div>
  );
};

export default Feed;
