import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRoad, faGear, faGasPump, faGauge } from "@fortawesome/free-solid-svg-icons";




export default function CarPage({ cars }) {
    const { index } = useParams()
    const car = cars[index]
    const navigate = useNavigate()


    /*Function for rating */
    function printStars(num) {
        let rating = ''
        for (let i = 1; i <= num; i++) {
            rating += '⭐'


        }
        return rating

    }

    return (
        <div className="allDetailsSN">
       
            <img className="carImageSN" src={car.url}></img>
            <Row className="carInfoSN">
                <Col  >
                    <h1 className="carNameSN">{car.year} {car.model} -{car.make} </h1>
                    <h2 className="carLocationSN">Location: {car.location}</h2>
                </Col>
                <Col className="carPriceSN"  >
                    <h1 className="carPriceValueSN">Ksh {car.price}</h1>
                    <h4 className="carRatingSN">{printStars(car.rating)}</h4>
                </Col>
            </Row>
            <Row>
                <Col className="statsSN">
                    <Row>
                        <Col>
                            <h4><FontAwesomeIcon icon={faRoad} style={{ color: "#6f61c0", }} /> Kms Driven</h4>
                            <h4><FontAwesomeIcon icon={faGear} style={{ color: "#6f61c0", }} /> Transmission</h4>
                            <h4><FontAwesomeIcon icon={faGasPump} style={{ color: "#6f61c0", }} /> Fuel</h4>
                            <h4><FontAwesomeIcon icon={faGauge} style={{ color: "#6f61c0", }} /> Consumption</h4>

                        </Col>
                        <Col className="rightStatsSN">
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
                    <button onClick={() => navigate(`/payment`)} className="buyBtnSN">Buy Now</button>
                </Col>
            </Row>



        </div>
    )
}