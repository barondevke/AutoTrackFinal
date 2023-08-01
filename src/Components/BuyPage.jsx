import { useEffect } from "react";
import React  from "react";
import CarItem from "./CarItem";

export default function BuyPage ({cars}) {
    console.log(cars)
    return (
        <>
          <div id="carsHolder">
            {cars.map((car, index) => {
               return <CarItem car={car} key={car.key} index={index}/>
            })}
          </div>
        </>
    )
}