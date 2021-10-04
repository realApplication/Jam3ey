import React, { useEffect, useRef, useState } from 'react'
import io from 'socket.io-client'
import superagent from 'superagent'
import LoginProvider from './components/context';
import Login from './components/login';
import cookie from 'react-cookies'

export default function App() {
  const socketRef = useRef();
  const PORT = 7893
  const SERVERPORT = 8000

  socketRef.current = io.connect(`http://localhost:${PORT}`)
  let [approval, setApproval] = useState([]);
   let [superVisor , setSuperVisor]=useState(false);

  useEffect(() => {

    socketRef.current.on("mainwall", (data) => {
      console.log('suoervisor //data', data)
      setApproval(data)
     
    })
    
      //  studentNum:data.studentNum,    time: data.time,    volunteerName:data.volunteerName
    },[approval])
  
  

  let handleAskHelp = async () => {
    const token = cookie.load("token");
    let response = await superagent.get(`http://localhost:${SERVERPORT}/askHelp`).set("authorization", `Bearer ${token}`);
    console.log("respones//hadle ask help", response.body)
  }
  let volunteer = async () => {

    const token = cookie.load("token");
    let response = await superagent.get(`http://localhost:${SERVERPORT}/volunteer`).set("authorization", `Bearer ${token}`);
    console.log("respones//volunteer", response.body)
    setSuperVisor(false)
    

  }
  let handleSuperVisor=()=>{
    setSuperVisor(true)
  }
  return (
    <div>

      {approval !='' && <>
      { localStorage.setItem('list' , JSON.stringify(approval))}
       
       
     
        <spam>volunteer: {approval.volunteerName}</spam> 
        <button onClick={handleSuperVisor}>superVisor</button>
      
    
      </>}

      {superVisor &&
      <>
       <h2 style={{color:"red"}}>super visor</h2>
 <h1>time: {approval.time}</h1>
 <h1>class name: {approval.className}</h1>
 <h1>students number: {approval.studentNum}</h1>
 <h1>book: {approval.bookNameID}</h1>
 <h1>volunteer: {approval.volunteerName}</h1> 
 </>
      }


      <LoginProvider>
        <Login />

        {/* <Auth/ > */}

      </LoginProvider>
      <button onClick={handleAskHelp}>ask help</button>
      <button onClick={volunteer}>volunteer</button>
      
      

    </div>
  )
}
