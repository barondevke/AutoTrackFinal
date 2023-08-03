import React, { useState } from 'react';

function SellPage() {
    const [carInfo, setCarInfo] = useState({
        make: '',
        model: '',
        year: '',
        price: '',
        location: '',
        kms: '',
        transmission: '',
        power: '',
        fuel: '',
        driveType: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(carInfo);
    };
     
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCarInfo((prevInfo) => ({
            ...prevInfo,
            [name]: value
        }));
    };

    return (
        <div>
            <h1>SELL YOUR CAR TODAY!!</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="make">Make:</label>
                <input type="text" id="make" name="make" value={carInfo.make} onChange={handleInputChange} required /><br /><br />

                <label htmlFor="model">Model:</label>
                <input type="text" id="model" name="model" value={carInfo.model} onChange={handleInputChange} required /><br /><br />

                <label htmlFor="year">Year:</label>
                <input type="text" id="year" name="year" value={carInfo.year} onChange={handleInputChange} required /><br /><br />

                <label htmlFor="price">Price:</label>
                <input type="text" id="price" name="price" value={carInfo.price} onChange={handleInputChange} required /><br /><br />

                <label htmlFor="location">Location:</label>
                <input type="text" id="location" name="location" value={carInfo.location} onChange={handleInputChange} required /><br /><br />

                <label htmlFor="kms">Kilometers:</label>
                <input type="text" id="kms" name="kms" value={carInfo.kms} onChange={handleInputChange} required /><br /><br />

                <label htmlFor="transmission">Transmission:</label>
                <input type="text" id="transmission" name="transmission" value={carInfo.transmission} onChange={handleInputChange} required /><br /><br />
 
                <label htmlFor="power">Power:</label>
                <input type="text" id="power" name="power" value={carInfo.power} onChange={handleInputChange} required /><br /><br />

                <label htmlFor="fuel">Fuel:</label>
                <input type="text" id="fuel" name="fuel" value={carInfo.fuel} onChange={handleInputChange} required /><br /><br />

                <label htmlFor="driveType">Drive Type:</label>
                <input type="text" id="driveType" name="driveType" value={carInfo.driveType} onChange={handleInputChange} required /><br /><br />
                
                <input type="submit" value="ADD TO CARFINDER" />
            </form>
        </div>
    );
}

export default SellPage;
