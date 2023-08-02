import React from 'react'
import { useState,useEffect } from 'react'

export default function Login({changeForm}) {
  const[email, setEmail]=useState("")
  const[username,setUserName]=useState("")
  const[password,setPassword]=useState("")
  const[infos,setInfos]=useState([])

useEffect(()=>{
  fetch('http://localhost:3000/Personal')
  .then(res=>res.json())
  .then(data=>setInfos(data))
},[])
   
  const handleSubmit= (e) =>{
    e.preventDefault()
    
    
    const userFound = infos.find((item) => item.username === username && item.password === password);
    if (userFound) {
      alert(`Welcome ${username}`);
    } else {
      alert('User not found');
    }
  
     
    setEmail("")
    setUserName("")
    setPassword("")
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email: </label>
       <input type="email" value={email} name="email" id="email" onChange={(e)=> setEmail(e.target.value)} placeholder="Input your email..." required/> 
        <br></br>
      <label htmlFor="username">Username: </label>
       <input type="username" value={username} name="username" id="username" onChange={(e)=> setUserName(e.target.value)} placeholder="Your username" required/> 
         <br></br>
      <label htmlFor="password">Password: </label>
        <input type="password" value={password} name="password" id="password" onChange={(e)=> setPassword(e.target.value)} placeholder="*******" required/>
        <br></br>
      <button type="submit">Login</button>
    </form> 
    <button onClick={()=>{changeForm("register")}} >Don't have an account</button>
  </>
  )
}
