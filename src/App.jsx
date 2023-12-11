import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import axios from 'axios'
import carArray from './ImagesArray'
import './App.css'
import NavBar from './NavBar'
import Footer from './Footer'
import HomePage from './HomePage'
import SellPage from './SellPage'
import CarPage from './CarPage'
import BuyPage from './BuyPage'
import AboutPage from './AboutPage'
import Payment from './Payment'
import Login from './Login'
import Register from './Register'


function App() {

  const [data, setData] = useState([]);
  const [finalArray, setFinalArray] = useState([]);
  const [currentForm, setCurrentForm] = useState("login")

  const changeForm = (name) => {
    setCurrentForm(name);
  }

  function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function getRandomStringFromArray(stringArray) {
    return stringArray[Math.floor(Math.random() * stringArray.length)];
  }

  async function getCar() {
    const url = 'https://car-data.p.rapidapi.com/cars?limit=50&page=0';
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
      setData(result);

    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    async function fetchData() {
      getCar();
    }
    fetchData();
  }, []);

  useEffect(() => {
    if (Array.isArray(data)) {
      const combinedData = data.map((item, index) => {
        return {
          ...item,
          url: carArray[index],
          price: generateRandomNumber(1000, 8000) * 1000,
          rating: generateRandomNumber(2, 5),
          kmsDriven: generateRandomNumber(5, 350) * 100,
          fuelConsumption: generateRandomNumber(20, 60) + `L/100kms`,
          location: getRandomStringFromArray(["Nairobi", "Mombasa", "Nakuru", "New York", "Mumbai", "London", "Rome", "Paris", "Madrid", "Eldoret", "Lamu", "Malindi", "Barcelona", "Voi", "Manchester"]),
          fuelType: getRandomStringFromArray(["Petrol", "Diesel"]),
          transmissionType: getRandomStringFromArray(["Manual", "Automatic", "Dual-Transmission"]),
          key: item.id,
        };
      });
      setFinalArray(combinedData);
    }
  }, [data]);

  useEffect(() => {
    console.log(finalArray);
  }, [finalArray]);

  return (
    <>
      <Routes>
        <Route path="/" exact="true" element={<HomePage />} />
        <Route path="/buy" exact="true" element={<BuyPage cars={finalArray} />} />
        <Route path="/sell" exact="true" element={<SellPage cars={finalArray} setCars={setFinalArray} />} />
        <Route path="/about" exact="true" element={<AboutPage />} />
        <Route path="/payment" exact="true" element={<Payment />} />
        <Route exact path="/login" element={<Login/>}/> 
        <Route exact path="/register" element={<Register/>} />
        <Route path="/buy/:index" exact="true" element={<CarPage cars={finalArray} />} />
      </Routes>
     {/*<Footer />*/}
    </>
  )
}

export default App;