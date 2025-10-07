import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useEffect, useState } from "react";
import SmallUserCard from "./SmallUserCard";
import Skeleton from "./Skeleton";

const Connections = () => {
  const [connections, setconnections] = useState([]);

  const fetchConnections = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/connections", {
        withCredentials: true,
      });
      setconnections(res?.data?.data);
    } catch (err) {
      console.log("Caught Error: " + err.message);
    }
  };

  useEffect(() => {
    fetchConnections();
  }, []);

  if (connections.length === 0) {
    return <Skeleton/>;
  }
  return (
    <main className="grid grid-cols-4 gap-4">
      {connections.map((user) => {
        return (
          <SmallUserCard key={user._id} user={user}/>
        );
      })}
    </main>
  );
};

export default Connections;
