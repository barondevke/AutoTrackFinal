import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'


import NavBar from './Components/NavBar'

import HomePage from './Components/HomePage'
import SellPage from './Components/SellPage'
import CarPage from './Components/CarPage'
import BuyPage from './Components/BuyPage'
import Login from './Components/Login'

import Register from './Components/Register'


function App() {

  const [data, setData] = useState([])
  const[currentForm,setCurrentForm]=useState("login")

  const changeForm=(name)=>{
   setCurrentForm(name);
  }


  async function getCar() {
    const url = 'https://car-data.p.rapidapi.com/cars?limit=40&page=0';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '6db864d969msh4f8a10158de8c28p12489ajsn52bfff0f0828',
        'X-RapidAPI-Host': 'car-data.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setData(result)
      console.log(result);

    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
    <NavBar/>
      <Routes>
        <Route exact path ="/" element={<HomePage/>}/>
        <Route exact path ="/buy" element={<BuyPage/>}/>
        <Route exact path ="/sell" element={<SellPage/>}/>
         {currentForm === "login" ? <Route exact path ="/login" element={<Login changeForm={changeForm}/>}/>:<Route exact path ="/login" element={<Register changeForm={changeForm}/>}/>} 
      </Routes>
    
   
    </>
  )
}

export default App
