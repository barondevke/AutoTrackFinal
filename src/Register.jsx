import React from 'react'
import { useState } from 'react'

export default function Register( {changeForm}) {
    const[email, setEmail]=useState("")
    const[fullName, setFullName]=useState("")
    const[username,setUserName]=useState("")
    const[password,setPassword]=useState("")
    const [isChecked, setIsChecked] = useState(false);
  
  
  
 const handleSubmit= (e) =>{
   e.preventDefault()
    
    const newUserInfo = {
          email: email,
          fullName: fullName,
          username: username,
          password: password,
        };

if(isChecked){
      
     fetch("http://localhost:3000/Personal", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUserInfo),
    })

} 

      setEmail("");
      setFullName("");
      setUserName("");
      setPassword("");
      setIsChecked(false)

      }
     
   const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
      };
    

  return (
    <>
    <form onSubmit={handleSubmit}>
    <label htmlFor="email">Email: </label>
     <input type="email" value={email} name="email" id="email" onChange={(e)=> setEmail(e.target.value)} placeholder="Input your email..." required/> 
       <br></br>
    <label htmlFor="fullName">Fullname: </label>
      <input type="text" value={fullName} name="fullName" id="fullName" placeholder="Fullname" onChange={(e)=> setFullName(e.target.value)} required/>
        <br></br>
    <label htmlFor="username">Username: </label>
     <input type="text" value={username} name="username" id="username" onChange={(e)=> setUserName(e.target.value)} placeholder="Your username" required/> 
        <br></br>
    <label htmlFor="password">Password: </label>
      <input type="password" value={password} name="password" id="password" onChange={(e)=> setPassword(e.target.value)} placeholder="*******" required/>
        <br></br>
   
    <label htmlFor="terms">Do you agree with the terms and conditions: </label>
    <br></br>
      <input type="checkbox"  name="terms" checked={isChecked}  onChange={handleCheckboxChange}  required />
        <br></br>
    <button type="submit">Create an account</button>
    </form> 
    <button onClick={()=>changeForm("login")}>Already have an account.</button>
  </>
  )
}
