import React, { useState } from 'react'
import axios from 'axios'
const First = () => {
const[status,setstatus]=useState("no appliction")
const[field,setfield]=useState("")

const handleclick=async()=>{
    if(!field){
        return alert("fill the name")
    }
    const payload={
        name:field
    }
    const requesturl=await axios.post("http://localhost:3000/apis/req",payload)
    if(requesturl.data.success){
        setstatus("pending......")
        return
    }
    setstatus("application failed")

}

  return (
    <div>
        <div>
            <input type="text" placeholder='name' name='name' value={field} onChange={(e)=>setfield(e.target.value)} />
      <button onClick={handleclick}>Request</button>

      {status}
      </div>
    </div>
  )
}

export default First
