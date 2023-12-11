import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from './NavBar';

function SellPage({ cars, setCars }) {

    const navigate = useNavigate();

    const [fuelConsumption, setFuelConsumption] = useState("");
    const [fuelType, setFuelType] = useState("");
    const [kmsDriven, setKmsDriven] = useState("");
    const [location, setLocation] = useState("");
    const [make, setMake] = useState("");
    const [model, setModel] = useState("");
    const [price, setPrice] = useState("");
    const [transmissionType, setTransmissionType] = useState("");
    const [type, setType] = useState("");
    const [url, setUrl] = useState("");
    const [year, setYear] = useState("");

    function handleFuelConsumptionChange(event) {
        setFuelConsumption(event.target.value);
    }

    function handleFuelTypeChange(event) {
        setFuelType(event.target.value);
    }

    function handleKmsDrivenChange(event) {
        setKmsDriven(event.target.value)
    }

    function handleLocationChange(event) {
        setLocation(event.target.value)
    }

    function handleMakeChange(event) {
        setMake(event.target.value);
    }

    function handleModelChange(event) {
        setModel(event.target.value);
    }

    function handlePriceChange(event) {
        setPrice(event.target.value)
    }

    function handleTransmissionTypeChange(event) {
        setTransmissionType(event.target.value)
    }

    function handleUrlChange(event) {
        setUrl(event.target.value)
    }

    function handleTypeChange(event) {
        setType(event.target.value)
    }

    function handleYearChange(event) {
        setYear(event.target.value)
    }

    function generateRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const newCarInfo = {
            id: generateRandomNumber(9700, 9800),
            year: year,
            model: model,
            make: make,
            type: type,
            url: url.toString(),
            price: price,
            rating: generateRandomNumber(2, 5),
            kmsDriven: kmsDriven,
            fuelConsumption: fuelConsumption + `L/100km`,
            fuelType: fuelType,
            location: location,
            transmissionType: transmissionType,
            key: generateRandomNumber(9700, 9800),
        }

        setCars([...cars, newCarInfo])



        setFuelConsumption("");
        setFuelType("");
        setKmsDriven("");
        setLocation("");
        setMake("");
        setModel("");
        setPrice("");
        setTransmissionType("");
        setType("");
        setUrl("");
        setYear("");


        navigate(`/buy`)
        alert('Car added successfully!')
    };

    return (
        <>
        <div className='sellNav'><NavBar/></div>
        <div id='formDivCY'>
            <h1 id='formHeaderCy'>SELL YOUR CAR TODAY!!</h1>
            <form onSubmit={handleSubmit}>
                <label className="formLabelCY" htmlFor="make">Make:</label>
                <input className="formInputCY" type="text" value={make} onChange={handleMakeChange} required /><br /><br />

                <label className="formLabelCY" htmlFor="model">Model:</label>
                <input className="formInputCY" type="text" value={model} onChange={handleModelChange} required /><br /><br />

                <label className="formLabelCY" htmlFor="year">Year:</label>
                <input className="formInputCY" type="text" value={year} onChange={handleYearChange} required /><br /><br />

                <label className="formLabelCY" htmlFor="price">Price:</label>
                <input className="formInputCY" type="number" value={price} onChange={handlePriceChange} required /><br /><br />

                <label className="formLabelCY" htmlFor="location">Location:</label>
                <input className="formInputCY" type="text" value={location} onChange={handleLocationChange} required /><br /><br />

                <label className="formLabelCY" htmlFor="kmsDriven">Kilometers Driven:</label>
                <input className="formInputCY" type="number" value={kmsDriven} onChange={handleKmsDrivenChange} required /><br /><br />

                <label className="formLabelCY" htmlFor="transmissionType">Transmission-Type:</label>
                <input className="formInputCY" type="text" value={transmissionType} onChange={handleTransmissionTypeChange} required /><br /><br />

                <label className="formLabelCY" htmlFor="fuelType">Fuel-Type:</label>
                <input className="formInputCY" type="text" value={fuelType} onChange={handleFuelTypeChange} required /><br /><br />

                <label className="formLabelCY" htmlFor="fuelConsumption">Fuel Consumption:</label>
                <input className="formInputCY" type="text" value={fuelConsumption} onChange={handleFuelConsumptionChange} required /><br /><br />

                <label className="formLabelCY" htmlFor="url">Image of car:</label>
                <input className="formInputCY" type="text" value={url} onChange={handleUrlChange} required /><br /><br />

                <label className="formLabelCY" htmlFor="type">Car Type:</label>
                <input className="formInputCY" type="text" value={type} onChange={handleTypeChange} required /><br /><br />

                <button type='Submit'>ADD TO AUTOTRACK</button>
            </form>
        </div>
    </>
    );
}

export default SellPage;