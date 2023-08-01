import React from "react";
import { useParams } from "react-router-dom";

export default function CarPage ({cars}) {

    const { index } = useParams()
    const car = cars[index]

    return (
        <>
           <h1> You are viewing car page for </h1>
           <img src={car.url}/>
        </>
    )
}