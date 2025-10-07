import axios from "axios"
import { BASE_URL } from "../utils/constants"
import { useEffect, useState } from "react"
import SmallUserCard from "./SmallUserCard"
import Skeleton from "./Skeleton"

const Requests = () => {
  const [requests,setRequests] = useState([])
  const fetchRequests = async ()=> {
    try {
      const res = await axios.get(BASE_URL + '/user/requests', {
       withCredentials: true
            })
            setRequests(res?.data?.data)
    } catch (err) {
      console.log("Caught Error: " + err.message)
    }
  }
  const handleRemoveRequest = (reqID)=>{
    const updatedRequests = requests.filter((item)=>item._id !== reqID)
    setRequests(updatedRequests)
  }
  useEffect(()=>{
    fetchRequests()
  },[])

  if(requests.length === 0) {
    return (
      <Skeleton/>
    )
  }
  return (
    <main className="flex justify-around py-10">
      {requests.map((item)=>{
        return <SmallUserCard key={item._id} reqID={item._id} user={item.fromUserId} isViewButtons={true} handleRemoveRequest={handleRemoveRequest}/>
      })}
    </main>
  )
}

export default Requests