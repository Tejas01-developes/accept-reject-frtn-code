import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Req = () => {
const[req,setreq]=useState([])
useEffect(()=>{
const getreq=async()=>{
    const getrequrl=await axios.get("http://localhost:3000/apis/get");
    if(getrequrl.data.success){
return setreq(getrequrl.data.data)
    }
    alert(getrequrl.data.message);
}
getreq()
},[])


const accept=async(name)=>{
    const payload={
        email:name
        
    }
console.log(payload)
    const accurl=await axios.post("http://localhost:3000/apis/accept",payload)
    if(accurl.data.success){
        alert(accurl.data.message)
      
       return
    }
    alert("error")
}


const reject=async(name)=>{
    const payload={
        email:name
    }
    const rejurl=await axios.post("http://localhost:3000/apis/reject",payload)
    if(rejurl.data.success){
       return alert(rejurl.data.message)
    }
    alert("error")
}

  return (
    <div>
  { req.length >0 ? ( 
req.map((r,i)=>(
    <div key={i}>
        {r.name}:     
        <strong>{r.status}</strong>
        <button><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI6XgMKd2_iMityOS59F8HHoQLizCwzz4NQA&s" alt="" onClick={()=>accept(r.name)} /></button>
        <button><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH3oqFQYeq2Jniv1Tzq38wF48wrhyDNdMKbA&s" alt="" onClick={()=>reject(r.name)} /></button>

    </div>
))
  ):(
    <h2>no pending application</h2>
  )
  }
    </div>
  )
}

export default Req
