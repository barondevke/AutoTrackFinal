import React from "react";
import { useNavigate } from "react-router-dom";

export default function CarItem({ car, index }) {

    const navigate = useNavigate();

    function getStars(rating) {
        const maxRating = 5;
        const blackStar = "★";
        const emptyStar = "☆";

        if (rating < 1 || rating > maxRating) {
            throw new Error("Rating should be between 1 and 5.");
        }

        const fullStars = blackStar.repeat(Math.floor(rating));
        const remainingStars = emptyStar.repeat(maxRating - Math.floor(rating));

        return fullStars + remainingStars;
    }

    return (
        <div id={car.id} key={car.id} className="carContainerJk" onClick={() => navigate(`/buy/${index}`)}>
            <img src={car.url} alt={car.model} />
            <div className="botCardInternalJk">
                <h2 style={{ color: `#2ECC71` }}>Ksh {car.price}</h2>
                <h2>{car.year} {car.make} {car.model}</h2>
                <h3><i class="fa-solid fa-location-dot"></i>  {car.location}</h3>
                <h3>{getStars(car.rating)}</h3>
            </div>
        </div>
    )
}