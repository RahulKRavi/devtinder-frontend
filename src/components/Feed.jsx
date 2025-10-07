import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFeed, removeUserFromFeed } from "../utils/feedSlice";
import LargeUserCard from "./LargeUserCard";
import Skeleton from "./Skeleton";

const Feed = () => {
  const dispatch = useDispatch();
  const feed = useSelector((store) => store.feed);

 const fetchFeed = async ()=> {
    try {
      const res = await axios.get(BASE_URL + "/user/feed", {
        withCredentials: true,
      });
      dispatch(addFeed(res?.data?.data));
    } catch (err) {
      console.log("Caught Error: " + err.message);
    }
  }

  const handleClick = async (status,id)=> {
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
    return <Skeleton/>
  }
  return (
    <div className="flex justify-center my-20">
      {feed && (
        <LargeUserCard user={feed[0]} isButtonVisible={true} handleClick={handleClick}/>
      )}
    </div>
  );
};

export default Feed;
