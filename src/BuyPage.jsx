
import { useState, useEffect } from "react";
import React from "react";
import CarItem from "./CarItem";
import SearchBar from "./SearchBar";
import PriceFilter from "./PriceFilter";
import NavBar from "./NavBar";

export default function BuyPage({ cars }) {
    const [carsToDisplay, setCarsToDisplay] = useState(cars);
    const [carNotFound, setCarNotFound] = useState(false);
    const [priceFilter, setPriceFilter] = useState("All");


    const handleSearch = (query) => {
        const lowerCaseQuery = query.toLowerCase();

        if (lowerCaseQuery.trim() === "") {
            setCarsToDisplay(cars);
            setCarNotFound(false);
        } else {
            const filteredCars = cars.filter((car) => {
                const modelMatches = car.model.toLowerCase().includes(lowerCaseQuery);
                const makeMatches = car.make.toLowerCase().includes(lowerCaseQuery);
                const locationMatches = car.location.toLowerCase().includes(lowerCaseQuery);

                return modelMatches || makeMatches || locationMatches;
            });

            setCarsToDisplay(filteredCars);
            setCarNotFound(filteredCars.length === 0);
        }
    };

    const handleClear = () => {
        setCarsToDisplay(cars);
        setCarNotFound(false);
    };

    const handlePriceFilter = (range) => {
        setPriceFilter(range);
        filterCarsByPrice(range);
    };

    const filterCarsByPrice = (range) => {
        if (range === "All") {
            setCarsToDisplay(cars);
        } else {
            const [minPrice, maxPrice] = getPriceRange(range);
            const filteredCars = cars.filter((car) => car.price >= minPrice && car.price <= maxPrice);
            setCarsToDisplay(filteredCars);
        }
    };

    const getPriceRange = (range) => {
        switch (range) {
            case "Below Ksh 1,500,000":
                return [0, 1500000];
            case "Ksh 1,500,000 - Ksh 3,500,000":
                return [1500000, 3000000];
            case "Ksh 3,500,000 - Ksh 6,000,000":
                return [3500000, 6000000];
            case "Above Ksh 6,000,000":
                return [6000000, Number.MAX_SAFE_INTEGER];
            default:
                return [0, Number.MAX_SAFE_INTEGER];
        }
    };

    useEffect(() => {
        setCarsToDisplay(cars);
        setCarNotFound(false);
        filterCarsByPrice(priceFilter);
    }, [cars, priceFilter]);


    return (
        <div className="buyPage">
         <div className="buyPageA">
        <NavBar/>
            <h1>OUR FLEET OF CARS</h1>
            <p>Discover freedom on wheels! Rent your dream car effortlessly from our website today. Enjoy seamless booking, a wide range of vehicles, and budget-friendly options. Choose from our well-maintained fleet for any adventure or occasion. Experience the convenience of flexible rental periods, top-notch customer service, and competitive rates. Unlock the joy of driving your preferred car model, whether for a road trip, special event, or everyday commute. Your journey begins with us – secure, convenient, and tailored to your needs. Book now for an unforgettable ride and a hassle-free experience</p>
            </div>
            <SearchBar className="searchBar" onSearch={handleSearch} onClear={handleClear} />
            <PriceFilter onFilter={handlePriceFilter} onReset={() => setPriceFilter("All")} />
            <div id="carsHolderJk">
                {carNotFound ? (
                    <h1>No cars found matching the search query.</h1>
                ) : (
                    carsToDisplay.map((car, index) => {
                        return <CarItem car={car} key={car.key} index={index} />;
                    })
                )}
            </div>
        </div>
    );
}