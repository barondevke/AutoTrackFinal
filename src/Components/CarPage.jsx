import React from "react";
import { Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRoad, faGear, faGasPump, faGauge } from "@fortawesome/free-solid-svg-icons";


export default function CarPage({ cars }) {
    const { index } = useParams()
    const car = cars[index]


    /*Function for rating */
    function printStars(num) {
        let rating = ''
        for (let i = 1; i <= num; i++) {
            rating += '⭐'


        }
        return rating

    }


    return (
        <div className="allDetails">
            <img className="carImage" src={car.url}></img>
            <Row className="carInfo">
                <Col  >
                    <h1 className="carName">{car.year} {car.model} -{car.make} </h1>
                    <h2 className="carLocation">Location: {car.location}</h2>
                </Col>
                <Col className="carPrice"  >
                    <h1 className="carPriceValueSN">Ksh {car.price}</h1>
                    <h4 className="carRating">{printStars(car.rating)}</h4>
                </Col>
            </Row>
            <Row>
                <Col className="stats">
                    <Row>
                        <Col>
                            <h4><FontAwesomeIcon icon={faRoad} style={{ color: "#6f61c0", }} /> Kms Driven</h4>
                            <h4><FontAwesomeIcon icon={faGear} style={{ color: "#6f61c0", }} /> Transmission</h4>
                            <h4><FontAwesomeIcon icon={faGasPump} style={{ color: "#6f61c0", }} /> Fuel</h4>
                            <h4><FontAwesomeIcon icon={faGauge} style={{ color: "#6f61c0", }} /> Consumption</h4>

                        </Col>
                        <Col className="rightStats">
                            <h4>{car.kmsDriven}</h4>
                            <h4>{car.transmissionType}</h4>
                            <h4>{car.fuelType}</h4>
                            <h4>{car.fuelConsumption}</h4>

                        </Col>

                    </Row>


                </Col>
            </Row>
            <Row>
                <Col>
                    <button className="buyBtn">Buy Now</button>
                </Col>
            </Row>



        </div>
    )
}